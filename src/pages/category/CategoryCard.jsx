import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.folder}`} // Use folder property
      style={styles.card}
    >
      <h3>{category.name}</h3>
    </Link>
  );
}

const styles = {
  card: {
    display: "block",
    padding: "15px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
};
