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
      staminaRegen: 0.96,
      powerRegen: 1.18,
      boosts: { Pedra: { def: 1.12, atk: 1.04 }, Sombra: { atk: 1.09, vel: 1.04 } },
      penalties: { Flora: { vel: 0.94, staminaRegen: 0.92 } },
    },
  });

  function arenaFor(background) {
    return ARENAS[background] || ARENAS.grass;
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

  function createView({ React, h, Sprite, species, getStats, getEffectiveness, makePet, xpForDefeat, xpToNext, evolve, relics, registerSpecies, registerEvolution }) {
    const el = (type, props = {}, children = null) => h(type, { ...props, ...(children === null ? {} : { children }) });
    const bar = (label, value, color, text) => el("div", { style: { marginTop: 5 } }, [
      el("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 800, color: "#f7f5ef" } }, [el("span", {}, label), el("span", {}, text)]),
      el("div", { style: { height: 9, overflow: "hidden", borderRadius: 8, background: "#111827aa", border: "1px solid #ffffff30" } },
        el("div", { style: { width: `${clamp(value, 0, 100)}%`, height: "100%", background: color, transition: "width 100ms linear" } })),
    ]);

    function RealtimeBattle({ gs, init, onEnd }) {
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
          nextActionAt: [0, 0, 0, 0],
          nextDodgeAt: 0,
          nextSwitchAt: 0,
          dodgeUntil: 0,
          hurtUntil: 0,
          guarding: false,
          intent: null,
          attackAt: now + 1200,
          frameAt: now,
          paintAt: 0,
          done: false,
          log: "Leia o sinal do oponente e escolha o momento de agir.",
          floating: null,
          playerWon: 0,
        };
      }
      const [, repaint] = React.useState(0);
      const [attackScene, setAttackScene] = React.useState(null);
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
      const pMaxHp = activeBase.maxHp;
      const eMaxHp = foeBase.maxHp;
      const playerMoves = (activeDef.moves || []).slice(0, 4);
      const switchRemaining = Math.max(0, s.nextSwitchAt - performance.now());
      const playerHpPct = clamp((active?.hp ?? 0) / Math.max(1, pMaxHp) * 100, 0, 100);
      const enemyHpPct = clamp((foe?.hp ?? 0) / Math.max(1, eMaxHp) * 100, 0, 100);

      const report = (message) => { s.log = message; repaint((n) => n + 1); };
      const playAttackScene = (attacker, move, damage, crit, from, to, attackerIsPlayer = true) => {
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
          runId: `rt-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        });
        setAttackScene(scene);
        window.clearTimeout(attackSceneTimer.current);
        attackSceneTimer.current = window.setTimeout(() => setAttackScene(null), Math.max(650, scene.durationMs || 1050));
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
        if (!forced) s.nextSwitchAt = now + 15000;
        s.guarding = false;
        held.current.delete("guard");
        s.log = forced ? `${species(next.sp)?.name || next.sp} entrou para continuar a luta!` : `${species(next.sp)?.name || next.sp} entrou na arena.`;
        repaint((n) => n + 1);
        return true;
      };
      const playerAction = (index) => {
        if (s.done) return;
        if (held.current.has("guard")) {
          report("Solte a defesa antes de atacar.");
          return;
        }
        const attacker = party[s.playerIndex];
        const attackerDef = species(attacker?.sp) || {};
        const currentMoves = (attackerDef.moves || []).slice(0, 4);
        const currentArenaStats = arenaStats(getStats(attacker?.sp, attacker?.level || 1), attackerDef.types, arena);
        const currentFoe = foeList.current[s.foeIndex];
        const currentFoeDef = species(currentFoe?.sp) || {};
        const now = performance.now();
        if (now < s.nextActionAt[index]) return;
        const move = currentMoves[index];
        if (!move) return;
        const basic = index === 0;
        const staminaCost = basic ? 13 : 0;
        const powerCost = basic ? 0 : 17 + index * 9;
        if (s.stamina < staminaCost || s.power < powerCost) {
          report(basic ? "Sem estamina: recue um instante." : "Barra de poder insuficiente; espere recarregar.");
          return;
        }
        const range = basic ? 0.22 : 0.60;
        if (Math.hypot(s.ex - s.px, s.ey - s.py) > range) {
          report(`${move.name}: aproxime-se do oponente.`);
          return;
        }
        s.stamina -= staminaCost;
        s.power -= powerCost;
        const speedFactor = clamp(60 / Math.max(24, currentArenaStats.stats.vel), 0.64, 1.45);
        s.nextActionAt[index] = now + (basic ? 570 : 900 + index * 130) * speedFactor;
        const crit = Math.random() < 0.08;
        const multiplier = getEffectiveness(move.type, currentFoeDef.types || []);
        const currentFoeStats = arenaStats(getStats(currentFoe.sp, currentFoe.level), currentFoeDef.types, arena);
        const damage = damageFor({ atk: currentArenaStats.stats.atk, def: currentFoeStats.stats.def, power: move.power, typeMultiplier: multiplier, crit });
        currentFoe.hp = Math.max(0, currentFoe.hp - damage);
        playAttackScene(attackerDef, move, damage, crit, { x: s.px, y: s.py }, { x: s.ex, y: s.ey });
        s.floating = { text: `${crit ? "CRÍTICO · " : ""}-${damage}`, until: now + 650 };
        s.log = `${attackerDef.name || attacker.sp} usou ${move.name}${multiplier > 1 ? " — super efetivo!" : multiplier < 1 ? " — pouco efetivo." : "!"}`;
        if (currentFoe.hp <= 0) {
          for (const type of (attackerDef.types || [])) gs.current.sintonia[type] = (gs.current.sintonia[type] || 0) + 1;
          updateXpAndEvolution(currentFoe, s.playerIndex);
          s.foeIndex += 1;
          s.playerWon += 1;
          if (s.foeIndex >= foeList.current.length) {
            s.log = "Vitória! O vínculo prevaleceu.";
            finish({ won: true });
            return;
          }
          s.intent = null;
          s.attackAt = now + 1350;
          report(`${species(foeList.current[s.foeIndex].sp)?.name || "Oponente"} entrou na arena!`);
        }
        repaint((n) => n + 1);
      };
      const dodge = () => {
        const now = performance.now();
        if (s.done || now < s.nextDodgeAt || s.stamina < 22) return;
        s.stamina -= 22;
        s.dodgeUntil = now + 460;
        s.nextDodgeAt = now + 700;
        const dx = (held.current.has("right") ? 1 : 0) - (held.current.has("left") ? 1 : 0);
        const dy = (held.current.has("down") ? 1 : 0) - (held.current.has("up") ? 1 : 0);
        const len = Math.hypot(dx, dy) || 1;
        s.px = clamp(s.px + (dx / len) * 0.22, 0.08, 0.92);
        s.py = clamp(s.py + (dy / len) * 0.18, 0.20, 0.82);
        report("Esquiva! Janela breve de invulnerabilidade.");
      };
      const playerActionRef = React.useRef(playerAction);
      const dodgeRef = React.useRef(dodge);
      playerActionRef.current = playerAction;
      dodgeRef.current = dodge;
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
        const keys = { ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down", ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right", Space: "guard", KeyF: "guard" };
        const down = (event) => {
          if (keys[event.code]) { event.preventDefault(); event.stopImmediatePropagation(); held.current.add(keys[event.code]); }
          else if ((event.code === "KeyE" || event.code === "ShiftLeft") && !event.repeat) { event.preventDefault(); event.stopImmediatePropagation(); dodgeRef.current(); }
          else if (/^Digit[1-4]$/.test(event.code) && !event.repeat) { event.stopImmediatePropagation(); playerActionRef.current(Number(event.code.slice(-1)) - 1); }
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
            s.px = clamp(s.px + moveX / moveLength * speed * dt, 0.08, 0.92);
            s.py = clamp(s.py + moveY / moveLength * speed * dt, 0.20, 0.82);
          }
          s.guarding = held.current.has("guard") && s.stamina > 2;
          s.stamina = clamp(s.stamina + (s.guarding ? -12 : 22 * currentStats.staminaRegen) * dt, 0, 100);
          s.power = clamp(s.power + 5.5 * currentStats.powerRegen * dt, 0, 100);
          const approach = 0.11 * clamp(opponentStats.stats.vel / 50, 0.62, 1.5);
          const vx = s.px - s.ex, vy = s.py - s.ey, distance = Math.hypot(vx, vy) || 1;
          if (!s.intent && distance > 0.19) {
            s.ex = clamp(s.ex + vx / distance * approach * dt, 0.10, 0.90);
            s.ey = clamp(s.ey + vy / distance * approach * dt, 0.22, 0.78);
          }
          const now = performance.now();
          if (!s.intent && now >= s.attackAt) {
            const opponentMoves = opponentSpecies.moves || [];
            const move = opponentMoves[Math.floor(Math.random() * opponentMoves.length)] || { name: "Investida", type: opponentSpecies.types?.[0] || "Pedra", power: 40 };
            const telegraph = boss ? clamp(930 - opponentStats.stats.vel * 2.4, 560, 820) : clamp(1120 - opponentStats.stats.vel * 3.4, 650, 1050);
            s.intent = { move, landsAt: now + telegraph, targetX: s.px, targetY: s.py };
            s.log = `${boss ? "CHEFE · " : ""}${opponentSpecies.name || opponent.sp} prepara ${move.name} — esquive ou defenda!`;
          } else if (s.intent && now >= s.intent.landsAt) {
            const intent = s.intent;
            const hitRange = intent.move.power >= 58 ? (boss ? 0.40 : 0.35) : (boss ? 0.29 : 0.24);
            const stillInZone = Math.hypot(s.px - intent.targetX, s.py - intent.targetY) < hitRange;
            const dodged = now < s.dodgeUntil;
            if (stillInZone && !dodged) {
              const mult = getEffectiveness(intent.move.type, currentSpecies.types || []);
              const crit = Math.random() < (boss ? 0.09 : 0.06);
              const rawDamage = damageFor({ atk: opponentStats.stats.atk, def: currentStats.stats.def, power: intent.move.power, typeMultiplier: mult, guarding: s.guarding, crit });
              const damage = boss ? Math.ceil(rawDamage * 1.18) : rawDamage;
              currentPet.hp = Math.max(0, currentPet.hp - damage);
              playAttackScene(opponentSpecies, intent.move, damage, crit, { x: s.ex, y: s.ey }, { x: intent.targetX, y: intent.targetY }, false);
              s.hurtUntil = now + 300;
              s.log = s.guarding ? `Defesa reduziu o dano: ${damage} HP.` : `${opponentSpecies.name || opponent.sp} acertou ${intent.move.name}: -${damage} HP.`;
              if (currentPet.hp <= 0) {
                const next = party.findIndex((pet, index) => index !== s.playerIndex && pet.hp > 0);
                if (next < 0) {
                  s.intent = null;
                  s.log = "Seu time foi derrotado.";
                  finish({ won: false });
                  return;
                }
                swapTo(next, true);
              }
            } else {
              s.log = dodged ? "Esquiva perfeita! O golpe passou no vazio." : "Você saiu da zona de impacto!";
            }
            s.intent = null;
            s.attackAt = now + (boss ? clamp(1120 - opponentStats.stats.vel * 3, 650, 1050) : clamp(1300 - opponentStats.stats.vel * 4, 760, 1250));
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
      const directionButton = (label, dir) => el("button", {
        "aria-label": `Mover ${dir}`,
        type: "button", onPointerDown: pressDirection(dir), onPointerUp: releaseDirection(dir), onPointerCancel: releaseDirection(dir), onLostPointerCapture: releaseDirection(dir),
        style: { touchAction: "none", width: 42, height: 38, borderRadius: 12, border: "1px solid #ffffff50", background: "#142c25dd", color: "white", fontWeight: 900, fontSize: 18, userSelect: "none" },
      }, label);
      const effectiveSwitches = party.map((pet, index) => el("button", {
        key: `pet-${index}`,
        type: "button",
        disabled: pet.hp <= 0 || index === s.playerIndex || switchRemaining > 0 || s.done,
        onClick: () => swapTo(index),
        style: { flex: 1, minWidth: 0, padding: "6px 4px", borderRadius: 11, background: index === s.playerIndex ? "#f4c54c" : "#10251fe6", border: `1px solid ${index === s.playerIndex ? "#ffe28a" : "#ffffff35"}`, color: index === s.playerIndex ? "#28220e" : "#f8fafc", opacity: pet.hp <= 0 ? 0.35 : 1, fontSize: 10, fontWeight: 900, lineHeight: 1.25 },
      }, [`${species(pet.sp)?.name || pet.sp}`, el("br", {}), `Nv ${pet.level} · ${Math.max(0, pet.hp)} HP`]));
      const moveButtons = playerMoves.map((move, index) => controlButton(
        `${index === 0 ? "⚔ " : "✦ "}${move.name}${index ? ` · ${17 + index * 9} poder` : " · 13 est."}`,
        (event) => { event.preventDefault(); playerAction(index); },
        index === 0 ? "#8c4b2c" : "#285f84",
        s.done,
        `${move.type} • Poder ${move.power}`,
      ));
      const choreographyLayer = attackScene && window.EV_ATTACK_CHOREOGRAPHY?.View
        ? el(window.EV_ATTACK_CHOREOGRAPHY.View, { scene: attackScene })
        : null;
      const banner = s.intent && el("div", { style: { position: "absolute", left: `${s.intent.targetX * 100}%`, top: `${s.intent.targetY * 100}%`, width: 104, height: 70, border: "3px solid #ff5555", borderRadius: "50%", transform: "translate(-50%,-50%)", background: "#ff2d2d32", boxShadow: "0 0 22px #ff3e3e", animation: "ev-rt-telegraph 500ms ease-in-out infinite alternate", pointerEvents: "none" } });
      const resultCurtain = s.done && el("div", { style: { position: "absolute", inset: 0, zIndex: 10, display: "grid", placeItems: "center", background: "#07110edb", color: "white", fontSize: 30, fontWeight: 1000, textShadow: "0 5px 20px #000", pointerEvents: "none" } }, s.log);
      const hud = el("div", { style: { position: "relative", zIndex: 2, padding: "max(10px, env(safe-area-inset-top)) 12px 8px", background: "linear-gradient(#07120de8,#07120d88)", color: "white" } }, [
        el("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 } }, [
          el("div", {}, [el("strong", { style: { fontSize: 13, letterSpacing: ".03em" } }, arena.name), el("div", { style: { fontSize: 10, opacity: .82 } }, `BÔNUS DE ARENA · ${arena.focus} favorecido`) ]),
          el("div", { style: { textAlign: "right", fontSize: 10, fontWeight: 800, opacity: .9 } }, init.kind === "trainer" ? `${boss ? "CHEFE" : "TREINADOR"} · ${s.foeIndex + 1}/${foeList.current.length}` : "ENCONTRO SELVAGEM"),
        ]),
        el("div", { style: { display: "flex", alignItems: "center", gap: 9, marginTop: 6 } }, [
          el("div", { style: { flex: 1, minWidth: 0 } }, [el("div", { style: { fontSize: 12, fontWeight: 900 } }, `${foeDef.name || foe.sp} · Nv ${foe.level}`), bar("HP INIMIGO", enemyHpPct, "linear-gradient(90deg,#fb4b48,#ff9669)", `${Math.max(0, foe.hp)}/${eMaxHp}`)]),
          el(Sprite, { sp: foe.sp, size: 56, flip: true, fainted: foe.hp <= 0 }),
        ]),
      ]);
      const playerCard = el("div", { style: { position: "relative", zIndex: 2, padding: "8px 12px 4px", background: "linear-gradient(#07120d88,#07120deb)" } }, [
        el("div", { style: { display: "flex", alignItems: "center", gap: 9 } }, [
          el(Sprite, { sp: active.sp, size: 66, fainted: active.hp <= 0 }),
          el("div", { style: { flex: 1, minWidth: 0 } }, [el("div", { style: { display: "flex", justifyContent: "space-between", gap: 6, fontSize: 12, fontWeight: 900 } }, [el("span", {}, `${activeDef.name || active.sp} · Nv ${active.level}`), el("span", {}, (activeDef.types || []).join(" / "))]), bar("HP", playerHpPct, "linear-gradient(90deg,#38c878,#b3ef62)", `${Math.max(0, active.hp)}/${pMaxHp}`), bar("ESTAMINA", s.stamina, "linear-gradient(90deg,#36c8aa,#a5f3d0)", `${Math.floor(s.stamina)}%`), bar("PODER", s.power, "linear-gradient(90deg,#5596ff,#c4b5fd)", `${Math.floor(s.power)}%`)]),
        ]),
        el("div", { style: { marginTop: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, fontWeight: 900, color: "#fff" } }, [
          el("span", {}, `${pArena.favored ? "SINERGIA" : pArena.hindered ? "DESFAVOR" : "ARENA"} · ATQ ${pArena.stats.atk} / DEF ${pArena.stats.def} / VEL ${pArena.stats.vel} · REC ${Math.round(pArena.staminaRegen * 100)}% est. / ${Math.round(pArena.powerRegen * 100)}% pod.`),
          el("span", {}, switchRemaining > 0 ? `TROCA ${Math.ceil(switchRemaining / 1000)}s` : "TROCA PRONTA"),
        ]),
      ]);
      const controls = el("div", { style: { position: "relative", zIndex: 3, display: "grid", gridTemplateColumns: "126px minmax(0,1fr)", gap: 10, padding: "8px 10px max(12px, env(safe-area-inset-bottom))", background: "#07120df0", color: "white", touchAction: "none" } }, [
        el("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,38px)", gridTemplateRows: "repeat(3,36px)", gap: 3, justifyContent: "center", alignContent: "center" } }, [
          el("span", { style: { gridColumn: "2", gridRow: "1" } }, directionButton("▲", "up")),
          el("span", { style: { gridColumn: "1", gridRow: "2" } }, directionButton("◀", "left")),
          el("span", { style: { gridColumn: "2", gridRow: "2" } }, directionButton("▼", "down")),
          el("span", { style: { gridColumn: "3", gridRow: "2" } }, directionButton("▶", "right")),
        ]),
        el("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 6, alignContent: "center" } }, [
          ...moveButtons.map((button, index) => el("div", { key: `move-wrap-${index}`, style: { minWidth: 0 } }, button)),
          controlButton("DEFENDER", (event) => { event.preventDefault(); held.current.add("guard"); }, "#356557", false, "Segure para reduzir dano; consome stamina."),
          controlButton("ESQUIVA", (event) => { event.preventDefault(); dodge(); }, "#69528f", s.stamina < 22, "E ou Shift no teclado."),
          init.kind === "wild" && controlButton("VINCULAR", (event) => { event.preventDefault(); tryCapture(); }, "#c58d31", false, "Tentativa de captura conforme as regras de afinidade."),
        ]),
      ]);
      const onPointerUp = () => { held.current.delete("guard"); };
      return el("div", { onPointerUp, onPointerCancel: onPointerUp, style: { width: "100%", height: "100dvh", overflow: "hidden", position: "relative", display: "grid", gridTemplateRows: "auto minmax(0,1fr) auto auto", color: "white", fontFamily: "system-ui,sans-serif", background: arena.sky, userSelect: "none", touchAction: "none" } }, [
        el("style", {}, `@keyframes ev-rt-telegraph{from{opacity:.45;transform:translate(-50%,-50%) scale(.75)}to{opacity:1;transform:translate(-50%,-50%) scale(1.12)}} @keyframes ev-rt-float{0%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,-36px)}} @media(max-height:650px){.ev-rt-hide-short{display:none!important}}`),
        hud,
        el("div", { ref: arenaRef, style: { minHeight: 0, position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 50% 20%, ${arena.accent}66, transparent 47%), linear-gradient(180deg, ${arena.sky} 0%, ${arena.sky} 37%, ${arena.ground} 38%, ${arena.ground} 100%)` } }, [
          el("div", { style: { position: "absolute", left: "-10%", top: "37%", width: "120%", height: "62%", border: `2px solid ${arena.accent}66`, borderRadius: "50%", boxShadow: `inset 0 0 50px ${arena.accent}20`, pointerEvents: "none" } }),
          el("div", { style: { position: "absolute", inset: "42% 12% 4%", border: `1px dashed ${arena.accent}55`, borderRadius: "50%", pointerEvents: "none" } }),
          el("div", { style: { position: "absolute", left: `${s.px * 100}%`, top: `${s.py * 100}%`, transform: "translate(-50%,-50%)", transition: "left 45ms linear,top 45ms linear", filter: performance.now() < s.hurtUntil ? "brightness(1.7) saturate(2)" : performance.now() < s.dodgeUntil ? "opacity(.55) drop-shadow(0 0 18px #fff)" : "drop-shadow(0 12px 8px #07110d88)", zIndex: 2 } }, el(Sprite, { sp: active.sp, size: 112, fainted: active.hp <= 0 })),
          banner,
          el("div", { style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100}%`, transform: "translate(-50%,-50%)", transition: "left 75ms linear,top 75ms linear", filter: "drop-shadow(0 12px 8px #07110d88)", zIndex: 2 } }, el(Sprite, { sp: foe.sp, size: 112, flip: true, fainted: foe.hp <= 0 })),
          choreographyLayer,
          s.floating && performance.now() < s.floating.until && el("div", { style: { position: "absolute", left: `${s.ex * 100}%`, top: `${s.ey * 100 - 9}%`, color: "#fff3a7", fontWeight: 1000, fontSize: 24, textShadow: "0 3px 5px #000", transform: "translateX(-50%)", animation: "ev-rt-float 650ms ease-out forwards", zIndex: 4 } }, s.floating.text),
          el("div", { style: { position: "absolute", left: "50%", bottom: 8, transform: "translateX(-50%)", width: "max-content", maxWidth: "94%", padding: "7px 12px", borderRadius: 14, background: "#06130ed9", border: "1px solid #ffffff35", textAlign: "center", fontSize: 11, fontWeight: 800 } }, s.log),
          el("div", { className: "ev-rt-hide-short", style: { position: "absolute", right: 10, top: 9, padding: "5px 8px", borderRadius: 9, background: "#06130e9c", fontSize: 9, fontWeight: 800, opacity: .8 } }, "WASD/←↑↓→ mover · 1–4 poderes · F defender · E esquivar · Q trocar"),
          resultCurtain,
        ]),
        playerCard,
        el("div", { style: { background: "#07120df0" } }, [
          el("div", { style: { display: "flex", gap: 5, padding: "3px 9px 5px" } }, effectiveSwitches),
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

  window.EV_REALTIME_COMBAT = Object.freeze({ arenaFor, arenaStats, damageFor, createView });
})();
