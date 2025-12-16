import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ConversationPage from "./pages/ConversationPage";
import ConversationListPage from "./pages/ConversationListPage";
import AboutPage from "./pages/AboutPage";
export default function App() {
  const [theme, setTheme] = useState("light");

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme}>
      {/* Routing base for GitHub pages */}
      <Router basename="/japanese-vocab-hub">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          {/* MAIN HOME PAGE */}
          <Route path="/" element={<HomePage />} />

          {/* CATEGORY PAGE → Shows subcategories */}
          {/* Example: /category/vocabulary */}
          <Route path="/category/:category" element={<CategoryPage />} />

          {/* SUBCATEGORY PAGE → Shows vocabulary list */}
          {/* Example: /category/vocabulary/weather */}
          <Route
            path="/category/:category/:subcategory"
            element={<SubcategoryPage />}
          />

          {/* CONVERSATION ROUTES */}
          <Route path="/conversation/:id" element={<ConversationPage />} />
          <Route path="/convList" element={<ConversationListPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* ------------------------------ */}
          {/* 404 PAGE */}
          {/* ------------------------------ */}
          <Route
            path="*"
            element={
              <h2 style={{ color: "red", padding: "32px" }}>
                ❗ Page Not Found
              </h2>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
