import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Japanese Vocab Hub"
            className="footer-logo"
          />
          <span className="footer-name">Japanese Vocab Hub</span>
          <p className="footer-tagline">
            Learn Japanese vocabulary step by step 🇯🇵
          </p>
        </div>

        {/* Quick Links (2 columns) */}
        <div className="footer-links">
          <h4>Quick Links</h4>

          <div className="footer-links-grid">
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>

            <div>
              <Link to="/category/verbs">Verbs</Link>
              <Link to="/category/vocabulary">vocabulary</Link>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>
          <a
            href="https://www.youtube.com/@langDiaries"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ YouTube Channel
          </a>
          <a
            href="https://www.youtube.com/@langDiaries/community"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Community Posts
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Japanese Vocab Hub · Made with ❤️ for
        learners
      </div>
    </footer>
  );
}
