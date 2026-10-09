"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");

const sandbox = { window: {} };
vm.runInNewContext(
  readFileSync(new URL("../js/16-safe-spawn.js", `file://${__filename}`), "utf8"),
  sandbox,
);
const spawn = sandbox.window.EV_SAFE_SPAWN;

const inBounds = (x, y) => x < 0 || y < 0 || x >= 12 || y >= 10;

test("mantém o ponto inicial recomendado dentro da praça quando ele está livre", () => {
  assert.deepEqual(
    { ...spawn.nearestWalkable({ x: 8, y: 10, width: 64, height: 48, isBlocked: () => false }) },
    { x: 8, y: 10 },
  );
});

test("recupera um save cujo tile foi ocupado por uma construção", () => {
  const house = new Set(["8,9", "8,8", "9,9", "8,10", "7,9"]);
  const result = spawn.nearestWalkable({
    x: 8,
    y: 9,
    width: 12,
    height: 10,
    isBlocked: (x, y) => inBounds(x, y) || house.has(`${x},${y}`),
  });
  assert.deepEqual({ ...result }, { x: 8, y: 7 });
});

test("nunca seleciona tile fora do mapa ou sem passagem", () => {
  assert.equal(
    spawn.nearestWalkable({ x: -100, y: 100, width: 3, height: 2, isBlocked: () => true }),
    null,
  );
  const result = spawn.nearestWalkable({
    x: -20,
    y: 1,
    width: 3,
    height: 2,
    isBlocked: (x, y) => inBounds(x, y) || (x === 0 && y === 1),
  });
  assert.ok(result && result.x >= 0 && result.x < 3 && result.y >= 0 && result.y < 2);
});

test("distribui três Pets atrás do jogador sem empilhar nem ocupar o tile dele", () => {
  const trail = spawn.followerTrail({
    x: 8,
    y: 10,
    count: 3,
    direction: 0,
    width: 64,
    height: 48,
    isBlocked: () => false,
  });
  assert.deepEqual(
    JSON.parse(JSON.stringify(trail.map((spot) => [spot.x, spot.y]))),
    [[8, 11], [8, 12], [8, 13]],
  );
});
