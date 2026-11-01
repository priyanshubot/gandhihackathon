// Retro Windows 98 Web Audio Synthesizer
// Generates authentic synthesized PC sounds without any external audio files

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playStartup() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Windows 98 Startup Chord Progression (warm synthesizer pads)
    // Notes: Eb3, Bb3, Eb4, G4, Bb4 fading to Ab major / Eb
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

      // Warm attack and slow fade out
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
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

    gainNode.gain.setValueAtTime(0.06, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
  }

  playError() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Classic Windows Ding / Exclamation chord (C5 + G5 dual tone)
    [523.25, 783.99].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(0.15, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    });
  }

  playExplosion() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // White noise blast for Minesweeper explosion
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
  }

  playWin() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Cheerful 3-note jingle
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
  }
}

export const soundEffects = new SoundEngine();
