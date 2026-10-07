/*
 * Eco Vínculo — golpes assinatura e identidade das fusões.
 * Este módulo acrescenta conteúdo sem mudar o cálculo de dano já existente.
 * Deve carregar depois dos dados e antes de external-links.js.
 */
(function () {
  "use strict";

  const registry = typeof nu !== "undefined" ? nu : window.nu;
  if (!registry || typeof registry !== "object") {
    console.error("Eco Vínculo: catálogo de criaturas indisponível para os golpes assinatura.");
    return;
  }

  const typeColors = {
    Brasa: ["#f97316", "#fed7aa", "#9a3412"],
    Maré: ["#0ea5e9", "#bae6fd", "#075985"],
    Flora: ["#22c55e", "#bbf7d0", "#166534"],
    Faísca: ["#eab308", "#fef08a", "#854d0e"],
    Pedra: ["#a8a29e", "#e7e5e4", "#57534e"],
    Sombra: ["#8b5cf6", "#ddd6fe", "#4c1d95"],
  };

  const signatureWords = {
    Brasa: ["Coração Incandescente", "Cometa Escarlate", "Erupção Vital", "Chama Ascendente"],
    Maré: ["Maré Abissal", "Vórtice de Cristal", "Onda Celeste", "Dilúvio Lunar"],
    Flora: ["Jardim Desperto", "Flor Selvagem", "Raiz Primordial", "Dança do Bosque"],
    Faísca: ["Pulso Trovejante", "Arco Prismático", "Tempestade Relâmpago", "Ruptura Volt"],
    Pedra: ["Impacto Monolítico", "Ruptura Tectônica", "Lança de Quartzo", "Colosso Ascendente"],
    Sombra: ["Véu do Eclipse", "Espiral Abissal", "Noite Voraz", "Eco Fantasma"],
  };

  const forms = {
    Brasa: ["flare", "comet", "flare", "comet"],
    Maré: ["wave", "orb", "wave", "orb"],
    Flora: ["bloom", "leafstorm", "bloom", "leafstorm"],
    Faísca: ["bolt", "prism", "bolt", "prism"],
    Pedra: ["crystal", "quake", "crystal", "quake"],
    Sombra: ["veil", "eclipse", "veil", "eclipse"],
  };

  const typeShapes = {
    Brasa: "spark",
    Maré: "drop",
    Flora: "leaf",
    Faísca: "spark",
    Pedra: "shard",
    Sombra: "wisp",
  };

  function hash(value) {
    let n = 2166136261;
    const text = String(value ?? "eco");
    for (let i = 0; i < text.length; i += 1) {
      n ^= text.charCodeAt(i);
      n = Math.imul(n, 16777619);
    }
    return n >>> 0;
  }

  function paletteFor(types, salt = "") {
    const valid = (types || []).filter((type) => typeColors[type]);
    const a = typeColors[valid[0]] || typeColors.Pedra;
    const b = typeColors[valid[1]] || [a[1], "#ffffff", a[2]];
    const variation = hash(salt) % 3;
    return [a[0], b[variation], "#ffffff", a[2], b[0]];
  }

  function animationFor(id, types, stage, feature, salt = "") {
    const key = `${id}:${salt}`;
    const roll = hash(key);
    const affinity = (types || []).find((type) => forms[type]) || "Pedra";
    const variation = roll % forms[affinity].length;
    const detail = (types || []).slice(0, 2);
    return {
      kind: "signature",
      ownerId: id,
      form: forms[affinity][variation],
      variant: (roll >>> 4) % 4,
      stage: Math.max(0, Math.min(3, Number(stage) || 0)),
      feature: feature || "round",
      palette: paletteFor(detail.length ? detail : [affinity], key),
      trailShape: typeShapes[affinity],
      impactShapes: [typeShapes[affinity], "circle", "spark"],
      particleCount: 13 + (roll % 7) + Math.max(0, Number(stage) || 0) * 2,
      travelMs: 300 + ((roll >>> 8) % 120),
      projectileSize: 28 + Math.max(0, Number(stage) || 0) * 5 + ((roll >>> 12) % 7),
      windupMs: 100 + ((roll >>> 16) % 120),
      drift: [((roll >>> 20) % 17) - 8, ((roll >>> 24) % 23) - 16],
    };
  }

  function makeSignatureMove(species) {
    const types = (species.types || []).slice(0, 2);
    const type = types[0] || "Pedra";
    const roll = hash(species.id);
    const words = signatureWords[type] || signatureWords.Pedra;
    const epithet = words[roll % words.length];
    const stage = Number(species.stage) || 0;
    return {
      name: `${species.name} — ${epithet}`,
      type,
      power: Math.min(66, 50 + stage * 5),
      acc: 96,
      signaturePetId: species.id,
      anim: animationFor(species.id, types.length ? types : [type], stage, species.feature),
    };
  }

  function getSpecies(member) {
    const id = typeof member?.sp === "string" ? member.sp : member?.sp?.id;
    return (id && registry[id]) || (typeof member?.sp === "object" ? member.sp : null) || null;
  }

  function fusionVisual(a, b, result) {
    const parents = [a, b].map((member) => {
      const species = getSpecies(member) || {};
      const types = (species.types || []).slice(0, 2);
      const mainType = types[0] || "Pedra";
      return {
        id: species.id || "unknown",
        name: species.name || "Pat",
        feature: species.feature || "round",
        silhouette: species.silhouette || species.id || "round",
        stage: Number(species.stage) || 0,
        types,
        color: (typeColors[mainType] || typeColors.Pedra)[0],
        light: (typeColors[mainType] || typeColors.Pedra)[1],
      };
    });
    const resultTypes = result?.types || parents.flatMap((parent) => parent.types).slice(0, 2);
    return {
      parents,
      types: resultTypes.slice(0, 2),
      palette: paletteFor(resultTypes, `${parents[0].id}+${parents[1].id}`),
      seed: hash(`${parents[0].id}+${parents[1].id}`),
    };
  }

  function makeFusionMoves(result, a, b) {
    const visual = fusionVisual(a, b, result);
    const types = (result?.types || visual.types || ["Pedra"]).slice(0, 2);
    const safeTypes = types.length ? types : ["Pedra"];
    const baseName = result?.name || `${getSpecies(a)?.name || "Pat"}+${getSpecies(b)?.name || "Pat"}`;
    const syntheticId = result?.hybridId || `fusion-${hash(`${baseName}:${visual.parents.map((p) => p.id).join("+")}`).toString(36)}`;
    const formsForPair = safeTypes.map((type, index) => {
      const roll = hash(`${syntheticId}:${index}:${visual.parents[index]?.id || "parent"}`);
      const available = forms[type] || forms.Pedra;
      return available[roll % available.length];
    });
    const moves = [
      {
        name: `${baseName} — Ressonância Dupla`,
        type: safeTypes[0],
        power: 55,
        acc: 100,
        signatureFusionId: syntheticId,
        anim: animationFor(
          `${syntheticId}:ressonancia:${visual.parents.map((p) => p.id).join("+")}`,
          safeTypes,
          2,
          "hybrid",
          `ressonancia:${formsForPair[0]}`,
        ),
      },
      {
        name: `${baseName} — Convergência Final`,
        type: safeTypes[1] || safeTypes[0],
        power: 55,
        acc: 100,
        signatureFusionId: syntheticId,
        anim: animationFor(
          `${syntheticId}:convergencia:${visual.parents.map((p) => p.id).join("+")}`,
          safeTypes,
          2,
          "hybrid",
          `convergencia:${formsForPair[1] || formsForPair[0]}`,
        ),
      },
    ];
    moves.forEach((move, index) => {
      move.anim.palette = [
        visual.parents[index]?.color || visual.palette[0],
        visual.parents[1 - index]?.color || visual.palette[1],
        "#ffffff",
        visual.parents[index]?.light || visual.palette[3],
        visual.palette[0],
      ];
      move.anim.form = formsForPair[index] || "prism";
      move.anim.stage = Math.max(2, ...visual.parents.map((parent) => parent.stage));
      move.anim.feature = visual.parents[index]?.feature || "hybrid";
      move.anim.trailShape = typeShapes[safeTypes[index] || safeTypes[0]] || "spark";
      move.anim.impactShapes = [
        move.anim.trailShape,
        typeShapes[safeTypes[1] || safeTypes[0]] || "circle",
        "spark",
      ];
    });
    return moves;
  }

  function drawFusionTraits(ctx, visual, geometry) {
    if (!ctx || !visual?.parents?.length || !geometry) return;
    const { K } = geometry;
    const parents = visual.parents.slice(0, 2);
    const line = (color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1.5, K * 0.075);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
    };

    function drawOne(parent, side, index) {
      const feature = parent.feature || "round";
      const main = parent.color || "#a78bfa";
      const light = parent.light || "#ede9fe";
      const x = side * K * (0.34 + (index % 2) * 0.06);
      const y = -K * (0.78 + (parent.stage > 1 ? 0.08 : 0));
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = main;
      line("rgba(15,23,42,0.78)");

      if (feature === "flame") {
        ctx.beginPath();
        ctx.moveTo(-K * 0.2, K * 0.22);
        ctx.quadraticCurveTo(-K * 0.34, -K * 0.35, 0, -K * (0.7 + 0.03 * (parent.stage || 0)));
        ctx.quadraticCurveTo(K * 0.36, -K * 0.3, K * 0.2, K * 0.22);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = light;
        ctx.beginPath();
        ctx.ellipse(0, -K * 0.14, K * 0.09, K * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (feature === "horns" || feature === "pointy") {
        ctx.beginPath();
        ctx.moveTo(-K * 0.22, K * 0.2);
        ctx.lineTo(-K * 0.08, -K * 0.65);
        ctx.lineTo(K * 0.06, K * 0.08);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (feature === "spikes") {
        for (let spike = -1; spike <= 1; spike += 1) {
          ctx.beginPath();
          ctx.moveTo(spike * K * 0.13 - K * 0.07, K * 0.15);
          ctx.lineTo(spike * K * 0.13, -K * (0.52 + (spike === 0 ? 0.18 : 0)));
          ctx.lineTo(spike * K * 0.13 + K * 0.07, K * 0.15);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      } else if (feature === "leaf") {
        ctx.beginPath();
        ctx.ellipse(0, -K * 0.22, K * 0.22, K * 0.43, side * -0.48, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, K * 0.12);
        ctx.lineTo(0, -K * 0.56);
        ctx.strokeStyle = light;
        ctx.stroke();
      } else if (feature === "fins") {
        ctx.beginPath();
        ctx.moveTo(-K * 0.08, K * 0.16);
        ctx.quadraticCurveTo(-K * 0.43, -K * 0.1, -K * 0.45, -K * 0.49);
        ctx.quadraticCurveTo(-K * 0.06, -K * 0.4, K * 0.1, -K * 0.08);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else if (feature === "wings") {
        ctx.beginPath();
        ctx.moveTo(0, K * 0.13);
        ctx.quadraticCurveTo(side * K * 0.52, -K * 0.72, side * K * 0.48, -K * 0.08);
        ctx.quadraticCurveTo(side * K * 0.25, K * 0.05, 0, K * 0.13);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = light;
        ctx.beginPath();
        ctx.moveTo(side * K * 0.04, K * 0.08);
        ctx.lineTo(side * K * 0.32, -K * 0.26);
        ctx.stroke();
      } else if (feature === "round") {
        ctx.beginPath();
        ctx.arc(0, -K * 0.2, K * 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = light;
        ctx.beginPath();
        ctx.arc(-K * 0.07, -K * 0.28, K * 0.07, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(-K * 0.22, K * 0.15);
        ctx.lineTo(0, -K * 0.5);
        ctx.lineTo(K * 0.22, K * 0.15);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();
    }

    drawOne(parents[0], -1, 0);
    drawOne(parents[1], 1, 1);

    // Pequeno núcleo dividido: deixa explícito que os dois pais compõem o híbrido.
    ctx.save();
    ctx.translate(0, -K * 0.85);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = parents[0].color || "#a78bfa";
    ctx.fillRect(-K * 0.105, -K * 0.105, K * 0.105, K * 0.21);
    ctx.fillStyle = parents[1].color || "#38bdf8";
    ctx.fillRect(0, -K * 0.105, K * 0.105, K * 0.21);
    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = Math.max(1, K * 0.025);
    ctx.strokeRect(-K * 0.105, -K * 0.105, K * 0.21, K * 0.21);
    ctx.restore();
  }

  let added = 0;
  for (const species of Object.values(registry)) {
    if (!species || !species.id || !Array.isArray(species.moves)) continue;
    if (species.moves.some((move) => move?.signaturePetId === species.id)) continue;
    species.moves.push(makeSignatureMove(species));
    added += 1;
  }

  window.EV_SIGNATURES = {
    version: 1,
    addedPetMoves: added,
    fusionVisual,
    makeFusionMoves,
    drawFusionTraits,
  };

  console.info(`Eco Vínculo: ${added} golpes assinatura adicionados; fusões visuais prontas.`);
})();
