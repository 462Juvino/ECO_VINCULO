/* Eco Vínculo — Trilhas contextuais, transições suaves e jingles de interface. */
(() => {
  "use strict";

  const tracks = {
    menu: "./assets/audio/menu-theme.mp3",
    common: "./assets/audio/battle-common.mp3",
    boss: "./assets/audio/battle-boss.mp3",
    pvp: "./assets/audio/battle-pvp.mp3",
  };
  const trackVolumes = { menu: 0.34, common: 0.11, boss: 0.13, pvp: 0.04 };
  const player = new Audio();
  player.preload = "auto";
  player.loop = true;
  player.volume = 0;

  let activeMode = "";
  let requestedMode = "";
  let screen = "title";
  let battleActive = false;
  let lastWorldTrack = "campo";
  let transitionId = 0;
  let transitionPending = false;
  let cueContext = null;

  const bridge = () => window.EV_AUDIO_BRIDGE || {};

  function fadeTo(target, duration, token) {
    return new Promise((resolve) => {
      const startVolume = player.volume;
      const startedAt = performance.now();
      const tick = () => {
        if (token !== transitionId) return resolve(false);
        const progress = Math.min(1, (performance.now() - startedAt) / duration);
        player.volume = startVolume + (target - startVolume) * progress;
        if (progress >= 1) return resolve(true);
        window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    });
  }

  function stopTrack(reset = true) {
    requestedMode = "";
    const token = ++transitionId;
    transitionPending = true;
    void (async () => {
      if (!player.paused && player.volume > 0.002) await fadeTo(0, 180, token);
      if (token !== transitionId) return;
      try {
        player.pause();
        if (reset) player.currentTime = 0;
      } catch {}
      activeMode = "";
      transitionPending = false;
    })();
  }

  function playTrack(mode) {
    const src = tracks[mode];
    if (!src) return;
    if (requestedMode === mode && (transitionPending || (activeMode === mode && !player.paused))) return;
    requestedMode = mode;
    const token = ++transitionId;
    transitionPending = true;
    void (async () => {
      if (!player.paused && player.volume > 0.002) await fadeTo(0, 230, token);
      if (token !== transitionId) return;
      try {
        player.pause();
        player.currentTime = 0;
        player.src = src;
        activeMode = mode;
        player.volume = 0;
        const result = player.play();
        if (result && typeof result.catch === "function") result.catch(() => {});
      } catch {}
      if (token === transitionId) {
        await fadeTo(trackVolumes[mode] ?? 0.12, 430, token);
        if (token === transitionId) transitionPending = false;
      }
    })();
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

  function playResonanceCue() {
    try {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return;
      cueContext ||= new AudioContextCtor();
      if (cueContext.state === "suspended") void cueContext.resume();
      const now = cueContext.currentTime;
      const master = cueContext.createGain();
      master.gain.setValueAtTime(0.0001, now);
      master.gain.exponentialRampToValueAtTime(0.12, now + 0.045);
      master.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);
      master.connect(cueContext.destination);
      [392, 523.25, 783.99].forEach((frequency, index) => {
        const oscillator = cueContext.createOscillator();
        const voice = cueContext.createGain();
        oscillator.type = index === 2 ? "sine" : "triangle";
        oscillator.frequency.setValueAtTime(frequency * 0.94, now);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.04, now + 0.22);
        voice.gain.setValueAtTime(0.0001, now);
        voice.gain.exponentialRampToValueAtTime(index === 2 ? 0.58 : 0.34, now + 0.035 + index * 0.025);
        voice.gain.exponentialRampToValueAtTime(0.0001, now + 0.58 + index * 0.035);
        oscillator.connect(voice);
        voice.connect(master);
        oscillator.start(now + index * 0.025);
        oscillator.stop(now + 0.68 + index * 0.035);
      });
    } catch {}
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
    playResonanceCue,
  };
})();
