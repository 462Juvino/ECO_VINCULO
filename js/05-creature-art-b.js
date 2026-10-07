/*
 * Eco Vínculo — Arte dos Pats — parte B
 * Trecho preservado do bundle original.
 * Carregado na ordem indicada em index.html.
 * Faixa original aproximada: linhas 18812-29093.
 */
"use strict";


      function desenharRosalfin(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 3) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corRosa = "#f472b6"; let corVentre = "#fdf2f8"; let corAzul = "#38bdf8";

        if(!isFainted) {
           n.strokeStyle = "rgba(56, 189, 248, 0.4)"; n.lineWidth = strokeW*4;
           n.beginPath(); n.ellipse(0, raio*0.6, raio*1.2, raio*0.3, 0, 0, Math.PI*2); n.stroke();
           n.strokeStyle = "rgba(186, 230, 253, 0.6)"; n.lineWidth = strokeW*2;
           n.beginPath(); n.ellipse(0, raio*0.6, raio*1.2, raio*0.3, 0, 0, Math.PI*2); n.stroke();
        }

        n.fillStyle = corRosa; n.strokeStyle = "#be185d"; n.lineWidth = strokeW*1.5;
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.4); n.quadraticCurveTo(-raio*1.2, raio*0.8, -raio*1.0, raio*0.2); n.quadraticCurveTo(-raio*0.6, raio*0.2, 0, raio*0.2); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*1.0, raio*0.2); n.lineTo(-raio*1.4, -raio*0.2); n.lineTo(-raio*0.8, raio*0.2); n.lineTo(-raio*1.2, raio*0.6); n.lineTo(-raio*1.0, raio*0.2); n.fill(); n.stroke();

        let grad = n.createLinearGradient(0, -raio*0.8, 0, raio*0.5);
        grad.addColorStop(0, corRosa); grad.addColorStop(1, corVentre);
        n.fillStyle = grad;
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.4); n.bezierCurveTo(raio*1.2, raio*0.4, raio*1.2, -raio*0.8, 0, -raio*0.8); n.bezierCurveTo(-raio*0.6, -raio*0.8, -raio*0.6, raio*0.4, -raio*0.2, raio*0.4); n.fill(); n.stroke();

        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.4, raio*0.2); n.quadraticCurveTo(lado*raio*0.8, raio*0.6, lado*raio*0.5, raio*0.8); n.lineTo(lado*raio*0.3, raio*0.4); n.fill(); n.stroke();
        });

        n.beginPath(); n.moveTo(raio*0.3, -raio*0.4); n.lineTo(raio*0.8, -raio*0.2); n.lineTo(raio*0.3, -raio*0.2); n.fill(); n.stroke();

        if(!isFainted) {
           n.fillStyle = "rgba(2, 132, 199, 0.7)"; n.strokeStyle = "#7dd3fc";
           n.beginPath(); n.ellipse(0, -raio*0.8, raio*0.5, raio*0.1, Math.PI/12, 0, Math.PI*2); n.fill(); n.stroke();
           n.beginPath(); n.moveTo(-raio*0.3, -raio*0.8); n.lineTo(-raio*0.2, -raio*1.2); n.lineTo(raio*0.2, -raio*1.2); n.lineTo(raio*0.3, -raio*0.75); n.fill(); n.stroke();
           n.beginPath(); n.arc(raio*0.15, -raio*0.4, raio*0.12, 0, Math.PI*2); n.stroke();
           n.beginPath(); n.moveTo(raio*0.15, -raio*0.28); n.lineTo(raio*0.1, 0); n.stroke();
        }

        n.fillStyle = isFainted ? "#000" : "#fff"; n.beginPath(); n.arc(raio*0.15, -raio*0.4, raio*0.08, 0, Math.PI*2); n.fill();
        if(!isFainted) { n.fillStyle = "#000"; n.beginPath(); n.arc(raio*0.18, -raio*0.4, raio*0.03, 0, Math.PI*2); n.fill(); }
        n.fillStyle = "#0f172a"; n.beginPath(); n.moveTo(-raio*0.1, raio*0.1); n.quadraticCurveTo(0, raio*0.2, raio*0.1, raio*0.1); n.stroke();
        n.restore();
      }

      function desenharSereflor21(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.03); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.5; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corSereia = "#22c55e"; let corConcha = "#064e3b"; let brilho = "#2dd4bf";

        n.fillStyle = corConcha; n.strokeStyle = "#022c22"; n.lineWidth = strokeW*2;
        n.beginPath();
        n.moveTo(0, raio*0.8); n.bezierCurveTo(raio*1.5, raio*0.8, raio*1.5, -raio*1.2, 0, -raio*1.2);
        n.bezierCurveTo(-raio*1.5, -raio*1.2, -raio*1.5, raio*0.8, 0, raio*0.8);
        n.fill(); n.stroke();

        for(let i=1; i<5; i++) {
           let ang = Math.PI - (i * Math.PI)/5;
           n.beginPath(); n.moveTo(0, raio*0.5); n.lineTo(Math.cos(ang)*raio*1.2, Math.sin(ang)*raio*1.2); n.stroke();
        }

        n.fillStyle = corSereia; n.strokeStyle = "#14532d";
        n.beginPath(); n.moveTo(raio*0.4, raio*0.6); n.quadraticCurveTo(-raio*0.8, raio*0.8, -raio*0.6, raio*0.2); n.quadraticCurveTo(0, raio*0.4, raio*0.4, raio*0.6); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.6, raio*0.2); n.lineTo(-raio*1.0, 0); n.lineTo(-raio*0.8, raio*0.4); n.lineTo(-raio*1.1, raio*0.5); n.lineTo(-raio*0.6, raio*0.2); n.fill(); n.stroke();

        n.beginPath(); n.moveTo(-raio*0.2, raio*0.4); n.lineTo(raio*0.2, raio*0.4); n.lineTo(raio*0.1, -raio*0.2); n.lineTo(-raio*0.1, -raio*0.2); n.closePath(); n.fill(); n.stroke();

        n.fillStyle = "#16a34a";
        n.beginPath(); n.moveTo(0, -raio*0.8); n.quadraticCurveTo(raio*0.6, -raio*0.5, raio*0.4, raio*0.2); n.lineTo(0, -raio*0.4); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(0, -raio*0.8); n.quadraticCurveTo(-raio*0.6, -raio*0.5, -raio*0.4, raio*0.2); n.lineTo(0, -raio*0.4); n.fill(); n.stroke();

        n.fillStyle = corSereia;
        n.beginPath(); n.ellipse(0, -raio*0.4, raio*0.25, raio*0.3, 0, 0, Math.PI*2); n.fill(); n.stroke();

        if(!isFainted) {
           n.fillStyle = brilho; n.shadowColor = brilho; n.shadowBlur = 15;
           n.beginPath(); n.arc(0, raio*0.1, raio*0.15 + Math.sin(tempo*3)*raio*0.02, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }

        n.strokeStyle = "#000"; n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(-raio*0.15, -raio*0.4); n.quadraticCurveTo(-raio*0.1, -raio*0.35, -raio*0.05, -raio*0.4); n.stroke();
        n.beginPath(); n.moveTo(raio*0.15, -raio*0.4); n.quadraticCurveTo(raio*0.1, -raio*0.35, raio*0.05, -raio*0.4); n.stroke();
        n.restore();
      }

      function desenharSereflor20(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 5) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corSereia = "#4ade80"; let corArmadura = "#0284c7"; let corArma = "#e11d48";

        n.fillStyle = corSereia; n.strokeStyle = "#14532d"; n.lineWidth = strokeW*1.5;
        n.beginPath(); n.moveTo(0, raio*0.2); n.quadraticCurveTo(-raio*1.0, raio*0.5, -raio*0.8, raio*1.2); n.lineTo(-raio*0.4, raio*0.8); n.lineTo(0, raio*0.2); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.8, raio*1.2); n.lineTo(-raio*1.2, raio*1.4); n.lineTo(-raio*0.6, raio*1.3); n.fill(); n.stroke();

        n.beginPath(); n.moveTo(-raio*0.2, raio*0.3); n.lineTo(raio*0.2, raio*0.3); n.lineTo(raio*0.4, -raio*0.3); n.lineTo(-raio*0.1, -raio*0.3); n.closePath(); n.fill(); n.stroke();

        n.fillStyle = corArma; n.strokeStyle = "#881337";
        n.beginPath(); n.moveTo(raio*0.2, raio*0.6); n.lineTo(raio*1.4, -raio*0.8); n.lineTo(raio*1.2, -raio*0.8); n.lineTo(0, raio*0.6); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*1.4, -raio*0.8); n.lineTo(raio*1.6, -raio*1.2); n.lineTo(raio*1.3, -raio*0.9); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*1.2, -raio*0.8); n.lineTo(raio*1.2, -raio*1.3); n.lineTo(raio*1.1, -raio*0.9); n.fill(); n.stroke();

        n.fillStyle = corArmadura; n.strokeStyle = "#0369a1";
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.3); n.lineTo(raio*0.4, -raio*0.3); n.lineTo(raio*0.8, -raio*0.8); n.lineTo(-raio*0.4, -raio*0.6); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.6); n.lineTo(raio*0.2, -raio*0.6); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.8); n.lineTo(raio*0.1, -raio*0.8); n.stroke();

        n.fillStyle = corSereia; n.strokeStyle = "#14532d";
        n.beginPath(); n.ellipse(raio*0.15, -raio*0.1, raio*0.2, raio*0.25, Math.PI/6, 0, Math.PI*2); n.fill(); n.stroke();

        if(isFainted) {
           n.strokeStyle = "#000"; n.beginPath(); n.moveTo(raio*0.1, -raio*0.1); n.lineTo(raio*0.3, 0); n.stroke();
        } else {
           n.fillStyle = "#fff"; n.beginPath(); n.arc(raio*0.2, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill(); n.stroke();
           n.fillStyle = "#000"; n.beginPath(); n.arc(raio*0.22, -raio*0.1, raio*0.03, 0, Math.PI*2); n.fill();
           n.strokeStyle = corArma; n.beginPath(); n.moveTo(raio*0.2, 0); n.lineTo(raio*0.1, raio*0.1); n.stroke();
        }
        n.restore();
      }

      function desenharTataAlfa(n, u, r, l, o, f) {
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.04); n.scale(f.flip?-1:1, 1);
        let esc = 1 + Math.sin(tempo * 4) * 0.02; n.scale(esc, esc);
        let raio = o * 0.5; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#f97316"; let corJuba = "#ef4444"; let corCoroa = "#fbbf24";

        if(!isFainted) {
           n.fillStyle = "rgba(239, 68, 68, 0.3)"; n.beginPath(); n.arc(0, 0, raio*1.3 + Math.sin(tempo*10)*raio*0.05, 0, Math.PI*2); n.fill();
        }

        n.fillStyle = corJuba; n.strokeStyle = "#b91c1c"; n.lineWidth = strokeW*2;
        let numChamas = 12;
        for(let i=0; i<numChamas; i++) {
           let ang = (i * Math.PI*2)/numChamas + (isFainted ? 0 : tempo);
           let dist = raio*1.4 + Math.sin(tempo*8 + i)*raio*0.2;
           n.beginPath();
           n.moveTo(Math.cos(ang-0.2)*raio*0.5, Math.sin(ang-0.2)*raio*0.5);
           n.quadraticCurveTo(Math.cos(ang)*dist, Math.sin(ang)*dist, Math.cos(ang+0.2)*raio*0.5, Math.sin(ang+0.2)*raio*0.5);
           n.fill(); n.stroke();
        }

        let grad = n.createRadialGradient(0, -raio*0.2, raio*0.2, 0, 0, raio);
        grad.addColorStop(0, "#fde047"); grad.addColorStop(1, corCorpo);
        n.fillStyle = grad; n.strokeStyle = "#c2410c";
        n.beginPath(); n.moveTo(0, raio*0.8); n.bezierCurveTo(raio*1.2, raio*0.8, raio*0.8, -raio*0.8, 0, -raio*0.8); n.bezierCurveTo(-raio*0.8, -raio*0.8, -raio*1.2, raio*0.8, 0, raio*0.8); n.fill(); n.stroke();

        n.translate(0, Math.sin(tempo*5)*raio*0.1);
        n.fillStyle = corCoroa; n.strokeStyle = "#b45309"; n.lineWidth = strokeW*1.5;
        n.beginPath(); n.moveTo(-raio*0.6, -raio*0.9); n.lineTo(-raio*0.8, -raio*1.4); n.lineTo(-raio*0.3, -raio*1.1); n.lineTo(0, -raio*1.6); n.lineTo(raio*0.3, -raio*1.1); n.lineTo(raio*0.8, -raio*1.4); n.lineTo(raio*0.6, -raio*0.9); n.closePath(); n.fill(); n.stroke();

        if(!isFainted) {
           n.fillStyle = "#fff"; n.shadowColor = "#ef4444"; n.shadowBlur = 15;
           n.beginPath(); n.arc(0, -raio*1.2, raio*0.15, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }

        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.2); n.lineTo(-raio*0.4, -raio*0.3); n.lineTo(-raio*0.2, -raio*0.1); n.fill();
        n.beginPath(); n.moveTo(raio*0.1, -raio*0.2); n.lineTo(raio*0.4, -raio*0.3); n.lineTo(raio*0.2, -raio*0.1); n.fill();

        n.fillStyle = "#7c2d12"; n.beginPath(); n.moveTo(-raio*0.15, raio*0.1); n.lineTo(raio*0.15, raio*0.1); n.lineTo(0, raio*0.3); n.closePath(); n.fill();
        n.restore();
      }

      function desenharTerrivolt20(n, u, r, l, o, f) {
        // Terrivolt 20 - Escaravelho-Golias do Trovão (Velocidade)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 4) * o * 0.04); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#b45309"; let corFaisca = "#facc15"; let luzFaisca = "#fef08a";

        // Asas de energia (abertas)
        if(!isFainted) {
           let bater = Math.sin(tempo*20)*0.3 + 0.7;
           n.fillStyle = "rgba(250, 204, 21, 0.6)"; n.strokeStyle = luzFaisca; n.lineWidth = strokeW;
           [-1, 1].forEach(lado => {
              n.save(); n.scale(lado * bater, 1);
              n.beginPath(); n.moveTo(0, -raio*0.2); n.lineTo(raio*1.2, -raio*0.8); n.lineTo(raio*0.8, raio*0.6); n.closePath(); n.fill(); n.stroke();
              n.restore();
           });
        }

        // Pernas de inseto encouraçadas
        n.strokeStyle = "#78350f"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.2, 0); n.lineTo(lado*raio*0.6, -raio*0.4); n.lineTo(lado*raio*0.8, -raio*0.1); n.stroke();
           n.beginPath(); n.moveTo(lado*raio*0.3, raio*0.2); n.lineTo(lado*raio*0.7, raio*0.4); n.lineTo(lado*raio*0.8, raio*0.8); n.stroke();
        });

        // Carapaça Principal (Pedra)
        n.fillStyle = corPedra; n.strokeStyle = "#451a03"; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(0, raio*0.3, raio*0.6, raio*0.7, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Linha divisória das asas
        n.beginPath(); n.moveTo(0, -raio*0.4); n.lineTo(0, raio*1.0); n.stroke();

        // Cabeça/Chifre de Quartzo
        n.fillStyle = corFaisca;
        n.beginPath(); n.moveTo(-raio*0.3, -raio*0.2); n.lineTo(raio*0.3, -raio*0.2); n.lineTo(0, -raio*0.8); n.closePath(); n.fill(); n.stroke();

        // Olhos
        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.arc(-raio*0.15, -raio*0.3, raio*0.06, 0, Math.PI*2); n.arc(raio*0.15, -raio*0.3, raio*0.06, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharTerrivolt21(n, u, r, l, o, f) {
        // Terrivolt 21 - Rinoceronte/Triceratops de Quartzo (ATK)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.02); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#78350f"; let corFaisca = "#eab308";

        // Pernas Pesadas
        n.fillStyle = corPedra; n.strokeStyle = "#451a03"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.rect(lado*raio*0.4 - raio*0.2, raio*0.4, raio*0.4, raio*0.6); n.fill(); n.stroke();
        });

        // Corpo Maciço
        n.beginPath(); n.ellipse(0, 0, raio*0.8, raio*0.6, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Coroa de Chifres (Triceratops)
        n.fillStyle = corFaisca; n.strokeStyle = "#a16207";
        n.beginPath(); n.moveTo(-raio*0.6, -raio*0.2); n.lineTo(-raio*0.8, -raio*0.8); n.lineTo(-raio*0.2, -raio*0.5); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.2); n.lineTo(raio*0.8, -raio*0.8); n.lineTo(raio*0.2, -raio*0.5); n.fill(); n.stroke();

        // Chifre Nasal Gigante
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.1); n.lineTo(0, -raio*0.6); n.lineTo(raio*0.2, raio*0.1); n.closePath(); n.fill(); n.stroke();

        // Rosto
        n.fillStyle = "#57534e";
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.1); n.lineTo(raio*0.4, -raio*0.1); n.lineTo(0, raio*0.4); n.closePath(); n.fill(); n.stroke();

        // Olhos Furiosos
        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.moveTo(-raio*0.25, -raio*0.05); n.lineTo(-raio*0.1, 0.05*raio); n.lineTo(-raio*0.25, 0.1*raio); n.fill();
        n.beginPath(); n.moveTo(raio*0.25, -raio*0.05); n.lineTo(raio*0.1, 0.05*raio); n.lineTo(raio*0.25, 0.1*raio); n.fill();
        n.restore();
      }

      function desenharTidalfin20(n, u, r, l, o, f) {
        // Tidalfin 20 - Dunkleosteus Abissal (DEF)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.03); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corMare = "#0369a1"; let armadura = "#0c4a6e"; let luz = "#38bdf8";

        // Cauda e Barbatanas traseiras
        n.fillStyle = corMare; n.strokeStyle = "#082f49"; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(-raio*0.5, 0); n.lineTo(-raio*1.4, -raio*0.4); n.lineTo(-raio*1.2, 0); n.lineTo(-raio*1.5, raio*0.5); n.lineTo(-raio*0.5, 0); n.fill(); n.stroke();

        // Corpo Robusto
        n.beginPath(); n.ellipse(0, 0, raio*0.9, raio*0.6, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Placas de Armadura da Cabeça (Dunkleosteus)
        n.fillStyle = armadura;
        n.beginPath(); n.moveTo(0, -raio*0.6); n.lineTo(raio*0.8, -raio*0.4); n.lineTo(raio*1.0, 0); n.lineTo(raio*0.5, raio*0.2); n.lineTo(0, raio*0.1); n.closePath(); n.fill(); n.stroke();

        // Placa da Mandíbula Pesada
        let abreBoca = isFainted ? 0 : Math.sin(tempo*4)*raio*0.05;
        n.beginPath(); n.moveTo(0, raio*0.1 + abreBoca); n.lineTo(raio*0.6, raio*0.3 + abreBoca); n.lineTo(raio*0.9, raio*0.1 + abreBoca); n.lineTo(raio*0.4, raio*0.6 + abreBoca); n.closePath(); n.fill(); n.stroke();

        // Linhas da Armadura
        n.strokeStyle = luz; n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(raio*0.4, -raio*0.5); n.lineTo(raio*0.6, -raio*0.2); n.stroke();
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.2); n.lineTo(raio*0.9, -raio*0.1); n.stroke();

        // Olho
        n.fillStyle = isFainted ? "#000" : luz;
        n.beginPath(); n.arc(raio*0.6, -raio*0.2, raio*0.08, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharTidalfin21(n, u, r, l, o, f) {
        // Tidalfin 21 - Mosasauro (ATK)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 5) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corMare = "#0284c7"; let barriga = "#7dd3fc";

        // Corpo longo e sinuoso
        n.fillStyle = corMare; n.strokeStyle = "#0c4a6e"; n.lineWidth = strokeW*2;
        n.beginPath();
        n.moveTo(raio*0.6, -raio*0.2); // Focinho
        n.quadraticCurveTo(0, -raio*0.6, -raio*0.8, -raio*0.2); // Costas
        n.quadraticCurveTo(-raio*1.6, raio*0.2, -raio*1.4, -raio*0.6); // Cauda
        n.quadraticCurveTo(-raio*1.2, 0, -raio*0.6, raio*0.4); // Ventre traseiro
        n.quadraticCurveTo(0, raio*0.5, raio*0.5, raio*0.2); // Ventre frontal
        n.closePath(); n.fill(); n.stroke();

        // Ventre Claro
        n.fillStyle = barriga;
        n.beginPath(); n.moveTo(raio*0.5, raio*0.2); n.quadraticCurveTo(0, raio*0.4, -raio*0.6, raio*0.3); n.lineTo(-raio*0.6, raio*0.4); n.quadraticCurveTo(0, raio*0.5, raio*0.5, raio*0.2); n.fill();

        // Barbatanas Ágeis
        n.fillStyle = corMare;
        n.beginPath(); n.moveTo(0, raio*0.4); n.lineTo(-raio*0.2, raio*0.8); n.lineTo(raio*0.2, raio*0.7); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.5, raio*0.3); n.lineTo(-raio*0.7, raio*0.6); n.lineTo(-raio*0.4, raio*0.5); n.closePath(); n.fill(); n.stroke();

        // Mandíbula Predatória
        let abre = isFainted ? 0 : Math.sin(tempo*8)*0.1;
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.2); n.lineTo(raio*1.2, 0); n.lineTo(raio*0.5, raio*0.2); n.fill(); n.stroke(); // Focinho sup
        n.beginPath(); n.moveTo(raio*0.5, raio*0.2); n.lineTo(raio*1.1, raio*0.2 + abre*raio); n.lineTo(raio*0.4, raio*0.4); n.fill(); n.stroke(); // Focinho inf

        // Olho
        n.fillStyle = isFainted ? "#000" : "#fff"; n.beginPath(); n.arc(raio*0.5, -raio*0.05, raio*0.05, 0, Math.PI*2); n.fill();
        if(!isFainted) { n.fillStyle="#000"; n.beginPath(); n.arc(raio*0.52, -raio*0.05, raio*0.02, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharTidalvolt20(n, u, r, l, o, f) {
        // Tidalvolt 20 - Arraia Manta da Tempestade (VEL Extrema)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 4) * o * 0.08); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corMare = "#0ea5e9"; let corFaisca = "#fef08a";

        // Cauda chicote com eletricidade
        n.strokeStyle = "#0284c7"; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(0, raio*0.4); n.quadraticCurveTo(-raio*0.5, raio*1.5, Math.sin(tempo*10)*raio*0.5, raio*1.8); n.stroke();
        if(!isFainted) {
           n.fillStyle = corFaisca; n.beginPath(); n.arc(Math.sin(tempo*10)*raio*0.5, raio*1.8, raio*0.08, 0, Math.PI*2); n.fill();
        }

        // Asas Losangulares Gigantes (Arraia Manta)
        let bater = Math.sin(tempo*8) * 0.3 + 0.7;
        n.fillStyle = corMare; n.strokeStyle = "#0369a1"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.save(); n.scale(lado * bater, 1);
           n.beginPath(); n.moveTo(0, -raio*0.6); n.lineTo(raio*1.6, 0); n.lineTo(0, raio*0.8); n.closePath(); n.fill(); n.stroke();
           // Veios elétricos nas asas
           if(!isFainted) {
              n.strokeStyle = corFaisca; n.lineWidth = strokeW;
              n.beginPath(); n.moveTo(0,0); n.lineTo(raio*1.2, 0); n.stroke();
              n.beginPath(); n.moveTo(0,0); n.lineTo(raio*0.8, -raio*0.3); n.stroke();
           }
           n.restore();
        });

        // Chifres Cefálicos (Barbatanas frontais)
        n.fillStyle = corMare; n.strokeStyle = "#0369a1";
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.5); n.lineTo(-raio*0.4, -raio*0.9); n.lineTo(0, -raio*0.6); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.5); n.lineTo(raio*0.4, -raio*0.9); n.lineTo(0, -raio*0.6); n.fill(); n.stroke();

        // Olhos e Marcas
        n.fillStyle = isFainted ? "#000" : "#fff";
        n.beginPath(); n.arc(-raio*0.3, -raio*0.2, raio*0.06, 0, Math.PI*2); n.arc(raio*0.3, -raio*0.2, raio*0.06, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharTidalvolt21(n, u, r, l, o, f) {
        // Tidalvolt 21 - Leviathan/Enguia Elétrica (ATK/VEL)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 6) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corMare = "#0284c7"; let corFaisca = "#eab308";

        // Corpo Serpentino "S" (Enguia)
        n.fillStyle = corMare; n.strokeStyle = "#0c4a6e"; n.lineWidth = strokeW*2;
        n.beginPath();
        n.moveTo(raio*0.4, -raio*0.3); // Nuca
        n.bezierCurveTo(raio*1.2, 0, raio*1.2, raio*0.8, 0, raio*0.8);
        n.bezierCurveTo(-raio*1.2, raio*0.8, -raio*1.2, raio*1.5, -raio*0.2, raio*1.5); // Cauda
        n.bezierCurveTo(-raio*0.6, raio*1.2, -raio*0.6, raio*0.4, 0, raio*0.4);
        n.bezierCurveTo(raio*0.6, raio*0.4, raio*0.6, 0, 0, -raio*0.2); // Pescoço interno
        n.fill(); n.stroke();

        // Barbatanas Dorsais Faiscantes
        n.fillStyle = corFaisca; n.strokeStyle = "#ca8a04";
        n.beginPath(); n.moveTo(raio*0.8, raio*0.2); n.lineTo(raio*1.2, raio*0.3); n.lineTo(raio*0.8, raio*0.5); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.8, raio*1.0); n.lineTo(-raio*1.2, raio*1.1); n.lineTo(-raio*0.6, raio*1.3); n.fill(); n.stroke();

        // Cabeça de Dragão Marinho
        n.fillStyle = corMare; n.strokeStyle = "#0c4a6e";
        n.beginPath(); n.moveTo(0, -raio*0.2); n.lineTo(raio*0.6, -raio*0.6); n.lineTo(0, -raio*0.8); n.lineTo(-raio*0.4, -raio*0.5); n.closePath(); n.fill(); n.stroke();

        // Fauces abertas
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.6); n.lineTo(raio*1.0, -raio*0.4); n.lineTo(raio*0.4, -raio*0.2); n.fill(); n.stroke();

        // Orbe de Plasma na boca
        if(!isFainted) {
           n.fillStyle = "#fff"; n.shadowColor = corFaisca; n.shadowBlur = 10;
           n.beginPath(); n.arc(raio*0.8, -raio*0.45, raio*0.1 + Math.sin(tempo*15)*raio*0.02, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }

        // Olho Predador
        n.fillStyle = isFainted ? "#000" : corFaisca;
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.5); n.lineTo(raio*0.4, -raio*0.6); n.lineTo(raio*0.3, -raio*0.4); n.fill();
        n.restore();
      }

      function desenharTidolith21(n, u, r, l, o, f) {
        // Tidolith 21 - Caranguejo-Eremita Abissal (DEF/Maré)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 2) * o * 0.02); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#78350f"; let corAgua = "#38bdf8"; let corCaranguejo = "#0c4a6e";

        // Concha/Monólito de Pedra nas costas
        n.fillStyle = corPedra; n.strokeStyle = "#451a03"; n.lineWidth = strokeW*2;
        n.beginPath();
        n.moveTo(-raio*0.6, raio*0.4); n.lineTo(-raio*0.8, -raio*0.8); n.lineTo(0, -raio*1.2); n.lineTo(raio*0.8, -raio*0.8); n.lineTo(raio*0.6, raio*0.4); n.closePath(); n.fill(); n.stroke();
        // Detalhe de espiral na pedra
        n.beginPath(); n.moveTo(0, -raio*0.2); n.quadraticCurveTo(-raio*0.5, -raio*0.5, 0, -raio*0.8); n.stroke();

        // Pernas de Caranguejo
        n.strokeStyle = corCaranguejo; n.lineWidth = strokeW*3;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.4, raio*0.2); n.lineTo(lado*raio*0.8, raio*0.6); n.lineTo(lado*raio*0.6, raio*1.0); n.stroke();
           n.beginPath(); n.moveTo(lado*raio*0.2, raio*0.3); n.lineTo(lado*raio*0.5, raio*0.8); n.lineTo(lado*raio*0.3, raio*1.1); n.stroke();
        });

        // Garras frontais gigantes
        n.fillStyle = corCaranguejo; n.strokeStyle = "#082f49"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.3, 0); n.lineTo(lado*raio*0.8, raio*0.2); n.lineTo(lado*raio*0.9, -raio*0.2); n.lineTo(lado*raio*0.5, -raio*0.4); n.closePath(); n.fill(); n.stroke();
           // Dente da pinça
           n.beginPath(); n.moveTo(lado*raio*0.9, -raio*0.2); n.lineTo(lado*raio*0.7, -raio*0.1); n.stroke();
        });

        // Corpo Frontal e Olhos em Hastes
        n.fillStyle = corCaranguejo;
        n.beginPath(); n.ellipse(0, 0, raio*0.4, raio*0.3, 0, 0, Math.PI*2); n.fill(); n.stroke();

        n.strokeStyle = corCaranguejo; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.2); n.lineTo(-raio*0.3, -raio*0.5); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.2); n.lineTo(raio*0.3, -raio*0.5); n.stroke();

        n.fillStyle = isFainted ? "#000" : corAgua;
        n.beginPath(); n.arc(-raio*0.3, -raio*0.5, raio*0.08, 0, Math.PI*2); n.fill();
        n.beginPath(); n.arc(raio*0.3, -raio*0.5, raio*0.08, 0, Math.PI*2); n.fill();

        n.restore();
      }

      function desenharTidolith20(n, u, r, l, o, f) {
        // Tidolith 20 - Tartaruga/Anquilossauro Fluvial (DEF Extrema 196)
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + o*0.1); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#57534e"; let musgo = "#15803d"; let corCorpo = "#78350f";

        // Pernas Grossas (Inamovíveis)
        n.fillStyle = corCorpo; n.strokeStyle = "#451a03"; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.rect(lado*raio*0.4 - raio*0.2, raio*0.2, raio*0.4, raio*0.4); n.fill(); n.stroke();
        });

        // Cauda com Clava de Pedra
        let balanco = isFainted ? 0 : Math.sin(tempo*3)*raio*0.2;
        n.beginPath(); n.moveTo(-raio*0.8, raio*0.2); n.lineTo(-raio*1.2, raio*0.4 + balanco); n.lineTo(-raio*0.8, raio*0.5); n.fill(); n.stroke();
        n.fillStyle = corPedra; n.beginPath(); n.arc(-raio*1.2, raio*0.4 + balanco, raio*0.2, 0, Math.PI*2); n.fill(); n.stroke();

        // Domo Absoluto (Carapaça Metade de um Círculo)
        let grad = n.createRadialGradient(0, raio*0.4, raio*0.2, 0, 0, raio*1.2);
        grad.addColorStop(0, corPedra); grad.addColorStop(1, "#292524");
        n.fillStyle = grad; n.strokeStyle = "#1c1917";
        n.beginPath(); n.arc(0, raio*0.4, raio*1.0, Math.PI, 0); n.closePath(); n.fill(); n.stroke();

        // Placas Hexagonais no Domo
        n.strokeStyle = "#44403c"; n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.2); n.lineTo(raio*0.4, -raio*0.2); n.lineTo(0, -raio*0.6); n.closePath(); n.stroke();

        // Musgo Acumulado
        n.fillStyle = musgo; n.beginPath(); n.arc(0, -raio*0.6, raio*0.4, 0, Math.PI*2); n.fill();

        // Cabeça Embutida
        n.fillStyle = corCorpo; n.strokeStyle = "#451a03"; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(raio*0.9, raio*0.3, raio*0.3, raio*0.2, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Olho Estóico
        n.fillStyle = isFainted ? "#000" : "#38bdf8";
        n.beginPath(); n.arc(raio*1.0, raio*0.25, raio*0.05, 0, Math.PI*2); n.fill();
        n.restore();
      }

      function desenharUmbravolt20(n, u, r, l, o, f) {
        // Umbravolt Umbral (ATK 184) - Kirin das Sombras
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 4) * o * 0.04); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#4c1d95"; let corSombra = "#2e1065"; let corFaisca = "#facc15";

        // Pernas elegantes e ágeis
        n.strokeStyle = corSombra; n.lineWidth = strokeW*2.5; n.lineCap = "round"; n.lineJoin = "round";
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.3, raio*0.4); n.lineTo(lado*raio*0.4, raio*0.8); n.lineTo(lado*raio*0.2, raio*1.1); n.stroke(); // Traseiras
           n.beginPath(); n.moveTo(lado*raio*0.2, raio*0.5); n.lineTo(lado*raio*0.1, raio*0.9); n.lineTo(lado*raio*0.3, raio*1.2); n.stroke(); // Dianteiras
        });

        // Crina de Faíscas
        n.fillStyle = corFaisca; n.strokeStyle = "#ca8a04"; n.lineWidth = strokeW;
        for(let i=0; i<4; i++) {
           n.beginPath(); n.moveTo(-raio*0.4 + i*raio*0.2, -raio*0.6);
           n.quadraticCurveTo(-raio*0.6 + i*raio*0.2, -raio*1.0, -raio*0.2 + i*raio*0.3, -raio*0.8); n.fill(); n.stroke();
        }

        // Corpo Equino (Kirin)
        n.fillStyle = corCorpo; n.strokeStyle = corSombra; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(0, raio*0.3, raio*0.6, raio*0.4, 0, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.4, raio*0.3); n.lineTo(raio*0.5, -raio*0.4); n.lineTo(0, -raio*0.2); n.fill();

        // Cabeça
        n.beginPath(); n.moveTo(raio*0.3, -raio*0.3); n.lineTo(raio*0.8, -raio*0.1); n.lineTo(raio*0.4, 0.1*raio); n.closePath(); n.fill(); n.stroke();

        // Chifre de Unicórnio/Kirin (O chifre do Nv12 elevado)
        n.fillStyle = corFaisca;
        n.beginPath(); n.moveTo(raio*0.5, -raio*0.2); n.lineTo(raio*1.2, -raio*0.8); n.lineTo(raio*0.7, -raio*0.1); n.closePath(); n.fill(); n.stroke();

        if(!isFainted) { n.fillStyle = "#fff"; n.beginPath(); n.arc(raio*0.55, -raio*0.1, raio*0.04, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharUmbravolt21(n, u, r, l, o, f) {
        // Umbravolt Volt (DEF/Equilíbrio) - Rinoceronte Sombrio
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + o*0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        let esc = 1 + Math.sin(tempo * 2) * 0.015; n.scale(esc, esc);
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#3b0764"; let corArmadura = "#1e1b4b"; let corFaisca = "#fef08a";

        // Patas pesadas
        n.fillStyle = corArmadura; n.strokeStyle = "#000"; n.lineWidth = strokeW*1.5;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.rect(lado*raio*0.3 - raio*0.2, raio*0.5, raio*0.3, raio*0.5); n.fill(); n.stroke();
        });

        // Corpo Oval Pesado (A evolução gorda do ovo)
        n.fillStyle = corCorpo; n.strokeStyle = corArmadura; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(0, 0, raio*0.8, raio*0.6, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Placas de Armadura
        n.fillStyle = corArmadura;
        n.beginPath(); n.moveTo(-raio*0.8, 0); n.lineTo(-raio*0.6, -raio*0.6); n.lineTo(raio*0.5, -raio*0.5); n.lineTo(raio*0.8, 0); n.lineTo(0, -raio*0.2); n.closePath(); n.fill(); n.stroke();

        // Cabeça abaixada (Investida)
        n.beginPath(); n.ellipse(raio*0.7, raio*0.2, raio*0.3, raio*0.25, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Chifre de Broca Elétrica
        n.fillStyle = corFaisca; n.strokeStyle = "#ca8a04";
        n.beginPath(); n.moveTo(raio*0.9, raio*0.1); n.lineTo(raio*1.6, raio*0.3); n.lineTo(raio*0.9, raio*0.4); n.closePath(); n.fill(); n.stroke();
        // Ranhuras da broca
        n.beginPath(); n.moveTo(raio*1.0, raio*0.15); n.lineTo(raio*1.1, raio*0.35); n.stroke();
        n.beginPath(); n.moveTo(raio*1.2, raio*0.2); n.lineTo(raio*1.3, raio*0.35); n.stroke();

        if(!isFainted) { n.fillStyle = corFaisca; n.beginPath(); n.arc(raio*0.75, raio*0.15, raio*0.04, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharVoltaquas21(n, u, r, l, o, f) {
        // Voltaquas Abissal (DEF) - Hipocampo Dourado
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 3) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corOuro = "#eab308"; let sombraOuro = "#a16207"; let corAgua = "rgba(56, 189, 248, 0.7)";

        // Cauda Enrolada
        n.strokeStyle = sombraOuro; n.lineWidth = strokeW*6;
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.5); n.quadraticCurveTo(-raio*1.2, raio*1.2, -raio*0.8, raio*0.2); n.quadraticCurveTo(-raio*0.4, -raio*0.4, 0, raio*0.2); n.stroke();
        n.strokeStyle = corOuro; n.lineWidth = strokeW*4; n.stroke(); // Preenchimento cauda

        // Crina/Asas de Água Fluidas
        n.fillStyle = corAgua; n.strokeStyle = "#0284c7"; n.lineWidth = strokeW;
        for(let i=0; i<3; i++) {
           n.beginPath(); n.moveTo(0, -raio*0.2 + i*raio*0.3); n.quadraticCurveTo(raio*1.0, -raio*0.5 + i*raio*0.3, raio*0.8, raio*0.5 + i*raio*0.3); n.quadraticCurveTo(raio*0.4, 0 + i*raio*0.3, 0, raio*0.2 + i*raio*0.3); n.fill(); n.stroke();
        }

        // Corpo e Peito Dourado
        n.fillStyle = corOuro; n.strokeStyle = sombraOuro; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(-raio*0.2, raio*0.2, raio*0.4, raio*0.5, 0.2, 0, Math.PI*2); n.fill(); n.stroke();

        // Cabeça de Cavalo-Marinho
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.3); n.lineTo(-raio*0.6, -raio*0.8); n.lineTo(-raio*0.8, -raio*0.6); n.lineTo(-raio*0.4, -raio*0.1); n.closePath(); n.fill(); n.stroke();
        // Focinho alongado
        n.beginPath(); n.moveTo(-raio*0.7, -raio*0.7); n.lineTo(-raio*1.2, -raio*0.5); n.lineTo(-raio*0.7, -raio*0.4); n.closePath(); n.fill(); n.stroke();

        if(!isFainted) { n.fillStyle = "#fff"; n.beginPath(); n.arc(-raio*0.7, -raio*0.55, raio*0.04, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharVoltaquas20(n, u, r, l, o, f) {
        // Voltaquas Volt (ATK 178) - Peixe-Leão Elétrico Predador
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 5) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corOuro = "#facc15"; let sombraOuro = "#b45309"; let corAgua = "rgba(14, 165, 233, 0.8)"; let lança = "#7dd3fc";

        // Corpo Hidrodinâmico (Torpede)
        n.fillStyle = corOuro; n.strokeStyle = sombraOuro; n.lineWidth = strokeW*2;
        n.beginPath(); n.ellipse(0, 0, raio*0.9, raio*0.4, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Lanças/Barbatanas de Plasma Aquático (Peixe-Leão)
        n.fillStyle = corAgua; n.strokeStyle = lança; n.lineWidth = strokeW*1.5;
        let numLancas = 5;
        for(let i=0; i<numLancas; i++) {
           let xPos = -raio*0.5 + i*raio*0.25;
           let golpear = isFainted ? 0 : Math.sin(tempo*10 + i)*raio*0.1;
           // Cima
           n.beginPath(); n.moveTo(xPos, -raio*0.3); n.lineTo(xPos - raio*0.3 + golpear, -raio*1.2); n.lineTo(xPos + raio*0.1, -raio*0.3); n.fill(); n.stroke();
           // Baixo
           n.beginPath(); n.moveTo(xPos, raio*0.3); n.lineTo(xPos - raio*0.3 + golpear, raio*1.2); n.lineTo(xPos + raio*0.1, raio*0.3); n.fill(); n.stroke();
        }

        // Cauda Espinhosa
        n.beginPath(); n.moveTo(-raio*0.8, 0); n.lineTo(-raio*1.5, -raio*0.5); n.lineTo(-raio*1.2, 0); n.lineTo(-raio*1.5, raio*0.5); n.closePath(); n.fill(); n.stroke();

        // Olhos de Caçador
        n.fillStyle = isFainted ? "#000" : "#0f172a";
        n.beginPath(); n.arc(raio*0.5, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill();
        if(!isFainted) { n.fillStyle = lança; n.beginPath(); n.arc(raio*0.52, -raio*0.1, raio*0.02, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharVolthund20(n, u, r, l, o, f) {
        // Volthund Volt (VEL 196) - Guepardo/Galgo Poligonal
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 8) * o * 0.04); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corRaio = "#fde047"; let sombraRaio = "#ca8a04"; let trilho = "rgba(254, 240, 138, 0.4)";

        // Trilho de velocidade
        if(!isFainted) {
           n.fillStyle = trilho;
           n.beginPath(); n.moveTo(-raio*0.5, 0); n.lineTo(-raio*2.0, raio*0.2); n.lineTo(-raio*0.5, raio*0.4); n.fill();
        }

        // Pernas finas e angulares (Polígonos afiados)
        n.fillStyle = corRaio; n.strokeStyle = sombraRaio; n.lineWidth = strokeW;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.3, raio*0.2); n.lineTo(lado*raio*0.5, raio*0.8); n.lineTo(lado*raio*0.4, raio*1.2); n.lineTo(lado*raio*0.2, raio*0.2); n.fill(); n.stroke(); // Traseiras/Dianteiras
        });

        // Corpo Aerodinâmico Poligonal
        n.beginPath();
        n.moveTo(-raio*0.8, raio*0.2); // Cauda base
        n.lineTo(0, -raio*0.3); // Dorso
        n.lineTo(raio*0.8, -raio*0.1); // Ombro
        n.lineTo(raio*0.4, raio*0.4); // Peito
        n.lineTo(-raio*0.4, raio*0.3); // Barriga
        n.closePath(); n.fill(); n.stroke();

        // Cabeça Poligonal (Evolução direta da base do Nv12)
        n.beginPath(); n.moveTo(raio*0.7, -raio*0.1); n.lineTo(raio*1.2, 0); n.lineTo(raio*0.8, raio*0.3); n.closePath(); n.fill(); n.stroke();
        // Orelhas pontiagudas
        n.beginPath(); n.moveTo(raio*0.7, -raio*0.1); n.lineTo(raio*0.5, -raio*0.6); n.lineTo(raio*0.9, -raio*0.1); n.fill(); n.stroke();

        if(!isFainted) { n.fillStyle = "#000"; n.beginPath(); n.arc(raio*0.9, 0.05*raio, raio*0.03, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharVolthund21(n, u, r, l, o, f) {
        // Volthund Volt (ATK 136) - Lobo Fenrir de Eletricidade
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pounce = isFainted ? 0 : Math.sin(tempo*4)*o*0.03;
        n.save(); n.translate(r, l + o*0.05 + pounce); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corRaio = "#eab308"; let sombraRaio = "#854d0e"; let crina = "#fef08a";

        // Pernas Grossas Poligonais
        n.fillStyle = corRaio; n.strokeStyle = sombraRaio; n.lineWidth = strokeW*1.5;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.2, raio*0.4); n.lineTo(lado*raio*0.6, raio*0.8); n.lineTo(lado*raio*0.4, raio*1.1); n.lineTo(lado*raio*0.1, raio*0.5); n.fill(); n.stroke();
        });

        // Corpo Robusto em pose de ataque
        n.beginPath(); n.moveTo(-raio*0.6, raio*0.3); n.lineTo(0, -raio*0.2); n.lineTo(raio*0.6, 0); n.lineTo(raio*0.3, raio*0.6); n.lineTo(-raio*0.3, raio*0.5); n.closePath(); n.fill(); n.stroke();

        // Crina/Juba Poligonal Feroz (Vidro estilhaçado)
        n.fillStyle = crina; n.strokeStyle = sombraRaio;
        let espinhos = [[0, -raio*0.2, -raio*0.4, -raio*0.8], [raio*0.2, -raio*0.1, raio*0.4, -raio*0.7], [raio*0.5, 0, raio*0.9, -raio*0.4]];
        espinhos.forEach(p => {
           n.beginPath(); n.moveTo(p[0], p[1]); n.lineTo(p[2], p[3]); n.lineTo(p[0]+raio*0.2, p[1]); n.fill(); n.stroke();
        });

        // Cabeça de Lobo Poligonal
        n.fillStyle = corRaio;
        n.beginPath(); n.moveTo(raio*0.4, 0); n.lineTo(raio*1.0, 0.2*raio); n.lineTo(raio*0.8, 0.5*raio); n.lineTo(raio*0.3, 0.4*raio); n.closePath(); n.fill(); n.stroke();
        // Presas
        n.fillStyle = "#fff"; n.beginPath(); n.moveTo(raio*0.9, 0.3*raio); n.lineTo(raio*0.9, 0.5*raio); n.lineTo(raio*0.7, 0.4*raio); n.fill();

        // Olhos Ferozes
        if(!isFainted) { n.fillStyle = "#ef4444"; n.beginPath(); n.moveTo(raio*0.5, 0.1*raio); n.lineTo(raio*0.7, 0.15*raio); n.lineTo(raio*0.6, 0.2*raio); n.fill(); }
        n.restore();
      }

      function desenharVoltsombra21(n, u, r, l, o, f) {
        // Voltsombra Umbral (ATK 156) - Falcão/Manta Sombrio
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 4) * o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corSombra = "#3b0764"; let pena = "#1e1b4b"; let corLosango = "#facc15";

        // Asas Sombrias Geométricas (Múltiplos losangos escuros sobrepostos)
        let bater = Math.sin(tempo*12) * 0.3 + 0.7;
        n.fillStyle = pena; n.strokeStyle = corSombra; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.save(); n.scale(lado * bater, 1);
           n.beginPath(); n.moveTo(0, 0); n.lineTo(raio*1.5, -raio*0.6); n.lineTo(raio*1.8, 0); n.lineTo(raio*0.8, raio*0.4); n.closePath(); n.fill(); n.stroke();
           n.beginPath(); n.moveTo(0, raio*0.2); n.lineTo(raio*1.2, 0); n.lineTo(raio*1.4, raio*0.4); n.lineTo(raio*0.5, raio*0.6); n.closePath(); n.fill(); n.stroke();
           n.restore();
        });

        // O Losango Base (Agora o peito/coração incandescente)
        n.fillStyle = corLosango; n.strokeStyle = "#a16207"; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(0, -raio*0.6); n.lineTo(raio*0.4, 0); n.lineTo(0, raio*0.8); n.lineTo(-raio*0.4, 0); n.closePath(); n.fill(); n.stroke();

        // Cabeça e Bico de Ave de Rapina Geométrica
        n.fillStyle = corSombra;
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.4); n.lineTo(raio*0.6, -raio*0.4); n.lineTo(raio*0.8, -raio*0.1); n.lineTo(raio*0.2, 0); n.closePath(); n.fill(); n.stroke();

        // Olho Caçador
        if(!isFainted) { n.fillStyle = corLosango; n.beginPath(); n.arc(raio*0.3, -raio*0.2, raio*0.04, 0, Math.PI*2); n.fill(); }
        n.restore();
      }

      function desenharVoltsombra20(n, u, r, l, o, f) {
        // Voltsombra Volt (VEL 201) - Serafim de Plasma
        let isFainted = f.fainted; let tempo = f.t || 0;
        n.save(); n.translate(r, l + Math.sin(tempo * 10) * o * 0.03); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(1.8, o*0.018);
        if(isFainted) n.globalAlpha = 0.55;

        let corPlasma = "#fef08a"; let corLuz = "#ffffff"; let corBase = "#eab308";

        // Asas de Luz (Serafim - 6 asas)
        n.fillStyle = "rgba(254, 240, 138, 0.6)"; n.strokeStyle = corLuz; n.lineWidth = strokeW;
        if(!isFainted) {
           let bater = Math.sin(tempo*20) * 0.4 + 0.6; // Bater de asas incrivelmente rápido
           [-1, 1].forEach(lado => {
              n.save(); n.scale(lado * bater, 1);
              // Asas Superiores
              n.beginPath(); n.moveTo(0,0); n.lineTo(raio*1.2, -raio*1.0); n.lineTo(raio*1.4, -raio*0.6); n.closePath(); n.fill(); n.stroke();
              // Asas Médias
              n.beginPath(); n.moveTo(0,0); n.lineTo(raio*1.5, -raio*0.2); n.lineTo(raio*1.6, raio*0.2); n.closePath(); n.fill(); n.stroke();
              // Asas Inferiores
              n.beginPath(); n.moveTo(0,0); n.lineTo(raio*1.0, raio*0.8); n.lineTo(raio*0.8, raio*1.2); n.closePath(); n.fill(); n.stroke();
              n.restore();
           });

           // Anéis de energia gravitacional
           n.strokeStyle = "rgba(255, 255, 255, 0.5)";
           n.beginPath(); n.ellipse(0, 0, raio*1.5, raio*0.4, tempo*5, 0, Math.PI*2); n.stroke();
        }

        // O Losango Base (Puro Plasma Flutuante)
        n.fillStyle = corBase; n.strokeStyle = corLuz; n.lineWidth = strokeW*2; n.shadowColor = corPlasma; n.shadowBlur = isFainted ? 0 : 25;
        n.beginPath(); n.moveTo(0, -raio*0.8); n.lineTo(raio*0.5, 0); n.lineTo(0, raio*0.8); n.lineTo(-raio*0.5, 0); n.closePath(); n.fill(); n.stroke();
        n.shadowBlur = 0;

        // Fendas Sombrias / Olhos Divinos (A tipagem Sombra presente no centro)
        n.fillStyle = isFainted ? "#000" : "#3b0764";
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.2); n.lineTo(0, -raio*0.1); n.lineTo(-raio*0.1, 0); n.fill();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.2); n.lineTo(0, -raio*0.1); n.lineTo(raio*0.1, 0); n.fill();
        n.restore();
      }

      function desenharCurupira(n, u, r, l, o, f) {
        // Virapé (curupira) - O Protetor da Mata (Mico Folha / Curupira)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pular = isFainted ? 0 : Math.sin(tempo * 5) * o * 0.04;
        n.save(); n.translate(r, l - pular + o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.38; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#4ade80"; let bordaCorpo = "#14532d";
        let corBarriga = "#86efac";

        // Cauda de Folha (Curvada para cima)
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio*0.3, raio*0.1);
        n.quadraticCurveTo(-raio*0.8, -raio*0.2, -raio*0.9, raio*0.3);
        n.quadraticCurveTo(-raio*0.5, raio*0.4, -raio*0.3, raio*0.2);
        n.fill(); n.stroke();

        // Pés de Macaquinho Virados para TRÁS (Apontam para a esquerda)
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo;
        // Pé de trás
        n.beginPath(); n.moveTo(raio*0.1, raio*0.3); n.lineTo(-raio*0.15, raio*0.45); n.lineTo(raio*0.2, raio*0.48); n.closePath(); n.fill(); n.stroke();
        // Pé da frente
        n.beginPath(); n.moveTo(-raio*0.1, raio*0.3); n.lineTo(-raio*0.35, raio*0.45); n.lineTo(-raio*0.0, raio*0.48); n.closePath(); n.fill(); n.stroke();

        // Corpo Gordinho (Mico / Sprite da Floresta)
        n.beginPath(); n.ellipse(0, 0, raio*0.45, raio*0.4, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Barriguinha Clara
        n.fillStyle = corBarriga;
        n.beginPath(); n.ellipse(raio*0.1, raio*0.1, raio*0.3, raio*0.25, -0.2, 0, Math.PI*2); n.fill();

        // Braços encolhidos (Patinhas)
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo;
        n.beginPath(); n.ellipse(-raio*0.1, raio*0.15, raio*0.08, raio*0.12, -Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.ellipse(raio*0.25, raio*0.15, raio*0.08, raio*0.12, Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();

        // Folhinha no topo da cabeça
        n.beginPath();
        n.moveTo(-raio*0.05, -raio*0.4);
        n.quadraticCurveTo(-raio*0.3, -raio*0.7, -raio*0.1, -raio*0.9);
        n.quadraticCurveTo(raio*0.2, -raio*0.7, 0.05*raio, -raio*0.4);
        n.fill(); n.stroke();

        // Rosto Fofo e Protetor
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(-raio*0.1, -raio*0.1); n.lineTo(raio*0.05, 0); n.stroke();
            n.beginPath(); n.moveTo(raio*0.3, -raio*0.1); n.lineTo(raio*0.15, 0); n.stroke();
        } else {
            // Olhos Grandes e Expressivos
            n.fillStyle = "#fff"; n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.arc(0, -raio*0.1, raio*0.12, 0, Math.PI*2); n.fill(); n.stroke();
            n.beginPath(); n.arc(raio*0.3, -raio*0.1, raio*0.12, 0, Math.PI*2); n.fill(); n.stroke();

            n.fillStyle = "#000";
            n.beginPath(); n.arc(0.03*raio, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.33, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill();

            n.fillStyle = "#fff"; // Brilho do olho
            n.beginPath(); n.arc(0.01*raio, -raio*0.12, raio*0.02, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.31, -raio*0.12, raio*0.02, 0, Math.PI*2); n.fill();

            // Bochechas da Mata
            n.fillStyle = "#f472b6"; n.globalAlpha = 0.6;
            n.beginPath(); n.arc(-raio*0.15, 0.05*raio, raio*0.06, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.45, 0.05*raio, raio*0.06, 0, Math.PI*2); n.fill();
            n.globalAlpha = 1;

            // Focinho/Boca de Macaquinho (:3)
            n.strokeStyle = bordaCorpo; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(raio*0.1, 0.1*raio); n.quadraticCurveTo(raio*0.15, 0.18*raio, raio*0.2, 0.1*raio); n.stroke();
        }
        n.restore();
      }

      function desenharCurupiraMarca(n, u, r, l, o, f) {
        // Virapé da Marca (curupira-marca) - Variante de Fogo (Tatá)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pular = isFainted ? 0 : Math.sin(tempo * 5) * o * 0.04;
        n.save(); n.translate(r, l - pular + o * 0.05); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.38; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corCorpo = "#4ade80"; let bordaCorpo = "#14532d";
        let corBarriga = "#86efac"; let corFogo = "#f97316"; let brilhoFogo = "#fde047";

        // Pegadas de Fogo no Chão (Por baixo dele)
        if(!isFainted) {
            n.fillStyle = corFogo; n.globalAlpha = 0.6 + Math.sin(tempo*8)*0.2;
            n.beginPath(); n.ellipse(raio*0.3, raio*0.6 + pular, raio*0.15, raio*0.08, 0, 0, Math.PI*2); n.fill();
            n.beginPath(); n.ellipse(raio*0.8, raio*0.6 + pular, raio*0.1, raio*0.05, 0, 0, Math.PI*2); n.fill(); // Pegada mais antiga
            n.globalAlpha = 1;
        }

        // Cauda de Folha
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio*0.3, raio*0.1);
        n.quadraticCurveTo(-raio*0.8, -raio*0.2, -raio*0.9, raio*0.3);
        n.quadraticCurveTo(-raio*0.5, raio*0.4, -raio*0.3, raio*0.2);
        n.fill(); n.stroke();

        // Pés em BRASA Virados para Trás
        n.fillStyle = corFogo; n.strokeStyle = "#7c2d12"; // Pés vermelhos/laranjas
        n.beginPath(); n.moveTo(raio*0.1, raio*0.3); n.lineTo(-raio*0.15, raio*0.45); n.lineTo(raio*0.2, raio*0.48); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.1, raio*0.3); n.lineTo(-raio*0.35, raio*0.45); n.lineTo(-raio*0.0, raio*0.48); n.closePath(); n.fill(); n.stroke();

        // Corpo
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo;
        n.beginPath(); n.ellipse(0, 0, raio*0.45, raio*0.4, 0, 0, Math.PI*2); n.fill(); n.stroke();

        n.fillStyle = corBarriga;
        n.beginPath(); n.ellipse(raio*0.1, raio*0.1, raio*0.3, raio*0.25, -0.2, 0, Math.PI*2); n.fill();

        // Marca Tribial do Tatá (Testa)
        n.fillStyle = corFogo; n.strokeStyle = "#c2410c"; n.lineWidth = strokeW*0.8;
        n.beginPath(); n.moveTo(raio*0.15, -raio*0.4); n.lineTo(raio*0.1, -raio*0.2); n.lineTo(raio*0.2, -raio*0.2); n.closePath(); n.fill(); n.stroke();

        // Braços
        n.fillStyle = corCorpo; n.strokeStyle = bordaCorpo; n.lineWidth = strokeW*1.5;
        n.beginPath(); n.ellipse(-raio*0.1, raio*0.15, raio*0.08, raio*0.12, -Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.ellipse(raio*0.25, raio*0.15, raio*0.08, raio*0.12, Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();

        // Folhinha no topo (Com a ponta a queimar)
        let gradFolha = n.createLinearGradient(0, -raio*0.4, 0, -raio*1.0);
        gradFolha.addColorStop(0, corCorpo); gradFolha.addColorStop(1, corFogo);
        n.fillStyle = gradFolha; n.strokeStyle = bordaCorpo;
        n.beginPath();
        n.moveTo(-raio*0.05, -raio*0.4);
        n.quadraticCurveTo(-raio*0.3, -raio*0.7, -raio*0.1, -raio*0.9);
        n.quadraticCurveTo(raio*0.2, -raio*0.7, 0.05*raio, -raio*0.4);
        n.fill(); n.stroke();

        // Rosto
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(-raio*0.1, -raio*0.1); n.lineTo(raio*0.05, 0); n.stroke();
            n.beginPath(); n.moveTo(raio*0.3, -raio*0.1); n.lineTo(raio*0.15, 0); n.stroke();
        } else {
            // Olhos Dourados (Poder da Marca)
            n.fillStyle = "#fff"; n.strokeStyle = "#000"; n.lineWidth = strokeW;
            n.beginPath(); n.arc(0, -raio*0.1, raio*0.12, 0, Math.PI*2); n.fill(); n.stroke();
            n.beginPath(); n.arc(raio*0.3, -raio*0.1, raio*0.12, 0, Math.PI*2); n.fill(); n.stroke();

            n.fillStyle = "#000";
            n.beginPath(); n.arc(0.03*raio, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.33, -raio*0.1, raio*0.06, 0, Math.PI*2); n.fill();

            n.fillStyle = brilhoFogo; // Brilho Dourado
            n.beginPath(); n.arc(0.01*raio, -raio*0.12, raio*0.02, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.31, -raio*0.12, raio*0.02, 0, Math.PI*2); n.fill();

            n.fillStyle = corFogo; n.globalAlpha = 0.6;
            n.beginPath(); n.arc(-raio*0.15, 0.05*raio, raio*0.06, 0, Math.PI*2); n.fill();
            n.beginPath(); n.arc(raio*0.45, 0.05*raio, raio*0.06, 0, Math.PI*2); n.fill();
            n.globalAlpha = 1;

            n.strokeStyle = bordaCorpo; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(raio*0.1, 0.1*raio); n.quadraticCurveTo(raio*0.15, 0.18*raio, raio*0.2, 0.1*raio); n.stroke();
        }
        n.restore();
      }

      function desenharDevorasselvaMarca(n, u, r, l, o, f) {
        // Devorasselva da Marca (verdente-3-marca) - Dragão Carnívoro com Marca de Fogo
        let isFainted = f.fainted; let tempo = f.t || 0;
        let pounce = isFainted ? 0 : Math.sin(tempo*4)*o*0.03;
        n.save(); n.translate(r, l + o*0.05 + pounce); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corPlanta = "#22c55e"; let bordaPlanta = "#14532d";
        let corPetala = "#3b0764"; let bordaPetala = "#1e1b4b"; // Pétalas escuras
        let corMarca = "#ef4444"; let brilhoFogo = "#fde047";

        // 1. Vinhas traseiras (Tentáculos)
        n.strokeStyle = "#16a34a"; n.lineWidth = strokeW*3;
        n.beginPath(); n.moveTo(-raio*0.5, 0); n.quadraticCurveTo(-raio*1.5, -raio*0.5, -raio*1.2, -raio*1.0); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.4, 0); n.quadraticCurveTo(-raio*1.2, raio*0.8, -raio*1.5, raio*0.5); n.stroke();

        // 2. Pernas de Dinossauro (T-Rex)
        n.fillStyle = corPlanta; n.strokeStyle = bordaPlanta; n.lineWidth = strokeW*1.5;
        // Perna traseira
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.3); n.lineTo(-raio*0.4, raio*0.7); n.lineTo(-raio*0.2, raio*1.0); n.lineTo(-raio*0.6, raio*1.0); n.lineTo(-raio*0.6, raio*0.8); n.closePath(); n.fill(); n.stroke();
        // Perna dianteira
        n.beginPath(); n.moveTo(raio*0.2, raio*0.4); n.lineTo(0, raio*0.8); n.lineTo(raio*0.2, raio*1.1); n.lineTo(-raio*0.2, raio*1.1); n.lineTo(-raio*0.2, raio*0.9); n.closePath(); n.fill(); n.stroke();

        // 3. Corpo (Bolbo carnudo)
        n.beginPath(); n.ellipse(-raio*0.2, raio*0.2, raio*0.5, raio*0.4, Math.PI/4, 0, Math.PI*2); n.fill(); n.stroke();

        // 4. Cabeça Monstruosa (Mandíbulas de Planta Carnívora)
        let abreBoca = isFainted ? 0 : Math.abs(Math.sin(tempo*8))*raio*0.2;

        // Pétalas Escuras ao redor da cabeça (Leão/Girassol negro)
        n.fillStyle = corPetala; n.strokeStyle = bordaPetala;
        let angulos = [0, Math.PI/4, Math.PI/2, Math.PI*3/4, Math.PI, Math.PI*5/4, Math.PI*3/2];
        angulos.forEach(ang => {
            n.beginPath();
            n.moveTo(raio*0.2, -raio*0.2);
            n.lineTo(raio*0.2 + Math.cos(ang-0.2)*raio*0.8, -raio*0.2 + Math.sin(ang-0.2)*raio*0.8);
            n.lineTo(raio*0.2 + Math.cos(ang+0.2)*raio*0.8, -raio*0.2 + Math.sin(ang+0.2)*raio*0.8);
            n.closePath(); n.fill(); n.stroke();
        });

        // O Emblema do Tatá na Testa (Formado pelas pétalas)
        n.fillStyle = corMarca; n.shadowColor = brilhoFogo; n.shadowBlur = isFainted ? 0 : 15;
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.8); n.lineTo(raio*0.4, -raio*0.4); n.lineTo(0, -raio*0.4); n.closePath(); n.fill(); n.shadowBlur = 0;

        // Mandíbula Inferior
        n.fillStyle = corPlanta; n.strokeStyle = bordaPlanta;
        n.beginPath(); n.moveTo(raio*0.2, 0); n.lineTo(raio*1.2, abreBoca); n.lineTo(raio*0.8, raio*0.4); n.lineTo(raio*0.2, raio*0.4); n.closePath(); n.fill(); n.stroke();
        // Mandíbula Superior
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.4); n.lineTo(raio*1.3, -raio*0.2 - abreBoca); n.lineTo(raio*0.8, 0); n.lineTo(raio*0.2, 0); n.closePath(); n.fill(); n.stroke();

        // Dentes de Espinho Afiados
        n.fillStyle = "#fff"; n.strokeStyle = "#d4d4d8";
        n.beginPath(); n.moveTo(raio*0.6, 0); n.lineTo(raio*0.7, abreBoca+raio*0.1); n.lineTo(raio*0.8, 0); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.9, 0); n.lineTo(raio*1.0, abreBoca+raio*0.1); n.lineTo(raio*1.1, 0); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.1); n.lineTo(raio*0.7, -abreBoca-raio*0.2); n.lineTo(raio*0.8, -raio*0.1); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.9, -raio*0.1); n.lineTo(raio*1.0, -abreBoca-raio*0.2); n.lineTo(raio*1.1, -raio*0.1); n.fill(); n.stroke();

        // 5. Olho de Dragão/Réptil
        n.fillStyle = isFainted ? "#000" : brilhoFogo;
        n.beginPath(); n.ellipse(raio*0.5, -raio*0.2, raio*0.1, raio*0.05, -Math.PI/6, 0, Math.PI*2); n.fill();
        if(!isFainted) {
            n.fillStyle = "#000"; n.beginPath(); n.ellipse(raio*0.5, -raio*0.2, raio*0.02, raio*0.05, -Math.PI/6, 0, Math.PI*2); n.fill(); // Pupila reptiliana
        }

        n.restore();
      }

      function desenharDiamangolemMarca(n, u, r, l, o, f) {
        // Diamangolem da Marca - Golem/Tartaruga de Diamante com Coração do Tatá
        let isFainted = f.fainted; let tempo = f.t || 0;
        let respiracao = isFainted ? 1 : 1 + Math.sin(tempo * 2) * 0.02; // Respiração lenta e pesada
        n.save(); n.translate(r, l + o*0.08); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corPedra = "#78350f"; let bordaPedra = "#451a03";
        let corCristal = "#e0f2fe"; let bordaCristal = "#0ea5e9";
        let corFogo = "#ef4444"; let brilhoFogo = "#fde047";

        // 1. Pernas de Rocha Maciça (Pilares)
        n.fillStyle = corPedra; n.strokeStyle = bordaPedra; n.lineWidth = strokeW*2;
        [-1, 1].forEach(lado => {
           n.beginPath(); n.moveTo(lado*raio*0.4, 0); n.lineTo(lado*raio*0.6, raio*0.8); n.lineTo(lado*raio*0.2, raio*0.8); n.closePath(); n.fill(); n.stroke();
           // Unhas de cristal
           n.fillStyle = corCristal; n.strokeStyle = bordaCristal;
           n.beginPath(); n.moveTo(lado*raio*0.25, raio*0.8); n.lineTo(lado*raio*0.3, raio*0.7); n.lineTo(lado*raio*0.35, raio*0.8); n.fill(); n.stroke();
           n.fillStyle = corPedra; n.strokeStyle = bordaPedra;
        });

        n.scale(1, respiracao);

        // 2. Ombros / Cristais Traseiros
        n.fillStyle = corCristal; n.strokeStyle = bordaCristal; n.lineWidth = strokeW*1.5;
        [-1, 1].forEach(lado => {
            n.beginPath(); n.moveTo(lado*raio*0.4, 0); n.lineTo(lado*raio*0.9, -raio*0.5); n.lineTo(lado*raio*0.5, -raio*0.8); n.lineTo(0, -raio*0.4); n.closePath(); n.fill(); n.stroke();
            n.beginPath(); n.moveTo(lado*raio*0.4, 0); n.lineTo(lado*raio*0.5, -raio*0.8); n.stroke(); // Faceta
        });

        // 3. Corpo/Tronco de Rocha
        n.fillStyle = corPedra; n.strokeStyle = bordaPedra; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(0, -raio*0.7); n.lineTo(raio*0.6, -raio*0.2); n.lineTo(raio*0.5, raio*0.5); n.lineTo(0, raio*0.7); n.lineTo(-raio*0.5, raio*0.5); n.lineTo(-raio*0.6, -raio*0.2); n.closePath(); n.fill(); n.stroke();

        // 4. Cabeça do Golem
        n.beginPath(); n.moveTo(-raio*0.3, -raio*0.6); n.lineTo(0, -raio*0.9); n.lineTo(raio*0.3, -raio*0.6); n.lineTo(raio*0.2, -raio*0.3); n.lineTo(-raio*0.2, -raio*0.3); n.closePath(); n.fill(); n.stroke();

        // Olhos de Golem (Cristais azuis brilhantes)
        n.fillStyle = isFainted ? "#000" : corCristal;
        n.beginPath(); n.moveTo(-raio*0.15, -raio*0.5); n.lineTo(-raio*0.05, -raio*0.6); n.lineTo(-raio*0.05, -raio*0.5); n.fill();
        n.beginPath(); n.moveTo(raio*0.15, -raio*0.5); n.lineTo(raio*0.05, -raio*0.6); n.lineTo(raio*0.05, -raio*0.5); n.fill();

        // 5. O Peito de Diamante e a Marca do Tatá
        let pulsoFogo = isFainted ? 0 : Math.sin(tempo*6)*15;
        n.fillStyle = "rgba(224, 242, 254, 0.8)"; // Diamante semi-translúcido
        n.strokeStyle = bordaCristal; n.lineWidth = strokeW*2;
        n.beginPath(); n.moveTo(0, -raio*0.2); n.lineTo(raio*0.4, raio*0.2); n.lineTo(0, raio*0.6); n.lineTo(-raio*0.4, raio*0.2); n.closePath(); n.fill(); n.stroke();
        // Facetas do diamante no peito
        n.beginPath(); n.moveTo(0, -raio*0.2); n.lineTo(0, raio*0.6); n.stroke();
        n.beginPath(); n.moveTo(-raio*0.4, raio*0.2); n.lineTo(raio*0.4, raio*0.2); n.stroke();

        // O Coração da Marca (Fogo pulsante no centro)
        if(!isFainted) {
            n.fillStyle = corFogo; n.shadowColor = brilhoFogo; n.shadowBlur = 10 + pulsoFogo;
            n.beginPath(); n.moveTo(0, raio*0.1); n.lineTo(raio*0.15, raio*0.2); n.lineTo(0, raio*0.35); n.lineTo(-raio*0.15, raio*0.2); n.closePath(); n.fill();
            n.shadowBlur = 0;
            // Ponto de luz intenso
            n.fillStyle = brilhoFogo;
            n.beginPath(); n.arc(0, raio*0.2, raio*0.04, 0, Math.PI*2); n.fill();
        }

        n.restore();
      }

      function desenharEcoalma(n, u, r, l, o, f) {
        // Ecoalma - A Pantera/Raposa Espiritual (Sombra)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let flutua = Math.sin(tempo * 4) * o * 0.05; // Levitação mística
        n.save(); n.translate(r, l + flutua); n.scale(f.flip?-1:1, 1);
        let raio = o * 0.45; let strokeW = Math.max(2, o*0.018);
        n.lineCap="round"; n.lineJoin="round";
        if(isFainted) n.globalAlpha = 0.55;

        let corEspirito = "#8b5cf6"; let corSombra = "#4c1d95";
        let corAura = "rgba(139, 92, 246, 0.4)"; let brilhoOlho = "#fdf4ff";

        // 1. Aura Espiritual Flutuante (Fundo)
        if(!isFainted) {
            n.fillStyle = corAura;
            let pulso = Math.sin(tempo*8)*raio*0.05;
            n.beginPath(); n.ellipse(0, 0, raio*0.8 + pulso, raio*0.7 + pulso, 0, 0, Math.PI*2); n.fill();
        }

        // 2. Caudas Gêmeas Etéreas (Bakeneko / Kitsune)
        n.fillStyle = corSombra; n.strokeStyle = corEspirito; n.lineWidth = strokeW * 1.5;
        let movCauda1 = Math.sin(tempo*3)*raio*0.2;
        let movCauda2 = Math.cos(tempo*3.5)*raio*0.2;

        // Cauda Direita
        n.beginPath(); n.moveTo(raio*0.3, raio*0.2); n.quadraticCurveTo(raio*1.2, raio*0.5, raio*1.0+movCauda1, -raio*0.8); n.quadraticCurveTo(raio*0.5, -raio*0.5, raio*0.3, 0); n.fill(); n.stroke();
        // Cauda Esquerda
        n.beginPath(); n.moveTo(-raio*0.3, raio*0.2); n.quadraticCurveTo(-raio*1.2, raio*0.5, -raio*1.0+movCauda2, -raio*0.8); n.quadraticCurveTo(-raio*0.5, -raio*0.5, -raio*0.3, 0); n.fill(); n.stroke();

        // 3. Corpo Felino/Místico
        n.fillStyle = corEspirito; n.strokeStyle = corSombra; n.lineWidth = strokeW * 2;
        n.beginPath(); n.ellipse(0, raio*0.1, raio*0.4, raio*0.5, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Marcas rúnicas no peito
        n.strokeStyle = "#c4b5fd"; n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(0, raio*0.1); n.lineTo(raio*0.15, raio*0.3); n.lineTo(0, raio*0.4); n.lineTo(-raio*0.15, raio*0.3); n.closePath(); n.stroke();

        // 4. Patas flutuantes escuras
        n.fillStyle = corSombra; n.strokeStyle = "#2e1065";
        n.beginPath(); n.ellipse(-raio*0.2, raio*0.6, raio*0.1, raio*0.15, 0, 0, Math.PI*2); n.fill(); n.stroke();
        n.beginPath(); n.ellipse(raio*0.2, raio*0.6, raio*0.1, raio*0.15, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // 5. Cabeça Majestosa (Raposa/Pantera)
        n.fillStyle = corEspirito; n.strokeStyle = corSombra; n.lineWidth = strokeW * 2;
        n.beginPath(); n.ellipse(0, -raio*0.3, raio*0.45, raio*0.35, 0, 0, Math.PI*2); n.fill(); n.stroke();

        // Orelhas Longas Espirituais
        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.5); n.quadraticCurveTo(-raio*0.5, -raio*1.0, -raio*0.6, -raio*0.8); n.lineTo(-raio*0.4, -raio*0.4); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.2, -raio*0.5); n.quadraticCurveTo(raio*0.5, -raio*1.0, raio*0.6, -raio*0.8); n.lineTo(raio*0.4, -raio*0.4); n.fill(); n.stroke();

        // Focinho
        n.fillStyle = corSombra; n.beginPath(); n.arc(0, -raio*0.2, raio*0.05, 0, Math.PI*2); n.fill();

        // Olhos Brancos Puros (Entidade Mística)
        if(isFainted) {
            n.strokeStyle = corSombra; n.lineWidth = strokeW*1.5;
            n.beginPath(); n.moveTo(-raio*0.3, -raio*0.3); n.lineTo(-raio*0.1, -raio*0.25); n.stroke();
            n.beginPath(); n.moveTo(raio*0.3, -raio*0.3); n.lineTo(raio*0.1, -raio*0.25); n.stroke();
        } else {
            n.fillStyle = brilhoOlho; n.shadowColor = brilhoOlho; n.shadowBlur = 15;
            // Olho estilo fenda/felino, mas sem pupila (puramente mágico)
            n.beginPath(); n.moveTo(-raio*0.3, -raio*0.3); n.quadraticCurveTo(-raio*0.2, -raio*0.4, -raio*0.1, -raio*0.3); n.quadraticCurveTo(-raio*0.2, -raio*0.25, -raio*0.3, -raio*0.3); n.fill();
            n.beginPath(); n.moveTo(raio*0.3, -raio*0.3); n.quadraticCurveTo(raio*0.2, -raio*0.4, raio*0.1, -raio*0.3); n.quadraticCurveTo(raio*0.2, -raio*0.25, raio*0.3, -raio*0.3); n.fill();
            n.shadowBlur = 0;
        }

        n.restore();
      }

      function desenharJacaruxa(n, u, r, l, o, f) {
        // Jacaruxa (cuca) - A Jacaré Bruxa (Estilo Feiticeira Reptiliana)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02; // Respiração

        n.lineCap = "round"; n.lineJoin = "miter"; // Miter para escamas afiadas
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.06;

        let corCorpo = "#a855f7"; let sombraCorpo = "#4c1d95"; // Tons de roxo/sombra
        let corMagia = "#34d399"; let brilhoMagia = "#a7f3d0"; // Magia verde-pântano

        n.save(); n.translate(r, l + flutua - (o * -0.01));
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);
        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45;

        // 1. AURA MAGICA ORBITAL (Selo de Bruxa nas costas)
        if (!isFainted) {
            n.save();
            n.rotate(tempo); // Roda lentamente
            n.strokeStyle = corMagia; n.lineWidth = strokeW * 0.8;
            n.beginPath(); n.arc(0, 0, raio*0.9, 0, Math.PI*2); n.stroke();
            // Triângulo místico interior
            n.beginPath();
            for(let i=0; i<3; i++) {
                let ang = (i * Math.PI * 2 / 3);
                let px = Math.cos(ang) * raio*0.9; let py = Math.sin(ang) * raio*0.9;
                if(i===0) n.moveTo(px, py); else n.lineTo(px, py);
            }
            n.closePath(); n.stroke();
            n.restore();
        }

        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, corCorpo); gradCorpo.addColorStop(1, sombraCorpo);

        // 2. CAUDA DE JACARÉ ESCAMADA (Enrola para a frente)
        n.fillStyle = gradCorpo; n.strokeStyle = "#2e1065"; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio*0.2, raio*0.4);
        n.bezierCurveTo(-raio*1.2, raio*0.6, -raio*1.0, raio*1.5, -raio*0.2, raio*1.2);
        n.lineTo(-raio*0.4, raio*0.9);
        n.bezierCurveTo(-raio*0.8, raio*0.9, -raio*0.6, raio*0.6, -raio*0.2, raio*0.6);
        n.fill(); n.stroke();

        // 3. CORPO / MANTO DE SOMBRAS (A "Roupa" da Feiticeira)
        n.fillStyle = sombraCorpo; n.strokeStyle = "#2e1065";
        n.beginPath();
        n.moveTo(-raio*0.4, -raio*0.2); // Costas
        n.quadraticCurveTo(-raio*0.6, raio*0.5, -raio*0.3, raio*0.8);
        n.lineTo(raio*0.4, raio*0.8);
        n.quadraticCurveTo(raio*0.5, raio*0.4, raio*0.2, 0);
        n.closePath(); n.fill(); n.stroke();

        // 4. CABEÇA / FOCINHO REPTILIANO (Jacaré)
        n.fillStyle = gradCorpo; n.strokeStyle = "#2e1065"; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(-raio*0.3, -raio*0.1); // Base do pescoço
        n.lineTo(-raio*0.2, -raio*0.6); // Topo da cabeça
        n.lineTo(raio*0.3, -raio*0.5); // Sobrancelha afiada
        n.lineTo(raio*0.8, -raio*0.2); // Ponta do focinho
        n.lineTo(raio*0.7, 0); // Mandíbula inferior
        n.lineTo(raio*0.2, 0.1*raio); // Garganta
        n.closePath(); n.fill(); n.stroke();

        // Escamas/Cristais nas Costas (Como uma coroa de bruxa)
        n.fillStyle = sombraCorpo; n.strokeStyle = corCorpo;
        let escamas = [[-raio*0.2, -raio*0.6], [0, -raio*0.55], [raio*0.2, -raio*0.5]];
        escamas.forEach((pt, i) => {
            n.beginPath(); n.moveTo(pt[0], pt[1]); n.lineTo(pt[0] - raio*0.15, pt[1] - raio*0.3); n.lineTo(pt[0] + raio*0.1, pt[1] - raio*0.05); n.fill(); n.stroke();
        });

        // 5. OLHO MÍSTICO (Fenda de Jacaré)
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW * 1.5;
            n.beginPath(); n.moveTo(raio*0.1, -raio*0.3); n.lineTo(raio*0.3, -raio*0.2); n.stroke();
        } else {
            n.fillStyle = "#fff"; n.strokeStyle = "#2e1065";
            n.beginPath(); n.moveTo(raio*0.1, -raio*0.2); n.lineTo(raio*0.25, -raio*0.35); n.lineTo(raio*0.35, -raio*0.2); n.lineTo(raio*0.25, -raio*0.15); n.closePath(); n.fill(); n.stroke();
            // Pupila Reptiliana (Fenda mágica)
            n.fillStyle = corMagia; n.beginPath(); n.ellipse(raio*0.25, -raio*0.22, raio*0.02, raio*0.06, Math.PI/4, 0, Math.PI*2); n.fill();
        }

        // 6. BRAÇO / ORBE MÁGICO (Conjurando feitiço)
        n.fillStyle = gradCorpo; n.strokeStyle = "#2e1065";
        n.beginPath(); n.moveTo(0, raio*0.2); n.lineTo(raio*0.4, raio*0.4); n.lineTo(raio*0.6, raio*0.3); n.lineTo(raio*0.3, raio*0.1); n.closePath(); n.fill(); n.stroke();

        if (!isFainted) {
            let pulso = Math.sin(tempo*10)*raio*0.05;
            n.fillStyle = corMagia; n.shadowColor = brilhoMagia; n.shadowBlur = 15;
            n.beginPath(); n.arc(raio*0.7, raio*0.2, raio*0.1 + pulso, 0, Math.PI*2); n.fill();
            n.shadowBlur = 0;
            n.fillStyle = "#fff"; n.beginPath(); n.arc(raio*0.68, raio*0.18, raio*0.03, 0, Math.PI*2); n.fill();
        }

        n.restore();
      }

      function desenharJacaruxaMarca(n, u, r, l, o, f) {
        // Jacaruxa da Marca (cuca-marca) - Feiticeira Milenar Sombria com o Selo do Tatá
        let isFainted = f.fainted; let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 4) * 0.02;

        n.lineCap = "round"; n.lineJoin = "miter";
        let strokeW = Math.max(1.8, o * 0.018);
        let flutua = Math.sin(tempo * 3) * o * 0.06;

        let corCorpo = "#1e1b4b"; let sombraCorpo = "#000000"; // Obsidiana mística
        let corMagia = "#f43f5e"; let brilhoMagia = "#fb7185"; // Magia corrompida/rosa neon da imagem
        let corSelo = "#fde047"; // Marca dourada na testa

        n.save(); n.translate(r, l + flutua - (o * -0.01));
        if (f.flip) n.scale(-1, 1); n.scale(esc, esc);
        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45;

        // 1. AURA MAGICA NEON (Formas geométricas)
        if (!isFainted) {
            n.save(); n.rotate(-tempo * 1.5); // Gira ao contrário
            n.strokeStyle = corMagia; n.lineWidth = strokeW;
            n.beginPath(); n.rect(-raio*0.7, -raio*0.7, raio*1.4, raio*1.4); n.stroke();
            n.rotate(Math.PI/4);
            n.beginPath(); n.rect(-raio*0.7, -raio*0.7, raio*1.4, raio*1.4); n.stroke();
            n.restore();
        }

        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, "#4c1d95"); gradCorpo.addColorStop(1, sombraCorpo);

        // 2. CAUDA ESCAMADA
        n.fillStyle = gradCorpo; n.strokeStyle = "#1e1b4b"; n.lineWidth = strokeW * 1.5;
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.4); n.bezierCurveTo(-raio*1.3, raio*0.6, -raio*1.1, raio*1.6, -raio*0.2, raio*1.2); n.lineTo(-raio*0.4, raio*0.9); n.bezierCurveTo(-raio*0.8, raio*0.9, -raio*0.6, raio*0.6, -raio*0.2, raio*0.6); n.fill(); n.stroke();

        // 3. MANTO Sombrio
        n.fillStyle = sombraCorpo; n.strokeStyle = corMagia; // Borda do manto brilha com magia
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.2); n.quadraticCurveTo(-raio*0.6, raio*0.5, -raio*0.3, raio*0.8); n.lineTo(raio*0.4, raio*0.8); n.quadraticCurveTo(raio*0.5, raio*0.4, raio*0.2, 0); n.closePath(); n.fill(); n.stroke();

        // 4. CABEÇA E FOCINHO
        n.fillStyle = gradCorpo; n.strokeStyle = "#1e1b4b"; n.lineWidth = strokeW * 1.5;
        n.beginPath(); n.moveTo(-raio*0.3, -raio*0.1); n.lineTo(-raio*0.2, -raio*0.6); n.lineTo(raio*0.3, -raio*0.5); n.lineTo(raio*0.8, -raio*0.2); n.lineTo(raio*0.7, 0); n.lineTo(raio*0.2, 0.1*raio); n.closePath(); n.fill(); n.stroke();

        // Coroa de Escamas Mágicas
        n.fillStyle = corMagia; n.strokeStyle = brilhoMagia;
        let escamas = [[-raio*0.2, -raio*0.6], [0, -raio*0.55], [raio*0.2, -raio*0.5]];
        escamas.forEach((pt) => {
            n.beginPath(); n.moveTo(pt[0], pt[1]); n.lineTo(pt[0] - raio*0.2, pt[1] - raio*0.4); n.lineTo(pt[0] + raio*0.1, pt[1] - raio*0.05); n.fill(); n.stroke();
        });

        // 5. O SELO DO TATÁ NA TESTA
        if(!isFainted) {
            n.strokeStyle = corSelo; n.lineWidth = strokeW * 1.5; n.shadowColor = corSelo; n.shadowBlur = 10;
            n.beginPath(); n.moveTo(raio*0.2, -raio*0.4); n.lineTo(raio*0.3, -raio*0.2); n.lineTo(raio*0.4, -raio*0.4); n.stroke();
            n.shadowBlur = 0;
        }

        // 6. OLHO MÍSTICO (Dourado/Fogo)
        if (isFainted) {
            n.strokeStyle = "#fff"; n.lineWidth = strokeW * 1.5;
            n.beginPath(); n.moveTo(raio*0.1, -raio*0.3); n.lineTo(raio*0.3, -raio*0.2); n.stroke();
        } else {
            n.fillStyle = "#000"; n.strokeStyle = corSelo;
            n.beginPath(); n.moveTo(raio*0.1, -raio*0.2); n.lineTo(raio*0.25, -raio*0.35); n.lineTo(raio*0.35, -raio*0.2); n.lineTo(raio*0.25, -raio*0.15); n.closePath(); n.fill(); n.stroke();
            n.fillStyle = corSelo; n.beginPath(); n.arc(raio*0.25, -raio*0.22, raio*0.04, 0, Math.PI*2); n.fill();
        }

        // 7. ORBE CORROMPIDO
        n.fillStyle = gradCorpo; n.strokeStyle = "#1e1b4b";
        n.beginPath(); n.moveTo(0, raio*0.2); n.lineTo(raio*0.4, raio*0.4); n.lineTo(raio*0.6, raio*0.3); n.lineTo(raio*0.3, raio*0.1); n.closePath(); n.fill(); n.stroke();
        if (!isFainted) {
            n.fillStyle = corMagia; n.shadowColor = brilhoMagia; n.shadowBlur = 15;
            n.beginPath(); n.arc(raio*0.7, raio*0.2, raio*0.12, 0, Math.PI*2); n.fill(); n.shadowBlur = 0;
        }
        n.restore();
      }

      function desenharLunauro(n, u, r, l, o, f) {
        // Lunauro (lobisomem) - A Fera Brutal (Lobisomem com Espinhos Sombrios)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let esc = 1 + Math.sin(tempo * 5) * 0.03; // Respiração pesada da fera

        n.lineCap = "round"; n.lineJoin = "miter"; // Miter crucial para os dentes e pelos afiados
        let strokeW = Math.max(1.8, o * 0.018);

        // Posição mais curvada e pesada, sem flutuação mágica
        let agachar = isFainted ? 0 : Math.sin(tempo * 5) * o * 0.02;
        n.save(); n.translate(r, l + agachar + (o * 0.05));
        if (f.flip) n.scale(-1, 1);
        n.scale(esc, esc);
        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45;
        let corPelo = "#4c1d95"; let sombraPelo = "#1e1b4b"; // Tons noturnos profundos
        let corEspinho = "#c084fc"; let brilhoLunar = "#e9d5ff"; // O roxo brilhante da imagem

        // 1. AURA LUNAR MÍSTICA (Lua minguante flutuando atrás)
        if (!isFainted) {
            n.fillStyle = "rgba(192, 132, 252, 0.2)";
            n.beginPath(); n.arc(0, -raio*0.2, raio*1.2, 0, Math.PI*2); n.fill();
            n.fillStyle = "rgba(233, 213, 255, 0.4)";
            n.beginPath(); n.arc(-raio*0.2, -raio*0.4, raio*0.6, 0, Math.PI*2); n.fill();
        }

        // 2. ESPINHOS BRUTAIS NAS COSTAS (Como na imagem original)
        n.fillStyle = corEspinho; n.strokeStyle = sombraPelo; n.lineWidth = strokeW * 1.5;
        let espinhosX = [-raio*0.6, -raio*0.3, 0, raio*0.3, raio*0.6];
        espinhosX.forEach((ex) => {
            n.beginPath();
            n.moveTo(ex - raio*0.1, -raio*0.5);
            n.lineTo(ex, -raio*1.1 - Math.sin(tempo*10)*raio*0.05); // Espinhos vibram
            n.lineTo(ex + raio*0.1, -raio*0.5);
            n.closePath(); n.fill(); n.stroke();
        });

        // 3. PERNAS TRASEIRAS (Lobo agachado)
        n.fillStyle = sombraPelo; n.strokeStyle = "#000";
        n.beginPath(); n.moveTo(-raio*0.4, raio*0.5); n.lineTo(-raio*0.6, raio*0.9); n.lineTo(-raio*0.2, raio*0.9); n.closePath(); n.fill(); n.stroke();
        n.beginPath(); n.moveTo(raio*0.4, raio*0.5); n.lineTo(raio*0.6, raio*0.9); n.lineTo(raio*0.2, raio*0.9); n.closePath(); n.fill(); n.stroke();

        let gradPelo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo = n.createLinearGradient(0, -raio, 0, raio); // Reutilizando a variável para segurança
        gradPelo.addColorStop(0, corPelo); gradPelo.addColorStop(1, sombraPelo);

        // 4. CORPO/TORSO MACIÇO (Com pelos afiados usando bezier e lineTo)
        n.fillStyle = gradPelo; n.strokeStyle = sombraPelo; n.lineWidth = strokeW * 1.5;
        n.beginPath();
        n.moveTo(raio*0.6, raio*0.5); // Fundo direito
        n.lineTo(raio*0.7, raio*0.2); n.lineTo(raio*0.6, 0); // Pelo espetado
        n.lineTo(raio*0.8, -raio*0.3); n.lineTo(raio*0.5, -raio*0.5); // Ombro
        n.lineTo(0, -raio*0.6); // Pescoço/Nuca
        n.lineTo(-raio*0.5, -raio*0.5); // Ombro esq
        n.lineTo(-raio*0.8, -raio*0.3); n.lineTo(-raio*0.6, 0); // Pelo esq
        n.lineTo(-raio*0.7, raio*0.2); n.lineTo(-raio*0.6, raio*0.5);
        n.quadraticCurveTo(0, raio*0.8, raio*0.6, raio*0.5); // Barriga
        n.closePath(); n.fill(); n.stroke();

        // 5. CABEÇA E FOCINHO DE LOBO (Brutal)
        n.fillStyle = corPelo; n.strokeStyle = sombraPelo;
        n.beginPath();
        n.moveTo(-raio*0.3, -raio*0.1);
        n.lineTo(0, -raio*0.5); // Topo da cabeça
        n.lineTo(raio*0.5, -raio*0.4); // Sobrancelha franzida
        n.lineTo(raio*0.9, -raio*0.1); // Ponta do focinho de lobo
        n.lineTo(raio*0.7, raio*0.2); // Queixo
        n.lineTo(-raio*0.2, raio*0.3); // Base do pescoço
        n.closePath(); n.fill(); n.stroke();

        // Orelhas de Fera
        n.fillStyle = sombraPelo;
        n.beginPath(); n.moveTo(-raio*0.1, -raio*0.4); n.lineTo(-raio*0.4, -raio*0.9); n.lineTo(raio*0.1, -raio*0.5); n.fill(); n.stroke();

        // 6. OLHOS LUNARES (Feral e Brilhante)
        if (isFainted) {
            n.strokeStyle = "#000"; n.lineWidth = strokeW * 2;
            n.beginPath(); n.moveTo(raio*0.2, -raio*0.2); n.lineTo(raio*0.4, -raio*0.1); n.stroke();
        } else {
            n.fillStyle = brilhoLunar; n.shadowColor = brilhoLunar; n.shadowBlur = 10;
            n.beginPath(); n.moveTo(raio*0.2, -raio*0.25); n.lineTo(raio*0.4, -raio*0.3); n.lineTo(raio*0.45, -raio*0.15); n.lineTo(raio*0.3, -raio*0.1); n.closePath(); n.fill();
            n.shadowBlur = 0;
            // Pupila rasgada
            n.fillStyle = "#000"; n.beginPath(); n.ellipse(raio*0.35, -raio*0.2, raio*0.02, raio*0.06, Math.PI/6, 0, Math.PI*2); n.fill();
        }

        // 7. BRAÇOS E GARRAS (Destruidores)
        n.fillStyle = gradPelo; n.strokeStyle = sombraPelo;
        n.beginPath(); n.moveTo(-raio*0.2, raio*0.1); n.lineTo(raio*0.3, raio*0.5); n.lineTo(raio*0.5, raio*0.8); n.lineTo(0, raio*0.7); n.closePath(); n.fill(); n.stroke();

        // Garras afiadas
        n.fillStyle = corEspinho;
        [raio*0.3, raio*0.4, raio*0.5].forEach((gx) => {
            n.beginPath(); n.moveTo(gx, raio*0.75); n.lineTo(gx + raio*0.1, raio*1.0); n.lineTo(gx - raio*0.1, raio*0.8); n.fill(); n.stroke();
        });

        n.restore();
      }

      function desenharRochodonMarca(n, u, r, l, o, f) {
        // Rochodon Rochoso da Marca (rochodon_20-marca) - A Fortaleza de Pedra com Espiral de Lava
        let isFainted = f.fainted; let tempo = f.t || 0;
        let respiracao = isFainted ? 1 : 1 + Math.sin(tempo * 3) * 0.02; // Respiração pesada

        n.lineCap = "round"; n.lineJoin = "miter"; // Linhas duras para pedra
        let strokeW = Math.max(1.8, o * 0.018);
        n.save(); n.translate(r, l + o * 0.08);
        if (f.flip) n.scale(-1, 1);
        n.scale(1, respiracao);
        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.45;
        let corPedra = "#78350f"; let sombraPedra = "#451a03"; let luzPedra = "#a16207";
        let corLava = "#facc15"; let brilhoLava = "#ef4444"; // O Fogo do Tatá

        // 1. PATAS COLOSSAIS (Pilares de pedra)
        n.fillStyle = sombraPedra; n.strokeStyle = "#29150b"; n.lineWidth = strokeW * 2;
        [-raio*0.4, raio*0.3].forEach(px => {
            n.beginPath(); n.moveTo(px, raio*0.2); n.lineTo(px - raio*0.1, raio*0.7); n.lineTo(px + raio*0.2, raio*0.7); n.lineTo(px + raio*0.1, raio*0.2); n.closePath(); n.fill(); n.stroke();
            // Unhas
            n.fillStyle = luzPedra; n.beginPath(); n.moveTo(px - raio*0.1, raio*0.7); n.lineTo(px, raio*0.6); n.lineTo(px + raio*0.1, raio*0.7); n.fill(); n.fillStyle = sombraPedra;
        });

        // 2. CAUDA DE CLAVA (Anquilossauro)
        n.beginPath(); n.moveTo(-raio*0.5, 0); n.quadraticCurveTo(-raio*1.0, 0, -raio*1.1, raio*0.4); n.lineTo(-raio*0.9, raio*0.5); n.lineTo(-raio*0.5, raio*0.2); n.fill(); n.stroke();
        n.fillStyle = luzPedra; n.beginPath(); n.arc(-raio*1.0, raio*0.45, raio*0.15, 0, Math.PI*2); n.fill(); n.stroke();

        // 3. COURAÇA BLINDADA (Corpo Principal Poliédrico)
        let gradCorpo = n.createLinearGradient(0, -raio*0.8, 0, raio*0.4);
        gradCorpo.addColorStop(0, luzPedra); gradCorpo.addColorStop(0.5, corPedra); gradCorpo.addColorStop(1, sombraPedra);

        n.fillStyle = gradCorpo; n.strokeStyle = sombraPedra; n.lineWidth = strokeW * 2;
        n.beginPath();
        n.moveTo(-raio*0.7, raio*0.2);
        n.lineTo(-raio*0.8, -raio*0.2); n.lineTo(-raio*0.4, -raio*0.7); // Dorso
        n.lineTo(raio*0.3, -raio*0.8); n.lineTo(raio*0.7, -raio*0.3);
        n.lineTo(raio*0.8, raio*0.2); // Frente
        n.quadraticCurveTo(0, raio*0.4, -raio*0.7, raio*0.2); // Barriga
        n.closePath(); n.fill(); n.stroke();

        // Placas/Facetas da Carapaça
        n.strokeStyle = sombraPedra; n.lineWidth = strokeW;
        n.beginPath(); n.moveTo(-raio*0.4, -raio*0.7); n.lineTo(0, 0); n.lineTo(-raio*0.7, raio*0.2); n.stroke();
        n.beginPath(); n.moveTo(raio*0.3, -raio*0.8); n.lineTo(0, 0); n.lineTo(raio*0.8, raio*0.2); n.stroke();

        // 4. A ESPIRAL DO TATÁ (Rachaduras Magmáticas Alinhadas)
        if (!isFainted) {
            n.strokeStyle = corLava; n.lineWidth = strokeW * 1.5;
            n.shadowColor = brilhoLava; n.shadowBlur = 10 + Math.sin(tempo*8)*5;
            // Espiral poligonal nas rachaduras
            n.beginPath();
            n.moveTo(raio*0.1, -raio*0.1); n.lineTo(-raio*0.2, -raio*0.2); n.lineTo(-raio*0.3, 0);
            n.lineTo(-raio*0.1, raio*0.2); n.lineTo(raio*0.2, raio*0.1); n.lineTo(raio*0.3, -raio*0.3);
            n.lineTo(-raio*0.1, -raio*0.5);
            n.stroke();
            n.shadowBlur = 0;
        }

        // 5. CABEÇA BLINDADA
        n.fillStyle = corPedra; n.strokeStyle = sombraPedra; n.lineWidth = strokeW * 2;
        n.beginPath(); n.moveTo(raio*0.6, -raio*0.2); n.lineTo(raio*1.0, -raio*0.1); n.lineTo(raio*1.1, raio*0.3); n.lineTo(raio*0.7, raio*0.4); n.closePath(); n.fill(); n.stroke();

        // Chifre/Espinho
        n.fillStyle = luzPedra;
        n.beginPath(); n.moveTo(raio*0.8, -raio*0.15); n.lineTo(raio*0.9, -raio*0.4); n.lineTo(raio*1.0, -raio*0.1); n.fill(); n.stroke();

        // Olho
        if (isFainted) {
            n.strokeStyle = "#000"; n.beginPath(); n.moveTo(raio*0.75, 0); n.lineTo(raio*0.9, 0.1*raio); n.stroke();
        } else {
            n.fillStyle = corLava; n.beginPath(); n.arc(raio*0.85, raio*0.05, raio*0.06, 0, Math.PI*2); n.fill();
            n.fillStyle = "#000"; n.beginPath(); n.arc(raio*0.87, raio*0.05, raio*0.03, 0, Math.PI*2); n.fill();
        }

        n.restore();
      }

      function desenharRosalfinMarca(n, u, r, l, o, f) {
        // Rosalfin da Marca (boto-marca) - O Guia Mágico (Rosado Profundo + Ouro)
        let isFainted = f.fainted; let tempo = f.t || 0;
        let salto = isFainted ? 0 : Math.sin(tempo * 4) * o * 0.06;

        n.lineCap = "round"; n.lineJoin = "round";
        let strokeW = Math.max(1.8, o * 0.018);
        n.save(); n.translate(r, l - salto);
        if (f.flip) n.scale(-1, 1);
        if (isFainted) n.globalAlpha = 0.55;

        let raio = o * 0.42;
        let corBoto = "#db2777"; let sombraBoto = "#831843"; let luzBoto = "#fbcfe8"; // Rosa Magente/Raro
        let corTatá = "#fde047"; let brilhoTatá = "#eab308"; // Dourado mágico

        // Rotação de Nado
        n.rotate(Math.cos(tempo * 3) * 0.1);

        let gradCorpo = n.createLinearGradient(0, -raio, 0, raio);
        gradCorpo.addColorStop(0, luzBoto); gradCorpo.addColorStop(0.4, corBoto); gradCorpo.addColorStop(1, sombraBoto);

        // Cauda e Barbatanas
        n.fillStyle = sombraBoto; n.strokeStyle = "#4c0519"; n.lineWidth = strokeW * 1.5;
        n.beginPath(); n.moveTo(-raio*0.8, raio*0.2); n.quadraticCurveTo(-raio*1.3, raio*0.6, -raio*1.2, raio*0.9); n.quadraticCurveTo(-raio*0.9, raio*0.6, -raio*0.8, raio*0.4); n.quadraticCurveTo(-raio*0.4, raio*0.8, -raio*0.4, raio*0.4); n.fill(); n.stroke();

        n.beginPath(); n.moveTo(-raio*0.2, -raio*0.4); n.quadraticCurveTo(-raio*0.3, -raio*0.8, 0.1*raio, -raio*0.6); n.fill(); n.stroke(); // Dorsal mais longa
        n.beginPath(); n.moveTo(-raio*0.1, raio*0.4); n.lineTo(-raio*0.2, raio*0.8); n.lineTo(0.1*raio, raio*0.5); n.fill(); n.stroke();

        // Corpo Principal
        n.fillStyle = gradCorpo; n.strokeStyle = "#4c0519";
        n.beginPath();
        n.moveTo(raio*0.6, 0); n.bezierCurveTo(raio*0.4, -raio*0.6, -raio*0.5, -raio*0.6, -raio*0.8, raio*0.2); n.quadraticCurveTo(-raio*0.3, raio*0.6, raio*0.4, raio*0.3); n.quadraticCurveTo(raio*0.8, raio*0.3, raio*0.9, 0.1*raio); n.quadraticCurveTo(raio*0.8, -0.1*raio, raio*0.6, 0);
        n.closePath(); n.fill(); n.stroke();

        // Barbatana Peitoral Frontal
        n.fillStyle = corBoto;
        n.beginPath(); n.moveTo(raio*0.2, raio*0.3); n.quadraticCurveTo(raio*0.4, raio*0.8, raio*0.1, raio*0.9); n.quadraticCurveTo(0, raio*0.6, 0.1*raio, raio*0.4); n.fill(); n.stroke();

        // A MARCA DO TATÁ (Redemoinho Dourado no Dorso)
        if (!isFainted) {
            n.strokeStyle = corTatá; n.lineWidth = strokeW * 1.5; n.shadowColor = corTatá; n.shadowBlur = 15;
            n.beginPath();
            n.arc(-raio*0.2, -raio*0.1, raio*0.15, Math.PI, Math.PI*2.5);
            n.arc(-raio*0.2, -raio*0.1, raio*0.05, Math.PI*2.5, Math.PI*4);
            n.stroke();
            n.shadowBlur = 0;

            // Fagulhas d'água douradas (Guia de viajantes)
            n.fillStyle = corTatá;
            for(let i=0; i<2; i++) {
                n.beginPath(); n.arc(raio*0.6 + i*raio*0.3, -raio*0.4 + Math.sin(tempo*5+i)*raio*0.1, raio*0.03, 0, Math.PI*2); n.fill();
            }
        }

        // Rosto
        if (isFainted) {
            n.strokeStyle = "#000"; n.beginPath(); n.moveTo(raio*0.3, -raio*0.1); n.lineTo(raio*0.5, 0); n.stroke();
        } else {
            n.fillStyle = "#fff"; n.strokeStyle = "#4c0519";
            n.beginPath(); n.ellipse(raio*0.4, -raio*0.1, raio*0.08, raio*0.12, Math.PI/8, 0, Math.PI*2); n.fill(); n.stroke();

            // Pupila Dourada (A Marca do Tatá)
            n.fillStyle = brilhoTatá; n.beginPath(); n.ellipse(raio*0.42, -raio*0.08, raio*0.05, raio*0.08, Math.PI/8, 0, Math.PI*2); n.fill();
            n.fillStyle = "#fff"; n.beginPath(); n.arc(raio*0.43, -raio*0.12, raio*0.02, 0, Math.PI*2); n.fill();

            n.strokeStyle = "#4c0519"; n.lineWidth = strokeW;
            n.beginPath(); n.moveTo(raio*0.5, 0.1*raio); n.quadraticCurveTo(raio*0.6, 0.15*raio, raio*0.7, 0.05*raio); n.stroke();

            n.fillStyle = corTatá; n.globalAlpha = 0.5;
            n.beginPath(); n.ellipse(raio*0.25, 0.05*raio, raio*0.08, raio*0.04, -Math.PI/8, 0, Math.PI*2); n.fill();
            n.globalAlpha = 1;
        }

        n.restore();
      }

      function So(n, u, r, l, o, f = {}) {
        let { flip: $, t: _ = 0, fainted: v } = f,
          Z = On[u.types[0]].color,
          J = u.types[1] ? On[u.types[1]].color : m(Z, 60),
          e = m(Z, -70),
          Q = z3(u.id),
          M = 1 + u.stage * 0.28,
          H = Math.sin(_ * 3 + Q * 6) * o * 0.02,
          K = o * 0.3 * M;
        let original_o = o;
        // Ajusta o zoom com base na evolução para não bater nas bordas
        o = o * (u.stage === 2 ? 0.65 : (u.stage === 1 ? 0.8 : 0.95));





        if (u.silhouette === "aquaroch") {
          desenharAquaroch(n, u, r, l, o, f);
          return;
        }
          if (u.silhouette === "faebluma") {
            desenharFaebluma(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faevolta") {
            desenharFaevolta(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "florolith") {
            desenharFlorolith(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "magmarmor") {
            desenharMagmarmor(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "noctibra") {
            desenharNoctibra(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "petraflor") {
            desenharPetraflor(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "pyrombra") {
            desenharPyrombra(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "redemuinho") {
            desenharRedemuinho(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochombra") {
            desenharRochombra(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "terrascal") {
            desenharTerrascal(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidalvolt") {
            desenharTidalvolt(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidolith") {
            desenharTidolith(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "umbralith") {
            desenharUmbralith(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "umbravolt") {
            desenharUmbravolt(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "virasselva") {
            desenharVirasselva(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltaquas") {
            desenharVoltaquas(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltsombra") {
            desenharVoltsombra(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "vulcabra") {
            desenharVulcabra(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "abissalga_20") {
            desenharAbissalga20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "abissalga_21") {
            desenharAbissalga21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "gotaviva-3") {
            desenharAbissalume(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "algaffin_20") {
            desenharAlgaffin20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "algaffin_21") {
            desenharAlgaffin21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "aquaroch_20") {
            desenharAquaroch20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "aquaroch_21") {
            desenharAquaroch21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "brasalma") {
            desenharBrasalma(n, u, r, l, o, f);
            return;
          }

          if (u.silhouette === "curupira-evo2") {
            desenharCapoeirao(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "virasselva") {
            desenharVirasselva(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faebluma_20") {
            desenharFaebluma20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faebluma_21") {
            desenharFaebluma21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faevolta_21") {
            desenharFaevolta21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "virasselva") {
            desenharVirasselva(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faebluma_20") {
            desenharFaebluma20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faebluma_21") {
            desenharFaebluma21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faevolta_20") {
            desenharFaevolta20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "faevolta_21") {
            desenharFaevolta21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "florajag_20") {
            desenharFlorajag20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "florajag_21") {
            desenharFlorajag21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "florolith_21") {
            desenharFlorolith21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "florolith_20") {
            desenharFlorolith20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "saci-evo2" || u.silhouette === "furacaozinho") {
            desenharFuracaozinho(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "saci" || u.id === "saci" || u.feature === "saci") {
              desenharSaci(n, u, r, l, o, f);
              return;
          }
          if (u.silhouette === "galvombra_20") {
            desenharGalvombra20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "galvombra_21") {
            desenharGalvombra21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "lotussauro_20") {
            desenharLotussauro20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "lotussauro_21") {
            desenharLotussauro21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "magmarmor_20") {
            desenharMagmarmor20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "magmarmor_21") {
            desenharMagmarmor21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "noctibra_20") {
            desenharNoctibra20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "noctibra_21") {
            desenharNoctibra21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "noctivern_20") {
            desenharNoctivern20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "noctivern_21") {
            desenharNoctivern21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "petraflor_20") {
            desenharPetraflor20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "petraflor_21") {
            desenharPetraflor21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "pyrombra_20") {
            desenharPyrombra20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "pyrombra_21") {
            desenharPyrombra21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochodon_20") {
            desenharRochodon20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochodon_21") {
            desenharRochodon21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochombra_20") {
            desenharRochombra20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochombra_21") {
            desenharRochombra21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "boto") {
            desenharRosalfin(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "sereflor_21") {
            desenharSereflor21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "sereflor_20") {
            desenharSereflor20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tata-alfa" || u.silhouette === "tata_alfa") {
            desenharTataAlfa(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "terrivolt_20") {
            desenharTerrivolt20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "terrivolt_21") {
            desenharTerrivolt21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidalfin_20") {
            desenharTidalfin20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidalfin_21") {
            desenharTidalfin21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidalvolt_20") {
            desenharTidalvolt20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidalvolt_21") {
            desenharTidalvolt21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidolith_21") {
            desenharTidolith21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "tidolith_20") {
            desenharTidolith20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "umbravolt_20") {
            desenharUmbravolt20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "umbravolt_21") {
            desenharUmbravolt21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltaquas_21") {
            desenharVoltaquas21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltaquas_20") {
            desenharVoltaquas20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "volthund_20") {
            desenharVolthund20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "volthund_21") {
            desenharVolthund21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltsombra_21") {
            desenharVoltsombra21(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "voltsombra_20") {
            desenharVoltsombra20(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "curupira" || u.id === "curupira" || u.feature === "curupira") {
            desenharCurupira(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "curupira-marca" || u.id === "curupira-marca" || u.feature === "curupira-marca") {
            desenharCurupiraMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "brasalma" || u.id === "brasalma" || u.feature === "brasalma") {
            desenharBrasalma(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "iara" || u.id === "iara" || u.feature === "iara" || u.silhouette === "cantamar") {
            desenharCantamar(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "iara-marca" || u.id === "iara-marca" || u.feature === "iara-marca" || u.silhouette === "cantamar-marca") {
            desenharCantamarMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "curupira-evo2" || u.id === "curupira-evo2" || u.feature === "curupira-evo2" || u.silhouette === "capoeirao") {
            desenharCapoeirao(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "verdente-3-marca" || u.id === "verdente-3-marca" || u.feature === "verdente-3-marca" || u.silhouette === "devorasselva-marca") {
            desenharDevorasselvaMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "cristalito-3-marca" || u.id === "cristalito-3-marca" || u.feature === "cristalito-3-marca") {
            desenharDiamangolemMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "ecoalma" || u.id === "ecoalma" || u.feature === "ecoalma") {
            desenharEcoalma(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "mula" || u.id === "mula" || u.feature === "mula" || u.silhouette === "galopim") {
            desenharGalopim(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "mula-marca" || u.id === "mula-marca" || u.feature === "mula-marca" || u.silhouette === "galopim-marca") {
            desenharGalopimMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "boitata" || u.id === "boitata" || u.feature === "boitata" || u.silhouette === "ignira") {
            desenharIgnira(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "boitata-marca" || u.id === "boitata-marca" || u.feature === "boitata-marca" || u.silhouette === "ignira-marca") {
            desenharIgniraMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "cuca" || u.id === "cuca" || u.feature === "cuca" || u.silhouette === "jacaruxa") {
            desenharJacaruxa(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "cuca-marca" || u.id === "cuca-marca" || u.feature === "cuca-marca" || u.silhouette === "jacaruxa-marca") {
            desenharJacaruxaMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "lobisomem" || u.id === "lobisomem" || u.feature === "lobisomem" || u.silhouette === "lunauro") {
            desenharLunauro(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "rochodon_20-marca" || u.id === "rochodon_20-marca" || u.feature === "rochodon_20-marca" || u.silhouette === "rochodon-marca") {
            desenharRochodonMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "boto" || u.id === "boto" || u.feature === "boto" || u.silhouette === "rosalfin") {
            desenharRosalfin(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette === "boto-marca" || u.id === "boto-marca" || u.feature === "boto-marca" || u.silhouette === "rosalfin-marca") {
            desenharRosalfinMarca(n, u, r, l, o, f);
            return;
          }
          if (u.silhouette) {
            vJ(n, u, r, l, o, f);
            return;
          }

          o = original_o; // Devolve o tamanho original para o jogo base
          if (u.silhouette) {
            vJ(n, u, r, l, o, f);
            return;
          }
        if ((n.save(), n.translate(r, l + H), $)) n.scale(-1, 1);
        if (v) n.globalAlpha = 0.55;
        if (f.shadow !== !1)
          ((n.fillStyle = "rgba(0,0,0,0.18)"),
            n.beginPath(),
            n.ellipse(0, K * 1.02, K * 0.85, K * 0.22, 0, 0, Math.PI * 2),
            n.fill());
        if (u.glow) {
          let A = n.createRadialGradient(0, 0, K * 0.2, 0, 0, K * 1.7);
          (A.addColorStop(0, "rgba(255,255,220,0.55)"),
            A.addColorStop(1, "rgba(255,255,220,0)"),
            (n.fillStyle = A),
            n.beginPath(),
            n.arc(0, 0, K * 1.7, 0, Math.PI * 2),
            n.fill());
        }
        let V = $ ? -1 : 1;
        ((n.fillStyle = J),
          n.beginPath(),
          n.ellipse(
            -K * 1.05 * V,
            K * 0.25,
            K * 0.32,
            K * 0.18,
            0.5 * V,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.lineWidth = o * 0.02),
          (n.strokeStyle = e),
          n.stroke());
        let C = n.createLinearGradient(0, -K, 0, K);
        (C.addColorStop(0, m(Z, 35)),
          C.addColorStop(1, Z),
          (n.fillStyle = C),
          n.beginPath(),
          n.ellipse(0, 0, K, K * 0.92, 0, 0, Math.PI * 2),
          n.fill(),
          (n.lineWidth = Math.max(2, o * 0.028)),
          (n.strokeStyle = e),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.55)"),
          n.beginPath(),
          n.ellipse(
            K * 0.08 * V,
            K * 0.38,
            K * 0.5,
            K * 0.34,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = J),
          (n.strokeStyle = e),
          (n.lineWidth = Math.max(1.5, o * 0.02)));
        let D = -K * 0.82;
        if (u.fusionVisual && window.EV_SIGNATURES?.drawFusionTraits)
          window.EV_SIGNATURES.drawFusionTraits(n, u.fusionVisual, { K, Z, J, e, D });
        else if (u.feature === "flame")
          (n.beginPath(),
            n.moveTo(-K * 0.3, D + K * 0.2),
            n.quadraticCurveTo(-K * 0.55, -K * 1.5, 0, -K * 1.15),
            n.quadraticCurveTo(K * 0.55, -K * 1.5, K * 0.3, D + K * 0.2),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "#fde047"),
            n.beginPath(),
            n.moveTo(-K * 0.12, D + K * 0.2),
            n.quadraticCurveTo(-K * 0.2, -K * 1.05, 0, -K * 0.85),
            n.quadraticCurveTo(K * 0.2, -K * 1.05, K * 0.12, D + K * 0.2),
            n.closePath(),
            n.fill());
        else if (u.feature === "horns")
          [-1, 1].forEach((A) => {
            (n.beginPath(),
              n.moveTo(A * K * 0.35, D + K * 0.25),
              n.lineTo(A * K * 0.75, -K * 1.25),
              n.lineTo(A * K * 0.15, -K * 0.95),
              n.closePath(),
              n.fill(),
              n.stroke());
          });
        else if (u.feature === "spikes")
          for (let A = -2; A <= 2; A++)
            (n.beginPath(),
              n.moveTo(A * K * 0.32 - K * 0.1, D + K * 0.3),
              n.lineTo(A * K * 0.32, -K * 1.15 - Math.abs(A) * -K * 0.06),
              n.lineTo(A * K * 0.32 + K * 0.1, D + K * 0.3),
              n.closePath(),
              n.fill(),
              n.stroke());
        else if (u.feature === "leaf")
          ((n.fillStyle = "#22c55e"),
            n.beginPath(),
            n.ellipse(0, -K * 1.12, K * 0.34, K * 0.16, 0.5, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            n.beginPath(),
            n.moveTo(0, -K * 0.95),
            n.lineTo(0, -K * 1.25),
            n.stroke());
        else if (u.feature === "fins")
          [-1, 1].forEach((A) => {
            (n.beginPath(),
              n.ellipse(
                A * K * 0.95,
                -K * 0.1,
                K * 0.22,
                K * 0.42,
                A * 0.5,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          });
        else if (u.feature === "wings")
          [-1, 1].forEach((A) => {
            ((n.fillStyle = "rgba(255,255,255,0.75)"),
              n.beginPath(),
              n.ellipse(
                A * K * 1,
                -K * 0.35,
                K * 0.42,
                K * 0.24,
                A * -0.6,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          });
        else if (u.feature === "pointy")
          [-1, 1].forEach((A) => {
            ((n.fillStyle = Z),
              n.beginPath(),
              n.moveTo(A * K * 0.55, D + K * 0.3),
              n.lineTo(A * K * 0.72, -K * 1.2),
              n.lineTo(A * K * 0.18, -K * 0.8),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#fbcfe8"),
              n.beginPath(),
              n.moveTo(A * K * 0.5, D + K * 0.28),
              n.lineTo(A * K * 0.6, -K * 0.95),
              n.lineTo(A * K * 0.3, -K * 0.72),
              n.closePath(),
              n.fill());
          });
        else
          [-1, 1].forEach((A) => {
            ((n.fillStyle = Z),
              n.beginPath(),
              n.arc(A * K * 0.62, D + K * 0.15, K * 0.3, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#fbcfe8"),
              n.beginPath(),
              n.arc(A * K * 0.62, D + K * 0.15, K * 0.14, 0, Math.PI * 2),
              n.fill());
          });
        let W = K * 0.34 * V,
          B = -K * 0.12;
        if (
          ([-1, 1].forEach((A) => {
            ((n.fillStyle = "#fff"),
              n.beginPath(),
              n.ellipse(W + A * K * 0, B, K * 0.2, K * 0.26, 0, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(W + A * K * 0.02, B + K * 0.03, K * 0.1, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(
                W + A * K * 0.02 - K * 0.035,
                B - K * 0.02,
                K * 0.035,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          (n.fillStyle = "rgba(244,114,182,0.7)"),
          [-1, 1].forEach((A) => {
            (n.beginPath(),
              n.arc(A * K * 0.58 * V, K * 0.22, K * 0.11, 0, Math.PI * 2),
              n.fill());
          }),
          (n.strokeStyle = "#334155"),
          (n.lineWidth = Math.max(1.5, o * 0.018)),
          n.beginPath(),
          n.arc(
            K * 0.05 * V,
            K * 0.28,
            K * 0.12,
            0.15 * Math.PI,
            0.85 * Math.PI,
          ),
          n.stroke(),
          (n.fillStyle = e),
          [-1, 1].forEach((A) => {
            (n.beginPath(),
              n.ellipse(
                A * K * 0.45,
                K * 0.92,
                K * 0.2,
                K * 0.12,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          v)
        )
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, o * 0.03)),
            [-1, 1].forEach((A) => {
              let P = A * K * 0.34 * V;
              (n.beginPath(),
                n.moveTo(P - K * 0.1, B - K * 0.12),
                n.lineTo(P + K * 0.1, B + K * 0.12),
                n.moveTo(P + K * 0.1, B - K * 0.12),
                n.lineTo(P - K * 0.1, B + K * 0.12),
                n.stroke());
            }));
        n.restore();
      }
      function vJ(n, u, r, l, o, f = {}) {
        let { flip: $, t: _ = 0, fainted: v } = f,
          Z = On[u.types[0]].color,
          J = m(Z, -70),
          e = On[u.types[0]].light,
          Q = z3(u.id),
          M = 1 + u.stage * 0.28,
          H = Math.sin(_ * 3 + Q * 6) * o * 0.02,
          K = o * 0.3 * M,
          V = Math.max(2, o * 0.025);
        if ((n.save(), n.translate(r, l + H), $)) n.scale(-1, 1);
        if (v) n.globalAlpha = 0.55;
        if (
          ((n.lineJoin = "round"),
          (n.fillStyle = "rgba(0,0,0,0.18)"),
          n.beginPath(),
          n.ellipse(0, K * 1.02, K * 0.85, K * 0.22, 0, 0, Math.PI * 2),
          n.fill(),
          u.glow)
        ) {
          let B = n.createRadialGradient(0, 0, K * 0.2, 0, 0, K * 1.7);
          (B.addColorStop(0, "rgba(255,255,220,0.55)"),
            B.addColorStop(1, "rgba(255,255,220,0)"),
            (n.fillStyle = B),
            n.beginPath(),
            n.arc(0, 0, K * 1.7, 0, Math.PI * 2),
            n.fill());
        }
        let C = (u.silhouette || u.id || "").toLowerCase(),
          D =
            u.id === "pyrothion"
              ? "pyrothion"
              : u.id === "pyrothion_20"
                ? "pyrothion_igneo"
                : u.id === "pyrothion_21"
                  ? "pyrothion_rochoso"
                  : u.id === "umbrak"
                    ? "umbrak"
                    : u.id === "umbrak_20"
                      ? "umbrak_umbral"
                      : u.id === "umbrak_21"
                        ? "umbrak_umbral_armored"
                        : C,
          W = u.types[1] ? On[u.types[1]].color : m(Z, 60);
        switch (D) {
          case "pyrothion":
            qJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "pyrothion_igneo":
            OJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "pyrothion_rochoso":
            EJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "umbrak":
            LJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "umbrak_umbral":
            VQ(n, K, o, _, Z, J, e, V, v, !1);
            break;
          case "umbrak_umbral_armored":
            VQ(n, K, o, _, Z, J, e, V, v, !0);
            break;
          case "maw":
            XJ(n, K, _, Z, J, V);
            break;
          case "jelly":
            BJ(n, K, o, _, Z, J, e, V);
            break;
          case "serpent":
            AJ(n, K, o, _, Z, J, V);
            break;
          case "stormbird":
            FJ(n, K, o, _, Z, J, V);
            break;
          case "crystalgolem":
            PJ(n, K, _, Z, J, V);
            break;
          case "moth":
            YJ(n, K, _, Z, J, e, V);
            break;
          case "embercub":
            CJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "aquaffin":
            QJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "leafit":
            _J(n, K, o, _, Z, J, e, V, v);
            break;
          case "voltpup":
            ZJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "volthund":
            NJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "terrivolt":
            KJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "pebblor":
            JJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "rochodon":
            mJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "magmarmor":
            gJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "umbrae":
            eJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "noctivern":
            VJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "galvombra":
            WJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "tidalfin":
            UJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "algaffin":
            MJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "florajag":
            HJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "lotussauro":
            DJ(n, K, o, _, Z, J, e, V, v);
            break;
          case "tidalvolt":
            U3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "voltaquas":
            M3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "sereflor":
            H3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "abissalga":
            D3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "floramar":
            zJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "voltmar":
            iJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "brascal":
            GJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "petrombra":
            TJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "brasombra":
            kJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "florapedra":
            IJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "marepedra":
            SJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "faebran":
            jJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "faesombra":
            yJ(n, K, o, _, Z, W, J, e, V, v);
            break;
          case "vulcabra":
            C3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "terrascal":
            q3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "faebluma":
            O3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "faevolta":
            E3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "rochombra":
            L3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "umbralith":
            X3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "pyrombra":
            B3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "noctibra":
            A3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "florolith":
            F3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "petraflor":
            P3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "aquaroch":
            Y3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "tidolith":
            m3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "voltsombra":
            g3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "umbravolt":
            w3(n, K, o, _, Z, W, J, e, V, v, 0);
            break;
          case "tidalvolt_20":
            U3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "tidalvolt_21":
            U3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "voltaquas_20":
            M3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "voltaquas_21":
            M3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "sereflor_20":
            H3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "sereflor_21":
            H3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "abissalga_20":
            D3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "abissalga_21":
            D3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "vulcabra_20":
            C3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "vulcabra_21":
            C3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "terrascal_20":
            q3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "terrascal_21":
            q3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "faebluma_20":
            O3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "faebluma_21":
            O3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "faevolta_20":
            E3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "faevolta_21":
            E3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "rochombra_20":
            L3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "rochombra_21":
            L3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "umbralith_20":
            X3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "umbralith_21":
            X3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "pyrombra_20":
            B3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "pyrombra_21":
            B3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "noctibra_20":
            A3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "noctibra_21":
            A3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "florolith_20":
            F3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "florolith_21":
            F3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "petraflor_20":
            P3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "petraflor_21":
            P3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "aquaroch_20":
            Y3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "aquaroch_21":
            Y3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "tidolith_20":
            m3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "tidolith_21":
            m3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "voltsombra_20":
            g3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "voltsombra_21":
            g3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          case "umbravolt_20":
            w3(n, K, o, _, Z, W, J, e, V, v, 1);
            break;
          case "umbravolt_21":
            w3(n, K, o, _, Z, W, J, e, V, v, 2);
            break;
          default:
            wJ(n, K, o, _, Z, W, J, e, V, v, D);
            break;
        }
        n.restore();
      }
      function ou(n, u, r, l, o) {
        (n.beginPath(),
          n.moveTo(u - l * 0.55, r),
          n.bezierCurveTo(
            u - l * 0.62,
            r - l * 0.7,
            u - l * 0.3 + o * l * 0.07,
            r - l * 0.92,
            u + o * l * 0.12,
            r - l * 1.45,
          ),
          n.bezierCurveTo(
            u + l * 0.36 + o * l * 0.07,
            r - l * 0.92,
            u + l * 0.62,
            r - l * 0.62,
            u + l * 0.55,
            r,
          ),
          n.quadraticCurveTo(u, r + l * 0.24, u - l * 0.55, r),
          n.closePath());
      }
      function QJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018);
        (n.save(), n.translate(J * u * 0.06, 0));
        let Q = -u * 0.58,
          M = J * u * 0.08;
        ((n.fillStyle = m(o, -18)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.85),
          n.beginPath(),
          n.moveTo(Q, 0),
          n.bezierCurveTo(
            Q - u * 0.22,
            -u * 0.1 + M,
            -u * 1.1,
            -u * 0.22 + M,
            -u * 1.32,
            -u * 0.42 + M,
          ),
          n.bezierCurveTo(
            -u * 1.18,
            -u * 0.22 + M,
            -u * 0.9,
            -u * 0.08 + M,
            Q - u * 0.08,
            -u * 0.04,
          ),
          n.bezierCurveTo(
            Q - u * 0.18,
            -u * 0.02,
            Q - u * 0.18,
            u * 0.02,
            Q - u * 0.08,
            u * 0.04,
          ),
          n.bezierCurveTo(
            -u * 0.9,
            u * 0.08 + M * 0.8,
            -u * 1.18,
            u * 0.22 + M,
            -u * 1.32,
            u * 0.42 + M,
          ),
          n.bezierCurveTo(
            -u * 1.1,
            u * 0.22 + M,
            Q - u * 0.22,
            u * 0.1 + M * 0.8,
            Q,
            0,
          ),
          n.closePath());
        let H = n.createLinearGradient(Q, -u * 0.3, -u * 1.25, u * 0.2);
        (H.addColorStop(0, m(o, 18)),
          H.addColorStop(1, m(o, -22)),
          (n.fillStyle = H),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = "rgba(255,255,255,0.22)"),
          (n.lineWidth = e * 0.8),
          n.beginPath(),
          n.moveTo(Q - u * 0.12, -u * 0.06),
          n.lineTo(-u * 1.18, -u * 0.3 + M),
          n.stroke(),
          n.beginPath(),
          n.moveTo(Q - u * 0.12, u * 0.06),
          n.lineTo(-u * 1.18, u * 0.3 + M),
          n.stroke(),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let K = n.createLinearGradient(0, -u * 0.6, 0, u * 0.7);
        (K.addColorStop(0, m(o, 40)),
          K.addColorStop(1, o),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(u * 0.88, 0),
          n.bezierCurveTo(
            u * 0.88,
            -u * 0.46,
            u * 0.38,
            -u * 0.68,
            u * 0.02,
            -u * 0.58,
          ),
          n.bezierCurveTo(-u * 0.34, -u * 0.52, -u * 0.58, -u * 0.24, Q, 0),
          n.bezierCurveTo(
            -u * 0.58,
            u * 0.24,
            -u * 0.34,
            u * 0.52,
            u * 0.02,
            u * 0.58,
          ),
          n.bezierCurveTo(u * 0.38, u * 0.68, u * 0.88, u * 0.46, u * 0.88, 0),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.1,
            -u * 0.3,
            u * 0.32,
            u * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.74),
          n.beginPath(),
          n.ellipse(u * 0.06, u * 0.24, u * 0.46, u * 0.3, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = "rgba(0,0,0,0.08)"),
          (n.lineWidth = e * 0.7),
          n.beginPath(),
          n.moveTo(-u * 0.32, -u * 0.18),
          n.quadraticCurveTo(u * 0.02, -u * 0.12, u * 0.32, -u * 0.08),
          n.stroke(),
          n.beginPath(),
          n.moveTo(-u * 0.3, u * 0.06),
          n.quadraticCurveTo(u * 0.04, u * 0.12, u * 0.34, u * 0.16),
          n.stroke(),
          (n.fillStyle = m(o, -12)),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.ellipse(
            u * 0.12,
            u * 0.28,
            u * 0.3,
            u * 0.16,
            0.35,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = "rgba(255,255,255,0.22)"),
          (n.lineWidth = e * 0.6),
          n.beginPath(),
          n.moveTo(u * 0.04, u * 0.2),
          n.lineTo(u * 0.22, u * 0.32),
          n.stroke(),
          n.beginPath(),
          n.moveTo(u * 0.06, u * 0.26),
          n.lineTo(u * 0.2, u * 0.36),
          n.stroke(),
          (n.fillStyle = m(o, -22)),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(-u * 0.1, -u * 0.54),
          n.quadraticCurveTo(-u * 0.02, -u * 0.78, u * 0.1, -u * 0.56),
          n.quadraticCurveTo(u * 0.02, -u * 0.46, -u * 0.1, -u * 0.54),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#e0f2fe"),
          (n.globalAlpha = 0.96),
          n.beginPath(),
          n.ellipse(u * 0.72, u * 0.04, u * 0.22, u * 0.16, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(u * 0.88, -u * 0.02, u * 0.05, u * 0.04, 0, 0, Math.PI * 2),
          n.fill(),
          n.restore());
        let V = -u * 0.12,
          C = u * 0.38;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((D) => {
              let W = C,
                B = V + D * u * 0.08;
              (n.beginPath(),
                n.moveTo(W - u * 0.08, B - u * 0.08),
                n.lineTo(W + u * 0.08, B + u * 0.08),
                n.moveTo(W + u * 0.08, B - u * 0.08),
                n.lineTo(W - u * 0.08, B + u * 0.08),
                n.stroke());
            }));
        else
          [
            [C, V],
            [C - u * 0.22, V + u * 0.06],
          ].forEach(([W, B], A) => {
            let P = A === 0 ? 1 : 0.82;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(W, B, u * 0.09 * P, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(
                W - u * 0.028 * P,
                B - u * 0.028 * P,
                u * 0.03 * P,
                0,
                Math.PI * 2,
              ),
              n.fill());
          });
        if (!v)
          ((n.fillStyle = "rgba(244,114,182,0.42)"),
            n.beginPath(),
            n.arc(u * 0.52, u * 0.18, u * 0.09, 0, Math.PI * 2),
            n.fill());
        if (!v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = e),
            n.beginPath(),
            n.arc(u * 0.62, u * 0.16, u * 0.1, 0.15 * Math.PI, 0.75 * Math.PI),
            n.stroke());
        if (!v)
          [
            {
              x: -u * 0.82,
              y: -u * 0.52 + Math.sin(l * 2.1) * u * 0.06,
              r: u * 0.07,
            },
            {
              x: -u * 0.96,
              y: -u * 0.72 + Math.sin(l * 2.7 + 1) * u * 0.05,
              r: u * 0.05,
            },
            {
              x: u * 0.9,
              y: -u * 0.22 + Math.sin(l * 3.2 + 2) * u * 0.04,
              r: u * 0.04,
            },
          ].forEach((W) => {
            ((n.fillStyle = "rgba(255,255,255,0.55)"),
              (n.strokeStyle = "rgba(56,189,248,0.45)"),
              (n.lineWidth = Math.max(1, e * 0.7)),
              n.beginPath(),
              n.arc(W.x, W.y, W.r, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.85)"),
              n.beginPath(),
              n.arc(
                W.x - W.r * 0.25,
                W.y - W.r * 0.22,
                W.r * 0.28,
                0,
                Math.PI * 2,
              ),
              n.fill());
          });
      }
      function _J(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = J * u * 0.05;
        ((n.strokeStyle = m(o, -45)), (n.lineWidth = e * 1.1));
        let M = u * 0.82;
        ([
          [-u * 0.14, M, -u * 0.22 + Q],
          [u * 0.14, M, u * 0.22 - Q],
          [0, M + u * 0.06, Q * 0.6],
        ].forEach(([W, B, A], P) => {
          (n.beginPath(),
            n.moveTo(W, B),
            n.quadraticCurveTo(
              W + (A - W) * 0.5 + Math.sin(l * 3 + P) * u * 0.06,
              B + u * 0.22,
              A,
              B + u * 0.32,
            ),
            n.stroke(),
            (n.lineWidth = e * 0.6),
            n.beginPath(),
            n.moveTo((W + A) * 0.5, B + u * 0.16),
            n.lineTo((W + A) * 0.5 + (P - 1) * u * 0.08, B + u * 0.24),
            n.stroke(),
            (n.lineWidth = e * 1.1));
        }),
          n.save(),
          n.scale(Z, Z));
        let K = n.createLinearGradient(0, -u * 0.7, 0, u * 0.85);
        (K.addColorStop(0, m(o, 40)),
          K.addColorStop(1, o),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(0, -u * 0.68),
          n.bezierCurveTo(
            -u * 0.32,
            -u * 0.52,
            -u * 0.62,
            -u * 0.1,
            -u * 0.52,
            u * 0.42,
          ),
          n.bezierCurveTo(
            -u * 0.38,
            u * 0.72,
            -u * 0.16,
            u * 0.86,
            0,
            u * 0.88,
          ),
          n.bezierCurveTo(
            u * 0.16,
            u * 0.86,
            u * 0.38,
            u * 0.72,
            u * 0.52,
            u * 0.42,
          ),
          n.bezierCurveTo(
            u * 0.62,
            -u * 0.1,
            u * 0.32,
            -u * 0.52,
            0,
            -u * 0.68,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.26,
            u * 0.28,
            u * 0.13,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.52),
          n.beginPath(),
          n.ellipse(0, u * 0.18, u * 0.3, u * 0.34, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = m(o, -28)),
          (n.lineWidth = e * 0.85),
          (n.globalAlpha = 0.42),
          n.beginPath(),
          n.moveTo(0, -u * 0.42),
          n.lineTo(0, u * 0.66),
          n.stroke(),
          (n.lineWidth = e * 0.6));
        for (let W = -2; W <= 2; W++) {
          if (W === 0) continue;
          let B = u * 0.06 + W * u * 0.18;
          (n.beginPath(),
            n.moveTo(0, B),
            n.lineTo(W * u * 0.22, B - u * 0.12),
            n.stroke());
        }
        n.globalAlpha = 1;
        let V = Math.sin(l * 2.6) * 0.18;
        (n.save(), n.translate(0, -u * 0.68), n.rotate(V));
        let C = n.createLinearGradient(-u * 0.1, 0, u * 0.1, -u * 0.6);
        (C.addColorStop(0, m(o, 18)),
          C.addColorStop(1, "#22c55e"),
          (n.fillStyle = C),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(0, 0),
          n.bezierCurveTo(
            u * 0.18,
            -u * 0.16,
            u * 0.22,
            -u * 0.48,
            0,
            -u * 0.64,
          ),
          n.bezierCurveTo(-u * 0.22, -u * 0.48, -u * 0.18, -u * 0.16, 0, 0),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = m("#22c55e", -30)),
          (n.lineWidth = e * 0.6),
          n.beginPath(),
          n.moveTo(0, -u * 0.06),
          n.lineTo(0, -u * 0.52),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.22)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.06,
            -u * 0.32,
            u * 0.07,
            u * 0.04,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          [-1, 1].forEach((W) => {
            ((n.fillStyle = m(o, -8)),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.9),
              n.beginPath(),
              n.ellipse(
                W * u * 0.52,
                u * 0.18,
                u * 0.14,
                u * 0.22,
                W * 0.22,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          n.restore());
        let D = -u * 0.08;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((W) => {
              let B = W * u * 0.2;
              (n.beginPath(),
                n.moveTo(B - u * 0.08, D - u * 0.08),
                n.lineTo(B + u * 0.08, D + u * 0.08),
                n.moveTo(B + u * 0.08, D - u * 0.08),
                n.lineTo(B - u * 0.08, D + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((W) => {
            let B = W * u * 0.2;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(B, D, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(B - u * 0.028, D - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
        if (!v)
          ((n.fillStyle = "rgba(244,114,182,0.58)"),
            [-1, 1].forEach((W) => {
              (n.beginPath(),
                n.arc(W * u * 0.36, u * 0.1, u * 0.1, 0, Math.PI * 2),
                n.fill());
            }));
        if (!v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = e),
            n.beginPath(),
            n.moveTo(-u * 0.08, u * 0.22),
            n.quadraticCurveTo(0, u * 0.28, u * 0.08, u * 0.22),
            n.stroke());
        if (!v)
          ((n.fillStyle = "rgba(255,255,255,0.72)"),
            n.beginPath(),
            n.arc(
              u * 0.1,
              -u * 0.72 + Math.sin(l * 2.2) * u * 0.02,
              u * 0.045,
              0,
              Math.PI * 2,
            ),
            n.fill());
      }
      function ZJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 18),
          Q = Math.sin(l * 4.2),
          M = m(o, -18);
        (n.save(),
          (n.fillStyle = M),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          [
            { x: -u * 0.24, y: u * 0.88, w: u * 0.26, h: u * 0.2 },
            { x: u * 0.24, y: u * 0.88, w: u * 0.26, h: u * 0.2 },
          ].forEach((P) => {
            (n.beginPath(),
              n.ellipse(P.x, P.y, P.w, P.h, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.22)"),
              n.beginPath(),
              n.ellipse(
                P.x,
                P.y + P.h * 0.22,
                P.w * 0.52,
                P.h * 0.28,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = M));
          }),
          n.restore(),
          n.save());
        let H = u * 0.96 + Q * u * 0.02;
        if (
          (n.translate(0, H),
          n.rotate(e * 0.06),
          (n.fillStyle = "rgba(0,0,0,0.12)"),
          n.beginPath(),
          n.ellipse(u * 0.04, u * 0.16, u * 0.1, u * 0.06, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#f59e0b"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.85),
          n.beginPath(),
          n.moveTo(0, 0),
          n.lineTo(-u * 0.12, u * 0.18),
          n.lineTo(u * 0.02, u * 0.22),
          n.lineTo(-u * 0.04, u * 0.42),
          n.lineTo(u * 0.1, u * 0.2),
          n.lineTo(-u * 0.02, u * 0.12),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#fde68a"),
          (n.globalAlpha = 0.78),
          n.beginPath(),
          n.moveTo(-u * 0.04, u * 0.08),
          n.lineTo(-u * 0.08, u * 0.18),
          n.lineTo(-u * 0.02, u * 0.18),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          !v)
        ) {
          let P = 0.7 + Math.abs(Math.sin(l * 10)) * 0.6;
          ((n.fillStyle = "#fef08a"),
            (n.globalAlpha = 0.85 * P),
            n.beginPath(),
            n.arc(0, u * 0.42, u * 0.055 * P, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(0, u * 0.42, u * 0.022 * P, 0, Math.PI * 2),
            n.fill());
        }
        (n.restore(),
          n.save(),
          [-1, 1].forEach((P) => {
            n.save();
            let U = P * u * 0.32,
              E = -u * 0.04 + e * u * 0.05;
            (n.translate(U, E),
              n.rotate(P * 0.22 + e * 0.48),
              (n.fillStyle = "rgba(254,240,138,0.70)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.75),
              n.beginPath(),
              n.ellipse(
                P * u * 0.28,
                -u * 0.22,
                u * 0.44,
                u * 0.26,
                P * -0.18,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.62),
              (n.globalAlpha = 0.92),
              n.beginPath(),
              n.moveTo(0, 0),
              n.quadraticCurveTo(
                P * u * 0.22,
                -u * 0.18,
                P * u * 0.46,
                -u * 0.28,
              ),
              n.stroke(),
              n.beginPath(),
              n.moveTo(P * u * 0.06, -u * 0.06),
              n.quadraticCurveTo(
                P * u * 0.18,
                -u * 0.32,
                P * u * 0.3,
                -u * 0.44,
              ),
              n.stroke(),
              n.beginPath(),
              n.moveTo(P * u * -0.02, u * 0.04),
              n.quadraticCurveTo(
                P * u * 0.12,
                -u * 0.1,
                P * u * 0.32,
                -u * 0.08,
              ),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.fillStyle = "rgba(255,255,255,0.32)"),
              n.beginPath(),
              n.ellipse(
                P * u * 0.34,
                -u * 0.3,
                u * 0.12,
                u * 0.06,
                P * -0.2,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.restore(),
              n.save());
            let q = P * u * 0.26,
              L = u * 0.18 + e * u * -0.04;
            (n.translate(q, L),
              n.rotate(P * 0.36 + e * -0.38),
              (n.fillStyle = "rgba(254,240,138,0.58)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.65),
              n.beginPath(),
              n.ellipse(
                P * u * 0.22,
                -u * 0.08,
                u * 0.32,
                u * 0.18,
                P * -0.12,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.55),
              (n.globalAlpha = 0.9),
              n.beginPath(),
              n.moveTo(0, 0),
              n.quadraticCurveTo(
                P * u * 0.16,
                -u * 0.08,
                P * u * 0.28,
                -u * 0.12,
              ),
              n.stroke(),
              (n.globalAlpha = 1),
              n.restore());
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let K = n.createLinearGradient(0, -u * 0.62, 0, u * 0.96);
        (K.addColorStop(0, m(o, 40)),
          K.addColorStop(1, o),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.18, u * 0.62, u * 0.84, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          n.save(),
          n.beginPath(),
          n.ellipse(0, u * 0.18, u * 0.62, u * 0.84, 0, 0, Math.PI * 2),
          n.clip(),
          (n.fillStyle = "#1e293b"),
          [u * 0.02, u * 0.32, u * 0.62].forEach((P, U) => {
            let E = u * (0.56 - U * 0.04),
              q = u * 0.16;
            (n.beginPath(),
              n.ellipse(0, P, E, q, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = "#0f172a"),
              (n.lineWidth = J * 0.6),
              (n.globalAlpha = 0.55),
              n.stroke(),
              (n.globalAlpha = 1));
          }),
          n.restore(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.18,
            u * 0.26,
            u * 0.13,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.62),
          n.beginPath(),
          n.ellipse(0, u * 0.42, u * 0.3, u * 0.28, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1));
        let C = 0,
          D = -u * 0.56,
          W = u * 0.46,
          B = n.createLinearGradient(C, D - W, C, D + W);
        (B.addColorStop(0, m(o, 40)),
          B.addColorStop(1, o),
          (n.fillStyle = B),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.arc(C, D, W, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            C - W * 0.22,
            D - W * 0.2,
            W * 0.2,
            W * 0.1,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          [-1, 1].forEach((P) => {
            ((n.fillStyle = m(o, -8)),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.9),
              n.beginPath(),
              n.ellipse(
                P * u * 0.56,
                u * 0.1,
                u * 0.16,
                u * 0.22,
                P * 0.22,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((P) => {
            let U = P * u * 0.18,
              E = -u * 0.84,
              q = Math.sin(l * 2.8 + P) * u * 0.04,
              L = Math.cos(l * 3.2 + P * 0.7) * u * 0.04,
              Y = P * (u * 0.4 + q),
              G = -u * 1.18 + L;
            ((n.strokeStyle = f),
              (n.lineWidth = J * 0.85),
              n.beginPath(),
              n.moveTo(U, E),
              n.quadraticCurveTo(P * u * 0.3, -u * 1.04, Y, G),
              n.stroke());
            let d = 0.78 + Math.abs(Math.sin(l * 12 + P * 1.7)) * 0.62;
            if (!v)
              ((n.fillStyle = "rgba(253,224,71,0.52)"),
                (n.globalAlpha = 0.85 * d),
                n.beginPath(),
                n.arc(Y, G, u * 0.2 * d, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
            if (
              ((n.fillStyle = "#facc15"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.arc(Y, G, u * 0.11 * d, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(
                Y - u * 0.02 * d,
                G - u * 0.02 * d,
                u * 0.036 * d,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              !v && d > 1)
            )
              ((n.fillStyle = "#fef08a"),
                (n.globalAlpha = 0.92),
                n.beginPath(),
                n.arc(Y + u * 0.02, G + u * 0.02, u * 0.025, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
          }),
          n.restore());
        let A = -u * 0.56;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((P) => {
              let U = P * u * 0.18;
              (n.beginPath(),
                n.moveTo(U - u * 0.08, A - u * 0.08),
                n.lineTo(U + u * 0.08, A + u * 0.08),
                n.moveTo(U + u * 0.08, A - u * 0.08),
                n.lineTo(U - u * 0.08, A + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((P) => {
            let U = P * u * 0.18;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(U, A, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(U - u * 0.028, A - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
        if (!v) {
          ((n.fillStyle = "rgba(244,114,182,0.48)"),
            [-1, 1].forEach((P) => {
              (n.beginPath(),
                n.arc(P * u * 0.32, -u * 0.36, u * 0.1, 0, Math.PI * 2),
                n.fill());
            }),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(-u * 0.1, -u * 0.36),
            n.quadraticCurveTo(0, -u * 0.3, u * 0.1, -u * 0.36),
            n.stroke());
          for (let P = 0; P < 3; P++) {
            let U = u * 0.18 + Math.sin(l * 3.4 + P * 1.9) * u * 0.62,
              E =
                -u * 0.62 -
                Math.abs(Math.cos(l * 3 + P)) * u * 0.22 +
                Math.sin(l * 6 + P) * u * 0.05,
              q = 0.32 + Math.abs(Math.sin(l * 6 + P * 2.3)) * 0.56;
            ((n.globalAlpha = q),
              (n.fillStyle = P % 2 === 0 ? "#fef08a" : "#facc15"),
              n.beginPath(),
              n.arc(U, E, u * 0.032, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(U, E, u * 0.014, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          }
        }
      }
      function NJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 18),
          Q = Math.sin(l * 4.2),
          M = Math.sin(l * 7.5);
        n.save();
        let H = m(o, -16);
        ((n.fillStyle = H),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          [
            { x: -u * 0.32, y: u * 0.92, w: u * 0.3, h: u * 0.26, ang: -0.12 },
            { x: u * 0.32, y: u * 0.92, w: u * 0.3, h: u * 0.26, ang: 0.12 },
          ].forEach((U) => {
            (n.save(),
              n.translate(U.x, U.y),
              n.rotate(U.ang),
              n.beginPath(),
              n.ellipse(0, 0, U.w, U.h, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.22)"),
              n.beginPath(),
              n.ellipse(
                0,
                U.h * 0.18,
                U.w * 0.48,
                U.h * 0.24,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = H),
              n.restore());
          }),
          n.restore(),
          n.save(),
          (n.fillStyle = m(o, -8)),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.9),
          [-1, 1].forEach((U) => {
            (n.save(),
              n.translate(U * u * 0.58, u * 0.28 + M * u * 0.02),
              n.rotate(U * 0.18 + M * 0.06),
              n.beginPath(),
              n.ellipse(0, 0, u * 0.14, u * 0.28, U * 0.15, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              n.restore());
          }),
          n.restore(),
          n.save());
        let K = u * 1.02 + Q * u * 0.03;
        if (
          (n.translate(0, K),
          n.rotate(e * 0.08),
          (n.fillStyle = "rgba(0,0,0,0.14)"),
          n.beginPath(),
          n.ellipse(u * 0.06, u * 0.32, u * 0.16, u * 0.08, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#f59e0b"),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.92),
          n.beginPath(),
          n.moveTo(0, -u * 0.06),
          n.lineTo(-u * 0.1, u * 0.06),
          n.lineTo(u * 0.08, u * 0.22),
          n.lineTo(-u * 0.22, u * 0.48),
          n.lineTo(u * 0.06, u * 0.58),
          n.lineTo(-u * 0.08, u * 0.86),
          n.lineTo(u * 0.18, u * 0.52),
          n.lineTo(u * 0.04, u * 0.28),
          n.lineTo(u * 0.12, u * 0.1),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#fde68a"),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.moveTo(-u * 0.02, u * 0.02),
          n.lineTo(-u * 0.14, u * 0.36),
          n.lineTo(-u * 0.02, u * 0.4),
          n.lineTo(u * 0.02, u * 0.16),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          !v)
        ) {
          let U = 0.75 + Math.abs(Math.sin(l * 11)) * 0.7;
          if (
            ((n.fillStyle = "rgba(254,240,138,0.55)"),
            (n.globalAlpha = 0.9 * U),
            n.beginPath(),
            n.arc(0, u * 0.86, u * 0.14 * U, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#fef08a"),
            (n.globalAlpha = 0.95 * U),
            n.beginPath(),
            n.arc(0, u * 0.86, u * 0.08 * U, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(u * 0.01, u * 0.84, u * 0.032 * U, 0, Math.PI * 2),
            n.fill(),
            U > 1.1)
          )
            ((n.strokeStyle = "#fff"),
              (n.lineWidth = J * 0.6),
              (n.globalAlpha = 0.9),
              n.beginPath(),
              n.moveTo(0, u * 0.86),
              n.lineTo(u * 0.12 + e * u * 0.06, u * 1.02),
              n.stroke(),
              n.beginPath(),
              n.moveTo(0, u * 0.86),
              n.lineTo(-u * 0.1 + e * u * -0.04, u * 1.04),
              n.stroke(),
              (n.globalAlpha = 1));
        }
        (n.restore(),
          n.save(),
          [-1, 1].forEach((U) => {
            n.save();
            let E = U * u * 0.42,
              q = -u * 0.08 + e * u * 0.07;
            (n.translate(E, q),
              n.rotate(U * 0.18 + e * 0.58),
              (n.fillStyle = "rgba(254,240,138,0.78)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.78),
              n.beginPath(),
              n.moveTo(0, 0),
              n.lineTo(U * u * 0.18, -u * 0.12),
              n.lineTo(U * u * 0.62, -u * 0.34),
              n.lineTo(U * u * 0.52, -u * 0.48),
              n.lineTo(U * u * 0.78, -u * 0.62),
              n.lineTo(U * u * 0.38, -u * 0.58),
              n.lineTo(U * u * 0.12, -u * 0.32),
              n.lineTo(U * u * 0.02, -u * 0.18),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.68),
              (n.globalAlpha = 0.95),
              n.beginPath(),
              n.moveTo(0, -u * 0.04),
              n.lineTo(U * u * 0.22, -u * 0.22),
              n.lineTo(U * u * 0.44, -u * 0.32),
              n.lineTo(U * u * 0.62, -u * 0.5),
              n.stroke(),
              n.beginPath(),
              n.moveTo(U * u * 0.06, -u * 0.1),
              n.lineTo(U * u * 0.32, -u * 0.24),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.fillStyle = "rgba(255,255,255,0.34)"),
              n.beginPath(),
              n.ellipse(
                U * u * 0.42,
                -u * 0.38,
                u * 0.16,
                u * 0.07,
                U * -0.2,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.restore(),
              n.save());
            let L = U * u * 0.36,
              Y = u * 0.18 + e * u * -0.06;
            (n.translate(L, Y),
              n.rotate(U * 0.32 + e * -0.46),
              (n.fillStyle = "rgba(254,240,138,0.64)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.moveTo(0, 0),
              n.lineTo(U * u * 0.14, -u * 0.08),
              n.lineTo(U * u * 0.42, -u * 0.2),
              n.lineTo(U * u * 0.34, -u * 0.3),
              n.lineTo(U * u * 0.52, -u * 0.38),
              n.lineTo(U * u * 0.22, -u * 0.3),
              n.lineTo(U * u * 0.04, -u * 0.12),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.6),
              (n.globalAlpha = 0.92),
              n.beginPath(),
              n.moveTo(0, -u * 0.02),
              n.lineTo(U * u * 0.3, -u * 0.22),
              n.stroke(),
              (n.globalAlpha = 1),
              n.restore());
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let V = n.createLinearGradient(0, -u * 0.78, 0, u * 1.08);
        (V.addColorStop(0, m(o, 40)),
          V.addColorStop(1, o),
          (n.fillStyle = V),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(-u * 0.42, -u * 0.42),
          n.bezierCurveTo(
            -u * 0.58,
            -u * 0.18,
            -u * 0.62,
            u * 0.28,
            -u * 0.46,
            u * 0.68,
          ),
          n.bezierCurveTo(
            -u * 0.32,
            u * 0.94,
            -u * 0.12,
            u * 1.04,
            0,
            u * 1.06,
          ),
          n.bezierCurveTo(
            u * 0.12,
            u * 1.04,
            u * 0.32,
            u * 0.94,
            u * 0.46,
            u * 0.68,
          ),
          n.bezierCurveTo(
            u * 0.62,
            u * 0.28,
            u * 0.58,
            -u * 0.18,
            u * 0.42,
            -u * 0.42,
          ),
          n.bezierCurveTo(
            u * 0.22,
            -u * 0.68,
            -u * 0.22,
            -u * 0.68,
            -u * 0.42,
            -u * 0.42,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          n.save(),
          n.beginPath(),
          n.moveTo(-u * 0.42, -u * 0.42),
          n.bezierCurveTo(
            -u * 0.58,
            -u * 0.18,
            -u * 0.62,
            u * 0.28,
            -u * 0.46,
            u * 0.68,
          ),
          n.bezierCurveTo(
            -u * 0.32,
            u * 0.94,
            -u * 0.12,
            u * 1.04,
            0,
            u * 1.06,
          ),
          n.bezierCurveTo(
            u * 0.12,
            u * 1.04,
            u * 0.32,
            u * 0.94,
            u * 0.46,
            u * 0.68,
          ),
          n.bezierCurveTo(
            u * 0.62,
            u * 0.28,
            u * 0.58,
            -u * 0.18,
            u * 0.42,
            -u * 0.42,
          ),
          n.bezierCurveTo(
            u * 0.22,
            -u * 0.68,
            -u * 0.22,
            -u * 0.68,
            -u * 0.42,
            -u * 0.42,
          ),
          n.closePath(),
          n.clip(),
          [
            { y: -u * 0.08, h: u * 0.18, w: u * 0.58 },
            { y: u * 0.22, h: u * 0.19, w: u * 0.6 },
            { y: u * 0.54, h: u * 0.18, w: u * 0.54 },
            { y: u * 0.82, h: u * 0.14, w: u * 0.38 },
          ].forEach((U) => {
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.ellipse(0, U.y, U.w, U.h, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = "#fde047"),
              (n.lineWidth = J * 0.55),
              (n.globalAlpha = 0.85),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.strokeStyle = "rgba(255,255,255,0.18)"),
              (n.lineWidth = J * 0.4),
              (n.globalAlpha = 0.5),
              n.beginPath(),
              n.ellipse(
                0,
                U.y - U.h * 0.18,
                U.w * 0.72,
                U.h * 0.28,
                0,
                0,
                Math.PI * 2,
              ),
              n.stroke(),
              (n.globalAlpha = 1));
          }),
          n.restore(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.22,
            -u * 0.16,
            u * 0.3,
            u * 0.14,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.58),
          n.beginPath(),
          n.ellipse(0, u * 0.38, u * 0.22, u * 0.42, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = "rgba(0,0,0,0.18)"),
          (n.lineWidth = J * 0.6),
          (n.globalAlpha = 0.7),
          n.beginPath(),
          n.moveTo(-u * 0.42, u * 0.1),
          n.quadraticCurveTo(-u * 0.32, u * 0.36, -u * 0.28, u * 0.68),
          n.stroke(),
          n.beginPath(),
          n.moveTo(u * 0.42, u * 0.1),
          n.quadraticCurveTo(u * 0.32, u * 0.36, u * 0.28, u * 0.68),
          n.stroke(),
          (n.globalAlpha = 1),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let D = n.createLinearGradient(0, -u * 0.82, 0, -u * 0.22);
        (D.addColorStop(0, m(o, 40)),
          D.addColorStop(1, o),
          (n.fillStyle = D),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, -u * 0.32, u * 0.54, u * 0.42, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.16,
            -u * 0.48,
            u * 0.22,
            u * 0.1,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill());
        let W = -u * 0.78,
          B = u * 0.44,
          A = n.createLinearGradient(0, W - B, 0, W + B);
        (A.addColorStop(0, m(o, 40)),
          A.addColorStop(1, m(o, -6)),
          (n.fillStyle = A),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, W, B * 0.98, B * 0.88, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.ellipse(0, W + B * 0.28, B * 0.34, B * 0.26, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, W + B * 0.22, B * 0.08, B * 0.06, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -B * 0.18,
            W - B * 0.18,
            B * 0.18,
            B * 0.08,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((U) => {
            let E = U * u * 0.22,
              q = -u * 0.96,
              L = Math.sin(l * 3.2 + U) * u * 0.06,
              Y = Math.cos(l * 2.9 + U * 0.8) * u * 0.05,
              G = U * (u * 0.52 + L),
              d = -u * 1.42 + Y;
            ((n.strokeStyle = f),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(E, q),
              n.quadraticCurveTo(U * u * 0.36, -u * 1.18, G, d),
              n.stroke());
            let h = 0.82 + Math.abs(Math.sin(l * 13 + U * 1.9)) * 0.68;
            if (!v)
              ((n.fillStyle = "rgba(253,224,71,0.52)"),
                (n.globalAlpha = 0.85 * h),
                n.beginPath(),
                n.arc(G, d, u * 0.28 * h, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1),
                (n.strokeStyle = "#fde047"),
                (n.lineWidth = J * 0.6),
                (n.globalAlpha = 0.62 * h),
                n.beginPath(),
                n.arc(G, d, u * 0.28 * h, 0, Math.PI * 2),
                n.stroke(),
                (n.globalAlpha = 1));
            if (
              ((n.fillStyle = "#facc15"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.75),
              n.beginPath(),
              n.arc(G, d, u * 0.15 * h, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(
                G - u * 0.03 * h,
                d - u * 0.03 * h,
                u * 0.048 * h,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              !v && h > 1.1)
            )
              ((n.fillStyle = "#fef08a"),
                (n.globalAlpha = 0.92),
                n.beginPath(),
                n.arc(G + u * 0.03, d + u * 0.03, u * 0.03, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
          }),
          n.restore());
        let P = -u * 0.78 - u * 0.04;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((U) => {
              let E = U * u * 0.2;
              (n.beginPath(),
                n.moveTo(E - u * 0.1, P - u * 0.1),
                n.lineTo(E + u * 0.1, P + u * 0.1),
                n.moveTo(E + u * 0.1, P - u * 0.1),
                n.lineTo(E - u * 0.1, P + u * 0.1),
                n.stroke());
            }));
        else {
          ([-1, 1].forEach((U) => {
            let E = U * u * 0.2;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(E, P, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(E - u * 0.028, P - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = "#1e293b"),
              (n.lineWidth = J * 0.75),
              (n.globalAlpha = 0.85),
              n.beginPath(),
              n.moveTo(E - u * 0.14, P - u * 0.14),
              n.lineTo(E + u * 0.08, P - u * 0.1),
              n.stroke(),
              (n.globalAlpha = 1));
          }),
            (n.fillStyle = "rgba(244,114,182,0.52)"),
            [-1, 1].forEach((U) => {
              (n.beginPath(),
                n.arc(U * u * 0.34, -u * 0.58, u * 0.11, 0, Math.PI * 2),
                n.fill());
            }),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(-u * 0.12, -u * 0.52),
            n.quadraticCurveTo(0, -u * 0.46, u * 0.12, -u * 0.52),
            n.stroke());
          for (let U = 0; U < 4; U++) {
            let E =
                (U % 2 === 0 ? 1 : -1) *
                (u * 0.48 + Math.sin(l * 4.2 + U * 1.7) * u * 0.12),
              q =
                -u * 0.78 -
                Math.abs(Math.cos(l * 3.6 + U)) * u * 0.28 +
                Math.sin(l * 7 + U) * u * 0.06,
              L = 0.36 + Math.abs(Math.sin(l * 7 + U * 2.1)) * 0.58;
            ((n.globalAlpha = L),
              (n.fillStyle = U % 2 === 0 ? "#fef08a" : "#facc15"),
              n.beginPath(),
              n.arc(E, q, u * 0.038, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(E, q, u * 0.016, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          }
        }
      }
      function KJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 18),
          Q = Math.sin(l * 4.2),
          M = "#b08968",
          H = m(M, -55),
          K = "#e7d8c3",
          V = "#fffbeb";
        (n.save(),
          (n.fillStyle = m(M, -12)),
          (n.strokeStyle = H),
          (n.lineWidth = J),
          [
            { x: -u * 0.34, y: u * 0.9, w: u * 0.32, h: u * 0.28 },
            { x: u * 0.34, y: u * 0.9, w: u * 0.32, h: u * 0.28 },
          ].forEach((E) => {
            if (
              (n.beginPath(),
              n.moveTo(E.x - E.w * 0.5, E.y - E.h * 0.2),
              n.lineTo(E.x + E.w * 0.5, E.y - E.h * 0.24),
              n.lineTo(E.x + E.w * 0.46, E.y + E.h * 0.6),
              n.lineTo(E.x - E.w * 0.46, E.y + E.h * 0.58),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = K),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.6),
              n.beginPath(),
              n.moveTo(E.x, E.y - E.h * 0.08),
              n.lineTo(E.x + E.w * 0.12, E.y + E.h * 0.22),
              n.lineTo(E.x - E.w * 0.1, E.y + E.h * 0.18),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = m(M, -12)),
              !v)
            )
              ((n.strokeStyle = "#fde047"),
                (n.lineWidth = J * 0.5),
                (n.globalAlpha = 0.8),
                n.beginPath(),
                n.moveTo(E.x, E.y),
                n.lineTo(E.x + E.w * 0.08, E.y + E.h * 0.22),
                n.stroke(),
                (n.globalAlpha = 1));
          }),
          n.restore(),
          n.save());
        let C = u * 0.98 + Q * u * 0.02;
        if (
          (n.translate(0, C),
          n.rotate(e * 0.05),
          (n.fillStyle = "rgba(0,0,0,0.14)"),
          n.beginPath(),
          n.ellipse(u * 0.05, u * 0.36, u * 0.18, u * 0.1, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = J),
          n.beginPath(),
          n.ellipse(0, u * 0.08, u * 0.22, u * 0.16, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(0, 0),
          n.lineTo(-u * 0.14, u * 0.24),
          n.lineTo(u * 0.06, u * 0.32),
          n.lineTo(-u * 0.18, u * 0.58),
          n.lineTo(u * 0.08, u * 0.68),
          n.lineTo(-u * 0.06, u * 0.96),
          n.lineTo(u * 0.2, u * 0.6),
          n.lineTo(u * 0.02, u * 0.36),
          n.lineTo(u * 0.14, u * 0.14),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#fffbeb"),
          (n.globalAlpha = 0.92),
          n.beginPath(),
          n.moveTo(-u * 0.04, u * 0.12),
          n.lineTo(-u * 0.1, u * 0.32),
          n.lineTo(u * 0.02, u * 0.28),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = "#fde68a"),
          (n.globalAlpha = 0.78),
          n.beginPath(),
          n.moveTo(0, u * 0.42),
          n.lineTo(-u * 0.08, u * 0.58),
          n.lineTo(u * 0.02, u * 0.56),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          !v)
        ) {
          let E = 0.72 + Math.abs(Math.sin(l * 12)) * 0.7;
          ((n.strokeStyle = "#fef08a"),
            (n.lineWidth = J * 0.85),
            (n.globalAlpha = 0.92 * E),
            n.beginPath(),
            n.moveTo(0, u * 0.1),
            n.lineTo(-u * 0.06, u * 0.36),
            n.lineTo(u * 0.04, u * 0.58),
            n.lineTo(0, u * 0.86),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#fef08a"),
            (n.globalAlpha = 0.9 * E),
            n.beginPath(),
            n.arc(0, u * 0.92, u * 0.07 * E, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(0, u * 0.92, u * 0.028 * E, 0, Math.PI * 2),
            n.fill());
        }
        (n.restore(),
          n.save(),
          [-1, 1].forEach((E) => {
            n.save();
            let q = E * u * 0.4,
              L = -u * 0.06 + e * u * 0.06;
            (n.translate(q, L),
              n.rotate(E * 0.2 + e * 0.52),
              (n.fillStyle = "rgba(254,240,138,0.72)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.78),
              n.beginPath(),
              n.moveTo(0, 0),
              n.lineTo(E * u * 0.16, -u * 0.1),
              n.lineTo(E * u * 0.58, -u * 0.3),
              n.lineTo(E * u * 0.48, -u * 0.44),
              n.lineTo(E * u * 0.72, -u * 0.58),
              n.lineTo(E * u * 0.34, -u * 0.52),
              n.lineTo(E * u * 0.1, -u * 0.26),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = K),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.6),
              n.beginPath(),
              n.moveTo(E * u * 0.58, -u * 0.3),
              n.lineTo(E * u * 0.68, -u * 0.48),
              n.lineTo(E * u * 0.48, -u * 0.44),
              n.closePath(),
              n.fill(),
              n.stroke(),
              n.beginPath(),
              n.moveTo(E * u * 0.48, -u * 0.44),
              n.lineTo(E * u * 0.72, -u * 0.58),
              n.lineTo(E * u * 0.56, -u * 0.58),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.6),
              (n.globalAlpha = 0.9),
              n.beginPath(),
              n.moveTo(0, -u * 0.04),
              n.lineTo(E * u * 0.36, -u * 0.26),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.fillStyle = "rgba(255,255,255,0.28)"),
              n.beginPath(),
              n.ellipse(
                E * u * 0.32,
                -u * 0.32,
                u * 0.12,
                u * 0.06,
                E * -0.15,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.restore(),
              n.save());
            let Y = E * u * 0.34,
              G = u * 0.16 + e * u * -0.05;
            (n.translate(Y, G),
              n.rotate(E * 0.3 + e * -0.42),
              (n.fillStyle = "rgba(254,240,138,0.58)"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.68),
              n.beginPath(),
              n.moveTo(0, 0),
              n.lineTo(E * u * 0.12, -u * 0.06),
              n.lineTo(E * u * 0.38, -u * 0.16),
              n.lineTo(E * u * 0.3, -u * 0.26),
              n.lineTo(E * u * 0.46, -u * 0.32),
              n.lineTo(E * u * 0.2, -u * 0.24),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#facc15"),
              (n.lineWidth = J * 0.55),
              (n.globalAlpha = 0.88),
              n.beginPath(),
              n.moveTo(0, -u * 0.02),
              n.lineTo(E * u * 0.24, -u * 0.16),
              n.stroke(),
              (n.globalAlpha = 1),
              n.restore());
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let D = n.createLinearGradient(0, -u * 0.72, 0, u * 1.02);
        if (
          (D.addColorStop(0, m(o, 40)),
          D.addColorStop(1, o),
          (n.fillStyle = D),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(-u * 0.44, -u * 0.38),
          n.bezierCurveTo(
            -u * 0.6,
            -u * 0.1,
            -u * 0.62,
            u * 0.32,
            -u * 0.48,
            u * 0.7,
          ),
          n.bezierCurveTo(
            -u * 0.34,
            u * 0.96,
            -u * 0.12,
            u * 1.06,
            0,
            u * 1.08,
          ),
          n.bezierCurveTo(
            u * 0.12,
            u * 1.06,
            u * 0.34,
            u * 0.96,
            u * 0.48,
            u * 0.7,
          ),
          n.bezierCurveTo(
            u * 0.62,
            u * 0.32,
            u * 0.6,
            -u * 0.1,
            u * 0.44,
            -u * 0.38,
          ),
          n.bezierCurveTo(
            u * 0.22,
            -u * 0.62,
            -u * 0.22,
            -u * 0.62,
            -u * 0.44,
            -u * 0.38,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          n.save(),
          n.beginPath(),
          n.moveTo(-u * 0.44, -u * 0.38),
          n.bezierCurveTo(
            -u * 0.6,
            -u * 0.1,
            -u * 0.62,
            u * 0.32,
            -u * 0.48,
            u * 0.7,
          ),
          n.bezierCurveTo(
            -u * 0.34,
            u * 0.96,
            -u * 0.12,
            u * 1.06,
            0,
            u * 1.08,
          ),
          n.bezierCurveTo(
            u * 0.12,
            u * 1.06,
            u * 0.34,
            u * 0.96,
            u * 0.48,
            u * 0.7,
          ),
          n.bezierCurveTo(
            u * 0.62,
            u * 0.32,
            u * 0.6,
            -u * 0.1,
            u * 0.44,
            -u * 0.38,
          ),
          n.bezierCurveTo(
            u * 0.22,
            -u * 0.62,
            -u * 0.22,
            -u * 0.62,
            -u * 0.44,
            -u * 0.38,
          ),
          n.closePath(),
          n.clip(),
          [
            { y: u * 0.02, h: u * 0.17, w: u * 0.56 },
            { y: u * 0.3, h: u * 0.18, w: u * 0.58 },
            { y: u * 0.58, h: u * 0.16, w: u * 0.52 },
          ].forEach((E) => {
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.ellipse(0, E.y, E.w, E.h, 0, 0, Math.PI * 2),
              n.fill());
          }),
          n.restore(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.2,
            -u * 0.14,
            u * 0.28,
            u * 0.13,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.54),
          n.beginPath(),
          n.ellipse(0, u * 0.36, u * 0.24, u * 0.36, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(-u * 0.38, -u * 0.32),
          n.bezierCurveTo(
            -u * 0.42,
            -u * 0.52,
            -u * 0.18,
            -u * 0.68,
            0,
            -u * 0.7,
          ),
          n.bezierCurveTo(
            u * 0.18,
            -u * 0.68,
            u * 0.42,
            -u * 0.52,
            u * 0.38,
            -u * 0.32,
          ),
          n.bezierCurveTo(
            u * 0.22,
            -u * 0.18,
            -u * 0.22,
            -u * 0.18,
            -u * 0.38,
            -u * 0.32,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = K),
          (n.strokeStyle = H),
          (n.lineWidth = J * 0.7),
          n.beginPath(),
          n.moveTo(-u * 0.16, -u * 0.48),
          n.lineTo(0, -u * 0.6),
          n.lineTo(u * 0.16, -u * 0.48),
          n.lineTo(u * 0.08, -u * 0.32),
          n.lineTo(-u * 0.08, -u * 0.32),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = V),
          (n.globalAlpha = 0.92),
          n.beginPath(),
          n.moveTo(-u * 0.06, -u * 0.48),
          n.lineTo(0, -u * 0.54),
          n.lineTo(u * 0.06, -u * 0.48),
          n.lineTo(0, -u * 0.4),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          [
            { x: -u * 0.42, y: u * 0.02, w: u * 0.28, h: u * 0.22, rot: -0.18 },
            { x: u * 0.42, y: u * 0.02, w: u * 0.28, h: u * 0.22, rot: 0.18 },
          ].forEach((E) => {
            (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.rot),
              (n.fillStyle = M),
              (n.strokeStyle = H),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(-E.w * 0.5, -E.h * 0.3),
              n.lineTo(E.w * 0.4, -E.h * 0.5),
              n.lineTo(E.w * 0.5, E.h * 0.4),
              n.lineTo(-E.w * 0.4, E.h * 0.5),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = K),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.6),
              n.beginPath(),
              n.moveTo(-E.w * 0.1, -E.h * 0.1),
              n.lineTo(E.w * 0.12, -E.h * 0.22),
              n.lineTo(E.w * 0.08, E.h * 0.08),
              n.lineTo(-E.w * 0.12, E.h * 0.04),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = V),
              (n.globalAlpha = 0.82),
              n.beginPath(),
              n.ellipse(
                0,
                -E.h * 0.08,
                E.w * 0.1,
                E.h * 0.12,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.globalAlpha = 1),
              n.restore());
          }),
          [
            { x: -u * 0.18, y: -u * 0.08, h: u * 0.42, ang: -0.32 },
            { x: u * 0.18, y: -u * 0.08, h: u * 0.42, ang: 0.32 },
            { x: 0, y: u * 0.18, h: u * 0.36, ang: 0 },
          ].forEach((E) => {
            if (
              (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.ang),
              (n.fillStyle = M),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.8),
              n.beginPath(),
              n.ellipse(0, 0, u * 0.1, u * 0.08, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = K),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.75),
              n.beginPath(),
              n.moveTo(-u * 0.06, u * 0.02),
              n.lineTo(0, -E.h),
              n.lineTo(u * 0.06, u * 0.02),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = V),
              (n.globalAlpha = 0.88),
              n.beginPath(),
              n.moveTo(-u * 0.02, -u * 0.04),
              n.lineTo(0, -E.h * 0.72),
              n.lineTo(u * 0.02, -u * 0.06),
              n.closePath(),
              n.fill(),
              (n.globalAlpha = 1),
              !v)
            ) {
              let q = 0.6 + Math.abs(Math.sin(l * 14 + E.x)) * 0.8;
              ((n.strokeStyle = "#fef08a"),
                (n.lineWidth = J * 0.7),
                (n.globalAlpha = 0.88 * q),
                n.beginPath(),
                n.moveTo(0, -E.h * 0.1),
                n.lineTo(u * 0.02 * (Math.sin(l * 18) * 0.5), -E.h * 0.82),
                n.stroke(),
                (n.globalAlpha = 1),
                (n.fillStyle = "#fef08a"),
                (n.globalAlpha = 0.9 * q),
                n.beginPath(),
                n.arc(0, -E.h, u * 0.04 * q, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
            }
            n.restore();
          }),
          !v)
        )
          ((n.strokeStyle = "#fde047"),
            (n.lineWidth = J * 0.55),
            (n.globalAlpha = 0.72),
            n.beginPath(),
            n.moveTo(-u * 0.2, -u * 0.18),
            n.quadraticCurveTo(0, -u * 0.08, u * 0.2, -u * 0.18),
            n.stroke(),
            n.beginPath(),
            n.moveTo(-u * 0.18, u * 0.1),
            n.lineTo(u * 0.1, u * 0.2),
            n.stroke(),
            (n.globalAlpha = 1));
        (n.restore(), n.save(), n.scale(Z, Z));
        let B = -u * 0.72,
          A = u * 0.42,
          P = n.createLinearGradient(0, B - A, 0, B + A);
        (P.addColorStop(0, m(o, 40)),
          P.addColorStop(1, o),
          (n.fillStyle = P),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, B, A * 0.96, A * 0.84, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.84),
          n.beginPath(),
          n.ellipse(0, B + A * 0.26, A * 0.32, A * 0.24, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, B + A * 0.2, A * 0.07, A * 0.055, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = _ * 0.85),
          n.beginPath(),
          n.moveTo(-A * 0.62, B - A * 0.12),
          n.bezierCurveTo(
            -A * 0.52,
            -A * 0.72 + B,
            A * 0.52,
            -A * 0.72 + B,
            A * 0.62,
            B - A * 0.12,
          ),
          n.bezierCurveTo(
            A * 0.42,
            -A * 0.02 + B,
            -A * 0.42,
            -A * 0.02 + B,
            -A * 0.62,
            B - A * 0.12,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          [
            { x: -A * 0.28, y: B - A * 0.56, h: A * 0.38, ang: -0.22 },
            { x: 0, y: B - A * 0.68, h: A * 0.46, ang: 0 },
            { x: A * 0.28, y: B - A * 0.56, h: A * 0.38, ang: 0.22 },
          ].forEach((E) => {
            if (
              (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.ang),
              (n.fillStyle = K),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.moveTo(-A * 0.08, A * 0.04),
              n.lineTo(0, -E.h),
              n.lineTo(A * 0.08, A * 0.04),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = V),
              (n.globalAlpha = 0.88),
              n.beginPath(),
              n.moveTo(-A * 0.02, A * 0.02),
              n.lineTo(0, -E.h * 0.72),
              n.lineTo(A * 0.02, A * 0.02),
              n.closePath(),
              n.fill(),
              (n.globalAlpha = 1),
              !v)
            ) {
              let q = 0.6 + Math.abs(Math.sin(l * 11 + E.x)) * 0.7;
              ((n.fillStyle = "#fef08a"),
                (n.globalAlpha = 0.85 * q),
                n.beginPath(),
                n.arc(0, -E.h, A * 0.05 * q, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
            }
            n.restore();
          }),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -A * 0.16,
            B - A * 0.18,
            A * 0.16,
            A * 0.07,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((E) => {
            let q = E * u * 0.2,
              L = -u * 0.86,
              Y = E * (u * 0.44 + Math.sin(l * 2.8 + E) * u * 0.04),
              G = -u * 1.28 + Math.cos(l * 3 + E) * u * 0.04;
            ((n.strokeStyle = H),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(q, L),
              n.quadraticCurveTo(E * u * 0.32, -u * 1.06, Y, G),
              n.stroke(),
              (n.strokeStyle = K),
              (n.lineWidth = J * 0.7),
              (n.globalAlpha = 0.8),
              n.beginPath(),
              n.moveTo(q, L),
              n.quadraticCurveTo(E * u * 0.3, -u * 1.04, Y, G),
              n.stroke(),
              (n.globalAlpha = 1));
            let d = 0.78 + Math.abs(Math.sin(l * 11.5 + E * 1.6)) * 0.62;
            if (!v)
              ((n.fillStyle = "rgba(253,224,71,0.46)"),
                (n.globalAlpha = 0.82 * d),
                n.beginPath(),
                n.arc(Y, G, u * 0.22 * d, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
            ((n.fillStyle = "#facc15"),
              (n.strokeStyle = f),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.arc(Y, G, u * 0.13 * d, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = K),
              (n.globalAlpha = 0.72),
              n.beginPath(),
              n.arc(Y, G, u * 0.08 * d, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(
                Y - u * 0.025 * d,
                G - u * 0.025 * d,
                u * 0.04 * d,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          n.restore());
        let U = -u * 0.72 - u * 0.02;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((E) => {
              let q = E * u * 0.18;
              (n.beginPath(),
                n.moveTo(q - u * 0.09, U - u * 0.09),
                n.lineTo(q + u * 0.09, U + u * 0.09),
                n.moveTo(q + u * 0.09, U - u * 0.09),
                n.lineTo(q - u * 0.09, U + u * 0.09),
                n.stroke());
            }));
        else {
          ([-1, 1].forEach((E) => {
            let q = E * u * 0.18;
            ((n.fillStyle = "rgba(176,137,104,0.22)"),
              n.beginPath(),
              n.ellipse(q, U, u * 0.18, u * 0.14, 0, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(q, U, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(q - u * 0.028, U - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = M),
              (n.strokeStyle = H),
              (n.lineWidth = J * 0.6),
              n.beginPath(),
              n.moveTo(q - u * 0.16, U - u * 0.14),
              n.lineTo(q + u * 0.12, U - u * 0.16),
              n.lineTo(q + u * 0.1, U - u * 0.08),
              n.lineTo(q - u * 0.14, U - u * 0.06),
              n.closePath(),
              n.fill(),
              n.stroke());
          }),
            (n.fillStyle = "rgba(244,114,182,0.42)"),
            [-1, 1].forEach((E) => {
              (n.beginPath(),
                n.arc(E * u * 0.32, -u * 0.52, u * 0.09, 0, Math.PI * 2),
                n.fill());
            }),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(-u * 0.09, -u * 0.46),
            n.quadraticCurveTo(0, -u * 0.4, u * 0.09, -u * 0.46),
            n.stroke());
          for (let E = 0; E < 3; E++) {
            let q = (E - 1) * u * 0.42 + Math.sin(l * 4.6 + E) * u * 0.08,
              L = -u * 0.88 - Math.abs(Math.cos(l * 3.2 + E)) * u * 0.22,
              Y = 0.32 + Math.abs(Math.sin(l * 7 + E * 2.2)) * 0.54;
            ((n.globalAlpha = Y),
              (n.fillStyle = "#fef08a"),
              n.beginPath(),
              n.arc(q, L, u * 0.034, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(q, L, u * 0.014, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          }
        }
      }
      function JJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9) * 0.3;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018);
        ((n.fillStyle = m(o, -22)), (n.strokeStyle = f), (n.lineWidth = e));
        let Q = u * 0.34,
          M = u * 0.32;
        ([
          { x: -u * 0.26, y: u * 0.68 },
          { x: u * 0.26, y: u * 0.68 },
        ].forEach((D) => {
          (n.beginPath(),
            n.moveTo(D.x - Q * 0.5, D.y),
            n.lineTo(D.x - Q * 0.46, D.y + M),
            n.lineTo(D.x + Q * 0.46, D.y + M * 0.96),
            n.lineTo(D.x + Q * 0.5, D.y + u * 0.02),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.strokeStyle = m(o, -42)),
            (n.lineWidth = e * 0.6),
            n.beginPath(),
            n.moveTo(D.x - Q * 0.32, D.y + M * 0.42),
            n.lineTo(D.x + Q * 0.3, D.y + M * 0.48),
            n.stroke(),
            (n.strokeStyle = f),
            (n.lineWidth = e),
            (n.fillStyle = m(o, -22)));
        }),
          n.save(),
          n.translate(J * u * 0.04, 0),
          [
            { x: -u * 0.86, y: u * 0.12, w: u * 0.32, h: u * 0.26 },
            { x: u * 0.86, y: u * 0.14, w: u * 0.3, h: u * 0.24 },
          ].forEach((D) => {
            ((n.fillStyle = m(o, -12)),
              (n.strokeStyle = f),
              (n.lineWidth = e),
              n.beginPath(),
              n.moveTo(D.x - D.w * 0.5, D.y - D.h * 0.45),
              n.lineTo(D.x + D.w * 0.38, D.y - D.h * 0.5),
              n.lineTo(D.x + D.w * 0.5, D.y + D.h * 0.36),
              n.lineTo(D.x - D.w * 0.42, D.y + D.h * 0.44),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = m(o, -26)),
              n.beginPath(),
              n.arc(
                D.x + (D.x < 0 ? -D.w * 0.18 : D.w * 0.18),
                D.y + D.h * 0.1,
                D.w * 0.18,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = m(o, -12)));
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let H = n.createLinearGradient(0, -u * 0.7, 0, u * 0.7);
        (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(u * 0.08, -u * 0.68),
          n.lineTo(u * 0.48, -u * 0.52),
          n.lineTo(u * 0.62, -u * 0.1),
          n.lineTo(u * 0.48, u * 0.38),
          n.lineTo(u * 0.1, u * 0.66),
          n.lineTo(-u * 0.3, u * 0.58),
          n.lineTo(-u * 0.58, u * 0.16),
          n.lineTo(-u * 0.5, -u * 0.32),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.24,
            u * 0.28,
            u * 0.12,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.strokeStyle = m(o, -38)),
          (n.lineWidth = e * 0.75),
          (n.globalAlpha = 0.72),
          n.beginPath(),
          n.moveTo(-u * 0.24, -u * 0.38),
          n.lineTo(u * 0.22, -u * 0.18),
          n.lineTo(u * 0.32, u * 0.12),
          n.stroke(),
          n.beginPath(),
          n.moveTo(-u * 0.42, u * 0.02),
          n.lineTo(-u * 0.06, u * 0.22),
          n.lineTo(u * 0.28, u * 0.08),
          n.stroke(),
          n.beginPath(),
          n.moveTo(u * 0.08, -u * 0.52),
          n.lineTo(u * 0.12, -u * 0.22),
          n.lineTo(-u * 0.18, u * 0.04),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = m(o, -18)),
          (n.globalAlpha = 0.42),
          [
            { x: -u * 0.28, y: -u * 0.12, r: u * 0.06 },
            { x: u * 0.28, y: -u * 0.28, r: u * 0.05 },
            { x: u * 0.18, y: u * 0.24, r: u * 0.07 },
          ].forEach((D) => {
            (n.beginPath(), n.arc(D.x, D.y, D.r, 0, Math.PI * 2), n.fill());
          }),
          (n.globalAlpha = 1));
        let K = "#4ade80",
          V = m(K, -45);
        ((n.fillStyle = K),
          (n.strokeStyle = V),
          (n.lineWidth = e * 0.85),
          n.beginPath(),
          n.moveTo(-u * 0.26, -u * 0.62),
          n.bezierCurveTo(
            -u * 0.18,
            -u * 0.82,
            u * 0.12,
            -u * 0.86,
            u * 0.32,
            -u * 0.68,
          ),
          n.bezierCurveTo(
            u * 0.38,
            -u * 0.58,
            u * 0.2,
            -u * 0.48,
            -u * 0.02,
            -u * 0.52,
          ),
          n.bezierCurveTo(
            -u * 0.18,
            -u * 0.52,
            -u * 0.3,
            -u * 0.54,
            -u * 0.26,
            -u * 0.62,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          n.beginPath(),
          n.moveTo(u * 0.32, -u * 0.68),
          n.bezierCurveTo(
            u * 0.42,
            -u * 0.74,
            u * 0.5,
            -u * 0.6,
            u * 0.44,
            -u * 0.5,
          ),
          n.bezierCurveTo(
            u * 0.36,
            -u * 0.48,
            u * 0.26,
            -u * 0.56,
            u * 0.32,
            -u * 0.68,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.18)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.06,
            -u * 0.64,
            u * 0.14,
            u * 0.07,
            -0.2,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore());
        let C = -u * 0.08;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((D) => {
              let W = D * u * 0.2;
              (n.beginPath(),
                n.moveTo(W - u * 0.08, C - u * 0.08),
                n.lineTo(W + u * 0.08, C + u * 0.08),
                n.moveTo(W + u * 0.08, C - u * 0.08),
                n.lineTo(W - u * 0.08, C + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((D) => {
            let W = D * u * 0.2;
            ((n.fillStyle = m(o, -48)),
              n.beginPath(),
              n.ellipse(W, C, u * 0.18, u * 0.14, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.7),
              n.stroke(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(W, C + u * 0.02, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(W - u * 0.028, C - u * 0.01, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
        if (!v)
          ((n.strokeStyle = m(o, -52)),
            (n.lineWidth = e * 0.9),
            n.beginPath(),
            n.moveTo(-u * 0.14, u * 0.24),
            n.quadraticCurveTo(0, u * 0.3, u * 0.14, u * 0.24),
            n.stroke(),
            (n.strokeStyle = m(o, -36)),
            (n.lineWidth = e * 0.5),
            n.beginPath(),
            n.moveTo(-u * 0.06, u * 0.24),
            n.lineTo(-u * 0.04, u * 0.32),
            n.moveTo(u * 0.06, u * 0.24),
            n.lineTo(u * 0.04, u * 0.32),
            n.stroke());
      }
      function eJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = m(o, -12),
          M = m(o, 40),
          H = m(o, -28),
          K = f,
          V = m(o, -26),
          C = m(o, -48);
        {
          let q = n.createRadialGradient(
            0,
            u * 0.12,
            u * 0.22,
            0,
            u * 0.12,
            u * 1.55,
          );
          (q.addColorStop(0, "rgba(139,92,246,0.22)"),
            q.addColorStop(0.55, "rgba(139,92,246,0.10)"),
            q.addColorStop(1, "rgba(139,92,246,0)"),
            (n.fillStyle = q),
            n.beginPath(),
            n.ellipse(0, u * 0.12, u * 1.02, u * 1.08, 0, 0, Math.PI * 2),
            n.fill());
          let L = n.createRadialGradient(
            0,
            u * 0.18,
            u * 0.1,
            0,
            u * 0.18,
            u * 0.95,
          );
          (L.addColorStop(0, "rgba(0,0,0,0.18)"),
            L.addColorStop(1, "rgba(0,0,0,0)"),
            (n.fillStyle = L),
            n.beginPath(),
            n.ellipse(0, u * 0.18, u * 0.82, u * 0.88, 0, 0, Math.PI * 2),
            n.fill());
        }
        n.save();
        let D = 0,
          W = u * 0.68,
          B = J * u * 0.18,
          A = u * 1.42;
        if (
          ((n.strokeStyle = K),
          (n.lineWidth = e * 1.15),
          (n.fillStyle = H),
          n.beginPath(),
          n.moveTo(D - u * 0.07, W),
          n.quadraticCurveTo(
            D + J * u * 0.06,
            u * 1.02,
            D + B * 0.4,
            A - u * 0.18,
          ),
          n.lineTo(D + B * 0.4 + u * 0.05, A - u * 0.14),
          n.quadraticCurveTo(D + J * u * 0.1, u * 1.04, D + u * 0.07, W),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = m(o, 12)),
          (n.lineWidth = e * 0.55),
          (n.globalAlpha = 0.55),
          n.beginPath(),
          n.moveTo(D, W + u * 0.08),
          n.quadraticCurveTo(
            D + J * u * 0.08,
            u * 1.08,
            D + B * 0.35,
            A - u * 0.2,
          ),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = Q),
          (n.strokeStyle = K),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(D + B, A + u * 0.08),
          n.lineTo(D + B - u * 0.18, A - u * 0.18),
          n.lineTo(D + B, A - u * 0.06),
          n.lineTo(D + B + u * 0.18, A - u * 0.18),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !v)
        )
          ((n.fillStyle = "rgba(167,139,250,0.45)"),
            n.beginPath(),
            n.ellipse(D + B, A - u * 0.06, u * 0.1, u * 0.1, 0, 0, Math.PI * 2),
            n.fill());
        (n.restore(), n.save());
        let P = Math.sin(l * 3.1) * u * 0.04;
        ([-1, 1].forEach((q) => {
          (n.save(),
            n.translate(q * u * 0.34, u * 0.02 + (q < 0 ? P : -P) * 0.6),
            (n.fillStyle = V),
            (n.strokeStyle = K),
            (n.lineWidth = e),
            (n.globalAlpha = 0.92),
            n.beginPath(),
            n.moveTo(0, -u * 0.22),
            n.lineTo(q * u * 0.18, -u * 0.62),
            n.lineTo(q * u * 0.62, -u * 0.46),
            n.quadraticCurveTo(
              q * u * 0.58,
              -u * 0.22,
              q * u * 0.88,
              -u * 0.06,
            ),
            n.quadraticCurveTo(q * u * 0.72, u * 0.14, q * u * 0.92, u * 0.38),
            n.quadraticCurveTo(q * u * 0.56, u * 0.32, q * u * 0.32, u * 0.46),
            n.quadraticCurveTo(q * u * 0.1, u * 0.28, 0, u * 0.42),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.strokeStyle = m(V, 22)),
            (n.lineWidth = e * 0.6),
            (n.globalAlpha = 0.72),
            n.beginPath(),
            n.moveTo(0, -u * 0.14),
            n.lineTo(q * u * 0.58, -u * 0.42),
            n.stroke(),
            n.beginPath(),
            n.moveTo(q * u * 0.08, u * 0.04),
            n.lineTo(q * u * 0.82, -u * 0.02),
            n.stroke(),
            n.beginPath(),
            n.moveTo(q * u * 0.04, u * 0.22),
            n.lineTo(q * u * 0.86, u * 0.32),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.fillStyle = C),
            (n.globalAlpha = 0.38),
            n.beginPath(),
            n.moveTo(q * u * 0.12, -u * 0.1),
            n.quadraticCurveTo(q * u * 0.48, -u * 0.08, q * u * 0.62, u * 0.22),
            n.quadraticCurveTo(q * u * 0.28, u * 0.28, q * u * 0.12, u * 0.12),
            n.closePath(),
            n.fill(),
            (n.globalAlpha = 1),
            n.restore());
        }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let U = n.createLinearGradient(0, -u * 0.82, 0, u * 0.82);
        (U.addColorStop(0, M),
          U.addColorStop(1, Q),
          (n.fillStyle = U),
          (n.strokeStyle = K),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(0, -u * 0.84),
          n.bezierCurveTo(
            -u * 0.18,
            -u * 0.62,
            -u * 0.52,
            -u * 0.24,
            -u * 0.46,
            u * 0.18,
          ),
          n.bezierCurveTo(
            -u * 0.38,
            u * 0.62,
            -u * 0.16,
            u * 0.84,
            0,
            u * 0.86,
          ),
          n.bezierCurveTo(
            u * 0.16,
            u * 0.84,
            u * 0.38,
            u * 0.62,
            u * 0.46,
            u * 0.18,
          ),
          n.bezierCurveTo(
            u * 0.52,
            -u * 0.24,
            u * 0.18,
            -u * 0.62,
            0,
            -u * 0.84,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.28,
            u * 0.26,
            u * 0.13,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.42),
          n.beginPath(),
          n.ellipse(0, u * 0.28, u * 0.22, u * 0.36, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = "rgba(255,255,255,0.18)"),
          n.beginPath(),
          n.moveTo(-u * 0.14, u * 0.02),
          n.lineTo(0, u * 0.18),
          n.lineTo(u * 0.14, u * 0.02),
          n.lineTo(u * 0.08, u * 0.1),
          n.lineTo(0, u * 0.24),
          n.lineTo(-u * 0.08, u * 0.1),
          n.closePath(),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((q) => {
            let L = q * u * 0.32,
              Y = -u * 0.72,
              G = u * 0.34,
              d = u * 0.72;
            ((n.fillStyle = m(Q, -10)),
              (n.strokeStyle = K),
              (n.lineWidth = e),
              n.beginPath(),
              n.moveTo(L - G * 0.42, Y + d * 0.18),
              n.lineTo(L + q * G * 0.08, Y - d * 0.68),
              n.lineTo(L + G * 0.48, Y + d * 0.14),
              n.quadraticCurveTo(
                L + G * 0.12,
                Y + d * 0.02,
                L - G * 0.42,
                Y + d * 0.18,
              ),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#e9d5ff"),
              n.beginPath(),
              n.moveTo(L - G * 0.18, Y + d * 0.04),
              n.lineTo(L + q * G * 0.02, Y - d * 0.38),
              n.lineTo(L + G * 0.22, Y + d * 0.02),
              n.closePath(),
              n.fill(),
              (n.fillStyle = "rgba(255,255,255,0.42)"),
              n.beginPath(),
              n.ellipse(
                L + q * G * 0.02,
                Y - d * 0.08,
                G * 0.08,
                d * 0.06,
                q * 0.15,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.strokeStyle = m(Q, -18)),
              (n.lineWidth = e * 0.6),
              (n.globalAlpha = 0.55),
              n.beginPath(),
              n.moveTo(L - G * 0.1, Y - d * 0.12),
              n.lineTo(L + G * 0.06, Y - d * 0.18),
              n.stroke(),
              (n.globalAlpha = 1));
          }),
          n.restore());
        let E = -u * 0.18;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((q) => {
              let L = q * u * 0.2;
              (n.beginPath(),
                n.moveTo(L - u * 0.1, E - u * 0.1),
                n.lineTo(L + u * 0.1, E + u * 0.1),
                n.moveTo(L + u * 0.1, E - u * 0.1),
                n.lineTo(L - u * 0.1, E + u * 0.1),
                n.stroke());
            }));
        else
          [-1, 1].forEach((q) => {
            let L = q * u * 0.2,
              Y = n.createRadialGradient(L, E, u * 0.04, L, E, u * 0.26);
            (Y.addColorStop(0, "rgba(167,139,250,0.55)"),
              Y.addColorStop(1, "rgba(167,139,250,0)"),
              (n.fillStyle = Y),
              n.beginPath(),
              n.arc(L, E, u * 0.26, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#f5f3ff"),
              n.beginPath(),
              n.ellipse(L, E, u * 0.18, u * 0.22, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = K),
              (n.lineWidth = e * 0.7),
              n.stroke(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(L, E + u * 0.02, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(L - u * 0.032, E - u * 0.02, u * 0.03, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#a78bfa"),
              (n.globalAlpha = 0.85),
              n.beginPath(),
              n.arc(L + u * 0.028, E + u * 0.04, u * 0.025, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          });
        if (!v)
          ((n.fillStyle = "#ddd6fe"),
            (n.globalAlpha = 0.92),
            n.beginPath(),
            n.ellipse(0, E + u * 0.28, u * 0.1, u * 0.07, 0, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.ellipse(0, E + u * 0.24, u * 0.04, u * 0.03, 0, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = e * 0.85),
            n.beginPath(),
            n.moveTo(-u * 0.08, E + u * 0.34),
            n.quadraticCurveTo(-u * 0.03, E + u * 0.38, 0, E + u * 0.32),
            n.quadraticCurveTo(u * 0.03, E + u * 0.38, u * 0.08, E + u * 0.34),
            n.stroke(),
            (n.fillStyle = "rgba(244,114,182,0.32)"),
            [-1, 1].forEach((q) => {
              (n.beginPath(),
                n.arc(q * u * 0.36, E + u * 0.18, u * 0.08, 0, Math.PI * 2),
                n.fill());
            }));
        ((n.fillStyle = H),
          (n.strokeStyle = K),
          (n.lineWidth = e),
          [-1, 1].forEach((q) => {
            (n.beginPath(),
              n.ellipse(
                q * u * 0.18,
                u * 0.72,
                u * 0.12,
                u * 0.14,
                q * 0.15,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }));
      }
      function VJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9),
          e = Math.sin(l * 3.1);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let Q = Math.max(1.5, r * 0.018),
          M = m(o, -8),
          H = m(o, 40),
          K = m(o, -28),
          V = f,
          C = m(o, -22),
          D = m(o, -44),
          W = u * 1.22;
        {
          let L = n.createRadialGradient(
            0,
            W * 0.12,
            W * 0.22,
            0,
            W * 0.12,
            W * 1.72,
          );
          (L.addColorStop(0, "rgba(139,92,246,0.26)"),
            L.addColorStop(0.55, "rgba(139,92,246,0.12)"),
            L.addColorStop(1, "rgba(139,92,246,0)"),
            (n.fillStyle = L),
            n.beginPath(),
            n.ellipse(0, W * 0.12, W * 1.14, W * 1.18, 0, 0, Math.PI * 2),
            n.fill());
          let Y = n.createRadialGradient(
            0,
            W * 0.18,
            W * 0.1,
            0,
            W * 0.18,
            W * 1.05,
          );
          (Y.addColorStop(0, "rgba(0,0,0,0.20)"),
            Y.addColorStop(1, "rgba(0,0,0,0)"),
            (n.fillStyle = Y),
            n.beginPath(),
            n.ellipse(0, W * 0.18, W * 0.88, W * 0.96, 0, 0, Math.PI * 2),
            n.fill());
        }
        n.save();
        let B = W * 0.68,
          A = J * W * 0.22,
          P = W * 1.68;
        if (
          ((n.strokeStyle = V),
          (n.lineWidth = Q * 1.2),
          (n.fillStyle = K),
          n.beginPath(),
          n.moveTo(-W * 0.08, B),
          n.quadraticCurveTo(J * W * 0.08, W * 1.08, A * 0.4, P - W * 0.22),
          n.lineTo(A * 0.4 + W * 0.06, P - W * 0.18),
          n.quadraticCurveTo(J * W * 0.12, W * 1.1, W * 0.08, B),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = m(o, 14)),
          (n.lineWidth = Q * 0.6),
          (n.globalAlpha = 0.58),
          n.beginPath(),
          n.moveTo(0, B + W * 0.08),
          n.quadraticCurveTo(J * W * 0.1, W * 1.14, A * 0.35, P - W * 0.24),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = M),
          (n.strokeStyle = V),
          (n.lineWidth = Q),
          n.beginPath(),
          n.moveTo(A, P + W * 0.1),
          n.lineTo(A - W * 0.22, P - W * 0.22),
          n.lineTo(A, P - W * 0.08),
          n.lineTo(A + W * 0.22, P - W * 0.22),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !v)
        )
          ((n.fillStyle = "rgba(167,139,250,0.50)"),
            n.beginPath(),
            n.ellipse(A, P - W * 0.08, W * 0.12, W * 0.12, 0, 0, Math.PI * 2),
            n.fill());
        (n.restore(), n.save());
        let U = e * W * 0.06;
        ([-1, 1].forEach((L) => {
          (n.save(),
            n.translate(L * W * 0.38, W * 0.02 + (L < 0 ? U : -U)),
            n.rotate(L * (0.08 + J * 0.04)),
            (n.fillStyle = C),
            (n.strokeStyle = V),
            (n.lineWidth = Q * 1.05),
            (n.globalAlpha = 0.96),
            n.beginPath(),
            n.moveTo(0, -W * 0.28),
            n.lineTo(L * W * 0.22, -W * 0.78),
            n.lineTo(L * W * 0.74, -W * 0.58),
            n.quadraticCurveTo(L * W * 0.72, -W * 0.28, L * W * 1.08, -W * 0.1),
            n.quadraticCurveTo(L * W * 0.88, W * 0.12, L * W * 1.14, W * 0.44),
            n.quadraticCurveTo(L * W * 0.68, W * 0.38, L * W * 0.4, W * 0.56),
            n.quadraticCurveTo(L * W * 0.12, W * 0.34, 0, W * 0.48),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.strokeStyle = m(C, 26)),
            (n.lineWidth = Q * 0.7),
            (n.globalAlpha = 0.78),
            n.beginPath(),
            n.moveTo(W * 0.04, -W * 0.18),
            n.lineTo(L * W * 0.68, -W * 0.52),
            n.stroke(),
            n.beginPath(),
            n.moveTo(W * 0.1, W * 0.04),
            n.lineTo(L * W * 1.02, -W * 0.06),
            n.stroke(),
            n.beginPath(),
            n.moveTo(W * 0.06, W * 0.22),
            n.lineTo(L * W * 1.08, W * 0.38),
            n.stroke(),
            n.beginPath(),
            n.moveTo(W * 0.02, W * 0.32),
            n.lineTo(L * W * 0.36, W * 0.5),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.fillStyle = D),
            (n.globalAlpha = 0.42),
            n.beginPath(),
            n.moveTo(L * W * 0.14, -W * 0.12),
            n.quadraticCurveTo(L * W * 0.58, -W * 0.1, L * W * 0.76, W * 0.24),
            n.quadraticCurveTo(L * W * 0.32, W * 0.3, L * W * 0.14, W * 0.14),
            n.closePath(),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = K),
            (n.strokeStyle = V),
            (n.lineWidth = Q * 0.8),
            n.beginPath(),
            n.moveTo(L * W * 0.22, -W * 0.78),
            n.lineTo(L * W * 0.18, -W * 0.92),
            n.lineTo(L * W * 0.28, -W * 0.8),
            n.closePath(),
            n.fill(),
            n.stroke(),
            n.beginPath(),
            n.moveTo(L * W * 0.74, -W * 0.58),
            n.lineTo(L * W * 0.8, -W * 0.74),
            n.lineTo(L * W * 0.82, -W * 0.56),
            n.closePath(),
            n.fill(),
            n.stroke(),
            n.restore());
        }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let E = n.createLinearGradient(0, -W * 0.92, 0, W * 0.92);
        (E.addColorStop(0, H),
          E.addColorStop(1, M),
          (n.fillStyle = E),
          (n.strokeStyle = V),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(0, -W * 0.96),
          n.bezierCurveTo(
            -W * 0.2,
            -W * 0.72,
            -W * 0.58,
            -W * 0.28,
            -W * 0.5,
            W * 0.22,
          ),
          n.bezierCurveTo(
            -W * 0.42,
            W * 0.68,
            -W * 0.18,
            W * 0.94,
            0,
            W * 0.96,
          ),
          n.bezierCurveTo(
            W * 0.18,
            W * 0.94,
            W * 0.42,
            W * 0.68,
            W * 0.5,
            W * 0.22,
          ),
          n.bezierCurveTo(
            W * 0.58,
            -W * 0.28,
            W * 0.2,
            -W * 0.72,
            0,
            -W * 0.96,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -W * 0.2,
            -W * 0.32,
            W * 0.3,
            W * 0.14,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.44),
          n.beginPath(),
          n.ellipse(0, W * 0.32, W * 0.24, W * 0.4, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = "rgba(255,255,255,0.20)"),
          n.beginPath(),
          n.moveTo(-W * 0.16, W * 0.06),
          n.lineTo(0, W * 0.22),
          n.lineTo(W * 0.16, W * 0.06),
          n.lineTo(W * 0.1, W * 0.14),
          n.lineTo(0, W * 0.28),
          n.lineTo(-W * 0.1, W * 0.14),
          n.closePath(),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((L) => {
            let Y = L * W * 0.34,
              G = -W * 0.84,
              d = W * 0.42,
              h = W * 0.9;
            ((n.fillStyle = m(M, -10)),
              (n.strokeStyle = V),
              (n.lineWidth = Q),
              n.beginPath(),
              n.moveTo(Y - d * 0.46, G + h * 0.2),
              n.lineTo(Y + L * d * 0.1, G - h * 0.78),
              n.lineTo(Y + d * 0.52, G + h * 0.16),
              n.quadraticCurveTo(
                Y + d * 0.14,
                G + h * 0.02,
                Y - d * 0.46,
                G + h * 0.2,
              ),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#e9d5ff"),
              n.beginPath(),
              n.moveTo(Y - d * 0.22, G + h * 0.06),
              n.lineTo(Y + L * d * 0.04, G - h * 0.46),
              n.lineTo(Y + d * 0.28, G + h * 0.04),
              n.closePath(),
              n.fill(),
              (n.fillStyle = "rgba(255,255,255,0.46)"),
              n.beginPath(),
              n.ellipse(
                Y + L * d * 0.04,
                G - h * 0.12,
                d * 0.1,
                h * 0.07,
                L * 0.15,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          n.restore());
        let q = -W * 0.22;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((L) => {
              let Y = L * W * 0.22;
              (n.beginPath(),
                n.moveTo(Y - W * 0.11, q - W * 0.11),
                n.lineTo(Y + W * 0.11, q + W * 0.11),
                n.moveTo(Y + W * 0.11, q - W * 0.11),
                n.lineTo(Y - W * 0.11, q + W * 0.11),
                n.stroke());
            }));
        else
          [-1, 1].forEach((L) => {
            let Y = L * W * 0.22,
              G = n.createRadialGradient(Y, q, W * 0.04, Y, q, W * 0.3);
            (G.addColorStop(0, "rgba(167,139,250,0.60)"),
              G.addColorStop(1, "rgba(167,139,250,0)"),
              (n.fillStyle = G),
              n.beginPath(),
              n.arc(Y, q, W * 0.3, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#f5f3ff"),
              n.beginPath(),
              n.ellipse(Y, q, W * 0.2, W * 0.24, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = V),
              (n.lineWidth = Q * 0.7),
              n.stroke(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(Y, q + W * 0.02, W * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(Y - W * 0.032, q - W * 0.02, W * 0.03, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#a78bfa"),
              (n.globalAlpha = 0.9),
              n.beginPath(),
              n.arc(Y + W * 0.03, q + W * 0.04, W * 0.028, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          });
        if (!v)
          ((n.fillStyle = "#ddd6fe"),
            (n.globalAlpha = 0.92),
            n.beginPath(),
            n.ellipse(0, q + W * 0.3, W * 0.11, W * 0.08, 0, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.ellipse(0, q + W * 0.26, W * 0.045, W * 0.034, 0, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = Q * 0.9),
            n.beginPath(),
            n.moveTo(-W * 0.09, q + W * 0.36),
            n.quadraticCurveTo(-W * 0.03, q + W * 0.4, 0, q + W * 0.34),
            n.quadraticCurveTo(W * 0.03, q + W * 0.4, W * 0.09, q + W * 0.36),
            n.stroke());
        ((n.fillStyle = K),
          (n.strokeStyle = V),
          (n.lineWidth = Q),
          [-1, 1].forEach((L) => {
            (n.save(),
              n.translate(L * W * 0.2, W * 0.8),
              n.rotate(L * 0.12),
              n.beginPath(),
              n.ellipse(0, 0, W * 0.14, W * 0.16, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#e5e7eb"),
              (n.strokeStyle = V),
              (n.lineWidth = Q * 0.7));
            for (let Y = -1; Y <= 1; Y++)
              (n.beginPath(),
                n.moveTo(Y * W * 0.05, W * 0.1),
                n.lineTo(Y * W * 0.06, W * 0.2),
                n.lineTo(Y * W * 0.02, W * 0.12),
                n.closePath(),
                n.fill(),
                n.stroke());
            ((n.fillStyle = K), n.restore());
          }));
      }
      function WJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9),
          e = Math.sin(l * 3.1),
          Q = Math.sin(l * 12);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let M = Math.max(1.5, r * 0.018),
          H = m(o, -8),
          K = m(o, 40),
          V = m(o, -28),
          C = f,
          D = m(o, -18),
          W = m(o, -40),
          B = "#facc15",
          A = "#fef08a",
          P = "#a78bfa",
          U = u * 1.24;
        {
          let h = n.createRadialGradient(
            0,
            U * 0.12,
            U * 0.22,
            0,
            U * 0.12,
            U * 1.76,
          );
          if (
            (h.addColorStop(0, "rgba(139,92,246,0.28)"),
            h.addColorStop(0.45, "rgba(250,204,21,0.10)"),
            h.addColorStop(1, "rgba(139,92,246,0)"),
            (n.fillStyle = h),
            n.beginPath(),
            n.ellipse(0, U * 0.12, U * 1.16, U * 1.2, 0, 0, Math.PI * 2),
            n.fill(),
            !v)
          ) {
            let i = n.createRadialGradient(
              0,
              U * 0.1,
              U * 0.08,
              0,
              U * 0.1,
              U * 1,
            );
            (i.addColorStop(0, "rgba(254,240,138,0.22)"),
              i.addColorStop(1, "rgba(254,240,138,0)"),
              (n.fillStyle = i),
              n.beginPath(),
              n.ellipse(0, U * 0.1, U * 0.82, U * 0.92, 0, 0, Math.PI * 2),
              n.fill());
          }
        }
        n.save();
        let E = U * 0.68,
          q = J * U * 0.22,
          L = U * 1.68;
        if (
          ((n.strokeStyle = C),
          (n.lineWidth = M * 1.2),
          (n.fillStyle = V),
          n.beginPath(),
          n.moveTo(-U * 0.08, E),
          n.quadraticCurveTo(J * U * 0.08, U * 1.08, q * 0.4, L - U * 0.22),
          n.lineTo(q * 0.4 + U * 0.06, L - U * 0.18),
          n.quadraticCurveTo(J * U * 0.12, U * 1.1, U * 0.08, E),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !v)
        )
          ((n.strokeStyle = B),
            (n.lineWidth = M * 0.9),
            (n.globalAlpha = 0.88),
            n.beginPath(),
            n.moveTo(0, E + U * 0.1),
            n.lineTo(J * U * 0.06 + U * 0.06, U * 0.96),
            n.lineTo(q * 0.3 + U * 0.04, U * 1.22),
            n.lineTo(q * 0.34, L - U * 0.2),
            n.stroke(),
            (n.strokeStyle = P),
            (n.lineWidth = M * 0.55),
            (n.globalAlpha = 0.72),
            n.beginPath(),
            n.moveTo(U * 0.04, E + U * 0.16),
            n.lineTo(U * 0.08, U * 1.1),
            n.lineTo(q * 0.32, L - U * 0.26),
            n.stroke(),
            (n.globalAlpha = 1));
        if (
          ((n.fillStyle = H),
          (n.strokeStyle = C),
          (n.lineWidth = M),
          n.beginPath(),
          n.moveTo(q, L + U * 0.1),
          n.lineTo(q - U * 0.22, L - U * 0.22),
          n.lineTo(q, L - U * 0.08),
          n.lineTo(q + U * 0.22, L - U * 0.22),
          n.closePath(),
          n.fill(),
          n.stroke(),
          !v)
        ) {
          let h = 0.7 + Math.abs(Math.sin(l * 11)) * 0.6;
          ((n.fillStyle = "rgba(250,204,21,0.62)"),
            (n.globalAlpha = 0.9 * h),
            n.beginPath(),
            n.ellipse(
              q,
              L - U * 0.08,
              U * 0.14 * h,
              U * 0.14 * h,
              0,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = A),
            n.beginPath(),
            n.arc(q, L - U * 0.08, U * 0.06 * h, 0, Math.PI * 2),
            n.fill());
        }
        (n.restore(), n.save());
        let Y = e * U * 0.06;
        ([-1, 1].forEach((h) => {
          if (
            (n.save(),
            n.translate(h * U * 0.38, U * 0.02 + (h < 0 ? Y : -Y)),
            n.rotate(h * (0.08 + J * 0.04)),
            (n.fillStyle = D),
            (n.strokeStyle = C),
            (n.lineWidth = M * 1.05),
            (n.globalAlpha = 0.96),
            n.beginPath(),
            n.moveTo(0, -U * 0.28),
            n.lineTo(h * U * 0.22, -U * 0.78),
            n.lineTo(h * U * 0.74, -U * 0.58),
            n.quadraticCurveTo(h * U * 0.72, -U * 0.28, h * U * 1.08, -U * 0.1),
            n.quadraticCurveTo(h * U * 0.88, U * 0.12, h * U * 1.14, U * 0.44),
            n.quadraticCurveTo(h * U * 0.68, U * 0.38, h * U * 0.4, U * 0.56),
            n.quadraticCurveTo(h * U * 0.12, U * 0.34, 0, U * 0.48),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.globalAlpha = 1),
            !v)
          ) {
            let i = 0.6 + Math.abs(Math.sin(l * 9 + h)) * 0.7;
            ((n.strokeStyle = B),
              (n.lineWidth = M * 0.85),
              (n.globalAlpha = 0.86 * i),
              n.beginPath(),
              n.moveTo(h * U * 0.1, -U * 0.22),
              n.lineTo(h * U * 0.48, -U * 0.32),
              n.lineTo(h * U * 0.62, -U * 0.06),
              n.lineTo(h * U * 0.88, U * 0.18),
              n.stroke(),
              n.beginPath(),
              n.moveTo(h * U * 0.08, U * 0.12),
              n.lineTo(h * U * 0.42, U * 0.22),
              n.lineTo(h * U * 0.8, U * 0.36),
              n.stroke(),
              (n.strokeStyle = P),
              (n.lineWidth = M * 0.55),
              (n.globalAlpha = 0.68 * i),
              n.beginPath(),
              n.moveTo(h * U * 0.14, -U * 0.08),
              n.lineTo(h * U * 0.52, -U * 0.14),
              n.lineTo(h * U * 0.7, U * 0.1),
              n.stroke(),
              (n.globalAlpha = 1));
            for (let b = 0; b < 2; b++) {
              let z = h * (U * 0.52 + b * U * 0.24),
                k = -U * 0.1 + b * U * 0.28 + J * U * 0.04,
                a = 0.5 + Math.abs(Math.sin(l * 12 + b + h)) * 0.8;
              ((n.fillStyle = A),
                (n.globalAlpha = 0.72 * a),
                n.beginPath(),
                n.arc(z, k, U * 0.05 * a, 0, Math.PI * 2),
                n.fill(),
                (n.globalAlpha = 1));
            }
          }
          ((n.strokeStyle = m(D, 26)),
            (n.lineWidth = M * 0.6),
            (n.globalAlpha = 0.62),
            n.beginPath(),
            n.moveTo(U * 0.04, -U * 0.18),
            n.lineTo(h * U * 0.68, -U * 0.52),
            n.stroke(),
            n.beginPath(),
            n.moveTo(U * 0.1, U * 0.04),
            n.lineTo(h * U * 1.02, -U * 0.06),
            n.stroke(),
            n.beginPath(),
            n.moveTo(U * 0.06, U * 0.22),
            n.lineTo(h * U * 1.08, U * 0.38),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.fillStyle = W),
            (n.globalAlpha = 0.38),
            n.beginPath(),
            n.moveTo(h * U * 0.14, -U * 0.12),
            n.quadraticCurveTo(h * U * 0.58, -U * 0.1, h * U * 0.76, U * 0.24),
            n.quadraticCurveTo(h * U * 0.32, U * 0.3, h * U * 0.14, U * 0.14),
            n.closePath(),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = V),
            (n.strokeStyle = C),
            (n.lineWidth = M * 0.8),
            n.beginPath(),
            n.moveTo(h * U * 0.22, -U * 0.78),
            n.lineTo(h * U * 0.18, -U * 0.92),
            n.lineTo(h * U * 0.28, -U * 0.8),
            n.closePath(),
            n.fill(),
            n.stroke(),
            n.restore());
        }),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let G = n.createLinearGradient(0, -U * 0.92, 0, U * 0.92);
        if (
          (G.addColorStop(0, K),
          G.addColorStop(1, H),
          (n.fillStyle = G),
          (n.strokeStyle = C),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(0, -U * 0.96),
          n.bezierCurveTo(
            -U * 0.2,
            -U * 0.72,
            -U * 0.58,
            -U * 0.28,
            -U * 0.5,
            U * 0.22,
          ),
          n.bezierCurveTo(
            -U * 0.42,
            U * 0.68,
            -U * 0.18,
            U * 0.94,
            0,
            U * 0.96,
          ),
          n.bezierCurveTo(
            U * 0.18,
            U * 0.94,
            U * 0.42,
            U * 0.68,
            U * 0.5,
            U * 0.22,
          ),
          n.bezierCurveTo(
            U * 0.58,
            -U * 0.28,
            U * 0.2,
            -U * 0.72,
            0,
            -U * 0.96,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -U * 0.2,
            -U * 0.32,
            U * 0.3,
            U * 0.14,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.38),
          n.beginPath(),
          n.ellipse(0, U * 0.32, U * 0.24, U * 0.4, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          !v)
        ) {
          let h = 0.7 + Math.abs(Math.sin(l * 10)) * 0.6;
          ((n.strokeStyle = B),
            (n.lineWidth = M * 0.95),
            (n.globalAlpha = 0.92 * h),
            n.beginPath(),
            n.moveTo(-U * 0.32, -U * 0.42),
            n.lineTo(-U * 0.1, -U * 0.18),
            n.lineTo(U * 0.12, U * 0.06),
            n.lineTo(U * 0.18, U * 0.42),
            n.stroke(),
            n.beginPath(),
            n.moveTo(U * 0.28, -U * 0.38),
            n.lineTo(U * 0.08, -U * 0.1),
            n.lineTo(-U * 0.14, U * 0.18),
            n.stroke(),
            (n.strokeStyle = P),
            (n.lineWidth = M * 0.6),
            (n.globalAlpha = 0.78 * h),
            n.beginPath(),
            n.moveTo(-U * 0.28, -U * 0.36),
            n.lineTo(-U * 0.06, -U * 0.14),
            n.lineTo(U * 0.08, U * 0.14),
            n.stroke(),
            n.beginPath(),
            n.moveTo(U * 0.24, -U * 0.3),
            n.lineTo(U * 0.04, -U * 0.06),
            n.stroke(),
            (n.globalAlpha = 1));
          for (let i = 0; i < 3; i++) {
            let b = (i - 1) * U * 0.18 + Math.sin(l * 6 + i) * U * 0.05,
              z = -U * 0.22 + i * U * 0.26,
              k = 0.5 + Math.abs(Math.sin(l * 12 + i * 1.9)) * 0.7;
            ((n.fillStyle = A),
              (n.globalAlpha = 0.72 * k),
              n.beginPath(),
              n.arc(b, z, U * 0.05 * k, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = B),
              (n.globalAlpha = 0.62 * k),
              n.beginPath(),
              n.arc(b, z, U * 0.025 * k, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          }
        }
        if (
          (n.restore(),
          n.save(),
          n.scale(Z, Z),
          [-1, 1].forEach((h) => {
            let i = h * U * 0.34,
              b = -U * 0.84,
              z = U * 0.42,
              k = U * 0.9;
            if (
              ((n.fillStyle = m(H, -10)),
              (n.strokeStyle = C),
              (n.lineWidth = M),
              n.beginPath(),
              n.moveTo(i - z * 0.46, b + k * 0.2),
              n.lineTo(i + h * z * 0.1, b - k * 0.78),
              n.lineTo(i + z * 0.52, b + k * 0.16),
              n.quadraticCurveTo(
                i + z * 0.14,
                b + k * 0.02,
                i - z * 0.46,
                b + k * 0.2,
              ),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#e9d5ff"),
              n.beginPath(),
              n.moveTo(i - z * 0.22, b + k * 0.06),
              n.lineTo(i + h * z * 0.04, b - k * 0.46),
              n.lineTo(i + z * 0.28, b + k * 0.04),
              n.closePath(),
              n.fill(),
              !v)
            )
              ((n.strokeStyle = B),
                (n.lineWidth = M * 0.7),
                (n.globalAlpha = 0.82),
                n.beginPath(),
                n.moveTo(i + h * z * 0.02, b - k * 0.3),
                n.lineTo(i + h * z * 0.08, b - k * 0.1),
                n.lineTo(i + z * 0.18, b + k * 0.02),
                n.stroke(),
                (n.globalAlpha = 1));
            ((n.fillStyle = "rgba(255,255,255,0.46)"),
              n.beginPath(),
              n.ellipse(
                i + h * z * 0.04,
                b - k * 0.12,
                z * 0.1,
                k * 0.07,
                h * 0.15,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          !v)
        )
          [-1, 1].forEach((h) => {
            let i = h * U * 0.18,
              b = -U * 0.92,
              z = 0.7 + Math.abs(Math.sin(l * 13 + h)) * 0.6;
            ((n.fillStyle = B),
              (n.strokeStyle = C),
              (n.lineWidth = M * 0.8),
              (n.globalAlpha = 0.92 * z),
              n.beginPath(),
              n.moveTo(i, b),
              n.lineTo(h * U * 0.08 + i, b - U * 0.32),
              n.lineTo(h * U * 0.22 + i, b - U * 0.18),
              n.lineTo(h * U * 0.16 + i, b - U * 0.04),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = A),
              (n.globalAlpha = 0.96 * z),
              n.beginPath(),
              n.arc(
                h * U * 0.16 + i,
                b - U * 0.22,
                U * 0.06 * z,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.globalAlpha = 1),
              (n.fillStyle = "rgba(250,204,21,0.32)"),
              (n.globalAlpha = 0.6 * z),
              n.beginPath(),
              n.arc(
                h * U * 0.14 + i,
                b - U * 0.24,
                U * 0.14 * z,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.globalAlpha = 1));
          });
        n.restore();
        let d = -U * 0.22;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((h) => {
              let i = h * U * 0.22;
              (n.beginPath(),
                n.moveTo(i - U * 0.11, d - U * 0.11),
                n.lineTo(i + U * 0.11, d + U * 0.11),
                n.moveTo(i + U * 0.11, d - U * 0.11),
                n.lineTo(i - U * 0.11, d + U * 0.11),
                n.stroke());
            }));
        else
          [-1, 1].forEach((h) => {
            let i = h * U * 0.22,
              b = n.createRadialGradient(i, d, U * 0.04, i, d, U * 0.34);
            (b.addColorStop(0, "rgba(250,204,21,0.55)"),
              b.addColorStop(0.35, "rgba(167,139,250,0.40)"),
              b.addColorStop(1, "rgba(167,139,250,0)"),
              (n.fillStyle = b),
              n.beginPath(),
              n.arc(i, d, U * 0.34, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fefce8"),
              n.beginPath(),
              n.ellipse(i, d, U * 0.2, U * 0.24, 0, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = C),
              (n.lineWidth = M * 0.7),
              n.stroke(),
              (n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(i, d + U * 0.02, U * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(i - U * 0.032, d - U * 0.02, U * 0.03, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = B),
              (n.globalAlpha = 0.92),
              n.beginPath(),
              n.arc(i + U * 0.03, d + U * 0.04, U * 0.028, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          });
        if (!v) {
          ((n.fillStyle = "#ddd6fe"),
            (n.globalAlpha = 0.92),
            n.beginPath(),
            n.ellipse(0, d + U * 0.3, U * 0.11, U * 0.08, 0, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.ellipse(0, d + U * 0.26, U * 0.045, U * 0.034, 0, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = M * 0.9),
            n.beginPath(),
            n.moveTo(-U * 0.09, d + U * 0.36),
            n.quadraticCurveTo(-U * 0.03, d + U * 0.4, 0, d + U * 0.34),
            n.quadraticCurveTo(U * 0.03, d + U * 0.4, U * 0.09, d + U * 0.36),
            n.stroke());
          let h = 0.6 + Math.abs(Math.sin(l * 14)) * 0.7;
          ((n.fillStyle = A),
            (n.globalAlpha = 0.72 * h),
            n.beginPath(),
            n.arc(0, d + U * 0.26, U * 0.08 * h, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1));
        }
        if (
          ((n.fillStyle = V),
          (n.strokeStyle = C),
          (n.lineWidth = M),
          [-1, 1].forEach((h) => {
            (n.save(),
              n.translate(h * U * 0.2, U * 0.8),
              n.rotate(h * 0.12),
              n.beginPath(),
              n.ellipse(0, 0, U * 0.14, U * 0.16, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#facc15"),
              (n.strokeStyle = C),
              (n.lineWidth = M * 0.7));
            for (let i = -1; i <= 1; i++)
              (n.beginPath(),
                n.moveTo(i * U * 0.05, U * 0.1),
                n.lineTo(i * U * 0.06, U * 0.2),
                n.lineTo(i * U * 0.02, U * 0.12),
                n.closePath(),
                n.fill(),
                n.stroke());
            ((n.fillStyle = V), n.restore());
          }),
          !v)
        )
          for (let h = 0; h < 4; h++) {
            let i = Math.sin(l * 2.2 + h * 1.7) * U * 0.86,
              b =
                -U * 0.42 +
                Math.cos(l * 3.4 + h) * U * 0.38 +
                Math.sin(l * 7 + h) * U * 0.06,
              z = 0.32 + Math.abs(Math.sin(l * 8 + h * 2.1)) * 0.6;
            ((n.globalAlpha = z),
              (n.fillStyle = h % 2 === 0 ? B : P),
              n.beginPath(),
              n.arc(i, b, U * 0.04, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(i, b, U * 0.016, 0, Math.PI * 2),
              n.fill(),
              (n.globalAlpha = 1));
          }
      }
      function UJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = u * 1.18;
        (n.save(), n.translate(J * Q * 0.05, 0));
        let M = -Q * 0.64;
        ((n.fillStyle = m(o, -22)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.92),
          n.beginPath(),
          n.moveTo(M, -Q * 0.18),
          n.bezierCurveTo(
            M - Q * 0.26,
            -Q * 0.38 - J * Q * 0.08,
            -Q * 1.22,
            -Q * 0.66,
            -Q * 1.48,
            -Q * 0.52,
          ),
          n.bezierCurveTo(
            -Q * 1.32,
            -Q * 0.3,
            -Q * 1.1,
            -Q * 0.14,
            M + Q * 0.06,
            -Q * 0.06,
          ),
          n.bezierCurveTo(
            -Q * 1.06,
            Q * 0.08,
            -Q * 1.24,
            Q * 0.34,
            -Q * 1.42,
            Q * 0.56,
          ),
          n.bezierCurveTo(-Q * 1.16, Q * 0.7, -Q * 0.8, Q * 0.5, M, Q * 0.2),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.18)"),
          n.beginPath(),
          n.ellipse(
            -Q * 0.96,
            -Q * 0.2,
            Q * 0.14,
            Q * 0.06,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          n.save(),
          n.translate(0, -Q * 0.36),
          n.scale(Z, Z),
          (n.fillStyle = m(o, -14)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(Q * 0.04, Q * 0.18),
          n.bezierCurveTo(
            Q * 0.1,
            -Q * 0.18,
            Q * 0.2,
            -Q * 0.74,
            Q * 0.34,
            -Q * 0.92,
          ),
          n.bezierCurveTo(
            Q * 0.52,
            -Q * 0.64,
            Q * 0.66,
            -Q * 0.3,
            Q * 0.66,
            Q * 0.12,
          ),
          n.bezierCurveTo(
            Q * 0.44,
            Q * 0.2,
            Q * 0.2,
            Q * 0.22,
            Q * 0.04,
            Q * 0.18,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.20)"),
          n.beginPath(),
          n.ellipse(
            Q * 0.34,
            -Q * 0.3,
            Q * 0.12,
            Q * 0.08,
            -0.38,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let H = n.createLinearGradient(0, -Q * 0.62, 0, Q * 0.62);
        (H.addColorStop(0, m(o, 40)),
          H.addColorStop(1, o),
          (n.fillStyle = H),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(Q * 1.46, -Q * 0.06),
          n.bezierCurveTo(
            Q * 1.1,
            -Q * 0.34,
            Q * 0.44,
            -Q * 0.6,
            -Q * 0.12,
            -Q * 0.54,
          ),
          n.bezierCurveTo(
            -Q * 0.48,
            -Q * 0.5,
            -Q * 0.74,
            -Q * 0.34,
            -Q * 0.8,
            -Q * 0.16,
          ),
          n.lineTo(-Q * 0.8, Q * 0.16),
          n.bezierCurveTo(
            -Q * 0.7,
            Q * 0.44,
            -Q * 0.32,
            Q * 0.6,
            Q * 0.2,
            Q * 0.48,
          ),
          n.bezierCurveTo(
            Q * 0.74,
            Q * 0.34,
            Q * 1.2,
            Q * 0.12,
            Q * 1.46,
            -Q * 0.06,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#bae6fd"),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.ellipse(Q * 0.34, Q * 0.26, Q * 0.6, Q * 0.24, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -Q * 0.06,
            -Q * 0.3,
            Q * 0.36,
            Q * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.strokeStyle = m(o, -34)),
          (n.lineWidth = e * 1.1),
          (n.globalAlpha = 0.68),
          n.beginPath(),
          n.moveTo(Q * 0.14, -Q * 0.2),
          n.lineTo(Q * 0.24, -Q * 0.12),
          n.moveTo(Q * 0.2, -Q * 0.24),
          n.lineTo(Q * 0.3, -Q * 0.16),
          n.moveTo(Q * 0.08, -Q * 0.16),
          n.lineTo(Q * 0.18, -Q * 0.08),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = m(o, -10)),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(Q * 0.14, Q * 0.12),
          n.bezierCurveTo(
            Q * 0.36,
            Q * 0.4,
            Q * 0.06,
            Q * 0.66,
            -Q * 0.16,
            Q * 0.5,
          ),
          n.bezierCurveTo(
            -Q * 0.02,
            Q * 0.3,
            Q * 0.02,
            Q * 0.12,
            Q * 0.14,
            Q * 0.12,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.16)"),
          n.beginPath(),
          n.ellipse(Q * 0.1, Q * 0.22, Q * 0.1, Q * 0.05, -0.2, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(Q * 1.26, Q * 0.02),
          n.quadraticCurveTo(Q * 1.36, Q * 0.08, Q * 1.2, Q * 0.1),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(
            Q * 1.12,
            -Q * 0.08,
            Q * 0.045,
            Q * 0.032,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore());
        let K = Q * 0.64,
          V = -Q * 0.14;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            n.beginPath(),
            n.moveTo(K - Q * 0.08, V - Q * 0.08),
            n.lineTo(K + Q * 0.08, V + Q * 0.08),
            n.moveTo(K + Q * 0.08, V - Q * 0.08),
            n.lineTo(K - Q * 0.08, V + Q * 0.08),
            n.stroke());
        else
          ((n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.arc(K, V, Q * 0.09, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(K - Q * 0.028, V - Q * 0.028, Q * 0.03, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#1e293b"),
            (n.globalAlpha = 0.68),
            n.beginPath(),
            n.arc(K - Q * 0.22, V + Q * 0.06, Q * 0.068, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1));
        if (!v)
          [
            {
              x: -Q * 0.92,
              y: -Q * 0.44 + Math.sin(l * 2.1) * Q * 0.05,
              r: Q * 0.06,
            },
            {
              x: -Q * 1.08,
              y: -Q * 0.14 + Math.sin(l * 2.7 + 1) * Q * 0.04,
              r: Q * 0.045,
            },
            {
              x: Q * 0.84,
              y: -Q * 0.44 + Math.sin(l * 3.2 + 2) * Q * 0.03,
              r: Q * 0.035,
            },
          ].forEach((D) => {
            ((n.fillStyle = "rgba(255,255,255,0.55)"),
              (n.strokeStyle = "rgba(56,189,248,0.45)"),
              (n.lineWidth = Math.max(1, e * 0.7)),
              n.beginPath(),
              n.arc(D.x, D.y, D.r, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.85)"),
              n.beginPath(),
              n.arc(
                D.x - D.r * 0.25,
                D.y - D.r * 0.22,
                D.r * 0.28,
                0,
                Math.PI * 2,
              ),
              n.fill());
          });
      }
      function MJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = u * 1.18,
          M = "#4ade80",
          H = m(M, -38),
          K = "#bbf7d0";
        (n.save(), n.translate(J * Q * 0.05, 0));
        let V = -Q * 0.64;
        ((n.fillStyle = m(o, -20)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.92),
          n.beginPath(),
          n.moveTo(V, -Q * 0.18),
          n.bezierCurveTo(
            V - Q * 0.26,
            -Q * 0.38 - J * Q * 0.08,
            -Q * 1.22,
            -Q * 0.66,
            -Q * 1.48,
            -Q * 0.52,
          ),
          n.bezierCurveTo(
            -Q * 1.32,
            -Q * 0.3,
            -Q * 1.1,
            -Q * 0.14,
            V + Q * 0.06,
            -Q * 0.06,
          ),
          n.bezierCurveTo(
            -Q * 1.06,
            Q * 0.08,
            -Q * 1.24,
            Q * 0.34,
            -Q * 1.42,
            Q * 0.56,
          ),
          n.bezierCurveTo(-Q * 1.16, Q * 0.7, -Q * 0.8, Q * 0.5, V, Q * 0.2),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = e * 0.8),
          [
            { x: V - Q * 0.18, y: -Q * 0.08, r: Q * 0.22, ang: -0.2 },
            { x: V - Q * 0.12, y: Q * 0.12, r: Q * 0.2, ang: 0.25 },
          ].forEach((E) => {
            (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.ang + J * 0.18),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                E.r * 0.4,
                -E.r * 0.3,
                E.r * 0.6,
                -E.r * 0.6,
                E.r * 0.2,
                -E.r * 0.9,
              ),
              n.bezierCurveTo(
                -E.r * 0.2,
                -E.r * 0.6,
                -E.r * 0.3,
                -E.r * 0.2,
                0,
                0,
              ),
              n.closePath(),
              n.fill(),
              n.stroke(),
              n.restore());
          }),
          n.restore(),
          n.save(),
          n.translate(0, -Q * 0.36),
          n.scale(Z, Z),
          (n.fillStyle = m(o, -14)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(Q * 0.04, Q * 0.18),
          n.bezierCurveTo(
            Q * 0.1,
            -Q * 0.18,
            Q * 0.2,
            -Q * 0.74,
            Q * 0.34,
            -Q * 0.92,
          ),
          n.bezierCurveTo(
            Q * 0.52,
            -Q * 0.64,
            Q * 0.66,
            -Q * 0.3,
            Q * 0.66,
            Q * 0.12,
          ),
          n.bezierCurveTo(
            Q * 0.44,
            Q * 0.2,
            Q * 0.2,
            Q * 0.22,
            Q * 0.04,
            Q * 0.18,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(M, -8)),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.moveTo(Q * 0.08, Q * 0.1),
          n.bezierCurveTo(
            Q * 0.14,
            -Q * 0.22,
            Q * 0.28,
            -Q * 0.58,
            Q * 0.4,
            -Q * 0.62,
          ),
          n.bezierCurveTo(
            Q * 0.46,
            -Q * 0.4,
            Q * 0.48,
            -Q * 0.08,
            Q * 0.42,
            Q * 0.1,
          ),
          n.bezierCurveTo(
            Q * 0.28,
            Q * 0.14,
            Q * 0.14,
            Q * 0.14,
            Q * 0.08,
            Q * 0.1,
          ),
          n.closePath(),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = H),
          (n.lineWidth = e * 0.7),
          n.stroke(),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let C = n.createLinearGradient(0, -Q * 0.62, 0, Q * 0.62);
        (C.addColorStop(0, m(o, 40)),
          C.addColorStop(1, o),
          (n.fillStyle = C),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(Q * 1.46, -Q * 0.06),
          n.bezierCurveTo(
            Q * 1.1,
            -Q * 0.34,
            Q * 0.44,
            -Q * 0.6,
            -Q * 0.12,
            -Q * 0.54,
          ),
          n.bezierCurveTo(
            -Q * 0.48,
            -Q * 0.5,
            -Q * 0.74,
            -Q * 0.34,
            -Q * 0.8,
            -Q * 0.16,
          ),
          n.lineTo(-Q * 0.8, Q * 0.16),
          n.bezierCurveTo(
            -Q * 0.7,
            Q * 0.44,
            -Q * 0.32,
            Q * 0.6,
            Q * 0.2,
            Q * 0.48,
          ),
          n.bezierCurveTo(
            Q * 0.74,
            Q * 0.34,
            Q * 1.2,
            Q * 0.12,
            Q * 1.46,
            -Q * 0.06,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#bae6fd"),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.ellipse(Q * 0.34, Q * 0.26, Q * 0.6, Q * 0.24, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = K),
          (n.globalAlpha = 0.42),
          n.beginPath(),
          n.ellipse(Q * 0.28, Q * 0.32, Q * 0.44, Q * 0.12, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -Q * 0.06,
            -Q * 0.3,
            Q * 0.36,
            Q * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = e * 0.75),
          [
            {
              x: Q * 0.1,
              y: -Q * 0.34,
              rx: Q * 0.26,
              ry: Q * 0.14,
              rot: -0.18,
            },
            {
              x: -Q * 0.18,
              y: -Q * 0.28,
              rx: Q * 0.22,
              ry: Q * 0.12,
              rot: -0.32,
            },
            { x: Q * 0.52, y: -Q * 0.18, rx: Q * 0.18, ry: Q * 0.1, rot: 0.12 },
            {
              x: Q * 0.04,
              y: -Q * 0.06,
              rx: Q * 0.16,
              ry: Q * 0.09,
              rot: 0.08,
            },
          ].forEach((E) => {
            (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.rot),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                E.rx * 0.5,
                -E.ry * 0.6,
                E.rx * 0.3,
                -E.ry * 1.2,
                0,
                -E.ry,
              ),
              n.bezierCurveTo(
                -E.rx * 0.4,
                -E.ry * 0.8,
                -E.rx * 0.3,
                -E.ry * 0.1,
                0,
                0,
              ),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = m(M, -18)),
              (n.lineWidth = e * 0.5),
              (n.globalAlpha = 0.6),
              n.beginPath(),
              n.moveTo(0, -E.ry * 0.08),
              n.lineTo(0, -E.ry * 0.82),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.strokeStyle = H),
              n.restore());
          }),
          (n.fillStyle = m(o, -10)),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(Q * 0.14, Q * 0.12),
          n.bezierCurveTo(
            Q * 0.36,
            Q * 0.4,
            Q * 0.06,
            Q * 0.66,
            -Q * 0.16,
            Q * 0.5,
          ),
          n.bezierCurveTo(
            -Q * 0.02,
            Q * 0.3,
            Q * 0.02,
            Q * 0.12,
            Q * 0.14,
            Q * 0.12,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = e * 0.6),
          n.beginPath(),
          n.ellipse(
            -Q * 0.1,
            Q * 0.48,
            Q * 0.12,
            Q * 0.06,
            0.22,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(Q * 1.26, Q * 0.02),
          n.quadraticCurveTo(Q * 1.36, Q * 0.08, Q * 1.2, Q * 0.1),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(
            Q * 1.12,
            -Q * 0.08,
            Q * 0.045,
            Q * 0.032,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          n.save(),
          n.scale(Z, Z));
        let W = Q * 0.46,
          B = -Q * 0.52;
        ((n.fillStyle = m(M, 6)),
          (n.strokeStyle = H),
          (n.lineWidth = e),
          [
            { x: W - Q * 0.14, y: B + Q * 0.08, rot: -0.52, s: 1 },
            { x: W + Q * 0.06, y: B, rot: 0.05, s: 1.15 },
            { x: W + Q * 0.22, y: B + Q * 0.12, rot: 0.48, s: 0.92 },
          ].forEach((E) => {
            (n.save(),
              n.translate(E.x, E.y),
              n.rotate(E.rot),
              n.scale(E.s, E.s),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                Q * 0.18,
                -Q * 0.18,
                Q * 0.16,
                -Q * 0.48,
                0,
                -Q * 0.56,
              ),
              n.bezierCurveTo(-Q * 0.16, -Q * 0.44, -Q * 0.14, -Q * 0.14, 0, 0),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = m(M, -18)),
              (n.lineWidth = e * 0.5),
              (n.globalAlpha = 0.7),
              n.beginPath(),
              n.moveTo(0, -Q * 0.06),
              n.lineTo(0, -Q * 0.46),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.strokeStyle = H),
              n.restore());
          }),
          [
            {
              x: W - Q * 0.08,
              y: B - Q * 0.18,
              col: "#fff",
              center: "#fde047",
            },
            {
              x: W + Q * 0.18,
              y: B - Q * 0.24,
              col: "#fbcfe8",
              center: "#fef08a",
            },
            {
              x: W + Q * 0.02,
              y: B - Q * 0.38,
              col: "#fff",
              center: "#fde68a",
            },
          ].forEach((E) => {
            ((n.fillStyle = E.col),
              (n.strokeStyle = m(E.col, -18)),
              (n.lineWidth = e * 0.6));
            for (let q = 0; q < 5; q++) {
              let L = (q / 5) * Math.PI * 2,
                Y = E.x + Math.cos(L) * Q * 0.08,
                G = E.y + Math.sin(L) * Q * 0.08;
              (n.beginPath(),
                n.ellipse(Y, G, Q * 0.07, Q * 0.05, L, 0, Math.PI * 2),
                n.fill(),
                n.stroke());
            }
            ((n.fillStyle = E.center),
              n.beginPath(),
              n.arc(E.x, E.y, Q * 0.05, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = m(E.center, -20)),
              (n.lineWidth = e * 0.5),
              n.stroke());
          }),
          (n.fillStyle = "rgba(255,255,255,0.62)"),
          n.beginPath(),
          n.arc(W + Q * 0.1, B - Q * 0.08, Q * 0.04, 0, Math.PI * 2),
          n.fill(),
          n.restore());
        let P = Q * 0.64,
          U = -Q * 0.14;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            n.beginPath(),
            n.moveTo(P - Q * 0.08, U - Q * 0.08),
            n.lineTo(P + Q * 0.08, U + Q * 0.08),
            n.moveTo(P + Q * 0.08, U - Q * 0.08),
            n.lineTo(P - Q * 0.08, U + Q * 0.08),
            n.stroke());
        else
          ((n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.arc(P, U, Q * 0.09, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(P - Q * 0.028, U - Q * 0.028, Q * 0.03, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#1e293b"),
            (n.globalAlpha = 0.66),
            n.beginPath(),
            n.arc(P - Q * 0.22, U + Q * 0.06, Q * 0.066, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1));
        if (!v) {
          [
            {
              x: -Q * 0.92,
              y: -Q * 0.42 + Math.sin(l * 2.1) * Q * 0.05,
              r: Q * 0.05,
            },
            {
              x: -Q * 1.06,
              y: -Q * 0.12 + Math.sin(l * 2.7 + 1) * Q * 0.04,
              r: Q * 0.04,
            },
          ].forEach((L) => {
            ((n.fillStyle = "rgba(255,255,255,0.52)"),
              (n.strokeStyle = "rgba(56,189,248,0.42)"),
              (n.lineWidth = Math.max(1, e * 0.7)),
              n.beginPath(),
              n.arc(L.x, L.y, L.r, 0, Math.PI * 2),
              n.fill(),
              n.stroke());
          });
          let E = Q * 0.88 + Math.sin(l * 1.8) * Q * 0.06,
            q = -Q * 0.48 + Math.cos(l * 2.2) * Q * 0.04;
          ((n.fillStyle = "rgba(251,207,232,0.82)"),
            (n.strokeStyle = "rgba(74,222,128,0.35)"),
            (n.lineWidth = e * 0.6),
            n.beginPath(),
            n.ellipse(E, q, Q * 0.06, Q * 0.04, 0.4, 0, Math.PI * 2),
            n.fill(),
            n.stroke());
        }
      }
      function HJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 2) * u * 0.1;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = "#166534",
          M = "#bbf7d0";
        if (!v)
          for (let q = 0; q < 3; q++) {
            let L = l * 2.5 + q * 2.094 + q * 0.3,
              Y = u * (0.78 + Math.sin(l * 1.8 + q) * 0.08),
              G = Math.cos(L) * Y,
              d =
                J +
                Math.sin(L * 1.3) * u * 0.42 +
                Math.sin(l * 2.2 + q) * u * 0.06,
              h = L * 0.6 + Math.sin(l * 2 + q) * 0.35;
            (n.save(),
              n.translate(G, d),
              n.rotate(h),
              n.scale(
                0.85 + Math.sin(l * 3 + q) * 0.08,
                0.85 + Math.sin(l * 3 + q) * 0.08,
              ));
            let i = u * (0.22 + (q % 2) * 0.05),
              b = n.createLinearGradient(0, -i * 0.5, 0, i * 0.2);
            (b.addColorStop(0, m(o, 26)),
              b.addColorStop(1, m(o, -6)),
              (n.fillStyle = b),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.85),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                i * 0.38,
                -i * 0.18,
                i * 0.42,
                -i * 0.58,
                0,
                -i * 0.82,
              ),
              n.bezierCurveTo(-i * 0.42, -i * 0.58, -i * 0.38, -i * 0.18, 0, 0),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = Q),
              (n.lineWidth = e * 0.55),
              (n.globalAlpha = 0.72),
              n.beginPath(),
              n.moveTo(0, -i * 0.1),
              n.lineTo(0, -i * 0.68),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.fillStyle = "rgba(255,255,255,0.22)"),
              n.beginPath(),
              n.ellipse(
                -i * 0.09,
                -i * 0.38,
                i * 0.11,
                i * 0.05,
                -0.22,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.restore());
          }
        (n.save(), n.translate(0, J));
        let H = Math.sin(l * 2) * u * 0.12,
          K = Math.sin(l * 3.1) * 0.18,
          V = -u * 0.42,
          C = u * 0.18;
        ((n.strokeStyle = f),
          (n.lineWidth = _ * 0.92),
          (n.fillStyle = m(o, -12)),
          n.beginPath(),
          n.moveTo(V, C),
          n.bezierCurveTo(
            V - u * 0.38,
            C + u * 0.14 + H * 0.3,
            -u * 0.82 - H * 0.2,
            u * 0.06 + H,
            -u * 1.12 + K * u * 0.2,
            -u * 0.12 + H * 0.4,
          ),
          n.bezierCurveTo(
            -u * 0.92,
            -u * 0.26 + H * 0.2,
            -u * 0.52,
            -u * 0.12,
            V - u * 0.06,
            C - u * 0.08,
          ),
          n.closePath(),
          n.fill(),
          n.stroke());
        for (let q = 0; q < 4; q++) {
          let L = q / 3,
            Y = V - u * (0.18 + L * 0.72) + Math.sin(l * 2 + L * 2) * u * 0.06,
            G =
              C * (1 - L * 0.6) -
              L * u * 0.24 +
              Math.cos(l * 2.4 + L) * u * 0.04,
            d = u * (0.18 - L * 0.03);
          (n.save(),
            n.translate(Y, G),
            n.rotate(-0.45 - L * 0.35 + Math.sin(l * 2 + q) * 0.15),
            (n.fillStyle = q % 2 === 0 ? m(o, 14) : M),
            (n.strokeStyle = f),
            (n.lineWidth = e * 0.7),
            n.beginPath(),
            n.moveTo(0, 0),
            n.bezierCurveTo(
              d * 0.36,
              -d * 0.14,
              d * 0.4,
              -d * 0.52,
              0,
              -d * 0.68,
            ),
            n.bezierCurveTo(-d * 0.4, -d * 0.52, -d * 0.36, -d * 0.14, 0, 0),
            n.closePath(),
            n.fill(),
            n.stroke(),
            n.restore());
        }
        (n.restore(), n.save(), n.translate(0, J), n.scale(Z, Z));
        let D = n.createLinearGradient(0, -u * 0.52, 0, u * 0.52);
        if (
          (D.addColorStop(0, m(o, 40)),
          D.addColorStop(1, o),
          (n.fillStyle = D),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(u * 0.72, -u * 0.18),
          n.bezierCurveTo(
            u * 0.48,
            -u * 0.52,
            u * 0.02,
            -u * 0.62,
            -u * 0.32,
            -u * 0.42,
          ),
          n.bezierCurveTo(
            -u * 0.56,
            -u * 0.28,
            -u * 0.62,
            u * 0.06,
            -u * 0.42,
            u * 0.28,
          ),
          n.bezierCurveTo(
            -u * 0.12,
            u * 0.48,
            u * 0.32,
            u * 0.52,
            u * 0.62,
            u * 0.26,
          ),
          n.bezierCurveTo(
            u * 0.78,
            u * 0.1,
            u * 0.8,
            -u * 0.04,
            u * 0.72,
            -u * 0.18,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.22,
            u * 0.34,
            u * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = M),
          (n.globalAlpha = 0.58),
          n.beginPath(),
          n.ellipse(u * 0.12, u * 0.22, u * 0.38, u * 0.22, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.fillStyle = Q),
          (n.globalAlpha = 0.88),
          [
            [u * 0.26, -u * 0.24, u * 0.18, -0.32],
            [u * 0.02, -u * 0.32, u * 0.15, 0.12],
            [-u * 0.22, -u * 0.16, u * 0.14, 0.42],
            [u * 0.36, u * 0.12, u * 0.12, 0.52],
          ].forEach(([q, L, Y, G]) => {
            (n.save(),
              n.translate(q, L),
              n.rotate(G),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                Y * 0.42,
                -Y * 0.16,
                Y * 0.38,
                -Y * 0.62,
                0,
                -Y * 0.78,
              ),
              n.bezierCurveTo(-Y * 0.38, -Y * 0.62, -Y * 0.42, -Y * 0.16, 0, 0),
              n.closePath(),
              n.fill(),
              (n.strokeStyle = m(Q, 28)),
              (n.lineWidth = e * 0.45),
              (n.globalAlpha = 0.55),
              n.stroke(),
              (n.globalAlpha = 0.88),
              n.restore());
          }),
          (n.globalAlpha = 1),
          (n.strokeStyle = m(o, -28)),
          (n.lineWidth = e * 0.7),
          (n.globalAlpha = 0.42),
          n.beginPath(),
          n.moveTo(-u * 0.28, -u * 0.28),
          n.bezierCurveTo(
            -u * 0.08,
            -u * 0.12,
            u * 0.18,
            -u * 0.04,
            u * 0.42,
            -u * 0.1,
          ),
          n.stroke(),
          n.beginPath(),
          n.moveTo(-u * 0.34, u * 0.08),
          n.bezierCurveTo(
            -u * 0.1,
            u * 0.18,
            u * 0.14,
            u * 0.24,
            u * 0.46,
            u * 0.16,
          ),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = m(o, -10)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.88),
          [
            {
              x: u * 0.42,
              y: u * 0.22,
              w: u * 0.26,
              h: u * 0.42,
              ang: 0.22,
              off: 0,
            },
            {
              x: u * 0.16,
              y: u * 0.28,
              w: u * 0.22,
              h: u * 0.38,
              ang: 0.12,
              off: 0.8,
            },
          ].forEach((q) => {
            (n.save(),
              n.translate(q.x, q.y),
              n.rotate(q.ang + Math.sin(l * 2.2 + q.off) * 0.06),
              n.beginPath(),
              n.ellipse(0, u * 0.12, q.w, q.h, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = m(o, -32)),
              (n.lineWidth = e * 0.6),
              (n.globalAlpha = 0.58),
              n.beginPath(),
              n.moveTo(-q.w * 0.28, -q.h * 0.22),
              n.bezierCurveTo(
                0,
                -q.h * 0.08,
                q.w * 0.18,
                q.h * 0.08,
                q.w * 0.12,
                q.h * 0.32,
              ),
              n.stroke(),
              (n.globalAlpha = 1),
              (n.strokeStyle = f),
              (n.lineWidth = _ * 0.88),
              n.save(),
              n.translate(0, q.h + u * 0.04),
              (n.fillStyle = M),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.7));
            let L = u * 0.16;
            (n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                L * 0.32,
                -L * 0.12,
                L * 0.28,
                -L * 0.48,
                0,
                -L * 0.58,
              ),
              n.bezierCurveTo(-L * 0.28, -L * 0.48, -L * 0.32, -L * 0.12, 0, 0),
              n.closePath(),
              n.fill(),
              n.stroke(),
              n.restore(),
              (n.fillStyle = m(o, -10)),
              n.restore());
          }),
          !v)
        )
          [
            { x: -u * 0.08, y: -u * 0.46, col: "#fef9c3" },
            { x: u * 0.18, y: -u * 0.42, col: "#fbcfe8" },
          ].forEach((L) => {
            ((n.fillStyle = L.col),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.55));
            for (let Y = 0; Y < 5; Y++) {
              let G = (Y / 5) * Math.PI * 2,
                d = L.x + Math.cos(G) * u * 0.06,
                h = L.y + Math.sin(G) * u * 0.06;
              (n.beginPath(),
                n.ellipse(d, h, u * 0.05, u * 0.035, G, 0, Math.PI * 2),
                n.fill(),
                n.stroke());
            }
            ((n.fillStyle = "#facc15"),
              n.beginPath(),
              n.arc(L.x, L.y, u * 0.035, 0, Math.PI * 2),
              n.fill(),
              (n.strokeStyle = f),
              (n.lineWidth = e * 0.45),
              n.stroke());
          });
        (n.restore(), n.save(), n.translate(0, J), n.scale(Z, Z));
        let B = u * 0.78,
          A = -u * 0.32,
          P = u * 0.36,
          U = n.createLinearGradient(B, A - P * 0.6, B, A + P * 0.6);
        (U.addColorStop(0, m(o, 40)),
          U.addColorStop(1, o),
          (n.fillStyle = U),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(B, A, P * 0.88, P * 0.82, 0.12, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            B - P * 0.2,
            A - P * 0.18,
            P * 0.2,
            P * 0.1,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = M),
          (n.globalAlpha = 0.92),
          n.beginPath(),
          n.ellipse(
            B + P * 0.32,
            A + P * 0.12,
            P * 0.34,
            P * 0.24,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.stroke(),
          (n.fillStyle = Q),
          n.beginPath(),
          n.ellipse(
            B + P * 0.56,
            A + P * 0.06,
            P * 0.1,
            P * 0.07,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          [-1, 1].forEach((q) => {
            let L = B + q * P * 0.14,
              Y = A - P * 0.58;
            ((n.fillStyle = m(o, -6)),
              (n.strokeStyle = f),
              (n.lineWidth = e),
              n.beginPath(),
              n.moveTo(L - P * 0.16, Y + P * 0.18),
              n.lineTo(L + q * P * 0.04, Y - P * 0.22),
              n.lineTo(L + P * 0.16, Y + P * 0.18),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = M),
              n.beginPath(),
              n.moveTo(L - P * 0.07, Y + P * 0.06),
              n.lineTo(L + q * P * 0.02, Y - P * 0.08),
              n.lineTo(L + P * 0.07, Y + P * 0.06),
              n.closePath(),
              n.fill());
          }),
          n.restore(),
          n.save(),
          n.translate(0, J));
        let E = -u * 0.32;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [
              [u * 0.7, E],
              [u * 0.88, E + u * 0.04],
            ].forEach(([q, L]) => {
              (n.beginPath(),
                n.moveTo(q - u * 0.08, L - u * 0.08),
                n.lineTo(q + u * 0.08, L + u * 0.08),
                n.moveTo(q + u * 0.08, L - u * 0.08),
                n.lineTo(q - u * 0.08, L + u * 0.08),
                n.stroke());
            }));
        else {
          ([
            [u * 0.7, E],
            [u * 0.88, E + u * 0.04],
          ].forEach(([q, L]) => {
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(q, L, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(q - u * 0.028, L - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill());
          }),
            (n.strokeStyle = "rgba(22,101,52,0.32)"),
            (n.lineWidth = e * 0.55));
          for (let q = -1; q <= 1; q++) {
            let L = E + u * 0.12 + q * u * 0.09;
            (n.beginPath(),
              n.moveTo(u * 0.98, L),
              n.lineTo(u * 1.16, L + q * u * 0.03),
              n.stroke());
          }
        }
        n.restore();
      }
      function DJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = "#38bdf8",
          Q = m(e, -56);
        n.save();
        let M = -u * 0.56,
          H = u * 0.22;
        ((n.fillStyle = m(o, -16)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(M, H - u * 0.18),
          n.bezierCurveTo(
            M - u * 0.38,
            H - u * 0.1,
            M - u * 0.82,
            H + u * 0.08,
            M - u * 0.88,
            H + u * 0.22,
          ),
          n.bezierCurveTo(
            M - u * 0.68,
            H + u * 0.42,
            M - u * 0.28,
            H + u * 0.42,
            M,
            H + u * 0.18,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(o, 14)),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.beginPath(),
          n.ellipse(
            M - u * 0.84,
            H + u * 0.18,
            u * 0.18,
            u * 0.12,
            0.2,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.stroke(),
          n.restore(),
          (n.fillStyle = m(o, -20)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          [
            { x: -u * 0.32, y: u * 0.84, w: u * 0.32, h: u * 0.46 },
            { x: u * 0.06, y: u * 0.86, w: u * 0.34, h: u * 0.48 },
            { x: u * 0.48, y: u * 0.8, w: u * 0.3, h: u * 0.44 },
            { x: -u * 0.58, y: u * 0.78, w: u * 0.28, h: u * 0.4 },
          ].forEach((q) => {
            (n.beginPath(),
              n.ellipse(q.x, q.y, q.w, q.h, 0, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.12)"),
              n.beginPath(),
              n.ellipse(
                q.x - q.w * 0.1,
                q.y - q.h * 0.16,
                q.w * 0.22,
                q.h * 0.12,
                -0.15,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = m(o, -20)));
          }),
          (n.fillStyle = "#e2e8f0"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.6),
          [
            { x: -u * 0.32, y: u * 1.12 },
            { x: u * 0.06, y: u * 1.14 },
            { x: u * 0.48, y: u * 1.08 },
            { x: -u * 0.58, y: u * 1.04 },
          ].forEach((q) => {
            for (let L = -1; L <= 1; L++) {
              let Y = q.x + L * u * 0.06;
              (n.beginPath(),
                n.moveTo(Y - u * 0.04, q.y),
                n.lineTo(Y, q.y + u * 0.1),
                n.lineTo(Y + u * 0.04, q.y),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }),
          n.save(),
          n.scale(Z, Z));
        let K = n.createLinearGradient(0, -u * 0.42, 0, u * 0.62);
        (K.addColorStop(0, m(o, 40)),
          K.addColorStop(1, o),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(u * 0.72, -u * 0.06),
          n.bezierCurveTo(
            u * 0.42,
            -u * 0.42,
            -u * 0.12,
            -u * 0.52,
            -u * 0.48,
            -u * 0.28,
          ),
          n.bezierCurveTo(
            -u * 0.68,
            -u * 0.08,
            -u * 0.62,
            u * 0.32,
            -u * 0.32,
            u * 0.52,
          ),
          n.bezierCurveTo(
            -u * 0.02,
            u * 0.66,
            u * 0.42,
            u * 0.58,
            u * 0.72,
            u * 0.24,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.14,
            -u * 0.18,
            u * 0.32,
            u * 0.13,
            -0.26,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = "#bae6fd"),
          (n.globalAlpha = 0.72),
          n.beginPath(),
          n.ellipse(u * 0.1, u * 0.32, u * 0.44, u * 0.22, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1));
        let V = -u * 0.06,
          C = -u * 0.44;
        ((n.fillStyle = m(e, -10)),
          (n.strokeStyle = Q),
          (n.lineWidth = J),
          n.beginPath(),
          n.ellipse(V, C, u * 0.36, u * 0.18, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke());
        let D = [
          m(o, 16),
          "#a7f3d0",
          "#7dd3fc",
          m(o, 10),
          "#bae6fd",
          m(o, 18),
          "#93c5fd",
          "#bbf7d0",
        ];
        for (let q = 0; q < 8; q++) {
          let L = (q / 8) * Math.PI * 2 - 0.15 + Math.sin(l * 1.2 + q) * 0.04,
            Y = u * (0.52 + (q % 2) * 0.12),
            G = V + Math.cos(L) * u * 0.18,
            d = C + Math.sin(L) * u * 0.08;
          (n.save(),
            n.translate(G, d),
            n.rotate(L),
            (n.fillStyle = D[q % D.length]),
            (n.strokeStyle = f),
            (n.lineWidth = J * 0.85),
            n.beginPath(),
            n.moveTo(0, 0),
            n.bezierCurveTo(
              Y * 0.32,
              -Y * 0.14,
              Y * 0.52,
              -Y * 0.38,
              Y * 0.18,
              -Y * 0.72,
            ),
            n.bezierCurveTo(-Y * 0.18, -Y * 0.56, -Y * 0.32, -Y * 0.18, 0, 0),
            n.closePath(),
            n.fill(),
            n.stroke(),
            (n.strokeStyle = m(D[q % D.length], -22)),
            (n.lineWidth = J * 0.5),
            (n.globalAlpha = 0.6),
            n.beginPath(),
            n.moveTo(Y * 0.04, -Y * 0.08),
            n.lineTo(Y * 0.14, -Y * 0.52),
            n.stroke(),
            (n.globalAlpha = 1),
            (n.fillStyle = "rgba(255,255,255,0.22)"),
            n.beginPath(),
            n.ellipse(
              Y * 0.08,
              -Y * 0.28,
              Y * 0.1,
              Y * 0.05,
              0.1,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.restore());
        }
        ((n.fillStyle = "#fef08a"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.8),
          n.beginPath(),
          n.arc(V, C - u * 0.04, u * 0.14, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m("#facc15", -10)));
        for (let q = 0; q < 5; q++) {
          let L = (q / 5) * Math.PI * 2;
          (n.beginPath(),
            n.arc(
              V + Math.cos(L) * u * 0.06,
              C - u * 0.04 + Math.sin(L) * u * 0.06,
              u * 0.02,
              0,
              Math.PI * 2,
            ),
            n.fill());
        }
        ((n.fillStyle = m(o, 8)),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.75),
          [
            { x: -u * 0.52, y: u * 0.06, rot: -0.6, s: 0.82 },
            { x: u * 0.54, y: u * 0.04, rot: 0.55, s: 0.78 },
          ].forEach((q) => {
            (n.save(),
              n.translate(q.x, q.y),
              n.rotate(q.rot),
              n.scale(q.s, q.s),
              n.beginPath(),
              n.moveTo(0, 0),
              n.bezierCurveTo(
                u * 0.18,
                -u * 0.1,
                u * 0.22,
                -u * 0.32,
                0,
                -u * 0.4,
              ),
              n.bezierCurveTo(-u * 0.22, -u * 0.32, -u * 0.18, -u * 0.1, 0, 0),
              n.closePath(),
              n.fill(),
              n.stroke(),
              n.restore());
          }),
          n.restore(),
          n.save(),
          n.scale(Z, Z),
          (n.fillStyle = m(o, 8)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.moveTo(u * 0.52, -u * 0.12),
          n.bezierCurveTo(
            u * 0.68,
            -u * 0.28,
            u * 0.82,
            -u * 0.32,
            u * 0.92,
            -u * 0.18,
          ),
          n.bezierCurveTo(
            u * 0.96,
            -u * 0.04,
            u * 0.84,
            u * 0.08,
            u * 0.62,
            u * 0.06,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = "rgba(0,0,0,0.14)"),
          (n.lineWidth = J * 0.6),
          n.beginPath(),
          n.moveTo(u * 0.66, -u * 0.18),
          n.quadraticCurveTo(u * 0.76, -u * 0.1, u * 0.72, u * 0.02),
          n.stroke());
        let W = u * 1.02,
          B = -u * 0.22,
          A = u * 0.26,
          P = n.createLinearGradient(W, B - A, W, B + A);
        (P.addColorStop(0, m(o, 40)),
          P.addColorStop(1, o),
          (n.fillStyle = P),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          n.beginPath(),
          n.ellipse(W, B, A * 0.92, A, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            W - A * 0.18,
            B - A * 0.16,
            A * 0.18,
            A * 0.08,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = "#e0f2fe"),
          (n.globalAlpha = 0.9),
          n.beginPath(),
          n.ellipse(
            W + A * 0.42,
            B + A * 0.08,
            A * 0.28,
            A * 0.2,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.8),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(
            W + A * 0.62,
            B + A * 0.04,
            A * 0.08,
            A * 0.06,
            0,
            0,
            Math.PI * 2,
          ),
          n.fill());
        for (let q = -1; q <= 1; q++) {
          let L = W + q * A * 0.14,
            Y = B - A * 0.72;
          (n.save(),
            n.translate(L, Y),
            n.rotate(q * 0.28),
            (n.fillStyle = q === 0 ? "#fef08a" : "#bae6fd"),
            (n.strokeStyle = f),
            (n.lineWidth = J * 0.6),
            n.beginPath(),
            n.moveTo(0, 0),
            n.bezierCurveTo(
              A * 0.12,
              -A * 0.1,
              A * 0.1,
              -A * 0.32,
              0,
              -A * 0.38,
            ),
            n.bezierCurveTo(-A * 0.1, -A * 0.32, -A * 0.12, -A * 0.1, 0, 0),
            n.closePath(),
            n.fill(),
            n.stroke(),
            n.restore());
        }
        n.restore();
        let U = u * 1.02,
          E = -u * 0.28;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            n.beginPath(),
            n.moveTo(U - u * 0.08, E - u * 0.08),
            n.lineTo(U + u * 0.08, E + u * 0.08),
            n.moveTo(U + u * 0.08, E - u * 0.08),
            n.lineTo(U - u * 0.08, E + u * 0.08),
            n.stroke());
        else {
          ((n.fillStyle = "#1e293b"),
            n.beginPath(),
            n.arc(U, E, u * 0.09, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#fff"),
            n.beginPath(),
            n.arc(U - u * 0.028, E - u * 0.028, u * 0.03, 0, Math.PI * 2),
            n.fill(),
            (n.fillStyle = "#1e293b"),
            (n.globalAlpha = 0.72),
            n.beginPath(),
            n.arc(U - u * 0.14, E + u * 0.04, u * 0.066, 0, Math.PI * 2),
            n.fill(),
            (n.globalAlpha = 1),
            (n.strokeStyle = "#1e293b"),
            (n.lineWidth = J),
            n.beginPath(),
            n.moveTo(u * 1.18, u * -0.06),
            n.quadraticCurveTo(u * 1.22, u * 0.02, u * 1.14, u * 0.06),
            n.stroke(),
            (n.fillStyle = "rgba(244,114,182,0.38)"),
            n.beginPath(),
            n.arc(u * 1.08, u * 0.02, u * 0.08, 0, Math.PI * 2),
            n.fill());
          let q = -u * 0.52 + Math.sin(l * 2.1) * u * 0.05;
          ((n.fillStyle = "rgba(255,255,255,0.52)"),
            (n.strokeStyle = "rgba(56,189,248,0.42)"),
            (n.lineWidth = Math.max(1, J * 0.7)),
            n.beginPath(),
            n.arc(u * 0.82, q, u * 0.05, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = "rgba(255,255,255,0.82)"),
            n.beginPath(),
            n.arc(u * 0.8, q - u * 0.012, u * 0.014, 0, Math.PI * 2),
            n.fill());
        }
      }
      function CJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03,
          J = Math.sin(l * 9);
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          Q = -u * 0.82,
          M = u * 0.58,
          H = u * 0.32;
        ou(n, Q, M, H, J * 0.6);
        let K = n.createLinearGradient(Q - H * 0.5, M, Q + H * 0.5, M - H);
        (K.addColorStop(0, m(o, -20)),
          K.addColorStop(1, m(o, 30)),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.fill(),
          n.stroke(),
          ou(n, Q, M - H * 0.08, H * 0.5, J * 0.9),
          (n.fillStyle = "#fde047"),
          n.fill(),
          n.save(),
          n.scale(Z, Z),
          (n.fillStyle = m(o, -28)),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          [-1, 1].forEach((L) => {
            (n.beginPath(),
              n.ellipse(
                L * u * 0.52,
                u * 0.88,
                u * 0.32,
                u * 0.2,
                L * 0.15,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.22)"),
              n.beginPath(),
              n.ellipse(
                L * u * 0.52,
                u * 0.95,
                u * 0.14,
                u * 0.07,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = m(o, -28)));
          }),
          n.restore(),
          n.save(),
          n.translate(0, u * 0.32),
          n.scale(Z, Z));
        let V = n.createLinearGradient(0, -u * 0.6, 0, u * 0.7);
        (V.addColorStop(0, m(o, 42)),
          V.addColorStop(1, o),
          (n.fillStyle = V),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.moveTo(-u * 0.48, -u * 0.1),
          n.bezierCurveTo(-u * 0.58, u * 0.2, -u * 0.42, u * 0.72, 0, u * 0.72),
          n.bezierCurveTo(
            u * 0.42,
            u * 0.72,
            u * 0.58,
            u * 0.2,
            u * 0.48,
            -u * 0.1,
          ),
          n.bezierCurveTo(
            u * 0.28,
            -u * 0.35,
            -u * 0.28,
            -u * 0.35,
            -u * 0.48,
            -u * 0.1,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.28,
            -u * 0.08,
            u * 0.24,
            u * 0.11,
            -0.35,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.72),
          n.beginPath(),
          n.ellipse(0, u * 0.28, u * 0.34, u * 0.32, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1));
        let C = u * 0.09 * (1 + Math.sin(l * 5.1) * 0.18),
          D = n.createRadialGradient(0, u * 0.08, C * 0.1, 0, u * 0.08, C);
        (D.addColorStop(0, "#fff7d6"),
          D.addColorStop(0.6, "#fde047"),
          D.addColorStop(1, "#f97316"),
          (n.fillStyle = D),
          n.beginPath(),
          n.arc(0, u * 0.08, Math.max(1.5, C), 0, Math.PI * 2),
          n.fill(),
          n.restore(),
          (n.fillStyle = f),
          (n.strokeStyle = m(f, -20)),
          (n.lineWidth = e),
          [-1, 1].forEach((L) => {
            (n.beginPath(),
              n.ellipse(
                L * u * 0.26,
                u * 0.72,
                u * 0.14,
                u * 0.18,
                L * 0.2,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          n.save(),
          n.translate(0, -u * 0.32),
          n.scale(Z * 1.02, Z * 1.02));
        let W = n.createLinearGradient(0, -u * 0.6, 0, u * 0.5);
        (W.addColorStop(0, m(o, 38)),
          W.addColorStop(1, m(o, -5)),
          (n.fillStyle = W),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, 0, u * 0.62, u * 0.56, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#fff7ed"),
          (n.globalAlpha = 0.9),
          n.beginPath(),
          n.ellipse(0, u * 0.22, u * 0.24, u * 0.18, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.32)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.22,
            -u * 0.22,
            u * 0.18,
            u * 0.09,
            -0.4,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.restore(),
          [
            [-u * 0.46, -u * 0.78, u * 0.3],
            [u * 0.46, -u * 0.78, u * 0.3],
          ].forEach(([L, Y, G], d) => {
            let h = Math.sin(l * 9 + d * 2.3) * 0.5;
            ou(n, L, Y, G, h);
            let i = n.createLinearGradient(L - G * 0.5, Y, L + G * 0.5, Y - G);
            (i.addColorStop(0, m(o, -25)),
              i.addColorStop(1, m(o, 35)),
              (n.fillStyle = i),
              (n.strokeStyle = f),
              (n.lineWidth = e),
              n.fill(),
              n.stroke(),
              ou(n, L, Y - G * 0.06, G * 0.52, h * 1.1),
              (n.fillStyle = "#fde047"),
              n.fill());
          }));
        let A = 0,
          P = -u * 0.88,
          U = u * 0.42;
        ou(n, A, P, U, J);
        let E = n.createLinearGradient(A - U * 0.5, P, A + U * 0.5, P - U);
        (E.addColorStop(0, m(o, -30)),
          E.addColorStop(1, m(o, 30)),
          (n.fillStyle = E),
          (n.strokeStyle = f),
          (n.lineWidth = e),
          n.fill(),
          n.stroke(),
          ou(n, A, P - U * 0.05, U * 0.52, J * 1.15),
          (n.fillStyle = "#fde047"),
          n.fill());
        let q = -u * 0.26;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((L) => {
              let Y = L * u * 0.2;
              (n.beginPath(),
                n.moveTo(Y - u * 0.08, q - u * 0.08),
                n.lineTo(Y + u * 0.08, q + u * 0.08),
                n.moveTo(Y + u * 0.08, q - u * 0.08),
                n.lineTo(Y - u * 0.08, q + u * 0.08),
                n.stroke());
            }));
        else
          [-1, 1].forEach((L) => {
            let Y = L * u * 0.2;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(Y, q, u * 0.09, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(Y - u * 0.028, q - u * 0.028, u * 0.03, 0, Math.PI * 2),
              n.fill());
          });
        ((n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, -u * 0.06, u * 0.05, u * 0.04, 0, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#fb923c"),
          [-1, 1].forEach((L) => {
            (n.beginPath(),
              n.arc(L * u * 0.42, -u * 0.02, u * 0.09, 0, Math.PI * 2),
              n.fill());
          }));
      }
      function qJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 9),
          Q = -u * 0.72,
          M = u * 0.78,
          H = u * 0.56;
        ou(n, Q, M, H, e * 0.7);
        let K = n.createLinearGradient(Q - H * 0.5, M, Q + H * 0.5, M - H);
        (K.addColorStop(0, m(o, -20)),
          K.addColorStop(1, m(o, 30)),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.fill(),
          n.stroke(),
          ou(n, Q, M - H * 0.06, H * 0.52, e * 1.1),
          (n.fillStyle = "#fde047"),
          n.fill(),
          (n.fillStyle = m(o, -28)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.85),
          [-1, 1].forEach((P) => {
            (n.beginPath(),
              n.ellipse(
                P * u * 0.3,
                u * 0.96,
                u * 0.28,
                u * 0.38,
                P * 0.08,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.18)"),
              n.beginPath(),
              n.ellipse(
                P * u * 0.3,
                u * 1.14,
                u * 0.16,
                u * 0.09,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = m(o, -28)));
          }),
          (n.fillStyle = "#e2e8f0"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((P) => {
            for (let U = -1; U <= 1; U++) {
              let E = P * u * 0.3 + U * u * 0.09,
                q = u * 1.22;
              (n.beginPath(),
                n.moveTo(E - u * 0.05, q),
                n.lineTo(E, q + u * 0.14),
                n.lineTo(E + u * 0.05, q),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }),
          n.save(),
          n.scale(Z, Z),
          [
            [-u * 0.18, -u * 0.38, u * 0.62],
            [-u * 0.32, -u * 0.02, u * 0.54],
            [-u * 0.4, u * 0.3, u * 0.46],
          ].forEach(([P, U, E], q) => {
            let L = Math.sin(l * 8.5 + q * 1.9) * 0.9;
            ou(n, P, U, E, L);
            let Y = n.createLinearGradient(P - E * 0.5, U, P + E * 0.5, U - E);
            (Y.addColorStop(0, m(o, -22)),
              Y.addColorStop(1, m(o, 32)),
              (n.fillStyle = Y),
              (n.strokeStyle = f),
              (n.lineWidth = J),
              n.fill(),
              n.stroke(),
              ou(n, P, U - E * 0.05, E * 0.48, L * 1.2),
              (n.fillStyle = "#fde047"),
              n.fill());
          }));
        let C = n.createLinearGradient(0, -u * 0.5, 0, u * 1.1);
        (C.addColorStop(0, m(o, 40)),
          C.addColorStop(1, o),
          (n.fillStyle = C),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.22, u * 0.66, u * 0.78, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.22,
            -u * 0.18,
            u * 0.3,
            u * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.72),
          n.beginPath(),
          n.ellipse(u * 0.05, u * 0.52, u * 0.42, u * 0.34, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          [-1, 1].forEach((P) => {
            ((n.fillStyle = m(o, 10)),
              (n.strokeStyle = f),
              (n.lineWidth = _ * 0.9),
              n.beginPath(),
              n.ellipse(
                P * u * 0.72,
                u * 0.32,
                u * 0.26,
                u * 0.48,
                P * 0.22,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = m(o, -22)),
              n.beginPath(),
              n.ellipse(
                P * u * 0.8,
                u * 0.68,
                u * 0.2,
                u * 0.18,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = "#e2e8f0"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((P) => {
            for (let U = -1; U <= 1; U++) {
              let E = P * u * 0.8 + U * u * 0.07,
                q = u * 0.82 + (P > 0 ? 0 : 0),
                L = q + u * 0.16;
              (n.beginPath(),
                n.moveTo(E - u * 0.04, q),
                n.lineTo(E, L),
                n.lineTo(E + u * 0.04, q),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let D = -u * 0.58,
          W = n.createLinearGradient(0, D - u * 0.5, 0, D + u * 0.5);
        (W.addColorStop(0, m(o, 40)),
          W.addColorStop(1, o),
          (n.fillStyle = W),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, D, u * 0.54, u * 0.5, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            D - u * 0.18,
            u * 0.2,
            u * 0.1,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.96),
          n.beginPath(),
          n.ellipse(0, D + u * 0.24, u * 0.34, u * 0.24, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, D + u * 0.14, u * 0.07, u * 0.055, 0, 0, Math.PI * 2),
          n.fill(),
          [
            [-u * 0.42, D - u * 0.42, u * 0.42],
            [u * 0.42, D - u * 0.42, u * 0.42],
          ].forEach(([P, U, E], q) => {
            let L = Math.sin(l * 9.5 + q * 2.3) * 0.7;
            ou(n, P, U, E, L);
            let Y = n.createLinearGradient(P - E * 0.4, U, P + E * 0.4, U - E);
            (Y.addColorStop(0, m(o, -18)),
              Y.addColorStop(1, m(o, 34)),
              (n.fillStyle = Y),
              (n.strokeStyle = f),
              (n.lineWidth = J),
              n.fill(),
              n.stroke(),
              ou(n, P, U - E * 0.06, E * 0.5, L * 1.15),
              (n.fillStyle = "#fde047"),
              n.fill());
          }));
        {
          let U = D - u * 0.58,
            E = u * 0.36,
            q = Math.sin(l * 10 + 1) * 0.6;
          ou(n, 0, U, E, q);
          let L = n.createLinearGradient(0 - E * 0.4, U, 0 + E * 0.4, U - E);
          (L.addColorStop(0, m(o, -20)),
            L.addColorStop(1, m(o, 30)),
            (n.fillStyle = L),
            (n.strokeStyle = f),
            (n.lineWidth = J),
            n.fill(),
            n.stroke(),
            ou(n, 0, U - E * 0.05, E * 0.48, q * 1.1),
            (n.fillStyle = "#fde047"),
            n.fill());
        }
        let A = D - u * 0.06;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((P) => {
              let U = P * u * 0.22;
              (n.beginPath(),
                n.moveTo(U - u * 0.09, A - u * 0.09),
                n.lineTo(U + u * 0.09, A + u * 0.09),
                n.moveTo(U + u * 0.09, A - u * 0.09),
                n.lineTo(U - u * 0.09, A + u * 0.09),
                n.stroke());
            }));
        else
          [-1, 1].forEach((P) => {
            let U = P * u * 0.22;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(U, A, u * 0.095, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(U - u * 0.028, A - u * 0.028, u * 0.032, 0, Math.PI * 2),
              n.fill());
          });
        ((n.fillStyle = "#fb923c"),
          [-1, 1].forEach((P) => {
            (n.beginPath(),
              n.arc(P * u * 0.4, D + u * 0.12, u * 0.105, 0, Math.PI * 2),
              n.fill());
          }),
          (n.strokeStyle = "#1e293b"),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(-u * 0.09, D + u * 0.28),
          n.quadraticCurveTo(-u * 0.04, D + u * 0.33, 0, D + u * 0.28),
          n.quadraticCurveTo(u * 0.04, D + u * 0.33, u * 0.09, D + u * 0.28),
          n.stroke(),
          n.restore());
      }
      function OJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 9),
          Q = -u * 0.78,
          M = u * 0.82,
          H = u * 0.72;
        ou(n, Q, M, H, e * 0.6);
        let K = n.createLinearGradient(Q - H * 0.5, M, Q + H * 0.5, M - H);
        (K.addColorStop(0, m(o, -20)),
          K.addColorStop(1, m(o, 32)),
          (n.fillStyle = K),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.fill(),
          n.stroke(),
          ou(n, Q, M - H * 0.07, H * 0.52, e * 1.1),
          (n.fillStyle = "#fde047"),
          n.fill(),
          (n.fillStyle = m(o, -34)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          [-1, 1].forEach((E) => {
            (n.beginPath(),
              n.ellipse(
                E * u * 0.34,
                u * 1.02,
                u * 0.34,
                u * 0.48,
                E * 0.08,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.14)"),
              n.beginPath(),
              n.ellipse(
                E * u * 0.34,
                u * 1.22,
                u * 0.18,
                u * 0.1,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = m(o, -34)));
          }),
          (n.fillStyle = "#e2e8f0"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.75),
          [-1, 1].forEach((E) => {
            for (let q = -1; q <= 1; q++) {
              let L = E * u * 0.34 + q * u * 0.1,
                Y = u * 1.32;
              (n.beginPath(),
                n.moveTo(L - u * 0.06, Y),
                n.lineTo(L, Y + u * 0.18),
                n.lineTo(L + u * 0.06, Y),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }),
          n.save(),
          n.scale(Z, Z),
          [
            [-u * 0.1, -u * 0.72, u * 0.78],
            [-u * 0.28, -u * 0.3, u * 0.68],
            [-u * 0.42, u * 0.08, u * 0.6],
            [-u * 0.52, u * 0.42, u * 0.52],
            [-u * 0.58, u * 0.72, u * 0.44],
          ].forEach(([E, q, L], Y) => {
            let G = Math.sin(l * 8.2 + Y * 1.7) * 0.95;
            ou(n, E, q, L, G);
            let d = n.createLinearGradient(E - L * 0.5, q, E + L * 0.5, q - L);
            (d.addColorStop(0, m(o, -24)),
              d.addColorStop(1, m(o, 36)),
              (n.fillStyle = d),
              (n.strokeStyle = f),
              (n.lineWidth = J),
              n.fill(),
              n.stroke(),
              ou(n, E, q - L * 0.06, L * 0.5, G * 1.25),
              (n.fillStyle = "#fde047"),
              n.fill());
          }));
        let C = n.createLinearGradient(0, -u * 0.7, 0, u * 1.3);
        (C.addColorStop(0, m(o, 42)),
          C.addColorStop(1, o),
          (n.fillStyle = C),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.28, u * 0.88, u * 1.08, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.3,
            -u * 0.22,
            u * 0.36,
            u * 0.16,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.72),
          n.beginPath(),
          n.ellipse(u * 0.06, u * 0.58, u * 0.5, u * 0.42, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1));
        let D = u * 0.11 * (1 + Math.sin(l * 5.1) * 0.18),
          W = n.createRadialGradient(0, u * 0.18, D * 0.1, 0, u * 0.18, D);
        (W.addColorStop(0, "#fff7d6"),
          W.addColorStop(0.6, "#fde047"),
          W.addColorStop(1, "#f97316"),
          (n.fillStyle = W),
          n.beginPath(),
          n.arc(0, u * 0.18, Math.max(1.5, D), 0, Math.PI * 2),
          n.fill(),
          [-1, 1].forEach((E) => {
            ((n.fillStyle = m(o, 12)),
              (n.strokeStyle = f),
              (n.lineWidth = _ * 0.95),
              n.beginPath(),
              n.ellipse(
                E * u * 0.86,
                u * 0.3,
                u * 0.36,
                u * 0.62,
                E * 0.18,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = m(o, -24)),
              n.beginPath(),
              n.ellipse(
                E * u * 0.98,
                u * 0.78,
                u * 0.28,
                u * 0.24,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = "#e2e8f0"),
          (n.strokeStyle = f),
          (n.lineWidth = J * 0.75),
          [-1, 1].forEach((E) => {
            for (let q = -1; q <= 1; q++) {
              let L = E * u * 0.98 + q * u * 0.09,
                Y = u * 0.92;
              (n.beginPath(),
                n.moveTo(L - u * 0.05, Y),
                n.lineTo(L, Y + u * 0.2),
                n.lineTo(L + u * 0.05, Y),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let B = -u * 0.72,
          A = n.createLinearGradient(0, B - u * 0.6, 0, B + u * 0.6);
        (A.addColorStop(0, m(o, 42)),
          A.addColorStop(1, o),
          (n.fillStyle = A),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, B, u * 0.68, u * 0.62, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.30)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.24,
            B - u * 0.22,
            u * 0.24,
            u * 0.12,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.97),
          n.beginPath(),
          n.ellipse(0, B + u * 0.28, u * 0.42, u * 0.3, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, B + u * 0.18, u * 0.09, u * 0.07, 0, 0, Math.PI * 2),
          n.fill(),
          [
            [-u * 0.52, B - u * 0.46, u * 0.55, -0.35],
            [u * 0.52, B - u * 0.46, u * 0.55, 0.35],
          ].forEach(([E, q, L, Y], G) => {
            (n.save(), n.translate(E, q), n.rotate(Y));
            let d = Math.sin(l * 10 + G * 2.5) * 0.8;
            ou(n, 0, 0, L, d);
            let h = n.createLinearGradient(-L * 0.4, 0, L * 0.4, -L);
            (h.addColorStop(0, m(o, -22)),
              h.addColorStop(1, m(o, 38)),
              (n.fillStyle = h),
              (n.strokeStyle = f),
              (n.lineWidth = J),
              n.fill(),
              n.stroke(),
              ou(n, 0, -L * 0.06, L * 0.52, d * 1.2),
              (n.fillStyle = "#fde047"),
              n.fill(),
              n.restore());
          }));
        {
          let q = B - u * 0.68,
            L = u * 0.46,
            Y = Math.sin(l * 10 + 1) * 0.7;
          ou(n, 0, q, L, Y);
          let G = n.createLinearGradient(0 - L * 0.4, q, 0 + L * 0.4, q - L);
          (G.addColorStop(0, m(o, -20)),
            G.addColorStop(1, m(o, 32)),
            (n.fillStyle = G),
            (n.strokeStyle = f),
            (n.lineWidth = J),
            n.fill(),
            n.stroke(),
            ou(n, 0, q - L * 0.05, L * 0.5, Y * 1.1),
            (n.fillStyle = "#fde047"),
            n.fill());
        }
        let U = B - u * 0.04;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((E) => {
              let q = E * u * 0.26;
              (n.beginPath(),
                n.moveTo(q - u * 0.1, U - u * 0.1),
                n.lineTo(q + u * 0.1, U + u * 0.1),
                n.moveTo(q + u * 0.1, U - u * 0.1),
                n.lineTo(q - u * 0.1, U + u * 0.1),
                n.stroke());
            }));
        else
          [-1, 1].forEach((E) => {
            let q = E * u * 0.26;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(q, U, u * 0.1, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(q - u * 0.032, U - u * 0.032, u * 0.034, 0, Math.PI * 2),
              n.fill());
          });
        ((n.fillStyle = "#fb923c"),
          [-1, 1].forEach((E) => {
            (n.beginPath(),
              n.arc(E * u * 0.48, B + u * 0.16, u * 0.11, 0, Math.PI * 2),
              n.fill());
          }),
          (n.strokeStyle = "#1e293b"),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(-u * 0.1, B + u * 0.34),
          n.quadraticCurveTo(-u * 0.05, B + u * 0.4, 0, B + u * 0.34),
          n.quadraticCurveTo(u * 0.05, B + u * 0.4, u * 0.1, B + u * 0.34),
          n.stroke(),
          n.restore());
      }
      function EJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = Math.sin(l * 9),
          Q = On.Pedra.color,
          M = m(Q, -55),
          H = On.Pedra.light,
          K = -u * 0.74,
          V = u * 0.8,
          C = u * 0.56;
        ((n.fillStyle = Q),
          (n.strokeStyle = M),
          (n.lineWidth = J),
          n.beginPath(),
          n.ellipse(K, V + u * 0.08, u * 0.28, u * 0.2, -0.2, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          ou(n, K - u * 0.06, V, C, e * 0.7));
        let D = n.createLinearGradient(K - C * 0.4, V, K + C * 0.4, V - C);
        (D.addColorStop(0, m(o, -20)),
          D.addColorStop(1, m(o, 30)),
          (n.fillStyle = D),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.fill(),
          n.stroke(),
          ou(n, K - u * 0.06, V - C * 0.06, C * 0.5, e * 1.15),
          (n.fillStyle = "#fde047"),
          n.fill(),
          (n.strokeStyle = "#fb923c"),
          (n.lineWidth = J * 0.9),
          n.beginPath(),
          n.moveTo(K - u * 0.12, V + u * 0.02),
          n.lineTo(K + u * 0.1, V + u * 0.12),
          n.stroke(),
          (n.strokeStyle = "#fde047"),
          (n.lineWidth = J * 0.6),
          n.beginPath(),
          n.moveTo(K - u * 0.08, V + u * 0.04),
          n.lineTo(K + u * 0.06, V + u * 0.1),
          n.stroke(),
          (n.fillStyle = m(o, -32)),
          (n.strokeStyle = f),
          (n.lineWidth = _ * 0.9),
          [-1, 1].forEach((q) => {
            (n.beginPath(),
              n.ellipse(
                q * u * 0.34,
                u * 1,
                u * 0.32,
                u * 0.46,
                q * 0.08,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = Q),
              (n.strokeStyle = M),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(q * u * 0.34 - u * 0.18, u * 0.82),
              n.lineTo(q * u * 0.34 + u * 0.18, u * 0.82),
              n.lineTo(q * u * 0.34 + u * 0.14, u * 1.04),
              n.lineTo(q * u * 0.34 - u * 0.14, u * 1.04),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#f97316"),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.moveTo(q * u * 0.34 - u * 0.08, u * 0.92),
              n.lineTo(q * u * 0.34 + u * 0.08, u * 0.94),
              n.stroke(),
              (n.fillStyle = m(o, -32)));
          }),
          (n.fillStyle = H),
          (n.strokeStyle = M),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((q) => {
            for (let L = -1; L <= 1; L++) {
              let Y = q * u * 0.34 + L * u * 0.1,
                G = u * 1.3;
              (n.beginPath(),
                n.moveTo(Y - u * 0.06, G),
                n.lineTo(Y, G + u * 0.16),
                n.lineTo(Y + u * 0.06, G),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }),
          n.save(),
          n.scale(Z, Z),
          [
            [-u * 0.22, -u * 0.56, u * 0.48],
            [-u * 0.38, -u * 0.14, u * 0.42],
            [-u * 0.5, u * 0.24, u * 0.38],
            [-u * 0.58, u * 0.58, u * 0.34],
          ].forEach(([q, L, Y], G) => {
            let d = Math.sin(l * 2 + G) * 0.02;
            ((n.fillStyle = Q),
              (n.strokeStyle = M),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(q - Y * 0.55, L + Y * 0.25 + d * u),
              n.lineTo(q - Y * 0.15, L - Y * 0.55 + d * u),
              n.lineTo(q + Y * 0.45, L - Y * 0.35 + d * u),
              n.lineTo(q + Y * 0.35, L + Y * 0.35 + d * u),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.18)"),
              n.beginPath(),
              n.ellipse(
                q - Y * 0.12,
                L - Y * 0.18,
                Y * 0.2,
                Y * 0.1,
                -0.3,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.strokeStyle = G % 2 ? "#f97316" : "#fde047"),
              (n.lineWidth = Math.max(1, J * 0.6)),
              n.beginPath(),
              n.moveTo(q - Y * 0.35, L + Y * 0.1),
              n.quadraticCurveTo(q, L + Y * 0.2, q + Y * 0.25, L + Y * 0.08),
              n.stroke());
          }),
          [
            [-u * 0.3, -u * 0.34, u * 0.42],
            [-u * 0.46, u * 0.04, u * 0.36],
          ].forEach(([q, L, Y], G) => {
            let d = Math.sin(l * 8.5 + G * 2) * 0.8;
            ou(n, q, L, Y, d);
            let h = n.createLinearGradient(q - Y * 0.4, L, q + Y * 0.4, L - Y);
            (h.addColorStop(0, m(o, -22)),
              h.addColorStop(1, m(o, 32)),
              (n.fillStyle = h),
              (n.strokeStyle = f),
              (n.lineWidth = J),
              n.fill(),
              n.stroke(),
              ou(n, q, L - Y * 0.05, Y * 0.48, d * 1.2),
              (n.fillStyle = "#fde047"),
              n.fill());
          }));
        let A = n.createLinearGradient(0, -u * 0.6, 0, u * 1.2);
        (A.addColorStop(0, m(o, 38)),
          A.addColorStop(1, o),
          (n.fillStyle = A),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.28, u * 0.86, u * 1.02, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.28,
            -u * 0.18,
            u * 0.32,
            u * 0.14,
            -0.28,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = $),
          (n.globalAlpha = 0.68),
          n.beginPath(),
          n.ellipse(u * 0.06, u * 0.56, u * 0.46, u * 0.38, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = "#fb923c"),
          (n.lineWidth = J * 0.8),
          n.beginPath(),
          n.moveTo(-u * 0.2, u * 0.4),
          n.lineTo(u * 0.1, u * 0.5),
          n.lineTo(-u * 0.08, u * 0.72),
          n.stroke(),
          (n.strokeStyle = "#fde047"),
          (n.lineWidth = J * 0.5),
          n.beginPath(),
          n.moveTo(-u * 0.14, u * 0.44),
          n.lineTo(u * 0.04, u * 0.52),
          n.stroke(),
          [-1, 1].forEach((q) => {
            let L = q * u * 0.68,
              Y = -u * 0.28,
              G = u * 0.42;
            ((n.fillStyle = Q),
              (n.strokeStyle = M),
              (n.lineWidth = _ * 0.85),
              n.beginPath(),
              n.moveTo(L - G * 0.55, Y + G * 0.18),
              n.lineTo(L - G * 0.1, Y - G * 0.55),
              n.lineTo(L + G * 0.55, Y - G * 0.2),
              n.lineTo(L + G * 0.3, Y + G * 0.42),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#f97316"),
              (n.lineWidth = J * 0.9),
              n.beginPath(),
              n.moveTo(L - G * 0.22, Y - G * 0.1),
              n.lineTo(L + G * 0.18, Y + G * 0.1),
              n.stroke(),
              (n.strokeStyle = "#fde047"),
              (n.lineWidth = J * 0.55),
              n.beginPath(),
              n.moveTo(L - G * 0.16, Y - G * 0.06),
              n.lineTo(L + G * 0.12, Y + G * 0.06),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.16)"),
              n.beginPath(),
              n.ellipse(
                L - G * 0.1,
                Y - G * 0.18,
                G * 0.18,
                G * 0.09,
                -0.25,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          [-1, 1].forEach((q) => {
            ((n.fillStyle = m(o, 10)),
              (n.strokeStyle = f),
              (n.lineWidth = _ * 0.9),
              n.beginPath(),
              n.ellipse(
                q * u * 0.84,
                u * 0.32,
                u * 0.34,
                u * 0.58,
                q * 0.16,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = Q),
              (n.strokeStyle = M),
              (n.lineWidth = J),
              n.beginPath(),
              n.ellipse(
                q * u * 0.92,
                u * 0.68,
                u * 0.24,
                u * 0.18,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.strokeStyle = "#f97316"),
              (n.lineWidth = J * 0.7),
              n.beginPath(),
              n.arc(q * u * 0.92, u * 0.68, u * 0.14, 0, Math.PI * 2),
              n.stroke());
          }),
          (n.fillStyle = H),
          (n.strokeStyle = M),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((q) => {
            for (let L = -1; L <= 1; L++) {
              let Y = q * u * 0.94 + L * u * 0.08,
                G = u * 0.84;
              (n.beginPath(),
                n.moveTo(Y - u * 0.05, G),
                n.lineTo(Y, G + u * 0.18),
                n.lineTo(Y + u * 0.05, G),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let P = -u * 0.7,
          U = n.createLinearGradient(0, P - u * 0.5, 0, P + u * 0.5);
        (U.addColorStop(0, m(o, 38)),
          U.addColorStop(1, o),
          (n.fillStyle = U),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, P, u * 0.64, u * 0.58, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.22,
            P - u * 0.2,
            u * 0.22,
            u * 0.11,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = Q),
          (n.strokeStyle = M),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(-u * 0.42, P - u * 0.22),
          n.lineTo(-u * 0.28, P - u * 0.62),
          n.lineTo(u * 0.28, P - u * 0.62),
          n.lineTo(u * 0.42, P - u * 0.22),
          n.lineTo(u * 0.32, P - u * 0.1),
          n.lineTo(-u * 0.32, P - u * 0.1),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.strokeStyle = "#fb923c"),
          (n.lineWidth = J * 0.8),
          n.beginPath(),
          n.moveTo(-u * 0.18, P - u * 0.48),
          n.lineTo(u * 0.12, P - u * 0.34),
          n.stroke(),
          (n.strokeStyle = "#fde047"),
          (n.lineWidth = J * 0.5),
          n.beginPath(),
          n.moveTo(-u * 0.1, P - u * 0.44),
          n.lineTo(u * 0.06, P - u * 0.36),
          n.stroke(),
          (n.strokeStyle = "rgba(0,0,0,0.18)"),
          (n.lineWidth = J * 0.6));
        for (let q = -1; q <= 1; q++)
          (n.beginPath(),
            n.moveTo(q * u * 0.16 - u * 0.04, P - u * 0.52),
            n.lineTo(q * u * 0.16 + u * 0.06, P - u * 0.28),
            n.stroke());
        ((n.fillStyle = $),
          (n.globalAlpha = 0.94),
          n.beginPath(),
          n.ellipse(0, P + u * 0.26, u * 0.38, u * 0.26, 0, 0, Math.PI * 2),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = J),
          n.stroke(),
          (n.globalAlpha = 1),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, P + u * 0.16, u * 0.08, u * 0.06, 0, 0, Math.PI * 2),
          n.fill(),
          [-1, 1].forEach((q) => {
            let L = q * u * 0.5,
              Y = P - u * 0.48,
              G = u * 0.32;
            ((n.fillStyle = Q),
              (n.strokeStyle = M),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(L - G * 0.18, Y + G * 0.18),
              n.lineTo(L + q * G * 0.05, Y - G * 0.55),
              n.lineTo(L + G * 0.22, Y + G * 0.12),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "#f97316"),
              n.beginPath(),
              n.arc(L + q * G * 0.02, Y - G * 0.28, G * 0.1, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fde047"),
              n.beginPath(),
              n.arc(L + q * G * 0.02, Y - G * 0.3, G * 0.05, 0, Math.PI * 2),
              n.fill());
          }));
        let E = P - u * 0.02;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((q) => {
              let L = q * u * 0.24;
              (n.beginPath(),
                n.moveTo(L - u * 0.09, E - u * 0.09),
                n.lineTo(L + u * 0.09, E + u * 0.09),
                n.moveTo(L + u * 0.09, E - u * 0.09),
                n.lineTo(L - u * 0.09, E + u * 0.09),
                n.stroke());
            }));
        else
          [-1, 1].forEach((q) => {
            let L = q * u * 0.24;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(L, E, u * 0.095, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(L - u * 0.03, E - u * 0.03, u * 0.032, 0, Math.PI * 2),
              n.fill());
          });
        ((n.fillStyle = "#fb923c"),
          [-1, 1].forEach((q) => {
            (n.beginPath(),
              n.arc(q * u * 0.44, P + u * 0.14, u * 0.1, 0, Math.PI * 2),
              n.fill());
          }),
          (n.strokeStyle = "#1e293b"),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(-u * 0.09, P + u * 0.32),
          n.quadraticCurveTo(0, P + u * 0.38, u * 0.09, P + u * 0.32),
          n.stroke(),
          n.restore());
      }
      function LJ(n, u, r, l, o, f, $, _, v) {
        let Z = 1 + Math.sin(l * 4.2) * 0.03;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let J = Math.max(1.5, r * 0.018),
          e = "#5c4f6e",
          Q = m(e, 34),
          M = m(e, -24),
          H = m(e, -70),
          K = "#ddd6fe",
          V = "#e9d5ff",
          C = "#e2e8f0",
          D = Math.sin(l * 3.2) * u * 0.08;
        ((n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = J),
          n.beginPath());
        let W = -u * 0.48,
          B = u * 0.42;
        (n.moveTo(W - u * 0.08, B - u * 0.06),
          n.quadraticCurveTo(
            W - u * 0.55,
            B + u * 0.05 + D,
            -u * 1.18,
            B + u * 0.38 + D * 0.5,
          ),
          n.quadraticCurveTo(
            -u * 1.22,
            B + u * 0.52 + D * 0.5,
            -u * 1.12,
            B + u * 0.62 + D * 0.6,
          ),
          n.quadraticCurveTo(
            -u * 0.96,
            B + u * 0.52 + D * 0.3,
            -u * 0.52,
            B + u * 0.18,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(e, -8)),
          n.beginPath(),
          n.ellipse(
            -u * 1.12,
            B + u * 0.58 + D * 0.6,
            u * 0.12,
            u * 0.08,
            0.4,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          n.save(),
          n.scale(Z, Z),
          (n.fillStyle = M),
          (n.strokeStyle = H),
          (n.lineWidth = J),
          [-1, 1].forEach((Y) => {
            (n.beginPath(),
              n.ellipse(
                Y * u * 0.3,
                u * 0.78,
                u * 0.2,
                u * 0.26,
                Y * 0.12,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = C),
          (n.strokeStyle = H),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((Y) => {
            for (let G = -1; G <= 0; G++) {
              let d = Y * u * 0.3 + G * u * 0.07,
                h = u * 0.98;
              (n.beginPath(),
                n.moveTo(d - u * 0.03, h),
                n.lineTo(d, h + u * 0.12),
                n.lineTo(d + u * 0.03, h),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let A = n.createLinearGradient(0, -u * 0.1, 0, u * 0.9);
        (A.addColorStop(0, Q),
          A.addColorStop(1, e),
          (n.fillStyle = A),
          (n.strokeStyle = H),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.28, u * 0.48, u * 0.56, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.18,
            -u * 0.04,
            u * 0.24,
            u * 0.11,
            -0.32,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = K),
          (n.globalAlpha = 0.58),
          n.beginPath(),
          n.ellipse(u * 0.06, u * 0.48, u * 0.26, u * 0.3, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          [-1, 1].forEach((Y) => {
            ((n.fillStyle = m(e, 8)),
              (n.strokeStyle = H),
              (n.lineWidth = _ * 0.9),
              n.beginPath(),
              n.ellipse(
                Y * u * 0.46,
                u * 0.52,
                u * 0.18,
                u * 0.38,
                Y * 0.22,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke(),
              (n.fillStyle = M),
              n.beginPath(),
              n.ellipse(
                Y * u * 0.52,
                u * 0.78,
                u * 0.14,
                u * 0.12,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = C),
          (n.strokeStyle = H),
          (n.lineWidth = J * 0.7),
          [-1, 1].forEach((Y) => {
            for (let G = -1; G <= 1; G++) {
              let d = Y * u * 0.52 + G * u * 0.05,
                h = u * 0.86;
              (n.beginPath(),
                n.moveTo(d - u * 0.03, h),
                n.lineTo(d, h + u * 0.13),
                n.lineTo(d + u * 0.03, h),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let P = -u * 0.42,
          U = n.createLinearGradient(0, P - u * 0.42, 0, P + u * 0.42);
        (U.addColorStop(0, Q),
          U.addColorStop(1, e),
          (n.fillStyle = U),
          (n.strokeStyle = H),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, P, u * 0.42, u * 0.38, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.14,
            P - u * 0.14,
            u * 0.16,
            u * 0.08,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = K),
          (n.globalAlpha = 0.92),
          n.beginPath(),
          n.ellipse(0, P + u * 0.2, u * 0.22, u * 0.16, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = H),
          (n.lineWidth = J),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, P + u * 0.14, u * 0.05, u * 0.04, 0, 0, Math.PI * 2),
          n.fill(),
          [-1, 1].forEach((Y) => {
            let G = Y * u * 0.34,
              d = P - u * 0.42,
              h = u * 0.22,
              i = u * 0.52;
            ((n.fillStyle = m(e, -10)),
              (n.strokeStyle = H),
              (n.lineWidth = J),
              n.beginPath(),
              n.moveTo(G - h * 0.55, d + i * 0.22),
              n.lineTo(G + Y * h * 0.1, d - i * 0.72),
              n.lineTo(G + h * 0.6, d + i * 0.18),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = V),
              n.beginPath(),
              n.moveTo(G - h * 0.24, d + i * 0.1),
              n.lineTo(G + Y * h * 0.04, d - i * 0.38),
              n.lineTo(G + h * 0.28, d + i * 0.08),
              n.closePath(),
              n.fill());
          }));
        let E = "#352d42",
          q = m(E, -40);
        for (let Y = 0; Y < 5; Y++) {
          let G = P - u * 0.32 + Y * u * 0.18,
            d = 0,
            h = u * (0.34 - Y * 0.03),
            i = u * 0.14;
          if (
            ((n.fillStyle = Y === 0 ? m(E, 10) : E),
            (n.strokeStyle = H),
            (n.lineWidth = J * 0.9),
            n.beginPath(),
            n.moveTo(0 - i, G + u * 0.06),
            n.lineTo(0, G - h),
            n.lineTo(0 + i, G + u * 0.06),
            n.closePath(),
            n.fill(),
            n.stroke(),
            Y < 2)
          )
            ((n.fillStyle = "rgba(255,255,255,0.18)"),
              n.beginPath(),
              n.ellipse(
                0 - i * 0.22,
                G - h * 0.12,
                i * 0.22,
                h * 0.1,
                -0.2,
                0,
                Math.PI * 2,
              ),
              n.fill());
        }
        let L = P - u * 0.02;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((Y) => {
              let G = Y * u * 0.18;
              (n.beginPath(),
                n.moveTo(G - u * 0.07, L - u * 0.07),
                n.lineTo(G + u * 0.07, L + u * 0.07),
                n.moveTo(G + u * 0.07, L - u * 0.07),
                n.lineTo(G - u * 0.07, L + u * 0.07),
                n.stroke());
            }));
        else
          [-1, 1].forEach((Y) => {
            let G = Y * u * 0.18;
            ((n.fillStyle = "#1e293b"),
              n.beginPath(),
              n.arc(G, L, u * 0.085, 0, Math.PI * 2),
              n.fill(),
              (n.fillStyle = "#fff"),
              n.beginPath(),
              n.arc(G - u * 0.022, L - u * 0.022, u * 0.028, 0, Math.PI * 2),
              n.fill());
          });
        ((n.strokeStyle = "#1e293b"),
          (n.lineWidth = J),
          n.beginPath(),
          n.moveTo(-u * 0.07, P + u * 0.28),
          n.quadraticCurveTo(0, P + u * 0.32, u * 0.07, P + u * 0.28),
          n.stroke(),
          n.restore());
      }
      function VQ(n, u, r, l, o, f, $, _, v, Z) {
        let J = 1 + Math.sin(l * 4) * 0.025;
        ((n.lineCap = "round"), (n.lineJoin = "round"));
        let e = Math.max(1.5, r * 0.018),
          H = Z ? "#4e4660" : "#625a78",
          K = m(H, 32),
          V = m(H, -26),
          C = m(H, -70),
          D = "#ddd6fe",
          W = Z ? "#d6d3d1" : "#e2e8f0",
          B = Z ? "#2f2a3a" : "#3a324d",
          A = "#2e2a36",
          P = m(A, -40),
          U = Math.sin(l * 2.8) * u * 0.07;
        ((n.fillStyle = V),
          (n.strokeStyle = C),
          (n.lineWidth = e),
          n.beginPath());
        let E = -u * 0.62,
          q = u * 0.38;
        if (
          (n.moveTo(E - u * 0.1, q - u * 0.08),
          n.quadraticCurveTo(
            E - u * 0.72,
            q + u * 0.1 + U,
            -u * 1.28,
            q + u * 0.42 + U,
          ),
          n.lineTo(-u * 1.18, q + u * 0.56 + U),
          n.quadraticCurveTo(
            E - u * 0.56,
            q + u * 0.28 + U * 0.5,
            E + u * 0.06,
            q + u * 0.12,
          ),
          n.closePath(),
          n.fill(),
          n.stroke(),
          [
            { ox: -u * 1.34, oy: q + u * 0.36 + U, ang: -0.22 },
            { ox: -u * 1.3, oy: q + u * 0.62 + U * 0.9, ang: 0.32 },
          ].forEach((b) => {
            (n.save(),
              n.translate(b.ox, b.oy),
              n.rotate(b.ang),
              (n.fillStyle = Z ? m(H, -12) : m(H, 6)),
              (n.strokeStyle = C),
              (n.lineWidth = e * 0.8),
              n.beginPath(),
              n.moveTo(0, 0),
              n.quadraticCurveTo(u * 0.06, -u * 0.12, u * 0.22, -u * 0.04),
              n.quadraticCurveTo(u * 0.18, u * 0.08, 0, u * 0.1),
              n.closePath(),
              n.fill(),
              n.stroke(),
              n.restore());
          }),
          !Z)
        )
          ((n.fillStyle = "rgba(167,139,250,0.22)"),
            n.beginPath(),
            n.ellipse(
              -u * 0.9,
              q + u * 0.46,
              u * 0.28,
              u * 0.12,
              0.2,
              0,
              Math.PI * 2,
            ),
            n.fill());
        if ((n.save(), n.scale(J, J), !Z)) {
          let b = n.createRadialGradient(
            0,
            u * 0.22,
            u * 0.2,
            0,
            u * 0.22,
            u * 1.45,
          );
          (b.addColorStop(0, "rgba(139,92,246,0.18)"),
            b.addColorStop(1, "rgba(139,92,246,0)"),
            (n.fillStyle = b),
            n.beginPath(),
            n.ellipse(0, u * 0.22, u * 0.95, u * 0.78, 0, 0, Math.PI * 2),
            n.fill());
        }
        if (
          ((Z
            ? [
                [-u * 0.06, -u * 0.68, u * 0.48],
                [-u * 0.22, -u * 0.34, u * 0.56],
                [-u * 0.38, -u * 0.02, u * 0.52],
                [-u * 0.52, u * 0.26, u * 0.46],
                [-u * 0.6, u * 0.52, u * 0.38],
                [-u * 0.64, u * 0.76, u * 0.32],
              ]
            : [
                [-u * 0.08, -u * 0.72, u * 0.46],
                [-u * 0.24, -u * 0.38, u * 0.54],
                [-u * 0.4, -u * 0.06, u * 0.5],
                [-u * 0.54, u * 0.22, u * 0.44],
                [-u * 0.62, u * 0.48, u * 0.36],
                [-u * 0.66, u * 0.72, u * 0.3],
              ]
          ).forEach(([b, z, k], a) => {
            let un = Math.sin(l * 4.5 + a * 1.3) * u * 0.03;
            ((n.fillStyle = a % 2 === 0 ? B : m(B, 12)),
              (n.strokeStyle = C),
              (n.lineWidth = e * 0.9),
              n.beginPath(),
              n.moveTo(b - k * 0.22, z + k * 0.14 + un),
              n.lineTo(b + k * 0.04, z - k * 0.72 + un),
              n.lineTo(b + k * 0.26, z + k * 0.12 + un),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.16)"),
              n.beginPath(),
              n.ellipse(
                b - k * 0.08,
                z - k * 0.22 + un,
                k * 0.1,
                k * 0.06,
                -0.25,
                0,
                Math.PI * 2,
              ),
              n.fill());
          }),
          Z)
        )
          [
            [u * 0.48, -u * 0.18, u * 0.32],
            [u * 0.36, u * 0.18, u * 0.28],
            [-u * 0.1, u * 0.62, u * 0.26],
          ].forEach(([z, k, a]) => {
            ((n.fillStyle = A),
              (n.strokeStyle = P),
              (n.lineWidth = e * 0.9),
              n.beginPath(),
              n.moveTo(z - a * 0.5, k + a * 0.12),
              n.lineTo(z - a * 0.12, k - a * 0.52),
              n.lineTo(z + a * 0.44, k - a * 0.18),
              n.lineTo(z + a * 0.22, k + a * 0.32),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.14)"),
              n.beginPath(),
              n.ellipse(
                z - a * 0.06,
                k - a * 0.16,
                a * 0.14,
                a * 0.07,
                -0.28,
                0,
                Math.PI * 2,
              ),
              n.fill());
          });
        ((n.fillStyle = V),
          (n.strokeStyle = C),
          (n.lineWidth = _ * 0.9),
          [-1, 1].forEach((b) => {
            let z = b * u * 0.34,
              k = u * 0.72;
            (n.beginPath(),
              n.ellipse(z, k, u * 0.3, u * 0.36, b * 0.1, 0, Math.PI * 2),
              n.fill(),
              n.stroke(),
              (n.fillStyle = "rgba(255,255,255,0.10)"),
              n.beginPath(),
              n.ellipse(
                z - b * u * 0.06,
                k - u * 0.1,
                u * 0.14,
                u * 0.08,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              (n.fillStyle = V));
          }),
          (n.fillStyle = W),
          (n.strokeStyle = C),
          (n.lineWidth = e * 0.75),
          [-1, 1].forEach((b) => {
            for (let z = -1; z <= 1; z++) {
              let k = b * u * 0.34 + z * u * 0.08,
                a = u * 0.98;
              (n.beginPath(),
                n.moveTo(k - u * 0.05, a),
                n.lineTo(k, a + u * 0.18),
                n.lineTo(k + u * 0.05, a),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let G = n.createLinearGradient(0, -u * 0.2, 0, u * 1);
        if (
          (G.addColorStop(0, K),
          G.addColorStop(1, H),
          (n.fillStyle = G),
          (n.strokeStyle = C),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, u * 0.26, u * 0.74, u * 0.62, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.26)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.24,
            -u * 0.06,
            u * 0.32,
            u * 0.14,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = D),
          (n.globalAlpha = Z ? 0.42 : 0.54),
          n.beginPath(),
          n.ellipse(u * 0.08, u * 0.48, u * 0.42, u * 0.34, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          !Z)
        )
          ((n.fillStyle = "rgba(167,139,250,0.32)"),
            n.beginPath(),
            n.ellipse(0, u * 0.12, u * 0.14, u * 0.1, 0, 0, Math.PI * 2),
            n.fill());
        else
          ((n.strokeStyle = "rgba(0,0,0,0.18)"),
            (n.lineWidth = e * 0.7),
            n.beginPath(),
            n.moveTo(-u * 0.18, u * 0.28),
            n.lineTo(u * 0.12, u * 0.38),
            n.stroke());
        ([-1, 1].forEach((b) => {
          ((n.fillStyle = m(H, 10)),
            (n.strokeStyle = C),
            (n.lineWidth = _ * 0.9),
            n.beginPath(),
            n.ellipse(
              b * u * 0.72,
              u * 0.3,
              u * 0.32,
              u * 0.52,
              b * 0.2,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.stroke(),
            (n.fillStyle = V),
            n.beginPath(),
            n.ellipse(
              b * u * 0.82,
              u * 0.68,
              u * 0.22,
              u * 0.2,
              0,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.stroke());
        }),
          (n.fillStyle = W),
          (n.strokeStyle = C),
          (n.lineWidth = e * 0.75),
          [-1, 1].forEach((b) => {
            for (let z = -1; z <= 1; z++) {
              let k = b * u * 0.82 + z * u * 0.08,
                a = u * 0.86,
                un = Z ? u * 0.22 : u * 0.2;
              (n.beginPath(),
                n.moveTo(k - u * 0.05, a),
                n.lineTo(k, a + un),
                n.lineTo(k + u * 0.05, a),
                n.closePath(),
                n.fill(),
                n.stroke());
            }
          }));
        let d = -u * 0.48,
          h = n.createLinearGradient(0, d - u * 0.5, 0, d + u * 0.5);
        (h.addColorStop(0, K),
          h.addColorStop(1, H),
          (n.fillStyle = h),
          (n.strokeStyle = C),
          (n.lineWidth = _),
          n.beginPath(),
          n.ellipse(0, d, u * 0.58, u * 0.5, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "rgba(255,255,255,0.28)"),
          n.beginPath(),
          n.ellipse(
            -u * 0.2,
            d - u * 0.18,
            u * 0.22,
            u * 0.11,
            -0.3,
            0,
            Math.PI * 2,
          ),
          n.fill(),
          (n.fillStyle = D),
          (n.globalAlpha = 0.88),
          n.beginPath(),
          n.ellipse(0, d + u * 0.26, u * 0.34, u * 0.24, 0, 0, Math.PI * 2),
          n.fill(),
          (n.globalAlpha = 1),
          (n.strokeStyle = C),
          (n.lineWidth = e),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.ellipse(0, d + u * 0.16, u * 0.07, u * 0.055, 0, 0, Math.PI * 2),
          n.fill(),
          [-1, 1].forEach((b) => {
            let z = b * u * 0.42,
              k = d - u * 0.46,
              a = u * 0.26,
              un = u * 0.58;
            ((n.fillStyle = m(H, -14)),
              (n.strokeStyle = C),
              (n.lineWidth = e),
              n.beginPath(),
              n.moveTo(z - a * 0.6, k + un * 0.24),
              n.lineTo(z + b * a * 0.12, k - un * 0.78),
              n.lineTo(z + a * 0.66, k + un * 0.2),
              n.closePath(),
              n.fill(),
              n.stroke(),
              (n.fillStyle = Z ? "#c4b5fd" : "#ddd6fe"),
              n.beginPath(),
              n.moveTo(z - a * 0.28, k + un * 0.12),
              n.lineTo(z + b * a * 0.06, k - un * 0.42),
              n.lineTo(z + a * 0.32, k + un * 0.1),
              n.closePath(),
              n.fill(),
              (n.fillStyle = C),
              n.beginPath(),
              n.arc(z + b * a * 0.04, k + un * 0.02, u * 0.03, 0, Math.PI * 2),
              n.fill());
          }));
        let i = d - u * 0.04;
        if (v)
          ((n.strokeStyle = "#1e293b"),
            (n.lineWidth = Math.max(2, r * 0.028)),
            [-1, 1].forEach((b) => {
              let z = b * u * 0.24;
              (n.beginPath(),
                n.moveTo(z - u * 0.1, i - u * 0.1),
                n.lineTo(z + u * 0.1, i + u * 0.1),
                n.moveTo(z + u * 0.1, i - u * 0.1),
                n.lineTo(z - u * 0.1, i + u * 0.1),
                n.stroke());
            }));
        else
          ([-1, 1].forEach((b) => {
            let z = b * u * 0.24;
            ((n.fillStyle = Z
              ? "rgba(139,92,246,0.22)"
              : "rgba(167,139,250,0.38)"),
              n.beginPath(),
              n.ellipse(z, i, u * 0.2, u * 0.16, 0, 0, Math.PI * 2),
              n.fill());
          }),
            [-1, 1].forEach((b) => {
              let z = b * u * 0.24;
              ((n.fillStyle = "#1e293b"),
                n.beginPath(),
                n.arc(z, i, u * 0.11, 0, Math.PI * 2),
                n.fill(),
                (n.fillStyle = Z ? "#a78bfa" : "#c4b5fd"),
                n.beginPath(),
                n.arc(z, i, u * 0.05, 0, Math.PI * 2),
                n.fill(),
                (n.fillStyle = "#fff"),
                n.beginPath(),
                n.arc(z - u * 0.032, i - u * 0.03, u * 0.032, 0, Math.PI * 2),
                n.fill());
            }));
        if (
          ((n.strokeStyle = "#1e293b"),
          (n.lineWidth = e),
          n.beginPath(),
          n.moveTo(-u * 0.1, d + u * 0.34),
          n.quadraticCurveTo(0, d + u * 0.4, u * 0.1, d + u * 0.34),
          n.stroke(),
          !v)
        )
          ((n.fillStyle = "#f8fafc"),
            (n.strokeStyle = C),
            (n.lineWidth = e * 0.6),
            [-1, 1].forEach((b) => {
              let z = b * u * 0.12,
                k = d + u * 0.34;
              (n.beginPath(),
                n.moveTo(z - u * 0.02, k),
                n.lineTo(z, k + u * 0.1),
                n.lineTo(z + u * 0.02, k),
                n.closePath(),
                n.fill(),
                n.stroke());
            }));
        n.restore();
      }
      function XJ(n, u, r, l, o, f) {
        ((n.fillStyle = m(l, -45)),
          n.fillRect(-u * 0.09, u * 0.3, u * 0.18, u * 0.75),
          (n.fillStyle = l),
          (n.strokeStyle = o),
          (n.lineWidth = f),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.ellipse(
                v * u * 0.45,
                u * 0.78,
                u * 0.4,
                u * 0.17,
                v * 0.45,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              n.stroke());
          }));
        let $ = 0.1 + Math.abs(Math.sin(r * 2.4)) * 0.26;
        ((n.fillStyle = o),
          (n.strokeStyle = m(o, -35)),
          (n.lineWidth = f),
          n.beginPath(),
          n.arc(0, 0, u, $, Math.PI - $),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = m(l, -25)),
          n.beginPath(),
          n.arc(0, 0, u, Math.PI + $, Math.PI * 2 - $),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#f8fafc"));
        let _ = 6;
        for (let v = 0; v <= _; v++) {
          let Z = v / _;
          (WQ(n, u, Math.PI + $ + Z * (Math.PI - 2 * $), 1),
            WQ(n, u, $ + Z * (Math.PI - 2 * $), -1));
        }
        ((n.fillStyle = "#1e293b"),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.arc(v * u * 0.36, -u * 0.6, u * 0.09, 0, Math.PI * 2),
              n.fill());
          }),
          (n.fillStyle = "#fff"),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.arc(v * u * 0.33, -u * 0.63, u * 0.03, 0, Math.PI * 2),
              n.fill());
          }));
      }
      function WQ(n, u, r, l) {
        let o = Math.cos(r) * u * 0.96,
          f = Math.sin(r) * u * 0.96,
          $ = Math.cos(r) * u * 0.68,
          _ = Math.sin(r) * u * 0.68 + l * u * 0.18,
          v = -Math.sin(r) * u * 0.055,
          Z = Math.cos(r) * u * 0.055;
        (n.beginPath(),
          n.moveTo(o + v, f + Z),
          n.lineTo(o - v, f - Z),
          n.lineTo($, _),
          n.closePath(),
          n.fill());
      }
      function BJ(n, u, r, l, o, f, $, _) {
        ((n.lineCap = "round"),
          (n.strokeStyle = m(o, -25)),
          (n.lineWidth = Math.max(2.5, r * 0.03)));
        for (let Z = 0; Z < 5; Z++) {
          let J = (Z - 2) * u * 0.3;
          (n.beginPath(), n.moveTo(J, u * 0.12));
          for (let e = 1; e <= 3; e++) {
            let Q = u * 0.12 + e * u * 0.33,
              M = J + Math.sin(l * 3.2 + Z * 1.25 + e * 1.05) * u * 0.17;
            n.quadraticCurveTo(
              M + Math.sin(l * 3.2 + Z * 1.25) * u * 0.14,
              Q - u * 0.16,
              M,
              Q,
            );
          }
          n.stroke();
        }
        let v = n.createRadialGradient(
          -u * 0.3,
          -u * 0.6,
          u * 0.1,
          0,
          -u * 0.05,
          u * 1.25,
        );
        (v.addColorStop(0, "rgba(255,255,255,0.95)"),
          v.addColorStop(0.45, $),
          v.addColorStop(1, m(o, -15)),
          (n.fillStyle = v),
          n.beginPath(),
          n.arc(0, -u * 0.05, u * 0.88, Math.PI, 0),
          n.closePath(),
          n.fill(),
          (n.strokeStyle = f),
          (n.lineWidth = _),
          n.stroke(),
          (n.fillStyle = m(o, -25)),
          n.beginPath(),
          n.ellipse(0, -u * 0.05, u * 0.88, u * 0.15, 0, 0, Math.PI),
          n.fill(),
          (n.fillStyle = "rgba(255,255,255,0.75)"),
          n.beginPath(),
          n.arc(-u * 0.26, -u * 0.44, u * 0.12, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#1e293b"),
          [-1, 1].forEach((Z) => {
            (n.beginPath(),
              n.arc(Z * u * 0.22, -u * 0.3, u * 0.08, 0, Math.PI * 2),
              n.fill());
          }));
      }
      function AJ(n, u, r, l, o, f, $) {
        let v = [];
        for (let e = 0; e < 7; e++) {
          let Q = e / 6;
          v.push({
            x: -u * 0.95 + Q * u * 1.9,
            y: u * 0.45 + Math.sin(Q * Math.PI * 2 + l * 3) * u * 0.3,
          });
        }
        for (let e = 6; e >= 0; e--) {
          let Q = u * (0.24 + (e / 7) * 0.2);
          ((n.fillStyle = e % 2 ? m(o, -25) : m(o, 25)),
            n.beginPath(),
            n.arc(v[e].x, v[e].y, Q, 0, Math.PI * 2),
            n.fill(),
            (n.strokeStyle = f),
            (n.lineWidth = Math.max(1.5, r * 0.018)),
            n.stroke(),
            (n.fillStyle = "rgba(255,255,255,0.28)"),
            n.beginPath(),
            n.arc(
              v[e].x - Q * 0.28,
              v[e].y - Q * 0.3,
              Q * 0.42,
              0,
              Math.PI * 2,
            ),
            n.fill());
        }
        let Z = v[6];
        ((n.fillStyle = m(o, 35)),
          (n.strokeStyle = f),
          (n.lineWidth = $),
          n.beginPath(),
          n.moveTo(Z.x - u * 0.18, Z.y - u * 0.5),
          n.lineTo(Z.x + u * 0.58, Z.y),
          n.lineTo(Z.x - u * 0.18, Z.y + u * 0.5),
          n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.arc(Z.x + u * 0.12, Z.y - u * 0.16, u * 0.1, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#fff"),
          n.beginPath(),
          n.arc(Z.x + u * 0.09, Z.y - u * 0.19, u * 0.035, 0, Math.PI * 2),
          n.fill());
        let J = Math.sin(l * 7) * u * 0.14;
        ((n.strokeStyle = "#dc2626"),
          (n.lineWidth = Math.max(2, r * 0.02)),
          (n.lineCap = "round"),
          n.beginPath(),
          n.moveTo(Z.x + u * 0.58, Z.y),
          n.lineTo(Z.x + u * 0.86, Z.y + J),
          n.stroke());
      }
      function FJ(n, u, r, l, o, f, $) {
        let _ = Math.sin(l * 6) * 0.22;
        ([-1, 1].forEach((Z) => {
          (n.save(),
            n.rotate(Z * _),
            (n.fillStyle = m(o, -15)),
            (n.strokeStyle = f),
            (n.lineWidth = $),
            n.beginPath(),
            n.ellipse(
              Z * u * 0.8,
              -u * 0.32,
              u * 0.72,
              u * 0.3,
              Z * 0.4,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.stroke(),
            (n.strokeStyle = m(o, -50)),
            (n.lineWidth = Math.max(1.5, r * 0.018)));
          for (let J = 0; J < 3; J++)
            (n.beginPath(),
              n.moveTo(Z * u * (0.75 + J * 0.22), -u * 0.32),
              n.lineTo(Z * u * (1.15 + J * 0.28), -u * (0.62 + J * 0.06)),
              n.stroke());
          n.restore();
        }),
          (n.strokeStyle = "#fde047"),
          (n.lineWidth = Math.max(2, r * 0.022)),
          (n.lineCap = "round"));
        for (let Z = 0; Z < 6; Z++) {
          let J = (Z / 6) * Math.PI * 2 + l * 0.9,
            e = u * 1.3,
            Q = u * (1.55 + Math.sin(l * 8 + Z * 1.7) * 0.1);
          (n.beginPath(),
            n.moveTo(Math.cos(J) * e, Math.sin(J) * e),
            n.lineTo(Math.cos(J) * Q, Math.sin(J) * Q),
            n.stroke());
        }
        let v = n.createLinearGradient(0, -u, 0, u);
        (v.addColorStop(0, m(o, 40)),
          v.addColorStop(1, o),
          (n.fillStyle = v),
          (n.strokeStyle = f),
          (n.lineWidth = $),
          n.beginPath(),
          n.ellipse(0, u * 0.12, u * 0.42, u * 0.52, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#f97316"),
          n.beginPath(),
          n.moveTo(u * 0.4, u * 0.02),
          n.lineTo(u * 0.7, u * 0.16),
          n.lineTo(u * 0.4, u * 0.3),
          n.closePath(),
          n.fill(),
          (n.fillStyle = "#1e293b"),
          n.beginPath(),
          n.arc(u * 0.16, -u * 0.02, u * 0.11, 0, Math.PI * 2),
          n.fill(),
          (n.fillStyle = "#fff"),
          n.beginPath(),
          n.arc(u * 0.12, -u * 0.05, u * 0.04, 0, Math.PI * 2),
          n.fill());
      }
      function PJ(n, u, r, l, o, f) {
        ((n.strokeStyle = o),
          (n.lineWidth = f),
          (n.lineJoin = "round"),
          (n.fillStyle = m(l, -8)),
          n.beginPath());
        for (let $ = 0; $ < 6; $++) {
          let _ = ($ / 6) * Math.PI * 2 - Math.PI / 2,
            v = Math.cos(_) * u * 0.82,
            Z = Math.sin(_) * u * 0.92 + u * 0.12;
          if ($) n.lineTo(v, Z);
          else n.moveTo(v, Z);
        }
        (n.closePath(),
          n.fill(),
          n.stroke(),
          (n.fillStyle = "#93c5fd"),
          [
            [-0.58, -0.72, 0.26],
            [0, -1.02, 0.34],
            [0.58, -0.72, 0.26],
          ].forEach(([$, _, v]) => {
            let Z = Math.sin(r * 2 + $ * 5) * u * 0.03;
            (n.beginPath(),
              n.moveTo($ * u - v * u * 0.55, _ * u + u * 0.28 + Z),
              n.lineTo($ * u, _ * u - v * u + Z),
              n.lineTo($ * u + v * u * 0.55, _ * u + u * 0.28 + Z),
              n.closePath(),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = m(l, -28)),
          [-1, 1].forEach(($) => {
            (n.beginPath(),
              n.rect($ * u * 0.82, -u * 0.2, $ * u * 0.28, u * 0.7),
              n.fill(),
              n.stroke(),
              n.beginPath(),
              n.rect($ * u * 0.45 - u * 0.16, u * 0.72, u * 0.32, u * 0.32),
              n.fill(),
              n.stroke());
          }),
          (n.fillStyle = "#fef08a"),
          [-1, 1].forEach(($) => {
            (n.beginPath(),
              n.moveTo($ * u * 0.28 - u * 0.15, -u * 0.18),
              n.lineTo($ * u * 0.28 + u * 0.15, -u * 0.18),
              n.lineTo($ * u * 0.28, -u * 0.02),
              n.closePath(),
              n.fill());
          }));
      }
      function YJ(n, u, r, l, o, f, $) {
        let _ = Math.sin(r * 4.5) * 0.16;
        ([-1, 1].forEach((v) => {
          (n.save(),
            n.rotate(v * _),
            (n.fillStyle = m(l, 8)),
            (n.strokeStyle = o),
            (n.lineWidth = $),
            n.beginPath(),
            n.ellipse(
              v * u * 0.72,
              -u * 0.42,
              u * 0.66,
              u * 0.48,
              v * 0.5,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.stroke(),
            (n.fillStyle = m(l, -22)),
            n.beginPath(),
            n.ellipse(
              v * u * 0.66,
              u * 0.34,
              u * 0.42,
              u * 0.3,
              v * -0.45,
              0,
              Math.PI * 2,
            ),
            n.fill(),
            n.stroke(),
            (n.fillStyle = f),
            (n.strokeStyle = "#fff"),
            (n.lineWidth = Math.max(1.5, $ * 0.7)),
            n.beginPath(),
            n.arc(v * u * 0.82, -u * 0.48, u * 0.22, 0, Math.PI * 2),
            n.fill(),
            n.stroke(),
            (n.fillStyle = o),
            n.beginPath(),
            n.arc(v * u * 0.82, -u * 0.48, u * 0.1, 0, Math.PI * 2),
            n.fill(),
            n.restore());
        }),
          (n.fillStyle = m(l, -45)),
          (n.strokeStyle = o),
          (n.lineWidth = Math.max(1.5, $ * 0.8)),
          n.beginPath(),
          n.ellipse(0, u * 0.05, u * 0.2, u * 0.5, 0, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.moveTo(v * u * 0.08, -u * 0.38),
              n.quadraticCurveTo(
                v * u * 0.34,
                -u * 0.72,
                v * u * 0.52,
                -u * 0.82 + Math.sin(r * 5 + v) * u * 0.05,
              ),
              n.stroke());
          }),
          (n.fillStyle = "#fff"),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.arc(v * u * 0.09, -u * 0.3, u * 0.08, 0, Math.PI * 2),
              n.fill());
          }),
          (n.fillStyle = "#1e293b"),
          [-1, 1].forEach((v) => {
            (n.beginPath(),
              n.arc(v * u * 0.09, -u * 0.3, u * 0.04, 0, Math.PI * 2),
              n.fill());
          }));
      }
      function ff(n, u, r, l, o, f, $, _) {
        let v = f
          ? Math.abs(Math.sin($ * 10)) * l * 0.05
          : Math.sin($ * 2) * l * 0.015;
        (n.save(), n.translate(u, r - v));
        let Z = l / 32;
        (n.scale(Z, Z),
          (n.fillStyle = "rgba(0,0,0,0.2)"),
          n.beginPath(),
          n.ellipse(0, 14 + v / Z, 9, 3.4, 0, 0, Math.PI * 2),
          n.fill());
        let J = f ? Math.sin($ * 10) * 3 : 0;
        if (
          ((n.fillStyle = "#334155"),
          n.fillRect(-6, 6 + J * 0.4, 5, 8),
          n.fillRect(1, 6 - J * 0.4, 5, 8),
          (n.fillStyle = _),
          n.beginPath(),
          n.roundRect(-8, -6, 16, 14, 5),
          n.fill(),
          (n.strokeStyle = "rgba(0,0,0,0.35)"),
          (n.lineWidth = 1.5),
          n.stroke(),
          (n.fillStyle = "#f59e0b"),
          o === 1)
        )
          n.fillRect(8, -4, 5, 9);
        else if (o === 3) n.fillRect(-13, -4, 5, 9);
        if (
          ((n.fillStyle = "#fcd9b8"),
          n.beginPath(),
          n.arc(0, -12, 7.5, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          (n.fillStyle = _),
          n.beginPath(),
          n.arc(0, -13.5, 7.6, Math.PI, 0),
          n.fill(),
          n.fillRect(-7.6, -14.5, 15.2, 2.5),
          o === 2)
        )
          ((n.fillStyle = "#fcd9b8"), n.fillRect(-7.6, -13, 15.2, 3));
        if (o === 0) n.fillRect(-7.6, -16.5, 15.2, 4);
        n.fillStyle = "#1e293b";
        let e = -11;
        if (o === 2) (n.fillRect(-4, e, 2.4, 3), n.fillRect(1.6, e, 2.4, 3));
        else if (o === 1) n.fillRect(5.1, e, 2.4, 3);
        else if (o === 3) n.fillRect(-7.5, e, 2.4, 3);
        n.restore();
      }
      var F = {
        GRASS: 0,
        TALL: 1,
        PATH: 2,
        WATER: 3,
        TREE: 4,
        THORN: 5,
        BOULDER: 6,
        GAP: 7,
        FLOWER: 8,
        PLAZA: 9,
        CAVE: 10,
        CAVEWALL: 11,
        DOOR: 12,
        HOUSE: 13,
        SAND: 14,
        DEEP: 15,
        BRIDGE: 16,
        CAVE_ENTRY: 17,
        BOG: 18,
        ROCK: 19,
        ASH: 20,
        MOSS: 21,
      };
