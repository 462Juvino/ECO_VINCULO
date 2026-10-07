/*
 * Eco Vínculo — Tela principal, exploração e menus
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 36803-39865.
 */
"use strict";

      function c3({
        gs: n,
        onBattle: u,
        refreshToken: r,
        notice: l,
        autoIntro: o,
        restoreLoc: f,
      }) {
        let $ = n.current;
        M8($);
        let _ = $n.useRef(null),
          v = $n.useRef(null);
        if (!v.current) v.current = _f();
        let Z = $n.useRef(null);
        if (!Z.current)
          Z.current = n.current.inExpansion
            ? T3()
            : f?.caveId
              ? k3(f.caveId)
              : f?.inside != null
                ? h3()
                : v.current;
        let J = Z.current,
          [e, Q] = $n.useState(() => f?.inside ?? null),
          M = $n.useRef(f?.inside ?? null),
          H = $n.useRef(
            f?.inside != null
              ? { x: ho[f.inside].x, y: ho[f.inside].y + 1 }
              : null,
          ),
          [K, V] = $n.useState(!1),
          [C, D] = $n.useState(null),
          [W, B] = $n.useState(() => f?.caveId ?? null),
          A = $n.useRef(f?.caveId ?? null),
          P = $n.useRef(n.current.expHome ?? null),
          [U, E] = $n.useState(() => !!n.current.inExpansion),
          q = $n.useRef({
            x: ($.px + 0.5) * t,
            y: ($.py + 0.5) * t,
            dir: $.dir,
          }),
          L = $n.useRef({ up: !1, down: !1, left: !1, right: !1 }),
          Y = $n.useRef({ x: 0, y: 0 }),
          G = $n.useRef(null),
          d = $n.useRef(null),
          h = $n.useRef(null),
          i = 10,
          b = (g, S) => {
            let p = d.current;
            if (p) p.style.transform = `translate(${g}px, ${S}px)`;
          },
          z = () => {
            ((Y.current = { x: 0, y: 0 }), (h.current = null), b(0, 0));
          },
          k = (g, S) => {
            let p = G.current;
            if (!p) return null;
            let x = p.getBoundingClientRect(),
              Xn = x.width / 2 - 30,
              qn = g - (x.left + x.width / 2),
              Yn = S - (x.top + x.height / 2),
              gu = Math.hypot(qn, Yn);
            if (gu < i) return { x: 0, y: 0, ox: 0, oy: 0 };
            let wu = Math.min(gu, Xn),
              Hu = qn / gu,
              Fu = Yn / gu,
              dn = Math.min(1, (wu - i) / (Xn - i));
            return { x: Hu * dn, y: Fu * dn, ox: Hu * wu, oy: Fu * wu };
          },
          a = (g) => {
            g.preventDefault();
            try {
              g.currentTarget.setPointerCapture(g.pointerId);
            } catch {}
            h.current = g.pointerId;
            let S = k(g.clientX, g.clientY);
            if (S) ((Y.current = { x: S.x, y: S.y }), b(S.ox, S.oy));
          },
          un = (g) => {
            if (h.current !== g.pointerId) return;
            let S = k(g.clientX, g.clientY);
            if (S) ((Y.current = { x: S.x, y: S.y }), b(S.ox, S.oy));
          },
          mn = (g) => {
            if (h.current !== g.pointerId) return;
            z();
          },
          en = $n.useRef(null),
          [sn, Gu] = $n.useState({ loc: "", zone: "", t: 0 }),
          [Mn, yr] = $n.useState(null),
          [Rn, Er] = $n.useState([]),
          [Gn, Pn] = $n.useState(!1),
          [uu, Nu] = $n.useState("time"),
          [wn, tu] = $n.useState(null),
          [Sn, Vo] = $n.useState(0),
          [Lu, fl] = $n.useState(!1),
          [Xu, Ul] = $n.useState("items"),
          [s, ln] = $n.useState(!1),
          Zn = $n.useRef(0),
          [Kn, Ku] = $n.useState(null),
          [Hn, yu] = $n.useState(!1),
          [Tu, Bu] = $n.useState(!1),
          [pu, Ju] = $n.useState(!1),
          [En, Dn] = $n.useState(!1),
          jn = $n.useRef(""),
          hr = $n.useRef(null),
          ku = $n.useRef(null),
          Au = $n.useRef(null);
        if (!Au.current) {
          let g = ($.px + 0.5) * t,
            S = ($.py + 0.5) * t;
          Au.current = [
            { x: g, y: S },
            { x: g, y: S },
            { x: g, y: S },
          ];
        }
        let Vr = () => {
            let g = Au.current;
            ((g[0] = { x: q.current.x, y: q.current.y }),
              (g[1] = { x: q.current.x, y: q.current.y }),
              (g[2] = { x: q.current.x, y: q.current.y }));
          },
          or = $n.useRef(null),
          mu = $n.useRef(!1),
          Lr = $n.useRef(1),
          [Wn, gn] = $n.useState(0),
          Ml = $n.useMemo(() => new Set($.cutThorns), [Wn]),
          fr = jr($, "Maré"),
          xn = jr($, "Faísca"),
          Nn = $n.useRef(0),
          Ln = $n.useRef(0),
          eu = $n.useRef({});
        function S0(g, S) {
          let p = m0(J, g, S);
          for (let x of UQ)
            if ((g === x.door.x && S === x.door.y) || p === x.region) {
              if (!jr(n.current, x.affinity)) return x;
            }
          return null;
        }
        function V9(g, S) {
          let p = S0(g, S);
          if (p) {
            let x = performance.now();
            if (x - Ln.current > 2600) ((Ln.current = x), yn(p.msg));
          }
        }
        function g8(g) {
          if (
            g.startsWith("caverna-") ||
            g === "abismo-real" ||
            g === "caverna" ||
            g === "profunda" ||
            g === "sombrio" ||
            g === "abismo"
          )
            return "cave";
          if (g === "lago") return "water";
          return "grass";
        }
        let Ro = (g) => {
            u({
              ...g,
              prePx: Math.floor(q.current.x / t),
              prePy: Math.floor(q.current.y / t),
              preCaveId: A.current,
              preInside: M.current,
            });
          },
          yn = (g) => {
            let S = Lr.current++;
            (Er((p) => [...p.slice(-2), { id: S, text: g }]),
              setTimeout(() => Er((p) => p.filter((x) => x.id !== S)), 3400));
          },
          hn = (g, S, p) => {
            ((L.current = { up: !1, down: !1, left: !1, right: !1 }),
              z(),
              yr({ name: g, lines: S, i: 0, onDone: p }));
          },
          Wo = (g) =>
            g
              .replace("{nome}", $.playerName)
              .replace("{affs}", $.affinities.join(" e ")),
          Ef = (g, S) => $.boulders.findIndex((p) => p.x === g && p.y === S),
          Lf = (g, S) =>
            (n.current.inExpansion ? V8 : Nf).find(
              (p) =>
                p.x === g &&
                p.y === S &&
                !(p.kind === "trainer" && $.defeated.includes(p.id)) &&
                !(p.id === "ramiro" && !($.items["carta-nautica"] > 0)),
            ),
          Xf = (g, S) => W8.find((p) => p.x === g && p.y === S);
        function Bf(g, S) {
          let p = Sr(J, g, S),
            x = `${g},${S}`;
          if (p === F.THORN && Ml.has(x)) return Af(F.GRASS, g, S);
          return Af(p, g, S);
        }
        function Af(g, S, p) {
          if (g === F.CAVE_ENTRY) return !0;
          if (
            g === F.TREE ||
            g === F.CAVEWALL ||
            g === F.HOUSE ||
            g === F.THORN
          )
            return !0;
          if (g === F.GAP) return !xn;
          if (g === F.DOOR) {
            if (S === 24 && p === 41)
              return n.current.inExpansion ? !1 : !$.doorOpen;
            if (ho.some((x) => x.x === S && x.y === p)) return !0;
            return !1;
          }
          if (g === F.WATER || g === F.DEEP) return !fr;
          return !1;
        }
        function il(g, S) {
          if (A.current) {
            let x = S3(A.current);
            if (g === x.x && S === x.y) return !0;
            if (Bf(g, S)) return !0;
            if (
              (w0[A.current] || []).find(
                (Yn) =>
                  Yn.x === g &&
                  Yn.y === S &&
                  !(Yn.kind === "trainer" && $.defeated.includes(Yn.id)),
              )
            )
              return !0;
            let qn = (Kf[A.current] || []).find(
              (Yn) => Yn.x === g && Yn.y === S,
            );
            if (qn && !$.openedChests.includes(qn.id)) return !0;
            return !1;
          }
          if (S0(g, S)) return !0;
          if (Bf(g, S)) return !0;
          if (M.current !== null) {
            if (g >= bo.x0 && g <= bo.x1 && S >= bo.y0 && S <= bo.y1) return !0;
            if (Ff(g, S)) return !0;
            return !1;
          }
          if (Ef(g, S) >= 0) return !0;
          if (Lf(g, S)) return !0;
          if (U8.some((x) => x.x === g && x.y === S)) return !0;
          let p = Xf(g, S);
          if (p && !$.openedChests.includes(p.id)) return !0;
          return !1;
        }
        let Ff = (g, S) =>
          M.current !== null
            ? y3[M.current].find((p) => p.x === g && p.y === S)
            : void 0;
        async function w8(g) {
          if (K || M.current !== null) return;
          let S = ho[g];
          ((H.current = { x: S.x, y: S.y + 1 }),
            V(!0),
            await G0(300),
            (M.current = g),
            (Z.current = h3()),
            (q.current = { x: (j3.x + 0.5) * t, y: (j3.y + 0.5) * t, dir: 0 }),
            Vr(),
            D(null),
            Q(g),
            V(!1));
        }
        async function j0() {
          if (K || M.current === null) return;
          (V(!0), await G0(300), (M.current = null), (Z.current = v.current));
          let g = H.current;
          ((q.current = { x: (g.x + 0.5) * t, y: (g.y + 0.5) * t, dir: 2 }),
            Vr(),
            D(null),
            Q(null),
            V(!1));
        }
        async function Pf(g, S = !0) {
          if (K || A.current) return;
          let p = n.current;
          if (S && !p.defeated.includes("arena-campeao")) {
            hn("Guardião", ["Derrote o Campeão Ragnar na Vila!"]);
            return;
          }
          let x = [...g0, ...Qo].find((qn) => qn.id === g);
          (V(!0), await G0(300), (A.current = g), (Z.current = k3(g)));
          let Xn = HQ(g);
          ((q.current = { x: (Xn.x + 0.5) * t, y: (Xn.y + 0.5) * t, dir: 0 }),
            Vr(),
            D(null),
            B(g),
            V(!1),
            yn(x ? `Você entrou: ${x.name}` : "Você entrou na caverna"),
            Df());
        }
        async function z8() {
          if (K || !A.current) return;
          let g = [...g0, ...Qo].find((S) => S.id === A.current);
          if (
            (V(!0),
            await G0(300),
            (A.current = null),
            (Z.current = v.current),
            g)
          )
            q.current = { x: (g.x + 0.5) * t, y: (g.y + 1 + 0.5) * t, dir: 2 };
          (Vr(), D(null), B(null), V(!1), Df());
        }
        async function i8() {
          if (K || n.current.inExpansion) return;
          let g = {
            x: Math.floor(q.current.x / t),
            y: Math.floor(q.current.y / t),
            dir: q.current.dir,
          };
          ((P.current = g),
            (n.current.expHome = g),
            V(!0),
            await G0(300),
            (Z.current = T3()),
            (q.current = { x: (G3.x + 0.5) * t, y: (G3.y + 0.5) * t, dir: 2 }),
            Vr(),
            (n.current.inExpansion = !0),
            (n.current.visitedExpansion = !0),
            D(null),
            E(!0),
            V(!1),
            Df());
        }
        async function $l() {
          if (K || !n.current.inExpansion) return;
          (V(!0), await G0(300), (Z.current = v.current));
          let g = P.current;
          if (g)
            q.current = { x: (g.x + 0.5) * t, y: (g.y + 0.5) * t, dir: g.dir };
          (Vr(), (n.current.inExpansion = !1), D(null), E(!1), V(!1), Df());
        }
        async function y0() {
          if (Mn) return;
          if (Gn || en.current) return;
          let g = q.current.dir,
            S = g === 1 ? 1 : g === 3 ? -1 : 0,
            p = g === 2 ? 1 : g === 0 ? -1 : 0,
            x = Math.floor(q.current.x / t),
            Xn = Math.floor(q.current.y / t),
            qn = x + S,
            Yn = Xn + p;
          if (A.current === null) {
            let X = g0.find((j) => j.x === qn && j.y === Yn);
            if (X) {
              Pf(X.id);
              return;
            }
            let w = Qo.find((j) => j.x === qn && j.y === Yn);
            if (w) {
              if (!jr($, w.type)) {
                hn(w.name, [
                  `A entrada pulsa com energia ${w.type}...`,
                  `Você precisa de um Pat ${w.type} na equipe para entrar!`,
                ]);
                return;
              }
              Pf(w.id, !1);
              return;
            }
          } else {
            let X = S3(A.current ?? "");
            if (qn === X.x && Yn === X.y) {
              z8();
              return;
            }
            let w = (w0[A.current] || []).find((y) => y.x === qn && y.y === Yn);
            if (w) {
              d0(w);
              return;
            }
            let j = (Kf[A.current] || []).find((y) => y.x === qn && y.y === Yn);
            if (j && !$.openedChests.includes(j.id)) {
              gf(j);
              return;
            }
            return;
          }
          if (M.current === null) {
            let X = ho.findIndex((w) => w.x === qn && w.y === Yn);
            if (X >= 0) {
              w8(X);
              return;
            }
          } else {
            if (qn === yo.x && Yn === yo.y) {
              j0();
              return;
            }
            let X = Ff(qn, Yn);
            if (X) {
              hn(X.name, X.dialog.map(Wo));
              return;
            }
            return;
          }
          let gu = Lf(qn, Yn);
          if (gu) {
            d0(gu);
            return;
          }
          let wu = Xf(qn, Yn);
          if (wu && !$.openedChests.includes(wu.id)) {
            gf(wu);
            return;
          }
          if (M.current === null) {
            let X = U8.find((w) => w.x === qn && w.y === Yn);
            if (X) {
              if (!$.villageSwitches.includes(X.id))
                ($.villageSwitches.push(X.id),
                  gn((w) => w + 1),
                  yn(
                    $.villageSwitches.length >= 2
                      ? "Os dois interruptores brilham! Algo se destravou na vila..."
                      : "Interruptor pressionado! (1/2)",
                  ));
              else yn("O interruptor já está pressionado.");
              return;
            }
          }
          let Hu = Sr(J, qn, Yn),
            Fu = `${qn},${Yn}`;
          if (Hu === F.THORN && !Ml.has(Fu)) {
            if (jr($, "Flora"))
              ($.cutThorns.push(Fu),
                gn((X) => X + 1),
                yn("Corte Flora! Arbusto cortado."),
                Uo());
            else yn("Arbustos espinhosos... Um Pat Flora poderia cortá-los!");
            return;
          }
          let dn = Ef(qn, Yn);
          if (dn >= 0) {
            if (jr($, "Pedra")) {
              let X = qn + S,
                w = Yn + p;
              if (!il(X, w))
                (($.boulders[dn] = { x: X, y: w }),
                  gn((j) => j + 1),
                  yn("Força Pedra! Você empurrou a pedra."));
              else yn("A pedra não pode ir para lá.");
            } else yn("Uma pedra pesada... Um Pat Pedra poderia empurrá-la!");
            return;
          }
          if (Hu === F.GAP) {
            if (jr($, "Faísca")) {
              let X = x,
                w = Xn;
              for (let j = 1; j <= 4; j++) {
                let y = x + S * j,
                  T = Xn + p * j;
                if (Sr(J, y, T) === F.GAP) continue;
                if (!il(y, T)) {
                  ((X = y), (w = T));
                  break;
                }
                break;
              }
              if (X !== x || w !== Xn)
                ((en.current = {
                  fx: q.current.x,
                  fy: q.current.y,
                  tx: (X + 0.5) * t,
                  ty: (w + 0.5) * t,
                  t: 0,
                }),
                  yn("Dash Faísca!"),
                  Uo());
              else yn("Não há para onde pular...");
            } else
              yn(
                "A fenda crepita... Apenas um Pat elétrico consegue atravessar! Contorne pelo final.",
              );
            return;
          }
          if (Hu === F.DOOR && qn === 24 && Yn === 41) {
            if ($.doorOpen) return;
            if ($.items.chave > 0)
              (($.doorOpen = !0),
                gn((X) => X + 1),
                yn("Você abriu a porta selada com a Chave Enferrujada!"),
                Uo());
            else
              yn("Porta selada. Parece precisar de uma chave enferrujada...");
            return;
          }
        }
        function Yf() {
          if (!Mn) return;
          if (Mn.i + 1 < Mn.lines.length) yr({ ...Mn, i: Mn.i + 1 });
          else mf();
        }
        function mf() {
          if (!Mn) return;
          let g = Mn.onDone;
          (yr(null),
            (L.current = { up: !1, down: !1, left: !1, right: !1 }),
            setTimeout(() => {
              L.current = { up: !1, down: !1, left: !1, right: !1 };
            }, 500),
            g && g());
        }
        let h0 = 2500,
          vl = $n.useMemo(
            () => Object.keys(nu).filter((g) => g.endsWith("-marca")),
            [],
          );
        function G8(g) {
          let S = n.current;
          if (S.dexCaught.includes(g)) return;
          if ((S.ecos ?? 0) < h0) {
            hn("Feirante Zé", ["Volte com mais moedas, capitão!"]);
            return;
          }
          S.ecos -= h0;
          let p = Vl(g, 30);
          if (S.party.length < 3) S.party.push(p);
          else S.box.push(p);
          (rl(S, g),
            Yl(S, g),
            gn((x) => x + 1),
            yn(`${_n(g).name} se juntou a você!`));
        }
        let T8 = (g) => {
          if (g.length === 0) return;
          let S = $.nurseFreeUsed ? 50 : 0;
          if (S > 0 && ($.ecos ?? 0) < S) {
            (Ju(!1),
              hn("Lia", [
                "Sinto muito... a cura custa 50 ecos e você não tem o suficiente. Volte quando tiver!",
              ]));
            return;
          }
          if (S > 0) $.ecos -= S;
          (g.forEach((p) => {
            let x = $.party.find((Xn) => Xn.uid === p);
            if (x) x.hp = zn(x.sp, x.level).maxHp;
          }),
            ($.nurseFreeUsed = !0),
            ($.nurseLastHealAt = Date.now()),
            ml(1, $),
            GQ(),
            Ju(!1),
            gn((p) => p + 1),
            hn("Lia", [
              `Prontinho! ${g.length} pet${g.length === 1 ? "" : "s"} curado${g.length === 1 ? "" : "s"}${S === 0 ? " — sua primeira cura é por conta da casa" : ""}! Volte em 5 min se precisar de mais.`,
            ]));
        };
        function d0(g) {
          if (g.id === "bau-vila") {
            ((L.current = { up: !1, down: !1, left: !1, right: !1 }), Bu(!0));
            return;
          }
          if (g.id === "verdelho" && !$.starterGiven) {
            hn(g.name, g.dialog.map(Wo), () => {
              CQ($);
              let S = _n($.party[0].sp);
              (hn("Prof. Verdelho", [
                `Tome! Um ${S.name} Nv 5 e 3 Poções de Vínculo!`,
                "Sua primeira missão: vincule 3 Pats, evolua 1 e desbloqueie 2 áreas. Boa sorte!",
              ]),
                gn((p) => p + 1));
            });
            return;
          }
          if (g.id === "verdelho" && !$.ecoalmaGiven) {
            let S = vo.find((p) => p.id === "q_master_supremo");
            if (S && _o($, S) >= S.meta) {
              $.ecoalmaGiven = !0;
              let p = Vl("ecoalma", 30);
              if ($.party.length < 3) $.party.push(p);
              else $.box.push(p);
              (rl($, p.sp),
                Yl($, p.sp),
                hn(g.name, [
                  "Você entendeu o vínculo melhor que ninguém. Cuide dele... Ecoalma agora é seu!",
                ]),
                gn((x) => x + 1));
              return;
            }
          }
          if (g.id === "verdelho" && !$.brasalmaGiven) {
            let S = vo.find((p) => p.id === "exp-lenda");
            if (S && _o($, S) >= S.meta) {
              $.brasalmaGiven = !0;
              let p = Vl("brasalma", 40);
              if ($.party.length < 3) $.party.push(p);
              else $.box.push(p);
              (rl($, p.sp),
                Yl($, p.sp),
                hn(g.name, [
                  "Você reuniu todas as lendas do folclore. O espírito do vulcão escolheu você... Brasalma agora é seu!",
                ]),
                gn((x) => x + 1));
              return;
            }
          }
          if (
            g.id === "verdelho" &&
            $.defeated.includes("senhor-abismo") &&
            !($.items["carta-nautica"] > 0)
          ) {
            (($.items["carta-nautica"] = ($.items["carta-nautica"] ?? 0) + 1),
              hn(g.name, [
                "Você derrotou o pesadelo final! Detectei ecos estranhos a oeste... Tome a Carta Náutica. O Capitão Ramiro o aguarda no porto, ao sul!",
              ]),
              gn((S) => S + 1));
            return;
          }
          if (g.id === "ramiro") {
            hn(g.name, ["Zarpar para o Arquipélago do Tatá?"], () => {
              i8();
            });
            return;
          }
          if (g.id === "ramiro-exp") {
            hn(g.name, ["De volta ao continente?"], () => {
              $l();
            });
            return;
          }
          if (g.id === "lia") {
            let S = Date.now() - ($.nurseLastHealAt || 0);
            if (S < 300000) {
              let p = Math.ceil((300000 - S) / 60000);
              hn(g.name, [
                `Ainda estou preparando os remédios! Volte em ${p} min para outra cura.`,
              ]);
              return;
            }
            if (!$.liaGift)
              (($.liaGift = !0),
                ($.items.essencia += 2),
                yn("Recebeu: Essência Neutra x2"));
            (hn(g.name, g.dialog.map(Wo), () => Ju(!0)), gn((p) => p + 1));
            return;
          }
          if (
            g.id === "dona-cuca" &&
            $.defeated.includes("dona-cuca") &&
            !$.tataAlfaDefeated
          ) {
            (($.tataAlfaDefeated = !0),
              ($.ecos = ($.ecos ?? 0) + 5000),
              ml(1, $),
              hn("Dona Jacaruxa", [
                "Impossível... O Tatá Alfa se curva diante de você! Tome estes 5000 ecos — o Arquipélago está em dívida.",
              ]),
              gn((S) => S + 1));
            return;
          }
          if (g.id === "dona-cuca") {
            let S = [
              "saci",
              "boto",
              "curupira",
              "iara",
              "boitata",
              "mula",
              "cuca",
              "lobisomem",
            ];
            if ($.tataAlfaDefeated) {
              hn(g.name, ["O vulcão dorme em paz, graças a você, treinador."]);
              return;
            }
            if (!S.every((x) => $.dexCaught.includes(x))) {
              hn(g.name, [
                "O Tatá Alfa só desperta para quem reuniu as 8 lendas do folclore. Volte quando as tiver.",
              ]);
              return;
            }
            hn(g.name, ["Então é verdade... Que o Tatá Alfa desperte!"], () => {
              Ro({
                kind: "trainer",
                trainerName: "Tatá Alfa",
                npcId: "dona-cuca",
                foeSp: "tata-alfa",
                foeLevel: 50,
                team: [{ sp: "tata-alfa", level: 50 }],
              });
            });
            return;
          }
          if (g.kind === "trainer" && g.team) {
            hn(g.name, g.dialog.map(Wo), () => {
              let S = g.team[0],
                p =
                  Zf[
                    m0(
                      J,
                      Math.floor(q.current.x / t),
                      Math.floor(q.current.y / t),
                    )
                  ]?.zone ?? "";
              Ro({
                kind: "trainer",
                trainerName: g.name,
                npcId: g.id,
                foeSp: S.sp,
                foeLevel: S.level,
                team: g.team,
                bg:
                  p === "caverna" || p === "profunda"
                    ? "cave"
                    : p === "lago"
                      ? "water"
                      : "grass",
              });
            });
            return;
          }
          if (g.kind === "mercador") {
            let S = g.merchantId ?? "vila";
            (Ku(K8[S] ?? K8.vila), (Zn.current = Date.now()), ln(!0));
            return;
          }
          if (g.id === "feirante") {
            Dn(!0);
            return;
          }
          hn(g.name, g.dialog.map(Wo));
        }
        function gf(g) {
          if (g.sealed === "mare" && !jr($, "Maré")) {
            hn(g.label, [
              "Selado por poder antigo... Apenas quem nada ao lado de um Pat Maré pode alcançar este tesouro.",
            ]);
            return;
          }
          if (g.sealed === "shadow-key")
            if ($.items["chave-sombria"] > 0)
              ($.items["chave-sombria"]--,
                yn("A Chave Sombria girou na fechadura..."));
            else {
              hn(g.label, [
                "Selado por poder antigo... Uma fechadura sombria pulsa neste baú. Dizem que um caçador no bosque profundo guarda a chave...",
              ]);
              return;
            }
          if (g.sealed === "switches" && $.villageSwitches.length < 2) {
            hn(g.label, [
              "Selado por poder antigo... Dois interruptores de pedra na vila parecem controlar este selo.",
            ]);
            return;
          }
          ($.openedChests.push(g.id), TQ());
          let S = [];
          (Object.keys(g.items).forEach((p) => {
            let x = g.items[p] ?? 0;
            (($.items[p] += x), S.push(`${x}× ${ul[p].name}`));
          }),
            gn((p) => p + 1),
            hn(g.label, [`Você abriu o baú! Encontrou: ${S.join(", ")}.`]),
            Uo());
        }
        function Uo() {
          let g = Math.floor(q.current.x / t),
            S = Math.floor(q.current.y / t),
            p = m0(J, g, S),
            x = (Xn, qn) => {
              if (!$.gatedUnlocks.includes(Xn))
                ($.gatedUnlocks.push(Xn), yn(`Área desbloqueada: ${qn}!`));
            };
          if (p === "grove" && $.cutThorns.length > 0)
            x("clareira", "Clareira Secreta");
          if (g >= 27 && g <= 29 && S >= 23 && S <= 25)
            x("ilha", "Ilha do Lago");
          if (p === "profunda") x("profunda", "Profundezas Seladas");
          if (p === "sombrio") x("sombrio", "Pântano Sombrio");
          if (p === "igneo") x("igneo", "Fenda Ígnea");
          if (g > Wl) x("fenda", "Além da Fenda");
        }
        function wf(g, S) {
          let p = `${g},${S}`;
          if (p === jn.current) return;
          jn.current = p;
          let x = performance.now();
          if (x < Sn) return;
          let Xn = Sr(J, g, S),
            qn = A.current;
          if (!!qn && Qo.some((Hu) => Hu.id === qn)) {
            let Hu = KQ[Xn];
            if (!Hu) return;
            if (Hu !== JQ[qn]) return;
            if (Math.random() < 0.11) {
              Vo(x + 1500);
              let Fu = eQ(qn, Hu);
              if (Fu) {
                let dn = K3[qn];
                if (dn && (n.current.caveCaptures?.[qn] ?? 0) >= 5)
                  ((Fu.sp = dn),
                    yn("Uma presença poderosa surge na caverna...!"));
                Ro({
                  kind: "wild",
                  foeSp: Fu.sp,
                  foeLevel: Fu.level,
                  caveId: qn,
                  bg: "cave",
                });
              }
            }
            return;
          }
          if (Xn !== F.TALL) return;
          let gu = m0(J, g, S),
            wu = Zf[gu]?.zone;
          if (!wu) return;
          if (Math.random() < 0.11) {
            Vo(x + 1500);
            let Hu = NQ(wu);
            if (Hu) {
              let Fu = qn && K3[qn];
              if (Fu && (n.current.caveCaptures?.[qn] ?? 0) >= 5)
                ((Hu.sp = Fu),
                  yn("Uma presença poderosa surge na caverna...!"));
              Ro({
                kind: "wild",
                foeSp: Hu.sp,
                foeLevel: Hu.level,
                caveId: void 0,
                bg:
                  wu === "caverna" || wu === "profunda"
                    ? "cave"
                    : wu === "lago"
                      ? "water"
                      : "grass",
              });
            }
          }
        }
        return (
          $n.useEffect(() => {
            let g = _.current,
              S = g.getContext("2d"),
              p = 0,
              x = performance.now(),
              Xn = 0,
              qn = 0.25,
              Yn = () => {
                let dn = g.parentElement.getBoundingClientRect();
                ((g.width = Math.floor(dn.width)),
                  (g.height = Math.floor(dn.height)));
              };
            (Yn(), window.addEventListener("resize", Yn));
            let gu = (dn) => {
                let X = dn.key.toLowerCase();
                if (Mn) {
                  if ((X === "enter" || X === " ") && !dn.repeat)
                    (dn.preventDefault(), Yf());
                  return;
                }
                if (X === "arrowup" || X === "w") L.current.up = !0;
                else if (X === "arrowdown" || X === "s") L.current.down = !0;
                else if (X === "arrowleft" || X === "a") L.current.left = !0;
                else if (X === "arrowright" || X === "d") L.current.right = !0;
                else if (X === "e" || X === " " || X === "enter") {
                  if (!dn.repeat) {
                    if ((dn.preventDefault(), Date.now() - Zn.current < 350))
                      return;
                    y0();
                  }
                } else if (X === "escape" || X === "p") Pn((w) => !w);
              },
              wu = (dn) => {
                let X = dn.key.toLowerCase();
                if (X === "arrowup" || X === "w") L.current.up = !1;
                else if (X === "arrowdown" || X === "s") L.current.down = !1;
                else if (X === "arrowleft" || X === "a") L.current.left = !1;
                else if (X === "arrowright" || X === "d") L.current.right = !1;
              };
            (window.addEventListener("keydown", gu),
              window.addEventListener("keyup", wu));
            let Hu = (dn, X) => {
                if (!xn && Sr(J, dn, X) === F.GAP) {
                  let w = performance.now();
                  if (w - Nn.current > 2600)
                    ((Nn.current = w),
                      yn(
                        "A fenda crepita... Apenas um Pat elétrico consegue atravessar! Contorne pelo final.",
                      ));
                }
              },
              Fu = (dn) => {
                p = requestAnimationFrame(Fu);
                let X = Math.min(0.05, (dn - x) / 1000);
                x = dn;
                let w = dn / 1000;
                qn = (qn + X / 240) % 1;
                let j = !!Mn || Gn;
                if (en.current && !j) {
                  let fn = en.current;
                  if (((fn.t += X * 3.2), fn.t >= 1))
                    ((q.current.x = fn.tx),
                      (q.current.y = fn.ty),
                      (en.current = null));
                  else
                    ((q.current.x = fn.fx + (fn.tx - fn.fx) * fn.t),
                      (q.current.y = fn.fy + (fn.ty - fn.fy) * fn.t));
                }
                let y = 0,
                  T = 0;
                if (!j && !en.current) {
                  let fn = L.current;
                  if (fn.up) T -= 1;
                  if (fn.down) T += 1;
                  if (fn.left) y -= 1;
                  if (fn.right) y += 1;
                  ((y += Y.current.x), (T += Y.current.y));
                  let rn = Math.hypot(y, T);
                  if (rn > 1) ((y /= rn), (T /= rn));
                  if (y || T) {
                    q.current.dir =
                      Math.abs(y) > Math.abs(T)
                        ? y > 0
                          ? 1
                          : 3
                        : T > 0
                          ? 2
                          : 0;
                    let Tn = 120 * X,
                      pn = q.current.x + y * Tn,
                      vu = q.current.y + T * Tn,
                      Qu = 10;
                    if (
                      !il(
                        Math.floor((pn + Math.sign(y) * Qu) / t),
                        Math.floor(q.current.y / t),
                      )
                    )
                      q.current.x = pn;
                    if (
                      !il(
                        Math.floor(q.current.x / t),
                        Math.floor((vu + Math.sign(T) * Qu) / t),
                      )
                    )
                      q.current.y = vu;
                  }
                }
                let vn = !!(y || T) || !!en.current;
                (($.px = Math.floor(q.current.x / t)),
                  ($.py = Math.floor(q.current.y / t)),
                  ($.dir = q.current.dir));
                {
                  let fn = performance.now(),
                    rn = $.px,
                    Tn = $.py;
                  if (!A.current) {
                    for (let pn of [...g0, ...Qo])
                      if (Math.hypot(rn - pn.x, Tn - pn.y) < 2.6) {
                        let Qu = "cave-" + pn.id;
                        if (!eu.current[Qu] || fn - eu.current[Qu] > 9000)
                          ((eu.current[Qu] = fn), yn(pn.name));
                      }
                    for (let pn of n.current.inExpansion ? V8 : Nf) {
                      if (!pn.name) continue;
                      if (pn.id === "ramiro" && !($.items["carta-nautica"] > 0))
                        continue;
                      if (Math.hypot(rn - pn.x, Tn - pn.y) < 2.1) {
                        let Qu = "npc-" + pn.id;
                        if (!eu.current[Qu] || fn - eu.current[Qu] > 12000)
                          ((eu.current[Qu] = fn), yn(pn.name));
                      }
                    }
                  } else {
                    let pn = w0[A.current] || [];
                    for (let vu of pn)
                      if (Math.hypot(rn - vu.x, Tn - vu.y) < 2.6) {
                        let An = "cnpc-" + vu.id;
                        if (!eu.current[An] || fn - eu.current[An] > 12000)
                          ((eu.current[An] = fn), yn(vu.name));
                      }
                  }
                }
                if (!j) {
                  let fn = q.current.dir,
                    rn = fn === 1 ? 1 : fn === 3 ? -1 : 0,
                    Tn = fn === 2 ? 1 : fn === 0 ? -1 : 0,
                    pn = Tn !== 0 ? 1 : 0,
                    vu = rn !== 0 ? 1 : 0,
                    Qu = Au.current;
                  for (let An = 0; An < Qu.length; An++) {
                    let hu, Wr;
                    if (An === 0)
                      ((hu = q.current.x - rn * 30),
                        (Wr = q.current.y - Tn * 30));
                    else ((hu = Qu[An - 1].x), (Wr = Qu[An - 1].y));
                    if (!vn) {
                      if (An === 1) ((hu += pn * 14), (Wr += vu * 14));
                      else if (An === 2) ((hu -= pn * 14), (Wr -= vu * 14));
                    }
                    let W9 = hu - Qu[An].x,
                      U9 = Wr - Qu[An].y,
                      Gf = Math.hypot(W9, U9);
                    if (Gf > 22) {
                      let M9 = Math.min(4.5, Gf * 0.18);
                      ((Qu[An].x += (W9 / Gf) * M9),
                        (Qu[An].y += (U9 / Gf) * M9));
                    }
                  }
                }
                if (!j && !en.current) wf($.px, $.py);
                if (((Xn += X), Xn > 0.4)) {
                  Xn = 0;
                  let fn = m0(J, $.px, $.py),
                    rn = Zf[fn] ?? Zf.planalto;
                  if (
                    (Gu((Wr) =>
                      Wr.loc === rn.name
                        ? Wr
                        : { loc: rn.name, zone: rn.desc, t: w },
                    ),
                    hr.current !== fn)
                  )
                    ((hr.current = fn), IQ(fn), SQ(Ne[fn] ?? "campo"));
                  if (!$.visited.includes(fn)) $.visited.push(fn);
                  Uo();
                  let Tn = q.current.dir,
                    pn = Tn === 1 ? 1 : Tn === 3 ? -1 : 0,
                    vu = Tn === 2 ? 1 : Tn === 0 ? -1 : 0,
                    Qu = Math.floor(q.current.x / t) + pn,
                    An = Math.floor(q.current.y / t) + vu,
                    hu = null;
                  if (M.current === null) {
                    if (ho.some((Wr) => Wr.x === Qu && Wr.y === An))
                      hu = "Entrar [A]";
                  } else if (Qu === yo.x && An === yo.y) hu = "Sair [A]";
                  D((Wr) => (Wr === hu ? Wr : hu));
                }
                let { width: nn, height: R } = g;
                ((S.imageSmoothingEnabled = !1),
                  (S.fillStyle = "#000"),
                  S.fillRect(0, 0, nn, R));
                let on = Math.max(
                    0,
                    Math.min(J.w * t - nn, q.current.x - nn / 2),
                  ),
                  Vn = Math.max(0, Math.min(J.h * t - R, q.current.y - R / 2)),
                  Bn = Math.max(0, Math.floor(on / t)),
                  $u = Math.min(J.w - 1, Math.ceil((on + nn) / t)),
                  bn = Math.max(0, Math.floor(Vn / t)),
                  ru = Math.min(J.h - 1, Math.ceil((Vn + R) / t));
                for (let fn = bn; fn <= ru; fn++)
                  for (let rn = Bn; rn <= $u; rn++) {
                    let Tn = Sr(J, rn, fn);
                    if (Tn === F.THORN && Ml.has(`${rn},${fn}`)) Tn = F.GRASS;
                    if (Tn === F.DOOR && rn === 24 && fn === 41 && $.doorOpen)
                      Tn = F.CAVE;
                    $f(S, Tn, rn * t - on, fn * t - Vn, t, w, rn, fn);
                  }
                let tn = M.current !== null;
                if (!!A.current) {
                  let fn = A.current;
                  ((Kf[fn] || []).forEach((rn) => {
                    if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                      return;
                    i3(
                      S,
                      rn.x * t + t / 2 - on,
                      rn.y * t + t / 2 - Vn,
                      t,
                      $.openedChests.includes(rn.id),
                    );
                  }),
                    (w0[fn] || []).forEach((rn) => {
                      if (rn.kind === "trainer" && $.defeated.includes(rn.id))
                        return;
                      if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                        return;
                      e8(
                        S,
                        rn.x * t + t / 2 - on,
                        rn.y * t + t / 2 - Vn,
                        t,
                        w,
                        rn.kind,
                      );
                    }));
                } else if (!tn)
                  (W8.forEach((rn) => {
                    if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                      return;
                    i3(
                      S,
                      rn.x * t + t / 2 - on,
                      rn.y * t + t / 2 - Vn,
                      t,
                      $.openedChests.includes(rn.id),
                    );
                  }),
                    $.boulders.forEach((rn) => {
                      if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                        return;
                      $f(
                        S,
                        F.BOULDER,
                        rn.x * t - on,
                        rn.y * t - Vn,
                        t,
                        w,
                        rn.x,
                        rn.y,
                      );
                    }),
                    ($.inExpansion ? V8 : Nf).forEach((rn) => {
                      if (rn.kind === "trainer" && $.defeated.includes(rn.id))
                        return;
                      if (rn.id === "ramiro" && !($.items["carta-nautica"] > 0))
                        return;
                      if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                        return;
                      e8(
                        S,
                        rn.x * t + t / 2 - on,
                        rn.y * t + t / 2 - Vn,
                        t,
                        w,
                        rn.kind,
                      );
                    }),
                    U8.forEach((rn) => {
                      if (rn.x < Bn || rn.x > $u || rn.y < bn || rn.y > ru)
                        return;
                      let Tn = rn.x * t + t / 2 - on,
                        pn = rn.y * t + t / 2 - Vn,
                        vu = $.villageSwitches.includes(rn.id);
                      if (
                        ((S.fillStyle = "#6b7280"),
                        S.beginPath(),
                        S.arc(Tn, pn, 11, 0, Math.PI * 2),
                        S.fill(),
                        (S.strokeStyle = "rgba(0,0,0,0.4)"),
                        (S.lineWidth = 2),
                        S.stroke(),
                        (S.fillStyle = vu ? "#fbbf24" : "#374151"),
                        S.beginPath(),
                        S.arc(Tn, pn - 2, 6, 0, Math.PI * 2),
                        S.fill(),
                        vu)
                      )
                        ((S.fillStyle = "rgba(251,191,36,0.35)"),
                          S.beginPath(),
                          S.arc(Tn, pn - 2, 11, 0, Math.PI * 2),
                          S.fill());
                    }));
                else {
                  let fn = bo.x0 * t - on,
                    rn = bo.y0 * t - Vn;
                  ((S.fillStyle = "#8a5a33"),
                    S.fillRect(fn, rn, t * 2, t * 2),
                    (S.fillStyle = "#f8fafc"),
                    S.fillRect(fn + 4, rn + 4, t * 2 - 8, t - 2),
                    (S.fillStyle = "#dc2626"),
                    S.fillRect(fn + 4, rn + t, t * 2 - 8, t - 12),
                    (S.strokeStyle = "rgba(0,0,0,0.35)"),
                    (S.lineWidth = 2),
                    S.strokeRect(fn + 1, rn + 1, t * 2 - 2, t * 2 - 2),
                    y3[M.current].forEach((Tn) => {
                      e8(
                        S,
                        Tn.x * t + t / 2 - on,
                        Tn.y * t + t / 2 - Vn,
                        t,
                        w,
                        Tn.kind,
                      );
                    }));
                }
                let dr =
                  Sr(J, $.px, $.py) === F.WATER || Sr(J, $.px, $.py) === F.DEEP;
                ff(
                  S,
                  q.current.x - on,
                  q.current.y - Vn + (dr ? 6 : 0),
                  34,
                  q.current.dir,
                  vn,
                  w,
                  On[$.affinities[0]].color,
                );
                let $r = n.current.party,
                  Vu = Math.min(3, $r.length),
                  zf = Au.current;
                for (let fn = 0; fn < Vu; fn++) {
                  let rn = zf[fn];
                  So(S, _n($r[fn].sp), rn.x - on, rn.y - Vn, 26, {
                    t: w,
                    fainted: $r[fn].hp <= 0,
                  });
                }
                let Mo = Math.max(0, Math.sin(qn * Math.PI * 2 - Math.PI / 2));
                if (Mo > 0.55)
                  ((S.fillStyle = `rgba(20,20,70,${((Mo - 0.55) * 0.5).toFixed(3)})`),
                    S.fillRect(0, 0, nn, R));
                if (A.current && Qo.some((fn) => fn.id === A.current))
                  if (jr($, "Faísca") || jr($, "Brasa")) {
                    let fn = q.current.x - on,
                      rn = q.current.y - Vn,
                      Tn = 5 * t,
                      pn = Math.hypot(nn, R),
                      vu = S.createRadialGradient(fn, rn, Tn, fn, rn, pn);
                    (vu.addColorStop(0, "rgba(0,0,0,0)"),
                      vu.addColorStop(Tn / pn, "rgba(0,0,0,0)"),
                      vu.addColorStop(1, "rgba(0,0,0,0.2)"),
                      (S.fillStyle = vu),
                      S.fillRect(0, 0, nn, R));
                  } else
                    ((S.fillStyle = "rgba(0,0,0,0.2)"),
                      S.fillRect(0, 0, nn, R));
              };
            return (
              (p = requestAnimationFrame(Fu)),
              () => {
                (cancelAnimationFrame(p),
                  window.removeEventListener("resize", Yn),
                  window.removeEventListener("keydown", gu),
                  window.removeEventListener("keyup", wu));
              }
            );
          }, [Ml, Gn, Mn, e, W, $.inExpansion]),
          $n.useEffect(() => {
            if (!mu.current) {
              if (
                ((mu.current = !0), (or.current = jQ($)), o && !$.starterGiven)
              ) {
                let p = Nf.find((x) => x.id === "verdelho");
                setTimeout(() => d0(p), 600);
              } else if (l) setTimeout(() => hn("Enfermeira Lia", [l]), 400);
              return;
            }
            let g = jQ($);
            if (
              (g
                .filter((p) => !(or.current ?? []).includes(p))
                .forEach((p) => {
                  let x = Jf[p];
                  yn(
                    `Habilidade desbloqueada: ${x.name}! Volte para áreas anteriores.`,
                  );
                }),
              (or.current = g),
              gn((p) => p + 1),
              l)
            )
              hn("Enfermeira Lia", [l]);
          }, [r]),
          $n.useEffect(() => {
            let g = EQ($);
            if (g.length > 0)
              (ml(1, $),
                hn(
                  "Missões",
                  g.map((S) => `${S.nome}: ${S.reward}`),
                ));
          }, [r]),
          $n.useEffect(() => {
            if (!f) return;
            try {
              let g = f,
                S,
                p;
              if (typeof g.prePx === "number" && typeof g.prePy === "number")
                ((S = g.prePx), (p = g.prePy));
              else if (f.px > 200 || f.py > 200) ((S = f.px), (p = f.py));
              else ((S = (f.px + 0.5) * t), (p = (f.py + 0.5) * t));
              let x = Math.floor(S / t),
                Xn = Math.floor(p / t);
              if (il(x, Xn)) {
                let qn = new Set([`${x},${Xn}`]),
                  Yn = [[x, Xn]],
                  gu = null;
                while (Yn.length && !gu && qn.size < 500) {
                  let [wu, Hu] = Yn.shift(),
                    Fu = [
                      [1, 0],
                      [-1, 0],
                      [0, 1],
                      [0, -1],
                    ];
                  for (let [dn, X] of Fu) {
                    let w = wu + dn,
                      j = Hu + X,
                      y = `${w},${j}`;
                    if (qn.has(y)) continue;
                    if ((qn.add(y), w < 0 || j < 0 || w >= J.w || j >= J.h))
                      continue;
                    if (!il(w, j)) {
                      gu = [w, j];
                      break;
                    }
                    Yn.push([w, j]);
                  }
                }
                if (gu)
                  ((x = gu[0]),
                    (Xn = gu[1]),
                    (S = (x + 0.5) * t),
                    (p = (Xn + 0.5) * t));
              }
              ((q.current.x = S),
                (q.current.y = p),
                (q.current.dir = f.dir),
                Vr());
            } catch {}
            ((L.current = { up: !1, down: !1, left: !1, right: !1 }),
              z(),
              (en.current = null),
              yr(null),
              Pn(!1));
          }, []),
          $n.useEffect(() => {
            let g = setInterval(() => {
              let S = Date.now(),
                p = 0;
              if (
                ($.box.forEach((x) => {
                  if (x.healingUntil && x.healingUntil <= S)
                    ((x.hp = zn(x.sp, x.level).maxHp),
                      delete x.healingUntil,
                      p++);
                }),
                p > 0)
              )
                (yn(
                  p > 1
                    ? `Seus ${p} Pats se curaram! ✨`
                    : "Seu Pat se curou! ✨",
                ),
                  gn((x) => x + 1));
            }, 1000);
            return () => clearInterval(g);
          }, []),
          O(gl, {
            children: [
              N("style", {
                children:
                  "html,body,#root{margin:0;padding:0;height:100dvh;overflow:hidden;background:#000}",
              }),
              N("div", {
                className: "w-full select-none",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  height: "100dvh",
                  background: "#000",
                  paddingTop: "var(--safe-area-inset-top)",
                  boxSizing: "border-box",
                },
                children: O("div", {
                  style: {
                    position: "relative",
                    flex: 1,
                    minHeight: 0,
                    overflow: "hidden",
                  },
                  children: [
                    N("canvas", {
                      ref: _,
                      style: {
                        position: "absolute",
                        inset: 0,
                        width: "100% !important",
                        height: "100% !important",
                        objectFit: "cover",
                        imageRendering: "pixelated",
                        display: "block",
                      },
                    }),
                    O("div", {
                      className: "absolute",
                      style: {
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        height: "auto",
                        maxHeight: 90,
                        background:
                          "linear-gradient(rgba(0,0,0,0.7), transparent)",
                        pointerEvents: "none",
                      },
                      children: [
                        O("div", {
                          className:
                            "flex items-start justify-between px-2 pt-2",
                          children: [
                            O("div", {
                              style: { pointerEvents: "auto" },
                              children: [
                                O("div", {
                                  className:
                                    "bg-black/55 text-white rounded-2xl px-3 py-1.5 backdrop-blur-sm",
                                  children: [
                                    N("div", {
                                      className:
                                        "font-extrabold text-sm leading-tight",
                                      children: sn.loc || "Vila Vínculo",
                                    }),
                                    N("div", {
                                      className:
                                        "text-[10px] opacity-80 leading-tight",
                                      children: sn.zone,
                                    }),
                                  ],
                                }),
                                N("div", {
                                  className: "flex gap-1.5 mt-1.5",
                                  children: $.party.slice(0, 3).map((g) => {
                                    let S = zn(g.sp, g.level),
                                      p = Math.max(0, (g.hp / S.maxHp) * 100);
                                    return O(
                                      "div",
                                      {
                                        className:
                                          "bg-black/55 rounded-xl p-1 backdrop-blur-sm w-[52px]",
                                        children: [
                                          N(In, {
                                            sp: g.sp,
                                            size: 40,
                                            fainted: g.hp <= 0,
                                          }),
                                          N("div", {
                                            className:
                                              "h-1 rounded-full bg-white/25 overflow-hidden",
                                            children: N("div", {
                                              className: `h-full ${p > 50 ? "bg-green-400" : p > 20 ? "bg-yellow-400" : "bg-red-400"}`,
                                              style: { width: `${p}%` },
                                            }),
                                          }),
                                          O("div", {
                                            className:
                                              "text-[9px] text-white font-bold text-center",
                                            children: ["Nv", g.level],
                                          }),
                                        ],
                                      },
                                      g.uid,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            O("div", {
                              className: "flex flex-col items-end gap-1.5",
                              style: { pointerEvents: "auto" },
                              children: [
                                N("button", {
                                  onClick: () => Pn(!0),
                                  className:
                                    "bg-black/55 text-white rounded-2xl p-2.5 backdrop-blur-sm active:scale-90",
                                  children: N(t1, { size: 20 }),
                                }),
                                O("div", {
                                  className:
                                    "bg-black/55 rounded-2xl px-2.5 py-1.5 backdrop-blur-sm flex items-center gap-1.5",
                                  children: [
                                    N("span", {
                                      className:
                                        "text-[10px] text-white/80 font-bold",
                                      children: "Vínculo",
                                    }),
                                    $.affinities.map((g) =>
                                      N(
                                        "span",
                                        {
                                          className:
                                            "w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold border-2 border-white/60",
                                          style: { background: On[g].color },
                                          children: g[0],
                                        },
                                        g,
                                      ),
                                    ),
                                  ],
                                }),
                                O("div", {
                                  className:
                                    "bg-black/55 rounded-2xl px-2.5 py-1.5 backdrop-blur-sm flex items-center gap-1.5",
                                  children: [
                                    N("span", {
                                      className: "text-sm leading-none",
                                      children: "\uD83E\uDE99",
                                    }),
                                    N("span", {
                                      className:
                                        "text-[11px] text-amber-200 font-extrabold",
                                      children: $.ecos ?? 100,
                                    }),
                                  ],
                                }),
                                $.equippedRelic &&
                                  O("button", {
                                    onClick: () => {
                                      (Ul("relics"), fl(!0));
                                    },
                                    "aria-label": `Relíquia equipada: ${lr[$.equippedRelic].name}. Abrir relíquias`,
                                    className:
                                      "bg-black/55 rounded-2xl px-2.5 py-1.5 backdrop-blur-sm flex items-center gap-1.5 border-2 border-amber-300 active:scale-90 transition",
                                    title: `Relíquia equipada: ${lr[$.equippedRelic].name} — toque para abrir as relíquias`,
                                    children: [
                                      N("span", {
                                        className: "text-lg leading-none",
                                        children: lr[$.equippedRelic].emoji,
                                      }),
                                      N("span", {
                                        className:
                                          "text-[10px] text-amber-200 font-extrabold leading-tight",
                                        children: lr[$.equippedRelic].name,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        N("button", {
                          onClick: () => {
                            (Ul("items"), fl(!0));
                          },
                          "aria-label": "Abrir mochila",
                          style: {
                            position: "absolute",
                            top: 12,
                            right: 64,
                            width: 44,
                            height: 44,
                            zIndex: 50,
                            pointerEvents: "auto",
                          },
                          className:
                            "rounded-2xl bg-amber-400 text-2xl flex items-center justify-center shadow-xl border-b-4 border-amber-600 active:scale-90 active:border-b-0 transition",
                          children: "\uD83C\uDF92",
                        }),
                      ],
                    }),
                    N("div", {
                      className:
                        "absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none w-[92%] max-w-md z-30",
                      children: Rn.map((g) =>
                        N(
                          "div",
                          {
                            className:
                              "bg-amber-400 text-amber-950 font-extrabold text-sm px-4 py-2 rounded-2xl shadow-xl text-center animate-bounce",
                            children: g.text,
                          },
                          g.id,
                        ),
                      ),
                    }),
                    C &&
                      !Mn &&
                      !Gn &&
                      N("div", {
                        className:
                          "absolute left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white font-extrabold text-sm px-4 py-2 rounded-2xl border-2 border-amber-300 animate-pulse whitespace-nowrap",
                        style: { bottom: 112 },
                        children: C,
                      }),
                    N("div", {
                      className:
                        "absolute inset-0 bg-black z-40 pointer-events-none transition-opacity duration-300",
                      style: { opacity: K ? 1 : 0 },
                    }),
                    !Gn &&
                      O("div", {
                        className: "absolute",
                        style: {
                          bottom: 16,
                          left: 16,
                          right: 16,
                          zIndex: 10,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          pointerEvents: Mn ? "none" : "auto",
                          opacity: Mn ? 0.35 : 1,
                        },
                        children: [
                          N("div", {
                            ref: G,
                            onPointerDown: a,
                            onPointerMove: un,
                            onPointerUp: mn,
                            onPointerCancel: mn,
                            onContextMenu: (g) => g.preventDefault(),
                            className:
                              "rounded-full bg-white/15 border-2 border-white/30 backdrop-blur-sm relative touch-none select-none shadow-xl",
                            style: {
                              width: 128,
                              height: 128,
                              touchAction: "none",
                              userSelect: "none",
                            },
                            children: N("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center pointer-events-none",
                              children: N("div", {
                                ref: d,
                                className:
                                  "w-14 h-14 rounded-full bg-white/60 border-2 border-white/70 shadow-xl",
                                style: { transform: "translate(0px, 0px)" },
                              }),
                            }),
                          }),
                          N("button", {
                            onPointerDown: (g) => {
                              (g.preventDefault(), g.stopPropagation(), y0());
                            },
                            className:
                              "w-20 h-20 rounded-full bg-amber-400 border-b-8 border-amber-600 text-amber-950 font-extrabold text-2xl shadow-xl active:scale-90 active:border-b-0",
                            children: "A",
                          }),
                        ],
                      }),
                    Mn &&
                      N("div", {
                        className:
                          "absolute left-1/2 -translate-x-1/2 w-[92%] max-w-md",
                        style: { top: 80, zIndex: 100 },
                        children: O("div", {
                          className:
                            "bg-[#fffbe8] border-4 border-[#8a5a33] rounded-2xl p-4 shadow-2xl",
                          children: [
                            O("div", {
                              className:
                                "flex items-start justify-between gap-2",
                              children: [
                                N("div", {
                                  className:
                                    "font-extrabold text-amber-700 text-sm",
                                  children: Mn.name,
                                }),
                                N("button", {
                                  onClick: mf,
                                  "aria-label": "Fechar diálogo",
                                  className:
                                    "w-8 h-8 rounded-xl bg-red-500 text-white flex items-center justify-center active:scale-90 shrink-0",
                                  children: N(Mu, { size: 16, strokeWidth: 3 }),
                                }),
                              ],
                            }),
                            N("p", {
                              className:
                                "text-slate-800 font-bold text-[15px] leading-snug mt-1 min-h-[64px]",
                              children: Mn.lines[Mn.i],
                            }),
                            O("div", {
                              className:
                                "flex items-center justify-between mt-2",
                              children: [
                                O("span", {
                                  className:
                                    "text-[11px] text-slate-400 font-bold",
                                  children: [Mn.i + 1, "/", Mn.lines.length],
                                }),
                                N("button", {
                                  onClick: Yf,
                                  className:
                                    "bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-sm px-5 py-2.5 rounded-2xl shadow border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition",
                                  children:
                                    Mn.i + 1 < Mn.lines.length
                                      ? "Avançar ▸"
                                      : "Fechar ✕",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    Gn &&
                      O("div", {
                        className:
                          "absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col p-3",
                        children: [
                          O("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              O("h2", {
                                className: "text-white font-extrabold text-xl",
                                children: ["Mochila de ", $.playerName],
                              }),
                              N("button", {
                                onClick: () => Pn(!1),
                                className:
                                  "bg-white/20 text-white rounded-xl p-2 active:scale-90",
                                children: N(Mu, { size: 20 }),
                              }),
                            ],
                          }),
                          O("div", {
                            className: "flex gap-1.5 mb-2 overflow-x-auto",
                            children: [
                              N(Cf, {
                                active: uu === "time",
                                onClick: () => Nu("time"),
                                icon: N(Pr, { size: 15 }),
                                label: "Time",
                              }),
                              N(Cf, {
                                active: uu === "dex",
                                onClick: () => Nu("dex"),
                                icon: N(h1, { size: 15 }),
                                label: "Dex",
                              }),
                              N(Cf, {
                                active: uu === "mapa",
                                onClick: () => Nu("mapa"),
                                icon: N(R1, { size: 15 }),
                                label: "Mapa",
                              }),
                              N(Cf, {
                                active: uu === "vinculo",
                                onClick: () => Nu("vinculo"),
                                icon: N(Nr, { size: 15 }),
                                label: "Vínculo",
                              }),
                              N(Cf, {
                                active: uu === "missao",
                                onClick: () => Nu("missao"),
                                icon: N(rf, { size: 15 }),
                                label: "Missões",
                              }),
                              N("button", {
                                onClick: () => yu(!0),
                                className:
                                  "flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-extrabold text-sm whitespace-nowrap bg-white/15 text-white active:scale-95 shrink-0",
                                children: "Tipos",
                              }),
                              N("button", {
                                onClick: () => Bu(!0),
                                className:
                                  "flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-extrabold text-sm whitespace-nowrap bg-white/15 text-white active:scale-95 shrink-0",
                                children: "\uD83D\uDCE6 Baú",
                              }),
                            ],
                          }),
                          O("div", {
                            className:
                              "flex-1 overflow-y-auto bg-[#fffbe8] rounded-2xl p-3",
                            children: [
                              uu === "time" &&
                                N(Ve, {
                                  gs: n,
                                  onChange: () => gn((g) => g + 1),
                                }),
                              uu === "dex" &&
                                N(Ue, { gs: n, sel: wn, setSel: tu }),
                              uu === "mapa" && N(Me, { gs: n }),
                              uu === "vinculo" && N(He, { gs: n }),
                              uu === "missao" && N(De, { gs: n }),
                            ],
                          }),
                        ],
                      }),
                    Lu &&
                      N(Vf, {
                        gs: n,
                        onClose: () => fl(!1),
                        onToast: yn,
                        onRelicChange: () => gn((g) => g + 1),
                        initialTab: Xu,
                      }),
                    s &&
                      N(b3, {
                        gs: n,
                        merchant: Kn ?? K8.vila,
                        onClose: () => ln(!1),
                        onToast: yn,
                        onChange: () => gn((g) => g + 1),
                      }),
                    Hn && N(p3, { onClose: () => yu(!1) }),
                    Tu &&
                      N(Ke, {
                        gs: n,
                        onClose: () => Bu(!1),
                        onChange: () => gn((g) => g + 1),
                      }),
                    pu &&
                      N(Je, { gs: n, onClose: () => Ju(!1), onConfirm: T8 }),
                    En &&
                      N("div", {
                        className:
                          "absolute inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
                        children: O("div", {
                          className:
                            "bg-[#fffbe8] rounded-3xl border-4 border-amber-300 shadow-2xl w-full max-w-md max-h-[85%] flex flex-col overflow-hidden",
                          children: [
                            O("div", {
                              className:
                                "flex items-center justify-between p-4 pb-2",
                              children: [
                                N("h2", {
                                  className:
                                    "text-slate-800 font-extrabold text-xl",
                                  children: "\uD83C\uDFAA Feira das Marcas",
                                }),
                                N("button", {
                                  onClick: () => Dn(!1),
                                  "aria-label": "Fechar feira",
                                  className:
                                    "w-10 h-10 rounded-2xl bg-red-500 text-white flex items-center justify-center active:scale-90 shrink-0",
                                  children: N(Mu, { size: 18, strokeWidth: 3 }),
                                }),
                              ],
                            }),
                            O("p", {
                              className:
                                "px-4 pb-2 text-slate-600 font-bold text-sm",
                              children: [
                                "Feirante Zé: pets de colecionador! ",
                                O("span", {
                                  className: "text-amber-600 font-extrabold",
                                  children: ["\uD83E\uDE99", $.ecos ?? 100],
                                }),
                              ],
                            }),
                            N("div", {
                              className:
                                "flex-1 overflow-y-auto px-4 pb-4 grid grid-cols-2 gap-2",
                              children: vl.map((g) => {
                                let S = _n(g),
                                  p = $.dexCaught.includes(g);
                                return O(
                                  "div",
                                  {
                                    className:
                                      "bg-white rounded-2xl p-3 border-2 border-slate-200 flex flex-col items-center gap-1.5",
                                    children: [
                                      N(In, { sp: g, size: 56 }),
                                      N("div", {
                                        className:
                                          "font-extrabold text-slate-800 text-sm text-center leading-tight",
                                        children: S.name,
                                      }),
                                      N("div", {
                                        className:
                                          "flex gap-1 flex-wrap justify-center",
                                        children: S.types.map((x) =>
                                          N(
                                            "span",
                                            {
                                              className:
                                                "text-[10px] font-bold px-1.5 rounded-full text-white",
                                              style: {
                                                background: On[x].color,
                                              },
                                              children: x,
                                            },
                                            x,
                                          ),
                                        ),
                                      }),
                                      O("div", {
                                        className:
                                          "text-amber-600 font-extrabold text-sm",
                                        children: ["\uD83E\uDE99 ", h0],
                                      }),
                                      p
                                        ? N("span", {
                                            className:
                                              "px-4 py-2 rounded-2xl bg-slate-200 text-slate-500 font-extrabold text-sm",
                                            children: "Esgotado",
                                          })
                                        : N("button", {
                                            onClick: () => G8(g),
                                            className:
                                              "px-4 py-2 rounded-2xl bg-amber-400 text-amber-950 font-extrabold text-sm shadow border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition",
                                            children: "Comprar",
                                          }),
                                    ],
                                  },
                                  g,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function Cf({ active: n, onClick: u, icon: r, label: l }) {
        return O("button", {
          onClick: u,
          className: `flex items-center gap-1.5 px-3.5 py-2 rounded-2xl font-extrabold text-sm whitespace-nowrap ${n ? "bg-amber-400 text-amber-950" : "bg-white/15 text-white"}`,
          children: [r, l],
        });
      }
      function Ke({ gs: n, onClose: u, onChange: r }) {
        let l = n.current,
          [o, f] = $n.useState(Date.now());
        $n.useEffect(() => {
          let Z = setInterval(() => f(Date.now()), 1000);
          return () => clearInterval(Z);
        }, []);
        let $ = (Z) => {
            let J = l.party.findIndex((Q) => Q.uid === Z);
            if (J < 0 || l.party.length <= 1) return;
            let [e] = l.party.splice(J, 1);
            (l.box.push(e), r());
          },
          _ = (Z) => {
            let J = l.box.findIndex((Q) => Q.uid === Z);
            if (J < 0 || l.party.length >= 3) return;
            let [e] = l.box.splice(J, 1);
            (l.party.push(e), r());
          },
          v = (Z, J, e, Q, M, H) => {
            let K = _n(Z.sp),
              V = zn(Z.sp, Z.level),
              C = Math.max(0, (Z.hp / V.maxHp) * 100);
            return O(
              "div",
              {
                className:
                  "bg-white rounded-2xl p-3 border-2 border-slate-200 flex items-center gap-3",
                children: [
                  N(In, { sp: Z.sp, size: 56, fainted: Z.hp <= 0 }),
                  O("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      O("div", {
                        className:
                          "font-extrabold text-slate-800 text-sm truncate",
                        children: [
                          K.name,
                          " ",
                          O("span", {
                            className: "text-xs text-slate-500",
                            children: ["Nv ", Z.level],
                          }),
                        ],
                      }),
                      N("div", {
                        className: "flex gap-1 my-0.5 flex-wrap",
                        children: K.types.map((D) =>
                          N(
                            "span",
                            {
                              className:
                                "text-[10px] font-bold px-1.5 rounded-full text-white",
                              style: { background: On[D].color },
                              children: D,
                            },
                            D,
                          ),
                        ),
                      }),
                      N("div", {
                        className:
                          "h-2 rounded-full bg-black/10 overflow-hidden",
                        children: N("div", {
                          className: `h-full ${C > 50 ? "bg-green-500" : C > 20 ? "bg-yellow-500" : "bg-red-500"}`,
                          style: { width: `${C}%` },
                        }),
                      }),
                      O("div", {
                        className: "text-[11px] font-bold text-slate-500",
                        children: [Z.hp, "/", V.maxHp, " HP"],
                      }),
                      H,
                    ],
                  }),
                  N("button", {
                    onClick: J,
                    disabled: Q,
                    title: M,
                    className:
                      "shrink-0 min-w-[92px] min-h-[52px] px-4 rounded-2xl bg-amber-400 disabled:opacity-40 disabled:grayscale text-amber-950 font-extrabold text-sm shadow border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition",
                    children: e,
                  }),
                ],
              },
              Z.uid,
            );
          };
        return N("div", {
          className:
            "absolute inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
          children: O("div", {
            className:
              "bg-[#fffbe8] rounded-3xl border-4 border-amber-300 shadow-2xl w-full max-w-md max-h-[85%] flex flex-col overflow-hidden",
            children: [
              O("div", {
                className: "flex items-center justify-between p-4 pb-2",
                children: [
                  N("h2", {
                    className: "text-slate-800 font-extrabold text-xl",
                    children: "\uD83D\uDCE6 Baú da Vila",
                  }),
                  N("button", {
                    onClick: u,
                    "aria-label": "Fechar baú",
                    className:
                      "w-10 h-10 rounded-2xl bg-red-500 text-white flex items-center justify-center active:scale-90 shrink-0",
                    children: N(Mu, { size: 18, strokeWidth: 3 }),
                  }),
                ],
              }),
              O("div", {
                className:
                  "flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-4",
                children: [
                  O("section", {
                    children: [
                      N("h3", {
                        className: "font-extrabold text-slate-700 text-sm mb-2",
                        children: "Time Ativo (máx 3)",
                      }),
                      O("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          l.party.map((Z) =>
                            v(
                              Z,
                              () => $(Z.uid),
                              "→ Baú",
                              l.party.length <= 1,
                              "O time precisa de ao menos 1 Pat!",
                            ),
                          ),
                          l.party.length === 0 &&
                            N("p", {
                              className:
                                "text-center text-slate-400 font-bold text-sm py-4",
                              children: "Sem Pats no time.",
                            }),
                        ],
                      }),
                    ],
                  }),
                  O("section", {
                    children: [
                      N("h3", {
                        className: "font-extrabold text-slate-700 text-sm mb-2",
                        children: "Baú",
                      }),
                      O("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          l.box.length === 0 &&
                            O("p", {
                              className:
                                "text-center text-slate-400 font-bold text-sm py-6",
                              children: [
                                "O baú está vazio.",
                                N("br", {}),
                                "Pats sobressalentes ficam guardados aqui.",
                              ],
                            }),
                          l.box.map((Z) => {
                            let J = l.party.length >= 3,
                              e = Z.hp <= 0,
                              Q = !!Z.healingUntil && Z.healingUntil > o,
                              M = zn(Z.sp, Z.level),
                              K =
                                e || Q
                                  ? O("button", {
                                      onClick: () => {
                                        if (l.items.pocao <= 0) return;
                                        if (Q) {
                                          (l.items.pocao--,
                                            (Z.hp = M.maxHp),
                                            delete Z.healingUntil,
                                            r());
                                          return;
                                        }
                                        if (Z.hp > 0) return;
                                        (l.items.pocao--,
                                          (Z.hp = Math.min(M.maxHp, 50)),
                                          r());
                                      },
                                      disabled: l.items.pocao <= 0,
                                      title:
                                        l.items.pocao <= 0
                                          ? "Sem poções!"
                                          : Q
                                            ? "Usa 1 poção para curar na hora (pula a espera)"
                                            : "Usa 1 poção para curar 50 HP",
                                      className:
                                        "mt-1 px-3 py-1.5 rounded-xl bg-emerald-500 disabled:opacity-40 disabled:grayscale text-white font-extrabold text-xs shadow border-b-2 border-emerald-700 active:scale-95 active:border-b-0 transition",
                                      children: [
                                        "\uD83D\uDC8A Curar (Poção: ",
                                        l.items.pocao,
                                        ")",
                                      ],
                                    })
                                  : void 0,
                              V = Q
                                ? (() => {
                                    let D = Math.ceil(
                                        (Z.healingUntil - o) / 1000,
                                      ),
                                      W = Math.floor(D / 60),
                                      B = D % 60;
                                    return O("div", {
                                      className:
                                        "text-[11px] font-extrabold text-emerald-600 mt-0.5",
                                      children: [
                                        "\uD83D\uDC9A Curando... ",
                                        W,
                                        ":",
                                        String(B).padStart(2, "0"),
                                      ],
                                    });
                                  })()
                                : void 0;
                            return v(
                              Z,
                              () => _(Z.uid),
                              "→ Time",
                              J || Q,
                              Q
                                ? "Seu Pat está se curando... aguarde ou use \uD83D\uDC8A Curar!"
                                : J
                                  ? "Time cheio!"
                                  : void 0,
                              O(gl, { children: [V, K] }),
                            );
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Je({ gs: n, onClose: u, onConfirm: r }) {
        let l = n.current,
          [o, f] = $n.useState([]),
          $ = l.nurseFreeUsed ? 50 : 0,
          _ = (v) => {
            f((Z) =>
              Z.includes(v)
                ? Z.filter((J) => J !== v)
                : Z.length < 2
                  ? [...Z, v]
                  : [Z[1], v],
            );
          };
        return N("div", {
          className:
            "absolute inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
          children: O("div", {
            className:
              "bg-[#fffbe8] rounded-3xl border-4 border-amber-300 shadow-2xl w-full max-w-md max-h-[85%] flex flex-col overflow-hidden",
            children: [
              O("div", {
                className: "flex items-center justify-between p-4 pb-2",
                children: [
                  N("h2", {
                    className: "text-slate-800 font-extrabold text-xl",
                    children: "\uD83D\uDC9A Enfermaria da Lia",
                  }),
                  N("button", {
                    onClick: u,
                    "aria-label": "Fechar enfermaria",
                    className:
                      "w-10 h-10 rounded-2xl bg-red-500 text-white flex items-center justify-center active:scale-90 shrink-0",
                    children: N(Mu, { size: 18, strokeWidth: 3 }),
                  }),
                ],
              }),
              O("p", {
                className: "px-4 pb-2 text-slate-600 font-bold text-sm",
                children: [
                  "Escolha de 1 a 2 pets do time para curar. ",
                  $ === 0
                    ? "Sua primeira cura é GRÁTIS!"
                    : "A cura custa 50 ecos (cooldown de 5 min).",
                ],
              }),
              N("div", {
                className:
                  "flex-1 overflow-y-auto px-4 pb-3 flex flex-col gap-2",
                children: l.party.map((v) => {
                  let Z = _n(v.sp),
                    J = zn(v.sp, v.level),
                    e = Math.max(0, (v.hp / J.maxHp) * 100),
                    Q = o.includes(v.uid);
                  return O(
                    "div",
                    {
                      className: `bg-white rounded-2xl p-3 border-4 flex items-center gap-3 ${Q ? "border-emerald-400" : "border-slate-200"}`,
                      children: [
                        N(In, { sp: v.sp, size: 56, fainted: v.hp <= 0 }),
                        O("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            O("div", {
                              className:
                                "font-extrabold text-slate-800 text-sm truncate",
                              children: [
                                Z.name,
                                " ",
                                O("span", {
                                  className: "text-xs text-slate-500",
                                  children: ["Nv ", v.level],
                                }),
                              ],
                            }),
                            N("div", {
                              className:
                                "h-2 rounded-full bg-black/10 overflow-hidden mt-1",
                              children: N("div", {
                                className: `h-full ${e > 50 ? "bg-green-500" : e > 20 ? "bg-yellow-500" : "bg-red-500"}`,
                                style: { width: `${e}%` },
                              }),
                            }),
                            O("div", {
                              className: "text-[11px] font-bold text-slate-500",
                              children: [v.hp, "/", J.maxHp, " HP"],
                            }),
                          ],
                        }),
                        N("button", {
                          onClick: () => _(v.uid),
                          className: `shrink-0 min-w-[92px] min-h-[52px] px-4 rounded-2xl font-extrabold text-sm shadow border-b-4 active:scale-95 active:border-b-0 transition ${Q ? "bg-emerald-500 text-white border-emerald-700" : "bg-amber-400 text-amber-950 border-amber-600"}`,
                          children: Q ? "✓ Curar" : "Marcar",
                        }),
                      ],
                    },
                    v.uid,
                  );
                }),
              }),
              N("div", {
                className: "p-4 pt-2",
                children: O("button", {
                  disabled: o.length === 0,
                  onClick: () => r(o),
                  className:
                    "w-full bg-emerald-500 disabled:opacity-40 disabled:grayscale text-white font-black text-base px-6 py-3.5 rounded-2xl shadow-lg border-b-4 border-emerald-700 active:scale-95 active:border-b-0 transition",
                  children: [
                    "Curar ",
                    o.length,
                    " pet",
                    o.length === 1 ? "" : "s",
                    "? Custo: ",
                    $ === 0 ? "GRÁTIS" : "50 ecos",
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function ee({ from: n, to: u, onClose: r }) {
        let [l, o] = $n.useState("evolving");
        return (
          $n.useEffect(() => {
            try {
              kQ();
            } catch {}
            let f = setTimeout(() => o("done"), 1800);
            return () => clearTimeout(f);
          }, []),
          O("div", {
            className:
              "absolute inset-0 z-[70] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center",
            children: [
              O("div", {
                className: "relative",
                children: [
                  N("div", {
                    className:
                      "absolute inset-0 rounded-full bg-amber-300/40 blur-2xl animate-ping",
                  }),
                  N("div", {
                    className: l === "evolving" ? "animate-pulse" : "",
                    children: N(In, {
                      sp: l === "evolving" ? n : u,
                      size: 170,
                    }),
                  }),
                ],
              }),
              N("h2", {
                className:
                  "text-white font-extrabold text-2xl mt-6 leading-snug",
                children:
                  l === "evolving"
                    ? `O quê?! ${_n(n).name} está evoluindo!`
                    : `\uD83C\uDF89 ${_n(n).name} evoluiu para ${_n(u).name}!`,
              }),
              l === "done" &&
                N("button", {
                  onClick: r,
                  className:
                    "mt-6 px-10 py-3 rounded-2xl bg-amber-400 text-amber-950 font-extrabold text-lg active:scale-95 shadow-lg",
                  children: "Incrível!",
                }),
            ],
          })
        );
      }
      function Ve({ gs: n, onChange: u }) {
        let r = n.current,
          [l, o] = $n.useState(null),
          f = async ($, _) => {
            let v = r.party[$],
              Z = zn(v.sp, v.level);
            if (_ === "pocao") {
              if (r.items.pocao <= 0 || v.hp <= 0 || v.hp >= Z.maxHp) return;
              (r.items.pocao--, (v.hp = Math.min(Z.maxHp, v.hp + 50)));
            } else {
              if (r.items.doce <= 0) return;
              (r.items.doce--, v.level++);
              let J = H8(v.sp, z0(r));
              if (
                J &&
                ((_n(v.sp).stage === 0 && v.level >= 12) ||
                  (_n(v.sp).stage === 1 && v.level >= 24))
              ) {
                let e = v.sp;
                v.sp = J;
                let Q = zn(J, v.level);
                ((v.hp = Q.maxHp),
                  rl(r, J),
                  Yl(r, J),
                  r.evolvedTotal++,
                  o({ from: e, to: J }));
              } else {
                let e = zn(v.sp, v.level);
                v.hp = e.maxHp;
              }
            }
            u();
          };
        return O("div", {
          className: "relative flex flex-col gap-2",
          children: [
            l && N(ee, { from: l.from, to: l.to, onClose: () => o(null) }),
            r.party.map(($, _) => {
              let v = _n($.sp),
                Z = zn($.sp, $.level),
                J = Math.max(0, ($.hp / Z.maxHp) * 100);
              return O(
                "div",
                {
                  className:
                    "bg-white rounded-2xl p-2.5 border-2 border-amber-100 flex gap-2.5 items-center",
                  children: [
                    N(In, { sp: $.sp, size: 64, fainted: $.hp <= 0 }),
                    O("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        O("div", {
                          className: "font-extrabold text-slate-800",
                          children: [
                            v.name,
                            " ",
                            O("span", {
                              className: "text-xs text-slate-500",
                              children: ["Nv ", $.level],
                            }),
                          ],
                        }),
                        N("div", {
                          className: "flex gap-1 my-0.5",
                          children: v.types.map((e) =>
                            N(
                              "span",
                              {
                                className:
                                  "text-[10px] font-bold px-1.5 rounded-full text-white",
                                style: { background: On[e].color },
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                        N("div", {
                          className:
                            "h-2.5 rounded-full bg-black/15 overflow-hidden",
                          children: N("div", {
                            className: `h-full ${J > 50 ? "bg-green-500" : J > 20 ? "bg-yellow-500" : "bg-red-500"}`,
                            style: { width: `${J}%` },
                          }),
                        }),
                        O("div", {
                          className: "text-[11px] font-bold text-slate-500",
                          children: [
                            $.hp,
                            "/",
                            Z.maxHp,
                            " HP • ATK ",
                            Z.atk,
                            " DEF ",
                            Z.def,
                            " VEL ",
                            Z.vel,
                          ],
                        }),
                        O("div", {
                          className: "text-[11px] text-slate-500 font-bold",
                          children: ["XP ", $.xp, "/", Io($.level)],
                        }),
                        O("div", {
                          className:
                            "mt-1 rounded-xl bg-purple-50 border border-purple-200 px-2 py-1.5",
                          children: [
                            N("div", {
                              className:
                                "text-[10px] font-extrabold text-purple-700 tracking-wide",
                              children: "✨ AFINIDADES",
                            }),
                            ($.afinidades ?? []).length > 0
                              ? N("ul", {
                                  className: "mt-0.5 space-y-0.5",
                                  children: ($.afinidades ?? []).map((e) =>
                                    O(
                                      "li",
                                      {
                                        className:
                                          "text-[11px] font-bold text-slate-700 leading-tight",
                                        children: [
                                          nl[e]?.nome ?? e,
                                          O("span", {
                                            className:
                                              "font-bold text-slate-500",
                                            children: [" — ", nl[e]?.descricao],
                                          }),
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                })
                              : N("div", {
                                  className:
                                    "text-[11px] font-bold text-slate-400",
                                  children: "Nenhuma",
                                }),
                          ],
                        }),
                      ],
                    }),
                    O("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        N("button", {
                          onClick: () => f(_, "pocao"),
                          disabled: r.items.pocao <= 0,
                          className:
                            "bg-green-500 disabled:opacity-40 text-white rounded-xl p-1.5 active:scale-90",
                          title: "Poção",
                          children: N(Fl, { size: 16 }),
                        }),
                        N("button", {
                          onClick: () => f(_, "doce"),
                          disabled: r.items.doce <= 0,
                          className:
                            "bg-purple-500 disabled:opacity-40 text-white rounded-xl p-1.5 active:scale-90",
                          title: "Doce",
                          children: N(d1, { size: 16 }),
                        }),
                      ],
                    }),
                  ],
                },
                $.uid,
              );
            }),
            r.party.length === 0 &&
              N("p", {
                className: "text-center text-slate-500 font-bold py-8",
                children: "Fale com o Prof. Verdelho na Vila!",
              }),
          ],
        });
      }
      function We({ hyb: n, size: u = 56, silhouette: r }) {
        let l = $n.useRef(null);
        return (
          $n.useEffect(() => {
            let o = l.current;
            if (!o) return;
            let f = o.getContext("2d");
            if (!f) return;
            let $ = 2;
            ((o.width = u * $),
              (o.height = u * $),
              f.setTransform($, 0, 0, $, 0, 0),
              f.clearRect(0, 0, u, u));
            let _ = Object.values(nu).find((v) => v.stage === 0);
            So(
              f,
              {
                ..._,
                id: n.id,
                name: n.name,
                types: [...n.types],
                feature: n.sprite,
              },
              u / 2,
              u / 2,
              u,
              { t: 1.3 },
            );
          }, [n.id, u]),
          N("canvas", {
            ref: l,
            className: "mx-auto",
            style: {
              width: u,
              height: u,
              imageRendering: "pixelated",
              filter: r ? "brightness(0)" : void 0,
            },
          })
        );
      }
      function Ue({ gs: n, sel: u, setSel: r }) {
        let l = n.current,
          o = Object.values(nu).filter(($) => $.stage === 0),
          f = ($) => {
            let _ = Kr[$];
            if (_ && _.length > 0) return _;
            let v = _n($);
            if (!v || !v.evo || v.evo.length === 0) return [];
            let Z = Object.values(nu),
              J = [];
            for (let e of v.evo) {
              let Q = Z.find((M) => M.name === e.name);
              if (Q) J.push(Q.id);
            }
            return J;
          };
        if (u) {
          let $ = _n(u);
          if (!$)
            return O("div", {
              children: [
                N("button", {
                  onClick: () => r(null),
                  className: "text-sm font-extrabold text-amber-700 mb-2",
                  children: "← Voltar",
                }),
                N("div", {
                  className: "font-extrabold text-lg text-slate-800",
                  children: "???",
                }),
                N("div", {
                  className: "text-xs font-bold text-slate-500 mt-1",
                  children: "Não encontrado",
                }),
              ],
            });
          let _ = l.dexSeen.includes(u);
          return O("div", {
            children: [
              N("button", {
                onClick: () => r(null),
                className: "text-sm font-extrabold text-amber-700 mb-2",
                children: "← Voltar",
              }),
              O("div", {
                className: "flex items-center gap-3",
                children: [
                  _
                    ? N(In, { sp: u, size: 90 })
                    : N("div", {
                        className:
                          "w-[90px] h-[90px] rounded-2xl bg-slate-200 flex items-center justify-center text-3xl font-extrabold text-slate-400",
                        children: "?",
                      }),
                  O("div", {
                    children: [
                      N("div", {
                        className: "font-extrabold text-lg text-slate-800",
                        children: _ ? $.name : "???",
                      }),
                      N("div", {
                        className: "flex gap-1",
                        children:
                          _ &&
                          $.types.map((v) =>
                            N(
                              "span",
                              {
                                className:
                                  "text-[10px] font-bold px-1.5 rounded-full text-white",
                                style: { background: On[v].color },
                                children: v,
                              },
                              v,
                            ),
                          ),
                      }),
                      N("div", {
                        className: "text-xs font-bold text-slate-500 mt-1",
                        children: l.dexCaught.includes(u)
                          ? "✅ Vinculado"
                          : _
                            ? "\uD83D\uDC41 Visto"
                            : "Não encontrado",
                      }),
                    ],
                  }),
                ],
              }),
              _ &&
                N("p", {
                  className:
                    "text-sm text-slate-600 font-bold mt-2 bg-white rounded-xl p-2.5",
                  children: $.dex,
                }),
              N("h4", {
                className: "font-extrabold text-slate-700 mt-3 mb-1.5 text-sm",
                children: "Árvore de evolução (Nv 12 → Nv 24)",
              }),
              O("div", {
                className: "flex flex-col gap-1.5",
                children: [
                  f(u).map((v) => {
                    let Z = _n(v);
                    if (!Z) return null;
                    let J =
                      Z.evo && Z.evo.length > 0
                        ? Z.evo[0].affinity
                        : $.evo && $.evo.length > 0
                          ? $.evo[0].affinity
                          : null;
                    return O(
                      "div",
                      {
                        className:
                          "bg-white rounded-xl p-2 border border-amber-100",
                        children: [
                          O("div", {
                            className: "flex items-center gap-2",
                            children: [
                              N(In, { sp: v, size: 46 }),
                              O("div", {
                                className:
                                  "text-sm font-extrabold text-slate-700",
                                children: [
                                  Z.name,
                                  J &&
                                    O("span", {
                                      className:
                                        "ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full text-white",
                                      style: { background: On[J].color },
                                      children: ["Nv 12 • ", J],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          N("div", {
                            className: "ml-6 mt-1 flex flex-col gap-1",
                            children: f(v).map((e) => {
                              let Q = _n(e);
                              if (!Q) return null;
                              let M =
                                (Z.evo ?? []).find((H) => H.name === Q.name)
                                  ?.affinity ?? null;
                              return O(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 text-xs font-bold text-slate-600",
                                  children: [
                                    N("span", { children: "↳" }),
                                    N(In, { sp: e, size: 36 }),
                                    N("span", { children: Q.name }),
                                    M &&
                                      O("span", {
                                        className:
                                          "text-[10px] px-1.5 py-0.5 rounded-full text-white",
                                        style: { background: On[M].color },
                                        children: ["Nv 24 • ", M],
                                      }),
                                  ],
                                },
                                e,
                              );
                            }),
                          }),
                        ],
                      },
                      v,
                    );
                  }),
                  f(u).length === 0 &&
                    N("div", {
                      className:
                        "text-xs font-bold text-slate-500 bg-white rounded-xl p-2.5 border border-amber-100",
                      children: "Esta espécie não possui evoluções.",
                    }),
                ],
              }),
              N("p", {
                className: "text-[11px] text-slate-500 font-bold mt-2",
                children:
                  "A evolução segue sua afinidade DOMINANTE no momento do nível. Suba a sintonia usando Pats daquele tipo!",
              }),
            ],
          });
        }
        return O("div", {
          children: [
            O("p", {
              className: "text-xs font-bold text-slate-500 mb-2",
              children: [
                "VínculoDex: ",
                l.dexCaught.length,
                " vinculados • ",
                l.dexSeen.length,
                " vistos",
              ],
            }),
            N("div", {
              className: "grid grid-cols-3 gap-2",
              children: o.map(($) => {
                let _ = l.dexSeen.includes($.id),
                  v = l.dexCaught.includes($.id);
                return O(
                  "button",
                  {
                    onClick: () => r($.id),
                    className: `rounded-2xl p-2 border-2 ${v ? "border-amber-300 bg-amber-50" : "border-slate-100 bg-white"} active:scale-95`,
                    children: [
                      _
                        ? N(In, { sp: $.id, size: 56 })
                        : N("div", {
                            className:
                              "w-[56px] h-[56px] mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-xl font-extrabold text-slate-300",
                            children: "?",
                          }),
                      N("div", {
                        className:
                          "text-[11px] font-extrabold text-slate-700 truncate",
                        children: _ ? $.name : "???",
                      }),
                      $.rare &&
                        _ &&
                        N("div", {
                          className: "text-[9px] font-bold text-purple-600",
                          children: "RARO",
                        }),
                    ],
                  },
                  $.id,
                );
              }),
            }),
            O("h4", {
              className: "font-extrabold text-slate-700 mt-4 mb-1.5 text-sm",
              children: [
                "Fusões: ",
                (l.hybridsSeen ?? []).length,
                "/15 descobertas",
              ],
            }),
            N("div", {
              className: "grid grid-cols-3 gap-2",
              children: Object.values(Y0).map(($) => {
                let _ = (l.hybridsSeen ?? []).includes($.id);
                return O(
                  "div",
                  {
                    className: `rounded-2xl p-2 border-2 ${_ ? "border-fuchsia-300 bg-fuchsia-50" : "border-slate-100 bg-white"}`,
                    children: [
                      N(We, { hyb: $, size: 56, silhouette: !_ }),
                      N("div", {
                        className:
                          "text-[11px] font-extrabold text-slate-700 truncate text-center",
                        children: _ ? $.name : "???",
                      }),
                      _
                        ? N("div", {
                            className:
                              "flex gap-1 justify-center mt-0.5 flex-wrap",
                            children: $.types.map((v) =>
                              N(
                                "span",
                                {
                                  className:
                                    "text-[9px] font-bold px-1.5 rounded-full text-white",
                                  style: { background: On[v].color },
                                  children: v,
                                },
                                v,
                              ),
                            ),
                          })
                        : N("div", {
                            className:
                              "text-[9px] font-bold text-slate-400 text-center",
                            children: "Fusão desconhecida",
                          }),
                    ],
                  },
                  $.id,
                );
              }),
            }),
            N("p", {
              className: "text-[11px] text-slate-500 font-bold mt-2",
              children:
                "Dica: complete a missão Mestre da Fusão para descobrir todas as 15!",
            }),
          ],
        });
      }
      function Me({ gs: n }) {
        let u = n.current,
          r = $n.useRef(null);
        return (
          $n.useEffect(() => {
            let l = r.current,
              o = l.getContext("2d"),
              f = 64,
              $ = 48,
              _ = 5;
            ((l.width = 320), (l.height = 240));
            let v = _f(),
              Z = {
                [F.GRASS]: "#5cab46",
                [F.TALL]: "#2c6e28",
                [F.PATH]: "#d9b380",
                [F.WATER]: "#2f8fe0",
                [F.DEEP]: "#1d6fd1",
                [F.TREE]: "#1f5c2a",
                [F.THORN]: "#7a1f1f",
                [F.BOULDER]: "#8a8a8a",
                [F.GAP]: "#111",
                [F.FLOWER]: "#6fbf5a",
                [F.PLAZA]: "#cbb489",
                [F.CAVE]: "#5d5a78",
                [F.CAVEWALL]: "#2c2a40",
                [F.DOOR]: "#a06a35",
                [F.HOUSE]: "#b08968",
                [F.SAND]: "#ecd9a8",
              };
            for (let J = 0; J < 48; J++)
              for (let e = 0; e < 64; e++)
                ((o.fillStyle = Z[Sr(v, e, J)] ?? "#000"),
                  o.fillRect(e * 5, J * 5, 5, 5));
            ((o.fillStyle = "#fff"),
              (o.strokeStyle = "#000"),
              (o.lineWidth = 1.5),
              o.beginPath(),
              o.arc(u.px * 5, u.py * 5, 4, 0, Math.PI * 2),
              o.fill(),
              o.stroke(),
              W8.forEach((J) => {
                if (u.openedChests.includes(J.id)) return;
                ((o.fillStyle = "#fbbf24"),
                  o.fillRect(J.x * 5 - 2, J.y * 5 - 2, 4, 4));
              }),
              (o.fillStyle = "#1e293b"),
              (o.font = "bold 11px sans-serif"),
              o.fillText("Vila", 15, 7),
              o.fillText("Bosque", 220, 20),
              o.fillText("Lago", 120, 95),
              o.fillText("Caverna", 50, 175),
              o.fillText("Abismo", 50, 210));
          }, []),
          O("div", {
            children: [
              N("canvas", {
                ref: r,
                className: "w-full rounded-xl border-2 border-amber-200",
                style: { imageRendering: "pixelated" },
              }),
              O("div", {
                className:
                  "flex gap-3 mt-2 text-[11px] font-bold text-slate-600 flex-wrap",
                children: [
                  N("span", { children: "⚪ você" }),
                  N("span", { children: "\uD83D\uDFE1 baú" }),
                  N("span", {
                    children: "\uD83D\uDFE5 espinhos (Corte Flora)",
                  }),
                  N("span", { children: "⬛ fenda (Dash Faísca)" }),
                ],
              }),
              N("p", {
                className: "text-[11px] text-slate-500 font-bold mt-1",
                children:
                  "Explore tudo! Habilidades dos seus Pats desbloqueiam atalhos e tesouros — volte às áreas antigas.",
              }),
            ],
          })
        );
      }
      function He({ gs: n }) {
        let u = n.current,
          r = z0(u),
          l = Math.max(1, ...qr.map((f) => u.sintonia[f])),
          o = {
            Brasa: N(s1, { size: 16 }),
            Maré: N("span", { children: "\uD83D\uDCA7" }),
            Flora: N("span", { children: "\uD83C\uDF3F" }),
            Faísca: N(of, { size: 16 }),
            Pedra: N("span", { children: "⛰️" }),
            Sombra: N("span", { children: "\uD83C\uDF19" }),
          };
        return O("div", {
          className: "flex flex-col gap-2",
          children: [
            N("p", {
              className: "text-xs font-bold text-slate-500",
              children:
                "Suas afinidades definem poder (+25%), vínculo (+15% captura) e EVOLUÇÕES. A sintonia sobe ao vencer batalhas com Pats do tipo.",
            }),
            qr.map((f) => {
              let $ = u.affinities.includes(f),
                _ = r === f;
              return O(
                "div",
                {
                  className: `rounded-2xl p-2.5 border-2 ${$ ? "border-amber-300 bg-amber-50" : "border-slate-100 bg-white"}`,
                  children: [
                    O("div", {
                      className: "flex items-center gap-2",
                      children: [
                        N("span", {
                          className:
                            "w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold",
                          style: { background: On[f].color },
                          children: o[f],
                        }),
                        N("div", {
                          className: "font-extrabold text-slate-800 text-sm",
                          children: f,
                        }),
                        $ &&
                          N("span", {
                            className:
                              "text-[10px] font-bold bg-amber-400 text-amber-950 px-1.5 rounded-full",
                            children: "SUA AFINIDADE",
                          }),
                        _ &&
                          N("span", {
                            className:
                              "text-[10px] font-bold bg-purple-500 text-white px-1.5 rounded-full",
                            children: "DOMINANTE",
                          }),
                        O("div", {
                          className: "ml-auto text-xs font-bold text-slate-500",
                          children: ["Nv ", u.sintonia[f]],
                        }),
                      ],
                    }),
                    N("div", {
                      className:
                        "h-2 rounded-full bg-black/10 mt-1.5 overflow-hidden",
                      children: N("div", {
                        className: "h-full rounded-full",
                        style: {
                          width: `${(u.sintonia[f] / l) * 100}%`,
                          background: On[f].color,
                        },
                      }),
                    }),
                    O("div", {
                      className: "text-[11px] text-slate-500 font-bold mt-1",
                      children: [On[f].desc, Jf[f] ? ` • ${Jf[f].name}` : ""],
                    }),
                  ],
                },
                f,
              );
            }),
            O("div", {
              className:
                "bg-purple-50 border-2 border-purple-200 rounded-2xl p-2.5 text-[12px] font-bold text-purple-900",
              children: [
                "\uD83E\uDDEC Regra de evolução: no Nv 12 e Nv 24, o Pat evolui para a forma da sua afinidade ",
                N("u", { children: "dominante" }),
                ". Ex: Embercub → Pyrothion (Brasa) ou Umbrak (Sombra).",
              ],
            }),
          ],
        });
      }
      function De({ gs: n }) {
        let u = n.current,
          r = vo.filter((o) => u.visitedExpansion || !o.id.startsWith("exp-")),
          l = r.filter((o) => _o(u, o) >= o.meta).length;
        return O("div", {
          className: "flex flex-col gap-2",
          children: [
            O("h3", {
              className: "font-extrabold text-slate-700",
              children: ["Missões (", l, "/", r.length, ")"],
            }),
            r.map((o) => {
              let f = Math.min(_o(u, o), o.meta),
                $ = f >= o.meta,
                _ = Math.round((f / o.meta) * 100);
              return O(
                "div",
                {
                  className: `rounded-2xl p-3 font-extrabold text-sm ${$ ? "bg-green-100 text-green-800" : "bg-white text-slate-600 border-2 border-slate-100"}`,
                  children: [
                    O("div", {
                      className: "flex items-center gap-2",
                      children: [
                        N("span", {
                          className: "text-lg",
                          children: $ ? "✅" : "\uD83C\uDFAF",
                        }),
                        O("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            N("div", {
                              className: "truncate",
                              children: o.nome,
                            }),
                            N("div", {
                              className: "text-[11px] font-bold opacity-70",
                              children: o.descricao,
                            }),
                          ],
                        }),
                        O("span", {
                          className: "text-xs shrink-0",
                          children: [f, "/", o.meta],
                        }),
                      ],
                    }),
                    !$ &&
                      N("div", {
                        className:
                          "h-1.5 rounded-full bg-black/10 mt-1.5 overflow-hidden",
                        children: N("div", {
                          className:
                            "h-full bg-amber-400 rounded-full transition-all",
                          style: { width: `${_}%` },
                        }),
                      }),
                  ],
                },
                o.id,
              );
            }),
          ],
        });
      }