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

test("corrige antes do mapa um save legado dentro da primeira casa da Vila", () => {
  const save = {
    worldId: "main",
    px: 5,
    py: 5,
    dir: 2,
    level: 24,
    party: [{ sp: "embercub", level: 24 }],
    worldPositions: { main: { x: 5, y: 5, dir: 2 } },
    expHome: { x: 5, y: 5, dir: 2 },
  };
  assert.equal(spawn.repairVillageHouseSpawn(save), true);
  assert.deepEqual([save.px, save.py, save.dir], [8, 10, 0]);
  assert.deepEqual({ ...save.worldPositions.main }, { x: 8, y: 10, dir: 0 });
  assert.deepEqual({ ...save.expHome }, { x: 8, y: 10, dir: 0 });
  assert.equal(save.level, 24);
  assert.equal(save.party[0].sp, "embercub");
});

test("corrige também a segunda casa, sem mover posições legítimas ou outros mundos", () => {
  const secondHouse = { worldId: "main", px: 12, py: 4 };
  assert.equal(spawn.repairVillageHouseSpawn(secondHouse), true);
  assert.deepEqual([secondHouse.px, secondHouse.py], [8, 10]);
  const outside = { worldId: "main", px: 8, py: 10 };
  const expansion = { worldId: "tata", px: 5, py: 5 };
  assert.equal(spawn.repairVillageHouseSpawn(outside), false);
  assert.equal(spawn.repairVillageHouseSpawn(expansion), false);
});

test("a normalização central do save aciona a recuperação antes da montagem do mapa", () => {
  const worldData = readFileSync(new URL("../js/06-world-data.js", `file://${__filename}`), "utf8");
  const normalizeStart = worldData.indexOf("function M8(n)");
  const normalizeEnd = worldData.indexOf("function CQ(n)", normalizeStart);
  assert.notEqual(normalizeStart, -1);
  assert.notEqual(normalizeEnd, -1);
  assert.match(worldData.slice(normalizeStart, normalizeEnd), /repairVillageHouseSpawn/);
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
