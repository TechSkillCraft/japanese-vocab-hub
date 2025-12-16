import "../styles/viewselector.css";

export default function ViewSelector({
  view,
  setView,
  isVerb = false,
  showMasu,
  setShowMasu,
}) {
  return (
    <div className="viewbox-container">
      {/* Dropdown */}
      <select
        className="viewbox-dropdown"
        value={view}
        onChange={(e) => setView(e.target.value)}
      >
        <option value="grid">📦 Grid View</option>
        <option value="single">🃏 Single Card View</option>
        <option value="table">📋 Table View</option>
      </select>

      {/* Masu Button — only for verbs */}
      {isVerb && (
        <button
          className="viewbox-btn"
          onClick={() => setShowMasu((prev) => !prev)}
        >
          {showMasu ? "📘 Dictionary Form" : "📗 Masu Form"}
        </button>
      )}
    </div>
  );
}
