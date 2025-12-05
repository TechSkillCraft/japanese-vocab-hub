import "../styles/wordcard.css";

const randomColor = () => {
  const letters = "0123458679ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function WordCard({ item }) {
  const speak = () => {
    const utter = new SpeechSynthesisUtterance(item.jp);
    utter.lang = "ja-JP";
    utter.rate = 1;
    speechSynthesis.speak(utter);
  };

  const bgColor = randomColor();

  return (
    <div className="word-card" style={{ background: bgColor }}>
      <div className="word-img-wrapper">
        <img src={item.image} alt={item.jp} />
        <div className="word-en-overlay">{item.en}</div>
        <button className="word-audio-btn" onClick={speak}>
          🔊
        </button>
      </div>

      <div className="word-content">
        <h2 className="word-jp">{item.jp}</h2>
        <p className="word-romaji">{item.romaji}</p>
      </div>
    </div>
  );
}
