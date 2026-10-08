/*
 * Eco Vínculo — Toast, Firebase, online, Dex e inicialização
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 45632-49284.
 */
"use strict";

      var X8 = Du(Pu(), 1);
      var u9 = new Set(),
        Be = 1;
      function Jr(n, u) {
        let r = { id: Be++, kind: n, text: u };
        u9.forEach((l) => {
          try {
            l(r);
          } catch {}
        });
      }
      var Ae = {
          success: "border-emerald-300/50 bg-emerald-950/95 text-emerald-100",
          info: "border-amber-300/50 bg-slate-900/95 text-amber-100",
          error: "border-red-400/50 bg-red-950/95 text-red-100",
        },
        Fe = { success: "✓", info: "✦", error: "⚠" };
      function dQ() {
        let [n, u] = X8.useState([]);
        if (
          (X8.useEffect(() => {
            let r = (l) => {
              (u((o) => [...o.slice(-2), l]),
                window.setTimeout(() => {
                  u((o) => o.filter((f) => f.id !== l.id));
                }, 3200));
            };
            return (
              u9.add(r),
              () => {
                u9.delete(r);
              }
            );
          }, []),
          n.length === 0)
        )
          return null;
        return O("div", {
          className:
            "fixed top-3 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none px-4 w-full max-w-md",
          style: { paddingTop: "var(--safe-area-inset-top)" },
          "aria-live": "polite",
          children: [
            N("style", {
              children: `@keyframes ev-toast-in { from { opacity: 0; transform: translateY(-8px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
  .ev-toast { animation: ev-toast-in 200ms ease-out; will-change: transform, opacity; }
  @media (prefers-reduced-motion: reduce) { .ev-toast { animation: none; } }`,
            }),
            n.map((r) =>
              O(
                "div",
                {
                  className: `ev-toast flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 shadow-2xl text-sm font-bold backdrop-blur ${Ae[r.kind]}`,
                  children: [
                    N("span", { "aria-hidden": !0, children: Fe[r.kind] }),
                    N("span", { children: r.text }),
                  ],
                },
                r.id,
              ),
            ),
          ],
        });
      }
      var Zo = Du(Pu(), 1);
      var bQ = `
  @keyframes ev-modal-in {
    from { opacity: 0; transform: scale(0.96) translateY(8px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  .ev-modal-panel {
    animation: ev-modal-in 220ms cubic-bezier(0.22, 0.9, 0.32, 1.12);
    will-change: transform, opacity;
  }
  .ev-screen-fade { transition: opacity 300ms ease; }
  @media (prefers-reduced-motion: reduce) {
    .ev-modal-panel { animation: none; }
    .ev-screen-fade { transition: none; }
  }
  `;
      function pQ(n, u = 300) {
        let r = Zo.useRef(
            typeof window < "u" &&
              typeof window.matchMedia === "function" &&
              window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          ).current,
          [l, o] = Zo.useState(n),
          [f, $] = Zo.useState(1),
          _ = Zo.useRef(n);
        return (
          Zo.useEffect(() => {
            if (Object.is(n, _.current)) return;
            if (r) {
              ((_.current = n), o(n), $(1));
              return;
            }
            $(0);
            let v = window.setTimeout(() => {
              ((_.current = n),
                o(n),
                requestAnimationFrame(() => requestAnimationFrame(() => $(1))));
            }, u);
            return () => window.clearTimeout(v);
          }, [n, r, u]),
          [l, f]
        );
      }
      function aQ({ vis: n, children: u }) {
        return N("div", {
          className: "ev-screen-fade",
          style: { opacity: n },
          children: u,
        });
      }
      var sQ = Du(Pu(), 1),
        r9 = "#0b1f16",
        Pe = [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">',
          '<rect width="512" height="512" rx="112" fill="#0b1f16"/>',
          '<circle cx="256" cy="248" r="148" fill="none" stroke="#fbbf24" stroke-width="26"/>',
          '<path d="M256 152c-54 46-80 90-80 130 0 44 35 72 80 72s80-28 80-72c0-40-26-84-80-130z" fill="#34d399"/>',
          '<path d="M256 354v-96" stroke="#0b1f16" stroke-width="18" stroke-linecap="round"/>',
          '<circle cx="196" cy="392" r="14" fill="#34d399"/>',
          '<circle cx="256" cy="404" r="14" fill="#fbbf24"/>',
          '<circle cx="316" cy="392" r="14" fill="#34d399"/>',
          "</svg>",
        ].join("");
      function so(n, u) {
        let r = document.head.querySelector(`meta[name="${n}"]`);
        if (!r)
          ((r = document.createElement("meta")),
            r.setAttribute("name", n),
            document.head.appendChild(r));
        r.setAttribute("content", u);
      }
      function l9(n, u, r) {
        let l = document.head.querySelector(`link[rel="${n}"]`);
        if (!l)
          ((l = document.createElement("link")),
            l.setAttribute("rel", n),
            document.head.appendChild(l));
        if ((l.setAttribute("href", u), r)) l.setAttribute("type", r);
        else l.removeAttribute("type");
      }
      function RQ() {
        sQ.useEffect(() => {
          let n = document.head.querySelector('meta[name="viewport"]');
          if (n) {
            let o = n.getAttribute("content") || "";
            if (!o.includes("viewport-fit"))
              n.setAttribute(
                "content",
                `${o}${o ? ", " : ""}viewport-fit=cover`,
              );
          } else
            so(
              "viewport",
              "width=device-width, initial-scale=1, viewport-fit=cover",
            );
          (so("theme-color", r9),
            so(
              "description",
              "Eco Vínculo — capture pets, batalhe e explore o mundo online",
            ),
            so("mobile-web-app-capable", "yes"),
            so("apple-mobile-web-app-capable", "yes"),
            so("apple-mobile-web-app-status-bar-style", "black-translucent"),
            so("apple-mobile-web-app-title", "Eco Vínculo"));
          let u = `data:image/svg+xml,${encodeURIComponent(Pe)}`,
            r = {
              name: "Eco Vínculo",
              short_name: "Eco Vínculo",
              description:
                "Eco Vínculo — capture pets, batalhe e explore o mundo online",
              start_url: ".",
              scope: ".",
              display: "standalone",
              orientation: "portrait",
              background_color: r9,
              theme_color: r9,
              icons: [
                { src: u, sizes: "any", type: "image/svg+xml", purpose: "any" },
              ],
            },
            l = URL.createObjectURL(
              new Blob([JSON.stringify(r)], {
                type: "application/manifest+json",
              }),
            );
          if (
            (l9("manifest", l),
            l9("icon", u, "image/svg+xml"),
            l9("apple-touch-icon", u),
            "serviceWorker" in navigator)
          )
            window.addEventListener("load", () => {
              navigator.serviceWorker.register("./sw.js").catch(() => {});
            });
        }, []);
      }
      var zl = Du(Pu(), 1);
      var Ye = {
        apiKey: "AIzaSyD1yc9nvuHqR2n9hN4A_OLCDMdZg8w90ag",
        authDomain: "eco-vinculo.firebaseapp.com",
        databaseURL: "https://eco-vinculo-default-rtdb.firebaseio.com",
        projectId: "eco-vinculo",
        storageBucket: "eco-vinculo.firebasestorage.app",
        messagingSenderId: "233660043124",
        appId: "1:233660043124:web:486b9df3af2e66ca336621",
        measurementId: "G-TPGVBP591F",
      };
      function tQ(n) {
        return (
          !!n &&
          typeof n === "object" &&
          typeof n.databaseURL === "string" &&
          n.databaseURL.length > 0
        );
      }
      function T0() {
        try {
          let n = localStorage.getItem("eco_firebase_config");
          if (n) {
            let u = JSON.parse(n);
            if (tQ(u)) return { config: u, configured: !0, source: "manual" };
          }
        } catch {}
        return { config: Ye, configured: !0, source: "default" };
      }
      function cQ(n) {
        let u;
        try {
          u = JSON.parse(n);
        } catch {
          return {
            ok: !1,
            error:
              "JSON inválido. Cole o objeto firebaseConfig copiado do console do Firebase.",
          };
        }
        if (!tQ(u))
          return {
            ok: !1,
            error:
              'Config incompleta: o firebaseConfig precisa conter "databaseURL".',
          };
        try {
          localStorage.setItem("eco_firebase_config", JSON.stringify(u));
        } catch {
          return {
            ok: !1,
            error:
              "Não foi possível salvar (armazenamento do navegador indisponível).",
          };
        }
        return { ok: !0 };
      }
      function xQ() {
        try {
          localStorage.removeItem("eco_firebase_config");
        } catch {}
      }
      var No = Du(Pu(), 1);
      var me = `{
    "apiKey": "...",
    "authDomain": "seu-projeto.firebaseapp.com",
    "databaseURL": "https://seu-projeto-default-rtdb.firebaseio.com",
    "projectId": "seu-projeto",
    ...
  }`;
      function o9({ onClose: n }) {
        let [u, r] = No.useState(() => T0()),
          [l, o] = No.useState(() => !T0().configured),
          [f, $] = No.useState(""),
          [_, v] = No.useState(null),
          [Z, J] = No.useState(!1),
          [e, Q] = No.useState(""),
          [M, H] = No.useState(!1),
          K = () => {
            let B = T0();
            (r(B), o(!B.configured), v(null));
          },
          V = () => {
            if (e.trim() === "462juvino") (J(!0), H(!1));
            else H(!0);
          },
          C = () => {
            (o(!0), J(!1), Q(""), H(!1), v(null));
          },
          D = () => {
            let B = cQ(f);
            if (B.ok)
              ($(""),
                K(),
                v({
                  ok: !0,
                  text: "Conectado! \uD83C\uDF89 Configuração do Firebase salva e ativa.",
                }));
            else v({ ok: !1, text: B.error || "Erro ao salvar." });
          },
          W = () => {
            (xQ(),
              $(""),
              K(),
              v({
                ok: !0,
                text: "Override manual removido. O jogo voltou à configuração padrão do projeto.",
              }));
          };
        return N("div", {
          className:
            "absolute inset-0 z-30 flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm",
          onClick: n,
          children: O("div", {
            className:
              "ev-modal-panel w-full max-w-md bg-slate-900 border-2 border-emerald-300/40 rounded-3xl p-6 shadow-2xl max-h-[85dvh] overflow-y-auto",
            onClick: (B) => B.stopPropagation(),
            children: [
              O("div", {
                className: "flex items-center justify-between mb-1",
                children: [
                  O("h2", {
                    className:
                      "text-white font-black text-xl flex items-center gap-2",
                    children: [
                      N(el, { size: 22, className: "text-emerald-300" }),
                      " Mundo Online",
                    ],
                  }),
                  N("button", {
                    onClick: n,
                    "aria-label": "Fechar",
                    className:
                      "text-white/60 hover:text-white bg-white/10 rounded-full p-1.5 transition",
                    children: N(Mu, { size: 18 }),
                  }),
                ],
              }),
              N("p", {
                className: "text-white/55 text-xs font-bold mb-4",
                children: u.configured
                  ? "Os recursos online do Vale do Eco estão ativos."
                  : "Conecte seu projeto Firebase para liberar os recursos online do Vale do Eco.",
              }),
              u.configured && !l
                ? O("div", {
                    children: [
                      N("div", {
                        className:
                          "flex items-center gap-2 bg-emerald-400/15 border border-emerald-300/40 rounded-2xl px-4 py-3 mb-3",
                        children: N("span", {
                          className: "text-emerald-300 font-black text-base",
                          children: "\uD83D\uDFE2 Firebase conectado",
                        }),
                      }),
                      _ &&
                        N("p", {
                          className: `text-xs font-extrabold mb-3 leading-relaxed ${_.ok ? "text-emerald-300" : "text-red-300"}`,
                          children: _.text,
                        }),
                      O("p", {
                        className: "text-white/60 text-xs font-bold mb-1",
                        children: [
                          "Projeto: ",
                          N("span", {
                            className: "text-white/85",
                            children: String(u.config.projectId || "—"),
                          }),
                        ],
                      }),
                      O("p", {
                        className: "text-white/40 text-[11px] font-bold mb-4",
                        children: [
                          "Origem: ",
                          u.source === "manual"
                            ? "configuração manual"
                            : "padrão do projeto",
                        ],
                      }),
                      O("button", {
                        onClick: C,
                        className:
                          "text-white/50 hover:text-white text-xs font-extrabold underline underline-offset-2 flex items-center gap-1 transition",
                        children: [N(c1, { size: 13 }), " reconfigurar"],
                      }),
                    ],
                  })
                : !Z
                  ? O("div", {
                      children: [
                        O("h3", {
                          className:
                            "text-amber-300 font-extrabold text-sm tracking-wide mb-2 flex items-center gap-2",
                          children: [
                            N(fo, { size: 16 }),
                            " ⚙️ CONFIGURAR FIREBASE",
                          ],
                        }),
                        N("p", {
                          className:
                            "text-white/70 text-xs font-bold leading-relaxed mb-3",
                          children:
                            "Área protegida — digite a senha para alterar a configuração do Firebase.",
                        }),
                        N("label", {
                          className:
                            "text-indigo-200 text-xs font-extrabold mb-1 block",
                          children: "SENHA",
                        }),
                        N("input", {
                          type: "password",
                          value: e,
                          onChange: (B) => {
                            (Q(B.target.value), H(!1));
                          },
                          onKeyDown: (B) => {
                            if (B.key === "Enter") V();
                          },
                          placeholder: "••••••••",
                          "aria-label": "Senha",
                          className:
                            "w-full bg-black/40 border-2 border-white/15 rounded-2xl px-4 py-3 text-white font-extrabold text-base outline-none focus:border-emerald-300 placeholder:text-white/25 mb-3",
                        }),
                        M &&
                          N("p", {
                            className:
                              "text-red-300 text-xs font-extrabold mb-3",
                            children: "Senha incorreta",
                          }),
                        N("button", {
                          onClick: V,
                          className:
                            "w-full bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-base px-6 py-3 rounded-2xl shadow-lg border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition",
                          children: "Desbloquear",
                        }),
                      ],
                    })
                  : O("div", {
                      children: [
                        O("h3", {
                          className:
                            "text-amber-300 font-extrabold text-sm tracking-wide mb-2 flex items-center gap-2",
                          children: [
                            N(fo, { size: 16 }),
                            " ⚙️ CONFIGURAR FIREBASE",
                          ],
                        }),
                        O("p", {
                          className:
                            "text-white/70 text-xs font-bold leading-relaxed mb-3",
                          children: [
                            "No console do Firebase > ",
                            N("b", {
                              className: "text-white",
                              children: "Configurações do projeto",
                            }),
                            " >",
                            " ",
                            N("b", {
                              className: "text-white",
                              children: "Seus apps",
                            }),
                            " (ícone ",
                            N("code", {
                              className: "bg-white/10 px-1 rounded",
                              children: "</>",
                            }),
                            "), copie o objeto ",
                            N("code", {
                              className: "bg-white/10 px-1 rounded",
                              children: "firebaseConfig",
                            }),
                            " e cole abaixo.",
                          ],
                        }),
                        N("textarea", {
                          value: f,
                          onChange: (B) => $(B.target.value),
                          placeholder: me,
                          rows: 7,
                          spellCheck: !1,
                          "aria-label": "JSON do firebaseConfig",
                          className:
                            "w-full bg-black/40 border-2 border-white/15 rounded-2xl px-3 py-2.5 text-white/90 font-mono text-xs outline-none focus:border-emerald-300 placeholder:text-white/25 mb-3 resize-y",
                        }),
                        _ &&
                          N("p", {
                            className: `text-xs font-extrabold mb-3 leading-relaxed ${_.ok ? "text-emerald-300" : "text-red-300"}`,
                            children: _.text,
                          }),
                        O("div", {
                          className: "flex gap-2",
                          children: [
                            N("button", {
                              onClick: D,
                              className:
                                "flex-1 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-base px-6 py-3 rounded-2xl shadow-lg border-b-4 border-emerald-600 active:scale-95 active:border-b-0 transition",
                              children: "Salvar",
                            }),
                            O("button", {
                              onClick: W,
                              className:
                                "bg-white/10 hover:bg-white/20 text-white/80 font-extrabold text-sm px-4 py-3 rounded-2xl border-2 border-white/15 active:scale-95 transition flex items-center gap-1.5",
                              children: [N(lf, { size: 15 }), " Limpar"],
                            }),
                          ],
                        }),
                        u.configured &&
                          N("button", {
                            onClick: () => {
                              (o(!1), v(null));
                            },
                            className:
                              "mt-3 text-white/50 hover:text-white text-xs font-extrabold underline underline-offset-2 transition",
                            children: "cancelar",
                          }),
                      ],
                    }),
            ],
          }),
        });
      }
      var Fn = Du(Pu(), 1);
      function Of(n) {
        return n.replace(/\/+$/, "");
      }
      async function ll(n, u) {
        try {
          let r = await fetch(n, u);
          if (!r.ok) return null;
          let l = await r.text();
          if (!l) return null;
          try {
            return JSON.parse(l);
          } catch {
            return null;
          }
        } catch {
          return null;
        }
      }
      var B8 = (n, u, r) =>
          `${Of(n)}/servers/${encodeURIComponent(u)}/challenges/${encodeURIComponent(r)}.json`,
        A8 = (n, u, r) =>
          `${Of(n)}/servers/${encodeURIComponent(u)}/battles/${encodeURIComponent(r)}.json`;
      async function F8(n, u, r) {
        return await ll(B8(n, u, r));
      }
      async function n_(n, u, r) {
        let l = await F8(n, u, r.to);
        if (l && l.status === "pending" && Date.now() - l.createdAt < 30000)
          return !1;
        return (
          await ll(B8(n, u, r.to), { method: "PUT", body: JSON.stringify(r) }),
          !0
        );
      }
      async function u_(n, u, r, l) {
        await ll(B8(n, u, r), { method: "PATCH", body: JSON.stringify(l) });
      }
      async function P8(n, u, r) {
        await ll(B8(n, u, r), { method: "DELETE" });
      }
      async function r_(n, u, r) {
        await ll(A8(n, u, r.id), { method: "PUT", body: JSON.stringify(r) });
      }
      async function f9(n, u, r) {
        return await ll(A8(n, u, r));
      }
      async function k0(n, u, r, l) {
        await ll(A8(n, u, r), { method: "PATCH", body: JSON.stringify(l) });
      }
      async function l_(n, u, r) {
        await ll(A8(n, u, r), { method: "DELETE" });
      }
      async function o_(n, u, r, l, o) {
        await ll(
          `${Of(n)}/servers/${encodeURIComponent(u)}/battles/${encodeURIComponent(r)}/teams/${encodeURIComponent(l)}.json`,
          { method: "PUT", body: JSON.stringify(o) },
        );
      }
      async function f_(n, u, r, l, o, f) {
        await ll(
          `${Of(n)}/servers/${encodeURIComponent(u)}/battles/${encodeURIComponent(r)}/turns/${l}/${encodeURIComponent(o)}.json`,
          { method: "PUT", body: JSON.stringify(f) },
        );
      }
      async function $9(n, u, r, l) {
        await ll(
          `${Of(n)}/servers/${encodeURIComponent(u)}/battles/${encodeURIComponent(r)}/presence/${encodeURIComponent(l)}.json`,
          { method: "PUT", body: JSON.stringify({ ts: Date.now() }) },
        );
      }
      function v9(n) {
        return `${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      }
      function ge(n) {
        return n.replace(/\/+$/, "");
      }
      var $_ = (n, u) => `${ge(n)}/servers/${encodeURIComponent(u)}/chat.json`;
      async function v_(n, u) {
        try {
          let r = await fetch(n, u);
          if (!r.ok) return null;
          let l = await r.text();
          if (!l) return null;
          try {
            return JSON.parse(l);
          } catch {
            return null;
          }
        } catch {
          return null;
        }
      }
      async function Q_(n, u, r) {
        let l = {
          id:
            r.id ??
            `msg-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
          fromId: r.fromId,
          fromName: r.fromName,
          text: r.text,
          createdAt: r.createdAt,
        };
        return (
          (await v_($_(n, u), { method: "POST", body: JSON.stringify(l) })) !==
          null
        );
      }
      async function Q9(n, u) {
        let r = `${$_(n, u)}?orderBy=${encodeURIComponent('"createdAt"')}&limitToLast=50`,
          l = await v_(r);
        if (!l || typeof l !== "object") return [];
        return Object.values(l)
          .filter(
            (f) =>
              f &&
              typeof f.text === "string" &&
              typeof f.createdAt === "number",
          )
          .sort((f, $) => f.createdAt - $.createdAt)
          .slice(-50);
      }
      var er = 32,
        __ = 0,
        Z_ = 0,
        mr = 33,
        eo = 23,
        N_ = mr * er,
        K_ = eo * er,
        Ko = 22 * er,
        Jo = 16 * er,
        J_ = 164,
        e_ = [
          "#38bdf8",
          "#f472b6",
          "#a78bfa",
          "#fb923c",
          "#4ade80",
          "#facc15",
          "#f87171",
        ];
      function we(n) {
        let u = 2166136261;
        for (let r = 0; r < n.length; r++)
          ((u ^= n.charCodeAt(r)), (u = Math.imul(u, 16777619)));
        return u >>> 0;
      }
      function _9({
        api: n,
        playerId: u,
        affColor: r,
        onExit: l,
        dbUrl: o,
        serverId: f,
        myName: $,
        onPvpStart: _,
      }) {
        let v = Fn.useRef(null),
          Z = Fn.useRef(n);
        Z.current = n;
        let J = Fn.useRef(u),
          e = Fn.useRef({ x: 8.5 * er, y: 7.5 * er, dir: 2, moving: !1 }),
          Q = Fn.useRef({ up: !1, down: !1, left: !1, right: !1 }),
          M = Fn.useRef({ x: 0, y: 0 }),
          H = Fn.useRef(null),
          K = Fn.useRef(null),
          V = Fn.useRef(null),
          C = Fn.useRef(new Map()),
          [D, W] = Fn.useState(null),
          [B, A] = Fn.useState(null),
          [P, U] = Fn.useState(null),
          E = Fn.useRef(null),
          [q, L] = Fn.useState(!1),
          [Y, G] = Fn.useState([]),
          [d, h] = Fn.useState(!1),
          [i, b] = Fn.useState(!1),
          [z, k] = Fn.useState(""),
          [a, un] = Fn.useState(!1),
          [mn, en] = Fn.useState(null),
          sn = Fn.useRef(0),
          Gu = Fn.useRef(null),
          Mn = Fn.useRef(!1);
        ((Mn.current = q),
          Fn.useEffect(() => {
            let s = window.setTimeout(() => b(!0), 3500);
            return () => window.clearTimeout(s);
          }, []),
          Fn.useEffect(() => {
            let s = !0,
              ln = 0,
              Zn = !1,
              Kn = async () => {
                let Hn = await Q9(o, f);
                if (!s) return;
                if (!Zn) ((Zn = !0), h(!0));
                if (Hn.length === 0) return;
                if (ln > 0 && Hn.length > ln && !Mn.current)
                  Jr("info", "Nova mensagem no chat da vila");
                ((ln = Hn.length), G(Hn));
              };
            Kn();
            let Ku = window.setInterval(Kn, 3000);
            return () => {
              ((s = !1), window.clearInterval(Ku));
            };
          }, [o, f]),
          Fn.useEffect(() => {
            let s = Gu.current;
            if (s && Mn.current) s.scrollTop = s.scrollHeight;
          }, [Y.length, q]));
        let yr = async () => {
            let s = z.trim().slice(0, 140);
            if (!s || a) return;
            let ln = Date.now();
            if (ln - sn.current < 2000) {
              en("Aguarde 2s entre mensagens.");
              return;
            }
            (un(!0), en(null));
            let Zn = await Q_(o, f, {
              fromId: u,
              fromName: $.slice(0, 24) || "Treinador",
              text: s,
              createdAt: ln,
            });
            if ((un(!1), Zn)) {
              ((sn.current = ln), k(""));
              let Kn = await Q9(o, f);
              if (Kn.length > 0) G(Kn);
            } else en("Falha ao enviar. Tente de novo.");
          },
          Rn = Fn.useRef(null),
          [Er, Gn] = Fn.useState({ w: 340, h: 248 });
        Fn.useEffect(() => {
          let s = Rn.current;
          if (!s) return;
          let ln = () => {
            let Kn = s.getBoundingClientRect(),
              Ku = window.matchMedia("(orientation: landscape)").matches,
              Hn;
            if (Ku && Kn.height > 4)
              Hn = Math.min(720, Kn.width, Kn.height * (Ko / Jo));
            else Hn = Math.min(720, Math.max(0, Kn.width));
            Hn = Math.max(220, Math.floor(Hn));
            let yu = Math.floor((Hn * Jo) / Ko);
            Gn((Tu) => (Tu.w === Hn && Tu.h === yu ? Tu : { w: Hn, h: yu }));
          };
          ln();
          let Zn = new ResizeObserver(ln);
          return (Zn.observe(s), () => Zn.disconnect());
        }, []);
        let Pn = Fn.useMemo(() => {
            let s = _f(),
              ln = Array(mr * eo);
            for (let Zn = 0; Zn < eo; Zn++)
              for (let Kn = 0; Kn < mr; Kn++)
                ln[Zn * mr + Kn] = Sr(s, __ + Kn, Z_ + Zn);
            for (let Zn = 0; Zn < mr; Zn++)
              ((ln[Zn] = F.TREE), (ln[(eo - 1) * mr + Zn] = F.TREE));
            for (let Zn = 0; Zn < eo; Zn++)
              ((ln[Zn * mr] = F.TREE), (ln[Zn * mr + mr - 1] = F.TREE));
            return { w: mr, h: eo, tiles: ln };
          }, []),
          uu = (s, ln) => {
            if (s < 0 || ln < 0 || s >= mr || ln >= eo) return F.TREE;
            return Pn.tiles[ln * mr + s];
          },
          Nu = Fn.useMemo(
            () =>
              new Set([
                F.TREE,
                F.CAVEWALL,
                F.HOUSE,
                F.THORN,
                F.DOOR,
                F.WATER,
                F.DEEP,
                F.GAP,
                F.BOULDER,
                F.CAVE_ENTRY,
              ]),
            [],
          ),
          wn = (s, ln) => Nu.has(uu(s, ln)),
          tu = async (s, ln) => {
            if (B || D) return;
            let Zn = {
              id: v9("ch"),
              from: { id: u, name: $ },
              to: s,
              status: "pending",
              createdAt: Date.now(),
            };
            if (!(await n_(o, f, Zn))) {
              U("Esse treinador já tem um desafio pendente.");
              return;
            }
            (A({ targetId: s, targetName: ln }),
              U(`Desafio enviado para ${ln}! Aguardando resposta…`));
            try {
              navigator.vibrate?.(15);
            } catch {}
          };
        Fn.useEffect(() => {
          let s = !0,
            ln = async () => {
              let Kn = await F8(o, f, u);
              if (!s) return;
              if (Kn && Kn.status === "pending") {
                if (Date.now() - Kn.createdAt > 30000) {
                  (P8(o, f, u), W(null), (E.current = null));
                  return;
                }
                if (E.current?.id !== Kn.id)
                  (W(Kn),
                    (E.current = Kn),
                    Jr("info", `${Kn.from.name} te desafiou para um PvP!`));
              } else if (Kn && Kn.status === "accepted" && Kn.battleId);
              else if (E.current) (W(null), (E.current = null));
              if (B) {
                let Ku = await F8(o, f, B.targetId);
                if (!s) return;
                if (!Ku) {
                  (A(null), U("Desafio recusado ou expirado."));
                  return;
                }
                if (
                  Date.now() - Ku.createdAt > 30000 &&
                  Ku.status === "pending"
                ) {
                  (P8(o, f, B.targetId), A(null), U("Desafio expirou (30s)."));
                  return;
                }
                if (Ku.status === "accepted" && Ku.battleId)
                  (A(null), U(null), _(Ku.battleId));
              }
            };
          ln();
          let Zn = window.setInterval(ln, 2500);
          return () => {
            ((s = !1), window.clearInterval(Zn));
          };
        }, [o, f, u, B, _]);
        let Sn = async () => {
            if (!D) return;
            let s = v9("bt"),
              ln = {
                id: s,
                host: D.from.id,
                players: {
                  A: { id: D.from.id, name: D.from.name },
                  B: { id: u, name: $ },
                },
                status: "starting",
                createdAt: Date.now(),
              };
            (await r_(o, f, ln),
              await u_(o, f, u, { status: "accepted", battleId: s }),
              W(null),
              (E.current = null),
              _(s));
            try {
              navigator.vibrate?.([20, 40, 20]);
            } catch {}
          },
          Vo = async () => {
            if (!D) return;
            (await P8(o, f, u), W(null), (E.current = null));
          };
        Fn.useEffect(() => {
          return (
            Z.current.setInPlaza(!0),
            () => {
              Z.current.setInPlaza(!1);
            }
          );
        }, []);
        let Lu = (s, ln) => {
            let Zn = K.current;
            if (Zn) Zn.style.transform = `translate(${s}px, ${ln}px)`;
          },
          fl = (s, ln) => {
            let Zn = H.current;
            if (!Zn) return null;
            let Kn = Zn.getBoundingClientRect(),
              Ku = Kn.width / 2 - 28,
              Hn = s - (Kn.left + Kn.width / 2),
              yu = ln - (Kn.top + Kn.height / 2),
              Tu = Math.hypot(Hn, yu);
            if (Tu < 10) return { x: 0, y: 0, ox: 0, oy: 0 };
            let Bu = Math.min(Tu, Ku),
              pu = Hn / Tu,
              Ju = yu / Tu,
              En = Math.min(1, (Bu - 10) / (Ku - 10));
            return { x: pu * En, y: Ju * En, ox: pu * Bu, oy: Ju * Bu };
          };
        (Fn.useEffect(() => {
          let s = (Zn) => {
              let Kn = Zn.key.toLowerCase();
              if (Kn === "w" || Kn === "arrowup") Q.current.up = !0;
              else if (Kn === "s" || Kn === "arrowdown") Q.current.down = !0;
              else if (Kn === "a" || Kn === "arrowleft") Q.current.left = !0;
              else if (Kn === "d" || Kn === "arrowright") Q.current.right = !0;
              else return;
              Zn.preventDefault();
            },
            ln = (Zn) => {
              let Kn = Zn.key.toLowerCase();
              if (Kn === "w" || Kn === "arrowup") Q.current.up = !1;
              else if (Kn === "s" || Kn === "arrowdown") Q.current.down = !1;
              else if (Kn === "a" || Kn === "arrowleft") Q.current.left = !1;
              else if (Kn === "d" || Kn === "arrowright") Q.current.right = !1;
            };
          return (
            window.addEventListener("keydown", s),
            window.addEventListener("keyup", ln),
            () => {
              (window.removeEventListener("keydown", s),
                window.removeEventListener("keyup", ln));
            }
          );
        }, []),
          Fn.useEffect(() => {
            let s = v.current;
            if (!s) return;
            let ln = s.getContext("2d");
            if (!ln) return;
            let Zn = Math.min(2, window.devicePixelRatio || 1);
            ((s.width = Ko * Zn * 1.4),
           (s.height = Jo * Zn * 1.4),
           (s.style.width = (Ko * 1.4) + "px"),
           (s.style.height = (Jo * 1.4) + "px"),
           ln.setTransform(Zn, 0, 0, Zn, Ko * Zn * 0.2, Jo * Zn * 0.2));
            let Kn = 0,
              Ku = performance.now(),
              Hn = (Bu, pu) => {
                for (let [En, Dn] of [
                  [-10, -10],
                  [10, -10],
                  [-10, 10],
                  [10, 10],
                ])
                  if (
                    wn(Math.floor((Bu + En) / er), Math.floor((pu + Dn) / er))
                  )
                    return !0;
                return !1;
              },
              yu = (Bu, pu, Ju) => {
                ln.font = "bold 11px Trebuchet MS, sans-serif";
                let En = Math.min(150, ln.measureText(Ju).width + 14),
                  Dn = Bu - En / 2,
                  jn = pu - 52;
                ((ln.fillStyle = "rgba(2,6,23,0.72)"),
                  ln.beginPath(),
                  ln.roundRect(Dn, jn, En, 18, 9),
                  ln.fill(),
                  (ln.strokeStyle = "rgba(255,255,255,0.25)"),
                  (ln.lineWidth = 1),
                  ln.stroke(),
                  (ln.fillStyle = "#fff"),
                  (ln.textAlign = "center"),
                  (ln.textBaseline = "middle"));
                let hr = Ju.length > 16 ? Ju.slice(0, 15) + "…" : Ju;
                ln.fillText(hr, Bu, jn + 9.5);
              },
              Tu = (Bu) => {
                let pu = Math.min(0.05, (Bu - Ku) / 1000);
                Ku = Bu;
                let Ju = Bu / 1000,
                  En = e.current,
                  Dn = Q.current,
                  jn = M.current,
                  hr = (Dn.right ? 1 : 0) - (Dn.left ? 1 : 0) + jn.x,
                  ku = (Dn.down ? 1 : 0) - (Dn.up ? 1 : 0) + jn.y,
                  Au = Math.hypot(hr, ku);
                if (Au > 1) ((hr /= Au), (ku /= Au));
                if (((En.moving = Au > 0.12), En.moving)) {
                  let Nn = En.x + hr * J_ * Math.min(1, Au) * pu,
                    Ln = En.y + ku * J_ * Math.min(1, Au) * pu;
                  if (!Hn(Nn, En.y)) En.x = Math.max(16, Math.min(N_ - 16, Nn));
                  if (!Hn(En.x, Ln)) En.y = Math.max(16, Math.min(K_ - 16, Ln));
                  En.dir =
                    Math.abs(hr) > Math.abs(ku)
                      ? hr > 0
                        ? 1
                        : 3
                      : ku > 0
                        ? 2
                        : 0;
                }
                Z.current.pushPosition(En.x, En.y, En.dir);
                let Vr = new Set();
                for (let Nn of Z.current.players) {
                  if (Nn.id === J.current || !Nn.inPlaza) continue;
                  Vr.add(Nn.id);
                  let Ln = C.current.get(Nn.id);
                  if (!Ln)
                    ((Ln = {
                      rx: Nn.x,
                      ry: Nn.y,
                      lx: Nn.x,
                      ly: Nn.y,
                      dir: Nn.dir,
                      name: Nn.name,
                      color: e_[we(Nn.id) % e_.length],
                      moving: !1,
                    }),
                      C.current.set(Nn.id, Ln));
                  else
                    ((Ln.moving = Math.hypot(Nn.x - Ln.lx, Nn.y - Ln.ly) > 2),
                      (Ln.lx = Nn.x),
                      (Ln.ly = Nn.y),
                      (Ln.dir = Nn.dir),
                      (Ln.name = Nn.name));
                }
                for (let Nn of [...C.current.keys()])
                  if (!Vr.has(Nn)) C.current.delete(Nn);
                let or = Math.max(0, Math.min(N_ - Ko, En.x - Ko / 2)),
                  mu = Math.max(0, Math.min(K_ - Jo, En.y - Jo / 2));
                (ln.clearRect(0, 0, Ko, Jo), (ln.imageSmoothingEnabled = !1));
                let Lr = Math.max(0, Math.floor(or / er)),
                  Wn = Math.min(mr - 1, Math.ceil((or + Ko) / er)),
                  gn = Math.max(0, Math.floor(mu / er)),
                  Ml = Math.min(eo - 1, Math.ceil((mu + Jo) / er));
                for (let Nn = gn; Nn <= Ml; Nn++)
                  for (let Ln = Lr; Ln <= Wn; Ln++)
                    $f(
                      ln,
                      uu(Ln, Nn),
                      Ln * er - or,
                      Nn * er - mu,
                      er,
                      Ju,
                      __ + Ln,
                      Z_ + Nn,
                    );
                let fr = [],
                  xn = 1 - Math.exp(-10 * pu);
                for (let Nn of C.current.values()) {
                  if (
                    ((Nn.rx += (Nn.lx - Nn.rx) * xn),
                    (Nn.ry += (Nn.ly - Nn.ry) * xn),
                    Nn.rx < or - 48 ||
                      Nn.rx > or + Ko + 48 ||
                      Nn.ry < mu - 64 ||
                      Nn.ry > mu + Jo + 32)
                  )
                    continue;
                  fr.push({
                    y: Nn.ry,
                    draw: () => {
                      (ff(
                        ln,
                        Nn.rx - or,
                        Nn.ry - mu,
                        30,
                        Nn.dir,
                        Nn.moving,
                        Ju,
                        Nn.color,
                      ),
                        yu(Nn.rx - or, Nn.ry - mu, Nn.name));
                    },
                  });
                }
                (fr.push({
                  y: En.y,
                  draw: () =>
                    ff(ln, En.x - or, En.y - mu, 32, En.dir, En.moving, Ju, r),
                }),
                  fr.sort((Nn, Ln) => Nn.y - Ln.y).forEach((Nn) => Nn.draw()),
                  (Kn = requestAnimationFrame(Tu)));
              };
            return (
              (Kn = requestAnimationFrame(Tu)),
              () => cancelAnimationFrame(Kn)
            );
          }, [r, Pn, Nu]));
        let Xu = n.players.filter((s) => s.inPlaza).length,
          Ul = n.players.filter((s) => s.id !== u);
        return O("div", {
          className:
            "min-h-dvh landscape:h-dvh flex flex-col bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950",
          style: { paddingTop: "var(--safe-area-inset-top)" },
          children: [
            O("div", {
              className:
                "flex items-center justify-between px-4 py-3 landscape:py-2 shrink-0",
              children: [
                N("div", {
                  className: "flex items-center gap-2",
                  children: O("span", {
                    className:
                      "bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 font-black text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5",
                    children: [N(Pr, { size: 15 }), " Praça Online · ", Xu],
                  }),
                }),
                O("button", {
                  onClick: l,
                  className:
                    "bg-white/10 hover:bg-white/20 text-white font-black text-sm px-4 py-2 rounded-2xl border-2 border-white/25 active:scale-95 transition flex items-center gap-1.5",
                  children: [N(Mu, { size: 16 }), " Sair da praça"],
                }),
              ],
            }),
            O("div", {
              className:
                "flex-1 min-h-0 flex flex-col landscape:flex-row landscape:gap-3 landscape:px-4",
              children: [
                N("div", {
                  ref: Rn,
                  className:
                    "flex items-center justify-center min-w-0 shrink-0 landscape:shrink landscape:flex-1 landscape:min-h-0 px-3 landscape:px-0 pb-2 landscape:pb-0",
                  children: O("div", {
                    className: "relative",
                    style: { width: Er.w, height: Er.h },
                    children: [
                      N("canvas", {
                        ref: v,
                        style: { width: Er.w, height: Er.h },
                        className:
                          "rounded-2xl border-2 border-white/15 shadow-2xl bg-slate-900 touch-none select-none block",
                      }),
                      N("div", {
                        ref: H,
                        className:
                          "absolute bottom-3 left-3 w-28 h-28 rounded-full bg-white/10 border-2 border-white/25 backdrop-blur-sm touch-none",
                        style: { touchAction: "none" },
                        onPointerDown: (s) => {
                          s.preventDefault();
                          try {
                            s.currentTarget.setPointerCapture(s.pointerId);
                          } catch {}
                          V.current = s.pointerId;
                          let ln = H.current;
                          if (!ln) return;
                          let Zn = ln.getBoundingClientRect(),
                            Kn = Zn.width / 2 - 28,
                            Ku = s.clientX - (Zn.left + Zn.width / 2),
                            Hn = s.clientY - (Zn.top + Zn.height / 2),
                            yu = Math.hypot(Ku, Hn);
                          if (yu < 10) {
                            ((M.current = { x: 0, y: 0 }), Lu(0, 0));
                            return;
                          }
                          let Tu = Math.min(yu, Kn),
                            Bu = Ku / yu,
                            pu = Hn / yu,
                            Ju = Math.min(1, (Tu - 10) / (Kn - 10));
                          M.current = { x: Bu * Ju, y: pu * Ju };
                          let En = K.current;
                          if (En)
                            En.style.transform = `translate(${Bu * Tu}px, ${pu * Tu}px)`;
                        },
                        onPointerMove: (s) => {
                          if (V.current !== s.pointerId) return;
                          let ln = fl(s.clientX, s.clientY);
                          if (ln)
                            ((M.current = { x: ln.x, y: ln.y }),
                              Lu(ln.ox, ln.oy));
                        },
                        onPointerUp: (s) => {
                          if (V.current !== s.pointerId) return;
                          ((V.current = null),
                            (M.current = { x: 0, y: 0 }),
                            Lu(0, 0));
                        },
                        onPointerCancel: (s) => {
                          if (V.current !== s.pointerId) return;
                          ((V.current = null),
                            (M.current = { x: 0, y: 0 }),
                            Lu(0, 0));
                        },
                        children: N("div", {
                          ref: K,
                          className:
                            "absolute left-1/2 top-1/2 -ml-7 -mt-7 w-14 h-14 rounded-full bg-white/35 border-2 border-white/50 shadow-lg",
                        }),
                      }),
                    ],
                  }),
                }),
                N("div", {
                  className:
                    "px-3 pb-2 landscape:px-0 landscape:pb-0 w-full landscape:w-72 landscape:shrink-0 landscape:min-h-0 landscape:overflow-y-auto",
                  children: O("div", {
                    className:
                      "w-full max-w-[720px] landscape:max-w-none mx-auto bg-white/5 border-2 border-white/10 rounded-2xl p-3",
                    children: [
                      O("h3", {
                        className:
                          "text-white/70 font-extrabold text-xs tracking-widest mb-2 flex items-center gap-2",
                        children: [
                          N(Ir, { size: 14, className: "text-amber-300" }),
                          " DESAFIAR PARA PVP",
                        ],
                      }),
                      Ul.length === 0
                        ? i
                          ? N("p", {
                              className: "text-white/40 text-xs font-bold",
                              children:
                                "Nenhum outro treinador no servidor no momento.",
                            })
                          : N("p", {
                              className:
                                "text-white/40 text-xs font-bold animate-pulse",
                              children: "Procurando treinadores…",
                            })
                        : N("ul", {
                            className: "space-y-1.5 max-h-40 overflow-y-auto",
                            children: Ul.map((s) =>
                              O(
                                "li",
                                {
                                  className:
                                    "flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2",
                                  children: [
                                    N("span", {
                                      className: `w-2 h-2 rounded-full ${s.inPlaza ? "bg-emerald-400" : "bg-white/30"}`,
                                    }),
                                    N("span", {
                                      className:
                                        "text-white font-extrabold text-sm truncate",
                                      children: s.name,
                                    }),
                                    O("span", {
                                      className:
                                        "text-white/45 text-[11px] font-extrabold whitespace-nowrap",
                                      children: ["Nv ", s.highestPetLevel],
                                    }),
                                    O("button", {
                                      onClick: () => {
                                        tu(s.id, s.name);
                                      },
                                      disabled: !!B || !!D,
                                      className:
                                        "ml-auto bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-amber-950 font-black text-xs px-3 py-1.5 rounded-xl border-b-2 border-amber-600 active:scale-95 transition flex items-center gap-1",
                                      children: [
                                        N(Ir, { size: 13 }),
                                        " Desafiar",
                                      ],
                                    }),
                                  ],
                                },
                                s.id,
                              ),
                            ),
                          }),
                      P &&
                        N("p", {
                          className: "text-amber-200/90 text-xs font-bold mt-2",
                          children: P,
                        }),
                      B &&
                        O("p", {
                          className: "text-white/50 text-[11px] font-bold mt-1",
                          children: [
                            "Aguardando ",
                            B.targetName,
                            "… (expira em 30s)",
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
            N("p", {
              className:
                "text-center text-white/40 text-[11px] landscape:text-[10px] font-bold pb-4 landscape:pb-1 px-4 shrink-0",
              children:
                "Ande com WASD/setas ou o joystick · sua posição aparece para os outros treinadores em tempo real",
            }),
            N("button", {
              onClick: () => L((s) => !s),
              "aria-label": q ? "Fechar chat" : "Abrir chat",
              className:
                "fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-2xl border-b-4 border-amber-600 active:scale-95 transition flex items-center justify-center",
              children: q ? N(Mu, { size: 24 }) : N(F0, { size: 24 }),
            }),
            q &&
              O("div", {
                className:
                  "fixed z-40 bottom-24 right-4 left-4 sm:left-auto sm:w-[340px] max-h-[46dvh] landscape:max-h-[70dvh] flex flex-col bg-slate-900/95 backdrop-blur border-2 border-amber-300/30 rounded-3xl shadow-2xl overflow-hidden",
                children: [
                  O("div", {
                    className:
                      "px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center gap-2 shrink-0",
                    children: [
                      N(F0, { size: 16, className: "text-amber-300" }),
                      N("h3", {
                        className: "text-white font-black text-sm",
                        children: "CHAT DO SERVIDOR",
                      }),
                    ],
                  }),
                  N("div", {
                    ref: Gu,
                    className:
                      "flex-1 min-h-[140px] overflow-y-auto px-3 py-2 space-y-2",
                    children:
                      Y.length === 0
                        ? d
                          ? O("p", {
                              className:
                                "text-white/40 text-xs font-bold text-center py-6",
                              children: [
                                "Nenhuma mensagem ainda.",
                                N("br", {}),
                                "Seja o primeiro a falar! \uD83D\uDCAC",
                              ],
                            })
                          : N("p", {
                              className:
                                "text-white/40 text-xs font-bold text-center py-6 animate-pulse",
                              children: "Carregando mensagens…",
                            })
                        : Y.map((s) => {
                            let ln = s.fromId === u,
                              Zn = new Date(s.createdAt).toLocaleTimeString(
                                "pt-BR",
                                { hour: "2-digit", minute: "2-digit" },
                              );
                            return O(
                              "div",
                              {
                                className: `max-w-[85%] rounded-2xl px-3 py-1.5 ${ln ? "ml-auto bg-amber-400/20 border border-amber-300/30" : "bg-white/8 border border-white/10"}`,
                                children: [
                                  O("p", {
                                    className: `text-[11px] font-black ${ln ? "text-amber-300" : "text-sky-300"}`,
                                    children: [
                                      ln ? "Você" : s.fromName || "Treinador",
                                      " ",
                                      N("span", {
                                        className:
                                          "text-white/35 font-bold ml-1",
                                        children: Zn,
                                      }),
                                    ],
                                  }),
                                  N("p", {
                                    className:
                                      "text-white/90 text-sm font-bold break-words leading-snug",
                                    children: s.text,
                                  }),
                                ],
                              },
                              s.id,
                            );
                          }),
                  }),
                  mn &&
                    N("p", {
                      className:
                        "text-amber-200/90 text-[11px] font-bold px-4 pb-1 shrink-0",
                      children: mn,
                    }),
                  O("div", {
                    className:
                      "p-2.5 border-t border-white/10 flex items-center gap-2 shrink-0",
                    children: [
                      N("input", {
                        value: z,
                        onChange: (s) => k(s.target.value.slice(0, 140)),
                        onKeyDown: (s) => {
                          if (s.key === "Enter") (s.preventDefault(), yr());
                        },
                        placeholder: "Digite sua mensagem…",
                        maxLength: 140,
                        className:
                          "flex-1 min-w-0 bg-white/10 border-2 border-white/15 rounded-2xl px-3 py-2 text-white text-sm font-bold placeholder:text-white/30 outline-none focus:border-amber-300",
                      }),
                      N("button", {
                        onClick: () => {
                          yr();
                        },
                        disabled: a || !z.trim(),
                        "aria-label": "Enviar mensagem",
                        className:
                          "shrink-0 w-10 h-10 rounded-2xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-amber-950 flex items-center justify-center border-b-2 border-amber-600 active:scale-95 transition",
                        children: N(nf, { size: 18 }),
                      }),
                    ],
                  }),
                ],
              }),
            D &&
              N("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm",
                children: O("div", {
                  className:
                    "ev-modal-panel w-full max-w-xs bg-slate-900 border-2 border-amber-300/40 rounded-3xl p-6 shadow-2xl text-center",
                  children: [
                    N(Ir, {
                      size: 28,
                      className: "text-amber-300 mx-auto mb-3",
                    }),
                    O("h2", {
                      className: "text-white font-black text-lg mb-1",
                      children: [D.from.name, " te desafiou!"],
                    }),
                    N("p", {
                      className: "text-white/60 text-sm font-bold mb-5",
                      children: "Batalha PvP em tempo real. Aceita o desafio?",
                    }),
                    O("div", {
                      className: "flex gap-2",
                      children: [
                        N("button", {
                          onClick: () => {
                            Sn();
                          },
                          className:
                            "flex-1 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-sm px-4 py-3 rounded-2xl border-b-4 border-emerald-600 active:scale-95 active:border-b-0 transition",
                          children: "Aceitar",
                        }),
                        N("button", {
                          onClick: () => {
                            Vo();
                          },
                          className:
                            "flex-1 bg-white/10 hover:bg-white/20 text-white font-black text-sm px-4 py-3 rounded-2xl border-2 border-white/25 active:scale-95 transition",
                          children: "Recusar",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var iu = Du(Pu(), 1);
      function ze() {
        try {
          let l = D8(1)?.party;
          if (l && l.length > 0)
            return l.slice(0, 3).map((o) => {
              let f = _n(o.sp),
                $ = zn(o.sp, o.level);
              return {
                uid: o.uid,
                sp: o.sp,
                name: f?.name ?? o.sp,
                level: o.level,
                hp: Math.max(0, Math.min(o.hp ?? $.maxHp, $.maxHp)),
                maxHp: $.maxHp,
                moves: (f?.moves ?? [])
                  .slice(0, 4)
                  .map((_) => ({
                    name: _.name,
                    type: _.type,
                    power: _.power,
                    acc: _.acc,
                  })),
                types: f?.types ?? [],
                atk: $.atk,
                def: $.def,
                vel: $.vel,
              };
            });
        } catch {}
        let n = _n("embercub"),
          u = zn("embercub", 5);
        return [
          {
            uid: 1,
            sp: "embercub",
            name: n.name,
            level: 5,
            hp: u.maxHp,
            maxHp: u.maxHp,
            moves: n.moves
              .slice(0, 4)
              .map((r) => ({
                name: r.name,
                type: r.type,
                power: r.power,
                acc: r.acc,
              })),
            types: n.types,
            atk: u.atk,
            def: u.def,
            vel: u.vel,
          },
        ];
      }
      function V_({ hp: n, max: u }) {
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
      function Z9({
        dbUrl: n,
        serverId: u,
        battleId: r,
        myId: l,
        myName: o,
        onExit: f,
      }) {
        let [$, _] = iu.useState(null),
          [v, Z] = iu.useState(null),
          [J, e] = iu.useState(2),
          [Q, M] = iu.useState(!1),
          [visualHp, setVisualHp] = iu.useState(null),
          [pvpBusy, setPvpBusy] = iu.useState(!1),
          [pvpScene, setPvpScene] = iu.useState(null),
          [pvpMotion, setPvpMotion] = iu.useState(null),
          pvpAreaRef = iu.useRef(null),
          opponentPetRef = iu.useRef(null),
          playerPetRef = iu.useRef(null),
          visualHpRef = iu.useRef(null),
          latestBattleRef = iu.useRef(null),
          seenBattleEventsRef = iu.useRef(new Set()),
          pendingBattleEventsRef = iu.useRef([]),
          animationQueueActiveRef = iu.useRef(!1),
          pvpRunRef = iu.useRef(1),
          pvpAliveRef = iu.useRef(!0),
          H = iu.useRef(!1),
          K = iu.useRef(!1),
          V = iu.useRef(l);
        V.current = l;
        let C = iu.useMemo(() => {
            if (!$) return "";
            return $.players.A.id === l ? $.players.B.id : $.players.A.id;
          }, [$, l]),
          D = iu.useMemo(() => {
            if (!$) return "Oponente";
            return $.players.A.id === l ? $.players.B.name : $.players.A.name;
          }, [$, l]),
          W = $?.host === l,
          B = $?.state,
          A = B?.teams[l],
          P = C ? B?.teams[C] : void 0,
          U = B ? B.active[l] : 0,
          E = C && B ? B.active[C] : 0,
          q = A?.[U],
          L = P?.[E ?? 0],
          Y = !!q && (visualHp?.[`${l}:${U}`] ?? q.hp) <= 0 && B?.status === "ongoing",
          G = B?.turn ?? 1;
        latestBattleRef.current = B;
        function makeVisibleHp(state) {
          let result = {};
          for (let [teamId, team] of Object.entries(state?.teams || {}))
            team.forEach((pet, index) => {
              result[`${teamId}:${index}`] = pet.hp;
            });
          return result;
        }
        function shownHp(teamId, index, pet) {
          return visualHp?.[`${teamId}:${index}`] ?? pet?.hp ?? 0;
        }
        function pvpMotionStyle(side) {
          let motion = pvpMotion?.side === side ? pvpMotion : null;
          return {
            transform: motion
              ? `translate3d(${motion.x}px,${motion.y}px,0) scale(1.08)`
              : "translate3d(0,0,0) scale(1)",
            transition: "transform 260ms cubic-bezier(.2,.72,.16,1)",
            position: "relative",
            zIndex: motion ? 5 : 1,
          };
        }
        const hasPendingBattleEvents = (B?.fxEvents || []).some(
          (event) => event?.id && !seenBattleEventsRef.current.has(event.id),
        );
        iu.useEffect(() => {
          if (B?.status !== "ongoing") return;
          window.EV_MUSIC?.enterPvP?.();
          return () => window.EV_MUSIC?.leaveBattle?.();
        }, [B?.status]);
        (iu.useEffect(() => {
          if (H.current) return;
          ((H.current = !0), o_(n, u, r, l, ze()));
        }, [n, u, r, l]),
          iu.useEffect(() => {
            $9(n, u, r, l);
            let k = window.setInterval(() => void $9(n, u, r, V.current), 5000);
            return () => window.clearInterval(k);
          }, [n, u, r, l]),
          iu.useEffect(() => {
            let k = !0,
              a = async () => {
                let mn = await f9(n, u, r);
                if (k && mn) _(mn);
              };
            a();
            let un = window.setInterval(a, 2000);
            return () => {
              ((k = !1), window.clearInterval(un));
            };
          }, [n, u, r]),
          iu.useEffect(() => {
            if (!$ || !W || $.state || !$.teams) return;
            let k = Object.keys($.teams);
            if (k.length < 2) return;
            let a = $.teams,
              un = {};
            k.forEach((en) => {
              un[en] = 0;
            });
            let mn = {
              turn: 1,
              active: un,
              teams: a,
              log: [
                `A batalha PvP começou! ${$.players.A.name} vs ${$.players.B.name}`,
              ],
              fxEvents: [],
              status: "ongoing",
            };
            k0(n, u, r, { state: mn, status: "ongoing" });
          }, [$, W, n, u, r]),
          iu.useEffect(() => {
            if (!$ || B?.status === "finished") return;
            let k = C ? $.presence?.[C]?.ts : 0;
            if (!k || !B) return;
            if (Date.now() - k > 15000) {
              let a = {
                ...B,
                status: "finished",
                winner: l,
                log: [...B.log, `${D} desconectou. Vitória por W.O.!`],
              };
              k0(n, u, r, { state: a, status: "finished" });
            }
          }, [$, B, C, D, l, n, u, r]),
          iu.useEffect(() => {
            if (!$ || !W || !B || B.status !== "ongoing" || K.current) return;
            let k = $.turns?.[String(B.turn)];
            if (!k) return;
            let a = Object.keys(B.teams);
            if (a.length < 2 || !k[a[0]] || !k[a[1]]) return;
            ((K.current = !0),
              (async () => {
                try {
                  let un = d(B, k);
                  await k0(n, u, r, { state: un, status: un.status });
                } finally {
                  ((K.current = !1), Z(null));
                }
              })());
          }, [$, W, B, n, u, r]),
          iu.useEffect(() => {
            (Z(null), M(!1));
          }, [G]));
        iu.useEffect(() => {
          if (!B?.teams) return;
          if (!visualHpRef.current) {
            let initial = makeVisibleHp(B);
            visualHpRef.current = initial;
            setVisualHp(initial);
            (B.fxEvents || []).forEach((event) => {
              if (event?.id) seenBattleEventsRef.current.add(event.id);
            });
            return;
          }
          let pending = (B.fxEvents || []).filter(
            (event) => event?.id && !seenBattleEventsRef.current.has(event.id),
          );
          if (!pending.length) {
            if (!animationQueueActiveRef.current) {
              let synced = makeVisibleHp(B);
              visualHpRef.current = synced;
              setVisualHp(synced);
            }
            return;
          }
          pending.forEach((event) => {
            seenBattleEventsRef.current.add(event.id);
            pendingBattleEventsRef.current.push(event);
          });
          if (!animationQueueActiveRef.current) void runPvpAnimationQueue();
        }, [B]);
        iu.useEffect(() => () => {
          pvpAliveRef.current = !1;
        }, []);
        async function playPvpEvent(event) {
          const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
          const engine = window.EV_ATTACK_CHOREOGRAPHY;
          const isPlayer = event.attackerId === l;
          const targetRef = event.targetId === l ? playerPetRef : opponentPetRef;
          const sourceRef = isPlayer ? playerPetRef : opponentPetRef;
          const area = pvpAreaRef.current?.getBoundingClientRect();
          const center = (ref, fallback) => {
            const rect = ref.current?.getBoundingClientRect();
            if (!rect || !area || !area.width || !area.height) return fallback;
            return {
              x: (rect.left + rect.width / 2 - area.left) / area.width,
              y: (rect.top + rect.height / 2 - area.top) / area.height,
            };
          };
          const from = center(sourceRef, isPlayer ? { x: 0.16, y: 0.72 } : { x: 0.16, y: 0.24 });
          const to = center(targetRef, isPlayer ? { x: 0.82, y: 0.28 } : { x: 0.82, y: 0.70 });
          const species = window.nu?.[event.attackerSp] || {
            id: event.attackerSp || "unknown-pet",
            name: event.attackerName || "Pet",
            types: [event.type].filter(Boolean),
            stage: 0,
          };
          const catalogMove = Array.isArray(species.moves)
            ? species.moves.find((move) => move.name === event.moveName)
            : null;
          const move = {
            ...(catalogMove || {}),
            name: event.moveName || "Golpe",
            type: event.type || catalogMove?.type || species.types?.[0],
            power: event.power ?? catalogMove?.power ?? 0,
            anim: catalogMove?.anim,
          };
          const commitHp = () => {
            if (!event.hit) return;
            const key = `${event.targetId}:${event.targetIndex}`;
            const next = {
              ...(visualHpRef.current || {}),
              [key]: event.targetHpAfter,
            };
            visualHpRef.current = next;
            setVisualHp(next);
          };
          if (!engine?.plan || !area) {
            await wait(650);
            commitHp();
            await wait(260);
            return;
          }
          const scene = engine.plan({
            attacker: species,
            move,
            attackerIsPlayer: isPlayer,
            x0: from.x,
            y0: from.y,
            x1: to.x,
            y1: to.y,
            width: area.width,
            height: area.height,
            runId: `pvp-${pvpRunRef.current++}`,
            hit: event.hit,
            damage: event.damage,
            crit: event.crit,
            showDamage: true,
          });
          setPvpScene(scene);
          if (scene.family === "rush")
            setPvpMotion({
              side: isPlayer ? "player" : "opponent",
              x: (to.x - from.x) * area.width * 0.72,
              y: (to.y - from.y) * area.height * 0.72,
            });
          await wait(scene.impactAtMs);
          if (!pvpAliveRef.current) return;
          commitHp();
          if (scene.family === "rush") {
            await wait(160);
            setPvpMotion(null);
          }
          await wait(Math.max(0, scene.durationMs - scene.impactAtMs));
          setPvpScene(null);
        }
        async function runPvpAnimationQueue() {
          if (animationQueueActiveRef.current) return;
          animationQueueActiveRef.current = !0;
          setPvpBusy(!0);
          try {
            while (pendingBattleEventsRef.current.length && pvpAliveRef.current) {
              let event = pendingBattleEventsRef.current.shift();
              await playPvpEvent(event);
            }
          } catch (error) {
            console.warn("Falha ao apresentar animação PvP:", error);
          } finally {
            setPvpScene(null);
            setPvpMotion(null);
            let latest = latestBattleRef.current;
            if (latest?.teams) {
              let synced = makeVisibleHp(latest);
              visualHpRef.current = synced;
              setVisualHp(synced);
            }
            animationQueueActiveRef.current = !1;
            setPvpBusy(!1);
          }
        }
        function d(k, a) {
          let un = JSON.parse(JSON.stringify(k.teams)),
            mn = { ...k.active },
            en = [...k.log],
            fxEvents = [...(k.fxEvents || [])],
            eventSequence = 0,
            sn = Object.keys(un),
            [Gu, Mn] = sn,
            yr = [...sn].sort((Pn, uu) => {
              let Nu = un[Pn][mn[Pn]];
              return (un[uu][mn[uu]]?.vel ?? 0) - (Nu?.vel ?? 0);
            }),
            Rn = (Pn) => un[Pn].some((uu) => uu.hp > 0);
          for (let Pn of yr) {
            let uu = Pn === Gu ? Mn : Gu,
              Nu = a[Pn];
            if (!Nu) continue;
            let wn = un[Pn][mn[Pn]];
            if (!wn || wn.hp <= 0) continue;
            if (Nu.kind === "switch") {
              let s = un[Pn][Nu.toIndex];
              if (s && s.hp > 0 && Nu.toIndex !== mn[Pn])
                ((mn[Pn] = Nu.toIndex),
                  en.push(`${h(Pn, k)} trocou para ${s.name}!`));
              continue;
            }
            if (Nu.kind === "item") {
              ((wn.hp = Math.min(wn.maxHp, wn.hp + 50)),
                en.push(`${h(Pn, k)} usou Poção em ${wn.name} (+50 HP).`));
              continue;
            }
            let tu = un[uu][mn[uu]];
            if (!tu || tu.hp <= 0) continue;
            let Sn = wn.moves[Nu.moveIdx] ?? wn.moves[0];
            if (!Sn) continue;
            if (!(Math.random() * 100 < Sn.acc)) {
              let missLine = `${wn.name} usou ${Sn.name}… errou!`;
              en.push(missLine);
              fxEvents.push({
                id: `${k.turn}:${eventSequence++}:${Pn}`,
                turn: k.turn,
                attackerId: Pn,
                targetId: uu,
                attackerIndex: mn[Pn],
                targetIndex: mn[uu],
                attackerSp: wn.sp,
                attackerName: wn.name,
                moveName: Sn.name,
                type: Sn.type,
                power: Sn.power,
                hit: !1,
                damage: 0,
                crit: !1,
                targetHpAfter: tu.hp,
                logLines: [missLine],
              });
              continue;
            }
            let Lu = wn.types.includes(Sn.type),
              fl = Math.random() < 0.1,
              Xu = _8(wn.atk, tu.def, Sn.power, Sn.type, tu.types, Lu, !1, fl);
            tu.hp = Math.max(0, tu.hp - Xu);
            let Ul = P0(Sn.type, tu.types);
            let attackLine = `${wn.name} usou ${Sn.name} em ${tu.name} (-${Xu}).${fl ? " CRÍTICO!" : ""} ${Z8(Ul)}`.trim(),
              logLines = [attackLine];
            en.push(attackLine);
            if (tu.hp <= 0) {
              let faintLine = `${tu.name} desmaiou!`;
              en.push(faintLine);
              logLines.push(faintLine);
            }
            fxEvents.push({
              id: `${k.turn}:${eventSequence++}:${Pn}`,
              turn: k.turn,
              attackerId: Pn,
              targetId: uu,
              attackerIndex: mn[Pn],
              targetIndex: mn[uu],
              attackerSp: wn.sp,
              attackerName: wn.name,
              moveName: Sn.name,
              type: Sn.type,
              power: Sn.power,
              hit: !0,
              damage: Xu,
              crit: fl,
              targetHpAfter: tu.hp,
              logLines,
            });
          }
          let Er,
            Gn = "ongoing";
          for (let Pn of sn)
            if (!Rn(Pn)) {
              ((Er = Pn === Gu ? Mn : Gu), (Gn = "finished"));
              break;
            }
          if (Gn === "finished")
            en.push(
              `Fim de batalha! Vencedor: ${Er === sn[0] ? h(sn[0], k) : h(sn[1], k)}`,
            );
          return {
            turn: k.turn + 1,
            active: mn,
            teams: un,
            log: en.slice(-30),
            fxEvents: fxEvents.slice(-32),
            status: Gn,
            winner: Er,
          };
        }
        function h(k, a) {
          if (!$) return k === l ? o : "Oponente";
          return $.players.A.id === k ? $.players.A.name : $.players.B.name;
        }
        let i = (k) => {
            if (!B || B.status !== "ongoing" || v || animationQueueActiveRef.current) return;
            if (Y && k.kind !== "switch") return;
            if ((Z(k), f_(n, u, r, B.turn, l, k), k.kind === "item"))
              e((a) => Math.max(0, a - 1));
          },
          b = async () => {
            try {
              let k = await f9(n, u, r),
                a = { ...(k?.left ?? {}), [l]: !0 };
              if (C && k?.left?.[C]) await l_(n, u, r);
              else await k0(n, u, r, { left: a });
            } catch {}
            f();
          };
        if (!$)
          return N("div", {
            className:
              "min-h-dvh flex items-center justify-center bg-slate-950 px-6",
            style: { paddingTop: "var(--safe-area-inset-top)" },
            children: N("p", {
              className: "text-white/70 font-extrabold animate-pulse",
              children: "Conectando à batalha…",
            }),
          });
        if (!B) {
          let k = $.teams ? Object.keys($.teams).length : 0;
          return O("div", {
            className:
              "min-h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 px-6 text-center",
            style: { paddingTop: "var(--safe-area-inset-top)" },
            children: [
              N(Ir, {
                size: 40,
                className: "text-amber-300 mb-4 animate-pulse",
              }),
              N("h2", {
                className: "text-white font-black text-2xl mb-2",
                children: "Batalha PvP",
              }),
              O("p", {
                className: "text-white/70 font-bold animate-pulse",
                children: ["Aguardando oponente… (", k, "/2 times prontos)"],
              }),
              N("button", {
                onClick: b,
                className:
                  "mt-6 text-white/50 hover:text-white text-sm font-extrabold underline",
                children: "desistir",
              }),
            ],
          });
        }
        if (B.status === "finished" && !pvpBusy && !hasPendingBattleEvents) {
          let k = B.winner === l;
          return O("div", {
            className:
              "min-h-dvh flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 px-6 text-center",
            style: { paddingTop: "var(--safe-area-inset-top)" },
            children: [
              N("div", {
                className: "text-6xl mb-4",
                children: k ? "\uD83C\uDFC6" : "\uD83D\uDCAB",
              }),
              N("h2", {
                className: `font-black text-3xl mb-2 ${k ? "text-amber-300" : "text-white/80"}`,
                children: k ? "VITÓRIA!" : "DERROTA",
              }),
              N("p", {
                className: "text-white/60 font-bold text-sm mb-6 max-w-xs",
                children: k
                  ? `Você venceu ${D} numa batalha PvP!`
                  : `${D} venceu desta vez. Treine e desafie de novo!`,
              }),
              O("button", {
                onClick: b,
                className:
                  "bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-lg px-8 py-4 rounded-3xl shadow-2xl border-b-8 border-emerald-600 active:scale-95 active:border-b-0 transition flex items-center gap-2",
                children: [N(Go, { size: 20 }), " VOLTAR À PRAÇA"],
              }),
            ],
          });
        }
        let z = !!$.turns?.[String(G)]?.[l] && !$.turns?.[String(G)]?.[C];
        return O("div", {
          className:
            "min-h-dvh landscape:h-dvh flex flex-col bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950",
          style: { paddingTop: "var(--safe-area-inset-top)" },
          children: [
            O("div", {
              className:
                "flex items-center justify-between px-4 py-3 landscape:py-2 shrink-0",
              children: [
                O("span", {
                  className:
                    "text-white font-black text-sm flex items-center gap-2",
                  children: [
                    N(Ir, { size: 16, className: "text-amber-300" }),
                    " PvP · Turno ",
                    G,
                  ],
                }),
                N("span", {
                  className: "text-white/50 text-xs font-extrabold",
                  children: W ? "você é o host" : "sincronizado",
                }),
              ],
            }),
            O("div", {
              className:
                "flex-1 min-h-0 flex flex-col landscape:flex-row landscape:gap-3",
              children: [
                O("div", {
                  className:
                    "landscape:flex-1 landscape:min-w-0 landscape:min-h-0 landscape:overflow-y-auto landscape:pl-4 landscape:pr-1 landscape:pb-3",
                  ref: pvpAreaRef,
                  style: { position: "relative" },
                  children: [
                    N("div", {
                      className: "px-4 landscape:px-0 mb-1",
                      children: O("div", {
                        className:
                          "bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3",
                        children: [
                          L && O("div", {
                            ref: opponentPetRef,
                            className: "shrink-0",
                            style: pvpMotionStyle("opponent"),
                            children: N(In, { sp: L.sp, size: 64, fainted: shownHp(C, E, L) <= 0 }),
                          }),
                          O("div", {
                            className: "flex-1",
                            children: [
                              O("div", {
                                className:
                                  "flex justify-between items-baseline",
                                children: [
                                  O("span", {
                                    className:
                                      "text-white font-extrabold text-sm",
                                    children: [
                                      L?.name ?? "…",
                                      " ",
                                      O("span", {
                                        className: "text-white/40 text-xs",
                                        children: ["Nv ", L?.level],
                                      }),
                                    ],
                                  }),
                                  N("span", {
                                    className:
                                      "text-white/50 text-[11px] font-extrabold",
                                    children: D,
                                  }),
                                ],
                              }),
                              L && N(V_, { hp: shownHp(C, E, L), max: L.maxHp }),
                              N("div", {
                                className:
                                  "text-white/50 text-[11px] font-bold mt-0.5",
                                children: L ? `${shownHp(C, E, L)}/${L.maxHp} HP` : "",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    N("div", {
                      className: "px-4 landscape:px-0 mb-1",
                      children: O("div", {
                        className:
                          "bg-white/5 border border-emerald-300/30 rounded-2xl p-3 flex items-center gap-3",
                        children: [
                          q && O("div", {
                            ref: playerPetRef,
                            className: "shrink-0",
                            style: pvpMotionStyle("player"),
                            children: N(In, { sp: q.sp, size: 72, fainted: shownHp(l, U, q) <= 0 }),
                          }),
                          O("div", {
                            className: "flex-1",
                            children: [
                              O("div", {
                                className:
                                  "flex justify-between items-baseline",
                                children: [
                                  O("span", {
                                    className:
                                      "text-white font-extrabold text-sm",
                                    children: [
                                      q?.name ?? "…",
                                      " ",
                                      O("span", {
                                        className: "text-white/40 text-xs",
                                        children: ["Nv ", q?.level],
                                      }),
                                    ],
                                  }),
                                  N("span", {
                                    className:
                                      "text-emerald-300 text-[11px] font-extrabold",
                                    children: "você",
                                  }),
                                ],
                              }),
                              q && N(V_, { hp: shownHp(l, U, q), max: q.maxHp }),
                              N("div", {
                                className:
                                  "text-white/50 text-[11px] font-bold mt-0.5",
                                children: q ? `${shownHp(l, U, q)}/${q.maxHp} HP` : "",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    N("div", {
                      className:
                        "mx-4 landscape:mx-0 mb-2 bg-black/40 border border-white/10 rounded-2xl p-3 h-28 landscape:h-24 overflow-y-auto",
                      children: B.log
                        .slice(-6)
                        .map((k, a) =>
                          O(
                            "p",
                            {
                              className:
                                "text-white/75 text-xs font-bold leading-relaxed",
                              children: ["• ", k],
                            },
                            a,
                          ),
                        ),
                    }),
                    pvpScene && window.EV_ATTACK_CHOREOGRAPHY?.View &&
                      N(
                        window.EV_ATTACK_CHOREOGRAPHY.View,
                        { scene: pvpScene },
                        `pvp-vfx-${pvpScene.runId}`,
                      ),
                  ],
                }),
                O("div", {
                  className:
                    "px-4 pb-6 mt-auto landscape:mt-0 landscape:px-0 landscape:pr-4 landscape:pb-3 landscape:w-72 landscape:shrink-0 landscape:min-h-0 landscape:overflow-y-auto",
                  children: [
                    pvpBusy
                      ? N("p", {
                          className:
                            "text-center text-amber-300 font-extrabold animate-pulse py-4",
                          children: "O golpe está acontecendo…",
                        })
                      : Y
                        ? O("div", {
                          className:
                            "bg-red-500/15 border border-red-300/40 rounded-2xl p-3",
                          children: [
                            N("p", {
                              className:
                                "text-red-200 font-extrabold text-sm mb-2",
                              children: "Seu Pat desmaiou! Escolha o próximo:",
                            }),
                            N("div", {
                              className: "grid grid-cols-3 gap-2",
                              children: A.map((k, a) =>
                                O(
                                  "button",
                                  {
                                    disabled: shownHp(l, a, k) <= 0 || a === U,
                                    onClick: () =>
                                      i({ kind: "switch", toIndex: a }),
                                    className:
                                      "bg-white/10 disabled:opacity-30 rounded-xl p-2 text-white text-xs font-extrabold border border-white/15 active:scale-95",
                                    children: [
                                      k.name,
                                      N("br", {}),
                                      O("span", {
                                        className: "text-white/50",
                                        children: [shownHp(l, a, k), "/", k.maxHp],
                                      }),
                                    ],
                                  },
                                  k.uid,
                                ),
                              ),
                            }),
                          ],
                        })
                      : v
                        ? N("p", {
                            className:
                              "text-center text-amber-300 font-extrabold animate-pulse",
                            children: z
                              ? "Aguardando oponente…"
                              : "Turno enviado! Resolvendo…",
                          })
                        : N(gl, {
                            children: !Q
                              ? O(gl, {
                                  children: [
                                    N("div", {
                                      className: "grid grid-cols-2 gap-2 mb-2",
                                      children: q?.moves.map((k, a) =>
                                        O(
                                          "button",
                                          {
                                            onClick: () =>
                                              i({ kind: "attack", moveIdx: a }),
                                            className:
                                              "bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-sm px-3 py-3 rounded-2xl border-b-4 border-amber-600 active:scale-95 active:border-b-0 transition text-left",
                                            children: [
                                              k.name,
                                              O("span", {
                                                className:
                                                  "block text-[10px] font-extrabold opacity-70",
                                                children: [
                                                  k.type,
                                                  " · ",
                                                  k.power,
                                                ],
                                              }),
                                            ],
                                          },
                                          a,
                                        ),
                                      ),
                                    }),
                                    O("div", {
                                      className: "flex gap-2",
                                      children: [
                                        O("button", {
                                          onClick: () => M(!0),
                                          className:
                                            "flex-1 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-3 py-2.5 rounded-2xl border-2 border-white/20 active:scale-95 flex items-center justify-center gap-1.5",
                                          children: [
                                            N(Pr, { size: 15 }),
                                            " Trocar",
                                          ],
                                        }),
                                        O("button", {
                                          disabled: J <= 0,
                                          onClick: () => i({ kind: "item" }),
                                          className:
                                            "flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white font-extrabold text-sm px-3 py-2.5 rounded-2xl border-2 border-white/20 active:scale-95 flex items-center justify-center gap-1.5",
                                          children: [
                                            N(Fl, { size: 15 }),
                                            " Poção (",
                                            J,
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : O("div", {
                                  className:
                                    "bg-white/5 border border-white/15 rounded-2xl p-3",
                                  children: [
                                    O("div", {
                                      className:
                                        "flex justify-between items-center mb-2",
                                      children: [
                                        N("p", {
                                          className:
                                            "text-white font-extrabold text-sm",
                                          children: "Trocar para:",
                                        }),
                                        N("button", {
                                          onClick: () => M(!1),
                                          className:
                                            "text-white/50 text-xs font-extrabold",
                                          children: "voltar",
                                        }),
                                      ],
                                    }),
                                    N("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: A.map((k, a) =>
                                        O(
                                          "button",
                                          {
                                            disabled: shownHp(l, a, k) <= 0 || a === U,
                                            onClick: () =>
                                              i({ kind: "switch", toIndex: a }),
                                            className:
                                              "bg-white/10 disabled:opacity-30 rounded-xl p-2 text-white text-xs font-extrabold border border-white/15 active:scale-95",
                                            children: [
                                              k.name,
                                              N("br", {}),
                                              O("span", {
                                                className: "text-white/50",
                                                children: [shownHp(l, a, k), "/", k.maxHp],
                                              }),
                                            ],
                                          },
                                          k.uid,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                          }),
                    O("button", {
                      onClick: () => {
                        (k0(n, u, r, { status: "finished" }), b());
                      },
                      className:
                        "mt-3 mx-auto flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-extrabold transition",
                      children: [N(io, { size: 13 }), " desistir da batalha"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ol = Du(Pu(), 1),
        ie = 35000,
        Ge = 20000,
        Te = 2500,
        ke = 200;
      function Y8(n, u) {
        return `${n.replace(/\/+$/, "")}/servers/${encodeURIComponent(u)}/players`;
      }
      async function m8(n) {
        try {
          let u = await n;
          if (!u.ok) return null;
          return await u.json().catch(() => null);
        } catch {
          return null;
        }
      }
      function Ie(n, u, r) {
        m8(
          fetch(`${Y8(n, u)}/${encodeURIComponent(r.id)}.json`, {
            method: "PUT",
            body: JSON.stringify(r),
          }),
        );
      }
      function N9(n, u, r, l) {
        m8(
          fetch(`${Y8(n, u)}/${encodeURIComponent(r)}.json`, {
            method: "PATCH",
            body: JSON.stringify(l),
          }),
        );
      }
      function Se(n, u, r) {
        m8(
          fetch(`${Y8(n, u)}/${encodeURIComponent(r)}.json`, {
            method: "DELETE",
          }),
        );
      }
      async function K9(n, u) {
        let r = await m8(fetch(`${Y8(n, u)}.json`));
        if (!r || typeof r !== "object") return [];
        let l = Date.now();
        return Object.values(r).filter(
          (o) =>
            o &&
            typeof o === "object" &&
            typeof o.id === "string" &&
            l - (o.timestamp || 0) < ie,
        );
      }
      function W_() {
        return `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
      }
      function U_(n, u, r) {
        let [l, o] = ol.useState([]),
          f = ol.useRef({ x: -1, y: -1, dir: -1, t: 0 }),
          $ = ol.useRef(r);
        $.current = r;
        let _ = ol.useCallback(() => {
          let J = !0;
          return (
            K9(n, u).then((e) => {
              if (J) o(e);
            }),
            () => {
              J = !1;
            }
          );
        }, [n, u]);
        ol.useEffect(() => {
          (Ie(n, u, {
            id: r.id,
            name: r.name,
            highestPetLevel: r.highestPetLevel,
            timestamp: Date.now(),
            x: 0,
            y: 0,
            dir: 2,
            inPlaza: !1,
          }),
            (f.current = { x: -1, y: -1, dir: -1, t: 0 }));
          let J = window.setInterval(() => {
              K9(n, u).then(o);
            }, Te),
            e = window.setInterval(() => {
              N9(n, u, r.id, { timestamp: Date.now() });
            }, Ge);
          return (
            K9(n, u).then(o),
            () => {
              (window.clearInterval(J),
                window.clearInterval(e),
                Se(n, u, r.id));
            }
          );
        }, [n, u]);
        let v = ol.useCallback(
            (J, e, Q) => {
              let M = Math.round(J),
                H = Math.round(e),
                K = f.current,
                V = Date.now();
              if (V - K.t < ke) return;
              if (M === K.x && H === K.y && Q === K.dir) return;
              ((f.current = { x: M, y: H, dir: Q, t: V }),
                N9(n, u, $.current.id, { x: M, y: H, dir: Q, timestamp: V }));
            },
            [n, u],
          ),
          Z = ol.useCallback(
            (J) => {
              N9(n, u, $.current.id, { inPlaza: J, timestamp: Date.now() });
            },
            [n, u],
          );
        return { players: l, pushPosition: v, setInPlaza: Z, refresh: _ };
      }
      function je({
        dbUrl: n,
        serverId: u,
        local: r,
        affColor: l,
        onLeave: o,
      }) {
        let f = U_(n, u, r),
          [$, _] = zl.useState(!1),
          [v, Z] = zl.useState(null);
        if (v)
          return N(Z9, {
            dbUrl: n,
            serverId: u,
            battleId: v,
            myId: r.id,
            myName: r.name,
            onExit: () => Z(null),
          });
        if ($)
          return N(_9, {
            api: f,
            playerId: r.id,
            affColor: l,
            onExit: () => _(!1),
            dbUrl: n,
            serverId: u,
            myName: r.name,
            onPvpStart: (e) => Z(e),
          });
        let J = f.players.filter((e) => e.id !== r.id);
        return N("div", {
          className:
            "min-h-dvh flex flex-col items-center bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 px-5 py-8",
          style: { paddingTop: "calc(var(--safe-area-inset-top) + 24px)" },
          children: O("div", {
            className: "w-full max-w-sm",
            children: [
              O("div", {
                className: "flex items-center justify-between mb-1",
                children: [
                  O("h2", {
                    className:
                      "text-white font-black text-2xl flex items-center gap-2",
                    children: [
                      N(el, { size: 24, className: "text-emerald-300" }),
                      " Servidor",
                    ],
                  }),
                  O("button", {
                    onClick: o,
                    className:
                      "text-white/50 hover:text-white text-xs font-extrabold flex items-center gap-1 transition",
                    children: [N(Go, { size: 14 }), " Sair do servidor"],
                  }),
                ],
              }),
              O("p", {
                className: "text-white/55 text-xs font-bold mb-5",
                children: [
                  "Código: ",
                  N("span", {
                    className: "text-emerald-300 font-black",
                    children: u,
                  }),
                  " · compartilhe com amigos para se encontrarem na praça",
                ],
              }),
              O("div", {
                className:
                  "bg-white/5 border-2 border-white/10 rounded-3xl p-4 mb-5",
                children: [
                  O("h3", {
                    className:
                      "text-white/70 font-extrabold text-xs tracking-widest mb-3 flex items-center gap-2",
                    children: [
                      N(Pr, { size: 15, className: "text-emerald-300" }),
                      " TREINADORES ONLINE (",
                      f.players.length,
                      ")",
                    ],
                  }),
                  f.players.length === 0
                    ? N("p", {
                        className: "text-white/40 text-sm font-bold",
                        children: "Conectando…",
                      })
                    : N("ul", {
                        className: "space-y-2 max-h-56 overflow-y-auto",
                        children: f.players.map((e) =>
                          O(
                            "li",
                            {
                              className:
                                "flex items-center gap-2.5 bg-white/5 rounded-2xl px-3 py-2",
                              children: [
                                N("span", {
                                  className: `w-2.5 h-2.5 rounded-full ${e.inPlaza ? "bg-emerald-400" : "bg-white/30"}`,
                                }),
                                O("span", {
                                  className:
                                    "text-white font-extrabold text-sm truncate",
                                  children: [
                                    e.name,
                                    " ",
                                    e.id === r.id &&
                                      N("span", {
                                        className: "text-white/40",
                                        children: "(você)",
                                      }),
                                  ],
                                }),
                                O("span", {
                                  className:
                                    "ml-auto text-white/45 text-[11px] font-extrabold whitespace-nowrap",
                                  children: [
                                    "Nv ",
                                    e.highestPetLevel,
                                    e.inPlaza ? " · na praça" : "",
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                  J.length === 0 &&
                    f.players.length > 0 &&
                    N("p", {
                      className: "text-white/35 text-[11px] font-bold mt-3",
                      children:
                        "Ninguém mais por aqui ainda — chame um amigo com o código do servidor!",
                    }),
                ],
              }),
              O("button", {
                onClick: () => _(!0),
                className:
                  "w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-lg px-8 py-4 rounded-3xl shadow-2xl border-b-8 border-emerald-600 active:scale-95 active:border-b-0 transition flex items-center justify-center gap-2",
                children: [N(oo, { size: 20 }), " ENTRAR NA PRAÇA"],
              }),
              N("p", {
                className:
                  "text-white/35 text-[11px] font-bold mt-3 text-center",
                children:
                  "Na praça você vê os outros treinadores andando em tempo real.",
              }),
            ],
          }),
        });
      }
      function J9({
        defaultName: n,
        highestPetLevel: u,
        affColor: r,
        onExit: l,
      }) {
        let o = T0(),
          f = String(o.config.databaseURL || ""),
          [$, _] = zl.useState("vale-1"),
          [v, Z] = zl.useState(n),
          [J, e] = zl.useState(null),
          [Q, M] = zl.useState(!1),
          H = zl.useRef(null);
        if (!H.current) H.current = W_();
        if (J) {
          let K = {
            id: H.current,
            name: v.trim() || "Treinador",
            highestPetLevel: u,
          };
          return N(je, {
            dbUrl: f,
            serverId: J,
            local: K,
            affColor: r,
            onLeave: () => {
              (e(null), l());
            },
          });
        }
        return O("div", {
          className:
            "min-h-dvh flex flex-col items-center bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 px-5 py-8 relative",
          style: { paddingTop: "calc(var(--safe-area-inset-top) + 24px)" },
          children: [
            O("div", {
              className: "w-full max-w-sm",
              children: [
                O("div", {
                  className: "flex items-center justify-between mb-1",
                  children: [
                    O("h2", {
                      className:
                        "text-white font-black text-2xl flex items-center gap-2",
                      children: [
                        N(el, { size: 24, className: "text-emerald-300" }),
                        " Mundo Online",
                      ],
                    }),
                    N("button", {
                      onClick: l,
                      className:
                        "text-white/50 hover:text-white text-xs font-extrabold transition",
                      children: "Voltar",
                    }),
                  ],
                }),
                N("p", {
                  className: "text-white/55 text-xs font-bold mb-5",
                  children: o.configured
                    ? "\uD83D\uDFE2 Firebase conectado — entre num servidor para ver outros treinadores."
                    : "⚠️ Configure o Firebase para jogar online.",
                }),
                N("label", {
                  className:
                    "text-indigo-200 text-xs font-extrabold mb-1 block",
                  children: "SEU NOME",
                }),
                N("input", {
                  value: v,
                  onChange: (K) => Z(K.target.value.slice(0, 14)),
                  placeholder: "Seu nome de treinador",
                  className:
                    "w-full bg-white/10 border-2 border-white/25 rounded-2xl px-4 py-3 text-white font-extrabold text-lg placeholder:text-white/30 outline-none focus:border-emerald-300 mb-4",
                }),
                N("label", {
                  className:
                    "text-indigo-200 text-xs font-extrabold mb-1 block",
                  children: "CÓDIGO DO SERVIDOR",
                }),
                N("input", {
                  value: $,
                  onChange: (K) =>
                    _(
                      K.target.value
                        .slice(0, 24)
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, ""),
                    ),
                  placeholder: "vale-1",
                  className:
                    "w-full bg-white/10 border-2 border-white/25 rounded-2xl px-4 py-3 text-white font-extrabold text-lg placeholder:text-white/30 outline-none focus:border-emerald-300 mb-5",
                }),
                O("button", {
                  onClick: () => e($.trim() || "vale-1"),
                  disabled: !f,
                  className:
                    "w-full bg-emerald-400 hover:bg-emerald-300 disabled:opacity-40 text-emerald-950 font-black text-lg px-8 py-4 rounded-3xl shadow-2xl border-b-8 border-emerald-600 active:scale-95 active:border-b-0 transition flex items-center justify-center gap-2",
                  children: [N(oo, { size: 20 }), " ENTRAR NO SERVIDOR"],
                }),
                O("button", {
                  onClick: () => M(!0),
                  className:
                    "mt-4 text-white/50 hover:text-white text-xs font-extrabold flex items-center gap-1 transition mx-auto",
                  children: [N(fo, { size: 13 }), " configurar Firebase"],
                }),
              ],
            }),
            Q && N(o9, { onClose: () => M(!1) }),
          ],
        });
      }
      var I0 = 1,
        ye = "462juvino";
      function he({
        saveExists: n,
        onNew: u,
        onContinue: r,
        onOnline: l,
        onDexUnlock: o,
      }) {
        let [f, $] = fu.useState(!1),
          [_, v] = fu.useState(""),
          [Z, J] = fu.useState(""),
          [e, Q] = fu.useState(0),
          M = fu.useRef(null),
          H = () => {
            let V = e + 1;
            if ((Q(V), M.current)) window.clearTimeout(M.current);
            if (((M.current = window.setTimeout(() => Q(0), 2500)), V >= 5))
              (Q(0), $(!0), Jr("info", "Modo Dex solicitado"));
          },
          K = () => {
            if (_ === ye) (J(""), v(""), $(!1), o());
            else (J("Senha incorreta"), Jr("error", "Senha incorreta"));
          };
        return O("div", {
          className:
            "min-h-dvh flex flex-col items-center justify-center px-6 py-12 text-center bg-[radial-gradient(ellipse_at_top,#14532d_0%,#0b1f16_62%,#07130d_100%)] relative",
          children: [
            N("p", {
              className:
                "text-[11px] font-black tracking-[0.35em] text-amber-300/90 mb-3",
              children: "UMA AVENTURA DE VÍNCULOS",
            }),
            O("h1", {
              onClick: H,
              className:
                "text-5xl sm:text-6xl font-black tracking-tight text-white select-none cursor-pointer active:scale-[0.98] transition",
              title: "Clique 5x para modo Dex",
              children: [
                "ECO ",
                N("span", {
                  className: "text-emerald-300",
                  children: "VÍNCULO",
                }),
              ],
            }),
            N("p", {
              className:
                "mt-3 text-emerald-100/80 font-semibold max-w-sm text-[15px]",
              children:
                "Capture pets, forje vínculos e explore um mundo vivo — da vila às cavernas elementais.",
            }),
            N("div", {
              className:
                "flex items-end justify-center gap-2 sm:gap-4 mt-8 mb-9 flex-wrap",
              children: qr.map((V) =>
                O(
                  "div",
                  {
                    className: "flex flex-col items-center gap-1",
                    children: [
                      N("div", {
                        className:
                          "rounded-2xl bg-white/10 border border-white/15 p-1.5",
                        children: N(In, { sp: J8[V], size: 52, bob: !0 }),
                      }),
                      N("span", {
                        className: "text-[10px] font-black",
                        style: { color: On[V].color },
                        children: V,
                      }),
                    ],
                  },
                  V,
                ),
              ),
            }),
            O("div", {
              className: "flex flex-col gap-3 w-full max-w-xs",
              children: [
                n &&
                  O("button", {
                    onClick: r,
                    className:
                      "flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black text-lg px-6 py-3.5 shadow-xl active:scale-95 transition",
                    children: [
                      N(oo, { size: 20, strokeWidth: 2.8 }),
                      " Continuar aventura",
                    ],
                  }),
                O("button", {
                  onClick: u,
                  className:
                    "flex items-center justify-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-lg px-6 py-3.5 shadow-xl active:scale-95 transition",
                  children: [
                    N(x1, { size: 20, strokeWidth: 2.8 }),
                    " ",
                    n ? "Novo jogo" : "Começar aventura",
                  ],
                }),
                O("button", {
                  onClick: l,
                  className:
                    "flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-6 py-3 active:scale-95 transition",
                  children: [N(el, { size: 18 }), " Mundo online"],
                }),
              ],
            }),
            N("div", {
              className: "w-full max-w-xs mt-6",
              children: !f
                ? O("button", {
                    onClick: () => $(!0),
                    className:
                      "text-[11px] font-bold tracking-widest text-white/25 hover:text-white/60 transition flex items-center justify-center gap-1.5 mx-auto py-2",
                    children: [N(p1, { size: 12 }), " \uD83D\uDD0D Modo Dex"],
                  })
                : O("div", {
                    className:
                      "rounded-2xl bg-black/35 border border-white/10 p-3.5 backdrop-blur",
                    children: [
                      O("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          N("span", {
                            className:
                              "text-[10px] font-black tracking-widest text-amber-200/80",
                            children: "MODO DEX • SENHA",
                          }),
                          N("button", {
                            onClick: () => {
                              ($(!1), J(""), v(""));
                            },
                            className:
                              "p-1 rounded-full hover:bg-white/10 text-white/50",
                            children: N(Mu, { size: 14 }),
                          }),
                        ],
                      }),
                      O("div", {
                        className: "flex gap-2",
                        children: [
                          N("input", {
                            type: "password",
                            value: _,
                            onChange: (V) => {
                              (v(V.target.value), J(""));
                            },
                            onKeyDown: (V) => {
                              if (V.key === "Enter") K();
                            },
                            placeholder: "Senha modo dex",
                            className:
                              "flex-1 rounded-xl bg-black/50 border border-white/15 px-3.5 py-2.5 text-sm font-bold text-white placeholder:text-white/30 outline-none focus:border-emerald-400",
                            autoFocus: !0,
                          }),
                          N("button", {
                            onClick: K,
                            className:
                              "rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black text-sm px-4 py-2.5 active:scale-95 transition",
                            children: "Entrar",
                          }),
                        ],
                      }),
                      Z &&
                        N("p", {
                          className: "mt-2 text-[11px] font-bold text-red-300",
                          children: Z,
                        }),
                      N("p", {
                        className:
                          "mt-2 text-[10px] text-white/30 font-semibold",
                        children: "Dica: clique 5x no título também libera",
                      }),
                    ],
                  }),
            }),
            O("p", {
              className:
                "mt-8 text-xs text-emerald-100/50 font-semibold flex items-center gap-1.5",
              children: [
                N(Nr, { size: 13 }),
                " Seus vínculos definem as evoluções dos pets",
              ],
            }),
          ],
        });
      }
      function de({ onBack: n }) {
        let u = fu.useMemo(() => {
            return Object.values(nu).sort((M, H) => {
              if (M.stage !== H.stage) return M.stage - H.stage;
              return M.name.localeCompare(H.name);
            });
          }, []),
          [r, l] = fu.useState(""),
          [o, f] = fu.useState("todos"),
          [$, _] = fu.useState("todos"),
          [v, Z] = fu.useState(null),
          [testModeOpen, setTestModeOpen] = fu.useState(false),
          [testMove, setTestMove] = fu.useState(null),
          [testRun, setTestRun] = fu.useState(0),
          J = fu.useMemo(() => {
            return u.filter((M) => {
              if (o !== "todos" && !M.types.includes(o)) return !1;
              if ($ !== "todos" && String(M.stage) !== $) return !1;
              if (r) {
                let H = r.toLowerCase();
                return (
                  M.name.toLowerCase().includes(H) ||
                  M.id.toLowerCase().includes(H) ||
                  M.dex.toLowerCase().includes(H)
                );
              }
              return !0;
            });
          }, [u, r, o, $]),
          e = (M) => {
            let H = Kr[M.id] || [];
            if (!H.length) return null;
            return H.map((K) => nu[K]).filter(Boolean);
          },
          Q = (M) => {
            for (let [H, K] of Object.entries(Kr))
              if (K.includes(M.id)) return nu[H] ?? null;
            return null;
          };
        const testScene = testMove && window.EV_ATTACK_CHOREOGRAPHY?.plan
          ? window.EV_ATTACK_CHOREOGRAPHY.plan({
              attacker: v,
              move: testMove,
              x0: 0.16,
              y0: 0.67,
              x1: 0.81,
              y1: 0.51,
              width: 340,
              height: 144,
              runId: testRun,
            })
          : null;
        return O("div", {
          className: "min-h-dvh w-full bg-[#0b1f16] text-white flex flex-col",
          children: [
            O("div", {
              className:
                "sticky top-0 z-20 bg-[#0b1f16]/90 backdrop-blur border-b border-white/10 px-4 sm:px-6 py-3 flex items-center gap-3",
              children: [
                O("button", {
                  onClick: n,
                  className:
                    "flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-2 text-sm font-bold active:scale-95 transition",
                  children: [N(A0, { size: 16 }), " Sair do Modo Dex"],
                }),
                O("div", {
                  className: "ml-2",
                  children: [
                    N("h2", {
                      className:
                        "font-black text-lg leading-none tracking-tight",
                      children: "DEX COMPLETO",
                    }),
                    O("p", {
                      className:
                        "text-[10px] font-bold tracking-widest text-emerald-200/60 mt-0.5",
                      children: [
                        u.length,
                        " PETS LIBERADOS • TODAS AS EVOLUÇÕES",
                      ],
                    }),
                  ],
                }),
                N("div", {
                  className: "ml-auto flex items-center gap-2",
                  children: N("span", {
                    className:
                      "hidden sm:inline text-[10px] font-black px-2 py-1 rounded-full bg-amber-400 text-amber-950",
                    children: "SENHA 462juvino ✓",
                  }),
                }),
              ],
            }),
            N("div", {
              className:
                "px-4 sm:px-6 py-4 border-b border-white/5 bg-black/20",
              children: O("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [
                  O("div", {
                    className: "flex-1 relative",
                    children: [
                      N(To, {
                        size: 14,
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 text-white/30",
                      }),
                      N("input", {
                        value: r,
                        onChange: (M) => l(M.target.value),
                        placeholder:
                          "Buscar pet: Rochodon, Magmarmor, Tidalvolt...",
                        className:
                          "w-full rounded-xl bg-black/40 border border-white/10 pl-9 pr-3 py-2.5 text-sm font-semibold text-white placeholder:text-white/30 outline-none focus:border-emerald-400",
                      }),
                    ],
                  }),
                  O("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                      O("div", {
                        className:
                          "flex items-center gap-1.5 rounded-xl bg-black/30 border border-white/10 px-2 py-1",
                        children: [
                          N(a1, { size: 12, className: "text-white/40" }),
                          O("select", {
                            value: o,
                            onChange: (M) => f(M.target.value),
                            className:
                              "bg-transparent text-xs font-bold text-white outline-none",
                            children: [
                              N("option", {
                                value: "todos",
                                className: "text-black",
                                children: "Todos tipos",
                              }),
                              qr.map((M) =>
                                N(
                                  "option",
                                  {
                                    value: M,
                                    className: "text-black",
                                    children: M,
                                  },
                                  M,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                      N("div", {
                        className:
                          "flex items-center gap-1 rounded-xl bg-black/30 border border-white/10 p-1",
                        children: ["todos", "0", "1", "2"].map((M) =>
                          N(
                            "button",
                            {
                              onClick: () => _(M),
                              className: `px-2.5 py-1 rounded-lg text-[11px] font-black tracking-wide transition ${$ === M ? "bg-white text-black" : "text-white/50 hover:text-white"}`,
                              children:
                                M === "todos"
                                  ? "TODOS"
                                  : M === "0"
                                    ? "Nv1"
                                    : M === "1"
                                      ? "Nv12"
                                      : "Nv24+",
                            },
                            M,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            O("div", {
              className: "flex-1 p-3 sm:p-5",
              children: [
                N("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4",
                  children: J.map((M) => {
                    let H = e(M),
                      K = Q(M);
                    return O(
                      "button",
                      {
                        onClick: () => {
                          Z(M);
                          setTestModeOpen(false);
                          setTestMove(null);
                        },
                        className:
                          "group text-left rounded-[18px] bg-white/[0.06] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] p-3 sm:p-4 transition flex flex-col",
                        children: [
                          O("div", {
                            className: "flex gap-3",
                            children: [
                              O("div", {
                                className:
                                  "shrink-0 w-[84px] h-[84px] rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center relative overflow-hidden",
                                children: [
                                  N(In, {
                                    sp: M.id,
                                    size: 76,
                                    bob: !0,
                                    battleMode: !0,
                                  }),
                                  M.rare &&
                                    N("span", {
                                      className:
                                        "absolute top-1 right-1 text-[8px] font-black bg-amber-400 text-amber-950 px-1 py-0.5 rounded-full",
                                      children: "RARO",
                                    }),
                                ],
                              }),
                              O("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  O("div", {
                                    className:
                                      "flex items-center gap-1.5 flex-wrap",
                                    children: [
                                      N("span", {
                                        className:
                                          "font-black text-[15px] leading-tight truncate",
                                        children: M.name,
                                      }),
                                      N("span", {
                                        className:
                                          "text-[9px] font-black px-1.5 py-0.5 rounded-full bg-white/10 border border-white/10",
                                        children:
                                          M.stage === 0
                                            ? "Nv1"
                                            : M.stage === 1
                                              ? `Nv${M.evoLevel ?? 12}`
                                              : `Nv${M.evoLevel ?? 24}`,
                                      }),
                                    ],
                                  }),
                                  O("div", {
                                    className: "flex gap-1 mt-1 flex-wrap",
                                    children: [
                                      M.types.map((V) =>
                                        N(
                                          "span",
                                          {
                                            className:
                                              "text-[9px] font-black px-1.5 py-0.5 rounded-full border",
                                            style: {
                                              background: `${On[V].color}22`,
                                              borderColor: `${On[V].color}55`,
                                              color: On[V].color,
                                            },
                                            children: V,
                                          },
                                          V,
                                        ),
                                      ),
                                      M.raridade &&
                                        N("span", {
                                          className:
                                            "text-[9px] font-black px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60",
                                          children: M.raridade.toUpperCase(),
                                        }),
                                    ],
                                  }),
                                  N("p", {
                                    className:
                                      "text-[11px] leading-[1.25] text-white/60 mt-1.5 line-clamp-3 font-medium",
                                    children: M.dex,
                                  }),
                                  N("p", {
                                    className:
                                      "text-[9px] font-mono text-white/25 mt-1 truncate",
                                    children: M.id,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          O("div", {
                            className: "mt-3 space-y-1",
                            children: [
                              K &&
                                O("div", {
                                  className:
                                    "text-[10px] font-bold text-white/40 flex items-center gap-1",
                                  children: [
                                    N("span", {
                                      className:
                                        "w-1 h-1 rounded-full bg-emerald-400",
                                    }),
                                    " Evolui de ",
                                    K.name,
                                    " ",
                                    K.stage === 0
                                      ? "Nv12"
                                      : `Nv${K.evoLevel ?? 12}`,
                                  ],
                                }),
                              H &&
                                H.length > 0 &&
                                O("div", {
                                  className:
                                    "rounded-xl bg-black/30 border border-white/5 px-2.5 py-2",
                                  children: [
                                    O("p", {
                                      className:
                                        "text-[9px] font-black tracking-widest text-emerald-200/60 mb-1",
                                      children: [
                                        "EVOLUÇÃO Nv",
                                        M.stage === 0
                                          ? "12 → Nv24"
                                          : "24 → Nv36",
                                      ],
                                    }),
                                    N("div", {
                                      className: "flex flex-col gap-1",
                                      children: H.map((V) => {
                                        let C =
                                          V.evoAffinity ||
                                          V.types[1] ||
                                          V.types[0];
                                        return O(
                                          "div",
                                          {
                                            className:
                                              "flex items-center gap-2 text-[11px] font-bold",
                                            children: [
                                              N("span", {
                                                className:
                                                  "w-1.5 h-1.5 rounded-full",
                                                style: {
                                                  background:
                                                    On[C]?.color || "#fff",
                                                },
                                              }),
                                              N("span", {
                                                className: "text-white/90",
                                                children: V.name,
                                              }),
                                              O("span", {
                                                className:
                                                  "text-white/35 text-[10px]",
                                                children: [
                                                  "• ",
                                                  V.types.join("/"),
                                                ],
                                              }),
                                              N(y1, {
                                                size: 10,
                                                className:
                                                  "text-white/20 ml-auto",
                                              }),
                                            ],
                                          },
                                          V.id,
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                              M.evo &&
                                M.evo.length > 0 &&
                                N("div", {
                                  className: "flex gap-1 flex-wrap",
                                  children: M.evo.map((V, C) =>
                                    O(
                                      "span",
                                      {
                                        className:
                                          "text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50",
                                        children: [V.affinity, " → ", V.name],
                                      },
                                      C,
                                    ),
                                  ),
                                }),
                            ],
                          }),
                          N("div", {
                            className: "mt-3 grid grid-cols-4 gap-1",
                            children: ["hp", "atk", "def", "vel"].map((V) =>
                              O(
                                "div",
                                {
                                  className:
                                    "rounded-lg bg-black/30 border border-white/5 px-1.5 py-1 text-center",
                                  children: [
                                    N("p", {
                                      className:
                                        "text-[8px] font-black tracking-widest text-white/30",
                                      children: V.toUpperCase(),
                                    }),
                                    N("p", {
                                      className:
                                        "text-[11px] font-black text-white/80",
                                      children: M.base[V],
                                    }),
                                  ],
                                },
                                V,
                              ),
                            ),
                          }),
                        ],
                      },
                      M.id,
                    );
                  }),
                }),
                J.length === 0 &&
                  N("div", {
                    className: "py-24 text-center",
                    children: N("p", {
                      className: "text-white/40 font-bold",
                      children: "Nenhum pet encontrado com esse filtro",
                    }),
                  }),
              ],
            }),
            v &&
              N("div", {
                className:
                  "fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70 backdrop-blur",
                children: O("div", {
                  className:
                    "w-full max-w-[560px] rounded-[24px] bg-[#101d16] border border-white/15 shadow-2xl overflow-hidden max-h-[90dvh] flex flex-col",
                  children: [
                    O("div", {
                      className: "p-5 sm:p-6 overflow-auto",
                      children: [
                        O("div", {
                          className: "flex gap-4",
                          children: [
                            N("div", {
                              className:
                                "w-[120px] h-[120px] rounded-[20px] bg-black/50 border border-white/10 flex items-center justify-center shrink-0",
                              children: N(In, {
                                sp: v.id,
                                size: 108,
                                bob: !0,
                                battleMode: !0,
                                tScale: 1.8,
                              }),
                            }),
                            O("div", {
                              className: "flex-1",
                              children: [
                                O("div", {
                                  className:
                                    "flex items-start justify-between gap-2",
                                  children: [
                                    O("div", {
                                      children: [
                                        N("h3", {
                                          className:
                                            "text-2xl font-black tracking-tight",
                                          children: v.name,
                                        }),
                                        N("p", {
                                          className:
                                            "text-[11px] font-mono text-white/30",
                                          children: v.id,
                                        }),
                                      ],
                                    }),
                                    N("button", {
                                      onClick: () => Z(null),
                                      className:
                                        "p-2 rounded-xl bg-white/10 hover:bg-white/15",
                                      children: N(Mu, { size: 16 }),
                                    }),
                                  ],
                                }),
                                O("div", {
                                  className: "flex gap-1.5 mt-2 flex-wrap",
                                  children: [
                                    v.types.map((M) =>
                                      N(
                                        "span",
                                        {
                                          className:
                                            "text-[11px] font-black px-2 py-1 rounded-full border",
                                          style: {
                                            background: `${On[M].color}22`,
                                            borderColor: `${On[M].color}55`,
                                            color: On[M].color,
                                          },
                                          children: M,
                                        },
                                        M,
                                      ),
                                    ),
                                    N("span", {
                                      className:
                                        "text-[10px] font-black px-2 py-1 rounded-full bg-white/10 border border-white/10",
                                      children:
                                        v.stage === 0
                                          ? "BASE Nv1"
                                          : v.stage === 1
                                            ? `EVO Nv${v.evoLevel ?? 12}`
                                            : `SUPREMA Nv${v.evoLevel ?? 24}`,
                                    }),
                                    v.rare &&
                                      N("span", {
                                        className:
                                          "text-[10px] font-black px-2 py-1 rounded-full bg-amber-400 text-amber-950",
                                        children: "RARO",
                                      }),
                                    v.raridade &&
                                      N("span", {
                                        className:
                                          "text-[10px] font-black px-2 py-1 rounded-full bg-white/5 border border-white/10",
                                        children: v.raridade,
                                      }),
                                  ],
                                }),
                                N("p", {
                                  className:
                                    "mt-3 text-[13px] leading-relaxed text-white/75 font-medium",
                                  children: v.dex,
                                }),
                              ],
                            }),
                          ],
                        }),
                        N("div", {
                          className: "mt-5 grid grid-cols-4 gap-2",
                          children: ["hp", "atk", "def", "vel"].map((M) =>
                            O(
                              "div",
                              {
                                className:
                                  "rounded-xl bg-black/40 border border-white/10 p-2.5 text-center",
                                children: [
                                  N("p", {
                                    className:
                                      "text-[10px] font-black tracking-widest text-white/40",
                                    children: M.toUpperCase(),
                                  }),
                                  N("p", {
                                    className: "text-lg font-black",
                                    children: v.base[M],
                                  }),
                                ],
                              },
                              M,
                            ),
                          ),
                        }),
                        O("div", {
                          className: "mt-5",
                          children: [
                            O("div", {
                              className: "flex items-center justify-between gap-2 mb-2",
                              children: [
                                N("p", {
                                  className:
                                    "text-[10px] font-black tracking-widest text-white/40",
                                  children: "GOLPES EXCLUSIVOS",
                                }),
                                N("button", {
                                  type: "button",
                                  onClick: () => {
                                    setTestModeOpen((open) => !open);
                                    setTestMove(null);
                                  },
                                  className:
                                    "rounded-xl bg-amber-400 text-amber-950 font-black text-[10px] px-3 py-2 active:scale-95 transition",
                                  children: testModeOpen
                                    ? "FECHAR ENSAIO"
                                    : "TESTAR GOLPES",
                                }),
                              ],
                            }),
                            !testModeOpen &&
                              N("div", {
                              className:
                                "grid grid-cols-1 sm:grid-cols-2 gap-2",
                              children: v.moves.map((M, H) =>
                                O(
                                  "div",
                                  {
                                    className:
                                      "rounded-xl bg-white/[0.05] border border-white/10 px-3 py-2 flex items-center justify-between",
                                    children: [
                                      O("div", {
                                        children: [
                                          N("p", {
                                            className: "text-[12px] font-black",
                                            children: M.name,
                                          }),
                                          O("p", {
                                            className: "text-[10px] font-bold",
                                            style: { color: On[M.type].color },
                                            children: [
                                              M.type,
                                              " • Power ",
                                              M.power,
                                              " • Acc ",
                                              M.acc,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      N("span", {
                                        className: "w-2 h-2 rounded-full",
                                        style: { background: On[M.type].color },
                                      }),
                                    ],
                                  },
                                  H,
                                ),
                              ),
                            }),
                            testModeOpen &&
                              O("div", {
                                className:
                                  "mt-3 rounded-xl bg-black/30 border border-white/10 p-3",
                                children: [
                                  O("div", {
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      N("p", {
                                        className:
                                          "text-[10px] font-black tracking-widest text-amber-200",
                                        children: "MODO DE ENSAIO",
                                      }),
                                      N("span", {
                                        className:
                                          "text-[9px] font-bold text-white/45",
                                        children: "SEM EFEITOS NO SAVE",
                                      }),
                                    ],
                                  }),
                                  N("p", {
                                    className:
                                      "mt-1 text-[11px] leading-relaxed text-white/60",
                                    children:
                                      "Escolha um golpe para ver seu efeito visual. Não inicia uma batalha, aplica dano, gasta usos nem altera o save.",
                                  }),
                                  O("div", {
                                    className:
                                      "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",
                                    children: v.moves.map((M, H) =>
                                      O(
                                        "button",
                                        {
                                          type: "button",
                                          "aria-label": `Testar o golpe ${M.name}`,
                                          onClick: () => {
                                            setTestMove(M);
                                            setTestRun((run) => run + 1);
                                          },
                                          className:
                                            "w-full rounded-xl border px-3 py-2 text-left transition",
                                          style:
                                            testMove === M
                                              ? {
                                                  borderColor:
                                                    On[M.type]?.color ||
                                                    "#fbbf24",
                                                  background: `${On[M.type]?.color || "#fbbf24"}33`,
                                                }
                                              : {
                                                  borderColor:
                                                    "rgba(255,255,255,.1)",
                                                  background:
                                                    "rgba(255,255,255,.04)",
                                                },
                                          children: [
                                            O("div", {
                                              className:
                                                "flex items-center justify-between gap-2",
                                              children: [
                                                N("span", {
                                                  className:
                                                    "font-extrabold text-[11px] text-white truncate",
                                                  children: M.name,
                                                }),
                                                N("span", {
                                                  className:
                                                    "shrink-0 text-[9px] font-black text-amber-100",
                                                  children: "▶ TESTAR",
                                                }),
                                              ],
                                            }),
                                            N("span", {
                                              className:
                                                "mt-1 block text-[9px] font-bold text-white/50",
                                              children: [
                                                M.type,
                                                " • Poder ",
                                                M.power,
                                                " • Precisão ",
                                                M.acc,
                                                "%",
                                              ],
                                            }),
                                          ],
                                        },
                                        `${v.id}-dex-test-${H}`,
                                      ),
                                    ),
                                  }),
                                  testMove &&
                                    O("div", {
                                      className:
                                        "relative mt-3 h-36 rounded-xl border border-white/10 overflow-hidden",
                                      key: `dex-preview-${testRun}`,
                                      style: {
                                        height: 144,
                                        background:
                                          "radial-gradient(ellipse at center, #1b3027, #07130d)",
                                      },
                                      children: [
                                        N("div", {
                                          className:
                                            "absolute left-0 right-0 top-1/2 h-px bg-white/10",
                                        }),
                                        O("div", {
                                          key: `dex-attacker-${testRun}`,
                                          className: `absolute bottom-0 left-2 flex flex-col items-center ev-dex-attacker ${testScene?.family === "rush" ? "ev-dex-rush" : ""}`,
                                          style: {
                                            zIndex: 2,
                                            "--ev-dex-lunge-x": `${Math.max(28, Math.min(175, testScene?.lungeX || 44))}px`,
                                          },
                                          children: [
                                            N(In, {
                                              sp: v.id,
                                              size: 64,
                                              bob: !0,
                                              battleMode: !0,
                                              tScale: 1.2,
                                            }),
                                            N("span", {
                                              className:
                                                "text-[8px] font-black text-white/70 truncate",
                                              style: { maxWidth: 80 },
                                              children: v.name,
                                            }),
                                          ],
                                        }),
                                        O("div", {
                                          className:
                                            "absolute flex flex-col items-center gap-1",
                                          style: {
                                            right: 14,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            zIndex: 2,
                                          },
                                          children: [
                                            O("div", {
                                              className:
                                                "relative flex items-center justify-center rounded-full",
                                              style: {
                                                width: 54,
                                                height: 54,
                                                color:
                                                  On[testMove.type]?.color ||
                                                  "#fbbf24",
                                                border: `2px solid ${On[testMove.type]?.color || "#fbbf24"}`,
                                                background: `${On[testMove.type]?.color || "#fbbf24"}22`,
                                                boxShadow: `0 0 18px ${On[testMove.type]?.color || "#fbbf24"}66`,
                                              },
                                              children: [
                                                N("span", {
                                                  className:
                                                    "text-3xl font-black",
                                                  children: "◎",
                                                }),
                                                N("div", {
                                                  className:
                                                    "absolute inset-2 rounded-full border border-dashed",
                                                  style: {
                                                    borderColor:
                                                      On[testMove.type]?.color ||
                                                      "#fbbf24",
                                                  },
                                                }),
                                              ],
                                            }),
                                            N("span", {
                                              className:
                                                "text-[8px] font-black tracking-widest text-white/65",
                                              children: "ALVO DE TREINO",
                                            }),
                                          ],
                                        }),
                                        testScene && window.EV_ATTACK_CHOREOGRAPHY?.View &&
                                          N(
                                            window.EV_ATTACK_CHOREOGRAPHY.View,
                                            { scene: testScene },
                                            `dex-vfx-${testRun}`,
                                          ),
                                      ],
                                    }),
                                  testMove &&
                                    O("div", {
                                      className:
                                        "mt-2 flex items-center justify-between gap-2",
                                      children: [
                                        N("span", {
                                          className:
                                            "text-[10px] font-extrabold text-white/85 truncate",
                                          children: testMove.name,
                                        }),
                                        N("span", {
                                          className:
                                            "text-[9px] font-black shrink-0",
                                          style: {
                                            color:
                                              On[testMove.type]?.color ||
                                              "#fbbf24",
                                          },
                                          children: [
                                            testMove.type,
                                            " • Poder ",
                                            testMove.power,
                                            " • Acc ",
                                            testMove.acc,
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          ],
                        }),
                        (() => {
                          let M = Kr[v.id] || [],
                            H = (() => {
                              for (let [K, V] of Object.entries(Kr))
                                if (V.includes(v.id)) return nu[K];
                              return null;
                            })();
                          return O("div", {
                            className:
                              "mt-5 rounded-xl bg-emerald-950/40 border border-emerald-800/30 p-3.5",
                            children: [
                              N("p", {
                                className:
                                  "text-[10px] font-black tracking-widest text-emerald-200/70 mb-2",
                                children:
                                  "LINHA EVOLUTIVA • Nv12 → Nv24 → Nv36",
                              }),
                              H &&
                                O("p", {
                                  className:
                                    "text-[12px] font-bold text-white/60",
                                  children: [
                                    "← Evolui de ",
                                    N("span", {
                                      className: "text-white",
                                      children: H.name,
                                    }),
                                    " (Nv",
                                    H.evoLevel ?? 12,
                                    ")",
                                  ],
                                }),
                              v.evo &&
                                v.evo.length > 0 &&
                                N("div", {
                                  className: "mt-2 space-y-1.5",
                                  children: v.evo.map((K, V) => {
                                    let C = M[V],
                                      D = C ? nu[C] : null;
                                    return O(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-2 text-[12px] font-bold",
                                        children: [
                                          N("span", {
                                            className: "w-2 h-2 rounded-full",
                                            style: {
                                              background: On[K.affinity].color,
                                            },
                                          }),
                                          O("span", {
                                            className: "text-white/50",
                                            children: [
                                              "Afinidade ",
                                              K.affinity,
                                            ],
                                          }),
                                          N("span", {
                                            className: "text-white/20",
                                            children: "→",
                                          }),
                                          N("span", {
                                            className: "text-white",
                                            children:
                                              K.name || D?.name || "???",
                                          }),
                                          D &&
                                            O("span", {
                                              className:
                                                "text-white/40 text-[11px]",
                                              children: [
                                                "(",
                                                D.types.join("/"),
                                                ")",
                                              ],
                                            }),
                                        ],
                                      },
                                      V,
                                    );
                                  }),
                                }),
                              M.length > 0 &&
                                !v.evo &&
                                N("div", {
                                  className: "mt-2 space-y-1",
                                  children: M.map((K) => {
                                    let V = nu[K];
                                    return V
                                      ? O(
                                          "p",
                                          {
                                            className: "text-[12px] font-bold",
                                            children: [
                                              "→ ",
                                              V.name,
                                              " ",
                                              N("span", {
                                                className: "text-white/40",
                                                children: V.types.join("/"),
                                              }),
                                            ],
                                          },
                                          K,
                                        )
                                      : null;
                                  }),
                                }),
                              M.length === 0 &&
                                !v.evo &&
                                N("p", {
                                  className:
                                    "text-[12px] text-white/40 font-bold",
                                  children: "Forma final • Não evolui mais",
                                }),
                            ],
                          });
                        })(),
                      ],
                    }),
                    N("div", {
                      className:
                        "p-3 border-t border-white/10 bg-black/30 flex justify-end",
                      children: N("button", {
                        onClick: () => Z(null),
                        className:
                          "rounded-xl bg-white text-black font-black px-5 py-2.5 text-sm active:scale-95 transition",
                        children: "Fechar",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      function be({
        name: n,
        setName: u,
        affs: r,
        toggleAff: l,
        onStart: o,
        onBack: f,
      }) {
        let $ = r.length === 2;
        return N("div", {
          className:
            "min-h-dvh flex flex-col items-center justify-center px-6 py-12 bg-[radial-gradient(ellipse_at_top,#14532d_0%,#0b1f16_62%,#07130d_100%)]",
          children: O("div", {
            className:
              "w-full max-w-md rounded-3xl bg-white/10 border border-white/15 p-6 sm:p-8",
            children: [
              N("h2", {
                className: "text-2xl font-black text-white text-center",
                children: "Novo vínculo",
              }),
              N("p", {
                className:
                  "text-emerald-100/70 text-sm font-semibold text-center mt-1 mb-6",
                children:
                  "Quem é você, treinador? Quais afinidades guiam seu coração?",
              }),
              N("label", {
                className:
                  "block text-xs font-black tracking-widest text-emerald-200/80 mb-2",
                children: "NOME DO TREINADOR",
              }),
              N("input", {
                value: n,
                onChange: (_) => u(_.target.value.slice(0, 12)),
                placeholder: "Ex.: Lia",
                className:
                  "w-full rounded-2xl bg-black/30 border border-white/20 px-4 py-3 text-white font-bold placeholder:text-white/30 outline-none focus:border-emerald-300 mb-6",
              }),
              O("p", {
                className:
                  "text-xs font-black tracking-widest text-emerald-200/80 mb-2",
                children: [
                  "AFINIDADES ",
                  O("span", {
                    className: "text-white/50",
                    children: ["(", r.length, "/2)"],
                  }),
                ],
              }),
              N("div", {
                className: "grid grid-cols-2 gap-2.5 mb-6",
                children: qr.map((_) => {
                  let v = r.includes(_);
                  return O(
                    "button",
                    {
                      onClick: () => l(_),
                      className: `flex items-center gap-2.5 rounded-2xl border-2 px-3 py-2.5 font-black text-sm active:scale-95 transition ${v ? "bg-white text-slate-900 border-white" : "bg-black/20 text-white border-white/15 hover:border-white/40"}`,
                      children: [
                        N("span", {
                          className: "w-4 h-4 rounded-full shrink-0",
                          style: { background: On[_].color },
                        }),
                        _,
                        v &&
                          N("span", {
                            className: "ml-auto text-emerald-600",
                            children: "✓",
                          }),
                      ],
                    },
                    _,
                  );
                }),
              }),
              N("button", {
                onClick: o,
                disabled: !$,
                className: `w-full rounded-2xl font-black text-lg px-6 py-3.5 transition active:scale-95 ${$ ? "bg-amber-400 hover:bg-amber-300 text-amber-950 shadow-xl" : "bg-white/10 text-white/40 cursor-not-allowed"}`,
                children: "Começar aventura",
              }),
              O("button", {
                onClick: f,
                className:
                  "mt-3 w-full flex items-center justify-center gap-1.5 text-emerald-100/70 hover:text-white font-bold text-sm py-2 transition",
                children: [N(A0, { size: 16 }), " Voltar"],
              }),
            ],
          }),
        });
      }
      function e9() {
        RQ();
        let [n, u] = fu.useState("title"),
          [r, l] = pQ(n),
          o = fu.useRef(null),
          [f, $] = fu.useState(null),
          [_, v] = fu.useState(null),
          [Z, J] = fu.useState(0),
          [e, Q] = fu.useState(null),
          [M, H] = fu.useState(!1),
          [K, V] = fu.useState(() => LQ(I0)),
          [C, D] = fu.useState(""),
          [W, B] = fu.useState([]),
          A = (b, z) => {
            ((o.current = M8(b)),
              ml(I0, o.current),
              V(!0),
              H(z),
              v(null),
              Q(null),
              $(null),
              J((k) => k + 1),
              u("game"));
          },
          P = () => {
            let b = D8(I0);
            if (!b) {
              (Jr("error", "Nenhum save encontrado."), V(!1));
              return;
            }
            (A(b, !1), Jr("success", "Aventura carregada. Boa exploração!"));
          },
          U = (b) => {
            B((z) =>
              z.includes(b)
                ? z.filter((k) => k !== b)
                : z.length >= 2
                  ? z
                  : [...z, b],
            );
          },
          E = () => {
            if (W.length !== 2) return;
            let b = DQ(C.trim() || "Treinador", [W[0], W[1]]);
            (D(""),
              B([]),
              A(b, !0),
              Jr("success", "Sua jornada em Eco Vínculo começou!"));
          },
          q = (b) => {
            let z = o.current;
            if (!z) return;
            let k = b;
            (v({
              px: b.prePx ?? z.px,
              py: b.prePy ?? z.py,
              dir: z.dir,
              caveId: k.preCaveId ?? null,
              inside: k.preInside ?? null,
            }),
              Q(null),
              ml(I0, z),
              $(b));
          },
          L = (b) => {
            let z = o.current;
            if (($(null), z)) {
              if (!b.won && !b.fled && qQ(z) === 0)
                (OQ(z),
                  Q(
                    "Seu time foi derrotado... A enfermeira Lia cuidou dos seus pets.",
                  ),
                  Jr("info", "Derrota... seus pets foram curados na vila."));
              else if (b.captured) Jr("success", "Pet capturado!");
              else if (b.won) {
                if (f?.kind === "trainer" && f.npcId && !z.defeated.includes(f.npcId))
                  z.defeated.push(f.npcId);
                Jr("success", "Vitória na batalha!");
              }
              else if (b.fled) Jr("info", "Você fugiu da batalha.");
              ml(I0, z);
            }
            J((k) => k + 1);
          };
        fu.useEffect(() => {
          if (n !== "game") return;
          let b = () => {
            if (o.current) ml(I0, o.current);
          };
          return (
            window.addEventListener("beforeunload", b),
            () => window.removeEventListener("beforeunload", b)
          );
        }, [n]);
        fu.useEffect(() => {
          window.EV_MUSIC?.setScreen?.(n);
        }, [n]);
        let Y = o,
          G = o.current,
          d = G?.playerName ?? "Treinador",
          h = G
            ? Math.max(
                1,
                ...G.party.map((b) => b.level),
                ...G.box.map((b) => b.level),
              )
            : 5,
          i = On[G?.affinities[0] ?? "Flora"].color;
        return O("div", {
          className: "min-h-dvh w-full bg-[#0b1f16] text-white overflow-hidden",
          style: {
            paddingTop: "var(--safe-area-inset-top)",
            boxSizing: "border-box",
          },
          children: [
            N("style", { children: bQ }),
            N(dQ, {}),
            O(aQ, {
              vis: l,
              children: [
                r === "title" &&
                  N(he, {
                    saveExists: K,
                    onNew: () => u("create"),
                    onContinue: P,
                    onOnline: () => {
                      (Jr("info", "Entrando no mundo online…"), u("online"));
                    },
                    onDexUnlock: () => {
                      (Jr(
                        "success",
                        "Modo Dex liberado! Todos os pets visíveis",
                      ),
                        u("dex"));
                    },
                  }),
                r === "create" &&
                  N(be, {
                    name: C,
                    setName: D,
                    affs: W,
                    toggleAff: U,
                    onStart: E,
                    onBack: () => u("title"),
                  }),
                r === "game" &&
                  G &&
                  !f &&
                  N(c3, {
                    gs: Y,
                    onBattle: q,
                    refreshToken: Z,
                    notice: e,
                    autoIntro: M,
                    restoreLoc: _,
                  }),
                r === "online" &&
                  N(J9, {
                    defaultName: d,
                    highestPetLevel: h,
                    affColor: i,
                    onExit: () => u("title"),
                  }),
                r === "dex" && N(de, { onBack: () => u("title") }),
              ],
            }),
            f &&
              G &&
              N("div", {
                className: "fixed inset-0 z-[60] bg-black",
                children: N(n9, { gs: Y, init: f, onEnd: L }),
              }),
          ],
        });
      }
      H_.createRoot(document.getElementById("root")).render(
        N(M_.default.StrictMode, { children: N(e9, {}) }),
      );
    
