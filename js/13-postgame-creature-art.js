/* Eco Vínculo — arte exclusiva dos Pets da saga pós-jogo.
 * Desenhos vetoriais Canvas: silhuetas, anatomia e detalhes distintos por espécie.
 * Mantém a estética arredondada do jogo, mas evita o fallback de gosma genérica.
 */
(() => {
  "use strict";

  const palettes = {
    cipovivo:      { outline: "#183d2c", base: "#55a75d", light: "#a7e17c", dark: "#276246", accent: "#f4ce54", core: "#d6ff8f" },
    raizcoroada:   { outline: "#173b2c", base: "#397e4b", light: "#a9df74", dark: "#234f3d", accent: "#edc95a", core: "#d7ff92" },
    cristapup:     { outline: "#24324f", base: "#829bbd", light: "#e5f4ff", dark: "#435a82", accent: "#59dded", core: "#a6f4ff" },
    quartzarca:    { outline: "#29294d", base: "#aa8eda", light: "#f2e4ff", dark: "#63518e", accent: "#64ebff", core: "#c0f7ff" },
    mareflor:      { outline: "#17465a", base: "#4fbab6", light: "#b3fff0", dark: "#27738b", accent: "#f58fc7", core: "#e3fff4" },
    marecer:       { outline: "#143c53", base: "#368ca2", light: "#b8f8df", dark: "#245c78", accent: "#f78bc0", core: "#ddfff5" },
    nuvemaru:      { outline: "#274264", base: "#729dd7", light: "#e5f6ff", dark: "#4468aa", accent: "#f4ce5e", core: "#f5fdff" },
    temporalma:    { outline: "#24365f", base: "#587fd1", light: "#e2f4ff", dark: "#344f9a", accent: "#67e8ff", core: "#fff19a" },
    umbravio:      { outline: "#29204b", base: "#7657b7", light: "#d9c1ff", dark: "#40306f", accent: "#82e9ff", core: "#fff0a1" },
    ecliptouro:    { outline: "#211b3b", base: "#51436e", light: "#b9a8d6", dark: "#302742", accent: "#da72fa", core: "#ffe39a" },
    brasavio:      { outline: "#633024", base: "#e66b3b", light: "#ffd283", dark: "#a83d2d", accent: "#fff17d", core: "#fff6c4" },
    brasafenix:    { outline: "#672b24", base: "#f08a31", light: "#ffe08a", dark: "#bd3e30", accent: "#fff26e", core: "#fffbd0" },
    "eco-supremo": { outline: "#252449", base: "#5a6d9c", light: "#d7f7c1", dark: "#35345f", accent: "#f2cd67", core: "#fff4ae" },
  };

  const byId = new Set(Object.keys(palettes));
  const sw = (s) => Math.max(1.25, s * 0.075);
  function poly(c, points, fill, outline, width) {
    c.beginPath();
    c.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) c.lineTo(points[i][0], points[i][1]);
    c.closePath(); c.fillStyle = fill; c.fill();
    c.strokeStyle = outline; c.lineWidth = width; c.lineJoin = "round"; c.stroke();
  }
  function oval(c, x, y, rx, ry, fill, outline, width, rot = 0) {
    c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
    c.fillStyle = fill; c.fill(); c.strokeStyle = outline; c.lineWidth = width; c.stroke();
  }
  function stroke(c, draw, color, width) {
    c.beginPath(); draw(c); c.strokeStyle = color; c.lineWidth = width;
    c.lineCap = "round"; c.lineJoin = "round"; c.stroke();
  }
  function eye(c, x, y, s, p) {
    oval(c, x, y, s * 0.12, s * 0.16, "#fff8ee", p.outline, Math.max(0.9, s * 0.025));
    oval(c, x + s * 0.025, y + s * 0.025, s * 0.052, s * 0.09, "#17233a", "#17233a", 0.5);
    oval(c, x + s * 0.006, y - s * 0.025, s * 0.024, s * 0.03, "#ffffff", "#ffffff", 0.3);
  }
  function gem(c, x, y, r, fill, p) {
    poly(c, [[x, y-r], [x+r*.72,y-r*.28], [x+r*.55,y+r*.62], [x,y+r], [x-r*.55,y+r*.62], [x-r*.72,y-r*.28]], fill, p.outline, Math.max(1, r*.14));
    stroke(c, q => { q.moveTo(x, y-r*.72); q.lineTo(x, y+r*.62); }, "rgba(255,255,255,.74)", Math.max(0.8,r*.09));
  }
  function leaf(c, x, y, r, fill, p, angle = 0) {
    c.save(); c.translate(x,y); c.rotate(angle);
    c.beginPath(); c.moveTo(0,r); c.quadraticCurveTo(-r*1.18,-r*.06,0,-r);
    c.quadraticCurveTo(r*1.18,-r*.06,0,r); c.fillStyle=fill; c.fill(); c.strokeStyle=p.outline; c.lineWidth=Math.max(1,r*.16); c.stroke();
    stroke(c,q=>{q.moveTo(0,r*.72);q.quadraticCurveTo(r*.05,0,0,-r*.72);},p.light,Math.max(0.8,r*.09));
    c.restore();
  }
  function eyePair(c, left, right, y, s, p) { eye(c,left,y,s,p); eye(c,right,y,s,p); }
  function foot(c, x, y, s, p, fill = p.dark) {
    oval(c,x,y,s*.2,s*.11,fill,p.outline,sw(s));
    for (let i=-1;i<=1;i++) oval(c,x+i*s*.105,y+s*.03,s*.045,s*.04,p.light,p.outline,Math.max(.6,s*.025));
  }
  function flare(c,x,y,r,color) {
    poly(c,[[x,y-r],[x+r*.2,y-r*.2],[x+r,y],[x+r*.2,y+r*.2],[x,y+r],[x-r*.2,y+r*.2],[x-r,y],[x-r*.2,y-r*.2]],color,color,0.5);
  }
  function aura(c,s,p,phase) {
    const pulse=1+Math.sin(phase*2.4)*.045;
    const g=c.createRadialGradient(0,0,s*.2,0,0,s*1.6*pulse);
    g.addColorStop(0,p.core+"55"); g.addColorStop(.45,p.accent+"24"); g.addColorStop(1,p.accent+"00");
    c.fillStyle=g; c.beginPath(); c.arc(0,0,s*1.6*pulse,0,Math.PI*2); c.fill();
  }

  function drawCipovivo(c,s,p,t) {
    // Lagarto de raízes: quatro patas, cauda viva e folhas-semente.
    stroke(c,q=>{q.moveTo(-.62*s,.27*s);q.bezierCurveTo(-1.2*s,.05*s,-1.58*s,-.35*s,-1.48*s,-.82*s);q.bezierCurveTo(-1.42*s,-1.02*s,-1.16*s,-.99*s,-1.2*s,-.78*s);},p.outline,s*.19);
    stroke(c,q=>{q.moveTo(-.7*s,.24*s);q.bezierCurveTo(-1.22*s,-.02*s,-1.45*s,-.37*s,-1.36*s,-.73*s);},p.light,s*.065);
    for (const [x,y] of [[-.62,.56],[.42,.53],[-.47,.84],[.45,.82]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x-.05)*s,1.28*s);q.lineTo((x+.1)*s,1.36*s);},p.dark,s*.19); foot(c,(x+.08)*s,1.37*s,s,p); }
    oval(c,-.08*s,.3*s,.9*s,.57*s,p.base,p.outline,sw(s));
    oval(c,.55*s,-.19*s,.58*s,.45*s,p.light,p.outline,sw(s));
    poly(c,[[.73*s,-.11*s],[1.22*s,.01*s],[.94*s,.27*s],[.55*s,.2*s]],p.base,p.outline,sw(s));
    leaf(c,.22*s,-.74*s,.37*s,p.light,p,-.6); leaf(c,.58*s,-.78*s,.34*s,p.accent,p,.35); leaf(c,-.02*s,-.64*s,.31*s,p.base,p,-1.02);
    oval(c,-.13*s,.42*s,.32*s,.33*s,p.dark,p.outline,sw(s)); gem(c,-.13*s,.42*s,.18*s,p.core,p);
    eye(c,.71*s,-.3*s,s,p); oval(c,1.03*s,.08*s,.045*s,.04*s,p.outline,p.outline,.5);
    flare(c,-.53*s,-.09*s,.095*s,p.accent); flare(c,-.52*s,.6*s,.07*s,p.light);
  }
  function drawRaizcoroada(c,s,p,t) {
    // Guardiã-arbórea: tronco colunar, braços-raiz e uma coroa ramificada.
    poly(c,[[-.5*s,.86*s],[-.72*s,.28*s],[-.53*s,-.28*s],[-.3*s,-.62*s],[.3*s,-.62*s],[.56*s,-.2*s],[.63*s,.5*s],[.45*s,.94*s],[0,1.08*s]],p.base,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(-.34*s,.05*s);q.lineTo(-1.02*s,.32*s);q.lineTo(-1.22*s,.7*s);q.moveTo(.34*s,.05*s);q.lineTo(1.03*s,.22*s);q.lineTo(1.19*s,.65*s);},p.dark,s*.2);
    poly(c,[[-.25*s,.73*s],[-.78*s,1.16*s],[-.99*s,1.12*s],[-.55*s,.69*s]],p.dark,p.outline,sw(s));
    poly(c,[[.22*s,.73*s],[.78*s,1.16*s],[.99*s,1.12*s],[.55*s,.69*s]],p.dark,p.outline,sw(s));
    // Galhos grossos que desenham uma coroa bem legível mesmo em miniatura.
    stroke(c,q=>{q.moveTo(-.12*s,-.42*s);q.lineTo(-.36*s,-.95*s);q.lineTo(-.92*s,-1.27*s);q.moveTo(-.34*s,-.92*s);q.lineTo(-.22*s,-1.36*s);q.moveTo(.12*s,-.42*s);q.lineTo(.38*s,-.98*s);q.lineTo(.94*s,-1.27*s);q.moveTo(.34*s,-.93*s);q.lineTo(.22*s,-1.36*s);},p.dark,s*.16);
    leaf(c,-.94*s,-1.27*s,.26*s,p.light,p,-.9); leaf(c,-.22*s,-1.38*s,.24*s,p.accent,p,-.4); leaf(c,.22*s,-1.38*s,.24*s,p.light,p,.4); leaf(c,.96*s,-1.27*s,.26*s,p.accent,p,.9);
    oval(c,0,.12*s,.28*s,.36*s,p.dark,p.outline,sw(s)); gem(c,0,.15*s,.19*s,p.core,p);
    eye(c,-.18*s,-.32*s,s,p); eye(c,.18*s,-.32*s,s,p);
    leaf(c,-.73*s,-.05*s,.3*s,p.light,p,-1.1); leaf(c,.74*s,-.02*s,.3*s,p.accent,p,1.1);
  }
  function drawCristapup(c,s,p,t) {
    // Filhote-quadrúpede de cristal, com patas, focinho e aglomerado prismático.
    for (const [x,y] of [[-.58,.62],[.54,.6],[-.49,.86],[.53,.84]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x-.02)*s,1.22*s);},p.outline,s*.2); foot(c,(x+.03)*s,1.23*s,s,p); }
    oval(c,-.02*s,.38*s,.89*s,.52*s,p.base,p.outline,sw(s));
    poly(c,[[-.35*s,-.06*s],[.05*s,-.62*s],[.55*s,-.42*s],[.85*s,-.05*s],[.58*s,.39*s],[-.02*s,.42*s]],p.light,p.outline,sw(s));
    poly(c,[[.52*s,.04*s],[1.08*s,.18*s],[.69*s,.4*s],[.35*s,.28*s]],p.base,p.outline,sw(s));
    poly(c,[[-.25*s,-.2*s],[-.52*s,-.83*s],[-.06*s,-.6*s],[.03*s,-.2*s]],p.accent,p.outline,sw(s));
    poly(c,[[.04*s,-.28*s],[.25*s,-1.15*s],[.48*s,-.33*s]],p.core,p.outline,sw(s));
    poly(c,[[.39*s,-.24*s],[.75*s,-.88*s],[.78*s,-.12*s]],p.dark,p.outline,sw(s));
    poly(c,[[-.8*s,.07*s],[-1.04*s,-.38*s],[-.49*s,-.12*s]],p.dark,p.outline,sw(s));
    gem(c,.12*s,.16*s,.19*s,p.core,p); eye(c,.59*s,-.18*s,s,p);
    stroke(c,q=>{q.moveTo(-.7*s,.42*s);q.lineTo(-.28*s,.52*s);q.lineTo(-.1*s,.43*s);},p.light,s*.08);
  }
  function drawQuartzarca(c,s,p,t) {
    // Aríete de quartzo: peito blindado, quatro patas e chifres curvos em espiral.
    for (const [x,y] of [[-.58,.55],[.54,.56],[-.52,.84],[.52,.84]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo(x*s,1.18*s);},p.dark,s*.22); foot(c,x*s,1.19*s,s,p,p.outline); }
    oval(c,-.02*s,.31*s,1.02*s,.56*s,p.dark,p.outline,sw(s));
    oval(c,.46*s,.03*s,.51*s,.43*s,p.base,p.outline,sw(s));
    poly(c,[[.67*s,-.2*s],[1.16*s,-.27*s],[.97*s,.2*s],[.55*s,.27*s]],p.light,p.outline,sw(s));
    // Grandes chifres curvados para fora e depois para cima.
    stroke(c,q=>{q.moveTo(.28*s,-.24*s);q.bezierCurveTo(-.18*s,-.38*s,-.64*s,-1.28*s,-1.02*s,-1.02*s);q.bezierCurveTo(-1.38*s,-.78*s,-.97*s,-.43*s,-.78*s,-.75*s);q.moveTo(.68*s,-.24*s);q.bezierCurveTo(1.02*s,-.39*s,1.37*s,-1.18*s,1.61*s,-.96*s);q.bezierCurveTo(1.89*s,-.68*s,1.47*s,-.46*s,1.43*s,-.76*s);},p.light,s*.23);
    stroke(c,q=>{q.moveTo(-.88*s,-.89*s);q.quadraticCurveTo(-1.25*s,-.59*s,-.83*s,-.68*s);q.moveTo(1.49*s,-.83*s);q.quadraticCurveTo(1.74*s,-.54*s,1.45*s,-.68*s);},p.accent,s*.09);
    poly(c,[[-.35*s,-.03*s],[-.14*s,-.65*s],[.16*s,-.28*s],[.48*s,-.69*s],[.65*s,.01*s],[.31*s,.43*s]],p.accent,p.outline,sw(s));
    gem(c,.38*s,.03*s,.21*s,p.core,p); eye(c,.78*s,-.11*s,s,p);
    stroke(c,q=>{q.moveTo(-.65*s,.04*s);q.lineTo(-.87*s,-.19*s);q.moveTo(-.85*s,.04*s);q.lineTo(-1.03*s,-.15*s);},p.core,s*.075);
  }
  function drawMareflor(c,s,p,t) {
    // Cerva aquática jovem: pescoço alto, quatro pernas finas e pequenas galhadas de coral.
    for (const [x,y] of [[-.52,.61],[.4,.62],[-.48,.83],[.41,.83]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x+.02)*s,1.32*s);},p.outline,s*.13); foot(c,(x+.02)*s,1.34*s,s,p,p.dark); }
    oval(c,-.12*s,.36*s,.78*s,.43*s,p.base,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(.22*s,.2*s);q.bezierCurveTo(.53*s,.02*s,.31*s,-.48*s,.68*s,-.73*s);},p.dark,s*.29);
    stroke(c,q=>{q.moveTo(.24*s,.2*s);q.bezierCurveTo(.54*s,.02*s,.38*s,-.44*s,.68*s,-.73*s);},p.light,s*.18);
    oval(c,.82*s,-.77*s,.38*s,.27*s,p.light,p.outline,sw(s));
    poly(c,[[1.03*s,-.72*s],[1.48*s,-.61*s],[1.08*s,-.48*s]],p.base,p.outline,sw(s));
    // Galhos florais e uma barbatana dorsal.
    stroke(c,q=>{q.moveTo(.7*s,-.93*s);q.lineTo(.55*s,-1.35*s);q.lineTo(.35*s,-1.49*s);q.moveTo(.57*s,-1.28*s);q.lineTo(.79*s,-1.45*s);q.moveTo(.81*s,-.94*s);q.lineTo(1.02*s,-1.28*s);},p.dark,s*.095);
    leaf(c,.33*s,-1.5*s,.19*s,p.accent,p,-.65); leaf(c,.82*s,-1.47*s,.18*s,p.light,p,.55); leaf(c,1.03*s,-1.3*s,.17*s,p.accent,p,.85);
    poly(c,[[-.14*s,-.04*s],[-.42*s,-.61*s],[-.28*s,.07*s],[.04*s,.2*s]],p.accent,p.outline,sw(s));
    oval(c,-.2*s,.38*s,.38*s,.18*s,p.light,"none",0);
    eye(c,.92*s,-.82*s,s,p);
    stroke(c,q=>{q.moveTo(-.84*s,.22*s);q.bezierCurveTo(-1.18*s,-.03*s,-1.24*s,-.35*s,-1.03*s,-.48*s);},p.light,s*.1);
    flare(c,-.29*s,.2*s,.075*s,p.core);
  }
  function drawMarecer(c,s,p,t) {
    // Guardião-cervo: galhadas de coral, manto de barbatanas e quatro pernas longas.
    for (const [x,y] of [[-.58,.42],[.48,.49],[-.52,.76],[.49,.77]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x+.04)*s,1.34*s);},p.dark,s*.17); foot(c,(x+.06)*s,1.36*s,s,p,p.outline); }
    oval(c,-.06*s,.22*s,.91*s,.49*s,p.base,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(.23*s,.03*s);q.bezierCurveTo(.48*s,-.23*s,.31*s,-.66*s,.64*s,-.83*s);},p.dark,s*.34);
    stroke(c,q=>{q.moveTo(.25*s,.03*s);q.bezierCurveTo(.49*s,-.22*s,.38*s,-.64*s,.65*s,-.83*s);},p.light,s*.2);
    oval(c,.79*s,-.9*s,.43*s,.3*s,p.light,p.outline,sw(s));
    poly(c,[[1.03*s,-.86*s],[1.53*s,-.73*s],[1.13*s,-.59*s]],p.base,p.outline,sw(s));
    // Corona coral ramificada.
    stroke(c,q=>{q.moveTo(.62*s,-1.04*s);q.lineTo(.3*s,-1.56*s);q.lineTo(-.02*s,-1.69*s);q.moveTo(.33*s,-1.53*s);q.lineTo(.44*s,-1.9*s);q.moveTo(.75*s,-1.08*s);q.lineTo(1.09*s,-1.54*s);q.lineTo(1.39*s,-1.66*s);q.moveTo(1.05*s,-1.51*s);q.lineTo(.94*s,-1.88*s);},p.accent,s*.12);
    for (const [x,y,a] of [[-.05,-1.69,-.9],[.44,-1.91,.3],[1.4,-1.66,.9],[.94,-1.88,-.3]]) leaf(c,x*s,y*s,.19*s,p.accent,p,a);
    // Fin-mantle and water ribbons trail behind.
    poly(c,[[-.49*s,-.01*s],[-1.05*s,-.44*s],[-.86*s,.1*s],[-1.32*s,.28*s],[-.57*s,.51*s]],p.dark,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(-.71*s,.16*s);q.bezierCurveTo(-1.18*s,.04*s,-1.32*s,-.26*s,-1.46*s,-.52*s);},p.light,s*.11);
    gem(c,-.08*s,.18*s,.2*s,p.core,p); eye(c,.91*s,-.98*s,s,p);
    for (const [x,y] of [[-.2,-.08],[.02,-.04],[.21,.02]]) flare(c,x*s,y*s,.07*s,p.accent);
  }
  function drawNuvemaru(c,s,p,t) {
    // Falcão jovem: asas completas com penas em leque, bico, cauda e garras.
    for (const side of [-1,1]) {
      poly(c,[[side*.18*s,-.15*s],[side*.57*s,-.84*s],[side*1.25*s,-1.18*s],[side*1.02*s,-.48*s],[side*1.43*s,-.67*s],[side*.92*s,.02*s],[side*.5*s,.35*s]],p.base,p.outline,sw(s));
      for (let i=0;i<3;i++) stroke(c,q=>{q.moveTo(side*(.42+i*.12)*s,-.12*s);q.quadraticCurveTo(side*(.9+i*.17)*s,-.55*s,side*(1.04+i*.16)*s,(-.96+i*.12)*s);},p.light,s*.075);
    }
    oval(c,0,.2*s,.57*s,.72*s,p.dark,p.outline,sw(s));
    oval(c,.18*s,-.45*s,.43*s,.43*s,p.light,p.outline,sw(s));
    poly(c,[[.43*s,-.43*s],[.93*s,-.26*s],[.47*s,-.11*s]],p.accent,p.outline,sw(s));
    poly(c,[[-.1*s,-.73*s],[-.38*s,-1.14*s],[-.08*s,-1.03*s],[.12*s,-1.23*s],[.22*s,-.77*s]],p.base,p.outline,sw(s));
    poly(c,[[-.26*s,.7*s],[-.65*s,1.25*s],[-.13*s,1.04*s],[.1*s,1.37*s],[.22*s,.86*s]],p.dark,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(-.15*s,.78*s);q.lineTo(-.2*s,1.1*s);q.lineTo(-.41*s,1.25*s);q.moveTo(.14*s,.82*s);q.lineTo(.22*s,1.1*s);q.lineTo(.42*s,1.2*s);},p.accent,s*.095);
    eye(c,.28*s,-.53*s,s,p);
    flare(c,-.53*s,-.38*s,.08*s,p.core);
  }
  function drawTemporalma(c,s,p,t) {
    // Fênix tempestuosa: asas abertas, raios nas penas e longa cauda de plumas.
    for (const side of [-1,1]) {
      poly(c,[[side*.12*s,-.06*s],[side*.46*s,-.86*s],[side*1.14*s,-1.39*s],[side*1.06*s,-.77*s],[side*1.63*s,-1.03*s],[side*1.31*s,-.37*s],[side*1.68*s,-.45*s],[side*1.18*s,.14*s],[side*.48*s,.38*s]],p.dark,p.outline,sw(s));
      poly(c,[[side*.34*s,-.13*s],[side*.7*s,-.75*s],[side*1.29*s,-1.14*s],[side*1.06*s,-.55*s],[side*.73*s,.11*s]],p.base,p.outline,sw(s));
      for (let i=0;i<3;i++) stroke(c,q=>{q.moveTo(side*(.54+i*.14)*s,-.12*s);q.lineTo(side*(.83+i*.2)*s,-.47*s);q.lineTo(side*(1.08+i*.16)*s,-(.82+i*.1)*s);},p.accent,s*.07);
    }
    oval(c,0,.16*s,.48*s,.68*s,p.base,p.outline,sw(s));
    oval(c,.1*s,-.48*s,.37*s,.38*s,p.light,p.outline,sw(s));
    poly(c,[[.3*s,-.46*s],[.76*s,-.29*s],[.32*s,-.16*s]],p.accent,p.outline,sw(s));
    poly(c,[[-.13*s,.55*s],[-.5*s,1.18*s],[-.18*s,1.04*s],[0,1.47*s],[.18*s,1.04*s],[.45*s,1.22*s],[.19*s,.53*s]],p.dark,p.outline,sw(s));
    poly(c,[[-.08*s,.46*s],[-.25*s,.95*s],[0,.78*s],[.12*s,1.08*s],[.22*s,.45*s]],p.accent,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(-.45*s,-.45*s);q.lineTo(-.26*s,-.67*s);q.lineTo(-.4*s,-.72*s);q.moveTo(.85*s,-.98*s);q.lineTo(.68*s,-.78*s);q.lineTo(.91*s,-.73*s);},p.core,s*.09);
    gem(c,0,.13*s,.2*s,p.core,p); eye(c,.26*s,-.52*s,s,p); flare(c,-.27*s,-.4*s,.08*s,p.core);
  }
  function drawUmbravio(c,s,p,t) {
    // Morcego lunar: asas membranosas largas, orelhas, patas e crescente celeste.
    // Halo em crescente atrás da cabeça.
    c.save(); c.rotate(Math.sin(t*1.4)*.035);
    stroke(c,q=>{q.arc(0,-.18*s,1.12*s,Math.PI*1.12,Math.PI*1.9);},p.accent,s*.095);
    flare(c,-1.12*s,-.22*s,.09*s,p.core); flare(c,1.03*s,-.9*s,.075*s,p.accent);
    c.restore();
    // Membranas com dedos e borda recortada: leitura inequívoca de morcego.
    poly(c,[[-.2*s,-.12*s],[-.72*s,-.94*s],[-1.48*s,-1.2*s],[-1.31*s,-.59*s],[-1.68*s,-.66*s],[-1.33*s,.12*s],[-1.55*s,.45*s],[-.74*s,.42*s],[-.35*s,.32*s]],p.dark,p.outline,sw(s));
    poly(c,[[.2*s,-.12*s],[.72*s,-.94*s],[1.48*s,-1.2*s],[1.31*s,-.59*s],[1.68*s,-.66*s],[1.33*s,.12*s],[1.55*s,.45*s],[.74*s,.42*s],[.35*s,.32*s]],p.dark,p.outline,sw(s));
    for (const side of [-1,1]) {
      stroke(c,q=>{q.moveTo(side*.26*s,.05*s);q.lineTo(side*1.43*s,-1.12*s);q.moveTo(side*.26*s,.05*s);q.lineTo(side*1.3*s,-.53*s);q.moveTo(side*.26*s,.05*s);q.lineTo(side*1.48*s,.34*s);},p.light,s*.065);
    }
    // Corpo compacto, mas não amorfo: tórax, abdômen anelado e membros.
    oval(c,0,.18*s,.39*s,.67*s,p.base,p.outline,sw(s));
    for (let i=0;i<3;i++) stroke(c,q=>{q.moveTo(-.25*s,(.38+i*.2)*s);q.quadraticCurveTo(0,(.48+i*.2)*s,.25*s,(.38+i*.2)*s);},p.light,s*.045);
    poly(c,[[-.29*s,-.35*s],[-.52*s,-1.05*s],[-.08*s,-.76*s],[.02*s,-.28*s]],p.light,p.outline,sw(s));
    poly(c,[[.29*s,-.35*s],[.52*s,-1.05*s],[.08*s,-.76*s],[-.02*s,-.28*s]],p.light,p.outline,sw(s));
    oval(c,0,-.29*s,.43*s,.39*s,p.light,p.outline,sw(s));
    eyePair(c,-.17*s,.17*s,-.31*s,s,p);
    poly(c,[[-.18*s,.69*s],[-.35*s,1.02*s],[-.09*s,.94*s],[0,1.18*s],[.11*s,.94*s],[.35*s,1.02*s],[.18*s,.69*s]],p.dark,p.outline,sw(s));
    gem(c,0,.26*s,.12*s,p.core,p);
  }
  function drawEcliptouro(c,s,p,t) {
    // Touro de eclipse: silhueta quadrúpede blindada, chifres enormes e disco negro.
    c.save(); c.rotate(Math.sin(t*1.2)*.025);
    oval(c,.52*s,-.38*s,.7*s,.7*s,"#271d3d",p.accent,sw(s));
    oval(c,.52*s,-.38*s,.48*s,.48*s,"#f2c965","#f2c965",sw(s));
    oval(c,.68*s,-.4*s,.38*s,.48*s,p.outline,p.outline,1);
    c.restore();
    for (const [x,y] of [[-.55,.52],[.54,.52],[-.5,.82],[.54,.82]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x-.03)*s,1.2*s);},p.outline,s*.23); foot(c,x*s,1.22*s,s,p,p.dark); }
    oval(c,-.03*s,.32*s,1.03*s,.58*s,p.base,p.outline,sw(s));
    oval(c,.48*s,.03*s,.5*s,.47*s,p.dark,p.outline,sw(s));
    poly(c,[[.69*s,.01*s],[1.19*s,.12*s],[.9*s,.36*s],[.54*s,.31*s]],p.light,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(.3*s,-.23*s);q.bezierCurveTo(-.04*s,-.67*s,-.25*s,-1.27*s,-.78*s,-1.23*s);q.bezierCurveTo(-1.21*s,-1.2*s,-1.11*s,-.69*s,-.76*s,-.8*s);q.moveTo(.67*s,-.25*s);q.bezierCurveTo(1.02*s,-.68*s,1.22*s,-1.24*s,1.64*s,-1.16*s);q.bezierCurveTo(2.02*s,-1.08*s,1.77*s,-.62*s,1.52*s,-.81*s);},p.light,s*.23);
    poly(c,[[-.48*s,.01*s],[-.2*s,-.59*s],[.1*s,-.27*s],[.4*s,-.68*s],[.72*s,.05*s],[.31*s,.45*s]],p.dark,p.outline,sw(s));
    for (let i=0;i<3;i++) stroke(c,q=>{q.moveTo((-.24+i*.2)*s,.08*s);q.lineTo((-.1+i*.2)*s,.44*s);},p.accent,s*.06);
    gem(c,.43*s,.04*s,.22*s,p.core,p); eye(c,.81*s,-.1*s,s,p);
    flare(c,-.58*s,-.21*s,.08*s,p.accent);
  }
  function drawBrasavio(c,s,p,t) {
    // Ave de brasa: asa de falcão, bico agudo, crista e cauda em chamas.
    for (const side of [-1,1]) {
      poly(c,[[side*.13*s,-.04*s],[side*.43*s,-.77*s],[side*1.12*s,-1.1*s],[side*.92*s,-.47*s],[side*1.39*s,-.65*s],[side*.91*s,.12*s],[side*.4*s,.32*s]],p.base,p.outline,sw(s));
      for(let i=0;i<3;i++) stroke(c,q=>{q.moveTo(side*(.37+i*.11)*s,-.05*s);q.lineTo(side*(.81+i*.17)*s,-.44*s);q.lineTo(side*(1.07+i*.18)*s,-(.79+i*.09)*s);},i===1?p.core:p.light,s*.075);
    }
    oval(c,0,.15*s,.46*s,.64*s,p.dark,p.outline,sw(s));
    oval(c,.11*s,-.42*s,.38*s,.37*s,p.light,p.outline,sw(s));
    poly(c,[[.35*s,-.39*s],[.85*s,-.22*s],[.38*s,-.1*s]],p.accent,p.outline,sw(s));
    poly(c,[[-.18*s,-.62*s],[-.5*s,-1.12*s],[-.16*s,-.94*s],[.12*s,-1.25*s],[.2*s,-.65*s]],p.accent,p.outline,sw(s));
    poly(c,[[-.18*s,.61*s],[-.5*s,1.28*s],[-.18*s,1.03*s],[0,1.48*s],[.17*s,1.04*s],[.46*s,1.24*s],[.18*s,.59*s]],p.dark,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(-.2*s,.74*s);q.quadraticCurveTo(-.42*s,1.16*s,-.19*s,1.36*s);q.moveTo(.14*s,.72*s);q.quadraticCurveTo(.43*s,1.1*s,.23*s,1.34*s);},p.accent,s*.13);
    stroke(c,q=>{q.moveTo(-.15*s,.57*s);q.lineTo(-.23*s,1.04*s);q.lineTo(-.46*s,1.18*s);q.moveTo(.15*s,.6*s);q.lineTo(.22*s,1.04*s);q.lineTo(.43*s,1.16*s);},p.outline,s*.09);
    eye(c,.23*s,-.48*s,s,p); gem(c,0,.14*s,.16*s,p.core,p);
  }
  function drawBrasafenix(c,s,p,t) {
    // Fênix solar: asas cerimoniais, halo, plumas sobrepostas e cauda em leque.
    c.save(); c.rotate(Math.sin(t*1.1)*.035); c.beginPath(); c.arc(0,-.27*s,1.05*s,Math.PI*1.08,Math.PI*1.92); c.strokeStyle=p.accent; c.lineWidth=s*.12; c.stroke(); c.restore();
    for(const side of [-1,1]) {
      poly(c,[[side*.12*s,-.03*s],[side*.42*s,-.92*s],[side*1.25*s,-1.55*s],[side*1.09*s,-.77*s],[side*1.73*s,-1.08*s],[side*1.35*s,-.32*s],[side*1.75*s,-.42*s],[side*1.12*s,.24*s],[side*.42*s,.36*s]],p.dark,p.outline,sw(s));
      poly(c,[[side*.33*s,-.08*s],[side*.67*s,-.79*s],[side*1.34*s,-1.29*s],[side*1.15*s,-.56*s],[side*.72*s,.12*s]],p.base,p.outline,sw(s));
      for(let i=0;i<4;i++) stroke(c,q=>{q.moveTo(side*(.51+i*.08)*s,-.1*s);q.quadraticCurveTo(side*(.99+i*.11)*s,-.49*s,side*(1.37+i*.1)*s,-(.98+i*.09)*s);},i%2?p.light:p.accent,s*.075);
    }
    oval(c,0,.13*s,.49*s,.7*s,p.base,p.outline,sw(s));
    oval(c,.1*s,-.5*s,.37*s,.37*s,p.light,p.outline,sw(s));
    poly(c,[[.32*s,-.48*s],[.77*s,-.28*s],[.35*s,-.14*s]],p.accent,p.outline,sw(s));
    poly(c,[[-.2*s,.55*s],[-.7*s,1.38*s],[-.36*s,1.17*s],[-.18*s,1.66*s],[.05*s,1.22*s],[.34*s,1.57*s],[.3*s,1.12*s],[.48*s,1.42*s],[.17*s,.54*s]],p.dark,p.outline,sw(s));
    poly(c,[[-.08*s,.47*s],[-.31*s,1.03*s],[0,.85*s],[.13*s,1.21*s],[.25*s,.46*s]],p.accent,p.outline,sw(s));
    for(const [x,y] of [[-.45,-.46],[.75,-.96],[-.64,.65]]) flare(c,x*s,y*s,.09*s,p.core);
    gem(c,0,.05*s,.25*s,p.core,p); eye(c,.23*s,-.54*s,s,p);
  }
  function drawEcoSupremo(c,s,p,t) {
    // Lendário primordial: dragão quadrúpede, asas, chifres e coroa dos três mundos.
    // Cauda entrelaçada e asas de três pontas.
    stroke(c,q=>{q.moveTo(-.72*s,.29*s);q.bezierCurveTo(-1.24*s,.2*s,-1.58*s,-.36*s,-1.39*s,-.77*s);q.bezierCurveTo(-1.26*s,-1.03*s,-.98*s,-.86*s,-1.19*s,-.62*s);},p.accent,s*.18);
    for(const side of [-1,1]) {
      poly(c,[[side*.19*s,-.22*s],[side*.5*s,-.87*s],[side*1.12*s,-1.45*s],[side*1.03*s,-.7*s],[side*1.58*s,-1.02*s],[side*1.27*s,-.29*s],[side*1.56*s,.08*s],[side*.52*s,.25*s]],p.dark,p.outline,sw(s));
      poly(c,[[side*.36*s,-.16*s],[side*.67*s,-.73*s],[side*1.21*s,-1.16*s],[side*1.08*s,-.48*s],[side*.58*s,.12*s]],p.base,p.outline,sw(s));
      stroke(c,q=>{q.moveTo(side*.42*s,-.11*s);q.lineTo(side*1.24*s,-1.1*s);q.moveTo(side*.42*s,-.11*s);q.lineTo(side*1.39*s,-.18*s);},p.light,s*.07);
    }
    // Quatro patas e corpo de dragão robusto.
    for(const [x,y] of [[-.54,.43],[.5,.43],[-.56,.7],[.5,.7]]) { stroke(c,q=>{q.moveTo(x*s,y*s);q.lineTo((x-.04)*s,1.16*s);},p.outline,s*.22); foot(c,x*s,1.19*s,s,p,p.dark); }
    oval(c,-.02*s,.19*s,.94*s,.55*s,p.base,p.outline,sw(s));
    stroke(c,q=>{q.moveTo(.37*s,.05*s);q.bezierCurveTo(.68*s,-.25*s,.44*s,-.59*s,.73*s,-.79*s);},p.dark,s*.3);
    oval(c,.85*s,-.83*s,.43*s,.31*s,p.light,p.outline,sw(s));
    poly(c,[[1.04*s,-.79*s],[1.58*s,-.65*s],[1.12*s,-.51*s]],p.base,p.outline,sw(s));
    // Galhadas ramificadas, gema solar e marcas trinas.
    stroke(c,q=>{q.moveTo(.61*s,-1.0*s);q.lineTo(.37*s,-1.4*s);q.lineTo(.12*s,-1.48*s);q.moveTo(.39*s,-1.39*s);q.lineTo(.5*s,-1.72*s);q.moveTo(.94*s,-1.02*s);q.lineTo(1.2*s,-1.39*s);q.lineTo(1.47*s,-1.44*s);},p.accent,s*.115);
    poly(c,[[-.38*s,.03*s],[-.15*s,-.42*s],[.05*s,-.12*s],[.25*s,-.48*s],[.51*s,.09*s],[.2*s,.49*s]],p.dark,p.outline,sw(s));
    gem(c,.15*s,.1*s,.22*s,p.core,p);
    eye(c,1.02*s,-.88*s,s,p);
    flare(c,-.22*s,.27*s,.08*s,p.accent); flare(c,.02*s,.31*s,.08*s,p.core); flare(c,.28*s,.25*s,.08*s,p.light);
    stroke(c,q=>{q.moveTo(-.08*s,.76*s);q.lineTo(-.23*s,1.04*s);q.moveTo(.15*s,.76*s);q.lineTo(.31*s,1.03*s);},p.accent,s*.09);
  }

  const drawings = {
    cipovivo: drawCipovivo,
    raizcoroada: drawRaizcoroada,
    cristapup: drawCristapup,
    quartzarca: drawQuartzarca,
    mareflor: drawMareflor,
    marecer: drawMarecer,
    nuvemaru: drawNuvemaru,
    temporalma: drawTemporalma,
    umbravio: drawUmbravio,
    ecliptouro: drawEcliptouro,
    brasavio: drawBrasavio,
    brasafenix: drawBrasafenix,
    "eco-supremo": drawEcoSupremo,
  };

  function draw(ctx, pet, x, y, size, options = {}) {
    if (!pet || !byId.has(pet.id)) return false;
    const p = palettes[pet.id];
    const stage = Math.max(0, Math.min(2, Number(pet.stage) || 0));
    const s = size * 0.3 * (1 + stage * 0.45);
    const phase = Number(options.t) || 0;
    const bob = Math.sin(phase * 3 + pet.id.length) * size * 0.012;
    ctx.save();
    ctx.translate(x, y + bob);
    if (options.flip) ctx.scale(-1, 1);
    if (options.fainted) ctx.globalAlpha *= 0.55;
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.fillStyle = "rgba(0,0,0,.2)";
    ctx.beginPath(); ctx.ellipse(0,size*.43,size*.28,size*.055,0,0,Math.PI*2); ctx.fill();
    if (pet.glow || pet.id === "umbravio" || pet.id === "ecliptouro") aura(ctx,s,p,phase);
    drawings[pet.id](ctx,s,p,phase);
    ctx.restore();
    return true;
  }

  window.EV_POSTGAME_ART = Object.freeze({ draw, ids: Object.freeze([...byId]) });
})();
