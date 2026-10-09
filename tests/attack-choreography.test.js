"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const element = (type, props = {}, key = null) => ({ type, props, key });
const sandbox = {
  window: { matchMedia: () => ({ matches: false }), nu: {} },
  N: element,
  O: element,
};
vm.runInNewContext(
  readFileSync(new URL("../js/14-attack-choreography.js", `file://${__filename}`), "utf8"),
  sandbox,
);
const choreography = sandbox.window.EV_ATTACK_CHOREOGRAPHY;

function criticalScene() {
  return choreography.plan({
    attacker: { id: "qa-fire-pet", name: "Pet de QA", types: ["Brasa"], stage: 3, feature: "fire-crest" },
    move: { id: "flame-burst", name: "Explosão Ígnea", type: "Brasa" },
    x0: 0.2,
    y0: 0.7,
    x1: 0.8,
    y1: 0.4,
    width: 360,
    height: 640,
    damage: 42,
    crit: true,
    hit: true,
    showDamage: true,
    runId: "qa",
  });
}

test("o impacto gera preparação, halo e partículas ajustados ao Pet/estágio", () => {
  const scene = criticalScene();
  const tree = choreography.View({ scene });
  const children = tree.props.children;
  const classes = children.map((child) => child?.props?.className || "");
  assert.ok(classes.some((name) => name.includes("ev-vfx-windup-flame")));
  assert.ok(classes.includes("ev-vfx-impact-halo"));
  assert.equal(classes.filter((name) => name.includes("ev-vfx-impact-particle")).length, 13);
  assert.equal(tree.props.className, `ev-attack-vfx ev-attack-vfx-${scene.family}`);
});

test("mantém o número de dano e o crítico dentro do mesmo evento visual de impacto", () => {
  const scene = criticalScene();
  const tree = choreography.View({ scene });
  const wrap = tree.props.children.find((child) => child?.props?.className?.includes("ev-vfx-impact-wrap"));
  const classes = wrap.props.children.map((child) => child?.props?.className || "");
  const damage = wrap.props.children.find((child) => child?.props?.className === "ev-vfx-damage-text");
  assert.ok(classes.includes("ev-vfx-crit-text"));
  assert.equal(damage.props.children, "-42");
  assert.equal(scene.impactAtMs > 0, true);
});
