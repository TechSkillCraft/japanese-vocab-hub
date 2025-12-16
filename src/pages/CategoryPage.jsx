import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useFetchJSON from "../hooks/useFetchJSON";
import { getRandomColor } from "../hooks/randomColer";
import "../styles/categoryPage.css";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const {
    data: allCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useFetchJSON("/data/categories.json");
  const categoryObj = allCategories?.find(
    (c) => c.name.toLowerCase() === category.toLowerCase()
  );

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
      <Helmet>
        <title>Learn {categoryObj.name} | Japanese Vocab Hub</title>
        <meta
          name="description"
          content={`Start learning ${categoryObj.name} in Japanese. Explore subcategories and build your vocabulary and confidence.`}
        />
        <meta
          name="keywords"
          content={`Japanese ${categoryObj.name}, learn Japanese, ${categoryObj.name} vocabulary, language learning`}
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content={`Learn ${categoryObj.name} | Japanese Vocab Hub`}
        />
        <meta
          property="og:description"
          content={`Start learning ${categoryObj.name} in Japanese. Explore subcategories and build your vocabulary and confidence.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/category/${category}`}
        />
        <meta
          property="og:image"
          content={`https://yourwebsite.com/images/${categoryObj.folder}-share.png`}
        />
      </Helmet>

      <h1>“Start Learning {categoryObj.name.toUpperCase()}”</h1>
      <h3>Pick a Subcategory to Begin</h3>
      <div className="subcategory-grid">
        {subcategories?.map((sub) => (
          <div
            key={sub.id}
            className="sub-category-card"
            style={{ background: getRandomColor() }}
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
