import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchJSON from "../hooks/useFetchJSON";
import "../styles/conversation.css";

export default function ConversationPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetchJSON(
    `/data/conversations/${id}.json`
  );

  // Track which sentence is currently speaking
  const [activeSpeakId, setActiveSpeakId] = useState(null);
  const [speakingAll, setSpeakingAll] = useState(false);

  const speakSentence = (itemId, text) => {
    if (activeSpeakId === itemId) {
      speechSynthesis.cancel();
      setActiveSpeakId(null);
      return;
    }

    speechSynthesis.cancel(); // stop any other utterance
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    utter.rate = 1;
    utter.onend = () => setActiveSpeakId(null);
    speechSynthesis.speak(utter);
    setActiveSpeakId(itemId);
  };

  const speakAll = () => {
    if (!data || data.length === 0) return;

    if (speakingAll) {
      speechSynthesis.cancel();
      setSpeakingAll(false);
      setActiveSpeakId(null);
      return;
    }

    setSpeakingAll(true);
    let delay = 0;
    data.forEach((line) => {
      const utter = new SpeechSynthesisUtterance(line.jp);
      utter.lang = "ja-JP";
      utter.rate = 1;
      setTimeout(() => {
        speechSynthesis.speak(utter);
        setActiveSpeakId(line.id);
      }, delay);
      delay += 1500; // 1.5s gap
    });

    // Reset state after all utterances
    setTimeout(() => {
      setSpeakingAll(false);
      setActiveSpeakId(null);
    }, delay);
  };

  if (loading) return <h2>Loading conversation…</h2>;
  if (error) return <h2>Error loading conversation</h2>;

  return (
    <div className="conv-container">
      <div className="conv-header">
        <h1>Communication</h1>
        <button className="speak-all-btn" onClick={speakAll}>
          {speakingAll ? "🛑 Stop" : "🔊 Speak All"}
        </button>
      </div>

      <div className="conv-list">
        {data.map((item, idx) => (
          <div
            key={item.id}
            className={`conv-card ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="conv-text">
              <p className="jp">{item.jp}</p>
              <p className="en">{item.en}</p>
            </div>
            <button
              className={`speak-btn ${
                activeSpeakId === item.id ? "active" : ""
              }`}
              onClick={() => speakSentence(item.id, item.jp)}
            >
              {activeSpeakId === item.id ? "🛑" : "🔊"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
