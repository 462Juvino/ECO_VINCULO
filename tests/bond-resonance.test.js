"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const sandbox = { window: {} };
vm.runInNewContext(
  readFileSync(new URL("../js/15-bond-resonance.js", `file://${__filename}`), "utf8"),
  sandbox,
);
const resonance = sandbox.window.EV_RESONANCE;

test("alinha golpes com tipos do Pet ou afinidades do treinador", () => {
  assert.equal(resonance.qualifies("Brasa", ["Brasa"], []), true);
  assert.equal(resonance.qualifies("Flora", [], ["Flora"]), true);
  assert.equal(resonance.qualifies("Maré", ["Brasa"], ["Flora"]), false);
});

test("acumula carga alinhada sem ultrapassar 100", () => {
  assert.deepEqual(
    { ...resonance.step({ charge: 0, aligned: true }) },
    { charge: 30, resonant: false, multiplier: 1, gained: 30 },
  );
  assert.equal(resonance.step({ charge: 90, aligned: true }).charge, 100);
  assert.equal(resonance.step({ charge: 0, aligned: true, bond: 100 }).charge, 40);
});

test("consome carga completa no próximo golpe alinhado e aplica 1.18x", () => {
  assert.deepEqual(
    { ...resonance.step({ charge: 100, aligned: true }) },
    { charge: 0, resonant: true, multiplier: 1.18, gained: 0 },
  );
});

test("preserva carga completa enquanto não houver alinhamento", () => {
  assert.deepEqual(
    { ...resonance.step({ charge: 100, aligned: false }) },
    { charge: 100, resonant: false, multiplier: 1, gained: 0 },
  );
});

test("aplica o mesmo multiplicador de dano inteiro e não cria dano do nada", () => {
  assert.equal(resonance.applyDamage(100, true), 118);
  assert.equal(resonance.applyDamage(5, true), 6);
  assert.equal(resonance.applyDamage(100, false), 100);
  assert.equal(resonance.applyDamage(0, true), 0);
});

test("limita valores de carga inválidos e fora da faixa", () => {
  assert.equal(resonance.step({ charge: 250, aligned: false }).charge, 100);
  assert.equal(resonance.step({ charge: -10, aligned: false }).charge, 0);
});
