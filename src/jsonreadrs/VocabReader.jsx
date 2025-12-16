import { useState } from "react";
import useFetchJSON from "../hooks/useFetchJSON";
import { getRandomColor } from "../hooks/randomColer";

import "../styles/card.css";
import "../styles/single.css";
import "../styles/grid.css";

import "../styles/table.css";

export default function VocabReader({ category, subcategory }) {
  const { data, loading, error } = useFetchJSON(
    `/data/${category}/${subcategory}.json`
  );

  const [viewType, setViewType] = useState("single");
  const [index, setIndex] = useState(0);

  if (loading) return <div>Loading…</div>;
  if (error) {
    return (
      <div className="empty-state">
        <p>📌 Data will be added soon</p>
      </div>
    );
  }
  if (!data.length) return <div>No data found</div>;

  /* Flatten all words for SINGLE view */
  const allWords = data.flatMap((group) =>
    group.words.map((word) => ({
      ...word,
      category: group.category,
    }))
  );

  const totalWords = allWords.length;
  const item = allWords[index];

  return (
    <div className="vocab-reader-container">
      {/* Header */}
      <div className="vocab-header">
        <h2>{subcategory}</h2>

        <select
          className="vocab-view-dropdown"
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
        >
          <option value="single">Single View</option>
          <option value="grid">Grid View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* ================= SINGLE VIEW ================= */}
      {viewType === "single" && (
        <div className="single-wrapper">
          {/* Category title OUTSIDE card */}
          <h3 className="vocab-category-title single-category-title">
            {item.category}
          </h3>

          <div className="single-card" style={{ background: getRandomColor() }}>
            <div className="card-img-wrap">
              <img src={item.img || item.image} alt={item.jp} />

              <div className="card-en-overlay">{item.en}</div>
              {item.hi && <div className="card-hi-overlay">{item.hi}</div>}

              <button
                className="card-audio-btn"
                onClick={() => {
                  const utter = new SpeechSynthesisUtterance(item.jp);
                  utter.lang = "ja-JP";
                  speechSynthesis.speak(utter);
                }}
                aria-label="speak"
              >
                🔊
              </button>
            </div>

            <div className="card-body">
              <div className="card-jp-hiragana-row">
                <div className="card-jp">{item.jp}</div>
                {item.hiragana && (
                  <div className="card-hiragana">{item.hiragana}</div>
                )}
              </div>

              <div className="card-romaji">{item.romaji}</div>
            </div>

            <div className="single-controls">
              <button
                className="nav-btn"
                onClick={() =>
                  setIndex((i) => (i - 1 + totalWords) % totalWords)
                }
              >
                ← Prev
              </button>

              <div style={{ margin: "0 12px", fontWeight: 700 }}>
                {index + 1} / {totalWords}
              </div>

              <button
                className="nav-btn"
                onClick={() => setIndex((i) => (i + 1) % totalWords)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= GRID & TABLE VIEWS ================= */}
      {viewType !== "single" &&
        data.map((group) => (
          <div key={group.category} style={{ marginBottom: "40px" }}>
            <h3 className="vocab-category-title">{group.category}</h3>

            {/* GRID VIEW */}
            {viewType === "grid" && (
              <div className="cards-grid">
                {group.words.map((item) => (
                  <div
                    key={item.id}
                    className="card-root grid"
                    style={{ background: getRandomColor() }}
                  >
                    <div className="card-img-wrap">
                      <img src={item.img || item.image} alt={item.jp} />

                      <div className="card-en-overlay">{item.en}</div>
                      {item.hi && (
                        <div className="card-hi-overlay">{item.hi}</div>
                      )}

                      <button
                        className="card-audio-btn"
                        onClick={() => {
                          const utter = new SpeechSynthesisUtterance(item.jp);
                          utter.lang = "ja-JP";
                          speechSynthesis.speak(utter);
                        }}
                        aria-label="speak"
                      >
                        🔊
                      </button>
                    </div>

                    <div className="card-body">
                      <div className="card-jp-hiragana-row">
                        <div className="card-jp">{item.jp}</div>
                        {item.hiragana && (
                          <div className="card-hiragana">{item.hiragana}</div>
                        )}
                      </div>

                      <div className="card-romaji">{item.romaji}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TABLE VIEW */}
            {viewType === "table" && (
              <div style={{ overflowX: "auto", marginTop: "12px" }}>
                <table className="word-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Japanese</th>
                      <th>Romaji</th>
                      <th>English</th>
                      <th>Play</th>
                    </tr>
                  </thead>

                  <tbody>
                    {group.words.map((item, i) => (
                      <tr
                        key={item.id}
                        style={{ background: getRandomColor() }}
                      >
                        <td>{i + 1}</td>
                        <td>
                          <img
                            src={item.img || item.image}
                            alt={item.jp}
                            className="table-img"
                          />
                        </td>
                        <td>{item.jp}</td>
                        <td>{item.romaji}</td>
                        <td>{item.en}</td>
                        <td>
                          <button
                            onClick={() => {
                              const utter = new SpeechSynthesisUtterance(
                                item.jp
                              );
                              utter.lang = "ja-JP";
                              speechSynthesis.speak(utter);
                            }}
                          >
                            🔊
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
