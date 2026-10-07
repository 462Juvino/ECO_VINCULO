/*
 * Eco Vínculo — Saga pós-jogo: Terras do Grande Eco
 * Carregado depois dos dados e dos golpes assinatura.
 * Conteúdo aditivo: não substitui os mapas nem os saves da campanha original.
 */
(() => {
  "use strict";

  const zoneInfo = {
    "mata-ancestral": {
      name: "Mata Ancestral",
      desc: "Uma floresta antiga onde as raízes guardam lembranças de outros mundos.",
      zone: "mata-ancestral",
    },
    "ruinas-do-sol": {
      name: "Ruínas do Sol",
      desc: "Pedras douradas e relíquias aquecidas por uma luz que nunca se apaga.",
      zone: "ruinas-do-sol",
    },
    "serra-cristalina": {
      name: "Serra Cristalina",
      desc: "Picos minerais ressoam com a energia dos Pets mais resistentes.",
      zone: "serra-cristalina",
    },
    "vale-das-nuvens": {
      name: "Vale das Nuvens",
      desc: "Um vale suspenso, atravessado por ventos elétricos e neblina azulada.",
      zone: "vale-das-nuvens",
    },
    "mangue-lunar": {
      name: "Mangue Lunar",
      desc: "Águas escuras refletem constelações que não existem no céu conhecido.",
      zone: "mangue-lunar",
    },
    "abismo-das-mares": {
      name: "Abismo das Marés",
      desc: "A última fronteira: correntes profundas protegem o coração do Grande Eco.",
      zone: "abismo-das-mares",
    },
  };

  const mapSpecs = {
    "selva-ancestral": {
      zones: ["mata-ancestral", "ruinas-do-sol"],
      leftGround: F.GRASS,
      rightGround: F.SAND,
      accent: F.MOSS,
      start: { x: 6, y: 20, dir: 2 },
      npcs: [
        {
          id: "retorno-selva",
          x: 4,
          y: 18,
          name: "Barqueira Tainá",
          kind: "old",
          worldTravel: { target: "tata", dialogue: "O barco está pronto para voltar ao Arquipélago do Tatá." },
        },
        {
          id: "pesquisador-raizes",
          x: 20,
          y: 11,
          name: "Pesquisador Caíque",
          kind: "trainer",
          dialog: ["As raízes daqui reconhecem cada vínculo. Vamos testar o seu!"],
          team: [
            { sp: "cipovivo", level: 53 },
            { sp: "cristapup", level: 55 },
          ],
        },
        {
          id: "guardiao-mata",
          x: 53,
          y: 20,
          name: "Araci, Guardiã dos Ecos",
          kind: "trainer",
          isBoss: true,
          dialog: ["A Mata Ancestral só revela o próximo caminho a quem prova que sabe proteger a vida."],
          team: [
            { sp: "raizcoroada", level: 57 },
            { sp: "quartzarca", level: 59 },
            { sp: "brasafenix", level: 60 },
          ],
        },
        {
          id: "portal-serra",
          x: 58,
          y: 31,
          name: "Passagem para a Serra",
          kind: "old",
          worldTravel: {
            target: "serra-dos-ecos",
            requiresDefeated: "guardiao-mata",
            dialogue: "A trilha de cristais se abriu. A Serra dos Ecos espera por você.",
            locked: "A passagem só se abre depois que Araci, Guardiã dos Ecos, for vencida.",
          },
        },
      ],
      trainerLevel: 53,
    },
    "serra-dos-ecos": {
      zones: ["serra-cristalina", "vale-das-nuvens"],
      leftGround: F.ROCK,
      rightGround: F.GRASS,
      accent: F.PLAZA,
      start: { x: 6, y: 20, dir: 2 },
      npcs: [
        {
          id: "retorno-serra",
          x: 4,
          y: 18,
          name: "Montanhista Ivo",
          kind: "old",
          worldTravel: { target: "selva-ancestral", dialogue: "Posso levar você de volta à Mata Ancestral." },
        },
        {
          id: "treinadora-serra",
          x: 20,
          y: 11,
          name: "Mestre de Trilha Nara",
          kind: "trainer",
          dialog: ["Aqui, cada passo pesa. Vamos ver se seu time está pronto para subir."],
          team: [
            { sp: "quartzarca", level: 62 },
            { sp: "temporalma", level: 63 },
          ],
        },
        {
          id: "guardiao-serra",
          x: 53,
          y: 20,
          name: "Oruã, Titã Cristalino",
          kind: "trainer",
          isBoss: true,
          dialog: ["O vento da serra carrega ecos de todas as batalhas. Mostre que consegue ouvi-los."],
          team: [
            { sp: "quartzarca", level: 66 },
            { sp: "ecliptouro", level: 67 },
            { sp: "temporalma", level: 68 },
          ],
        },
        {
          id: "portal-delta",
          x: 58,
          y: 31,
          name: "Descida para o Mangue Lunar",
          kind: "old",
          worldTravel: {
            target: "delta-lunar",
            requiresDefeated: "guardiao-serra",
            dialogue: "O Titã reconheceu seu vínculo. Uma descida até o Mangue Lunar se revelou.",
            locked: "A descida está bloqueada. Vença Oruã, o Titã Cristalino, primeiro.",
          },
        },
      ],
      trainerLevel: 62,
    },
    "delta-lunar": {
      zones: ["mangue-lunar", "abismo-das-mares"],
      leftGround: F.BOG,
      rightGround: F.SAND,
      accent: F.MOSS,
      start: { x: 6, y: 20, dir: 2 },
      npcs: [
        {
          id: "retorno-delta",
          x: 4,
          y: 18,
          name: "Guia Ubiraci",
          kind: "old",
          worldTravel: { target: "serra-dos-ecos", dialogue: "A trilha de volta à Serra dos Ecos está segura." },
        },
        {
          id: "mergulhadora-lunar",
          x: 20,
          y: 11,
          name: "Mergulhadora Luma",
          kind: "trainer",
          dialog: ["As correntes mudam sem aviso. Só vínculo e estratégia mantêm alguém de pé."],
          team: [
            { sp: "marecervo", level: 70 },
            { sp: "ecliptouro", level: 71 },
          ],
        },
        {
          id: "guardiao-grande-eco",
          x: 53,
          y: 20,
          name: "Aruanã, Coração do Grande Eco",
          kind: "trainer",
          isBoss: true,
          dialog: ["Você atravessou três mundos. Agora, enfrente a memória viva que os mantém unidos!"],
          team: [
            { sp: "brasafenix", level: 75 },
            { sp: "ecliptouro", level: 76 },
            { sp: "eco-supremo", level: 78 },
          ],
        },
        {
          id: "arquivista-eco",
          x: 13,
          y: 30,
          name: "Arquivista do Grande Eco",
          kind: "old",
          dialog: ["As histórias desta fronteira ainda estão sendo escritas."],
        },
      ],
      trainerLevel: 70,
    },
  };

  function makeMap(worldId) {
    const spec = mapSpecs[worldId];
    const w = 64;
    const h = 44;
    const tiles = Array(w * h).fill(F.WATER);
    const region = Array(w * h).fill(spec.zones[0]);
    const at = (x, y) => y * w + x;
    const set = (x, y, tile) => {
      if (x >= 0 && y >= 0 && x < w && y < h) tiles[at(x, y)] = tile;
    };
    const setZone = (x, y, zone) => {
      if (x >= 0 && y >= 0 && x < w && y < h) region[at(x, y)] = zone;
    };
    const rect = (x0, y0, x1, y1, tile, zone) => {
      for (let y = y0; y <= y1; y += 1) {
        for (let x = x0; x <= x1; x += 1) {
          set(x, y, tile);
          if (zone) setZone(x, y, zone);
        }
      }
    };

    // Duas massas de terra conectadas por um caminho, cada uma com seu bioma.
    rect(2, 2, 31, 41, spec.leftGround, spec.zones[0]);
    rect(32, 2, 61, 41, spec.rightGround, spec.zones[1]);
    rect(3, 19, 60, 21, F.PATH);
    rect(5, 17, 7, 23, F.PATH);
    rect(51, 17, 55, 23, F.PATH);

    if (worldId === "selva-ancestral") {
      rect(8, 6, 14, 9, F.MOSS);
      rect(37, 6, 43, 9, F.ROCK);
      rect(47, 30, 55, 34, F.SAND);
    } else if (worldId === "serra-dos-ecos") {
      rect(7, 7, 13, 11, F.MOSS);
      rect(17, 28, 25, 32, F.ROCK);
      rect(39, 6, 46, 10, F.PLAZA);
      rect(48, 29, 56, 34, F.GRASS);
    } else {
      rect(7, 7, 14, 11, F.MOSS);
      rect(18, 28, 25, 33, F.BOG);
      rect(39, 6, 45, 10, F.SAND);
      rect(48, 29, 56, 34, F.WATER);
      rect(50, 18, 52, 19, F.PATH);
    }

    // Clareiras altas: áreas de encontro em cada um dos seis biomas.
    const patches = [
      [11, 12, 16, 16, spec.zones[0]],
      [20, 28, 25, 32, spec.zones[0]],
      [38, 11, 43, 15, spec.zones[1]],
      [47, 27, 53, 32, spec.zones[1]],
    ];
    for (const [x0, y0, x1, y1, zone] of patches) {
      rect(x0, y0, x1, y1, F.TALL, zone);
    }

    // Pequenos pontos de referência visuais sem fechar a rota principal.
    for (const [x, y] of [[8, 14], [18, 34], [29, 8], [36, 34], [46, 16], [57, 9]]) {
      if (tiles[at(x, y)] !== F.TALL && tiles[at(x, y)] !== F.PATH) set(x, y, spec.accent);
    }

    return { w, h, tiles, region };
  }

  const worlds = {};
  for (const id of Object.keys(mapSpecs)) {
    worlds[id] = {
      id,
      name: id === "selva-ancestral" ? "Mata Ancestral e Ruínas do Sol" :
        id === "serra-dos-ecos" ? "Serra Cristalina e Vale das Nuvens" :
        "Mangue Lunar e Abismo das Marés",
      zones: mapSpecs[id].zones,
      start: mapSpecs[id].start,
      npcs: mapSpecs[id].npcs,
      createMap: () => makeMap(id),
    };
  }

  const newSpecies = [
    {
      id: "cipovivo", name: "Cipovivo", types: ["Flora"], stage: 0, feature: "leaf", silhouette: "vine-beast", evoLevel: 52,
      base: { hp: 105, atk: 102, def: 92, vel: 80 },
      moves: [I("Laço de Raiz", "Flora", 58, 96), I("Folha Cortante", "Flora", 62, 94), I("Investida", "Pedra", 48, 100)],
      dex: "Pet viajante da Mata Ancestral. Guarda sementes luminosas entre as folhas e sente passos pelo solo.",
      evo: [{ affinity: "Flora", name: "Raizcoroada", types: ["Flora", "Sombra"], focus: "atk", feature: "leaf", dex: "" }],
    },
    {
      id: "raizcoroada", name: "Raizcoroada", types: ["Flora", "Sombra"], stage: 1, feature: "leaf", silhouette: "crowned-vine", rare: true,
      base: { hp: 158, atk: 164, def: 145, vel: 118 },
      moves: [I("Coroa de Espinhos", "Flora", 72, 94), I("Sombra Enraizada", "Sombra", 68, 96), I("Laço de Raiz", "Flora", 62, 100)],
      dex: "Suas raízes alcançam as memórias da floresta. Quando protege alguém, nenhuma tempestade consegue movê-la.",
    },
    {
      id: "cristapup", name: "Cristapup", types: ["Pedra"], stage: 0, feature: "spikes", silhouette: "crystal-cub", evoLevel: 60,
      base: { hp: 112, atk: 104, def: 118, vel: 72 },
      moves: [I("Estilhaço Vivo", "Pedra", 60, 96), I("Pulso de Quartzo", "Faísca", 56, 94), I("Cabeçada", "Pedra", 52, 100)],
      dex: "Filhote mineral das ruínas. Seus cristais mudam de cor quando percebe uma batalha se aproximando.",
      evo: [{ affinity: "Pedra", name: "Quartzarca", types: ["Pedra", "Faísca"], focus: "def", feature: "spikes", dex: "" }],
    },
    {
      id: "quartzarca", name: "Quartzarca", types: ["Pedra", "Faísca"], stage: 1, feature: "spikes", silhouette: "crystal-ram", rare: true,
      base: { hp: 170, atk: 150, def: 182, vel: 104 },
      moves: [I("Investida Prismática", "Pedra", 74, 94), I("Arco de Quartzo", "Faísca", 70, 96), I("Muralha Mineral", "Pedra", 62, 100)],
      dex: "Carrega uma coroa de quartzo que atrai relâmpagos. Cada impacto reverbera por toda a serra.",
    },
    {
      id: "mareflor", name: "Maréflor", types: ["Maré"], stage: 0, feature: "fins", silhouette: "tide-deer", evoLevel: 66,
      base: { hp: 115, atk: 100, def: 105, vel: 92 },
      moves: [I("Onda de Pétalas", "Maré", 60, 96), I("Chifre de Coral", "Maré", 58, 98), I("Brisa Verde", "Flora", 54, 100)],
      dex: "Nada entre raízes alagadas e deixa flores de água no caminho. É guia de viajantes perdidos.",
      evo: [{ affinity: "Maré", name: "Marécer", types: ["Maré", "Flora"], focus: "def", feature: "fins", dex: "" }],
    },
    {
      id: "marecer", name: "Marécer", types: ["Maré", "Flora"], stage: 1, feature: "fins", silhouette: "tide-stag", rare: true,
      base: { hp: 174, atk: 144, def: 164, vel: 132 },
      moves: [I("Cervo das Correntes", "Maré", 76, 94), I("Jardim Abissal", "Flora", 70, 96), I("Cascata Espiral", "Maré", 66, 100)],
      dex: "Seus galhos de coral anunciam marés fortes. A água ao redor se torna cristalina quando ele passa.",
    },
    {
      id: "nuvemaru", name: "Nuvemaru", types: ["Faísca"], stage: 0, feature: "wings", silhouette: "cloud-hawk", evoLevel: 70,
      base: { hp: 108, atk: 118, def: 96, vel: 122 },
      moves: [I("Pena Trovejante", "Faísca", 62, 95), I("Redemoinho", "Faísca", 58, 98), I("Asa Cortante", "Faísca", 54, 100)],
      dex: "Pequeno Pet dos vales altos. Dorme dentro de nuvens e acorda quando sente uma mudança no vento.",
      evo: [{ affinity: "Faísca", name: "Temporalma", types: ["Faísca", "Maré"], focus: "atk", feature: "wings", dex: "" }],
    },
    {
      id: "temporalma", name: "Temporalma", types: ["Faísca", "Maré"], stage: 1, feature: "wings", silhouette: "storm-phoenix", rare: true,
      base: { hp: 156, atk: 176, def: 134, vel: 186 },
      moves: [I("Ciclone de Raios", "Faísca", 78, 94), I("Trovão das Nuvens", "Faísca", 72, 96), I("Maré Aérea", "Maré", 66, 98)],
      dex: "Cruza vales como um raio azul. A chuva que o acompanha carrega energia capaz de reanimar a serra.",
    },
    {
      id: "umbravio", name: "Umbravio", types: ["Sombra"], stage: 0, feature: "horns", silhouette: "moon-bat", evoLevel: 74,
      base: { hp: 122, atk: 124, def: 108, vel: 104 },
      moves: [I("Véu da Lua", "Sombra", 62, 96), I("Presa Noturna", "Sombra", 60, 97), I("Lâmina de Pedra", "Pedra", 54, 100)],
      dex: "Vigia o Mangue Lunar e só aparece quando as estrelas se refletem na água escura.",
      evo: [{ affinity: "Sombra", name: "Ecliptouro", types: ["Sombra", "Pedra"], focus: "def", feature: "horns", dex: "" }],
    },
    {
      id: "ecliptouro", name: "Ecliptouro", types: ["Sombra", "Pedra"], stage: 1, feature: "horns", silhouette: "eclipse-bull", rare: true,
      base: { hp: 192, atk: 168, def: 188, vel: 112 },
      moves: [I("Chifre do Eclipse", "Sombra", 78, 94), I("Tremor Lunar", "Pedra", 72, 96), I("Noite Imóvel", "Sombra", 66, 98)],
      dex: "Seus chifres desenham um eclipse completo. Dizem que ele protege a passagem para o Abismo das Marés.",
    },
    {
      id: "brasavio", name: "Brasávio", types: ["Brasa"], stage: 0, feature: "flame", silhouette: "ember-bird", evoLevel: 76,
      base: { hp: 118, atk: 138, def: 102, vel: 108 },
      moves: [I("Pluma Vulcânica", "Brasa", 64, 95), I("Faísca Rubra", "Brasa", 58, 98), I("Asa de Cinzas", "Brasa", 56, 100)],
      dex: "Ave de fogo que migra entre vulcões adormecidos. Suas penas aquecem quem perdeu a esperança.",
      evo: [{ affinity: "Brasa", name: "Brasafênix", types: ["Brasa", "Faísca"], focus: "atk", feature: "flame", dex: "" }],
    },
    {
      id: "brasafenix", name: "Brasafênix", types: ["Brasa", "Faísca"], stage: 1, feature: "flame", silhouette: "solar-phoenix", rare: true, glow: true,
      base: { hp: 182, atk: 198, def: 142, vel: 154 },
      moves: [I("Aurora Incandescente", "Brasa", 80, 94), I("Renascimento Solar", "Brasa", 74, 96), I("Raio das Cinzas", "Faísca", 68, 98)],
      dex: "Renasce no encontro entre a última brasa e o primeiro raio da manhã. Suas asas iluminam o Abismo.",
    },
    {
      id: "eco-supremo", name: "Eco Supremo", types: ["Sombra", "Flora"], stage: 2, feature: "spikes", silhouette: "primordial-echo", rare: true, glow: true,
      base: { hp: 220, atk: 205, def: 196, vel: 168 },
      moves: [I("Pulso Primordial", "Sombra", 82, 95), I("Raiz do Mundo", "Flora", 78, 96), I("Vórtice de Memórias", "Sombra", 74, 97)],
      dex: "Pet lendário formado pelas memórias de três mundos. Seu rugido une todos os biomas num único coração.",
    },
  ];

  for (const species of newSpecies) {
    nu[species.id] = species;
    if (species.evo?.length) Kr[species.id] = species.evo.map((evolution) => {
      const id = evolution.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      return id;
    });
    species.silhouette ||= species.id;
    window.EV_SIGNATURES?.registerSpecies?.(species);
  }

  for (const [id, info] of Object.entries(zoneInfo)) {
    Zf[id] = info;
  }

  Object.assign(Ne, {
    "mata-ancestral": "bosque",
    "ruinas-do-sol": "igneo",
    "serra-cristalina": "caverna",
    "vale-das-nuvens": "lago",
    "mangue-lunar": "sombrio",
    "abismo-das-mares": "lago",
  });

  Object.assign(ZQ, {
    "mata-ancestral": [
      { sp: "cipovivo", min: 49, max: 53, w: 38 },
      { sp: "cristapup", min: 50, max: 54, w: 30 },
      { sp: "raizcoroada", min: 54, max: 56, w: 14 },
      { sp: "mareflor", min: 50, max: 54, w: 18 },
    ],
    "ruinas-do-sol": [
      { sp: "cristapup", min: 51, max: 55, w: 32 },
      { sp: "brasavio", min: 52, max: 56, w: 28 },
      { sp: "quartzarca", min: 57, max: 59, w: 14 },
      { sp: "brasafenix", min: 58, max: 60, w: 8 },
      { sp: "cipovivo", min: 51, max: 54, w: 18 },
    ],
    "serra-cristalina": [
      { sp: "cristapup", min: 57, max: 61, w: 35 },
      { sp: "quartzarca", min: 62, max: 64, w: 20 },
      { sp: "umbravio", min: 58, max: 62, w: 20 },
      { sp: "ecliptouro", min: 64, max: 66, w: 10 },
      { sp: "nuvemaru", min: 58, max: 62, w: 15 },
    ],
    "vale-das-nuvens": [
      { sp: "nuvemaru", min: 60, max: 64, w: 38 },
      { sp: "temporalma", min: 65, max: 67, w: 18 },
      { sp: "mareflor", min: 60, max: 64, w: 24 },
      { sp: "brasavio", min: 61, max: 65, w: 20 },
    ],
    "mangue-lunar": [
      { sp: "umbravio", min: 66, max: 70, w: 34 },
      { sp: "mareflor", min: 66, max: 70, w: 28 },
      { sp: "ecliptouro", min: 71, max: 73, w: 14 },
      { sp: "cipovivo", min: 66, max: 70, w: 12 },
      { sp: "brasavio", min: 67, max: 70, w: 12 },
    ],
    "abismo-das-mares": [
      { sp: "mareflor", min: 69, max: 73, w: 30 },
      { sp: "brasafenix", min: 74, max: 76, w: 18 },
      { sp: "ecliptouro", min: 73, max: 76, w: 22 },
      { sp: "temporalma", min: 72, max: 75, w: 18 },
      { sp: "eco-supremo", min: 76, max: 78, w: 4 },
      { sp: "quartzarca", min: 70, max: 73, w: 8 },
    ],
  });

  if (Array.isArray(V8) && !V8.some((npc) => npc.id === "navegadora-cora")) {
    V8.push({
      id: "navegadora-cora",
      x: 5,
      y: 16,
      name: "Navegadora Cora",
      kind: "old",
      worldTravel: {
        target: "selva-ancestral",
        requiresTataAlfa: true,
        dialogue: "A bússola de ecos abriu uma rota para a Mata Ancestral. Vamos zarpar?",
        locked: "A bússola ainda está silenciosa. Primeiro, vença o Tatá Alfa e fale com Dona Jacaruxa.",
      },
    });
  }

  window.EV_POSTGAME_WORLDS = worlds;
  window.EV_POSTGAME_SAGA_INFO = {
    name: "Terras do Grande Eco",
    worlds: Object.keys(worlds).length,
    biomes: Object.keys(zoneInfo).length,
    newSpecies: newSpecies.length,
    route: ["tata", "selva-ancestral", "serra-dos-ecos", "delta-lunar"],
  };
})();
