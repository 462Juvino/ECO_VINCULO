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
const physics = sandbox.window.EV_REALTIME_PHYSICS;

test("projéteis, investida e defesas de chão recebem papéis coerentes", () => {
  assert.equal(physics.moveRole("beam", { power: 50 }, ["Faísca"], 0), "projectile");
  assert.equal(physics.moveRole("spit", { power: 50 }, ["Maré"], 0), "projectile");
  assert.equal(physics.moveRole("rush", { power: 50 }, ["Flora"], 0), "charge");
  for (const family of ["roots", "eruption", "cyclone", "eclipse"]) {
    assert.equal(physics.moveRole(family, { power: 80 }, ["Flora"], 2), "defense");
  }
});

test("ataque que cai do céu só vira área para alguns Pets e golpes potentes", () => {
  assert.equal(physics.moveRole("skyfall", { power: 60 }, ["Pedra"], 0), "area");
  assert.equal(physics.moveRole("skyfall", { power: 80 }, ["Brasa"], 0), "defense");
  assert.equal(physics.moveRole("skyfall", { power: 70 }, ["Brasa"], 1), "area");
  assert.equal(physics.moveRole("skyfall", { power: 75 }, ["Faísca"], 2), "area");
  assert.equal(physics.moveRole("skyfall", { power: 90 }, ["Flora"], 3), "defense");
  assert.equal(physics.moveRole("skyfall", { power: 55 }, ["Pedra"], 2), "defense");
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

test("impulso do impacto empurra o alvo para longe do atacante", () => {
  const push = physics.knockbackVector({ x: 0.7, y: 0.5 }, { x: 0.3, y: 0.5 }, 0.08);
  assert.ok(push.x > 0);
  assert.equal(push.y, 0);
  assert.ok(Math.abs(Math.hypot(push.x, push.y) - 0.08) < 1e-9);
});
