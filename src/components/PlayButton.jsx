export default function PlayButton({ text }) {
  const speak = () => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ja-JP";
    speechSynthesis.speak(u);
  };

  return <button onClick={speak}>🔊</button>;
}
