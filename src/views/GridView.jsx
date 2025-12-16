// GridView.jsx
export default function GridView({ items = [] }) {
  if (!items.length) {
    return <p>No data found</p>;
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.jp}</h3>
          <p>{item.romaji}</p>
          <p>{item.en}</p>
        </div>
      ))}
    </div>
  );
}
