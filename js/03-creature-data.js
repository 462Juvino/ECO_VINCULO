/*
 * Eco Vínculo — Dados dos Pats, técnicas e regras
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 10748-12514.
 */
"use strict";

      function ko(n) {
        nu[n.id] = n;
      }
      QQ.forEach(ko);
      QQ.forEach((n) => {
        n.evo.forEach((u) => {
          let r = u.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""),
            l = {
              id: r,
              name: u.name,
              types: u.types,
              stage: 1,
              base: $Q(n.base, 1.5, u.focus),
              moves: vQ(n.moves, u.types),
              dex: u.dex,
              feature: u.feature,
              evo: [
                {
                  affinity: u.affinity,
                  name: "",
                  types: [],
                  focus: u.focus,
                  feature: u.feature,
                  dex: "",
                },
                {
                  affinity: u.types[1] ?? u.types[0],
                  name: "",
                  types: [],
                  focus: u.focus === "atk" ? "def" : "atk",
                  feature: u.feature,
                  dex: "",
                },
              ],
            };
          ((l.silhouette = r),
            l.evo.forEach((o, f) => {
              let $ = o.affinity,
                _ = l.types.includes($)
                  ? [...l.types]
                  : [...l.types.slice(0, 1), $],
                v = `${r}_2${f}`,
                Z = {
                  id: v,
                  name: `${l.name} ${aK[$]}`,
                  types: _.slice(0, 2),
                  stage: 2,
                  base: $Q(l.base, 1.42, o.focus),
                  moves: vQ(l.moves, _.slice(0, 2)),
                  dex: `Forma suprema de ${l.name}, lapidada pela afinidade ${$} de seu treinador.`,
                  feature: l.feature,
                  silhouette: v,
                };
              ((o.name = Z.name),
                (o.types = Z.types),
                (o.dex = Z.dex),
                ko(Z),
                (Kr[r] = Kr[r] || []).push(v));
            }),
            ko(l),
            (Kr[n.id] = Kr[n.id] || []).push(r));
        });
      });
      Object.values(nu).forEach((n) => {
        if (!n.silhouette) n.silhouette = n.id;
      });
      var Q3 = nu.pyrothion;
      if (Q3)
        Q3.moves = [
          I("Rajada Infernal", "Brasa", 65, 90),
          I("Garra Ígnea", "Brasa", 60, 95),
          ...Q3.moves.filter((n) => n.type !== "Brasa"),
        ].slice(0, 4);
      var RK = [
        {
          id: "verdente-1",
          name: "Verdente",
          types: ["Flora"],
          stage: 0,
          feature: "leaf",
          silhouette: "maw",
          evoLevel: 20,
          base: { hp: 62, atk: 58, def: 58, vel: 46 },
          moves: [
            I("Folha Navalha", "Flora", 45, 100),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Mordida", "Sombra", 50, 100),
            I("Investida", "Pedra", 45, 95),
          ],
          dex: "Brotinho carnívoro das cavernas Flora. Estala as mandíbulas quando fareja presas.",
          evo: [
            {
              affinity: "Flora",
              name: "Mandiflor",
              types: ["Flora"],
              focus: "atk",
              feature: "leaf",
              dex: "",
            },
          ],
        },
        {
          id: "verdente-2",
          name: "Mandiflor",
          types: ["Flora"],
          stage: 1,
          feature: "leaf",
          silhouette: "maw",
          evoLevel: 36,
          base: { hp: 86, atk: 90, def: 82, vel: 64 },
          moves: [
            I("Folha Navalha", "Flora", 60, 100),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Mordida", "Sombra", 50, 100),
            I("Investida", "Pedra", 45, 95),
          ],
          dex: "Suas mandíbulas dentadas esmagam até casca de pedra. Fareja a 100 metros.",
          evo: [
            {
              affinity: "Flora",
              name: "Devorasselva",
              types: ["Flora"],
              focus: "atk",
              feature: "leaf",
              dex: "",
            },
          ],
        },
        {
          id: "verdente-3",
          name: "Devorasselva",
          types: ["Flora"],
          stage: 2,
          feature: "leaf",
          silhouette: "maw",
          rare: !0,
          base: { hp: 118, atk: 130, def: 110, vel: 84 },
          moves: [
            I("Folha Navalha", "Flora", 75, 100),
            I("Tempestade Pétala", "Flora", 70, 90),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "A rainha carnívora da caverna Flora. Suas vinhas arrastam presas para a selva sombria.",
        },
        {
          id: "gotaviva-1",
          name: "Gotaviva",
          types: ["Maré"],
          stage: 0,
          feature: "fins",
          silhouette: "jelly",
          evoLevel: 20,
          base: { hp: 60, atk: 54, def: 60, vel: 50 },
          moves: [
            I("Jato d’Água", "Maré", 40, 100),
            I("Cauda Maré", "Maré", 60, 95),
            I("Névoa Doce", "Maré", 50, 100),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "Gota viva que flutua como água-viva. Seus tentáculos dão choquinhos de alegria.",
          evo: [
            {
              affinity: "Maré",
              name: "Medusonda",
              types: ["Maré"],
              focus: "def",
              feature: "fins",
              dex: "",
            },
          ],
        },
        {
          id: "gotaviva-2",
          name: "Medusonda",
          types: ["Maré"],
          stage: 1,
          feature: "fins",
          silhouette: "jelly",
          evoLevel: 36,
          base: { hp: 88, atk: 72, def: 98, vel: 66 },
          moves: [
            I("Jato d’Água", "Maré", 55, 100),
            I("Cauda Maré", "Maré", 60, 95),
            I("Névoa Doce", "Maré", 50, 100),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "Sonda as profundezas com tentáculos luminescentes. Hipnotiza com sua cúpula.",
          evo: [
            {
              affinity: "Maré",
              name: "Abissalume",
              types: ["Maré"],
              focus: "def",
              feature: "fins",
              dex: "",
            },
          ],
        },
        {
          id: "gotaviva-3",
          name: "Abissalume",
          types: ["Maré"],
          stage: 2,
          feature: "fins",
          silhouette: "jelly",
          rare: !0,
          glow: !0,
          base: { hp: 124, atk: 96, def: 134, vel: 84 },
          moves: [
            I("Jato d’Água", "Maré", 70, 100),
            I("Tsunami", "Maré", 70, 90),
            I("Cauda Maré", "Maré", 60, 95),
            I("Névoa Doce", "Maré", 50, 100),
          ],
          dex: "A luz viva do abismo. Sua cúpula ilumina cavernas inteiras na escuridão total.",
        },
        {
          id: "lavarva-1",
          name: "Lavarva",
          types: ["Brasa"],
          stage: 0,
          feature: "flame",
          silhouette: "serpent",
          evoLevel: 20,
          base: { hp: 58, atk: 64, def: 52, vel: 50 },
          moves: [
            I("Brasinha", "Brasa", 40, 100),
            I("Labareda", "Brasa", 65, 90),
            I("Mordida Sombria", "Sombra", 50, 100),
            I("Golpe Rocha", "Pedra", 45, 95),
          ],
          dex: "Larva de magma que rasteja deixando trilhas de lava fria. Adora calor extremo.",
          evo: [
            {
              affinity: "Brasa",
              name: "Magmaserp",
              types: ["Brasa"],
              focus: "atk",
              feature: "flame",
              dex: "",
            },
          ],
        },
        {
          id: "lavarva-2",
          name: "Magmaserp",
          types: ["Brasa"],
          stage: 1,
          feature: "flame",
          silhouette: "serpent",
          evoLevel: 36,
          base: { hp: 80, atk: 100, def: 70, vel: 68 },
          moves: [
            I("Brasinha", "Brasa", 55, 100),
            I("Labareda", "Brasa", 65, 90),
            I("Mordida Sombria", "Sombra", 50, 100),
            I("Golpe Rocha", "Pedra", 45, 95),
          ],
          dex: "Serpente de magma veloz. Seu corpo segmentado brilha antes do bote.",
          evo: [
            {
              affinity: "Brasa",
              name: "Vulcoserpe",
              types: ["Brasa"],
              focus: "atk",
              feature: "flame",
              dex: "",
            },
          ],
        },
        {
          id: "lavarva-3",
          name: "Vulcoserpe",
          types: ["Brasa"],
          stage: 2,
          feature: "flame",
          silhouette: "serpent",
          rare: !0,
          base: { hp: 106, atk: 142, def: 92, vel: 88 },
          moves: [
            I("Brasinha", "Brasa", 70, 100),
            I("Explosão Ígnea", "Brasa", 70, 90),
            I("Labareda", "Brasa", 65, 90),
            I("Mordida Sombria", "Sombra", 50, 100),
          ],
          dex: "Lenda ígnea das cavernas. Dizem que seu sibilo precede erupções.",
        },
        {
          id: "zunivolt-1",
          name: "Zunivolt",
          types: ["Faísca"],
          stage: 0,
          feature: "spikes",
          silhouette: "stormbird",
          evoLevel: 20,
          base: { hp: 52, atk: 60, def: 50, vel: 64 },
          moves: [
            I("Choquinho", "Faísca", 40, 100),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Mordida", "Sombra", 50, 100),
            I("Raio Bolha", "Faísca", 45, 95),
          ],
          dex: "Filhote de tempestade. Zune antes de cada relâmpago na caverna Faísca.",
          evo: [
            {
              affinity: "Faísca",
              name: "Trovibem",
              types: ["Faísca"],
              focus: "vel",
              feature: "spikes",
              dex: "",
            },
          ],
        },
        {
          id: "zunivolt-2",
          name: "Trovibem",
          types: ["Faísca"],
          stage: 1,
          feature: "spikes",
          silhouette: "stormbird",
          evoLevel: 36,
          base: { hp: 70, atk: 82, def: 66, vel: 100 },
          moves: [
            I("Choquinho", "Faísca", 55, 100),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Mordida", "Sombra", 50, 100),
            I("Raio Bolha", "Faísca", 45, 95),
          ],
          dex: "Suas asas abertas atraem raios. Canta junto com os trovões.",
          evo: [
            {
              affinity: "Faísca",
              name: "Tempestalis",
              types: ["Faísca"],
              focus: "vel",
              feature: "spikes",
              dex: "",
            },
          ],
        },
        {
          id: "zunivolt-3",
          name: "Tempestalis",
          types: ["Faísca"],
          stage: 2,
          feature: "spikes",
          silhouette: "stormbird",
          rare: !0,
          base: { hp: 92, atk: 108, def: 86, vel: 140 },
          moves: [
            I("Choquinho", "Faísca", 70, 100),
            I("Julgamento Volt", "Faísca", 70, 90),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Raio Bolha", "Faísca", 45, 95),
          ],
          dex: "A própria tempestade com asas. Onde voa, o céu escurece.",
        },
        {
          id: "cristalito-1",
          name: "Cristalito",
          types: ["Pedra"],
          stage: 0,
          feature: "horns",
          silhouette: "crystalgolem",
          evoLevel: 20,
          base: { hp: 66, atk: 58, def: 68, vel: 36 },
          moves: [
            I("Pedrada", "Pedra", 45, 100),
            I("Avalanche", "Pedra", 65, 88),
            I("Mordida", "Sombra", 50, 100),
            I("Soco Magma", "Brasa", 55, 92),
          ],
          dex: "Pequeno cristal ambulante. Toca música ao bater seus ângulos.",
          evo: [
            {
              affinity: "Pedra",
              name: "Quartzagma",
              types: ["Pedra"],
              focus: "def",
              feature: "horns",
              dex: "",
            },
          ],
        },
        {
          id: "cristalito-2",
          name: "Quartzagma",
          types: ["Pedra"],
          stage: 1,
          feature: "horns",
          silhouette: "crystalgolem",
          evoLevel: 36,
          base: { hp: 94, atk: 78, def: 106, vel: 46 },
          moves: [
            I("Pedrada", "Pedra", 60, 100),
            I("Avalanche", "Pedra", 65, 88),
            I("Mordida", "Sombra", 50, 100),
            I("Soco Magma", "Brasa", 55, 92),
          ],
          dex: "Golem de quartzo bruto. Refrata luz em arco-íris afiados.",
          evo: [
            {
              affinity: "Pedra",
              name: "Diamangolem",
              types: ["Pedra"],
              focus: "def",
              feature: "horns",
              dex: "",
            },
          ],
        },
        {
          id: "cristalito-3",
          name: "Diamangolem",
          types: ["Pedra"],
          stage: 2,
          feature: "horns",
          silhouette: "crystalgolem",
          rare: !0,
          base: { hp: 130, atk: 100, def: 148, vel: 58 },
          moves: [
            I("Pedrada", "Pedra", 75, 100),
            I("Fúria Tectônica", "Pedra", 70, 90),
            I("Avalanche", "Pedra", 65, 88),
            I("Soco Magma", "Brasa", 55, 92),
          ],
          dex: "Colosso de diamante das profundezas. Quase impossível de arranhar.",
        },
        {
          id: "maripombra-1",
          name: "Maripombra",
          types: ["Sombra"],
          stage: 0,
          feature: "wings",
          silhouette: "moth",
          evoLevel: 20,
          base: { hp: 54, atk: 62, def: 52, vel: 58 },
          moves: [
            I("Garra Sombria", "Sombra", 45, 100),
            I("Véu Noturno", "Sombra", 65, 90),
            I("Mordida", "Sombra", 50, 100),
            I("Sopro Frio", "Maré", 45, 95),
          ],
          dex: "Mariposinha que bebe sombras. Suas asas têm olhos que nunca piscam.",
          evo: [
            {
              affinity: "Sombra",
              name: "Noctivora",
              types: ["Sombra"],
              focus: "vel",
              feature: "wings",
              dex: "",
            },
          ],
        },
        {
          id: "maripombra-2",
          name: "Noctivora",
          types: ["Sombra"],
          stage: 1,
          feature: "wings",
          silhouette: "moth",
          evoLevel: 36,
          base: { hp: 72, atk: 86, def: 66, vel: 92 },
          moves: [
            I("Garra Sombria", "Sombra", 60, 100),
            I("Véu Noturno", "Sombra", 65, 90),
            I("Mordida", "Sombra", 50, 100),
            I("Sopro Frio", "Maré", 45, 95),
          ],
          dex: "Devoradora da noite. Seus ocelos hipnotizam presas e predadores.",
          evo: [
            {
              affinity: "Sombra",
              name: "Eclipsalia",
              types: ["Sombra"],
              focus: "vel",
              feature: "wings",
              dex: "",
            },
          ],
        },
        {
          id: "maripombra-3",
          name: "Eclipsalia",
          types: ["Sombra"],
          stage: 2,
          feature: "wings",
          silhouette: "moth",
          rare: !0,
          base: { hp: 94, atk: 118, def: 84, vel: 128 },
          moves: [
            I("Garra Sombria", "Sombra", 75, 100),
            I("Abismo Final", "Sombra", 70, 90),
            I("Véu Noturno", "Sombra", 65, 90),
            I("Sopro Frio", "Maré", 45, 95),
          ],
          dex: "A eclipse com asas. Quando abre as asas, a caverna inteira escurece.",
        },
        {
          id: "ecoalma",
          name: "Ecoalma",
          types: ["Sombra"],
          stage: 2,
          feature: "horns",
          rare: !0,
          base: { hp: 110, atk: 115, def: 100, vel: 105 },
          moves: [
            I("Abismo Final", "Sombra", 90, 90),
            I("Véu Noturno", "Sombra", 80, 95),
            I("Garra Sombria", "Sombra", 70, 100),
          ],
          dex: "O espírito do próprio vínculo. Dizem que só aparece para quem completou todas as provações.",
        },
        {
          id: "brasalma",
          name: "Brasalma",
          types: ["Brasa"],
          stage: 2,
          feature: "Espírito do vulcão que escolhe seu treinador",
          rare: !0,
          base: { hp: 95, atk: 80, def: 85, vel: 105 },
          moves: [
            I("Brasinha", "Brasa", 40, 100),
            I("Labareda", "Brasa", 65, 90),
            I("Soco Magma", "Brasa", 55, 92),
            I("Julgamento do Tatá", "Brasa", 95, 90),
          ],
          dex: "Nascido do coração do vulcão, o Brasalma só aparece para quem reuniu as lendas do folclore.",
        },
      ];
      RK.forEach(ko);
      var tK = [
        {
          id: "saci",
          name: "Redemoin",
          types: ["Faísca"],
          stage: 0,
          feature: "saci",
          evoLevel: 20,
          base: { hp: 54, atk: 58, def: 50, vel: 76 },
          moves: [
            I("Vento Cortante", "Flora", 45, 95),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Clarão", "Faísca", 55, 95),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "Redemoin: moleque travesso de uma perna só que viaja em redemoinhos. Seu gorro vermelho esconde grandes poderes — e piadas ainda maiores.",
          evo: [
            {
              affinity: "Faísca",
              name: "Redemuinho",
              types: ["Faísca"],
              focus: "vel",
              feature: "saci",
              dex: "",
            },
          ],
        },
        {
          id: "saci-evo1",
          name: "Redemuinho",
          types: ["Faísca"],
          stage: 1,
          feature: "saci",
          silhouette: "redemuinho",
          evoLevel: 36,
          base: { hp: 72, atk: 78, def: 64, vel: 104 },
          moves: [
            I("Vento Cortante", "Flora", 60, 95),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Clarão", "Faísca", 55, 95),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "O redemoinho cresceu — e as travessuras também. Suas faíscas desenham espirais douradas no ar.",
          evo: [
            {
              affinity: "Faísca",
              name: "Furacãozinho",
              types: ["Faísca"],
              focus: "vel",
              feature: "pointy",
              dex: "",
            },
          ],
        },
        {
          id: "saci-evo2",
          name: "Furacãozinho",
          types: ["Faísca"],
          stage: 2,
          feature: "pointy",
          silhouette: "furacaozinho",
          rare: !0,
          base: { hp: 95, atk: 100, def: 85, vel: 135 },
          moves: [
            I("Vento Cortante", "Flora", 75, 95),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Clarão", "Faísca", 55, 95),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "A forma suprema do moleque travesso: um furacão de uma perna só. Quando ele ri, a Caldeira inteira estremece.",
        },
        {
          id: "curupira",
          name: "Virapé",
          types: ["Flora"],
          stage: 0,
          feature: "leaf",
          evoLevel: 20,
          base: { hp: 64, atk: 56, def: 66, vel: 38 },
          moves: [
            I("Folha Navalha", "Flora", 45, 100),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Investida", "Pedra", 45, 95),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "Virapé, o protetor da mata, com os pés virados para trás. Quem maltrata a floresta nunca mais encontra o caminho de volta.",
          evo: [
            {
              affinity: "Flora",
              name: "Virasselva",
              types: ["Flora"],
              focus: "def",
              feature: "leaf",
              dex: "",
            },
          ],
        },
        {
          id: "curupira-evo1",
          name: "Virasselva",
          types: ["Flora"],
          stage: 1,
          feature: "leaf",
          silhouette: "virasselva",
          evoLevel: 36,
          base: { hp: 88, atk: 74, def: 92, vel: 50 },
          moves: [
            I("Folha Navalha", "Flora", 60, 100),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Investida", "Pedra", 45, 95),
            I("Mordida", "Sombra", 50, 100),
          ],
          dex: "Guardião mirim da mata com cajado de madeira. Seus pés virados confundem até os caçadores mais espertos.",
          evo: [
            {
              affinity: "Flora",
              name: "Capoeirão",
              types: ["Flora"],
              focus: "def",
              feature: "leaf",
              dex: "",
            },
          ],
        },
        {
          id: "curupira-evo2",
          name: "Capoeirão",
          types: ["Flora"],
          stage: 2,
          feature: "leaf",
          silhouette: "capoeirao",
          rare: !0,
          base: { hp: 135, atk: 95, def: 140, vel: 60 },
          moves: [
            I("Folha Navalha", "Flora", 75, 100),
            I("Tempestade Pétala", "Flora", 70, 90),
            I("Chicote Vinha", "Flora", 60, 92),
            I("Investida", "Pedra", 45, 95),
          ],
          dex: "O protetor supremo da floresta, blindado em casca ancestral. Suas raízes prendem quem fere a mata — e só soltam quando ele perdoa.",
        },
        {
          id: "iara",
          name: "Cantamar",
          types: ["Maré"],
          stage: 2,
          feature: "fins",
          base: { hp: 100, atk: 135, def: 90, vel: 95 },
          moves: [
            I("Jato d’Água", "Maré", 70, 100),
            I("Tsunami", "Maré", 70, 90),
            I("Cauda Maré", "Maré", 60, 95),
            I("Névoa Doce", "Maré", 50, 100),
          ],
          dex: "Cantamar, a sereia dos rios. Seu canto hipnótico encanta pescadores — e afasta das águas quem não as respeita.",
        },
        {
          id: "boto",
          name: "Rosalfin",
          types: ["Maré"],
          stage: 2,
          feature: "fins",
          base: { hp: 110, atk: 105, def: 105, vel: 115 },
          moves: [
            I("Jato d’Água", "Maré", 70, 100),
            I("Cauda Maré", "Maré", 60, 95),
            I("Raio Veloz", "Faísca", 65, 90),
            I("Névoa Doce", "Maré", 50, 100),
          ],
          dex: "Rosalfin, o delfim rosado da Amazônia. Dizem que em noite de festa ele vira um galanteador encantador — e sempre volta para o rio.",
        },
        {
          id: "boitata",
          name: "Ignira",
          types: ["Brasa"],
          stage: 2,
          feature: "flame",
          base: { hp: 105, atk: 140, def: 90, vel: 90 },
          moves: [
            I("Brasinha", "Brasa", 70, 100),
            I("Explosão Ígnea", "Brasa", 70, 90),
            I("Labareda", "Brasa", 65, 90),
            I("Mordida Sombria", "Sombra", 50, 100),
          ],
          dex: "Ignira, a grande cobra de fogo. Protetora das matas e dos campos, incendeia quem ousa queimar a floresta.",
        },
        {
          id: "mula",
          name: "Galopim",
          types: ["Brasa"],
          stage: 2,
          feature: "flame",
          base: { hp: 110, atk: 145, def: 95, vel: 80 },
          moves: [
            I("Brasinha", "Brasa", 70, 100),
            I("Labareda", "Brasa", 65, 90),
            I("Soco Magma", "Brasa", 55, 92),
            I("Investida", "Pedra", 45, 95),
          ],
          dex: "Galopim: nas noites escuras, o fogo no lugar da cabeça anuncia sua corrida selvagem relinchando pelos campos.",
        },
        {
          id: "cuca",
          name: "Jacaruxa",
          types: ["Sombra"],
          stage: 2,
          feature: "horns",
          rare: !0,
          base: { hp: 130, atk: 135, def: 100, vel: 75 },
          moves: [
            I("Garra Sombria", "Sombra", 75, 100),
            I("Abismo Final", "Sombra", 70, 90),
            I("Véu Noturno", "Sombra", 65, 90),
            I("Sopro Frio", "Maré", 45, 95),
          ],
          dex: "Jacaruxa, a jacaré bruxa. Feiticeira de mil anos que dorme uma noite a cada sete — e nunca perdoa quem a acorda.",
        },
        {
          id: "lobisomem",
          name: "Lunauro",
          types: ["Sombra"],
          stage: 2,
          feature: "spikes",
          rare: !0,
          base: { hp: 145, atk: 145, def: 100, vel: 45 },
          moves: [
            I("Mordida Sombria", "Sombra", 75, 100),
            I("Garra Sombria", "Sombra", 60, 100),
            I("Investida", "Pedra", 65, 95),
            I("Véu Noturno", "Sombra", 65, 90),
          ],
          dex: "Lunauro: em noites de lua cheia, o sétimo filho se transforma nesta fera brutal cujo uivo gela os ermos.",
        },
      ];
      tK.forEach(ko);
      ko({
        id: "tata-alfa",
        name: "Tatá Alfa",
        types: ["Brasa"],
        stage: 2,
        feature: "flame",
        rare: !0,
        glow: !0,
        raridade: "lendario",
        base: { hp: 165, atk: 178, def: 125, vel: 98 },
        moves: [
          I("Erupção", "Brasa", 80, 88),
          I("Explosão Ígnea", "Brasa", 75, 92),
          I("Labareda", "Brasa", 75, 90),
          I("Ira Primordial", "Brasa", 115, 85),
        ],
        dex: "O primeiro espírito do fogo, adormecido sob a Caldeira desde antes das lendas. Dizem que o vulcão é apenas o seu coração batendo.",
      });
      var cK = {
        floramar: "raro",
        brascal: "raro",
        faesombra: "raro",
        faebran: "lendario",
        "verdente-3": "raro",
        "gotaviva-3": "raro",
        "lavarva-3": "raro",
        "zunivolt-3": "raro",
        "cristalito-3": "raro",
        "maripombra-3": "raro",
      };
      Object.values(nu).forEach((n) => {
        n.raridade = cK[n.id] ?? "comum";
      });
      [
        ["verdente-1", "verdente-2"],
        ["verdente-2", "verdente-3"],
        ["gotaviva-1", "gotaviva-2"],
        ["gotaviva-2", "gotaviva-3"],
        ["lavarva-1", "lavarva-2"],
        ["lavarva-2", "lavarva-3"],
        ["zunivolt-1", "zunivolt-2"],
        ["zunivolt-2", "zunivolt-3"],
        ["cristalito-1", "cristalito-2"],
        ["cristalito-2", "cristalito-3"],
        ["maripombra-1", "maripombra-2"],
        ["maripombra-2", "maripombra-3"],
      ].forEach(([n, u]) => {
        (Kr[n] = Kr[n] || []).push(u);
      });
      function xK(n) {
        let u = Object.keys(n).sort((o, f) => n[f] - n[o]),
          r = new Set(u.slice(0, 2)),
          l = {};
        return (
          Object.keys(n).forEach((o) => {
            l[o] = r.has(o) ? Math.round(n[o] * 1.15) : n[o];
          }),
          l
        );
      }
      var nJ = [
        {
          base: "boitata",
          sig: ["Cinza do Tatá", "Sombra", 75, 95],
          lore: "A marca do Tatá arde em espiral sobre suas escamas. Dizem que cada listra guarda a memória de uma queimada que ele impediu.",
        },
        {
          base: "mula",
          sig: ["Relincho Ancestral", "Faísca", 70, 95],
          lore: "O fogo de sua crina desenha o selo do Tatá. Nas noites de lua nova, seu relincho acorda as pedras da Caldeira.",
        },
        {
          base: "iara",
          sig: ["Canto da Marca", "Sombra", 75, 95],
          lore: "A espiral da marca brilha sob suas escamas quando ela canta. Foi o Tatá quem lhe ensinou a melodia que acalma as enchentes.",
        },
        {
          base: "boto",
          sig: ["Giro Encantado", "Flora", 70, 95],
          lore: "Tocado pelo Tatá ainda filhote, carrega a marca em forma de redemoinho no dorso. Guia viajantes perdidos de volta ao rio.",
        },
        {
          base: "curupira",
          sig: ["Trilha Invertida", "Sombra", 70, 95],
          lore: "Suas pegadas invertidas agora queimam levemente com a marca do Tatá. A mata reconhece o selo e abre caminho.",
        },
        {
          base: "verdente-3",
          sig: ["Mordida do Tatá", "Pedra", 75, 95],
          lore: "Entre as mandíbulas, pétalas escuras formam o emblema do Tatá. Até as vinhas carnívoras se curvam diante do selo ancestral.",
        },
        {
          base: "saci",
          sig: ["Redemoinho do Tatá", "Flora", 75, 95],
          lore: "O gorro do Redemoin ganhou um bordado em espiral: a marca do Tatá. Seus redemoinhos agora carregam faíscas douradas.",
        },
        {
          base: "zunivolt-3",
          sig: ["Pouso Sombrio", "Sombra", 70, 90],
          lore: "Um raio antigo riscou suas asas no formato do selo do Tatá. Quando voa, as nuvens se abrem em reverência.",
        },
        {
          base: "cristalito-3",
          sig: ["Núcleo Marcado", "Brasa", 75, 90],
          lore: "No peito de diamante, a marca do Tatá pulsa como um coração de luz. Cada faceta reflete uma era da Caldeira.",
        },
        {
          base: "rochodon_20",
          sig: ["Punho da Marca", "Flora", 70, 95],
          lore: "As rachaduras de sua couraça se alinharam na espiral do Tatá. Dizem que ele sonhou com o guardião antes de despertar.",
        },
        {
          base: "cuca",
          sig: ["Olhar Milenar", "Flora", 70, 95],
          lore: "A bruxa milenar reconheceu o selo e o gravou na testa por vontade própria. Nem a Jacaruxa ousa desafiar a marca do Tatá.",
        },
        {
          base: "lobisomem",
          sig: ["Uivo da Marca", "Faísca", 75, 95],
          lore: "Sob a lua cheia, a marca do Tatá arde prateada em seu pelo. A fera se acalma: o selo antigo doma até a fúria lunar.",
        },
      ];
      nJ.forEach(({ base: n, sig: u, lore: r }) => {
        let l = nu[n];
        if (!l) return;
        let [o, f, $, _] = u;
        ko({
          id: `${l.id}-marca`,
          name: `${l.name} da Marca`,
          types: [...l.types],
          stage: l.stage,
          feature: l.feature,
          base: xK(l.base),
          moves: [...l.moves.map((v) => ({ ...v })), I(o, f, $, _)],
          dex: r,
          rare: !0,
          raridade: "raro",
        });
      });
      var K3 = {
        "caverna-flora": "verdente-1",
        "caverna-mare": "gotaviva-1",
        "caverna-bras": "lavarva-1",
        "caverna-faisca": "zunivolt-1",
        "caverna-pedra": "cristalito-1",
        "caverna-sombra": "maripombra-1",
      };
      function _n(n) {
        return nu[n];
      }
      var nl = {
          fusao: {
            id: "fusao",
            nome: "Fusão",
            tipo: "tecnica",
            descricao:
              "Funde-se com um parceiro do time (consome 1 Núcleo de Fusão)",
            chance: 0.12,
            usosPorBatalha: 1,
          },
          "fusao-instintiva": {
            id: "fusao-instintiva",
            nome: "Fusão Instintiva",
            tipo: "tecnica",
            descricao: "Funde-se com um parceiro sem precisar de item",
            chance: 0.025,
            usosPorBatalha: 1,
          },
          escudo: {
            id: "escudo",
            nome: "Escudo",
            tipo: "instinto",
            descricao:
              "Passivo: bloqueia golpes corpo a corpo — 100% com vantagem/empate de tipo, 50% em desvantagem",
            chance: 0.3,
            usosPorBatalha: 1,
          },
          espelho: {
            id: "espelho",
            nome: "Espelho",
            tipo: "instinto",
            descricao:
              "Passivo: reflete golpes corpo a corpo — 50% do dano (25% em desvantagem de tipo)",
            chance: 0.25,
            usosPorBatalha: 2,
          },
          cura: {
            id: "cura",
            nome: "Cura",
            tipo: "tecnica",
            descricao: "Recupera 40% do HP máximo",
            chance: 0.3,
            usosPorBatalha: 1,
          },
          grito: {
            id: "grito",
            nome: "Grito",
            tipo: "tecnica",
            descricao:
              "+50% de ataque por 3 turnos (+25% em desvantagem de tipo)",
            chance: 0.25,
            usosPorBatalha: 1,
          },
        },
        uJ = Object.keys(nl),
        vo = [
          {
            id: "primeiro-vinculo",
            nome: "Primeiro Vínculo",
            descricao: "Vincule seu primeiro Pat",
            meta: 1,
            progressKey: "caughtTotal",
          },
          {
            id: "colecionador-10",
            nome: "Colecionador",
            descricao: "Vincule 10 Pats",
            meta: 10,
            progressKey: "caughtTotal",
          },
          {
            id: "colecionador-25",
            nome: "Mestre dos Vínculos",
            descricao: "Vincule 25 Pats",
            meta: 25,
            progressKey: "caughtTotal",
          },
          {
            id: "coracao-brasa",
            nome: "Coração de Brasa",
            descricao: "Vincule 3 Pats do tipo Brasa",
            meta: 3,
            progressKey: "type:Brasa",
          },
          {
            id: "alma-mare",
            nome: "Alma de Maré",
            descricao: "Vincule 3 Pats do tipo Maré",
            meta: 3,
            progressKey: "type:Maré",
          },
          {
            id: "espirito-flora",
            nome: "Espírito de Flora",
            descricao: "Vincule 3 Pats do tipo Flora",
            meta: 3,
            progressKey: "type:Flora",
          },
          {
            id: "faisca-viva",
            nome: "Faísca Viva",
            descricao: "Vincule 3 Pats do tipo Faísca",
            meta: 3,
            progressKey: "type:Faísca",
          },
          {
            id: "coracao-pedra",
            nome: "Coração de Pedra",
            descricao: "Vincule 3 Pats do tipo Pedra",
            meta: 3,
            progressKey: "type:Pedra",
          },
          {
            id: "filho-sombra",
            nome: "Filho da Sombra",
            descricao: "Vincule 3 Pats do tipo Sombra",
            meta: 3,
            progressKey: "type:Sombra",
          },
          {
            id: "nova-forma",
            nome: "Nova Forma",
            descricao: "Evolua 1 Pat",
            meta: 1,
            progressKey: "evolvedTotal",
          },
          {
            id: "evolucionista",
            nome: "Evolucionista",
            descricao: "Evolua 5 Pats",
            meta: 5,
            progressKey: "evolvedTotal",
          },
          {
            id: "desbravador",
            nome: "Desbravador",
            descricao: "Desbloqueie 4 áreas com habilidades dos Pats",
            meta: 4,
            progressKey: "gatedUnlocks",
          },
          {
            id: "desafiante",
            nome: "Desafiante",
            descricao: "Vença 5 treinadores",
            meta: 5,
            progressKey: "defeated",
          },
          {
            id: "lenda-arena",
            nome: "Lenda da Arena",
            descricao: "Vença 15 treinadores",
            meta: 15,
            progressKey: "defeated",
          },
          {
            id: "pesquisador",
            nome: "Pesquisador",
            descricao: "Registre 20 espécies no VínculoDex",
            meta: 20,
            progressKey: "dexCaught",
          },
          {
            id: "q_fusion_master",
            nome: "Mestre da Fusão",
            descricao: "Crie todos os 15 híbridos",
            meta: 15,
            progressKey: "q_fusion_master",
          },
          {
            id: "q_master_supremo",
            nome: "Mestre Supremo",
            descricao: "Complete todas as 16 missões do jogo base",
            meta: 16,
            progressKey: "questsCompleted",
          },
          {
            id: "exp-chegada",
            nome: "Chegada ao Arquipélago",
            descricao: "Pise no Arquipélago do Tatá",
            meta: 1,
            progressKey: "visitedExpansion",
            reward: { ecos: 500 },
          },
          {
            id: "exp-vila",
            nome: "Passeio pela Vila",
            descricao: "Visite a Vila Lamparina",
            meta: 1,
            progressKey: "vilaLamparina",
            reward: { item: "pocao", qty: 2 },
          },
          {
            id: "exp-feira",
            nome: "Cliente da Feira",
            descricao: "Obtenha 1 pet-marca na Feira das Marcas",
            meta: 1,
            progressKey: "marcas",
            reward: { item: "pocao", qty: 2 },
          },
          {
            id: "exp-marcas6",
            nome: "Colecionador de Marcas",
            descricao: "Obtenha 6 pets-marca",
            meta: 6,
            progressKey: "marcas",
            reward: { item: "doce", qty: 1 },
          },
          {
            id: "exp-marcas12",
            nome: "Mestre das Marcas",
            descricao: "Obtenha os 12 pets-marca",
            meta: 12,
            progressKey: "marcas",
            reward: { ecos: 3000 },
          },
          {
            id: "exp-saci",
            nome: "Redemoinho Travesso",
            descricao: "Vincule um Redemoin na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:saci",
            reward: { ecos: 800 },
          },
          {
            id: "exp-boto",
            nome: "Encanto do Rio",
            descricao: "Vincule um Rosalfin na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:boto",
            reward: { ecos: 800 },
          },
          {
            id: "exp-curupira",
            nome: "Guardião da Mata",
            descricao: "Vincule um Virapé na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:curupira",
            reward: { ecos: 800 },
          },
          {
            id: "exp-iara",
            nome: "Canto das Águas",
            descricao: "Vincule uma Cantamar na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:iara",
            reward: { ecos: 800 },
          },
          {
            id: "exp-boitata",
            nome: "Fogo Protetor",
            descricao: "Vincule uma Ignira na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:boitata",
            reward: { ecos: 800 },
          },
          {
            id: "exp-mula",
            nome: "Corrida Selvagem",
            descricao: "Vincule um Galopim na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:mula",
            reward: { ecos: 800 },
          },
          {
            id: "exp-cuca",
            nome: "Feitiço Milenar",
            descricao: "Vincule a Jacaruxa na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:cuca",
            reward: { ecos: 800 },
          },
          {
            id: "exp-lobisomem",
            nome: "Uivo da Lua Cheia",
            descricao: "Vincule o Lunauro na Caldeira do Tatá",
            meta: 1,
            progressKey: "has:lobisomem",
            reward: { ecos: 800 },
          },
          {
            id: "exp-caldeira",
            nome: "Coração do Vulcão",
            descricao:
              "Alcance o Nv 40 com um Pat (forjado nas batalhas da Caldeira do Tatá)",
            meta: 40,
            progressKey: "folcloreCaptures",
            reward: { item: "doce", qty: 1 },
          },
          {
            id: "exp-lenda",
            nome: "Lenda do Tatá",
            descricao: "Vincule os 8 pets do folclore da Caldeira do Tatá",
            meta: 8,
            progressKey: "folclore",
            reward: { ecos: 2000 },
          },
          {
            id: "exp-brasalma",
            nome: "O Espírito do Vulcão",
            descricao: "Complete a Lenda do Tatá para receber Brasalma",
            meta: 1,
            progressKey: "quest:exp-lenda",
          },
        ],
        rJ = {
          Brasa: ["grito", "fusao-instintiva"],
          Maré: ["fusao", "cura"],
          Flora: ["cura", "escudo"],
          Faísca: ["grito", "fusao"],
          Pedra: ["escudo", "espelho"],
          Sombra: ["fusao-instintiva", "espelho"],
        },
        lJ = { comum: 1, raro: 2, lendario: 3 };
      function J3(n) {
        let u = lJ[n.raridade ?? "comum"] ?? 1,
          r = [];
        for (let l of uJ) {
          if (r.length >= u) break;
          let o = nl[l],
            $ = n.types.some((_) => (rJ[_] ?? []).includes(l))
              ? Math.min(1, o.chance * 2)
              : o.chance;
          if (Math.random() < $) r.push(l);
        }
        return r;
      }
      function zn(n, u) {
        let r = nu[n].base;
        return {
          maxHp: Math.floor(r.hp * (0.9 + u * 0.14)),
          atk: Math.floor(r.atk * (0.8 + u * 0.12)),
          def: Math.floor(r.def * (0.8 + u * 0.12)),
          vel: Math.floor(r.vel * (0.8 + u * 0.12)),
        };
      }
      function Io(n) {
        return 20 + n * 14;
      }
      function _Q(n, u, r) {
        let l = n * (u ? 22 : 12),
          o = n - (r ?? n),
          f = Math.min(2, Math.max(0.25, 1 + o * 0.1));
        return Math.max(1, Math.floor(l * f));
      }
      var oJ = 1;
      function Vl(n, u) {
        let r = zn(n, u);
        return {
          uid: oJ++,
          sp: n,
          level: u,
          xp: 0,
          hp: r.maxHp,
          afinidades: J3(nu[n]),
        };
      }
      function _8(n, u, r, l, o, f, $, _ = !1, v) {
        let Z = 0.85 + Math.random() * 0.15,
          J = P0(l, o, v),
          e = (((n / Math.max(1, u)) * r) / 10) * Z * J;
        if (f) e *= 1.5;
        if ($) e *= 1.25;
        if (_) e *= 1.5;
        return Math.max(1, Math.floor(e));
      }
      function Z8(n) {
        if (n > 1) return "É super efetivo!";
        if (n < 1) return "Não é muito efetivo...";
        return "";
      }
      var lr = {
          "coracao-magma": {
            name: "Coração de Magma",
            affinity: "Brasa",
            emoji: "\uD83D\uDD25",
            desc: "Brasa +20% poder • +15% vínculo com Pats Brasa",
          },
          "gota-abissal": {
            name: "Gota Abissal",
            affinity: "Maré",
            emoji: "\uD83D\uDCA7",
            desc: "Maré +20% poder • +15% vínculo com Pats Maré",
          },
          "semente-ancia": {
            name: "Semente Anciã",
            affinity: "Flora",
            emoji: "\uD83C\uDF31",
            desc: "Flora +20% poder • +15% vínculo com Pats Flora",
          },
          "bobina-volt": {
            name: "Bobina Volt",
            affinity: "Faísca",
            emoji: "⚡",
            desc: "Faísca +20% poder • +15% vínculo com Pats Faísca",
          },
          "nucleo-terrestre": {
            name: "Núcleo Terrestre",
            affinity: "Pedra",
            emoji: "\uD83E\uDEA8",
            desc: "Pedra +20% poder • +15% vínculo com Pats Pedra",
          },
          "fragmento-umbral": {
            name: "Fragmento Umbral",
            affinity: "Sombra",
            emoji: "\uD83C\uDF11",
            desc: "Sombra +20% poder • +15% vínculo com Pats Sombra",
          },
        },
        e3 = Object.keys(lr),
        fJ = {
          pocao: {
            name: "Poção de Vínculo",
            desc: "Restaura 50 de HP de um Pat.",
          },
          essencia: {
            name: "Essência Neutra",
            desc: "Permite vincular QUALQUER Pat, mesmo sem afinidade.",
          },
          chave: {
            name: "Chave Enferrujada",
            desc: "Abre a porta selada da Caverna Ecoante.",
          },
          "chave-sombria": {
            name: "Chave Sombria",
            desc: "Abre o baú selado do Fragmento Umbral no bosque profundo.",
          },
          doce: {
            name: "Doce de Vínculo",
            desc: "Aumenta 1 nível de um Pat na hora.",
          },
          "nucleo-fusao": {
            name: "Núcleo de Fusão",
            desc: "Consumível: permite a Fusão de um Pat com um parceiro do time.",
          },
        },
        ul = {
          ...fJ,
          "carta-nautica": {
            name: "Carta Náutica",
            desc: "Mapa antigo que aponta para o Arquipélago do Tatá, a oeste.",
          },
          ...Object.fromEntries(
            e3.map((n) => [
              n,
              {
                name: lr[n].name,
                desc: `Relíquia: ${lr[n].desc}. Equipe na Mochila!`,
              },
            ]),
          ),
        },
        V3 = {
          pocao: 150,
          essencia: 250,
          doce: 1500,
          chave: 800,
          "chave-sombria": 3000,
          "bobina-volt": 6000,
          "semente-ancia": 6000,
          "coracao-magma": 6000,
          "gota-abissal": 6000,
          "nucleo-terrestre": 6000,
          "fragmento-umbral": 6000,
          "nucleo-fusao": 1200,
        };
      function N8(n) {
        let u = _n(n.sp)?.stage ?? 0;
        return 10 * (u === 2 ? 6 : u === 1 ? 3 : 1) + 2 * n.level;
      }
      var K8 = {
        vila: {
          id: "vila",
          nome: "Mercador da Vila",
          itensAVenda: ["pocao", "essencia"],
          nivelMaxCompra: 5,
        },
        "mercador-faisca": {
          id: "mercador-faisca",
          nome: "Mercador Volt",
          itensAVenda: ["bobina-volt", "doce", "essencia"],
          compraTipos: ["Faísca"],
        },
        "mercador-flora": {
          id: "mercador-flora",
          nome: "Mercadora Hera",
          itensAVenda: ["semente-ancia", "doce", "essencia"],
          compraTipos: ["Flora"],
        },
        "mercador-bras": {
          id: "mercador-bras",
          nome: "Mercador Magma",
          itensAVenda: ["coracao-magma", "doce", "essencia"],
          compraTipos: ["Brasa"],
        },
        "mercador-mare": {
          id: "mercador-mare",
          nome: "Mercadora Pérola",
          itensAVenda: ["gota-abissal", "doce", "essencia"],
          compraTipos: ["Maré"],
        },
        "mercador-pedra": {
          id: "mercador-pedra",
          nome: "Mercador Rocha",
          itensAVenda: ["nucleo-terrestre", "doce", "essencia"],
          compraTipos: ["Pedra"],
        },
        "mercador-sombra": {
          id: "mercador-sombra",
          nome: "Mercador Umbral",
          itensAVenda: ["fragmento-umbral", "doce", "essencia"],
          compraTipos: ["Sombra"],
        },
        "mercador-lago": {
          id: "mercador-lago",
          nome: "Pescador Anselmo",
          itensAVenda: ["chave-sombria", "essencia"],
          compraTipos: [],
        },
        "mercador-bosque": {
          id: "mercador-bosque",
          nome: "Ermitão Verdefolha",
          itensAVenda: ["chave", "doce"],
          compraTipos: [],
        },
        "mercador-ruinas": {
          id: "mercador-ruinas",
          nome: "Arqueóloga Íris",
          itensAVenda: ["pocao", "essencia", "nucleo-fusao"],
          compraTipos: [],
        },
        "mercador-ponte": {
          id: "mercador-ponte",
          nome: "Viajante Sol",
          itensAVenda: ["doce", "essencia", "nucleo-fusao"],
          compraTipos: [],
        },
      };
      function W3(n, u, r) {
        if (r) return "Você não pode vender seu último Pat!";
        if (n.compraTipos && n.compraTipos.length === 0)
          return "Este mercador só vende itens";
        if (n.nivelMaxCompra !== void 0 && u.level > n.nivelMaxCompra)
          return `Só compra até o nv.${n.nivelMaxCompra} — leve aos mercadores das cavernas`;
        if (n.compraTipos && n.compraTipos.length > 0) {
          if (!(_n(u.sp)?.types ?? []).some((o) => n.compraTipos.includes(o)))
            return `Só compra pets do tipo ${n.compraTipos.join(" / ")}`;
        }
        return null;
      }
      var ZQ = {
        planalto: [
          { sp: "embercub", min: 3, max: 6, w: 30 },
          { sp: "leafit", min: 3, max: 6, w: 30 },
          { sp: "voltpup", min: 4, max: 6, w: 22 },
          { sp: "aquaffin", min: 3, max: 5, w: 18 },
        ],
        bosque: [
          { sp: "leafit", min: 6, max: 9, w: 32 },
          { sp: "voltpup", min: 6, max: 9, w: 28 },
          { sp: "embercub", min: 7, max: 9, w: 22 },
          { sp: "floramar", min: 7, max: 10, w: 10 },
          { sp: "umbrae", min: 8, max: 10, w: 8 },
        ],
        lago: [
          { sp: "aquaffin", min: 7, max: 10, w: 36 },
          { sp: "floramar", min: 8, max: 11, w: 18 },
          { sp: "voltpup", min: 7, max: 9, w: 20 },
          { sp: "faebran", min: 9, max: 11, w: 5 },
        ],
        caverna: [
          { sp: "pebblor", min: 9, max: 12, w: 34 },
          { sp: "umbrae", min: 9, max: 12, w: 30 },
          { sp: "voltpup", min: 9, max: 11, w: 18 },
          { sp: "brascal", min: 10, max: 13, w: 10 },
        ],
        profunda: [
          { sp: "brascal", min: 11, max: 14, w: 25 },
          { sp: "pebblor", min: 11, max: 14, w: 25 },
          { sp: "petrombra", min: 13, max: 16, w: 20 },
          { sp: "marepedra", min: 13, max: 16, w: 15 },
          { sp: "umbrae", min: 12, max: 15, w: 15 },
        ],
        sombrio: [
          { sp: "umbrae", min: 12, max: 15, w: 25 },
          { sp: "brasombra", min: 13, max: 16, w: 25 },
          { sp: "petrombra", min: 12, max: 15, w: 20 },
          { sp: "faesombra", min: 14, max: 17, w: 8 },
        ],
        igneo: [
          { sp: "embercub", min: 12, max: 15, w: 25 },
          { sp: "brascal", min: 12, max: 15, w: 25 },
          { sp: "brasombra", min: 13, max: 16, w: 20 },
          { sp: "voltmar", min: 12, max: 15, w: 15 },
        ],
        abismo: [
          { sp: "petrombra", min: 16, max: 19, w: 25 },
          { sp: "brasombra", min: 16, max: 20, w: 25 },
          { sp: "faesombra", min: 17, max: 21, w: 15 },
          { sp: "marepedra", min: 16, max: 19, w: 15 },
          { sp: "faebran", min: 17, max: 20, w: 8 },
        ],
        "caverna-bosque": [
          { sp: "florapedra", min: 15, max: 18, w: 30 },
          { sp: "leafit", min: 15, max: 17, w: 25 },
          { sp: "faebran", min: 16, max: 18, w: 8 },
        ],
        "caverna-lago": [
          { sp: "voltmar", min: 15, max: 18, w: 30 },
          { sp: "marepedra", min: 15, max: 18, w: 25 },
          { sp: "floramar", min: 16, max: 18, w: 15 },
        ],
        "caverna-sombria": [
          { sp: "petrombra", min: 16, max: 19, w: 30 },
          { sp: "brasombra", min: 16, max: 19, w: 25 },
          { sp: "faesombra", min: 17, max: 20, w: 10 },
        ],
        "caverna-ignea": [
          { sp: "brasombra", min: 16, max: 19, w: 30 },
          { sp: "brascal", min: 16, max: 18, w: 25 },
          { sp: "voltpup", min: 15, max: 17, w: 15 },
        ],
        "abismo-real": [
          { sp: "faesombra", min: 18, max: 22, w: 25 },
          { sp: "petrombra", min: 18, max: 21, w: 25 },
          { sp: "brasombra", min: 18, max: 21, w: 25 },
          { sp: "faebran", min: 19, max: 22, w: 10 },
        ],
        clareira: [
          { sp: "leafit", min: 10, max: 13, w: 30 },
          { sp: "embercub", min: 10, max: 13, w: 25 },
          { sp: "florapedra", min: 11, max: 14, w: 12 },
          { sp: "faebran", min: 12, max: 14, w: 8 },
        ],
        "caverna-flora": [
          { sp: "leafit", min: 14, max: 17, w: 30 },
          { sp: "floramar", min: 14, max: 17, w: 25 },
          { sp: "florapedra", min: 15, max: 18, w: 12 },
        ],
        "caverna-mare": [
          { sp: "aquaffin", min: 14, max: 17, w: 30 },
          { sp: "voltmar", min: 14, max: 17, w: 25 },
          { sp: "marepedra", min: 15, max: 18, w: 12 },
        ],
        "caverna-bras": [
          { sp: "embercub", min: 14, max: 17, w: 30 },
          { sp: "brascal", min: 15, max: 18, w: 25 },
        ],
        "caverna-faisca": [
          { sp: "voltpup", min: 14, max: 17, w: 30 },
          { sp: "voltmar", min: 15, max: 18, w: 20 },
        ],
        "caverna-pedra": [
          { sp: "pebblor", min: 14, max: 17, w: 30 },
          { sp: "marepedra", min: 15, max: 18, w: 15 },
          { sp: "florapedra", min: 15, max: 18, w: 12 },
        ],
        "caverna-sombra": [
          { sp: "umbrae", min: 14, max: 17, w: 30 },
          { sp: "petrombra", min: 15, max: 18, w: 20 },
        ],
        "caldeira-tata": [
          { sp: "saci", min: 28, max: 32, w: 20 },
          { sp: "boto", min: 28, max: 32, w: 20 },
          { sp: "curupira", min: 30, max: 34, w: 15 },
          { sp: "iara", min: 30, max: 35, w: 15 },
          { sp: "boitata", min: 33, max: 38, w: 10 },
          { sp: "mula", min: 33, max: 38, w: 10 },
          { sp: "cuca", min: 36, max: 40, w: 6 },
          { sp: "lobisomem", min: 38, max: 42, w: 4 },
        ],
        vila: [],
      };
      function NQ(n) {
        let u = ZQ[n];
        if (!u) return null;
        let r = u.reduce((f, $) => f + $.w, 0),
          l = Math.random() * r;
        for (let f of u)
          if (((l -= f.w), l <= 0))
            return {
              sp: f.sp,
              level: f.min + Math.floor(Math.random() * (f.max - f.min + 1)),
            };
        let o = u[0];
        return { sp: o.sp, level: o.min };
      }
      var KQ = {
          0: "grama",
          14: "areia",
          18: "brejo",
          19: "rocha",
          20: "cinza",
          21: "musgo",
        },
        JQ = {
          "caverna-flora": "grama",
          "caverna-mare": "brejo",
          "caverna-bras": "cinza",
          "caverna-faisca": "rocha",
          "caverna-pedra": "areia",
          "caverna-sombra": "musgo",
        },
        $J = {
          "caverna-flora|grama": [
            { sp: "leafit", min: 14, max: 17, w: 60 },
            { sp: "florapedra", min: 15, max: 18, w: 20 },
            { sp: "floramar", min: 14, max: 17, w: 20 },
          ],
          "caverna-flora|musgo": [
            { sp: "florapedra", min: 15, max: 18, w: 35 },
            { sp: "leafit", min: 14, max: 17, w: 25 },
            { sp: "umbrae", min: 15, max: 18, w: 20 },
            { sp: "floramar", min: 14, max: 17, w: 20 },
          ],
          "caverna-flora|brejo": [
            { sp: "aquaffin", min: 14, max: 17, w: 35 },
            { sp: "floramar", min: 14, max: 17, w: 25 },
            { sp: "leafit", min: 14, max: 17, w: 25 },
            { sp: "voltmar", min: 15, max: 18, w: 15 },
          ],
          "caverna-mare|brejo": [
            { sp: "aquaffin", min: 14, max: 17, w: 35 },
            { sp: "voltmar", min: 15, max: 18, w: 25 },
            { sp: "marepedra", min: 15, max: 18, w: 20 },
            { sp: "floramar", min: 14, max: 17, w: 20 },
          ],
          "caverna-mare|areia": [
            { sp: "pebblor", min: 14, max: 17, w: 35 },
            { sp: "marepedra", min: 15, max: 18, w: 25 },
            { sp: "aquaffin", min: 14, max: 17, w: 25 },
            { sp: "brascal", min: 15, max: 18, w: 15 },
          ],
          "caverna-mare|grama": [
            { sp: "leafit", min: 14, max: 17, w: 35 },
            { sp: "floramar", min: 14, max: 17, w: 25 },
            { sp: "aquaffin", min: 14, max: 17, w: 25 },
            { sp: "voltmar", min: 15, max: 18, w: 15 },
          ],
          "caverna-bras|cinza": [
            { sp: "embercub", min: 14, max: 17, w: 35 },
            { sp: "brascal", min: 15, max: 18, w: 25 },
            { sp: "brasombra", min: 15, max: 18, w: 20 },
            { sp: "pebblor", min: 14, max: 17, w: 20 },
          ],
          "caverna-bras|rocha": [
            { sp: "pebblor", min: 14, max: 17, w: 30 },
            { sp: "brascal", min: 15, max: 18, w: 30 },
            { sp: "embercub", min: 14, max: 17, w: 25 },
            { sp: "voltpup", min: 15, max: 18, w: 15 },
          ],
          "caverna-bras|areia": [
            { sp: "pebblor", min: 14, max: 17, w: 35 },
            { sp: "brascal", min: 15, max: 18, w: 25 },
            { sp: "embercub", min: 14, max: 17, w: 25 },
            { sp: "marepedra", min: 15, max: 18, w: 15 },
          ],
          "caverna-faisca|rocha": [
            { sp: "pebblor", min: 14, max: 17, w: 30 },
            { sp: "voltpup", min: 14, max: 17, w: 30 },
            { sp: "voltmar", min: 15, max: 18, w: 20 },
            { sp: "faesombra", min: 16, max: 18, w: 20 },
          ],
          "caverna-faisca|areia": [
            { sp: "pebblor", min: 14, max: 17, w: 35 },
            { sp: "marepedra", min: 15, max: 18, w: 25 },
            { sp: "voltpup", min: 14, max: 17, w: 25 },
            { sp: "brascal", min: 15, max: 18, w: 15 },
          ],
          "caverna-faisca|grama": [
            { sp: "leafit", min: 14, max: 17, w: 35 },
            { sp: "voltpup", min: 14, max: 17, w: 25 },
            { sp: "florapedra", min: 15, max: 18, w: 20 },
            { sp: "faebran", min: 15, max: 17, w: 20 },
          ],
          "caverna-pedra|areia": [
            { sp: "pebblor", min: 14, max: 17, w: 35 },
            { sp: "marepedra", min: 15, max: 18, w: 25 },
            { sp: "brascal", min: 15, max: 18, w: 20 },
            { sp: "florapedra", min: 15, max: 18, w: 20 },
          ],
          "caverna-pedra|rocha": [
            { sp: "pebblor", min: 14, max: 17, w: 30 },
            { sp: "petrombra", min: 15, max: 18, w: 25 },
            { sp: "brascal", min: 15, max: 18, w: 25 },
            { sp: "voltpup", min: 14, max: 17, w: 20 },
          ],
          "caverna-pedra|grama": [
            { sp: "leafit", min: 14, max: 17, w: 35 },
            { sp: "florapedra", min: 15, max: 18, w: 25 },
            { sp: "pebblor", min: 14, max: 17, w: 25 },
            { sp: "floramar", min: 14, max: 17, w: 15 },
          ],
          "caverna-sombra|musgo": [
            { sp: "umbrae", min: 14, max: 17, w: 30 },
            { sp: "petrombra", min: 15, max: 18, w: 25 },
            { sp: "leafit", min: 14, max: 17, w: 25 },
            { sp: "brasombra", min: 15, max: 18, w: 20 },
          ],
          "caverna-sombra|brejo": [
            { sp: "aquaffin", min: 14, max: 17, w: 30 },
            { sp: "umbrae", min: 14, max: 17, w: 30 },
            { sp: "voltmar", min: 15, max: 18, w: 20 },
            { sp: "petrombra", min: 15, max: 18, w: 20 },
          ],
          "caverna-sombra|rocha": [
            { sp: "pebblor", min: 14, max: 17, w: 30 },
            { sp: "petrombra", min: 15, max: 18, w: 30 },
            { sp: "umbrae", min: 14, max: 17, w: 25 },
            { sp: "voltpup", min: 14, max: 17, w: 15 },
          ],
        };
      function eQ(n, u) {
        let r = $J[`${n}|${u}`] ?? ZQ[n];
        if (!r) return null;
        let l = r.reduce(($, _) => $ + _.w, 0),
          o = Math.random() * l;
        for (let $ of r)
          if (((o -= $.w), o <= 0))
            return {
              sp: $.sp,
              level: $.min + Math.floor(Math.random() * ($.max - $.min + 1)),
            };
        let f = r[0];
        return { sp: f.sp, level: f.min };
      }
      var J8 = {
        Brasa: "embercub",
        Maré: "aquaffin",
        Flora: "leafit",
        Faísca: "voltpup",
        Pedra: "pebblor",
        Sombra: "umbrae",
      };
      function z3(n) {
        let u = 2166136261;
        for (let r = 0; r < n.length; r++)
          ((u ^= n.charCodeAt(r)), (u = Math.imul(u, 16777619)));
        return (u >>> 0) / 4294967295;
      }
      function m(n, u) {
        let r = parseInt(n.slice(1), 16),
          l = Math.min(255, Math.max(0, (r >> 16) + u)),
          o = Math.min(255, Math.max(0, ((r >> 8) & 255) + u)),
          f = Math.min(255, Math.max(0, (r & 255) + u));
        return `#${((l << 16) | (o << 8) | f).toString(16).padStart(6, "0")}`;
      }