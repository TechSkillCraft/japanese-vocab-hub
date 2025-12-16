import "../styles/table.css";

export default function TableView({
  data = [],
  bgColors = [],
  showMasu,
  isVerb,
}) {
  return (
    <div style={{ overflowX: "auto" }}>
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
          {data.map((item, i) => {
            const bg = bgColors[i] || "transparent";
            const jp = isVerb && showMasu ? item.masu : item.jp;
            const romaji =
              isVerb && showMasu
                ? item.romaji_masu
                : item.romaji_jp || item.romaji;
            return (
              <tr key={item.id} style={{ background: bg }}>
                <td style={{ padding: "10px" }}>{i + 1}</td>
                <td>
                  <img src={item.img} alt={item.en} className="table-img" />
                </td>
                <td style={{ padding: "10px" }}>{jp}</td>
                <td style={{ padding: "10px" }}>{romaji}</td>
                <td style={{ padding: "10px" }}>{item.en}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => {
                      const utter = new SpeechSynthesisUtterance(jp);
                      utter.lang = "ja-JP";
                      speechSynthesis.speak(utter);
                    }}
                  >
                    🔊
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
