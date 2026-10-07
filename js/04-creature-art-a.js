/*
 * Eco Vínculo — Arte dos Pats — parte A
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 12517-18809.
 */
"use strict";


      function desenharFaevolta(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 8) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 10) * o * 0.06;

        let corFaisca = "#facc15";
        let sombraFaisca = "#a16207";
        let luzFaisca = "#fef08a";
        let corFlora = "#4ade80";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);
        let wingFlap = Math.sin(tempo * 20) * 0.3 + 0.7;

        [-1, 1].forEach((lado) => {
          n.save();
          n.scale(lado * wingFlap, 1);

          let gradArcoIris = n.createLinearGradient(0, 0, raio * 1.5, -raio * 1.5);
          gradArcoIris.addColorStop(0, corFaisca);
          gradArcoIris.addColorStop(0.33, "#f472b6");
          gradArcoIris.addColorStop(0.66, "#38bdf8");
          gradArcoIris.addColorStop(1, corFlora);

          n.fillStyle = gradArcoIris;
          n.strokeStyle = sombraFaisca;
          n.lineWidth = strokeW;

          n.beginPath();
          n.moveTo(raio * 0.2, 0);
          n.lineTo(raio * 1.4, -raio * 0.2);
          n.lineTo(raio * 0.8, -raio * 0.6);
          n.lineTo(raio * 1.6, -raio * 1.2);
          n.lineTo(raio * 0.6, -raio * 0.8);
          n.lineTo(raio * 0.8, -raio * 1.6);
          n.lineTo(0, -raio * 0.4);
          n.closePath();
          n.fill();
          n.stroke();

          n.beginPath();
          n.moveTo(raio * 0.1, 0);
          n.lineTo(raio * 1.0, raio * 0.4);
          n.lineTo(raio * 0.5, raio * 0.6);
          n.lineTo(raio * 0.8, raio * 1.2);
          n.lineTo(0, raio * 0.5);
          n.closePath();
          n.fill();
          n.stroke();

          n.restore();
        });

        n.fillStyle = corFaisca;
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, -raio * 0.8);
        n.bezierCurveTo(raio * 0.6, -raio * 0.4, raio * 0.5, raio * 0.5, 0, raio * 1.1);
        n.bezierCurveTo(-raio * 0.5, raio * 0.5, -raio * 0.6, -raio * 0.4, 0, -raio * 0.8);
        n.closePath();
        n.fill();
        n.stroke();

        n.fillStyle = corFlora;
        n.beginPath();
        n.moveTo(0, raio * 0.2);
        n.lineTo(raio * 0.3, raio * 0.4);
        n.lineTo(0, raio * 0.6);
        n.lineTo(-raio * 0.3, raio * 0.4);
        n.closePath();
        n.fill();

        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.1, -raio * 0.7);
          n.lineTo(lado * raio * 0.3, -raio * 1.1);
          n.lineTo(lado * raio * 0.2, -raio * 1.3);
          n.lineTo(lado * raio * 0.5, -raio * 1.6);
          n.stroke();

          n.fillStyle = luzFaisca;
          n.beginPath();
          n.arc(lado * raio * 0.5, -raio * 1.6, raio * 0.1, 0, Math.PI * 2);
          n.fill();
        });

        n.fillStyle = corFlora;
        n.strokeStyle = sombraFaisca;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.25, raio * 0.2, raio * 0.08, raio * 0.15, lado * -0.3, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.25, -raio * 0.2, raio * 0.08, raio * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.3;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.3, raio * 0.08, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15 - raio * 0.02, -raio * 0.3 - raio * 0.02, raio * 0.03, 0, Math.PI * 2);
            n.fill();
          });
        }

        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.06, -raio * 0.1);
        n.quadraticCurveTo(0, 0, raio * 0.06, -raio * 0.1);
        n.stroke();

        if (!isFainted) {
          n.fillStyle = luzFaisca;
          n.strokeStyle = sombraFaisca;
          n.lineWidth = strokeW * 0.5;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 5 + i * 2) * raio * 1.5;
            let py = Math.sin(tempo * 6 + i * 1.5) * raio * 1.5;
            n.beginPath();
            n.moveTo(px, py - raio * 0.1);
            n.lineTo(px + raio * 0.05, py);
            n.lineTo(px, py + raio * 0.1);
            n.lineTo(px - raio * 0.05, py);
            n.fill();
            n.stroke();
          }
        }

        n.restore();
      }

      function desenharFlorolith(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2.5) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 3) * o * 0.03;

        let corFlora = "#4ade80";
        let sombraFlora = "#166534";
        let corPedra = "#b08968";
        let sombraPedra = "#5c4a32";
        let luzPedra = "#e7d8c3";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);

        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.45, raio * 0.35, raio * 0.15, raio * 0.2, lado * 0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        n.beginPath();
        n.moveTo(-raio * 0.2, raio * 0.3);
        n.lineTo(0, raio * 0.6);
        n.lineTo(raio * 0.2, raio * 0.3);
        n.fill();
        n.stroke();

        let gradCasco = n.createLinearGradient(0, -raio * 0.5, 0, raio * 0.5);
        gradCasco.addColorStop(0, luzPedra);
        gradCasco.addColorStop(1, corPedra);
        n.fillStyle = gradCasco;
        n.strokeStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.8, raio * 0.3);
        n.bezierCurveTo(-raio * 0.9, -raio * 0.4, -raio * 0.4, -raio * 0.8, 0, -raio * 0.85);
        n.bezierCurveTo(raio * 0.4, -raio * 0.8, raio * 0.9, -raio * 0.4, raio * 0.8, raio * 0.3);
        n.bezierCurveTo(raio * 0.5, raio * 0.4, -raio * 0.5, raio * 0.4, -raio * 0.8, raio * 0.3);
        n.closePath();
        n.fill();
        n.stroke();

        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.3, -raio * 0.2);
        n.lineTo(raio * 0.3, -raio * 0.2);
        n.lineTo(raio * 0.5, raio * 0.1);
        n.lineTo(raio * 0.2, raio * 0.3);
        n.lineTo(-raio * 0.2, raio * 0.3);
        n.lineTo(-raio * 0.5, raio * 0.1);
        n.closePath();
        n.stroke();

        n.beginPath(); n.moveTo(-raio*0.3, -raio*0.2); n.lineTo(-raio*0.5, -raio*0.5); n.stroke();
        n.beginPath(); n.moveTo(raio*0.3, -raio*0.2); n.lineTo(raio*0.5, -raio*0.5); n.stroke();
        n.beginPath(); n.moveTo(raio*0.5, raio*0.1); n.lineTo(raio*0.8, raio*0.1); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.5, raio*0.1); n.lineTo(-raio*0.8, raio*0.1); n.stroke();

        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW;

        let moitaBalanco = Math.sin(tempo * 3) * 0.05;
        n.save();
        n.translate(0, -raio * 0.8);
        n.rotate(moitaBalanco);

        n.beginPath();
        n.arc(0, -raio * 0.2, raio * 0.4, 0, Math.PI * 2);
        n.fill(); n.stroke();
        n.beginPath();
        n.arc(-raio * 0.35, -raio * 0.05, raio * 0.25, 0, Math.PI * 2);
        n.fill(); n.stroke();
        n.beginPath();
        n.arc(raio * 0.35, -raio * 0.05, raio * 0.25, 0, Math.PI * 2);
        n.fill(); n.stroke();

        if (!isFainted) {
          n.fillStyle = "#f472b6";
          [[-raio*0.2, -raio*0.3], [raio*0.25, -raio*0.2], [0, -raio*0.5]].forEach(pos => {
            n.beginPath();
            n.arc(pos[0], pos[1], raio*0.06, 0, Math.PI*2);
            n.fill();
            n.fillStyle = "#fde047";
            n.beginPath();
            n.arc(pos[0], pos[1], raio*0.025, 0, Math.PI*2);
            n.fill();
            n.fillStyle = "#f472b6";
          });
        }
        n.restore();

        n.strokeStyle = corFlora;
        n.lineWidth = strokeW * 1.5;
        [-raio*0.6, -raio*0.2, raio*0.3, raio*0.7].forEach((x, i) => {
           n.beginPath();
           n.moveTo(x, -raio*0.2);
           n.quadraticCurveTo(x + (i%2===0?-raio*0.1:raio*0.1), raio*0.1, x, raio*0.2 + Math.sin(tempo*4+i)*raio*0.05);
           n.stroke();
        });

        n.fillStyle = corPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.4, raio * 0.4, raio * 0.18, raio * 0.25, lado * -0.1, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        n.fillStyle = corPedra;
        n.beginPath();
        n.ellipse(0, raio * 0.2, raio * 0.35, raio * 0.28, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        n.fillStyle = corFlora;
        n.beginPath();
        n.arc(0, raio*0.05, raio*0.25, Math.PI, 0);
        n.fill();

        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.22, raio * 0.28, raio * 0.07, raio * 0.04, 0, 0, Math.PI * 2);
          n.fill();
        });

        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.14, cy = raio * 0.18;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.14, raio * 0.18, raio * 0.07, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.14 - raio * 0.02, raio * 0.18 - raio * 0.02, raio * 0.025, 0, Math.PI * 2);
            n.fill();
          });
        }

        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.08, raio * 0.35);
        n.quadraticCurveTo(0, raio * 0.42, raio * 0.08, raio * 0.35);
        n.stroke();

        if (!isFainted) {
          n.fillStyle = corFlora;
          n.strokeStyle = sombraFlora;
          n.lineWidth = strokeW * 0.5;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 2 + i * 2) * raio * 1.5;
            let py = Math.sin(tempo * 3 + i * 1.5) * raio * 0.8 - raio * 0.2;
            n.save();
            n.translate(px, py);
            n.rotate(tempo * 4 + i);
            n.beginPath();
            n.ellipse(0, 0, raio * 0.06, raio * 0.03, 0, 0, Math.PI * 2);
            n.fill();
            n.stroke();
            n.restore();
          }
        }

        n.restore();
      }

      function desenharMagmarmor(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 4) * o * 0.04;

        let corPedra = "#b08968";
        let sombraPedra = "#5c4a32";
        let luzPedra = "#e7d8c3";
        let corBrasa = "#f97316";
        let luzBrasa = "#fde047";

        n.save();
        (r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);

        // BRAÇOS E PERNAS DE PEDRA
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          // Pernas
          n.beginPath();
          n.ellipse(lado * raio * 0.4, raio * 0.6, raio * 0.2, raio * 0.25, lado * 0.2, 0, Math.PI * 2);
          n.fill();
          n.stroke();
          // Braços
          n.beginPath();
          n.ellipse(lado * raio * 0.6, raio * 0.2, raio * 0.25, raio * 0.2, lado * 0.5, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO CENTRAL (Magma e Rocha)
        let gradCasco = n.createLinearGradient(0, -raio * 0.8, 0, raio * 0.8);
        gradCasco.addColorStop(0, luzPedra);
        gradCasco.addColorStop(1, corPedra);

        n.fillStyle = gradCasco;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.8, raio * 0.85, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // VEIAS DE MAGMA (Rachaduras)
        n.lineJoin = "miter";
        let veias = [
          [[-raio * 0.5, -raio * 0.4], [-raio * 0.2, -raio * 0.1], [raio * 0.1, -raio * 0.3], [raio * 0.4, -raio * 0.1]],
          [[-raio * 0.6, raio * 0.2], [-raio * 0.3, raio * 0.4], [0, raio * 0.2]],
          [[raio * 0.2, raio * 0.5], [raio * 0.5, raio * 0.4], [raio * 0.7, raio * 0.6]]
        ];

        veias.forEach(veia => {
          n.beginPath();
          n.moveTo(veia[0][0], veia[0][1]);
          for (let i = 1; i < veia.length; i++) {
            n.lineTo(veia[i][0], veia[i][1]);
          }
          // Brilho externo laranja
          n.strokeStyle = corBrasa;
          n.lineWidth = strokeW * 2.5;
          n.stroke();
          // Brilho interno amarelo
          n.strokeStyle = luzBrasa;
          n.lineWidth = strokeW * 1.2;
          n.stroke();
        });
        n.lineJoin = "round";

        // CHIFRINHOS/PEDRAS NO TOPO
        n.fillStyle = corPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.2, -raio * 0.8);
          n.lineTo(lado * raio * 0.4, -raio * 1.1);
          n.lineTo(lado * raio * 0.5, -raio * 0.6);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // DETALHES DE ROCHA (Placas)
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 0.8;
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.6); n.lineTo(raio*0.2, -raio*0.7); n.stroke();
        n.beginPath(); n.moveTo(raio*0.5, 0); n.lineTo(raio*0.7, -raio*0.4); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.7, 0); n.lineTo(-raio*0.4, 0.2*raio); n.stroke();

        // ROSTO FOFINHO
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.25, raio * 0.15, raio * 0.08, raio * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15, 0, raio * 0.08, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15 - raio * 0.02, -raio * 0.02, raio * 0.03, 0, Math.PI * 2);
            n.fill();
          });
        }

        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.08, raio * 0.25);
        n.quadraticCurveTo(0, raio * 0.35, raio * 0.08, raio * 0.25);
        n.stroke();

        // PARTÍCULAS (Faíscas de Magma flutuantes)
        if (!isFainted) {
          n.fillStyle = corBrasa;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 3 + i * 2) * raio * 1.2;
            let py = Math.sin(tempo * 4 + i * 1.5) * raio * 0.8 - raio * 0.4;
            n.beginPath();
            n.arc(px, py, raio * 0.06, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = luzBrasa;
            n.beginPath();
            n.arc(px - raio*0.01, py - raio*0.01, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = corBrasa;
          }
        }

        n.restore();
      }

      function desenharNoctibra(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 3) * o * 0.06;

        let corSombra = "#8b5cf6";
        let sombraSombra = "#4c1d95";
        let luzSombra = "#ddd6fe";
        let corBrasa = "#f97316";
        let luzBrasa = "#fed7aa";

        n.save();
        (r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.3 * (1 + (u.stage || 0) * 0.28);
        let flap = Math.sin(tempo * 8) * 0.3 + 0.7;

        // ASAS ESPECTRAIS
        [-1, 1].forEach(lado => {
          n.save();
          n.scale(lado * flap, 1);
          n.fillStyle = sombraSombra;
          n.strokeStyle = corBrasa;
          n.lineWidth = strokeW;
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(raio * 1.5, -raio * 0.5, raio * 1.2, -raio * 1.5, raio * 0.2, -raio * 1.2);
          n.bezierCurveTo(raio * 0.8, -raio * 0.8, raio * 1.0, 0, 0, raio * 0.2);
          n.closePath();
          n.fill();
          n.stroke();

          n.beginPath();
          n.moveTo(raio * 0.2, -raio * 0.2);
          n.lineTo(raio * 0.8, -raio * 0.8);
          n.stroke();
          n.restore();
        });

        // CORPO
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzSombra);
        gradCorpo.addColorStop(1, corSombra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraSombra;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, -raio * 0.1, raio * 0.45, raio * 0.6, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // CAUDA FANTASMAL
        n.beginPath();
        n.moveTo(-raio * 0.2, raio * 0.4);
        n.quadraticCurveTo(0, raio * 1.2 + Math.sin(tempo * 4) * raio * 0.2, raio * 0.2, raio * 0.4);
        n.closePath();
        n.fill();
        n.stroke();

        // ORELHAS DE FOGO NEGRO
        n.fillStyle = corBrasa;
        n.strokeStyle = sombraSombra;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.2, -raio * 0.6);
          n.quadraticCurveTo(lado * raio * 0.4, -raio * 1.2, lado * raio * 0.5, -raio * 0.8);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // BLUSH
        n.fillStyle = "rgba(255, 100, 150, 0.4)";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.22, 0, raio * 0.08, raio * 0.05, 0, 0, Math.PI * 2);
          n.fill();
        });

        // OLHOS
        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.15;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#1e293b";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.15, raio * 0.08, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = "#ffffff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15 - raio * 0.02, -raio * 0.15 - raio * 0.02, raio * 0.03, 0, Math.PI * 2);
            n.fill();
          });
        }

        // SORRISO
        n.strokeStyle = "#1e293b";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.08, raio * 0.05);
        n.quadraticCurveTo(0, raio * 0.15, raio * 0.08, raio * 0.05);
        n.stroke();

        // BRASAS ESPECTRAIS
        if (!isFainted) {
          n.fillStyle = corBrasa;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 2 + i * 1.5) * raio * 1.4;
            let py = Math.sin(tempo * 3 + i * 2) * raio * 0.8 - raio * 0.2;
            n.beginPath();
            n.arc(px, py, raio * 0.06, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = luzBrasa;
            n.beginPath();
            n.arc(px - raio*0.015, py - raio*0.015, raio * 0.025, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = corBrasa;
          }
        }

        n.restore();
      }

      function desenharPetraflor(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.01;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);

        let flutua = Math.sin(tempo * 2.5) * o * 0.02;

        let corPedra = "#78716c";
        let sombraPedra = "#292524";
        let luzPedra = "#a8a29e";
        let corFlora = "#15803d";
        let luzFlora = "#4ade80";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.32 * (1 + (u.stage || 0) * 0.28);

        // BRAÇOS E PERNAS ROCHOSOS (Blocos de granito rígidos)
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          // Pernas curtas e pesadas
          n.beginPath();
          n.rect(lado * raio * 0.38 - raio * 0.15, raio * 0.5, raio * 0.3, raio * 0.35);
          n.fill();
          n.stroke();

          // Ombros/Braços rústicos
          n.beginPath();
          n.moveTo(lado * raio * 0.65, -raio * 0.1);
          n.lineTo(lado * raio * 0.95, raio * 0.2);
          n.lineTo(lado * raio * 0.75, raio * 0.55);
          n.lineTo(lado * raio * 0.5, raio * 0.3);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // TRONCO / MONÓLITO DE GRANITO
        let gradCorpo = n.createLinearGradient(-raio * 0.6, -raio * 0.8, raio * 0.6, raio * 0.8);
        gradCorpo.addColorStop(0, luzPedra);
        gradCorpo.addColorStop(0.5, corPedra);
        gradCorpo.addColorStop(1, sombraPedra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, -raio * 0.85);
        n.lineTo(raio * 0.65, -raio * 0.45);
        n.lineTo(raio * 0.75, raio * 0.45);
        n.lineTo(0, raio * 0.75);
        n.lineTo(-raio * 0.75, raio * 0.45);
        n.lineTo(-raio * 0.65, -raio * 0.45);
        n.closePath();
        n.fill();
        n.stroke();

        // PLAQUINHAS E RACHADURAS DE MINÉRIO
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 0.8;
        n.beginPath(); n.moveTo(0, -raio * 0.85); n.lineTo(0, raio * 0.75); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.65, -raio * 0.45); n.lineTo(0, -raio * 0.1); n.lineTo(raio * 0.65, -raio * 0.45); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.75, raio * 0.45); n.lineTo(0, 0.2 * raio); n.lineTo(raio * 0.75, raio * 0.45); n.stroke();

        // JARDIM RUPESTRE / CRISTA DE LÍQUENES E FLORES DE PEDRA
        n.fillStyle = corFlora;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 0.8;

        // Musgo no topo
        n.beginPath();
        n.moveTo(-raio * 0.5, -raio * 0.55);
        n.lineTo(-raio * 0.2, -raio * 0.95);
        n.lineTo(0, -raio * 0.85);
        n.lineTo(raio * 0.3, -raio * 1.05);
        n.lineTo(raio * 0.55, -raio * 0.55);
        n.closePath();
        n.fill();
        n.stroke();

        // Flores de Rocha / Cactos que desabrocham
        if (!isFainted) {
          [[-raio * 0.2, -raio * 0.95], [raio * 0.3, -raio * 1.05], [0, -raio * 0.85]].forEach((pos, idx) => {
            n.fillStyle = idx === 1 ? "#ec4899" : "#f43f5e";
            n.beginPath();
            for (let i = 0; i < 5; i++) {
              let ang = (i * Math.PI * 2) / 5;
              let px = pos[0] + Math.cos(ang) * raio * 0.12;
              let py = pos[1] + Math.sin(ang) * raio * 0.12;
              if (i === 0) n.moveTo(px, py); else n.lineTo(px, py);
            }
            n.closePath();
            n.fill();
            n.stroke();

            // Miolo Mineral
            n.fillStyle = luzFlora;
            n.beginPath();
            n.arc(pos[0], pos[1], raio * 0.04, 0, Math.PI * 2);
            n.fill();
          });
        }

        // OLHOS IMPONENTES (Fendas brilhantes de energia Flora)
        if (isFainted) {
          n.strokeStyle = "#1e293b";
          n.lineWidth = Math.max(2, o * 0.028);
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.25, cy = -raio * 0.15;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.28;
            let cy = -raio * 0.2;

            // Fenda retangular séria
            n.fillStyle = "#0f172a";
            n.beginPath();
            n.rect(cx - raio * 0.09, cy - raio * 0.06, raio * 0.18, raio * 0.12);
            n.fill();
            n.stroke();

            // Brilho intenso de energia de pedra/flora
            n.fillStyle = luzFlora;
            n.beginPath();
            n.rect(cx - raio * 0.05, cy - raio * 0.04, raio * 0.1, raio * 0.08);
            n.fill();
          });
        }

        // BOCA RIGIDA / BENS ANCESTRAIS
        n.strokeStyle = "#0f172a";
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.15, raio * 0.05);
        n.lineTo(raio * 0.15, raio * 0.05);
        n.stroke();

        n.restore();
      }

      function desenharPyrombra(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.02);

        let flutua = Math.sin(tempo * 4) * o * 0.05;

        let corBrasa = "#ea580c";
        let luzBrasa = "#fde047";
        let corSombra = "#0f172a"; // Fogo negro/roxo muito escuro
        let brilhoSombra = "#4c1d95";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.32 * (1 + (u.stage || 0) * 0.28);

        // AURA DE FOGO NEGRO (Chamas traseiras)
        n.fillStyle = corSombra;
        n.strokeStyle = brilhoSombra;
        n.lineWidth = strokeW * 1.5;

        for(let i = -1; i <= 1; i += 2) {
          n.beginPath();
          let flicker = Math.sin(tempo * 12 + i) * raio * 0.15;
          n.moveTo(0, raio * 0.5);
          n.quadraticCurveTo(i * raio * 0.9, 0, i * raio * 0.5 + flicker, -raio * 0.8 + flicker);
          n.quadraticCurveTo(i * raio * 0.2, -raio * 0.4, 0, -raio * 1.3 + flicker * 1.5);
          n.closePath();
          n.fill();
          n.stroke();
        }

        // CORPO ÍGNEO (Chama central incandescente)
        let gradFogo = n.createLinearGradient(0, -raio * 1.2, 0, raio * 0.6);
        gradFogo.addColorStop(0, corSombra);
        gradFogo.addColorStop(0.5, corBrasa);
        gradFogo.addColorStop(1, luzBrasa);

        n.fillStyle = gradFogo;
        n.strokeStyle = corBrasa;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, raio * 0.6);
        n.bezierCurveTo(raio * 0.7, raio * 0.4, raio * 0.6, -raio * 0.1, 0, -raio * 1.1 + Math.sin(tempo * 15) * raio * 0.1);
        n.bezierCurveTo(-raio * 0.6, -raio * 0.1, -raio * 0.7, raio * 0.4, 0, raio * 0.6);
        n.closePath();
        n.fill();
        n.stroke();

        // NÚCLEO INFERIOR
        n.fillStyle = luzBrasa;
        n.beginPath();
        n.ellipse(0, raio * 0.25, raio * 0.25, raio * 0.2, 0, 0, Math.PI * 2);
        n.fill();

        // OLHOS AMEAÇADORES (Fendas anguladas)
        if (isFainted) {
          n.strokeStyle = corSombra;
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = corSombra;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.08, -raio * 0.02);
            n.lineTo(lado * raio * 0.35, -raio * 0.2); // Ângulo agressivo
            n.lineTo(lado * raio * 0.28, 0);
            n.lineTo(lado * raio * 0.1, raio * 0.1);
            n.closePath();
            n.fill();

            // Ponto de luz sinistro no olho
            n.fillStyle = luzBrasa;
            n.beginPath();
            n.arc(lado * raio * 0.22, -raio * 0.06, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = corSombra;
          });
        }

        // BRASAS NEGRAS FLUTUANTES
        if (!isFainted) {
          n.fillStyle = corSombra;
          n.strokeStyle = corBrasa;
          n.lineWidth = strokeW * 0.5;
          for (let i = 0; i < 4; i++) {
            let px = Math.cos(tempo * 3 + i * 2.1) * raio * 1.1;
            let py = Math.sin(tempo * 4 + i * 1.7) * raio * 0.9 - raio * 0.2;
            n.beginPath();
            n.moveTo(px, py + raio * 0.08);
            n.quadraticCurveTo(px + raio * 0.08, py, px, py - raio * 0.12);
            n.quadraticCurveTo(px - raio * 0.08, py, px, py + raio * 0.08);
            n.fill();
            n.stroke();
          }
        }

        n.restore();
      }

      function desenharRedemuinho(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.025;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let corFaisca = "#facc15";
        let sombraFaisca = "#a16207";
        let luzFaisca = "#fef08a";
        let corCorpo = "#452b17";
        let corGorro = "#dc2626";
        let sombraGorro = "#991b1b";

        let flutua = Math.sin(tempo * 8) * o * 0.08 - o * 0.1;

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.15);

        // REDEMOINHO DE VENTO ELÉTRICO MAIOR
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW;
        n.fillStyle = corFaisca;
        for (let i = 0; i < 5; i++) {
          n.save();
          let yOffset = raio * 0.4 + i * raio * 0.25;
          let w = raio * 0.5 - i * raio * 0.07;
          let h = raio * 0.15 - i * raio * 0.02;
          let sway = Math.sin(tempo * 15 + i * 1.5) * raio * 0.15;
          n.translate(sway, yOffset);
          n.beginPath();
          n.ellipse(0, 0, Math.max(0.1, w), Math.max(0.1, h), 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();
          n.restore();
        }

        // CORPO
        n.fillStyle = corCorpo;
        n.strokeStyle = "#27180d";
        n.beginPath();
        n.ellipse(0, raio * 0.1, raio * 0.35, raio * 0.45, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // BRAÇOS CRUZADOS (Postura de quem vai aprontar)
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.ellipse(lado * raio * 0.2, raio * 0.2, raio * 0.15, raio * 0.08, lado * -0.4, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // GORRO VERMELHO (Maior e desgrenhado pelo vento)
        n.fillStyle = corGorro;
        n.strokeStyle = sombraGorro;
        n.beginPath();
        n.moveTo(-raio * 0.35, -raio * 0.15);
        n.quadraticCurveTo(0, -raio * 0.35, raio * 0.35, -raio * 0.15);
        n.quadraticCurveTo(raio * 0.6, -raio * 0.9, raio * 0.9, -raio * 1.1);
        n.quadraticCurveTo(raio * 0.2, -raio * 1.3, -raio * 0.35, -raio * 0.15);
        n.fill();
        n.stroke();

        n.beginPath();
        n.arc(raio * 0.9, -raio * 1.1, raio * 0.08, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // OLHOS E EXPRESSÃO
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.05;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = "#fff";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.ellipse(lado * raio * 0.15, -raio * 0.05, raio * 0.08, raio * 0.12, lado * 0.2, 0, Math.PI * 2);
            n.fill();
          });
          n.fillStyle = corFaisca;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.05, raio * 0.04, 0, Math.PI * 2);
            n.fill();
          });
        }

        // SORRISO ZOMBETEIRO COM DENTINHO
        n.strokeStyle = "#000";
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(-raio * 0.15, raio * 0.15);
        n.quadraticCurveTo(0, raio * 0.3, raio * 0.2, raio * 0.1);
        n.stroke();

        if(!isFainted) {
          n.fillStyle = "#fff";
          n.beginPath();
          n.moveTo(raio * 0.05, raio * 0.21);
          n.lineTo(raio * 0.12, raio * 0.26);
          n.lineTo(raio * 0.15, raio * 0.15);
          n.fill();
          n.stroke();
        }

        // GRAVETO
        n.strokeStyle = "#78350f";
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(raio * 0.15, raio * 0.15);
        n.lineTo(raio * 0.4, raio * 0.25);
        n.stroke();

        // ESPIRAIS DOURADAS (Faíscas contínuas em hélice)
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW * 1.2;
          n.beginPath();
          for (let i = 0; i <= 30; i++) {
            let t = i / 30;
            let ang = tempo * 8 + t * Math.PI * 6;
            let rOrbit = raio * 0.6 + t * raio * 0.6;
            let px = Math.cos(ang) * rOrbit;
            let py = Math.sin(ang) * (rOrbit * 0.3) + raio * 1.2 - t * raio * 2.5;
            if (i === 0) n.moveTo(px, py);
            else n.lineTo(px, py);
          }
          n.stroke();

          // Raios soltos
          n.fillStyle = luzFaisca;
          for(let i = 0; i < 3; i++) {
             let ang = tempo * 10 + i * 2.1;
             let px = Math.cos(ang) * raio * 1.3;
             let py = Math.sin(ang) * raio * 0.9 + raio * 0.2;
             n.beginPath();
             n.moveTo(px, py - raio * 0.15);
             n.lineTo(px + raio * 0.05, py);
             n.lineTo(px - raio * 0.02, py + raio * 0.1);
             n.lineTo(px - raio * 0.06, py);
             n.fill();
          }
        }

        n.restore();
      }

      function desenharRochombra(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);

        let flutua = Math.sin(tempo * 2.5) * o * 0.03;

        let corPedra = "#57534e";
        let sombraPedra = "#1c1917";
        let luzPedra = "#78716c";
        let corSombra = "#0f172a";
        let brilhoSombra = "#8b5cf6";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.25);

        // AURA QUE ENGOLE A LUZ (Gradiente reverso escuro)
        if (!isFainted) {
          let aura = n.createRadialGradient(0, 0, raio * 0.2, 0, 0, raio * 1.8);
          aura.addColorStop(0, "rgba(15, 23, 42, 0.7)");
          aura.addColorStop(0.5, "rgba(124, 58, 237, 0.15)");
          aura.addColorStop(1, "rgba(15, 23, 42, 0)");
          n.fillStyle = aura;
          n.beginPath();
          n.arc(0, 0, raio * 1.8, 0, Math.PI * 2);
          n.fill();
        }

        // BRAÇOS FLUTUANTES / ROCHAS DEFENSIVAS ORBITAIS
        n.fillStyle = sombraPedra;
        n.strokeStyle = brilhoSombra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          let sway = Math.sin(tempo * 3 + lado) * raio * 0.1;
          n.beginPath();
          n.moveTo(lado * raio * 0.7 + sway, -raio * 0.2);
          n.lineTo(lado * raio * 0.95 + sway, raio * 0.15);
          n.lineTo(lado * raio * 0.65 + sway, raio * 0.45);
          n.lineTo(lado * raio * 0.45 + sway, raio * 0.1);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // CORPO PRINCIPAL (FORTALEZA DE PEDRA)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzPedra);
        gradCorpo.addColorStop(0.5, corPedra);
        gradCorpo.addColorStop(1, sombraPedra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        // Base pesada
        n.moveTo(-raio * 0.65, raio * 0.85);
        n.lineTo(raio * 0.65, raio * 0.85);
        // Lateral direita
        n.lineTo(raio * 0.75, raio * 0.3);
        n.lineTo(raio * 0.55, -raio * 0.4);
        // Topo (Muralhas/Torres da fortaleza)
        n.lineTo(raio * 0.55, -raio * 0.8);
        n.lineTo(raio * 0.25, -raio * 0.6);
        n.lineTo(0, -raio * 0.95);
        n.lineTo(-raio * 0.25, -raio * 0.6);
        n.lineTo(-raio * 0.55, -raio * 0.8);
        // Lateral esquerda
        n.lineTo(-raio * 0.55, -raio * 0.4);
        n.lineTo(-raio * 0.75, raio * 0.3);
        n.closePath();
        n.fill();
        n.stroke();

        // PLACAS DE ARMADURA E RACHADURAS DE ENERGIA SOMBRIA
        n.strokeStyle = brilhoSombra;
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 0.6); n.lineTo(0, raio * 0.4); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.65, 0); n.lineTo(-raio * 0.25, raio * 0.15); n.lineTo(0, -raio * 0.1); n.stroke();
        n.beginPath(); n.moveTo(raio * 0.65, 0); n.lineTo(raio * 0.25, raio * 0.15); n.lineTo(0, -raio * 0.1); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.4, raio * 0.85); n.lineTo(-raio * 0.2, raio * 0.5); n.lineTo(0, raio * 0.4); n.stroke();
        n.beginPath(); n.moveTo(raio * 0.4, raio * 0.85); n.lineTo(raio * 0.2, raio * 0.5); n.lineTo(0, raio * 0.4); n.stroke();

        // Núcleo central pulsante
        n.fillStyle = brilhoSombra;
        n.beginPath(); n.arc(0, -raio * 0.1, Math.max(raio * 0.05, Math.sin(tempo * 5) * raio * 0.08), 0, Math.PI*2); n.fill();

        // OLHOS IMPONENTES (Fendas anguladas sinistras)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.3, cy = raio * 0.25;
            n.beginPath();
            n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
            n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
            n.stroke();
          });
        } else {
          [-1, 1].forEach((lado) => {
            n.fillStyle = corSombra;
            n.beginPath();
            n.moveTo(lado * raio * 0.15, raio * 0.15);
            n.lineTo(lado * raio * 0.45, raio * 0.1); // Ângulo afiado para baixo
            n.lineTo(lado * raio * 0.35, raio * 0.35);
            n.lineTo(lado * raio * 0.2, raio * 0.3);
            n.closePath();
            n.fill();

            // Ponto de luz da pupila (Focado no centro)
            n.fillStyle = brilhoSombra;
            n.beginPath();
            n.arc(lado * raio * 0.25, raio * 0.2, raio * 0.04, 0, Math.PI * 2);
            n.fill();
          });
        }

        n.restore();
      }

      function desenharTerrascal(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);

        let flutua = Math.sin(tempo * 2.5) * o * 0.02;

        let corPedra = "#8b7355";
        let sombraPedra = "#4a3b2c";
        let luzPedra = "#c1a78e";
        let corMagma = "#ea580c";
        let luzMagma = "#fde047";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.25);

        // PERNAS PESADAS DE ROCHA
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.3, raio * 0.4);
          n.lineTo(lado * raio * 0.6, raio * 0.8);
          n.lineTo(lado * raio * 0.2, raio * 0.85);
          n.lineTo(lado * raio * 0.1, raio * 0.5);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // CAUDA CORTANTE DE PEDRA
        n.beginPath();
        n.moveTo(-raio * 0.4, raio * 0.2);
        n.lineTo(-raio * 0.9, raio * 0.4);
        n.lineTo(-raio * 0.5, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // CARAPAÇA PRINCIPAL (Formato de diamante bruto)
        let gradCasco = n.createLinearGradient(0, -raio, 0, raio * 0.5);
        gradCasco.addColorStop(0, luzPedra);
        gradCasco.addColorStop(0.5, corPedra);
        gradCasco.addColorStop(1, sombraPedra);

        n.fillStyle = gradCasco;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;

        n.beginPath();
        n.moveTo(0, -raio * 0.9);
        n.lineTo(raio * 0.6, -raio * 0.5);
        n.lineTo(raio * 0.8, 0);
        n.lineTo(raio * 0.5, raio * 0.6);
        n.lineTo(-raio * 0.5, raio * 0.6);
        n.lineTo(-raio * 0.8, 0);
        n.lineTo(-raio * 0.6, -raio * 0.5);
        n.closePath();
        n.fill();
        n.stroke();

        // PLACAS DA ARMADURA
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 0.9); n.lineTo(0, 0); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.8, 0); n.lineTo(0, 0); n.lineTo(raio * 0.8, 0); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.5, raio * 0.6); n.lineTo(0, 0); n.lineTo(raio * 0.5, raio * 0.6); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.6, -raio * 0.5); n.lineTo(0, 0); n.lineTo(raio * 0.6, -raio * 0.5); n.stroke();

        // FISSURAS LUMINOSAS (Magma pulsante)
        if (!isFainted) {
          let brilhoMagma = Math.sin(tempo * 5) * 0.5 + 0.5;
          n.strokeStyle = corMagma;
          n.lineWidth = strokeW * 1.5;
          n.beginPath(); n.moveTo(-raio * 0.3, 0); n.lineTo(-raio * 0.1, raio * 0.3); n.stroke();
          n.beginPath(); n.moveTo(raio * 0.3, 0); n.lineTo(raio * 0.1, raio * 0.3); n.stroke();

          n.strokeStyle = luzMagma;
          n.lineWidth = strokeW * 0.5;
          n.globalAlpha = brilhoMagma;
          n.beginPath(); n.moveTo(-raio * 0.3, 0); n.lineTo(-raio * 0.1, raio * 0.3); n.stroke();
          n.beginPath(); n.moveTo(raio * 0.3, 0); n.lineTo(raio * 0.1, raio * 0.3); n.stroke();
          n.globalAlpha = 1;
        }

        // CHIFRES ROBUSTOS (Herança do Brascal)
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.4, -raio * 0.7);
          n.lineTo(lado * raio * 0.7, -raio * 1.1);
          n.lineTo(lado * raio * 0.7, -raio * 0.4);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // ELMO DA ARMADURA (Rosto cravado na pedra)
        n.fillStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.3, raio * 0.1);
        n.lineTo(raio * 0.3, raio * 0.1);
        n.lineTo(raio * 0.2, raio * 0.4);
        n.lineTo(-raio * 0.2, raio * 0.4);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS (Fendas de Magma agressivas)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = raio * 0.25;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          [-1, 1].forEach((lado) => {
            n.fillStyle = corMagma;
            n.beginPath();
            n.moveTo(lado * raio * 0.05, raio * 0.2);
            n.lineTo(lado * raio * 0.25, raio * 0.25);
            n.lineTo(lado * raio * 0.15, raio * 0.35);
            n.closePath();
            n.fill();

            n.fillStyle = luzMagma;
            n.beginPath();
            n.arc(lado * raio * 0.15, raio * 0.25, raio * 0.03, 0, Math.PI * 2);
            n.fill();
          });
        }

        // MANDÍBULA TRAVADA
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.15, raio * 0.5);
        n.lineTo(raio * 0.15, raio * 0.5);
        n.stroke();

        n.restore();
      }

      function desenharTidalvolt(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);

        // Movimento de "surf" agressivo
        let flutua = Math.sin(tempo * 5) * o * 0.06;

        let corMare = "#0284c7";
        let sombraMare = "#0c4a6e";
        let luzMare = "#38bdf8";
        let corFaisca = "#facc15";
        let luzFaisca = "#fef08a";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // ONDA DA TEMPESTADE (O Tidalvolt surfa sobre ela)
        if (!isFainted) {
          n.strokeStyle = luzMare;
          n.lineWidth = strokeW * 1.5;
          let waveOffset = Math.sin(tempo * 8) * raio * 0.1;
          n.beginPath();
          n.moveTo(-raio * 1.4, raio * 0.8 + waveOffset);
          n.quadraticCurveTo(-raio * 0.7, raio * 1.2, 0, raio * 0.9 - waveOffset);
          n.quadraticCurveTo(raio * 0.7, raio * 0.6, raio * 1.4, raio * 1.0 + waveOffset);
          n.stroke();

          n.strokeStyle = corMare;
          n.lineWidth = strokeW;
          n.beginPath();
          n.moveTo(-raio * 1.2, raio * 1.1 + waveOffset);
          n.quadraticCurveTo(0, raio * 1.5, raio * 1.2, raio * 1.3 - waveOffset);
          n.stroke();
        }

        // CAUDA DE RELÂMPAGO (Atrás)
        n.fillStyle = corFaisca;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.2, -raio * 0.5);
        n.lineTo(-raio * 0.5, -raio * 1.3);
        n.lineTo(0, -raio * 0.9);
        n.lineTo(raio * 0.4, -raio * 1.5);
        n.lineTo(raio * 0.1, -raio * 0.6);
        n.closePath();
        n.fill();
        n.stroke();

        // ASAS DE MANTA RAY (Extremidades em ziguezague elétrico)
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 1.2;

        let baterAsa = Math.sin(tempo * 12) * raio * 0.15;

        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(0, raio * 0.7); // Focinho
          // Borda de ataque aerodinâmica
          n.quadraticCurveTo(lado * raio * 0.8, raio * 0.2, lado * raio * 1.6, -raio * 0.2 + baterAsa);
          // Borda de fuga (Ziguezague de energia)
          n.lineTo(lado * raio * 1.1, -raio * 0.05 + baterAsa * 0.8);
          n.lineTo(lado * raio * 1.3, raio * 0.15 + baterAsa * 0.6);
          n.lineTo(lado * raio * 0.6, raio * 0.05 + baterAsa * 0.3);
          n.lineTo(lado * raio * 0.8, raio * 0.3);
          n.lineTo(0, -raio * 0.4); // Conecta nas costas
          n.closePath();
          n.fill();
          n.stroke();

          // Veias de energia nas asas
          if (!isFainted) {
            n.strokeStyle = luzFaisca;
            n.lineWidth = strokeW * 0.6;
            n.beginPath();
            n.moveTo(lado * raio * 0.4, raio * 0.1);
            n.lineTo(lado * raio * 1.0, -raio * 0.05 + baterAsa * 0.8);
            n.stroke();
          }
        });

        // CORPO PRINCIPAL (Torpedo elegante)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, sombraMare);
        gradCorpo.addColorStop(0.6, corMare);
        gradCorpo.addColorStop(1, luzMare);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.ellipse(0, raio * 0.15, raio * 0.35, raio * 0.75, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // PLACAS CONDUTORAS NO DORSO (Ouro/Amarelo)
        n.fillStyle = corFaisca;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(0, -raio * 0.4);
        n.lineTo(raio * 0.15, -raio * 0.1);
        n.lineTo(0, raio * 0.2);
        n.lineTo(-raio * 0.15, -raio * 0.1);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS PREDADORES (Agressivos, sem pupilas brancas fofas)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.18, cy = raio * 0.4;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          [-1, 1].forEach((lado) => {
            // Fenda escura
            n.fillStyle = "#0f172a";
            n.beginPath();
            n.moveTo(lado * raio * 0.1, raio * 0.45);
            n.lineTo(lado * raio * 0.3, raio * 0.32); // Angulado para baixo (raiva)
            n.lineTo(lado * raio * 0.25, raio * 0.5);
            n.closePath();
            n.fill();

            // Foco de energia pura no olho
            n.fillStyle = luzFaisca;
            n.beginPath();
            n.arc(lado * raio * 0.22, raio * 0.42, raio * 0.04, 0, Math.PI * 2);
            n.fill();
          });
        }

        // ARCOS ELÉTRICOS (Orbitando a criatura)
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW;
          for (let i = 0; i < 3; i++) {
            let sparkAng = tempo * 8 + i * 2.1;
            let dist = raio * 1.3 + Math.sin(tempo * 15 + i) * raio * 0.2;
            let px = Math.cos(sparkAng) * dist;
            let py = Math.sin(sparkAng) * (dist * 0.5); // Órbita elíptica

            n.beginPath();
            n.moveTo(px, py);
            n.lineTo(px + raio * 0.15, py - raio * 0.15);
            n.lineTo(px + raio * 0.05, py + raio * 0.1);
            n.lineTo(px - raio * 0.1, py + raio * 0.2);
            n.stroke();
          }
        }

        n.restore();
      }

      function desenharTidolith(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);

        let flutua = Math.sin(tempo * 2.5) * o * 0.04;

        let corPedra = "#57534e";
        let sombraPedra = "#292524";
        let luzPedra = "#a8a29e";
        let corMare = "#0284c7";
        let luzMare = "#7dd3fc";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // BASE DA ILHA (Rochedo invertido)
        let gradRocha = n.createLinearGradient(0, -raio, 0, raio);
        gradRocha.addColorStop(0, luzPedra);
        gradRocha.addColorStop(0.5, corPedra);
        gradRocha.addColorStop(1, sombraPedra);

        n.fillStyle = gradRocha;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.9, -raio * 0.4);
        n.lineTo(-raio * 0.4, raio * 0.8);
        n.lineTo(raio * 0.4, raio * 0.8);
        n.lineTo(raio * 0.9, -raio * 0.4);
        n.lineTo(raio * 0.5, -raio * 0.8);
        n.lineTo(-raio * 0.5, -raio * 0.8);
        n.closePath();
        n.fill();
        n.stroke();

        // RELEVO E FISSURAS
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(-raio * 0.5, -raio * 0.8); n.lineTo(-raio * 0.2, 0); n.lineTo(-raio * 0.4, raio * 0.8); n.stroke();
        n.beginPath(); n.moveTo(raio * 0.5, -raio * 0.8); n.lineTo(raio * 0.2, 0); n.lineTo(raio * 0.4, raio * 0.8); n.stroke();

        // CASCATA DE ÁGUA VIVA (Magia de Maré)
        if (!isFainted) {
          n.fillStyle = luzMare;
          n.strokeStyle = corMare;
          n.lineWidth = strokeW * 0.8;
          let fluxo = Math.sin(tempo * 6) * raio * 0.05;
          n.beginPath();
          n.moveTo(-raio * 0.2, -raio * 0.7);
          n.quadraticCurveTo(fluxo, -raio * 0.2, -raio * 0.1, raio * 0.5);
          n.lineTo(raio * 0.1, raio * 0.5);
          n.quadraticCurveTo(fluxo, -raio * 0.2, raio * 0.2, -raio * 0.7);
          n.closePath();
          n.fill();
          n.stroke();

          // Partículas de água caindo
          n.fillStyle = "#ffffff";
          for(let i=0; i<3; i++) {
             let py = -raio * 0.5 + ((tempo * 2 + i) % 1) * raio * 1.2;
             n.beginPath(); n.arc(fluxo, py, raio * 0.04, 0, Math.PI * 2); n.fill();
          }
        }

        // PICO DA ILHA E MUSGO
        n.fillStyle = "#15803d";
        n.strokeStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.6, -raio * 0.6);
        n.lineTo(0, -raio * 1.1);
        n.lineTo(raio * 0.6, -raio * 0.6);
        n.lineTo(raio * 0.2, -raio * 0.7);
        n.lineTo(-raio * 0.2, -raio * 0.7);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS ANCESTRAIS (Brilho das profundezas)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.4, cy = raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.ellipse(lado * raio * 0.4, raio * 0.1, raio * 0.08, raio * 0.12, 0, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = luzMare;
            n.beginPath();
            n.arc(lado * raio * 0.4, raio * 0.08, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        n.restore();
      }

      function desenharUmbralith(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);

        let flutua = Math.sin(tempo * 2) * o * 0.08;

        let corSombra = "#4c1d95";
        let sombraSombra = "#1e1b4b";
        let luzSombra = "#a78bfa";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // MONÓLITO PRINCIPAL (Formato de cristal afiado)
        let gradCristal = n.createLinearGradient(-raio * 0.5, 0, raio * 0.5, 0);
        gradCristal.addColorStop(0, sombraSombra);
        gradCristal.addColorStop(0.5, corSombra);
        gradCristal.addColorStop(1, luzSombra);

        n.fillStyle = gradCristal;
        n.strokeStyle = sombraSombra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, -raio * 1.2);
        n.lineTo(raio * 0.5, -raio * 0.4);
        n.lineTo(raio * 0.4, raio * 0.6);
        n.lineTo(0, raio * 1.2);
        n.lineTo(-raio * 0.4, raio * 0.6);
        n.lineTo(-raio * 0.5, -raio * 0.4);
        n.closePath();
        n.fill();
        n.stroke();

        // FACETAS DO CRISTAL
        n.strokeStyle = "rgba(0,0,0,0.5)";
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 1.2); n.lineTo(0, raio * 1.2); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.5, -raio * 0.4); n.lineTo(0, -raio * 0.2); n.lineTo(raio * 0.5, -raio * 0.4); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.4, raio * 0.6); n.lineTo(0, raio * 0.4); n.lineTo(raio * 0.4, raio * 0.6); n.stroke();

        // OLHOS SILENCIOSOS E VAZIOS
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = -raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#020617";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, -raio * 0.15);
            n.lineTo(lado * raio * 0.3, -raio * 0.2);
            n.lineTo(lado * raio * 0.25, 0);
            n.lineTo(lado * raio * 0.1, 0);
            n.closePath();
            n.fill();

            n.fillStyle = luzSombra;
            n.beginPath();
            n.arc(lado * raio * 0.2, -raio * 0.1, raio * 0.02, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#020617";
          });
        }

        // FRAGMENTOS ORBITAIS (Mova sem som)
        if (!isFainted) {
          n.fillStyle = corSombra;
          n.strokeStyle = luzSombra;
          n.lineWidth = strokeW * 0.5;
          for(let i=0; i<3; i++) {
            let ang = tempo * 2 + i * 2.1;
            let px = Math.cos(ang) * raio * 1.1;
            let py = Math.sin(ang) * raio * 0.4 + raio * 0.4;
            n.beginPath();
            n.moveTo(px, py - raio * 0.15);
            n.lineTo(px + raio * 0.1, py);
            n.lineTo(px, py + raio * 0.15);
            n.lineTo(px - raio * 0.1, py);
            n.closePath();
            n.fill();
            n.stroke();
          }
        }

        n.restore();
      }

      function desenharUmbravolt(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 5) * o * 0.05;

        let corSombra = "#1e1b4b";
        let sombraSombra = "#020617";
        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // AURA ELÉTRICA EXTERNA
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW * 0.8;
          for (let i = 0; i < 5; i++) {
            let ang = tempo * 10 + i * 1.2;
            let extX = Math.cos(ang) * raio * 1.4;
            let extY = Math.sin(ang) * raio * 1.4;
            n.beginPath();
            n.moveTo(0, 0);
            n.lineTo(extX * 0.5, extY * 0.8 + Math.sin(tempo*20)*raio*0.2);
            n.lineTo(extX, extY);
            n.stroke();
          }
        }

        // ESFERA DE SOMBRA (Corpo)
        let gradCorpo = n.createRadialGradient(0, -raio*0.2, raio*0.2, 0, 0, raio);
        gradCorpo.addColorStop(0, corSombra);
        gradCorpo.addColorStop(1, sombraSombra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = luzFaisca;
        n.lineWidth = strokeW;
        n.beginPath();
        n.arc(0, 0, raio, 0, Math.PI * 2);
        n.fill();

        // Aro elétrico ao redor da esfera
        n.setLineDash([raio * 0.2, raio * 0.1]);
        n.stroke();
        n.setLineDash([]);

        // CHIFRE DE RELÂMPAGO
        n.fillStyle = corFaisca;
        n.strokeStyle = luzFaisca;
        n.lineWidth = strokeW * 1.2;
        n.beginPath();
        n.moveTo(-raio * 0.2, -raio * 0.8);
        n.lineTo(0, -raio * 1.5);
        n.lineTo(raio * 0.2, -raio * 0.8);
        n.lineTo(0, -raio * 0.9);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS (Fendas afiadas e elétricas)
        if (isFainted) {
          n.strokeStyle = corFaisca;
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.3, cy = -raio * 0.2;
            n.beginPath();
            n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
            n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
            n.stroke();
          });
        } else {
          n.fillStyle = luzFaisca;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.2, -raio * 0.1);
            n.lineTo(lado * raio * 0.45, -raio * 0.3);
            n.lineTo(lado * raio * 0.35, -raio * 0.05);
            n.lineTo(lado * raio * 0.15, 0);
            n.closePath();
            n.fill();
          });
        }

        n.restore();
      }

      function desenharVirasselva(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.5, o * 0.018);

        let flutua = Math.sin(tempo * 3) * o * 0.05;

        let corFlora = "#16a34a";
        let sombraFlora = "#14532d";
        let luzFlora = "#4ade80";
        let corMadeira = "#78350f";
        let sombraMadeira = "#451a03";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.32 * (1 + (u.stage || 0) * 0.2);

        // CAJADO RÚSTICO E TORTO (Mão de trás)
        n.strokeStyle = sombraMadeira;
        n.lineWidth = strokeW * 3;
        n.beginPath();
        n.moveTo(raio * 0.6, -raio * 1.2);
        n.lineTo(raio * 0.5, raio * 1.1);
        n.stroke();
        n.strokeStyle = corMadeira;
        n.lineWidth = strokeW * 1.5;
        n.stroke();

        // PÉS VIRADOS PARA TRÁS (Curupira)
        n.fillStyle = sombraFlora;
        n.strokeStyle = sombraMadeira;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          // Repare que o pé aponta para trás (lado direito, x positivo)
          n.ellipse(lado * raio * 0.3 + raio * 0.1, raio * 0.8, raio * 0.2, raio * 0.1, 0, 0, Math.PI * 2);
          n.fill();
          n.stroke();
        });

        // CORPO / JUBA DE FOLHAS SELVAGENS
        let gradCorpo = n.createRadialGradient(0, 0, raio * 0.2, 0, 0, raio);
        gradCorpo.addColorStop(0, luzFlora);
        gradCorpo.addColorStop(0.8, corFlora);
        gradCorpo.addColorStop(1, sombraFlora);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;

        n.beginPath();
        let pontas = 8;
        for (let i = 0; i < pontas; i++) {
          let ang = (i * Math.PI * 2) / pontas;
          let dist = raio * (0.8 + Math.sin(tempo * 5 + i * 2) * 0.1);
          let px = Math.cos(ang) * dist;
          let py = Math.sin(ang) * dist;
          if (i === 0) n.moveTo(px, py);
          else n.quadraticCurveTo(0, 0, px, py);
        }
        n.closePath();
        n.fill();
        n.stroke();

        // MÁSCARA/ROSTO NA SOMBRA DAS FOLHAS
        n.fillStyle = sombraMadeira;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.45, raio * 0.35, 0, 0, Math.PI * 2);
        n.fill();

        // OLHOS FEROZES (Brilham na escuridão da máscara)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = luzFlora;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, -raio * 0.1);
            n.lineTo(lado * raio * 0.3, -raio * 0.05);
            n.lineTo(lado * raio * 0.25, raio * 0.1);
            n.lineTo(lado * raio * 0.1, 0);
            n.closePath();
            n.fill();
          });
        }

        // BRAÇOS E MÃOS SEGURANDO O CAJADO
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW;
        n.beginPath();
        n.arc(raio * 0.5, raio * 0.2, raio * 0.15, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        n.restore();
      }

      function desenharVoltaquas(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 6) * o * 0.05;

        let corFaisca = "#facc15";
        let sombraFaisca = "#ca8a04";
        let luzFaisca = "#fef08a";
        let corMare = "#0ea5e9";
        let sombraMare = "#0369a1";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // ONDAS DE CHOQUE (Pulsos emitidos pelo gerador)
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          for(let i=0; i<3; i++) {
            let p = (tempo * 2 + i/3) % 1;
            n.globalAlpha = 1 - p;
            n.lineWidth = strokeW * 2 * (1-p);
            n.beginPath();
            n.ellipse(0, 0, raio * (1 + p*1.5), raio * (0.6 + p), 0, 0, Math.PI * 2);
            n.stroke();
          }
          n.globalAlpha = 1;
        }

        // BARBATANAS DORSAIS ELÉTRICAS
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 1.2;
        n.beginPath();
        n.moveTo(0, -raio * 0.6);
        for(let i=0; i<4; i++) {
           let x = -raio * 0.3 + i * raio * 0.3;
           n.lineTo(x - raio*0.1, -raio * 1.2 + Math.sin(tempo*15+i)*raio*0.1);
           n.lineTo(x + raio*0.1, -raio * 0.6);
        }
        n.fill();
        n.stroke();

        // CORPO DE LEVIATÃ (Alongado e robusto)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzFaisca);
        gradCorpo.addColorStop(0.5, corFaisca);
        gradCorpo.addColorStop(1, sombraFaisca);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 1.2, 0); // Cauda
        n.bezierCurveTo(-raio * 0.8, -raio * 0.9, raio * 0.6, -raio * 0.9, raio * 0.9, -raio * 0.2); // Costas
        n.bezierCurveTo(raio * 1.1, 0, raio * 0.9, raio * 0.4, raio * 0.6, raio * 0.6); // Focinho
        n.bezierCurveTo(0, raio * 0.8, -raio * 0.6, raio * 0.5, -raio * 1.2, 0); // Barriga
        n.closePath();
        n.fill();
        n.stroke();

        // CAUDA CONDUTORA
        n.fillStyle = corMare;
        n.beginPath();
        n.moveTo(-raio * 1.1, 0);
        n.lineTo(-raio * 1.6, -raio * 0.4);
        n.lineTo(-raio * 1.4, 0);
        n.lineTo(-raio * 1.6, raio * 0.4);
        n.closePath();
        n.fill();
        n.stroke();

        // NADADEIRAS LATERAIS (Com fendas de energia)
        [-1, 1].forEach(lado => {
           n.fillStyle = corMare;
           n.beginPath();
           n.moveTo(0, 0);
           n.bezierCurveTo(raio * 0.2, lado * raio * 0.8, -raio * 0.4, lado * raio * 0.6, -raio * 0.6, 0);
           n.fill();
           n.stroke();

           if (!isFainted) {
             n.strokeStyle = luzFaisca;
             n.lineWidth = strokeW;
             n.beginPath();
             n.moveTo(-raio*0.1, lado*raio*0.2); n.lineTo(-raio*0.3, lado*raio*0.4);
             n.stroke();
           }
        });

        // OLHOS FEROZES E BRILHANTES
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          let cx = raio * 0.6, cy = -raio * 0.1;
          n.beginPath();
          n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
          n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
          n.stroke();
        } else {
          n.fillStyle = "#0f172a";
          n.beginPath();
          n.moveTo(raio * 0.5, -raio * 0.2);
          n.lineTo(raio * 0.8, -raio * 0.1);
          n.lineTo(raio * 0.7, 0);
          n.lineTo(raio * 0.55, -raio * 0.05);
          n.closePath();
          n.fill();

          n.fillStyle = luzFaisca;
          n.beginPath();
          n.arc(raio * 0.65, -raio * 0.1, raio * 0.04, 0, Math.PI * 2);
          n.fill();
        }

        // BOCA DENTADA (Eletricidade estática)
        n.strokeStyle = "#0f172a";
        n.beginPath();
        n.moveTo(raio * 0.4, raio * 0.3);
        n.lineTo(raio * 0.6, raio * 0.4);
        n.lineTo(raio * 0.8, raio * 0.2);
        n.stroke();

        n.restore();
      }

      function desenharVoltsombra(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 8) * 0.01;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);

        let flutua = Math.sin(tempo * 4) * o * 0.06;

        let corFaisca = "#facc15";
        let luzFaisca = "#fef08a";
        let corSombra = "#1e1b4b";
        let sombraSombra = "#020617";
        let brilhoSombra = "#8b5cf6";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.35 * (1 + (u.stage || 0) * 0.2);

        // NUVEM TEMPESTUOSA NEGRA (Fundo)
        if (!isFainted) {
          n.fillStyle = sombraSombra;
          n.beginPath();
          for(let i=0; i<6; i++) {
             let ang = (i/6)*Math.PI*2 + tempo;
             let dist = raio * 1.2 + Math.sin(tempo*3+i)*raio*0.2;
             if(i===0) n.moveTo(Math.cos(ang)*dist, Math.sin(ang)*dist);
             else n.lineTo(Math.cos(ang)*dist, Math.sin(ang)*dist);
          }
          n.closePath();
          n.fill();
        }

        // NÚCLEO PRISMÁTICO (Diamante central)
        let gradCristal = n.createLinearGradient(-raio, 0, raio, 0);
        gradCristal.addColorStop(0, corFaisca);
        gradCristal.addColorStop(0.5, luzFaisca);
        gradCristal.addColorStop(1, corFaisca);

        n.fillStyle = gradCristal;
        n.strokeStyle = sombraSombra;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(0, -raio * 1.2);
        n.lineTo(raio * 0.6, 0);
        n.lineTo(0, raio * 1.2);
        n.lineTo(-raio * 0.6, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // FACETAS DO PRISMA
        n.strokeStyle = "rgba(0,0,0,0.3)";
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 1.2); n.lineTo(0, raio * 1.2); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.6, 0); n.lineTo(raio * 0.6, 0); n.stroke();

        // RAIOS NEGROS E ROXOS (Cortando o cristal)
        if (!isFainted) {
           n.strokeStyle = brilhoSombra;
           n.lineWidth = strokeW * 1.5;
           n.beginPath();
           n.moveTo(-raio * 0.5, -raio * 0.5);
           n.lineTo(0, 0);
           n.lineTo(raio * 0.4, Math.sin(tempo*15)*raio*0.2);
           n.lineTo(raio * 0.8, -raio * 0.3);
           n.stroke();
        }

        // OLHOS (Fendas escuras que encaram fixamente)
        if (isFainted) {
          n.strokeStyle = sombraSombra;
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = sombraSombra;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, -raio * 0.1);
            n.lineTo(lado * raio * 0.3, -raio * 0.2);
            n.lineTo(lado * raio * 0.25, raio * 0.1);
            n.lineTo(lado * raio * 0.1, 0);
            n.closePath();
            n.fill();

            n.fillStyle = brilhoSombra;
            n.beginPath();
            n.arc(lado * raio * 0.2, -raio * 0.05, raio * 0.03, 0, Math.PI*2);
            n.fill();
            n.fillStyle = sombraSombra;
          });
        }

        n.restore();
      }

      function desenharVulcabra(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        // Movimento pesado
        let esc = 1 + Math.sin(tempo * 2) * 0.01;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.02);
        let flutua = Math.sin(tempo * 3) * o * 0.02;

        let corPedra = "#4a3b2c";
        let luzPedra = "#8b7355";
        let sombraPedra = "#27180d";
        let corBrasa = "#ea580c";
        let luzBrasa = "#fde047";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.38 * (1 + (u.stage || 0) * 0.2);

        // MAGMA JORRANDO (Cratera nas costas/topo)
        if (!isFainted) {
          n.fillStyle = corBrasa;
          n.beginPath();
          n.moveTo(-raio * 0.4, -raio * 0.8);
          n.lineTo(-raio * 0.6, -raio * 1.4 + Math.sin(tempo*8)*raio*0.2);
          n.lineTo(0, -raio * 1.1);
          n.lineTo(raio * 0.6, -raio * 1.5 + Math.cos(tempo*7)*raio*0.2);
          n.lineTo(raio * 0.4, -raio * 0.8);
          n.fill();

          n.fillStyle = luzBrasa;
          n.beginPath();
          n.arc(0, -raio * 1.2, raio * 0.15, 0, Math.PI*2);
          n.fill();
        }

        // BRAÇOS E PERNAS (Grosseiros e atarracados)
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach(lado => {
           // Perna
           n.beginPath();
           n.rect(lado * raio * 0.4 - raio * 0.15, raio * 0.6, raio * 0.3, raio * 0.3);
           n.fill(); n.stroke();
           // Braço
           n.beginPath();
           n.moveTo(lado * raio * 0.6, 0);
           n.lineTo(lado * raio * 0.9, raio * 0.4);
           n.lineTo(lado * raio * 0.5, raio * 0.5);
           n.closePath();
           n.fill(); n.stroke();
        });

        // CORPO VULCÂNICO (Formato cônico / montanha)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, corPedra);
        gradCorpo.addColorStop(1, sombraPedra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.4, -raio * 0.8); // Topo esquerdo (Cratera)
        n.lineTo(raio * 0.4, -raio * 0.8);  // Topo direito
        n.lineTo(raio * 0.8, raio * 0.6);   // Base direita
        n.lineTo(-raio * 0.8, raio * 0.6);  // Base esquerda
        n.closePath();
        n.fill();
        n.stroke();

        // PLACAS E VEIAS DE MAGMA
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(-raio * 0.2, -raio * 0.8); n.lineTo(-raio * 0.4, raio * 0.6); n.stroke();
        n.beginPath(); n.moveTo(raio * 0.2, -raio * 0.8); n.lineTo(raio * 0.4, raio * 0.6); n.stroke();

        if (!isFainted) {
          n.strokeStyle = corBrasa;
          n.lineWidth = strokeW * 1.5;
          n.beginPath();
          n.moveTo(-raio * 0.3, 0);
          n.lineTo(0, raio * 0.2);
          n.lineTo(raio * 0.3, 0);
          n.stroke();
        }

        // ROSTO BRUTAL
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.25, cy = -raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.15, -raio * 0.2);
            n.lineTo(lado * raio * 0.4, -raio * 0.05);
            n.lineTo(lado * raio * 0.25, 0);
            n.closePath();
            n.fill();

            n.fillStyle = luzBrasa;
            n.beginPath();
            n.arc(lado * raio * 0.25, -raio * 0.1, raio * 0.03, 0, Math.PI*2);
            n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        // BOCA DE FENDA (Mau humor)
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.2, raio * 0.3);
        n.lineTo(raio * 0.2, raio * 0.25);
        n.stroke();

        n.restore();
      }

      function desenharAbissalga20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2.5) * o * 0.06;

        let corMare = "#0369a1";
        let sombraMare = "#082f49";
        let corFlora = "#15803d";
        let luzFlora = "#4ade80";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.38 * (1 + (u.stage || 0) * 0.2);

        // TENTÁCULOS DE ALGAS MACIÇAS (KRAKEN)
        n.fillStyle = sombraMare;
        n.strokeStyle = corFlora;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach(lado => {
           for(let i = 0; i < 3; i++) {
             n.beginPath();
             let offset = i * 0.5;
             let ang = Math.sin(tempo * 4 + offset * lado) * 0.2;
             n.moveTo(lado * raio * 0.4, 0);
             n.quadraticCurveTo(lado * raio * (1 + offset), raio * (0.8 + offset), lado * raio * (0.5 + ang * 2), raio * (1.5 + offset * 0.5));
             n.quadraticCurveTo(lado * raio * 0.2, raio * 0.8, 0, raio * 0.5);
             n.fill();
             n.stroke();
           }
        });

        // CORPO KRAKEN
        let gradCorpo = n.createLinearGradient(0, -raio * 1.2, 0, raio * 0.5);
        gradCorpo.addColorStop(0, sombraMare);
        gradCorpo.addColorStop(0.6, corMare);
        gradCorpo.addColorStop(1, corFlora);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(0, -raio * 1.2);
        n.bezierCurveTo(raio * 1.2, -raio * 1.0, raio * 0.8, raio * 0.6, 0, raio * 0.8);
        n.bezierCurveTo(-raio * 0.8, raio * 0.6, -raio * 1.2, -raio * 1.0, 0, -raio * 1.2);
        n.closePath();
        n.fill();
        n.stroke();

        // CARAPAÇA DE ALGAS ESPINHENTAS
        n.fillStyle = corFlora;
        n.strokeStyle = sombraMare;
        n.beginPath();
        n.moveTo(0, -raio * 1.3);
        n.lineTo(raio * 0.5, -raio * 0.8);
        n.lineTo(raio * 0.2, -raio * 0.5);
        n.lineTo(0, -raio * 0.6);
        n.lineTo(-raio * 0.2, -raio * 0.5);
        n.lineTo(-raio * 0.5, -raio * 0.8);
        n.closePath();
        n.fill();
        n.stroke();

        // DETALHES BIOLUMINESCENTES
        if (!isFainted) {
           n.fillStyle = luzFlora;
           [[-raio * 0.4, -raio * 0.2], [raio * 0.4, -raio * 0.2], [0, raio * 0.3]].forEach(pos => {
             n.beginPath();
             n.arc(pos[0], pos[1], raio * 0.06, 0, Math.PI * 2);
             n.fill();
           });
        }

        // OLHO ÚNICO ATERRORIZANTE
        if (isFainted) {
           n.strokeStyle = "#000";
           n.lineWidth = strokeW * 2;
           n.beginPath();
           n.moveTo(-raio * 0.2, -raio * 0.2); n.lineTo(raio * 0.2, 0.2 * raio);
           n.moveTo(raio * 0.2, -raio * 0.2); n.lineTo(-raio * 0.2, 0.2 * raio);
           n.stroke();
        } else {
           n.fillStyle = "#000";
           n.beginPath();
           n.ellipse(0, 0, raio * 0.25, raio * 0.15, 0, 0, Math.PI * 2);
           n.fill();
           n.fillStyle = luzFlora;
           n.beginPath();
           n.arc(0, 0, raio * 0.08, 0, Math.PI * 2);
           n.fill();

           n.strokeStyle = "#000";
           n.lineWidth = strokeW;
           n.beginPath();
           n.moveTo(0, -raio * 0.15); n.lineTo(0, raio * 0.15);
           n.stroke();
        }

        n.restore();
      }

      function desenharAbissalga21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.04;

        let corFlora = "#166534";
        let sombraFlora = "#052e16";
        let corMadeira = "#451a03";
        let brilhoVeneno = "#bef264";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4 * (1 + (u.stage || 0) * 0.2);

        // RAÍZES E CIPÓS TENTACULARES
        n.fillStyle = corMadeira;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach(lado => {
           for(let i = 0; i < 4; i++) {
             n.beginPath();
             let wave = Math.sin(tempo * 3 + i) * raio * 0.15;
             n.moveTo(lado * raio * 0.3, 0);
             n.lineTo(lado * raio * (0.8 + i * 0.2) + wave, raio * (0.6 + i * 0.3));
             n.lineTo(lado * raio * 0.2, raio * 0.5);
             n.fill();
             n.stroke();
           }
        });

        // CORPO (Tronco vivo maciço)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, sombraFlora);
        gradCorpo.addColorStop(0.5, corFlora);
        gradCorpo.addColorStop(1, corMadeira);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.85, raio * 0.95, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // MANDÍBULAS DE MADEIRA/RAÍZES
        n.fillStyle = corMadeira;
        n.beginPath();
        n.moveTo(-raio * 0.4, raio * 0.2);
        n.lineTo(raio * 0.4, raio * 0.2);
        n.lineTo(raio * 0.6, raio * 0.7);
        n.lineTo(0, raio * 0.5);
        n.lineTo(-raio * 0.6, raio * 0.7);
        n.closePath();
        n.fill();
        n.stroke();

        // ESPINHOS DORSAIS TÓXICOS
        n.fillStyle = sombraFlora;
        [-raio * 0.6, -raio * 0.3, 0, raio * 0.3, raio * 0.6].forEach((x, i) => {
           n.beginPath();
           n.moveTo(x, -raio * 0.8);
           n.lineTo(x - raio * 0.15, -raio * 1.3 + (i % 2) * raio * 0.2);
           n.lineTo(x + raio * 0.15, -raio * 0.7);
           n.fill();
           n.stroke();
        });

        // OLHOS (Fendas tóxicas)
        if (isFainted) {
           n.strokeStyle = "#000";
           n.lineWidth = strokeW * 2;
           [-1, 1].forEach((lado) => {
             let cx = lado * raio * 0.4, cy = -raio * 0.1;
             n.beginPath();
             n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
             n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
             n.stroke();
           });
        } else {
           n.fillStyle = sombraFlora;
           [-1, 1].forEach((lado) => {
             n.beginPath();
             n.moveTo(lado * raio * 0.2, -raio * 0.2);
             n.lineTo(lado * raio * 0.6, -raio * 0.3);
             n.lineTo(lado * raio * 0.5, 0);
             n.closePath();
             n.fill();

             n.fillStyle = brilhoVeneno;
             n.beginPath();
             n.arc(lado * raio * 0.4, -raio * 0.15, raio * 0.05, 0, Math.PI * 2);
             n.fill();
             n.fillStyle = sombraFlora;
           });
        }

        n.restore();
      }

      function desenharAbissalume(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 1.5) * o * 0.1;

        let corMare = "#0284c7";
        let sombraMare = "#082f49";
        let luzMare = "#38bdf8";
        let brilho = "#e0f2fe";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // TENTÁCULOS ABISSAIS (Majestosos)
        n.lineWidth = strokeW * 1.5;
        for (let i = -3; i <= 3; i++) {
          if (i === 0) continue;
          n.beginPath();
          n.strokeStyle = Math.abs(i) % 2 === 1 ? luzMare : corMare;
          let tOffset = i * 0.8;
          n.moveTo(i * raio * 0.2, 0);
          n.bezierCurveTo(
            i * raio * 0.4 + Math.sin(tempo * 3 + tOffset) * raio * 0.4, raio * 0.8,
            i * raio * 0.1 + Math.cos(tempo * 2.5 + tOffset) * raio * 0.6, raio * 1.5,
            i * raio * 0.5 + Math.sin(tempo * 4 + tOffset) * raio * 0.5, raio * 2.2
          );
          n.stroke();
        }

        // VÉU INTERNO DA ÁGUA-VIVA
        n.fillStyle = sombraMare;
        n.beginPath();
        n.ellipse(0, raio * 0.2, raio * 0.7, raio * 0.3, 0, 0, Math.PI * 2);
        n.fill();

        // NÚCLEO BIOLUMINESCENTE PULSANTE
        if (!isFainted) {
          let gradNucleo = n.createRadialGradient(0, -raio * 0.2, raio * 0.1, 0, -raio * 0.2, raio * 0.6);
          let pulso = Math.sin(tempo * 6) * 0.2 + 0.8;
          gradNucleo.addColorStop(0, `rgba(224, 242, 254, ${pulso})`);
          gradNucleo.addColorStop(0.5, `rgba(56, 189, 248, ${pulso * 0.6})`);
          gradNucleo.addColorStop(1, "rgba(2, 132, 199, 0)");
          n.fillStyle = gradNucleo;
          n.beginPath();
          n.arc(0, -raio * 0.2, raio * 0.8, 0, Math.PI * 2);
          n.fill();
        }

        // CÚPULA EXTERNA (Translúcida e colossal)
        n.fillStyle = "rgba(2, 132, 199, 0.65)";
        n.strokeStyle = luzMare;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio * 0.9, raio * 0.2);
        n.bezierCurveTo(-raio * 1.1, -raio * 0.8, -raio * 0.5, -raio * 1.2, 0, -raio * 1.2);
        n.bezierCurveTo(raio * 0.5, -raio * 1.2, raio * 1.1, -raio * 0.8, raio * 0.9, raio * 0.2);
        n.bezierCurveTo(raio * 0.5, raio * 0.4, -raio * 0.5, raio * 0.4, -raio * 0.9, raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // MARCAS MAGNÉTICAS NA CÚPULA
        n.strokeStyle = brilho;
        n.lineWidth = strokeW;
        n.globalAlpha = 0.8;
        [-1, 1].forEach(lado => {
          n.beginPath();
          n.moveTo(lado * raio * 0.3, -raio * 1.0);
          n.lineTo(lado * raio * 0.5, -raio * 0.6);
          n.lineTo(lado * raio * 0.8, -raio * 0.4);
          n.stroke();
        });
        n.globalAlpha = 1;

        // OLHOS (Fendas vazias alienígenas)
        if (isFainted) {
          n.strokeStyle = sombraMare;
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.3, cy = -raio * 0.2;
            n.beginPath();
            n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
            n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
            n.stroke();
          });
        } else {
          n.fillStyle = sombraMare;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.2, -raio * 0.1);
            n.lineTo(lado * raio * 0.45, -raio * 0.25);
            n.lineTo(lado * raio * 0.35, -raio * 0.05);
            n.closePath();
            n.fill();

            n.fillStyle = brilho;
            n.beginPath();
            n.arc(lado * raio * 0.28, -raio * 0.15, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = sombraMare;
          });
        }

        n.restore();
      }

      function desenharAlgaffin20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 5) * o * 0.08;

        let corFlora = "#15803d";
        let sombraFlora = "#064e3b";
        let luzFlora = "#4ade80";
        let corMare = "#0284c7";
        let sombraMare = "#0c4a6e";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4 * (1 + (u.stage || 0) * 0.2);

        // CORPO SERPENTINO DO DRAGÃO MARINHO
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, raio * 0.5);
        n.bezierCurveTo(raio * 1.5, raio * 0.5, raio * 1.5, -raio * 0.8, 0, -raio * 0.8);
        n.bezierCurveTo(-raio * 1.5, -raio * 0.8, -raio * 1.5, raio * 1.2, raio * 0.5, raio * 1.2);
        n.bezierCurveTo(raio * 0.8, raio * 1.2, raio * 1.0, raio * 0.8, raio * 0.8, raio * 0.6);
        n.lineTo(raio * 0.5, raio * 0.9);
        n.bezierCurveTo(-raio * 0.8, raio * 0.9, -raio * 0.8, -raio * 0.2, 0, -raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // ARMADURA CORTANTE DE ALGAS
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW;

        for(let i = 0; i < 6; i++) {
           n.save();
           n.rotate(i * 0.5 - 1.5);
           n.beginPath();
           n.moveTo(0, -raio * 0.6);
           n.lineTo(raio * 0.2, -raio * 1.2);
           n.lineTo(raio * 0.3, -raio * 0.6);
           n.fill();
           n.stroke();
           n.restore();
        }

        // CABEÇA AERODINÂMICA
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.beginPath();
        n.moveTo(-raio * 0.3, -raio * 0.2);
        n.lineTo(raio * 0.8, -raio * 0.4);
        n.lineTo(raio * 0.9, 0);
        n.lineTo(raio * 0.4, raio * 0.3);
        n.lineTo(-raio * 0.4, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // LÂMINAS LATERAIS NO ROSTO
        n.fillStyle = luzFlora;
        n.beginPath();
        n.moveTo(raio * 0.4, raio * 0.3);
        n.lineTo(raio * 0.2, raio * 0.8);
        n.lineTo(-raio * 0.1, raio * 0.2);
        n.fill();
        n.stroke();

        // OLHO PREDADOR FEROZ
        if (isFainted) {
           n.strokeStyle = "#000";
           n.lineWidth = strokeW * 1.5;
           n.beginPath();
           n.moveTo(raio * 0.3, -raio * 0.1); n.lineTo(raio * 0.5, raio * 0.1);
           n.moveTo(raio * 0.5, -raio * 0.1); n.lineTo(raio * 0.3, raio * 0.1);
           n.stroke();
        } else {
           n.fillStyle = "#0f172a";
           n.beginPath();
           n.moveTo(raio * 0.3, -raio * 0.1);
           n.lineTo(raio * 0.6, -raio * 0.05);
           n.lineTo(raio * 0.4, 0.1 * raio);
           n.closePath();
           n.fill();

           n.fillStyle = luzFlora;
           n.beginPath();
           n.arc(raio * 0.45, -raio * 0.02, raio * 0.03, 0, Math.PI * 2);
           n.fill();
        }

        n.restore();
      }

      function desenharAlgaffin21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 4) * o * 0.08;

        let corFlora = "#15803d";
        let sombraFlora = "#064e3b";
        let corMare = "#0284c7";
        let luzFlora = "#bbf7d0";
        let florRosa = "#ec4899";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.2);

        // CORPO SERPENTINO (Grosso e majestoso)
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, raio * 0.5);
        n.bezierCurveTo(raio * 1.8, raio * 0.8, raio * 1.6, -raio * 1.2, 0, -raio * 0.9);
        n.bezierCurveTo(-raio * 1.6, -raio * 1.2, -raio * 1.8, raio * 1.4, raio * 0.6, raio * 1.2);
        n.bezierCurveTo(raio * 0.9, raio * 1.2, raio * 1.2, raio * 0.8, raio * 0.8, raio * 0.6);
        n.lineTo(raio * 0.5, raio * 0.9);
        n.bezierCurveTo(-raio * 1.0, raio * 1.0, -raio * 0.8, -raio * 0.3, 0, -raio * 0.3);
        n.closePath();
        n.fill();
        n.stroke();

        // FLORES DE LÓTUS GIGANTES (Dorso)
        n.lineWidth = strokeW;
        [[-raio * 0.9, -raio * 0.2, 0.5], [raio * 0.9, -raio * 0.4, 0.8], [raio * 0.2, raio * 1.1, 0.4]].forEach(flor => {
           n.save();
           n.translate(flor[0], flor[1]);
           n.scale(flor[2], flor[2]);

           // Folha base
           n.fillStyle = sombraFlora;
           n.beginPath(); n.ellipse(0, raio*0.2, raio*0.8, raio*0.3, 0, 0, Math.PI*2); n.fill(); n.stroke();

           // Pétalas rosas
           n.fillStyle = florRosa;
           n.strokeStyle = "#be185d";
           for(let i=-2; i<=2; i++) {
              n.beginPath();
              n.moveTo(0, raio*0.1);
              n.quadraticCurveTo(i*raio*0.5, -raio*0.4, i*raio*0.8, -raio*0.8);
              n.quadraticCurveTo(i*raio*0.2, -raio*0.2, 0, raio*0.1);
              n.fill(); n.stroke();
           }
           n.restore();
        });

        // CABEÇA DRACONIANA COM RAÍZES
        n.fillStyle = corMare;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.4, -raio * 0.2);
        n.lineTo(raio * 0.7, -raio * 0.5);
        n.lineTo(raio * 0.8, 0);
        n.lineTo(raio * 0.3, raio * 0.4);
        n.lineTo(-raio * 0.5, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // CHIFRES DE RAIZ ANCESTRAL
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 2;
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.3); n.quadraticCurveTo(-raio*0.6, -raio*0.8, -raio*0.8, -raio*0.6); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.4); n.quadraticCurveTo(raio*0.4, -raio*1.0, raio*0.6, -raio*0.9); n.stroke();

        // OLHO MÍSTICO
        if (isFainted) {
           n.strokeStyle = "#000";
           n.lineWidth = strokeW * 1.5;
           n.beginPath();
           n.moveTo(raio * 0.3, -raio * 0.1); n.lineTo(raio * 0.5, raio * 0.1);
           n.moveTo(raio * 0.5, -raio * 0.1); n.lineTo(raio * 0.3, raio * 0.1);
           n.stroke();
        } else {
           n.fillStyle = "#0f172a";
           n.beginPath();
           n.moveTo(raio * 0.3, -raio * 0.1);
           n.lineTo(raio * 0.6, -raio * 0.2);
           n.lineTo(raio * 0.45, 0.1 * raio);
           n.closePath();
           n.fill();

           n.fillStyle = luzFlora;
           n.beginPath();
           n.arc(raio * 0.42, -raio * 0.05, raio * 0.04, 0, Math.PI * 2);
           n.fill();
        }

        n.restore();
      }

      function desenharAquaroch20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2.5) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.04;

        let corMare = "#0369a1";
        let sombraMare = "#082f49";
        let luzMare = "#22d3ee";
        let corPedra = "#292524";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // VÓRTICE DE ÁGUA ABISSAL
        if (!isFainted) {
          n.strokeStyle = luzMare;
          n.lineWidth = strokeW * 0.5;
          for(let i=0; i<3; i++) {
             n.beginPath();
             n.ellipse(0, 0, raio * 1.2 + Math.sin(tempo*4+i)*raio*0.1, raio * 0.4, tempo*2+i, 0, Math.PI*2);
             n.stroke();
          }
        }

        // NADADEIRAS COLOSSAIS
        n.fillStyle = sombraMare;
        n.strokeStyle = corPedra;
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.save();
          n.translate(lado * raio * 0.6, raio * 0.2);
          n.rotate(lado * 0.3 + Math.sin(tempo * 3) * 0.1 * lado);
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(lado * raio * 0.8, -raio * 0.2, lado * raio * 1.2, raio * 0.5, lado * raio * 0.8, raio * 0.9);
          n.bezierCurveTo(lado * raio * 0.4, raio * 0.7, lado * raio * 0.2, raio * 0.4, 0, raio * 0.2);
          n.closePath();
          n.fill();
          n.stroke();
          n.restore();
        });

        // CASCO DE PEDRA ABISSAL
        let gradCasco = n.createRadialGradient(0, -raio * 0.4, raio * 0.1, 0, -raio * 0.2, raio);
        gradCasco.addColorStop(0, corMare);
        gradCasco.addColorStop(1, corPedra);

        n.fillStyle = gradCasco;
        n.strokeStyle = corPedra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.arc(0, 0, raio * 0.95, Math.PI, 0);
        n.quadraticCurveTo(0, raio * 0.4, -raio * 0.95, 0);
        n.fill();
        n.stroke();

        // CORAIS BIOLUMINESCENTES
        if (!isFainted) {
          n.fillStyle = luzMare;
          n.shadowColor = luzMare;
          n.shadowBlur = 15;
          [[-raio*0.5, -raio*0.4], [raio*0.4, -raio*0.6], [0, -raio*0.8], [-raio*0.2, -raio*0.2]].forEach(pos => {
             n.beginPath();
             n.arc(pos[0], pos[1], raio*0.06 + Math.sin(tempo*5)*raio*0.02, 0, Math.PI*2);
             n.fill();
          });
          n.shadowBlur = 0;
        }

        // CABEÇA DA TARTARUGA PREDADORA
        n.fillStyle = sombraMare;
        n.strokeStyle = corPedra;
        n.beginPath();
        n.ellipse(0, raio * 0.35, raio * 0.35, raio * 0.3, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // BICO AFIADO
        n.beginPath();
        n.moveTo(-raio * 0.15, raio * 0.55);
        n.lineTo(0, raio * 0.75);
        n.lineTo(raio * 0.15, raio * 0.55);
        n.stroke();

        // ISCA ABISSAL (Lanterna brilhante)
        n.strokeStyle = corPedra;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(0, raio * 0.1);
        n.quadraticCurveTo(raio * 0.4, raio * 0.1, raio * 0.5, raio * 0.4);
        n.stroke();
        if (!isFainted) {
          n.fillStyle = luzMare;
          n.beginPath();
          n.arc(raio * 0.5, raio * 0.4, raio * 0.08, 0, Math.PI*2);
          n.fill();
        }

        // OLHOS VAZIOS
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = raio * 0.3;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = luzMare;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.ellipse(lado * raio * 0.2, raio * 0.3, raio * 0.05, raio * 0.02, lado * 0.3, 0, Math.PI * 2);
            n.fill();
          });
        }

        n.restore();
      }

      function desenharAquaroch21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.01;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.02; // Movimento bem pesado

        let corPedra = "#57534e";
        let sombraPedra = "#1c1917";
        let corMare = "#0ea5e9";
        let luzMare = "#e0f2fe";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // PATAS DE MONTANHA
        n.fillStyle = sombraPedra;
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.4, raio * 0.4);
          n.lineTo(lado * raio * 0.8, raio * 0.8);
          n.lineTo(lado * raio * 0.3, raio * 0.9);
          n.lineTo(lado * raio * 0.1, raio * 0.6);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // CASCO (Cadeia de Montanhas)
        let gradMontanha = n.createLinearGradient(0, -raio * 1.2, 0, raio * 0.2);
        gradMontanha.addColorStop(0, corPedra);
        gradMontanha.addColorStop(1, sombraPedra);

        n.fillStyle = gradMontanha;
        n.strokeStyle = "#000";
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.9, raio * 0.2);
        n.lineTo(-raio * 0.6, -raio * 0.8);
        n.lineTo(-raio * 0.2, -raio * 0.5);
        n.lineTo(0, -raio * 1.1); // Pico central
        n.lineTo(raio * 0.3, -raio * 0.6);
        n.lineTo(raio * 0.7, -raio * 0.7);
        n.lineTo(raio * 0.9, raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // CACHOEIRAS ESCORRENDO PELO CASCO
        if (!isFainted) {
          n.strokeStyle = luzMare;
          n.lineWidth = strokeW * 1.2;
          [-raio*0.4, raio*0.1, raio*0.5].forEach((xOffset, idx) => {
            n.setLineDash([raio * 0.1, raio * 0.05]);
            n.beginPath();
            let startY = -raio * 0.4 + (idx%2) * raio * 0.2;
            n.moveTo(xOffset, startY);
            n.quadraticCurveTo(xOffset + raio*0.1, 0, xOffset, raio * 0.3);
            n.stroke();
          });
          n.setLineDash([]);
        }

        // CABEÇA BLINDADA
        n.fillStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.3, raio * 0.1);
        n.lineTo(raio * 0.3, raio * 0.1);
        n.lineTo(raio * 0.25, raio * 0.6);
        n.lineTo(0, raio * 0.75); // Queixo
        n.lineTo(-raio * 0.25, raio * 0.6);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS (Energia d'água represada)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = raio * 0.35;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = corMare;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, raio * 0.3);
            n.lineTo(lado * raio * 0.25, raio * 0.35);
            n.lineTo(lado * raio * 0.15, raio * 0.45);
            n.closePath();
            n.fill();

            n.fillStyle = luzMare;
            n.beginPath();
            n.arc(lado * raio * 0.15, raio * 0.38, raio * 0.02, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = corMare;
          });
        }

        n.restore();
      }

      function desenharBrasalma(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.04;

        let corMagma = "#ea580c";
        let luzMagma = "#fde047";
        let sombraMagma = "#9a3412";
        let corObsidiana = "#1c1917";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);

        // AURA DE CALOR EXTREMO
        if (!isFainted) {
          let aura = n.createRadialGradient(0, 0, raio * 0.5, 0, 0, raio * 1.6);
          aura.addColorStop(0, "rgba(253, 224, 71, 0.4)");
          aura.addColorStop(0.5, "rgba(234, 88, 12, 0.2)");
          aura.addColorStop(1, "rgba(234, 88, 12, 0)");
          n.fillStyle = aura;
          n.beginPath();
          n.arc(0, 0, raio * 1.6, 0, Math.PI * 2);
          n.fill();
        }

        // JUBA DE EXPLOSÕES SOLARES (Magma)
        n.fillStyle = sombraMagma;
        n.strokeStyle = corMagma;
        n.lineWidth = strokeW * 1.5;
        let pontas = 10;
        n.beginPath();
        for (let i = 0; i < pontas; i++) {
          let ang = (i * Math.PI * 2) / pontas - Math.PI / 2;
          let distExt = raio * 1.2 + Math.sin(tempo * 10 + i) * raio * 0.1;
          let distInt = raio * 0.7;

          let pxExt = Math.cos(ang) * distExt;
          let pyExt = Math.sin(ang) * distExt;
          let pxInt = Math.cos(ang + Math.PI/pontas) * distInt;
          let pyInt = Math.sin(ang + Math.PI/pontas) * distInt;

          if (i === 0) n.moveTo(pxExt, pyExt);
          else n.lineTo(pxExt, pyExt);
          n.lineTo(pxInt, pyInt);
        }
        n.closePath();
        n.fill();
        n.stroke();

        // CORPO COLOSSAL (Behemoth)
        let gradCorpo = n.createRadialGradient(0, -raio * 0.2, raio * 0.1, 0, 0, raio);
        gradCorpo.addColorStop(0, luzMagma);
        gradCorpo.addColorStop(0.6, corMagma);
        gradCorpo.addColorStop(1, sombraMagma);

        n.fillStyle = gradCorpo;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.85, raio * 0.85, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // BRAÇOS E PERNAS DE OBSIDIANA
        n.fillStyle = corObsidiana;
        n.strokeStyle = sombraMagma;
        [-1, 1].forEach(lado => {
           // Braços
           n.beginPath();
           n.ellipse(lado * raio * 0.6, raio * 0.3, raio * 0.25, raio * 0.3, lado * -0.3, 0, Math.PI*2);
           n.fill(); n.stroke();
           // Pernas curtas
           n.beginPath();
           n.ellipse(lado * raio * 0.35, raio * 0.75, raio * 0.18, raio * 0.2, 0, 0, Math.PI*2);
           n.fill(); n.stroke();
        });

        // MÁSCARA FACIAL DE OBSIDIANA (Agressiva)
        n.beginPath();
        n.moveTo(-raio * 0.5, -raio * 0.2);
        n.lineTo(raio * 0.5, -raio * 0.2);
        n.lineTo(raio * 0.3, raio * 0.4);
        n.lineTo(0, raio * 0.5);
        n.lineTo(-raio * 0.3, raio * 0.4);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS FERVENDO (Brilho intenso)
        if (isFainted) {
          n.strokeStyle = "#fff";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.25, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = luzMagma;
          n.shadowColor = corMagma;
          n.shadowBlur = 10;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.15, -raio * 0.05);
            n.lineTo(lado * raio * 0.35, -raio * 0.15); // Sobrancelha franzida
            n.lineTo(lado * raio * 0.3, 0.1 * raio);
            n.closePath();
            n.fill();
          });
          n.shadowBlur = 0;
        }

        // SÍMBOLO DA LENDA (Testa)
        n.strokeStyle = luzMagma;
        n.lineWidth = strokeW * 0.8;
        n.beginPath();
        n.moveTo(0, -raio * 0.15);
        n.lineTo(-raio * 0.1, -raio * 0.05);
        n.lineTo(raio * 0.1, -raio * 0.05);
        n.closePath();
        n.stroke();

        n.restore();
      }

      function desenharCantamar(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let isMarca = u.silhouette === "iara-marca";
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.06;

        let corMare = "#0284c7";
        let luzMare = "#38bdf8";
        let sombraMare = "#0c4a6e";
        let corPele = "#bae6fd";
        let corMarca = "#ea580c";
        let luzMarca = "#fde047";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4 * (1 + (u.stage || 0) * 0.15);

        // AURA HIPNÓTICA (Canto)
        if (!isFainted) {
          let auraColor = isMarca ? "rgba(234, 88, 12, 0.15)" : "rgba(56, 189, 248, 0.15)";
          for(let i=1; i<=3; i++) {
             n.beginPath();
             n.strokeStyle = auraColor;
             n.lineWidth = strokeW * 2;
             n.arc(0, 0, raio * 0.8 + ((tempo * 20) % (raio*1.5)) * i * 0.5, 0, Math.PI*2);
             n.stroke();
          }
        }

        // CABELO DE ÁGUA FLUIDO (Atrás)
        n.fillStyle = corMare;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, -raio * 0.8);
        n.bezierCurveTo(raio * 1.2, -raio * 0.5, raio * 1.5, raio * 0.5, raio * 0.8, raio * 1.2);
        n.bezierCurveTo(0, raio * 0.8, -raio * 1.5, raio * 0.5, -raio * 1.2, -raio * 0.5);
        n.fill();
        n.stroke();

        // CAUDA DE SEREIA DOS RIOS
        let gradCauda = n.createLinearGradient(0, 0, 0, raio * 1.5);
        gradCauda.addColorStop(0, corMare);
        gradCauda.addColorStop(1, sombraMare);
        n.fillStyle = gradCauda;
        n.beginPath();
        n.moveTo(-raio * 0.3, raio * 0.2);
        n.quadraticCurveTo(raio * 0.5, raio * 1.2, -raio * 0.4, raio * 1.6);
        n.quadraticCurveTo(-raio * 0.1, raio * 1.5, raio * 0.3, raio * 1.8);
        n.quadraticCurveTo(0, raio * 1.2, raio * 0.3, raio * 0.2);
        n.fill();
        n.stroke();

        // CORPO / TRONCO
        n.fillStyle = corPele;
        n.strokeStyle = sombraMare;
        n.lineWidth = strokeW;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.4, raio * 0.6, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // MARCA DO TATÁ (Versão Rara)
        if (isMarca && !isFainted) {
          n.strokeStyle = luzMarca;
          n.lineWidth = strokeW * 1.5;
          n.shadowColor = corMarca;
          n.shadowBlur = 10;
          n.beginPath();
          // Espiral mágica
          for(let i=0; i<15; i++) {
             let ang = i * 0.6 - tempo*2;
             let dist = i * raio * 0.015;
             if(i===0) n.moveTo(Math.cos(ang)*dist, Math.sin(ang)*dist + raio*0.2);
             else n.lineTo(Math.cos(ang)*dist, Math.sin(ang)*dist + raio*0.2);
          }
          n.stroke();
          n.shadowBlur = 0;
        }

        // BRAÇOS / NADADEIRAS LATERAIS AFIADAS
        n.fillStyle = luzMare;
        [-1, 1].forEach(lado => {
           n.beginPath();
           n.moveTo(lado * raio * 0.3, -raio * 0.2);
           n.quadraticCurveTo(lado * raio * 0.8, -raio * 0.4, lado * raio * 0.9, raio * 0.1);
           n.quadraticCurveTo(lado * raio * 0.5, 0, lado * raio * 0.3, raio * 0.2);
           n.fill();
           n.stroke();
        });

        // ROSTO
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.2;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = sombraMare;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.ellipse(lado * raio * 0.15, -raio * 0.2, raio * 0.08, raio * 0.12, 0, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#fff";
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.25, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = sombraMare;
          });
        }

        // BOCA CANTANDO
        if (!isFainted) {
          n.fillStyle = "#000";
          n.beginPath();
          n.ellipse(0, -raio * 0.05, raio * 0.04, raio * 0.06, 0, 0, Math.PI * 2);
          n.fill();
        }

        n.restore();
      }

      function desenharCantamarMarca(n, u, r, l, o, f) {
        // Cantamar da Marca (iara-marca) - A Sereia do Rio fervente (Variante Fogo)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 3) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corPele = "#38bdf8"; let corEscamas = "#0369a1";
        let corCabelo = "#0284c7";
        let brilhoMarca = "#f97316"; let corMagia = "#fde047"; // Fogo do Tatá

        // 1. Magia do Canto Fervente (Ondas de som misturadas com calor)
        if(!isFainted) {
            n.strokeStyle = "rgba(249, 115, 22, 0.5)"; // Laranja neon
            n.lineWidth = strokeW * 2;
            let pulso = (tempo * 25) % (raio*2.5);
            n.beginPath(); n.arc(raio*0.5, -raio*0.2, pulso, -Math.PI/2.5, Math.PI/2.5); n.stroke();
            n.strokeStyle = "rgba(253, 224, 71, 0.3)"; // Amarelo
            n.beginPath(); n.arc(raio*0.5, -raio*0.2, pulso + raio*0.4, -Math.PI/3, Math.PI/3); n.stroke();
        }

        // 2. Cauda Majestosa com a Espiral Brilhante
        n.fillStyle = corEscamas; n.strokeStyle = "#082f49"; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, raio*0.2);
        n.quadraticCurveTo(-raio*1.3, raio*0.8, -raio*0.9, raio*1.5);
        n.lineTo(-raio*0.5, raio*1.2);
        n.quadraticCurveTo(0, raio*0.8, raio*0.2, raio*0.4);
        n.fill(); n.stroke();

        // Barbatana Caudal
        n.beginPath(); n.moveTo(-raio*0.9, raio*1.5); n.lineTo(-raio*1.5, raio*1.9); n.lineTo(-raio*1.0, raio*1.3); n.lineTo(-raio*1.3, raio*2.1); n.lineTo(-raio*0.5, raio*1.2); n.fill(); n.stroke();

        // A Espiral da Marca a brilhar na cauda
        if(!isFainted) {
            n.strokeStyle = brilhoMarca; n.lineWidth = strokeW * 1.5; n.shadowColor = brilhoMarca; n.shadowBlur = 10;
            n.beginPath();
            n.arc(-raio*0.5, raio*0.8, raio*0.2, 0, Math.PI*1.5);
            n.arc(-raio*0.5, raio*0.8, raio*0.1, Math.PI*1.5, Math.PI*3);
            n.stroke();
            n.shadowBlur = 0;
        }

        // 3. Cabelos Hidrodinâmicos
        n.fillStyle = corCabelo; n.strokeStyle = "#082f49";
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.6); n.quadraticCurveTo(-raio*0.9, -raio*0.8, -raio*1.1, -raio*0.1); n.quadraticCurveTo(-raio*0.6, 0.1*raio, -raio*0.2, -raio*0.2); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.6); n.quadraticCurveTo(raio*0.9, -raio*0.8, raio*1.1, -raio*0.1); n.quadraticCurveTo(raio*0.6, 0.1*raio, raio*0.2, -raio*0.2); n.fill(); n.stroke();

        // 4. Corpo da Sereia
        n.fillStyle = corPele; n.strokeStyle = "#0284c7"; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(0, -raio*0.1, raio*0.4, raio*0.5, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Top/Escamas Peitorais
        n.fillStyle = corEscamas;
        n.beginPath(); n.arc(0, raio*0.2, raio*0.4, 0, Math.PI); n.fill(); n.stroke();

        // Braços
        n.beginPath(); n.moveTo(-raio*0.3, 0); n.quadraticCurveTo(-raio*0.7, raio*0.5, -raio*0.2, raio*0.7); n.stroke();
        n.beginPath(); n.moveTo(raio*0.3, 0); n.quadraticCurveTo(raio*0.7, raio*0.5, raio*0.2, raio*0.7); n.stroke();

        // 5. Rosto (Siren Predatória)
        if(isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(-raio*0.15, -raio*0.2); n.lineTo(-raio*0.05, -raio*0.1); n.stroke();
            n.beginPath(); n.moveTo(raio*0.15, -raio*0.2); n.lineTo(raio*0.05, -raio*0.1); n.stroke();
        } else {
            n.fillStyle = "#fff"; n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.ellipse(-raio*0.15, -raio*0.15, raio*0.1, raio*0.06, -Math.PI/6, 0, Math.PI*2); n.fill(); n.stroke();
            n.beginPath(); n.ellipse(raio*0.15, -raio*0.15, raio*0.1, raio*0.06, Math.PI/6, 0, Math.PI*2); n.fill(); n.stroke();

            // Pupilas brilhantes de fogo
            n.fillStyle = corMagia;
            n.beginPath(); n.arc(-raio*0.12, -raio*0.15, raio*0.04, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.12, -raio*0.15, raio*0.04, 0, Math.PI*2); n.fill();

            // Canto Hipnótico
            n.fillStyle = "#000";
            n.beginPath(); n.ellipse(0, 0, raio*0.04, raio*0.08, 0, 0, Math.PI*2); n.fill();
        }
        n.restore();
      }

      function desenharCapoeirao(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.03;

        let corCasca = "#451a03";
        let sombraCasca = "#270f01";
        let luzCasca = "#78350f";
        let corMusgo = "#15803d";
        let luzFlora = "#4ade80";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);

        // CAJADO ANCESTRAL GIGANTE (Mão de trás)
        n.strokeStyle = sombraCasca;
        n.lineWidth = strokeW * 3;
        n.beginPath();
        n.moveTo(raio * 0.6, -raio * 1.5);
        n.lineTo(raio * 0.4, raio * 1.2);
        n.stroke();
        n.strokeStyle = luzCasca;
        n.lineWidth = strokeW * 1.5;
        n.stroke();

        if (!isFainted) {
           n.fillStyle = luzFlora;
           n.beginPath();
           n.arc(raio * 0.6, -raio * 1.5, raio * 0.15, 0, Math.PI*2);
           n.fill();
        }

        // PÉS VIRADOS DE RAÍZES (Curupira)
        n.fillStyle = sombraCasca;
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        [-1, 1].forEach(lado => {
           n.beginPath();
           n.moveTo(lado * raio * 0.3, raio * 0.6);
           n.lineTo(lado * raio * 0.6 + raio * 0.2, raio * 1.0);
           n.lineTo(lado * raio * 0.1 + raio * 0.1, raio * 0.9);
           n.closePath();
           n.fill();
           n.stroke();
        });

        // ARMADURA DE TRONCO MACIÇO
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzCasca);
        gradCorpo.addColorStop(0.5, corCasca);
        gradCorpo.addColorStop(1, sombraCasca);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraCasca;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio * 0.7, -raio * 0.5);
        n.lineTo(raio * 0.7, -raio * 0.5);
        n.lineTo(raio * 0.9, raio * 0.2);
        n.lineTo(raio * 0.4, raio * 0.8);
        n.lineTo(-raio * 0.4, raio * 0.8);
        n.lineTo(-raio * 0.9, raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // MANTAL DE MUSGO E FOLHAS
        n.fillStyle = corMusgo;
        n.strokeStyle = sombraCasca;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.8, -raio * 0.4);
        n.quadraticCurveTo(-raio * 0.4, -raio * 1.0, 0, -raio * 1.1);
        n.quadraticCurveTo(raio * 0.4, -raio * 1.0, raio * 0.8, -raio * 0.4);
        n.quadraticCurveTo(raio * 0.4, -raio * 0.1, 0, -raio * 0.3);
        n.quadraticCurveTo(-raio * 0.4, -raio * 0.1, -raio * 0.8, -raio * 0.4);
        n.fill();
        n.stroke();

        // BURACO NO TRONCO (Rosto sombrio)
        n.fillStyle = sombraCasca;
        n.beginPath();
        n.ellipse(0, 0, raio * 0.4, raio * 0.3, 0, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // OLHOS BRILHANTES (Luz da Floresta)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = luzFlora;
          n.shadowColor = luzFlora;
          n.shadowBlur = 10;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, -raio * 0.05);
            n.lineTo(lado * raio * 0.25, -raio * 0.1);
            n.lineTo(lado * raio * 0.2, 0.05 * raio);
            n.closePath();
            n.fill();
          });
          n.shadowBlur = 0;
        }

        // BRAÇOS ROBUSTOS
        n.fillStyle = corCasca;
        [-1, 1].forEach(lado => {
           n.beginPath();
           n.ellipse(lado * raio * 0.8, raio * 0.3, raio * 0.2, raio * 0.4, lado * -0.2, 0, Math.PI*2);
           n.fill(); n.stroke();
        });

        n.restore();
      }

      function desenharFaebluma20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.08;

        let corFlora = "#16a34a";
        let luzFlora = "#86efac";
        let sombraFlora = "#14532d";
        let luzFaisca = "#fef08a";
        let sombraFaisca = "#ca8a04";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);
        let baterAsa = Math.sin(tempo * 10) * 0.3 + 0.7;

        // ASAS COLOSSAIS DE FOLHA E RELÂMPAGO
        [-1, 1].forEach((lado) => {
          n.save();
          n.scale(lado * baterAsa, 1);

          let gradAsa = n.createLinearGradient(0, 0, raio * 1.8, -raio * 1.5);
          gradAsa.addColorStop(0, sombraFlora);
          gradAsa.addColorStop(0.5, corFlora);
          gradAsa.addColorStop(1, luzFlora);

          n.fillStyle = gradAsa;
          n.strokeStyle = sombraFlora;
          n.lineWidth = strokeW * 1.5;

          // Asa Superior Majestosa
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(raio * 1.2, -raio * 0.2, raio * 2.2, -raio * 1.5, raio * 0.5, -raio * 1.8);
          n.bezierCurveTo(raio * 0.2, -raio * 1.2, raio * 0.4, -raio * 0.5, 0, -raio * 0.3);
          n.fill(); n.stroke();

          // Asa Inferior Afiada
          n.beginPath();
          n.moveTo(0, 0);
          n.bezierCurveTo(raio * 1.5, raio * 0.4, raio * 1.2, raio * 1.6, raio * 0.2, raio * 1.2);
          n.bezierCurveTo(raio * 0.5, raio * 0.8, raio * 0.2, raio * 0.2, 0, raio * 0.2);
          n.fill(); n.stroke();

          // Veios Elétricos nas Asas
          if (!isFainted) {
             n.strokeStyle = luzFaisca;
             n.lineWidth = strokeW * 0.8;
             n.beginPath(); n.moveTo(0, -raio * 0.3); n.lineTo(raio * 0.8, -raio * 0.9); n.lineTo(raio * 1.2, -raio * 0.8); n.stroke();
             n.beginPath(); n.moveTo(0, raio * 0.2); n.lineTo(raio * 0.6, raio * 0.8); n.lineTo(raio * 0.8, raio * 1.2); n.stroke();
          }
          n.restore();
        });

        // CORPO DE IMPERATRIZ (Alongado e blindado)
        n.fillStyle = sombraFlora;
        n.strokeStyle = luzFlora;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.2, -raio * 0.5);
        n.quadraticCurveTo(0, -raio * 0.8, raio * 0.2, -raio * 0.5);
        n.lineTo(raio * 0.15, raio * 0.8);
        n.lineTo(0, raio * 1.2);
        n.lineTo(-raio * 0.15, raio * 0.8);
        n.closePath();
        n.fill(); n.stroke();

        // COROA / ANTENAS ELÉTRICAS
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.1, -raio * 0.7);
          n.lineTo(lado * raio * 0.5, -raio * 1.4);
          n.lineTo(lado * raio * 0.8, -raio * 1.1);
          n.stroke();

          if (!isFainted) {
            n.fillStyle = luzFaisca;
            n.beginPath(); n.arc(lado * raio * 0.8, -raio * 1.1, raio * 0.1, 0, Math.PI*2); n.fill();
          }
        });

        // ROSTO IMPLACÁVEL
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.1, cy = -raio * 0.3;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          n.fillStyle = luzFaisca;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.05, -raio * 0.4);
            n.lineTo(lado * raio * 0.2, -raio * 0.25);
            n.lineTo(lado * raio * 0.15, -raio * 0.2);
            n.closePath();
            n.fill();
          });
        }

        n.restore();
      }

      function desenharFaebluma21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 5) * o * 0.06;

        let corFaisca = "#eab308";
        let sombraFaisca = "#713f12";
        let luzFaisca = "#fef08a";
        let corFlora = "#22c55e";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4 * (1 + (u.stage || 0) * 0.15);
        let baterAsa = Math.sin(tempo * 15) * 0.4 + 0.6;

        // ASAS DE ENERGIA PLASMA/ESTILHAÇOS
        [-1, 1].forEach((lado) => {
          n.save();
          n.scale(lado * baterAsa, 1);

          n.fillStyle = "rgba(250, 204, 21, 0.8)";
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW;

          // Segmentos superiores afiados
          n.beginPath();
          n.moveTo(raio * 0.2, 0);
          n.lineTo(raio * 1.6, -raio * 0.6);
          n.lineTo(raio * 1.2, -raio * 1.2);
          n.lineTo(raio * 0.4, -raio * 1.6);
          n.closePath();
          n.fill(); n.stroke();

          // Segmentos inferiores pontiagudos
          n.beginPath();
          n.moveTo(raio * 0.2, raio * 0.2);
          n.lineTo(raio * 1.4, raio * 0.8);
          n.lineTo(raio * 0.6, raio * 1.4);
          n.closePath();
          n.fill(); n.stroke();

          n.restore();
        });

        // CORPO CRISTALINO ELÉTRICO
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzFaisca);
        gradCorpo.addColorStop(0.5, corFaisca);
        gradCorpo.addColorStop(1, sombraFaisca);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFaisca;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(0, -raio * 0.8);
        n.lineTo(raio * 0.3, -raio * 0.2);
        n.lineTo(raio * 0.2, raio * 0.8);
        n.lineTo(0, raio * 1.2);
        n.lineTo(-raio * 0.2, raio * 0.8);
        n.lineTo(-raio * 0.3, -raio * 0.2);
        n.closePath();
        n.fill(); n.stroke();

        // GOLA/MÁSCARA DE FLORA (Folhas rígidas protetoras)
        n.fillStyle = corFlora;
        n.strokeStyle = "#064e3b";
        n.beginPath();
        n.moveTo(0, -raio * 0.2);
        n.lineTo(raio * 0.5, -raio * 0.6);
        n.lineTo(raio * 0.4, 0);
        n.lineTo(0, raio * 0.3);
        n.lineTo(-raio * 0.4, 0);
        n.lineTo(-raio * 0.5, -raio * 0.6);
        n.closePath();
        n.fill(); n.stroke();

        // OLHOS (Fendas de energia)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = -raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.05, -raio * 0.2);
            n.lineTo(lado * raio * 0.25, -raio * 0.1);
            n.lineTo(lado * raio * 0.15, 0);
            n.closePath();
            n.fill();

            n.fillStyle = luzFaisca;
            n.beginPath(); n.arc(lado * raio * 0.15, -raio * 0.1, Math.max(1, raio*0.03), 0, Math.PI*2); n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        // RAIOS ORBITAIS (Agressividade elétrica)
        if (!isFainted) {
           n.strokeStyle = luzFaisca;
           n.lineWidth = strokeW * 1.5;
           for(let i=0; i<3; i++) {
              let px = Math.cos(tempo * 5 + i * 2) * raio * 1.4;
              let py = Math.sin(tempo * 4 + i * 2) * raio;
              n.beginPath();
              n.moveTo(px, py - raio*0.2);
              n.lineTo(px + raio*0.1, py);
              n.lineTo(px - raio*0.1, py + raio*0.2);
              n.stroke();
           }
        }

        n.restore();
      }

      function desenharFaevolta21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;

        // Pulsação de respiração do núcleo
        let pulso = Math.sin(tempo * 6) * 0.1;
        let esc = 1 + pulso * 0.2;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.05;

        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";
        let corFlora = "#15803d";
        let luzFlora = "#4ade80";
        let sombraMadeira = "#064e3b";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // MOLDURAS RÚNICAS ROTATIVAS (O Segredo do Movimento)
        let velRotacao = isFainted ? 0.5 : 3; // Gira mais devagar se derrotado

        for (let i = 0; i < 2; i++) {
          n.save();
          // Moldura 1 gira para a direita, Moldura 2 para a esquerda
          let angulo = (i === 0 ? 1 : -1) * tempo * velRotacao;
          n.rotate(angulo);

          // O Quadrado de Raízes
          n.strokeStyle = sombraMadeira;
          n.lineWidth = strokeW * 2.5;
          n.beginPath();
          n.rect(-raio * 0.7, -raio * 0.7, raio * 1.4, raio * 1.4);
          n.stroke();

          n.strokeStyle = corFaisca;
          n.lineWidth = strokeW * 0.8;
          n.stroke(); // Fio elétrico a passar pela raiz

          // Lâminas de Folha nas 4 pontas do quadrado
          n.fillStyle = corFlora;
          n.strokeStyle = luzFlora;
          n.lineWidth = strokeW;

          let pontas = [[-raio*0.7, -raio*0.7], [raio*0.7, -raio*0.7], [raio*0.7, raio*0.7], [-raio*0.7, raio*0.7]];
          pontas.forEach(p => {
             n.save();
             n.translate(p[0], p[1]);
             // As próprias lâminas vibram agressivamente
             n.rotate(Math.sin(tempo * 15) * 0.2);
             n.beginPath();
             n.moveTo(0, 0);
             n.lineTo(raio * 0.3, -raio * 0.4);
             n.lineTo(raio * 0.4, -raio * 0.1);
             n.closePath();
             n.fill(); n.stroke();
             n.restore();
          });
          n.restore();
        }

        // NÚCLEO CENTRAL (Olho da Tempestade)
        n.fillStyle = corFlora;
        n.strokeStyle = sombraMadeira;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(0, -raio * 0.5 - pulso * raio);
        n.lineTo(raio * 0.4 + pulso * raio, 0);
        n.lineTo(0, raio * 0.5 + pulso * raio);
        n.lineTo(-raio * 0.4 - pulso * raio, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // OLHOS FEROZES NO NÚCLEO
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.05, -raio * 0.15);
            n.lineTo(lado * raio * 0.25, -raio * 0.05);
            n.lineTo(lado * raio * 0.15, raio * 0.05);
            n.closePath();
            n.fill();

            n.fillStyle = luzFaisca;
            n.beginPath();
            n.arc(lado * raio * 0.15, -raio * 0.05, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        // FAÍSCAS A SALTAR PARA FORA
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW * 1.5;
          for (let i = 0; i < 4; i++) {
             let ang = tempo * 10 + i * (Math.PI / 2);
             let px = Math.cos(ang) * raio * (0.8 + Math.random() * 0.4);
             let py = Math.sin(ang) * raio * (0.8 + Math.random() * 0.4);
             n.beginPath();
             n.moveTo(0, 0);
             n.lineTo(px * 0.3, py * 0.3);
             n.stroke();
          }
        }

        n.restore();
      }

      function desenharFaevolta20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 8) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 5) * o * 0.05;

        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";
        let sombraFaisca = "#a16207";
        let plasma = "#ffffff";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // ÓRBITAS ATÓMICAS EM MOVIMENTO CONTÍNUO
        let numOrbitas = 3;
        for(let i = 0; i < numOrbitas; i++) {
           n.save();
           // Cada órbita está inclinada num ângulo diferente e gira
           let inclinacao = (i * Math.PI) / numOrbitas;
           n.rotate(inclinacao + (isFainted ? 0 : tempo * 0.5));

           // Trajeto da Órbita
           n.strokeStyle = isFainted ? sombraFaisca : corFaisca;
           n.lineWidth = strokeW;
           n.beginPath();
           n.ellipse(0, 0, raio * 1.2, raio * 0.3, 0, 0, Math.PI * 2);
           n.stroke();

           // Partícula / Eletrão a voar pela órbita
           if (!isFainted) {
              let velocidadeOrbita = tempo * (8 + i);
              // Posição paramétrica na elipse
              let px = Math.cos(velocidadeOrbita) * raio * 1.2;
              let py = Math.sin(velocidadeOrbita) * raio * 0.3;

              n.fillStyle = plasma;
              n.shadowColor = luzFaisca;
              n.shadowBlur = 10;
              n.beginPath();
              n.arc(px, py, raio * 0.08, 0, Math.PI * 2);
              n.fill();
              n.shadowBlur = 0;
           }
           n.restore();
        }

        // ESTRELA CENTRAL DE ENERGIA (Núcleo)
        let gradNucleo = n.createRadialGradient(0, 0, raio * 0.1, 0, 0, raio * 0.5);
        gradNucleo.addColorStop(0, plasma);
        gradNucleo.addColorStop(0.5, luzFaisca);
        gradNucleo.addColorStop(1, sombraFaisca);

        n.fillStyle = gradNucleo;
        n.beginPath();
        let pulsoNucleo = isFainted ? 0 : Math.sin(tempo * 12) * raio * 0.05;
        n.arc(0, 0, raio * 0.35 + pulsoNucleo, 0, Math.PI * 2);
        n.fill();

        // OLHOS DENTRO DO PLASMA
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.05, -raio * 0.1);
            n.lineTo(lado * raio * 0.2, -raio * 0.15);
            n.lineTo(lado * raio * 0.15, 0);
            n.closePath();
            n.fill();
          });
        }

        n.restore();
      }

      function desenharFlorajag20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.03;

        // Focado em Defesa: Madeira escura, musgo espesso
        let corMadeira = "#451a03";
        let sombraMadeira = "#270f01";
        let corMusgo = "#14532d";
        let luzMusgo = "#22c55e";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);

        // JUBA DE MUSGO (Escudo natural gigante)
        let gradMusgo = n.createRadialGradient(0, 0, raio * 0.3, 0, 0, raio * 1.5);
        gradMusgo.addColorStop(0, luzMusgo);
        gradMusgo.addColorStop(1, corMusgo);

        n.fillStyle = gradMusgo;
        n.strokeStyle = sombraMadeira;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.arc(0, -raio * 0.2, raio * 1.2, 0, Math.PI * 2);
        n.fill();
        n.stroke();

        // ORELHAS DE TRONCO MACIÇO
        n.fillStyle = corMadeira;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.5, -raio * 0.8);
          n.lineTo(lado * raio * 1.1, -raio * 1.2);
          n.lineTo(lado * raio * 0.9, -raio * 0.4);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // CABEÇA / ROSTO BLINDADO (Madeira ancestral)
        n.fillStyle = corMadeira;
        n.beginPath();
        n.moveTo(0, -raio * 0.7);
        n.lineTo(raio * 0.7, -raio * 0.2);
        n.lineTo(raio * 0.5, raio * 0.6);
        n.lineTo(0, raio * 0.9);
        n.lineTo(-raio * 0.5, raio * 0.6);
        n.lineTo(-raio * 0.7, -raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // DETALHES DA CASCA (Veios da madeira)
        n.strokeStyle = sombraMadeira;
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 0.7); n.lineTo(0, raio * 0.9); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.5, 0); n.lineTo(raio * 0.5, 0); n.stroke();

        // PRESAS DEFENSIVAS (Raízes grossas)
        n.fillStyle = "#d4d4d8";
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.moveTo(lado * raio * 0.2, raio * 0.7);
          n.lineTo(lado * raio * 0.35, raio * 1.3);
          n.lineTo(lado * raio * 0.5, raio * 0.5);
          n.closePath();
          n.fill();
          n.stroke();
        });

        // OLHOS FEROZES (Brilho protetor)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.25, cy = -raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = luzMusgo;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.15, -raio * 0.2);
            n.lineTo(lado * raio * 0.4, -raio * 0.1);
            n.lineTo(lado * raio * 0.3, raio * 0.05);
            n.closePath();
            n.fill();
          });
        }

        n.restore();
      }

      function desenharFlorajag21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 4) * o * 0.05;

        // Focado em Ataque: Verde vibrante, folhas afiadas como navalhas
        let corFlora = "#22c55e";
        let sombraFlora = "#166534";
        let luzFlora = "#bbf7d0";
        let corPetala = "#ec4899"; // Detalhe agressivo

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4 * (1 + (u.stage || 0) * 0.15);

        // JUBA DE FOLHAS NAVALHA (Dinâmico, virado para a frente)
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        for (let i = 0; i < 8; i++) {
           let ang = (i * Math.PI * 2) / 8 + Math.PI / 8;
           let dist = raio * 1.4 + Math.sin(tempo * 8 + i) * raio * 0.1;
           let px = Math.cos(ang) * dist;
           let py = Math.sin(ang) * dist;
           if (i === 0) n.moveTo(px, py);
           else n.lineTo(px, py);
        }
        n.closePath();
        n.fill();
        n.stroke();

        // PÉTALAS CORTANTES (Detalhe predatório)
        n.fillStyle = corPetala;
        [-1, 1].forEach(lado => {
           n.beginPath();
           n.moveTo(lado * raio * 0.6, -raio * 0.5);
           n.lineTo(lado * raio * 1.2, -raio * 1.0);
           n.lineTo(lado * raio * 0.4, -raio * 0.8);
           n.closePath();
           n.fill();
           n.stroke();
        });

        // CABEÇA AERODINÂMICA (Felino ágil)
        n.fillStyle = luzFlora;
        n.beginPath();
        n.moveTo(0, -raio * 0.6);
        n.lineTo(raio * 0.5, -raio * 0.2);
        n.lineTo(raio * 0.4, raio * 0.5);
        n.lineTo(0, raio * 0.8);
        n.lineTo(-raio * 0.4, raio * 0.5);
        n.lineTo(-raio * 0.5, -raio * 0.2);
        n.closePath();
        n.fill();
        n.stroke();

        // MARCAS DE PREDADOR NO ROSTO
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach((lado) => {
           n.beginPath();
           n.moveTo(lado * raio * 0.2, 0);
           n.lineTo(lado * raio * 0.4, raio * 0.4);
           n.stroke();
        });

        // OLHOS FEROZES (Brilho predatório)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.25, cy = -raio * 0.1;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = "#022c22";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.1, -raio * 0.2);
            n.lineTo(lado * raio * 0.4, -raio * 0.1);
            n.lineTo(lado * raio * 0.25, raio * 0.05);
            n.closePath();
            n.fill();

            n.fillStyle = corPetala; // Olho rosa brilhante
            n.beginPath();
            n.arc(lado * raio * 0.25, -raio * 0.08, raio * 0.04, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#022c22";
          });
        }

        n.restore();
      }

      function desenharFlorolith21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.03;

        let corPedra = "#57534e";
        let sombraPedra = "#292524";
        let luzPedra = "#a8a29e";
        let corFlora = "#15803d";
        let luzFlora = "#4ade80";

        n.save();
        n.translate(r, l + flutua - (o * -0.01));;
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.2);

        // PILARES DE PEDRA (Braços/Ombros Colossais)
        n.fillStyle = sombraPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach(lado => {
           n.beginPath();
           n.moveTo(lado * raio * 0.6, -raio * 0.5);
           n.lineTo(lado * raio * 1.1, -raio * 0.2);
           n.lineTo(lado * raio * 1.0, raio * 0.8);
           n.lineTo(lado * raio * 0.5, raio * 0.6);
           n.closePath();
           n.fill();
           n.stroke();
        });

        // CORPO MEGALÍTICO CENTRAL
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzPedra);
        gradCorpo.addColorStop(0.5, corPedra);
        gradCorpo.addColorStop(1, sombraPedra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraPedra;
        n.beginPath();
        n.moveTo(0, -raio * 1.1);
        n.lineTo(raio * 0.6, -raio * 0.6);
        n.lineTo(raio * 0.5, raio * 0.8);
        n.lineTo(-raio * 0.5, raio * 0.8);
        n.lineTo(-raio * 0.6, -raio * 0.6);
        n.closePath();
        n.fill();
        n.stroke();

        // RAÍZES GIGANTES ENVOLVENDO A PEDRA
        n.strokeStyle = corFlora;
        n.lineWidth = strokeW * 2.5;
        n.beginPath(); n.moveTo(-raio * 0.7, -raio * 0.2); n.quadraticCurveTo(0, 0, raio * 0.7, -raio * 0.4); n.stroke();
        n.beginPath(); n.moveTo(-raio * 0.6, raio * 0.4); n.quadraticCurveTo(0, raio * 0.6, raio * 0.6, raio * 0.2); n.stroke();

        // NÚCLEO CRISTALINO / FLORA GEODE
        n.fillStyle = luzFlora;
        n.beginPath();
        n.moveTo(0, -raio * 0.4);
        n.lineTo(raio * 0.3, 0);
        n.lineTo(0, raio * 0.4);
        n.lineTo(-raio * 0.3, 0);
        n.closePath();
        n.fill();
        n.stroke();

        // Brilho do Núcleo
        if (!isFainted) {
          n.fillStyle = "#ffffff";
          n.beginPath();
          n.arc(0, 0, Math.max(raio * 0.05, Math.sin(tempo * 4) * raio * 0.1), 0, Math.PI * 2);
          n.fill();
        }

        // COBERTURA DE FLORESTA ANCESTRAL (Topo)
        n.fillStyle = corFlora;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW;
        n.beginPath();
        n.moveTo(-raio * 0.7, -raio * 0.8);
        n.quadraticCurveTo(-raio * 0.4, -raio * 1.4, 0, -raio * 1.2);
        n.quadraticCurveTo(raio * 0.4, -raio * 1.4, raio * 0.7, -raio * 0.8);
        n.quadraticCurveTo(0, -raio * 0.6, -raio * 0.7, -raio * 0.8);
        n.fill();
        n.stroke();

        // OLHOS (Fendas na pedra acima do geode)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = -raio * 0.6;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.rect(lado * raio * 0.15 - raio * 0.08, -raio * 0.65, raio * 0.16, raio * 0.08);
            n.fill();

            n.fillStyle = luzFlora;
            n.beginPath();
            n.arc(lado * raio * 0.18, -raio * 0.61, raio * 0.025, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        n.restore();
      }

      function desenharFlorolith20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2.5) * o * 0.03;

        let corFlora = "#166534";
        let sombraFlora = "#052e16";
        let luzFlora = "#4ade80";
        let corPedra = "#44403c";
        let sombraPedra = "#1c1917";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // NÚCLEO MÍSTICO TRASEIRO (Brilho protetor)
        if (!isFainted) {
           let aura = n.createRadialGradient(0, 0, raio * 0.2, 0, 0, raio * 1.5);
           aura.addColorStop(0, "rgba(74, 222, 128, 0.4)");
           aura.addColorStop(1, "rgba(22, 101, 52, 0)");
           n.fillStyle = aura;
           n.beginPath(); n.arc(0, 0, raio * 1.5, 0, Math.PI*2); n.fill();
        }

        // ESCUDOS ORBITAIS DE PEDRA VIVA
        n.fillStyle = corPedra;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        for(let i=0; i<3; i++) {
           n.save();
           let ang = tempo * 1.5 + (i * Math.PI * 2) / 3;
           let dist = raio * 1.1 + Math.sin(tempo * 3 + i) * raio * 0.1;
           n.translate(Math.cos(ang) * dist, Math.sin(ang) * dist);
           n.rotate(ang + tempo); // Pedras giram no próprio eixo

           n.beginPath();
           n.moveTo(-raio*0.3, -raio*0.2);
           n.lineTo(raio*0.3, -raio*0.3);
           n.lineTo(raio*0.4, raio*0.2);
           n.lineTo(0, raio*0.4);
           n.lineTo(-raio*0.2, raio*0.2);
           n.closePath();
           n.fill(); n.stroke();
           n.restore();
        }

        // CARAPAÇA COLOSSAL DE RAÍZES (Tank Absurdo)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzFlora);
        gradCorpo.addColorStop(0.5, corFlora);
        gradCorpo.addColorStop(1, sombraFlora);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 2;

        n.beginPath();
        n.moveTo(0, -raio * 1.2);
        n.bezierCurveTo(raio * 1.5, -raio * 0.8, raio * 1.2, raio * 1.0, 0, raio * 1.1);
        n.bezierCurveTo(-raio * 1.2, raio * 1.0, -raio * 1.5, -raio * 0.8, 0, -raio * 1.2);
        n.fill(); n.stroke();

        // VEIOS E RAÍZES ENTRELAÇADAS NO CORPO
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;
        n.beginPath(); n.moveTo(0, -raio*1.2); n.quadraticCurveTo(raio*0.6, -raio*0.5, 0, raio*1.1); n.stroke();
        n.beginPath(); n.moveTo(0, -raio*1.2); n.quadraticCurveTo(-raio*0.6, -raio*0.5, 0, raio*1.1); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.8, -raio*0.2); n.quadraticCurveTo(0, raio*0.5, raio*0.8, -raio*0.2); n.stroke();

        // FENDA OCULTA DOS OLHOS
        n.fillStyle = sombraPedra;
        n.beginPath();
        n.rect(-raio * 0.4, -raio * 0.2, raio * 0.8, raio * 0.3);
        n.fill(); n.stroke();

        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.2, cy = -raio * 0.05;
            n.beginPath();
            n.moveTo(cx - raio * 0.06, cy - raio * 0.06); n.lineTo(cx + raio * 0.06, cy + raio * 0.06);
            n.moveTo(cx + raio * 0.06, cy - raio * 0.06); n.lineTo(cx - raio * 0.06, cy + raio * 0.06);
            n.stroke();
          });
        } else {
          n.fillStyle = luzFlora;
          n.shadowColor = luzFlora;
          n.shadowBlur = 10;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.arc(lado * raio * 0.2, -raio * 0.05, raio * 0.06, 0, Math.PI * 2);
            n.fill();
          });
          n.shadowBlur = 0;
        }

        n.restore();
      }

      function desenharFuracaozinho(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 8) * o * 0.08;

        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";
        let corSombra = "#451a03"; // Cachimbo e essência escura
        let corGorro = "#dc2626";

        n.save();
        n.translate(r, l + flutua - o*0.1);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // O TORNADO GIGANTE (Múltiplas elipses e espirais rodopiantes)
        n.strokeStyle = corFaisca;
        n.lineWidth = strokeW * 2;
        let numAros = 12;
        for(let i = 0; i < numAros; i++) {
           n.save();
           let yOffset = raio * 1.2 - (i * raio * 0.25);
           let distMax = (raio * 1.2) - (i * raio * 0.08); // Larga em cima, afunila em baixo

           // Agitação frenética da tempestade
           let swayX = Math.sin(tempo * 15 + i) * raio * 0.2;
           n.translate(swayX, yOffset);

           n.fillStyle = (i%2 === 0) ? "rgba(250, 204, 21, 0.4)" : "rgba(254, 240, 138, 0.2)";
           n.beginPath();
           n.ellipse(0, 0, Math.max(0.1, distMax), Math.max(0.1, distMax * 0.25), tempo*10 + i, 0, Math.PI*2);
           n.fill(); n.stroke();
           n.restore();
        }

        // RELÂMPAGOS CORTANDO O TORNADO
        if (!isFainted) {
           n.strokeStyle = luzFaisca;
           n.lineWidth = strokeW * 1.5;
           for(let i=0; i<3; i++) {
              let pos = Math.cos(tempo * 20 + i) * raio;
              n.beginPath();
              n.moveTo(pos, -raio * 0.8);
              n.lineTo(pos - Math.sin(tempo*30)*raio*0.4, 0);
              n.lineTo(pos + Math.sin(tempo*25)*raio*0.3, raio * 0.5);
              n.lineTo(0, raio * 1.2);
              n.stroke();
           }
        }

        // GORRO DE CHAMAS/MAGIA
        n.fillStyle = corGorro;
        n.strokeStyle = "#991b1b";
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.6, -raio * 0.6);
        n.bezierCurveTo(-raio * 0.2, -raio * 0.8, raio * 0.2, -raio * 0.8, raio * 0.6, -raio * 0.6);
        n.bezierCurveTo(raio * 1.2, -raio * 1.6, 0, -raio * 1.8, -raio * 0.2, -raio * 1.8);
        n.bezierCurveTo(-raio * 0.6, -raio * 1.4, -raio * 0.8, -raio * 1.0, -raio * 0.6, -raio * 0.6);
        n.fill(); n.stroke();

        // OLHOS (Sombrios no meio do dourado)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.3, cy = -raio * 0.2;
            n.beginPath();
            n.moveTo(cx - raio * 0.1, cy - raio * 0.1); n.lineTo(cx + raio * 0.1, cy + raio * 0.1);
            n.moveTo(cx + raio * 0.1, cy - raio * 0.1); n.lineTo(cx - raio * 0.1, cy + raio * 0.1);
            n.stroke();
          });
        } else {
          n.fillStyle = corSombra;
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.15, -raio * 0.25);
            n.lineTo(lado * raio * 0.5, -raio * 0.15);
            n.lineTo(lado * raio * 0.3, -raio * 0.05);
            n.closePath();
            n.fill();

            n.fillStyle = luzFaisca;
            n.beginPath(); n.arc(lado * raio * 0.3, -raio * 0.15, Math.max(1, raio*0.04), 0, Math.PI*2); n.fill();
            n.fillStyle = corSombra;
          });
        }

        // SORRISO SINISTRO E CACHIMBO
        n.strokeStyle = corSombra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 0.3, raio * 0.15);
        n.quadraticCurveTo(0, raio * 0.4, raio * 0.4, raio * 0.1);
        n.stroke();

        n.fillStyle = corSombra;
        n.beginPath();
        n.moveTo(raio * 0.3, raio * 0.12);
        n.lineTo(raio * 0.7, raio * 0.25);
        n.lineTo(raio * 0.75, raio * 0.1);
        n.lineTo(raio * 0.6, raio * 0.08);
        n.fill(); n.stroke();

        if(!isFainted) {
           n.fillStyle = corGorro;
           n.beginPath(); n.arc(raio * 0.7, raio * 0.15, raio * 0.06, 0, Math.PI*2); n.fill();
           // Fumo mágico
           n.fillStyle = "rgba(254, 240, 138, 0.6)";
           n.beginPath(); n.arc(raio * 0.8 + Math.sin(tempo*5)*raio*0.1, -raio * 0.1 - (tempo*20)%(raio*0.5), Math.max(1, raio*0.15), 0, Math.PI*2); n.fill();
        }

        n.restore();
      }


       function desenharGalopim(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let isMarca = u.silhouette && u.silhouette.includes("marca");
        let tempo = f.t || 0;

        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);

        let galope = isFainted ? 0 : Math.abs(Math.sin(tempo * 8)) * o * 0.08;

        let corObsidiana = "#1c1917";
        let sombraObsidiana = "#09090b";
        let corMagma = isMarca ? "#dc2626" : "#ea580c";
        let luzFogo = isMarca ? "#e0f2fe" : "#fde047";
        let corSelo = "#fbbf24";

        n.save();
        n.translate(r, l - galope + o * 0.05);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // CORPO DE EQUINO INFERNAL
        let gradCorpo = n.createLinearGradient(0, 0, 0, raio * 1.5);
        gradCorpo.addColorStop(0, corObsidiana);
        gradCorpo.addColorStop(1, sombraObsidiana);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraObsidiana;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio * 0.8, raio * 0.2);
        n.quadraticCurveTo(0, -raio * 0.3, raio * 0.9, raio * 0.1);
        n.lineTo(raio * 1.1, raio * 0.8);
        n.lineTo(-raio * 0.9, raio * 1.2);
        n.closePath();
        n.fill(); n.stroke();

        // PATAS EM CHAMAS
        n.fillStyle = corObsidiana;
        [[-raio * 0.7, raio * 1.1], [-raio * 0.2, raio * 1.2], [raio * 0.4, raio * 1.0], [raio * 0.9, raio * 0.8]].forEach((pos, idx) => {
           n.save();
           n.translate(pos[0], pos[1]);
           if (!isFainted) n.rotate(Math.sin(tempo * 10 + idx) * 0.3);

           n.beginPath();
           n.moveTo(-raio*0.2, 0);
           n.lineTo(-raio*0.1, raio*0.6);
           n.lineTo(raio*0.1, raio*0.6);
           n.lineTo(raio*0.2, 0);
           n.fill(); n.stroke();

           if (!isFainted) {
              n.fillStyle = corMagma;
              n.beginPath();
              n.arc(0, raio*0.7, raio*0.15 + Math.sin(tempo*15)*raio*0.05, 0, Math.PI*2);
              n.fill();
           }
           n.restore();
        });

        // PILAR COLOSSAL DE FOGO
        let fogoH = raio * 1.8;
        if (!isFainted) {
           n.shadowColor = corMagma;
           n.shadowBlur = 20;

           n.fillStyle = corMagma;
           n.beginPath();
           n.moveTo(-raio * 0.4, 0);
           n.bezierCurveTo(-raio * 0.6, -fogoH * 0.5, raio * 0.2, -fogoH * 0.8, -raio * 0.2 + Math.sin(tempo*10)*raio*0.2, -fogoH);
           n.bezierCurveTo(raio * 0.8, -fogoH * 0.7, raio * 0.3, -fogoH * 0.3, raio * 0.5, 0);
           n.fill();

           n.fillStyle = luzFogo;
           n.beginPath();
           n.moveTo(-raio * 0.2, 0);
           n.bezierCurveTo(-raio * 0.3, -fogoH * 0.4, raio * 0.1, -fogoH * 0.6, -raio * 0.1 + Math.sin(tempo*12)*raio*0.1, -fogoH * 0.8);
           n.bezierCurveTo(raio * 0.4, -fogoH * 0.5, raio * 0.1, -fogoH * 0.2, raio * 0.2, 0);
           n.fill();

           n.shadowBlur = 0;
        } else {
           n.fillStyle = "#3f3f46";
           n.beginPath();
           n.moveTo(-raio * 0.4, 0);
           n.quadraticCurveTo(0, -raio * 0.5, raio * 0.5, 0);
           n.fill();
        }

        // SELO DO TATÁ
        if (isMarca && !isFainted) {
           n.save();
           n.translate(0, -raio * 0.8);
           n.rotate(tempo * 3);
           n.strokeStyle = corSelo;
           n.lineWidth = strokeW * 2;
           n.shadowColor = corSelo;
           n.shadowBlur = 10;

           n.beginPath();
           n.moveTo(0, -raio * 0.4);
           n.lineTo(raio * 0.35, raio * 0.2);
           n.lineTo(-raio * 0.35, raio * 0.2);
           n.closePath();
           n.stroke();

           n.beginPath();
           n.moveTo(0, raio * 0.4);
           n.lineTo(raio * 0.35, -raio * 0.2);
           n.lineTo(-raio * 0.35, -raio * 0.2);
           n.closePath();
           n.stroke();

           n.fillStyle = luzFogo;
           n.beginPath(); n.arc(0, 0, raio*0.1, 0, Math.PI*2); n.fill();
           n.restore();
        }

        n.restore();
      }

      function desenharGalopimMarca(n, u, r, l, o, f) {
        // Galopim da Marca (mula-marca) - Variante Rara Sombria/Dourada
        let isFainted = f.fainted; let tempo = f.t || 0;
        let galope = isFainted ? 0 : Math.sin(tempo * 8) * o * 0.04;
        n.save(); n.translate(r, l - galope + o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corPelo = "#1c1917"; let bordaPelo = "#000"; // Obsidiana/Negro
        let corFogo1 = "#ea580c"; let corFogo2 = "#fde047"; let corFogo3 = "#ffffff"; // Fogo dourado super quente

        // Pernas
        n.fillStyle = corPelo; n.strokeStyle = bordaPelo; n.lineWidth = strokeW * 2;
        n.beginPath(); n.moveTo(raio*0.2, raio*0.2); n.lineTo(raio*0.5, raio*0.7); n.lineTo(raio*0.3, raio*0.8); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.2, 0); n.lineTo(-raio*0.6, raio*0.4); n.lineTo(-raio*0.4, raio*0.5); n.closePath(); n.fill(); n.stroke();

        // Cascos
        n.fillStyle = corFogo2; n.strokeStyle = "#ca8a04";
        n.beginPath(); n.moveTo(raio*0.5, raio*0.7); n.lineTo(raio*0.6, raio*0.8); n.lineTo(raio*0.3, raio*0.8); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.6, raio*0.4); n.lineTo(-raio*0.7, raio*0.5); n.lineTo(-raio*0.4, raio*0.5); n.fill(); n.stroke();

        // Corpo
        n.fillStyle = corPelo; n.strokeStyle = bordaPelo; n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(raio*0.4, raio*0.3); n.quadraticCurveTo(0, raio*0.6, -raio*0.3, raio*0.2); n.quadraticCurveTo(-raio*0.5, -raio*0.2, -raio*0.2, -raio*0.4); n.lineTo(0, -raio*0.5); n.quadraticCurveTo(raio*0.6, -raio*0.2, raio*0.4, raio*0.3);
        n.fill(); n.stroke();

        // A MARCA DO TATÁ NO PEITO
        n.strokeStyle = corFogo2; n.lineWidth = strokeW * 1.5; n.shadowColor = corFogo2; n.shadowBlur = isFainted ? 0 : 15;
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.1); n.lineTo(-raio*0.05, raio*0.1); n.lineTo(-raio*0.3, raio*0.05); n.closePath(); n.stroke();
        n.shadowBlur = 0;

        // O FOGO DOURADO
        if(!isFainted) {
            let fogoAnim = Math.sin(tempo*15)*raio*0.1;
            n.fillStyle = corFogo1; n.strokeStyle = "#c2410c"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(-0.2*raio, -raio*0.4); n.quadraticCurveTo(-raio*0.9 - fogoAnim, -raio*0.9, -raio*0.2, -raio*1.4); n.quadraticCurveTo(0.1*raio, -raio*0.9, 0.2*raio, -raio*0.4); n.fill(); n.stroke();

            n.fillStyle = corFogo2; n.strokeStyle = corFogo1;
            n.beginPath(); n.moveTo(-0.1*raio, -raio*0.4); n.quadraticCurveTo(-raio*0.6 + fogoAnim, -raio*0.8, 0, -raio*1.2); n.quadraticCurveTo(0.2*raio, -raio*0.8, 0.1*raio, -raio*0.4); n.fill(); n.stroke();

            n.fillStyle = corFogo3; n.beginPath(); n.moveTo(-0.05*raio, -raio*0.4); n.quadraticCurveTo(-raio*0.2, -raio*0.7, 0, -raio*0.9); n.quadraticCurveTo(0.1*raio, -raio*0.7, 0.05*raio, -raio*0.4); n.fill();
        }
        n.restore();
      }

      function desenharIgnira(n, u, r, l, o, f) {
        // Ignira (boitata) - Serpente de Magma Cristalina
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter"; // Miter dá cantos afiados (estilo Faebluma)
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 5) * o * 0.05;

        let corMagma = "#ea580c";
        let sombraMagma = "#7c2d12";
        let luzFogo = "#fde047";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4;
        let pulsoChama = Math.sin(tempo * 12) * 0.2 + 0.8;

        // 1. CORPO SEGMENTADO (Cristais de Magma)
        let numSegmentos = 5;
        let tamSeg = raio * 0.3;

        for (let i = numSegmentos; i > 0; i--) {
            let cx = -i * raio * 0.25;
            let cy = Math.sin(tempo * 5 - i) * raio * 0.15; // Movimento serpentino

            // Chamas de Plasma (Estilo estilhaços nas costas de cada segmento)
            if (!isFainted) {
                n.save();
                n.translate(cx, cy);
                n.scale(1, pulsoChama);
                n.fillStyle = "rgba(234, 88, 12, 0.8)"; // Magma translúcido
                n.strokeStyle = luzFogo;
                n.lineWidth = strokeW * 0.8;
                n.beginPath();
                n.moveTo(0, -tamSeg * 0.5);
                n.lineTo(-tamSeg * 0.8, -tamSeg * 1.8);
                n.lineTo(tamSeg * 0.5, -tamSeg * 1.2);
                n.closePath();
                n.fill(); n.stroke();
                n.restore();
            }

            // Segmento (Diamante Afiado)
            let gradSeg = n.createLinearGradient(0, cy - tamSeg, 0, cy + tamSeg);
            gradSeg.addColorStop(0, luzFogo); gradSeg.addColorStop(0.5, corMagma); gradSeg.addColorStop(1, sombraMagma);

            n.fillStyle = gradSeg;
            n.strokeStyle = sombraMagma;
            n.lineWidth = strokeW * 1.5;
            n.beginPath();
            n.moveTo(cx + tamSeg, cy);
            n.lineTo(cx, cy - tamSeg * 0.8);
            n.lineTo(cx - tamSeg, cy);
            n.lineTo(cx, cy + tamSeg * 0.8);
            n.closePath();
            n.fill(); n.stroke();
        }

        // 2. CABEÇA (Víbora Cristalina)
        let hcx = raio * 0.15;
        let hcy = Math.sin(tempo * 5) * raio * 0.15;

        let gradCabeca = n.createLinearGradient(0, hcy - raio*0.5, 0, hcy + raio*0.5);
        gradCabeca.addColorStop(0, luzFogo); gradCabeca.addColorStop(0.5, corMagma); gradCabeca.addColorStop(1, sombraMagma);

        // Capuz/Coroa de Fogo (Estilhaços maiores)
        if (!isFainted) {
            n.fillStyle = "rgba(250, 204, 21, 0.8)";
            n.strokeStyle = luzFogo;
            n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(hcx, hcy - raio*0.2); n.lineTo(hcx - raio*0.4, hcy - raio*0.8); n.lineTo(hcx + raio*0.2, hcy - raio*0.6); n.closePath(); n.fill(); n.stroke();
            n.beginPath(); n.moveTo(hcx, hcy - raio*0.2); n.lineTo(hcx + raio*0.4, hcy - raio*0.7); n.lineTo(hcx + raio*0.6, hcy - raio*0.3); n.closePath(); n.fill(); n.stroke();
        }

        // Geometria da Cabeça (Diamante projetado)
        n.fillStyle = gradCabeca;
        n.strokeStyle = sombraMagma;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(hcx + raio * 0.5, hcy); // Focinho
        n.lineTo(hcx, hcy - raio * 0.35); // Topo
        n.lineTo(hcx - raio * 0.25, hcy); // Base craniana
        n.lineTo(hcx, hcy + raio * 0.25); // Mandíbula
        n.closePath();
        n.fill(); n.stroke();

        // 3. OLHOS (Fendas de energia do Faebluma)
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW * 1.5;
            n.beginPath(); n.moveTo(hcx + raio*0.1, hcy - raio*0.1); n.lineTo(hcx + raio*0.2, hcy); n.stroke();
        } else {
            n.fillStyle = "#0f172a";
            n.beginPath();
            n.moveTo(hcx + raio*0.1, hcy - raio*0.15);
            n.lineTo(hcx + raio*0.3, hcy - raio*0.05);
            n.lineTo(hcx + raio*0.2, hcy);
            n.closePath(); n.fill();

            // Ponto de luz da pupila
            n.fillStyle = luzFogo;
            n.beginPath(); n.arc(hcx + raio*0.2, hcy - raio*0.08, Math.max(1, raio*0.03), 0, Math.PI*2); n.fill();
        }

        // 4. EMBERS ORBITAIS (Estilhaços de fogo voando)
        if (!isFainted) {
            n.strokeStyle = luzFogo;
            n.lineWidth = strokeW * 1.5;
            for(let i=0; i<3; i++) {
                let px = hcx + Math.cos(tempo * 6 + i * 2.5) * raio * 0.8;
                let py = hcy + Math.sin(tempo * 5 + i * 2.5) * raio * 0.6;
                n.beginPath();
                n.moveTo(px, py - raio*0.1);
                n.lineTo(px + raio*0.05, py);
                n.lineTo(px - raio*0.05, py + raio*0.1);
                n.stroke();
            }
        }

        n.restore();
      }

      function desenharIgniraMarca(n, u, r, l, o, f) {
        // Ignira da Marca (boitata-marca) - Variante Sombria/Dourada Cristalina
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 5) * o * 0.05;

        let corObsidiana = "#1e293b";
        let sombraObsidiana = "#020617";
        let luzFogo = "#facc15"; // Dourado brilhante da Marca

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.4;
        let pulsoChama = Math.sin(tempo * 12) * 0.2 + 0.8;

        // 1. CORPO SEGMENTADO (Cristais Negros)
        let numSegmentos = 5;
        let tamSeg = raio * 0.3;

        for (let i = numSegmentos; i > 0; i--) {
            let cx = -i * raio * 0.25;
            let cy = Math.sin(tempo * 5 - i) * raio * 0.15;

            // Chamas de Plasma Dourado
            if (!isFainted) {
                n.save();
                n.translate(cx, cy);
                n.scale(1, pulsoChama);
                n.fillStyle = "rgba(250, 204, 21, 0.7)";
                n.strokeStyle = luzFogo;
                n.lineWidth = strokeW * 0.8;
                n.beginPath(); n.moveTo(0, -tamSeg * 0.5); n.lineTo(-tamSeg * 0.8, -tamSeg * 1.8); n.lineTo(tamSeg * 0.5, -tamSeg * 1.2); n.closePath(); n.fill(); n.stroke();
                n.restore();
            }

            // Segmento (Diamante Negro)
            let gradSeg = n.createLinearGradient(0, cy - tamSeg, 0, cy + tamSeg);
            gradSeg.addColorStop(0, "#334155"); gradSeg.addColorStop(0.5, corObsidiana); gradSeg.addColorStop(1, sombraObsidiana);

            n.fillStyle = gradSeg; n.strokeStyle = sombraObsidiana; n.lineWidth = strokeW * 1.5;
            n.beginPath(); n.moveTo(cx + tamSeg, cy); n.lineTo(cx, cy - tamSeg * 0.8); n.lineTo(cx - tamSeg, cy); n.lineTo(cx, cy + tamSeg * 0.8); n.closePath(); n.fill(); n.stroke();

            // Símbolo rúnico dourado em cada escama
            if(!isFainted) {
                n.strokeStyle = luzFogo; n.lineWidth = strokeW * 0.5;
                n.beginPath(); n.moveTo(cx, cy - tamSeg*0.3); n.lineTo(cx, cy + tamSeg*0.3); n.stroke();
            }
        }

        // 2. CABEÇA
        let hcx = raio * 0.15;
        let hcy = Math.sin(tempo * 5) * raio * 0.15;
        let gradCabeca = n.createLinearGradient(0, hcy - raio*0.5, 0, hcy + raio*0.5);
        gradCabeca.addColorStop(0, "#334155"); gradCabeca.addColorStop(0.5, corObsidiana); gradCabeca.addColorStop(1, sombraObsidiana);

        // Capuz de Estilhaços Dourados
        if (!isFainted) {
            n.fillStyle = "rgba(250, 204, 21, 0.8)"; n.strokeStyle = luzFogo; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(hcx, hcy - raio*0.2); n.lineTo(hcx - raio*0.4, hcy - raio*0.9); n.lineTo(hcx + raio*0.2, hcy - raio*0.6); n.closePath(); n.fill(); n.stroke();
            n.beginPath(); n.moveTo(hcx, hcy - raio*0.2); n.lineTo(hcx + raio*0.5, hcy - raio*0.8); n.lineTo(hcx + raio*0.6, hcy - raio*0.3); n.closePath(); n.fill(); n.stroke();
        }

        // Geometria da Cabeça
        n.fillStyle = gradCabeca; n.strokeStyle = sombraObsidiana; n.lineWidth = strokeW * 1.5;
        n.beginPath(); n.moveTo(hcx + raio * 0.5, hcy); n.lineTo(hcx, hcy - raio * 0.35); n.lineTo(hcx - raio * 0.25, hcy); n.lineTo(hcx, hcy + raio * 0.25); n.closePath(); n.fill(); n.stroke();

        // MARCA DO TATÁ (Runa Afiada na Testa)
        if(!isFainted) {
            n.strokeStyle = luzFogo; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(hcx, hcy - raio*0.2); n.lineTo(hcx - raio*0.15, hcy - raio*0.1); n.lineTo(hcx, hcy); n.stroke();
        }

        // 3. OLHOS
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW * 1.5;
            n.beginPath(); n.moveTo(hcx + raio*0.1, hcy - raio*0.1); n.lineTo(hcx + raio*0.2, hcy); n.stroke();
        } else {
            n.fillStyle = "#000";
            n.beginPath(); n.moveTo(hcx + raio*0.1, hcy - raio*0.15); n.lineTo(hcx + raio*0.3, hcy - raio*0.05); n.lineTo(hcx + raio*0.2, hcy); n.closePath(); n.fill();
            n.fillStyle = luzFogo;
            n.beginPath(); n.arc(hcx + raio*0.2, hcy - raio*0.08, Math.max(1, raio*0.03), 0, Math.PI*2); n.fill();
        }

        // 4. EMBERS ORBITAIS
        if (!isFainted) {
            n.strokeStyle = luzFogo; n.lineWidth = strokeW * 1.5;
            for(let i=0; i<3; i++) {
                let px = hcx + Math.cos(tempo * 5 + i * 2.5) * raio * 0.8;
                let py = hcy + Math.sin(tempo * 4 + i * 2.5) * raio * 0.6;
                n.beginPath(); n.moveTo(px, py - raio*0.1); n.lineTo(px + raio*0.05, py); n.lineTo(px - raio*0.05, py + raio*0.1); n.stroke();
            }
        }

        n.restore();
      }

      function desenharGalvombra20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 6) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);

        // Flutuação super rápida e errática
        let flutua = Math.sin(tempo * 12) * o * 0.04;

        let corSombra = "#6b21a8";
        let sombraSombra = "#3b0764";
        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // EFEITO DE VELOCIDADE (Rastos residuais / Afterimages)
        if (!isFainted) {
          for (let i = 1; i <= 3; i++) {
            n.globalAlpha = 0.3 - (i * 0.08);
            let trailX = -i * raio * 0.3 * Math.cos(tempo * 10);

            n.beginPath();
            n.moveTo(trailX - raio * 0.8, 0);
            n.quadraticCurveTo(trailX - raio * 0.2, -raio * 0.5, trailX + raio * 0.4, 0);
            n.quadraticCurveTo(trailX - raio * 0.2, raio * 0.5, trailX - raio * 0.8, 0);
            n.fillStyle = corSombra;
            n.fill();
          }
          n.globalAlpha = 1;
        }

        // CORPO DE FALCÃO ESPECTRAL (Aerodinâmico e Afiado)
        let gradCorpo = n.createLinearGradient(-raio, 0, raio, 0);
        gradCorpo.addColorStop(0, sombraSombra);
        gradCorpo.addColorStop(0.7, corSombra);
        gradCorpo.addColorStop(1, luzFaisca); // O bico/frente é pura faísca

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraSombra;
        n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio * 1.2, -raio * 0.8); // Ponta da asa superior traseira
        n.quadraticCurveTo(-raio * 0.3, -raio * 0.2, raio * 1.1, 0); // Bico de raio
        n.quadraticCurveTo(-raio * 0.3, raio * 0.2, -raio * 1.2, raio * 0.8); // Ponta da asa inferior
        n.quadraticCurveTo(-raio * 0.6, 0, -raio * 1.2, -raio * 0.8); // Costas
        n.closePath();
        n.fill();
        n.stroke();

        // VEIOS/LÂMINAS DE RELÂMPAGO (Detalhes na fuselagem)
        if (!isFainted) {
          n.strokeStyle = luzFaisca;
          n.lineWidth = strokeW;
          n.beginPath(); n.moveTo(-raio * 0.5, -raio * 0.2); n.lineTo(raio * 0.4, 0); n.stroke();
          n.beginPath(); n.moveTo(-raio * 0.5, raio * 0.2); n.lineTo(raio * 0.4, 0); n.stroke();

          // Fagulhas voando para trás
          for(let i = 0; i < 4; i++) {
             n.beginPath();
             let fx = -raio * 0.5 - Math.random() * raio * 0.8;
             let fy = (Math.random() - 0.5) * raio * 1.5;
             n.arc(fx, fy, raio * 0.03, 0, Math.PI * 2);
             n.fillStyle = luzFaisca;
             n.fill();
          }
        }

        // OLHO (Fenda supersónica)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          n.beginPath();
          n.moveTo(raio * 0.2, -raio * 0.1); n.lineTo(raio * 0.4, raio * 0.1);
          n.moveTo(raio * 0.4, -raio * 0.1); n.lineTo(raio * 0.2, raio * 0.1);
          n.stroke();
        } else {
          n.fillStyle = "#0f172a";
          n.beginPath();
          n.moveTo(raio * 0.2, 0);
          n.lineTo(raio * 0.6, -raio * 0.15); // Puxado para trás devido à velocidade
          n.lineTo(raio * 0.5, 0.05 * raio);
          n.closePath();
          n.fill();

          n.fillStyle = luzFaisca;
          n.beginPath();
          n.arc(raio * 0.35, -raio * 0.05, raio * 0.04, 0, Math.PI * 2);
          n.fill();
        }

        n.restore();
      }

      function desenharGalvombra21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 3) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);

        // Flutuação pesada e agressiva
        let flutua = Math.sin(tempo * 4) * o * 0.05;

        let corSombra = "#581c87";
        let sombraSombra = "#2e1065";
        let corFaisca = "#eab308";
        let luzFaisca = "#fef08a";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // AURA DE TEMPESTADE ESTÁTICA
        if (!isFainted) {
          n.fillStyle = "rgba(234, 179, 8, 0.1)";
          n.beginPath();
          n.arc(0, 0, raio * 1.5 + Math.sin(tempo * 15) * raio * 0.1, 0, Math.PI * 2);
          n.fill();
        }

        // BRAÇOS/GARRAS FLUTUANTES (Desconectados e Brutais)
        n.fillStyle = sombraSombra;
        n.strokeStyle = corFaisca;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach((lado) => {
           n.save();
           let moveGarras = Math.sin(tempo * 5 + lado) * raio * 0.2;
           n.translate(lado * raio * 0.8, -raio * 0.2 + moveGarras);

           // Geometria da Garra Cristalizada
           n.beginPath();
           n.moveTo(0, 0);
           n.lineTo(lado * raio * 0.4, raio * 0.5); // Dedão
           n.lineTo(lado * raio * 0.1, raio * 0.7);
           n.lineTo(0, raio * 1.2); // Dedo longo
           n.lineTo(-lado * raio * 0.2, raio * 0.6);
           n.lineTo(-lado * raio * 0.4, raio * 0.8); // Dedo menor
           n.closePath();
           n.fill(); n.stroke();

           if (!isFainted) {
             n.fillStyle = luzFaisca;
             n.beginPath(); n.arc(0, raio*0.4, raio*0.08, 0, Math.PI*2); n.fill();
           }
           n.restore();
        });

        // CORPO CENTRAL (Ametista Negra Grosseira)
        let gradCorpo = n.createRadialGradient(0, 0, raio * 0.2, 0, 0, raio);
        gradCorpo.addColorStop(0, corSombra);
        gradCorpo.addColorStop(1, sombraSombra);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraSombra;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio * 0.6, -raio * 0.8);
        n.lineTo(raio * 0.6, -raio * 0.6);
        n.lineTo(raio * 0.8, raio * 0.5);
        n.lineTo(0, raio * 0.9);
        n.lineTo(-raio * 0.7, raio * 0.4);
        n.closePath();
        n.fill(); n.stroke();

        // NÚCLEO EXPOSTO DE SOBRECARGA
        n.strokeStyle = "rgba(0,0,0,0.6)";
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio * 0.7); n.lineTo(0, raio * 0.9); n.stroke();

        if (!isFainted) {
          n.fillStyle = luzFaisca;
          n.shadowColor = corFaisca;
          n.shadowBlur = 15;
          n.beginPath();
          n.moveTo(0, -raio * 0.2);
          n.lineTo(raio * 0.3, 0);
          n.lineTo(0, raio * 0.3);
          n.lineTo(-raio * 0.3, 0);
          n.closePath();
          n.fill();
          n.shadowBlur = 0;
        }

        // OLHOS (Agressivos e Pesados)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.3, cy = -raio * 0.4;
            n.beginPath();
            n.moveTo(cx - raio * 0.08, cy - raio * 0.08); n.lineTo(cx + raio * 0.08, cy + raio * 0.08);
            n.moveTo(cx + raio * 0.08, cy - raio * 0.08); n.lineTo(cx - raio * 0.08, cy + raio * 0.08);
            n.stroke();
          });
        } else {
          n.fillStyle = "#0f172a";
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.moveTo(lado * raio * 0.2, -raio * 0.3);
            n.lineTo(lado * raio * 0.45, -raio * 0.4); // Sobrancelha em V de raiva
            n.lineTo(lado * raio * 0.35, -raio * 0.2);
            n.closePath();
            n.fill();

            n.fillStyle = luzFaisca;
            n.beginPath();
            n.arc(lado * raio * 0.3, -raio * 0.32, raio * 0.03, 0, Math.PI * 2);
            n.fill();
            n.fillStyle = "#0f172a";
          });
        }

        n.restore();
      }

      function desenharLotussauro20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;

        n.lineCap = "round";
        n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.03; // Movimento pesado de tank

        let corFlora = "#064e3b"; // Verde muito escuro (abissal)
        let sombraFlora = "#022c22";
        let corMare = "#0284c7";
        let luzMare = "#38bdf8";
        let lotoBrilho = "#22d3ee"; // Lótus bioluminescente

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // AURA BIOLUMINESCENTE (HP Massivo)
        if (!isFainted) {
          let aura = n.createRadialGradient(0, -raio * 0.5, raio * 0.2, 0, -raio * 0.5, raio * 1.5);
          aura.addColorStop(0, "rgba(34, 211, 238, 0.3)");
          aura.addColorStop(1, "rgba(2, 132, 199, 0)");
          n.fillStyle = aura;
          n.beginPath(); n.arc(0, -raio * 0.5, raio * 1.5, 0, Math.PI * 2); n.fill();
        }

        // PERNAS COLOSSAIS
        n.fillStyle = sombraFlora;
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        [-raio * 0.5, raio * 0.4].forEach(px => {
           n.beginPath();
           n.moveTo(px, raio * 0.5);
           n.lineTo(px - raio * 0.2, raio * 1.2);
           n.lineTo(px + raio * 0.3, raio * 1.2);
           n.lineTo(px + raio * 0.2, raio * 0.5);
           n.fill(); n.stroke();
        });

        // CORPO DE SAURÓPODE (Domo impenetrável)
        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, corFlora);
        gradCorpo.addColorStop(1, sombraFlora);

        n.fillStyle = gradCorpo;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio * 0.8, raio * 0.8);
        n.bezierCurveTo(-raio * 1.2, -raio * 0.5, raio * 1.2, -raio * 0.5, raio * 0.8, raio * 0.8);
        n.bezierCurveTo(raio * 0.4, raio * 1.0, -raio * 0.4, raio * 1.0, -raio * 0.8, raio * 0.8);
        n.fill(); n.stroke();

        // PESCOÇO E CABEÇA LONGA
        n.beginPath();
        n.moveTo(raio * 0.6, 0);
        n.bezierCurveTo(raio * 1.5, -raio * 0.2, raio * 1.6, -raio * 1.2, raio * 1.2, -raio * 1.4);
        n.bezierCurveTo(raio * 0.8, -raio * 1.5, raio * 0.7, -raio * 1.0, raio * 0.2, -raio * 0.6);
        n.fill(); n.stroke();

        // LÓTUS ABISSAL GIGANTE NAS COSTAS
        n.save();
        n.translate(-raio * 0.2, -raio * 0.7);
        if (!isFainted) {
           n.shadowColor = lotoBrilho;
           n.shadowBlur = 15 + Math.sin(tempo * 5) * 5;
        }
        n.fillStyle = corMare;
        n.strokeStyle = luzMare;
        n.lineWidth = strokeW;
        for(let i = -2; i <= 2; i++) {
           n.beginPath();
           n.rotate(i * 0.3);
           n.moveTo(0, 0);
           n.quadraticCurveTo(raio * 0.4, -raio * 0.8, 0, -raio * 1.2);
           n.quadraticCurveTo(-raio * 0.4, -raio * 0.8, 0, 0);
           n.fill(); n.stroke();
           n.rotate(-i * 0.3);
        }
        // Miolo da Lótus
        n.fillStyle = lotoBrilho;
        n.beginPath(); n.arc(0, -raio * 0.2, raio * 0.15, 0, Math.PI*2); n.fill();
        n.restore();

        // OLHOS PACÍFICOS MAS VAZIOS (Abissais)
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          let cx = raio * 1.2, cy = -raio * 1.2;
          n.beginPath();
          n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
          n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
          n.stroke();
        } else {
          n.fillStyle = lotoBrilho;
          n.beginPath();
          n.arc(raio * 1.2, -raio * 1.2, raio * 0.05, 0, Math.PI * 2);
          n.fill();
        }

        n.restore();
      }

      function desenharLotussauro21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 4) * o * 0.05; // Movimento predador ágil

        let corFlora = "#16a34a";
        let sombraFlora = "#14532d";
        let luzFlora = "#4ade80";
        let corMare = "#2563eb";
        let luzMare = "#60a5fa";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);

        // CORPO DE ESPINOSSAURO PREDADOR
        n.fillStyle = corFlora;
        n.strokeStyle = sombraFlora;
        n.lineWidth = strokeW * 1.5;

        n.beginPath();
        n.moveTo(-raio * 1.2, raio * 0.8); // Cauda pesada
        n.quadraticCurveTo(-raio * 0.5, 0, raio * 0.2, -raio * 0.2); // Dorso
        n.lineTo(raio * 1.1, -raio * 0.4); // Cabeça projetada à frente
        n.lineTo(raio * 0.9, raio * 0.2); // Mandíbula
        n.quadraticCurveTo(0, raio * 0.8, -raio * 1.2, raio * 0.8); // Barriga
        n.closePath();
        n.fill(); n.stroke();

        // VELA DORSAL DE FOLHAS NAVALHA (Ataque)
        n.fillStyle = luzFlora;
        n.strokeStyle = sombraFlora;
        for (let i = 0; i < 5; i++) {
           n.beginPath();
           let xPos = -raio * 0.8 + i * raio * 0.3;
           n.moveTo(xPos, -raio * 0.1 + (i*0.1));
           n.lineTo(xPos + raio * 0.1, -raio * 0.9 - Math.sin(i)*raio*0.3); // Pontas afiadas
           n.lineTo(xPos + raio * 0.3, -raio * 0.05);
           n.fill(); n.stroke();
        }

        // PATAS TRASEIRAS FORTES
        n.fillStyle = sombraFlora;
        n.beginPath();
        n.moveTo(-raio * 0.4, raio * 0.6);
        n.lineTo(-raio * 0.2, raio * 1.2);
        n.lineTo(raio * 0.3, raio * 1.2);
        n.lineTo(0, raio * 0.5);
        n.fill(); n.stroke();

        // GARRAS DIANTEIRAS ENVOLTAS EM ÁGUA
        n.fillStyle = corFlora;
        n.beginPath();
        n.moveTo(raio * 0.5, raio * 0.4);
        n.lineTo(raio * 0.8, raio * 0.9);
        n.lineTo(raio * 0.6, raio * 0.3);
        n.fill(); n.stroke();

        if (!isFainted) {
           n.strokeStyle = luzMare;
           n.lineWidth = strokeW * 2;
           n.beginPath();
           // Turbilhão de água na garra
           n.arc(raio * 0.8, raio * 0.9, Math.max(1, raio*0.15 + Math.sin(tempo*10)*raio*0.05), tempo*5, tempo*5 + Math.PI*1.5);
           n.stroke();
        }

        // OLHOS FEROZES
        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 2;
          let cx = raio * 0.7, cy = -raio * 0.2;
          n.beginPath();
          n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
          n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
          n.stroke();
        } else {
          n.fillStyle = "#0f172a";
          n.beginPath();
          n.moveTo(raio * 0.6, -raio * 0.3);
          n.lineTo(raio * 0.85, -raio * 0.2);
          n.lineTo(raio * 0.75, -raio * 0.1);
          n.closePath();
          n.fill();

          n.fillStyle = luzMare; // Olho brilhante aquático
          n.beginPath(); n.arc(raio * 0.75, -raio * 0.2, raio * 0.03, 0, Math.PI*2); n.fill();
        }

        n.restore();
      }

      function desenharMagmarmor20(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.02;

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 6) * o * 0.04; // Frenético

        let corMagma = "#ea580c";
        let luzMagma = "#fef08a";
        let corPedra = "#292524";
        let sombraPedra = "#0c0a09";

        n.save();
        n.translate(r, l + flutua);
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42 * (1 + (u.stage || 0) * 0.15);

        // AURA DE CALOR
        if (!isFainted) {
          let aura = n.createRadialGradient(0, 0, raio * 0.5, 0, 0, raio * 1.5);
          aura.addColorStop(0, "rgba(234, 88, 12, 0.4)");
          aura.addColorStop(1, "rgba(234, 88, 12, 0)");
          n.fillStyle = aura;
          n.beginPath(); n.arc(0, 0, raio * 1.5, 0, Math.PI * 2); n.fill();
        }

        // BRAÇOS DE LAVA GIGANTES (Berserker / ATK Brutal)
        n.fillStyle = corMagma;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 1.5;
        [-1, 1].forEach(lado => {
           n.save();
           let soco = isFainted ? 0 : Math.sin(tempo * 8 + lado) * raio * 0.3;
           n.translate(lado * raio * 0.8, raio * 0.2 + soco);

           // Ombreira de pedra estilhaçada
           n.fillStyle = corPedra;
           n.beginPath(); n.moveTo(0,-raio*0.5); n.lineTo(lado*raio*0.4, -raio*0.2); n.lineTo(0, raio*0.1); n.fill(); n.stroke();

           // Punho de lava
           n.fillStyle = corMagma;
           n.beginPath(); n.arc(lado * raio * 0.1, raio * 0.4, raio * 0.3, 0, Math.PI*2); n.fill(); n.stroke();

           // Brilho intenso no punho
           if(!isFainted) {
             n.fillStyle = luzMagma;
             n.beginPath(); n.arc(lado * raio * 0.1, raio * 0.4, raio * 0.15, 0, Math.PI*2); n.fill();
           }
           n.restore();
        });

        // TRONCO ESTILHAÇADO (Núcleo exposto)
        n.fillStyle = corPedra;
        n.beginPath();
        n.moveTo(0, -raio * 0.9);
        n.lineTo(raio * 0.6, -raio * 0.4);
        n.lineTo(raio * 0.4, raio * 0.8);
        n.lineTo(-raio * 0.4, raio * 0.8);
        n.lineTo(-raio * 0.6, -raio * 0.4);
        n.closePath();
        n.fill(); n.stroke();

        // FENDA MAGMÁTICA CENTRAL (Peito)
        if (!isFainted) {
           n.fillStyle = luzMagma;
           n.shadowColor = corMagma;
           n.shadowBlur = 15;
           n.beginPath();
           n.moveTo(0, -raio * 0.4);
           n.lineTo(raio * 0.2, 0);
           n.lineTo(0, raio * 0.5);
           n.lineTo(-raio * 0.2, 0);
           n.fill();
           n.shadowBlur = 0;

           // Fagulhas a saltar do peito
           for(let i=0; i<3; i++) {
              n.beginPath();
              n.arc((Math.random()-0.5)*raio*0.8, -raio*0.8 - (tempo*15+i*10)%(raio), raio*0.04, 0, Math.PI*2);
              n.fill();
           }
        }

        // CABEÇA AGRESSIVA
        n.fillStyle = sombraPedra;
        n.beginPath();
        n.moveTo(-raio * 0.3, -raio * 0.8);
        n.lineTo(raio * 0.3, -raio * 0.8);
        n.lineTo(0, -raio * 1.2);
        n.closePath();
        n.fill(); n.stroke();

        if (!isFainted) {
           n.fillStyle = luzMagma;
           n.beginPath(); n.arc(0, -raio * 0.95, raio * 0.05, 0, Math.PI*2); n.fill();
        }

        n.restore();
      }

      function desenharMagmarmor21(n, u, r, l, o, f) {
        let isFainted = f.fainted;
        let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 1.5) * 0.01; // Quase imóvel (Fortaleza)

        n.lineCap = "round";
        n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 2) * o * 0.02; // Pesado

        let corPedra = "#44403c";
        let sombraPedra = "#1c1917";
        let corMagma = "#991b1b"; // Magma arrefecido escuro
        let luzMagma = "#ea580c";

        n.save();
        n.translate(r, l + flutua + o * 0.1); // Assentado no chão
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);

        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45 * (1 + (u.stage || 0) * 0.15);

        // PERNAS DE PILAR (Inamovíveis)
        n.fillStyle = sombraPedra;
        n.strokeStyle = "#000";
        n.lineWidth = strokeW;
        [-1, 1].forEach((lado) => {
          n.beginPath();
          n.rect(lado * raio * 0.4 - raio * 0.2, 0, raio * 0.4, raio * 0.8);
          n.fill(); n.stroke();
        });

        // CARAPAÇA CÚPULA ABSOLUTA (Impenetrável)
        let gradCasco = n.createRadialGradient(0, -raio * 0.2, raio * 0.2, 0, 0, raio * 1.2);
        gradCasco.addColorStop(0, corPedra);
        gradCasco.addColorStop(1, sombraPedra);

        n.fillStyle = gradCasco;
        n.strokeStyle = sombraPedra;
        n.lineWidth = strokeW * 2;
        n.beginPath();
        n.arc(0, raio * 0.2, raio * 1.2, Math.PI, 0); // Meia-lua perfeita
        n.closePath();
        n.fill(); n.stroke();

        // ESPINHOS DE OBSIDIANA (Grossos e Romboide)
        n.fillStyle = sombraPedra;
        let espinhos = [-raio*0.8, -raio*0.4, 0, raio*0.4, raio*0.8];
        espinhos.forEach(px => {
           n.beginPath();
           n.moveTo(px - raio*0.1, -raio*0.6); // Base (considerando a curva do arco de forma simplificada)
           n.lineTo(px, -raio * 1.4);
           n.lineTo(px + raio*0.1, -raio*0.6);
           n.fill(); n.stroke();
        });

        // FISSURAS VULCÂNICAS LENTAS
        if (!isFainted) {
           n.strokeStyle = luzMagma;
           n.lineWidth = strokeW * 1.5;
           n.globalAlpha = 0.5 + Math.sin(tempo * 3) * 0.5; // Pulso lento de calor

           n.beginPath(); n.moveTo(-raio*0.6, 0); n.lineTo(-raio*0.2, -raio*0.5); n.stroke();
           n.beginPath(); n.moveTo(raio*0.6, 0); n.lineTo(raio*0.2, -raio*0.5); n.stroke();
           n.beginPath(); n.moveTo(0, raio*0.2); n.lineTo(0, -raio*0.3); n.stroke();

           n.globalAlpha = 1;
        }

        // ROSTO BLINDADO (Embutido no casco)
        n.fillStyle = sombraPedra;
        n.beginPath();
        n.rect(-raio * 0.3, -raio * 0.2, raio * 0.6, raio * 0.4);
        n.fill(); n.stroke();

        if (isFainted) {
          n.strokeStyle = "#000";
          n.lineWidth = strokeW * 1.5;
          [-1, 1].forEach((lado) => {
            let cx = lado * raio * 0.15, cy = 0;
            n.beginPath();
            n.moveTo(cx - raio * 0.05, cy - raio * 0.05); n.lineTo(cx + raio * 0.05, cy + raio * 0.05);
            n.moveTo(cx + raio * 0.05, cy - raio * 0.05); n.lineTo(cx - raio * 0.05, cy + raio * 0.05);
            n.stroke();
          });
        } else {
          n.fillStyle = corMagma; // Olho escuro
          [-1, 1].forEach((lado) => {
            n.beginPath();
            n.rect(lado * raio * 0.1, -raio * 0.1, raio * 0.1, raio * 0.1);
            n.fill();

            n.fillStyle = luzMagma;
            n.beginPath(); n.arc(lado * raio * 0.15, -raio * 0.05, raio * 0.02, 0, Math.PI*2); n.fill();
            n.fillStyle = corMagma;
          });
        }

        n.restore();
      }

      function desenharPyrombra20(n, u, r, l, o, f) {
        // Pyrombra Ígneo (ATK) - O Devorador de Sóis
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 6) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let esc = 1 + Math.sin(tempo * 8) * 0.03; n.scale(esc, esc);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corChama = "#f97316"; let luzChama = "#fef08a"; let corSombra = "#3b0764";

        // Coroa de Sombras Explosivas (Asas abstratas massivas)
        n.fillStyle = corSombra; n.strokeStyle = "#1e1b4b"; n.lineWidth = strokeW;
        for(let i=0; i<6; i++) {
           n.save();
           let ang = (i * Math.PI*2)/6 + tempo;
           n.rotate(ang);
           n.beginPath();
           n.moveTo(0, raio*0.2);
           n.quadraticCurveTo(raio*0.8, raio*0.4, raio*1.5 + Math.sin(tempo*15+i)*raio*0.3, 0); // Lâmina longa
           n.quadraticCurveTo(raio*0.8, -raio*0.4, 0, -raio*0.2);
           n.fill(); n.stroke();
           n.restore();
        }

        // Núcleo Ígneo Gigante (A chama original suprema)
        let gradFogo = n.createRadialGradient(0, raio*0.2, raio*0.1, 0, -raio*0.2, raio*1.2);
        gradFogo.addColorStop(0, luzChama); gradFogo.addColorStop(0.4, corChama); gradFogo.addColorStop(1, "#7c2d12");
        n.fillStyle = gradFogo; n.shadowColor = corChama; n.shadowBlur = isFainted ? 0 : 25;
        n.beginPath();
        n.moveTo(0, -raio * 1.2); // Ponta da gota
        n.bezierCurveTo(raio*1.2, -raio*0.2, raio*0.9, raio*1.0, 0, raio*1.0);
        n.bezierCurveTo(-raio*0.9, raio*1.0, -raio*1.2, -raio*0.2, 0, -raio*1.2);
        n.fill(); n.shadowBlur = 0;

        // Olhos Divinos Furiosos
        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.1); n.lineTo(-raio*0.4, -raio*0.3); n.lineTo(-raio*0.3, 0.1*raio); n.fill();
        n.beginPath(); n.moveTo(raio*0.1, -raio*0.1); n.lineTo(raio*0.4, -raio*0.3); n.lineTo(raio*0.3, 0.1*raio); n.fill();
        n.restore();
      }

      function desenharPyrombra21(n, u, r, l, o, f) {
        // Pyrombra Umbral (DEF) - O Eclipse Enclausurado
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.02); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corSombra = "#1e1b4b"; let casca = "#0f172a"; let corChama = "#ea580c";

        // Escudos Orbitais de Sombra Pura
        if(!isFainted) {
           n.strokeStyle = casca; n.lineWidth = strokeW*3; n.setLineDash([raio*0.4, raio*0.2]);
           n.beginPath(); n.arc(0, 0, raio*1.3, tempo*2, tempo*2 + Math.PI*2); n.stroke();
           n.beginPath(); n.arc(0, 0, raio*1.1, -tempo*3, -tempo*3 + Math.PI*2); n.stroke();
           n.setLineDash([]);
        }

        // Monólito em forma de Gota (O ovo evoluiu para um cofre impenetrável)
        n.fillStyle = corSombra; n.strokeStyle = casca; n.lineWidth = strokeW*2;
        n.beginPath();
        n.moveTo(0, -raio * 1.3);
        n.bezierCurveTo(raio*1.1, -raio*0.2, raio*1.0, raio*1.1, 0, raio*1.1);
        n.bezierCurveTo(-raio*1.0, raio*1.1, -raio*1.1, -raio*0.2, 0, -raio*1.3);
        n.fill(); n.stroke();

        // Fenda no Monólito (Olho do Vulcão/Chama Interna)
        n.fillStyle = corChama; n.shadowColor = "#fde047"; n.shadowBlur = isFainted ? 0 : 20;
        n.beginPath();
        n.moveTo(0, -raio*0.4);
        n.quadraticCurveTo(raio*0.4, 0, 0, raio*0.4);
        n.quadraticCurveTo(-raio*0.4, 0, 0, -raio*0.4);
        n.fill(); n.shadowBlur = 0;

        // Núcleo Branco incandescente
        if(!isFainted){ n.fillStyle="#fff"; n.beginPath(); n.arc(0, 0, raio*0.1+Math.sin(tempo*10)*raio*0.02, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharNoctibra20(n, u, r, l, o, f) {
        // Noctibra Umbral (VEL) - A Constelação Serpente
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#6b21a8"; let brilho = "#c084fc"; let corFogo = "#f97316";

        // Espiral Massiva de Esferas (Evolução geométrica das bolinhas)
        let numBolas = 12;
        for(let i=0; i<numBolas; i++) {
           let fase = i/numBolas * Math.PI * 4; // Faz 2 voltas (espiral)
           let rEspiral = raio * 1.2 * (1 - i/(numBolas*1.2));
           let ang = tempo * 8 + fase;
           let bx = Math.cos(ang) * rEspiral;
           let by = Math.sin(ang) * rEspiral * 0.5 + (i * raio*0.1) - raio*0.5; // Sobe em espiral

           let tam = raio*0.1 + (numBolas-i)*raio*0.015;

           n.fillStyle = corCorpo; n.strokeStyle = "#000"; n.lineWidth=strokeW;
           n.beginPath(); n.arc(bx, by, tam, 0, Math.PI*2); n.fill(); n.stroke();
           // Veio de luz dentro da esfera
           if(!isFainted) { n.fillStyle=brilho; n.beginPath(); n.arc(bx, by-tam*0.3, tam*0.3, 0, Math.PI*2); n.fill(); }
        }

        // Cabeça Jato/Triângulo (No topo da espiral)
        n.translate(0, -raio*0.7 + Math.sin(tempo*15)*raio*0.1);
        n.fillStyle = corCorpo; n.strokeStyle="#000"; n.lineWidth=strokeW*2;
        n.beginPath(); n.moveTo(0, -raio*0.6); n.lineTo(raio*0.5, raio*0.3); n.lineTo(-raio*0.5, raio*0.3); n.closePath(); n.fill(); n.stroke();

        // Olhos/Visor Angular
        n.fillStyle = isFainted ? "#000" : corFogo;
        n.beginPath(); n.moveTo(0, 0); n.lineTo(raio*0.3, raio*0.1); n.lineTo(0, raio*0.2); n.lineTo(-raio*0.3, raio*0.1); n.closePath(); n.fill();
        n.restore();
      }

      function desenharNoctibra21(n, u, r, l, o, f) {
        // Noctibra Ígneo (ATK) - O Leviatã de Magma
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + o*0.1); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corMagma = "#ea580c"; let corRocha = "#451a03";

        // Pedregulhos Gigantes (Bolinhas super crescidas) arrastando-se no chão
        let posicoes = [[-raio*0.8, 0, 0.4], [0, raio*0.2, 0.6], [raio*0.8, -raio*0.2, 0.8]];
        posicoes.forEach((p, idx) => {
           let pulso = isFainted ? 0 : Math.sin(tempo*5 + idx)*raio*0.05;
           n.fillStyle = corRocha; n.strokeStyle = "#000"; n.lineWidth=strokeW*2;
           n.beginPath(); n.arc(p[0], p[1], raio*p[2] + pulso, 0, Math.PI*2); n.fill(); n.stroke();
           // Núcleo de Magma da bola
           if(!isFainted) { n.fillStyle=corMagma; n.beginPath(); n.arc(p[0], p[1], raio*(p[2]*0.5), 0, Math.PI*2); n.fill(); }
        });

        // Capelo (A cabeça triangular virou um capuz assustador)
        n.translate(raio*0.8, -raio*0.2 + Math.sin(tempo*3)*raio*0.1);
        n.fillStyle = corRocha;
        n.beginPath();
        n.moveTo(0, -raio*1.2); // Ponta alta
        n.lineTo(raio*1.0, raio*0.5); // Borda direita
        n.lineTo(-raio*1.0, raio*0.5); // Borda esquerda
        n.closePath(); n.fill(); n.stroke();

        // Fauces de Fogo (Boca dentro do triângulo)
        n.fillStyle = corMagma;
        n.beginPath(); n.moveTo(0, -raio*0.4); n.lineTo(raio*0.6, raio*0.3); n.lineTo(-raio*0.6, raio*0.3); n.closePath(); n.fill();

        // Olhos Vazios Sombrios
        n.fillStyle = "#000";
        n.beginPath(); n.arc(-raio*0.3, 0, raio*0.1, 0, Math.PI*2); n.arc(raio*0.3, 0, raio*0.1, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharNoctivern20(n, u, r, l, o, f) {
        // Noctivern Umbral (ATK) - O Soberano Fractal
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 4) * o * 0.08); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corCristal = "#8b5cf6"; let brilho = "#d8b4fe"; let borda = "#4c1d95";

        // Asas Fractais (Triângulos e losangos flutuantes, desencostados do corpo)
        let bater = Math.sin(tempo*12) * 0.3 + 0.8;
        n.fillStyle = corCristal; n.strokeStyle = borda; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.save(); n.scale(lado * bater, 1);
           // Asa Principal (Prisma flutuante)
           n.beginPath(); n.moveTo(raio*0.3, -raio*0.2); n.lineTo(raio*1.6, -raio*0.6); n.lineTo(raio*1.0, raio*0.2); n.closePath(); n.fill(); n.stroke();
           // Asa Secundária (Lâmina inferior)
           n.beginPath(); n.moveTo(raio*0.4, raio*0.3); n.lineTo(raio*1.2, raio*0.8); n.lineTo(raio*0.6, raio*0.9); n.closePath(); n.fill(); n.stroke();
           n.restore();
        });

        // Corpo Geométrico Perfeito (Diamante Flutuante)
        n.beginPath(); n.moveTo(0, -raio*0.8); n.lineTo(raio*0.4, 0); n.lineTo(0, raio*0.8); n.lineTo(-raio*0.4, 0); n.closePath(); n.fill(); n.stroke();

        // "Orelhas" / Chifres Geométricos Flutuantes
        n.beginPath(); n.moveTo(-raio*0.2, -raio*1.0); n.lineTo(-raio*0.4, -raio*1.4); n.lineTo(-raio*0.5, -raio*0.9); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*1.0); n.lineTo(raio*0.4, -raio*1.4); n.lineTo(raio*0.5, -raio*0.9); n.closePath(); n.fill(); n.stroke();

        // Olhos Brilhantes Geométricos
        n.fillStyle = isFainted ? "#000" : brilho;
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.2); n.lineTo(-raio*0.2, -raio*0.1); n.lineTo(0, 0); n.fill();
        n.beginPath(); n.moveTo(raio*0.1, -raio*0.2); n.lineTo(raio*0.2, -raio*0.1); n.lineTo(0, 0); n.fill();
        n.restore();
      }

      function desenharNoctivern21(n, u, r, l, o, f) {
        // Noctivern Umbral (DEF) - A Égide de Obsidiana
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + o*0.15); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corArmadura = "#4c1d95"; let borda = "#2e1065"; let runa = "#c084fc";

        // Asas dobradas num Hexágono Perfeito (Escudo Absoluto)
        n.fillStyle = corArmadura; n.strokeStyle = borda; n.lineWidth = strokeW*3;
        n.beginPath();
        n.moveTo(0, -raio*1.2);
        n.lineTo(raio*1.0, -raio*0.6);
        n.lineTo(raio*1.0, raio*0.6);
        n.lineTo(0, raio*1.0);
        n.lineTo(-raio*1.0, raio*0.6);
        n.lineTo(-raio*1.0, -raio*0.6);
        n.closePath(); n.fill(); n.stroke();

        // Linhas das membranas endurecidas
        n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, -raio*1.2); n.lineTo(0, raio*1.0); n.stroke();
        n.beginPath(); n.moveTo(-raio*1.0, -raio*0.6); n.lineTo(raio*1.0, raio*0.6); n.stroke();
        n.beginPath(); n.moveTo(-raio*1.0, raio*0.6); n.lineTo(raio*1.0, -raio*0.6); n.stroke();

        // Runas de Defesa Pulsantes
        if(!isFainted) {
           n.strokeStyle = runa; n.lineWidth = strokeW*2; n.shadowColor = runa; n.shadowBlur = 10 + Math.sin(tempo*4)*10;
           n.beginPath(); n.arc(0, 0, raio*0.4, 0, Math.PI*2); n.stroke();
           n.beginPath(); n.arc(0, 0, raio*0.1, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }

        // Orelhinhas blindadas salientes
        n.fillStyle = corArmadura; n.strokeStyle = borda; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.9); n.lineTo(-raio*0.6, -raio*1.4); n.lineTo(-raio*0.8, -raio*0.7); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.4, -raio*0.9); n.lineTo(raio*0.6, -raio*1.4); n.lineTo(raio*0.8, -raio*0.7); n.closePath(); n.fill(); n.stroke();
        n.restore();
      }

      function desenharPetraflor20(n, u, r, l, o, f) {
        // Petraflor Rochoso (DEF) - A Montanha Errante
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo*2)*o*0.02); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corRocha = "#78716c"; let corCopa = "#15803d"; let corTronco = "#451a03";

        // Blocos Orbitais de Defesa (Rochas Flutuantes)
        n.fillStyle = corRocha; n.strokeStyle = "#292524"; n.lineWidth = strokeW*1.5;
        for(let i=0; i<3; i++) {
           n.save();
           let ang = tempo + i*(Math.PI*2)/3;
           n.translate(Math.cos(ang)*raio*1.2, Math.sin(ang)*raio*0.5 + raio*0.4);
           n.rotate(tempo*2);
           n.beginPath(); n.rect(-raio*0.2, -raio*0.2, raio*0.4, raio*0.4); n.fill(); n.stroke();
           n.restore();
        }

        // Base da Montanha (O vaso/pedra evoluído)
        n.beginPath(); n.moveTo(-raio*0.6, 0); n.lineTo(raio*0.6, 0); n.lineTo(raio*0.8, raio*0.8); n.lineTo(-raio*0.8, raio*0.8); n.closePath(); n.fill(); n.stroke();

        // Tronco da Árvore Mestra
        n.fillStyle = corTronco; n.beginPath(); n.moveTo(-raio*0.2, 0); n.lineTo(raio*0.2, 0); n.lineTo(raio*0.1, -raio*0.8); n.lineTo(-raio*0.1, -raio*0.8); n.closePath(); n.fill(); n.stroke();

        // Copa Majestosa (A folhinha evoluída)
        n.fillStyle = corCopa; n.strokeStyle = "#064e3b";
        n.beginPath(); n.arc(0, -raio*0.9, raio*0.7, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.arc(-raio*0.5, -raio*0.7, raio*0.4, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.arc(raio*0.5, -raio*0.7, raio*0.4, 0, Math.PI*2); n.fill(); n.stroke();

        // Rosto Ancestral na Rocha Base
        n.fillStyle = isFainted ? "#000" : "#4ade80";
        n.beginPath(); n.arc(-raio*0.3, raio*0.4, raio*0.06, 0, Math.PI*2); n.arc(raio*0.3, raio*0.4, raio*0.06, 0, Math.PI*2); n.fill();
        n.strokeStyle = isFainted ? "#000" : "#4ade80"; n.beginPath(); n.moveTo(-raio*0.2, raio*0.6); n.lineTo(raio*0.2, raio*0.6); n.stroke();
        n.restore();
      }

      function desenharPetraflor21(n, u, r, l, o, f) {
        // Petraflor Silvestre (ATK) - A Raiz Rompe-Mundos
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo*4)*o*0.04); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corRocha = "#57534e"; let corRaiz = "#22c55e"; let luzEnergia = "#86efac";

        // Punhos Colossais de Vinha (Ataque Bruto)
        n.fillStyle = corRaiz; n.strokeStyle = "#14532d"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.save();
           let soco = isFainted ? 0 : Math.sin(tempo*8 + lado)*raio*0.4;
           n.translate(lado*raio*0.8, soco);
           // Braço
           n.beginPath(); n.moveTo(-lado*raio*0.4, 0); n.lineTo(0, -raio*0.2); n.lineTo(lado*raio*0.2, raio*0.5); n.lineTo(0, raio*0.6); n.closePath(); n.fill(); n.stroke();
           // Punho Espinhoso
           n.beginPath(); n.arc(0, raio*0.6, raio*0.3, 0, Math.PI*2); n.fill(); n.stroke();
           n.restore();
        });

        // Fragmentos do Corpo Original (Rochas Explodidas mantidas por magia)
        n.fillStyle = corRocha; n.strokeStyle = "#1c1917";
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.4); n.lineTo(raio*0.4, -raio*0.2); n.lineTo(0, raio*0.4); n.closePath(); n.fill(); n.stroke(); // Peito
        n.beginPath(); n.moveTo(-raio*0.5, raio*0.2); n.lineTo(-raio*0.2, raio*0.6); n.lineTo(-raio*0.6, raio*0.8); n.closePath(); n.fill(); n.stroke(); // Perna Esq
        n.beginPath(); n.moveTo(raio*0.5, 0); n.lineTo(raio*0.2, raio*0.6); n.lineTo(raio*0.6, raio*0.8); n.closePath(); n.fill(); n.stroke(); // Perna Dir

        // Núcleo Exposto de Energia Pura / Olho Central
        if(!isFainted) {
           n.fillStyle = luzEnergia; n.shadowColor = luzEnergia; n.shadowBlur = 20;
           n.beginPath(); n.arc(0, 0, raio*0.2 + Math.sin(tempo*15)*raio*0.05, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }

        // Coroa de Folhas Iradas
        n.fillStyle = corRaiz; n.beginPath(); n.moveTo(0, -raio*0.3); n.lineTo(-raio*0.6, -raio*1.0); n.lineTo(0, -raio*0.6); n.lineTo(raio*0.6, -raio*1.0); n.closePath(); n.fill(); n.stroke();
        n.restore();
      }

      function desenharRochodon20(n, u, r, l, o, f) {
        // Rochodon Bastião (DEF 196) - Fortaleza Orbital
        let isFainted = f.fainted; let tempo = f.t || 0;
        // Movimento quase impercetível, pesado como uma montanha
        n.save(); n.translate(r, l + Math.sin(tempo * 1.5) * o * 0.02); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#b45309"; let luzPedra = "#f59e0b"; let sombraPedra = "#78350f";

        // Função para desenhar o anel de asteroides (3D simulado)
        const desenharAsteroides = (frente) => {
           if(isFainted) return;
           let numAsteroides = 6;
           for(let i=0; i<numAsteroides; i++) {
              let ang = tempo * 2 + (i * Math.PI * 2) / numAsteroides;
              let isFrente = Math.sin(ang) > 0;
              if(isFrente !== frente) continue; // Desenha os de trás primeiro, os da frente depois do corpo

              n.save();
              let distX = Math.cos(ang) * raio * 1.4;
              let distY = Math.sin(ang) * raio * 0.4; // Órbita achatada para simular 3D
              n.translate(distX, distY);
              n.rotate(tempo * 5 + i); // Asteroide gira sobre si mesmo

              n.fillStyle = corPedra; n.strokeStyle = sombraPedra; n.lineWidth = strokeW;
              n.beginPath();
              n.moveTo(0, -raio*0.15); n.lineTo(raio*0.15, 0); n.lineTo(0, raio*0.15); n.lineTo(-raio*0.15, 0);
              n.closePath(); n.fill(); n.stroke();
              n.restore();
           }
        };

        // 1. Desenhar metade traseira do anel
        desenharAsteroides(false);

        // 2. CORPO CENTRAL (Hexágono Perfeito e Blindado)
        n.fillStyle = corPedra; n.strokeStyle = sombraPedra; n.lineWidth = strokeW * 2.5;
        n.beginPath();
        for(let i=0; i<6; i++) {
          let ang = i * Math.PI / 3 - Math.PI / 2; // Ponta para cima
          let px = Math.cos(ang) * raio;
          let py = Math.sin(ang) * raio;
          if(i===0) n.moveTo(px, py); else n.lineTo(px, py);
        }
        n.closePath(); n.fill(); n.stroke();

        // Camada interna da armadura (Hexágono menor brilhante)
        n.fillStyle = luzPedra; n.strokeStyle = sombraPedra; n.lineWidth = strokeW;
        n.beginPath();
        for(let i=0; i<6; i++) {
          let ang = i * Math.PI / 3 - Math.PI / 2;
          let px = Math.cos(ang) * raio * 0.7;
          let py = Math.sin(ang) * raio * 0.7;
          if(i===0) n.moveTo(px, py); else n.lineTo(px, py);
        }
        n.closePath(); n.fill(); n.stroke();

        // Olhos Estóicos e Defensivos
        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.arc(-raio*0.2, -raio*0.1, raio*0.08, 0, Math.PI*2); n.fill();
        n.beginPath(); n.arc(raio*0.2, -raio*0.1, raio*0.08, 0, Math.PI*2); n.fill();

        if(!isFainted) {
          n.fillStyle = "#000";
          n.beginPath(); n.arc(-raio*0.2, -raio*0.1, raio*0.04, 0, Math.PI*2); n.fill();
          n.beginPath(); n.arc(raio*0.2, -raio*0.1, raio*0.04, 0, Math.PI*2); n.fill();
        }

        // 3. Desenhar metade frontal do anel
        desenharAsteroides(true);

        n.restore();
      }

      function desenharRochodon21(n, u, r, l, o, f) {
        // Rochodon Cataclísmico (ATK 141) - Meteoro Estilhaçado
        let isFainted = f.fainted; let tempo = f.t || 0;
        // Vibração agressiva de sobrecarga
        let tremor = isFainted ? 0 : Math.sin(tempo * 20) * o * 0.015;
        n.save(); n.translate(r + tremor, l + Math.sin(tempo * 6) * o * 0.04); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.02);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#78350f"; let sombraPedra = "#451a03"; let magma = "#ea580c";

        // Estilhaços/Projéteis Orbitais (girando de forma caótica)
        if(!isFainted) {
           let numProj = 4;
           for(let i=0; i<numProj; i++) {
              n.save();
              let ang = tempo * 8 + (i * Math.PI * 2) / numProj;
              let distX = Math.cos(ang) * raio * 1.5;
              let distY = Math.sin(ang) * raio * 1.2;
              n.translate(distX, distY);
              n.rotate(ang + Math.PI/2); // Aponta a lâmina na direção do movimento

              n.fillStyle = sombraPedra; n.strokeStyle = magma; n.lineWidth = strokeW;
              n.beginPath();
              n.moveTo(0, -raio*0.4); // Ponta afiada
              n.lineTo(raio*0.15, raio*0.1);
              n.lineTo(-raio*0.15, raio*0.1);
              n.closePath(); n.fill(); n.stroke();
              n.restore();
           }
        }

        // CORPO CENTRAL (Hexágono Deformado e Estilhaçado)
        n.fillStyle = corPedra; n.strokeStyle = sombraPedra; n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(0, -raio*1.1); n.lineTo(raio*0.7, -raio*0.7); n.lineTo(raio*1.0, raio*0.3);
        n.lineTo(raio*0.4, raio*1.0); n.lineTo(-raio*0.8, raio*0.7); n.lineTo(-raio*0.9, -raio*0.3);
        n.closePath(); n.fill(); n.stroke();

        // Fissura de Magma Massiva no Núcleo
        n.fillStyle = magma;
        if(!isFainted) { n.shadowColor = "#fde047"; n.shadowBlur = 15; }
        n.beginPath();
        n.moveTo(-raio*0.6, -raio*0.3); n.lineTo(0, -raio*0.5); n.lineTo(raio*0.5, -raio*0.1);
        n.lineTo(raio*0.2, raio*0.4); n.lineTo(0, 0); n.lineTo(-raio*0.3, raio*0.5);
        n.closePath(); n.fill(); n.shadowBlur = 0;

        // Olhos Furiosos
        n.fillStyle = isFainted ? "#000" : "#fef08a";
        n.beginPath(); n.moveTo(-raio*0.3, -raio*0.2); n.lineTo(-raio*0.1, -raio*0.1); n.lineTo(-raio*0.2, 0); n.fill();
        n.beginPath(); n.moveTo(raio*0.3, -raio*0.2); n.lineTo(raio*0.1, -raio*0.1); n.lineTo(raio*0.2, 0); n.fill();

        n.restore();
      }

      function desenharRochombra20(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 2) * 0.015;
        n.save(); n.translate(r, l + o*0.05); n.scale(f.flip?-1:1, 1); n.scale(esc, esc);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#44403c"; let borda = "#1c1917"; let corSombra = "#a855f7";

        n.fillStyle = corPedra; n.strokeStyle = borda; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.4, raio*0.3); n.lineTo(lado*raio*0.6, raio*0.8); n.lineTo(lado*raio*0.2, raio*0.8); n.closePath(); n.fill(); n.stroke();
           n.beginPath(); n.moveTo(lado*raio*0.8, raio*0.1); n.lineTo(lado*raio*1.0, raio*0.7); n.lineTo(lado*raio*0.6, raio*0.7); n.closePath(); n.fill(); n.stroke();
        });

        n.beginPath();
        n.moveTo(-raio*0.8, raio*0.4); n.lineTo(-raio*0.9, -raio*0.2);
        n.lineTo(-raio*0.4, -raio*0.8); n.lineTo(raio*0.4, -raio*0.8);
        n.lineTo(raio*0.9, -raio*0.2); n.lineTo(raio*0.8, raio*0.4);
        n.closePath(); n.fill(); n.stroke();

        if(!isFainted) {
           n.strokeStyle = corSombra; n.lineWidth = strokeW * 1.5; n.shadowColor = corSombra; n.shadowBlur = 15;
           n.beginPath(); n.moveTo(-raio*0.4, -raio*0.8); n.lineTo(-raio*0.2, -raio*0.2); n.lineTo(-raio*0.6, 0); n.stroke();
           n.beginPath(); n.moveTo(raio*0.4, -raio*0.8); n.lineTo(raio*0.2, -raio*0.2); n.lineTo(raio*0.6, 0); n.stroke();
           n.beginPath(); n.moveTo(-raio*0.2, -raio*0.2); n.lineTo(raio*0.2, -raio*0.2); n.stroke();
           n.shadowBlur = 0;
        }

        n.beginPath(); n.moveTo(-raio*0.3, raio*0.1); n.lineTo(raio*0.3, raio*0.1); n.lineTo(0, raio*0.6); n.closePath(); n.fill(); n.stroke();

        n.fillStyle = isFainted ? "#000" : corSombra;
        n.beginPath(); n.arc(-raio*0.1, raio*0.3, raio*0.04, 0, Math.PI*2); n.fill();
        n.beginPath(); n.arc(raio*0.1, raio*0.3, raio*0.04, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharRochombra21(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pounce = isFainted ? 0 : Math.sin(tempo*5)*o*0.03;
        n.save(); n.translate(r, l + o*0.05 + pounce); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#57534e"; let borda = "#292524"; let corSombra = "#9333ea";

        n.strokeStyle = borda; n.lineWidth = strokeW*4;
        n.beginPath(); n.moveTo(-raio*0.5, raio*0.2); n.quadraticCurveTo(-raio*1.5, -raio*0.2, -raio*0.8, -raio*0.8); n.stroke();
        n.fillStyle = corPedra; n.beginPath(); n.moveTo(-raio*0.8, -raio*0.8); n.lineTo(-raio*1.0, -raio*1.1); n.lineTo(-raio*0.6, -raio*0.9); n.fill(); n.stroke();

        n.fillStyle = corPedra; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.2, raio*0.4); n.lineTo(lado*raio*0.5, raio*0.8); n.lineTo(lado*raio*0.2, raio*0.8); n.closePath(); n.fill(); n.stroke();
        });

        if(!isFainted) {
           n.fillStyle = corSombra; n.strokeStyle = "#c084fc"; n.lineWidth = strokeW;
           n.beginPath(); n.moveTo(raio*0.5, 0); n.lineTo(raio*1.2, -raio*0.2); n.lineTo(raio*0.9, raio*0.2); n.lineTo(raio*1.3, raio*0.4); n.lineTo(raio*0.8, raio*0.4); n.closePath(); n.fill(); n.stroke();
        }

        n.beginPath(); n.moveTo(-raio*0.5, -raio*0.3); n.lineTo(raio*0.5, -raio*0.5); n.lineTo(raio*0.4, raio*0.4); n.lineTo(-raio*0.4, raio*0.5); n.closePath(); n.fill(); n.stroke();

        n.fillStyle = isFainted ? "#000" : corSombra;
        n.beginPath(); n.moveTo(0, -raio*0.2); n.lineTo(raio*0.2, 0); n.lineTo(0, raio*0.2); n.lineTo(-raio*0.2, 0); n.closePath(); n.fill();

        n.beginPath(); n.moveTo(raio*0.2, -raio*0.4); n.lineTo(raio*0.8, -raio*0.6); n.lineTo(raio*0.6, -raio*0.2); n.lineTo(raio*0.8, 0); n.lineTo(raio*0.2, -raio*0.1); n.closePath(); n.fill(); n.stroke();

        n.fillStyle = isFainted ? "#000" : "#fff"; n.beginPath(); n.arc(raio*0.5, -raio*0.3, raio*0.03, 0, Math.PI*2); n.fill();
        n.restore();
      }