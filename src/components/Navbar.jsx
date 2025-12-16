// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Welcome In Japanese Vocab Hub</h2>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <button onClick={toggleTheme} style={styles.themeBtn}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e7f7fdff",
    background: "var(--bg)",
    color: "var(--text)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "20px", alignItems: "center" },
  themeBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    background: "var(--btn-bg)",
    color: "var(--btn-text)",
  },
};
