import { useState } from "react";
import useFetchJSON from "../hooks/useFetchJSON";
import { getRandomColor } from "../hooks/randomColer";

import "../styles/card.css";
import "../styles/single.css";
import "../styles/table.css";

export default function VerbReader({ subcategory }) {
  const { data, loading, error } = useFetchJSON(
    `/data/verbs/${subcategory}.json`
  );

  const [viewType, setViewType] = useState("single"); // single, grid, table
  const [formType, setFormType] = useState("jp"); // jp or masu
  const [index, setIndex] = useState(0);

  if (loading) return <div>Loading…</div>;
  if (error) return <div>Error loading verbs</div>;
  if (!data || !data.length) return <div>No data found</div>;

  const base = import.meta.env.BASE_URL; // "/japanese-vocab-hub/"
  const total = data.length;
  const currentItem = data[index];

  const getDisplayText = (item) => {
    return formType === "jp" ? item.jp : item.masu;
  };

  const getRomaji = (item) => {
    return formType === "jp" ? item.romaji_jp : item.romaji_masu;
  };

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
          <option value="single">Single Card View</option>
          <option value="grid">Grid View</option>
          <option value="table">Table View</option>
        </select>

        <select
          className="vocab-view-dropdown"
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
        >
          <option value="jp">Dictionary Form</option>
          <option value="masu">Masu Form</option>
        </select>
      </div>
      {/* SINGLE VIEW */}
      {viewType === "single" && (
        <div className="single-wrapper">
          <div className="single-card" style={{ background: getRandomColor() }}>
            <div className="card-img-wrap">
              {currentItem.image && (
                <img
                  src={`${base}${currentItem.image.slice(1)}`}
                  alt={currentItem.jp}
                />
              )}
              <div className="card-en-overlay">{currentItem.en}</div>

              <button
                className="card-audio-btn"
                onClick={() => {
                  const utter = new SpeechSynthesisUtterance(
                    getDisplayText(currentItem)
                  );
                  utter.lang = "ja-JP";
                  speechSynthesis.speak(utter);
                }}
              >
                🔊
              </button>
            </div>

            <div className="card-body">
              <div className="card-jp-hiragana-row">
                <div className="card-jp">{getDisplayText(currentItem)}</div>
              </div>
              <div className="card-romaji">{getRomaji(currentItem)}</div>
            </div>

            <div className="single-controls">
              <button
                className="nav-btn"
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
              >
                ← Prev
              </button>
              <div style={{ margin: "0 12px", fontWeight: 700 }}>
                {index + 1} / {total}
              </div>
              <button
                className="nav-btn"
                onClick={() => setIndex((i) => (i + 1) % total)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GRID & TABLE VIEWS */}
      {viewType !== "single" && (
        <div>
          {/* GRID VIEW */}
          {viewType === "grid" && (
            <div className="cards-grid">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="card-root grid"
                  style={{ background: getRandomColor() }}
                >
                  <div className="card-img-wrap">
                    {item.image && (
                      <img
                        src={`${base}${item.image.slice(1)}`}
                        alt={item.jp}
                      />
                    )}
                    <div className="card-en-overlay">{item.en}</div>
                    <button
                      className="card-audio-btn"
                      onClick={() => {
                        const utter = new SpeechSynthesisUtterance(
                          getDisplayText(item)
                        );
                        utter.lang = "ja-JP";
                        speechSynthesis.speak(utter);
                      }}
                    >
                      🔊
                    </button>
                  </div>

                  <div className="card-body">
                    <div className="card-jp-hiragana-row">
                      <div className="card-jp">{getDisplayText(item)}</div>
                    </div>
                    <div className="card-romaji">{getRomaji(item)}</div>
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
                  {data.map((item, i) => (
                    <tr key={item.id} style={{ background: getRandomColor() }}>
                      <td>{i + 1}</td>
                      <td>
                        {item.image && (
                          <img
                            src={`${base}${item.image.slice(1)}`}
                            alt={item.jp}
                            className="table-img"
                          />
                        )}
                      </td>
                      <td>{getDisplayText(item)}</td>
                      <td>{getRomaji(item)}</td>
                      <td>{item.en}</td>
                      <td>
                        <button
                          onClick={() => {
                            const utter = new SpeechSynthesisUtterance(
                              getDisplayText(item)
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
      )}
    </div>
  );
}
