/* Utilitários puros para entradas seguras no mapa e formação inicial dos seguidores. */
(() => {
  "use strict";

  const DIRECTIONS = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const BACK_BY_DIR = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  const SAFE_VILLAGE_SPAWN = Object.freeze({ x: 8, y: 10, dir: 0 });

  function isInsideVillageHouse(x, y) {
    const tileX = Math.floor(Number(x));
    const tileY = Math.floor(Number(y));
    if (!Number.isFinite(tileX) || !Number.isFinite(tileY) || tileY < 3 || tileY > 5) return false;
    return (tileX >= 3 && tileX <= 6) || (tileX >= 10 && tileX <= 13);
  }

  function repairVillageHouseSpawn(save) {
    if (!save || (save.worldId && save.worldId !== "main") || !isInsideVillageHouse(save.px, save.py)) return false;
    save.px = SAFE_VILLAGE_SPAWN.x;
    save.py = SAFE_VILLAGE_SPAWN.y;
    save.dir = SAFE_VILLAGE_SPAWN.dir;
    save.worldPositions ||= {};
    save.worldPositions.main = { ...SAFE_VILLAGE_SPAWN };
    save.expHome = { ...SAFE_VILLAGE_SPAWN };
    return true;
  }

  function nearestWalkable({ x, y, width, height, isBlocked, neighborOrder } = {}) {
    const mapWidth = Math.floor(Number(width));
    const mapHeight = Math.floor(Number(height));
    if (mapWidth < 1 || mapHeight < 1 || typeof isBlocked !== "function") return null;

    const startX = Math.max(0, Math.min(mapWidth - 1, Math.floor(Number(x) || 0)));
    const startY = Math.max(0, Math.min(mapHeight - 1, Math.floor(Number(y) || 0)));
    const directions = Array.isArray(neighborOrder) && neighborOrder.length === 4
      ? neighborOrder
      : DIRECTIONS;
    const queue = [[startX, startY]];
    const visited = new Set([`${startX},${startY}`]);

    for (let cursor = 0; cursor < queue.length; cursor++) {
      const [cx, cy] = queue[cursor];
      if (!isBlocked(cx, cy)) return { x: cx, y: cy };
      for (const direction of directions) {
        const dx = Math.trunc(Number(direction?.[0]) || 0);
        const dy = Math.trunc(Number(direction?.[1]) || 0);
        if (Math.abs(dx) + Math.abs(dy) !== 1) continue;
        const nx = cx + dx;
        const ny = cy + dy;
        const key = `${nx},${ny}`;
        if (nx < 0 || ny < 0 || nx >= mapWidth || ny >= mapHeight || visited.has(key)) continue;
        visited.add(key);
        queue.push([nx, ny]);
      }
    }
    return null;
  }

  function followerTrail({ x, y, count = 3, direction = 2, width, height, isBlocked } = {}) {
    const playerX = Math.floor(Number(x));
    const playerY = Math.floor(Number(y));
    const total = Math.max(0, Math.min(3, Math.floor(Number(count) || 0)));
    if (total === 0 || !Number.isFinite(playerX) || !Number.isFinite(playerY) || typeof isBlocked !== "function") return [];

    const back = BACK_BY_DIR[Math.max(0, Math.min(3, Math.floor(Number(direction) || 0)))] || BACK_BY_DIR[2];
    const occupied = new Set([`${playerX},${playerY}`]);
    const trail = [];
    let anchor = { x: playerX, y: playerY };

    for (let i = 0; i < total; i++) {
      const targetX = anchor.x + back[0];
      const targetY = anchor.y + back[1];
      const spot = nearestWalkable({
        x: targetX,
        y: targetY,
        width,
        height,
        isBlocked: (tx, ty) => occupied.has(`${tx},${ty}`) || isBlocked(tx, ty),
      });
      if (!spot) break;
      occupied.add(`${spot.x},${spot.y}`);
      trail.push(spot);
      anchor = spot;
    }
    return trail;
  }

  window.EV_SAFE_SPAWN = Object.freeze({
    nearestWalkable,
    followerTrail,
    isInsideVillageHouse,
    repairVillageHouseSpawn,
  });
})();
