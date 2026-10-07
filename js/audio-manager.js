/* Eco Vínculo — Trilhas contextuais e jingles de interface.
 * Os arquivos são relativos ao index.html e funcionam no GitHub Pages.
 */
(() => {
  "use strict";

  const tracks = {
    menu: "./assets/audio/menu-theme.mp3",
    common: "./assets/audio/battle-common.mp3",
    boss: "./assets/audio/battle-boss.mp3",
    pvp: "./assets/audio/battle-pvp.mp3",
  };
  const player = new Audio();
  player.preload = "auto";
  player.loop = true;
  player.volume = 0.34;

  let activeMode = "";
  let requestedMode = "";
  let screen = "title";
  let battleActive = false;
  let lastWorldTrack = "campo";

  const bridge = () => window.EV_AUDIO_BRIDGE || {};

  function stopTrack(reset = true) {
    try {
      player.pause();
      if (reset) player.currentTime = 0;
    } catch {}
    activeMode = "";
    requestedMode = "";
  }

  function playTrack(mode) {
    const src = tracks[mode];
    if (!src) return;
    requestedMode = mode;
    if (activeMode === mode && !player.paused) return;
    try {
      player.pause();
      player.currentTime = 0;
      player.src = src;
      activeMode = mode;
      const result = player.play();
      if (result && typeof result.catch === "function") result.catch(() => {});
    } catch {}
  }

  function unlockAudio() {
    if (!requestedMode || !player.paused) return;
    try {
      const result = player.play();
      if (result && typeof result.catch === "function") result.catch(() => {});
    } catch {}
  }

  function setScreen(nextScreen) {
    screen = nextScreen || "title";
    if (screen === "game") {
      if (activeMode === "menu") stopTrack();
      if (!battleActive && lastWorldTrack) {
        try { bridge().playAmbient?.(lastWorldTrack); } catch {}
      }
      return;
    }
    if (!battleActive) {
      try { bridge().stopAmbient?.(); } catch {}
      playTrack("menu");
    }
  }

  function rememberWorldTrack(track) {
    if (typeof track === "string" && track) lastWorldTrack = track;
  }

  function isBossBattle(init) {
    if (!init || init.kind !== "trainer") return false;
    if (init.boss === true || init.isBoss === true) return true;
    const identity = [init.npcId, init.trainerName, init.foeSp]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return /boss|guard|senhor|rainha|lorde|anci[aã]o|campe[aã]o|tata|tat[aá]|pesadelo|alfa/.test(identity);
  }

  function enterBattle(init) {
    battleActive = true;
    try { bridge().stopAmbient?.(); } catch {}
    playTrack(isBossBattle(init) ? "boss" : "common");
  }

  function enterPvP() {
    battleActive = true;
    try { bridge().stopAmbient?.(); } catch {}
    playTrack("pvp");
  }

  function leaveBattle() {
    battleActive = false;
    stopTrack();
    if (screen === "game") {
      try { bridge().playAmbient?.(lastWorldTrack); } catch {}
    } else {
      try { bridge().stopAmbient?.(); } catch {}
      playTrack("menu");
    }
  }

  function playBagCue(open = true) {
    try { bridge().playBagCue?.(!!open); } catch {}
  }

  window.addEventListener("pointerdown", unlockAudio, true);
  window.addEventListener("keydown", unlockAudio, true);

  window.EV_MUSIC = {
    setScreen,
    rememberWorldTrack,
    enterBattle,
    enterPvP,
    leaveBattle,
    playBagCue,
  };
})();
