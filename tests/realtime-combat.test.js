"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const sandbox = { window: {} };
vm.runInNewContext(
  readFileSync(new URL("../js/17-realtime-combat.js", `file://${__filename}`), "utf8"),
  sandbox,
);
const combat = sandbox.window.EV_REALTIME_COMBAT;

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

test("vantagem elemental e crítico elevam dano; defender reduz dano sem zerá-lo", () => {
  const neutral = combat.damageFor({ atk: 50, def: 50, power: 60 });
  const advantage = combat.damageFor({ atk: 50, def: 50, power: 60, typeMultiplier: 2 });
  const guarded = combat.damageFor({ atk: 50, def: 50, power: 60, guarding: true });
  const critical = combat.damageFor({ atk: 50, def: 50, power: 60, crit: true });
  assert.ok(advantage > neutral);
  assert.ok(guarded < neutral);
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
