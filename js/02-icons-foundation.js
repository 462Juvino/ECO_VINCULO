/*
 * Eco Vínculo — Ícones, afinidades e fundamentos
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 9492-10746.
 */
"use strict";

      var fu = Du(Pu(), 1);
      var v8 = Du(Pu(), 1);
      var rQ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        $8 = (...n) =>
          n
            .filter((u, r, l) => {
              return Boolean(u) && u.trim() !== "" && l.indexOf(u) === r;
            })
            .join(" ")
            .trim();
      var j1 = Du(Pu(), 1);
      var lQ = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      var oQ = j1.forwardRef(
        (
          {
            color: n = "currentColor",
            size: u = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: l,
            className: o = "",
            children: f,
            iconNode: $,
            ..._
          },
          v,
        ) => {
          return j1.createElement(
            "svg",
            {
              ref: v,
              ...lQ,
              width: u,
              height: u,
              stroke: n,
              strokeWidth: l ? (Number(r) * 24) / Number(u) : r,
              className: $8("lucide", o),
              ..._,
            },
            [
              ...$.map(([Z, J]) => j1.createElement(Z, J)),
              ...(Array.isArray(f) ? f : [f]),
            ],
          );
        },
      );
      var Jn = (n, u) => {
        let r = v8.forwardRef(({ className: l, ...o }, f) =>
          v8.createElement(oQ, {
            ref: f,
            iconNode: u,
            className: $8(`lucide-${rQ(n)}`, l),
            ...o,
          }),
        );
        return ((r.displayName = `${n}`), r);
      };
      var A0 = Jn("ArrowLeft", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
      var y1 = Jn("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
      var zo = Jn("Backpack", [
        [
          "path",
          {
            d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
            key: "1ol0lm",
          },
        ],
        ["path", { d: "M8 10h8", key: "c7uz4u" }],
        ["path", { d: "M8 18h8", key: "1no2b1" }],
        [
          "path",
          { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6", key: "1fr6do" },
        ],
        [
          "path",
          { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" },
        ],
      ]);
      var h1 = Jn("BookOpen", [
        ["path", { d: "M12 7v14", key: "1akyts" }],
        [
          "path",
          {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y",
          },
        ],
      ]);
      var d1 = Jn("Candy", [
        [
          "path",
          {
            d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",
            key: "ue6khb",
          },
        ],
        ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
        ["path", { d: "M10 7.5v10", key: "1uew51" }],
        [
          "path",
          {
            d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",
            key: "b9cp6k",
          },
        ],
        [
          "path",
          {
            d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",
            key: "5lney8",
          },
        ],
      ]);
      var b1 = Jn("CircleDot", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
      ]);
      var p1 = Jn("Eye", [
        [
          "path",
          {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]);
      var a1 = Jn("Filter", [
        [
          "polygon",
          {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f",
          },
        ],
      ]);
      var io = Jn("Flag", [
        [
          "path",
          {
            d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
            key: "i9b6wo",
          },
        ],
        ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
      ]);
      var s1 = Jn("FlaskConical", [
        [
          "path",
          {
            d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
            key: "18mbvz",
          },
        ],
        ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
        ["path", { d: "M8.5 2h7", key: "csnxdl" }],
      ]);
      var el = Jn("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
      var Fl = Jn("Heart", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
      ]);
      var Go = Jn("LogOut", [
        [
          "path",
          { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
        ],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ]);
      var R1 = Jn("Map", [
        [
          "path",
          {
            d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
            key: "169xi5",
          },
        ],
        ["path", { d: "M15 5.764v15", key: "1pn4in" }],
        ["path", { d: "M9 3.236v15", key: "1uimfh" }],
      ]);
      var F0 = Jn("MessageCircle", [
        ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
      ]);
      var t1 = Jn("Pause", [
        [
          "rect",
          { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
        ],
        [
          "rect",
          { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
        ],
      ]);
      var c1 = Jn("PencilLine", [
        ["path", { d: "M12 20h9", key: "t2du7b" }],
        [
          "path",
          {
            d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
            key: "1ykcvy",
          },
        ],
        ["path", { d: "m15 5 3 3", key: "1w25hb" }],
      ]);
      var oo = Jn("Play", [
        ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
      ]);
      var x1 = Jn("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
      var To = Jn("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
      var nf = Jn("Send", [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ]);
      var fo = Jn("Settings2", [
        ["path", { d: "M20 7h-9", key: "3s1dr2" }],
        ["path", { d: "M14 17H5", key: "gfn3mx" }],
        ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
        ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
      ]);
      var Nr = Jn("Sparkles", [
        [
          "path",
          {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx",
          },
        ],
        ["path", { d: "M20 3v4", key: "1olli1" }],
        ["path", { d: "M22 5h-4", key: "1gvqau" }],
        ["path", { d: "M4 17v2", key: "vumght" }],
        ["path", { d: "M5 18H3", key: "zchphs" }],
      ]);
      var uf = Jn("Store", [
        [
          "path",
          {
            d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
            key: "ztvudi",
          },
        ],
        [
          "path",
          { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" },
        ],
        [
          "path",
          { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" },
        ],
        ["path", { d: "M2 7h20", key: "1fcdvo" }],
        [
          "path",
          {
            d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
            key: "6c3vgh",
          },
        ],
      ]);
      var Ir = Jn("Swords", [
        [
          "polyline",
          { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" },
        ],
        ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
        ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
        ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
        [
          "polyline",
          { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" },
        ],
        ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
        ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
        ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }],
      ]);
      var rf = Jn("Target", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ]);
      var lf = Jn("Trash2", [
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
        ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
      ]);
      var Pr = Jn("Users", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
      ]);
      var $o = Jn("WandSparkles", [
        [
          "path",
          {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6",
          },
        ],
        ["path", { d: "m14 7 3 3", key: "1r5n42" }],
        ["path", { d: "M5 6v4", key: "ilb8ba" }],
        ["path", { d: "M19 14v4", key: "blhpug" }],
        ["path", { d: "M10 2v2", key: "7u0qdc" }],
        ["path", { d: "M7 8H3", key: "zfb6yr" }],
        ["path", { d: "M21 16h-4", key: "1cnmox" }],
        ["path", { d: "M11 3H9", key: "1obp7u" }],
      ]);
      var Mu = Jn("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
      var of = Jn("Zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]);
      var $n = Du(Pu(), 1);
      var qr = ["Brasa", "Maré", "Flora", "Faísca", "Pedra", "Sombra"],
        On = {
          Brasa: {
            color: "#f97316",
            dark: "#9a3412",
            light: "#fed7aa",
            desc: "+25% poder em golpes de Brasa",
            hab: "",
          },
          Maré: {
            color: "#38bdf8",
            dark: "#075985",
            light: "#bae6fd",
            desc: "+25% poder em golpes de Maré",
            hab: "Nado Maré: atravesse águas com um Pat Maré no time.",
          },
          Flora: {
            color: "#4ade80",
            dark: "#166534",
            light: "#bbf7d0",
            desc: "+25% poder em golpes de Flora",
            hab: "Corte Flora: corte arbustos espinhosos com um Pat Flora no time.",
          },
          Faísca: {
            color: "#facc15",
            dark: "#a16207",
            light: "#fef08a",
            desc: "+25% poder em golpes de Faísca",
            hab: "Dash Faísca: atravesse fendas com um Pat Faísca no time.",
          },
          Pedra: {
            color: "#b08968",
            dark: "#5c4a32",
            light: "#e7d8c3",
            desc: "+25% poder em golpes de Pedra",
            hab: "Força Pedra: empurre pedras com um Pat Pedra no time.",
          },
          Sombra: {
            color: "#8b5cf6",
            dark: "#4c1d95",
            light: "#ddd6fe",
            desc: "+25% poder em golpes de Sombra",
            hab: "",
          },
        },
        _3 = {
          Brasa: { Flora: 2, Maré: 0.5, Pedra: 0.5, Brasa: 0.5 },
          Maré: { Brasa: 2, Pedra: 2, Maré: 0.5, Flora: 0.5 },
          Flora: { Maré: 2, Pedra: 2, Flora: 0.5, Brasa: 0.5 },
          Faísca: { Maré: 2, Flora: 0.5, Pedra: 0.5, Faísca: 0.5 },
          Pedra: { Brasa: 2, Faísca: 2, Flora: 0.5 },
          Sombra: {},
        };
      function fQ(n, u) {
        if (n === "Sombra") return u === "Sombra" ? 0.7 : 1.3;
        return _3[n][u] ?? 1;
      }
      function P0(n, u, r) {
        let l = (o) => u.reduce((f, $) => f * fQ(o, $), 1);
        if (r?.attHybrid && r.attHybrid.length > 1)
          return Math.max(...r.attHybrid.map(l));
        if (r?.defHybrid && u.length > 1)
          return Math.min(...u.map((o) => fQ(n, o)));
        return l(n);
      }
      function Z3(n, u) {
        let r = nu[n.sp],
          l = nu[u.sp],
          o = zn(n.sp, n.level),
          f = zn(u.sp, u.level),
          $ = r?.types?.[0],
          _ = l?.types?.[0],
          v = [$, _].filter((Q) => !!Q),
          Z = $ && _ ? bK($, _) : void 0,
          J = (Q, M) => Math.round(Q * 1.1 * (1 + M)),
          e = Z
            ? {
                maxHp: J(o.maxHp + f.maxHp, Z.hpMod),
                atk: J(o.atk + f.atk, Z.atkMod),
                def: J(o.def + f.def, Z.defMod),
                vel: J(o.vel + f.vel, Z.velMod),
              }
            : {
                maxHp: Math.round((o.maxHp + f.maxHp) * 1.1),
                atk: Math.round((o.atk + f.atk) * 1.1),
                def: Math.round((o.def + f.def) * 1.1),
                vel: Math.round((o.vel + f.vel) * 1.1),
              };
        return {
          name: Z?.name ?? `${r?.name ?? n.sp}＋${l?.name ?? u.sp}`,
          sprite: Z?.sprite ?? r?.feature ?? "round",
          stats: e,
          level: Math.round((n.level + u.level) / 2),
          types: v,
          afinidades: [],
          hybridId: Z?.id,
        };
      }
      var Y0 = {
        "Brasa+Faísca": {
          id: "hyb-brasa-faisca",
          name: "Voltarca",
          types: ["Brasa", "Faísca"],
          desc: "Arco voltaico envolto em chamas; cada passo crepita antes do bote.",
          sprite: "spikes",
          hpMod: 0,
          atkMod: 0.1,
          defMod: 0,
          velMod: 0.1,
        },
        "Brasa+Flora": {
          id: "hyb-brasa-flora",
          name: "Florígnea",
          types: ["Brasa", "Flora"],
          desc: "Flor que desabrocha em chamas vivas sem jamais se queimar.",
          sprite: "leaf",
          hpMod: 0.08,
          atkMod: 0.08,
          defMod: 0.04,
          velMod: 0,
        },
        "Brasa+Maré": {
          id: "hyb-brasa-mare",
          name: "Vaporion",
          types: ["Brasa", "Maré"],
          desc: "Corpo de vapor fervente que atravessa qualquer armadura.",
          sprite: "fins",
          hpMod: 0.06,
          atkMod: 0.06,
          defMod: 0.04,
          velMod: 0.04,
        },
        "Brasa+Pedra": {
          id: "hyb-brasa-pedra",
          name: "Magmarok",
          types: ["Brasa", "Pedra"],
          desc: "Colosso de magma solidificado; o chão treme a cada passo.",
          sprite: "horns",
          hpMod: 0.08,
          atkMod: 0.06,
          defMod: 0.08,
          velMod: -0.02,
        },
        "Brasa+Sombra": {
          id: "hyb-brasa-sombra",
          name: "Umbrachama",
          types: ["Brasa", "Sombra"],
          desc: "Chama negra que queima sem luz e sem som.",
          sprite: "flame",
          hpMod: 0.04,
          atkMod: 0.12,
          defMod: -0.02,
          velMod: 0.06,
        },
        "Faísca+Flora": {
          id: "hyb-faisca-flora",
          name: "Florivolt",
          types: ["Faísca", "Flora"],
          desc: "Pólen eletrificado que dança no ar antes de cada descarga.",
          sprite: "leaf",
          hpMod: 0.04,
          atkMod: 0.06,
          defMod: 0,
          velMod: 0.1,
        },
        "Faísca+Maré": {
          id: "hyb-faisca-mare",
          name: "Trovamar",
          types: ["Faísca", "Maré"],
          desc: "Tempestade viva que surfa relâmpagos sobre as ondas.",
          sprite: "fins",
          hpMod: 0.04,
          atkMod: 0.08,
          defMod: 0,
          velMod: 0.08,
        },
        "Faísca+Pedra": {
          id: "hyb-faisca-pedra",
          name: "Quartzvolt",
          types: ["Faísca", "Pedra"],
          desc: "Cristal condutor que armazena trovões em seu núcleo.",
          sprite: "spikes",
          hpMod: 0.02,
          atkMod: 0.06,
          defMod: 0.08,
          velMod: 0.04,
        },
        "Faísca+Sombra": {
          id: "hyb-faisca-sombra",
          name: "Voltembra",
          types: ["Faísca", "Sombra"],
          desc: "Clarão negro que risca a escuridão um instante antes do trovão.",
          sprite: "pointy",
          hpMod: 0,
          atkMod: 0.08,
          defMod: 0,
          velMod: 0.12,
        },
        "Flora+Maré": {
          id: "hyb-flora-mare",
          name: "Mareflor",
          types: ["Flora", "Maré"],
          desc: "Ninfa aquática que floresce onde o lago beija o bosque.",
          sprite: "fins",
          hpMod: 0.1,
          atkMod: 0,
          defMod: 0.06,
          velMod: 0.04,
        },
        "Flora+Pedra": {
          id: "hyb-flora-pedra",
          name: "Verdeterra",
          types: ["Flora", "Pedra"],
          desc: "Jardim ancestral sobre rocha viva; raízes mais duras que aço.",
          sprite: "horns",
          hpMod: 0.08,
          atkMod: 0.02,
          defMod: 0.1,
          velMod: 0,
        },
        "Flora+Sombra": {
          id: "hyb-flora-sombra",
          name: "Noctiflora",
          types: ["Flora", "Sombra"],
          desc: "Flor carnívora que só abre suas pétalas na escuridão total.",
          sprite: "wings",
          hpMod: 0.04,
          atkMod: 0.08,
          defMod: 0,
          velMod: 0.08,
        },
        "Maré+Pedra": {
          id: "hyb-mare-pedra",
          name: "Ondarrocha",
          types: ["Maré", "Pedra"],
          desc: "Recife ambulante; as ondas quebram em sua carapaça.",
          sprite: "round",
          hpMod: 0.08,
          atkMod: 0.04,
          defMod: 0.08,
          velMod: 0,
        },
        "Maré+Sombra": {
          id: "hyb-mare-sombra",
          name: "Umbramar",
          types: ["Maré", "Sombra"],
          desc: "Maré negra das profundezas que engole a própria luz.",
          sprite: "fins",
          hpMod: 0.04,
          atkMod: 0.06,
          defMod: 0.04,
          velMod: 0.06,
        },
        "Pedra+Sombra": {
          id: "hyb-pedra-sombra",
          name: "Pedrumbra",
          types: ["Pedra", "Sombra"],
          desc: "Monólito sombrio que se move sem fazer som.",
          sprite: "spikes",
          hpMod: 0.06,
          atkMod: 0.04,
          defMod: 0.1,
          velMod: 0,
        },
      };
      function bK(n, u) {
        let r = [n, u].sort((l, o) => l.localeCompare(o, "pt-BR")).join("+");
        return Y0[r];
      }
      var pK = /(mordida|garra|chicote|investida|soco|cauda|golpe rocha)/i;
      function N3(n) {
        return pK.test(n.name);
      }
      var Q8 = {
          "Folha Navalha": { kind: "spinning-leaf" },
          "Semente Dreno": { kind: "multi-seed", count: 5 },
          Choquinho: { kind: "spark-crackle" },
          "Raio Veloz": { kind: "speed-bolt" },
          Mordida: { kind: "bite" },
          "Vento Cortante": { kind: "wind-blades" },
          "Chicote Vinha": { kind: "vine-whip" },
          Investida: { kind: "charge" },
          Brasinha: { kind: "ember-spark" },
          Labareda: { kind: "flame-burst" },
          "Explosão Ígnea": { kind: "fire-mushroom" },
          "Mordida Sombria": { kind: "shadow-bite" },
          "Golpe Rocha": { kind: "rock-slam" },
          "Jato d’Água": { kind: "water-jet" },
          "Cauda Maré": { kind: "tail-slam" },
          "Raio Bolha": { kind: "bubble-beam" },
          Tsunami: { kind: "tsunami" },
          Pedrada: { kind: "stone-arc" },
          Avalanche: { kind: "avalanche" },
          Terremoto: { kind: "quake" },
          "Fúria Tectônica": { kind: "tectonic-fury" },
          "Garra Sombria": { kind: "shadow-claw" },
          "Abismo Final": { kind: "abyss" },
          Erupção: { kind: "eruption" },
          "Soco Magma": { kind: "magma-punch" },
          "Véu Noturno": { kind: "night-veil" },
          "Sopro Frio": { kind: "cold-breath" },
          "Redemoinho Floral": { kind: "floral-vortex" },
          "Névoa Doce": { kind: "sweet-mist" },
          "Pó Luminescente": { kind: "glow-dust" },
          "Raio Prismático": { kind: "prism-beam" },
          "Dança das Fadas": { kind: "fairy-dance" },
          Clarão: { kind: "flash" },
          "Tempestade Pétala": { kind: "petal-storm" },
          "Julgamento Volt": { kind: "volt-judgment" },
          "Rajada Infernal": { kind: "pyrothion-inferno" },
          "Garra Ígnea": { kind: "pyrothion-claws" },
        },
        I = (n, u, r, l) => ({
          name: n,
          type: u,
          power: r,
          acc: l,
          ...(Q8[n] ? { anim: Q8[n] } : {}),
        }),
        QQ = [
          {
            id: "embercub",
            name: "Embercub",
            types: ["Brasa"],
            stage: 0,
            feature: "flame",
            silhouette: "embercub",
            base: { hp: 45, atk: 56, def: 40, vel: 52 },
            moves: [
              I("Brasinha", "Brasa", 40, 100),
              I("Mordida Brasante", "Sombra", 50, 100),
              I("Cinza Ardente", "Brasa", 55, 95),
              I("Labareda", "Brasa", 65, 90),
            ],
            dex: "Um filhote de fogo que ronrona brasas. Adora treinadores de afinidade Brasa.",
            evo: [
              {
                affinity: "Brasa",
                name: "Pyrothion",
                types: ["Brasa", "Pedra"],
                focus: "atk",
                feature: "horns",
                dex: "Sua fúria vulcânica derrete até rocha. Moldado pela afinidade Brasa.",
              },
              {
                affinity: "Sombra",
                name: "Umbrak",
                types: ["Brasa", "Sombra"],
                focus: "vel",
                feature: "spikes",
                dex: "Chamas negras e silêncio veloz. Moldado pela afinidade Sombra.",
              },
            ],
          },
          {
            id: "aquaffin",
            name: "Aquaffin",
            types: ["Maré"],
            stage: 0,
            feature: "fins",
            silhouette: "aquaffin",
            base: { hp: 52, atk: 48, def: 52, vel: 46 },
            moves: [
              I("Jato Cristalino", "Maré", 42, 100),
              I("Cauda de Onda", "Maré", 58, 95),
              I("Bolha Ecoante", "Maré", 46, 100),
              I("Mergulho Ágil", "Maré", 52, 95),
            ],
            dex: "Nada em círculos alegres e espirra água quando está feliz.",
            evo: [
              {
                affinity: "Maré",
                name: "Tidalfin",
                types: ["Maré"],
                focus: "def",
                feature: "fins",
                dex: "Seu corpo virou uma muralha de água viva. Moldado pela afinidade Maré.",
              },
              {
                affinity: "Flora",
                name: "Algaffin",
                types: ["Maré", "Flora"],
                focus: "hp",
                feature: "leaf",
                dex: "Algas floridas cobrem seu dorso em simbiose. Moldado pela afinidade Flora.",
              },
            ],
          },
          {
            id: "leafit",
            name: "Leafit",
            types: ["Flora"],
            stage: 0,
            feature: "leaf",
            silhouette: "leafit",
            base: { hp: 56, atk: 46, def: 56, vel: 42 },
            moves: [
              I("Folha Navalha", "Flora", 45, 100),
              I("Chicote Vinha", "Flora", 60, 92),
              I("Semente Dreno", "Flora", 40, 100),
              I("Brotar Rápido", "Flora", 50, 100),
            ],
            dex: "A folhinha na cabeça floresce quando ele confia no treinador.",
            evo: [
              {
                affinity: "Flora",
                name: "Florajag",
                types: ["Flora"],
                focus: "def",
                feature: "leaf",
                dex: "Uma onça de folhagem, guardiã do bosque. Moldado pela afinidade Flora.",
              },
              {
                affinity: "Maré",
                name: "Lotussauro",
                types: ["Flora", "Maré"],
                focus: "hp",
                feature: "fins",
                dex: "Flutua sereno como uma vitória-régia gigante. Moldado pela afinidade Maré.",
              },
            ],
          },
          {
            id: "voltpup",
            name: "Voltpup",
            types: ["Faísca"],
            stage: 0,
            feature: "pointy",
            silhouette: "voltpup",
            base: { hp: 44, atk: 54, def: 38, vel: 66 },
            moves: [
              I("Choquinho", "Faísca", 40, 100),
              I("Mordida Estática", "Sombra", 52, 100),
              I("Raio Veloz", "Faísca", 62, 90),
              I("Vento Faísca", "Flora", 46, 95),
            ],
            dex: "Solta faíscas pelo pelo quando está animado. Muito rápido!",
            evo: [
              {
                affinity: "Faísca",
                name: "Volthund",
                types: ["Faísca"],
                focus: "vel",
                feature: "spikes",
                dex: "Corre mais rápido que o trovão. Moldado pela afinidade Faísca.",
              },
              {
                affinity: "Pedra",
                name: "Terrivolt",
                types: ["Faísca", "Pedra"],
                focus: "def",
                feature: "horns",
                dex: "Armadura de quartzo que conduz relâmpagos. Moldado pela afinidade Pedra.",
              },
            ],
          },
          {
            id: "pebblor",
            name: "Pebblor",
            types: ["Pedra"],
            stage: 0,
            feature: "round",
            silhouette: "pebblor",
            base: { hp: 62, atk: 56, def: 66, vel: 30 },
            moves: [
              I("Pedrada", "Pedra", 45, 100),
              I("Casca Dura", "Pedra", 40, 100),
              I("Avalanche", "Pedra", 65, 88),
              I("Soco Magma", "Brasa", 55, 92),
            ],
            dex: "Uma pedrinha teimosa. Dorme por dias, acorda faminta.",
            evo: [
              {
                affinity: "Pedra",
                name: "Rochodon",
                types: ["Pedra"],
                focus: "def",
                feature: "horns",
                dex: "Uma montanha que anda. Quase impossível de derrubar. Moldado pela afinidade Pedra.",
              },
              {
                affinity: "Brasa",
                name: "Magmarmor",
                types: ["Pedra", "Brasa"],
                focus: "atk",
                feature: "flame",
                dex: "Magma corre em suas veias de pedra. Moldado pela afinidade Brasa.",
              },
            ],
          },
          {
            id: "umbrae",
            name: "Umbrae",
            types: ["Sombra"],
            stage: 0,
            feature: "pointy",
            silhouette: "umbrae",
            base: { hp: 48, atk: 58, def: 44, vel: 60 },
            moves: [
              I("Garra Sombria", "Sombra", 45, 100),
              I("Olhar Penetrante", "Sombra", 50, 100),
              I("Véu Noturno", "Sombra", 62, 90),
              I("Sopro Frio", "Maré", 45, 95),
            ],
            dex: "Aparece em sonhos bons. Teme a solidão mais que a luz.",
            evo: [
              {
                affinity: "Sombra",
                name: "Noctivern",
                types: ["Sombra"],
                focus: "atk",
                feature: "wings",
                dex: "Senhor da noite, veloz e silencioso. Moldado pela afinidade Sombra.",
              },
              {
                affinity: "Faísca",
                name: "Galvombra",
                types: ["Sombra", "Faísca"],
                focus: "vel",
                feature: "spikes",
                dex: "Relâmpagos negros riscam seu corpo. Moldado pela afinidade Faísca.",
              },
            ],
          },
          {
            id: "floramar",
            name: "Floramar",
            types: ["Flora", "Maré"],
            stage: 0,
            feature: "fins",
            silhouette: "floramar",
            rare: !0,
            base: { hp: 58, atk: 52, def: 56, vel: 48 },
            moves: [
              I("Maré de Pétalas", "Flora", 48, 100),
              I("Jato Florido", "Maré", 45, 100),
              I("Névoa Doce", "Maré", 50, 100),
              I("Redemoinho Floral", "Flora", 62, 92),
            ],
            dex: "Raro! Vive onde o bosque beija o lago. Perfuma a água por onde passa.",
            evo: [
              {
                affinity: "Flora",
                name: "Sereflor",
                types: ["Flora", "Maré"],
                focus: "atk",
                feature: "leaf",
                dex: "Seu canto faz florescerem nenúfares gigantes. Moldado pela afinidade Flora.",
              },
              {
                affinity: "Maré",
                name: "Abissalga",
                types: ["Maré", "Flora"],
                focus: "hp",
                feature: "fins",
                dex: "Guardiã das profundezas floridas do lago. Moldado pela afinidade Maré.",
              },
            ],
          },
          {
            id: "brascal",
            name: "Brascal",
            types: ["Brasa", "Pedra"],
            stage: 0,
            feature: "horns",
            silhouette: "brascal",
            rare: !0,
            base: { hp: 62, atk: 62, def: 60, vel: 36 },
            moves: [
              I("Brasa Obsidiana", "Brasa", 48, 100),
              I("Pedra em Brasa", "Pedra", 50, 100),
              I("Erupção Mini", "Brasa", 65, 90),
              I("Casca Vulcânica", "Pedra", 40, 100),
            ],
            dex: "Raro! Dorme dentro de vulcões adormecidos na caverna.",
            evo: [
              {
                affinity: "Brasa",
                name: "Vulcabra",
                types: ["Brasa", "Pedra"],
                focus: "atk",
                feature: "flame",
                dex: "Um vulcão com patas e mau humor. Moldado pela afinidade Brasa.",
              },
              {
                affinity: "Pedra",
                name: "Terrascal",
                types: ["Pedra", "Brasa"],
                focus: "def",
                feature: "horns",
                dex: "Sua carapaça é mais dura que diamante. Moldado pela afinidade Pedra.",
              },
            ],
          },
          {
            id: "faebran",
            name: "Faebran",
            types: ["Flora", "Faísca"],
            stage: 0,
            feature: "wings",
            silhouette: "faebran",
            rare: !0,
            essenceOnly: !0,
            glow: !0,
            base: { hp: 56, atk: 60, def: 50, vel: 62 },
            moves: [
              I("Pó Luminescente", "Flora", 46, 100),
              I("Raio Prismático", "Faísca", 58, 95),
              I("Dança das Fadas", "Flora", 62, 90),
              I("Clarão Arco-Íris", "Faísca", 54, 95),
            ],
            dex: "Lendário! Sua luz só se revela a quem carrega Essência Neutra. Não se vincula por afinidade comum.",
            evo: [
              {
                affinity: "Flora",
                name: "Faebluma",
                types: ["Flora", "Faísca"],
                focus: "atk",
                feature: "wings",
                dex: "Uma aurora com asas. Moldado pela afinidade Flora.",
              },
              {
                affinity: "Faísca",
                name: "Faevolta",
                types: ["Faísca", "Flora"],
                focus: "vel",
                feature: "spikes",
                dex: "Um arco-íris elétrico que nunca para. Moldado pela afinidade Faísca.",
              },
            ],
          },
          {
            id: "voltmar",
            name: "Voltmar",
            types: ["Maré", "Faísca"],
            stage: 0,
            feature: "fins",
            silhouette: "voltmar",
            base: { hp: 55, atk: 60, def: 48, vel: 64 },
            moves: [
              I("Choque de Maré", "Maré", 44, 100),
              I("Enguia Elétrica", "Faísca", 50, 100),
              I("Cauda de Raio", "Faísca", 58, 95),
              I("Redemoinho Volt", "Maré", 60, 92),
            ],
            dex: "Híbrido Maré/Faísca que caça tempestades no lago.",
            evo: [
              {
                affinity: "Maré",
                name: "Tidalvolt",
                types: ["Maré", "Faísca"],
                focus: "vel",
                feature: "fins",
                dex: "Surfa relâmpagos sobre as ondas da tempestade. Moldado pela afinidade Maré.",
              },
              {
                affinity: "Faísca",
                name: "Voltaquas",
                types: ["Faísca", "Maré"],
                focus: "atk",
                feature: "spikes",
                dex: "Seu corpo é um gerador vivo de trovões marinhos. Moldado pela afinidade Faísca.",
              },
            ],
          },
          {
            id: "petrombra",
            name: "Petrombra",
            types: ["Pedra", "Sombra"],
            stage: 0,
            feature: "round",
            silhouette: "petrombra",
            base: { hp: 65, atk: 58, def: 70, vel: 32 },
            moves: [
              I("Olhar Gárgula", "Sombra", 46, 100),
              I("Garra Pedra Sombria", "Pedra", 52, 100),
              I("Asa de Rocha", "Pedra", 58, 92),
              I("Rugido Caverna", "Sombra", 62, 90),
            ],
            dex: "Híbrido Pedra/Sombra das profundezas.",
            evo: [
              {
                affinity: "Pedra",
                name: "Rochombra",
                types: ["Pedra", "Sombra"],
                focus: "def",
                feature: "horns",
                dex: "Uma fortaleza viva que engole a luz ao redor. Moldado pela afinidade Pedra.",
              },
              {
                affinity: "Sombra",
                name: "Umbralith",
                types: ["Sombra", "Pedra"],
                focus: "atk",
                feature: "spikes",
                dex: "Monólito sombrio que se move sem fazer som. Moldado pela afinidade Sombra.",
              },
            ],
          },
          {
            id: "brasombra",
            name: "Brasombra",
            types: ["Brasa", "Sombra"],
            stage: 0,
            feature: "flame",
            silhouette: "brasombra",
            base: { hp: 58, atk: 66, def: 48, vel: 58 },
            moves: [
              I("Chama Negra", "Brasa", 48, 100),
              I("Uivo Sombrio", "Sombra", 50, 100),
              I("Mordida Sombra Ardente", "Sombra", 58, 95),
              I("Juba Fogo Negro", "Brasa", 62, 90),
            ],
            dex: "Chamas negras do bioma sombrio.",
            evo: [
              {
                affinity: "Brasa",
                name: "Pyrombra",
                types: ["Brasa", "Sombra"],
                focus: "atk",
                feature: "flame",
                dex: "Incendeia a escuridão com chamas negras. Moldado pela afinidade Brasa.",
              },
              {
                affinity: "Sombra",
                name: "Noctibra",
                types: ["Sombra", "Brasa"],
                focus: "vel",
                feature: "wings",
                dex: "Caça silencioso sob brasas espectrais. Moldado pela afinidade Sombra.",
              },
            ],
          },
          {
            id: "florapedra",
            name: "Florapedra",
            types: ["Flora", "Pedra"],
            stage: 0,
            feature: "leaf",
            silhouette: "florapedra",
            base: { hp: 62, atk: 55, def: 68, vel: 38 },
            moves: [
              I("Musgo Vivo", "Flora", 46, 100),
              I("Flor de Pedra", "Flora", 52, 100),
              I("Cipó Rochoso", "Flora", 58, 92),
              I("Jardim Granito", "Pedra", 60, 90),
            ],
            dex: "Híbrido Flora/Pedra do bosque antigo.",
            evo: [
              {
                affinity: "Flora",
                name: "Florolith",
                types: ["Flora", "Pedra"],
                focus: "def",
                feature: "leaf",
                dex: "Um jardim ancestral sobre rocha viva. Moldado pela afinidade Flora.",
              },
              {
                affinity: "Pedra",
                name: "Petraflor",
                types: ["Pedra", "Flora"],
                focus: "hp",
                feature: "horns",
                dex: "Flores desabrocham de sua carapaça de granito. Moldado pela afinidade Pedra.",
              },
            ],
          },
          {
            id: "marepedra",
            name: "Marepedra",
            types: ["Maré", "Pedra"],
            stage: 0,
            feature: "round",
            silhouette: "marepedra",
            base: { hp: 64, atk: 56, def: 66, vel: 40 },
            moves: [
              I("Casco Recife", "Pedra", 48, 100),
              I("Onda Coral", "Maré", 52, 100),
              I("Mergulho Ilha", "Maré", 58, 92),
              I("Bolha Maré Rochosa", "Maré", 46, 100),
            ],
            dex: "Tartaruga ancestral do lago profundo.",
            evo: [
              {
                affinity: "Maré",
                name: "Aquaroch",
                types: ["Maré", "Pedra"],
                focus: "hp",
                feature: "fins",
                dex: "Carrega um recife inteiro em seu casco. Moldado pela afinidade Maré.",
              },
              {
                affinity: "Pedra",
                name: "Tidolith",
                types: ["Pedra", "Maré"],
                focus: "def",
                feature: "round",
                dex: "Uma ilha viva que dorme sob as marés. Moldado pela afinidade Pedra.",
              },
            ],
          },
          {
            id: "faesombra",
            name: "Faesombra",
            types: ["Faísca", "Sombra"],
            stage: 0,
            feature: "pointy",
            silhouette: "faesombra",
            rare: !0,
            base: { hp: 52, atk: 62, def: 46, vel: 68 },
            moves: [
              I("Faísca Sombria", "Faísca", 48, 100),
              I("Pó Sombra", "Sombra", 50, 100),
              I("Clarão Negro", "Sombra", 58, 92),
              I("Dança Sombras Elétricas", "Faísca", 62, 90),
            ],
            dex: "Fada elétrica que só aparece na fenda.",
            evo: [
              {
                affinity: "Faísca",
                name: "Voltsombra",
                types: ["Faísca", "Sombra"],
                focus: "vel",
                feature: "spikes",
                dex: "Um clarão negro que risca a fenda. Moldado pela afinidade Faísca.",
              },
              {
                affinity: "Sombra",
                name: "Umbravolt",
                types: ["Sombra", "Faísca"],
                focus: "atk",
                feature: "wings",
                dex: "Sussurra trovões na escuridão total. Moldado pela afinidade Sombra.",
              },
            ],
          },
        ],
        aK = {
          Brasa: "Ígneo",
          Maré: "Abissal",
          Flora: "Silvestre",
          Faísca: "Volt",
          Pedra: "Rochoso",
          Sombra: "Umbral",
        };
      function $Q(n, u, r) {
        let l = {};
        return (
          Object.keys(n).forEach((o) => {
            l[o] = Math.round(n[o] * u * (o === r ? 1.18 : 1));
          }),
          l
        );
      }
      function vQ(n, u) {
        let r = n.map((l) => ({ ...l }));
        return (
          u.forEach((l) => {
            let o = r.findIndex((f) => f.type === l);
            if (o >= 0)
              r[o] = { ...r[o], power: r[o].power + 15, name: r[o].name };
            else {
              let f = r.reduce(
                  (_, v, Z, J) => (v.power < J[_].power ? Z : _),
                  0,
                ),
                $ = sK[l];
              r[f] = {
                name: $,
                type: l,
                power: 70,
                acc: 90,
                ...(Q8[$] ? { anim: Q8[$] } : {}),
              };
            }
          }),
          r.slice(0, 4)
        );
      }
      var sK = {
          Brasa: "Explosão Ígnea",
          Maré: "Tsunami",
          Flora: "Tempestade Pétala",
          Faísca: "Julgamento Volt",
          Pedra: "Fúria Tectônica",
          Sombra: "Abismo Final",
        },
        nu = {},
        Kr = {};