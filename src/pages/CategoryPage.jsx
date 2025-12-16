import { useParams, useNavigate } from "react-router-dom";
import useFetchJSON from "../hooks/useFetchJSON";
import { getRandomColor } from "../hooks/randomColer";
import "../styles/categoryPage.css";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Fetch all categories
  const {
    data: allCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetchJSON("/data/categories.json");

  // Find current category
  const categoryObj = allCategories?.find(
    (c) => c.name.toLowerCase() === category.toLowerCase()
  );

  // Fetch subcategories
  const {
    data: subcategories,
    loading: loadingSubcats,
    error: errorSubcats,
  } = useFetchJSON(
    categoryObj
      ? `/data/${categoryObj.folder}/${categoryObj.folder}.json`
      : null
  );

  if (loadingCategories) return <h2>Loading categories…</h2>;
  if (errorCategories) return <h2>Error loading categories</h2>;
  if (!categoryObj) return <h2>Category not found</h2>;

  if (loadingSubcats) return <h2>Loading subcategories…</h2>;
  if (errorSubcats) return <h2>Error loading subcategories</h2>;

  return (
    <div style={{ padding: "32px" }}>
      <h1>“Start Learning {categoryObj.name.toUpperCase()}”</h1>
      <h3>Pick a Subcategory to Begin</h3>
      <div className="subcategory-grid">
        {subcategories?.map((sub) => (
          <div
            key={sub.id}
            className="sub-category-card"
            style={{
              background: getRandomColor(),
            }}
            onClick={() =>
              navigate(`/category/${category}/${sub.folder ?? sub.name}`)
            }
          >
            {sub.label ?? sub.name}
          </div>
        ))}
      </div>
    </div>
  );
}
