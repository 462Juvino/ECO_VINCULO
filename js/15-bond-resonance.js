/*
 * Eco Vínculo — Ressonância do Vínculo
 * Recurso transitório de batalha: fortalece golpes existentes, sem gravar no save.
 */
(() => {
  "use strict";

  const CAP = 100;
  const BURST_MULTIPLIER = 1.18;

  function qualifies(moveType, creatureTypes = [], playerAffinities = []) {
    if (!moveType) return false;
    return creatureTypes.includes(moveType) || playerAffinities.includes(moveType);
  }

  function step({ charge = 0, aligned = false, bond = 0 } = {}) {
    const before = Math.max(0, Math.min(CAP, Number(charge) || 0));
    if (!aligned) return { charge: before, resonant: false, multiplier: 1, gained: 0 };
    if (before >= CAP)
      return { charge: 0, resonant: true, multiplier: BURST_MULTIPLIER, gained: 0 };

    // La sintonia acumulada ao longo da aventura deixa a carga um pouco mais eficiente.
    const gained = Math.min(40, 30 + Math.floor(Math.max(0, Number(bond) || 0) / 4));
    return {
      charge: Math.min(CAP, before + gained),
      resonant: false,
      multiplier: 1,
      gained,
    };
  }

  function applyDamage(damage, resonant) {
    const base = Math.max(0, Math.floor(Number(damage) || 0));
    if (!resonant || base === 0) return base;
    return Math.max(base + 1, Math.floor(base * BURST_MULTIPLIER));
  }

  window.EV_RESONANCE = Object.freeze({
    CAP,
    BURST_MULTIPLIER,
    qualifies,
    step,
    applyDamage,
  });
})();
