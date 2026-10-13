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
const physics = sandbox.window.EV_REALTIME_PHYSICS;
const combat = sandbox.window.EV_REALTIME_COMBAT;

test("todo golpe permanece ofensivo: projétil, investida ou área restrita", () => {
  assert.equal(physics.moveRole("beam", { power: 50 }, ["Faísca"], 0), "projectile");
  assert.equal(physics.moveRole("spit", { power: 50 }, ["Maré"], 0), "projectile");
  assert.equal(physics.moveRole("rush", { power: 50 }, ["Flora"], 0), "charge");
  for (const family of ["roots", "eruption", "cyclone", "eclipse", "flood", "beam"]) {
    assert.notEqual(physics.moveRole(family, { power: 80 }, ["Flora"], 2), "defense");
  }
});

test("só quedas do céu selecionadas viram golpes ofensivos de área", () => {
  assert.equal(physics.moveRole("skyfall", { power: 60 }, ["Pedra"], 0), "area");
  assert.equal(physics.moveRole("skyfall", { power: 80 }, ["Brasa"], 0), "projectile");
  assert.equal(physics.moveRole("skyfall", { power: 70 }, ["Brasa"], 1), "area");
  assert.equal(physics.moveRole("skyfall", { power: 75 }, ["Faísca"], 2), "area");
  assert.equal(physics.moveRole("skyfall", { power: 90 }, ["Flora"], 3), "projectile");
  assert.equal(physics.moveRole("skyfall", { power: 55 }, ["Pedra"], 2), "projectile");
});

test("dois primeiros golpes custam 20% de poder e os pesados custam 60%", () => {
  assert.equal(physics.movePowerCost({ power: 90 }, 0), 20);
  assert.equal(physics.movePowerCost({ power: 40 }, 1), 20);
  assert.equal(physics.movePowerCost({ power: 45 }, 2), 60);
  assert.equal(physics.movePowerCost({ power: 120 }, 4), 60);
});

test("velocidade do Pet reduz o tempo de voo do projétil", () => {
  assert.ok(physics.projectileSpeed(95) > physics.projectileSpeed(35));
  assert.ok(physics.projectileFlightMs(0.65, 95) < physics.projectileFlightMs(0.65, 35));
  assert.ok(physics.projectileFlightMs(0.75, 60) > physics.projectileFlightMs(0.35, 60));
});

test("o círculo desenhado e a colisão usam o mesmo raio físico em viewport estreito", () => {
  assert.equal(physics.insideArea({ x: 0.5, y: 0.575 }, { x: 0.5, y: 0.5 }, 0.1, 390, 520), true);
  assert.equal(physics.insideArea({ x: 0.61, y: 0.5 }, { x: 0.5, y: 0.5 }, 0.1, 390, 520), false);
  assert.equal(physics.insideArea({ x: 0.5, y: 0.58 }, { x: 0.5, y: 0.5 }, 0.1, 390, 520), false);
});

test("impulso do impacto empurra para longe e mantém a mesma distância física em celular retrato/paisagem", () => {
  const push = physics.knockbackVector({ x: 0.7, y: 0.5 }, { x: 0.3, y: 0.5 }, 0.08);
  assert.ok(push.x > 0);
  assert.equal(push.y, 0);
  assert.ok(Math.abs(Math.hypot(push.x, push.y) - 0.08) < 1e-9);
  for (const [width, height] of [[390, 844], [844, 390]]) {
    const point = { x: 0.5, y: 0.5 };
    const diagonal = physics.knockbackVector(point, { x: 0.45, y: 0.45 }, 0.08, width, height);
    assert.ok(Math.abs(physics.bodyDistance(point, { x: point.x + diagonal.x, y: point.y + diagonal.y }, width, height) - 0.08) < 1e-9);
  }
});

test("separação física impede que os dois Pets se sobreponham em arena vertical e horizontal", () => {
  for (const [width, height] of [[390, 844], [844, 390]]) {
    const a = { x: 0.5, y: 0.5 };
    const b = { x: 0.5, y: 0.5 };
    const result = physics.separateBodies(a, b, 0.22, width, height);
    assert.equal(result.separated, true);
    assert.ok(physics.bodyDistance(result.a, result.b, width, height) >= 0.22);
  }
});

test("clones rogue-like aparecem em ondas de 3 a 5 com menos vida e ataque que o original", () => {
  assert.equal(physics.cloneCount(1), 3);
  assert.equal(physics.cloneCount(50), 4);
  assert.equal(physics.cloneCount(95), 5);
  const clone = physics.cloneProfile(0, 100);
  assert.equal(clone.isClone, true);
  assert.ok(clone.maxHp < 60);
  assert.ok(clone.atkMultiplier < 1);
  assert.ok(clone.defMultiplier < 1);
  assert.ok(clone.velMultiplier > 1);
});

test("regeneração varia com os atributos, o confronto de tipos e a arena", () => {
  const slow = physics.energyProfile({ atk: 40, def: 40, vel: 25 }, ["Brasa"], ["Flora"], { focus: "Maré", staminaRegen: 1, powerRegen: 1 }, 1);
  const fast = physics.energyProfile({ atk: 40, def: 40, vel: 90 }, ["Brasa"], ["Flora"], { focus: "Maré", staminaRegen: 1, powerRegen: 1 }, 1);
  const favored = physics.energyProfile({ atk: 40, def: 40, vel: 25 }, ["Flora"], ["Brasa"], { focus: "Flora", staminaRegen: 1.2, powerRegen: 1.1 }, 2);
  const biomeBoost = physics.energyProfile({ atk: 40, def: 40, vel: 25 }, ["Maré"], ["Brasa"], { focus: "Sombra", boosts: { Maré: { staminaRegen: 1.3, powerRegen: 1.25 } } }, 1);
  const biomePenalty = physics.energyProfile({ atk: 40, def: 40, vel: 25 }, ["Maré"], ["Brasa"], { focus: "Sombra", penalties: { Maré: { staminaRegen: 0.8, powerRegen: 0.75 } } }, 1);
  assert.ok(fast.staminaRegen > slow.staminaRegen);
  assert.ok(favored.staminaRegen > slow.staminaRegen);
  assert.ok(favored.powerRegen > slow.powerRegen);
  assert.ok(biomeBoost.staminaRegen > slow.staminaRegen);
  assert.ok(biomeBoost.powerRegen > slow.powerRegen);
  assert.ok(biomePenalty.staminaRegen < slow.staminaRegen);
  assert.ok(biomePenalty.powerRegen < slow.powerRegen);
  assert.ok(favored.maxStamina >= 92);
});

test("IA escolhe golpes disponíveis e adapta a decisão ao estilo e ao confronto", () => {
  const profiles = [
    { move: { name: "leve", power: 35, type: "Brasa" }, role: "projectile" },
    { move: { name: "investida", power: 55, type: "Faísca" }, role: "charge" },
    { move: { name: "pesado", power: 95, type: "Brasa" }, role: "projectile" },
  ];
  const aggressive = combat.chooseAiMove(profiles, 80, 80, "aggressive", 0.3, (type) => type === "Faísca" ? 2 : 1);
  const skirmisher = combat.chooseAiMove(profiles, 80, 80, "skirmisher", 0.3, () => 1);
  assert.equal(aggressive.move.type, "Faísca");
  assert.equal(skirmisher.move.name, "leve");
  assert.equal(combat.chooseAiMove(profiles, 10, 0, "balanced", 0.5), null);
});
