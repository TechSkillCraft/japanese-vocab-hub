// import useFetchJSON from "../hooks/useFetchJSON";
import { Link } from "react-router-dom";
import useFetchJSON from "../hooks/useFetchJSON";

import { getRandomColor } from "../hooks/randomColer";
import "../styles/homePage.css";

export default function HomePage() {
  const { data, loading, error } = useFetchJSON("/data/categories.json");

  if (loading) return <h2>Loading categories…</h2>;
  if (error) return <h2>Error loading categories!</h2>;
  if (!data || !data.length) return <h2>No categories found</h2>;

  return (
    <div style={{ padding: "32px" }}>
      <h1>“Small Steps, Big Learning”</h1>
      <h3>Choose a Category to Start Learning</h3>

      <div className="category-grid">
        {data.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.name.toLowerCase()}`}
            className="category-card"
            style={{ background: getRandomColor() }}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
