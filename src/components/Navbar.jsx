import "../styles/navbar.css"; // Import the CSS file
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Show back button only if not on homepage
  const showBackButton = location.pathname !== "/";

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1); // Go back in history
    } else {
      navigate("/"); // Fallback to homepage
    }
  };

  return (
    <nav className="navbar">
      <div className={`navbar-left ${showBackButton ? "has-back-btn" : ""}`}>
        {showBackButton && (
          <button
            className="back-btn"
            onClick={handleBack}
            aria-label="Go back"
          >
            ⬅️
          </button>
        )}

        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Japanese Vocab Hub"
          className="navbar-logo"
        />

        <span className="logo-text">Japanese Vocab Hub</span>
      </div>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
