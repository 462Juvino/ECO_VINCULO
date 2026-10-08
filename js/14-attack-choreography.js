/* Coreografias procedurais compartilhadas para batalha e ensaio do Dex.
 * Este módulo muda somente a apresentação visual: não cria golpes nem altera dano.
 */
(() => {
  const TYPE_STYLE = {
    Brasa: { a: "#ff6b35", b: "#ffb703", c: "#fff3b0", d: "#7c2d12" },
    "Maré": { a: "#0ea5e9", b: "#7dd3fc", c: "#e0f2fe", d: "#075985" },
    Flora: { a: "#22c55e", b: "#a3e635", c: "#dcfce7", d: "#14532d" },
    Faísca: { a: "#eab308", b: "#fde047", c: "#fefce8", d: "#854d0e" },
    Pedra: { a: "#a87950", b: "#d6b894", c: "#ede0d4", d: "#4b3621" },
    Sombra: { a: "#7c3aed", b: "#c4b5fd", c: "#ede9fe", d: "#1e103d" },
  };
  const TYPE_FAMILIES = {
    Brasa: ["rush", "eruption", "skyfall", "beam", "volley", "cyclone", "roots", "eclipse"],
    "Maré": ["flood", "volley", "beam", "cyclone", "rush", "eclipse", "skyfall", "spit"],
    Flora: ["roots", "cyclone", "volley", "flood", "rush", "skyfall", "eclipse", "beam"],
    Faísca: ["rush", "beam", "volley", "cyclone", "skyfall", "eruption", "flood", "eclipse"],
    Pedra: ["skyfall", "eruption", "rush", "cyclone", "volley", "roots", "beam", "eclipse"],
    Sombra: ["eclipse", "rush", "cyclone", "volley", "beam", "roots", "flood", "skyfall"],
  };
  const MOVE_FAMILIES = {
    bite: ["rush", "rush", "cyclone", "volley"],
    charge: ["rush", "rush", "skyfall", "beam"],
    "shadow-bite": ["rush", "eclipse", "cyclone", "volley"],
    "shadow-claw": ["rush", "eclipse", "cyclone", "beam"],
    "rock-slam": ["eruption", "skyfall", "rush", "cyclone"],
    "tail-slam": ["rush", "flood", "cyclone", "eruption"],
    "magma-punch": ["rush", "eruption", "beam", "skyfall"],
    "vine-whip": ["roots", "roots", "cyclone", "rush"],
    "multi-seed": ["spit", "volley", "roots", "cyclone"],
    "bubble-beam": ["spit", "volley", "flood", "beam"],
    "wind-blades": ["cyclone", "volley", "rush", "beam"],
    "water-jet": ["flood", "beam", "spit", "rush"],
    tsunami: ["flood", "flood", "cyclone", "skyfall"],
    "stone-arc": ["skyfall", "eruption", "volley", "rush"],
    avalanche: ["skyfall", "skyfall", "eruption", "cyclone"],
    quake: ["eruption", "eruption", "skyfall", "roots"],
    "tectonic-fury": ["eruption", "skyfall", "eruption", "rush"],
    eruption: ["eruption", "eruption", "beam", "skyfall"],
    abyss: ["eclipse", "eclipse", "cyclone", "beam"],
    "night-veil": ["eclipse", "cyclone", "eclipse", "volley"],
    "cold-breath": ["flood", "cyclone", "beam", "volley"],
    "floral-vortex": ["cyclone", "roots", "flood", "volley"],
    "petal-storm": ["cyclone", "volley", "flood", "roots"],
    "prism-beam": ["beam", "beam", "volley", "cyclone"],
    "volt-judgment": ["beam", "skyfall", "rush", "cyclone"],
    "speed-bolt": ["rush", "beam", "volley", "cyclone"],
    "spark-crackle": ["volley", "rush", "beam", "cyclone"],
    "spinning-leaf": ["cyclone", "volley", "roots", "rush"],
    "fire-mushroom": ["eruption", "skyfall", "volley", "rush"],
    "flame-burst": ["beam", "eruption", "volley", "rush"],
    "ember-spark": ["volley", "rush", "beam", "cyclone"],
    "pyrothion-inferno": ["eruption", "beam", "cyclone", "rush"],
    "pyrothion-claws": ["rush", "cyclone", "eruption", "volley"],
    "fairy-dance": ["cyclone", "volley", "flood", "eclipse"],
    "sweet-mist": ["flood", "cyclone", "spit", "eclipse"],
    "glow-dust": ["cyclone", "volley", "beam", "eclipse"],
    flash: ["beam", "cyclone", "rush", "volley"],
    signature: ["rush", "flood", "skyfall", "eruption", "beam", "roots", "cyclone", "eclipse", "volley", "spit"],
  };
  const TIMING = {
    rush: 570,
    volley: 790,
    spit: 820,
    skyfall: 1050,
    eruption: 900,
    flood: 920,
    beam: 760,
    roots: 850,
    cyclone: 880,
    eclipse: 950,
  };

  function hash(text) {
    let value = 2166136261;
    for (let i = 0; i < String(text).length; i++) {
      value ^= String(text).charCodeAt(i);
      value = Math.imul(value, 16777619);
    }
    return value >>> 0;
  }
  const clamp01 = (n) => Math.max(0.015, Math.min(0.985, Number(n) || 0));
  const safeNum = (n, fallback) => Number.isFinite(Number(n)) ? Number(n) : fallback;

  function resolveSpecies(species) {
    if (typeof species === "string") {
      return window.nu?.[species] || { id: species, name: species, types: [], stage: 0 };
    }
    return species || { id: "unknown-pet", name: "Pet", types: [], stage: 0 };
  }

  function plan(options = {}) {
    const attacker = resolveSpecies(options.attacker);
    const move = options.move || {};
    const speciesId = attacker.id || attacker.sp || attacker.name || "unknown-pet";
    const moveName = move.name || move.id || "Golpe";
    const moveType = move.type || attacker.types?.[0] || "Sombra";
    const kind = typeof move.anim === "string" ? move.anim : move.anim?.kind || "";
    const seedText = `${speciesId}|${moveName}|${moveType}|${kind}|${move.anim?.form || ""}`;
    const seed = hash(seedText);
    const speciesSeed = hash(speciesId);
    const nameKey = String(kind || moveName).toLocaleLowerCase("pt-BR");
    const pool = MOVE_FAMILIES[nameKey] || MOVE_FAMILIES[moveName.toLocaleLowerCase("pt-BR")] || TYPE_FAMILIES[moveType] || TYPE_FAMILIES[attacker.types?.[0]] || TYPE_FAMILIES.Sombra;
    const family = pool[seed % pool.length];
    const variant = hash(`${seedText}:variant`) % 9;
    const stage = Math.max(0, Math.min(4, Number(attacker.stage) || 0));
    const reducedMotion = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const count = 3 + (hash(`${seedText}:count`) % 3) + (stage >= 2 ? 1 : 0);
    const baseTiming = TIMING[family] || 800;
    const impactAtMs = reducedMotion ? 120 : baseTiming + (hash(`${seedText}:impact`) % 4) * 32 + stage * 18;
    const element = TYPE_STYLE[moveType] || TYPE_STYLE[attacker.types?.[0]] || TYPE_STYLE.Sombra;
    const secondaryType = attacker.types?.find((type) => type !== moveType) || attacker.types?.[1] || attacker.types?.[0];
    const secondary = TYPE_STYLE[secondaryType]?.a || element.b;
    const signaturePalette = Array.isArray(move.anim?.palette) ? move.anim.palette : [];
    const colors = [
      signaturePalette[0] || element.a,
      signaturePalette[1] || secondary,
      signaturePalette[2] || element.c,
      signaturePalette[3] || element.d,
      signaturePalette[4] || element.b,
    ];
    const feature = String(attacker.feature || attacker.sprite || "").toLowerCase();
    const glyph = /leaf|plant|vine|petal|flora|root/.test(feature) ? "leaf" :
      /water|wave|bubble|fish|sea|mare/.test(feature) ? "drop" :
      /fire|flame|ember|lava|magma/.test(feature) ? "flame" :
      /rock|stone|crystal|spike|horn|golem/.test(feature) ? "shard" :
      /shadow|ghost|night|dark|wisp/.test(feature) ? "wisp" :
      /electric|spark|volt|lightning/.test(feature) ? "spark" :
      ({ Brasa: "flame", "Maré": "drop", Flora: "leaf", Faísca: "spark", Pedra: "shard", Sombra: "wisp" }[moveType] || "spark");
    const width = Math.max(1, safeNum(options.width, 360));
    const height = Math.max(1, safeNum(options.height, 640));
    const x0 = clamp01(options.x0 ?? 0.18);
    const y0 = clamp01(options.y0 ?? 0.68);
    const x1 = clamp01(options.x1 ?? 0.82);
    const y1 = clamp01(options.y1 ?? 0.40);
    const spread = 0.045 + ((speciesSeed >>> 8) % 8) * 0.006 + variant * 0.002;
    const size = (24 + (speciesSeed % 12) + stage * 3) * (0.94 + (variant % 4) * 0.06);
    const flightMs = reducedMotion ? 100 : family === "skyfall" ? Math.max(520, impactAtMs - 310) : Math.max(420, impactAtMs - 250);
    return {
      runId: options.runId ?? `${seed}-${Date.now()}`,
      family,
      variant,
      speciesId,
      speciesName: attacker.name || speciesId,
      speciesFeature: feature,
      moveName,
      moveType,
      stage,
      glyph,
      colors,
      x0, y0, x1, y1,
      width,
      height,
      spread,
      size,
      count: Math.min(7, count),
      impactAtMs,
      flightMs,
      durationMs: reducedMotion ? 340 : impactAtMs + 1010,
      attackerIsPlayer: options.attackerIsPlayer !== false,
      hit: options.hit !== false,
      damage: Math.max(0, Number(options.damage) || 0),
      showDamage: options.showDamage === true,
      crit: options.crit === true,
      lungeX: (x1 - x0) * width * 0.76,
      lungeY: (y1 - y0) * height * 0.76,
    };
  }

  const percent = (value) => `${(clamp01(value) * 100).toFixed(3)}%`;
  const calc = (value, offset = 0) => `calc(${percent(value)} + ${offset.toFixed(1)}px)`;

  function flightNode(scene, index, shape = scene.glyph) {
    const direction = scene.attackerIsPlayer ? 1 : -1;
    const sway = ((index % 3) - 1) * scene.spread * 0.65;
    const size = Math.max(14, scene.size * (0.75 + ((index + scene.variant) % 4) * 0.14));
    const fromX = scene.x0 + direction * 0.018;
    const fromY = scene.y0 + ((index % 3) - 1) * 0.012;
    const toX = scene.x1 + sway;
    const toY = scene.y1 + ((index % 2) ? 1 : -1) * scene.spread * 0.42;
    const delay = index * (scene.family === "spit" ? 118 : 76);
    return N("div", {
      className: `ev-vfx-shot ev-vfx-shape-${shape}`,
      style: {
        width: size,
        height: size,
        left: percent(fromX),
        top: percent(fromY),
        "--ev-a": scene.colors[0],
        "--ev-b": scene.colors[1],
        "--ev-c": scene.colors[2],
        "--ev-d": scene.colors[3],
        "--ev-dx": `${(toX - fromX) * scene.width}px`,
        "--ev-dy": `${(toY - fromY) * scene.height}px`,
        "--ev-rot": `${((scene.variant + index) % 2 ? 1 : -1) * (240 + index * 90)}deg`,
        animation: `ev-vfx-flight ${scene.flightMs + (index % 2) * 90}ms cubic-bezier(.18,.72,.24,1) ${delay}ms both`,
      },
    }, `shot-${scene.runId}-${index}`);
  }

  function impactNode(scene) {
    return O("div", {
      className: `ev-vfx-impact-wrap ${scene.crit ? "ev-vfx-critical" : ""}`,
      style: {
        left: percent(scene.hit ? scene.x1 : scene.x1 + (scene.attackerIsPlayer ? 0.08 : -0.08)),
        top: percent(scene.y1),
        "--ev-a": scene.colors[0],
        "--ev-b": scene.colors[1],
        "--ev-c": scene.colors[2],
        "--ev-impact-delay": `${scene.impactAtMs}ms`,
        "--ev-impact-size": `${Math.round(scene.size * (2.3 + scene.stage * 0.15))}px`,
      },
      children: [
        N("div", { className: "ev-vfx-impact-ring" }),
        N("div", { className: "ev-vfx-impact-flash" }),
        scene.showDamage && scene.hit && scene.damage > 0
          ? N("div", { className: "ev-vfx-damage-text", children: `-${scene.damage}` })
          : null,
        scene.crit && scene.hit
          ? N("div", { className: "ev-vfx-crit-text", children: "CRÍTICO!" })
          : null,
        !scene.hit ? N("div", { className: "ev-vfx-miss-text", children: "ERROU" }) : null,
      ],
    });
  }

  function VfxView({ scene }) {
    if (!scene) return null;
    const children = [];
    if (scene.family === "volley" || scene.family === "spit") {
      for (let i = 0; i < scene.count; i++) children.push(flightNode(scene, i, scene.family === "spit" ? "drop" : scene.glyph));
    }
    if (scene.family === "skyfall") {
      for (let i = 0; i < scene.count; i++) {
        const size = scene.size * (0.85 + (i % 3) * 0.22);
        const x = Math.max(0.04, Math.min(0.96, scene.x1 + (((i * 37 + scene.variant * 13) % 9) - 4) * scene.spread * 0.28));
        const y = Math.max(0.30, scene.y1 - 0.22 - (i % 3) * 0.04);
        const startY = Math.max(0.03, y - 0.30);
        const endY = scene.y1 + 0.015;
        children.push(N("div", {
          className: "ev-vfx-stone",
          style: {
            width: size,
            height: size * (1.05 + (i % 2) * 0.25),
            left: percent(x),
            top: percent(startY),
            "--ev-a": scene.colors[0],
            "--ev-b": scene.colors[1],
            "--ev-c": scene.colors[2],
            "--ev-dx": `${(i % 2 ? 0.012 : -0.012) * scene.width}px`,
            "--ev-dy": `${(endY - startY) * scene.height}px`,
            "--ev-rot": `${(i % 2 ? 1 : -1) * (220 + i * 55)}deg`,
            animation: `ev-vfx-fall ${Math.max(460, scene.impactAtMs - i * 58)}ms cubic-bezier(.3,.05,.85,.6) ${i * 55}ms both`,
          },
        }, `meteor-${scene.runId}-${i}`));
      }
    }
    if (scene.family === "eruption" || scene.family === "roots") {
      const total = scene.family === "roots" ? scene.count + 1 : Math.max(3, scene.count - 1);
      for (let i = 0; i < total; i++) {
        const size = scene.size * (1.0 + ((i + scene.variant) % 3) * 0.45);
        const x = Math.max(0.03, Math.min(0.97, scene.x1 + (i - (total - 1) / 2) * scene.spread * 0.62));
        const height = size * (2.2 + ((i + scene.variant) % 3) * 0.45);
        const elementWidth = scene.family === "roots" ? Math.max(8, size * 0.36) : size;
        const fromY = scene.y1 + 0.12;
        const toY = scene.y1 + 0.012;
        const startTop = Math.max(0.01, fromY - height / scene.height);
        children.push(N("div", {
          className: scene.family === "roots" ? "ev-vfx-root-whip" : "ev-vfx-spike",
          style: {
            width: elementWidth,
            height,
            left: calc(x, -elementWidth / 2),
            top: percent(startTop),
            "--ev-a": scene.colors[0],
            "--ev-b": scene.colors[1],
            "--ev-c": scene.colors[2],
            "--ev-dy": `${(toY - fromY) * scene.height}px`,
            "--ev-rise-rot": `${(i % 2 ? 1 : -1) * (12 + scene.variant * 2)}deg`,
            animation: `${scene.family === "roots" ? "ev-vfx-whip-rise" : "ev-vfx-rise"} ${Math.max(430, scene.impactAtMs - i * 52)}ms cubic-bezier(.12,.78,.26,1) ${i * 54}ms both`,
          },
        }, `rise-${scene.runId}-${i}`));
      }
    }
    if (scene.family === "rush") {
      const left = Math.min(scene.x0, scene.x1);
      const width = Math.max(0.12, Math.abs(scene.x1 - scene.x0));
      const angle = Math.atan2((scene.y1 - scene.y0) * (scene.attackerIsPlayer ? 1 : -1), Math.abs(scene.x1 - scene.x0)) * 180 / Math.PI;
      for (let i = 0; i < 3; i++) children.push(N("div", {
        className: "ev-vfx-slash",
        style: {
          left: percent(left),
          top: calc((scene.y0 + scene.y1) / 2, (i - 1) * 11),
          width: `${width * 100}%`,
          "--ev-a": scene.colors[i % 2],
          "--ev-angle": `${angle + (i - 1) * 3}deg`,
          animation: `ev-vfx-slash ${Math.max(360, scene.impactAtMs - 90)}ms ease-out ${i * 48}ms both`,
        },
      }, `slash-${scene.runId}-${i}`));
    }
    if (scene.family === "flood") {
      children.push(N("div", {
        className: "ev-vfx-flood-glaze",
        style: {
          "--ev-a": scene.colors[0],
          "--ev-b": scene.colors[1],
          "--ev-c": scene.colors[2],
          animation: `ev-vfx-flood-glaze ${scene.impactAtMs}ms ease-out both`,
        },
      }));
      children.push(N("div", {
        className: `ev-vfx-wave ${scene.attackerIsPlayer ? "from-player" : "from-opponent"}`,
        style: {
          top: percent(Math.max(0.04, Math.min(scene.y0, scene.y1) - 0.27)),
          height: `${Math.max(scene.height * 1.45, 260 + scene.stage * 36)}px`,
          "--ev-a": scene.colors[0],
          "--ev-b": scene.colors[1],
          "--ev-c": scene.colors[2],
          animation: `${scene.attackerIsPlayer ? "ev-vfx-wave" : "ev-vfx-wave-reverse"} ${scene.impactAtMs}ms cubic-bezier(.18,.64,.26,1) both`,
        },
      }));
    }
    if (scene.family === "beam") {
      const left = Math.min(scene.x0, scene.x1);
      const width = Math.max(0.12, Math.abs(scene.x1 - scene.x0));
      const leftToRight = scene.x0 <= scene.x1;
      const beamStartY = leftToRight ? scene.y0 : scene.y1;
      const beamEndY = leftToRight ? scene.y1 : scene.y0;
      const angle = Math.atan2(beamEndY - beamStartY, Math.abs(scene.x1 - scene.x0)) * 180 / Math.PI;
      children.push(N("div", {
        className: "ev-vfx-beam",
        style: {
          left: percent(left),
          top: percent(beamStartY),
          width: `${width * 100}%`,
          "--ev-a": scene.colors[0],
          "--ev-b": scene.colors[1],
          "--ev-c": scene.colors[2],
          "--ev-angle": `${angle}deg`,
          "--ev-beam-delay": `${Math.max(0, scene.impactAtMs - 460)}ms`,
          animation: `ev-vfx-beam 520ms cubic-bezier(.14,.75,.18,1) ${Math.max(0, scene.impactAtMs - 460)}ms both`,
        },
      }));
    }
    if (scene.family === "cyclone") {
      for (let i = 0; i < scene.count + 2; i++) {
        const size = scene.size * (0.48 + (i % 3) * 0.16);
        children.push(N("div", {
          className: `ev-vfx-orbit ev-vfx-shape-${i % 2 ? scene.glyph : "spark"}`,
          style: {
            width: size,
            height: size,
            left: percent(scene.x1),
            top: percent(scene.y1),
            "--ev-a": scene.colors[0],
            "--ev-b": scene.colors[1],
            "--ev-c": scene.colors[2],
            "--ev-orbit-radius": `${Math.max(24, scene.spread * scene.width * 1.4) + (i % 3) * 6}px`,
            animation: `ev-vfx-orbit ${scene.impactAtMs + 240}ms ease-in-out ${i * 34}ms both`,
          },
        }, `orbit-${scene.runId}-${i}`));
      }
    }
    if (scene.family === "eclipse") {
      children.push(N("div", {
        className: "ev-vfx-eclipse",
        style: {
          left: percent(scene.x1),
          top: percent(scene.y1),
          "--ev-a": scene.colors[0],
          "--ev-b": scene.colors[1],
          "--ev-c": scene.colors[2],
          "--ev-eclipse-delay": `${Math.max(0, scene.impactAtMs - 560)}ms`,
          animation: `ev-vfx-eclipse 760ms ease-in-out ${Math.max(0, scene.impactAtMs - 560)}ms both`,
        },
      }));
    }
    children.push(impactNode(scene));
    return O("div", {
      className: `ev-attack-vfx ev-attack-vfx-${scene.family}`,
      style: { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 44 },
      "aria-hidden": true,
      children,
    });
  }

  window.EV_ATTACK_CHOREOGRAPHY = Object.freeze({ plan, View: VfxView });
})();
