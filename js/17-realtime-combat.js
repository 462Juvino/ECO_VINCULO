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

  function rogueFormation(count, arena, playerPosition = { x: 0.27, y: 0.63 }) {
    const candidates = [
      { x: 0.77, y: 0.18 }, { x: 0.88, y: 0.32 }, { x: 0.88, y: 0.49 },
      { x: 0.79, y: 0.76 }, { x: 0.61, y: 0.22 }, { x: 0.61, y: 0.79 },
      { x: 0.92, y: 0.70 }, { x: 0.90, y: 0.84 },
    ];
    const distance = (a, b) => window.EV_REALTIME_PHYSICS?.bodyDistance(a, b, 390, 640)
      ?? Math.hypot(a.x - b.x, a.y - b.y);
    const minions = [];
    for (const candidate of candidates) {
      const point = moveInArena(candidate, 0, 0, arena, 0.065);
      if (!canOccupy(point.x, point.y, arena, 0.065)) continue;
      if (distance(point, playerPosition) < 0.26 || minions.some((other) => distance(point, other) < 0.16)) continue;
      minions.push(point);
      if (minions.length >= clamp(Math.floor(Number(count) || 0), 0, 6)) break;
    }
    const prime = moveInArena({ x: 0.77, y: 0.43 }, 0, 0, arena, 0.075);
    return { minions, prime };
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

  function damageFor({ atk, def, power, typeMultiplier = 1, crit = false }) {
    const base = ((Math.max(1, atk) / Math.max(1, def)) * Math.max(1, power)) / 10;
    const reduced = base * clamp(typeMultiplier, 0.35, 2.5) * (crit ? 1.5 : 1);
    return Math.max(1, Math.floor(reduced));
  }

  function telegraphRadius(power, boss = false) {
    return power >= 58 ? (boss ? 0.23 : 0.18) : (boss ? 0.155 : 0.12);
  }

  function availableMoves(creature) {
    return Array.isArray(creature?.moves) ? creature.moves : [];
  }

  function rogueSequence(speciesId, level) {
    const count = window.EV_REALTIME_PHYSICS?.cloneCount(level) || 3;
    return [
      ...Array.from({ length: count }, (_, index) => ({
        sp: speciesId,
        level: Math.max(1, Number(level || 1) - 2),
        isClone: true,
        cloneOrdinal: index,
      })),
      { sp: speciesId, level: Math.max(1, Number(level || 1)), isClone: false, isPrime: true },
    ];
  }

  function chooseAiMove(profiles, power, stamina, style, distance, effectiveness = () => 1) {
    const physics = window.EV_REALTIME_PHYSICS;
    const ready = (profiles || []).map((entry, index) => ({
      ...entry,
      index,
      cost: physics?.movePowerCost(entry.move, index) ?? (index < 2 ? 20 : 60),
      typeScore: Number.isFinite(Number(effectiveness(entry.move?.type))) ? Number(effectiveness(entry.move?.type)) : 1,
    })).filter((entry) => entry.cost <= power && (entry.cost >= 60 ? 8 : 4) <= stamina)
      .filter((entry) => entry.role !== "charge" || distance <= 0.78);
    if (!ready.length) return null;
    const light = ready.filter((entry) => entry.cost === 20);
    const heavy = ready.filter((entry) => entry.cost === 60);
    const score = (entry) => entry.typeScore * 4
      + (entry.cost === 60 && power >= 70 ? 0.8 : 0)
      + (style === "aggressive" && distance < 0.48 ? (entry.role === "charge" ? 2.4 : entry.cost === 60 ? 1.4 : 0) : 0)
      + (style === "skirmisher" ? (entry.cost === 20 ? 2 : 0) + (entry.role === "charge" ? -1.5 : 0) : 0)
      + (style === "bulwark" && entry.cost === 60 ? 1.8 : 0);
    return ready.sort((a, b) => score(b) - score(a))[0] || light[0] || heavy[0];
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
      const rogueRun = init.kind === "wild" && init.rogueMode !== false;
      const foeList = React.useRef(null);
      if (!foeList.current) {
        const lineUp = init.kind === "trainer" && Array.isArray(init.team) && init.team.length
          ? init.team
          : rogueRun ? rogueSequence(init.foeSp, init.foeLevel) : [{ sp: init.foeSp, level: init.foeLevel }];
        foeList.current = lineUp.map((foe) => {
          const pet = makePet(foe.sp, foe.level);
          if (foe.isClone) {
            const profile = window.EV_REALTIME_PHYSICS?.cloneProfile(foe.cloneOrdinal, getStats(foe.sp, foe.level).maxHp);
            pet.isClone = true;
            pet.cloneOrdinal = foe.cloneOrdinal;
            pet.maxHpOverride = profile?.maxHp || Math.max(1, Math.floor(getStats(foe.sp, foe.level).maxHp * 0.46));
            pet.atkMultiplier = profile?.atkMultiplier || 0.66;
            pet.defMultiplier = profile?.defMultiplier || 0.74;
            pet.velMultiplier = profile?.velMultiplier || 1.08;
            pet.hp = pet.maxHpOverride;
          } else if (foe.isPrime) pet.isPrime = true;
          return pet;
        });
      }
      const arena = arenaFor(init.arena ?? init.bg);
      const boss = Boolean(init.isBoss || init.boss || /tat[aá]\s*alfa|guard[iã]o|chefe/i.test(`${init.trainerName || ""} ${init.npcId || ""}`));
      const rogueCount = rogueRun ? foeList.current.filter((entry) => entry.isClone).length : 0;
      const rogueLayout = rogueRun ? rogueFormation(rogueCount, arena) : null;
      const sim = React.useRef(null);
      if (!sim.current) {
        const now = performance.now();
        const firstSpawn = rogueLayout?.minions[0] || { x: 0.73, y: 0.38 };
        sim.current = {
          playerIndex: aliveStart,
          foeIndex: 0,
          px: 0.27,
          py: 0.63,
          ex: firstSpawn.x,
          ey: firstSpawn.y,
          swarm: rogueRun ? rogueLayout.minions.map((position, index) => ({
            foeIndex: index, x: position.x, y: position.y,
            stamina: 38, power: 34,
            attackAt: now + 920 + index * 260,
            windup: null, dodgeUntil: 0, moving: false, facingLeft: true,
          })) : [],
          primePos: rogueLayout?.prime || null,
          playerMoving: false,
          playerFacingLeft: false,
          playerPoseUntil: 0,
          stamina: 100,
          power: 100,
          enemyStamina: 100,
          enemyPower: 100,
          nextActionAt: [0, 0, 0, 0, 0],
          nextDodgeAt: 0,
          nextSwitchAt: 0,
          dodgeUntil: 0,
          hurtUntil: 0,
          enemyDodgeUntil: 0,
          enemyDodgeAt: 0,
          nextContactAt: 0,
          aiStrafeSign: Math.random() < 0.5 ? -1 : 1,
          bondAttempt: null,
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
      const [attackScenes, setAttackScenes] = React.useState([]);
      const [selectedMoveIndex, setSelectedMoveIndex] = React.useState(null);
      const [moveMenuOpen, setMoveMenuOpen] = React.useState(false);
      const [showArenaDetails, setShowArenaDetails] = React.useState(false);
      const held = React.useRef(new Set());
      const raf = React.useRef(0);
      const arenaRef = React.useRef(null);
      const physicalDistance = (a, b, rect = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 }) =>
        window.EV_REALTIME_PHYSICS?.bodyDistance(a, b, rect.width, rect.height) ?? Math.hypot(a.x - b.x, a.y - b.y);
      const attackSceneTimers = React.useRef(new Map());
      const s = sim.current;
      const positionForFoe = (index) => {
        if (index === s.foeIndex) return { x: s.ex, y: s.ey };
        const minion = s.swarm?.find((entry) => entry.foeIndex === index);
        if (minion) return { x: minion.x, y: minion.y };
        return s.primePos || { x: s.ex, y: s.ey };
      };
      const selectFoe = (index) => {
        const target = foeList.current[index];
        if (!target || target.hp <= 0 || s.done) return false;
        if (rogueRun && target.isPrime && foeList.current.some((entry) => entry.isClone && entry.hp > 0)) return false;
        const point = positionForFoe(index);
        s.foeIndex = index;
        s.ex = point.x; s.ey = point.y;
        const minion = s.swarm?.find((entry) => entry.foeIndex === index);
        if (minion) { s.enemyStamina = minion.stamina; s.enemyPower = minion.power; }
        s.intent = null;
        s.attackAt = performance.now() + 650;
        repaint((n) => n + 1);
        return true;
      };
      const active = party[s.playerIndex] || party[aliveStart];
      const foe = foeList.current[s.foeIndex];
      const activeDef = species(active?.sp) || {};
      const foeDef = species(foe?.sp) || {};
      const activeBase = getStats(active?.sp, active?.level || 1);
      const foeBaseRaw = getStats(foe?.sp, foe?.level || 1);
      const foeBase = foe?.isClone ? {
        ...foeBaseRaw,
        maxHp: foe.maxHpOverride || foeBaseRaw.maxHp,
        atk: Math.max(1, Math.round(foeBaseRaw.atk * (foe.atkMultiplier || 0.66))),
        def: Math.max(1, Math.round(foeBaseRaw.def * (foe.defMultiplier || 0.74))),
        vel: Math.max(1, Math.round(foeBaseRaw.vel * (foe.velMultiplier || 1.08))),
      } : foeBaseRaw;
      const pArena = arenaStats(activeBase, activeDef.types, arena);
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
          return moves;
      };
      const playerMoves = describeMoves(active, activeDef);
      const pMaxHp = activeBase.maxHp;
      const eMaxHp = foe.maxHpOverride || foeBase.maxHp;
      const switchRemaining = Math.max(0, s.nextSwitchAt - performance.now());
      const playerHpPct = clamp((active?.hp ?? 0) / Math.max(1, pMaxHp) * 100, 0, 100);
      const enemyHpPct = clamp((foe?.hp ?? 0) / Math.max(1, eMaxHp) * 100, 0, 100);
      const rogueCloneTotal = rogueRun ? foeList.current.filter((entry) => entry.isClone).length : 0;
      const liveCloneCount = rogueRun ? foeList.current.filter((entry) => entry.isClone && entry.hp > 0).length : 0;

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
        setAttackScenes((activeScenes) => [...activeScenes, scene]);
        const timer = window.setTimeout(() => {
          setAttackScenes((activeScenes) => activeScenes.filter((activeScene) => activeScene.runId !== scene.runId));
          attackSceneTimers.current.delete(scene.runId);
        }, Math.max(650, scene.durationMs || 1050));
        attackSceneTimers.current.set(scene.runId, timer);
        return scene;
      };
      const finish = (result) => {
        if (s.done) return;
        s.done = true;
        held.current.clear();
        repaint((n) => n + 1);
        window.setTimeout(() => onEnd(result), 700);
      };
      const updateXpAndEvolution = (defeated, activeIndex, rewardScale = 1) => {
        gs.current.dexSeen ||= [];
        gs.current.dexCaught ||= [];
        gs.current.sintonia ||= {};
        gs.current.box ||= [];
        for (let index = 0; index < party.length; index++) {
          const pet = party[index];
          if (pet.hp <= 0) continue;
          const reward = Math.max(1, Math.floor(xpForDefeat(defeated.level, init.kind === "trainer", pet.level, index === activeIndex) * rewardScale));
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
      const advanceFoe = (defeated, now = performance.now(), defeatedIndex = s.foeIndex) => {
        for (const type of (species(party[s.playerIndex]?.sp)?.types || [])) gs.current.sintonia[type] = (gs.current.sintonia[type] || 0) + 1;
        updateXpAndEvolution(defeated, s.playerIndex, defeated?.isClone ? 0.24 : 1);
        s.playerWon += 1;
        if (rogueRun) {
          s.intent = null;
          s.playerWindup = null;
          s.projectiles = s.projectiles.filter((shot) => shot.owner === "enemy" || shot.targetFoeIndex !== defeatedIndex);
          s.areaStrikes = s.areaStrikes.filter((strike) => strike.owner === "enemy" || strike.targetFoeIndex !== defeatedIndex);
          if (defeated?.isClone) {
            s.stamina = Math.min(100, s.stamina + 17);
            s.power = Math.min(100, s.power + 12);
            const nextIndex = foeList.current.findIndex((entry, index) => entry.isClone && index !== defeatedIndex && entry.hp > 0);
            if (nextIndex >= 0) {
              const nextActor = s.swarm.find((entry) => entry.foeIndex === nextIndex);
              s.foeIndex = nextIndex;
              s.ex = nextActor?.x ?? 0.77;
              s.ey = nextActor?.y ?? 0.38;
              s.enemyStamina = nextActor?.stamina ?? 38;
              s.enemyPower = nextActor?.power ?? 34;
              s.enemyDodgeUntil = 0;
              s.enemyDodgeAt = now + 450;
              s.attackAt = now + 900;
              const remaining = foeList.current.filter((entry) => entry.isClone && entry.hp > 0).length;
              s.log = `Eco dissipou · ${remaining} ${remaining === 1 ? "clone restante" : "clones restantes"}.`;
            } else {
              const primeIndex = foeList.current.findIndex((entry) => entry.isPrime);
              s.foeIndex = primeIndex;
              s.ex = s.primePos?.x ?? 0.77;
              s.ey = s.primePos?.y ?? 0.43;
              s.enemyStamina = 100;
              s.enemyPower = 100;
              s.enemyDodgeUntil = 0;
              s.enemyDodgeAt = now + 650;
              s.attackAt = now + 1450;
              s.log = "Os ecos caíram! O Pet original está vulnerável e pode ser vinculado.";
            }
            s.logUntil = now + 1900;
            repaint((n) => n + 1);
            return;
          }
          s.log = "O Pet original caiu. O Eco da arena foi vencido!";
          finish({ won: true, rogueRun: true, defeatedClones: foeList.current.filter((entry) => entry.isClone && entry.hp <= 0).length });
          return;
        }
        s.foeIndex += 1;
        s.intent = null;
        s.projectiles = [];
        s.areaStrikes = [];
        if (defeated?.isClone) {
          s.stamina = Math.min(100, s.stamina + 17);
          s.power = Math.min(100, s.power + 12);
        }
        if (s.foeIndex >= foeList.current.length) {
          s.log = rogueRun ? "O Pet original caiu. O Eco da arena foi vencido!" : "Vitória! O vínculo prevaleceu.";
          finish({ won: true, rogueRun, defeatedClones: rogueRun ? foeList.current.length - 1 : 0 });
          return;
        }
        const nextFoe = foeList.current[s.foeIndex];
        const spawnPoints = [{ x: 0.76, y: 0.34 }, { x: 0.77, y: 0.72 }, { x: 0.25, y: 0.30 }, { x: 0.72, y: 0.50 }, { x: 0.27, y: 0.74 }];
        const spawn = spawnPoints.map((point) => moveInArena(point, 0, 0, arena, 0.07))
          .find((point) => canOccupy(point.x, point.y, arena, 0.07) && Math.hypot(point.x - s.px, point.y - s.py) > 0.24)
          || { x: 0.73, y: 0.38 };
        s.ex = spawn.x;
        s.ey = spawn.y;
        s.enemyStamina = nextFoe.isClone ? 78 : 100;
        s.enemyPower = nextFoe.isClone ? 64 : 100;
        s.enemyDodgeUntil = 0;
        s.enemyDodgeAt = now + 550;
        s.attackAt = now + (nextFoe.isClone ? 1550 : 1250);
        s.log = nextFoe.isClone
          ? `Eco clone ${s.foeIndex + 1}/${foeList.current.length - 1} surgiu!`
          : "O Pet original entrou na arena. Agora é possível tentar o vínculo!";
        s.logUntil = now + 1900;
        repaint((n) => n + 1);
      };
      const handlePlayerKnockout = () => {
        const next = party.findIndex((pet, index) => index !== s.playerIndex && pet.hp > 0);
        if (next < 0) {
          s.intent = null;
          s.log = "Seu time foi derrotado.";
          finish({ won: false, rogueRun, defeatedClones: rogueRun ? s.foeIndex : 0 });
        } else swapTo(next, true);
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
      const launchProjectile = (owner, attackerSp, attackerLevel, move, family, role, from, to, crit, attackerIndex = s.foeIndex) => {
        const definition = species(attackerSp) || {};
        const attacker = owner === "enemy" ? foeList.current[attackerIndex] : party[s.playerIndex];
        const base = getStats(attackerSp, attackerLevel || 1);
        const actualBase = attacker?.isClone ? {
          ...base,
          vel: Math.max(1, Math.round(base.vel * (attacker.velMultiplier || 1.08))),
        } : base;
        const stats = arenaStats(actualBase, definition.types, arena);
        const visual = planMove(attackerSp, attackerLevel, move, from, to, owner === "player");
        const rect = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
        const distance = physicalDistance(from, to, rect);
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
          attackerIndex: owner === "enemy" ? attackerIndex : null,
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
      const applyHit = (owner, attackerSp, attackerLevel, move, crit, from, impactPoint, attackerIndex = s.foeIndex, targetFoeIndex = s.foeIndex) => {
        const now = performance.now();
        const playerTarget = owner === "enemy";
        if (playerTarget && s.bondAttempt) {
          s.bondAttempt = null;
          s.log = "O impacto quebrou o Eco de Vínculo!";
          s.logUntil = now + 1100;
        }
        const target = playerTarget ? party[s.playerIndex] : foeList.current[targetFoeIndex];
        if (!target || target.hp <= 0) return;
        const attackerDef = species(attackerSp) || {};
        const targetDef = species(target.sp) || {};
        const currentFoe = foeList.current[attackerIndex];
        const attackerActor = playerTarget ? currentFoe : party[s.playerIndex];
        const targetActor = playerTarget ? party[s.playerIndex] : foeList.current[targetFoeIndex];
        const attackerBase = getStats(attackerSp, attackerLevel || 1);
        const targetBase = getStats(target.sp, target.level || 1);
        const scaledAttackerBase = attackerActor?.isClone ? {
          ...attackerBase,
          atk: Math.max(1, Math.round(attackerBase.atk * (attackerActor.atkMultiplier || 0.66))),
          def: Math.max(1, Math.round(attackerBase.def * (attackerActor.defMultiplier || 0.74))),
          vel: Math.max(1, Math.round(attackerBase.vel * (attackerActor.velMultiplier || 1.08))),
        } : attackerBase;
        const scaledTargetBase = targetActor?.isClone ? {
          ...targetBase,
          atk: Math.max(1, Math.round(targetBase.atk * (targetActor.atkMultiplier || 0.66))),
          def: Math.max(1, Math.round(targetBase.def * (targetActor.defMultiplier || 0.74))),
          vel: Math.max(1, Math.round(targetBase.vel * (targetActor.velMultiplier || 1.08))),
        } : targetBase;
        const attackerStats = arenaStats(scaledAttackerBase, attackerDef.types, arena);
        const targetStats = arenaStats(scaledTargetBase, targetDef.types, arena);
        const multiplier = getEffectiveness(move.type, targetDef.types || []);
        const rawDamage = damageFor({ atk: attackerStats.stats.atk, def: targetStats.stats.def, power: move.power, typeMultiplier: multiplier, crit });
        const damage = playerTarget && boss ? Math.ceil(rawDamage * 1.18) : rawDamage;
        const viewport = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
        target.hp = Math.max(0, target.hp - damage);
        if (playerTarget) {
          const impulse = window.EV_REALTIME_PHYSICS?.knockbackVector(impactPoint, from, clamp(0.045 + damage * 0.0007, 0.045, 0.09), viewport.width, viewport.height) || { x: 0.06, y: 0 };
          const pushed = moveInArena({ x: s.px, y: s.py }, impulse.x, impulse.y, arena, 0.055);
          s.px = pushed.x;
          s.py = pushed.y;
          s.hurtUntil = now + 320;
        } else {
          const impulse = window.EV_REALTIME_PHYSICS?.knockbackVector(impactPoint, from, clamp(0.045 + damage * 0.0007, 0.045, 0.09), viewport.width, viewport.height) || { x: -0.06, y: 0 };
          const targetPosition = positionForFoe(targetFoeIndex);
          const pushed = moveInArena(targetPosition, impulse.x, impulse.y, arena, 0.055);
          const actor = s.swarm?.find((entry) => entry.foeIndex === targetFoeIndex);
          if (actor) { actor.x = pushed.x; actor.y = pushed.y; }
          if (targetFoeIndex === s.foeIndex) { s.ex = pushed.x; s.ey = pushed.y; }
          if (foeList.current[targetFoeIndex]?.isPrime) s.primePos = pushed;
        }
        playAttackScene(attackerDef, move, damage, crit, from, impactPoint, owner === "player", { impactOnly: true });
        s.floating = { text: `${crit ? "CRÍTICO · " : ""}-${damage}`, x: impactPoint.x, y: impactPoint.y, until: now + 700 };
        s.log = `${attackerDef.name || attackerSp} acertou ${move.name}: -${damage} HP.`;
        s.logUntil = now + 1500;
        if (!playerTarget && target.hp <= 0) {
          advanceFoe(target, now, targetFoeIndex);
        } else if (playerTarget && target.hp <= 0) {
          handlePlayerKnockout();
        }
      };
      const applyContactDamage = (now, opponent, opponentSpecies, opponentBase, currentPet, currentSpecies, currentBase) => {
        const physics = window.EV_REALTIME_PHYSICS;
        const rect = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
        const playerPoint = { x: s.px, y: s.py };
        const enemyPoint = { x: s.ex, y: s.ey };
        if (!physics || physics.bodyDistance(playerPoint, enemyPoint, rect.width, rect.height) > 0.232 || now < s.nextContactAt || now < s.dodgeUntil || now < s.enemyDodgeUntil) return;
        if (s.bondAttempt) {
          s.bondAttempt = null;
          s.log = "O choque interrompeu o Eco de Vínculo!";
          s.logUntil = now + 1100;
        }
        const playerEffective = arenaStats(currentBase, currentSpecies.types, arena).stats;
        const enemyEffective = arenaStats(opponentBase, opponentSpecies.types, arena).stats;
        const pDamage = damageFor({
          atk: playerEffective.atk,
          def: enemyEffective.def,
          power: 48,
          typeMultiplier: getEffectiveness(currentSpecies.types?.[0], opponentSpecies.types || []),
        });
        const eDamage = damageFor({
          atk: enemyEffective.atk,
          def: playerEffective.def,
          power: 48,
          typeMultiplier: getEffectiveness(opponentSpecies.types?.[0], currentSpecies.types || []),
        });
        currentPet.hp = Math.max(0, currentPet.hp - pDamage);
        opponent.hp = Math.max(0, opponent.hp - eDamage);
        const push = physics.knockbackVector(playerPoint, enemyPoint, 0.075, rect.width, rect.height);
        const pushedPlayer = moveInArena(playerPoint, push.x, push.y, arena, 0.06);
        const pushedEnemy = moveInArena(enemyPoint, -push.x, -push.y, arena, 0.06);
        s.px = pushedPlayer.x; s.py = pushedPlayer.y;
        s.ex = pushedEnemy.x; s.ey = pushedEnemy.y;
        s.hurtUntil = now + 300;
        s.enemyDodgeUntil = now + 250;
        s.nextContactAt = now + 1200;
        s.floating = { text: `CHOQUE · -${pDamage} / -${eDamage}`, x: (s.px + s.ex) / 2, y: (s.py + s.ey) / 2, until: now + 850 };
        s.log = `Choque elemental! ${currentSpecies.name || currentPet.sp} -${pDamage} · ${opponentSpecies.name || opponent.sp} -${eDamage}.`;
        s.logUntil = now + 1400;
        if (opponent.hp <= 0) advanceFoe(opponent, now);
        if (currentPet.hp <= 0 && !s.done) handlePlayerKnockout();
      };
      const playerAction = (index) => {
        if (s.done || s.bondAttempt) return;
        if (s.playerWindup) return;
        const attacker = party[s.playerIndex];
        const attackerDef = species(attacker?.sp) || {};
        const currentMoves = describeMoves(attacker, attackerDef);
        const entry = currentMoves[index];
        const move = entry?.move;
        const now = performance.now();
        if (!move) return;
        if (now < s.nextActionAt[index]) return;
        const currentArenaStats = arenaStats(getStats(attacker?.sp, attacker?.level || 1), attackerDef.types, arena);
        const attackSlot = index;
        const powerCost = window.EV_REALTIME_PHYSICS?.movePowerCost(move, attackSlot) ?? (attackSlot < 2 ? 20 : 60);
        const staminaCost = powerCost >= 60 ? 8 : 4;
        if (s.stamina < staminaCost || s.power < powerCost) {
          report(s.stamina < staminaCost ? "Estamina baixa: recue e recupere o fôlego." : `Faltam ${powerCost}% de poder para ${move.name}.`);
          return;
        }
        const distance = physicalDistance({ x: s.ex, y: s.ey }, { x: s.px, y: s.py });
        const range = entry.role === "charge" ? 0.78 : 1.35;
        if (distance > range) {
          report(`${move.name}: o oponente está além do alcance.`);
          return;
        }
        s.stamina -= staminaCost;
        s.power -= powerCost;
        const speedFactor = clamp(60 / Math.max(24, currentArenaStats.stats.vel), 0.64, 1.45);
        s.nextActionAt[index] = now + (powerCost >= 60 ? 1380 : 760) * speedFactor;
        const windup = clamp(390 - currentArenaStats.stats.vel * 1.2, 190, 350);
        s.playerWindup = {
          move, role: entry.role, family: entry.family,
          attackerSp: attacker.sp, attackerLevel: attacker.level,
          crit: Math.random() < 0.08,
          from: { x: s.px, y: s.py }, target: { x: s.ex, y: s.ey },
          launchAt: now + windup,
        };
        s.playerPoseUntil = now + windup + 360;
        s.log = `${attackerDef.name || attacker.sp} prepara ${move.name}…`;
        s.logUntil = now + windup + 500;
        repaint((n) => n + 1);
      };
      const dodge = () => {
        const now = performance.now();
        if (s.done || now < s.nextDodgeAt || s.stamina < 22) return;
        const rect = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
        const minDimension = Math.min(rect.width, rect.height);
        let dx = (held.current.has("right") ? 1 : 0) - (held.current.has("left") ? 1 : 0);
        let dy = (held.current.has("down") ? 1 : 0) - (held.current.has("up") ? 1 : 0);
        if (!dx && !dy) { dx = (s.px - s.ex) * rect.width; dy = (s.py - s.ey) * rect.height; }
        else { dx *= rect.width; dy *= rect.height; }
        const len = Math.hypot(dx, dy) || 1;
        const dodgeDistance = 0.28 * minDimension;
        const dodgedTo = moveInArena({ x: s.px, y: s.py }, (dx / len) * dodgeDistance / rect.width, (dy / len) * dodgeDistance / rect.height, arena, 0.055);
        if (dodgedTo.x === s.px && dodgedTo.y === s.py) {
          report("O limite da arena bloqueou a esquiva.");
          return;
        }
        s.stamina -= 22;
        s.dodgeUntil = now + 390;
        s.nextDodgeAt = now + 700;
        s.playerPoseUntil = now + 390;
        s.px = dodgedTo.x;
        s.py = dodgedTo.y;
        report("Esquiva! Janela breve de invulnerabilidade.");
      };
      const playerActionRef = React.useRef(playerAction);
      const dodgeRef = React.useRef(dodge);
      playerActionRef.current = playerAction;
      dodgeRef.current = dodge;
      const tryCapture = () => {
        if (s.done || init.kind !== "wild" || s.bondAttempt) return;
        if (rogueRun && foe.isClone) {
          report("Esse é um Eco clone. Derrote os ecos menores para alcançar o Pet original e tentar o vínculo.");
          return;
        }
        const matched = (foeDef.types || []).some((type) => (gs.current.affinities || []).includes(type));
        const requiresEssence = foeDef.essenceOnly || !matched;
        const useEssence = requiresEssence && (gs.current.items?.essencia || 0) > 0;
        if (requiresEssence && !useEssence) {
          report(`Sem afinidade para vincular ${foeDef.name || foe.sp}; use Essência Neutra ou aproxime a energia do Pet original de você.`);
          return;
        }
        if (useEssence) gs.current.items.essencia -= 1;
        let chance = useEssence ? 0.9 : 0.22 + (1 - foe.hp / Math.max(1, eMaxHp)) * 0.68 + (physicalDistance({ x: s.px, y: s.py }, { x: s.ex, y: s.ey }) < 0.35 ? 0.1 : 0);
        chance = clamp(chance, 0.05, 0.98);
        const relic = gs.current.equippedRelic && relics?.[gs.current.equippedRelic];
        if (relic?.affinity && (foeDef.types || []).includes(relic.affinity)) chance = Math.min(1, chance * 1.15);
        const now = performance.now();
        s.bondAttempt = {
          speciesId: foe.sp,
          level: foe.level,
          name: foeDef.name || foe.sp,
          types: [...(foeDef.types || [])],
          foeIndex: s.foeIndex,
          success: Math.random() < chance,
          startedAt: now,
          endsAt: now + 1550,
          from: { x: s.px, y: s.py },
          to: { x: s.ex, y: s.ey },
        };
        s.intent = null;
        s.playerWindup = null;
        s.attackAt = now + 1550;
        setMoveMenuOpen(false);
        s.log = "O Eco de Vínculo está tentando alcançar o Pet…";
        s.logUntil = now + 1550;
        repaint((n) => n + 1);
      };
      const completeBondAttempt = (attempt) => {
        if (attempt.success) {
          const captured = makePet(attempt.speciesId, attempt.level);
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
          for (const type of attempt.types) gs.current.sintonia[type] = (gs.current.sintonia[type] || 0) + 1;
          if (init.caveId) {
            gs.current.caveCaptures ||= {};
            gs.current.caveCaptures[init.caveId] = (gs.current.caveCaptures[init.caveId] || 0) + 1;
          }
          s.log = boxed ? `${attempt.name} se vinculou! O time está cheio; foi para a reserva.` : `${attempt.name} se vinculou a você!`;
          finish({ won: false, caught: true, captured: true, capturedSpecies: attempt.speciesId, rogueRun, defeatedClones: s.foeIndex });
        } else {
          report("O Eco escapou! Reposicione-se e tente o vínculo de novo.");
          s.attackAt = performance.now() + 350;
        }
      };

      React.useEffect(() => {
        window.EV_MUSIC?.enterBattle?.(init);
        const keys = { ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down", ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right" };
        const down = (event) => {
          if (keys[event.code]) { event.preventDefault(); event.stopImmediatePropagation(); held.current.add(keys[event.code]); }
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
          else if (event.code === "Tab" && rogueRun && !event.repeat) {
            event.preventDefault(); event.stopImmediatePropagation();
            const availableTargets = foeList.current.map((entry, index) => ({ entry, index }))
              .filter(({ entry }) => entry.hp > 0 && (!entry.isPrime || !foeList.current.some((clone) => clone.isClone && clone.hp > 0)));
            const current = availableTargets.findIndex(({ index }) => index === s.foeIndex);
            if (availableTargets.length > 1) selectFoe(availableTargets[(current + 1) % availableTargets.length].index);
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
          const now = time;
          if (s.bondAttempt && now >= s.bondAttempt.endsAt) {
            const attempt = s.bondAttempt;
            s.bondAttempt = null;
            completeBondAttempt(attempt);
            if (s.done) return;
          }
          const currentPet = party[s.playerIndex];
          const currentSpecies = species(currentPet?.sp) || {};
          const currentBase = getStats(currentPet?.sp, currentPet?.level || 1);
          const currentStats = arenaStats(currentBase, currentSpecies.types, arena);
          const opponent = foeList.current[s.foeIndex];
          const opponentSpecies = species(opponent?.sp) || {};
          const opponentBaseRaw = getStats(opponent?.sp, opponent?.level || 1);
          const opponentBase = opponent?.isClone ? {
            ...opponentBaseRaw,
            maxHp: opponent.maxHpOverride || opponentBaseRaw.maxHp,
            atk: Math.max(1, Math.round(opponentBaseRaw.atk * (opponent.atkMultiplier || 0.66))),
            def: Math.max(1, Math.round(opponentBaseRaw.def * (opponent.defMultiplier || 0.74))),
            vel: Math.max(1, Math.round(opponentBaseRaw.vel * (opponent.velMultiplier || 1.08))),
          } : opponentBaseRaw;
          const opponentStats = arenaStats(opponentBase, opponentSpecies.types, arena);
          const physics = window.EV_REALTIME_PHYSICS;
          const bestMatchup = (attackTypes, defenseTypes) => {
            const scores = (attackTypes || []).map((type) => Number(getEffectiveness(type, defenseTypes || []))).filter(Number.isFinite);
            return scores.length ? Math.max(...scores) : 1;
          };
          const pEnergyNow = physics?.energyProfile(currentBase, currentSpecies.types, opponentSpecies.types, arena,
            bestMatchup(currentSpecies.types, opponentSpecies.types)) || { staminaRegen: 8, powerRegen: 5.5 };
          const eEnergyNow = physics?.energyProfile(opponentBase, opponentSpecies.types, currentSpecies.types, arena,
            bestMatchup(opponentSpecies.types, currentSpecies.types)) || { staminaRegen: 8, powerRegen: 5.5 };
          const rectNow = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
          const minDimension = Math.min(rectNow.width, rectNow.height);
          const moveX = (held.current.has("right") ? 1 : 0) - (held.current.has("left") ? 1 : 0);
          const moveY = (held.current.has("down") ? 1 : 0) - (held.current.has("up") ? 1 : 0);
          const moveLength = Math.hypot(moveX, moveY) || 1;
          s.playerMoving = Boolean((moveX || moveY) && !s.bondAttempt);
          if (moveX < 0) s.playerFacingLeft = true;
          else if (moveX > 0) s.playerFacingLeft = false;
          if ((moveX || moveY) && !s.bondAttempt) {
            const speed = 0.34 * clamp(currentStats.stats.vel / 52, 0.62, 1.55);
            const travel = speed * dt * minDimension;
            const moved = moveInArena({ x: s.px, y: s.py }, moveX / moveLength * travel / rectNow.width, moveY / moveLength * travel / rectNow.height, arena);
            s.px = moved.x;
            s.py = moved.y;
          }
          s.stamina = clamp(s.stamina + pEnergyNow.staminaRegen * dt, 0, 100);
          s.power = clamp(s.power + pEnergyNow.powerRegen * dt, 0, 100);
          s.enemyStamina = clamp(s.enemyStamina + eEnergyNow.staminaRegen * dt, 0, 100);
          s.enemyPower = clamp(s.enemyPower + eEnergyNow.powerRegen * dt, 0, 100);
          const bodyGap = clamp(88 / minDimension, 0.09, 0.225);
          const distance = physicalDistance({ x: s.px, y: s.py }, { x: s.ex, y: s.ey }, rectNow);
          const style = physics?.combatStyle(opponentSpecies.types, opponentStats.stats) || "balanced";
          s.enemyMoving = false;
          if (!s.bondAttempt) {
            const vx = (s.px - s.ex) * rectNow.width / minDimension;
            const vy = (s.py - s.ey) * rectNow.height / minDimension;
            const length = Math.hypot(vx, vy) || 1;
            const speed = 0.16 * clamp(opponentStats.stats.vel / 52, 0.62, 1.48);
            let mx = vx / length;
            let my = vy / length;
            let shouldMove = false;
            if (s.enemyPower < 20 || s.enemyStamina < 15) {
              mx = -mx; my = -my; shouldMove = distance < 0.66;
            } else if (style === "skirmisher") {
              if (distance < 0.34) { mx = -mx; my = -my; shouldMove = true; }
              else if (distance > 0.58) shouldMove = true;
              else {
                const sign = Math.sin(time / 1500) >= 0 ? 1 : -1;
                mx = -vy / length * sign; my = vx / length * sign; shouldMove = true;
              }
            } else if (style === "aggressive") shouldMove = distance > 0.245;
            else if (style === "bulwark") shouldMove = distance > 0.285;
            else if (distance > 0.34) shouldMove = true;
            else if (distance < 0.255) { mx = -mx; my = -my; shouldMove = true; }
            else if (Math.sin(time / 2100) > 0.72) { mx = -vy / length; my = vx / length; shouldMove = true; }
            if (shouldMove) {
              const travel = speed * dt * minDimension;
              const enemyMove = moveInArena({ x: s.ex, y: s.ey }, mx * travel / rectNow.width, my * travel / rectNow.height, arena, 0.065);
              s.enemyMoving = enemyMove.x !== s.ex || enemyMove.y !== s.ey;
              s.ex = enemyMove.x;
              s.ey = enemyMove.y;
            }
            const separated = physics?.separateBodies({ x: s.px, y: s.py }, { x: s.ex, y: s.ey }, bodyGap, rectNow.width, rectNow.height);
            if (separated?.separated) {
              const pSafe = moveInArena({ x: s.px, y: s.py }, separated.a.x - s.px, separated.a.y - s.py, arena, 0.065);
              const eSafe = moveInArena({ x: s.ex, y: s.ey }, separated.b.x - s.ex, separated.b.y - s.ey, arena, 0.065);
              s.px = pSafe.x; s.py = pSafe.y;
              s.ex = eSafe.x; s.ey = eSafe.y;
            }
            applyContactDamage(now, opponent, opponentSpecies, opponentBase, currentPet, currentSpecies, currentBase, bodyGap);
          }
          const selectedMinion = s.swarm?.find((actor) => actor.foeIndex === s.foeIndex);
          if (selectedMinion) {
            selectedMinion.x = s.ex; selectedMinion.y = s.ey;
            selectedMinion.stamina = s.enemyStamina; selectedMinion.power = s.enemyPower;
            selectedMinion.moving = s.enemyMoving; selectedMinion.facingLeft = s.px < s.ex;
          }
          if (rogueRun && !s.bondAttempt) {
            const swarmActors = s.swarm.filter((actor) => actor.foeIndex !== s.foeIndex && foeList.current[actor.foeIndex]?.hp > 0);
            for (const actor of swarmActors) {
              const pet = foeList.current[actor.foeIndex];
              const definition = species(pet.sp) || {};
              const raw = getStats(pet.sp, pet.level || 1);
              const scaled = {
                ...raw,
                maxHp: pet.maxHpOverride || raw.maxHp,
                atk: Math.max(1, Math.round(raw.atk * (pet.atkMultiplier || 0.66))),
                def: Math.max(1, Math.round(raw.def * (pet.defMultiplier || 0.74))),
                vel: Math.max(1, Math.round(raw.vel * (pet.velMultiplier || 1.08))),
              };
              const effective = arenaStats(scaled, definition.types, arena).stats;
              const minionPoint = { x: actor.x, y: actor.y };
              const minionDistance = physicalDistance(minionPoint, { x: s.px, y: s.py }, rectNow);
              const minionStyle = physics?.combatStyle(definition.types, effective) || "balanced";
              const energy = physics?.energyProfile(scaled, definition.types, currentSpecies.types, arena,
                bestMatchup(definition.types, currentSpecies.types)) || { staminaRegen: 7, powerRegen: 4.5 };
              actor.stamina = clamp(actor.stamina + energy.staminaRegen * dt, 0, 100);
              actor.power = clamp(actor.power + energy.powerRegen * dt, 0, 100);
              actor.facingLeft = s.px < actor.x;
              actor.moving = false;
              if (!actor.windup) {
                const vx = (s.px - actor.x) * rectNow.width / minDimension;
                const vy = (s.py - actor.y) * rectNow.height / minDimension;
                const length = Math.hypot(vx, vy) || 1;
                let mx = vx / length, my = vy / length, shouldMove = false;
                if (actor.stamina < 12 || actor.power < 12) {
                  mx = -mx; my = -my; shouldMove = minionDistance < 0.62;
                } else if (minionStyle === "skirmisher") {
                  if (minionDistance < 0.31) { mx = -mx; my = -my; shouldMove = true; }
                  else if (minionDistance > 0.54) shouldMove = true;
                  else { const sign = Math.sin(time / 900 + actor.foeIndex) >= 0 ? 1 : -1; mx = -vy / length * sign; my = vx / length * sign; shouldMove = true; }
                } else if (minionStyle === "aggressive") shouldMove = minionDistance > 0.28;
                else if (minionDistance > 0.43) shouldMove = true;
                else if (minionDistance < 0.25) { mx = -mx; my = -my; shouldMove = true; }
                if (shouldMove) {
                  const travel = 0.12 * clamp(effective.vel / 52, 0.62, 1.45) * dt * minDimension;
                  const moved = moveInArena(minionPoint, mx * travel / rectNow.width, my * travel / rectNow.height, arena, 0.055);
                  actor.x = moved.x; actor.y = moved.y;
                  actor.moving = moved.x !== minionPoint.x || moved.y !== minionPoint.y;
                }
              }
              if (actor.windup && now >= actor.windup.fireAt) {
                const cast = actor.windup;
                actor.windup = null;
                actor.poseUntil = now + 350;
                launchProjectile("enemy", pet.sp, pet.level, cast.move, cast.family, "projectile", { x: actor.x, y: actor.y }, cast.target, Math.random() < 0.035, actor.foeIndex);
                actor.attackAt = now + (cast.cost >= 60 ? 3100 : 2450) * clamp(60 / Math.max(25, effective.vel), 0.78, 1.34);
              }
              if (!actor.windup && now >= actor.attackAt) {
                const profiles = describeMoves(pet, definition);
                const entry = chooseAiMove(profiles, actor.power, actor.stamina, minionStyle, minionDistance,
                  (moveType) => getEffectiveness(moveType, currentSpecies.types || []));
                if (entry) {
                  const cost = entry.cost ?? (entry.index < 2 ? 20 : 60);
                  actor.power = Math.max(0, actor.power - cost);
                  actor.stamina = Math.max(0, actor.stamina - (cost >= 60 ? 8 : 4));
                  actor.windup = { move: entry.move, family: entry.family, cost, fireAt: now + 260, target: { x: s.px, y: s.py } };
                } else actor.attackAt = now + 380;
              }
              const blockers = [
                { x: s.px, y: s.py },
                { x: s.ex, y: s.ey },
                ...(s.primePos && foeList.current.some((entry) => entry.isClone && entry.hp > 0) ? [s.primePos] : []),
                ...s.swarm.filter((other) => other.foeIndex !== actor.foeIndex && other.foeIndex !== s.foeIndex && foeList.current[other.foeIndex]?.hp > 0).map((other) => ({ x: other.x, y: other.y })),
              ];
              for (const blocker of blockers) {
                const separated = physics?.separateBodies(blocker, { x: actor.x, y: actor.y }, 0.13, rectNow.width, rectNow.height);
                if (separated?.separated) {
                  const safe = moveInArena({ x: actor.x, y: actor.y }, separated.b.x - actor.x, separated.b.y - actor.y, arena, 0.055);
                  actor.x = safe.x; actor.y = safe.y;
                }
              }
            }
          }
          if (s.playerWindup && now >= s.playerWindup.launchAt) {
            const cast = s.playerWindup;
            s.playerWindup = null;
            if (cast.role === "area") launchAreaStrike("player", cast.attackerSp, cast.attackerLevel, cast.move, cast.from, cast.target, cast.crit, false);
            else launchProjectile("player", cast.attackerSp, cast.attackerLevel, cast.move, cast.family, cast.role, cast.from, cast.target, cast.crit);
          }
          if (!s.bondAttempt && !s.intent && now >= s.attackAt) {
            const opponentMoves = opponentSpecies.moves || [];
            const profiles = describeMoves(opponent, opponentSpecies);
            const entry = chooseAiMove(profiles, s.enemyPower, s.enemyStamina, style, distance,
              (moveType) => getEffectiveness(moveType, currentSpecies.types || []))
              || (opponentMoves.length && s.enemyPower >= 20 && s.enemyStamina >= 4
                ? { move: opponentMoves[0], family: "beam", role: "projectile", index: 0, cost: 20 }
                : null);
            if (!entry) {
              s.attackAt = now + 320;
            } else {
            const move = entry.move;
            const cost = entry.cost ?? (entry.index < 2 ? 20 : 60);
            const staminaCost = cost >= 60 ? 8 : 4;
            s.enemyPower = Math.max(0, s.enemyPower - cost);
            s.enemyStamina = Math.max(0, s.enemyStamina - staminaCost);
            const heavyTelegraph = cost >= 60;
            const telegraph = boss
              ? clamp((heavyTelegraph ? 1050 : 760) - opponentStats.stats.vel * 1.1, 470, heavyTelegraph ? 920 : 700)
              : clamp((heavyTelegraph ? 1120 : 790) - opponentStats.stats.vel * 1.25, 500, heavyTelegraph ? 1000 : 740);
            s.intent = { move, role: entry.role, family: entry.family, cost, landsAt: now + telegraph, targetX: s.px, targetY: s.py, hitRange: telegraphRadius(move.power, boss) };
            s.log = entry.role === "area"
              ? `${boss ? "CHEFE" : "OPONENTE"} prepara ${move.name} · saia da marca!`
              : `${boss ? "CHEFE" : "OPONENTE"} prepara ${move.name} · projétil a caminho`;
            s.logUntil = now + telegraph;
            }
          } else if (s.intent && now >= s.intent.landsAt) {
            const intent = s.intent;
            s.intent = null;
            if (intent.role === "area") {
              launchAreaStrike("enemy", opponent.sp, opponent.level, intent.move, { x: s.ex, y: s.ey }, { x: intent.targetX, y: intent.targetY }, Math.random() < (boss ? 0.09 : 0.06), boss);
            } else {
              launchProjectile("enemy", opponent.sp, opponent.level, intent.move, intent.family, intent.role, { x: s.ex, y: s.ey }, { x: intent.targetX, y: intent.targetY }, Math.random() < (boss ? 0.09 : 0.06));
            }
            s.attackAt = now + (intent.cost >= 60 ? 1550 : 950) * clamp(60 / Math.max(25, opponentStats.stats.vel), 0.75, 1.35);
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
                applyHit(strike.owner, strike.attackerSp, strike.attackerLevel, strike.move, strike.crit, strike.from, targetPos, strike.attackerIndex ?? s.foeIndex, strike.targetFoeIndex ?? s.foeIndex);
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
                if (leftMs > 170 && leftMs < 850 && physicalDistance({ x: projectile.x, y: projectile.y }, { x: s.ex, y: s.ey }, rectNow) < 0.32) {
                  projectile.evadeChecked = true;
                  const chance = clamp(0.08 + opponentStats.stats.vel / 250, 0.20, 0.52);
                  if (Math.random() < chance) {
                    const dx = (projectile.toX - projectile.fromX) * rectNow.width;
                    const dy = (projectile.toY - projectile.fromY) * rectNow.height;
                    const length = Math.hypot(dx, dy) || 1;
                    const nx = -dy / length, ny = dx / length;
                    const dodgeDistance = 0.14 * minDimension;
                    const first = moveInArena({ x: s.ex, y: s.ey }, nx * dodgeDistance / rectNow.width, ny * dodgeDistance / rectNow.height, arena, 0.055);
                    const second = moveInArena({ x: s.ex, y: s.ey }, -nx * dodgeDistance / rectNow.width, -ny * dodgeDistance / rectNow.height, arena, 0.055);
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
              const remainingDistance = physicalDistance({ x: projectile.x, y: projectile.y }, { x: projectile.toX, y: projectile.toY }, rectNow);
              const step = Math.min(remainingDistance, projectile.speed * dt);
              const ratio = remainingDistance ? step / remainingDistance : 1;
              projectile.x += dx * ratio;
              projectile.y += dy * ratio;
              const playerTarget = projectile.owner === "enemy";
              const targetPos = playerTarget ? { x: s.px, y: s.py } : { x: s.ex, y: s.ey };
              const dodged = playerTarget ? now < s.dodgeUntil : now < s.enemyDodgeUntil;
              if (!dodged && physicalDistance({ x: projectile.x, y: projectile.y }, targetPos, rectNow) <= 0.075) {
                applyHit(projectile.owner, projectile.attackerSp, projectile.attackerLevel, projectile.move, projectile.crit, { x: projectile.fromX, y: projectile.fromY }, targetPos, projectile.attackerIndex ?? s.foeIndex, projectile.targetFoeIndex ?? s.foeIndex);
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
          for (const timer of attackSceneTimers.current.values()) window.clearTimeout(timer);
          attackSceneTimers.current.clear();
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
      const selectedIndex = selectedMoveIndex ?? 0;
      const selectedEntry = playerMoves[selectedIndex] || playerMoves[0];
      const selectedMove = selectedEntry?.move;
      const selectedAttackSlot = selectedIndex;
      const selectedMovePowerCost = selectedMove ? (window.EV_REALTIME_PHYSICS?.movePowerCost(selectedMove, selectedAttackSlot) ?? (selectedAttackSlot < 2 ? 20 : 60)) : 0;
      const selectedMoveCost = `${selectedMovePowerCost}% POD.`;
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
      const choreographyLayer = attackScenes.length && window.EV_ATTACK_CHOREOGRAPHY?.View
        ? el("div", { style: { position: "absolute", inset: 0, zIndex: 44, pointerEvents: "none" } }, attackScenes.map((scene) => el(window.EV_ATTACK_CHOREOGRAPHY.View, { key: scene.runId, scene })))
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
      const swarmWindupNodes = rogueRun ? s.swarm.filter((actor) => actor.windup && foeList.current[actor.foeIndex]?.hp > 0).map((actor) =>
        el("div", { key: `swarm-windup-${actor.foeIndex}`, title: `Ataque iminente: ${actor.windup.move.name}`, style: { position: "absolute", left: `${actor.x * 100}%`, top: `${actor.y * 100 - 8}%`, transform: "translate(-50%,-50%)", zIndex: 7, pointerEvents: "none", display: "grid", placeItems: "center", width: 23, height: 23, borderRadius: "50%", background: "#8e321bea", border: "2px solid #ffd27a", color: "#fff2ba", fontSize: 13, fontWeight: 1000, boxShadow: "0 0 12px #ff9f43", animation: "ev-rt-telegraph 350ms ease-in-out infinite alternate" } }, "!")) : [];
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
      const bondOrb = s.bondAttempt && (() => {
        const rect = arenaRef.current?.getBoundingClientRect() || { width: 390, height: 640 };
        return el("div", { key: "bond-echo-orb", "aria-label": "Eco de Vínculo em movimento", style: { position: "absolute", left: `${s.bondAttempt.from.x * 100}%`, top: `${s.bondAttempt.from.y * 100}%`, width: 42, height: 42, display: "grid", placeItems: "center", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%,#fff9d1,#7ee8cf 36%,#5a66de 75%,#182d62)", color: "white", border: "2px solid #efffffe0", boxShadow: "0 0 15px #a7ffee,0 0 32px #7a87ff", fontSize: 23, fontWeight: 1000, zIndex: 8, pointerEvents: "none", "--bond-dx": `${(s.bondAttempt.to.x - s.bondAttempt.from.x) * rect.width}px`, "--bond-dy": `${(s.bondAttempt.to.y - s.bondAttempt.from.y) * rect.height}px`, animation: "ev-rt-bond-travel 1500ms cubic-bezier(.2,.75,.28,1) both" } }, "✧");
      })();
      const resultCurtain = s.done && el("div", { style: { position: "absolute", inset: 0, zIndex: 10, display: "grid", placeItems: "center", padding: 18, background: "#07110dcc", color: "white", fontSize: 24, fontWeight: 1000, textAlign: "center", textShadow: "0 5px 20px #000", pointerEvents: "none" } }, s.log);
      const hud = el("div", { style: { position: "relative", zIndex: 4, padding: "max(7px, env(safe-area-inset-top)) 12px 7px", background: "#07120de8", color: "white", boxShadow: "0 3px 12px #0005" } }, [
        el("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 } }, [
          el("div", { style: { minWidth: 0, flex: 1 } }, [
            el("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, [el("strong", { style: { fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, `${foeDef.name || foe.sp} · Nv ${foe.level}`), el("span", { style: { flex: "none", padding: "2px 6px", borderRadius: 6, color: rogueRun && foe.isClone ? "#d8c5ff" : "#f4e5b4", background: rogueRun && foe.isClone ? "#7451a455" : "#ffffff17", fontSize: 8, fontWeight: 900 } }, rogueRun ? (foe.isClone ? `ECOS ${liveCloneCount}/${rogueCloneTotal}` : "ORIGINAL") : init.kind === "trainer" ? `${boss ? "CHEFE" : "DUELO"} ${s.foeIndex + 1}/${foeList.current.length}` : "SELVAGEM")]),
            el("div", { style: { height: 7, marginTop: 5, overflow: "hidden", borderRadius: 8, background: "#ffffff24", border: "1px solid #ffffff30" } }, el("div", { style: { width: `${enemyHpPct}%`, height: "100%", background: "linear-gradient(90deg,#f44343,#ff9970)", transition: "width 120ms linear" } })),
            el("div", { title: `Estamina inimiga: ${Math.round(s.enemyStamina)}%`, style: { height: 3, marginTop: 3, overflow: "hidden", borderRadius: 8, background: "#ffffff1c" } }, el("div", { style: { width: `${clamp(s.enemyStamina, 0, 100)}%`, height: "100%", background: "linear-gradient(90deg,#268d84,#8ae6cc)", transition: "width 120ms linear" } })),
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
        const cost = (window.EV_REALTIME_PHYSICS?.movePowerCost(entry.move, index) ?? (index < 2 ? 20 : 60)) + "% POD.";
        return compactAction(
        `${index + 1} · ${entry.role === "area" ? "ÁREA" : "ATAQUE"}\n${entry.move.name} · ${cost}`,
        (event) => { event.preventDefault(); event.stopPropagation(); setSelectedMoveIndex(index); setMoveMenuOpen(false); },
        selectedIndex === index ? "#42734d" : "#1e3e38",
        false,
        `${entry.move.type} · Poder ${entry.move.power}${entry.role === "area" ? " · técnica ofensiva de área" : entry.role === "charge" ? " · investida ofensiva" : " · projétil ofensivo"}`,
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
          compactAction([el("span", { style: { display: "block", fontSize: 8, opacity: .75 } }, "ATACAR · " + selectedMoveCost), el("span", { style: { display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 10 } }, selectedMove?.name || "Golpe")], (event) => { event.preventDefault(); if (selectedEntry) playerAction(selectedIndex); }, "linear-gradient(135deg,#a14f27,#74351f)", s.done || Boolean(s.bondAttempt), selectedMove ? `${selectedMove.type} · Poder ${selectedMove.power} · técnica ofensiva` : "Sem golpes"),
          compactAction(`GOLPES ${playerMoves.length} ▴`, (event) => { event.preventDefault(); setMoveMenuOpen((open) => !open); }, "#244a63", s.done || Boolean(s.bondAttempt), "Selecione uma técnica ofensiva; golpes de área têm marca de impacto."),
          compactAction("ESQUIVA", (event) => { event.preventDefault(); dodge(); }, "#56437d", s.done || s.stamina < 22, "Rolar na direção pressionada (E/Shift no teclado)."),
          init.kind === "wild" && compactAction(foe.isClone ? "ALCANÇAR ORIGINAL" : "VINCULAR", (event) => { event.preventDefault(); tryCapture(); }, "#806128", s.done || Boolean(s.bondAttempt) || Boolean(foe.isClone), foe.isClone ? "Derrote este eco para chegar ao Pet original." : "Iniciar Eco de Vínculo; sofrer um impacto pode interrompê-lo."),
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
      const prime = rogueRun ? foeList.current.find((entry) => entry.isPrime) : null;
      const primeProtected = Boolean(rogueRun && liveCloneCount > 0 && prime && s.primePos);
      const primeIndex = rogueRun ? foeList.current.findIndex((entry) => entry.isPrime) : -1;
      const primeNode = primeProtected ? el("div", { key: "rogue-prime-shield", style: { position: "absolute", left: `${s.primePos.x * 100}%`, top: `${s.primePos.y * 100}%`, transform: "translate(-50%,-50%)", zIndex: 2, pointerEvents: "none", display: "grid", placeItems: "center", width: 100, height: 100 } }, [
        el("div", { style: { position: "absolute", inset: 2, border: "2px solid #c7f9ffcc", borderRadius: "50%", background: "radial-gradient(circle,#a8f3ff16 34%,#7eeaff38 62%,#aff7ff12 70%)", boxShadow: "0 0 14px #8beaff, inset 0 0 16px #8beaff66", animation: "ev-rt-shield 2s ease-in-out infinite" } }),
        el("div", { className: "ev-rt-creature ev-rt-creature--idle", style: { opacity: .74, filter: "saturate(.7) drop-shadow(0 4px 4px #07110d99)" } }, el(Sprite, { sp: prime.sp, size: 75, flip: true, fainted: false, battleMode: true, tScale: 1.2 })),
        el("span", { style: { position: "absolute", bottom: -3, padding: "3px 6px", borderRadius: 7, background: "#09202be8", border: "1px solid #8beaff", color: "#d7fbff", fontSize: 8, fontWeight: 1000, whiteSpace: "nowrap" } }, "ORIGINAL · PROTEGIDO"),
      ]) : null;
      const primeActiveNode = rogueRun && !liveCloneCount && prime?.hp > 0 ? el("div", { key: "rogue-prime-active", role: "button", tabIndex: 0, "aria-label": `Selecionar Pet original, vida ${Math.ceil(prime.hp)} de ${prime.maxHpOverride || getStats(prime.sp, prime.level).maxHp}`, onPointerDown: (event) => { event.stopPropagation(); selectFoe(primeIndex); }, onKeyDown: (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectFoe(primeIndex); } }, style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100}%`, transform: "translate(-50%,-50%)", transition: "left 75ms linear,top 75ms linear", zIndex: 5, cursor: "pointer", filter: performance.now() < s.enemyDodgeUntil ? "opacity(.58) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 6px 4px #07110d99)" } }, [
        el("div", { className: `ev-rt-creature ev-rt-creature--${performance.now() < (s.enemyPoseUntil || 0) || s.intent ? "attack" : s.enemyMoving ? "move" : "idle"}` }, [el("span", { className: "ev-rt-creature-shadow" }), el(Sprite, { sp: prime.sp, size: 88, flip: true, fainted: false, battleMode: true, tScale: s.enemyMoving ? 3.2 : 1.4 })]),
        el("span", { style: { position: "absolute", left: "50%", bottom: -4, transform: "translate(-50%,100%)", padding: "3px 6px", borderRadius: 7, background: "#152413e8", border: "1px solid #d4ee90", color: "#f2ffd1", fontSize: 8, fontWeight: 1000, whiteSpace: "nowrap" } }, s.foeIndex === primeIndex ? "ORIGINAL · VULNERÁVEL" : "TOQUE PARA ALVEJAR"),
      ]) : null;
      const cloneNodes = rogueRun ? s.swarm.filter((actor) => foeList.current[actor.foeIndex]?.hp > 0).map((actor) => {
        const pet = foeList.current[actor.foeIndex];
        const maxHp = pet.maxHpOverride || getStats(pet.sp, pet.level).maxHp;
        const selected = actor.foeIndex === s.foeIndex;
        const motion = performance.now() < (actor.poseUntil || 0) || actor.windup ? "attack" : actor.moving ? "move" : "idle";
        return el("div", { key: `rogue-echo-${actor.foeIndex}`, role: "button", tabIndex: 0, "aria-label": `Selecionar Eco ${actor.foeIndex + 1}, vida ${Math.ceil(pet.hp)} de ${maxHp}`, onPointerDown: (event) => { event.stopPropagation(); selectFoe(actor.foeIndex); }, onKeyDown: (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectFoe(actor.foeIndex); } }, style: { position: "absolute", left: `${actor.x * 100}%`, top: `${actor.y * 100}%`, transform: "translate(-50%,-50%)", transition: "left 80ms linear,top 80ms linear", zIndex: selected ? 5 : 4, cursor: "pointer", outline: "none", filter: performance.now() < actor.dodgeUntil ? "opacity(.55) drop-shadow(0 0 13px #fff)" : "drop-shadow(0 5px 3px #07110d99)" } }, [
          selected && el("div", { style: { position: "absolute", left: "50%", top: "50%", width: 63, height: 63, transform: "translate(-50%,-50%)", border: "2px solid #f0d7ff", borderRadius: "50%", boxShadow: "0 0 13px #c4a6ff88", pointerEvents: "none" } }),
          el("div", { className: `ev-rt-creature ev-rt-creature--${motion}`, style: { filter: "opacity(.88) saturate(.76) drop-shadow(0 0 8px #b699ff)" } }, [el("span", { className: "ev-rt-creature-shadow" }), el(Sprite, { sp: pet.sp, size: 50, flip: actor.facingLeft, fainted: false, battleMode: true, tScale: actor.moving ? 3.2 : 1.4 })]),
          el("div", { style: { position: "absolute", left: "50%", bottom: 2, transform: "translateX(-50%)", width: 36, height: 4, overflow: "hidden", border: "1px solid #07110d", borderRadius: 9, background: "#111827" } }, el("div", { style: { width: `${clamp(pet.hp / Math.max(1, maxHp) * 100, 0, 100)}%`, height: "100%", background: "linear-gradient(90deg,#bb63ed,#e7c8ff)" } })),
          selected && el("span", { style: { position: "absolute", left: "50%", top: -3, transform: "translate(-50%,-100%)", padding: "2px 4px", borderRadius: 5, background: "#241332e8", color: "#f0dcff", fontSize: 7, fontWeight: 1000, whiteSpace: "nowrap" } }, "ALVO"),
        ]);
      }) : [];
      const singleEnemyNode = !rogueRun ? el("div", { key: `enemy-${s.foeIndex}`, style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100}%`, transform: "translate(-50%,-50%)", transition: "left 75ms linear,top 75ms linear", filter: performance.now() < s.enemyDodgeUntil ? "opacity(.58) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 5px 3px #07110d99)", zIndex: 4 } }, el("div", { className: `ev-rt-creature ev-rt-creature--${performance.now() < (s.enemyPoseUntil || 0) || s.intent ? "attack" : s.enemyMoving ? "move" : "idle"}` }, [el("span", { className: "ev-rt-creature-shadow" }), el(Sprite, { sp: foe.sp, size: 82, flip: true, fainted: foe.hp <= 0, battleMode: true, tScale: s.enemyMoving ? 3.2 : 1.4 })])) : null;
      return el("div", { onPointerUp, onPointerCancel: onPointerUp, style: { width: "100%", height: "100dvh", overflow: "hidden", position: "relative", display: "grid", gridTemplateRows: "auto minmax(0,1fr) auto", color: "white", fontFamily: "system-ui,sans-serif", background: "#07120d", userSelect: "none", touchAction: "none" } }, [
        el("style", {}, `@keyframes ev-rt-telegraph{from{opacity:.38;transform:scale(.72)}to{opacity:1;transform:scale(1.12)}} @keyframes ev-rt-float{0%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,-36px)}} @keyframes ev-rt-bond-travel{0%{opacity:0;transform:translate(-50%,-50%) scale(.45);filter:blur(4px)}15%{opacity:1;filter:blur(0)}55%{transform:translate(calc(-50% + var(--bond-mid-dx)),calc(-50% + var(--bond-mid-dy))) scale(1.2)}100%{opacity:.12;transform:translate(calc(-50% + var(--bond-dx)),calc(-50% + var(--bond-dy))) scale(.2);filter:blur(2px)}} .ev-rt-hint{display:none}@media(min-width:700px){.ev-rt-hint{display:block}} @media(max-height:680px){.ev-rt-hint{display:none!important}}`),
        hud,
        el("div", { ref: arenaRef, style: { minHeight: 0, position: "relative", overflow: "hidden", backgroundColor: arenaField.tile, backgroundImage: `linear-gradient(45deg,${arenaField.tileAlt}68 25%,transparent 25%,transparent 75%,${arenaField.tileAlt}68 75%),linear-gradient(45deg,${arenaField.tileAlt}68 25%,transparent 25%,transparent 75%,${arenaField.tileAlt}68 75%)`, backgroundPosition: "0 0,20px 20px", backgroundSize: "40px 40px", imageRendering: "pixelated" } }, [
          el("div", { style: { position: "absolute", inset: 3, border: `6px solid ${arenaField.edge}`, outline: "2px solid #08140d88", boxShadow: `inset 0 0 0 3px ${arena.accent}50,inset 0 0 28px #06140b55,0 0 0 1px #ffffff20`, pointerEvents: "none", zIndex: 1 } }),
          ...terrainObstacles,
          primeNode,
          primeActiveNode,
          ...areaWarningNodes,
          el("div", { style: { position: "absolute", left: `${s.px * 100}%`, top: `${s.py * 100}%`, transform: "translate(-50%,-50%)", transition: "left 45ms linear,top 45ms linear", filter: performance.now() < s.hurtUntil ? "brightness(1.7) saturate(2)" : performance.now() < s.dodgeUntil ? "opacity(.55) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 5px 3px #07110d99)", zIndex: 4 } }, el("div", { className: `ev-rt-creature ev-rt-creature--${performance.now() < s.hurtUntil ? "hurt" : performance.now() < s.dodgeUntil ? "dodge" : performance.now() < s.playerPoseUntil ? "attack" : s.playerMoving ? "move" : "idle"}`, style: { "--ev-rt-lunge-x": `${s.playerFacingLeft ? -11 : 11}px` } }, [el("span", { className: "ev-rt-creature-shadow" }), el(Sprite, { sp: active.sp, size: 82, flip: s.playerFacingLeft, fainted: active.hp <= 0, battleMode: true, tScale: s.playerMoving ? 3.2 : 1.4 })])),
          telegraph,
          windupMarker,
          ...swarmWindupNodes,
          ...cloneNodes,
          singleEnemyNode,
          ...projectileNodes,
          choreographyLayer,
          bondOrb,
          s.floating && performance.now() < s.floating.until && el("div", { style: { position: "absolute", left: `${(s.floating.x ?? s.ex) * 100}%`, top: `${(s.floating.y ?? s.ey) * 100 - 8}%`, color: "#fff3a7", fontWeight: 1000, fontSize: 19, textShadow: "0 3px 5px #000", transform: "translateX(-50%)", animation: "ev-rt-float 650ms ease-out forwards", zIndex: 46 } }, s.floating.text),
          !s.intent && s.log && performance.now() < (s.logUntil || 0) && el("div", { style: { position: "absolute", left: "50%", top: 9, transform: "translateX(-50%)", maxWidth: "82%", padding: "4px 8px", borderRadius: 8, background: "#06130edc", border: "1px solid #ffffff35", color: "white", textAlign: "center", fontSize: 9, fontWeight: 850, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pointerEvents: "none", zIndex: 5 } }, s.log),
          el("div", { className: "ev-rt-hint", style: { position: "absolute", right: 8, top: 8, padding: "4px 7px", borderRadius: 8, background: "#06130e9c", fontSize: 8, fontWeight: 800, opacity: .78 } }, rogueRun ? "WASD mover · toque/Tab alvo · 1–5 ataques · E esquiva" : "WASD mover · 1–5 ataques · E esquiva · Q trocar"),
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
        card("⚔  Tempo real — ecos rogue-like", "Atravesse ondas de ecos menores, esquive, escolha ataques leves ou pesados e tente criar vínculo com o Pet original. A batalha clássica segue disponível.", "linear-gradient(120deg,#245a45,#137b75)", () => setMode("realtime")),
        el("div", { style: { height: 10 } }),
        card("↻  Batalha clássica", "Usa o sistema de turnos atual, sem alterações. Sua campanha e o modo online permanecem preservados.", "linear-gradient(120deg,#374151,#1f2937)", () => setMode("classic")),
        !trainer && el("button", { onClick: () => props.onEnd({ won: false, fled: true }), style: { display: "block", margin: "15px auto 0", padding: 9, color: "#e8f2eb", background: "transparent", fontWeight: 800, fontSize: 12, cursor: "pointer" } }, "Voltar ao mapa sem lutar"),
        trainer && el("div", { style: { marginTop: 13, textAlign: "center", fontSize: 10, color: "#f1c777", fontWeight: 800 } }, "Treinadores não permitem fuga."),
      ]));
    }
    return { RealtimeBattle, ChooseBattleMode };
  }

  window.EV_REALTIME_COMBAT = Object.freeze({ arenaFor, arenaStats, damageFor, telegraphRadius, availableMoves, rogueSequence, rogueFormation, chooseAiMove, canOccupy, moveInArena, createView });
})();
