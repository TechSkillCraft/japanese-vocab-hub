import { data, useParams } from "react-router-dom";
import useFetchJSON from "../hooks/useFetchJSON";
import WordCard from "./WordCard";
import "../styles/wordcard.css";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetchJSON(
    `/data/${categoryName}/${categoryName}.json`
  );

  if (loading) return <h2>Loading words…</h2>;
  if (error) return <h2>Error loading data</h2>;

  return (
    <div style={{ padding: "22px" }}>
      <h1>{categoryName.toUpperCase()}</h1>
      <div className="grid-container">
        {data.map((item) => (
          <WordCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
