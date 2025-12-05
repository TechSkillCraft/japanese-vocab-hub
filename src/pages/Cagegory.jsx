import useFetchJSON from "../hooks/useFetchJSON";
import CategoryCard from "../components/CategoryCard";

export default function category() {
  const { data, loading, error } = useFetchJSON("/data/categoryList.json");

  if (loading) return <h2>Loading categories…</h2>;
  if (error) return <h2>Error loading categories</h2>;

  return (
    <div style={{ padding: "0px" }}>
      <h1>Japanese Vocabulary Categories</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {data.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}
