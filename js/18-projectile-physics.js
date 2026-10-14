/* Regras puras de combate local: projéteis, custos, clones, energia, colisão e impulso. */
(() => {
  "use strict";

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function moveRole(family, move = {}, types = [], stage = 0) {
    const power = Math.max(0, Number(move.power) || 0);
    const affinities = Array.isArray(types) ? types : [];
    if (family === "skyfall") {
      const stonePet = affinities.includes("Pedra") && power >= 60;
      const evolvedFireOrVolt = Number(stage) >= 1 && power >= 70 && affinities.some((type) => type === "Brasa" || type === "Faísca");
      return stonePet || evolvedFireOrVolt ? "area" : "projectile";
    }
    if (family === "rush") return "charge";
    return "projectile";
  }

  function movePowerCost(move = {}, attackSlot = 0) {
    return Number(attackSlot) >= 2 ? 60 : 20;
  }

  function playerMoveProfile(move = {}, attackSlot = 0) {
    const slot = Math.max(0, Math.floor(Number(attackSlot) || 0));
    if (slot === 0) return { cost: 0, staminaCost: 2, cooldownMs: 500, damageMultiplier: 0.62, basic: true };
    const heavy = slot >= 3;
    return { cost: heavy ? 60 : 20, staminaCost: heavy ? 8 : 4, cooldownMs: heavy ? 1380 : 760, damageMultiplier: 1, basic: false };
  }

  function resolveInstinctHit(damage, typeMultiplier = 1, shieldUses = 0, mirrorUses = 0) {
    const incoming = Math.max(0, Math.floor(Number(damage) || 0));
    const multiplier = Number.isFinite(Number(typeMultiplier)) ? Number(typeMultiplier) : 1;
    if (incoming <= 0) return { damage: 0, reflectedDamage: 0, shieldUses, mirrorUses, triggered: "" };
    if (shieldUses > 0) {
      const favorable = multiplier >= 0.95;
      return { damage: favorable ? 0 : Math.ceil(incoming * 0.5), reflectedDamage: 0, shieldUses: shieldUses - 1, mirrorUses, triggered: "escudo" };
    }
    if (mirrorUses > 0) {
      return { damage: incoming, reflectedDamage: Math.floor(incoming * (multiplier >= 0.95 ? 0.5 : 0.25)), shieldUses, mirrorUses: mirrorUses - 1, triggered: "espelho" };
    }
    return { damage: incoming, reflectedDamage: 0, shieldUses, mirrorUses, triggered: "" };
  }

  function projectileSpeed(velocity) {
    const stat = Math.max(0, Number(velocity) || 0);
    return clamp(0.45 + stat / 125, 0.68, 1.55);
  }

  function projectileFlightMs(distance, velocity) {
    const safeDistance = Math.max(0.06, Number(distance) || 0);
    return clamp((safeDistance / projectileSpeed(velocity)) * 1000, 220, 1800);
  }

  function insideArea(target, center, radius, width, height) {
    const safeWidth = Math.max(1, Number(width) || 1);
    const safeHeight = Math.max(1, Number(height) || 1);
    const scale = Math.min(safeWidth, safeHeight);
    const dx = ((Number(target?.x) || 0) - (Number(center?.x) || 0)) * safeWidth;
    const dy = ((Number(target?.y) || 0) - (Number(center?.y) || 0)) * safeHeight;
    return Math.hypot(dx, dy) <= Math.max(0, Number(radius) || 0) * scale;
  }

  function bodyDistance(a, b, width, height) {
    const safeWidth = Math.max(1, Number(width) || 1);
    const safeHeight = Math.max(1, Number(height) || 1);
    const scale = Math.min(safeWidth, safeHeight);
    return Math.hypot(((Number(a?.x) || 0) - (Number(b?.x) || 0)) * safeWidth / scale,
      ((Number(a?.y) || 0) - (Number(b?.y) || 0)) * safeHeight / scale);
  }

  function separateBodies(a, b, minDistance, width, height) {
    const safeWidth = Math.max(1, Number(width) || 1);
    const safeHeight = Math.max(1, Number(height) || 1);
    const scale = Math.min(safeWidth, safeHeight);
    const dx = ((Number(a?.x) || 0) - (Number(b?.x) || 0)) * safeWidth / scale;
    const dy = ((Number(a?.y) || 0) - (Number(b?.y) || 0)) * safeHeight / scale;
    const distance = Math.hypot(dx, dy);
    const required = Math.max(0, Number(minDistance) || 0);
    if (distance >= required) return { a: { ...a }, b: { ...b }, distance, separated: false };
    const length = distance || 1;
    const nx = distance ? dx / length : -1;
    const ny = distance ? dy / length : 0;
    const push = (required - distance) / 2 + 0.001;
    return {
      a: { x: a.x + nx * push * scale / safeWidth, y: a.y + ny * push * scale / safeHeight },
      b: { x: b.x - nx * push * scale / safeWidth, y: b.y - ny * push * scale / safeHeight },
      distance: required + 0.002,
      separated: true,
    };
  }

  function energyProfile(stats = {}, ownTypes = [], opposingTypes = [], arena = {}, typeMultiplier = 1) {
    const affinities = Array.isArray(ownTypes) ? ownTypes : [];
    const base = {
      stamina: clamp(4.5 + (Number(stats.vel) || 0) * 0.055 + (Number(stats.def) || 0) * 0.025, 5, 15),
      power: clamp(8 + (Number(stats.atk) || 0) * 0.055 + (Number(stats.vel) || 0) * 0.03, 8, 15.5),
      maxStamina: clamp(82 + ((Number(stats.vel) || 0) + (Number(stats.def) || 0)) * 0.16, 92, 126),
    };
    const arenaFavor = affinities.includes(arena?.focus) ? 1.12 : 1;
    const matchup = Number(typeMultiplier) > 1.05 ? 1.12 : Number(typeMultiplier) < 0.95 ? 0.90 : 1;
    const arenaStamina = Number(arena?.staminaRegen) || 1;
    const arenaPower = Number(arena?.powerRegen) || 1;
    const staminaBoost = Math.max(1, ...affinities.map((type) => Number(arena?.boosts?.[type]?.staminaRegen) || 1));
    const powerBoost = Math.max(1, ...affinities.map((type) => Number(arena?.boosts?.[type]?.powerRegen) || 1));
    const staminaPenalty = Math.min(1, ...affinities.map((type) => Number(arena?.penalties?.[type]?.staminaRegen) || 1));
    const powerPenalty = Math.min(1, ...affinities.map((type) => Number(arena?.penalties?.[type]?.powerRegen) || 1));
    return {
      staminaRegen: clamp(base.stamina * arenaStamina * arenaFavor * staminaBoost * staminaPenalty * matchup, 3, 20),
      powerRegen: clamp(base.power * arenaPower * arenaFavor * powerBoost * powerPenalty * matchup, 5, 20),
      maxStamina: base.maxStamina,
      affinityMultiplier: arenaFavor,
      matchupMultiplier: matchup,
      opponentTypes: Array.isArray(opposingTypes) ? opposingTypes : [],
    };
  }

  function cloneCount(level) {
    return Math.round(clamp(3 + Math.floor(Math.max(1, Number(level) || 1) / 40), 3, 5));
  }

  function cloneProfile(index, baseMaxHp) {
    const ordinal = Math.max(0, Number(index) || 0);
    return {
      isClone: true,
      maxHp: Math.max(1, Math.floor((Number(baseMaxHp) || 1) * (0.46 + Math.min(ordinal, 2) * 0.035))),
      atkMultiplier: 0.66 + Math.min(ordinal, 2) * 0.035,
      defMultiplier: 0.74 + Math.min(ordinal, 2) * 0.035,
      velMultiplier: 1.08 + Math.min(ordinal, 2) * 0.025,
      spriteScale: 0.55,
    };
  }

  function combatStyle(types = [], stats = {}) {
    const affinities = Array.isArray(types) ? types : [];
    const velocity = Number(stats.vel) || 0;
    const defense = Number(stats.def) || 0;
    if (affinities.includes("Pedra") || defense >= velocity * 1.22) return "bulwark";
    if (affinities.includes("Sombra") || affinities.includes("Maré") || velocity >= 72) return "skirmisher";
    if (affinities.includes("Brasa") || affinities.includes("Faísca")) return "aggressive";
    return "balanced";
  }

  function knockbackVector(position, source, strength = 0.065, width = 1, height = 1) {
    const safeWidth = Math.max(1, Number(width) || 1);
    const safeHeight = Math.max(1, Number(height) || 1);
    const dx = ((Number(position?.x) || 0) - (Number(source?.x) || 0)) * safeWidth;
    const dy = ((Number(position?.y) || 0) - (Number(source?.y) || 0)) * safeHeight;
    const length = Math.hypot(dx, dy) || 1;
    const magnitude = clamp(Number(strength) || 0.065, 0, 0.16);
    const scale = Math.min(safeWidth, safeHeight);
    return { x: ((dx / length) * magnitude * scale) / safeWidth, y: ((dy / length) * magnitude * scale) / safeHeight };
  }

  window.EV_REALTIME_PHYSICS = Object.freeze({
    moveRole, movePowerCost, playerMoveProfile, resolveInstinctHit, projectileSpeed, projectileFlightMs, insideArea,
    bodyDistance, separateBodies, energyProfile, cloneCount, cloneProfile, combatStyle, knockbackVector,
  });
})();
