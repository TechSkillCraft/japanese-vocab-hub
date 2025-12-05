export default function WordCard({ item }) {
  const fallback = "https://via.placeholder.com/150?text=No+Image";

  const speak = () => {
    const utter = new SpeechSynthesisUtterance(item.jp);
    utter.lang = "ja-JP";
    speechSynthesis.speak(utter);
  };

  return (
    <div style={styles.card}>
      <img
        src={item.image || fallback}
        alt={item.jp}
        style={styles.img}
        onError={(e) => {
          e.target.src = fallback;
        }}
      />
      <h2>{item.jp}</h2>
      <p>{item.romaji}</p>
      <p>{item.en}</p>
      <button style={styles.btn} onClick={speak}>
        🔊 Speak
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    background: "#fff",
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  btn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};
