export function speak(text, { lang = "ja-JP", rate = 1, pitch = 1 } = {}) {
  if (!window || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    u.pitch = pitch;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("TTS error", e);
  }
}
