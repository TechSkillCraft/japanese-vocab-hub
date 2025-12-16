// // import { Routes, Route } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // import Navbar from "./components/Navbar";
// // import HomePage from "./pages/HomePage";
// // import CategoryPage from "./pages/CategoryPage";
// // import SubcategoryPage from "./pages/SubcategoryPage";
// // import ConversationPage from "./pages/ConversationPage";
// // import ConversationListPage from "./pages/ConversationListPage";
// // import AboutPage from "./pages/AboutPage";
// // import Footer from "./components/Footer";

// // export default function App() {
// //   const [theme, setTheme] = useState("light");

// //   useEffect(() => {
// //     const saved = localStorage.getItem("theme");
// //     if (saved) setTheme(saved);
// //   }, []);

// //   useEffect(() => {
// //     document.body.className = "";
// //     document.body.classList.add(theme);
// //   }, [theme]);

// //   const toggleTheme = () => {
// //     const next = theme === "light" ? "dark" : "light";
// //     setTheme(next);
// //     localStorage.setItem("theme", next);
// //   };

// //   return (
// //     <>
// //       <Navbar theme={theme} toggleTheme={toggleTheme} />

// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/category/:category" element={<CategoryPage />} />
// //         <Route
// //           path="/category/:category/:subcategory"
// //           element={<SubcategoryPage />}
// //         />
// //         <Route path="/conversation/:id" element={<ConversationPage />} />
// //         <Route path="/convList" element={<ConversationListPage />} />
// //         <Route path="/about" element={<AboutPage />} />

// //         <Route
// //           path="*"
// //           element={<h2 style={{ padding: 32 }}>❗ Page Not Found</h2>}
// //         />
// //       </Routes>

// //       {/* Footer goes OUTSIDE <Routes> */}
// //       <Footer theme={theme} toggleTheme={toggleTheme} />
// //     </>
// //   );
// // }
// import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet-async"; // SEO

// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import CategoryPage from "./pages/CategoryPage";
// import SubcategoryPage from "./pages/SubcategoryPage";
// import ConversationPage from "./pages/ConversationPage";
// import ConversationListPage from "./pages/ConversationListPage";
// import AboutPage from "./pages/AboutPage";
// import Footer from "./components/Footer";

// export default function App() {
//   const [theme, setTheme] = useState("light");

//   // Load saved theme
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) setTheme(saved);
//   }, []);

//   // Apply theme globally
//   useEffect(() => {
//     document.body.className = "";
//     document.body.classList.add(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     const next = theme === "light" ? "dark" : "light";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//   };

//   return (
//     <>
//       {/* Optional: Global SEO for site */}
//       <Helmet>
//         <title>Japanese Vocab Hub - Learn Japanese Easily</title>
//         <meta
//           name="description"
//           content="Japanese Vocab Hub helps you learn Japanese step by step with visual practice and short videos. Improve vocabulary, confidence, and consistency."
//         />
//         <meta
//           name="keywords"
//           content="Japanese, learn Japanese, vocabulary, language learning, beginner Japanese"
//         />
//       </Helmet>

//       <Navbar theme={theme} toggleTheme={toggleTheme} />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//         <Route
//           path="/category/:category/:subcategory"
//           element={<SubcategoryPage />}
//         />
//         <Route path="/conversation/:id" element={<ConversationPage />} />
//         <Route path="/convList" element={<ConversationListPage />} />
//         <Route path="/about" element={<AboutPage />} />

//         <Route
//           path="*"
//           element={<h2 style={{ padding: 32 }}>❗ Page Not Found</h2>}
//         />
//       </Routes>

//       {/* Footer remains outside Routes */}
//       <Footer theme={theme} toggleTheme={toggleTheme} />
//     </>
//   );
// }
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SubcategoryPage from "./pages/SubcategoryPage";
import ConversationPage from "./pages/ConversationPage";
import ConversationListPage from "./pages/ConversationListPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // Apply theme globally
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route
          path="/category/:category/:subcategory"
          element={<SubcategoryPage />}
        />
        <Route path="/conversation/:id" element={<ConversationPage />} />
        <Route path="/convList" element={<ConversationListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={<h2 style={{ padding: 32 }}>❗ Page Not Found</h2>}
        />
      </Routes>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
