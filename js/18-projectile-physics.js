/* Regras puras do combate em tempo real: movimento de projéteis, papéis de golpes e impulso. */
(() => {
  "use strict";

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  function moveRole(family, move = {}, types = [], stage = 0) {
    const power = Math.max(0, Number(move.power) || 0);
    const affinities = Array.isArray(types) ? types : [];

    if (family === "skyfall") {
      const stonePet = affinities.includes("Pedra") && power >= 60;
      const evolvedFireOrVolt = Number(stage) >= 1 && power >= 70 && affinities.some((type) => type === "Brasa" || type === "Faísca");
      return stonePet || evolvedFireOrVolt ? "area" : "defense";
    }
    if (["roots", "eruption", "cyclone", "eclipse"].includes(family)) return "defense";
    if (family === "rush") return "charge";
    return "projectile";
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

  function knockbackVector(position, source, strength = 0.065) {
    const dx = (Number(position?.x) || 0) - (Number(source?.x) || 0);
    const dy = (Number(position?.y) || 0) - (Number(source?.y) || 0);
    const length = Math.hypot(dx, dy) || 1;
    const magnitude = clamp(Number(strength) || 0.065, 0, 0.16);
    return { x: (dx / length) * magnitude, y: (dy / length) * magnitude };
  }

  window.EV_REALTIME_PHYSICS = Object.freeze({ moveRole, projectileSpeed, projectileFlightMs, insideArea, knockbackVector });
})();
