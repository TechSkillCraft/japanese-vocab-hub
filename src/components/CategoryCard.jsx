import { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/categorycard.css";

export default function CategoryCard({ category, theme }) {
  const lightColors = [
    "#FFE5E5",
    "#E3F2FD",
    "#E8F5E9",
    "#FFF3E0",
    "#F3E5F5",
    "#FFFDE7",
  ];
  const darkColors = [
    "#8B0000",
    "#0D47A1",
    "#1B5E20",
    "#E65100",
    "#4A148C",
    "#F57F17",
  ];

  const bgColor = useMemo(() => {
    const colors = theme === "dark" ? darkColors : lightColors;
    return colors[Math.floor(Math.random() * colors.length)];
  }, [theme]);

  const textColor = theme === "dark" ? "#fff" : "#000";

  return (
    <Link
      to={`/category/${category.folder}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="category-card"
        style={{ background: bgColor, color: textColor }}
      >
        <h2>{category.name}</h2>
      </div>
    </Link>
  );
}
