/*
 * Eco Vínculo — Mapas, cavernas, NPCs e estado do jogo
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 29095-35277.
 */
"use strict";

      function $f(n, u, r, l, o, f, $, _) {
        let v = (($ * 73856093) ^ (_ * 19349663)) >>> 0,
          Z = (v % 100) / 100,
          J = ((v >> 7) % 100) / 100;
        switch (((n.fillStyle = "#5aa843"), u)) {
          case F.GRASS:
            n.fillStyle = Z > 0.5 ? "#5cab46" : "#54a03f";
            break;
          case F.TALL:
            n.fillStyle = "#3f8f37";
            break;
          case F.PATH:
            n.fillStyle = "#d9b380";
            break;
          case F.WATER:
          case F.DEEP:
            n.fillStyle = u === F.DEEP ? "#1d6fd1" : "#2f8fe0";
            break;
          case F.TREE:
            n.fillStyle = "#4c9440";
            break;
          case F.THORN:
            n.fillStyle = "#3d7a35";
            break;
          case F.BOULDER:
            n.fillStyle = "#6f7d6a";
            break;
          case F.GAP:
            n.fillStyle = "#16121f";
            break;
          case F.BRIDGE:
            n.fillStyle = "#7d8492";
            break;
          case F.FLOWER:
            n.fillStyle = "#5cab46";
            break;
          case F.PLAZA:
            n.fillStyle = "#cbb489";
            break;
          case F.CAVE:
            n.fillStyle = "#5d5a78";
            break;
          case F.CAVEWALL:
            n.fillStyle = "#3a3852";
            break;
          case F.DOOR:
            n.fillStyle = "#7c5a36";
            break;
          case F.CAVE_ENTRY:
            n.fillStyle = "#5b5f6e";
            break;
          case F.HOUSE:
            n.fillStyle = "#b08968";
            break;
          case F.SAND:
            n.fillStyle = "#ecd9a8";
            break;
          case F.BOG:
            n.fillStyle = "#5d7d63";
            break;
          case F.ROCK:
            n.fillStyle = "#8b8b93";
            break;
          case F.ASH:
            n.fillStyle = "#a8a49a";
            break;
          case F.MOSS:
            n.fillStyle = "#3f9e57";
            break;
          default:
            n.fillStyle = "#5aa843";
        }
        if (
          (n.fillRect(r, l, o, o),
          n.save(),
          n.beginPath(),
          n.rect(r, l, o, o),
          n.clip(),
          u === F.GRASS || u === F.FLOWER)
        ) {
          ((n.strokeStyle = "rgba(0,60,0,0.25)"), (n.lineWidth = 1.5));
          for (let e = 0; e < 3; e++) {
            let Q = r + ((Z * 97 + e * 31) % 1) * o,
              M = l + ((J * 57 + e * 47) % 1) * o;
            (n.beginPath(), n.moveTo(Q, M), n.lineTo(Q + 2, M - 5), n.stroke());
          }
          if (u === F.FLOWER) {
            let e = ["#f472b6", "#fde047", "#fff"];
            for (let Q = 0; Q < 2; Q++) {
              let M = r + ((Z * 53 + Q * 37) % 1) * o,
                H = l + ((J * 71 + Q * 23) % 1) * o;
              n.fillStyle = e[(v + Q) % 3];
              for (let K = 0; K < 5; K++)
                (n.beginPath(),
                  n.arc(
                    M + Math.cos(K * 1.256) * 3,
                    H + Math.sin(K * 1.256) * 3,
                    2.2,
                    0,
                    Math.PI * 2,
                  ),
                  n.fill());
              ((n.fillStyle = "#fff"),
                n.beginPath(),
                n.arc(M, H, 2, 0, Math.PI * 2),
                n.fill());
            }
          }
        } else if (u === F.TALL) {
          ((n.strokeStyle = "#2c6e28"), (n.lineWidth = 3));
          for (let e = 0; e < 6; e++) {
            let Q = r + ((Z * 91 + e * 17) % 1) * o,
              M = l + o - ((J * 41 + e * 29) % 1) * o * 0.4,
              H = Math.sin(f * 2 + Q * 0.1) * 2;
            (n.beginPath(),
              n.moveTo(Q, M),
              n.quadraticCurveTo(
                Q + H,
                M - 10,
                Q + H * 1.6,
                M - 16 - (e % 3) * 3,
              ),
              n.stroke());
          }
        } else if (u === F.WATER || u === F.DEEP) {
          ((n.strokeStyle = "rgba(255,255,255,0.35)"), (n.lineWidth = 2));
          for (let e = 0; e < 2; e++) {
            let Q = l + ((Z * 80 + e * 50) % 1) * o,
              M = Math.sin(f * 1.5 + e * 2 + $) * 4;
            (n.beginPath(),
              n.moveTo(r + 4 + M, Q),
              n.quadraticCurveTo(r + o / 2 + M, Q - 4, r + o - 4 + M, Q),
              n.stroke());
          }
        } else if (u === F.TREE) {
          ((n.fillStyle = "#6b4a2f"),
            n.fillRect(r + o * 0.42, l + o * 0.5, o * 0.16, o * 0.5));
          let e = n.createRadialGradient(
            r + o / 2,
            l + o * 0.35,
            4,
            r + o / 2,
            l + o * 0.35,
            o * 0.55,
          );
          (e.addColorStop(0, "#3f9e4d"),
            e.addColorStop(1, "#256b33"),
            (n.fillStyle = e),
            n.beginPath(),
            n.arc(r + o / 2, l + o * 0.36, o * 0.46, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "rgba(255,255,255,0.15)"),
            n.beginPath(),
            n.arc(r + o * 0.36, l + o * 0.24, o * 0.14, 0, Math.PI * 2),
            n.fill());
        } else if (u === F.THORN) {
          n.fillStyle = "#2f6b2a";
          for (let e = 0; e < 4; e++) {
            let Q = r + ((Z * 67 + e * 23) % 1) * o,
              M = l + ((J * 43 + e * 31) % 1) * o;
            (n.beginPath(), n.arc(Q, M, o * 0.2, 0, Math.PI * 2), n.fill());
          }
          ((n.strokeStyle = "#dc2626"), (n.lineWidth = 2.5));
          for (let e = 0; e < 5; e++) {
            let Q = r + ((J * 77 + e * 19) % 1) * o,
              M = l + ((Z * 61 + e * 27) % 1) * o;
            (n.beginPath(), n.moveTo(Q, M), n.lineTo(Q + 5, M - 7), n.stroke());
          }
        } else if (u === F.BOULDER) {
          let e = n.createRadialGradient(
            r + o * 0.4,
            l + o * 0.35,
            3,
            r + o / 2,
            l + o / 2,
            o * 0.6,
          );
          (e.addColorStop(0, "#9aa5a1"),
            e.addColorStop(1, "#5f6b66"),
            (n.fillStyle = e),
            n.beginPath(),
            n.arc(r + o / 2, l + o / 2, o * 0.42, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#3f4a46"),
            (n.lineWidth = 2),
            n.stroke(),
            (n.strokeStyle = "rgba(0,0,0,0.25)"),
            n.beginPath(),
            n.moveTo(r + o * 0.3, l + o * 0.4),
            n.lineTo(r + o * 0.55, l + o * 0.6),
            n.stroke());
        } else if (u === F.GAP) {
          let e = 0.5 + Math.sin(f * 4 + $ * 1.7 + _ * 2.3) * 0.5;
          ((n.globalAlpha = 0.55 + e * 0.45),
            (n.strokeStyle = "#7c3aed"),
            (n.lineWidth = 3),
            n.beginPath(),
            n.moveTo(r + o * (0.2 + Z * 0.2), l),
            n.lineTo(r + o * (0.5 + J * 0.2), l + o * 0.55),
            n.lineTo(r + o * (0.3 + Z * 0.3), l + o),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.strokeStyle = "rgba(167,139,250,0.28)"),
            (n.lineWidth = 1.5),
            n.strokeRect(r + 3, l + 3, o - 6, o - 6));
        } else if (u === F.BRIDGE) {
          ((n.fillStyle = "rgba(0,0,0,0.32)"),
            n.fillRect(r, l, o, 5),
            n.fillRect(r, l + o - 5, o, 5),
            (n.strokeStyle = "rgba(30,30,40,0.6)"),
            (n.lineWidth = 2));
          for (let e = 1; e < 4; e++)
            (n.beginPath(),
              n.moveTo(r + 2, l + (e * o) / 4),
              n.lineTo(r + o - 2, l + (e * o) / 4),
              n.stroke());
          ((n.fillStyle = "#a7aeba"),
            n.fillRect(r + 5, l + 5, 5, 5),
            n.fillRect(r + o - 10, l + 5, 5, 5),
            n.fillRect(r + 5, l + o - 10, 5, 5),
            n.fillRect(r + o - 10, l + o - 10, 5, 5));
        } else if (u === F.PLAZA)
          ((n.strokeStyle = "rgba(120,90,40,0.3)"),
            (n.lineWidth = 1),
            n.strokeRect(r + 1, l + 1, o - 2, o - 2));
        else if (u === F.CAVE) {
          if (((n.fillStyle = "rgba(0,0,0,0.15)"), Z > 0.7))
            (n.beginPath(),
              n.arc(r + J * o, l + Z * o, 2.5, 0, Math.PI * 2),
              n.fill());
        } else if (u === F.CAVEWALL)
          ((n.fillStyle = "rgba(255,255,255,0.06)"),
            n.fillRect(r, l, o, o * 0.25),
            (n.fillStyle = "rgba(0,0,0,0.3)"),
            n.fillRect(r, l + o * 0.75, o, o * 0.25));
        else if (u === F.HOUSE) {
          n.fillStyle = "rgba(0,0,0,0.12)";
          for (let e = 0; e < 4; e++) n.fillRect(r, l + (e * o) / 4, o, 2);
          ((n.fillStyle = "#8a5a33"), n.fillRect(r, l, o, 4));
        } else if (u === F.DOOR)
          ((n.fillStyle = "#4a3520"),
            n.fillRect(r + o * 0.3, l + o * 0.1, o * 0.4, o * 0.8),
            (n.fillStyle = "#fbbf24"),
            n.beginPath(),
            n.arc(r + o * 0.62, l + o * 0.55, 2.5, 0, Math.PI * 2),
            n.fill());
        else if (u === F.CAVE_ENTRY)
          ((n.fillStyle = "#5b5f6e"),
            n.beginPath(),
            n.moveTo(r, l + o),
            n.lineTo(r + o * 0.5, l + o * 0.15),
            n.lineTo(r + o, l + o),
            n.closePath(),
            n.fill(),
            (n.fillStyle = "#2a2d3a"),
            n.beginPath(),
            n.moveTo(r + o * 0.25, l + o),
            n.lineTo(r + o * 0.5, l + o * 0.45),
            n.lineTo(r + o * 0.75, l + o),
            n.closePath(),
            n.fill(),
            (n.fillStyle = "#0a0a12"),
            n.beginPath(),
            n.ellipse(
              r + o * 0.5,
              l + o * 0.75,
              o * 0.22,
              o * 0.18,
              0,
              0,
              Math.PI * 2,
            ),
            n.fill());
        else if (u === F.BOG) {
          n.fillStyle = "rgba(25,55,45,0.55)";
          for (let e = 0; e < 3; e++) {
            let Q = r + ((Z * 67 + e * 29) % 1) * o,
              M = l + ((J * 53 + e * 37) % 1) * o;
            (n.beginPath(),
              n.ellipse(Q, M, o * 0.22, o * 0.13, 0, 0, Math.PI * 2),
              n.fill());
          }
          ((n.strokeStyle = "#2f5d43"), (n.lineWidth = 2));
          for (let e = 0; e < 2; e++) {
            let Q = r + ((Z * 91 + e * 43) % 1) * o,
              M = l + o * 0.72;
            (n.beginPath(), n.moveTo(Q, M), n.lineTo(Q, M - 10), n.stroke());
          }
        } else if (u === F.ROCK) {
          n.fillStyle = "rgba(55,55,65,0.55)";
          for (let e = 0; e < 4; e++) {
            let Q = r + ((Z * 71 + e * 23) % 1) * o,
              M = l + ((J * 47 + e * 31) % 1) * o;
            (n.beginPath(),
              n.arc(Q, M, o * (0.08 + (e % 3) * 0.05), 0, Math.PI * 2),
              n.fill());
          }
        } else if (u === F.ASH) {
          n.fillStyle = "rgba(88,82,72,0.5)";
          for (let e = 0; e < 5; e++) {
            let Q = r + ((Z * 83 + e * 19) % 1) * o,
              M = l + ((J * 61 + e * 27) % 1) * o;
            n.fillRect(Q, M, 3, 3);
          }
        } else if (u === F.MOSS) {
          ((n.strokeStyle = "rgba(195,255,195,0.55)"), (n.lineWidth = 2));
          for (let e = 0; e < 4; e++) {
            let Q = r + ((Z * 59 + e * 25) % 1) * o,
              M = l + ((J * 79 + e * 33) % 1) * o;
            (n.beginPath(), n.moveTo(Q, M), n.lineTo(Q + 3, M - 6), n.stroke());
          }
        }
        n.restore();
      }
      function i3(n, u, r, l, o) {
        if (
          (n.save(),
          n.translate(u, r),
          (n.fillStyle = "rgba(0,0,0,0.2)"),
          n.beginPath(),
          n.ellipse(0, l * 0.32, l * 0.34, l * 0.1, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = o ? "#6b4a2f" : "#a06a35"),
          n.beginPath(),
          n.roundRect(-l * 0.32, -l * 0.2, l * 0.64, l * 0.5, 4),
          n.fill(),
          (n.strokeStyle = "#4a2f18"),
          (n.lineWidth = 2),
          n.stroke(),
          (n.fillStyle = "#d9a45b"),
          n.fillRect(-l * 0.32, o ? -l * 0.34 : -l * 0.2, l * 0.64, l * 0.14),
          !o)
        )
          ((n.fillStyle = "#fbbf24"),
            n.fillRect(-l * 0.05, -l * 0.08, l * 0.1, l * 0.16));
        else
          ((n.fillStyle = "#3a2a18"),
            n.fillRect(-l * 0.26, -l * 0.14, l * 0.52, l * 0.1));
        n.restore();
      }
      function e8(n, u, r, l, o, f) {
        let $ = Math.sin(o * 2 + u) * l * 0.012;
        (n.save(), n.translate(u, r - $));
        let _ = l / 32;
        (n.scale(_, _),
          (n.fillStyle = "rgba(0,0,0,0.2)"),
          n.beginPath(),
          n.ellipse(0, 14, 9, 3.4, 0, 0, Math.PI * 2),
          n.fill());
        let v =
          f === "nurse"
            ? "#f8fafc"
            : f === "old"
              ? "#7c6a4f"
              : f === "trainer"
                ? "#dc2626"
                : f === "mercador"
                  ? "#8b5a2b"
                  : "#3b82f6";
        if (
          ((n.fillStyle = "#334155"),
          n.fillRect(-6, 6, 5, 8),
          n.fillRect(1, 6, 5, 8),
          (n.fillStyle = v),
          n.beginPath(),
          n.roundRect(-8, -6, 16, 14, 5),
          n.fill(),
          (n.strokeStyle = "rgba(0,0,0,0.3)"),
          (n.lineWidth = 1.5),
          n.stroke(),
          (n.fillStyle = "#fcd9b8"),
          n.beginPath(),
          n.arc(0, -12, 7.5, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          f === "old")
        )
          ((n.fillStyle = "#e5e5e5"),
            n.fillRect(-7, -16, 14, 5),
            n.fillRect(-7, -16, 4, 10),
            n.fillRect(3, -16, 4, 10));
        if (f === "nurse")
          ((n.fillStyle = "#fff"),
            n.fillRect(-5, -21, 10, 5),
            (n.fillStyle = "#dc2626"),
            n.fillRect(-1.5, -21, 3, 5),
            n.fillRect(-5, -19.5, 10, 2));
        if (f === "trainer")
          ((n.fillStyle = "#111"), n.fillRect(-7.6, -17, 15.2, 4));
        if (f === "mercador")
          ((n.fillStyle = "#b8860b"),
            n.fillRect(-8.5, -19.5, 17, 4),
            (n.fillStyle = "#7c5a10"),
            n.fillRect(-4.5, -24, 9, 5),
            (n.fillStyle = "#f5e6c8"),
            n.fillRect(-6, -3, 12, 10),
            (n.strokeStyle = "rgba(0,0,0,0.25)"),
            (n.lineWidth = 1),
            n.strokeRect(-6, -3, 12, 10),
            (n.fillStyle = "#d4a017"),
            n.beginPath(),
            n.arc(7.5, 3, 3.4, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#7c5a10"),
            (n.lineWidth = 1),
            n.stroke(),
            (n.fillStyle = "#fde68a"),
            n.fillRect(6.3, 1.6, 2.4, 3));
        if (
          ((n.fillStyle = "#1e293b"),
          n.fillRect(-4, -11, 2.4, 3),
          n.fillRect(1.6, -11, 2.4, 3),
          f === "trainer")
        )
          ((n.fillStyle = "#fbbf24"),
            (n.font = "bold 12px sans-serif"),
            (n.textAlign = "center"),
            n.fillText("!", 0, -26 - Math.abs(Math.sin(o * 4)) * 3));
        if (f === "mercador") {
          let Z = -30 - Math.abs(Math.sin(o * 4)) * 3;
          ((n.fillStyle = "#fbbf24"),
            n.beginPath(),
            n.arc(0, Z, 6.5, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#b45309"),
            (n.lineWidth = 1.5),
            n.stroke(),
            (n.fillStyle = "#92400e"),
            (n.font = "bold 9px sans-serif"),
            (n.textAlign = "center"),
            (n.textBaseline = "middle"),
            n.fillText("E", 0, Z + 0.5));
        }
        n.restore();
      }
      function mJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = "#e7d8c3",
          Q = "#4ade80";
        if (!v)
          for (let i = 0; i < 4; i++) {
            let b = l * 1.15 + (i * Math.PI * 2) / 4 + i * 0.6,
              z = u * (0.92 + Math.sin(l * 2.1 + i) * 0.06),
              k = Math.cos(b) * z + Math.sin(l * 2.5 + i) * u * 0.04,
              a =
                Math.sin(b) * z * 0.72 -
                u * 0.02 +
                Math.cos(l * 1.8 + i) * u * 0.05,
              un = u * (0.14 + (i % 2) * 0.05);
            (n.save(), n.translate(k, a), n.rotate(b * 0.6 + l * 0.8));
            let mn = n.createLinearGradient(0, -un * 0.5, 0, un * 0.5);
            (mn.addColorStop(0, m(o, 32)),
              mn.addColorStop(1, m(o, -10)),
              (n.fillStyle = mn),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.8),
              n.beginPath(),
              n.moveTo(-un * 0.48, -un * 0.12),
              n.lineTo(-un * 0.1, -un * 0.52),
              n.lineTo(un * 0.46, -un * 0.22),
              n.lineTo(un * 0.34, un * 0.38),
              n.lineTo(-un * 0.32, un * 0.44),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.22)"),
              n.beginPath(),
              n.ellipse(
                -un * 0.08,
                -un * 0.14,
                un * 0.16,
                un * 0.08,
                -0.3,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.strokeStyle = m(o, -38)),
              (n.lineWidth = J * 0.5),
              (n.globalAlpha = 0.6),
              n.beginPath(),
              n.moveTo(-un * 0.18, -un * 0.06),
              n.lineTo(un * 0.12, un * 0.1),
              n.stroke(),
              (n.globalAlpha = 1),
              n.restore());
          }
        ([
          { baseX: -u * 0.48, baseY: u * 1.02, s: u * 0.34, phase: 0 },
          { baseX: u * 0.02, baseY: u * 1.18, s: u * 0.4, phase: 2.1 },
          { baseX: u * 0.52, baseY: u * 1, s: u * 0.3, phase: 4.2 },
        ].forEach((i, b) => {
          let z = Math.sin(l * 2.5 + i.phase) * u * 0.12,
            k =
              Math.cos(l * 2.2 + i.phase * 0.7) * u * 0.1 +
              Math.sin(l * 1.3 + b) * u * 0.04,
            a = Math.sin(l * 1.1 + i.phase) * 0.18;
          if (
            (n.save(), n.translate(i.baseX + k, i.baseY + z), n.rotate(a), !v)
          )
            ((n.fillStyle = "rgba(0,0,0,0.12)"),
              n.beginPath(),
              n.ellipse(
                0,
                i.s * 0.62,
                i.s * 0.62,
                i.s * 0.18,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill());
          let un = n.createLinearGradient(0, -i.s * 0.6, 0, i.s * 0.6);
          if (
            (un.addColorStop(0, m(o, 28)),
            un.addColorStop(1, m(o, -16)),
            (n.fillStyle = un),
            (n.strokeStyle = f),
            (n.lineWidth = J * 0.9),
            n.beginPath(),
            n.moveTo(-i.s * 0.58, -i.s * 0.08),
            n.lineTo(-i.s * 0.16, -i.s * 0.56),
            n.lineTo(i.s * 0.52, -i.s * 0.32),
            n.lineTo(i.s * 0.42, i.s * 0.34),
            n.lineTo(-i.s * 0.28, i.s * 0.52),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "rgba(255,255,255,0.24)"),
            n.beginPath(),
            n.ellipse(
              -i.s * 0.12,
              -i.s * 0.18,
              i.s * 0.2,
              i.s * 0.1,
              -0.28,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            (n.strokeStyle = m(o, -38)),
            (n.lineWidth = J * 0.6),
            (n.globalAlpha = 0.72),
            n.beginPath(),
            n.moveTo(-i.s * 0.22, -i.s * 0.12),
            n.lineTo(i.s * 0.18, i.s * 0.08),
            n.stroke(),
            (n.globalAlpha = 1),
            b === 1)
          )
            ((n.fillStyle = Q),
              (n.strokeStyle = m(Q, -35)),
              (n.lineWidth = J * 0.6),
              n.beginPath(),
              n.moveTo(-i.s * 0.18, -i.s * 0.42),
              n.bezierCurveTo(
                i.s * 0.02,
                -i.s * 0.62,
                i.s * 0.32,
                -i.s * 0.48,
                i.s * 0.18,
                -i.s * 0.26,
              ),
              n.bezierCurveTo(
                i.s * 0.06,
                -i.s * 0.2,
                -i.s * 0.1,
                -i.s * 0.22,
                -i.s * 0.18,
                -i.s * 0.42,
              ),
              n.closePath(),
              n.fill(),
              n.stroke());
          n.restore();
        }),
          n.save(),
          n.scale(Z, Z));
        let H = 0,
          K = u * 0.08,
          V = [
            [H + u * 0.1, K - u * 0.78],
            [H + u * 0.52, K - u * 0.56],
            [H + u * 0.7, K - u * 0.1],
            [H + u * 0.48, K + u * 0.46],
            [H + u * 0.06, K + u * 0.78],
            [H - u * 0.42, K + u * 0.58],
            [H - u * 0.68, K + u * 0.06],
            [H - u * 0.46, K - u * 0.42],
          ],
          C = n.createLinearGradient(H, K - u * 0.78, H, K + u * 0.78);
        (C.addColorStop(0, m(o, 40)),
          C.addColorStop(1, o),
          (n.fillStyle = C),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(V[0][0], V[0][1]));
        for (let i = 1; i < V.length; i++) n.lineTo(V[i][0], V[i][1]);
        (n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = "#8a6b4a"),
          (n.lineWidth = J * 0.65),
          (n.globalAlpha = 0.42),
          n.beginPath(),
          n.moveTo(H, K - u * 0.18),
          n.lineTo(V[0][0], V[0][1]),
          n.stroke(),
          n.beginPath(),
          n.moveTo(H + u * 0.08, K - u * 0.06),
          n.lineTo(V[1][0], V[1][1]),
          n.stroke(),
          n.beginPath(),
          n.moveTo(H + u * 0.22, K + u * 0.12),
          n.lineTo(V[2][0], V[2][1]),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.strokeStyle = m(o, -38)),
          (n.lineWidth = J * 0.9),
          (n.globalAlpha = 0.78),
          n.beginPath(),
          n.moveTo(H - u * 0.26, K - u * 0.38),
          n.lineTo(H + u * 0.18, K - u * 0.14),
          n.lineTo(H + u * 0.32, K + u * 0.18),
          n.stroke(),
          n.beginPath(),
          n.moveTo(H - u * 0.44, K + u * 0.08),
          n.lineTo(H - u * 0.08, K + u * 0.28),
          n.lineTo(H + u * 0.26, K + u * 0.06),
          n.stroke(),
          n.beginPath(),
          n.moveTo(H + u * 0.1, K - u * 0.52),
          n.lineTo(H + u * 0.14, K - u * 0.18),
          n.lineTo(H - u * 0.18, K + u * 0.08),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            H - u * 0.2,
            K - u * 0.32,
            u * 0.28,
            u * 0.12,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = e),
          (n.globalAlpha = 0.22),
          n.beginPath(),
          n.moveTo(V[0][0], V[0][1]),
          n.lineTo(V[1][0], V[1][1]),
          n.lineTo(H + u * 0.1, K - u * 0.18),
          n.closePath(),
          n.fill(),
          n.beginPath(),
          n.moveTo(V[7][0], V[7][1]),
          n.lineTo(V[0][0], V[0][1]),
          n.lineTo(H - u * 0.1, K - u * 0.2),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = Q),
          (n.strokeStyle = m(Q, -40)),
          (n.lineWidth = J * 0.7),
          n.beginPath(),
          n.moveTo(H - u * 0.28, K - u * 0.68),
          n.bezierCurveTo(
            H - u * 0.18,
            K - u * 0.84,
            H + u * 0.08,
            K - u * 0.88,
            H + u * 0.22,
            K - u * 0.7,
          ),
          n.bezierCurveTo(
            H + u * 0.26,
            K - u * 0.62,
            H + u * 0.1,
            K - u * 0.54,
            H - u * 0.06,
            K - u * 0.58,
          ),
          n.bezierCurveTo(
            H - u * 0.18,
            K - u * 0.58,
            H - u * 0.3,
            K - u * 0.6,
            H - u * 0.28,
            K - u * 0.68,
          ),
          n.closePath(),
          n.fill(),
          n.stroke());
        let D = [
            [H - u * 0.6, K - u * 0.06],
            [H - u * 0.92, K + u * 0.04],
            [H - u * 0.88, K + u * 0.28],
            [H - u * 0.56, K + u * 0.22],
          ],
          W = [
            [H - u * 0.84, K + u * 0.18],
            [H - u * 1.06, K + u * 0.38],
            [H - u * 0.96, K + u * 0.62],
            [H - u * 0.68, K + u * 0.44],
          ],
          B = [
            [H + u * 0.62, K - u * 0.02],
            [H + u * 0.94, K + u * 0.08],
            [H + u * 0.88, K + u * 0.32],
            [H + u * 0.58, K + u * 0.26],
          ],
          A = [
            [H + u * 0.86, K + u * 0.22],
            [H + u * 1.08, K + u * 0.42],
            [H + u * 0.98, K + u * 0.66],
            [H + u * 0.7, K + u * 0.48],
          ];
        function P(i, b) {
          let z = n.createLinearGradient(i[0][0], i[0][1], i[2][0], i[2][1]);
          (z.addColorStop(0, m(b, 18)),
            z.addColorStop(1, m(b, -12)),
            (n.fillStyle = z),
            (n.strokeStyle = f),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(i[0][0], i[0][1]));
          for (let k = 1; k < i.length; k++) n.lineTo(i[k][0], i[k][1]);
          (n.closePath(),
            n.fill(),
            n.stroke(),
            (n.strokeStyle = m(b, -38)),
            (n.lineWidth = J * 0.6),
            (n.globalAlpha = 0.68),
            n.beginPath(),
            n.moveTo((i[0][0] + i[3][0]) * 0.5, (i[0][1] + i[3][1]) * 0.5),
            n.lineTo((i[1][0] + i[2][0]) * 0.5, (i[1][1] + i[2][1]) * 0.5),
            n.stroke(),
            (n.globalAlpha = 1));
        }
        (P(D, o), P(W, m(o, -8)), P(B, o), P(A, m(o, -8)));
        function U(i, b, z) {
          let k = n.createLinearGradient(i, b - z * 0.5, i, b + z * 0.5);
          (k.addColorStop(0, m(o, 22)),
            k.addColorStop(1, m(o, -18)),
            (n.fillStyle = k),
            (n.strokeStyle = f),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(i - z * 0.38, b - z * 0.18),
            n.lineTo(i + z * 0.22, b - z * 0.34),
            n.lineTo(i + z * 0.46, b + z * 0.08),
            n.lineTo(i + z * 0.18, b + z * 0.42),
            n.lineTo(i - z * 0.32, b + z * 0.26),
            n.closePath(),
            n.fill(),
            n.stroke());
        }
        (U(H - u * 0.92, K + u * 0.58, u * 0.3),
          U(H + u * 0.96, K + u * 0.62, u * 0.3));
        let E = H + u * 0.06,
          q = K - u * 0.68,
          L = u * 0.26,
          Y = [
            [E - L * 0.72, q + L * 0.22],
            [E - L * 0.42, q - L * 0.62],
            [E + L * 0.48, q - L * 0.58],
            [E + L * 0.78, q + L * 0.18],
            [E + L * 0.22, q + L * 0.52],
            [E - L * 0.18, q + L * 0.48],
          ],
          G = n.createLinearGradient(E, q - L * 0.6, E, q + L * 0.5);
        (G.addColorStop(0, m(o, 36)),
          G.addColorStop(1, m(o, -6)),
          (n.fillStyle = G),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(Y[0][0], Y[0][1]));
        for (let i = 1; i < Y.length; i++) n.lineTo(Y[i][0], Y[i][1]);
        (n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.24)"),
          n.beginPath(),
          n.ellipse(
            E - L * 0.12,
            q - L * 0.22,
            L * 0.18,
            L * 0.08,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = m(o, -46)),
          n.beginPath(),
          n.moveTo(E - L * 0.52, q + L * 0.04),
          n.lineTo(E + L * 0.58, q + L * 0.08),
          n.lineTo(E + L * 0.52, q + L * 0.32),
          n.lineTo(E - L * 0.48, q + L * 0.28),
          n.closePath(),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.7),
          n.stroke(),
          n.restore());
        let d = u * 0.08 - u * 0.68 + u * 0.26 * 0.18,
          h = u * 0.06;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((i) => {
              let b = h + i * u * 0.12;
              (n.beginPath(),
                n.moveTo(b - u * 0.08, d - u * 0.08),
                n.lineTo(b + u * 0.08, d + u * 0.08),
                n.moveTo(b + u * 0.08, d - u * 0.08),
                n.lineTo(b - u * 0.08, d + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((i) => {
            let b = h + i * u * 0.12,
              z = d + (i < 0 ? u * 0.01 : -u * 0.01);
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(b, z, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(b - u * 0.028, z - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }

      function wJ(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = z3(J),
          M = 5 + (Math.floor(Q * 10) % 5),
          H = Math.max(1.5, r * 0.018);
        (n.save(), n.scale(e, e));
        let K = n.createLinearGradient(0, -u, 0, u);
        (K.addColorStop(0, m(o, 40)),
          K.addColorStop(1, o),
          (n.fillStyle = K),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath());
        for (let D = 0; D < M; D++) {
          let W = (D / M) * Math.PI * 2 - Math.PI / 2,
            B = u * (0.62 + Math.sin(Q * 6 + D) * 0.18),
            A = Math.cos(W) * B,
            P = Math.sin(W) * B;
          if (D === 0) n.moveTo(A, P);
          else n.lineTo(A, P);
        }
        (n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill());
        let V = Math.cos(l * 2.5 + Q * 6) * u * 0.72,
          C = Math.sin(l * 2.5 + Q * 6) * u * 0.32 - u * 0.12;
        if (!Z)
          ((n.fillStyle = f),
            (n.globalAlpha = 0.9),
            n.beginPath(),
            n.arc(V, C, u * 0.1, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1));
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((D) => {
              let W = D * u * 0.18,
                B = -u * 0.12;
              (n.beginPath(),
                n.moveTo(W - u * 0.08, B - u * 0.08),
                n.lineTo(W + u * 0.08, B + u * 0.08),
                n.moveTo(W + u * 0.08, B - u * 0.08),
                n.lineTo(W - u * 0.08, B + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((D) => {
            let W = D * u * 0.18,
              B = -u * 0.12;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(W, B, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(W - u * 0.03, B - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function U3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J === 1,
          H = J === 2,
          K = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * K, e * K));
        let V = n.createLinearGradient(0, -u * 0.7, 0, u * 0.7);
        if (
          (V.addColorStop(0, m(o, 40)),
          V.addColorStop(1, M ? m(o, -18) : o),
          (n.fillStyle = V),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(u * 0.9, 0),
          n.bezierCurveTo(
            u * 0.6,
            -u * 0.58,
            -u * 0.1,
            -u * 0.72,
            -u * 0.72,
            -u * 0.22,
          ),
          n.bezierCurveTo(
            -u * 0.88,
            0,
            -u * 0.72,
            u * 0.22,
            -u * 0.1,
            u * 0.72,
          ),
          n.bezierCurveTo(u * 0.6, u * 0.58, u * 0.9, 0, u * 0.9, 0),
          n.closePath(),
          n.fill(),
          n.stroke(),
          [-1, 1].forEach((D) => {
            ((n.fillStyle = m(f, D > 0 ? 10 : -10)),
              (n.strokeStyle = $),
              (n.lineWidth = Q),
              n.beginPath(),
              n.moveTo(D * u * 0.12, -u * 0.42),
              n.lineTo(
                D * u * 0.78,
                -u * 0.56 + Math.sin(l * 2.5 + D) * u * 0.06,
              ),
              n.lineTo(D * u * 0.62, -u * 0.18),
              n.closePath(),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = f),
          (n.strokeStyle = $),
          (n.lineWidth = Q),
          n.beginPath(),
          n.moveTo(-u * 0.72, 0),
          n.lineTo(-u * 1.22, -u * 0.18),
          n.lineTo(-u * 1.08, 0),
          n.lineTo(-u * 1.22, u * 0.18),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.12,
            -u * 0.32,
            u * 0.32,
            u * 0.13,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          !Z)
        )
          for (let D = 0; D < 3; D++) {
            let W = l * 2.5 + D * 2.09,
              B = Math.cos(W) * u * 0.88,
              A = Math.sin(W) * u * 0.46 - u * 0.08;
            ((n.fillStyle = "#facc15"),
              (n.globalAlpha = 0.92),
              n.beginPath(),
              n.arc(B, A, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              (n.globalAlpha = 1),
              n.beginPath(),
              n.arc(B - u * 0.02, A - u * 0.02, u * 0.03, 0, Math.PI * 2),
              n.fill());
          }
        if (J > 0) {
          if (
            ((n.strokeStyle = H ? "#facc15" : "#8b5cf6"),
            (n.lineWidth = Q * 1.2),
            n.beginPath(),
            n.moveTo(-u * 0.22, -u * 0.72),
            n.lineTo(0, -u * 0.98),
            n.lineTo(u * 0.22, -u * 0.72),
            n.stroke(),
            M)
          )
            ((n.fillStyle = "rgba(20,20,40,0.85)"),
              n.beginPath(),
              n.ellipse(0, -u * 0.72, u * 0.42, u * 0.12, 0, 0, Math.PI * 2),
              n.fill());
        }
        n.restore();
        let C = -u * 0.08;
        if (Z)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((D) => {
              let W = D * u * 0.16;
              (n.beginPath(),
                n.moveTo(W - u * 0.08, C - u * 0.08),
                n.lineTo(W + u * 0.08, C + u * 0.08),
                n.moveTo(W + u * 0.08, C - u * 0.08),
                n.lineTo(W - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((D) => {
            let W = D * u * 0.16;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(W, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(W - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function M3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J > 0 ? 1.16 : 1;
        (n.save(), n.scale(e * M, e * M));
        let H = n.createLinearGradient(0, -u, 0, u);
        if (
          (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.62, u * 0.78, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          [-1, 1].forEach((K) => {
            ((n.fillStyle = m(f, 10)),
              (n.strokeStyle = $),
              (n.lineWidth = Q),
              n.beginPath(),
              n.ellipse(
                K * u * 0.42,
                -u * 0.22,
                u * 0.22,
                u * 0.34,
                K * 0.2,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = Q * 0.8));
            for (let V = -1; V <= 1; V++)
              (n.beginPath(),
                n.moveTo(K * u * 0.3, -u * 0.22 + V * u * 0.16),
                n.lineTo(K * u * 0.54, -u * 0.22 + V * u * 0.16),
                n.stroke());
          }),
          !Z)
        )
          for (let K = 0; K < 4; K++) {
            let V = l * 2.5 + K * 1.57,
              C = Math.cos(V) * u * 0.82,
              D = Math.sin(V) * u * 0.62;
            ((n.fillStyle = "#fef08a"),
              n.beginPath(),
              n.arc(C, D, u * 0.07, 0, Math.PI * 2),
              n.fill());
          }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.28,
            u * 0.28,
            u * 0.13,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          J > 0)
        )
          ((n.strokeStyle = "#facc15"),
            (n.lineWidth = Q * 1.1),
            n.beginPath(),
            n.arc(0, -u * 0.82, u * 0.18, 0, Math.PI * 2),
            n.stroke());
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((K) => {
              let V = K * u * 0.16,
                C = -u * 0.12;
              (n.beginPath(),
                n.moveTo(V - u * 0.08, C - u * 0.08),
                n.lineTo(V + u * 0.08, C + u * 0.08),
                n.moveTo(V + u * 0.08, C - u * 0.08),
                n.lineTo(V - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((K) => {
            let V = K * u * 0.16,
              C = -u * 0.12;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(V, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(V - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function H3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * M, e * M));
        let H = n.createLinearGradient(0, -u, 0, u);
        if (
          (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, u * 0.08, u * 0.52, u * 0.66, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(o, 18)),
          (n.strokeStyle = $),
          (n.lineWidth = Q),
          n.beginPath(),
          n.moveTo(0, u * 0.74),
          n.quadraticCurveTo(-u * 0.52, u * 1.18, -u * 0.18, u * 1.42),
          n.quadraticCurveTo(0, u * 1.22, u * 0.18, u * 1.42),
          n.quadraticCurveTo(u * 0.52, u * 1.18, 0, u * 0.74),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#4ade80"),
          (n.strokeStyle = $),
          (n.lineWidth = Q),
          n.beginPath(),
          n.ellipse(0, -u * 0.62, u * 0.34, u * 0.16, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          !Z)
        )
          for (let K = 0; K < 3; K++) {
            let V = l * 2.5 + K * 2.09,
              C = Math.cos(V) * u * 0.78,
              D = Math.sin(V) * u * 0.32 - u * 0.12;
            (n.save(),
              n.translate(C, D),
              n.rotate(V),
              (n.fillStyle = "#22c55e"),
              (n.strokeStyle = $),
              (n.lineWidth = Q * 0.7),
              n.beginPath(),
              n.ellipse(0, 0, u * 0.16, u * 0.08, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              n.restore());
          }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          J > 0)
        )
          ((n.fillStyle = "#fef9c3"),
            (n.strokeStyle = $),
            (n.lineWidth = Q),
            n.beginPath(),
            n.moveTo(-u * 0.28, -u * 0.82),
            n.lineTo(0, -u * 1.08),
            n.lineTo(u * 0.28, -u * 0.82),
            n.closePath(),
            n.fill(),
            n.stroke());
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((K) => {
              let V = K * u * 0.15,
                C = -u * 0.08;
              (n.beginPath(),
                n.moveTo(V - u * 0.08, C - u * 0.08),
                n.lineTo(V + u * 0.08, C + u * 0.08),
                n.moveTo(V + u * 0.08, C - u * 0.08),
                n.lineTo(V - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((K) => {
            let V = K * u * 0.15,
              C = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(V, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(V - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function D3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J > 0 ? 1.16 : 1;
        (n.save(), n.scale(e * M, e * M));
        let H = n.createLinearGradient(0, -u, 0, u);
        (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.58, u * 0.72, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke());
        for (let K = -2; K <= 2; K++) {
          let V = K * u * 0.22,
            C = Math.sin(l * 2.5 + K) * u * 0.12;
          if (
            ((n.strokeStyle = m(f, -10)),
            (n.lineWidth = Q * 1.1),
            n.beginPath(),
            n.moveTo(V, u * 0.48),
            n.quadraticCurveTo(V + C, u * 0.96, V + C * 0.6, u * 1.38),
            n.stroke(),
            !Z)
          )
            ((n.fillStyle = "#bbf7d0"),
              (n.globalAlpha = 0.7),
              n.beginPath(),
              n.arc(V + C * 0.6, u * 1.38, u * 0.07, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
        }
        if (!Z)
          for (let K = 0; K < 3; K++) {
            let V = l * 2.5 + K * 2.09,
              C = Math.cos(V) * u * 0.82,
              D = Math.sin(V) * u * 0.52;
            ((n.fillStyle = "#4ade80"),
              n.beginPath(),
              n.arc(C, D, u * 0.09, 0, Math.PI * 2),
              n.fill());
          }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.16,
            -u * 0.24,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          J > 0)
        )
          ((n.fillStyle = "rgba(56,189,248,0.28)"),
            n.beginPath(),
            n.ellipse(0, 0, u * 0.82, u * 0.92, 0, 0, Math.PI * 2),
            n.fill());
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((K) => {
              let V = K * u * 0.16,
                C = -u * 0.1;
              (n.beginPath(),
                n.moveTo(V - u * 0.08, C - u * 0.08),
                n.lineTo(V + u * 0.08, C + u * 0.08),
                n.moveTo(V + u * 0.08, C - u * 0.08),
                n.lineTo(V - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((K) => {
            let V = K * u * 0.16,
              C = -u * 0.1;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(V, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(V - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function desenharSaci(n, u, r, l, o, f) {
        // Redemoin (saci) - Base Nv1 - Animal: Jerboa do Vento (Rato-Canguru / Kamaitachi)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pular = isFainted ? 0 : Math.sin(tempo * 6) * o * 0.05;
        n.save(); n.translate(r, l - pular + o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.4; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corPelo = "#facc15"; let bordaPelo = "#a16207"; // Amarelo Faísca
        let corOrelha = "#fbcfe8"; // Interior da orelha rosa
        let corGorro = "#ef4444"; let bordaGorro = "#991b1b";

        // 1. Redemoinho (Tornado de Faíscas e Vento)
        if(!isFainted) {
            n.strokeStyle = "#ca8a04"; n.lineWidth = strokeW * 1.5;
            for(let i=0; i<3; i++) {
                n.beginPath();
                n.ellipse(0, raio*0.6 - i*raio*0.12, raio*0.4 - i*raio*0.08, raio*0.1, tempo*5 + i, 0, Math.PI*2);
                n.stroke();
            }
        }

        // 2. A "Uma Perna" (Uma pata traseira forte de salto estilo Jerboa)
        n.fillStyle = corPelo; n.strokeStyle = bordaPelo; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio*0.1, raio*0.2);
        n.quadraticCurveTo(-raio*0.2, raio*0.5, 0, raio*0.7); // Perna desce até ao tornado
        n.quadraticCurveTo(raio*0.2, raio*0.5, raio*0.1, raio*0.2);
        n.fill(); n.stroke();

        // Pé único do animalzinho
        n.beginPath(); n.ellipse(0, raio*0.7, raio*0.15, raio*0.08, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // 3. Orelhas de Feneco/Jerboa (Grandes e animaiscas)
        n.fillStyle = corPelo; n.strokeStyle = bordaPelo;
        // Orelha Esquerda
        n.beginPath(); n.moveTo(-raio*0.15, -raio*0.2); n.lineTo(-raio*0.7, -raio*0.6); n.lineTo(-raio*0.4, 0); n.closePath(); n.fill(); n.stroke();
        n.fillStyle = corOrelha; n.beginPath(); n.moveTo(-raio*0.25, -raio*0.2); n.lineTo(-raio*0.6, -raio*0.5); n.lineTo(-raio*0.4, -raio*0.1); n.fill(); n.stroke();
        // Orelha Direita
        n.fillStyle = corPelo; n.beginPath(); n.moveTo(raio*0.15, -raio*0.2); n.lineTo(raio*0.7, -raio*0.6); n.lineTo(raio*0.4, 0); n.closePath(); n.fill(); n.stroke();
        n.fillStyle = corOrelha; n.beginPath(); n.moveTo(raio*0.25, -raio*0.2); n.lineTo(raio*0.6, -raio*0.5); n.lineTo(raio*0.4, -raio*0.1); n.fill(); n.stroke();

        // 4. Corpo e Cabeça (Peludinhos e unidos)
        n.fillStyle = corPelo; n.strokeStyle = bordaPelo;
        n.beginPath(); n.ellipse(0, 0, raio*0.45, raio*0.4, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Patinhas dianteiras de roedor encolhidas no peito
        n.beginPath(); n.ellipse(-raio*0.25, raio*0.15, raio*0.08, raio*0.12, -Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.ellipse(raio*0.25, raio*0.15, raio*0.08, raio*0.12, Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();

        // 5. Gorro do Saci (Caído elegantemente entre as orelhas)
        n.fillStyle = corGorro; n.strokeStyle = bordaGorro;
        n.beginPath();
        n.moveTo(-raio*0.25, -raio*0.3);
        n.quadraticCurveTo(0, -raio*0.5, raio*0.25, -raio*0.3); // Base do gorro
        n.quadraticCurveTo(raio*0.4, -raio*0.8, 0, -raio*1.0); // Sobe
        n.quadraticCurveTo(-raio*0.6, -raio*0.7, -raio*0.25, -raio*0.3); // Cai de lado
        n.fill(); n.stroke();
        // Borda do gorro
        n.beginPath(); n.moveTo(-raio*0.25, -raio*0.3); n.quadraticCurveTo(0, -raio*0.4, raio*0.25, -raio*0.3); n.stroke();

        // 6. Rosto Animalesco Fofo (Focinho e focinho de raposa/rato)
        if(isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(-raio*0.2, 0); n.lineTo(-raio*0.05, 0.1*raio); n.stroke();
            n.beginPath(); n.moveTo(raio*0.2, 0); n.lineTo(raio*0.05, 0.1*raio); n.stroke();
        } else {
            // Olhos
            n.fillStyle = "#fff"; n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.arc(-raio*0.18, -raio*0.05, raio*0.1, 0, Math.PI*2); n.fill(); n.stroke();
            n.beginPath(); n.arc(raio*0.18, -raio*0.05, raio*0.1, 0, Math.PI*2); n.fill(); n.stroke();

            n.fillStyle = "#000";
            n.beginPath(); n.arc(-raio*0.15, -raio*0.05, raio*0.05, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.15, -raio*0.05, raio*0.05, 0, Math.PI*2); n.fill();

            n.fillStyle = "#fff";
            n.beginPath(); n.arc(-raio*0.16, -raio*0.07, raio*0.02, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.14, -raio*0.07, raio*0.02, 0, Math.PI*2); n.fill();

            // Focinho de animalzinho
            n.fillStyle = "#000";
            n.beginPath(); n.ellipse(0, raio*0.1, raio*0.04, raio*0.03, 0, 0, Math.PI*2); n.fill();

            // Boquinha de animal (estilo gatinho/raposa)
            n.strokeStyle = "#000"; n.lineWidth = strokeW*0.8;
            n.beginPath(); n.moveTo(0, raio*0.13); n.quadraticCurveTo(-raio*0.08, raio*0.2, -raio*0.15, raio*0.15); n.stroke();
            n.beginPath(); n.moveTo(0, raio*0.13); n.quadraticCurveTo(raio*0.08, raio*0.2, raio*0.15, raio*0.15); n.stroke();
        }
        n.restore();
      }
      function desenharFaebluma(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        // Movimento de voo flutuante suave
        let flutua = Math.sin(tempo * 3) * o * 0.08;

        // Paleta de Cores (Flora + Faísca baseada no seu código)
        let corFlora = "#4ade80";
        let sombraFlora = "#166534";
        let corFaisca = "#facc15";
        let sombraFaisca = "#a16207";
        let luzFaisca = "#fef08a";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        // Calcula o tamanho base considerando a evolução (stage)
        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);

        // Bater das asas hipnótico (Animação)
        let wingFlap = Math.sin(tempo * 12) * 0.2 + 0.8;

        // ASAS DA MARIPOSA (A "Aurora com asas")
        [-1, 1].forEach((lado) => {
          n.save();
          // Escala no eixo X para simular o bater das asas 3D
          n.scale(lado * wingFlap, 1);

          // Asa Inferior (Verde, mais redonda)
          n.fillStyle = corFlora;
          n.strokeStyle = sombraFlora;
          n.lineWidth = strokeW;
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(raio * 1.2, raio * 0.2, raio * 0.8, raio * 1.4, raio * 0.2, raio * 0.8);
          n.closePath();
          n.fill();
          n.stroke();

          // Detalhe da Asa Inferior (Veio da folha/asa)
          n.beginPath();
          n.moveTo(raio * 0.2, raio * 0.2);
          n.lineTo(raio * 0.6, raio * 0.8);
          n.stroke();

          // Asa Superior (Majestosa, Gradiente de Aurora)
          let gradAsa = n.createLinearGradient(0, 0, raio * 1.5, -raio * 1.5);
          gradAsa.addColorStop(0, corFlora);
          gradAsa.addColorStop(1, corFaisca);

          n.fillStyle = gradAsa;
          n.strokeStyle = sombraFlora;
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(raio * 1.5, -raio * 0.3, raio * 1.8, -raio * 1.5, raio * 0.3, -raio * 1.5);
          n.closePath();
          n.fill();
          n.stroke();

          // Detalhe brilhante na asa superior (Ocelo mágico)
          n.fillStyle = luzFaisca;
          n.strokeStyle = sombraFaisca;
          n.beginPath();
          n.ellipse(raio * 0.9, -raio * 0.8, raio * 0.2, raio * 0.15, -0.5, 0, Math.PI * 2);
          n.fill();
          n.stroke();

          n.restore();
        });

        // ANTENAS FEÉRICAS (Fofas e pontiagudas)
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(0, -raio * 0.8);
          n.quadraticCurveTo(lado * raio * 0.4, -raio * 1.4, lado * raio * 0.7, -raio * 1.2);
          n.stroke();

          // Ponta da antena (Bulbo de luz)
          n.fillStyle = luzFaisca;
          n.beginPath();
          n.arc(lado * raio * 0.7, -raio * 1.2, raio * 0.15, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPINHO (Felpudo)
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.4, raio * 0.7, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // GOLA FELPUDA / PÓLEN NO PESCOÇO (Faísca)
        n.fillStyle = corFaisca;
        n.strokeStyle = sombraFaisca;
        n.beginPath();
        n.ellipse(0, -raio * 0.4, raio * 0.5, raio * 0.3, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // CABEÇA
        n.fillStyle = "#bbf7d0"; // Verde muito clarinho
        n.strokeStyle = sombraFlora;
        n.beginPath();
        n.ellipse(0, -raio * 0.7, raio * 0.45, raio * 0.4, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // PATINHAS DIANTEIRAS
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.2, raio * 0.3, raio * 0.1, raio * 0.15, lado * -0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // ROSTO FOFINHO
        // Blush
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.25, -raio * 0.65, raio * 0.08, raio * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos
        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.75;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.75, raio * 0.08, 0, Math.PI * 2);
            n.fill();
          });
          // Brilho
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15 - raio * 0.02, -raio * 0.75 - raio * 0.02, raio * 0.03, 0, Math.PI * 2);
            n.fill();
          });
        }

        // Sorriso
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.08, -raio * 0.55);
        n.quadraticCurveTo(0, -raio * 0.45, raio * 0.08, -raio * 0.55);
        n.stroke();

        // PÓLEN LUMINESCENTE ORBITANDO
        if (!isFainted) {
          n.fillStyle = luzFaisca;
          n.strokeStyle = sombraFaisca;
          n.lineWidth = strokeW * 0.5;
          for (let i = 0; i < 5; i++) {
            let px = Math.cos(tempo * 2 + i * 2) * raio * 1.8;
            let py = Math.sin(tempo * 3 + i * 1.5) * raio * 1.2 - raio * 0.5;
            n.beginPath();
            n.arc(px, py, raio * 0.05, 0, Math.PI * 2);
            n.fill();
            n.stroke();
          }
        }

        n.restore();
      }
      function desenharAquaroch(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3.5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 3) * o * 0.06;
        let corMare = "#38bdf8";
        let sombraMare = "#075985";
        let corPedra = "#b08968";
        let sombraPedra = "#5c4a32";
        let luzPedra = "#e7d8c3";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);

        // NADADEIRAS TRASEIRAS
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          n.translate(lado * raio * 0.35, raio * 0.45);
          n.rotate(lado * 0.5 + Math.sin(tempo * 4) * 0.1 * lado);
          n.beginPath();
          n.ellipse(0, 0, raio * 0.15, raio * 0.25, 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();
          n.restore();
        });

        // CASCO (Recife de Rocha)
        let gradCasco = n.createLinearGradient(0, -raio * 0.8, 0, raio * 0.4);
        gradCasco.addColorStop(0, luzPedra);
        gradCasco.addColorStop(1, sombraPedra);

        n.fillStyle = gradCasco;
        n.strokeStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.6, raio * 0.2);
        n.bezierCurveTo(-raio * 0.7, -raio * 0.5, -raio * 0.3, -raio * 0.8, 0, -raio * 0.85);
        n.bezierCurveTo(raio * 0.3, -raio * 0.8, raio * 0.7, -raio * 0.5, raio * 0.6, raio * 0.2);
        n.bezierCurveTo(raio * 0.4, raio * 0.4, -raio * 0.4, raio * 0.4, -raio * 0.6, raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // TEXTURA DA ROCHA
        n.fillStyle = corPedra;
        n.beginPath();
        n.ellipse(0, -raio * 0.2, raio * 0.4, raio * 0.25, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // CORAIS E ANÊMONAS
        if (!isFainted) {
          n.lineWidth = strokeW * 0.8;
          n.save();
          n.translate(-raio * 0.35, -raio * 0.6);
          n.rotate(-0.3 + Math.sin(tempo * 3) * 0.1);
          n.fillStyle = "#bae6fd";
          n.strokeStyle = sombraMare;
          n.beginPath();
          n.moveTo(-raio * 0.05, 0);
          n.lineTo(-raio * 0.1, -raio * 0.3);
          n.lineTo(0, -raio * 0.25);
          n.lineTo(raio * 0.1, -raio * 0.35);
          n.lineTo(raio * 0.05, 0);
          n.fill();
          n.stroke();
          n.restore();

          n.save();
          n.translate(raio * 0.3, -raio * 0.65);
          n.rotate(0.2 + Math.sin(tempo * 3.5) * 0.1);
          n.fillStyle = "#f472b6";
          n.strokeStyle = "#be185d";
          n.beginPath();
          n.ellipse(0, -raio * 0.15, raio * 0.08, raio * 0.2, 0, 0, Math.PI * 2);
          n.fill(); n.stroke();
          n.beginPath();
          n.ellipse(raio * 0.1, -raio * 0.1, raio * 0.06, raio * 0.15, 0.5, 0, Math.PI * 2);
          n.fill(); n.stroke();
          n.restore();
        }

        // CABEÇA
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, raio * 0.25, raio * 0.28, raio * 0.24, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // BLUSH
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.18, raio * 0.32, raio * 0.06, raio * 0.04, 0, 0, Math.PI * 2);
          n.fill();
        });

        // OLHOS
        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.12, cy = raio * 0.22;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.12, raio * 0.22, raio * 0.07, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.12 - raio * 0.02, raio * 0.22 - raio * 0.02, raio * 0.025, 0, Math.PI * 2);
            n.fill();
          });
        }

        // SORRISO
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.06, raio * 0.38);
        n.quadraticCurveTo(0, raio * 0.44, raio * 0.06, raio * 0.38);
        n.stroke();

        // NADADEIRAS DIANTEIRAS
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          n.translate(lado * raio * 0.35, raio * 0.3);
          n.rotate(lado * 0.2 + Math.sin(tempo * 3) * 0.15 * lado);
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(lado * raio * 0.4, -raio * 0.1, lado * raio * 0.8, raio * 0.2, lado * raio * 0.7, raio * 0.6);
          n.bezierCurveTo(lado * raio * 0.4, raio * 0.5, lado * raio * 0.2, raio * 0.3, 0, raio * 0.15);
          n.closePath();
          n.fill();
          n.stroke();
          n.restore();
        });

        n.restore();
      }
      function Pl(n, u, r, l, o, f, $, _, v, Z, J) {
        if (J === "saci") return desenharSaci(n, u, r, l, o, f, $, _, v, Z);

        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018);
        (n.save(), n.scale(e, e));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          J === "petal")
        )
          (n.beginPath(),
            n.ellipse(0, 0, u * 0.56, u * 0.68, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = f),
            n.beginPath(),
            n.ellipse(0, -u * 0.52, u * 0.22, u * 0.18, 0, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = $),
            (n.lineWidth = Q),
            n.stroke());
        else if (J === "volt")
          (n.beginPath(),
            n.moveTo(0, -u * 0.78),
            n.lineTo(u * 0.22, -u * 0.12),
            n.lineTo(u * 0.52, -u * 0.12),
            n.lineTo(u * 0.08, u * 0.78),
            n.lineTo(-u * 0.12, u * 0.12),
            n.lineTo(-u * 0.44, u * 0.12),
            n.closePath(),
            n.fill(),
            n.stroke());
        else if (J === "magma")
          (n.beginPath(),
            n.ellipse(0, 0, u * 0.62, u * 0.62, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "#f97316"),
            n.beginPath(),
            n.ellipse(0, u * 0.18, u * 0.28, u * 0.18, 0, 0, Math.PI * 2),
            n.fill());
        else if (J === "shadow")
          (n.beginPath(),
            n.ellipse(0, 0, u * 0.52, u * 0.76, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "rgba(0,0,0,0.22)"),
            n.beginPath(),
            n.ellipse(0, u * 0.22, u * 0.32, u * 0.42, 0, 0, Math.PI * 2),
            n.fill());
        else if (J === "moss")
          (n.beginPath(),
            n.ellipse(0, 0, u * 0.58, u * 0.58, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "#4ade80"),
            n.beginPath(),
            n.ellipse(
              -u * 0.12,
              -u * 0.18,
              u * 0.24,
              u * 0.16,
              -0.2,
              0,
              Math.PI * 2,
            ),
            n.fill());
        else if (J === "reef")
          (n.beginPath(),
            n.ellipse(0, u * 0.12, u * 0.66, u * 0.56, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = f),
            n.beginPath(),
            n.ellipse(0, -u * 0.42, u * 0.18, u * 0.18, 0, 0, Math.PI * 2),
            n.fill());
        else if (J === "fairy")
          (n.beginPath(),
            n.ellipse(0, 0, u * 0.48, u * 0.62, 0, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "rgba(254,240,138,0.7)"),
            n.beginPath(),
            n.ellipse(
              u * 0.48,
              -u * 0.12,
              u * 0.22,
              u * 0.32,
              0.2,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.beginPath(),
            n.ellipse(
              -u * 0.48,
              -u * 0.12,
              u * 0.22,
              u * 0.32,
              -0.2,
              0,
              Math.PI * 2,
            ),
            n.fill());
        else
          (n.beginPath(),
            n.moveTo(0, -u * 0.68),
            n.lineTo(u * 0.52, u * 0.52),
            n.lineTo(-u * 0.52, u * 0.52),
            n.closePath(),
            n.fill(),
            n.stroke());
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.24,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          !Z)
        ) {
          let H = l * 2.5,
            K = Math.cos(H) * u * 0.72,
            V = Math.sin(H) * u * 0.42;
          ((n.fillStyle = f),
            n.beginPath(),
            n.arc(K, V, u * 0.09, 0, Math.PI * 2),
            n.fill());
        }
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.15,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.15,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function zJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        let flutua = Math.sin(tempo * 4) * u * 0.06;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // CAUDA (Folha aquática)
        n.save();
        let tailWag = Math.sin(tempo * 5) * 0.15;
        n.translate(0, u * 0.3);
        n.rotate(tailWag);

        n.fillStyle = f; // Cor secundária
        n.strokeStyle = $;
        n.lineWidth = strokeW;

        n.beginPath();
        n.moveTo(0, 0);
        n.quadraticCurveTo(u * 0.4, u * 0.3, 0, u * 0.8);
        n.quadraticCurveTo(-u * 0.4, u * 0.3, 0, 0);
        n.fill();
        n.stroke();

        // Veio central da folha na cauda
        n.beginPath();
        n.moveTo(0, 0);
        n.lineTo(0, u * 0.7);
        n.stroke();
        n.restore();

        // PATAS TRASEIRAS GORDINHAS
        n.fillStyle = o;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.25, u * 0.4, u * 0.1, u * 0.15, lado * 0.3, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO (Arredondado e molengo)
        let gradCorpo = n.createLinearGradient(0, -u * 0.2, 0, u * 0.5);
        gradCorpo.addColorStop(0, o); // Flora
        gradCorpo.addColorStop(1, f); // Maré

        n.fillStyle = gradCorpo;
        n.beginPath();
        n.ellipse(0, u * 0.2, u * 0.3, u * 0.35, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // PATAS DIANTEIRAS
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.28, u * 0.2, u * 0.08, u * 0.15, lado * -0.4, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // BRÂNQUIAS / PÉTALAS EXTERNAS DO AXOLOTE
        [-1, 1].forEach((lado) => {
          for (let i = -1; i <= 1; i++) {
            n.save();
            n.translate(lado * u * 0.35, -u * 0.1 + i * u * 0.15);
            let petalWave = Math.sin(tempo * 4 + i) * 0.1;
            n.rotate(lado * (0.5 - i * 0.3) + petalWave);

            n.fillStyle = f; // Cor Maré/Flora
            n.beginPath();
            n.ellipse(lado * u * 0.15, 0, u * 0.2, u * 0.08, 0, 0, Math.PI * 2);
            n.fill();
            n.stroke();

            // Detalhe interno da pétala
            n.strokeStyle = _;
            n.lineWidth = strokeW * 0.5;
            n.beginPath();
            n.moveTo(0, 0);
            n.lineTo(lado * u * 0.25, 0);
            n.stroke();

            n.restore();
          }
        });

        // CABEÇA (Larga e chata)
        n.fillStyle = o;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, -u * 0.15, u * 0.45, u * 0.35, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // ROSTO FOFINHO
        // Bochechas (Blush)
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.25, -u * 0.05, u * 0.08, u * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15, -u * 0.15, u * 0.07, 0, Math.PI * 2);
          n.fill();
        });

        // Brilho dos olhos (Pupilas)
        n.fillStyle = "#ffffff";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15 - u * 0.02, -u * 0.15 - u * 0.02, u * 0.025, 0, Math.PI * 2);
          n.fill();
        });

        // Sorriso largo de Axolote
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.1, -u * 0.02);
        n.quadraticCurveTo(0, u * 0.08, u * 0.1, -u * 0.02);
        n.stroke();

        // BOLHAS FLUTUANTES (Animação de água)
        if (!isFainted) {
          n.lineWidth = strokeW * 0.6;
          for (let i = 0; i < 3; i++) {
            let px = Math.cos(tempo * 2 + i * 2) * u * 0.8;
            let py = Math.sin(tempo * 3 + i * 2) * u * 0.6 - u * 0.3;

            n.fillStyle = "rgba(255, 255, 255, 0.6)";
            n.strokeStyle = $;
            n.beginPath();
            n.arc(px, py, u * 0.03 + (i % 2) * 0.02, 0, Math.PI * 2);
            n.fill();
            n.stroke();

            // Reflexo na bolha
            n.fillStyle = "#ffffff";
            n.beginPath();
            n.arc(px - u * 0.01, py - u * 0.01, u * 0.015, 0, Math.PI * 2);
            n.fill();
          }
        }

        n.restore();
      }
      function iJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        // Movimento de nado flutuante
        let flutua = Math.sin(tempo * 4) * u * 0.05;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // CORPO (Formato curvo de enguia)
        let gradCorpo = n.createLinearGradient(-u * 0.5, -u * 0.2, u * 0.5, u * 0.2);
        gradCorpo.addColorStop(0, f); // Faísca (Amarelo)
        gradCorpo.addColorStop(1, o); // Maré (Azul)

        n.fillStyle = gradCorpo;
        n.strokeStyle = $;
        n.lineWidth = strokeW;

        n.beginPath();
        // Ponta da cauda
        n.moveTo(u * 0.5, u * 0.4);
        // Curva das costas
        n.bezierCurveTo(u * 0.6, u * 0.1, u * 0.2, -u * 0.3, 0, -u * 0.3);
        // Topo da cabeça
        n.bezierCurveTo(-u * 0.3, -u * 0.3, -u * 0.5, -u * 0.1, -u * 0.5, 0.1 * u);
        // Queixo
        n.bezierCurveTo(-u * 0.5, u * 0.3, -u * 0.3, u * 0.35, -u * 0.1, u * 0.2);
        // Curva da barriga até a cauda
        n.bezierCurveTo(u * 0.1, u * 0.05, u * 0.3, u * 0.4, u * 0.5, u * 0.4);
        n.fill();
        n.stroke();

        // BARBATANA DORSAL (Ziguezague elétrico nas costas)
        n.fillStyle = f; // Amarelo
        n.beginPath();
        n.moveTo(-u * 0.2, -u * 0.28);
        n.lineTo(-u * 0.1, -u * 0.45);
        n.lineTo(0, -u * 0.3);
        n.lineTo(u * 0.1, -u * 0.4);
        n.lineTo(u * 0.2, -u * 0.25);
        n.lineTo(u * 0.3, -u * 0.3);
        n.lineTo(u * 0.35, -u * 0.1);
        n.fill();
        n.stroke();

        // BARBATANAS PEITORAIS (Pequenas e fofas)
        n.fillStyle = o; // Azul
        n.beginPath();
        n.ellipse(-u * 0.15, u * 0.15, u * 0.1, u * 0.06, Math.PI / 4, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // ROSTO FOFINHO
        // Bochecha (Blush)
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        n.beginPath();
        n.ellipse(-u * 0.35, u * 0.1, u * 0.06, u * 0.04, 0, 0, Math.PI * 2);
        n.fill();

        // Olho
        n.fillStyle = "#1e293b";
        n.beginPath();
        n.arc(-u * 0.3, 0, u * 0.06, 0, Math.PI * 2);
        n.fill();

        // Pupila (Brilho)
        n.fillStyle = "#ffffff";
        n.beginPath();
        n.arc(-u * 0.3 - u * 0.015, -u * 0.015, u * 0.02, 0, Math.PI * 2);
        n.fill();

        // Sorriso
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.45, u * 0.15);
        n.quadraticCurveTo(-u * 0.4, u * 0.2, -u * 0.35, u * 0.15);
        n.stroke();

        // BIGODES ELÉTRICOS (Antenas perto da boca)
        n.strokeStyle = f; // Amarelo
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.45, u * 0.1);
        let whiskerTwitch = Math.sin(tempo * 10) * u * 0.02;
        n.quadraticCurveTo(-u * 0.55, u * 0.05 + whiskerTwitch, -u * 0.6, u * 0.15);
        n.stroke();

        // FAÍSCAS E BOLHAS FLUTUANTES
        if (!isFainted) {
          n.lineWidth = strokeW * 0.6;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 3 + i * 1.5) * u * 0.6;
            let py = Math.sin(tempo * 4 + i * 2) * u * 0.5;

            if (i % 2 === 0) {
              // Bolha de água
              n.fillStyle = "rgba(255, 255, 255, 0.6)";
              n.strokeStyle = $;
              n.beginPath();
              n.arc(px, py, u * 0.03, 0, Math.PI * 2);
              n.fill();
              n.stroke();
            } else {
              // Faísca elétrica
              n.fillStyle = f; // Amarelo
              n.beginPath();
              n.moveTo(px, py - u * 0.03);
              n.lineTo(px + u * 0.02, py);
              n.lineTo(px, py + u * 0.03);
              n.lineTo(px - u * 0.02, py);
              n.fill();
            }
          }
        }

        n.restore();
      }
      function GJ(n, u, r, l, o, f, $, _, v) {
        let isFainted = arguments[9];
        let strokeW = v;
        let esc = 1 + Math.sin(l * 4.2) * 0.02;
        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        let pulso = 0.6 + Math.abs(Math.sin(l * 3.5)) * 0.4;
        let flutua = Math.sin(l * 6) * u * 0.05;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // PATAS DE TRÁS (Base Pedregosa)
        n.fillStyle = $;
        n.strokeStyle = $;
        n.lineWidth = strokeW;

        let lados = [-1, 1];
        lados.forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.3, u * 0.4, u * 0.15, u * 0.25, lado * 0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO - CARAPAÇA ROCHOSA
        let gradCorpo = n.createLinearGradient(0, -u * 0.5, 0, u * 0.5);
        gradCorpo.addColorStop(0, f);
        gradCorpo.addColorStop(1, $);

        n.fillStyle = gradCorpo;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-u * 0.4, -u * 0.1);
        n.bezierCurveTo(-u * 0.6, u * 0.2, -u * 0.4, u * 0.6, 0, u * 0.65);
        n.bezierCurveTo(u * 0.4, u * 0.6, u * 0.6, u * 0.2, u * 0.4, -u * 0.1);
        n.bezierCurveTo(u * 0.2, -u * 0.3, -u * 0.2, -u * 0.3, -u * 0.4, -u * 0.1);
        n.closePath();
        n.fill();
        n.stroke();

        // NÚCLEO E VEIAS DE MAGMA PULSANTE
        n.strokeStyle = o;
        n.lineWidth = strokeW * 1.8;
        n.globalAlpha = pulso;

        n.beginPath();
        n.moveTo(0, u * 0.1);
        n.lineTo(-u * 0.15, u * 0.25);
        n.lineTo(-u * 0.05, u * 0.4);
        n.stroke();

        n.beginPath();
        n.moveTo(0, u * 0.1);
        n.lineTo(u * 0.2, u * 0.2);
        n.lineTo(u * 0.1, u * 0.45);
        n.stroke();

        let gradMagma = n.createRadialGradient(0, u * 0.1, 0, 0, u * 0.1, u * 0.3);
        gradMagma.addColorStop(0, _);
        gradMagma.addColorStop(0.5, o);
        gradMagma.addColorStop(1, "rgba(0,0,0,0)");
        n.fillStyle = gradMagma;
        n.beginPath();
        n.arc(0, u * 0.1, u * 0.3, 0, Math.PI * 2);
        n.fill();

        n.globalAlpha = 1;

        // CABEÇA DA CRIATURA
        let gradCabeca = n.createLinearGradient(0, -u * 0.6, 0, -u * 0.2);
        gradCabeca.addColorStop(0, f);
        gradCabeca.addColorStop(1, $);

        n.fillStyle = gradCabeca;
        n.beginPath();
        n.ellipse(0, -u * 0.25, u * 0.3, u * 0.25, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // CHIFRES IMPONENTES
        n.fillStyle = $;
        lados.forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * u * 0.15, -u * 0.35);
          n.quadraticCurveTo(lado * u * 0.5, -u * 0.7, lado * u * 0.3, -u * 0.85);
          n.quadraticCurveTo(lado * u * 0.5, -u * 0.4, lado * u * 0.25, -u * 0.25);
          n.closePath();
          n.fill();
          n.stroke();

          n.strokeStyle = o;
          n.lineWidth = strokeW * 0.8;
          n.beginPath();
          n.moveTo(lado * u * 0.2, -u * 0.4);
          n.lineTo(lado * u * 0.25, -u * 0.6);
          n.stroke();
        });

        // OLHOS (Agressivos)
        n.fillStyle = _;
        lados.forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * u * 0.1, -u * 0.2);
          n.lineTo(lado * u * 0.25, -u * 0.28);
          n.lineTo(lado * u * 0.2, -u * 0.15);
          n.closePath();
          n.fill();

          n.fillStyle = o;
          n.beginPath();
          n.arc(lado * u * 0.18, -u * 0.22, u * 0.03, 0, Math.PI * 2);
          n.fill();
          n.fillStyle = _;
        });

        // MANDÍBULA
        n.fillStyle = $;
        n.beginPath();
        n.moveTo(-u * 0.15, -u * 0.05);
        n.quadraticCurveTo(0, Math.sin(l * 5) * u * 0.05, u * 0.15, -u * 0.05);
        n.lineTo(0, -u * 0.15);
        n.closePath();
        n.fill();

        // PATAS DIANTEIRAS E GARRAS
        n.fillStyle = f;
        lados.forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.3, u * 0.55, u * 0.18, u * 0.2, 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();

          n.fillStyle = o;
          for (let i = -1; i <= 1; i++) {
            n.beginPath();
            n.moveTo(lado * u * 0.3 + i * u * 0.08, u * 0.7);
            n.lineTo(lado * u * 0.3 + i * u * 0.1, u * 0.8);
            n.lineTo(lado * u * 0.3 + i * u * 0.04, u * 0.72);
            n.closePath();
            n.fill();
          }
        });

        // BRASAS FLUTUANTES (Partículas Animadas)
        if (!isFainted) {
          n.fillStyle = _;
          for (let i = 0; i < 4; i++) {
            let px = Math.sin(l * 3 + i * 2) * u * 0.6;
            let py = u * 0.5 - ((l * 30 + i * 20) % 100) * 0.01 * u;
            let alpha = 1 - Math.abs(py) / u;

            if (alpha > 0) {
              n.globalAlpha = alpha * 0.8;
              n.beginPath();
              n.arc(px, py, u * 0.03 + (i % 2) * 0.02, 0, Math.PI * 2);
              n.fill();
            }
          }
          n.globalAlpha = 1;
        }

        n.restore();
      }
      function TJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        // Uma gárgula de pedra é pesada, a flutuação é bem sutil
        let flutua = Math.sin(tempo * 4) * u * 0.04;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // AURA DE SOMBRA NA BASE (Nuvem escura onde ela se senta)
        n.fillStyle = f; // Cor Sombra
        n.globalAlpha = 0.6 + Math.sin(tempo * 5) * 0.2;
        n.beginPath();
        n.ellipse(0, u * 0.55, u * 0.5, u * 0.15, 0, 0, Math.PI * 2);
        n.fill();
        n.globalAlpha = 1;

        // ASAS DE GÁRGULA (Feitas de sombra/magia)
        n.fillStyle = f;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          let wingFlap = Math.sin(tempo * 6) * 0.15;
          n.translate(lado * u * 0.2, -u * 0.1);
          n.rotate(lado * (0.2 + wingFlap));

          n.beginPath();
          n.moveTo(0, 0);
          n.lineTo(lado * u * 0.5, -u * 0.4);
          n.lineTo(lado * u * 0.6, -u * 0.1);
          n.lineTo(lado * u * 0.3, u * 0.1);
          n.closePath();
          n.fill();
          n.stroke();

          // Detalhe interno da asa (dobra do morcego)
          n.beginPath();
          n.moveTo(lado * u * 0.5, -u * 0.4);
          n.lineTo(lado * u * 0.3, 0);
          n.stroke();

          n.restore();
        });

        // CAUDA PONTIAGUDA DE PEDRA
        n.fillStyle = o; // Cor Pedra
        n.strokeStyle = $;
        n.lineWidth = strokeW;

        n.beginPath();
        n.moveTo(0, u * 0.3);
        n.quadraticCurveTo(u * 0.4, u * 0.4, u * 0.5, u * 0.6);
        n.quadraticCurveTo(u * 0.3, u * 0.5, 0, u * 0.4);
        n.fill();
        n.stroke();

        // Ponta da cauda (Triângulo de Sombra)
        n.fillStyle = f;
        n.beginPath();
        n.moveTo(u * 0.45, u * 0.55);
        n.lineTo(u * 0.65, u * 0.5);
        n.lineTo(u * 0.55, u * 0.7);
        n.closePath();
        n.fill();
        n.stroke();

        // PATAS TRASEIRAS (Robustas e pesadas)
        n.fillStyle = o;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.3, u * 0.45, u * 0.15, u * 0.12, lado * 0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO (Pedra, redondinho mas sólido)
        let gradCorpo = n.createLinearGradient(0, -u * 0.2, 0, u * 0.5);
        gradCorpo.addColorStop(0, _); // Tom claro da pedra
        gradCorpo.addColorStop(1, o); // Tom base da pedra

        n.fillStyle = gradCorpo;
        n.beginPath();
        n.moveTo(-u * 0.35, 0);
        n.quadraticCurveTo(0, -u * 0.2, u * 0.35, 0);
        n.quadraticCurveTo(u * 0.4, u * 0.5, 0, u * 0.5);
        n.quadraticCurveTo(-u * 0.4, u * 0.5, -u * 0.35, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // Textura de estátua (Rachaduras fofas no peito)
        n.beginPath();
        n.moveTo(-u * 0.15, u * 0.1);
        n.lineTo(-u * 0.05, u * 0.2);
        n.lineTo(-u * 0.1, u * 0.3);
        n.stroke();

        // PATAS DIANTEIRAS
        n.fillStyle = o;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.18, u * 0.45, u * 0.1, u * 0.15, 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CABEÇA (Formato de bloco com cantos arredondados)
        n.fillStyle = o;
        n.beginPath();
        n.moveTo(-u * 0.25, -u * 0.45);
        n.lineTo(u * 0.25, -u * 0.45);
        n.quadraticCurveTo(u * 0.4, -u * 0.45, u * 0.4, -u * 0.3);
        n.lineTo(u * 0.4, -u * 0.05);
        n.quadraticCurveTo(u * 0.4, u * 0.1, u * 0.25, u * 0.1);
        n.lineTo(-u * 0.25, u * 0.1);
        n.quadraticCurveTo(-u * 0.4, u * 0.1, -u * 0.4, -u * 0.05);
        n.lineTo(-u * 0.4, -u * 0.3);
        n.quadraticCurveTo(-u * 0.4, -u * 0.45, -u * 0.25, -u * 0.45);
        n.closePath();
        n.fill();
        n.stroke();

        // CHIFRINHOS DE GÁRGULA
        n.fillStyle = f;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * u * 0.2, -u * 0.45);
          n.lineTo(lado * u * 0.35, -u * 0.65);
          n.lineTo(lado * u * 0.35, -u * 0.35);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // ROSTO (Fofo mas ligeiramente travesso)
        // Blush
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.25, -u * 0.1, u * 0.08, u * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15, -u * 0.2, u * 0.08, 0, Math.PI * 2);
          n.fill();
        });

        // Pupilas
        n.fillStyle = "#ffffff";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15 - u * 0.02, -u * 0.2 - u * 0.02, u * 0.03, 0, Math.PI * 2);
          n.fill();
        });

        // Sorriso e Dentinho
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.06, -u * 0.05);
        n.quadraticCurveTo(0, 0, u * 0.06, -u * 0.05);
        n.stroke();

        // Dentinho vampiresco fofo
        n.fillStyle = "#ffffff";
        n.beginPath();
        n.moveTo(-u * 0.03, -u * 0.02);
        n.lineTo(0, u * 0.04);
        n.lineTo(u * 0.03, -u * 0.02);
        n.closePath();
        n.fill();
        n.stroke();

        // PARTÍCULAS (Poeira de Obsidiana quadrada)
        if (!isFainted) {
          n.fillStyle = f;
          for (let i = 0; i < 3; i++) {
            let px = Math.cos(tempo * 3 + i * 2) * u * 0.8;
            let py = Math.sin(tempo * 4 + i * 1.5) * u * 0.6 - u * 0.1;

            n.save();
            n.translate(px, py);
            n.rotate(tempo * 2 + i);
            n.beginPath();
            n.rect(-u * 0.03, -u * 0.03, u * 0.06, u * 0.06);
            n.fill();
            n.restore();
          }
        }

        n.restore();
      }
      function kJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        let flutua = Math.sin(tempo * 5) * u * 0.08;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // ASAS (Estilo morcego fofinho, simples e com contornos grossos)
        n.fillStyle = f;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          let wingFlap = Math.sin(tempo * 6) * 0.15;
          n.rotate(lado * wingFlap);
          n.beginPath();
          n.moveTo(0, 0);
          n.quadraticCurveTo(lado * u * 0.6, -u * 0.5, lado * u * 0.9, -u * 0.3);
          n.quadraticCurveTo(lado * u * 0.7, -u * 0.1, lado * u * 0.9, u * 0.1);
          n.quadraticCurveTo(lado * u * 0.5, u * 0.1, lado * u * 0.4, u * 0.4);
          n.quadraticCurveTo(lado * u * 0.2, u * 0.2, 0, u * 0.1);
          n.fill();
          n.stroke();

          // Linhas internas da asa (Traços simples)
          n.beginPath();
          n.moveTo(lado * u * 0.2, -u * 0.1);
          n.lineTo(lado * u * 0.75, -u * 0.25);
          n.moveTo(lado * u * 0.2, 0);
          n.lineTo(lado * u * 0.7, u * 0.05);
          n.stroke();
          n.restore();
        });

        // PEZINHOS GORDINHOS (Apoiados embaixo do corpo)
        n.fillStyle = o;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.22, u * 0.65, u * 0.12, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO (Formato de Gota/Chama arredondada e fofa)
        let gradCorpo = n.createLinearGradient(0, -u * 0.6, 0, u * 0.6);
        gradCorpo.addColorStop(0, o); // Laranja (Brasa)
        gradCorpo.addColorStop(1, f); // Roxo (Sombra)

        n.fillStyle = gradCorpo;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, -u * 0.7);
        n.quadraticCurveTo(u * 0.6, -u * 0.1, u * 0.5, u * 0.4);
        n.quadraticCurveTo(u * 0.3, u * 0.7, 0, u * 0.7);
        n.quadraticCurveTo(-u * 0.3, u * 0.7, -u * 0.5, u * 0.4);
        n.quadraticCurveTo(-u * 0.6, -u * 0.1, 0, -u * 0.7);
        n.fill();
        n.stroke();

        // ROSTO FOFINHO
        // Bochechas (Blush)
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.25, u * 0.25, u * 0.09, u * 0.06, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos redondos escuros
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15, u * 0.15, u * 0.09, 0, Math.PI * 2);
          n.fill();
        });

        // Brilho dos olhos (Pupila fofa branca)
        n.fillStyle = "#ffffff";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.15 - u * 0.02, u * 0.15 - u * 0.03, u * 0.035, 0, Math.PI * 2);
          n.fill();
        });

        // Sorrisinho pequeno e adorável
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.06, u * 0.28);
        n.quadraticCurveTo(0, u * 0.35, u * 0.06, u * 0.28);
        n.stroke();

        // ORBS FLUTUANTES (Bolinhas mágicas simples e sólidas)
        if (!isFainted) {
          n.lineWidth = strokeW * 0.7;
          for (let i = 0; i < 3; i++) {
            let px = Math.cos(tempo * 2 + i * 2.1) * u * 0.7;
            let py = Math.sin(tempo * 2.5 + i * 1.7) * u * 0.6 - u * 0.2;

            n.fillStyle = (i % 2 === 0) ? o : f;
            n.strokeStyle = $;
            n.beginPath();
            n.arc(px, py, u * 0.12, 0, Math.PI * 2);
            n.fill();
            n.stroke();

            // Reflexo de luz na bolinha
            n.fillStyle = "rgba(255, 255, 255, 0.4)";
            n.beginPath();
            n.arc(px - u * 0.03, py - u * 0.03, u * 0.04, 0, Math.PI * 2);
            n.fill();
          }
        }

        n.restore();
      }
      function IJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        // Tartarugas são pesadas, a flutuação é bem suave
        let flutua = Math.sin(tempo * 4) * u * 0.04;

        n.save();
        n.translate(0, flutua + u * 0.1);
        n.scale(1, esc);

        // PATAS GORDINHAS (Pedra)
        n.fillStyle = f;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          // Patas traseiras
          n.beginPath();
          n.ellipse(lado * u * 0.35, u * 0.25, u * 0.12, u * 0.15, lado * 0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
          // Patas dianteiras
          n.beginPath();
          n.ellipse(lado * u * 0.22, u * 0.35, u * 0.12, u * 0.15, lado * -0.1, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CAUDINHA DE PEDRA
        n.beginPath();
        n.moveTo(-u * 0.1, u * 0.3);
        n.lineTo(0, u * 0.5);
        n.lineTo(u * 0.1, u * 0.3);
        n.fill();
        n.stroke();

        // CASCO (Rocha redonda coberta de musgo)
        let gradCasco = n.createLinearGradient(0, -u * 0.5, 0, u * 0.3);
        gradCasco.addColorStop(0, o); // Flora (Verde musgo no topo)
        gradCasco.addColorStop(1, f); // Pedra (Marrom/Cinza na base)

        n.fillStyle = gradCasco;
        n.beginPath();
        n.arc(0, -u * 0.05, u * 0.45, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // DETALHES DO CASCO (Padrão hexagonal de tartaruga)
        n.strokeStyle = $;
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.15, -u * 0.2);
        n.lineTo(u * 0.15, -u * 0.2);
        n.lineTo(u * 0.25, 0);
        n.lineTo(u * 0.15, u * 0.2);
        n.lineTo(-u * 0.15, u * 0.2);
        n.lineTo(-u * 0.25, 0);
        n.closePath();
        n.stroke();

        // Linhas a ligar o hexágono à borda do casco
        let linhasCasco = [
          [-0.15, -0.2, -0.3, -0.35],
          [0.15, -0.2, 0.3, -0.35],
          [0.25, 0, 0.45, 0],
          [0.15, 0.2, 0.3, 0.35],
          [-0.15, 0.2, -0.3, 0.35],
          [-0.25, 0, -0.45, 0]
        ];
        linhasCasco.forEach(pt => {
          n.beginPath();
          n.moveTo(u * pt[0], u * pt[1]);
          n.lineTo(u * pt[2], u * pt[3]);
          n.stroke();
        });

        // BROTO NAS COSTAS (A semente que vai evoluir)
        n.fillStyle = o;
        n.beginPath();
        n.moveTo(0, -u * 0.5);
        n.quadraticCurveTo(u * 0.2, -u * 0.65, 0, -u * 0.85);
        n.quadraticCurveTo(-u * 0.2, -u * 0.65, 0, -u * 0.5);
        n.fill();
        n.stroke();

        // Risco no meio do broto (detalhe da folha)
        n.strokeStyle = _;
        n.lineWidth = strokeW * 0.5;
        n.beginPath();
        n.moveTo(0, -u * 0.5);
        n.lineTo(0, -u * 0.8);
        n.stroke();

        // CABEÇA DA TARTARUGA
        n.fillStyle = f;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, u * 0.22, u * 0.28, u * 0.22, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // ROSTO FOFINHO E TRANQUILO
        // Bochechas
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.18, u * 0.28, u * 0.07, u * 0.04, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos (Grandes e amigáveis)
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12, u * 0.18, u * 0.07, 0, Math.PI * 2);
          n.fill();
        });

        // Pupilas (Brilho)
        n.fillStyle = "#ffffff";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12 - u * 0.02, u * 0.18 - u * 0.02, u * 0.025, 0, Math.PI * 2);
          n.fill();
        });

        // Sorriso (Tartaruguinha feliz)
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.06, u * 0.32);
        n.quadraticCurveTo(0, u * 0.38, u * 0.06, u * 0.32);
        n.stroke();

        // PARTÍCULAS (Pequenas folhas/musgo a flutuar)
        if (!isFainted) {
          n.fillStyle = o;
          for (let i = 0; i < 3; i++) {
            let px = Math.cos(tempo * 2 + i * 2) * u * 0.7;
            let py = Math.sin(tempo * 3 + i * 1.5) * u * 0.5 - u * 0.2;

            n.save();
            n.translate(px, py);
            n.rotate(tempo * 3 + i);
            n.beginPath();
            n.ellipse(0, 0, u * 0.04, u * 0.02, 0, 0, Math.PI * 2);
            n.fill();
            n.restore();
          }
        }

        n.restore();
      }
      function SJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        // Flutuação mística (pesada mas fluida)
        let flutua = Math.sin(tempo * 3) * u * 0.08;
        let ringTilt = Math.sin(tempo * 1.5) * 0.15;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // ANEL DE ÁGUA ORBITAL (Parte de trás)
        n.save();
        n.translate(0, u * 0.1);
        n.rotate(ringTilt);

        n.strokeStyle = o; // Azul (Maré)
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.ellipse(0, 0, u * 0.65, u * 0.25, 0, Math.PI, Math.PI * 2);
        n.stroke();
        n.restore();

        // COROA DE CORAL / ANÊMONAS NO TOPO DA PEDRA
        n.fillStyle = _; // Cor de destaque clara
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        for (let i = -1; i <= 1; i++) {
          n.beginPath();
          let sway = Math.sin(tempo * 4 + i) * u * 0.1;
          n.moveTo(i * u * 0.15, -u * 0.35);
          n.quadraticCurveTo(i * u * 0.3, -u * 0.5, i * u * 0.25 + sway, -u * 0.7);
          n.quadraticCurveTo(i * u * 0.1, -u * 0.5, i * u * 0.05, -u * 0.4);
          n.fill();
          n.stroke();
        }

        // CORPO (Monólito de Pedra Assimétrico)
        let gradCorpo = n.createLinearGradient(0, -u * 0.5, 0, u * 0.5);
        gradCorpo.addColorStop(0, f); // Pedra / Castanho
        gradCorpo.addColorStop(1, $); // Sombra escurecida

        n.fillStyle = gradCorpo;
        n.beginPath();
        n.moveTo(0, -u * 0.45);
        n.lineTo(u * 0.35, -u * 0.25);
        n.lineTo(u * 0.4, u * 0.15);
        n.lineTo(u * 0.15, u * 0.45);
        n.lineTo(-u * 0.25, u * 0.4);
        n.lineTo(-u * 0.45, u * 0.1);
        n.lineTo(-u * 0.35, -u * 0.25);
        n.closePath();
        n.fill();
        n.stroke();

        // DETALHES DA PEDRA (Rachas místicas ancestrais)
        n.strokeStyle = $;
        n.lineWidth = strokeW * 0.7;
        n.beginPath();
        n.moveTo(-u * 0.2, -u * 0.1);
        n.lineTo(0, 0);
        n.lineTo(u * 0.2, -u * 0.05);
        n.moveTo(0, 0);
        n.lineTo(-u * 0.05, u * 0.2);
        n.stroke();

        // ROSTO (Pacífico e misterioso de Golem)
        n.fillStyle = "rgba(255, 100, 150, 0.4)"; // Blush
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.2, u * 0.15, u * 0.08, u * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        n.fillStyle = "#1e293b"; // Olhos
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12, u * 0.05, u * 0.07, 0, Math.PI * 2);
          n.fill();
        });

        n.fillStyle = "#ffffff"; // Brilho nos olhos
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12 - u * 0.02, u * 0.05 - u * 0.02, u * 0.025, 0, Math.PI * 2);
          n.fill();
        });

        // Boquinha pequenina neutra
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.03, u * 0.22);
        n.quadraticCurveTo(0, u * 0.25, u * 0.03, u * 0.22);
        n.stroke();

        // ANEL DE ÁGUA ORBITAL (Parte da frente)
        n.save();
        n.translate(0, u * 0.1);
        n.rotate(ringTilt);

        n.strokeStyle = o; // Azul (Maré)
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.ellipse(0, 0, u * 0.65, u * 0.25, 0, 0, Math.PI);
        n.stroke();

        // Reflexo de brilho na água do anel
        n.strokeStyle = "rgba(255, 255, 255, 0.6)";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.ellipse(0, 0, u * 0.65, u * 0.25, 0, 0.3, Math.PI - 0.3);
        n.stroke();
        n.restore();

        // BOLHAS ORBITAIS DE ÁGUA
        if (!isFainted) {
          n.fillStyle = o;
          for (let i = 0; i < 3; i++) {
            // Calcula a posição real de órbita matemática 3D simulada
            let angle = tempo * 3 + i * ((Math.PI * 2) / 3);
            let px = Math.cos(angle) * u * 0.65;
            let py = Math.sin(angle) * u * 0.25;

            // Aplica a mesma inclinação do anel principal para as bolhas o acompanharem
            let rotPx = px * Math.cos(ringTilt) - py * Math.sin(ringTilt);
            let rotPy = px * Math.sin(ringTilt) + py * Math.cos(ringTilt);
            rotPy += u * 0.1; // Offset Y

            n.strokeStyle = $;
            n.lineWidth = strokeW * 0.8;
            n.beginPath();
            n.arc(rotPx, rotPy, u * 0.08, 0, Math.PI * 2);
            n.fill();
            n.stroke();

            // Brilho da bolha
            n.fillStyle = "#ffffff";
            n.beginPath();
            n.arc(rotPx - u * 0.02, rotPy - u * 0.02, u * 0.02, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = o; // Restaura cor para a próxima bolha
          }
        }

        n.restore();
      }
      function jJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        let flutua = Math.sin(tempo * 6) * u * 0.08;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // ASAS (Fada/Inseto - Bate rapidamente)
        n.fillStyle = f; // Faísca (Amarelo)
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          let wingFlap = Math.sin(tempo * 15) * 0.2;
          n.rotate(lado * (0.3 + wingFlap));

          // Asa superior
          n.beginPath();
          n.ellipse(lado * u * 0.4, -u * 0.2, u * 0.35, u * 0.15, lado * -0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();

          // Asa inferior
          n.beginPath();
          n.ellipse(lado * u * 0.3, 0, u * 0.2, u * 0.1, lado * -0.5, 0, Math.PI * 2);
          n.fill();
          n.stroke();

          // Detalhes internos das asas (veias mágicas)
          n.strokeStyle = _; // Cor clara
          n.lineWidth = strokeW * 0.6;
          n.beginPath();
          n.moveTo(lado * u * 0.1, -u * 0.15);
          n.lineTo(lado * u * 0.6, -u * 0.2);
          n.stroke();

          n.restore();
        });

        // ANTENINHAS ELÉTRICAS
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * u * 0.1, -u * 0.4);
          n.quadraticCurveTo(lado * u * 0.3, -u * 0.6, lado * u * 0.2, -u * 0.8);
          n.stroke();

          // Pontinha brilhante da antena
          n.fillStyle = f;
          n.beginPath();
          n.arc(lado * u * 0.2, -u * 0.8, u * 0.08, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO (Formato de Gota/Semente fofa)
        let gradCorpo = n.createLinearGradient(0, -u * 0.5, 0, u * 0.5);
        gradCorpo.addColorStop(0, o); // Flora (Verde)
        gradCorpo.addColorStop(1, f); // Faísca (Amarelo)

        n.fillStyle = gradCorpo;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, -u * 0.55);
        n.bezierCurveTo(u * 0.5, -u * 0.1, u * 0.4, u * 0.5, 0, u * 0.5);
        n.bezierCurveTo(-u * 0.4, u * 0.5, -u * 0.5, -u * 0.1, 0, -u * 0.55);
        n.closePath();
        n.fill();
        n.stroke();

        // BRACINHOS FOFOS
        n.fillStyle = o;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.3, u * 0.15, u * 0.08, u * 0.12, lado * -0.3, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // ROSTO FOFINHO
        // Bochechas (Blush)
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.2, u * 0.05, u * 0.08, u * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        // Olhos escuros
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12, -u * 0.05, u * 0.08, 0, Math.PI * 2);
          n.fill();
        });

        // Brilho dos olhos (Pupilas)
        n.fillStyle = "#ffffff";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.arc(lado * u * 0.12 - u * 0.02, -u * 0.05 - u * 0.02, u * 0.03, 0, Math.PI * 2);
          n.fill();
        });

        // Sorriso adorável
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.05, u * 0.1);
        n.quadraticCurveTo(0, u * 0.18, u * 0.05, u * 0.1);
        n.stroke();

        // PÓ LUMINESCENTE (Fairy/Spark dust)
        if (!isFainted) {
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 3 + i * 2) * u * 0.8;
            let py = Math.sin(tempo * 2 + i * 1.5) * u * 0.6 - u * 0.1;

            n.fillStyle = (i % 2 === 0) ? f : _; // Alterna entre o amarelo e a cor clara
            n.beginPath();
            n.arc(px, py, u * 0.04, 0, Math.PI * 2);
            n.fill();
          }
        }

        n.restore();
      }
      function yJ(n, u, r, l, o, f, $, _, v, Z) {
        let isFainted = Z;
        let strokeW = v;
        let tempo = l;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";

        if (isFainted) {
          n.globalAlpha = 0.55;
        }

        let flutua = Math.sin(tempo * 5) * u * 0.06;

        n.save();
        n.translate(0, flutua);
        n.scale(1, esc);

        // CAUDA FELPUDA DE RAPOSA (Em formato de raio)
        n.save();
        let tailWag = Math.sin(tempo * 6) * 0.15;
        n.translate(-u * 0.1, u * 0.2);
        n.rotate(-0.3 + tailWag);

        n.fillStyle = f; // Sombra (Roxo Escuro)
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, 0);
        n.bezierCurveTo(-u * 0.6, u * 0.2, -u * 0.9, -u * 0.4, -u * 0.4, -u * 0.8);
        n.lineTo(-u * 0.5, -u * 0.5); // Ziguezague elétrico
        n.lineTo(-u * 0.2, -u * 0.6);
        n.bezierCurveTo(u * 0.1, -u * 0.4, u * 0.1, -u * 0.1, 0, 0);
        n.fill();
        n.stroke();

        // Ponta da cauda (Faísca)
        n.fillStyle = o;
        n.beginPath();
        n.moveTo(-u * 0.4, -u * 0.8);
        n.lineTo(-u * 0.5, -u * 0.5);
        n.lineTo(-u * 0.2, -u * 0.6);
        n.bezierCurveTo(-u * 0.1, -u * 0.5, -u * 0.2, -u * 0.7, -u * 0.4, -u * 0.8);
        n.fill();
        n.restore();

        // PATAS TRASEIRAS
        n.fillStyle = f;
        n.strokeStyle = $;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.22, u * 0.45, u * 0.14, u * 0.18, lado * 0.4, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO (Sentado)
        let gradCorpo = n.createLinearGradient(0, -u * 0.2, 0, u * 0.6);
        gradCorpo.addColorStop(0, f);
        gradCorpo.addColorStop(1, $);

        n.fillStyle = gradCorpo;
        n.beginPath();
        n.ellipse(0, u * 0.25, u * 0.28, u * 0.35, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // PEITORAL ELÉTRICO (Pelo amarelo em formato de estrela/raio)
        n.fillStyle = o;
        n.beginPath();
        n.moveTo(0, u * 0.05);
        n.lineTo(u * 0.15, u * 0.15);
        n.lineTo(u * 0.05, u * 0.2);
        n.lineTo(u * 0.1, u * 0.35);
        n.lineTo(0, u * 0.25);
        n.lineTo(-u * 0.1, u * 0.35);
        n.lineTo(-u * 0.05, u * 0.2);
        n.lineTo(-u * 0.15, u * 0.15);
        n.closePath();
        n.fill();
        n.stroke();

        // PATAS DIANTEIRAS
        n.fillStyle = f;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.12, u * 0.5, u * 0.08, u * 0.16, 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // ORELHAS GRANDES DE RAPOSA
        [-1, 1].forEach((lado) => {
          n.save();
          n.translate(lado * u * 0.15, -u * 0.2);
          n.rotate(lado * 0.3 + Math.sin(tempo * 3) * 0.05 * lado);

          n.fillStyle = f;
          n.beginPath();
          n.moveTo(0, 0);
          n.lineTo(lado * u * 0.1, -u * 0.45);
          n.lineTo(lado * u * 0.3, -u * 0.1);
          n.closePath();
          n.fill();
          n.stroke();

          // Interior brilhante da orelha
          n.fillStyle = o;
          n.beginPath();
          n.moveTo(lado * u * 0.08, -u * 0.08);
          n.lineTo(lado * u * 0.12, -u * 0.35);
          n.lineTo(lado * u * 0.22, -u * 0.1);
          n.closePath();
          n.fill();
          n.restore();
        });

        // PELUGEM DAS BOCHECHAS (Espetada como estática)
        n.fillStyle = f;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * u * 0.25, -u * 0.15);
          n.lineTo(lado * u * 0.5, -u * 0.1);
          n.lineTo(lado * u * 0.35, -u * 0.02);
          n.lineTo(lado * u * 0.55, u * 0.08);
          n.lineTo(lado * u * 0.25, u * 0.1);
          n.fill();
          n.stroke();
        });

        // CABEÇA DA RAPOSA
        n.beginPath();
        n.moveTo(0, u * 0.15);
        n.bezierCurveTo(-u * 0.35, u * 0.15, -u * 0.45, -u * 0.15, -u * 0.25, -u * 0.3);
        n.bezierCurveTo(-u * 0.1, -u * 0.4, u * 0.1, -u * 0.4, u * 0.25, -u * 0.3);
        n.bezierCurveTo(u * 0.45, -u * 0.15, u * 0.35, u * 0.15, 0, u * 0.15);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS (Astutos e amendoados)
        n.fillStyle = "#1e293b";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * u * 0.16, -u * 0.08, u * 0.07, u * 0.09, lado * 0.2, 0, Math.PI * 2);
          n.fill();

          // Pupila
          n.fillStyle = "#ffffff";
          n.beginPath();
          n.arc(lado * u * 0.14, -u * 0.11, u * 0.025, 0, Math.PI * 2);
          n.fill();
          n.fillStyle = "#1e293b";
        });

        // FOCINHO
        n.fillStyle = "#1e293b";
        n.beginPath();
        n.ellipse(0, u * 0.04, u * 0.04, u * 0.025, 0, 0, Math.PI * 2);
        n.fill();

        // BOCA FOFINHA (Sorrisinho de raposa)
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-u * 0.06, u * 0.08);
        n.quadraticCurveTo(0, u * 0.12, u * 0.06, u * 0.08);
        n.stroke();

        // FAÍSCAS MÁGICAS FLUTUANTES
        if (!isFainted) {
          n.fillStyle = o;
          for (let i = 0; i < 3; i++) {
            let px = Math.cos(tempo * 4 + i * 2) * u * 0.7;
            let py = Math.sin(tempo * 5 + i * 3) * u * 0.5 - u * 0.2;

            n.beginPath();
            n.moveTo(px, py - u * 0.04);
            n.lineTo(px + u * 0.02, py);
            n.lineTo(px, py + u * 0.04);
            n.lineTo(px - u * 0.02, py);
            n.fill();
          }
        }

        n.restore();
      }
      function C3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J > 0 ? 1.2 : 1;
        (n.save(), n.scale(e * M, e * M));
        let H = n.createLinearGradient(0, -u, 0, u);
        if (
          (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(0, -u * 0.72),
          n.lineTo(u * 0.62, -u * 0.12),
          n.lineTo(u * 0.42, u * 0.62),
          n.lineTo(-u * 0.42, u * 0.62),
          n.lineTo(-u * 0.62, -u * 0.12),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(f, 10)),
          n.beginPath(),
          n.moveTo(-u * 0.28, -u * 0.62),
          n.lineTo(-u * 0.42, -u * 1.02),
          n.lineTo(-u * 0.12, -u * 0.68),
          n.closePath(),
          n.fill(),
          (n.strokeStyle = $),
          (n.lineWidth = Q),
          n.stroke(),
          n.beginPath(),
          n.moveTo(u * 0.28, -u * 0.62),
          n.lineTo(u * 0.42, -u * 1.02),
          n.lineTo(u * 0.12, -u * 0.68),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !Z)
        ) {
          n.fillStyle = "#f97316";
          let K = -u * 0.88 + Math.sin(l * 2.5) * u * 0.06;
          (n.beginPath(), n.arc(0, K, u * 0.14, 0, Math.PI * 2), n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((K) => {
              let V = K * u * 0.15,
                C = -u * 0.1;
              (n.beginPath(),
                n.moveTo(V - u * 0.08, C - u * 0.08),
                n.lineTo(V + u * 0.08, C + u * 0.08),
                n.moveTo(V + u * 0.08, C - u * 0.08),
                n.lineTo(V - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((K) => {
            let V = K * u * 0.15,
              C = -u * 0.1;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(V, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(V - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function q3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = Math.max(1.5, r * 0.018),
          M = J > 0 ? 1.2 : 1;
        (n.save(), n.scale(e * M, e * M));
        let H = n.createLinearGradient(0, -u, 0, u);
        if (
          (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, u * 0.12, u * 0.68, u * 0.52, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(o, -18)),
          n.beginPath(),
          n.ellipse(0, -u * 0.32, u * 0.42, u * 0.32, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.28,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          !Z)
        ) {
          let K = Math.cos(l * 2.5) * u * 0.62,
            V = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = f),
            n.beginPath(),
            n.arc(K, V, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if ((n.restore(), Z))
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((K) => {
              let V = K * u * 0.14,
                C = -u * 0.12;
              (n.beginPath(),
                n.moveTo(V - u * 0.08, C - u * 0.08),
                n.lineTo(V + u * 0.08, C + u * 0.08),
                n.moveTo(V + u * 0.08, C - u * 0.08),
                n.lineTo(V - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((K) => {
            let V = K * u * 0.14,
              C = -u * 0.12;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(V, C, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(V - u * 0.03, C - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function O3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.5, u * 0.62, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(254,240,138,0.65)"),
          [-1, 1].forEach((H) => {
            (n.beginPath(),
              n.ellipse(
                H * u * 0.52,
                -u * 0.12,
                u * 0.24,
                u * 0.34,
                H * 0.2,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          !Z)
        )
          for (let H = 0; H < 3; H++) {
            let K = l * 2.5 + H * 2.09,
              V = Math.cos(K) * u * 0.78,
              C = Math.sin(K) * u * 0.42;
            ((n.fillStyle = "#fef08a"),
              n.beginPath(),
              n.arc(V, C, u * 0.07, 0, Math.PI * 2),
              n.fill());
          }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.13,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.13,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function E3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(0, -u * 0.72),
          n.lineTo(u * 0.52, u * 0.62),
          n.lineTo(-u * 0.52, u * 0.62),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !Z)
        ) {
          let H = l * 2.5;
          ((n.strokeStyle = "#facc15"),
            (n.lineWidth = Math.max(1.5, r * 0.018) * 1.2),
            n.beginPath(),
            n.moveTo(Math.cos(H) * u * 0.72, Math.sin(H) * u * 0.42),
            n.lineTo(Math.cos(H + 2) * u * 0.42, Math.sin(H + 2) * u * 0.22),
            n.stroke());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.14,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.14,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function L3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.16 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(-u * 0.52, -u * 0.52),
          n.lineTo(u * 0.52, -u * 0.52),
          n.lineTo(u * 0.52, u * 0.52),
          n.lineTo(-u * 0.52, u * 0.52),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(0,0,0,0.22)"),
          n.beginPath(),
          n.ellipse(0, u * 0.12, u * 0.28, u * 0.28, 0, 0, Math.PI * 2),
          n.fill(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.42,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#8b5cf6"),
            n.beginPath(),
            n.arc(H, K, u * 0.09, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.28,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.14,
                V = -u * 0.1;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.14,
              V = -u * 0.1;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function X3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.2 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, m(o, -18)),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(0, -u * 0.82),
          n.lineTo(u * 0.32, -u * 0.32),
          n.lineTo(u * 0.32, u * 0.42),
          n.lineTo(0, u * 0.82),
          n.lineTo(-u * 0.32, u * 0.42),
          n.lineTo(-u * 0.32, -u * 0.32),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !Z)
        )
          ((n.fillStyle = "rgba(139,92,246,0.42)"),
            n.beginPath(),
            n.ellipse(0, 0, u * 0.12, u * 0.12, 0, 0, Math.PI * 2),
            n.fill());
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.12,
            -u * 0.28,
            u * 0.2,
            u * 0.1,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function B3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.56, u * 0.68, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, -u * 0.62, u * 0.18, u * 0.22, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = $),
          (n.lineWidth = Math.max(1.5, r * 0.018)),
          n.stroke(),
          !Z)
        ) {
          ((n.fillStyle = "#f97316"),
            n.beginPath(),
            n.arc(0, -u * 0.72, u * 0.08, 0, Math.PI * 2),
            n.fill());
          let H = Math.cos(l * 2.5) * u * 0.62,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#facc15"),
            n.beginPath(),
            n.arc(H, K, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.15,
                V = -u * 0.06;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.15,
              V = -u * 0.06;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function A3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.16 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.52, u * 0.62, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(o, -22)),
          [-1, 1].forEach((H) => {
            (n.beginPath(),
              n.ellipse(
                H * u * 0.56,
                -u * 0.12,
                u * 0.26,
                u * 0.36,
                H * 0.2,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.strokeStyle = $),
              (n.lineWidth = Math.max(1.5, r * 0.018)),
              n.stroke());
          }),
          !Z)
        ) {
          let H = l * 2.5;
          ((n.fillStyle = "#f97316"),
            n.beginPath(),
            n.arc(
              Math.cos(H) * u * 0.72,
              Math.sin(H) * u * 0.42,
              u * 0.09,
              0,
              Math.PI * 2,
            ),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.13,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.13,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function F3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.58, u * 0.58, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#22c55e"),
          n.beginPath(),
          n.ellipse(0, -u * 0.42, u * 0.22, u * 0.16, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = $),
          (n.lineWidth = Math.max(1.5, r * 0.018)),
          n.stroke(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.52,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#bbf7d0"),
            n.beginPath(),
            n.arc(H, K, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function P3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.16 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(-u * 0.52, -u * 0.32),
          n.lineTo(u * 0.52, -u * 0.32),
          n.lineTo(u * 0.32, u * 0.52),
          n.lineTo(-u * 0.32, u * 0.52),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#f472b6"),
          n.beginPath(),
          n.ellipse(0, -u * 0.52, u * 0.18, u * 0.14, 0, 0, Math.PI * 2),
          n.fill(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.62,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#4ade80"),
            n.beginPath(),
            n.arc(H, K, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.06;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.06;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function Y3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.62, u * 0.52, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(f, 12)),
          n.beginPath(),
          n.ellipse(0, -u * 0.42, u * 0.28, u * 0.18, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = $),
          (n.lineWidth = Math.max(1.5, r * 0.018)),
          n.stroke(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.62,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#38bdf8"),
            n.beginPath(),
            n.arc(H, K, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.14,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.14,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function m3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.2 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(0, -u * 0.72),
          n.lineTo(u * 0.52, -u * 0.22),
          n.lineTo(u * 0.32, u * 0.62),
          n.lineTo(-u * 0.32, u * 0.62),
          n.lineTo(-u * 0.52, -u * 0.22),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#4ade80"),
          n.beginPath(),
          n.ellipse(0, -u * 0.52, u * 0.16, u * 0.1, 0, 0, Math.PI * 2),
          n.fill(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.62,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#38bdf8"),
            n.beginPath(),
            n.arc(H, K, u * 0.08, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.28,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function g3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, m(o, -22)),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.moveTo(0, -u * 0.72),
          n.lineTo(u * 0.42, 0),
          n.lineTo(0, u * 0.72),
          n.lineTo(-u * 0.42, 0),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !Z)
        ) {
          let H = l * 2.5;
          ((n.strokeStyle = "#facc15"),
            (n.lineWidth = Math.max(1.5, r * 0.018)),
            n.beginPath(),
            n.moveTo(Math.cos(H) * u * 0.52, Math.sin(H) * u * 0.42),
            n.lineTo(Math.cos(H + 1) * u * 0.32, Math.sin(H + 1) * u * 0.22),
            n.stroke());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.16,
            -u * 0.22,
            u * 0.22,
            u * 0.1,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      function w3(n, u, r, l, o, f, $, _, v, Z, J) {
        let e = 1 + Math.sin(l * 4.2) * 0.03,
          Q = J > 0 ? 1.18 : 1;
        (n.save(), n.scale(e * Q, e * Q));
        let M = n.createLinearGradient(0, -u, 0, u);
        if (
          (M.addColorStop(0, m(o, 40)),
          M.addColorStop(1, o),
          (n.fillStyle = M),
          (n.strokeStyle = $),
          (n.lineWidth = v),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.52, u * 0.62, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#facc15"),
          n.beginPath(),
          n.moveTo(0, -u * 0.62),
          n.lineTo(u * 0.12, -u * 0.22),
          n.lineTo(-u * 0.12, -u * 0.22),
          n.closePath(),
          n.fill(),
          !Z)
        ) {
          let H = Math.cos(l * 2.5) * u * 0.62,
            K = Math.sin(l * 2.5) * u * 0.32;
          ((n.fillStyle = "#38bdf8"),
            n.beginPath(),
            n.arc(H, K, u * 0.09, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.26,
            u * 0.12,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          Z)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((H) => {
              let K = H * u * 0.12,
                V = -u * 0.08;
              (n.beginPath(),
                n.moveTo(K - u * 0.08, V - u * 0.08),
                n.lineTo(K + u * 0.08, V + u * 0.08),
                n.moveTo(K + u * 0.08, V - u * 0.08),
                n.lineTo(K - u * 0.08, V + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((H) => {
            let K = H * u * 0.12,
              V = -u * 0.08;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(K, V, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(K - u * 0.03, V - u * 0.03, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
      }
      var jo = 64,
        Yr = 48,
        vf = (n, u) => u * jo + n,
        Wl = 33,
        Qf = { y: 33, x0: 15, x1: 16 };
      function _f() {
        let n = Array(jo * Yr).fill(F.GRASS),
          u = Array(jo * Yr).fill("planalto"),
          r = (v, Z, J) => {
            if (v >= 0 && Z >= 0 && v < jo && Z < Yr) n[vf(v, Z)] = J;
          },
          l = (v, Z) =>
            v >= 0 && Z >= 0 && v < jo && Z < Yr ? n[vf(v, Z)] : F.TREE,
          o = (v, Z, J, e, Q) => {
            for (let M = Z; M <= e; M++)
              for (let H = v; H <= J; H++) r(H, M, Q);
          },
          f = (v, Z, J, e, Q) => {
            for (let M = Z; M <= e; M++)
              for (let H = v; H <= J; H++)
                if (H >= 0 && M >= 0 && H < jo && M < Yr) u[vf(H, M)] = Q;
          },
          $ = (v, Z, J, e, Q, M) => {
            for (let H = Math.floor(Z - e); H <= Math.ceil(Z + e); H++)
              for (let K = Math.floor(v - J); K <= Math.ceil(v + J); K++) {
                let V = (K - v) / J,
                  C = (H - Z) / e;
                if (V * V + C * C <= 1) {
                  if ((r(K, H, Q), M)) u[vf(K, H)] = M;
                }
              }
          };
        (o(2, 2, 15, 11, F.PLAZA),
          f(2, 2, 15, 11, "vila"),
          o(3, 3, 6, 5, F.HOUSE),
          r(4, 5, F.DOOR),
          f(3, 3, 6, 5, "vila"),
          o(10, 3, 13, 5, F.HOUSE),
          r(11, 5, F.DOOR),
          f(10, 3, 13, 5, "vila"));
        for (let v = 1; v <= 16; v++) if (l(v, 1) === F.GRASS) r(v, 1, F.TREE);
        (o(7, 12, 8, 33, F.PATH),
          o(8, 11, 36, 12, F.PATH),
          o(24, 13, 25, 20, F.PATH),
          o(30, 11, 32, 12, F.PATH));
        let _ = (v, Z, J, e) => {
          for (let Q = v; Q <= J; Q++) (r(Q, Z, F.THORN), r(Q, e, F.THORN));
          for (let Q = Z; Q <= e; Q++) (r(v, Q, F.THORN), r(J, Q, F.THORN));
        };
        (_(4, 15, 10, 19),
          f(4, 15, 10, 19, "grove"),
          _(20, 3, 28, 8),
          f(20, 3, 28, 8, "clareira"),
          o(22, 5, 26, 7, F.TALL),
          f(36, 2, 62, 24, "bosque"));
        for (let v = 36; v <= 62; v++)
          for (let Z = 2; Z <= 24; Z++)
            if ((v < 38 || v > 60 || Z < 4 || Z > 22) && l(v, Z) === F.GRASS)
              r(v, Z, F.TREE);
        (r(36, 11, F.PATH),
          r(36, 12, F.PATH),
          r(36, 10, F.PATH),
          r(37, 10, F.PATH),
          r(37, 11, F.PATH),
          r(37, 12, F.PATH),
          r(38, 10, F.PATH),
          r(38, 11, F.PATH),
          r(38, 12, F.PATH),
          o(44, 6, 50, 10, F.TALL),
          o(52, 16, 58, 20, F.TALL),
          o(40, 16, 44, 20, F.TALL),
          o(46, 12, 49, 14, F.FLOWER),
          _(48, 7, 57, 15),
          f(48, 7, 57, 15, "grove"));
        for (let v = 50; v <= 56; v++)
          if (v !== 55 && l(v, 10) === F.GRASS) r(v, 10, F.THORN);
        for (let v = 11; v <= 14; v++)
          if (v !== 13 && l(52, v) === F.GRASS) r(52, v, F.THORN);
        for (let v = 53; v <= 56; v++)
          if (v !== 54 && l(v, 12) === F.GRASS) r(v, 12, F.THORN);
        ($(27.5, 23.5, 7.5, 6.5, F.SAND, "lago"),
          $(27.5, 23.5, 6, 5.2, F.WATER, "lago"),
          $(27.5, 23.5, 3.2, 2.8, F.DEEP, "lago"),
          o(27, 23, 29, 25, F.GRASS),
          f(27, 23, 29, 25, "grove"),
          o(20, 14, 30, 17, F.TALL));
        for (let v = 0; v < Yr; v++)
          (r(Wl, v, F.GAP), (u[vf(Wl, v)] = "fenda"));
        (r(Wl, Yr - 2, F.BRIDGE),
          r(Wl, Yr - 1, F.BRIDGE),
          o(Wl - 2, Yr - 2, Wl - 1, Yr - 1, F.GRASS),
          o(Wl + 1, Yr - 2, Wl + 2, Yr - 1, F.GRASS),
          f(36, 26, 48, 44, "sombrio"),
          o(36, 27, 48, 44, F.CAVE));
        for (let v = 36; v <= 48; v++)
          (r(v, 26, F.CAVEWALL), r(v, 44, F.CAVEWALL));
        for (let v = 26; v <= 44; v++)
          (r(36, v, F.CAVEWALL), r(48, v, F.CAVEWALL));
        (r(42, 26, F.DOOR),
          [
            [38, 29],
            [46, 30],
            [38, 42],
            [46, 42],
            [37, 33],
          ].forEach(([v, Z]) => r(v, Z, F.TREE)),
          o(39, 31, 43, 34, F.TALL),
          o(43, 37, 47, 40, F.TALL),
          f(50, 26, 62, 44, "igneo"),
          o(50, 27, 62, 44, F.SAND));
        for (let v = 50; v <= 62; v++)
          (r(v, 26, F.CAVEWALL), r(v, 44, F.CAVEWALL));
        for (let v = 26; v <= 44; v++)
          (r(50, v, F.CAVEWALL), r(62, v, F.CAVEWALL));
        r(56, 26, F.DOOR);
        for (let v = 26; v <= 44; v++) r(49, v, F.CAVEWALL);
        (o(52, 35, 54, 37, F.PLAZA),
          o(58, 33, 60, 35, F.PLAZA),
          [
            [52, 28],
            [59, 38],
            [60, 42],
            [51, 40],
          ].forEach(([v, Z]) => r(v, Z, F.CAVEWALL)),
          [
            [51, 29],
            [60, 29],
            [61, 38],
            [51, 43],
          ].forEach(([v, Z]) => r(v, Z, F.FLOWER)),
          o(53, 29, 57, 32, F.TALL),
          o(54, 38, 58, 41, F.TALL),
          f(6, 33, 28, 46, "caverna"),
          o(6, 33, 28, 46, F.CAVE));
        for (let v = 6; v <= 28; v++) r(v, 46, F.CAVEWALL);
        for (let v = 33; v <= 46; v++)
          (r(6, v, F.CAVEWALL), r(28, v, F.CAVEWALL));
        for (let v = 6; v <= 28; v++) r(v, Qf.y, F.CAVEWALL);
        (r(Qf.x0, Qf.y, F.DOOR), r(Qf.x1, Qf.y, F.DOOR));
        for (let v = 34; v <= 45; v++) r(24, v, F.CAVEWALL);
        (r(24, 41, F.DOOR),
          f(25, 38, 28, 44, "profunda"),
          o(10, 34, 14, 36, F.TALL),
          f(8, 40, 18, 45, "abismo"),
          o(8, 40, 18, 45, F.CAVE));
        for (let v = 8; v <= 18; v++)
          (r(v, 40, F.CAVEWALL), r(v, 45, F.CAVEWALL));
        for (let v = 40; v <= 45; v++)
          (r(8, v, F.CAVEWALL), r(18, v, F.CAVEWALL));
        return (
          r(13, 40, F.DOOR),
          o(9, 42, 12, 44, F.TALL),
          o(14, 42, 17, 44, F.TALL),
          r(10, 41, F.CAVEWALL),
          r(16, 41, F.CAVEWALL),
          [...g0, ...Qo].forEach((v) => {
            let Z = l(v.x, v.y + 1);
            if (
              Z === F.TREE ||
              Z === F.CAVEWALL ||
              Z === F.THORN ||
              Z === F.WATER ||
              Z === F.DEEP
            )
              r(v.x, v.y + 1, F.GRASS);
            r(v.x, v.y, F.CAVE_ENTRY);
          }),
          { w: jo, h: Yr, tiles: n, region: u }
        );
      }
      var G3 = { x: 3, y: 14 };
      function T3() {
        let r = Array(1728).fill(F.GRASS),
          l = Array(1728).fill("planalto"),
          o = (Z, J) => J * 48 + Z,
          f = (Z, J, e) => {
            if (Z >= 0 && J >= 0 && Z < 48 && J < 36) r[o(Z, J)] = e;
          },
          $ = (Z, J, e, Q, M) => {
            for (let H = J; H <= Q; H++)
              for (let K = Z; K <= e; K++) f(K, H, M);
          },
          _ = (Z, J, e, Q, M) => {
            for (let H = J; H <= Q; H++)
              for (let K = Z; K <= e; K++)
                if (K >= 0 && H >= 0 && K < 48 && H < 36) l[o(K, H)] = M;
          },
          v = (Z, J, e, Q, M) => {
            for (let H = Math.floor(J - Q - 1); H <= Math.ceil(J + Q + 1); H++)
              for (
                let K = Math.floor(Z - e - 1);
                K <= Math.ceil(Z + e + 1);
                K++
              ) {
                if (K < 29 || H < 19 || K > 43 || H > 31) continue;
                let V = Math.sin(K * 12.9898 + H * 78.233) * 0.45,
                  C = (K - Z + V) / e,
                  D = (H - J + V * 0.7) / Q;
                if (C * C + D * D <= 1) f(K, H, M);
              }
          };
        for (let Z = 0; Z < 48; Z++) (f(Z, 0, F.WATER), f(Z, 35, F.WATER));
        for (let Z = 0; Z < 36; Z++) (f(0, Z, F.WATER), f(47, Z, F.WATER));
        ($(4, 4, 16, 12, F.PLAZA),
          _(4, 4, 16, 12, "vila-lamparina"),
          $(5, 5, 8, 7, F.HOUSE),
          f(6, 7, F.DOOR),
          _(5, 5, 8, 7, "vila-lamparina"),
          $(11, 5, 14, 7, F.HOUSE),
          f(12, 7, F.DOOR),
          _(11, 5, 14, 7, "vila-lamparina"),
          $(7, 9, 10, 11, F.HOUSE),
          f(8, 11, F.DOOR),
          _(7, 9, 10, 11, "vila-lamparina"),
          f(2, 14, F.BRIDGE),
          f(1, 13, F.WATER),
          f(1, 14, F.WATER),
          f(1, 15, F.WATER),
          $(3, 13, 9, 14, F.PATH),
          $(9, 13, 10, 20, F.PATH),
          $(10, 19, 28, 20, F.PATH),
          _(28, 18, 44, 32, "caldeira-tata"),
          $(28, 19, 44, 31, F.ASH));
        for (let Z = 28; Z <= 44; Z++)
          (f(Z, 18, F.CAVEWALL), f(Z, 32, F.CAVEWALL));
        for (let Z = 18; Z <= 32; Z++)
          (f(28, Z, F.CAVEWALL), f(44, Z, F.CAVEWALL));
        return (
          f(28, 20, F.DOOR),
          v(34, 24, 3, 2.5, F.TALL),
          v(40, 27, 3.5, 2.5, F.TALL),
          v(31, 29, 2.5, 2, F.TALL),
          $(33, 23, 35, 25, F.PLAZA),
          $(38, 28, 40, 30, F.PLAZA),
          [
            [33, 20],
            [41, 21],
            [30, 29],
            [42, 30],
          ].forEach(([Z, J]) => f(Z, J, F.CAVEWALL)),
          [
            [34, 21],
            [40, 22],
            [31, 28],
          ].forEach(([Z, J]) => f(Z, J, F.FLOWER)),
          $(29, 19, 30, 21, F.ASH),
          { w: 48, h: 36, tiles: r, region: l }
        );
      }
      var V8 = [
        {
          id: "iracema",
          x: 10,
          y: 8,
          name: "Profª Iracema",
          kind: "old",
          dialog: [
            "Bem-vindo ao Arquipélago do Tatá! Estudo os Pats do folclore... e algo novo está nascendo por aqui.",
          ],
        },
        {
          id: "ramiro-exp",
          x: 3,
          y: 15,
          name: "Capitão Ramiro",
          kind: "old",
          dialog: ["Pronto para voltar ao continente?"],
        },
        {
          id: "feirante",
          x: 12,
          y: 8,
          name: "Feirante Zé",
          kind: "old",
          dialog: [
            "Feira das Marcas! Pets tocados pela marca ancestral do Tatá — só para treinadores de verdade!",
          ],
        },
        {
          id: "dona-cuca",
          x: 31,
          y: 20,
          name: "Dona Jacaruxa",
          kind: "old",
          dialog: [
            "Você sente o chão tremer? O Tatá Alfa está despertando nas profundezas... Dizem que só quem reuniu as 8 lendas do folclore pode encará-lo.",
          ],
        },
      ];
      function Sr(n, u, r) {
        if (u < 0 || r < 0 || u >= n.w || r >= n.h) return F.TREE;
        return n.tiles[r * n.w + u];
      }
      function m0(n, u, r) {
        if (u < 0 || r < 0 || u >= n.w || r >= n.h) return "planalto";
        return n.region[r * n.w + u];
      }
      var Zf = {
          vila: {
            name: "Vila Vínculo",
            zone: "",
            desc: "Um refúgio seguro para treinadores.",
          },
          casa: {
            name: "Casa",
            zone: "",
            desc: "Um lar quentinho na Vila Vínculo.",
          },
          planalto: {
            name: "Planalto Verde",
            zone: "planalto",
            desc: "Grama alta e Pats dóceis.",
          },
          bosque: {
            name: "Bosque Sussurrante",
            zone: "bosque",
            desc: "As árvores cochicham segredos.",
          },
          lago: {
            name: "Lago Sereno",
            zone: "lago",
            desc: "Águas calmas escondem raridades.",
          },
          caverna: {
            name: "Caverna Ecoante",
            zone: "caverna",
            desc: "Escuridão e ecos misteriosos.",
          },
          profunda: {
            name: "Profundezas Seladas",
            zone: "profunda",
            desc: "Só os persistentes chegam aqui.",
          },
          grove: {
            name: "Clareira Secreta",
            zone: "bosque",
            desc: "Um tesouro escondido!",
          },
          clareira: {
            name: "Clareira Secreta",
            zone: "bosque",
            desc: "Um jardim escondido atrás dos espinhos.",
          },
          fenda: {
            name: "Fenda Sombria",
            zone: "",
            desc: "Uma cicatriz roxa no mundo. Só Pats Faísca a atravessam — ou a ponte do sul.",
          },
          sombrio: {
            name: "Pântano Sombrio",
            zone: "sombrio",
            desc: "Trevas densas. Apenas Pats sombrios ousam entrar.",
          },
          igneo: {
            name: "Fenda Ígnea",
            zone: "igneo",
            desc: "Calor vulcânico. Apenas Pats de fogo resistem.",
          },
          "caverna-bosque": {
            name: "Caverna do Bosque",
            zone: "caverna",
            desc: "Flores e ecos sob a terra.",
          },
          "caverna-lago": {
            name: "Caverna do Lago",
            zone: "caverna",
            desc: "Areia úmida e poças misteriosas.",
          },
          "caverna-sombria": {
            name: "Caverna Sombria",
            zone: "caverna",
            desc: "Trevas densas e sussurros.",
          },
          "caverna-ignea": {
            name: "Caverna Ígnea",
            zone: "caverna",
            desc: "Calor vulcânico sob a rocha.",
          },
          "abismo-real": {
            name: "Abismo Profundo",
            zone: "caverna",
            desc: "O coração do pesadelo.",
          },
          "caverna-flora": {
            name: "Caverna Flora",
            zone: "caverna",
            desc: "Um jardim subterrâneo.",
          },
          "caverna-mare": {
            name: "Caverna Maré",
            zone: "caverna",
            desc: "Areia e poças d’água.",
          },
          "caverna-bras": {
            name: "Caverna Brasa",
            zone: "caverna",
            desc: "Brasas crepitantes na rocha escura.",
          },
          "caverna-faisca": {
            name: "Caverna Faísca",
            zone: "caverna",
            desc: "O ar estala de eletricidade.",
          },
          "caverna-pedra": {
            name: "Caverna Pedra",
            zone: "caverna",
            desc: "Rocha e pedregulhos ancestrais.",
          },
          "caverna-sombra": {
            name: "Caverna Sombra",
            zone: "caverna",
            desc: "Escuridão quase total.",
          },
          "vila-lamparina": {
            name: "Vila Lamparina",
            zone: "vila",
            desc: "Uma vila de pescadores e estudiosos no arquipélago.",
          },
          "caldeira-tata": {
            name: "Caldeira do Tatá",
            zone: "caldeira-tata",
            desc: "O vulcão adormecido do Arquipélago do Tatá.",
          },
        },
        W8 = [
          {
            id: "tutorial-vila",
            x: 13,
            y: 9,
            items: { essencia: 2, pocao: 1 },
            label: "Baú do tutorial",
          },
          {
            id: "clareira-vila",
            x: 7,
            y: 17,
            items: { essencia: 2, pocao: 1 },
            label: "Baú espinhoso",
          },
          {
            id: "clareira-secreta",
            x: 24,
            y: 4,
            items: { doce: 3, essencia: 2 },
            label: "Baú da clareira",
          },
          {
            id: "arvoredo",
            x: 52,
            y: 11,
            items: { chave: 1, doce: 1 },
            label: "Baú do arvoredo",
          },
          {
            id: "eco-funda",
            x: 12,
            y: 43,
            items: { essencia: 1, pocao: 1 },
            label: "Baú do eco",
          },
          {
            id: "fenda",
            x: 35,
            y: 12,
            items: { doce: 1, pocao: 1 },
            label: "Baú da fenda",
          },
          {
            id: "selada",
            x: 27,
            y: 43,
            items: { essencia: 1, pocao: 2 },
            label: "Baú selado",
          },
          {
            id: "relic-volt",
            x: 56,
            y: 14,
            items: { "bobina-volt": 1 },
            label: "Baú do labirinto de espinhos",
          },
          {
            id: "pantano-sombrio",
            x: 44,
            y: 42,
            items: { essencia: 3, pocao: 1 },
            label: "Baú sombrio",
          },
          {
            id: "fenda-ignea",
            x: 61,
            y: 43,
            items: { essencia: 3, pocao: 1 },
            label: "Baú ígneo",
          },
          {
            id: "abismo-tesouro",
            x: 9,
            y: 41,
            items: { doce: 2, essencia: 3, pocao: 2 },
            label: "Tesouro do Abismo",
          },
        ],
        U8 = [
          { id: "sw-oeste", x: 2, y: 10 },
          { id: "sw-leste", x: 15, y: 10 },
        ];
      var UQ = [
          {
            door: { x: 42, y: 26 },
            region: "sombrio",
            affinity: "Sombra",
            msg: "Uma escuridão densa bloqueia... Apenas um Pat sombrio pode entrar!",
          },
          {
            door: { x: 56, y: 26 },
            region: "igneo",
            affinity: "Brasa",
            msg: "O calor é insuportável... Apenas um Pat de fogo pode entrar!",
          },
        ],
        MQ = [
          { x: 14, y: 38 },
          { x: 17, y: 39 },
          { x: 21, y: 38 },
        ],
        Nf = [
          {
            id: "verdelho",
            x: 8,
            y: 8,
            name: "Prof. Verdelho",
            kind: "old",
            dialog: [
              "Olá, {nome}! Eu sou o Prof. Verdelho, estudioso do VÍNCULO entre treinadores e Pats.",
              "Você escolheu as afinidades {affs}. Elas definem TUDO: seu poder, suas capturas e até as EVOLUÇÕES dos seus Pats!",
              "Quando um Pat chega ao Nv 12 e ao Nv 24, ele evolui conforme sua afinidade DOMINANTE. Use Pats de um tipo para aumentar sua sintonia com ele!",
              "REGRA DE OURO: você só pode VINCULAR um Pat selvagem se tiver afinidade com um dos tipos dele... ou gastar uma Essência Neutra.",
              "Explore, desbrave a grama alta e volte sempre a áreas antigas: novas habilidades dos seus Pats abrem novos caminhos. Isso é backtrack!",
              "Tome este Pat inicial e 3 Poções de Vínculo. Boa jornada, treinador!",
            ],
          },
          {
            id: "lia",
            x: 10,
            y: 7,
            name: "Enfermeira Lia",
            kind: "nurse",
            dialog: [
              "Bem-vindo ao Centro de Vínculo! Vou curar seus Pats... Prontinho! Todos com HP cheio. Volte sempre!",
            ],
          },
          {
            id: "dica",
            x: 5,
            y: 10,
            name: "Malu",
            kind: "kid",
            dialog: [
              "Dica de exploradora: arbustos espinhosos com espinhos VERMELHOS podem ser cortados se você tiver um Pat Flora no time!",
              "E viu aquela fenda preta perto do bosque? Com um Pat Faísca você atravessa correndo! Tem baú do outro lado, eu juro!",
            ],
          },
          {
            id: "bruno",
            x: 42,
            y: 14,
            name: "Treinador Bruno",
            kind: "trainer",
            dialog: ["Haha! Um novato no meu bosque? Vamos batalhar!"],
            team: [
              { sp: "leafit", level: 8 },
              { sp: "voltpup", level: 9 },
            ],
          },
          {
            id: "marina",
            x: 24,
            y: 20,
            name: "Treinadora Marina",
            kind: "trainer",
            dialog: [
              "As águas do lago me ensinaram paciência... e estratégia! Batalha?",
            ],
            team: [
              { sp: "aquaffin", level: 9 },
              { sp: "floramar", level: 10 },
            ],
          },
          {
            id: "rocha",
            x: 12,
            y: 36,
            name: "Treinador Rocha",
            kind: "trainer",
            dialog: ["Duro como pedra! Quer provar? Então venha!"],
            team: [
              { sp: "pebblor", level: 11 },
              { sp: "umbrae", level: 12 },
            ],
          },
          {
            id: "nox",
            x: 58,
            y: 8,
            name: "Caçador Nox",
            kind: "trainer",
            dialog: [
              "A escuridão me confiou uma CHAVE SOMBRIA... Tome-a de mim, se for capaz!",
            ],
            team: [
              { sp: "umbrae", level: 13 },
              { sp: "voltpup", level: 13 },
            ],
          },
          {
            id: "guardiao",
            x: 54,
            y: 18,
            name: "Guardião do Bosque",
            kind: "trainer",
            dialog: [
              "Eu guardo o coração do bosque há cem anos...",
              "Mostre-me que seu vínculo é digno do CORAÇÃO DE MAGMA!",
            ],
            team: [
              { sp: "leafit", level: 14 },
              { sp: "embercub", level: 14 },
              { sp: "floramar", level: 15 },
            ],
          },
          {
            id: "golem-anciao",
            x: 20,
            y: 40,
            name: "Golem Ancião",
            kind: "trainer",
            dialog: [
              "...eu dormi mil anos sob esta caverna...",
              "Acorde-me com uma batalha digna e o NÚCLEO TERRESTRE será seu!",
            ],
            team: [
              { sp: "pebblor", level: 15 },
              { sp: "brascal", level: 15 },
            ],
          },
          {
            id: "rainha-sombria",
            x: 42,
            y: 40,
            name: "Rainha Sombria",
            kind: "trainer",
            dialog: [
              "Você ousou entrar no meu pântano...",
              "Prove que domina a escuridão!",
            ],
            team: [
              { sp: "umbrae", level: 18 },
              { sp: "brasombra", level: 19 },
              { sp: "petrombra", level: 20 },
            ],
          },
          {
            id: "lorde-igneo",
            x: 56,
            y: 40,
            name: "Lorde Ígneo",
            kind: "trainer",
            dialog: [
              "O magma me escolheu...",
              "Vamos ver se você aguenta o calor!",
            ],
            team: [
              { sp: "embercub", level: 18 },
              { sp: "brascal", level: 19 },
              { sp: "brasombra", level: 20 },
            ],
          },
          {
            id: "anciao-fenda",
            x: 13,
            y: 43,
            name: "Ancião da Fenda",
            kind: "trainer",
            dialog: [
              "Eu guardo o Abismo há mil anos...",
              "Seus híbridos são fortes... mas o verdadeiro poder está aqui embaixo!",
            ],
            team: [
              { sp: "petrombra", level: 20 },
              { sp: "brasombra", level: 21 },
              { sp: "faesombra", level: 22 },
            ],
          },
          {
            id: "bau-vila",
            x: 12,
            y: 9,
            name: "Baú da Vila",
            kind: "old",
            dialog: ["Aqui ficam seus Pats sobressalentes!"],
          },
          {
            id: "mercador",
            x: 14,
            y: 8,
            name: "Mercador",
            kind: "mercador",
            merchantId: "vila",
            dialog: [
              "Boas-vindas à minha loja, treinador! Tenho poções, doces e essências para fortalecer seu vínculo.",
              "Dê uma olhada nas prateleiras — volte sempre que precisar de suprimentos!",
            ],
          },
          {
            id: "mercador-lago",
            x: 24,
            y: 19,
            name: "Pescador Anselmo",
            kind: "mercador",
            merchantId: "mercador-lago",
            dialog: [
              "O lago me deu de tudo nesta vida... até uma Chave Sombria que fisguei sem querer!",
              "Vendo meus achados, mas não compro pets — meus olhos são só para as águas!",
            ],
          },
          {
            id: "mercador-bosque",
            x: 46,
            y: 15,
            name: "Ermitão Verdefolha",
            kind: "mercador",
            merchantId: "mercador-bosque",
            dialog: [
              "A floresta me ensinou o valor das coisas simples... e das chaves enferrujadas perdidas por aí.",
              "Só vendo, não compro. Pets são amigos, não mercadoria.",
            ],
          },
          {
            id: "mercador-ruinas",
            x: 12,
            y: 41,
            name: "Arqueóloga Íris",
            kind: "mercador",
            merchantId: "mercador-ruinas",
            dialog: [
              "Escavo estas ruínas há anos em busca de relíquias do Vínculo!",
              "Vendo suprimentos para exploradores. Não compro pets — só vendo!",
            ],
          },
          {
            id: "mercador-ponte",
            x: 31,
            y: 46,
            name: "Viajante Sol",
            kind: "mercador",
            merchantId: "mercador-ponte",
            dialog: [
              "Cruzei a Fenda Sombria por esta ponte mais vezes do que consigo contar!",
              "Vendo doces e essências para a travessia. Só vendo, não compro pets!",
            ],
          },
          {
            id: "ramiro",
            x: 35,
            y: 46,
            name: "Capitão Ramiro",
            kind: "old",
            dialog: ["O mar esconde segredos, capitão..."],
          },
          {
            id: "arena-campeao",
            x: 12,
            y: 6,
            name: "Campeão Ragnar",
            kind: "trainer",
            dialog: [
              "Sou o Campeão da Arena Vínculo!",
              "Derrote-me e as cavernas do mundo se abrirão para você!",
            ],
            team: [
              { sp: "brascal", level: 16 },
              { sp: "floramar", level: 16 },
              { sp: "voltpup", level: 17 },
            ],
          },
        ],
        g0 = [
          { id: "caverna-bosque", x: 60, y: 6, name: "Caverna do Bosque" },
          { id: "caverna-lago", x: 28, y: 24, name: "Caverna do Lago" },
          { id: "caverna-sombria", x: 37, y: 27, name: "Caverna Sombria" },
          { id: "caverna-ignea", x: 61, y: 27, name: "Caverna Ígnea" },
          { id: "abismo-real", x: 4, y: 36, name: "Abismo Profundo" },
        ],
        Qo = [
          {
            id: "caverna-flora",
            type: "Flora",
            x: 2,
            y: 22,
            name: "Caverna Flora",
          },
          {
            id: "caverna-mare",
            type: "Maré",
            x: 3,
            y: 45,
            name: "Caverna Maré",
          },
          {
            id: "caverna-bras",
            type: "Brasa",
            x: 60,
            y: 45,
            name: "Caverna Brasa",
          },
          {
            id: "caverna-faisca",
            type: "Faísca",
            x: 61,
            y: 3,
            name: "Caverna Faísca",
          },
          {
            id: "caverna-pedra",
            type: "Pedra",
            x: 30,
            y: 2,
            name: "Caverna Pedra",
          },
          {
            id: "caverna-sombra",
            type: "Sombra",
            x: 62,
            y: 24,
            name: "Caverna Sombra",
          },
        ];
      function k3(n) {
        let { w: u, h: r, theme: l } = I3(n),
          o = Math.floor(u / 2),
          f =
            l === "flora" ||
            l === "mare" ||
            l === "brasa" ||
            l === "faisca" ||
            l === "pedra" ||
            l === "sombra",
          $ = {
            flora: F.CAVE,
            mare: F.SAND,
            brasa: F.ASH,
            faisca: F.ROCK,
            pedra: F.SAND,
            sombra: F.MOSS,
          },
          _ = f ? $[l] : F.CAVE,
          v = Array(u * r).fill(_),
          Z = Array(u * r).fill(n),
          J = (M, H, K) => {
            if (M >= 0 && H >= 0 && M < u && H < r) v[H * u + M] = K;
          },
          e = (M, H, K, V, C) => {
            for (let D = H; D <= V; D++)
              for (let W = M; W <= K; W++) J(W, D, C);
          },
          Q = (M, H, K, V, C) => {
            for (let D = Math.floor(H - V - 1); D <= Math.ceil(H + V + 1); D++)
              for (
                let W = Math.floor(M - K - 1);
                W <= Math.ceil(M + K + 1);
                W++
              ) {
                if (W < 2 || D < 2 || W > u - 3 || D > r - 4) continue;
                let B = Math.sin(W * 12.9898 + D * 78.233) * 0.45,
                  A = (W - M + B) / K,
                  P = (D - H + B * 0.7) / V;
                if (A * A + P * P <= 1) J(W, D, C);
              }
          };
        if (l === "bosque")
          (e(2, 2, 5, 4, F.FLOWER), e(u - 6, 2, u - 3, 4, F.FLOWER));
        else if (l === "lago")
          (e(2, 2, 6, 4, F.SAND),
            e(u - 7, 2, u - 3, 4, F.SAND),
            e(2, 11, 4, 12, F.WATER));
        else if (l === "sombria")
          (J(3, 3, F.CAVEWALL), J(u - 4, 3, F.CAVEWALL));
        else if (l === "ignea")
          (e(2, 2, 6, 4, F.PLAZA),
            e(u - 7, 2, u - 3, 4, F.PLAZA),
            e(2, 11, 3, 12, F.FLOWER),
            e(u - 4, 11, u - 3, 12, F.FLOWER));
        else if (l === "abismo")
          (J(3, 3, F.CAVEWALL),
            J(u - 4, 3, F.CAVEWALL),
            J(3, r - 6, F.CAVEWALL),
            J(u - 4, r - 6, F.CAVEWALL));
        else if (l === "flora")
          (Q(8, 7, 6, 4, F.GRASS),
            Q(20, 7, 5, 3.5, F.MOSS),
            Q(13, 12, 5, 2.8, F.BOG),
            Q(5, 13, 3, 2, F.MOSS),
            [
              [11, 10],
              [12, 10],
              [11, 11],
            ].forEach(([M, H]) => J(M, H, F.TREE)),
            [
              [22, 12],
              [23, 12],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)));
        else if (l === "mare")
          (Q(8, 8, 6, 4, F.BOG),
            Q(22, 8, 5.5, 4, F.GRASS),
            Q(16, 13, 4.5, 2.6, F.BOG),
            [
              [12, 5],
              [12, 6],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)),
            J(20, 12, F.CAVEWALL));
        else if (l === "brasa")
          (Q(8, 8, 5.5, 4, F.ROCK),
            Q(20, 8, 5, 3.8, F.SAND),
            Q(15, 13, 5, 3, F.ROCK),
            [
              [10, 12],
              [11, 12],
              [10, 13],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)),
            J(21, 5, F.CAVEWALL));
        else if (l === "faisca")
          (Q(7, 7, 5, 3.5, F.SAND),
            Q(19, 8, 5, 4, F.GRASS),
            Q(14, 12, 4, 2.5, F.SAND),
            J(10, 5, F.CAVEWALL),
            J(16, 11, F.CAVEWALL),
            J(17, 11, F.CAVEWALL));
        else if (l === "pedra")
          (Q(9, 8, 6, 4.5, F.ROCK),
            Q(23, 9, 5.5, 4, F.GRASS),
            Q(17, 14, 5, 3, F.ROCK),
            [
              [13, 6],
              [14, 6],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)),
            [
              [24, 14],
              [25, 14],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)));
        else if (l === "sombra")
          (Q(10, 9, 6.5, 4.5, F.BOG),
            Q(25, 9, 5.5, 4, F.ROCK),
            Q(18, 15, 5, 3, F.BOG),
            Q(8, 17, 4, 2.8, F.ROCK),
            [
              [14, 6],
              [15, 6],
            ].forEach(([M, H]) => J(M, H, F.CAVEWALL)),
            J(28, 15, F.CAVEWALL),
            J(22, 18, F.CAVEWALL));
        if (f) {
          let M = $[l];
          ((w0[n] || []).forEach((H) => J(H.x, H.y, M)),
            (Kf[n] || []).forEach((H) => J(H.x, H.y, M)));
          for (let H = r - 4; H <= r - 2; H++)
            for (let K = o - 1; K <= o + 1; K++) J(K, H, M);
        } else
          (e(2, 6, Math.floor(u * 0.36), 9, F.TALL),
            e(Math.ceil(u * 0.64), 6, u - 3, 9, F.TALL),
            e(2, r - 5, o - 2, r - 3, F.TALL),
            e(o + 2, r - 5, u - 3, r - 3, F.TALL));
        for (let M = 0; M < u; M++)
          (J(M, 0, F.CAVEWALL), J(M, r - 1, F.CAVEWALL));
        for (let M = 0; M < r; M++)
          (J(0, M, F.CAVEWALL), J(u - 1, M, F.CAVEWALL));
        return (J(o, r - 1, F.DOOR), { w: u, h: r, tiles: v, region: Z });
      }
      var hJ = {
        "caverna-bosque": { w: 30, h: 20, theme: "bosque" },
        "caverna-lago": { w: 28, h: 19, theme: "lago" },
        "caverna-sombria": { w: 32, h: 20, theme: "sombria" },
        "caverna-ignea": { w: 30, h: 21, theme: "ignea" },
        "abismo-real": { w: 34, h: 22, theme: "abismo" },
        "caverna-flora": { w: 28, h: 18, theme: "flora" },
        "caverna-mare": { w: 30, h: 19, theme: "mare" },
        "caverna-bras": { w: 28, h: 20, theme: "brasa" },
        "caverna-faisca": { w: 26, h: 18, theme: "faisca" },
        "caverna-pedra": { w: 32, h: 21, theme: "pedra" },
        "caverna-sombra": { w: 34, h: 24, theme: "sombra" },
      };
      function I3(n) {
        return hJ[n] ?? { w: 28, h: 20, theme: "caverna" };
      }
      function S3(n) {
        let u = I3(n);
        return { x: Math.floor(u.w / 2), y: u.h - 1 };
      }
      function HQ(n) {
        let u = I3(n);
        return { x: Math.floor(u.w / 2), y: u.h - 2 };
      }
      var w0 = {
          "caverna-bosque": [
            {
              id: "guardião-bosque",
              x: 15,
              y: 4,
              name: "Guardião da Caverna",
              kind: "trainer",
              dialog: [
                "Os híbridos raros se escondem aqui...",
                "Prove seu valor!",
              ],
              team: [
                { sp: "florapedra", level: 17 },
                { sp: "leafit", level: 18 },
              ],
            },
          ],
          "caverna-lago": [
            {
              id: "guardião-lago",
              x: 14,
              y: 4,
              name: "Sereia do Lago",
              kind: "trainer",
              dialog: ["As profundezas guardam segredos..."],
              team: [
                { sp: "voltmar", level: 17 },
                { sp: "marepedra", level: 18 },
              ],
            },
          ],
          "caverna-sombria": [
            {
              id: "guardião-sombrio",
              x: 16,
              y: 4,
              name: "Vulto Sombrio",
              kind: "trainer",
              dialog: ["A escuridão te consome..."],
              team: [
                { sp: "petrombra", level: 18 },
                { sp: "brasombra", level: 19 },
              ],
            },
          ],
          "caverna-ignea": [
            {
              id: "guardião-igneo",
              x: 15,
              y: 4,
              name: "Elemental Ígneo",
              kind: "trainer",
              dialog: ["O fogo purifica!"],
              team: [
                { sp: "brasombra", level: 18 },
                { sp: "brascal", level: 19 },
              ],
            },
          ],
          "abismo-real": [
            {
              id: "senhor-abismo",
              x: 17,
              y: 4,
              name: "Senhor do Abismo",
              kind: "trainer",
              dialog: [
                "Você chegou ao coração do Abismo...",
                "Eu sou o pesadelo final!",
              ],
              team: [
                { sp: "faesombra", level: 21 },
                { sp: "petrombra", level: 22 },
                { sp: "brasombra", level: 22 },
              ],
            },
          ],
          "caverna-flora": [
            {
              id: "treinadora-ivy",
              x: 6,
              y: 4,
              name: "Botânica Ivy",
              kind: "trainer",
              dialog: [
                "Este jardim subterrâneo é meu laboratório!",
                "Vamos ver se seu vínculo floresce!",
              ],
              team: [
                { sp: "leafit", level: 16 },
                { sp: "floramar", level: 17 },
                { sp: "florapedra", level: 18 },
              ],
            },
            {
              id: "mercador-flora",
              x: 12,
              y: 16,
              name: "Mercadora Hera",
              kind: "mercador",
              merchantId: "mercador-flora",
              dialog: [
                "Bem-vindo ao meu jardim secreto, treinador!",
                "Vendo a Semente Anciã e doces raros... e compro seus Pats Flora por um bom preço!",
              ],
            },
          ],
          "caverna-mare": [
            {
              id: "mergulhador-kai",
              x: 24,
              y: 4,
              name: "Mergulhador Kai",
              kind: "trainer",
              dialog: [
                "As poças escondem os melhores Pats...",
                "Duvido que nade melhor que eu!",
              ],
              team: [
                { sp: "aquaffin", level: 16 },
                { sp: "voltmar", level: 17 },
                { sp: "marepedra", level: 18 },
              ],
            },
            {
              id: "mercador-mare",
              x: 12,
              y: 16,
              name: "Mercadora Pérola",
              kind: "mercador",
              merchantId: "mercador-mare",
              dialog: [
                "As marés trazem os melhores tesouros, treinador!",
                "Vendo a Gota Abissal e doces raros... e compro seus Pats Maré por um bom preço!",
              ],
            },
          ],
          "caverna-bras": [
            {
              id: "ferreiro-brax",
              x: 6,
              y: 4,
              name: "Ferreiro Brax",
              kind: "trainer",
              dialog: [
                "Forjei minha equipe no magma desta caverna!",
                "Aguente o calor!",
              ],
              team: [
                { sp: "embercub", level: 16 },
                { sp: "brascal", level: 18 },
                { sp: "brasombra", level: 19 },
              ],
            },
            {
              id: "mercador-bras",
              x: 16,
              y: 18,
              name: "Mercador Magma",
              kind: "mercador",
              merchantId: "mercador-bras",
              dialog: [
                "O calor daqui forja os melhores negócios, treinador!",
                "Vendo o Coração de Magma e doces raros... e compro seus Pats Brasa por um bom preço!",
              ],
            },
          ],
          "caverna-faisca": [
            {
              id: "engenheira-volt",
              x: 19,
              y: 4,
              name: "Engenheira Volt",
              kind: "trainer",
              dialog: [
                "Sinto a estática no ar... você também?",
                "Que vença o mais rápido!",
              ],
              team: [
                { sp: "voltpup", level: 16 },
                { sp: "voltmar", level: 17 },
                { sp: "faesombra", level: 18 },
              ],
            },
            {
              id: "mercador-faisca",
              x: 11,
              y: 16,
              name: "Mercador Volt",
              kind: "mercador",
              merchantId: "mercador-faisca",
              dialog: [
                "Zzzzt! Bem-vindo à minha banca elétrica, treinador!",
                "Vendo a Bobina Volt e doces raros... e compro seus Pats Faísca por um bom preço!",
              ],
            },
          ],
          "caverna-pedra": [
            {
              id: "escavador-gran",
              x: 7,
              y: 4,
              name: "Escavador Gran",
              kind: "trainer",
              dialog: [
                "Cada pedra aqui conta uma história de mil anos.",
                "Vamos escrever a sua!",
              ],
              team: [
                { sp: "pebblor", level: 16 },
                { sp: "marepedra", level: 17 },
                { sp: "florapedra", level: 18 },
              ],
            },
            {
              id: "mercador-pedra",
              x: 12,
              y: 18,
              name: "Mercador Rocha",
              kind: "mercador",
              merchantId: "mercador-pedra",
              dialog: [
                "Pedra sobre pedra, negócio sobre negócio, treinador!",
                "Vendo o Núcleo Terrestre e doces raros... e compro seus Pats Pedra por um bom preço!",
              ],
            },
          ],
          "caverna-sombra": [
            {
              id: "vulto-nyx",
              x: 26,
              y: 4,
              name: "Vulto Nyx",
              kind: "trainer",
              dialog: [
                "A escuridão me ensinou a ouvir...",
                "Mostre-me sua luz interior!",
              ],
              team: [
                { sp: "umbrae", level: 16 },
                { sp: "petrombra", level: 17 },
                { sp: "brasombra", level: 18 },
              ],
            },
            {
              id: "mercador-sombra",
              x: 13,
              y: 21,
              name: "Mercador Umbral",
              kind: "mercador",
              merchantId: "mercador-sombra",
              dialog: [
                "Na sombra os negócios são mais... discretos, treinador.",
                "Vendo o Fragmento Umbral e doces raros... e compro seus Pats Sombra por um bom preço!",
              ],
            },
          ],
        },
        Kf = {
          "caverna-bosque": [
            {
              id: "cav-bosque-relic",
              x: 12,
              y: 3,
              items: { "semente-ancia": 1 },
              label: "Relíquia Flora",
            },
          ],
          "caverna-lago": [
            {
              id: "cav-lago-relic",
              x: 11,
              y: 3,
              items: { "gota-abissal": 1 },
              label: "Relíquia Maré",
            },
          ],
          "caverna-sombria": [
            {
              id: "cav-somb-relic",
              x: 13,
              y: 3,
              items: { "fragmento-umbral": 1 },
              label: "Relíquia Sombra",
            },
          ],
          "caverna-ignea": [
            {
              id: "cav-igne-relic",
              x: 12,
              y: 3,
              items: { "coracao-magma": 1 },
              label: "Relíquia Brasa",
            },
          ],
          "abismo-real": [
            {
              id: "cav-abismo-relic",
              x: 14,
              y: 3,
              items: { "nucleo-terrestre": 1 },
              label: "Relíquia Pedra",
            },
          ],
          "caverna-flora": [
            {
              id: "ct-flora-1",
              x: 21,
              y: 3,
              items: { doce: 2, essencia: 1 },
              label: "Baú da caverna",
            },
          ],
          "caverna-mare": [
            {
              id: "ct-mare-1",
              x: 7,
              y: 3,
              items: { pocao: 2, essencia: 1 },
              label: "Baú da caverna",
            },
          ],
          "caverna-bras": [
            {
              id: "ct-bras-1",
              x: 21,
              y: 4,
              items: { pocao: 1, doce: 1, essencia: 1 },
              label: "Baú da caverna",
            },
          ],
          "caverna-faisca": [
            {
              id: "ct-faisca-1",
              x: 6,
              y: 4,
              items: { doce: 2, pocao: 1 },
              label: "Baú da caverna",
            },
          ],
          "caverna-pedra": [
            {
              id: "ct-pedra-1",
              x: 24,
              y: 4,
              items: { pocao: 2, doce: 1 },
              label: "Baú da caverna",
            },
          ],
          "caverna-sombra": [
            {
              id: "ct-sombra-1",
              x: 8,
              y: 4,
              items: { essencia: 2, pocao: 1 },
              label: "Baú da caverna",
            },
          ],
        },
        Jf = {
          Flora: {
            name: "Corte Flora",
            desc: "Corte arbustos espinhosos (botão de ação).",
          },
          Maré: { name: "Nado Maré", desc: "Atravesse a água nadando." },
          Pedra: {
            name: "Força Pedra",
            desc: "Empurre pedras (botão de ação).",
          },
          Faísca: {
            name: "Dash Faísca",
            desc: "Atravesse a Fenda Sombria por dentro com um Pat Faísca no time.",
          },
        },
        ho = [
          { x: 4, y: 5, id: 0 },
          { x: 11, y: 5, id: 1 },
        ],
        dJ = 10,
        bJ = 8,
        yo = { x: 5, y: 7 },
        j3 = { x: 5, y: 6 },
        bo = { x0: 1, y0: 1, x1: 2, y1: 2 },
        y3 = [
          [
            {
              id: "mae",
              x: 4,
              y: 2,
              name: "Mãe",
              kind: "nurse",
              dialog: [
                "Querido(a)! Que bom te ver em casa. Descanse um pouco...",
                "Lembre-se: o vínculo com seus Pats é o que importa, não só vencer!",
              ],
            },
          ],
          [
            {
              id: "avo",
              x: 6,
              y: 2,
              name: "Vovô Téo",
              kind: "old",
              dialog: [
                "Quando eu era jovem, explorei a Caverna Ecoante...",
                "Dizem que uma Chave Enferrujada abre a porta selada lá dentro. Procure no arvoredo do bosque!",
              ],
            },
          ],
        ];
      function h3() {
        let n = dJ,
          u = bJ,
          r = Array(n * u).fill(F.PLAZA),
          l = Array(n * u).fill("casa"),
          o = (f, $, _) => {
            r[$ * n + f] = _;
          };
        for (let f = 0; f < n; f++) (o(f, 0, F.HOUSE), o(f, u - 1, F.HOUSE));
        for (let f = 0; f < u; f++) (o(0, f, F.HOUSE), o(n - 1, f, F.HOUSE));
        return (o(yo.x, yo.y, F.DOOR), { w: n, h: u, tiles: r, region: l });
      }
      function DQ(n, u) {
        let r = {};
        return (
          qr.forEach((l) => (r[l] = 0)),
          (r[u[0]] = 1),
          {
            playerName: n || "Treinador",
            affinities: u,
            sintonia: r,
            party: [],
            box: [],
            items: {
              pocao: 0,
              essencia: 3,
              chave: 0,
              doce: 0,
              "nucleo-fusao": 0,
              "chave-sombria": 0,
              "carta-nautica": 0,
              "coracao-magma": 0,
              "gota-abissal": 0,
              "semente-ancia": 0,
              "bobina-volt": 0,
              "nucleo-terrestre": 0,
              "fragmento-umbral": 0,
            },
            ecos: 100,
            equippedRelic: null,
            dexSeen: [],
            dexCaught: [],
            px: 8,
            py: 10,
            dir: 0,
            cutThorns: [],
            boulders: MQ.map((l) => ({ ...l })),
            doorOpen: !1,
            openedChests: [],
            defeated: [],
            visited: [],
            caughtTotal: 0,
            evolvedTotal: 0,
            caveCaptures: {},
            gatedUnlocks: [],
            starterGiven: !1,
            introStep: 0,
            liaGift: !1,
            villageSwitches: [],
            expHome: null,
          }
        );
      }
      function M8(n) {
        let u = n;
        if (typeof u.ecos !== "number") u.ecos = 100;
        if (!u.villageSwitches) u.villageSwitches = [];
        if (u.ecoalmaGiven === void 0) u.ecoalmaGiven = !1;
        if (u.brasalmaGiven === void 0) u.brasalmaGiven = !1;
        if (n.tataAlfaDefeated === void 0) n.tataAlfaDefeated = !1;
        if (n.claimedQuestRewards === void 0) n.claimedQuestRewards = {};
        if (u.inExpansion === void 0) u.inExpansion = !1;
        if (u.visitedExpansion === void 0) u.visitedExpansion = !1;
        if (u.expHome === void 0) u.expHome = null;
        if (typeof u.worldId !== "string")
          u.worldId = u.inExpansion ? "tata" : "main";
        if (!u.worldPositions || typeof u.worldPositions !== "object")
          u.worldPositions = {};
        if (!u.worldPositions.main && u.expHome)
          u.worldPositions.main = { ...u.expHome };
        if (u.sagaFinalReward === void 0) u.sagaFinalReward = !1;
        if (u.nurseFreeUsed === void 0) u.nurseFreeUsed = !1;
        if (u.nurseLastHealAt === void 0) u.nurseLastHealAt = 0;
        if (!u.caveCaptures || typeof u.caveCaptures !== "object")
          u.caveCaptures = {};
        let r = u.items ?? (u.items = {});
        if (r["chave-sombria"] === void 0) r["chave-sombria"] = 0;
        if (r["nucleo-fusao"] === void 0) r["nucleo-fusao"] = 0;
        if (r["carta-nautica"] === void 0) r["carta-nautica"] = 0;
        if (
          ([
            "coracao-magma",
            "gota-abissal",
            "semente-ancia",
            "bobina-volt",
            "nucleo-terrestre",
            "fragmento-umbral",
          ].forEach((l) => {
            if (r[l] === void 0) r[l] = 0;
          }),
          !Array.isArray(u.openedChests))
        )
          u.openedChests = [];
        if (
          ([...(n.party ?? []), ...(n.box ?? [])].forEach((l) => {
            if (!Array.isArray(l.afinidades)) {
              let o = _n(l.sp);
              l.afinidades = J3(o ?? nu.embercub);
            }
          }),
          !Array.isArray(u.defeated))
        )
          u.defeated = [];
        if (!Array.isArray(n.box)) n.box = [];
        if (n.party.length > 3) {
          let l = n.party.splice(3);
          n.box.push(...l);
        }
        return n;
      }
      function CQ(n) {
        if (n.starterGiven) return;
        n.starterGiven = !0;
        let u = Vl(J8[n.affinities[0]], 5);
        (n.party.push(u), (n.items.pocao += 3), rl(n, u.sp), Yl(n, u.sp));
      }
      function rl(n, u) {
        if (!n.dexSeen.includes(u)) n.dexSeen.push(u);
      }
      function Yl(n, u) {
        if (!n.dexCaught.includes(u)) n.dexCaught.push(u);
      }
      function jr(n, u) {
        return n.party.some((r) => r.hp > 0 && _n(r.sp).types.includes(u));
      }
      function d3(n) {
        let u = n.equippedRelic;
        return u ? lr[u].affinity : null;
      }
      function z0(n) {
        let u = n.affinities[0],
          r = -1;
        return (
          qr.forEach((l) => {
            if (n.sintonia[l] > r) ((r = n.sintonia[l]), (u = l));
          }),
          u
        );
      }
      function qQ(n) {
        return n.party.filter((u) => u.hp > 0).length;
      }
      function OQ(n) {
        (n.party.forEach((u) => {
          ((u.hp = zn(u.sp, u.level).maxHp), delete u.healingUntil);
        }),
          n.box.forEach((u) => {
            ((u.hp = zn(u.sp, u.level).maxHp), delete u.healingUntil);
          }));
      }
      function H8(n, u) {
        let r = nu[n];
        if (!r.evo) return null;
        let l = r.evo.findIndex((f) => f.affinity === u);
        if (l < 0) l = 0;
        let o = Kr[n];
        return o && o[l] ? o[l] : null;
      }
      function _o(n, u) {
        let r = u.progressKey,
          l = () => {
            let f = n.dexCaught;
            if (Array.isArray(f)) return f;
            return Object.keys(f ?? {}).filter(($) => (f[$] ?? 0) > 0);
          },
          o = (f) => {
            let $ = n.dexCaught;
            if (Array.isArray($)) return $.includes(f);
            return ($?.[f] ?? 0) > 0;
          };
        switch (r) {
          case "caughtTotal":
            return n.caughtTotal ?? 0;
          case "evolvedTotal":
            return n.evolvedTotal ?? 0;
          case "gatedUnlocks":
            return (n.gatedUnlocks ?? []).length;
          case "defeated":
            return (n.defeated ?? []).length;
          case "dexCaught":
            return (n.dexCaught ?? []).length;
          case "q_fusion_master":
            return new Set(n.hybridsSeen ?? []).size;
          case "questsCompleted":
            return vo.filter(
              (f) =>
                f.id !== "q_master_supremo" &&
                !f.id.startsWith("q_exp_") &&
                _o(n, f) >= f.meta,
            ).length;
          case "visitedExpansion":
            return n.visitedExpansion ? 1 : 0;
          case "vilaLamparina":
            return (n.visited ?? []).includes("vila-lamparina") ? 1 : 0;
          case "marcas":
            return l().filter((f) => f.endsWith("-marca")).length;
          case "maxLevel": {
            let f = [...(n.party ?? []), ...(n.box ?? [])].map(
              ($) => $.level ?? 1,
            );
            return f.length ? Math.max(...f) : 1;
          }
          case "folclore":
            return [
              "saci",
              "boto",
              "curupira",
              "iara",
              "boitata",
              "mula",
              "cuca",
              "lobisomem",
            ].filter(($) => o($)).length;
          case "folcloreCaptures": {
            let f = [
                "saci",
                "boto",
                "curupira",
                "iara",
                "boitata",
                "mula",
                "cuca",
                "lobisomem",
              ],
              $ = n.dexCaught;
            if (Array.isArray($)) return f.filter((_) => $.includes(_)).length;
            if ($ && typeof $ === "object") {
              let _ = 0;
              for (let v of f) {
                let Z = $[v];
                if (typeof Z === "number") _ += Z;
                else if (Z === !0 || Z) _ += 1;
              }
              return _;
            }
            return 0;
          }
          default:
            break;
        }
        if (r.startsWith("has:")) return o(r.slice(4)) ? 1 : 0;
        if (r.startsWith("quest:")) {
          let f = r.slice(6),
            $ = vo.find((_) => _.id === f);
          if (!$ || $.progressKey === r) return 0;
          return _o(n, $) >= ($.meta ?? 1) ? 1 : 0;
        }
        if (r.startsWith("type:")) {
          let f = r.slice(5);
          return (n.dexCaught ?? []).filter(($) => {
            try {
              return _n($).types.includes(f);
            } catch {
              return !1;
            }
          }).length;
        }
        return 0;
      }
      function EQ(n) {
        if (!n.claimedQuestRewards) n.claimedQuestRewards = {};
        let u = [];
        for (let r of vo) {
          if (!r.reward) continue;
          if (n.claimedQuestRewards[r.id]) continue;
          if (!n.visitedExpansion && r.id.startsWith("exp-")) continue;
          if (_o(n, r) < r.meta) continue;
          let l = [];
          if (r.reward.ecos)
            ((n.ecos = (n.ecos ?? 0) + r.reward.ecos),
              l.push(`+${r.reward.ecos} ecos`));
          if (r.reward.item) {
            let o = r.reward.item,
              f = r.reward.qty ?? 1;
            n.items[o] = (n.items[o] ?? 0) + f;
            let $ = ul[o]?.name ?? o;
            l.push(`+${f} ${$}`);
          }
          ((n.claimedQuestRewards[r.id] = !0),
            u.push({ nome: r.nome, reward: l.join(", ") }));
        }
        return u;
      }
      function ml(n, u) {
        try {
          localStorage.setItem("eco-vinculo-save-" + n, JSON.stringify(u));
        } catch {}
      }
      function D8(n) {
        try {
          let u = localStorage.getItem("eco-vinculo-save-" + n);
          return u ? JSON.parse(u) : null;
        } catch {
          return null;
        }
      }
      function LQ(n) {
        try {
          return !!localStorage.getItem("eco-vinculo-save-" + n);
        } catch {
          return !1;
        }
      }
