import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO
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
      <Helmet>
        <title>Learn Japanese Step by Step | Japanese Vocab Hub</title>
        <meta
          name="description"
          content="Explore Japanese vocabulary categories and start learning Japanese step by step with visual practice. Build your vocabulary and confidence."
        />
        <meta
          name="keywords"
          content="Japanese, learn Japanese, Japanese vocabulary, language learning, beginner Japanese, verbs, nouns, adjectives"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Learn Japanese Step by Step | Japanese Vocab Hub"
        />
        <meta
          property="og:description"
          content="Explore Japanese vocabulary categories and start learning Japanese step by step with visual practice."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/home-share.png"
        />
      </Helmet>

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
