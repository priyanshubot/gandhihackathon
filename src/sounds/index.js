import { soundEffects } from '../utils/soundEffects';

export function playErrorSound() {
  soundEffects.playError();
}

export function playClickSound() {
  soundEffects.playClick();
}

export function playOpenSound() {
  soundEffects.playOpen();
}

export function playCloseSound() {
  soundEffects.playClose();
}

export function playMinimizeSound() {
  soundEffects.playMinimize();
}

export function playMaximizeSound() {
  soundEffects.playMaximize();
}

export function isMuted() {
  return soundEffects.muted;
}

export function setMuted(muted) {
  soundEffects.muted = Boolean(muted);
}

export function toggleMute() {
  soundEffects.muted = !soundEffects.muted;
  return soundEffects.muted;
}

export { soundEffects };
