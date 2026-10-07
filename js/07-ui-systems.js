/*
 * Eco Vínculo — Sprites, inventário, loja e áudio
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 35279-36801.
 */
"use strict";

      var ef = Du(Pu(), 1);
      var XQ = Du(Pu(), 1),
        pJ = Symbol.for("react.element"),
        aJ = Symbol.for("react.fragment"),
        sJ = Object.prototype.hasOwnProperty,
        RJ =
          XQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        tJ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function BQ(n, u, r) {
        var l,
          o = {},
          f = null,
          $ = null;
        (r !== void 0 && (f = "" + r),
          u.key !== void 0 && (f = "" + u.key),
          u.ref !== void 0 && ($ = u.ref));
        for (l in u) sJ.call(u, l) && !tJ.hasOwnProperty(l) && (o[l] = u[l]);
        if (n && n.defaultProps)
          for (l in ((u = n.defaultProps), u)) o[l] === void 0 && (o[l] = u[l]);
        return {
          $$typeof: pJ,
          type: n,
          key: f,
          ref: $,
          props: o,
          _owner: RJ.current,
        };
      }
      var gl = aJ,
        N = BQ,
        O = BQ;
      function In({
        sp: n,
        size: u = 96,
        flip: r,
        fainted: l,
        bob: o,
        style: f,
        battleMode: $,
        tScale: _,
      }) {
        let v = ef.useRef(null),
          Z = ef.useRef(0);
        return (
          ef.useEffect(() => {
            let J = v.current;
            if (!J) return;
            let e = J.getContext("2d");
            if (!e) return;
            let Q = 2;
            ((J.width = u * Q), (J.height = u * Q));
            let M = !0,
              H = () => {
                if (!M) return;
                let K = performance.now() / 1000,
                  C = K * (_ ?? ($ ? 1.5 : 1)),
                  D = !l && $ ? Math.sin(K * 2) * 4 : 0,
                  W = !l && !$ && o ? Math.sin(K * 2.2) * 2 : 0;
                (e.setTransform(Q, 0, 0, Q, 0, 0), e.clearRect(0, 0, u, u));
                let B = u / 2,
                  A = u / 2 + D + W;
                (So(e, _n(n), B, A, u, { flip: r, fainted: l, t: C }),
                  (Z.current = requestAnimationFrame(H)));
              };
            return (
              (Z.current = requestAnimationFrame(H)),
              () => {
                ((M = !1), cancelAnimationFrame(Z.current));
              }
            );
          }, [n, u, r, l, o, $, _]),
          N("canvas", {
            ref: v,
            style: { width: u, height: u, imageRendering: "pixelated", ...f },
          })
        );
      }
      var po = Du(Pu(), 1);
      var cJ = [
        "pocao",
        "essencia",
        "chave",
        "chave-sombria",
        "doce",
        "nucleo-fusao",
      ];
      function AQ(n) {
        let u = _n(n);
        if (u) return u;
        let r = (f) => f.toLowerCase().replace(/[^a-z0-9]/g, ""),
          l = r(n);
        return Object.values(nu).find((f) => f && r(f.id) === l) ?? null;
      }
      function xJ({ types: n }) {
        if (!n || n.length === 0) return null;
        let u = n.slice(0, 2);
        return N("div", {
          className: "flex gap-0.5 justify-center flex-wrap mt-0.5 max-w-full",
          children: u.map((r) =>
            N(
              "span",
              {
                className:
                  "text-white text-[8px] font-black px-1.5 py-px rounded-full leading-tight shadow-sm truncate max-w-full",
                style: { background: On[r].color },
                title: r,
                children: r,
              },
              r,
            ),
          ),
        });
      }
      function ne({ pet: n, onClose: u }) {
        let r = AQ(n.sp),
          l = r?.types ?? [],
          o = (r?.evo ?? []).filter(($) => !!$.name),
          f = r?.evoLevel ?? (r?.stage === 0 ? 12 : 24);
        return (
          po.useEffect(() => {
            let $ = (_) => {
              if (_.key === "Escape") u();
            };
            return (
              window.addEventListener("keydown", $),
              () => window.removeEventListener("keydown", $)
            );
          }, [u]),
          N("div", {
            className:
              "fixed inset-0 z-[70] bg-black/70 flex items-center justify-center p-4",
            onClick: ($) => {
              if ($.target === $.currentTarget) u();
            },
            children: O("div", {
              className:
                "ev-modal-panel bg-[#fffbe8] border-4 border-[#8a5a33] rounded-3xl p-5 w-full max-w-xs shadow-2xl",
              children: [
                O("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    N("h3", {
                      className: "font-extrabold text-lg text-slate-800",
                      children: "Detalhes do Pet",
                    }),
                    N("button", {
                      onClick: u,
                      "aria-label": "Fechar detalhe",
                      className:
                        "w-9 h-9 rounded-2xl bg-red-500 hover:bg-red-400 text-white flex items-center justify-center shadow border-b-4 border-red-700 active:scale-90 active:border-b-0 transition",
                      children: N(Mu, { size: 20, strokeWidth: 3 }),
                    }),
                  ],
                }),
                O("div", {
                  className: "flex flex-col items-center mb-3",
                  children: [
                    N(In, { sp: n.sp, size: 88 }),
                    N("div", {
                      className: "font-extrabold text-slate-800 text-xl mt-1",
                      children: r?.name ?? "???",
                    }),
                    O("div", {
                      className:
                        "text-xs font-black text-slate-500 tracking-wide",
                      children: ["Nv ", n.level],
                    }),
                  ],
                }),
                N("div", {
                  className:
                    "text-[11px] font-black text-slate-500 tracking-widest mb-1.5",
                  children: "AFINIDADES",
                }),
                N("div", {
                  className: "flex gap-1.5 flex-wrap mb-4",
                  children:
                    l.length > 0
                      ? l.map(($) =>
                          N(
                            "span",
                            {
                              className:
                                "text-white text-xs font-black px-3 py-1 rounded-full shadow",
                              style: { background: On[$].color },
                              children: $,
                            },
                            $,
                          ),
                        )
                      : N("span", {
                          className: "text-xs font-bold text-slate-400",
                          children: "—",
                        }),
                }),
                N("div", {
                  className:
                    "text-[11px] font-black text-slate-500 tracking-widest mb-1.5",
                  children: "CADEIA DE EVOLUÇÃO",
                }),
                o.length > 0
                  ? N("div", {
                      className: "flex flex-col gap-1.5",
                      children: o.map(($, _) =>
                        O(
                          "div",
                          {
                            className:
                              "bg-white rounded-xl border-2 border-amber-100 px-3 py-2",
                            children: [
                              O("div", {
                                className: "text-sm font-bold text-slate-700",
                                children: [
                                  r?.name,
                                  " ",
                                  N("span", {
                                    className: "text-amber-500 font-black",
                                    children: "→",
                                  }),
                                  " ",
                                  N("b", {
                                    className: "text-slate-900",
                                    children: $.name,
                                  }),
                                ],
                              }),
                              O("div", {
                                className:
                                  "text-[11px] text-slate-500 font-bold mt-0.5",
                                children: [
                                  "Nv ",
                                  f,
                                  " • afinidade ",
                                  $.affinity,
                                ],
                              }),
                            ],
                          },
                          _,
                        ),
                      ),
                    })
                  : N("p", {
                      className:
                        "text-center text-slate-500 font-bold text-sm py-3",
                      children: "\uD83C\uDFC1 Forma final — não evolui.",
                    }),
              ],
            }),
          })
        );
      }
      function Vf({
        gs: n,
        onClose: u,
        onToast: r,
        onRelicChange: l,
        initialTab: o,
      }) {
        let f = n.current,
          [$, _] = po.useState(f.equippedRelic),
          [v, Z] = po.useState(o ?? "items"),
          [J, e] = po.useState(null),
          Q = e3.filter((V) => f.items[V] > 0),
          M = J != null ? (f.box.find((V) => V.uid === J) ?? null) : null;
        po.useEffect(() => {
          if (o) Z(o);
        }, [o]);
        let H = (V) => {
            if ($ === V) ((f.equippedRelic = null), _(null));
            else ((f.equippedRelic = V), _(V), r?.(`${lr[V].name} equipado!`));
            l?.();
          },
          K = () => {
            if ($)
              (r?.(`${lr[$].name} removido.`),
                (f.equippedRelic = null),
                _(null),
                l?.());
          };
        return O("div", {
          className:
            "fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4",
          onClick: (V) => {
            if (V.target === V.currentTarget) u();
          },
          children: [
            O("div", {
              className:
                "ev-modal-panel bg-[#fffbe8] border-4 border-[#8a5a33] rounded-3xl p-4 w-full max-w-sm shadow-2xl max-h-[82dvh] overflow-y-auto",
              children: [
                O("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    O("h2", {
                      className:
                        "font-extrabold text-xl text-slate-800 flex items-center gap-2",
                      children: [
                        N("span", {
                          className:
                            "w-9 h-9 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center",
                          children: N(zo, { size: 20 }),
                        }),
                        "Mochila",
                      ],
                    }),
                    N("button", {
                      onClick: u,
                      "aria-label": "Fechar mochila",
                      className:
                        "w-11 h-11 rounded-2xl bg-red-500 hover:bg-red-400 text-white flex items-center justify-center shadow-lg border-b-4 border-red-700 active:scale-90 active:border-b-0 transition",
                      children: N(Mu, { size: 26, strokeWidth: 3 }),
                    }),
                  ],
                }),
                N("div", {
                  className: "flex gap-1.5 mb-3",
                  children: [
                    ["items", "\uD83C\uDF92 Itens"],
                    ["relics", "✨ Relíquias"],
                    ["box", `\uD83D\uDCE6 Reserva (${f.box.length})`],
                  ].map(([V, C]) =>
                    N(
                      "button",
                      {
                        onClick: () => Z(V),
                        className: `flex-1 py-2.5 rounded-2xl font-extrabold text-sm transition active:scale-95 ${v === V ? "bg-amber-400 text-amber-950 shadow" : "bg-white text-slate-500 border-2 border-amber-100"}`,
                        children: C,
                      },
                      V,
                    ),
                  ),
                }),
                v === "items" &&
                  N("div", {
                    className: "flex flex-col gap-2",
                    children: cJ.map((V) =>
                      O(
                        "div",
                        {
                          className:
                            "bg-white rounded-2xl p-3 border-2 border-amber-100",
                          children: [
                            O("div", {
                              className:
                                "font-extrabold text-slate-800 text-sm",
                              children: [
                                ul[V].name,
                                " ",
                                O("span", {
                                  className: "text-amber-600",
                                  children: ["×", f.items[V]],
                                }),
                              ],
                            }),
                            N("div", {
                              className:
                                "text-[11px] text-slate-500 font-bold mt-0.5",
                              children: ul[V].desc,
                            }),
                          ],
                        },
                        V,
                      ),
                    ),
                  }),
                v === "relics" &&
                  O("div", {
                    children: [
                      N("div", {
                        className:
                          "font-extrabold text-slate-800 text-base mb-1",
                        children: "✨ RELÍQUIAS — só 1 equipada por vez",
                      }),
                      N("p", {
                        className:
                          "text-[11px] font-bold text-slate-500 mb-2.5",
                        children:
                          "Cada relíquia dá +20% de poder e +15% de vínculo no seu tipo. Derrote chefes e explore locais selados para encontrá-las!",
                      }),
                      N("div", {
                        className: "flex flex-col gap-3",
                        children: Q.map((V) => {
                          let C = lr[V],
                            D = $ === V;
                          return O(
                            "div",
                            {
                              className: `bg-white rounded-2xl p-3.5 border-4 ${D ? "border-green-500 bg-green-50" : "border-amber-200"}`,
                              children: [
                                O("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    N("span", {
                                      className:
                                        "text-4xl w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-amber-200 bg-amber-50 shrink-0",
                                      children: C.emoji,
                                    }),
                                    O("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        N("div", {
                                          className:
                                            "font-extrabold text-slate-800 text-base leading-tight",
                                          children: C.name,
                                        }),
                                        N("div", {
                                          className:
                                            "text-xs text-slate-500 font-bold leading-tight mt-0.5",
                                          children: C.desc,
                                        }),
                                        D &&
                                          N("div", {
                                            className:
                                              "text-xs font-extrabold text-green-600 mt-1",
                                            children: "Atualmente equipada",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                D
                                  ? O("div", {
                                      className: "flex flex-col gap-2 mt-3",
                                      children: [
                                        N("div", {
                                          className:
                                            "w-full bg-green-500 text-white font-black text-base rounded-2xl flex items-center justify-center",
                                          style: { height: 44 },
                                          children: "EQUIPADO ✓",
                                        }),
                                        N("button", {
                                          onClick: K,
                                          className:
                                            "w-full bg-white text-slate-600 font-extrabold text-sm rounded-2xl border-2 border-slate-300 active:scale-[0.98] transition",
                                          style: { height: 40 },
                                          children: "Remover",
                                        }),
                                      ],
                                    })
                                  : N("button", {
                                      onClick: () => H(V),
                                      className:
                                        "w-full bg-amber-400 hover:bg-amber-300 text-black font-black text-base rounded-2xl border-b-4 border-amber-600 active:scale-[0.98] active:border-b-0 transition mt-3",
                                      style: { height: 44 },
                                      children: "EQUIPAR",
                                    }),
                              ],
                            },
                            V,
                          );
                        }),
                      }),
                      Q.length === 0 &&
                        O("div", {
                          className:
                            "bg-white rounded-2xl border-2 border-dashed border-amber-200 p-5 text-center",
                          children: [
                            N("div", {
                              className: "text-3xl mb-1",
                              children: "✨",
                            }),
                            N("p", {
                              className:
                                "text-sm font-extrabold text-slate-600",
                              children: "Nenhuma relíquia ainda...",
                            }),
                            N("p", {
                              className:
                                "text-[11px] font-bold text-slate-400 mt-1",
                              children:
                                "Derrote o Guardião do Bosque, o Golem Ancião e explore os cantos selados do mundo!",
                            }),
                          ],
                        }),
                    ],
                  }),
                v === "box" &&
                  N("div", {
                    children:
                      f.box.length > 0
                        ? N("div", {
                            className: "grid grid-cols-4 gap-1.5",
                            children: f.box.map((V) => {
                              let C = AQ(V.sp);
                              return O(
                                "button",
                                {
                                  onClick: () => e(V.uid),
                                  "aria-label": `Ver detalhes de ${C?.name ?? "Pat"}`,
                                  title: `Ver detalhes de ${C?.name ?? "Pat"}`,
                                  className:
                                    "relative bg-white rounded-xl border-2 border-amber-200 p-1 pt-1.5 flex flex-col items-center cursor-pointer shadow-sm hover:border-amber-400 hover:shadow active:scale-95 active:border-amber-500 transition",
                                  children: [
                                    N("span", {
                                      "aria-hidden": !0,
                                      className:
                                        "absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center pointer-events-none",
                                      children: N(To, {
                                        size: 10,
                                        strokeWidth: 3.5,
                                      }),
                                    }),
                                    N(In, { sp: V.sp, size: 40 }),
                                    O("div", {
                                      className:
                                        "text-[9px] font-bold text-slate-600",
                                      children: ["Nv", V.level],
                                    }),
                                    N(xJ, { types: C?.types ?? [] }),
                                  ],
                                },
                                V.uid,
                              );
                            }),
                          })
                        : N("p", {
                            className:
                              "text-center text-slate-400 font-bold text-sm py-6",
                            children: "Reserva vazia.",
                          }),
                  }),
              ],
            }),
            M && N(ne, { pet: M, onClose: () => e(null) }),
          ],
        });
      }
      var i0 = Du(Pu(), 1);
      var ue = ["Inicial", "Evoluído", "Final"],
        re = {
          pocao: "\uD83E\uDDEA",
          essencia: "✨",
          doce: "\uD83C\uDF6C",
          chave: "\uD83D\uDDDD️",
          "chave-sombria": "\uD83C\uDF12",
        },
        le = (n) => re[n] ?? lr[n]?.emoji ?? "\uD83C\uDF92";
      function b3({ gs: n, merchant: u, onClose: r, onChange: l, onToast: o }) {
        let f = n.current,
          [$, _] = i0.useState("comprar"),
          [, v] = i0.useState(0),
          [Z, J] = i0.useState(null),
          e = () => {
            (v((V) => V + 1), l?.());
          },
          Q = i0.useRef(Date.now()),
          M = () => {
            if (Date.now() - Q.current < 350) return;
            r();
          },
          H = (V) => {
            let C = V3[V];
            if (C === void 0 || f.ecos < C) return;
            ((f.ecos -= C),
              (f.items[V] = (f.items[V] ?? 0) + 1),
              o?.(`${ul[V].name} comprado por \uD83E\uDE99${C}!`),
              e());
          },
          K = () => {
            let V = Z;
            if (!V) return;
            let C = f.party.findIndex((A) => A.uid === V.uid);
            if (C < 0) {
              J(null);
              return;
            }
            if (f.party.length <= 1) {
              J(null);
              return;
            }
            if (W3(u, V, !1)) {
              J(null);
              return;
            }
            let W = N8(V),
              B = _n(V.sp).name;
            (f.party.splice(C, 1),
              (f.ecos += W),
              J(null),
              o?.(`${B} vendido por \uD83E\uDE99${W}!`),
              e());
          };
        return O("div", {
          className:
            "fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4",
          onClick: (V) => {
            if (V.target === V.currentTarget && !Z) M();
          },
          children: [
            O("div", {
              className:
                "ev-modal-panel bg-[#fffbe8] border-4 border-[#8a5a33] rounded-3xl p-4 w-full max-w-sm shadow-2xl max-h-[82dvh] overflow-y-auto",
              children: [
                O("div", {
                  className: "flex items-center justify-between mb-1",
                  children: [
                    O("h2", {
                      className:
                        "font-extrabold text-xl text-slate-800 flex items-center gap-2",
                      children: [
                        N("span", {
                          className:
                            "w-9 h-9 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center",
                          children: N(uf, { size: 20 }),
                        }),
                        u.nome,
                      ],
                    }),
                    N("button", {
                      onClick: M,
                      "aria-label": "Fechar loja",
                      className:
                        "w-11 h-11 rounded-2xl bg-red-500 hover:bg-red-400 text-white flex items-center justify-center shadow-lg border-b-4 border-red-700 active:scale-90 active:border-b-0 transition",
                      children: N(Mu, { size: 26, strokeWidth: 3 }),
                    }),
                  ],
                }),
                O("div", {
                  className:
                    "bg-black/80 rounded-2xl px-3 py-2 flex items-center justify-center gap-2 mb-3",
                  children: [
                    N("span", {
                      className: "text-lg leading-none",
                      children: "\uD83E\uDE99",
                    }),
                    N("span", {
                      className: "text-amber-200 font-black text-lg",
                      children: f.ecos ?? 0,
                    }),
                    N("span", {
                      className: "text-white/60 text-[11px] font-bold",
                      children: "ecos",
                    }),
                  ],
                }),
                N("div", {
                  className: "flex gap-1.5 mb-3",
                  children: [
                    ["comprar", "\uD83D\uDED2 Comprar"],
                    ["vender", "\uD83D\uDCB0 Vender"],
                  ].map(([V, C]) =>
                    N(
                      "button",
                      {
                        onClick: () => _(V),
                        className: `flex-1 py-2.5 rounded-2xl font-extrabold text-sm transition active:scale-95 ${$ === V ? "bg-amber-400 text-amber-950 shadow" : "bg-white text-slate-500 border-2 border-amber-100"}`,
                        children: C,
                      },
                      V,
                    ),
                  ),
                }),
                $ === "comprar" &&
                  N("div", {
                    className: "flex flex-col gap-2",
                    children: u.itensAVenda.map((V) => {
                      let C = V3[V],
                        D = C !== void 0 && f.ecos >= C;
                      return O(
                        "div",
                        {
                          className:
                            "bg-white rounded-2xl p-3 border-2 border-amber-100 flex items-center gap-3",
                          children: [
                            N("span", {
                              className:
                                "text-3xl w-12 h-12 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center shrink-0",
                              children: le(V),
                            }),
                            O("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                O("div", {
                                  className:
                                    "font-extrabold text-slate-800 text-sm",
                                  children: [
                                    ul[V].name,
                                    " ",
                                    O("span", {
                                      className: "text-amber-600",
                                      children: ["×", f.items[V] ?? 0],
                                    }),
                                  ],
                                }),
                                N("div", {
                                  className:
                                    "text-[11px] text-slate-500 font-bold mt-0.5 leading-tight",
                                  children: ul[V].desc,
                                }),
                                O("div", {
                                  className:
                                    "text-xs font-black text-amber-600 mt-1",
                                  children: ["\uD83E\uDE99 ", C ?? "—"],
                                }),
                              ],
                            }),
                            N("button", {
                              disabled: !D,
                              onClick: () => H(V),
                              className:
                                "shrink-0 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:grayscale text-amber-950 font-black text-sm px-4 py-2.5 rounded-2xl shadow border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition",
                              children: D ? "Comprar" : "Sem saldo",
                            }),
                          ],
                        },
                        V,
                      );
                    }),
                  }),
                $ === "vender" &&
                  O("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      N("p", {
                        className:
                          "text-[11px] font-bold text-slate-500 leading-tight",
                        children:
                          "O mercador compra pets do seu time. Pets recusados aparecem bloqueados com o motivo.",
                      }),
                      f.party.map((V) => {
                        let C = _n(V.sp),
                          D = N8(V),
                          W = W3(u, V, f.party.length <= 1),
                          B = W !== null;
                        return O(
                          "div",
                          {
                            className: `rounded-2xl p-3 border-2 flex items-center gap-3 ${B ? "bg-slate-100 border-slate-200 opacity-70" : "bg-white border-amber-100"}`,
                            children: [
                              N("div", {
                                className: B ? "grayscale" : "",
                                children: N(In, { sp: V.sp, size: 52 }),
                              }),
                              O("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  O("div", {
                                    className:
                                      "font-extrabold text-slate-800 text-sm truncate",
                                    children: [
                                      C.name,
                                      " ",
                                      O("span", {
                                        className:
                                          "text-xs text-slate-500 font-bold",
                                        children: ["Nv ", V.level],
                                      }),
                                    ],
                                  }),
                                  O("div", {
                                    className:
                                      "text-[11px] text-slate-500 font-bold",
                                    children: [
                                      ue[C.stage] ?? "Inicial",
                                      " • \uD83E\uDE99 ",
                                      D,
                                    ],
                                  }),
                                  B &&
                                    O("div", {
                                      className:
                                        "text-[11px] text-red-500 font-bold leading-tight mt-0.5",
                                      children: ["\uD83D\uDEAB ", W],
                                    }),
                                ],
                              }),
                              !B &&
                                N("button", {
                                  onClick: () => J(V),
                                  className:
                                    "shrink-0 bg-green-500 hover:bg-green-400 text-white font-black text-sm px-4 py-2.5 rounded-2xl shadow border-b-4 border-green-700 active:scale-95 active:border-b-0 transition",
                                  children: "Vender",
                                }),
                            ],
                          },
                          V.uid,
                        );
                      }),
                      f.party.length === 0 &&
                        N("p", {
                          className:
                            "text-center text-slate-400 font-bold text-sm py-6",
                          children: "Você não tem pets no time.",
                        }),
                    ],
                  }),
              ],
            }),
            Z &&
              N("div", {
                className:
                  "fixed inset-0 z-[70] bg-black/70 flex items-center justify-center p-5",
                onClick: (V) => {
                  if (V.target === V.currentTarget) J(null);
                },
                children: O("div", {
                  className:
                    "bg-[#fffbe8] border-4 border-[#8a5a33] rounded-3xl p-5 w-full max-w-xs shadow-2xl",
                  children: [
                    N("h3", {
                      className:
                        "font-black text-lg text-slate-800 text-center",
                      children: "Vender pet?",
                    }),
                    O("div", {
                      className: "flex flex-col items-center my-3",
                      children: [
                        N(In, { sp: Z.sp, size: 72 }),
                        O("div", {
                          className: "font-extrabold text-slate-800 mt-1",
                          children: [
                            _n(Z.sp).name,
                            " ",
                            O("span", {
                              className: "text-sm text-slate-500",
                              children: ["Nv ", Z.level],
                            }),
                          ],
                        }),
                        O("div", {
                          className: "text-amber-600 font-black text-xl mt-1",
                          children: ["\uD83E\uDE99 ", N8(Z)],
                        }),
                      ],
                    }),
                    N("p", {
                      className:
                        "text-[12px] font-bold text-slate-500 text-center mb-4 leading-snug",
                      children:
                        "Tem certeza? O pet sai do seu time e essa ação não pode ser desfeita.",
                    }),
                    O("div", {
                      className: "flex gap-2",
                      children: [
                        N("button", {
                          onClick: () => J(null),
                          className:
                            "flex-1 bg-white text-slate-600 font-extrabold text-sm rounded-2xl border-2 border-slate-300 py-3 active:scale-95 transition",
                          children: "Cancelar",
                        }),
                        N("button", {
                          onClick: K,
                          className:
                            "flex-1 bg-green-500 hover:bg-green-400 text-white font-black text-sm rounded-2xl shadow border-b-4 border-green-700 active:scale-95 active:border-b-0 transition py-3",
                          children: "Confirmar",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var FQ = Du(Pu(), 1);
      function oe(n, u) {
        if (n === "Sombra") return u === "Sombra" ? 0.7 : 1.3;
        return _3[n][u] ?? 1;
      }
      function fe(n) {
        if (n === 2) return "2x";
        if (n === 0.5) return "0.5x";
        if (n === 1.3) return "1.3x";
        if (n === 0.7) return "0.7x";
        return "1x";
      }
      function p3({ onClose: n }) {
        return N("div", {
          className:
            "fixed inset-0 flex items-center justify-center p-4 bg-black/70",
          style: { zIndex: 100 },
          onClick: n,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Tabela de tipos",
          children: O("div", {
            className:
              "ev-modal-panel bg-white rounded-3xl p-4 w-full max-w-md max-h-[92dvh] overflow-y-auto shadow-2xl",
            onClick: (u) => u.stopPropagation(),
            children: [
              O("div", {
                className: "flex items-center justify-between mb-1",
                children: [
                  N("h2", {
                    className: "font-black text-lg text-slate-800",
                    children: "Tabela de Tipos",
                  }),
                  N("button", {
                    onClick: n,
                    "aria-label": "Fechar tabela de tipos",
                    className:
                      "w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center active:scale-90",
                    children: N(Mu, { size: 18, strokeWidth: 3 }),
                  }),
                ],
              }),
              N("p", {
                className: "text-[11px] font-bold text-slate-500 mb-3",
                children: "Linha = atacante • Coluna = defensor",
              }),
              O("div", {
                className: "grid",
                style: {
                  gridTemplateColumns: "repeat(7, minmax(0,1fr))",
                  gap: 3,
                },
                children: [
                  N("div", {}),
                  qr.map((u) =>
                    N(
                      "div",
                      {
                        title: u,
                        className:
                          "text-center text-[8px] sm:text-[10px] font-extrabold text-white rounded-lg py-1.5 px-0.5 truncate",
                        style: { background: On[u].color },
                        children: u,
                      },
                      u,
                    ),
                  ),
                  qr.map((u) =>
                    O(
                      FQ.default.Fragment,
                      {
                        children: [
                          N("div", {
                            title: u,
                            className:
                              "text-center text-[8px] sm:text-[10px] font-extrabold text-white rounded-lg py-1.5 px-0.5 truncate flex items-center justify-center",
                            style: { background: On[u].color },
                            children: u,
                          }),
                          qr.map((r) => {
                            let l = oe(u, r);
                            return N(
                              "div",
                              {
                                className:
                                  "rounded-lg py-1.5 text-center text-[10px] sm:text-xs font-black",
                                style: {
                                  background:
                                    l === 2
                                      ? "#22c55e"
                                      : l === 0.5
                                        ? "#ef4444"
                                        : l === 1.3
                                          ? "#8b5cf6"
                                          : l === 0.7
                                            ? "#c4b5fd"
                                            : "#cbd5e1",
                                  color:
                                    l === 1
                                      ? "#475569"
                                      : l === 0.7
                                        ? "#4c1d95"
                                        : "#ffffff",
                                },
                                children: fe(l),
                              },
                              r,
                            );
                          }),
                        ],
                      },
                      u,
                    ),
                  ),
                ],
              }),
              O("div", {
                className:
                  "flex flex-wrap gap-x-3 gap-y-1.5 mt-3 text-[10px] font-bold text-slate-600",
                children: [
                  O("span", {
                    className: "flex items-center gap-1",
                    children: [
                      N("i", {
                        className: "w-3 h-3 rounded inline-block not-italic",
                        style: { background: "#22c55e" },
                      }),
                      " 2x super efetivo",
                    ],
                  }),
                  O("span", {
                    className: "flex items-center gap-1",
                    children: [
                      N("i", {
                        className: "w-3 h-3 rounded inline-block not-italic",
                        style: { background: "#ef4444" },
                      }),
                      " 0.5x pouco efetivo",
                    ],
                  }),
                  O("span", {
                    className: "flex items-center gap-1",
                    children: [
                      N("i", {
                        className: "w-3 h-3 rounded inline-block not-italic",
                        style: { background: "#cbd5e1" },
                      }),
                      " 1x neutro",
                    ],
                  }),
                  O("span", {
                    className: "flex items-center gap-1",
                    children: [
                      N("i", {
                        className: "w-3 h-3 rounded inline-block not-italic",
                        style: { background: "#8b5cf6" },
                      }),
                      " 1.3x Sombra",
                    ],
                  }),
                  O("span", {
                    className: "flex items-center gap-1",
                    children: [
                      N("i", {
                        className: "w-3 h-3 rounded inline-block not-italic",
                        style: { background: "#c4b5fd" },
                      }),
                      " 0.7x Sombra vs Sombra",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ao = null,
        Wf = null;
      function t3() {
        try {
          let n = window.AudioContext || window.webkitAudioContext;
          if (!n) return null;
          if (!ao) ao = new n();
          if (ao.state === "suspended") ao.resume();
          return ao;
        } catch {
          return null;
        }
      }
      var PQ = !1;
      function $e() {
        if (PQ) return;
        PQ = !0;
        try {
          let n = () => {
            t3();
          };
          (window.addEventListener("pointerdown", n, { once: !0 }),
            window.addEventListener("touchstart", n, { once: !0 }),
            window.addEventListener("keydown", n, { once: !0 }));
        } catch {}
      }
      $e();
      function wQ(n) {
        if (!Wf) {
          ((Wf = n.createGain()), (Wf.gain.value = 0.5));
          let u = n.createDynamicsCompressor();
          (Wf.connect(u), u.connect(n.destination));
        }
        return Wf;
      }
      function ju(n) {
        let u = t3();
        if (!u) return;
        try {
          let r = u.currentTime + (n.delay ?? 0),
            l = n.dur ?? 0.25,
            o = u.createOscillator(),
            f = u.createGain();
          if (
            ((o.type = n.type),
            o.frequency.setValueAtTime(Math.max(1, n.f0), r),
            n.f1 !== void 0)
          )
            o.frequency.exponentialRampToValueAtTime(Math.max(1, n.f1), r + l);
          if (n.vibrato) {
            let $ = u.createOscillator(),
              _ = u.createGain();
            (($.frequency.value = n.vibrato),
              (_.gain.value = n.f0 * 0.06),
              $.connect(_),
              _.connect(o.frequency),
              $.start(r),
              $.stop(r + l + 0.05));
          }
          (f.gain.setValueAtTime(0.0001, r),
            f.gain.exponentialRampToValueAtTime(n.vol ?? 0.2, r + 0.008),
            f.gain.exponentialRampToValueAtTime(0.0001, r + l),
            o.connect(f),
            f.connect(wQ(u)),
            o.start(r),
            o.stop(r + l + 0.05));
        } catch {}
      }
      function zQ(n) {
        switch (n) {
          case "Brasa":
            ju({ type: "sawtooth", f0: 180, f1: 60, dur: 0.35, vol: 0.22 });
            break;
          case "Maré":
            ju({ type: "sine", f0: 400, f1: 800, dur: 0.4, vol: 0.22 });
            break;
          case "Flora":
            ju({ type: "triangle", f0: 300, f1: 500, dur: 0.3, vol: 0.22 });
            break;
          case "Faísca":
            ju({ type: "square", f0: 1200, f1: 200, dur: 0.15, vol: 0.15 });
            break;
          case "Pedra":
            ju({ type: "sine", f0: 90, f1: 55, dur: 0.4, vol: 0.3 });
            break;
          case "Sombra":
            ju({
              type: "sawtooth",
              f0: 200,
              f1: 100,
              dur: 0.4,
              vol: 0.17,
              vibrato: 8,
            });
            break;
          default:
            ju({ type: "triangle", f0: 300, f1: 200, dur: 0.25, vol: 0.2 });
            break;
        }
      }
      function wl(n) {
        if (
          (ju({
            type: "square",
            f0: n ? 220 : 150,
            f1: 60,
            dur: n ? 0.22 : 0.14,
            vol: n ? 0.26 : 0.2,
          }),
          n)
        )
          ju({
            type: "sawtooth",
            f0: 880,
            f1: 440,
            dur: 0.18,
            vol: 0.12,
            delay: 0.02,
          });
      }
      function iQ() {
        ju({ type: "sine", f0: 600, f1: 200, dur: 0.25, vol: 0.13 });
      }
      function GQ() {
        [523.25, 659.25, 783.99].forEach((n, u) =>
          ju({ type: "triangle", f0: n, dur: 0.3, vol: 0.2, delay: u * 0.09 }),
        );
      }
      function TQ() {
        (ju({ type: "triangle", f0: 220, dur: 0.15, vol: 0.22 }),
          ju({ type: "triangle", f0: 440, dur: 0.28, vol: 0.22, delay: 0.12 }),
          ju({ type: "triangle", f0: 660, dur: 0.3, vol: 0.15, delay: 0.24 }));
      }
      function Df() {
        (ju({ type: "sine", f0: 80, f1: 40, dur: 0.6, vol: 0.3 }),
          ju({
            type: "triangle",
            f0: 160,
            f1: 80,
            dur: 0.4,
            vol: 0.12,
            delay: 0.05,
          }));
      }
      function kQ() {
        let n = [261.63, 329.63, 392, 523.25, 659.25, 783.99, 1046.5];
        n.forEach((r, l) =>
          ju({
            type: "triangle",
            f0: r,
            dur: 0.35,
            vol: 0.22,
            delay: l * 0.13,
          }),
        );
        let u = n.length * 0.13;
        [523.25, 659.25, 783.99, 1046.5].forEach((r) =>
          ju({ type: "triangle", f0: r, dur: 0.9, vol: 0.15, delay: u }),
        );
      }
      var YQ = {
        vila: [261.63, 329.63, 392],
        bosque: [220, 261.63, 329.63],
        lago: [329.63, 392, 523.25],
        caverna: [98, 130.81, 164.81],
        sombrio: [311.13, 466.16, 311.13],
        igneo: [698.46, 880, 1046.5],
      };
      function IQ(n) {
        (YQ[n] ?? YQ.bosque).forEach((r, l) =>
          ju({
            type: "triangle",
            f0: r,
            dur: 0.35,
            vol: 0.15,
            delay: l * 0.14,
          }),
        );
      }
      var mQ = [
          [0, 2, 4],
          [3, 5, 7],
          [4, 6, 8],
          [2, 4, 6],
        ],
        gQ = [0, 2, 4, 7, 9, 7, 4, 2],
        ve = {
          vila: {
            bpm: 72,
            root: 261.63,
            scale: [0, 2, 4, 7, 9],
            wave: "triangle",
            bright: 0.85,
            mel: 0.22,
            bass: !0,
          },
          campo: {
            bpm: 96,
            root: 293.66,
            scale: [0, 2, 4, 7, 9],
            wave: "triangle",
            bright: 0.8,
            mel: 0.3,
            bass: !0,
          },
          bosque: {
            bpm: 88,
            root: 246.94,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.7,
            mel: 0.3,
            bass: !0,
          },
          lago: {
            bpm: 80,
            root: 329.63,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.9,
            mel: 0.2,
            arp: !0,
          },
          sombrio: {
            bpm: 64,
            root: 174.61,
            scale: [0, 2, 3, 7, 8],
            wave: "sawtooth",
            bright: 0.35,
            mel: 0.18,
            bass: !0,
          },
          igneo: {
            bpm: 60,
            root: 146.83,
            scale: [0, 3, 5, 6, 10],
            wave: "sawtooth",
            bright: 0.3,
            mel: 0.15,
            bass: !0,
          },
          arena: {
            bpm: 112,
            root: 220,
            scale: [0, 2, 3, 7, 9],
            wave: "triangle",
            bright: 0.6,
            mel: 0.35,
            bass: !0,
          },
          "cav-bosque": {
            bpm: 66,
            root: 196,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.5,
            mel: 0.2,
            bass: !0,
          },
          "cav-lago": {
            bpm: 70,
            root: 246.94,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.55,
            mel: 0.18,
            arp: !0,
            bass: !0,
          },
          "cav-sombria": {
            bpm: 58,
            root: 155.56,
            scale: [0, 2, 3, 7, 8],
            wave: "sawtooth",
            bright: 0.3,
            mel: 0.15,
            bass: !0,
          },
          "cav-ignea": {
            bpm: 62,
            root: 130.81,
            scale: [0, 3, 5, 6, 10],
            wave: "sawtooth",
            bright: 0.28,
            mel: 0.15,
            bass: !0,
          },
          abismo: {
            bpm: 52,
            root: 110,
            scale: [0, 1, 5, 6, 8],
            wave: "sawtooth",
            bright: 0.22,
            mel: 0.12,
            bass: !0,
          },
          brasa: {
            bpm: 68,
            root: 98,
            scale: [0, 2, 4, 7, 9],
            wave: "sawtooth",
            bright: 0.4,
            mel: 0.18,
            bass: !0,
          },
          mare: {
            bpm: 84,
            root: 293.66,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.85,
            mel: 0.15,
            arp: !0,
          },
          flora: {
            bpm: 92,
            root: 329.63,
            scale: [0, 2, 4, 7, 9],
            wave: "triangle",
            bright: 0.95,
            mel: 0.32,
          },
          faisca: {
            bpm: 132,
            root: 523.25,
            scale: [0, 2, 4, 7, 9],
            wave: "square",
            bright: 1,
            mel: 0.4,
          },
          pedra: {
            bpm: 56,
            root: 87.31,
            scale: [0, 2, 4, 7, 9],
            wave: "sine",
            bright: 0.45,
            mel: 0.12,
            bass: !0,
          },
          sombra: {
            bpm: 60,
            root: 138.59,
            scale: [0, 2, 3, 7, 8],
            wave: "sawtooth",
            bright: 0.3,
            mel: 0.15,
            bass: !0,
          },
        },
        O8 = null,
        Uf = "",
        Or = null,
        Mf = null,
        C8 = 0,
        a3 = 0,
        Hf = 5,
        R3 = 0,
        Qe = !1;
      var s3 = (n, u, r) => {
        let l = u.length,
          o = Math.floor(r / l),
          f = u[((r % l) + l) % l];
        return n * Math.pow(2, (f + o * 12) / 12);
      };
      function q8(n, u, r, l, o, f, $ = 0.03) {
        try {
          let _ = n.createOscillator(),
            v = n.createGain();
          ((_.type = u),
            _.frequency.setValueAtTime(Math.max(1, r), l),
            v.gain.setValueAtTime(0.0001, l),
            v.gain.exponentialRampToValueAtTime(f, l + $),
            v.gain.exponentialRampToValueAtTime(0.0001, l + o),
            _.connect(v),
            v.connect(Mf),
            _.start(l),
            _.stop(l + o + 0.1));
        } catch {}
      }
      function _e(n, u, r, l, o) {
        if (o % 16 === 0) {
          let f = mQ[Math.floor(o / 16) % mQ.length],
            $ = r * 16;
          if (
            (f
              .slice(0, 3)
              .forEach((_) =>
                q8(n, u.wave, s3(u.root, u.scale, _), l, $, 0.05, 1.4),
              ),
            u.bass)
          )
            q8(n, "sine", u.root / 2, l, $, 0.07, 0.6);
        }
        if (u.arp) {
          let f = gQ[R3 % gQ.length];
          (R3++,
            q8(n, "sine", s3(u.root * 2, u.scale, f), l, r * 1.6, 0.06, 0.02));
        } else if (Math.random() < u.mel)
          ((Hf += [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)]),
            (Hf = Math.max(2, Math.min(11, Hf))),
            q8(
              n,
              "triangle",
              s3(u.root * 2, u.scale, Hf),
              l,
              r * 2.5,
              0.075,
              0.03,
            ));
      }
      function SQ(n) {
        if (n === Uf) return;
        Ze();
        let u = ve[n];
        if (!u || Qe) {
          Uf = n;
          return;
        }
        let r = t3();
        if (!r) {
          Uf = n;
          return;
        }
        try {
          if (!Or)
            ((Or = r.createGain()),
              (Or.gain.value = 0.22),
              (Mf = r.createBiquadFilter()),
              (Mf.type = "lowpass"),
              Mf.connect(Or),
              Or.connect(wQ(r)));
          let l = r.currentTime;
          (Mf.frequency.setValueAtTime(300 + u.bright * 4500, l),
            Or.gain.cancelScheduledValues(l),
            Or.gain.setValueAtTime(Math.max(0.0001, Or.gain.value), l),
            Or.gain.linearRampToValueAtTime(0.22, l + 0.8),
            (Uf = n),
            (C8 = l + 0.15),
            (a3 = 0),
            (Hf = 5),
            (R3 = 0));
          let o = 60 / u.bpm / 2;
          O8 = window.setInterval(() => {
            if (r.state !== "running") return;
            try {
              while (C8 < r.currentTime + 0.5)
                (_e(r, u, o, C8, a3), (C8 += o), a3++);
            } catch {}
          }, 200);
        } catch {}
      }
      function Ze() {
        if (O8 !== null) (clearInterval(O8), (O8 = null));
        if (((Uf = ""), Or && ao))
          try {
            let n = ao.currentTime;
            (Or.gain.cancelScheduledValues(n),
              Or.gain.setValueAtTime(Math.max(0.0001, Or.gain.value), n),
              Or.gain.exponentialRampToValueAtTime(0.0001, n + 0.35));
          } catch {}
      }
      var t = 32,
        G0 = (n) => new Promise((u) => setTimeout(u, n)),
        Ne = {
          vila: "vila",
          casa: "vila",
          planalto: "campo",
          grove: "campo",
          clareira: "campo",
          bosque: "bosque",
          lago: "lago",
          sombrio: "sombrio",
          fenda: "sombrio",
          igneo: "igneo",
          abismo: "igneo",
          caverna: "arena",
          profunda: "arena",
          "caverna-bosque": "cav-bosque",
          "caverna-lago": "cav-lago",
          "caverna-sombria": "cav-sombria",
          "caverna-ignea": "cav-ignea",
          "abismo-real": "abismo",
          "caverna-flora": "flora",
          "caverna-mare": "mare",
          "caverna-bras": "brasa",
          "caverna-faisca": "faisca",
          "caverna-pedra": "pedra",
          "caverna-sombra": "sombra",
        };
      function jQ(n) {
        return Object.keys(Jf).filter((u) => jr(n, u));
      }