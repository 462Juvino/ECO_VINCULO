/*
 * Eco Vínculo — Batalhas e efeitos visuais
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 39867-45630.
 */
"use strict";

      var Un = Du(Pu(), 1);
      var x3 = null;
      function Ce() {
        try {
          let n = window.AudioContext || window.webkitAudioContext;
          if (!n) return;
          if (!x3) x3 = new n();
          let u = x3;
          if (u.state === "suspended") u.resume();
          let r = u.createGain();
          r.gain.value = 0.5;
          let l = u.createDynamicsCompressor();
          (r.connect(l),
            l.connect(u.destination),
            [523.25, 659.25, 783.99, 1046.5].forEach((o, f) => {
              let $ = u.currentTime + f * 0.11,
                _ = u.createOscillator(),
                v = u.createGain();
              ((_.type = "triangle"),
                (_.frequency.value = o),
                _.connect(v),
                v.connect(r),
                v.gain.setValueAtTime(0.0001, $),
                v.gain.exponentialRampToValueAtTime(0.22, $ + 0.02),
                v.gain.exponentialRampToValueAtTime(0.0001, $ + 0.3),
                _.start($),
                _.stop($ + 0.35));
            }));
        } catch {}
      }
      var Cn = (n) => new Promise((u) => setTimeout(u, n));
      function E8({ hp: n, max: u }) {
        let r = Math.max(0, (n / u) * 100),
          l = r > 50 ? "bg-green-500" : r > 20 ? "bg-yellow-500" : "bg-red-500";
        return N("div", {
          className:
            "h-3 w-full rounded-full bg-black/40 overflow-hidden border border-white/20",
          children: N("div", {
            className: `h-full ${l} transition-all duration-500`,
            style: { width: `${r}%`, transition: "width 0.45s ease" },
          }),
        });
      }
      function L8({ t: n }) {
        return N("span", {
          className:
            "text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white",
          style: { background: On[n].color },
          children: n,
        });
      }
      var qe = {
          Brasa: "#ff6b35",
          Maré: "#4ecdc4",
          Flora: "#6fcf5f",
          Faísca: "#ffe66d",
          Pedra: "#a0826d",
          Sombra: "#6c5ce7",
        },
        yQ = {
          Brasa: {
            projKind: "flame",
            projSize: 22,
            travelMs: 400,
            core: "#ff6b35",
            glow: "#ffd166",
            mid: "#c22e00",
            trail: {
              shape: "circle",
              colors: ["#fff3b0", "#ffb703", "#ff6b35", "#c22e00"],
              size: [3, 7],
              spread: 10,
              drift: [0, -16],
              perTick: 2,
            },
            impact: {
              shapes: ["circle", "spark"],
              colors: ["#fff3b0", "#ffd166", "#ff6b35", "#c22e00"],
              count: 14,
              ring: "#ff9f1c",
            },
          },
          Maré: {
            projKind: "bubble",
            projSize: 24,
            travelMs: 400,
            core: "#38bdf8",
            glow: "#bae6fd",
            mid: "#0369a1",
            trail: {
              shape: "drop",
              colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0284c7"],
              size: [3, 6],
              spread: 10,
              drift: [0, 10],
              perTick: 2,
            },
            impact: {
              shapes: ["drop", "circle"],
              colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0ea5e9"],
              count: 14,
              ring: "#7dd3fc",
            },
          },
          Flora: {
            projKind: "seed",
            projSize: 20,
            travelMs: 400,
            core: "#4ade80",
            glow: "#bbf7d0",
            mid: "#166534",
            trail: {
              shape: "leaf",
              colors: ["#dcfce7", "#86efac", "#4ade80", "#16a34a"],
              size: [4, 8],
              spread: 12,
              drift: [0, -10],
              perTick: 2,
            },
            impact: {
              shapes: ["leaf", "circle"],
              colors: ["#dcfce7", "#86efac", "#4ade80", "#f0abfc"],
              count: 14,
              ring: "#86efac",
            },
          },
          Faísca: {
            projKind: "bolt",
            projSize: 26,
            travelMs: 380,
            core: "#facc15",
            glow: "#fef9c3",
            mid: "#b45309",
            trail: {
              shape: "spark",
              colors: ["#fefce8", "#fde047", "#facc15", "#f59e0b"],
              size: [2, 5],
              spread: 8,
              drift: [0, 0],
              perTick: 2,
            },
            impact: {
              shapes: ["spark", "circle"],
              colors: ["#fefce8", "#fde047", "#facc15", "#fff"],
              count: 16,
              ring: "#fde047",
            },
          },
          Pedra: {
            projKind: "rock",
            projSize: 22,
            travelMs: 420,
            core: "#b08968",
            glow: "#e7d8c3",
            mid: "#5c4a32",
            trail: {
              shape: "circle",
              colors: ["#ede0d4", "#d6b894", "#b08968", "#8a6a4f"],
              size: [2, 5],
              spread: 8,
              drift: [0, 8],
              perTick: 2,
            },
            impact: {
              shapes: ["shard", "circle"],
              colors: ["#ede0d4", "#d6b894", "#b08968", "#fff"],
              count: 14,
              ring: "#d6b894",
            },
          },
          Sombra: {
            projKind: "wisp",
            projSize: 24,
            travelMs: 400,
            core: "#8b5cf6",
            glow: "#c4b5fd",
            mid: "#2e1065",
            trail: {
              shape: "wisp",
              colors: ["#ddd6fe", "#a78bfa", "#7c3aed", "#4c1d95"],
              size: [5, 10],
              spread: 12,
              drift: [0, -12],
              perTick: 2,
            },
            impact: {
              shapes: ["wisp", "circle"],
              colors: ["#ddd6fe", "#a78bfa", "#7c3aed", "#2e1065"],
              count: 14,
              ring: "#a78bfa",
            },
          },
        };
      function n9Classic({ gs: n, init: u, onEnd: r }) {
        let l = n.current,
          o = Un.useRef(!0),
          [f, $] = Un.useState("intro"),
          [_, v] = Un.useState("..."),
          [Z, J] = Un.useState(() =>
            Math.max(
              0,
              l.party.findIndex((X) => X.hp > 0),
            ),
          ),
          [e, Q] = Un.useState(!1),
          [M, H] = Un.useState(0),
          [K, V] = Un.useState(0),
          [C, D] = Un.useState(0),
          [W, B] = Un.useState(!1),
          [A, P] = Un.useState(null),
          U = Un.useRef(new Map()),
          E = Un.useRef(new Map()),
          q = Un.useRef(new Map()),
          L = Un.useRef(null),
          [Y, G] = Un.useState(null),
          d = Un.useRef(0),
          h = (X) => {
            if ((G(X), d.current)) clearTimeout(d.current);
            d.current = window.setTimeout(() => {
              ((d.current = 0), G(null));
            }, 1500);
          },
          [i, b] = Un.useState(-1),
          [z, k] = Un.useState("fusao"),
          [a, un] = Un.useState(!1),
          mn = Un.useRef(null),
          en = Un.useRef(null),
          sn = Un.useRef(null),
          [Gu, Mn] = Un.useState(!1),
          [yr, Rn] = Un.useState(!1),
          [Er, Gn] = Un.useState(!1),
          [Pn, uu] = Un.useState(null),
          [Nu, wn] = Un.useState(null),
          [tu, Sn] = Un.useState([]),
          [Vo, Lu] = Un.useState([]),
          [fl, Xu] = Un.useState([]),
          [Ul, s] = Un.useState(null),
          [ln, Zn] = Un.useState(null),
          [Kn, Ku] = Un.useState([]),
          [attackScene, setAttackScene] = Un.useState(null),
          [resonanceCharge, setResonanceCharge] = Un.useState(0),
          resonanceChargeRef = Un.useRef(0),
          [bossSignal, setBossSignal] = Un.useState(null),
          Hn = Un.useRef(1),
          [yu, Tu] = Un.useState(
            () =>
              typeof window > "u" || window.innerHeight >= window.innerWidth,
          );
        Un.useEffect(() => {
          let X = () => Tu(window.innerHeight >= window.innerWidth);
          return (
            window.addEventListener("resize", X),
            () => window.removeEventListener("resize", X)
          );
        }, []);
        Un.useEffect(() => {
          window.EV_MUSIC?.enterBattle?.(u);
          return () => window.EV_MUSIC?.leaveBattle?.();
        }, []);
        let [Bu, pu] = Un.useState(0);
        Un.useEffect(() => {
          let X = 0,
            w = !0,
            j = () => {
              if (!w) return;
              (pu(performance.now() / 1000), (X = requestAnimationFrame(j)));
            };
          return (
            (X = requestAnimationFrame(j)),
            () => {
              ((w = !1), cancelAnimationFrame(X));
            }
          );
        }, []);
        let Ju = Un.useRef(0),
          En = Un.useRef(Vl(u.foeSp, u.foeLevel)),
          Dn = Un.useRef(null),
          jn = Un.useRef(null),
          [hr, ku] = Un.useState(0),
          Au = Un.useRef(!1),
          Vr = Un.useRef(null),
          or = Un.useRef(0),
          mu = () => {
            let X = l.party[Lr.current],
              w = _n(X.sp),
              j = zn(X.sp, X.level);
            Dn.current = {
              pat: X,
              sp: w,
              maxHp: j.maxHp,
              atk: j.atk,
              def: j.def,
              vel: j.vel,
            };
            let y = En.current,
              T = _n(y.sp),
              vn = zn(y.sp, y.level);
            jn.current = {
              pat: y,
              sp: T,
              maxHp: vn.maxHp,
              atk: vn.atk,
              def: vn.def,
              vel: vn.vel,
            };
          },
          Lr = Un.useRef(Z);
        ((Lr.current = Z),
          Un.useEffect(() => {
            return (
              (o.current = !0),
              () => {
                o.current = !1;
              }
            );
          }, []));
        let Wn = async (X, w = 1500) => {
            (v(X), ku((j) => j + 1), await Cn(w));
          },
          gn = () => {
            (H(Dn.current.pat.hp), V(jn.current.pat.hp));
          },
          Ml = (X) => {
            if (U.current.has(X.uid)) return;
            let w = {};
            ((X.afinidades ?? []).forEach((j) => {
              let y = nl[j];
              if (y) w[j] = y.usosPorBatalha;
            }),
              U.current.set(X.uid, w));
          },
          fr = (X, w, j) => {
            let y = [];
            for (let T = 0; T < X.perTick; T++) {
              let vn = X.size[0] + Math.random() * (X.size[1] - X.size[0]);
              y.push({
                id: Hn.current++,
                shape: X.shape,
                x: w + (Math.random() - 0.5) * 2 * X.spread,
                y: j + (Math.random() - 0.5) * 2 * X.spread,
                dx: (Math.random() - 0.5) * 24 + X.drift[0],
                dy: (Math.random() - 0.5) * 24 + X.drift[1],
                size: vn,
                color: X.colors[(Math.random() * X.colors.length) | 0],
                dur: 0.4 + Math.random() * 0.25,
                rot: Math.random() * 360,
              });
            }
            Sn((T) => [...T.slice(-48), ...y]);
          },
          xn = (X, w, j) => {
            let y = [];
            for (let T = 0; T < X.count; T++) {
              let vn = (T / X.count) * Math.PI * 2 + Math.random() * 0.6,
                nn = 24 + Math.random() * 46;
              y.push({
                id: Hn.current++,
                shape: X.shapes[(Math.random() * X.shapes.length) | 0],
                x: w,
                y: j,
                dx: Math.cos(vn) * nn,
                dy: Math.sin(vn) * nn,
                size: 4 + Math.random() * 8,
                color: X.colors[(Math.random() * X.colors.length) | 0],
                dur: 0.5 + Math.random() * 0.3,
                rot: Math.random() * 360,
              });
            }
            (y.push({
              id: Hn.current++,
              shape: "ring",
              x: w,
              y: j,
              dx: 0,
              dy: 0,
              size: 64,
              color: X.ring,
              dur: 0.55,
              rot: 0,
            }),
              Lu((T) => [...T.slice(-40), ...y]));
          };
        function Nn(X) {
          let w = mn.current,
            j = X ? sn.current : en.current,
            y = X ? en.current : sn.current;
          if (!w || !j || !y) return null;
          let T = w.getBoundingClientRect(),
            vn = j.getBoundingClientRect(),
            nn = y.getBoundingClientRect();
          return {
            x0: vn.left + vn.width / 2 - T.left,
            y0: vn.top + vn.height / 2 - T.top,
            x1: nn.left + nn.width / 2 - T.left,
            y1: nn.top + nn.height / 2 - T.top,
          };
        }
        async function Ln(X) {
          if (
            (uu({
              type: X.type,
              x0: X.x0,
              y0: X.y0,
              x1: X.x1,
              y1: X.y1,
              go: !1,
              proj: X.proj,
              projSize: X.projSize,
              travelMs: X.travelMs,
              hybridCols: X.hybridCols,
              palette: X.palette,
            }),
            await Cn(30),
            !o.current)
          )
            return (uu(null), !1);
          uu((j) => (j ? { ...j, go: !0 } : j));
          let w = 45;
          for (let j = 0; j < X.travelMs; j += w) {
            let y = Math.min(1, j / X.travelMs);
            if (
              (fr(X.trail, X.x0 + (X.x1 - X.x0) * y, X.y0 + (X.y1 - X.y0) * y),
              await Cn(w),
              !o.current)
            )
              break;
          }
          if ((uu(null), !o.current)) return (Sn([]), !1);
          return !0;
        }
        async function eu(X) {
          if (X.attackerIsPlayer) Rn(!0);
          else Gn(!0);
          (Mn(!0), wl(X.crit), xn(X.impact, X.x, X.y));
          let w = Hn.current++;
          if (
            (Xu((j) => [
              ...j.slice(-3),
              { id: w, x: X.x, y: X.y - 24, text: `-${X.dmg}`, crit: X.crit },
            ]),
            await Cn(140),
            Rn(!1),
            Gn(!1),
            await Cn(80),
            Mn(!1),
            await Cn(420),
            !o.current)
          )
            return;
          if ((Sn([]), await Cn(320), !o.current)) return;
          (Lu([]), Xu((j) => j.filter((y) => y.id !== w)));
        }
        async function S0(X, w, j, y) {
          let T = Nn(w);
          if (!T) return;
          let vn = yQ[X.type];
          if (
            !(await Ln({
              ...T,
              type: X.type,
              travelMs: vn.travelMs,
              trail: vn.trail,
            }))
          )
            return;
          await eu({
            x: T.x1,
            y: T.y1,
            attackerIsPlayer: w,
            dmg: j,
            crit: y,
            impact: vn.impact,
          });
        }
        async function V9(X, w, j, y, T, vn) {
          let nn = Nn(X);
          if (!nn) return;
          if (
            !(await Ln({
              ...nn,
              type: w.type,
              proj: "hybrid-orb",
              projSize: 30,
              travelMs: 380,
              hybridCols: [T, vn],
              trail: {
                shape: "spark",
                colors: [T, vn, "#ffffff"],
                size: [3, 6],
                spread: 10,
                drift: [0, -8],
                perTick: 3,
              },
            }))
          )
            return;
          if (X) Rn(!0);
          else Gn(!0);
          (Mn(!0),
            wl(y),
            xn(
              {
                shapes: ["circle", "spark"],
                colors: [T, vn, "#ffffff"],
                count: 16,
                ring: T,
              },
              nn.x1,
              nn.y1,
            ),
            Lu((Vn) => [
              ...Vn.slice(-40),
              {
                id: Hn.current++,
                shape: "hring",
                x: nn.x1,
                y: nn.y1,
                dx: 0,
                dy: 0,
                size: 92,
                color: vn,
                dur: 0.7,
                rot: 0,
              },
            ]));
          let on = Hn.current++;
          if (
            (Xu((Vn) => [
              ...Vn.slice(-3),
              { id: on, x: nn.x1, y: nn.y1 - 24, text: `-${j}`, crit: y },
            ]),
            await Cn(140),
            Rn(!1),
            Gn(!1),
            await Cn(80),
            Mn(!1),
            await Cn(420),
            !o.current)
          )
            return;
          if ((Sn([]), await Cn(320), !o.current)) return;
          (Lu([]), Xu((Vn) => Vn.filter((Bn) => Bn.id !== on)));
        }
        let g8 = {
            shapes: ["circle"],
            colors: ["#ede0d4", "#d6b894", "#b08968", "#8a6a4f"],
            count: 14,
            ring: "#d6b894",
          },
          Ro = {
            shapes: ["wisp", "circle"],
            colors: ["#ddd6fe", "#a78bfa", "#7c3aed", "#2e1065"],
            count: 12,
            ring: "#a78bfa",
          },
          yn = {
            shapes: ["leaf", "circle"],
            colors: ["#dcfce7", "#86efac", "#4ade80", "#16a34a"],
            count: 12,
            ring: "#86efac",
          },
          hn = {
            shapes: ["wisp", "circle"],
            colors: ["#2e1065", "#7c3aed", "#a78bfa", "#0f0a2e"],
            count: 14,
            ring: "#7c3aed",
          },
          Wo = {
            shapes: ["shard", "circle"],
            colors: ["#ede0d4", "#d6b894", "#b08968", "#5c4a32"],
            count: 16,
            ring: "#b08968",
          },
          Ef = {
            shapes: ["drop", "circle"],
            colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0284c7"],
            count: 16,
            ring: "#38bdf8",
          },
          Lf = {
            shapes: ["wisp", "spark"],
            colors: ["#1e1b4b", "#4c1d95", "#7c3aed", "#a78bfa"],
            count: 14,
            ring: "#7c3aed",
          },
          Xf = {
            shapes: ["circle", "spark"],
            colors: ["#fff7d6", "#ffd166", "#ff6b35", "#c22e00"],
            count: 16,
            ring: "#ff6b35",
          };
        async function Bf(X, w, j) {
          let y = Nn(X);
          if (!y) return;
          let vn = mn.current.getBoundingClientRect(),
            nn = X ? sn.current : en.current,
            R = X ? en.current : sn.current,
            on = nn.getBoundingClientRect(),
            Vn = R.getBoundingClientRect(),
            Bn = Vn.left + Vn.width / 2 - (on.left + on.width / 2),
            $u = Vn.top + Vn.height / 2 - (on.top + on.height / 2),
            bn = w.anim?.kind,
            ru = bn === "charge";
          if (ru) {
            if ((xn(g8, y.x0, y.y0 + 26), await Cn(200), !o.current)) return;
          }
          if (X) s({ x: Bn * 0.62, y: $u * 0.62 });
          else Zn({ x: Bn * 0.62, y: $u * 0.62 });
          if ((await Cn(ru ? 240 : 260), !o.current)) {
            (s(null), Zn(null));
            return;
          }
          let { x1: tn, y1: cn } = y;
          if (X) Rn(!0);
          else Gn(!0);
          (Mn(!0), wl(j));
          let dr = Hn.current++;
          if (bn === "bite")
            (wn({ kind: "fang", x: tn, y: cn, id: Hn.current++ }),
              xn(Ro, tn, cn));
          else if (bn === "shadow-bite")
            (wn({ kind: "shadow-fang", x: tn, y: cn, id: Hn.current++ }),
              xn(hn, tn, cn));
          else if (bn === "rock-slam")
            (wn({ kind: "rock-slam", x: tn, y: cn, id: Hn.current++ }),
              xn(Wo, tn, cn));
          else if (bn === "tail-slam")
            (wn({ kind: "tail-slam", x: tn, y: cn, id: Hn.current++ }),
              xn(Ef, tn, cn));
          else if (bn === "shadow-claw")
            (wn({ kind: "shadow-claws", x: tn, y: cn, id: Hn.current++ }),
              xn(Lf, tn, cn));
          else if (bn === "magma-punch")
            (wn({ kind: "magma-fist", x: tn, y: cn, id: Hn.current++ }),
              xn(Xf, tn, cn));
          else if (bn === "vine-whip")
            (wn({ kind: "vine", x: tn, y: cn, id: Hn.current++ }),
              xn(yn, tn, cn));
          else {
            if (ru) xn(g8, tn, cn);
            Ku(($r) => [
              ...$r.slice(-5),
              { id: dr, x: tn, y: cn, color: qe[w.type] },
            ]);
          }
          if ((await Cn(160), Rn(!1), Gn(!1), Mn(!1), X)) s(null);
          else Zn(null);
          if ((await Cn(300), wn(null), !o.current)) return;
          Ku(($r) => $r.filter((Vu) => Vu.id !== dr));
        }
        async function Af(X, w, j, y) {
          let T = Nn(X);
          if (!T) return;
          let vn = X ? 1 : -1;
          if (X) s({ x: -16 * vn, y: 10 });
          else Zn({ x: -16 * vn, y: 10 });
          for (let R = 0; R < 3; R++)
            if (
              (fr(
                {
                  shape: "spark",
                  colors: ["#fff3b0", "#ffb703", "#ff6b35"],
                  size: [2, 5],
                  spread: 10,
                  drift: [0, -10],
                  perTick: 2,
                },
                T.x0 + vn * 20,
                T.y0 - 8,
              ),
              await Cn(110),
              !o.current)
            )
              break;
          if (X) s(null);
          else Zn(null);
          if ((await Cn(60), !o.current)) return;
          if (
            !(await Ln({
              ...T,
              type: "Brasa",
              proj: "embercub-flame",
              projSize: 42,
              travelMs: 340,
              trail: {
                shape: "circle",
                colors: ["#fff3b0", "#ffb703", "#ff6b35", "#c22e00"],
                size: [2, 7],
                spread: 11,
                drift: [0, -16],
                perTick: 3,
              },
            }))
          )
            return;
          (await eu({
            x: T.x1,
            y: T.y1,
            attackerIsPlayer: X,
            dmg: j,
            crit: y,
            impact: {
              shapes: ["circle", "spark"],
              colors: ["#fff7d6", "#ffd166", "#ff6b35", "#c22e00"],
              count: 18,
              ring: "#ff9f1c",
            },
          }),
            await Cn(120));
        }
        async function il(X, w, j, y) {
          let T = Nn(X);
          if (!T) return;
          let vn = X ? sn.current : en.current,
            nn = X ? en.current : sn.current,
            R = vn.getBoundingClientRect(),
            on = nn.getBoundingClientRect(),
            Vn = on.left + on.width / 2 - (R.left + R.width / 2),
            Bn = on.top + on.height / 2 - (R.top + R.height / 2),
            $u = X ? 1 : -1;
          if (X) s({ x: -16 * $u, y: 10 });
          else Zn({ x: -16 * $u, y: 10 });
          if (
            (xn(
              {
                shapes: ["spark", "circle"],
                colors: ["#fff3b0", "#ffb703", "#ff6b35"],
                count: 8,
                ring: "#ff9f1c",
              },
              T.x0,
              T.y0 + 26,
            ),
            await Cn(300),
            !o.current)
          ) {
            (s(null), Zn(null));
            return;
          }
          if (X) s({ x: Vn * 0.66, y: Bn * 0.66 - 16 });
          else Zn({ x: Vn * 0.66, y: Bn * 0.66 - 16 });
          if ((await Cn(280), !o.current)) {
            (s(null), Zn(null));
            return;
          }
          let { x1: bn, y1: ru } = T;
          if (X) Rn(!0);
          else Gn(!0);
          (Mn(!0),
            wl(y),
            wn({ kind: "embercub-jaws", x: bn, y: ru, id: Hn.current++ }),
            xn(
              {
                shapes: ["circle", "spark"],
                colors: ["#fff7d6", "#ffd166", "#ff6b35", "#c22e00"],
                count: 16,
                ring: "#ff6b35",
              },
              bn,
              ru,
            ));
          let tn = Hn.current++;
          if (
            (Xu((cn) => [
              ...cn.slice(-3),
              { id: tn, x: bn, y: ru - 24, text: `-${j}`, crit: y },
            ]),
            await Cn(200),
            Rn(!1),
            Gn(!1),
            Mn(!1),
            X)
          )
            s(null);
          else Zn(null);
          if ((await Cn(320), wn(null), !o.current)) return;
          Xu((cn) => cn.filter((dr) => dr.id !== tn));
        }
        let Ff = new Set([
          "spinning-leaf",
          "multi-seed",
          "spark-crackle",
          "speed-bolt",
          "wind-blades",
          "ember-spark",
          "flame-burst",
          "fire-mushroom",
          "water-jet",
          "bubble-beam",
          "tsunami",
          "stone-arc",
          "avalanche",
          "quake",
          "tectonic-fury",
          "abyss",
          "eruption",
          "night-veil",
          "cold-breath",
          "floral-vortex",
          "sweet-mist",
          "glow-dust",
          "prism-beam",
          "fairy-dance",
          "flash",
          "petal-storm",
          "volt-judgment",
          "signature",
        ]);
        async function w8(X, w, j, y) {
          let T = Nn(w);
          if (!T) return;
          let vn = X.anim.kind,
            nn = async (R, on, Vn = 560) => {
              if ((wn({ kind: R, x: T.x1, y: T.y1, id: Hn.current++ }), w))
                Rn(!0);
              else Gn(!0);
              (Mn(!0), wl(y), xn(on, T.x1, T.y1));
              let Bn = Hn.current++;
              if (
                (Xu(($u) => [
                  ...$u.slice(-3),
                  { id: Bn, x: T.x1, y: T.y1 - 24, text: `-${j}`, crit: y },
                ]),
                await Cn(Vn),
                Rn(!1),
                Gn(!1),
                Mn(!1),
                wn(null),
                await Cn(380),
                !o.current)
              )
                return;
              (Sn([]), Lu([]), Xu(($u) => $u.filter((bn) => bn.id !== Bn)));
            };
          if (vn === "signature") {
            let fx = X.anim,
              palette = fx.palette?.length ? fx.palette : ["#a78bfa", "#38bdf8", "#ffffff"],
              stage = Math.max(0, Math.min(3, Number(fx.stage) || 0)),
              trailShape = fx.trailShape || "spark",
              impactShapes = fx.impactShapes || [trailShape, "circle"],
              particleCount = Math.max(10, Math.min(28, Number(fx.particleCount) || 16));
            if (fx.variant % 4 === 2) {
              fr(
                {
                  shape: trailShape,
                  colors: palette,
                  size: [3 + stage, 7 + stage],
                  spread: 16 + stage * 3,
                  drift: fx.drift || [0, -10],
                  perTick: 3,
                },
                T.x0,
                T.y0,
              );
              await Cn(fx.windupMs || 160);
              if (!o.current) {
                Sn([]);
                return;
              }
            }
            if (
              !(await Ln({
                ...T,
                type: X.type,
                proj: `signature-${fx.form || "flare"}`,
                projSize: Math.max(26, Math.min(54, Number(fx.projectileSize) || 34)),
                palette,
                travelMs: Math.max(260, Math.min(480, Number(fx.travelMs) || 360)),
                trail: {
                  shape: trailShape,
                  colors: palette,
                  size: [3 + stage, 7 + stage],
                  spread: 11 + stage * 2,
                  drift: fx.drift || [0, -8],
                  perTick: 2 + Math.min(2, stage),
                },
              }))
            )
              return;
            await eu({
              x: T.x1,
              y: T.y1,
              attackerIsPlayer: w,
              dmg: j,
              crit: y,
              impact: {
                shapes: impactShapes,
                colors: palette,
                count: particleCount,
                ring: palette[1] || palette[0],
              },
            });
            return;
          }
          switch (vn) {
            case "spinning-leaf": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "spinning-leaf",
                  projSize: 38,
                  travelMs: 380,
                  trail: {
                    shape: "leaf",
                    colors: ["#dcfce7", "#86efac", "#4ade80", "#16a34a"],
                    size: [4, 9],
                    spread: 12,
                    drift: [0, -14],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["leaf", "shard"],
                  colors: ["#dcfce7", "#86efac", "#4ade80", "#16a34a"],
                  count: 16,
                  ring: "#86efac",
                },
              });
              return;
            }
            case "spark-crackle": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "crackle",
                  projSize: 22,
                  travelMs: 280,
                  trail: {
                    shape: "spark",
                    colors: ["#fefce8", "#fde047", "#facc15", "#f59e0b"],
                    size: [2, 5],
                    spread: 8,
                    drift: [0, 0],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["spark", "circle"],
                  colors: ["#fefce8", "#fde047", "#facc15", "#fff"],
                  count: 12,
                  ring: "#fde047",
                },
              });
              return;
            }
            case "multi-seed": {
              let R = X.anim.count ?? 5,
                on = {
                  shape: "circle",
                  colors: ["#dcfce7", "#86efac", "#4ade80"],
                  size: [2, 5],
                  spread: 6,
                  drift: [0, -8],
                  perTick: 1,
                };
              for (let Vn = 0; Vn < R; Vn++) {
                if (
                  !(await Ln({
                    ...T,
                    type: X.type,
                    proj: "seed-small",
                    projSize: 16,
                    travelMs: 300,
                    trail: on,
                  }))
                )
                  return;
                if (
                  (xn(
                    {
                      shapes: ["circle"],
                      colors: ["#dcfce7", "#86efac", "#4ade80"],
                      count: 4,
                      ring: "#86efac",
                    },
                    T.x1,
                    T.y1,
                  ),
                  await Cn(70),
                  !o.current)
                )
                  return;
              }
              (Sn([]),
                Lu([]),
                await eu({
                  x: T.x1,
                  y: T.y1,
                  attackerIsPlayer: w,
                  dmg: j,
                  crit: y,
                  impact: {
                    shapes: ["leaf", "circle"],
                    colors: ["#dcfce7", "#86efac", "#4ade80", "#f0abfc"],
                    count: 14,
                    ring: "#86efac",
                  },
                }));
              for (let Vn = 0; Vn < 4; Vn++) {
                if (
                  !(await Ln({
                    x0: T.x1,
                    y0: T.y1,
                    x1: T.x0,
                    y1: T.y0,
                    type: X.type,
                    proj: "drain-orb",
                    projSize: 18,
                    travelMs: 380,
                    trail: {
                      shape: "wisp",
                      colors: ["#dcfce7", "#86efac", "#4ade80"],
                      size: [5, 9],
                      spread: 6,
                      drift: [0, -10],
                      perTick: 1,
                    },
                  }))
                )
                  return;
                if ((await Cn(50), !o.current)) return;
              }
              if ((Sn([]), w)) Gn(!0);
              else Rn(!0);
              (xn(
                {
                  shapes: ["circle", "wisp"],
                  colors: ["#dcfce7", "#86efac", "#4ade80"],
                  count: 8,
                  ring: "#86efac",
                },
                T.x0,
                T.y0,
              ),
                await Cn(300),
                Gn(!1),
                Rn(!1),
                await Cn(200),
                Lu([]));
              return;
            }
            case "wind-blades": {
              for (let R = 0; R < 3; R++) {
                if (
                  !(await Ln({
                    ...T,
                    type: X.type,
                    proj: "wind-blade",
                    projSize: 30,
                    travelMs: 280,
                    trail: {
                      shape: "spark",
                      colors: ["#f0fdf4", "#bbf7d0", "#86efac", "#ffffff"],
                      size: [2, 5],
                      spread: 8,
                      drift: [0, -6],
                      perTick: 2,
                    },
                  }))
                )
                  return;
                if (
                  (xn(
                    {
                      shapes: ["spark"],
                      colors: ["#ffffff", "#bbf7d0", "#86efac"],
                      count: 6,
                      ring: "#bbf7d0",
                    },
                    T.x1,
                    T.y1,
                  ),
                  await Cn(90),
                  !o.current)
                )
                  return;
              }
              (Sn([]),
                Lu([]),
                await eu({
                  x: T.x1,
                  y: T.y1,
                  attackerIsPlayer: w,
                  dmg: j,
                  crit: y,
                  impact: {
                    shapes: ["spark", "shard"],
                    colors: ["#ffffff", "#bbf7d0", "#86efac", "#4ade80"],
                    count: 14,
                    ring: "#bbf7d0",
                  },
                }));
              return;
            }
            case "speed-bolt": {
              if (w) Gn(!0);
              else Rn(!0);
              if (
                (fr(
                  {
                    shape: "spark",
                    colors: ["#fefce8", "#fde047", "#facc15"],
                    size: [2, 5],
                    spread: 14,
                    drift: [0, 0],
                    perTick: 3,
                  },
                  T.x0,
                  T.y0,
                ),
                await Cn(260),
                !o.current)
              ) {
                (Gn(!1), Rn(!1), Sn([]));
                return;
              }
              if (
                (Gn(!1),
                Rn(!1),
                Sn([]),
                wn({ kind: "boltstrike", x: T.x1, y: T.y1, id: Hn.current++ }),
                w)
              )
                Rn(!0);
              else Gn(!0);
              (Mn(!0),
                wl(y),
                xn(
                  {
                    shapes: ["spark", "circle"],
                    colors: ["#fefce8", "#fde047", "#facc15", "#fff"],
                    count: 18,
                    ring: "#fde047",
                  },
                  T.x1,
                  T.y1,
                ));
              let R = Hn.current++;
              if (
                (Xu((on) => [
                  ...on.slice(-3),
                  { id: R, x: T.x1, y: T.y1 - 24, text: `-${j}`, crit: y },
                ]),
                await Cn(220),
                Rn(!1),
                Gn(!1),
                Mn(!1),
                wn(null),
                await Cn(380),
                !o.current)
              )
                return;
              (Lu([]), Xu((on) => on.filter((Vn) => Vn.id !== R)));
              return;
            }
            case "ember-spark": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "ember-spark",
                  projSize: 26,
                  travelMs: 330,
                  trail: {
                    shape: "circle",
                    colors: ["#fff3b0", "#ffb703", "#ff6b35", "#c22e00"],
                    size: [2, 6],
                    spread: 9,
                    drift: [0, -18],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["circle", "spark"],
                  colors: ["#fff3b0", "#ffd166", "#ff6b35", "#c22e00"],
                  count: 13,
                  ring: "#ff9f1c",
                },
              });
              return;
            }
            case "flame-burst": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "flame-cone",
                  projSize: 44,
                  travelMs: 360,
                  trail: {
                    shape: "circle",
                    colors: ["#fff3b0", "#ffb703", "#ff6b35", "#c22e00"],
                    size: [3, 8],
                    spread: 12,
                    drift: [0, -14],
                    perTick: 3,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["circle", "spark"],
                  colors: [
                    "#fff3b0",
                    "#ffd166",
                    "#ff6b35",
                    "#c22e00",
                    "#7c2d12",
                  ],
                  count: 18,
                  ring: "#ff6b35",
                },
              });
              return;
            }
            case "fire-mushroom": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "fireball",
                  projSize: 44,
                  travelMs: 430,
                  trail: {
                    shape: "circle",
                    colors: ["#fff3b0", "#ffb703", "#ff6b35", "#7c2d12"],
                    size: [3, 8],
                    spread: 12,
                    drift: [0, -16],
                    perTick: 3,
                  },
                }))
              )
                return;
              if (
                (Sn([]),
                wn({ kind: "mushroom", x: T.x1, y: T.y1, id: Hn.current++ }),
                w)
              )
                Rn(!0);
              else Gn(!0);
              (Mn(!0),
                wl(y),
                xn(
                  {
                    shapes: ["circle", "spark"],
                    colors: [
                      "#fff3b0",
                      "#ffd166",
                      "#ff6b35",
                      "#c22e00",
                      "#7c2d12",
                    ],
                    count: 24,
                    ring: "#ff6b35",
                  },
                  T.x1,
                  T.y1,
                ));
              let on = Hn.current++;
              if (
                (Xu((Vn) => [
                  ...Vn.slice(-3),
                  { id: on, x: T.x1, y: T.y1 - 24, text: `-${j}`, crit: y },
                ]),
                await Cn(520),
                Rn(!1),
                Gn(!1),
                Mn(!1),
                wn(null),
                await Cn(380),
                !o.current)
              )
                return;
              (Lu([]), Xu((Vn) => Vn.filter((Bn) => Bn.id !== on)));
              return;
            }
            case "water-jet": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "water-jet",
                  projSize: 46,
                  travelMs: 300,
                  trail: {
                    shape: "drop",
                    colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0284c7"],
                    size: [3, 6],
                    spread: 9,
                    drift: [0, 8],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["drop", "circle"],
                  colors: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0ea5e9"],
                  count: 16,
                  ring: "#38bdf8",
                },
              });
              return;
            }
            case "bubble-beam": {
              for (let R = 0; R < 4; R++) {
                if (
                  !(await Ln({
                    ...T,
                    type: X.type,
                    proj: "bubble-small",
                    projSize: 22,
                    travelMs: 300,
                    trail: {
                      shape: "drop",
                      colors: ["#e0f2fe", "#fef9c3", "#fde047", "#7dd3fc"],
                      size: [2, 5],
                      spread: 7,
                      drift: [0, -6],
                      perTick: 2,
                    },
                  }))
                )
                  return;
                if (
                  (xn(
                    {
                      shapes: ["circle"],
                      colors: ["#e0f2fe", "#fef9c3", "#fde047"],
                      count: 5,
                      ring: "#fde047",
                    },
                    T.x1,
                    T.y1,
                  ),
                  await Cn(80),
                  !o.current)
                )
                  return;
              }
              (Sn([]),
                Lu([]),
                await eu({
                  x: T.x1,
                  y: T.y1,
                  attackerIsPlayer: w,
                  dmg: j,
                  crit: y,
                  impact: {
                    shapes: ["circle", "spark"],
                    colors: ["#e0f2fe", "#fef9c3", "#fde047", "#38bdf8"],
                    count: 15,
                    ring: "#fde047",
                  },
                }));
              return;
            }
            case "tsunami": {
              if (
                (fr(
                  {
                    shape: "drop",
                    colors: ["#e0f2fe", "#7dd3fc", "#38bdf8"],
                    size: [3, 7],
                    spread: 18,
                    drift: [0, -14],
                    perTick: 3,
                  },
                  T.x0,
                  T.y0,
                ),
                await Cn(300),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              if (
                (wn({ kind: "tidal-wave", x: T.x1, y: T.y1, id: Hn.current++ }),
                w)
              )
                Rn(!0);
              else Gn(!0);
              (Mn(!0),
                wl(y),
                xn(
                  {
                    shapes: ["drop", "circle"],
                    colors: [
                      "#e0f2fe",
                      "#7dd3fc",
                      "#38bdf8",
                      "#0284c7",
                      "#075985",
                    ],
                    count: 22,
                    ring: "#38bdf8",
                  },
                  T.x1,
                  T.y1,
                ));
              let R = Hn.current++;
              if (
                (Xu((on) => [
                  ...on.slice(-3),
                  { id: R, x: T.x1, y: T.y1 - 24, text: `-${j}`, crit: y },
                ]),
                await Cn(560),
                Rn(!1),
                Gn(!1),
                Mn(!1),
                wn(null),
                await Cn(380),
                !o.current)
              )
                return;
              (Sn([]), Lu([]), Xu((on) => on.filter((Vn) => Vn.id !== R)));
              return;
            }
            case "stone-arc": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "stone-arc",
                  projSize: 40,
                  travelMs: 360,
                  trail: {
                    shape: "circle",
                    colors: ["#ede0d4", "#d6b894", "#b08968"],
                    size: [2, 5],
                    spread: 8,
                    drift: [0, 10],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["shard", "circle"],
                  colors: ["#ede0d4", "#d6b894", "#b08968", "#5c4a32"],
                  count: 14,
                  ring: "#b08968",
                },
              });
              return;
            }
            case "avalanche": {
              if (
                (fr(
                  {
                    shape: "circle",
                    colors: ["#d6b894", "#b08968", "#8a6a4f"],
                    size: [3, 6],
                    spread: 26,
                    drift: [0, -10],
                    perTick: 3,
                  },
                  T.x1,
                  T.y1 + 20,
                ),
                await Cn(280),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              await nn(
                "avalanche",
                {
                  shapes: ["shard", "circle"],
                  colors: ["#ede0d4", "#d6b894", "#b08968", "#5c4a32"],
                  count: 18,
                  ring: "#b08968",
                },
                620,
              );
              return;
            }
            case "quake": {
              await nn(
                "quake-crack",
                {
                  shapes: ["circle"],
                  colors: ["#ede0d4", "#d6b894", "#b08968", "#8a6a4f"],
                  count: 16,
                  ring: "#a0826d",
                },
                620,
              );
              return;
            }
            case "tectonic-fury": {
              if (
                (fr(
                  {
                    shape: "circle",
                    colors: ["#b08968", "#8a6a4f"],
                    size: [3, 6],
                    spread: 30,
                    drift: [0, -12],
                    perTick: 3,
                  },
                  T.x1,
                  T.y1 + 24,
                ),
                await Cn(260),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              await nn(
                "rock-pillars",
                {
                  shapes: ["shard", "circle"],
                  colors: ["#ede0d4", "#d6b894", "#a0826d", "#5c4a32"],
                  count: 20,
                  ring: "#b08968",
                },
                640,
              );
              return;
            }
            case "abyss": {
              if (
                (fr(
                  {
                    shape: "wisp",
                    colors: ["#4c1d95", "#7c3aed", "#a78bfa"],
                    size: [6, 11],
                    spread: 22,
                    drift: [0, -8],
                    perTick: 3,
                  },
                  T.x1,
                  T.y1,
                ),
                await Cn(300),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              await nn(
                "shadow-vortex",
                {
                  shapes: ["wisp", "circle"],
                  colors: ["#0f0a2e", "#2e1065", "#4c1d95", "#7c3aed"],
                  count: 18,
                  ring: "#4c1d95",
                },
                620,
              );
              return;
            }
            case "eruption": {
              if (
                (fr(
                  {
                    shape: "circle",
                    colors: ["#ff6b35", "#c22e00"],
                    size: [3, 6],
                    spread: 22,
                    drift: [0, 12],
                    perTick: 3,
                  },
                  T.x1,
                  T.y1 + 30,
                ),
                await Cn(260),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              await nn(
                "lava-geyser",
                {
                  shapes: ["circle", "spark"],
                  colors: [
                    "#fff7d6",
                    "#ffd166",
                    "#ff6b35",
                    "#c22e00",
                    "#7c2d12",
                  ],
                  count: 20,
                  ring: "#ff6b35",
                },
                620,
              );
              return;
            }
            case "night-veil": {
              await nn(
                "night-veil",
                {
                  shapes: ["wisp", "circle"],
                  colors: ["#2e1065", "#4c1d95", "#7c3aed", "#a78bfa"],
                  count: 14,
                  ring: "#6d28d9",
                },
                660,
              );
              return;
            }
            case "cold-breath": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "frost-mist",
                  projSize: 52,
                  travelMs: 340,
                  trail: {
                    shape: "wisp",
                    colors: ["#e0f2fe", "#bae6fd", "#7dd3fc"],
                    size: [5, 10],
                    spread: 12,
                    drift: [0, 6],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["circle", "drop"],
                  colors: ["#ffffff", "#e0f2fe", "#bae6fd", "#7dd3fc"],
                  count: 14,
                  ring: "#bae6fd",
                },
              });
              return;
            }
            case "floral-vortex": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "petal-vortex",
                  projSize: 56,
                  travelMs: 380,
                  trail: {
                    shape: "leaf",
                    colors: ["#fbcfe8", "#f9a8d4", "#f472b6", "#86efac"],
                    size: [4, 8],
                    spread: 12,
                    drift: [0, -10],
                    perTick: 2,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["leaf", "circle"],
                  colors: ["#fbcfe8", "#f9a8d4", "#f472b6", "#86efac"],
                  count: 16,
                  ring: "#f9a8d4",
                },
              });
              return;
            }
            case "sweet-mist": {
              await nn(
                "sweet-mist",
                {
                  shapes: ["circle", "wisp"],
                  colors: ["#fbcfe8", "#f9a8d4", "#f472b6", "#ffffff"],
                  count: 14,
                  ring: "#f9a8d4",
                },
                660,
              );
              return;
            }
            case "glow-dust": {
              await nn(
                "glow-dust",
                {
                  shapes: ["spark", "circle"],
                  colors: ["#fef9c3", "#fde047", "#f0abfc", "#ffffff"],
                  count: 16,
                  ring: "#fde047",
                },
                660,
              );
              return;
            }
            case "prism-beam": {
              if (
                !(await Ln({
                  ...T,
                  type: X.type,
                  proj: "prism-beam",
                  projSize: 60,
                  travelMs: 320,
                  trail: {
                    shape: "spark",
                    colors: [
                      "#f87171",
                      "#fde047",
                      "#4ade80",
                      "#38bdf8",
                      "#a78bfa",
                    ],
                    size: [2, 5],
                    spread: 10,
                    drift: [0, 0],
                    perTick: 3,
                  },
                }))
              )
                return;
              await eu({
                x: T.x1,
                y: T.y1,
                attackerIsPlayer: w,
                dmg: j,
                crit: y,
                impact: {
                  shapes: ["spark", "circle"],
                  colors: [
                    "#f87171",
                    "#fde047",
                    "#4ade80",
                    "#38bdf8",
                    "#a78bfa",
                    "#ffffff",
                  ],
                  count: 16,
                  ring: "#f0abfc",
                },
              });
              return;
            }
            case "fairy-dance": {
              await nn(
                "fairy-lights",
                {
                  shapes: ["spark", "circle", "wisp"],
                  colors: [
                    "#f9a8d4",
                    "#fde047",
                    "#86efac",
                    "#7dd3fc",
                    "#f0abfc",
                  ],
                  count: 16,
                  ring: "#f0abfc",
                },
                700,
              );
              return;
            }
            case "flash": {
              await nn(
                "dazzle-flash",
                {
                  shapes: ["spark", "circle"],
                  colors: ["#ffffff", "#fef9c3", "#fde047"],
                  count: 18,
                  ring: "#fef9c3",
                },
                540,
              );
              return;
            }
            case "petal-storm": {
              await nn(
                "petal-storm",
                {
                  shapes: ["leaf", "circle"],
                  colors: ["#fbcfe8", "#f9a8d4", "#f472b6", "#86efac"],
                  count: 18,
                  ring: "#f9a8d4",
                },
                700,
              );
              return;
            }
            case "volt-judgment": {
              if (
                (fr(
                  {
                    shape: "spark",
                    colors: ["#fefce8", "#fde047", "#facc15"],
                    size: [2, 6],
                    spread: 24,
                    drift: [0, -14],
                    perTick: 3,
                  },
                  T.x1,
                  T.y1 - 40,
                ),
                await Cn(300),
                !o.current)
              ) {
                Sn([]);
                return;
              }
              await nn(
                "volt-strike",
                {
                  shapes: ["spark", "circle"],
                  colors: ["#fefce8", "#fde047", "#facc15", "#ffffff"],
                  count: 20,
                  ring: "#facc15",
                },
                620,
              );
              return;
            }
            default:
              await S0(X, w, j, y);
          }
        }
        async function runUniqueAttack(move, attackerIsPlayer, damage, crit, attacker, onImpact, resonant = false) {
          let engine = window.EV_ATTACK_CHOREOGRAPHY,
            coords = Nn(attackerIsPlayer),
            arena = mn.current?.getBoundingClientRect();
          if (!engine?.plan || !coords || !arena) {
            onImpact();
            if (resonant) window.EV_MUSIC?.playResonanceCue?.();
            await S0(move, attackerIsPlayer, damage, crit);
            return;
          }
          let scene = engine.plan({
              attacker,
              move,
              attackerIsPlayer,
              x0: coords.x0 / Math.max(1, arena.width),
              y0: coords.y0 / Math.max(1, arena.height),
              x1: coords.x1 / Math.max(1, arena.width),
              y1: coords.y1 / Math.max(1, arena.height),
              width: arena.width,
              height: arena.height,
              runId: Hn.current++,
              hit: !0,
              damage,
              crit,
              resonant,
              showDamage: !0,
            }),
            motionSetter = attackerIsPlayer ? s : Zn,
            committed = !1;
          const commit = () => {
            if (committed) return;
            committed = !0;
            onImpact();
            if (resonant) window.EV_MUSIC?.playResonanceCue?.();
          };
          try {
            setAttackScene(scene);
            if (scene.family === "rush")
              motionSetter({ x: scene.lungeX, y: scene.lungeY });
            await Cn(scene.impactAtMs);
            if (!o.current) return;
            commit();
            let impact = eu({
              x: coords.x1,
              y: coords.y1,
              attackerIsPlayer,
              dmg: damage,
              crit,
              impact: {
                shapes: [scene.glyph, "spark", "circle"],
                colors: scene.colors,
                count: 12 + scene.stage * 2,
                ring: scene.colors[1],
              },
            });
            if (scene.family === "rush") {
              await Cn(170);
              motionSetter(null);
            }
            await impact;
            await Cn(Math.max(0, scene.durationMs - scene.impactAtMs - 960));
            if (!o.current) return;
            setAttackScene(null);
            motionSetter(null);
            await Cn(250);
          } finally {
            setAttackScene(null);
            motionSetter(null);
          }
        }
        async function j0(X, w, j) {
          let y = !X.pat || X === Dn.current,
            T = L.current,
            vn = !!T && X === Dn.current,
            nn = !!T && w === Dn.current,
            R = vn ? T.fighter.sp.types : _n(X.pat.sp).types,
            on = nn ? T.fighter.sp.types : _n(w.pat.sp).types,
            Vn = vn ? T.fighter.sp.name : _n(X.pat.sp).name,
            Bn = nn ? T.fighter.sp.name : _n(w.pat.sp).name;
          const bossIdentity = [u.trainerName, u.npcId, u.foeSp].filter(Boolean).join(" ").toLowerCase();
          if (!y && (u.isBoss === true || u.boss === true || /boss|guard|guardi[aã]o|tit[aã]|alfa|campe[aã]o/.test(bossIdentity))) {
            setBossSignal({ name: j.name, type: j.type });
            await Wn(`SINAL DO CHEFE: ${Vn} prepara ${j.name} (${j.type})!`, 850);
            setBossSignal(null);
          }
          if (
            (await Wn(`${Vn} usou ${j.name}!`, 700),
            Math.random() * 100 > j.acc)
          ) {
            (iQ(), await Wn("Mas errou o alvo!", 1100));
            return;
          }
          zQ(j.type);
          let $u = R.includes(j.type),
            bn = y && l.affinities.includes(j.type),
            ru = Math.random() < 0.125,
            tn = {};
          if (vn && R.length > 1) tn.attHybrid = R;
          if (nn && on.length > 1) tn.defHybrid = !0;
          let cn = E.current.get(X.pat.uid) ?? 0,
            dr = q.current.get(X.pat.uid) ?? 1.5,
            $r = cn > 0 ? Math.floor(X.atk * dr) : X.atk,
            Vu = _8($r, w.def, j.power, j.type, on, $u, bn, ru, tn);
          if (cn > 0) E.current.set(X.pat.uid, Math.max(0, cn - 1));
          let zf = d3(l);
          if (y && zf && j.type === zf) Vu = Math.floor(Vu * 1.2);
          let Mo = 0;
          if (!y) {
            let An = U.current.get(w.pat.uid),
              hu = w.pat.afinidades ?? [];
            if (hu.includes("escudo") && (An?.escudo ?? 0) > 0) {
              if (An) An.escudo = Math.max(0, An.escudo - 1);
              ((Vu = 0), h("Instinto ativado: Escudo!"));
            } else if (hu.includes("espelho") && (An?.espelho ?? 0) > 0) {
              if (An) An.espelho = Math.max(0, An.espelho - 1);
              ((Mo = Math.floor(Vu / 2)), h("Instinto ativado: Espelho!"));
            }
          }
          if (y && u.kind === "trainer" && (w.pat.level ?? 0) >= 10) {
            let An = U.current.get(w.pat.uid),
              hu = w.pat.afinidades ?? [];
            if (hu.includes("escudo") && (An?.escudo ?? 0) > 0) {
              if (An) An.escudo = Math.max(0, An.escudo - 1);
              ((Vu = 0), h("Instinto ativado: Escudo!"));
            } else if (hu.includes("espelho") && (An?.espelho ?? 0) > 0) {
              if (An) An.espelho = Math.max(0, An.espelho - 1);
              ((Mo = Math.floor(Vu / 2)), h("Instinto ativado: Espelho!"));
            }
          }
          let resonance = { charge: resonanceChargeRef.current, resonant: false, gained: 0 };
          if (y && Vu > 0 && window.EV_RESONANCE) {
            const petAffinities = [...(R || []), ...(X.pat?.afinidades || [])];
            const aligned = window.EV_RESONANCE.qualifies(j.type, petAffinities, l.affinities || []);
            resonance = window.EV_RESONANCE.step({
              charge: resonanceChargeRef.current,
              aligned,
              bond: X.pat?.bondLevel ?? X.pat?.vinculo ?? 0,
            });
            if (resonance.resonant) {
              Vu = window.EV_RESONANCE.applyDamage(Vu, true);
              h("RESSONÂNCIA DO VÍNCULO! Dano aumentado em 18%.");
            }
          }
          let attackerSpecies = vn ? T.fighter.sp : _n(X.pat.sp);
          if (X.pat?.hybridId) {
            let hybrid = Object.values(Y0).find((entry) => entry.id === X.pat.hybridId);
            if (hybrid)
              attackerSpecies = {
                ...hybrid,
                stage: attackerSpecies?.stage ?? 2,
                feature: hybrid.sprite || hybrid.feature,
                fusionVisual: X.pat.fusionVisual,
              };
          }
          await runUniqueAttack(j, y, Vu, ru, attackerSpecies, () => {
            w.pat.hp = Math.max(0, w.pat.hp - Vu);
            if (Mo > 0 && X.pat.hp > 0)
              X.pat.hp = Math.max(0, X.pat.hp - Mo);
            if (y && (resonance.gained > 0 || resonance.resonant)) {
              resonanceChargeRef.current = resonance.charge;
              setResonanceCharge(resonance.charge);
            }
            gn();
          }, resonance.resonant);
          try {
            navigator.vibrate?.(25);
          } catch {}
          let pn = P0(j.type, on, tn),
            vu = Z8(pn),
            Qu = vu
              ? `${Bn} sofreu ${Vu} de dano! ${vu}`
              : `${Bn} sofreu ${Vu} de dano!`;
          await Wn(ru ? `CRÍTICO! ${Qu}` : Qu, 1300);
        }
        function Pf() {
          let X = jn.current.sp.moves;
          return X[Math.floor(Math.random() * X.length)];
        }
        let z8 = [
          "guardiao",
          "golem-anciao",
          "nox",
          "rainha-sombria",
          "lorde-igneo",
          "anciao-fenda",
        ];
        async function i8() {
          if (u.kind !== "trainer") return !1;
          let X = En.current;
          if ((X.level ?? 0) < 10) return !1;
          let w = X.uid,
            j = U.current.get(w),
            y = _n(X.sp).name,
            vn =
              z8.includes(u.npcId ?? "") || (X.level ?? 0) >= 25 ? 0.65 : 0.35;
          if (
            jn.current.pat.hp < jn.current.maxHp * 0.4 &&
            (j?.cura ?? 0) > 0
          ) {
            if (Math.random() < vn) {
              if (j) j.cura = Math.max(0, j.cura - 1);
              let nn = Math.floor(jn.current.maxHp * 0.4);
              return (
                (X.hp = Math.min(jn.current.maxHp, X.hp + nn)),
                mu(),
                gn(),
                ku((R) => R + 1),
                h("Técnica inimiga: Cura!"),
                await Wn(`${y} usou Cura! (+${nn} HP)`, 1300),
                !0
              );
            }
          } else if (
            or.current <= 2 &&
            (j?.grito ?? 0) > 0 &&
            (E.current.get(w) ?? 0) <= 0
          ) {
            if (Math.random() < vn) {
              if (j) j.grito = Math.max(0, j.grito - 1);
              return (
                E.current.set(w, 3),
                ku((nn) => nn + 1),
                h("Técnica inimiga: Grito!"),
                await Wn(`${y} usou Grito! Ataque +50% por 3 turnos!`, 1300),
                !0
              );
            }
          }
          return !1;
        }
        async function $l() {
          if ((or.current++, !(await i8())))
            await j0(jn.current, Dn.current, Pf());
        }
        async function y0() {
          let X = jn.current.sp.name;
          if (
            (await Wn(`${X} foi derrotado!`, 1200),
            await Yf(jn.current.pat.level, u.kind === "trainer"),
            !o.current || Au.current)
          )
            return !0;
          if (
            (_n(Dn.current.pat.sp).types.forEach((w) => {
              l.sintonia[w]++;
            }),
            u.kind === "trainer" && u.team && Ju.current + 1 < u.team.length)
          ) {
            Ju.current++;
            let w = u.team[Ju.current];
            return (
              (En.current = Vl(w.sp, w.level)),
              Ml(En.current),
              rl(l, w.sp),
              mu(),
              gn(),
              ku((j) => j + 1),
              await Wn(`${u.trainerName} enviou ${_n(w.sp).name}!`, 1400),
              !1
            );
          }
          return !0;
        }
        async function Yf(X, w) {
          for (let j = 0; j < l.party.length; j++) {
            let y = l.party[j];
            if (y.hp <= 0 && j !== Lr.current) continue;
            let T = _Q(X, w, y.level),
              vn = j === Lr.current ? T : Math.floor(T / 2);
            if (vn <= 0) continue;
            y.xp += vn;
            let nn = zn(y.sp, y.level);
            while (y.xp >= Io(y.level)) {
              ((y.xp -= Io(y.level)), y.level++);
              let R = nn.maxHp;
              ((nn = zn(y.sp, y.level)),
                (y.hp = Math.min(nn.maxHp, y.hp + (nn.maxHp - R))));
              let on = _n(y.sp).name;
              await Wn(`${on} subiu para o Nv ${y.level}!`, 1300);
              let Vn = mf(y);
              if (Vn) await h0(y, Vn);
              if (!o.current || Au.current) return;
            }
          }
          (mu(), gn(), ku((j) => j + 1));
        }
        function mf(X) {
          let w = _n(X.sp),
            j = w.evoLevel ?? (w.stage === 0 ? 12 : 24);
          if (w.stage < 2 && X.level >= j) return H8(X.sp, z0(l));
          return null;
        }
        async function h0(X, w) {
          let j = _n(X.sp).name,
            y = z0(l);
          (P({ pat: X, from: j, to: w, dom: y }),
            $("evolve"),
            await Wn(`O quê?! ${j} está evoluindo!`, 1800),
            await Cn(1200),
            (X.sp = w));
          let T = zn(w, X.level);
          ((X.hp = T.maxHp),
            rl(l, w),
            Yl(l, w),
            l.evolvedTotal++,
            mu(),
            gn(),
            await Wn(`Sua afinidade ${y} moldou a evolução!`, 1600),
            await Wn(`${j} evoluiu para ${_n(w).name}!`, 1800),
            P(null),
            $("menu"));
        }
        async function vl() {
          let X = L.current;
          if (X && Dn.current.pat.hp <= 0)
            ((l.party[X.aIdx].hp = 0), (l.party[X.bIdx].hp = 0));
          if (
            l.party
              .slice(0, 3)
              .map((j, y) => ({ p: j, i: y }))
              .filter((j) => j.p.hp > 0 && j.i !== Lr.current).length === 0
          )
            return !0;
          return (
            await Wn("Escolha o próximo Pat!", 800),
            Q(!0),
            $("pats"),
            !1
          );
        }
        async function G8(X) {
          $("busy");
          let w = Dn.current.sp.moves[X];
          if (Dn.current.vel >= jn.current.vel) {
            if ((await j0(Dn.current, jn.current, w), jn.current.pat.hp <= 0)) {
              if (await y0()) return Xn(!0);
              $("menu");
              return;
            }
            if ((await $l(), Dn.current.pat.hp <= 0)) {
              if (
                (await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl())
              )
                return Xn(!1);
              return;
            }
          } else {
            if ((await $l(), Dn.current.pat.hp <= 0)) {
              if (
                (await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl())
              )
                return Xn(!1);
              return;
            }
            if ((await j0(Dn.current, jn.current, w), jn.current.pat.hp <= 0)) {
              if (await y0()) return Xn(!0);
              $("menu");
              return;
            }
          }
          if (o.current && !Au.current) $("menu");
        }
        async function T8(X, w) {
          if (L.current) {
            (await Wn("Já fundido! Não dá para trocar de Pat agora.", 1100),
              $("menu"));
            return;
          }
          if (l.party[X].hp <= 0) {
            await Wn("Ele está desmaiado!", 1000);
            return;
          }
          if (X === Lr.current && !e) {
            $("menu");
            return;
          }
          if (
            (J(X),
            (Lr.current = X),
            mu(),
            gn(),
            ku((j) => j + 1),
            await Wn(`Volte! Vai, ${_n(l.party[X].sp).name}!`, 1100),
            Q(!1),
            w)
          ) {
            $("menu");
            return;
          }
          if (($("busy"), await $l(), Dn.current.pat.hp <= 0)) {
            if ((await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl()))
              return Xn(!1);
            return;
          }
          $("menu");
        }
        async function d0(X) {
          if (l.items.pocao <= 0) {
            await Wn("Você não tem Poções!", 1100);
            return;
          }
          let w = l.party[X];
          if (w.hp <= 0) {
            await Wn("Não funciona em Pat desmaiado!", 1100);
            return;
          }
          let j = zn(w.sp, w.level);
          if (w.hp >= j.maxHp) {
            await Wn("HP já está cheio!", 1100);
            return;
          }
          if (
            (l.items.pocao--,
            (w.hp = Math.min(j.maxHp, w.hp + 50)),
            ku((y) => y + 1),
            await Wn(
              `Usou Poção de Vínculo em ${_n(w.sp).name}! (+50 HP)`,
              1200,
            ),
            mu(),
            gn(),
            $("busy"),
            await $l(),
            Dn.current.pat.hp <= 0)
          ) {
            if ((await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl()))
              return Xn(!1);
            return;
          }
          $("menu");
        }
        async function gf(X) {
          let w = l.party[Lr.current];
          if (!w || w.hp <= 0) {
            $("menu");
            return;
          }
          let j = U.current.get(w.uid),
            y = j?.[X] ?? 0;
          if (y <= 0) {
            (await Wn("Sem usos restantes!", 1100), $("techs"));
            return;
          }
          let T = zn(w.sp, w.level);
          if (X === "cura" && w.hp >= T.maxHp) {
            (await Wn("HP já está cheio!", 1100), $("techs"));
            return;
          }
          if (j) j[X] = y - 1;
          else U.current.set(w.uid, { [X]: 0 });
          if (($("busy"), X === "cura")) {
            let vn = Math.floor(T.maxHp * 0.4);
            ((w.hp = Math.min(T.maxHp, w.hp + vn)),
              mu(),
              gn(),
              ku((nn) => nn + 1),
              await Wn(`${_n(w.sp).name} usou Cura! (+${vn} HP)`, 1300));
          } else {
            let vn = jn.current.sp.types,
              R = P0(_n(w.sp).types[0], vn) >= 1 ? 1.5 : 1.25;
            (E.current.set(w.uid, 3),
              q.current.set(w.uid, R),
              ku((on) => on + 1),
              await Wn(
                `${_n(w.sp).name} usou Grito! Ataque +${R === 1.5 ? 50 : 25}% por 3 turnos!`,
                1300,
              ));
          }
          if ((await $l(), Dn.current.pat.hp <= 0)) {
            if ((await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl()))
              return Xn(!1);
            return;
          }
          if (o.current && !Au.current) $("menu");
        }
        async function Uo() {
          if (L.current) {
            (await Wn("já fundido", 1100), $("menu"));
            return;
          }
          let X = Lr.current,
            w = l.party[X],
            j = i,
            y = j >= 0 ? l.party[j] : void 0,
            T = z,
            vn = w ? U.current.get(w.uid) : void 0,
            nn = vn?.[T] ?? 0;
          if (!w || w.hp <= 0 || !w.afinidades?.includes(T) || nn <= 0) {
            (await Wn("Sem usos de fusão restantes!", 1300), $("techs"));
            return;
          }
          if (!y || j === X || y.hp <= 0) {
            (await Wn("Escolha um parceiro vivo!", 1300), $("fusePartner"));
            return;
          }
          if (T === "fusao" && (l.items["nucleo-fusao"] ?? 0) < 1) {
            (await Wn("Sem Núcleo de Fusão!", 1300), $("fusePartner"));
            return;
          }
          if (T === "fusao")
            l.items["nucleo-fusao"] = Math.max(
              0,
              (l.items["nucleo-fusao"] ?? 0) - 1,
            );
          if (vn) vn[T] = nn - 1;
          let R = Z3(w, y),
            on = zn(w.sp, w.level),
              Vn = zn(y.sp, y.level),
              Bn = { ...w },
              $u = { ...y },
              bn = Math.min(R.stats.maxHp, w.hp + y.hp),
              ru = window.EV_SIGNATURES?.makeFusionMoves(R, Bn, $u) ?? [
                {
                  name: "Investida",
                type: R.types[0] ?? "Pedra",
                power: 55,
                acc: 100,
              },
              {
                name: "Mordida",
                type: R.types[1] ?? R.types[0] ?? "Sombra",
                power: 55,
                acc: 100,
              },
            ],
            tn = {
              id: `fusao-${w.uid}`,
              name: R.name,
              types: R.types,
              moves: ru,
              stage: 0,
              base: { hp: 10, atk: 10, def: 10, vel: 10 },
              dex: "",
              feature: R.sprite,
            },
            cn = {
              uid: w.uid,
              sp: w.sp,
              level: R.level,
              xp: w.xp,
              hp: bn,
              afinidades: [],
              hybridId: R.hybridId,
              fusionVisual: window.EV_SIGNATURES?.fusionVisual(Bn, $u, R),
            },
            dr = {
              pat: cn,
              sp: tn,
              maxHp: R.stats.maxHp,
              atk: R.stats.atk,
              def: R.stats.def,
              vel: R.stats.vel,
            };
          if (
            ((L.current = {
              fighter: dr,
              aIdx: X,
              bIdx: j,
              hpA: w.hp,
              hpB: y.hp,
              maxA: on.maxHp,
              maxB: Vn.maxHp,
              spriteSp: w.sp,
              origA: Bn,
              origB: $u,
            }),
            (Dn.current = dr),
            un(!0),
            H(cn.hp),
            ku(($r) => $r + 1),
            $("busy"),
            await Wn(
              `${_n(Bn.sp).name} e ${_n($u.sp).name} se fundiram! Surgiu ${R.name}!`,
              1700,
            ),
            await $l(),
            Dn.current.pat.hp <= 0)
          ) {
            let $r = L.current;
            if ($r) ((l.party[$r.aIdx].hp = 0), (l.party[$r.bIdx].hp = 0));
            if ((await Wn(`${R.name} desmaiou!`, 1200), await vl()))
              return Xn(!1);
            return;
          }
          if (o.current && !Au.current) $("menu");
        }
        async function wf(X) {
          $("busy");
          let w = _n(En.current.sp);
          if (u.kind === "trainer") {
            (await Wn("Não dá para vincular o Pat de um treinador!", 1400),
              $("menu"));
            return;
          }
          let j = w.types.some((T) => l.affinities.includes(T)),
            y;
          if (X)
            (l.items.essencia--,
              (y = 0.9),
              await Wn("Você usou uma Essência Neutra!", 1100));
          else {
            if (w.essenceOnly || !j) {
              (await Wn("Sem afinidade!", 1000), $("menu"));
              return;
            }
            y = 0.3 + (1 - jn.current.pat.hp / jn.current.maxHp) * 0.45 + 0.15;
            let T = d3(l);
            if (T && w.types.includes(T)) y = Math.min(1, y * 1.15);
            await Wn("Você lançou a Esfera de Vínculo!", 900);
          }
          if (
            ($("catching"),
            D(1),
            await Cn(600),
            D(2),
            await Cn(600),
            D(3),
            await Cn(700),
            Math.random() < y)
          ) {
            D(0);
            let T = Vl(w.id, En.current.level),
              vn = zn(T.sp, T.level);
            T.hp = vn.maxHp;
            let nn = l.party.length >= 3;
            if (nn) l.box.push(T);
            else l.party.push(T);
            if (
              (rl(l, w.id),
              Yl(l, w.id),
              (Vr.current = w.id),
              l.caughtTotal++,
              u.caveId)
            ) {
              if (!l.caveCaptures || typeof l.caveCaptures !== "object")
                l.caveCaptures = {};
              l.caveCaptures[u.caveId] = (l.caveCaptures[u.caveId] ?? 0) + 1;
            }
            (_n(T.sp).types.forEach((R) => {
              l.sintonia[R]++;
            }),
              Ce(),
              v(
                nn
                  ? `Conseguiu! ${w.name} se vinculou a você! Seu time está cheio — ele foi para a reserva.`
                  : `Conseguiu! ${w.name} se vinculou a você!`,
              ),
              ku((R) => R + 1),
              $("caught"));
          } else {
            if (
              (D(0),
              $("busy"),
              await Wn("Ah, não! Ele escapou da Esfera!", 1300),
              await $l(),
              Dn.current.pat.hp <= 0)
            ) {
              if (
                (await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl())
              )
                return Xn(!1);
              return;
            }
            $("menu");
          }
        }
        function g() {
          Xn(!0, !0);
        }
        async function S() {
          let X = _n(En.current.sp);
          if (u.kind === "trainer") {
            ($("busy"),
              await Wn("Não dá para vincular o Pat de um treinador!", 1400),
              $("menu"));
            return;
          }
          if (!X.types.some((j) => l.affinities.includes(j)) || X.essenceOnly) {
            if (l.items.essencia > 0) {
              $("confirmEss");
              return;
            }
            ($("busy"),
              await Wn(
                `Sem afinidade! ${X.name} é do tipo ${X.types.join("/")} — você tem ${l.affinities.join(" e ")}.`,
                1800,
              ),
              await Wn(
                X.essenceOnly
                  ? "Dizem que só a Essência Neutra revela a luz dele..."
                  : "Enfraqueça-o e tente de novo... ou use uma Essência Neutra!",
                1700,
              ),
              $("menu"));
            return;
          }
          wf(!1);
        }
        async function p() {
          if (($("busy"), u.kind === "trainer")) {
            (await Wn("Não dá para fugir de uma batalha de treinador!", 1300),
              $("menu"));
            return;
          }
          if (Math.random() < 0.95)
            (await Wn("Você fugiu em segurança!", 1000), Xn(!1, !1, !0));
          else {
            if (
              (await Wn("Não conseguiu fugir!", 1000),
              await $l(),
              Dn.current.pat.hp <= 0)
            ) {
              if (
                (await Wn(`${Dn.current.sp.name} desmaiou!`, 1200), await vl())
              )
                return Xn(!1);
              return;
            }
            $("menu");
          }
        }
        function x() {
          let X = L.current;
          if (!X) return;
          let w = Math.max(0, X.fighter.pat.hp),
            j = Math.max(0, X.fighter.maxHp - w),
            y = Math.round(j / 2),
            T = (Vn, Bn) => {
              if (!Bn) return 0;
              let $u = Bn.xp - Vn.xp;
              for (let bn = Vn.level; bn < Bn.level; bn++) $u += Io(bn);
              return Math.max(0, $u);
            },
            vn = T(X.origA, l.party[X.aIdx]) + T(X.origB, l.party[X.bIdx]),
            nn = Math.round(vn / 2),
            R = { ...X.origA, xp: X.origA.xp + nn },
            on = { ...X.origB, xp: X.origB.xp + nn };
          if (w > 0)
            ((R.hp = Math.max(1, X.origA.hp - y)),
              (on.hp = Math.max(1, X.origB.hp - y)));
          else ((R.hp = 0), (on.hp = 0));
          ((l.party[X.aIdx] = R),
            (l.party[X.bIdx] = on),
            (L.current = null),
            un(!1));
        }
        function Xn(X, w = !1, j = !1) {
          if (Au.current) return;
          ((Au.current = !0),
            x(),
            D(0),
            $("done"),
            setTimeout(
              () =>
                r({
                  won: X,
                  fled: j,
                  caught: w,
                  captured: Vr.current !== null,
                  capturedSpecies: Vr.current ?? void 0,
                }),
              600,
            ));
        }
        Un.useEffect(() => {
          (async () => {
            if (
              (rl(l, u.foeSp),
              mu(),
              gn(),
              ku((X) => X + 1),
              (U.current = new Map()),
              (E.current = new Map()),
              l.party.forEach((X) => {
                let w = {};
                ((X.afinidades ?? []).forEach((j) => {
                  let y = nl[j];
                  if (y) w[j] = y.usosPorBatalha;
                }),
                  U.current.set(X.uid, w));
              }),
              Ml(En.current),
              await Cn(400),
              u.kind === "wild")
            )
              await Wn(
                `Um ${_n(u.foeSp).name} selvagem apareceu! (Nv ${u.foeLevel})`,
                1700,
              );
            else
              (await Wn(`${u.trainerName} quer batalhar!`, 1500),
                await Wn(`${u.trainerName} enviou ${_n(u.foeSp).name}!`, 1500));
            if (
              (await Wn(`Vai, ${Dn.current.sp.name}!`, 1100),
              o.current && !Au.current)
            )
              $("menu");
          })();
        }, []);
        let qn =
            u.bg === "cave"
              ? "from-[#2b2a45] via-[#3a3852] to-[#1e1d33]"
              : u.bg === "water"
                ? "from-sky-300 via-sky-400 to-blue-500"
                : "from-lime-200 via-green-300 to-emerald-400",
          Yn = jn.current?.sp.types ?? [],
          gu = Dn.current?.sp.types ?? [],
          wu = yu ? 136 : 110,
          Hu = yu ? 148 : 120,
          Fu = Math.sin(Bu * 2) * 4,
          dn = (X, w) => {
            let j = X?.x ?? 0,
              y = (X?.y ?? 0) + (w ? Fu : Fu * 0.8),
              T = X || !0;
            return {
              transform: `translate(${j}px, ${y}px)`,
              transition: X
                ? "transform 250ms ease-in-out"
                : "transform 0.1s linear",
            };
          };
        return O("div", {
          ref: mn,
          className: `h-[100dvh] overflow-hidden w-full bg-gradient-to-b ${qn} flex flex-col select-none relative`,
          style: {
            paddingTop: "var(--safe-area-inset-top)",
            animation: Gu ? "arenashake 0.2s ease-in-out" : void 0,
          },
          children: [
            N("button", {
              onClick: () => {
                window.EV_MUSIC?.playBagCue?.(true);
                B(!0);
              },
              "aria-label": "Abrir mochila",
              style: {
                position: "absolute",
                top: "calc(var(--safe-area-inset-top) + 12px)",
                right: 12,
                width: 44,
                height: 44,
                zIndex: 50,
              },
              className:
                "rounded-2xl bg-amber-400 text-2xl flex items-center justify-center shadow-xl border-b-4 border-amber-600 active:scale-90 active:border-b-0 transition",
              children: "\uD83C\uDF92",
            }),
            O("div", {
              className: "flex-1 min-h-0 flex flex-col justify-center",
              children: [
                O("div", {
                  className: "flex items-start justify-between px-4 pt-2",
                  children: [
                    O("div", {
                      className:
                        "battle-status-opponent rounded-2xl px-3 py-2 shadow-lg w-[46%] max-w-[260px]",
                      children: [
                        O("div", {
                          className: "flex items-center justify-between gap-1",
                          children: [
                            N("span", {
                              className: "battle-nameplate-opponent font-extrabold text-sm truncate",
                              children: jn.current?.sp.name,
                            }),
                            O("span", {
                              className: "text-xs font-bold text-slate-500",
                              children: ["Nv ", En.current?.level],
                            }),
                          ],
                        }),
                        N("div", {
                          className: "flex gap-1 my-1",
                          children: Yn.map((X) => N(L8, { t: X }, X)),
                        }),
                        N(E8, { hp: K, max: jn.current?.maxHp ?? 1 }),
                        O("div", {
                          className:
                            "text-right text-[11px] font-bold text-slate-600",
                          children: [K, "/", jn.current?.maxHp],
                        }),
                        bossSignal && O("div", {
                          role: "status",
                          className: "mt-1 rounded-lg border border-amber-300/70 bg-amber-950/80 px-2 py-1 text-[10px] font-black text-amber-100 animate-pulse",
                          children: ["SINAL DO CHEFE · ", bossSignal.name, " · ", bossSignal.type],
                        }),
                      ],
                    }),
                    O("div", {
                      className: "relative",
                      ref: en,
                      style: dn(ln, !1),
                      children: [
                        N("div", {
                          className:
                            "absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/20 rounded-[50%]",
                        }),
                        f === "catching"
                          ? N("div", {
                              className: `text-6xl ${C >= 3 ? "animate-[wiggle_0.4s_ease-in-out_3]" : C >= 2 ? "animate-[wiggle_0.4s_ease-in-out_2]" : "animate-[wiggle_0.4s_ease-in-out_1]"}`,
                              children: "\uD83D\uDD2E",
                            })
                          : N(In, {
                              sp: En.current.sp,
                              size: wu,
                              fainted: K <= 0,
                              battleMode: K > 0,
                              tScale: 1.5,
                            }),
                        yr &&
                          N("div", {
                            className:
                              "absolute inset-0 bg-white rounded-3xl pointer-events-none",
                            style: { opacity: 0.55 },
                          }),
                      ],
                    }),
                  ],
                }),
                O("div", {
                  className: "flex items-end justify-between px-4 mt-1",
                  children: [
                    O("div", {
                      className: "relative",
                      ref: sn,
                      style: dn(Ul, !0),
                      children: [
                        N("div", {
                          className:
                            "absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/20 rounded-[50%]",
                        }),
                        (() => {
                          let X = Dn.current?.pat?.hybridId,
                            w = X
                              ? Object.values(Y0).find((j) => j.id === X)
                              : void 0;
                          return w
                            ? N(Oe, {
                                def: Dn.current?.pat?.fusionVisual
                                  ? {
                                      ...w,
                                      fusionVisual: Dn.current.pat.fusionVisual,
                                    }
                                  : w,
                                size: Hu,
                                flip: !0,
                                fainted: M <= 0,
                                battleMode: M > 0,
                              })
                            : N(In, {
                                sp: l.party[Z]?.sp ?? "embercub",
                                size: Hu,
                                flip: !0,
                                fainted: M <= 0,
                                battleMode: M > 0,
                                tScale: 1.5,
                              });
                        })(),
                        Er &&
                          N("div", {
                            className:
                              "absolute inset-0 bg-white rounded-3xl pointer-events-none",
                            style: { opacity: 0.55 },
                          }),
                      ],
                    }),
                    O("div", {
                      className:
                        "battle-status-player rounded-2xl px-3 py-2 shadow-lg w-[46%] max-w-[260px]",
                      children: [
                        O("div", {
                          className: "flex items-center justify-between gap-1",
                          children: [
                            N("span", {
                              className: "battle-nameplate-player font-extrabold text-sm truncate",
                              children: Dn.current?.sp.name,
                            }),
                            O("span", {
                              className: "text-xs font-bold text-slate-500",
                              children: ["Nv ", l.party[Z]?.level],
                            }),
                          ],
                        }),
                        N("div", {
                          className: "flex gap-1 my-1",
                          children: gu.map((X) => N(L8, { t: X }, X)),
                        }),
                        N(E8, { hp: M, max: Dn.current?.maxHp ?? 1 }),
                        O("div", {
                          className:
                            "text-right text-[11px] font-bold text-slate-600",
                          children: [M, "/", Dn.current?.maxHp],
                        }),
                        O("div", {
                          className: "mt-1",
                          role: "meter",
                          "aria-label": "Carga de Ressonância do Vínculo",
                          "aria-valuemin": 0,
                          "aria-valuemax": 100,
                          "aria-valuenow": resonanceCharge,
                          children: [
                            O("div", {
                              className: "flex justify-between text-[9px] font-black tracking-wide text-emerald-800",
                              children: [
                                N("span", { children: "RESSONÂNCIA" }),
                                N("span", { children: resonanceCharge >= 100 ? "PRONTA · +18%" : `${resonanceCharge}%` }),
                              ],
                            }),
                            O("div", {
                              className: "h-1.5 w-full overflow-hidden rounded-full bg-black/20",
                              children: N("div", {
                                className: "h-full rounded-full transition-[width] duration-300",
                                style: {
                                  width: `${Math.min(100, resonanceCharge)}%`,
                                  background: resonanceCharge >= 100 ? "linear-gradient(90deg,#fde68a,#34d399)" : "linear-gradient(90deg,#34d399,#a3e635)",
                                  boxShadow: resonanceCharge >= 100 ? "0 0 8px #34d399" : "none",
                                },
                              }),
                            }),
                          ],
                        }),
                        N("div", {
                          className:
                            "h-1.5 w-full rounded-full bg-black/20 overflow-hidden mt-1",
                          children: N("div", {
                            className: "h-full bg-sky-400",
                            style: {
                              width: `${Math.min(100, ((l.party[Z]?.xp ?? 0) / Io(l.party[Z]?.level ?? 1)) * 100)}%`,
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            O("div", {
              className: "absolute inset-0 pointer-events-none overflow-hidden",
              style: { zIndex: 40 },
              children: [
                attackScene && window.EV_ATTACK_CHOREOGRAPHY?.View &&
                  N(
                    window.EV_ATTACK_CHOREOGRAPHY.View,
                    { scene: attackScene },
                    `battle-vfx-${attackScene.runId}`,
                  ),
                Pn &&
                  (() => {
                    let X = yQ[Pn.type],
                      w = Pn.projSize ?? X.projSize,
                      j = (Pn.go ? Pn.x1 : Pn.x0) - w / 2,
                      y = (Pn.go ? Pn.y1 : Pn.y0) - w / 2;
                    return N("div", {
                      className: "absolute",
                      style: {
                        left: 0,
                        top: 0,
                        width: w,
                        height: w,
                        transform: `translate(${j}px, ${y}px)`,
                        transition: `transform ${Pn.travelMs ?? X.travelMs}ms linear`,
                      },
                      children: Pn.proj
                        ? N(Le, {
                            id: Pn.proj,
                            size: w,
                            palette: Pn.palette,
                          })
                        : N(Ee, { theme: X }),
                    });
                  })(),
                Nu && N(Xe, { kind: Nu.kind, x: Nu.x, y: Nu.y }, Nu.id),
                tu.map((X) => N(hQ, { p: X }, `t${X.id}`)),
                Vo.map((X) => N(hQ, { p: X }, `b${X.id}`)),
                Kn.map((X) =>
                  N(
                    "div",
                    {
                      className: "absolute rounded-full",
                      style: {
                        left: X.x,
                        top: X.y,
                        width: 26,
                        height: 26,
                        background: X.color,
                        boxShadow: `0 0 18px 8px ${X.color}`,
                        animation: "sparkburst 0.5s ease-out forwards",
                      },
                    },
                    X.id,
                  ),
                ),
                fl.map((X) =>
                  N(
                    "div",
                    {
                      className: "absolute",
                      style: {
                        left: X.x,
                        top: X.y,
                        transform: "translate(-50%,-100%)",
                      },
                      children: O("div", {
                        className: "flex flex-col items-center",
                        style: { animation: "dmgfloat 0.8s ease-out forwards" },
                        children: [
                          X.crit &&
                            N("div", {
                              className:
                                "text-yellow-300 font-black text-xl leading-none",
                              style: {
                                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                              },
                              children: "CRÍTICO!",
                            }),
                          N("div", {
                            className: `font-black text-2xl leading-tight ${X.crit ? "text-yellow-300" : "text-white"}`,
                            style: { textShadow: "0 2px 4px rgba(0,0,0,0.8)" },
                            children: X.text,
                          }),
                        ],
                      }),
                    },
                    X.id,
                  ),
                ),
              ],
            }),
            Y &&
              N("div", {
                className:
                  "absolute inset-x-0 top-[36%] z-50 flex justify-center px-6 pointer-events-none",
                children: O("div", {
                  className:
                    "bg-violet-600/95 text-white font-black text-lg px-6 py-3 rounded-2xl shadow-2xl border-2 border-violet-300 text-center",
                  style: { animation: "instinctpop 0.35s ease-out" },
                  children: ["\uD83D\uDEE1️ ", Y],
                }),
              }),
            N("div", {
              className:
                "mx-3 mt-2 bg-[#fffbe8] border-4 border-[#8a5a33] rounded-2xl px-4 py-3 h-[92px] overflow-hidden shadow-lg flex-none",
              children: N("p", {
                className: "font-bold text-slate-800 text-[15px] leading-snug",
                children: _,
              }),
            }),
            O("div", {
              className: "mx-3 mt-2 flex-none",
              style: {
                paddingBottom: "max(12px, env(safe-area-inset-bottom))",
              },
              children: [
                f === "menu" &&
                  O("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      N(qf, {
                        icon: N(Ir, { size: 20 }),
                        label: "LUTAR",
                        color: "bg-red-500",
                        onClick: () => $("moves"),
                      }),
                      N(qf, {
                        icon: N(Pr, { size: 20 }),
                        label: "PATS",
                        color: "bg-sky-500",
                        onClick: () => $("pats"),
                      }),
                      N(qf, {
                        icon: N($o, { size: 20 }),
                        label: "TÉCNICAS",
                        color: "bg-violet-500",
                        onClick: () => $("techs"),
                      }),
                      N(qf, {
                        icon: N(b1, { size: 20 }),
                        label: "VINCULAR",
                        color: "bg-amber-500",
                        onClick: S,
                      }),
                      N(qf, {
                        icon: N(io, { size: 20 }),
                        label: "FUGIR",
                        color: "bg-slate-500",
                        onClick: p,
                      }),
                    ],
                  }),
                f === "moves" &&
                  O("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      Dn.current.sp.moves.map((X, w) =>
                        O(
                          "button",
                          {
                            onClick: () => G8(w),
                            className:
                              "rounded-2xl p-2.5 text-left text-white shadow-lg active:scale-95 transition border-b-4 border-black/20",
                            style: { background: On[X.type].color },
                            children: [
                              O("div", {
                                className:
                                  "font-extrabold text-sm flex items-center justify-between",
                                children: [
                                  X.name,
                                  l.affinities.includes(X.type) &&
                                    N(Nr, { size: 14 }),
                                ],
                              }),
                              O("div", {
                                className: "text-[11px] opacity-90 font-bold",
                                children: [
                                  X.type,
                                  " • Pwr ",
                                  X.power,
                                  " • ",
                                  X.acc,
                                  "%",
                                ],
                              }),
                            ],
                          },
                          w,
                        ),
                      ),
                      N("button", {
                        onClick: () => $("menu"),
                        className:
                          "col-span-2 rounded-2xl bg-slate-600 text-white font-bold py-2 active:scale-95 transition",
                        children: "← Voltar",
                      }),
                    ],
                  }),
                f === "techs" &&
                  (() => {
                    let X = l.party[Z],
                      w = X ? (U.current.get(X.uid) ?? {}) : {},
                      j = (X?.afinidades ?? []).filter((y) => {
                        let T = nl[y];
                        return T && T.tipo === "tecnica";
                      });
                    return O("div", {
                      className:
                        "bg-white/95 rounded-2xl p-3 shadow-lg max-h-[260px] overflow-y-auto",
                      children: [
                        O("p", {
                          className:
                            "font-extrabold text-slate-800 text-sm mb-2",
                          children: ["Técnicas — ", Dn.current?.sp.name],
                        }),
                        j.length === 0 &&
                          N("p", {
                            className: "text-slate-500 text-sm font-bold mb-2",
                            children: "Nenhuma técnica disponível.",
                          }),
                        N("div", {
                          className: "space-y-2",
                          children: j.map((y) => {
                            let T = nl[y],
                              vn = y === "fusao" || y === "fusao-instintiva",
                              nn = w[y] ?? T.usosPorBatalha,
                              R = nn <= 0,
                              on = !R && (y === "cura" || y === "grito"),
                              Vn = () => {
                                if (L.current) {
                                  (async () => {
                                    (await Wn("já fundido", 1100), $("techs"));
                                  })();
                                  return;
                                }
                                (k(y), b(-1), $("fusePartner"));
                              };
                            return O(
                              "button",
                              {
                                disabled: R,
                                onClick: () => {
                                  if (on) gf(y);
                                  else if (vn) Vn();
                                },
                                className: `w-full text-left rounded-xl p-2.5 border-2 transition ${R ? "bg-slate-100 border-slate-200 opacity-60" : "bg-violet-50 border-violet-200 active:scale-[0.98]"}`,
                                children: [
                                  O("div", {
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      N("span", {
                                        className:
                                          "font-extrabold text-sm text-slate-800",
                                        children: T.nome,
                                      }),
                                      N("span", {
                                        className:
                                          "text-[11px] font-bold text-slate-500",
                                        children: `usos: ${nn}`,
                                      }),
                                    ],
                                  }),
                                  N("p", {
                                    className:
                                      "text-[12px] text-slate-600 font-bold mt-0.5",
                                    children: T.descricao,
                                  }),
                                ],
                              },
                              y,
                            );
                          }),
                        }),
                        N("button", {
                          onClick: () => $("menu"),
                          className:
                            "w-full mt-2 rounded-xl bg-slate-600 text-white font-bold py-2 active:scale-95",
                          children: "← Voltar",
                        }),
                      ],
                    });
                  })(),
                f === "fusePartner" &&
                  (() => {
                    let X = l.party[Z],
                      w = nl[z]?.nome ?? "Fusão",
                      j = i,
                      y = j >= 0 ? l.party[j] : void 0,
                      T = y && y.hp > 0 && j !== Z ? y : null,
                      vn = l.party
                        .slice(0, 3)
                        .map((nn, R) => ({ p: nn, i: R }))
                        .filter(({ p: nn, i: R }) => R !== Z && nn.hp > 0);
                    if (T && X && X.hp > 0) {
                      let nn = zn(X.sp, X.level),
                        R = zn(T.sp, T.level),
                        on = Z3(X, T),
                        Vn = [
                          {
                            label: "HP",
                            base: nn.maxHp + R.maxHp,
                            fin: on.stats.maxHp,
                          },
                          {
                            label: "ATK",
                            base: nn.atk + R.atk,
                            fin: on.stats.atk,
                          },
                          {
                            label: "DEF",
                            base: nn.def + R.def,
                            fin: on.stats.def,
                          },
                          {
                            label: "VEL",
                            base: nn.vel + R.vel,
                            fin: on.stats.vel,
                          },
                        ];
                      return O("div", {
                        className:
                          "bg-white/95 rounded-2xl p-3 shadow-lg max-h-[260px] overflow-y-auto",
                        children: [
                          O("p", {
                            className:
                              "font-extrabold text-slate-800 text-sm mb-2 flex items-center gap-1.5",
                            children: [
                              N(Nr, { size: 16, className: "text-violet-600" }),
                              " Prévia — ",
                              w,
                            ],
                          }),
                          O("div", {
                            className:
                              "bg-violet-50 border-2 border-violet-200 rounded-xl p-3 mb-2",
                            children: [
                              O("div", {
                                className:
                                  "flex items-center justify-center gap-2 mb-1",
                                children: [
                                  N(In, { sp: X.sp, size: 44 }),
                                  N("span", {
                                    className:
                                      "font-black text-violet-600 text-lg",
                                    children: "＋",
                                  }),
                                  N(In, { sp: T.sp, size: 44 }),
                                  N("span", {
                                    className: "font-black text-violet-500 text-lg",
                                    children: "=",
                                  }),
                                  N(Oe, {
                                    def: {
                                      id: on.hybridId ?? `preview-${X.sp}-${T.sp}`,
                                      name: on.name,
                                      types: on.types,
                                      sprite: on.sprite,
                                      fusionVisual:
                                        window.EV_SIGNATURES?.fusionVisual(X, T, on),
                                    },
                                    size: 54,
                                  }),
                                ],
                              }),
                              N("p", {
                                className:
                                  "text-center font-black text-slate-800 text-base",
                                children: on.name,
                              }),
                              O("p", {
                                className:
                                  "text-center text-slate-500 text-xs font-bold mb-2",
                                children: ["Nv ", on.level],
                              }),
                              N("div", {
                                className:
                                  "flex items-center justify-center gap-1.5 mb-2",
                                children: on.types.map((Bn) =>
                                  N(L8, { t: Bn }, Bn),
                                ),
                              }),
                              N("div", {
                                className: "space-y-1",
                                children: Vn.map((Bn) =>
                                  O(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between bg-white/70 rounded-lg px-2.5 py-1",
                                      children: [
                                        N("span", {
                                          className:
                                            "text-[11px] font-extrabold text-slate-500",
                                          children: Bn.label,
                                        }),
                                        O("span", {
                                          className:
                                            "text-sm font-extrabold text-slate-700",
                                          children: [
                                            Bn.base,
                                            " ",
                                            N("span", {
                                              className: "text-violet-500",
                                              children: "→",
                                            }),
                                            " ",
                                            N("span", {
                                              className: "text-violet-700",
                                              children: Bn.fin,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    Bn.label,
                                  ),
                                ),
                              }),
                              N("p", {
                                className:
                                  "text-center text-[11px] font-bold text-slate-400 mt-1.5",
                                children:
                                  "soma dos stats + 10% de bônus de fusão",
                              }),
                            ],
                          }),
                          O("button", {
                            onClick: () => Uo(),
                            className:
                              "w-full rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-extrabold py-2.5 border-b-4 border-violet-800 active:scale-95 active:border-b-0 transition flex items-center justify-center gap-2",
                            children: [N(Nr, { size: 16 }), " Fundir"],
                          }),
                          N("button", {
                            onClick: () => b(-1),
                            className:
                              "w-full mt-2 rounded-xl bg-slate-600 text-white font-bold py-2 active:scale-95",
                            children: "← Escolher outro",
                          }),
                        ],
                      });
                    }
                    return O("div", {
                      className:
                        "bg-white/95 rounded-2xl p-3 shadow-lg max-h-[260px] overflow-y-auto",
                      children: [
                        O("p", {
                          className:
                            "font-extrabold text-slate-800 text-sm mb-1 flex items-center gap-1.5",
                          children: [
                            N(Nr, { size: 16, className: "text-violet-600" }),
                            " ",
                            w,
                            " — escolha um parceiro",
                          ],
                        }),
                        O("p", {
                          className:
                            "text-[12px] text-slate-500 font-bold mb-2",
                          children: [
                            "Pré-visualize a fusão com o Pat ativo",
                            X ? ` (${_n(X.sp).name})` : "",
                            ".",
                          ],
                        }),
                        vn.length === 0
                          ? N("p", {
                              className:
                                "text-slate-500 text-sm font-bold text-center py-3",
                              children:
                                "Nenhum parceiro disponível — os outros Pats estão desmaiados.",
                            })
                          : N("div", {
                              className: "space-y-2",
                              children: vn.map(({ p: nn, i: R }) => {
                                let on = _n(nn.sp),
                                  Vn = zn(nn.sp, nn.level);
                                return O(
                                  "button",
                                  {
                                    onClick: () => b(R),
                                    className:
                                      "w-full flex items-center gap-2 p-1.5 rounded-xl bg-violet-50 border-2 border-violet-200 active:scale-[0.98] transition text-left",
                                    children: [
                                      N(In, { sp: nn.sp, size: 44 }),
                                      O("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          O("div", {
                                            className:
                                              "font-bold text-sm truncate",
                                            children: [
                                              on.name,
                                              " ",
                                              O("span", {
                                                className:
                                                  "text-slate-500 text-xs",
                                                children: ["Nv ", nn.level],
                                              }),
                                            ],
                                          }),
                                          N(E8, { hp: nn.hp, max: Vn.maxHp }),
                                        ],
                                      }),
                                      N("span", {
                                        className:
                                          "text-violet-600 text-xs font-extrabold px-2",
                                        children: "Ver →",
                                      }),
                                    ],
                                  },
                                  nn.uid,
                                );
                              }),
                            }),
                        N("button", {
                          onClick: () => $("techs"),
                          className:
                            "w-full mt-2 rounded-xl bg-slate-600 text-white font-bold py-2 active:scale-95",
                          children: "← Voltar",
                        }),
                      ],
                    });
                  })(),
                f === "pats" &&
                  O("div", {
                    className:
                      "bg-white/95 rounded-2xl p-2 shadow-lg max-h-[240px] overflow-y-auto",
                    children: [
                      e &&
                        N("p", {
                          className:
                            "text-center font-extrabold text-red-600 text-sm mb-1",
                          children: "Escolha o próximo Pat!",
                        }),
                      l.party.slice(0, 3).map((X, w) => {
                        let j = _n(X.sp),
                          y = zn(X.sp, X.level),
                          T = w === Z;
                        return O(
                          "div",
                          {
                            className: `flex items-center gap-2 p-1.5 rounded-xl ${T ? "bg-amber-100" : ""}`,
                            children: [
                              N(In, { sp: X.sp, size: 44, fainted: X.hp <= 0 }),
                              O("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  O("div", {
                                    className: "font-bold text-sm truncate",
                                    children: [
                                      j.name,
                                      " ",
                                      O("span", {
                                        className: "text-slate-500 text-xs",
                                        children: ["Nv ", X.level],
                                      }),
                                    ],
                                  }),
                                  N(E8, { hp: X.hp, max: y.maxHp }),
                                ],
                              }),
                              !T &&
                                X.hp > 0 &&
                                N("button", {
                                  onClick: () => T8(w, e),
                                  className:
                                    "bg-sky-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-xl active:scale-95",
                                  children: "Trocar",
                                }),
                              X.hp > 0 &&
                                X.hp < y.maxHp &&
                                O("button", {
                                  onClick: () => d0(w),
                                  className:
                                    "bg-green-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-xl active:scale-95 flex items-center gap-1",
                                  children: [
                                    N(Fl, { size: 12 }),
                                    " ×",
                                    l.items.pocao,
                                  ],
                                }),
                            ],
                          },
                          X.uid,
                        );
                      }),
                      !e &&
                        N("button", {
                          onClick: () => $("menu"),
                          className:
                            "w-full mt-1 rounded-xl bg-slate-600 text-white font-bold py-2 active:scale-95",
                          children: "← Voltar",
                        }),
                    ],
                  }),
                f === "confirmEss" &&
                  O("div", {
                    className:
                      "bg-white/95 rounded-2xl p-4 shadow-lg text-center",
                    children: [
                      N("p", {
                        className: "font-extrabold text-slate-800 mb-1",
                        children: "Sem afinidade!",
                      }),
                      O("p", {
                        className: "text-sm text-slate-600 mb-3",
                        children: [
                          "Usar uma ",
                          N("b", { children: "Essência Neutra" }),
                          " para vincular este Pat? (você tem ",
                          l.items.essencia,
                          ")",
                        ],
                      }),
                      O("div", {
                        className: "flex gap-2 justify-center",
                        children: [
                          N("button", {
                            onClick: () => wf(!0),
                            className:
                              "bg-amber-500 text-white font-extrabold px-6 py-2.5 rounded-2xl active:scale-95",
                            children: "Sim!",
                          }),
                          N("button", {
                            onClick: () => $("menu"),
                            className:
                              "bg-slate-400 text-white font-extrabold px-6 py-2.5 rounded-2xl active:scale-95",
                            children: "Não",
                          }),
                        ],
                      }),
                    ],
                  }),
                f === "caught" &&
                  N("button", {
                    onClick: g,
                    style: {
                      background: "#facc15",
                      color: "#000",
                      padding: "12px 24px",
                      borderRadius: 12,
                      marginTop: 12,
                    },
                    className:
                      "w-full font-extrabold text-lg shadow-lg border-b-4 border-yellow-600 active:scale-95 active:border-b-0 transition",
                    children: "Continuar",
                  }),
                (f === "busy" ||
                  f === "intro" ||
                  f === "catching" ||
                  f === "done") &&
                  O("div", {
                    className:
                      "flex items-center justify-center gap-2 text-white/90 font-bold py-4",
                    children: [
                      N(zo, { size: 18, className: "animate-pulse" }),
                      " ...",
                    ],
                  }),
              ],
            }),
            f === "evolve" &&
              A &&
              O("div", {
                className:
                  "fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-6 text-center",
                children: [
                  N("style", {
                    children:
                      "@keyframes evopulse { 0%,100%{transform:scale(1);filter:brightness(1)} 50%{transform:scale(1.25);filter:brightness(1.6)} }",
                  }),
                  N("div", {
                    style: { animation: "evopulse 0.9s ease-in-out infinite" },
                    children: N(In, { sp: A.to, size: 170, bob: !1 }),
                  }),
                  N("p", {
                    className:
                      "text-white font-extrabold text-lg mt-6 leading-relaxed",
                    children: _,
                  }),
                  N("div", {
                    className: "flex gap-2 mt-3",
                    children: _n(A.to).types.map((X) => N(L8, { t: X }, X)),
                  }),
                ],
              }),
            W && N(Vf, {
              gs: n,
              onClose: () => {
                window.EV_MUSIC?.playBagCue?.(false);
                B(!1);
              },
            }),
            N("style", {
              children: `@keyframes wiggle { 0%,100%{transform:rotate(0)} 25%{transform:rotate(-14deg)} 75%{transform:rotate(14deg)} }
  @keyframes dmgfloat { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(-48px);opacity:0} }
  @keyframes arenashake { 0%,100%{transform:translate(0,0)} 25%{transform:translate(4px,-3px)} 50%{transform:translate(-4px,3px)} 75%{transform:translate(3px,-1px)} }
  @keyframes sparkburst { 0%{transform:translate(-50%,-50%) scale(0.35);opacity:1} 100%{transform:translate(-50%,-50%) scale(2.8);opacity:0} }
  @keyframes fxmove { 0%{transform:rotate(var(--rot,0deg)) scale(1);opacity:1} 100%{transform:translate(var(--dx,0px),var(--dy,0px)) rotate(var(--rot,0deg)) scale(0.25);opacity:0} }
  @keyframes fxring { 0%{transform:scale(0.3);opacity:0.9} 100%{transform:scale(2.4);opacity:0} }
  @keyframes fxflick { from{transform:rotate(45deg) scale(1)} to{transform:rotate(42deg) scale(1.14,0.9)} }
  @keyframes fxspin { to{transform:rotate(360deg)} }
  @keyframes fxpulse { from{transform:scale(1);opacity:0.85} to{transform:scale(1.2);opacity:1} }
  @keyframes spin-leaf { from{transform:rotate(0deg) scale(1)} 50%{transform:rotate(180deg) scale(1.12)} to{transform:rotate(360deg) scale(1)} }
  @keyframes multi-seed { 0%,100%{transform:translate(0,0) rotate(0deg)} 25%{transform:translate(2px,-3px) rotate(8deg)} 50%{transform:translate(-2px,1px) rotate(-6deg)} 75%{transform:translate(1px,3px) rotate(-4deg)} }
  @keyframes spark-crackle { 0%,100%{transform:scale(1) skewX(0deg);opacity:1} 30%{transform:scale(1.28,0.82) skewX(-8deg);opacity:0.8} 60%{transform:scale(0.88,1.18) skewX(7deg);opacity:1} }
  @keyframes speed-bolt { 0%{transform:translateY(-170px) scaleY(1.3);opacity:0} 22%{transform:translateY(0) scaleY(1);opacity:1} 65%{transform:translateY(0) scaleY(1);opacity:1} 100%{transform:translateY(0) scaleY(1);opacity:0} }
  @keyframes wind-blades { 0%,100%{transform:translateY(0) rotate(-10deg)} 50%{transform:translateY(-7px) rotate(10deg)} }
  @keyframes fang-snap { 0%{transform:translateY(var(--dy,-40px)) scale(1.15);opacity:0.55} 30%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(0) scale(1);opacity:1} }
  @keyframes vine-lash { 0%{transform:rotate(-38deg) scale(0.65);opacity:0.4} 35%{transform:rotate(4deg) scale(1.06);opacity:1} 100%{transform:rotate(10deg) scale(1);opacity:0.95} }
  @keyframes ember-flick { from{transform:scale(1) rotate(-6deg);opacity:0.9} to{transform:scale(1.16) rotate(6deg);opacity:1} }
  @keyframes flame-cone { 0%,100%{transform:scaleX(1) scaleY(1)} 50%{transform:scaleX(1.12) scaleY(0.9)} }
  @keyframes water-jet { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(1.14)} }
  @keyframes bubble-float { from{transform:translateY(0) scale(1)} to{transform:translateY(-5px) scale(1.08)} }
  @keyframes mushroom-rise { 0%{transform:translateY(46px) scale(0.55);opacity:0.6} 55%{transform:translateY(0) scale(1.08);opacity:1} 100%{transform:translateY(-6px) scale(1);opacity:1} }
  @keyframes wave-crash { 0%{transform:translateX(-190px) scaleY(0.7);opacity:0.5} 45%{transform:translateX(-30px) scaleY(1.05);opacity:1} 100%{transform:translateX(0) scaleY(1);opacity:1} }
  @keyframes rock-fall { 0%{transform:translateY(-90px) rotate(-18deg);opacity:0} 25%{opacity:1} 100%{transform:translateY(0) rotate(6deg);opacity:1} }
  @keyframes tail-splash { 0%{transform:rotate(-24deg) scale(0.7);opacity:0.5} 45%{transform:rotate(6deg) scale(1.08);opacity:1} 100%{transform:rotate(10deg) scale(1);opacity:0.95} }
  @keyframes claw-slash { 0%{transform:translateX(-34px) scaleX(0.35);opacity:0} 40%{transform:translateX(4px) scaleX(1.12);opacity:1} 100%{transform:translateX(0) scaleX(1);opacity:0.9} }
  @keyframes fist-punch { 0%{transform:scale(0.35);opacity:0} 45%{transform:scale(1.18);opacity:1} 100%{transform:scale(1);opacity:1} }
  @keyframes avalanche-fall { 0%{transform:translateY(0) rotate(-14deg);opacity:0} 18%{opacity:1} 100%{transform:translateY(170px) rotate(10deg);opacity:1} }
  @keyframes quake-rumble { 0%{transform:translateX(0) scale(0.6);opacity:0} 30%{transform:translateX(-4px) scale(1);opacity:1} 45%{transform:translateX(4px)} 60%{transform:translateX(-3px)} 75%{transform:translateX(3px)} 100%{transform:translateX(0) scale(1);opacity:1} }
  @keyframes dust-rise { 0%{transform:translateY(10px) scale(0.6);opacity:0} 40%{opacity:0.9} 100%{transform:translateY(-46px) scale(1.3);opacity:0} }
  @keyframes dust-fall { 0%{transform:translateY(-70px) scale(0.6);opacity:0} 25%{opacity:1} 100%{transform:translateY(40px) scale(1);opacity:0.9} }
  @keyframes pillar-rise { 0%{transform:translateY(70px) scaleY(0.25);opacity:0} 60%{opacity:1} 100%{transform:translateY(0) scaleY(1);opacity:1} }
  @keyframes vortex-implode { 0%{transform:scale(1.5) rotate(0deg);opacity:0.4} 55%{transform:scale(1) rotate(-160deg);opacity:1} 100%{transform:scale(0.35) rotate(-320deg);opacity:0.95} }
  @keyframes geyser-burst { 0%{transform:scaleY(0.15);opacity:0.5} 55%{transform:scaleY(1.1);opacity:1} 100%{transform:scaleY(1);opacity:1} }
  @keyframes veil-descend { 0%{transform:translateY(-70px);opacity:0} 60%{opacity:1} 100%{transform:translateY(0);opacity:0.96} }
  @keyframes mist-hover { 0%{transform:translate(0,0) scale(1);opacity:0.65} 100%{transform:translate(10px,-12px) scale(1.18);opacity:0.95} }
  @keyframes flash-burst { 0%{transform:scale(0.25);opacity:0} 30%{opacity:1} 100%{transform:scale(1.9);opacity:0} }
  @keyframes petal-swirl { 0%{transform:translate(0,-40px) rotate(-40deg);opacity:0} 20%{opacity:1} 100%{transform:translate(26px,130px) rotate(220deg);opacity:0.9} }
  @keyframes volt-fall { 0%{transform:translateY(-240px) scaleY(1.4);opacity:0} 25%{transform:translateY(0) scaleY(1);opacity:1} 70%{transform:translateY(0) scaleY(1);opacity:1} 100%{transform:translateY(0) scaleY(1);opacity:0} }
  @keyframes hybridspin { to{transform:rotate(360deg)} }
  @keyframes hybridring { 0%{transform:scale(0.3);opacity:0.9} 100%{transform:scale(2.6);opacity:0} }
  @keyframes fuseSlideL { 0%{transform:translateX(0) scale(1);opacity:1} 75%{transform:translateX(92px) scale(1);opacity:1} 100%{transform:translateX(92px) scale(0.55);opacity:0} }
  @keyframes fuseSlideR { 0%{transform:translateX(0) scale(1);opacity:1} 75%{transform:translateX(-92px) scale(1);opacity:1} 100%{transform:translateX(-92px) scale(0.55);opacity:0} }
  @keyframes fuseFlash { 0%{opacity:0} 25%{opacity:0.85} 100%{opacity:0} }
  @keyframes fuseReveal { 0%{opacity:0;transform:scale(0.4)} 60%{opacity:1;transform:scale(1.12)} 100%{opacity:1;transform:scale(1)} }
  @keyframes fuseGlow { 0%,100%{filter:drop-shadow(0 0 10px rgba(255,255,255,0.6)) brightness(1)} 50%{filter:drop-shadow(0 0 26px rgba(255,255,255,0.95)) brightness(1.3)} }
  @keyframes embercub-spiral { 0%{transform:translate(0,0) rotate(0deg) scale(1)} 25%{transform:translate(7px,-6px) rotate(90deg) scale(1.05)} 50%{transform:translate(0,-11px) rotate(180deg) scale(1.09)} 75%{transform:translate(-7px,-6px) rotate(270deg) scale(1.05)} 100%{transform:translate(0,0) rotate(360deg) scale(1)} }
  @keyframes embercub-jaws-snap { 0%{transform:translateY(var(--dy,-44px)) scale(1.12);opacity:0.6} 35%{transform:translateY(0) scale(1);opacity:1} 60%{transform:translateY(0) scale(0.96);opacity:1} 100%{transform:translateY(var(--dy,-44px)) scale(1.12);opacity:0.6} }`,
            }),
          ],
        });
      }
      function qf({ icon: n, label: u, color: r, onClick: l }) {
        return O("button", {
          onClick: l,
          className: `${r} text-white rounded-2xl py-3.5 font-extrabold text-base shadow-lg border-b-4 border-black/20 active:scale-95 active:border-b-0 transition flex items-center justify-center gap-2`,
          children: [n, u],
        });
      }
      function Oe({ def: n, size: u = 96, flip: r, fainted: l, bob: o }) {
        let f = Un.useRef(null);
        return (
          Un.useEffect(() => {
            let $ = f.current;
            if (!$) return;
            let _ = $.getContext("2d");
            if (!_) return;
            let v = 2;
            (($.width = u * v),
              ($.height = u * v),
              _.setTransform(v, 0, 0, v, 0, 0),
              _.clearRect(0, 0, u, u));
            let Z = {
              id: n.id,
              name: n.name,
              types: n.types,
              stage: 0,
              base: { hp: 10, atk: 10, def: 10, vel: 10 },
              moves: [],
              dex: "",
              feature: n.sprite,
              fusionVisual: n.fusionVisual,
            };
            So(_, Z, u / 2, u / 2, u, { flip: r, fainted: l, t: 1.3 });
          }, [n, u, r, l]),
          O(gl, {
            children: [
              N("style", {
                children:
                  "@keyframes hybridbob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }",
              }),
              N("canvas", {
                ref: f,
                style: {
                  width: u,
                  height: u,
                  imageRendering: "pixelated",
                  animation: o ? "hybridbob 2.2s ease-in-out infinite" : void 0,
                },
              }),
            ],
          })
        );
      }
      function Ee({ theme: n }) {
        let u = n.projSize,
          r = { width: u, height: u, position: "relative" };
        switch (n.projKind) {
          case "flame":
            return O("div", {
              style: r,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: -7,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${n.glow} 0%, ${n.core} 45%, transparent 70%)`,
                    filter: "blur(3px)",
                    animation: "fxpulse 0.22s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: 2,
                    borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
                    background: `linear-gradient(180deg, ${n.glow}, ${n.core} 60%, ${n.mid})`,
                    boxShadow: `0 0 12px 4px ${n.core}`,
                    animation: "fxflick 0.24s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "34%",
                    borderRadius: "50%",
                    background: "#fff7d6",
                    boxShadow: `0 0 6px 2px ${n.glow}`,
                  },
                }),
              ],
            });
          case "bubble":
            return O("div", {
              style: r,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, ${n.glow} 22%, ${n.core} 60%, ${n.mid} 100%)`,
                    border: `2px solid ${n.glow}`,
                    boxShadow: `0 0 14px 4px ${n.core}`,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "22%",
                    top: "13%",
                    width: "26%",
                    height: "26%",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                  },
                }),
              ],
            });
          case "seed":
            return O("div", {
              style: { ...r, animation: "fxspin 0.6s linear infinite" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: 1,
                    borderRadius: "75% 8% 75% 8%",
                    background: `linear-gradient(135deg, ${n.glow}, ${n.core} 55%, ${n.mid})`,
                    boxShadow: `0 0 10px 3px ${n.core}`,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "47%",
                    top: "10%",
                    width: "6%",
                    height: "80%",
                    background: n.mid,
                    borderRadius: 2,
                  },
                }),
              ],
            });
          case "bolt":
            return N("div", {
              style: r,
              children: N("svg", {
                viewBox: "0 0 24 34",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: `drop-shadow(0 0 6px ${n.core})`,
                  animation: "fxpulse 0.16s ease-in-out infinite alternate",
                },
                children: N("polygon", {
                  points: "15,0 5,19 11.5,19 9,34 20,14 13,14",
                  fill: n.core,
                  stroke: n.glow,
                  strokeWidth: 1.6,
                  strokeLinejoin: "round",
                }),
              }),
            });
          case "rock":
            return N("div", {
              style: {
                ...r,
                animation: "fxspin 0.7s linear infinite",
                filter: `drop-shadow(0 0 6px ${n.core})`,
              },
              children: N("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  clipPath:
                    "polygon(25% 5%, 70% 0%, 100% 35%, 85% 90%, 40% 100%, 5% 65%)",
                  background: `linear-gradient(135deg, ${n.glow}, ${n.core} 55%, ${n.mid})`,
                },
              }),
            });
          case "wisp":
            return O("div", {
              style: r,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: -5,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${n.glow} 0%, ${n.core} 40%, transparent 72%)`,
                    filter: "blur(2px)",
                    animation: "fxpulse 0.5s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "30%",
                    borderRadius: "50%",
                    background: n.mid,
                    opacity: 0.9,
                  },
                }),
              ],
            });
        }
      }
      function hQ({ p: n }) {
        if (n.shape === "ring") {
          let l = n.size;
          return N("div", {
            className: "absolute rounded-full",
            style: {
              left: n.x - l / 2,
              top: n.y - l / 2,
              width: l,
              height: l,
              border: `4px solid ${n.color}`,
              animation: `fxring ${n.dur}s ease-out forwards`,
            },
          });
        }
        if (n.shape === "hring") {
          let l = n.size;
          return N("div", {
            className: "absolute rounded-full",
            style: {
              left: n.x - l / 2,
              top: n.y - l / 2,
              width: l,
              height: l,
              border: `5px solid ${n.color}`,
              boxShadow: `0 0 14px 3px ${n.color}`,
              animation: `hybridring ${n.dur}s ease-out forwards`,
            },
          });
        }
        let u = {
            position: "absolute",
            animation: `fxmove ${n.dur}s ease-out forwards`,
            ["--dx"]: `${n.dx}px`,
            ["--dy"]: `${n.dy}px`,
            ["--rot"]: `${n.rot}deg`,
          },
          r = `0 0 8px 2px ${n.color}`;
        switch (n.shape) {
          case "leaf": {
            let l = n.size,
              o = n.size * 0.72;
            return N("div", {
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - o / 2,
                width: l,
                height: o,
                background: n.color,
                borderRadius: "75% 8% 75% 8%",
                boxShadow: r,
              },
            });
          }
          case "shard": {
            let l = n.size;
            return N("div", {
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - l / 2,
                width: l,
                height: l,
                background: n.color,
                clipPath:
                  "polygon(20% 0%, 80% 10%, 100% 70%, 60% 100%, 10% 80%)",
                boxShadow: r,
              },
            });
          }
          case "spark": {
            let l = n.size * 2.4,
              o = Math.max(2, n.size * 0.8);
            return N("div", {
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - o / 2,
                width: l,
                height: o,
                background: n.color,
                borderRadius: "50%",
                boxShadow: r,
              },
            });
          }
          case "drop": {
            let l = n.size;
            return N("div", {
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - l / 2,
                width: l,
                height: l,
                background: n.color,
                borderRadius: "50% 50% 50% 8%",
                boxShadow: r,
              },
            });
          }
          case "wisp": {
            let l = n.size;
            return N("div", {
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - l / 2,
                width: l,
                height: l,
                background: `radial-gradient(circle, ${n.color} 30%, transparent 70%)`,
                borderRadius: "50%",
                filter: "blur(1px)",
                opacity: 0.85,
              },
            });
          }
          default: {
            let l = n.size;
            return N("div", {
              className: "absolute rounded-full",
              style: {
                ...u,
                left: n.x - l / 2,
                top: n.y - l / 2,
                width: l,
                height: l,
                background: n.color,
                boxShadow: r,
              },
            });
          }
        }
      }
      function Le({ id: n, size: u, palette: paletteProp }) {
        let r = { width: u, height: u, position: "relative" },
          colors = Array.isArray(paletteProp) ? paletteProp : [],
          primary = colors[0] || "#a78bfa",
          secondary = colors[1] || "#38bdf8",
          glow = colors[2] || "#ffffff",
          shade = colors[3] || "#4c1d95",
          accent = colors[4] || secondary;
        switch (n) {
          case "signature-flare":
          case "signature-comet":
            return O("div", {
              style: { ...r, animation: "fxpulse 0.24s ease-in-out infinite alternate" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8%",
                    borderRadius: "50% 50% 48% 52% / 58% 58% 42% 42%",
                    background: `radial-gradient(circle at 35% 30%, ${glow} 0%, ${accent} 24%, ${primary} 58%, ${shade} 100%)`,
                    boxShadow: `0 0 18px 7px ${primary}`,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "-24%",
                    top: "35%",
                    width: "74%",
                    height: "32%",
                    borderRadius: "50% 8% 50% 8%",
                    transform: "rotate(-18deg)",
                    background: `linear-gradient(90deg, transparent, ${shade}, ${primary}, ${glow})`,
                    filter: "blur(1px)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "32%",
                    top: "31%",
                    width: "28%",
                    height: "28%",
                    borderRadius: "50%",
                    background: glow,
                    boxShadow: `0 0 10px 4px ${accent}`,
                  },
                }),
              ],
            });
          case "signature-wave":
            return O("div", {
              style: { ...r, animation: "fxspin 1.2s linear infinite" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8% 2%",
                    borderRadius: "50%",
                    border: `5px solid ${primary}`,
                    boxShadow: `0 0 12px 3px ${secondary}, inset 0 0 10px ${accent}`,
                    transform: "rotate(-24deg) scaleY(.68)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "25%",
                    borderRadius: "50% 50% 50% 12%",
                    transform: "rotate(42deg)",
                    background: `radial-gradient(circle at 30% 24%, ${glow}, ${secondary} 35%, ${primary} 76%, ${shade})`,
                    boxShadow: `0 0 16px 5px ${primary}`,
                  },
                }),
              ],
            });
          case "signature-orb":
            return O("div", {
              style: { ...r, animation: "fxpulse 0.36s ease-in-out infinite alternate" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "-8%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${glow} 0%, ${secondary} 20%, ${primary} 48%, ${shade} 69%, transparent 76%)`,
                    filter: "blur(2px)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "20%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle at 35% 30%, ${glow}, ${primary} 64%, ${shade})`,
                    boxShadow: `0 0 18px 7px ${secondary}`,
                  },
                }),
              ],
            });
          case "signature-bloom":
          case "signature-leafstorm":
            return O("div", {
              style: { ...r, animation: "fxspin 0.75s linear infinite" },
              children: [
                ...Array.from({ length: 6 }, (_, index) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: "36%",
                        top: "7%",
                        width: "28%",
                        height: "48%",
                        transform: `rotate(${index * 60}deg)`,
                        transformOrigin: "50% 92%",
                        borderRadius:
                          n === "signature-bloom" ? "85% 12% 72% 12%" : "75% 8% 75% 8%",
                        background: `linear-gradient(145deg, ${glow}, ${index % 2 ? secondary : primary} 58%, ${shade})`,
                        border: `1px solid ${accent}`,
                        boxShadow: `0 0 8px 2px ${primary}`,
                      },
                    },
                    index,
                  ),
                ),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "39%",
                    borderRadius: "50%",
                    background: glow,
                    boxShadow: `0 0 12px 5px ${accent}`,
                  },
                }),
              ],
            });
          case "signature-bolt":
            return N("div", {
              style: { ...r, animation: "fxpulse 0.16s ease-in-out infinite alternate" },
              children: O("svg", {
                viewBox: "0 0 48 48",
                style: { width: "100%", height: "100%", filter: `drop-shadow(0 0 8px ${primary})` },
                children: [
                  N("polygon", {
                    points: "27,1 8,28 21,27 17,47 41,17 28,19",
                    fill: primary,
                    stroke: glow,
                    strokeWidth: 2,
                    strokeLinejoin: "round",
                  }),
                  N("polyline", {
                    points: "10,33 21,32 18,43",
                    fill: "none",
                    stroke: secondary,
                    strokeWidth: 3,
                    strokeLinecap: "round",
                  }),
                ],
              }),
            });
          case "signature-prism":
            return N("div", {
              style: { ...r, animation: "fxpulse 0.22s ease-in-out infinite alternate" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8% 2%",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    background: `linear-gradient(135deg, ${glow}, ${primary} 42%, ${secondary} 72%, ${shade})`,
                    filter: `drop-shadow(0 0 8px ${accent})`,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "42%",
                    top: "5%",
                    width: "16%",
                    height: "90%",
                    background: glow,
                    opacity: 0.86,
                    transform: "rotate(28deg)",
                  },
                }),
              ],
            });
          case "signature-crystal":
          case "signature-quake":
            return N("div", {
              style: { ...r, animation: n === "signature-quake" ? "fxpulse 0.2s ease-in-out infinite alternate" : "fxspin 0.8s linear infinite" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8% 12%",
                    clipPath: "polygon(50% 0%, 88% 20%, 100% 72%, 52% 100%, 0% 74%, 14% 18%)",
                    background: `linear-gradient(135deg, ${glow}, ${secondary} 28%, ${primary} 62%, ${shade})`,
                    border: `2px solid ${glow}`,
                    boxShadow: `0 0 16px 5px ${primary}`,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "47%",
                    top: "16%",
                    width: "8%",
                    height: "66%",
                    transform: "rotate(18deg)",
                    background: glow,
                    opacity: 0.86,
                  },
                }),
              ],
            });
          case "signature-veil":
          case "signature-eclipse":
            return O("div", {
              style: { ...r, animation: "fxspin 1.4s linear infinite" },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "6%",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${shade} 0%, ${primary} 42%, transparent 72%)`,
                    filter: "blur(2px)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "19%",
                    borderRadius: "50%",
                    border: `4px solid ${secondary}`,
                    boxShadow: `0 0 12px 4px ${primary}, inset 0 0 10px ${accent}`,
                    transform: "rotate(38deg) scaleX(.72)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "36%",
                    borderRadius: "50%",
                    background: n === "signature-eclipse" ? "#090512" : glow,
                    boxShadow: `0 0 10px 4px ${accent}`,
                  },
                }),
              ],
            });
          case "spinning-leaf":
            return N("div", {
              style: { ...r, animation: "spin-leaf 0.45s linear infinite" },
              children: O("svg", {
                viewBox: "0 0 40 40",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 8px #4ade80)",
                },
                children: [
                  N("path", {
                    d: "M20 2 C36 9 38 27 20 38 C2 27 4 9 20 2 Z",
                    fill: "#4ade80",
                    stroke: "#166534",
                    strokeWidth: 2.5,
                    strokeLinejoin: "round",
                  }),
                  N("line", {
                    x1: "20",
                    y1: "6",
                    x2: "20",
                    y2: "34",
                    stroke: "#166534",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                  }),
                  N("path", {
                    d: "M20 13 L29 17 M20 20 L28 24 M20 27 L27 30 M20 13 L11 17 M20 20 L12 24 M20 27 L13 30",
                    stroke: "#166534",
                    strokeWidth: 1.3,
                    strokeLinecap: "round",
                  }),
                ],
              }),
            });
          case "seed-small": {
            let l = [
              { x: "36%", y: "6%" },
              { x: "62%", y: "28%" },
              { x: "26%", y: "48%" },
              { x: "58%", y: "64%" },
              { x: "38%", y: "34%" },
            ];
            return N("div", {
              style: {
                ...r,
                animation: "multi-seed 0.32s ease-in-out infinite",
              },
              children: l.map((o, f) =>
                N(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: o.x,
                      top: o.y,
                      width: "24%",
                      height: "32%",
                      borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
                      background:
                        "linear-gradient(135deg, #dcfce7, #4ade80 70%)",
                      boxShadow: "0 0 6px 2px #86efac",
                    },
                  },
                  f,
                ),
              ),
            });
          }
          case "crackle":
            return N("div", {
              style: {
                ...r,
                animation: "spark-crackle 0.18s ease-in-out infinite",
              },
              children: N("svg", {
                viewBox: "0 0 24 34",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 8px #facc15)",
                },
                children: N("polygon", {
                  points: "15,0 5,19 11.5,19 9,34 20,14 13,14",
                  fill: "#facc15",
                  stroke: "#fef9c3",
                  strokeWidth: 1.8,
                  strokeLinejoin: "round",
                }),
              }),
            });
          case "wind-blade":
            return N("div", {
              style: {
                ...r,
                animation: "wind-blades 0.3s ease-in-out infinite",
              },
              children: O("svg", {
                viewBox: "0 0 40 24",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 7px #86efac)",
                },
                children: [
                  N("path", {
                    d: "M2 21 C10 12 22 6 38 2 C30 8 24 13 20 22 C14 22 7 22 2 21 Z",
                    fill: "#bbf7d0",
                    stroke: "#f0fdf4",
                    strokeWidth: 1.2,
                    strokeLinejoin: "round",
                  }),
                  N("path", {
                    d: "M6 20 C14 14 24 9 34 5",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: 1.6,
                    strokeLinecap: "round",
                    opacity: 0.8,
                  }),
                ],
              }),
            });
          case "drain-orb":
            return N("div", {
              style: {
                ...r,
                animation: "fxpulse 0.4s ease-in-out infinite alternate",
              },
              children: N("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #dcfce7 12%, #4ade80 55%, #166534 100%)",
                  boxShadow: "0 0 12px 4px #86efac",
                },
              }),
            });
          case "ember-spark":
            return O("div", {
              style: {
                ...r,
                animation: "ember-flick 0.3s ease-in-out infinite alternate",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "18%",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    background:
                      "linear-gradient(180deg, #fff3b0, #ff6b35 60%, #c22e00)",
                    boxShadow: "0 0 14px 6px #ff6b35",
                    animation: "fxspin 0.8s linear infinite",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "38%",
                    borderRadius: "50%",
                    background: "#fff7d6",
                  },
                }),
              ],
            });
          case "flame-cone":
            return N("div", {
              style: {
                ...r,
                animation: "flame-cone 0.24s ease-in-out infinite",
              },
              children: O("svg", {
                viewBox: "0 0 48 32",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 10px #ff6b35)",
                },
                children: [
                  N("path", {
                    d: "M2 16 C14 4 30 2 46 8 C38 12 34 14 30 16 C34 18 38 20 46 24 C30 30 14 28 2 16 Z",
                    fill: "#ff6b35",
                    stroke: "#ffd166",
                    strokeWidth: 2,
                    strokeLinejoin: "round",
                  }),
                  N("path", {
                    d: "M8 16 C18 10 30 9 40 13 C34 15 32 16 30 16 C32 17 34 18 40 19 C30 23 18 22 8 16 Z",
                    fill: "#ffd166",
                    opacity: 0.85,
                  }),
                  N("ellipse", {
                    cx: "12",
                    cy: "16",
                    rx: "5",
                    ry: "6",
                    fill: "#fff7d6",
                  }),
                ],
              }),
            });
          case "fireball":
            return O("div", {
              style: {
                ...r,
                animation: "fxpulse 0.2s ease-in-out infinite alternate",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #ffd166 0%, #ff6b35 45%, transparent 70%)",
                    filter: "blur(4px)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: 2,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 38% 32%, #fff7d6 0%, #ffd166 30%, #ff6b35 62%, #7c2d12 100%)",
                    boxShadow: "0 0 18px 8px #ff6b35",
                    animation: "fxspin 0.7s linear infinite",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "20%",
                    top: "-14%",
                    width: "14%",
                    height: "30%",
                    borderRadius: "50%",
                    background: "#ffd166",
                    filter: "blur(2px)",
                    animation:
                      "ember-flick 0.2s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    right: "16%",
                    top: "-8%",
                    width: "11%",
                    height: "24%",
                    borderRadius: "50%",
                    background: "#ff6b35",
                    filter: "blur(2px)",
                    animation:
                      "ember-flick 0.26s ease-in-out infinite alternate",
                  },
                }),
              ],
            });
          case "water-jet":
            return N("div", {
              style: {
                ...r,
                animation: "water-jet 0.22s ease-in-out infinite",
              },
              children: O("svg", {
                viewBox: "0 0 48 24",
                style: {
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 0 8px #38bdf8)",
                },
                children: [
                  N("path", {
                    d: "M0 12 C12 6 28 4 48 8 L48 16 C28 20 12 18 0 12 Z",
                    fill: "#38bdf8",
                    stroke: "#bae6fd",
                    strokeWidth: 1.5,
                  }),
                  N("path", {
                    d: "M6 12 C18 8 32 7 46 10",
                    fill: "none",
                    stroke: "#e0f2fe",
                    strokeWidth: 2.4,
                    strokeLinecap: "round",
                    opacity: 0.9,
                  }),
                  N("path", {
                    d: "M10 15 C22 13 34 12 44 14",
                    fill: "none",
                    stroke: "#7dd3fc",
                    strokeWidth: 1.6,
                    strokeLinecap: "round",
                    opacity: 0.8,
                  }),
                ],
              }),
            });
          case "bubble-small":
            return O("div", {
              style: {
                ...r,
                animation: "bubble-float 0.4s ease-in-out infinite alternate",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 0%, #fef9c3 25%, #fde047 55%, #38bdf8 100%)",
                    border: "2px solid #fef9c3",
                    boxShadow: "0 0 12px 4px #fde047",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "22%",
                    top: "13%",
                    width: "26%",
                    height: "26%",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                  },
                }),
              ],
            });
          case "stone-arc": {
            let l = [
              { left: "8%", top: "38%" },
              { left: "36%", top: "12%" },
              { left: "62%", top: "38%" },
            ];
            return N("div", {
              style: {
                ...r,
                animation: "fxspin 0.5s linear infinite",
                filter: "drop-shadow(0 0 6px #b08968)",
              },
              children: l.map((o, f) =>
                N(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: o.left,
                      top: o.top,
                      width: "34%",
                      height: "34%",
                      clipPath:
                        "polygon(20% 0%, 80% 10%, 100% 70%, 60% 100%, 10% 80%)",
                      background:
                        "linear-gradient(135deg, #ede0d4, #b08968 55%, #5c4a32)",
                      boxShadow: "0 0 8px 3px #b08968",
                    },
                  },
                  f,
                ),
              ),
            });
          }
          case "frost-mist":
            return O("div", {
              style: {
                ...r,
                animation: "fxpulse 0.3s ease-in-out infinite alternate",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.95) 0%, #bae6fd 45%, #7dd3fc 68%, transparent 85%)",
                    filter: "blur(2px)",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "30%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #ffffff, #e0f2fe 60%, transparent)",
                    filter: "blur(3px)",
                  },
                }),
                [18, 45, 72].map((l, o) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: `${l}%`,
                        top: "18%",
                        width: "8%",
                        height: "8%",
                        borderRadius: "50%",
                        background: "#ffffff",
                        boxShadow: "0 0 8px 3px #bae6fd",
                        animation: `dust-rise 0.6s ${o * 0.08}s ease-out forwards`,
                      },
                    },
                    o,
                  ),
                ),
              ],
            });
          case "petal-vortex": {
            let l = Array.from({ length: 8 }, (o, f) => {
              let $ = (f / 8) * Math.PI * 2;
              return {
                left: `${50 + 34 * Math.cos($)}%`,
                top: `${50 + 34 * Math.sin($)}%`,
                rot: ($ * 180) / Math.PI,
                c: f % 2 ? "#f9a8d4" : "#86efac",
              };
            });
            return O("div", {
              style: { ...r, animation: "fxspin 0.6s linear infinite" },
              children: [
                l.map((o, f) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: o.left,
                        top: o.top,
                        width: "22%",
                        height: "14%",
                        background: o.c,
                        borderRadius: "75% 8% 75% 8%",
                        transform: `translate(-50%,-50%) rotate(${o.rot}deg)`,
                        boxShadow: "0 0 6px 2px #f9a8d4",
                      },
                    },
                    f,
                  ),
                ),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "38%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #fbcfe8, #f472b6)",
                    boxShadow: "0 0 10px 4px #f472b6",
                  },
                }),
              ],
            });
          }
          case "prism-beam":
            return O("div", {
              style: {
                ...r,
                animation: "fxpulse 0.25s ease-in-out infinite alternate",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: "-10%",
                    top: "32%",
                    width: "120%",
                    height: "36%",
                    background:
                      "linear-gradient(180deg, #f87171, #fde047 25%, #4ade80 45%, #38bdf8 65%, #a78bfa 85%)",
                    borderRadius: "999px",
                    filter: "blur(1px)",
                    boxShadow: "0 0 14px 6px #f0abfc",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "-10%",
                    top: "45%",
                    width: "120%",
                    height: "10%",
                    background: "#ffffff",
                    borderRadius: "999px",
                    opacity: 0.9,
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "76%",
                    top: "20%",
                    width: "24%",
                    height: "60%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #ffffff, transparent 70%)",
                    animation: "fxpulse 0.3s ease-in-out infinite alternate",
                  },
                }),
              ],
            });
          case "embercub-flame": {
            let l = [0, 1, 2].map((o) => {
              let f = (o / 3) * Math.PI * 2;
              return {
                left: `${50 + 46 * Math.cos(f)}%`,
                top: `${50 + 46 * Math.sin(f)}%`,
              };
            });
            return O("div", {
              style: {
                ...r,
                animation: "embercub-spiral 0.45s linear infinite",
              },
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    inset: -10,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #fff3b0 0%, #ff6b35 45%, transparent 70%)",
                    filter: "blur(4px)",
                    animation: "fxpulse 0.2s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    inset: "8%",
                    borderRadius: "50% 50% 50% 50% / 58% 58% 42% 42%",
                    background:
                      "linear-gradient(160deg, #fff7d6 0%, #ffd166 28%, #ff6b35 58%, #c22e00 100%)",
                    boxShadow: "0 0 16px 7px #ff6b35",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "31%",
                    top: "33%",
                    width: "38%",
                    height: "32%",
                    borderRadius: "50%",
                    background: "#fff7d6",
                    boxShadow: "0 0 8px 3px #ffd166",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: "14%",
                    top: "-14%",
                    width: "20%",
                    height: "36%",
                    borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                    background: "linear-gradient(180deg, #fde047, #ff6b35)",
                    transform: "rotate(-18deg)",
                    boxShadow: "0 0 8px 3px #ff6b35",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    right: "14%",
                    top: "-14%",
                    width: "20%",
                    height: "36%",
                    borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
                    background: "linear-gradient(180deg, #fde047, #ff6b35)",
                    transform: "rotate(18deg)",
                    boxShadow: "0 0 8px 3px #ff6b35",
                  },
                }),
                l.map((o, f) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: o.left,
                        top: o.top,
                        width: "12%",
                        height: "12%",
                        borderRadius: "50%",
                        background: "#fde047",
                        boxShadow: "0 0 8px 3px #ff6b35",
                        animation:
                          "ember-flick 0.24s ease-in-out infinite alternate",
                      },
                    },
                    f,
                  ),
                ),
              ],
            });
          }
          default:
            return null;
        }
      }
      function Xe({ kind: n, x: u, y: r }) {
        let l = {
            position: "absolute",
            left: u,
            top: r,
            width: 0,
            height: 0,
            pointerEvents: "none",
          },
          o = ($, _ = 110) =>
            N("div", {
              style: {
                position: "absolute",
                left: -_ / 2,
                top: -_ / 2,
                width: _,
                height: _,
                borderRadius: "50%",
                background: `radial-gradient(circle, rgba(255,255,255,0.95) 0%, ${$} 55%, transparent 72%)`,
                animation: "fxpulse 0.28s ease-in-out infinite alternate",
                pointerEvents: "none",
              },
            }),
          f = ($, _ = 150) =>
            N("div", {
              style: {
                position: "absolute",
                left: -_ / 2,
                top: -14,
                width: _,
                height: 34,
                borderRadius: "50%",
                border: `5px solid ${$}`,
                animation: "fxring 0.55s ease-out forwards",
                pointerEvents: "none",
              },
            });
        switch (n) {
          case "fang": {
            let $ = [0, 1, 2, 3, 4].map((v) => 8 + v * 20),
              _ = { animation: "fang-snap 0.4s ease-in forwards" };
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: -78,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "-40px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 8px #7c3aed)",
                    },
                    children: [
                      N("rect", {
                        x: 0,
                        y: 0,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#7c3aed",
                        stroke: "#4c1d95",
                        strokeWidth: 2,
                      }),
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},16 ${v + 9},16 ${v},52`,
                            fill: "#ddd6fe",
                            stroke: "#4c1d95",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                    ],
                  }),
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: 22,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "40px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 8px #7c3aed)",
                    },
                    children: [
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},40 ${v + 9},40 ${v},4`,
                            fill: "#ddd6fe",
                            stroke: "#4c1d95",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                      N("rect", {
                        x: 0,
                        y: 40,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#7c3aed",
                        stroke: "#4c1d95",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
                }),
              ],
            });
          }
          case "vine":
            return N("div", {
              style: l,
              children: N("div", {
                style: {
                  position: "absolute",
                  left: -95,
                  top: -75,
                  width: 190,
                  height: 150,
                  transformOrigin: "8% 92%",
                  animation: "vine-lash 0.45s ease-out forwards",
                },
                children: O("svg", {
                  viewBox: "0 0 190 150",
                  style: {
                    width: "100%",
                    height: "100%",
                    filter: "drop-shadow(0 0 8px #4ade80)",
                  },
                  children: [
                    N("path", {
                      d: "M14 138 C55 118 95 96 176 30",
                      fill: "none",
                      stroke: "#16a34a",
                      strokeWidth: 11,
                      strokeLinecap: "round",
                    }),
                    N("path", {
                      d: "M14 138 C55 118 95 96 176 30",
                      fill: "none",
                      stroke: "#4ade80",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                    }),
                    N("ellipse", {
                      cx: "64",
                      cy: "112",
                      rx: "13",
                      ry: "7.5",
                      fill: "#86efac",
                      transform: "rotate(-28 64 112)",
                    }),
                    N("ellipse", {
                      cx: "110",
                      cy: "88",
                      rx: "13",
                      ry: "7.5",
                      fill: "#86efac",
                      transform: "rotate(-28 110 88)",
                    }),
                    N("ellipse", {
                      cx: "146",
                      cy: "58",
                      rx: "11",
                      ry: "6.5",
                      fill: "#dcfce7",
                      transform: "rotate(-28 146 58)",
                    }),
                    N("polygon", {
                      points: "176,30 154,38 168,54",
                      fill: "#16a34a",
                    }),
                  ],
                }),
              }),
            });
          case "boltstrike":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -70,
                    top: -90,
                    width: 140,
                    height: 180,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(254,252,232,0.95) 0%, rgba(250,204,21,0.45) 45%, transparent 70%)",
                    animation: "fxpulse 0.28s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -40,
                    top: -160,
                    width: 80,
                    height: 160,
                    animation: "speed-bolt 0.6s ease-in forwards",
                  },
                  children: N("svg", {
                    viewBox: "0 0 40 80",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 14px #facc15)",
                    },
                    children: N("polygon", {
                      points: "25,0 10,36 19,36 12,80 31,28 21,28",
                      fill: "#facc15",
                      stroke: "#fef9c3",
                      strokeWidth: 2,
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            });
          case "mushroom":
            return O("div", {
              style: l,
              children: [
                O("div", {
                  style: {
                    position: "absolute",
                    left: -70,
                    top: -122,
                    width: 140,
                    height: 160,
                    animation: "mushroom-rise 0.55s ease-out forwards",
                  },
                  children: [
                    N("div", {
                      style: {
                        position: "absolute",
                        left: "41%",
                        top: "44%",
                        width: "18%",
                        height: "50%",
                        borderRadius: "30%",
                        background:
                          "linear-gradient(180deg, #ffd166, #ff6b35 55%, #7c2d12)",
                        boxShadow: "0 0 10px 3px #ff6b35",
                      },
                    }),
                    N("div", {
                      style: {
                        position: "absolute",
                        left: "10%",
                        top: "6%",
                        width: "80%",
                        height: "50%",
                        borderRadius: "50% 50% 44% 44%",
                        background:
                          "radial-gradient(circle at 50% 28%, #fff3b0 0%, #ffd166 30%, #ff6b35 58%, #7c2d12 92%)",
                        boxShadow: "0 0 24px 10px #ff6b35",
                      },
                    }),
                    N("div", {
                      style: {
                        position: "absolute",
                        left: "28%",
                        top: "16%",
                        width: "44%",
                        height: "24%",
                        borderRadius: "50%",
                        background: "rgba(255,247,214,0.95)",
                      },
                    }),
                    N("div", {
                      style: {
                        position: "absolute",
                        left: "20%",
                        top: "48%",
                        width: "15%",
                        height: "24%",
                        borderRadius: "50%",
                        background: "#ffb703",
                        filter: "blur(2px)",
                        animation:
                          "ember-flick 0.24s ease-in-out infinite alternate",
                      },
                    }),
                    N("div", {
                      style: {
                        position: "absolute",
                        right: "20%",
                        top: "44%",
                        width: "12%",
                        height: "20%",
                        borderRadius: "50%",
                        background: "#ff6b35",
                        filter: "blur(2px)",
                        animation:
                          "ember-flick 0.3s ease-in-out infinite alternate",
                      },
                    }),
                  ],
                }),
                o("#ff9f1c"),
                f("#ff9f1c"),
              ],
            });
          case "tidal-wave":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -160,
                    top: -84,
                    width: 220,
                    height: 120,
                    animation: "wave-crash 0.6s ease-out forwards",
                  },
                  children: O("svg", {
                    viewBox: "0 0 220 120",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 12px #38bdf8)",
                    },
                    children: [
                      N("path", {
                        d: "M0 78 C38 30 74 14 112 34 C140 48 160 44 196 14 C206 22 212 32 216 46 L220 120 L0 120 Z",
                        fill: "#38bdf8",
                        stroke: "#bae6fd",
                        strokeWidth: 3,
                        strokeLinejoin: "round",
                      }),
                      N("path", {
                        d: "M0 78 C38 30 74 14 112 34 C140 48 160 44 196 14",
                        fill: "none",
                        stroke: "#e0f2fe",
                        strokeWidth: 7,
                        strokeLinecap: "round",
                      }),
                      N("path", {
                        d: "M10 98 C60 82 120 76 210 86",
                        fill: "none",
                        stroke: "#7dd3fc",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                        opacity: 0.8,
                      }),
                    ],
                  }),
                }),
                [-60, 0, 60].map(($, _) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: $ - 14,
                        top: 16,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #e0f2fe, #38bdf8 70%)",
                        animation: `dust-rise ${0.5 + _ * 0.08}s ease-out forwards`,
                      },
                    },
                    _,
                  ),
                ),
                o("#7dd3fc"),
                f("#38bdf8", 170),
              ],
            });
          case "rock-slam":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -38,
                    top: -160,
                    width: 76,
                    height: 76,
                    animation: "rock-fall 0.45s ease-in forwards",
                  },
                  children: N("div", {
                    style: {
                      width: "100%",
                      height: "100%",
                      clipPath:
                        "polygon(20% 0%, 80% 10%, 100% 70%, 60% 100%, 10% 80%)",
                      background:
                        "linear-gradient(135deg, #ede0d4, #b08968 55%, #5c4a32)",
                      boxShadow: "0 0 14px 6px #b08968",
                    },
                  }),
                }),
                [-46, -14, 20, 52].map(($, _) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: $,
                        top: 24,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #ede0d4, #b08968 70%)",
                        animation: `dust-rise ${0.45 + _ * 0.07}s ease-out forwards`,
                      },
                    },
                    _,
                  ),
                ),
                o("#d6b894"),
                f("#b08968"),
              ],
            });
          case "shadow-fang": {
            let $ = [0, 1, 2, 3, 4].map((v) => 8 + v * 20),
              _ = { animation: "fang-snap 0.4s ease-in forwards" };
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: -78,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "-40px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 10px #4c1d95)",
                    },
                    children: [
                      N("rect", {
                        x: 0,
                        y: 0,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#2e1065",
                        stroke: "#0f0a2e",
                        strokeWidth: 2,
                      }),
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},16 ${v + 9},16 ${v},52`,
                            fill: "#a78bfa",
                            stroke: "#4c1d95",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                    ],
                  }),
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: 22,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "40px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 10px #4c1d95)",
                    },
                    children: [
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},40 ${v + 9},40 ${v},4`,
                            fill: "#a78bfa",
                            stroke: "#4c1d95",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                      N("rect", {
                        x: 0,
                        y: 40,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#2e1065",
                        stroke: "#0f0a2e",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -70,
                    top: -70,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(76,29,149,0.55) 0%, transparent 65%)",
                    animation: "fxpulse 0.4s ease-in-out infinite alternate",
                  },
                }),
                o("#7c3aed", 90),
                f("#7c3aed", 130),
              ],
            });
          }
          case "tail-slam":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -100,
                    top: -84,
                    width: 200,
                    height: 120,
                    transformOrigin: "50% 80%",
                    animation: "tail-splash 0.45s ease-out forwards",
                  },
                  children: O("svg", {
                    viewBox: "0 0 200 120",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 10px #38bdf8)",
                    },
                    children: [
                      N("path", {
                        d: "M20 100 C60 90 110 70 180 24",
                        fill: "none",
                        stroke: "#0369a1",
                        strokeWidth: 22,
                        strokeLinecap: "round",
                      }),
                      N("path", {
                        d: "M20 100 C60 90 110 70 180 24",
                        fill: "none",
                        stroke: "#38bdf8",
                        strokeWidth: 12,
                        strokeLinecap: "round",
                      }),
                      N("path", {
                        d: "M180 24 C190 34 192 48 186 60 C176 50 172 36 180 24 Z",
                        fill: "#7dd3fc",
                        stroke: "#0369a1",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
                }),
                [-70, -30, 10, 50].map(($, _) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: $,
                        top: -34 - (_ % 2) * 14,
                        width: 16,
                        height: 16,
                        borderRadius: "50% 50% 50% 8%",
                        background: "#7dd3fc",
                        boxShadow: "0 0 8px 2px #38bdf8",
                        animation: `dust-rise ${0.4 + _ * 0.06}s ease-out forwards`,
                      },
                    },
                    _,
                  ),
                ),
                o("#7dd3fc"),
                f("#38bdf8"),
              ],
            });
          case "quake-crack":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -80,
                    top: 18,
                    width: 160,
                    height: 44,
                    animation: "quake-rumble 0.6s ease-in-out forwards",
                  },
                  children: O("svg", {
                    viewBox: "0 0 160 44",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 6px #5c4a32)",
                    },
                    children: [
                      N("path", {
                        d: "M0 22 L30 18 L44 26 L66 14 L82 24 L104 12 L120 22 L160 18",
                        fill: "none",
                        stroke: "#5c4a32",
                        strokeWidth: 6,
                        strokeLinecap: "round",
                      }),
                      N("path", {
                        d: "M44 26 L52 36 M82 24 L76 36 M120 22 L130 34",
                        fill: "none",
                        stroke: "#8a6a4f",
                        strokeWidth: 4,
                        strokeLinecap: "round",
                      }),
                    ],
                  }),
                }),
                [-50, -16, 18, 52].map(($, _) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: $,
                        top: 8,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #ede0d4, #a0826d 70%)",
                        animation: `dust-rise ${0.5 + _ * 0.08}s ease-out forwards`,
                      },
                    },
                    _,
                  ),
                ),
                o("#d6b894", 90),
                f("#a0826d", 160),
              ],
            });
          case "avalanche":
            return O("div", {
              style: l,
              children: [
                [
                  { l: -56, d: 0, s: 44 },
                  { l: -14, d: 0.12, s: 58 },
                  { l: 30, d: 0.22, s: 40 },
                ].map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _.l,
                        top: -190,
                        width: _.s,
                        height: _.s,
                        animation: `avalanche-fall 0.6s ${_.d}s ease-in forwards`,
                      },
                      children: N("div", {
                        style: {
                          width: "100%",
                          height: "100%",
                          clipPath:
                            "polygon(20% 0%, 80% 10%, 100% 70%, 60% 100%, 10% 80%)",
                          background:
                            "linear-gradient(135deg, #ede0d4, #b08968 55%, #5c4a32)",
                          boxShadow: "0 0 10px 4px #b08968",
                        },
                      }),
                    },
                    v,
                  ),
                ),
                [-40, 0, 40].map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _,
                        top: 20,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #ede0d4, #b08968 70%)",
                        animation: `dust-rise ${0.5 + v * 0.08}s 0.35s ease-out forwards`,
                      },
                    },
                    v,
                  ),
                ),
                o("#d6b894"),
                f("#b08968", 160),
              ],
            });
          case "rock-pillars":
            return O("div", {
              style: l,
              children: [
                [
                  { l: -64, d: 0, h: 110, w: 40 },
                  { l: -18, d: 0.1, h: 140, w: 48 },
                  { l: 36, d: 0.2, h: 100, w: 38 },
                ].map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _.l,
                        top: 30 - _.h,
                        width: _.w,
                        height: _.h,
                        transformOrigin: "50% 100%",
                        animation: `pillar-rise 0.5s ${_.d}s ease-out forwards`,
                      },
                      children: O("svg", {
                        viewBox: `0 0 ${_.w} ${_.h}`,
                        style: {
                          width: "100%",
                          height: "100%",
                          filter: "drop-shadow(0 0 8px #a0826d)",
                        },
                        children: [
                          N("polygon", {
                            points: `${_.w / 2},0 ${_.w},${_.h} 0,${_.h}`,
                            fill: "#a0826d",
                            stroke: "#5c4a32",
                            strokeWidth: 3,
                            strokeLinejoin: "round",
                          }),
                          N("polygon", {
                            points: `${_.w / 2},${_.h * 0.25} ${_.w * 0.72},${_.h * 0.62} ${_.w * 0.28},${_.h * 0.62}`,
                            fill: "#d6b894",
                            opacity: 0.8,
                          }),
                        ],
                      }),
                    },
                    v,
                  ),
                ),
                o("#d6b894", 100),
                f("#b08968", 170),
              ],
            });
          case "shadow-vortex":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -80,
                    top: -80,
                    width: 160,
                    height: 160,
                    animation: "vortex-implode 0.7s ease-in forwards",
                  },
                  children: O("svg", {
                    viewBox: "0 0 160 160",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 14px #4c1d95)",
                    },
                    children: [
                      N("path", {
                        d: "M80 80 m-64 0 a64 64 0 1 1 128 0 a48 48 0 1 0 -96 0 a32 32 0 1 1 64 0 a16 16 0 1 0 -32 0",
                        fill: "none",
                        stroke: "#7c3aed",
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        opacity: 0.9,
                      }),
                      N("path", {
                        d: "M80 80 m-40 0 a40 40 0 1 1 80 0 a24 24 0 1 0 -48 0",
                        fill: "none",
                        stroke: "#2e1065",
                        strokeWidth: 12,
                        strokeLinecap: "round",
                      }),
                      N("circle", { cx: 80, cy: 80, r: 10, fill: "#0f0a2e" }),
                    ],
                  }),
                }),
                o("#4c1d95", 90),
                f("#4c1d95", 140),
              ],
            });
          case "lava-geyser":
            return O("div", {
              style: l,
              children: [
                O("div", {
                  style: {
                    position: "absolute",
                    left: -30,
                    top: -170,
                    width: 60,
                    height: 200,
                    transformOrigin: "50% 100%",
                    animation: "geyser-burst 0.55s ease-out forwards",
                  },
                  children: [
                    N("div", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        borderRadius: "40% 40% 0 0",
                        background:
                          "linear-gradient(180deg, #fff7d6, #ffd166 30%, #ff6b35 60%, #c22e00)",
                        boxShadow: "0 0 20px 8px #ff6b35",
                      },
                    }),
                    N("div", {
                      style: {
                        position: "absolute",
                        left: "34%",
                        top: 0,
                        width: "32%",
                        height: "100%",
                        background: "#fff7d6",
                        opacity: 0.75,
                        borderRadius: "50%",
                      },
                    }),
                  ],
                }),
                [-52, -24, 24, 52].map(($, _) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: $,
                        top: -120 - (_ % 2) * 30,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "#ffd166",
                        boxShadow: "0 0 8px 3px #ff6b35",
                        animation: `ember-flick 0.24s ${_ * 0.05}s ease-in-out infinite alternate`,
                      },
                    },
                    _,
                  ),
                ),
                o("#ff6b35"),
                f("#ff6b35"),
              ],
            });
          case "night-veil":
            return O("div", {
              style: l,
              children: [
                O("div", {
                  style: {
                    position: "absolute",
                    left: -90,
                    top: -110,
                    width: 180,
                    height: 150,
                    animation: "veil-descend 0.6s ease-out forwards",
                  },
                  children: [
                    N("div", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(46,16,101,0.25), rgba(30,10,70,0.92) 70%, rgba(15,10,46,0.98))",
                        borderRadius: "18px 18px 40% 40%",
                        border: "2px solid #6d28d9",
                        boxShadow: "0 0 18px 6px #4c1d95",
                      },
                    }),
                    [-60, -20, 20, 60].map(($, _) =>
                      N(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            left: 90 + $,
                            top: "30%",
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#a78bfa",
                            boxShadow: "0 0 8px 2px #a78bfa",
                            animation:
                              "fxpulse 0.5s ease-in-out infinite alternate",
                          },
                        },
                        _,
                      ),
                    ),
                  ],
                }),
                o("#6d28d9", 80),
                f("#6d28d9", 140),
              ],
            });
          case "sweet-mist":
            return O("div", {
              style: l,
              children: [
                [
                  { l: -70, t: -46, s: 64 },
                  { l: -24, t: -60, s: 78 },
                  { l: 30, t: -44, s: 60 },
                ].map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _.l,
                        top: _.t,
                        width: _.s,
                        height: _.s,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.9) 0%, #f9a8d4 55%, rgba(244,114,182,0.25) 80%)",
                        filter: "blur(3px)",
                        animation: `mist-hover ${0.8 + v * 0.15}s ease-in-out infinite alternate`,
                      },
                    },
                    v,
                  ),
                ),
                o("#f9a8d4", 90),
                f("#f9a8d4", 140),
              ],
            });
          case "glow-dust": {
            let $ = Array.from({ length: 8 }, (_, v) => ({
              l: -64 + ((v * 19) % 130),
              d: (v % 4) * 0.09,
              c: ["#fef9c3", "#fde047", "#f0abfc", "#ffffff"][v % 4],
            }));
            return O("div", {
              style: l,
              children: [
                $.map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _.l,
                        top: -90,
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: _.c,
                        boxShadow: `0 0 10px 4px ${_.c}`,
                        animation: `dust-fall 0.6s ${_.d}s ease-in forwards`,
                      },
                    },
                    v,
                  ),
                ),
                o("#fef9c3", 100),
                f("#fde047", 140),
              ],
            });
          }
          case "fairy-lights": {
            let $ = Array.from({ length: 8 }, (_, v) => {
              let Z = (v / 8) * Math.PI * 2;
              return {
                l: 70 * Math.cos(Z),
                t: 55 * Math.sin(Z),
                c: ["#f9a8d4", "#fde047", "#86efac", "#7dd3fc", "#f0abfc"][
                  v % 5
                ],
                d: (v % 4) * 0.12,
              };
            });
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -80,
                    top: -80,
                    width: 160,
                    height: 160,
                    animation: "fxspin 1.1s linear infinite",
                  },
                  children: $.map((_, v) =>
                    N(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: 76 + _.l,
                          top: 76 + _.t,
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: _.c,
                          boxShadow: `0 0 12px 5px ${_.c}`,
                          animation: `fxpulse 0.5s ${_.d}s ease-in-out infinite alternate`,
                        },
                      },
                      v,
                    ),
                  ),
                }),
                o("#f0abfc", 100),
                f("#f0abfc"),
              ],
            });
          }
          case "dazzle-flash":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -90,
                    top: -90,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #ffffff 0%, #fef9c3 40%, rgba(253,224,71,0.4) 65%, transparent 75%)",
                    animation: "flash-burst 0.5s ease-out forwards",
                  },
                }),
                f("#fef9c3", 170),
              ],
            });
          case "petal-storm": {
            let $ = Array.from({ length: 10 }, (_, v) => ({
              l: -40 + ((v * 23) % 90),
              d: (v % 5) * 0.07,
              c: v % 3 === 0 ? "#86efac" : v % 3 === 1 ? "#f9a8d4" : "#f472b6",
            }));
            return O("div", {
              style: l,
              children: [
                $.map((_, v) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: _.l,
                        top: -60,
                        width: 18,
                        height: 12,
                        background: _.c,
                        borderRadius: "75% 8% 75% 8%",
                        boxShadow: `0 0 6px 2px ${_.c}`,
                        animation: `petal-swirl 0.65s ${_.d}s ease-out forwards`,
                      },
                    },
                    v,
                  ),
                ),
                o("#f9a8d4", 90),
                f("#f9a8d4"),
              ],
            });
          }
          case "volt-strike":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -70,
                    top: -90,
                    width: 140,
                    height: 180,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(254,252,232,0.95) 0%, rgba(250,204,21,0.45) 45%, transparent 70%)",
                    animation: "fxpulse 0.25s ease-in-out infinite alternate",
                  },
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -46,
                    top: -250,
                    width: 92,
                    height: 250,
                    animation: "volt-fall 0.65s ease-in forwards",
                  },
                  children: N("svg", {
                    viewBox: "0 0 46 125",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 18px #facc15)",
                    },
                    children: N("polygon", {
                      points:
                        "29,0 11,48 21,48 13,92 20,92 14,125 36,52 25,52 33,30 26,30",
                      fill: "#facc15",
                      stroke: "#fef9c3",
                      strokeWidth: 2.5,
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
                o("#fde047"),
                f("#facc15", 160),
              ],
            });
          case "shadow-claws":
            return O("div", {
              style: l,
              children: [
                [0, 1, 2].map(($) =>
                  N(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        left: -70,
                        top: -44 + $ * 34,
                        width: 140,
                        height: 26,
                        animation: `claw-slash 0.4s ${$ * 0.07}s ease-out forwards`,
                      },
                      children: O("svg", {
                        viewBox: "0 0 140 26",
                        style: {
                          width: "100%",
                          height: "100%",
                          filter: "drop-shadow(0 0 8px #4c1d95)",
                        },
                        children: [
                          N("path", {
                            d: `M6 13 C50 ${2 + $ * 2} 96 ${24 - $ * 2} 134 8`,
                            fill: "none",
                            stroke: "#2e1065",
                            strokeWidth: 10,
                            strokeLinecap: "round",
                          }),
                          N("path", {
                            d: `M6 13 C50 ${2 + $ * 2} 96 ${24 - $ * 2} 134 8`,
                            fill: "none",
                            stroke: "#a78bfa",
                            strokeWidth: 3.5,
                            strokeLinecap: "round",
                          }),
                        ],
                      }),
                    },
                    $,
                  ),
                ),
                o("#7c3aed", 90),
                f("#7c3aed", 140),
              ],
            });
          case "magma-fist":
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -70,
                    top: 6,
                    width: 140,
                    height: 44,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse, #c22e00 0%, #7c2d12 55%, rgba(0,0,0,0.35) 100%)",
                    boxShadow:
                      "inset 0 0 12px 4px #3a1608, 0 0 16px 6px #ff6b35",
                  },
                }),
                O("div", {
                  style: {
                    position: "absolute",
                    left: -44,
                    top: -104,
                    width: 88,
                    height: 88,
                    animation: "fist-punch 0.45s ease-out forwards",
                  },
                  children: [
                    N("div", {
                      style: {
                        position: "absolute",
                        inset: 6,
                        borderRadius: "32%",
                        background:
                          "linear-gradient(135deg, #fff7d6 0%, #ffd166 30%, #ff6b35 62%, #7c2d12 100%)",
                        boxShadow: "0 0 18px 8px #ff6b35",
                      },
                    }),
                    [0, 1, 2, 3].map(($) =>
                      N(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            left: `${10 + $ * 21}%`,
                            top: -6,
                            width: "17%",
                            height: "34%",
                            borderRadius: "40%",
                            background: "#ffd166",
                            boxShadow: "0 0 8px 3px #ff6b35",
                          },
                        },
                        $,
                      ),
                    ),
                  ],
                }),
                o("#ff6b35"),
                f("#ff6b35"),
              ],
            });
          case "embercub-jaws": {
            let $ = [0, 1, 2, 3, 4].map((v) => 8 + v * 20),
              _ = { animation: "embercub-jaws-snap 0.45s ease-in forwards" };
            return O("div", {
              style: l,
              children: [
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: -82,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "-44px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 10px #ff6b35)",
                    },
                    children: [
                      N("rect", {
                        x: 0,
                        y: 0,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#c2410c",
                        stroke: "#7c2d12",
                        strokeWidth: 2,
                      }),
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},16 ${v + 9},16 ${v},52`,
                            fill: "#fff7d6",
                            stroke: "#7c2d12",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                    ],
                  }),
                }),
                N("div", {
                  style: {
                    position: "absolute",
                    left: -52,
                    top: 26,
                    width: 104,
                    height: 56,
                    ..._,
                    ["--dy"]: "44px",
                  },
                  children: O("svg", {
                    viewBox: "0 0 104 56",
                    style: {
                      width: "100%",
                      height: "100%",
                      filter: "drop-shadow(0 0 10px #ff6b35)",
                    },
                    children: [
                      $.map((v) =>
                        N(
                          "polygon",
                          {
                            points: `${v - 9},40 ${v + 9},40 ${v},4`,
                            fill: "#fff7d6",
                            stroke: "#7c2d12",
                            strokeWidth: 1.6,
                            strokeLinejoin: "round",
                          },
                          v,
                        ),
                      ),
                      N("rect", {
                        x: 0,
                        y: 40,
                        width: 104,
                        height: 16,
                        rx: 6,
                        fill: "#c2410c",
                        stroke: "#7c2d12",
                        strokeWidth: 2,
                      }),
                    ],
                  }),
                }),
                o("#ff6b35"),
                f("#ff9f1c"),
              ],
            });
          }
          default:
            return null;
        }
      }


      // A batalha de campanha pode alternar entre a versão original e o protótipo
      // em tempo real. O sistema online usa seu próprio componente e não passa por aqui.
      var EV_REALTIME_VIEWS = window.EV_REALTIME_COMBAT?.createView({
        React: Un,
        h: N,
        Sprite: In,
        species: _n,
        getStats: zn,
        getEffectiveness: (attackType, defendingTypes) => P0(attackType, defendingTypes),
        makePet: Vl,
        xpForDefeat: (enemyLevel, trainerBattle, petLevel, wasActive) => {
          const baseXp = _Q(enemyLevel, trainerBattle, petLevel);
          return wasActive ? baseXp : Math.floor(baseXp / 2);
        },
        xpToNext: Io,
        relics: lr,
        registerSpecies: (save, speciesId) => { rl(save, speciesId); Yl(save, speciesId); },
        registerEvolution: (save, speciesId) => {
          rl(save, speciesId);
          Yl(save, speciesId);
          save.evolvedTotal = (save.evolvedTotal || 0) + 1;
        },
        evolve: (pet, save) => {
          const currentSpecies = _n(pet.sp);
          const requiredLevel = currentSpecies?.evoLevel ?? (currentSpecies?.stage === 0 ? 12 : 24);
          if (currentSpecies && currentSpecies.stage < 2 && pet.level >= requiredLevel)
            return H8(pet.sp, z0(save));
          return null;
        },
      });
      var EV_REALTIME_MODE_SELECTOR = EV_REALTIME_VIEWS?.ChooseBattleMode;
      // Ponto de entrada para o treino rápido do menu; recebe um estado descartável e não salva a campanha.
      window.EV_REALTIME_TEST_COMPONENT = EV_REALTIME_VIEWS?.RealtimeBattle;
      function n9(props) {
        if (!EV_REALTIME_MODE_SELECTOR) return N(n9Classic, props);
        return N(EV_REALTIME_MODE_SELECTOR, {
          props,
          Classic: n9Classic,
          Realtime: EV_REALTIME_VIEWS.RealtimeBattle,
        });
      }
