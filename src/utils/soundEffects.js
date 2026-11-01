// Retro Windows 98 Web Audio Synthesizer
// Generates authentic synthesized PC sounds without any external audio files
// Completely offline, zero network requests, lightweight and resilient

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.lastPlayed = {};
    this.initDone = false;

    // Auto-unlock audio on the first user interaction
    if (typeof window !== 'undefined') {
      const unlockAudio = () => {
        this.init();
        window.removeEventListener('pointerdown', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
      };
      window.addEventListener('pointerdown', unlockAudio, { once: true });
      window.addEventListener('keydown', unlockAudio, { once: true });
    }
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // AudioContext unavailable or blocked by policy
    }
  }

  // Prevent duplicate rapid-fire audio from nested clicks or rapid remounts
  shouldThrottle(soundName, cooldownMs = 40) {
    const now = Date.now();
    const lastTime = this.lastPlayed[soundName] || 0;
    if (now - lastTime < cooldownMs) {
      return true;
    }
    this.lastPlayed[soundName] = now;
    return false;
  }

  // Windows 98 Startup Chord Progression (warm synthesizer pads)
  playStartup() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const chords = [
        { freq: 155.56, time: 0, dur: 4.5, gain: 0.15 }, // Eb3
        { freq: 233.08, time: 0.1, dur: 4.2, gain: 0.18 }, // Bb3
        { freq: 311.13, time: 0.2, dur: 4.0, gain: 0.22 }, // Eb4
        { freq: 392.00, time: 0.35, dur: 3.8, gain: 0.2 }, // G4
        { freq: 466.16, time: 0.5, dur: 3.5, gain: 0.25 }, // Bb4
        { freq: 622.25, time: 0.7, dur: 3.2, gain: 0.2 }, // Eb5
        { freq: 523.25, time: 1.2, dur: 3.0, gain: 0.18 }, // C5
        { freq: 466.16, time: 1.8, dur: 2.8, gain: 0.22 }, // Bb4
      ];

      chords.forEach(({ freq, time, dur, gain }) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gainNode.gain.setValueAtTime(0, now + time);
        gainNode.gain.linearRampToValueAtTime(gain * 0.4, now + time + 0.3);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });

      // Subtle high chime shimmer
      const shimmer = this.ctx.createOscillator();
      const shimmerGain = this.ctx.createGain();
      shimmer.type = 'triangle';
      shimmer.frequency.setValueAtTime(932.33, now + 0.8);
      shimmerGain.gain.setValueAtTime(0, now + 0.8);
      shimmerGain.gain.linearRampToValueAtTime(0.08, now + 1.0);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
      shimmer.connect(shimmerGain);
      shimmerGain.connect(this.ctx.destination);
      shimmer.start(now + 0.8);
      shimmer.stop(now + 3.5);
    } catch {
      // Graceful error fallback
    }
  }

  // Windows 98 Navigation / Menu / Button Click
  playClick() {
    if (this.muted || this.shouldThrottle('click', 30)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.025);

      gainNode.gain.setValueAtTime(0.07, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // Ignore audio errors
    }
  }

  // Windows 98 Critical Stop / Error Chord (Exclamation)
  playError() {
    if (this.muted || this.shouldThrottle('error', 60)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Classic Windows Ding / Exclamation chord (C5 + G5 dual tone)
      [523.25, 783.99].forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gainNode.gain.setValueAtTime(0.18, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.65);
      });
    } catch {
      // Ignore audio errors
    }
  }

  // Windows 98 Program Open Chime (Bright ascending bell chime)
  playOpen() {
    if (this.muted || this.shouldThrottle('open', 60)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // 3 ascending notes: C5 (523.25), E5 (659.25), G5 (783.99)
      const notes = [
        { freq: 523.25, time: 0, dur: 0.22, gain: 0.12 },
        { freq: 659.25, time: 0.06, dur: 0.25, gain: 0.14 },
        { freq: 783.99, time: 0.12, dur: 0.35, gain: 0.16 }
      ];

      notes.forEach(({ freq, time, dur, gain }) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gainNode.gain.setValueAtTime(0.01, now + time);
        gainNode.gain.linearRampToValueAtTime(gain, now + time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });
    } catch {
      // Ignore audio errors
    }
  }

  // Windows 98 Program Close Sound (Soft descending tone)
  playClose() {
    if (this.muted || this.shouldThrottle('close', 60)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // 2 descending tones: G5 (783.99) -> C5 (523.25)
      const notes = [
        { freq: 783.99, time: 0, dur: 0.15, gain: 0.12 },
        { freq: 523.25, time: 0.08, dur: 0.22, gain: 0.13 }
      ];

      notes.forEach(({ freq, time, dur, gain }) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        gainNode.gain.setValueAtTime(0.01, now + time);
        gainNode.gain.linearRampToValueAtTime(gain, now + time + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + time + dur);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });
    } catch {
      // Ignore audio errors
    }
  }

  // Windows 98 Window Minimize Sound (Downward pitch glide)
  playMinimize() {
    if (this.muted || this.shouldThrottle('minimize', 60)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.16);

      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // Ignore audio errors
    }
  }

  // Windows 98 Window Maximize / Restore Sound (Upward pitch glide)
  playMaximize() {
    if (this.muted || this.shouldThrottle('maximize', 60)) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.16);

      gainNode.gain.setValueAtTime(0.09, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // Ignore audio errors
    }
  }

  // White noise blast for Minesweeper explosion
  playExplosion() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, now);
      filter.frequency.linearRampToValueAtTime(100, now + 0.4);

      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      noise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Ignore audio errors
    }
  }

  // Cheerful 4-note victory jingle
  playWin() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gainNode.gain.setValueAtTime(0.12, now + idx * 0.12);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.3);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.3);
      });
    } catch {
      // Ignore audio errors
    }
  }
}

export const soundEffects = new SoundEngine();
