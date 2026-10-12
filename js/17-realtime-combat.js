/* Combate local em tempo real — protótipo modular, sem dependência do PvP. */
(() => {
  "use strict";

  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const ARENAS = Object.freeze({
    grass: {
      id: "grass",
      name: "Clareira do Vínculo",
      focus: "Flora",
      sky: "#214b36",
      ground: "#579152",
      accent: "#b5ed83",
      field: { tile: "#76a85f", tileAlt: "#6d9d56", edge: "#245338", obstacle: "canopy", bounds: { minX: 0.04, maxX: 0.96, minY: 0.04, maxY: 0.96 }, obstacles: [{ x: 0.34, y: 0.34, w: 0.10, h: 0.11 }, { x: 0.63, y: 0.57, w: 0.12, h: 0.09 }] },
      staminaRegen: 1.16,
      powerRegen: 1.08,
      boosts: { Flora: { atk: 1.10, def: 1.03, vel: 1.10 }, Faísca: { vel: 1.05 } },
      penalties: { Brasa: { atk: 0.92, powerRegen: 0.88 } },
    },
    water: {
      id: "water",
      name: "Anel das Marés",
      focus: "Maré",
      sky: "#164d68",
      ground: "#3688a0",
      accent: "#a2f3ee",
      field: { tile: "#58a5a4", tileAlt: "#4a9698", edge: "#175d70", obstacle: "reef", bounds: { minX: 0.04, maxX: 0.96, minY: 0.04, maxY: 0.96 }, obstacles: [{ x: 0.30, y: 0.31, w: 0.12, h: 0.10 }, { x: 0.64, y: 0.62, w: 0.13, h: 0.08 }] },
      staminaRegen: 1.12,
      powerRegen: 1.10,
      boosts: { Maré: { def: 1.12, vel: 1.07 }, Faísca: { vel: 1.08 } },
      penalties: { Brasa: { atk: 0.90, powerRegen: 0.84 } },
    },
    cave: {
      id: "cave",
      name: "Círculo da Caverna Ecoante",
      focus: "Pedra",
      sky: "#302745",
      ground: "#625376",
      accent: "#d8bdff",
      field: { tile: "#766786", tileAlt: "#695b7a", edge: "#382e49", obstacle: "crystal", bounds: { minX: 0.04, maxX: 0.96, minY: 0.04, maxY: 0.96 }, obstacles: [{ x: 0.35, y: 0.36, w: 0.11, h: 0.10 }, { x: 0.64, y: 0.61, w: 0.12, h: 0.11 }] },
      staminaRegen: 0.96,
      powerRegen: 1.18,
      boosts: { Pedra: { def: 1.12, atk: 1.04 }, Sombra: { atk: 1.09, vel: 1.04 } },
      penalties: { Flora: { vel: 0.94, staminaRegen: 0.92 } },
    },
  });

  function arenaFor(background) {
    return ARENAS[background] || ARENAS.grass;
  }

  function canOccupy(x, y, arena, radius = 0.045) {
    const field = (typeof arena === "string" ? arenaFor(arena) : arena)?.field || ARENAS.grass.field;
    const { minX, maxX, minY, maxY } = field.bounds;
    if (x < minX + radius || x > maxX - radius || y < minY + radius || y > maxY - radius) return false;
    return !field.obstacles.some((obstacle) =>
      x > obstacle.x - radius && x < obstacle.x + obstacle.w + radius &&
      y > obstacle.y - radius && y < obstacle.y + obstacle.h + radius,
    );
  }

  function moveInArena(position, dx, dy, arena, radius = 0.045) {
    const field = (typeof arena === "string" ? arenaFor(arena) : arena)?.field || ARENAS.grass.field;
    const { minX, maxX, minY, maxY } = field.bounds;
    let x = position.x;
    let y = position.y;
    const steps = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dy)) / 0.02));
    for (let step = 0; step < steps; step++) {
      const nextX = clamp(x + dx / steps, minX + radius, maxX - radius);
      const nextY = clamp(y + dy / steps, minY + radius, maxY - radius);
      if (canOccupy(nextX, nextY, arena, radius)) {
        x = nextX;
        y = nextY;
      } else {
        if (canOccupy(nextX, y, arena, radius)) x = nextX;
        if (canOccupy(x, nextY, arena, radius)) y = nextY;
      }
    }
    return { x, y };
  }

  function arenaStats(baseStats, types, arena) {
    const affinities = types || [];
    const boost = {};
    const penalty = {};
    for (const affinity of affinities) {
      const affinityBoost = arena?.boosts?.[affinity] || {};
      const affinityPenalty = arena?.penalties?.[affinity] || {};
      for (const key of ["atk", "def", "vel", "staminaRegen", "powerRegen"]) {
        if (affinityBoost[key] != null) boost[key] = Math.max(boost[key] ?? 1, affinityBoost[key]);
        if (affinityPenalty[key] != null) penalty[key] = Math.min(penalty[key] ?? 1, affinityPenalty[key]);
      }
    }
    return {
      stats: {
        ...baseStats,
        atk: Math.round(baseStats.atk * (boost.atk ?? 1) * (penalty.atk ?? 1)),
        def: Math.round(baseStats.def * (boost.def ?? 1) * (penalty.def ?? 1)),
        vel: Math.round(baseStats.vel * (boost.vel ?? 1) * (penalty.vel ?? 1)),
      },
      staminaRegen: (arena?.staminaRegen ?? 1) * (boost.staminaRegen ?? 1) * (penalty.staminaRegen ?? 1),
      powerRegen: (arena?.powerRegen ?? 1) * (boost.powerRegen ?? 1) * (penalty.powerRegen ?? 1),
      favored: Object.values(boost).some((value) => value > 1),
      hindered: Object.values(penalty).some((value) => value < 1),
    };
  }

  function damageFor({ atk, def, power, typeMultiplier = 1, guarding = false, crit = false }) {
    const base = ((Math.max(1, atk) / Math.max(1, def)) * Math.max(1, power)) / 10;
    const reduced = base * clamp(typeMultiplier, 0.35, 2.5) * (guarding ? 0.42 : 1) * (crit ? 1.5 : 1);
    return Math.max(1, Math.floor(reduced));
  }

  function telegraphRadius(power, boss = false) {
    return power >= 58 ? (boss ? 0.23 : 0.18) : (boss ? 0.155 : 0.12);
  }

  function availableMoves(creature) {
    return Array.isArray(creature?.moves) ? creature.moves : [];
  }

  function createView({ React, h, Sprite, species, getStats, getEffectiveness, makePet, xpForDefeat, xpToNext, evolve, relics, registerSpecies, registerEvolution }) {
    const el = (type, props = {}, children = null) => h(type, { ...props, ...(children === null ? {} : { children }) });
    const bar = (label, value, color, text) => el("div", { style: { marginTop: 5 } }, [
      el("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 800, color: "#f7f5ef" } }, [el("span", {}, label), el("span", {}, text)]),
      el("div", { style: { height: 9, overflow: "hidden", borderRadius: 8, background: "#111827aa", border: "1px solid #ffffff30" } },
        el("div", { style: { width: `${clamp(value, 0, 100)}%`, height: "100%", background: color, transition: "width 100ms linear" } })),
    ]);

    function RealtimeBattle({ gs, init, onEnd, onExit }) {
      const party = gs.current.party;
      const aliveStart = Math.max(0, party.findIndex((pet) => pet.hp > 0));
      const foeList = React.useRef(null);
      if (!foeList.current) {
        const lineUp = init.kind === "trainer" && Array.isArray(init.team) && init.team.length
          ? init.team
          : [{ sp: init.foeSp, level: init.foeLevel }];
        foeList.current = lineUp.map((foe) => makePet(foe.sp, foe.level));
      }
      const arena = arenaFor(init.arena ?? init.bg);
      const boss = Boolean(init.isBoss || init.boss || /tat[aá]\s*alfa|guard[iã]o|chefe/i.test(`${init.trainerName || ""} ${init.npcId || ""}`));
      const sim = React.useRef(null);
      if (!sim.current) {
        const now = performance.now();
        sim.current = {
          playerIndex: aliveStart,
          foeIndex: 0,
          px: 0.27,
          py: 0.63,
          ex: 0.73,
          ey: 0.38,
          stamina: 100,
          power: 100,
          nextActionAt: [0, 0, 0, 0, 0],
          nextDodgeAt: 0,
          nextGuardAt: 0,
          nextSwitchAt: 0,
          dodgeUntil: 0,
          hurtUntil: 0,
          playerGuardUntil: 0,
          enemyGuardUntil: 0,
          enemyDodgeUntil: 0,
          enemyDodgeAt: 0,
          playerWindup: null,
          projectiles: [],
          areaStrikes: [],
          intent: null,
          attackAt: now + 1200,
          frameAt: now,
          paintAt: 0,
          done: false,
          log: "Leia o sinal do oponente e escolha o momento de agir.",
          logUntil: now + 2600,
          floating: null,
          playerWon: 0,
        };
      }
      const [, repaint] = React.useState(0);
      const [attackScene, setAttackScene] = React.useState(null);
      const [selectedMoveIndex, setSelectedMoveIndex] = React.useState(null);
      const [moveMenuOpen, setMoveMenuOpen] = React.useState(false);
      const [showArenaDetails, setShowArenaDetails] = React.useState(false);
      const held = React.useRef(new Set());
      const raf = React.useRef(0);
      const arenaRef = React.useRef(null);
      const attackSceneTimer = React.useRef(0);
      const s = sim.current;
      const active = party[s.playerIndex] || party[aliveStart];
      const foe = foeList.current[s.foeIndex];
      const activeDef = species(active?.sp) || {};
      const foeDef = species(foe?.sp) || {};
      const activeBase = getStats(active?.sp, active?.level || 1);
      const foeBase = getStats(foe?.sp, foe?.level || 1);
      const pArena = arenaStats(activeBase, activeDef.types, arena);
      const eArena = arenaStats(foeBase, foeDef.types, arena);
      const arenaDetailText = `ATQ ${activeBase.atk}→${pArena.stats.atk} · DEF ${activeBase.def}→${pArena.stats.def} · VEL ${activeBase.vel}→${pArena.stats.vel} · EST ${Math.round(pArena.staminaRegen * 100)}% · POD ${Math.round(pArena.powerRegen * 100)}%`;
      const describeMoves = (pet, definition) => {
        const planner = window.EV_ATTACK_CHOREOGRAPHY;
        const moves = availableMoves(definition).map((move, index) => {
          const plan = planner?.plan({
            attacker: { id: pet?.sp || definition.id, name: definition.name, types: definition.types || [], stage: definition.stage || 0, feature: definition.feature },
            move, x0: 0.25, y0: 0.6, x1: 0.75, y1: 0.4, width: 360, height: 640,
          });
          const family = plan?.family || "beam";
          const role = window.EV_REALTIME_PHYSICS?.moveRole(family, move, definition.types || [], definition.stage || 0) || "projectile";
          return { move, index, family, role };
        });
        if (moves.length && !moves.some((entry) => entry.role === "defense") && moves.length > 1) moves[moves.length - 1].role = "defense";
        if (moves.length && moves.every((entry) => entry.role === "defense")) moves[0].role = "projectile";
        return moves;
      };
      const playerMoves = describeMoves(active, activeDef);
      const pMaxHp = activeBase.maxHp;
      const eMaxHp = foeBase.maxHp;
      const switchRemaining = Math.max(0, s.nextSwitchAt - performance.now());
      const playerHpPct = clamp((active?.hp ?? 0) / Math.max(1, pMaxHp) * 100, 0, 100);
      const enemyHpPct = clamp((foe?.hp ?? 0) / Math.max(1, eMaxHp) * 100, 0, 100);

      const report = (message) => { s.log = message; s.logUntil = performance.now() + 1800; repaint((n) => n + 1); };
      const playAttackScene = (attacker, move, damage, crit, from, to, attackerIsPlayer = true, options = {}) => {
        const choreo = window.EV_ATTACK_CHOREOGRAPHY;
        const rect = arenaRef.current?.getBoundingClientRect();
        if (!choreo || !rect?.width || !rect?.height) return;
        const scene = choreo.plan({
          attacker: { id: attacker.id, name: attacker.name, types: attacker.types || [], stage: attacker.stage || 0, feature: attacker.feature },
          move,
          x0: from.x,
          y0: from.y,
          x1: to.x,
          y1: to.y,
          width: rect.width,
          height: rect.height,
          damage,
          crit,
          hit: true,
          showDamage: false,
          attackerIsPlayer,
          impactOnly: options.impactOnly === true,
          realtimeGuard: options.realtimeGuard === true,
          runId: `rt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        });
        scene.impactOnly = options.impactOnly === true;
        scene.realtimeGuard = options.realtimeGuard === true;
        if (options.family) scene.family = options.family;
        setAttackScene(scene);
        window.clearTimeout(attackSceneTimer.current);
        attackSceneTimer.current = window.setTimeout(() => setAttackScene(null), Math.max(650, scene.durationMs || 1050));
        return scene;
      };
      const finish = (result) => {
        if (s.done) return;
        s.done = true;
        held.current.clear();
        window.setTimeout(() => onEnd(result), 700);
      };
      const updateXpAndEvolution = (defeated, activeIndex) => {
        gs.current.dexSeen ||= [];
        gs.current.dexCaught ||= [];
        gs.current.sintonia ||= {};
        gs.current.box ||= [];
        for (let index = 0; index < party.length; index++) {
          const pet = party[index];
          if (pet.hp <= 0) continue;
          const reward = xpForDefeat(defeated.level, init.kind === "trainer", pet.level, index === activeIndex);
          pet.xp = (pet.xp || 0) + reward;
          let oldMax = getStats(pet.sp, pet.level).maxHp;
          while (pet.level < 100 && pet.xp >= xpToNext(pet.level)) {
            pet.xp -= xpToNext(pet.level);
            pet.level += 1;
            const newMax = getStats(pet.sp, pet.level).maxHp;
            pet.hp = Math.min(newMax, pet.hp + Math.max(0, newMax - oldMax));
            oldMax = newMax;
            const evolvedId = evolve(pet, gs.current);
            if (evolvedId) {
              pet.sp = evolvedId;
              const evolvedStats = getStats(pet.sp, pet.level);
              pet.hp = Math.min(evolvedStats.maxHp, pet.hp + Math.max(0, evolvedStats.maxHp - oldMax));
              oldMax = evolvedStats.maxHp;
              registerEvolution?.(gs.current, evolvedId, pet);
              if (!gs.current.dexSeen.includes(evolvedId)) gs.current.dexSeen.push(evolvedId);
              if (!gs.current.dexCaught.includes(evolvedId)) gs.current.dexCaught.push(evolvedId);
              report(`${species(evolvedId)?.name || evolvedId} evoluiu!`);
            } else {
              report(`${species(pet.sp)?.name || pet.sp} subiu para o Nv ${pet.level}!`);
            }
          }
        }
      };
      const swapTo = (index, forced = false) => {
        const next = party[index];
        if (!next || next.hp <= 0 || index === s.playerIndex || s.done) return false;
        const now = performance.now();
        if (!forced && now < s.nextSwitchAt) {
          report(`Troca indisponível por ${Math.ceil((s.nextSwitchAt - now) / 1000)} s.`);
          return false;
        }
        s.playerIndex = index;
        setSelectedMoveIndex(null);
        setMoveMenuOpen(false);
        if (!forced) s.nextSwitchAt = now + 15000;
        s.playerWindup = null;
        s.playerGuardUntil = 0;
        s.log = forced ? `${species(next.sp)?.name || next.sp} entrou para continuar a luta!` : `${species(next.sp)?.name || next.sp} entrou na arena.`;
        s.logUntil = now + 1700;
        repaint((n) => n + 1);
        return true;
      };
      const planMove = (attackerSp, attackerLevel, move, from, to, attackerIsPlayer = true) => {
        const choreo = window.EV_ATTACK_CHOREOGRAPHY;
        const definition = species(attackerSp) || {};
        const rect = arenaRef.current?.getBoundingClientRect();
        if (!choreo) return null;
        return choreo.plan({
          attacker: { id: attackerSp, name: definition.name, types: definition.types || [], stage: definition.stage || 0, feature: definition.feature },
          move, x0: from.x, y0: from.y, x1: to.x, y1: to.y,
          width: rect?.width || 360, height: rect?.height || 640,
          attackerIsPlayer,
        });
      };
      const launchProjectile = (owner, attackerSp, attackerLevel, move, family, role, from, to, crit) => {
        const definition = species(attackerSp) || {};
        const stats = arenaStats(getStats(attackerSp, attackerLevel || 1), definition.types, arena);
        const visual = planMove(attackerSp, attackerLevel, move, from, to, owner === "player");
        const distance = Math.hypot(to.x - from.x, to.y - from.y);
        const physics = window.EV_REALTIME_PHYSICS;
        const flightMs = physics?.projectileFlightMs(distance, stats.stats.vel) || clamp(distance * 900, 220, 1800);
        s.projectiles.push({
          id: `shot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          owner, attackerSp, attackerLevel, move, family, role, crit,
          x: from.x, y: from.y, fromX: from.x, fromY: from.y, toX: to.x, toY: to.y,
          flightMs, elapsedMs: 0, speed: distance / Math.max(0.22, flightMs / 1000),
          colors: visual?.colors || ["#fff3b0", "#ffb703", "#ffffff"],
          glyph: visual?.glyph || "spark", size: visual?.size || 28,
          targetPlayerIndex: owner === "enemy" ? s.playerIndex : null,
          targetFoeIndex: owner === "player" ? s.foeIndex : null,
          evadeChecked: false,
        });
      };
      const launchAreaStrike = (owner, attackerSp, attackerLevel, move, from, target, crit, isBoss = false) => {
        const attackerDef = species(attackerSp) || {};
        const scene = playAttackScene(attackerDef, move, 0, crit, from, target, owner === "player");
        const now = performance.now();
        s.areaStrikes.push({
          owner, attackerSp, attackerLevel, move, crit, from,
          x: target.x, y: target.y,
          radius: telegraphRadius(move.power, isBoss),
          landsAt: now + (scene?.impactAtMs || 820),
          targetPlayerIndex: owner === "enemy" ? s.playerIndex : null,
          targetFoeIndex: owner === "player" ? s.foeIndex : null,
        });
      };
      const applyHit = (owner, attackerSp, attackerLevel, move, crit, from, impactPoint) => {
        const now = performance.now();
        const playerTarget = owner === "enemy";
        const target = playerTarget ? party[s.playerIndex] : foeList.current[s.foeIndex];
        if (!target || target.hp <= 0) return;
        const attackerDef = species(attackerSp) || {};
        const targetDef = species(target.sp) || {};
        const attackerStats = arenaStats(getStats(attackerSp, attackerLevel || 1), attackerDef.types, arena);
        const targetStats = arenaStats(getStats(target.sp, target.level || 1), targetDef.types, arena);
        const guarded = playerTarget ? now < s.playerGuardUntil : now < s.enemyGuardUntil;
        const multiplier = getEffectiveness(move.type, targetDef.types || []);
        const rawDamage = damageFor({ atk: attackerStats.stats.atk, def: targetStats.stats.def, power: move.power, typeMultiplier: multiplier, guarding: guarded, crit });
        const damage = playerTarget && boss ? Math.ceil(rawDamage * 1.18) : rawDamage;
        target.hp = Math.max(0, target.hp - damage);
        if (playerTarget) {
          const impulse = window.EV_REALTIME_PHYSICS?.knockbackVector(impactPoint, from, clamp(0.045 + damage * 0.0007, 0.045, 0.09)) || { x: 0.06, y: 0 };
          const pushed = moveInArena({ x: s.px, y: s.py }, impulse.x, impulse.y, arena, 0.055);
          s.px = pushed.x;
          s.py = pushed.y;
          s.hurtUntil = now + 320;
        } else {
          const impulse = window.EV_REALTIME_PHYSICS?.knockbackVector(impactPoint, from, clamp(0.045 + damage * 0.0007, 0.045, 0.09)) || { x: -0.06, y: 0 };
          const pushed = moveInArena({ x: s.ex, y: s.ey }, impulse.x, impulse.y, arena, 0.055);
          s.ex = pushed.x;
          s.ey = pushed.y;
        }
        playAttackScene(attackerDef, move, damage, crit, from, impactPoint, owner === "player", { impactOnly: true });
        s.floating = { text: `${crit ? "CRÍTICO · " : ""}-${damage}`, x: impactPoint.x, y: impactPoint.y, until: now + 700 };
        s.log = guarded
          ? `A defesa de ${targetDef.name || target.sp} reduziu o impacto: -${damage} HP.`
          : `${attackerDef.name || attackerSp} acertou ${move.name}: -${damage} HP.`;
        s.logUntil = now + 1500;
        if (!playerTarget && target.hp <= 0) {
          for (const type of (attackerDef.types || [])) gs.current.sintonia[type] = (gs.current.sintonia[type] || 0) + 1;
          updateXpAndEvolution(target, s.playerIndex);
          s.foeIndex += 1;
          s.playerWon += 1;
          s.intent = null;
          s.areaStrikes = s.areaStrikes.filter((strike) => strike.owner !== "player");
          if (s.foeIndex >= foeList.current.length) {
            s.log = "Vitória! O vínculo prevaleceu.";
            finish({ won: true });
          } else {
            s.attackAt = now + 1350;
            report(`${species(foeList.current[s.foeIndex].sp)?.name || "Oponente"} entrou na arena!`);
          }
        } else if (playerTarget && target.hp <= 0) {
          const next = party.findIndex((pet, index) => index !== s.playerIndex && pet.hp > 0);
          if (next < 0) {
            s.intent = null;
            s.log = "Seu time foi derrotado.";
            finish({ won: false });
          } else swapTo(next, true);
        }
      };
      const playerAction = (index) => {
        if (s.done) return;
        if (s.playerWindup) return;
        const attacker = party[s.playerIndex];
        const attackerDef = species(attacker?.sp) || {};
        const currentMoves = describeMoves(attacker, attackerDef);
        const entry = currentMoves[index];
        const move = entry?.move;
        const now = performance.now();
        if (!move) return;
        if (entry.role === "defense") {
          if (now < s.nextGuardAt) { report("A defesa de chão ainda está se recompondo."); return; }
          if (s.stamina < 20) { report("Precisa de 20 de estamina para erguer a defesa."); return; }
          s.stamina -= 20;
          s.nextGuardAt = now + 980;
          s.nextActionAt[index] = now + 980;
          s.playerGuardUntil = now + 760;
          playAttackScene(attackerDef, move, 0, false, { x: s.px, y: s.py }, { x: s.px, y: s.py }, true, { impactOnly: true, realtimeGuard: true, family: "roots" });
          report(`${attackerDef.name || attacker.sp} ergueu ${move.name} do chão para se proteger.`);
          return;
        }
        if (now < s.nextActionAt[index]) return;
        const currentArenaStats = arenaStats(getStats(attacker?.sp, attacker?.level || 1), attackerDef.types, arena);
        const attackSlot = currentMoves.slice(0, index).filter((item) => item.role !== "defense").length;
        const basic = attackSlot === 0;
        const staminaCost = basic ? 13 : 0;
        const powerCost = basic ? 0 : 17 + attackSlot * 9;
        if (s.stamina < staminaCost || s.power < powerCost) {
          report(basic ? "Sem estamina: recue um instante." : "Barra de poder insuficiente; espere recarregar.");
          return;
        }
        const distance = Math.hypot(s.ex - s.px, s.ey - s.py);
        const range = entry.role === "charge" ? 0.78 : 1.35;
        if (distance > range) {
          report(`${move.name}: o oponente está além do alcance.`);
          return;
        }
        s.stamina -= staminaCost;
        s.power -= powerCost;
        const speedFactor = clamp(60 / Math.max(24, currentArenaStats.stats.vel), 0.64, 1.45);
        s.nextActionAt[index] = now + (basic ? 570 : 900 + attackSlot * 130) * speedFactor;
        const windup = clamp(390 - currentArenaStats.stats.vel * 1.2, 190, 350);
        s.playerWindup = {
          move, role: entry.role, family: entry.family,
          attackerSp: attacker.sp, attackerLevel: attacker.level,
          crit: Math.random() < 0.08,
          from: { x: s.px, y: s.py }, target: { x: s.ex, y: s.ey },
          launchAt: now + windup,
        };
        s.log = `${attackerDef.name || attacker.sp} prepara ${move.name}…`;
        s.logUntil = now + windup + 500;
        repaint((n) => n + 1);
      };
      const dodge = () => {
        const now = performance.now();
        if (s.done || now < s.nextDodgeAt || s.stamina < 22) return;
        let dx = (held.current.has("right") ? 1 : 0) - (held.current.has("left") ? 1 : 0);
        let dy = (held.current.has("down") ? 1 : 0) - (held.current.has("up") ? 1 : 0);
        if (!dx && !dy) { dx = s.px - s.ex; dy = s.py - s.ey; }
        const len = Math.hypot(dx, dy) || 1;
        const dodgedTo = moveInArena({ x: s.px, y: s.py }, (dx / len) * 0.28, (dy / len) * 0.28, arena, 0.055);
        if (dodgedTo.x === s.px && dodgedTo.y === s.py) {
          report("O limite da arena bloqueou a esquiva.");
          return;
        }
        s.stamina -= 22;
        s.dodgeUntil = now + 390;
        s.nextDodgeAt = now + 700;
        s.px = dodgedTo.x;
        s.py = dodgedTo.y;
        report("Esquiva! Janela breve de invulnerabilidade.");
      };
      const playerActionRef = React.useRef(playerAction);
      const dodgeRef = React.useRef(dodge);
      playerActionRef.current = playerAction;
      dodgeRef.current = dodge;
      const guardRef = React.useRef(() => {});
      guardRef.current = () => {
        const guardIndex = describeMoves(party[s.playerIndex], species(party[s.playerIndex]?.sp) || {}).findIndex((entry) => entry.role === "defense");
        if (guardIndex >= 0) playerActionRef.current(guardIndex);
      };
      const tryCapture = () => {
        if (s.done || init.kind !== "wild") return;
        const matched = (foeDef.types || []).some((type) => (gs.current.affinities || []).includes(type));
        const requiresEssence = foeDef.essenceOnly || !matched;
        const useEssence = requiresEssence && (gs.current.items?.essencia || 0) > 0;
        if (requiresEssence && !useEssence) {
          report(`Sem afinidade para vincular ${foeDef.name || foe.sp}; enfraqueça-o ou obtenha Essência Neutra.`);
          return;
        }
        if (useEssence) gs.current.items.essencia -= 1;
        let chance = useEssence ? 0.9 : 0.3 + (1 - foe.hp / Math.max(1, eMaxHp)) * 0.45 + 0.15;
        chance = clamp(chance, 0.05, 0.98);
        const relic = gs.current.equippedRelic && relics?.[gs.current.equippedRelic];
        if (relic?.affinity && (foeDef.types || []).includes(relic.affinity)) chance = Math.min(1, chance * 1.15);
        if (Math.random() < chance) {
          const captured = makePet(foe.sp, foe.level);
          captured.hp = getStats(captured.sp, captured.level).maxHp;
          const boxed = gs.current.party.length >= 3;
          (boxed ? gs.current.box : gs.current.party).push(captured);
          gs.current.dexSeen ||= [];
          gs.current.dexCaught ||= [];
          gs.current.sintonia ||= {};
          if (!gs.current.dexSeen.includes(captured.sp)) gs.current.dexSeen.push(captured.sp);
          if (!gs.current.dexCaught.includes(captured.sp)) gs.current.dexCaught.push(captured.sp);
          registerSpecies?.(gs.current, captured.sp);
          gs.current.caughtTotal = (gs.current.caughtTotal || 0) + 1;
          for (const type of (foeDef.types || [])) gs.current.sintonia[type] = (gs.current.sintonia[type] || 0) + 1;
          if (init.caveId) {
            gs.current.caveCaptures ||= {};
            gs.current.caveCaptures[init.caveId] = (gs.current.caveCaptures[init.caveId] || 0) + 1;
          }
          s.log = boxed ? `${foeDef.name} se vinculou! O time está cheio; foi para a reserva.` : `${foeDef.name} se vinculou a você!`;
          finish({ won: false, caught: true, captured: true, capturedSpecies: foe.sp });
        } else {
          report("A esfera de vínculo se rompeu! Continue lutando.");
          s.attackAt = performance.now() + 350;
        }
      };

      React.useEffect(() => {
        window.EV_MUSIC?.enterBattle?.(init);
        const keys = { ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down", ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right" };
        const down = (event) => {
          if (keys[event.code]) { event.preventDefault(); event.stopImmediatePropagation(); held.current.add(keys[event.code]); }
          else if ((event.code === "KeyF" || event.code === "Space") && !event.repeat) { event.preventDefault(); event.stopImmediatePropagation(); guardRef.current(); }
          else if ((event.code === "KeyE" || event.code === "ShiftLeft") && !event.repeat) { event.preventDefault(); event.stopImmediatePropagation(); dodgeRef.current(); }
          else if (/^Digit[1-5]$/.test(event.code) && !event.repeat) {
            event.stopImmediatePropagation();
            const moveIndex = Number(event.code.slice(-1)) - 1;
            setSelectedMoveIndex(moveIndex);
            setMoveMenuOpen(false);
            playerActionRef.current(moveIndex);
          }
          else if (event.code === "KeyQ" && !event.repeat) {
            event.stopImmediatePropagation();
            const next = party.findIndex((pet, index) => index !== s.playerIndex && pet.hp > 0);
            if (next >= 0) swapTo(next);
          }
        };
        const up = (event) => { if (keys[event.code]) held.current.delete(keys[event.code]); };
        window.addEventListener("keydown", down, true);
        window.addEventListener("keyup", up, true);
        let last = performance.now();
        const frame = (time) => {
          if (s.done) return;
          const dt = Math.min(0.05, Math.max(0, (time - last) / 1000));
          last = time;
          const currentPet = party[s.playerIndex];
          const currentSpecies = species(currentPet?.sp) || {};
          const currentStats = arenaStats(getStats(currentPet?.sp, currentPet?.level || 1), currentSpecies.types, arena);
          const opponent = foeList.current[s.foeIndex];
          const opponentSpecies = species(opponent?.sp) || {};
          const opponentStats = arenaStats(getStats(opponent?.sp, opponent?.level || 1), opponentSpecies.types, arena);
          const moveX = (held.current.has("right") ? 1 : 0) - (held.current.has("left") ? 1 : 0);
          const moveY = (held.current.has("down") ? 1 : 0) - (held.current.has("up") ? 1 : 0);
          const moveLength = Math.hypot(moveX, moveY) || 1;
          if (moveX || moveY) {
            const speed = 0.34 * clamp(currentStats.stats.vel / 52, 0.62, 1.55);
            const moved = moveInArena({ x: s.px, y: s.py }, moveX / moveLength * speed * dt, moveY / moveLength * speed * dt, arena);
            s.px = moved.x;
            s.py = moved.y;
          }
          s.stamina = clamp(s.stamina + 22 * currentStats.staminaRegen * dt, 0, 100);
          s.power = clamp(s.power + 5.5 * currentStats.powerRegen * dt, 0, 100);
          const approach = 0.11 * clamp(opponentStats.stats.vel / 50, 0.62, 1.5);
          const vx = s.px - s.ex, vy = s.py - s.ey, distance = Math.hypot(vx, vy) || 1;
          if (!s.intent && distance > 0.19) {
            const enemyMove = moveInArena({ x: s.ex, y: s.ey }, vx / distance * approach * dt, vy / distance * approach * dt, arena, 0.055);
            s.ex = enemyMove.x;
            s.ey = enemyMove.y;
          }
          const now = performance.now();
          if (s.playerWindup && now >= s.playerWindup.launchAt) {
            const cast = s.playerWindup;
            s.playerWindup = null;
            if (cast.role === "area") launchAreaStrike("player", cast.attackerSp, cast.attackerLevel, cast.move, cast.from, cast.target, cast.crit, false);
            else launchProjectile("player", cast.attackerSp, cast.attackerLevel, cast.move, cast.family, cast.role, cast.from, cast.target, cast.crit);
          }
          if (!s.intent && now >= s.attackAt) {
            const opponentMoves = opponentSpecies.moves || [];
            const profiles = describeMoves(opponent, opponentSpecies);
            const entry = profiles[Math.floor(Math.random() * profiles.length)] || { move: opponentMoves[0] || { name: "Investida", type: opponentSpecies.types?.[0] || "Pedra", power: 40 }, family: "rush", role: "charge" };
            const move = entry.move;
            const telegraph = boss ? clamp(790 - opponentStats.stats.vel * 1.5, 430, 680) : clamp(900 - opponentStats.stats.vel * 1.7, 450, 760);
            s.intent = { move, role: entry.role, family: entry.family, landsAt: now + telegraph, targetX: s.px, targetY: s.py, hitRange: telegraphRadius(move.power, boss) };
            s.log = entry.role === "area"
              ? `${boss ? "CHEFE" : "OPONENTE"} prepara ${move.name} · saia da marca!`
              : entry.role === "defense"
                ? `${boss ? "CHEFE" : "OPONENTE"} prepara uma defesa · ${move.name}`
                : `${boss ? "CHEFE" : "OPONENTE"} prepara ${move.name} · projétil a caminho`;
            s.logUntil = now + telegraph;
          } else if (s.intent && now >= s.intent.landsAt) {
            const intent = s.intent;
            s.intent = null;
            if (intent.role === "defense") {
              s.enemyGuardUntil = now + 820;
              playAttackScene(opponentSpecies, intent.move, 0, false, { x: s.ex, y: s.ey }, { x: s.ex, y: s.ey }, false, { impactOnly: true, realtimeGuard: true, family: "roots" });
              s.log = `${opponentSpecies.name || opponent.sp} ergueu uma defesa do chão.`;
              s.logUntil = now + 1000;
            } else if (intent.role === "area") {
              launchAreaStrike("enemy", opponent.sp, opponent.level, intent.move, { x: s.ex, y: s.ey }, { x: intent.targetX, y: intent.targetY }, Math.random() < (boss ? 0.09 : 0.06), boss);
            } else {
              launchProjectile("enemy", opponent.sp, opponent.level, intent.move, intent.family, intent.role, { x: s.ex, y: s.ey }, { x: intent.targetX, y: intent.targetY }, Math.random() < (boss ? 0.09 : 0.06));
            }
            s.attackAt = now + (boss ? clamp(1120 - opponentStats.stats.vel * 3, 650, 1050) : clamp(1300 - opponentStats.stats.vel * 4, 760, 1250));
          }
          if (s.areaStrikes.length) {
            const pending = [];
            for (const strike of s.areaStrikes) {
              if (strike.owner === "player" && !strike.evadeChecked && now >= s.enemyDodgeAt && strike.landsAt - now > 100 && strike.landsAt - now < 650) {
                const rect = arenaRef.current?.getBoundingClientRect();
                const nearMarker = window.EV_REALTIME_PHYSICS?.insideArea({ x: s.ex, y: s.ey }, { x: strike.x, y: strike.y }, strike.radius + 0.14, rect?.width, rect?.height)
                  ?? (Math.hypot(s.ex - strike.x, s.ey - strike.y) < strike.radius + 0.14);
                if (nearMarker) {
                  strike.evadeChecked = true;
                  if (Math.random() < clamp(0.08 + opponentStats.stats.vel / 250, 0.20, 0.52)) {
                    const dx = s.ex - strike.x, dy = s.ey - strike.y, length = Math.hypot(dx, dy) || 1;
                    const first = moveInArena({ x: s.ex, y: s.ey }, dx / length * 0.16, dy / length * 0.16, arena, 0.055);
                    const second = moveInArena({ x: s.ex, y: s.ey }, -dy / length * 0.16, dx / length * 0.16, arena, 0.055);
                    const score = (point) => Math.hypot((point.x - strike.x) * (rect?.width || 360), (point.y - strike.y) * (rect?.height || 640));
                    const firstValid = first.x !== s.ex || first.y !== s.ey;
                    const secondValid = second.x !== s.ex || second.y !== s.ey;
                    const chosen = firstValid && secondValid ? (score(first) > score(second) ? first : second) : firstValid ? first : second;
                    if (firstValid || secondValid) {
                      s.ex = chosen.x; s.ey = chosen.y;
                      s.enemyDodgeUntil = now + 310;
                      s.enemyDodgeAt = now + 1050;
                      s.log = `${opponentSpecies.name || opponent.sp} saiu da área do impacto!`;
                      s.logUntil = now + 950;
                    }
                  }
                }
              }
              if (now < strike.landsAt) { pending.push(strike); continue; }
              const playerTarget = strike.owner === "enemy";
              if ((playerTarget && strike.targetPlayerIndex !== s.playerIndex) || (!playerTarget && strike.targetFoeIndex !== s.foeIndex)) continue;
              const targetPos = playerTarget ? { x: s.px, y: s.py } : { x: s.ex, y: s.ey };
              const dodged = playerTarget ? now < s.dodgeUntil : now < s.enemyDodgeUntil;
              const rect = arenaRef.current?.getBoundingClientRect();
              const inside = window.EV_REALTIME_PHYSICS?.insideArea(targetPos, { x: strike.x, y: strike.y }, strike.radius, rect?.width, rect?.height)
                ?? (Math.hypot(targetPos.x - strike.x, targetPos.y - strike.y) <= strike.radius);
              if (inside && !dodged) {
                applyHit(strike.owner, strike.attackerSp, strike.attackerLevel, strike.move, strike.crit, strike.from, targetPos);
              } else {
                s.log = dodged ? "Esquiva no último instante!" : "O impacto de área atingiu o chão vazio.";
                s.logUntil = now + 1000;
              }
            }
            s.areaStrikes = pending;
          }
          if (s.projectiles.length) {
            const survivors = [];
            for (const projectile of s.projectiles) {
              if ((projectile.owner === "player" && projectile.targetFoeIndex !== s.foeIndex) || (projectile.owner === "enemy" && projectile.targetPlayerIndex !== s.playerIndex)) continue;
              projectile.elapsedMs += dt * 1000;
              if (projectile.owner === "player" && !projectile.evadeChecked && now >= s.enemyDodgeAt) {
                const leftMs = projectile.flightMs - projectile.elapsedMs;
                if (leftMs > 170 && leftMs < 850 && Math.hypot(projectile.x - s.ex, projectile.y - s.ey) < 0.32) {
                  projectile.evadeChecked = true;
                  const chance = clamp(0.08 + opponentStats.stats.vel / 250, 0.20, 0.52);
                  if (Math.random() < chance) {
                    const dx = projectile.toX - projectile.fromX, dy = projectile.toY - projectile.fromY;
                    const length = Math.hypot(dx, dy) || 1;
                    const nx = -dy / length, ny = dx / length;
                    const first = moveInArena({ x: s.ex, y: s.ey }, nx * 0.14, ny * 0.14, arena, 0.055);
                    const second = moveInArena({ x: s.ex, y: s.ey }, -nx * 0.14, -ny * 0.14, arena, 0.055);
                    const firstValid = first.x !== s.ex || first.y !== s.ey;
                    const secondValid = second.x !== s.ex || second.y !== s.ey;
                    const chosen = firstValid && secondValid ? (Math.random() < 0.5 ? first : second) : firstValid ? first : second;
                    if (firstValid || secondValid) {
                      s.ex = chosen.x; s.ey = chosen.y;
                      s.enemyDodgeUntil = now + 310;
                      s.enemyDodgeAt = now + 1050;
                      s.log = `${opponentSpecies.name || opponent.sp} esquivou do projétil!`;
                      s.logUntil = now + 950;
                    }
                  }
                }
              }
              const dx = projectile.toX - projectile.x, dy = projectile.toY - projectile.y;
              const remainingDistance = Math.hypot(dx, dy);
              const step = Math.min(remainingDistance, projectile.speed * dt);
              const ratio = remainingDistance ? step / remainingDistance : 1;
              projectile.x += dx * ratio;
              projectile.y += dy * ratio;
              const playerTarget = projectile.owner === "enemy";
              const targetPos = playerTarget ? { x: s.px, y: s.py } : { x: s.ex, y: s.ey };
              const dodged = playerTarget ? now < s.dodgeUntil : now < s.enemyDodgeUntil;
              if (!dodged && Math.hypot(projectile.x - targetPos.x, projectile.y - targetPos.y) <= 0.075) {
                applyHit(projectile.owner, projectile.attackerSp, projectile.attackerLevel, projectile.move, projectile.crit, { x: projectile.fromX, y: projectile.fromY }, targetPos);
                continue;
              }
              if (projectile.elapsedMs >= projectile.flightMs || remainingDistance <= step + 0.0001) {
                if (!projectile.missLogged) { s.log = "O projétil passou no vazio!"; s.logUntil = now + 850; }
                continue;
              }
              survivors.push(projectile);
            }
            s.projectiles = survivors;
          }
          if (time - s.paintAt > 48) { s.paintAt = time; repaint((n) => n + 1); }
          raf.current = requestAnimationFrame(frame);
        };
        raf.current = requestAnimationFrame(frame);
        return () => {
          cancelAnimationFrame(raf.current);
          window.removeEventListener("keydown", down, true);
          window.removeEventListener("keyup", up, true);
          held.current.clear();
          window.clearTimeout(attackSceneTimer.current);
          window.EV_MUSIC?.leaveBattle?.();
        };
      }, []);

      const pressDirection = (direction) => (event) => {
        event.preventDefault();
        held.current.add(direction);
        try { event.currentTarget.setPointerCapture(event.pointerId); } catch {}
      };
      const releaseDirection = (direction) => (event) => { event.preventDefault(); held.current.delete(direction); };
      const controlButton = (label, action, color = "#183c31", disabled = false, title = "") => el("button", {
        type: "button", disabled, title,
        onPointerDown: action,
        style: { touchAction: "none", width: "100%", minWidth: 0, minHeight: 42, padding: "7px 5px", borderRadius: 14, border: "1px solid #ffffff40", background: disabled ? "#33415599" : color, color: "white", fontSize: 10, fontWeight: 900, boxShadow: "0 4px 0 #0005", opacity: disabled ? 0.58 : 1, lineHeight: 1.15, userSelect: "none", whiteSpace: "normal" },
      }, label);
      const selectedIndex = selectedMoveIndex ?? Math.max(0, playerMoves.findIndex((entry) => entry.role !== "defense"));
      const selectedEntry = playerMoves[selectedIndex] || playerMoves[0];
      const selectedMove = selectedEntry?.move;
      const selectedAttackSlot = playerMoves.slice(0, selectedIndex).filter((entry) => entry.role !== "defense").length;
      const selectedMoveCost = selectedEntry?.role === "defense" ? "20 EST." : selectedAttackSlot === 0 ? "13 EST." : `${17 + selectedAttackSlot * 9} POD.`;
      const directionButton = (label, dir) => el("button", {
        "aria-label": `Mover ${dir}`,
        type: "button", onPointerDown: pressDirection(dir), onPointerUp: releaseDirection(dir), onPointerCancel: releaseDirection(dir), onLostPointerCapture: releaseDirection(dir),
        style: { touchAction: "none", width: 42, height: 42, borderRadius: 12, border: "1px solid #ffffff50", background: "#142c25cc", color: "white", fontWeight: 900, fontSize: 18, userSelect: "none", boxShadow: "0 2px 0 #0005" },
      }, label);
      const effectiveSwitches = party.slice(0, 3).map((pet, index) => el("button", {
        key: `pet-${index}`,
        type: "button",
        disabled: pet.hp <= 0 || index === s.playerIndex || switchRemaining > 0 || s.done,
        title: `${species(pet.sp)?.name || pet.sp}${switchRemaining > 0 ? ` · troca em ${Math.ceil(switchRemaining / 1000)} s` : " · trocar"}`,
        onClick: () => swapTo(index),
        style: { position: "relative", width: 38, height: 36, padding: 0, display: "grid", placeItems: "center", borderRadius: 11, background: index === s.playerIndex ? "#f4c54c" : "#10251fe6", border: `1px solid ${index === s.playerIndex ? "#ffe28a" : "#ffffff35"}`, opacity: pet.hp <= 0 ? 0.35 : 1, cursor: "pointer" },
      }, [el(Sprite, { sp: pet.sp, size: 30, fainted: pet.hp <= 0 }), el("span", { style: { position: "absolute", left: 4, right: 4, bottom: 2, height: 3, borderRadius: 3, background: `linear-gradient(90deg,#67e49a ${clamp(pet.hp / Math.max(1, getStats(pet.sp, pet.level).maxHp) * 100, 0, 100)}%,#1c2930 0)` } })]));
      const choreographyLayer = attackScene && window.EV_ATTACK_CHOREOGRAPHY?.View
        ? el(window.EV_ATTACK_CHOREOGRAPHY.View, { scene: attackScene })
        : null;
      const arenaField = arena.field;
      const arenaRect = arenaRef.current?.getBoundingClientRect();
      const areaMarkers = [
        ...s.areaStrikes.map((strike) => ({ ...strike, label: strike.owner === "enemy" ? (boss ? "CHEFE" : "IMPACTO") : "SEU GOLPE" })),
        ...(s.intent?.role === "area" ? [{ owner: "enemy", x: s.intent.targetX, y: s.intent.targetY, radius: s.intent.hitRange, move: s.intent.move, label: boss ? "SINAL DO CHEFE" : "ÁREA" }] : []),
        ...(s.playerWindup?.role === "area" ? [{ owner: "player", x: s.playerWindup.target.x, y: s.playerWindup.target.y, radius: telegraphRadius(s.playerWindup.move.power, false), move: s.playerWindup.move, label: "SEU GOLPE" }] : []),
      ];
      const areaWarningNodes = areaMarkers.map((warning, index) => {
        const color = warning.owner === "enemy" ? "#ff4a4a" : "#ffe16b";
        const diameter = Math.max(38, (warning.radius || 0.12) * 2 * Math.min(arenaRect?.width || 360, arenaRect?.height || 640));
        return el("div", { key: `area-warning-${index}`, style: { position: "absolute", left: `${warning.x * 100}%`, top: `${warning.y * 100}%`, width: diameter, height: diameter, boxSizing: "border-box", transform: "translate(-50%,-50%)", zIndex: 3, pointerEvents: "none", display: "grid", placeItems: "center", border: `2px dashed ${color}`, borderRadius: "50%", background: warning.owner === "enemy" ? "#ff20202c" : "#ffda3826", boxShadow: `0 0 0 3px ${color}22,0 0 22px ${color}77`, animation: "ev-rt-telegraph 460ms ease-in-out infinite alternate" } }, [
          el("span", { style: { color: "white", fontSize: 20, fontWeight: 1000, textShadow: "0 2px 7px #300" } }, "!"),
          el("span", { style: { position: "absolute", left: "50%", top: "calc(100% - 3px)", transform: "translate(-50%,0)", padding: "3px 6px", borderRadius: 6, background: "#07120df2", border: `1px solid ${color}`, color: "white", fontSize: 8, fontWeight: 1000, whiteSpace: "nowrap" } }, `${warning.label} · ${warning.move?.name || "Impacto"}`),
        ]);
      });
      const telegraph = s.intent && s.intent.role !== "area" && el("div", { style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100 - 8}%`, transform: "translate(-50%,-50%)", zIndex: 6, pointerEvents: "none", padding: "4px 7px", borderRadius: 9, background: "#3e1111e8", border: "1px solid #ff8585", color: "white", fontSize: 8, fontWeight: 1000, whiteSpace: "nowrap", boxShadow: "0 2px 9px #0009" } }, `${boss ? "SINAL DO CHEFE" : "SINAL"} · ${s.intent.move.name}`);
      const windupMarker = s.playerWindup && el("div", { style: { position: "absolute", left: `${s.playerWindup.from.x * 100}%`, top: `${s.playerWindup.from.y * 100 - 8}%`, transform: "translate(-50%,-50%)", zIndex: 6, pointerEvents: "none", padding: "3px 6px", borderRadius: 8, background: "#24320be8", border: "1px solid #ffe16b", color: "#fff4bd", fontSize: 8, fontWeight: 950, whiteSpace: "nowrap" } }, `PREPARA · ${s.playerWindup.move.name}`);
      const projectileNodes = s.projectiles.flatMap((shot) => {
        const rect = arenaRect || { width: 360, height: 640 };
        const dx = (shot.toX - shot.fromX) * rect.width;
        const dy = (shot.toY - shot.fromY) * rect.height;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const size = clamp((shot.size || 28) * 0.68, 18, 32);
        const glyphStyles = {
          leaf: { borderRadius: "8% 82% 8% 82%", clipPath: "polygon(50% 0,72% 21%,100% 48%,74% 75%,50% 100%,26% 75%,0 48%,28% 21%)" },
          drop: { borderRadius: "52% 52% 68% 18%", transform: `translate(-50%,-50%) rotate(${angle + 45}deg)` },
          flame: { clipPath: "polygon(50% 0,70% 27%,96% 49%,82% 77%,57% 100%,24% 88%,8% 62%,29% 38%)" },
          shard: { clipPath: "polygon(50% 0,88% 20%,100% 61%,62% 100%,14% 83%,0 40%)" },
          wisp: { borderRadius: "50% 40% 55% 45%" },
          spark: { clipPath: "polygon(56% 0,42% 38%,75% 38%,27% 100%,39% 56%,12% 56%)" },
        };
        const glyphText = { leaf: "✦", drop: "•", flame: "✦", shard: "◆", wisp: "◉", spark: "⚡" }[shot.glyph] || "✦";
        const colors = shot.colors || ["#fff3b0", "#ffb703", "#ffffff"];
        const longShot = shot.family === "beam" || shot.family === "rush";
        const trail = el("div", { key: `${shot.id}-trail`, style: { position: "absolute", left: `${shot.x * 100}%`, top: `${shot.y * 100}%`, width: size * (longShot ? 2.4 : 1.8), height: longShot ? 5 : 3, transform: `translate(-92%,-50%) rotate(${angle}deg)`, transformOrigin: "100% 50%", background: `linear-gradient(90deg,transparent,${colors[0]},${colors[2]})`, borderRadius: 99, filter: "blur(1px)", opacity: 0.9, zIndex: 4, pointerEvents: "none" } });
        const core = el("div", { key: shot.id, style: { position: "absolute", left: `${shot.x * 100}%`, top: `${shot.y * 100}%`, width: longShot ? size * 1.35 : size, height: longShot ? size * 0.48 : size, transform: `translate(-50%,-50%) rotate(${angle}deg)`, display: "grid", placeItems: "center", background: `radial-gradient(circle at 35% 30%,${colors[2]},${colors[0]} 42%,${colors[1]})`, border: "1px solid #ffffffc7", boxShadow: `0 0 9px ${colors[0]},0 0 18px ${colors[1]}`, color: "white", fontSize: Math.max(10, size * 0.52), fontWeight: 1000, textShadow: "0 1px 4px #000", zIndex: 5, pointerEvents: "none", ...(glyphStyles[shot.glyph] || glyphStyles.spark) } }, longShot && shot.family === "beam" ? null : glyphText);
        return [trail, core];
      });
      const playerGuardAura = performance.now() < s.playerGuardUntil && el("div", { style: { position: "absolute", left: `${s.px * 100}%`, top: `${s.py * 100}%`, width: 68, height: 68, transform: "translate(-50%,-50%)", border: "3px solid #c7f3a7", borderRadius: "48% 52% 42% 58%", boxShadow: "inset 0 0 14px #b8ff9a99,0 0 18px #b8ff9a99", background: "#b8ff9a20", zIndex: 3, pointerEvents: "none", animation: "ev-rt-telegraph 240ms ease-in-out infinite alternate" } });
      const resultCurtain = s.done && el("div", { style: { position: "absolute", inset: 0, zIndex: 10, display: "grid", placeItems: "center", padding: 18, background: "#07110dcc", color: "white", fontSize: 24, fontWeight: 1000, textAlign: "center", textShadow: "0 5px 20px #000", pointerEvents: "none" } }, s.log);
      const hud = el("div", { style: { position: "relative", zIndex: 4, padding: "max(7px, env(safe-area-inset-top)) 12px 7px", background: "#07120de8", color: "white", boxShadow: "0 3px 12px #0005" } }, [
        el("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 } }, [
          el("div", { style: { minWidth: 0, flex: 1 } }, [
            el("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, [el("strong", { style: { fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, `${foeDef.name || foe.sp} · Nv ${foe.level}`), el("span", { style: { flex: "none", padding: "2px 6px", borderRadius: 6, color: "#f4e5b4", background: "#ffffff17", fontSize: 8, fontWeight: 900 } }, init.kind === "trainer" ? `${boss ? "CHEFE" : "DUELO"} ${s.foeIndex + 1}/${foeList.current.length}` : "SELVAGEM")]),
            el("div", { style: { height: 7, marginTop: 5, overflow: "hidden", borderRadius: 8, background: "#ffffff24", border: "1px solid #ffffff30" } }, el("div", { style: { width: `${enemyHpPct}%`, height: "100%", background: "linear-gradient(90deg,#f44343,#ff9970)", transition: "width 120ms linear" } })),
          ]),
          el(Sprite, { sp: foe.sp, size: 42, flip: true, fainted: foe.hp <= 0 }),
        ]),
        el("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 3, fontSize: 9, color: "#d4e2d6" } }, [
          el("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, arena.name),
          el("div", { style: { display: "flex", alignItems: "center", gap: 4, flex: "none" } }, [
            el("button", { type: "button", onClick: () => setShowArenaDetails((open) => !open), title: arenaDetailText, "aria-label": `Ver efeitos da arena: ${arenaDetailText}`, style: { padding: "2px 5px", border: 0, borderRadius: 6, background: "#ffffff15", color: pArena.favored ? "#c8f49c" : pArena.hindered ? "#ffb9a8" : "#d4e2d6", fontSize: 8, fontWeight: 900, cursor: "pointer" } }, `${arena.focus}${pArena.favored ? " ↑" : pArena.hindered ? " ↓" : " · ⓘ"}`),
            init.testMode && el("button", { type: "button", onClick: onExit, title: "Voltar ao menu inicial", "aria-label": "Sair do treino e voltar ao menu", style: { padding: "2px 6px", border: "1px solid #ffffff2c", borderRadius: 6, background: "#ffffff12", color: "#f0d6d2", fontSize: 8, fontWeight: 900, cursor: "pointer" } }, "SAIR ×"),
          ]),
        ]),
        showArenaDetails && el("div", { style: { position: "absolute", right: 10, top: "calc(100% + 4px)", zIndex: 9, maxWidth: "calc(100% - 20px)", padding: "7px 9px", borderRadius: 9, background: "#081813f5", border: "1px solid #ffffff40", color: "#f4f7f4", boxShadow: "0 5px 16px #0008", fontSize: 9, fontWeight: 850 } }, arenaDetailText),
      ]);
      const compactMeter = (label, value, color, title) => el("div", { title, style: { minWidth: 0, flex: 1, display: "flex", alignItems: "center", gap: 4 } }, [
        el("span", { style: { width: 14, color: "#e4eee8", fontSize: 8, fontWeight: 1000 } }, label),
        el("div", { style: { height: 5, flex: 1, overflow: "hidden", borderRadius: 6, background: "#111827aa" } }, el("div", { style: { width: `${clamp(value, 0, 100)}%`, height: "100%", background: color, transition: "width 100ms linear" } })),
      ]);
      const playerCard = el("div", { style: { display: "flex", alignItems: "center", gap: 7, padding: "5px 10px 4px", background: "#0a1914", color: "white" } }, [
        el(Sprite, { sp: active.sp, size: 40, fainted: active.hp <= 0 }),
        el("div", { style: { minWidth: 0, flex: 1 } }, [
          el("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 900 } }, [el("span", { style: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" } }, `${activeDef.name || active.sp} · Nv ${active.level}`), el("span", { style: { flex: "none", fontSize: 9, color: pArena.favored ? "#b5ed83" : pArena.hindered ? "#ffb4a5" : "#becbc1" } }, pArena.favored ? "SINERGIA ↑" : pArena.hindered ? "BIOMA ↓" : "")]),
          el("div", { style: { height: 5, marginTop: 3, overflow: "hidden", borderRadius: 6, background: "#ffffff22" } }, el("div", { style: { width: `${playerHpPct}%`, height: "100%", background: "linear-gradient(90deg,#38c878,#b3ef62)" } })),
          el("div", { style: { display: "flex", gap: 9, marginTop: 4 } }, [compactMeter("E", s.stamina, "linear-gradient(90deg,#36c8aa,#a5f3d0)", "Estamina"), compactMeter("P", s.power, "linear-gradient(90deg,#5596ff,#c4b5fd)", "Poder")]),
        ]),
        el("span", { title: switchRemaining > 0 ? "Tempo para poder trocar" : "Troca pronta", style: { flex: "none", minWidth: 34, color: switchRemaining > 0 ? "#f5cf73" : "#b7dfbe", fontSize: 9, fontWeight: 900, textAlign: "right" } }, switchRemaining > 0 ? `${Math.ceil(switchRemaining / 1000)}s` : "Q · PET"),
      ]);
      const buttonStyle = (background, minHeight = 42) => ({ minWidth: 0, minHeight, padding: "5px 7px", borderRadius: 10, border: "1px solid #ffffff36", background, color: "#fff", fontSize: 9, fontWeight: 950, lineHeight: 1.1, boxShadow: "0 2px 0 #0005", touchAction: "none", userSelect: "none", cursor: "pointer" });
      const compactAction = (label, onPointerDown, background, disabled = false, title = "") => el("button", { type: "button", disabled, title, onPointerDown, style: { ...buttonStyle(disabled ? "#263831" : background), opacity: disabled ? .56 : 1 } }, label);
      const moveChoices = moveMenuOpen && el("div", { style: { position: "absolute", zIndex: 8, right: 8, bottom: "calc(100% + 7px)", width: "min(270px, 74vw)", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 5, padding: 7, borderRadius: 15, border: "1px solid #ffffff35", background: "#081813f5", boxShadow: "0 8px 28px #0009" } }, playerMoves.map((entry, index) => {
        const attackSlot = playerMoves.slice(0, index).filter((item) => item.role !== "defense").length;
        const cost = entry.role === "defense" ? "20 EST." : attackSlot === 0 ? "13 EST." : `${17 + attackSlot * 9} POD.`;
        return compactAction(
        `${index + 1} · ${entry.role === "defense" ? "DEFESA" : entry.role === "area" ? "ÁREA" : "ATAQUE"}\n${entry.move.name} · ${cost}`,
        (event) => { event.preventDefault(); event.stopPropagation(); setSelectedMoveIndex(index); setMoveMenuOpen(false); },
        selectedIndex === index ? (entry.role === "defense" ? "#286357" : "#42734d") : "#1e3e38",
        false,
        `${entry.move.type} · Poder ${entry.move.power}${entry.role === "defense" ? " · usa o efeito do chão para proteger" : entry.role === "area" ? " · área marcada antes do impacto" : " · projétil em movimento"}`,
      );
      }));
      const controls = el("div", { style: { position: "relative", display: "grid", gridTemplateColumns: "132px minmax(0,1fr)", gap: 7, alignItems: "center", padding: "4px 8px max(7px, env(safe-area-inset-bottom))", background: "#07120df7", color: "white", touchAction: "none" } }, [
        el("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,42px)", gridTemplateRows: "repeat(3,42px)", gap: 1, justifyContent: "center", alignContent: "center" } }, [
          el("span", { style: { gridColumn: "2", gridRow: "1" } }, directionButton("▲", "up")),
          el("span", { style: { gridColumn: "1", gridRow: "2" } }, directionButton("◀", "left")),
          el("span", { style: { gridColumn: "2", gridRow: "3" } }, directionButton("▼", "down")),
          el("span", { style: { gridColumn: "3", gridRow: "2" } }, directionButton("▶", "right")),
        ]),
        el("div", { style: { position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(60px,.75fr)", gap: 5, alignContent: "center" } }, [
          compactAction([el("span", { style: { display: "block", fontSize: 8, opacity: .75 } }, (selectedEntry?.role === "defense" ? "DEFESA · " : "ATACAR · ") + selectedMoveCost), el("span", { style: { display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10 } }, selectedMove?.name || "Golpe")], (event) => { event.preventDefault(); if (selectedEntry) playerAction(selectedIndex); }, selectedEntry?.role === "defense" ? "linear-gradient(135deg,#297460,#174c47)" : "linear-gradient(135deg,#a14f27,#74351f)", s.done, selectedMove ? `${selectedMove.type} · Poder ${selectedMove.power}${selectedEntry.role === "defense" ? " · cria proteção do chão" : " · viaja até o rival"}` : "Sem golpes"),
          compactAction(`GOLPES ${playerMoves.length} ▴`, (event) => { event.preventDefault(); setMoveMenuOpen((open) => !open); }, "#244a63", s.done, "Escolha um ataque em voo, golpe de área ou defesa de chão."),
          compactAction("ESQUIVA", (event) => { event.preventDefault(); dodge(); }, "#56437d", s.done || s.stamina < 22, "Rolar na direção pressionada (E/Shift no teclado)."),
          init.kind === "wild" && compactAction("VINCULAR", (event) => { event.preventDefault(); tryCapture(); }, "#806128", s.done, "Tentar capturar este Pet."),
          moveChoices,
        ]),
      ]);
      const onPointerUp = () => {};
      const terrainObstacles = arenaField.obstacles.map((obstacle, index) => el("div", { key: `terrain-${index}`, style: {
        position: "absolute", left: `${obstacle.x * 100}%`, top: `${obstacle.y * 100}%`, width: `${obstacle.w * 100}%`, height: `${obstacle.h * 100}%`,
        zIndex: 1, pointerEvents: "none", display: "grid", placeItems: "center", overflow: "hidden",
        borderRadius: arenaField.obstacle === "canopy" ? "16% 21% 12% 14%" : "8%",
        clipPath: arenaField.obstacle === "canopy" ? "polygon(14% 8%,42% 0,68% 8%,87% 4%,100% 38%,92% 69%,77% 94%,47% 100%,19% 91%,0 62%,4% 32%)" : "polygon(18% 5%,70% 0,96% 26%,100% 59%,75% 94%,40% 100%,8% 77%,0 35%)",
        border: "2px solid #07130d55", borderBottom: "5px solid #07130d77",
        background: arenaField.obstacle === "canopy"
          ? "radial-gradient(circle at 24% 36%,#a0d56d 0 12%,transparent 13%),radial-gradient(circle at 67% 25%,#8acb60 0 18%,transparent 19%),radial-gradient(circle at 45% 65%,#4f914b 0 35%,transparent 36%),linear-gradient(145deg,#76b75a,#326b43)"
          : arenaField.obstacle === "reef"
            ? "radial-gradient(ellipse at 28% 35%,#d3e4bc 0 10%,transparent 12%),linear-gradient(145deg,#c7d0bd,#647f79 58%,#3b5b61)"
            : "linear-gradient(135deg,#e0d0fa 0%,#9b80bf 26%,#54446e 68%,#332b43 100%)",
        boxShadow: "inset 0 0 0 2px #ffffff21,0 5px 0 #07130d55",
      } }, arenaField.obstacle === "crystal" ? el("span", { style: { fontSize: 19, color: "#e5d1ff", textShadow: "0 0 9px #d8bdff" } }, "✦") : null));
      return el("div", { onPointerUp, onPointerCancel: onPointerUp, style: { width: "100%", height: "100dvh", overflow: "hidden", position: "relative", display: "grid", gridTemplateRows: "auto minmax(0,1fr) auto", color: "white", fontFamily: "system-ui,sans-serif", background: "#07120d", userSelect: "none", touchAction: "none" } }, [
        el("style", {}, `@keyframes ev-rt-telegraph{from{opacity:.38;transform:scale(.72)}to{opacity:1;transform:scale(1.12)}} @keyframes ev-rt-float{0%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,-36px)}} .ev-rt-hint{display:none}@media(min-width:700px){.ev-rt-hint{display:block}} @media(max-height:680px){.ev-rt-hint{display:none!important}}`),
        hud,
        el("div", { ref: arenaRef, style: { minHeight: 0, position: "relative", overflow: "hidden", backgroundColor: arenaField.tile, backgroundImage: `linear-gradient(45deg,${arenaField.tileAlt}68 25%,transparent 25%,transparent 75%,${arenaField.tileAlt}68 75%),linear-gradient(45deg,${arenaField.tileAlt}68 25%,transparent 25%,transparent 75%,${arenaField.tileAlt}68 75%)`, backgroundPosition: "0 0,20px 20px", backgroundSize: "40px 40px", imageRendering: "pixelated" } }, [
          el("div", { style: { position: "absolute", inset: 3, border: `6px solid ${arenaField.edge}`, outline: "2px solid #08140d88", boxShadow: `inset 0 0 0 3px ${arena.accent}50,inset 0 0 28px #06140b55,0 0 0 1px #ffffff20`, pointerEvents: "none", zIndex: 1 } }),
          ...terrainObstacles,
          ...areaWarningNodes,
          playerGuardAura,
          el("div", { style: { position: "absolute", left: `${s.px * 100}%`, top: `${s.py * 100}%`, transform: "translate(-50%,-50%)", transition: "left 45ms linear,top 45ms linear", filter: performance.now() < s.hurtUntil ? "brightness(1.7) saturate(2)" : performance.now() < s.dodgeUntil ? "opacity(.55) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 5px 3px #07110d99)", zIndex: 4 } }, el(Sprite, { sp: active.sp, size: 82, fainted: active.hp <= 0 })),
          telegraph,
          windupMarker,
          el("div", { style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100}%`, transform: "translate(-50%,-50%)", transition: "left 75ms linear,top 75ms linear", filter: performance.now() < s.enemyDodgeUntil ? "opacity(.58) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 5px 3px #07110d99)", zIndex: 4 } }, el(Sprite, { sp: foe.sp, size: 82, flip: true, fainted: foe.hp <= 0 })),
          ...projectileNodes,
          choreographyLayer,
          s.floating && performance.now() < s.floating.until && el("div", { style: { position: "absolute", left: `${(s.floating.x ?? s.ex) * 100}%`, top: `${(s.floating.y ?? s.ey) * 100 - 8}%`, color: "#fff3a7", fontWeight: 1000, fontSize: 19, textShadow: "0 3px 5px #000", transform: "translateX(-50%)", animation: "ev-rt-float 650ms ease-out forwards", zIndex: 46 } }, s.floating.text),
          !s.intent && s.log && performance.now() < (s.logUntil || 0) && el("div", { style: { position: "absolute", left: "50%", top: 9, transform: "translateX(-50%)", maxWidth: "82%", padding: "4px 8px", borderRadius: 8, background: "#06130edc", border: "1px solid #ffffff35", color: "white", textAlign: "center", fontSize: 9, fontWeight: 850, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pointerEvents: "none", zIndex: 5 } }, s.log),
          el("div", { className: "ev-rt-hint", style: { position: "absolute", right: 8, top: 8, padding: "4px 7px", borderRadius: 8, background: "#06130e9c", fontSize: 8, fontWeight: 800, opacity: .78 } }, "WASD mover · 1–5 técnicas · F/espaço defesa · E esquiva · Q trocar"),
          resultCurtain,
        ]),
        el("div", { style: { position: "relative", zIndex: 5, background: "#07120df7", boxShadow: "0 -4px 14px #0005" } }, [
          playerCard,
          el("div", { style: { display: "flex", alignItems: "center", gap: 5, minHeight: 39, padding: "2px 9px 3px", borderTop: "1px solid #ffffff13" } }, [
            ...effectiveSwitches,
            el("span", { style: { marginLeft: 2, color: "#c6d4ca", fontSize: 8, fontWeight: 850 } }, switchRemaining > 0 ? `troca em ${Math.ceil(switchRemaining / 1000)}s` : "troca pronta"),
          ]),
          controls,
        ]),
      ]);
    }

    function ChooseBattleMode({ props, Classic, Realtime }) {
      const [mode, setMode] = React.useState("choose");
      if (mode === "classic") return el(Classic, props);
      if (mode === "realtime") return el(Realtime, props);
      const trainer = props.init.kind === "trainer";
      const card = (title, detail, color, onClick) => el("button", { onClick, style: { width: "100%", textAlign: "left", borderRadius: 20, padding: 16, background: color, color: "white", fontWeight: 900, border: "1px solid #ffffff33", boxShadow: "0 5px 0 #0004", cursor: "pointer" } }, [el("div", { style: { fontSize: 18 } }, title), el("div", { style: { marginTop: 5, fontSize: 12, lineHeight: 1.45, opacity: .88, fontWeight: 600 } }, detail)]);
      return el("div", { style: { height: "100dvh", display: "grid", placeItems: "center", padding: 20, boxSizing: "border-box", background: "radial-gradient(ellipse at top,#24533d,#07130d 75%)", color: "white", fontFamily: "system-ui,sans-serif" } }, el("div", { style: { width: "100%", maxWidth: 420, padding: 22, borderRadius: 26, background: "#0a1d17ee", border: "1px solid #ffffff25", boxShadow: "0 24px 80px #0009" } }, [
        el("div", { style: { color: "#b6e88a", letterSpacing: ".18em", fontSize: 10, fontWeight: 1000 } }, "ECO VÍNCULO · COMBATE LOCAL"),
        el("h1", { style: { margin: "8px 0 4px", fontSize: 26, fontWeight: 1000 } }, "Escolha o modo de batalha"),
        el("p", { style: { margin: "0 0 18px", color: "#d1ddd5", fontSize: 13, lineHeight: 1.5 } }, "Estamos testando a nova luta em tempo real. O modo clássico continua disponível nesta etapa para comparar e proteger sua campanha."),
        card("⚔  Tempo real — prévia", "Movimente, ataque com os golpes existentes, gaste estamina e poder, defenda, esquive e explore as vantagens desta arena. Trocas voluntárias têm 15 s de intervalo.", "linear-gradient(120deg,#245a45,#137b75)", () => setMode("realtime")),
        el("div", { style: { height: 10 } }),
        card("↻  Batalha clássica", "Usa o sistema de turnos atual, sem alterações. Sua campanha e o modo online permanecem preservados.", "linear-gradient(120deg,#374151,#1f2937)", () => setMode("classic")),
        !trainer && el("button", { onClick: () => props.onEnd({ won: false, fled: true }), style: { display: "block", margin: "15px auto 0", padding: 9, color: "#e8f2eb", background: "transparent", fontWeight: 800, fontSize: 12, cursor: "pointer" } }, "Voltar ao mapa sem lutar"),
        trainer && el("div", { style: { marginTop: 13, textAlign: "center", fontSize: 10, color: "#f1c777", fontWeight: 800 } }, "Treinadores não permitem fuga."),
      ]));
    }
    return { RealtimeBattle, ChooseBattleMode };
  }

  window.EV_REALTIME_COMBAT = Object.freeze({ arenaFor, arenaStats, damageFor, telegraphRadius, availableMoves, canOccupy, moveInArena, createView });
})();
