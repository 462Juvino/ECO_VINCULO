"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const sandbox = { window: {} };
vm.runInNewContext(
  readFileSync(new URL("../js/18-projectile-physics.js", `file://${__filename}`), "utf8"),
  sandbox,
);
vm.runInNewContext(
  readFileSync(new URL("../js/17-realtime-combat.js", `file://${__filename}`), "utf8"),
  sandbox,
);
const combat = sandbox.window.EV_REALTIME_COMBAT;

test("a preferência de modo é separada do save e aceita somente modos reconhecidos", () => {
  const values = new Map();
  const prefsSandbox = {
    window: {},
    localStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
    },
  };
  vm.runInNewContext(
    readFileSync(new URL("../js/17-realtime-combat.js", `file://${__filename}`), "utf8"),
    prefsSandbox,
  );
  const preferences = prefsSandbox.window.EV_BATTLE_PREFERENCES;
  assert.equal(preferences.get(), "realtime");
  assert.equal(preferences.set("classic"), true);
  assert.equal(preferences.get(), "classic");
  assert.equal(preferences.set("unknown"), false);
  assert.deepEqual(Array.from(values.keys()), ["eco-vinculo-battle-mode-v1"]);
});

test("escolhe uma arena reconhecível para floresta, água e caverna", () => {
  assert.equal(combat.arenaFor("grass").name, "Clareira do Vínculo");
  assert.equal(combat.arenaFor("water").name, "Anel das Marés");
  assert.equal(combat.arenaFor("cave").name, "Círculo da Caverna Ecoante");
  assert.equal(combat.arenaFor(undefined).id, "grass");
});

test("a arena altera ataque, defesa, velocidade e regeneração conforme o tipo", () => {
  const base = { maxHp: 60, atk: 50, def: 50, vel: 50 };
  const forest = combat.arenaStats(base, ["Flora"], combat.arenaFor("grass"));
  const waterFire = combat.arenaStats(base, ["Brasa"], combat.arenaFor("water"));
  const caveStone = combat.arenaStats(base, ["Pedra"], combat.arenaFor("cave"));
  const secondaryMaré = combat.arenaStats(base, ["Sombra", "Maré"], combat.arenaFor("water"));
  assert.equal(forest.stats.atk, 55);
  assert.equal(forest.stats.vel, 55);
  assert.equal(forest.favored, true);
  assert.ok(forest.staminaRegen > 1);
  assert.equal(waterFire.stats.atk, 45);
  assert.equal(waterFire.hindered, true);
  assert.equal(waterFire.powerRegen < 1, true);
  assert.equal(caveStone.stats.def, 56);
  assert.equal(caveStone.favored, true);
  assert.equal(secondaryMaré.stats.def, 56);
  assert.equal(secondaryMaré.stats.vel, 54);
});

test("vantagem elemental e crítico elevam dano; não existe mitigação por modo defesa", () => {
  const neutral = combat.damageFor({ atk: 50, def: 50, power: 60 });
  const advantage = combat.damageFor({ atk: 50, def: 50, power: 60, typeMultiplier: 2 });
  const guarded = combat.damageFor({ atk: 50, def: 50, power: 60, guarding: true });
  const critical = combat.damageFor({ atk: 50, def: 50, power: 60, crit: true });
  assert.ok(advantage > neutral);
  assert.equal(guarded, neutral);
  assert.ok(critical > neutral);
  assert.equal(combat.damageFor({ atk: 0, def: 999, power: 0, typeMultiplier: 0 }), 1);
});

test("o campo de combate bloqueia bordas e obstáculos nos três biomas", () => {
  for (const biome of ["grass", "water", "cave"]) {
    const arena = combat.arenaFor(biome);
    const obstacle = arena.field.obstacles[0];
    assert.equal(combat.canOccupy(obstacle.x + obstacle.w / 2, obstacle.y + obstacle.h / 2, arena), false);
    assert.equal(combat.canOccupy(0.52, 0.52, arena), true);
    assert.equal(combat.canOccupy(0.01, 0.5, arena), false);
    assert.equal(arena.field.bounds.minX, 0.02);
    assert.equal(arena.field.bounds.maxX, 0.98);
    assert.equal(arena.field.bounds.minY, 0.02);
    assert.equal(arena.field.bounds.maxY, 0.98);
  }
});

test("movimento e esquiva respeitam as paredes e não atravessam rochas/vegetação", () => {
  const arena = combat.arenaFor("grass");
  const obstacle = arena.field.obstacles[0];
  const y = obstacle.y + obstacle.h / 2;
  const start = { x: obstacle.x - 0.12, y };
  const moved = combat.moveInArena(start, 0.45, 0, arena);
  assert.ok(moved.x <= obstacle.x - 0.04, `atravessou o obstáculo: ${moved.x}`);
  assert.equal(moved.y, y);
  const slid = combat.moveInArena(start, 0.22, 0.16, arena);
  assert.ok(combat.canOccupy(slid.x, slid.y, arena));
  const edge = combat.moveInArena({ x: 0.5, y: 0.5 }, 2, 0, arena);
  assert.ok(edge.x < arena.field.bounds.maxX);
  assert.ok(combat.canOccupy(edge.x, edge.y, arena));
});

test("sinais de ataque escalam com o perigo e expõem o raio aplicado no impacto", () => {
  assert.ok(combat.telegraphRadius(70, true) > combat.telegraphRadius(70, false));
  assert.ok(combat.telegraphRadius(70, false) > combat.telegraphRadius(35, false));
  assert.ok(combat.telegraphRadius(35, true) > combat.telegraphRadius(35, false));
  assert.ok(combat.telegraphRadius(70, true) < 0.3, "o raio pesado ainda deve permitir esquiva numa arena limitada");
});

test("o seletor preserva todos os golpes disponíveis, inclusive o quinto", () => {
  const moves = ["impacto", "faísca", "onda", "raiz", "assinatura"];
  assert.deepEqual(combat.availableMoves({ moves }), moves);
  assert.equal(combat.availableMoves({ moves: null }).length, 0);
});

test("encontro selvagem rogue-like termina com o Pet original após clones menores", () => {
  const sequence = combat.rogueSequence("embercub", 50);
  assert.equal(sequence.length, 5);
  assert.ok(Array.from(sequence.slice(0, 4)).every((foe) => foe.sp === "embercub" && foe.isClone && !foe.isPrime));
  assert.equal(sequence[4].sp, "embercub");
  assert.equal(sequence[4].isClone, false);
  assert.equal(sequence[4].isPrime, true);
  assert.ok(sequence[4].level > sequence[0].level);
});

test("a quantidade de clones escala com o nível e a formação simultânea respeita arena e espaçamento", () => {
  assert.equal(combat.rogueSequence("leafit", 1).length, 4);
  assert.equal(combat.rogueSequence("leafit", 90).length, 6);
  for (const biome of ["grass", "water", "cave"]) {
    const arena = combat.arenaFor(biome);
    const formation = combat.rogueFormation(4, arena);
    assert.equal(formation.minions.length, 4, `${biome}: deve posicionar os quatro ecos juntos`);
    assert.ok(formation.minions.every((point) => combat.canOccupy(point.x, point.y, arena, 0.065)));
    for (let i = 0; i < formation.minions.length; i++) {
      for (let j = i + 1; j < formation.minions.length; j++) {
        assert.ok(sandbox.window.EV_REALTIME_PHYSICS.bodyDistance(formation.minions[i], formation.minions[j], 390, 640) >= 0.16);
      }
    }
  }
});


test("analógico tem zona morta, velocidade gradual e vetor limitado no diagonal", () => {
  const centered = combat.vectorForStick(0.06, 0.06);
  assert.equal(centered.x, 0);
  assert.equal(centered.y, 0);
  const partial = combat.vectorForStick(0.56, 0);
  assert.ok(partial.x > 0 && partial.x < 1);
  assert.equal(partial.y, 0);
  const full = combat.vectorForStick(2, 0);
  assert.ok(Math.abs(full.x - 1) < 1e-9);
  const diagonal = combat.vectorForStick(1, 1);
  assert.ok(Math.hypot(diagonal.x, diagonal.y) <= 1 + 1e-9);
});

test("somente ataques fortes que acertam ou atingem o chão deixam cicatrizes na arena", () => {
  assert.equal(combat.shouldLeaveArenaScar({ power: 57, damage: 50 }), false);
  assert.equal(combat.shouldLeaveArenaScar({ power: 58, damage: 0 }), false);
  assert.equal(combat.shouldLeaveArenaScar({ power: 58, damage: 24 }), true);
  assert.equal(combat.shouldLeaveArenaScar({ power: 58, groundImpact: true }), true);
  assert.equal(combat.shouldLeaveArenaScar({ power: 30, crit: true, groundImpact: true }), true);
});

test("Fusão/instintos mantêm usos mesmo em afinidades de saves antigos sem metadados completos", () => {
  const uses = combat.normalizedInstinctUses(
    { afinidades: ["fusao", "fusao-instintiva", "espelho"] },
    { espelho: { usosPorBatalha: 2 } },
  );
  assert.equal(uses.fusao, 1);
  assert.equal(uses["fusao-instintiva"], 1);
  assert.equal(uses.espelho, 2);
  assert.equal(uses.escudo, 0);
});

test("a batalha realtime continua concedendo XP e chamando a evolução do save de campanha", () => {
  const combatSource = readFileSync(new URL("../js/17-realtime-combat.js", `file://${__filename}`), "utf8");
  const bridgeSource = readFileSync(new URL("../js/09-battle.js", `file://${__filename}`), "utf8");
  assert.match(combatSource, /updateXpAndEvolution\(defeated, s\.playerIndex, defeated\?\.isClone \? 0\.24 : 1\)/);
  assert.match(combatSource, /const evolvedId = evolve\(pet, gs\.current\);/);
  assert.match(combatSource, /registerEvolution\?\.\(gs\.current, evolvedId, pet\);/);
  assert.match(bridgeSource, /evolve: \(pet, save\) => \{[\s\S]{0,350}return H8\(pet\.sp, z0\(save\)\);/);
});
