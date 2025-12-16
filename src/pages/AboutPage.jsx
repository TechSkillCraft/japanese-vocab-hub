import "../styles/about.css";
import PlaylistCard from "../components/PlaylistCard";
import useFetchJSON from "../hooks/useFetchJSON";

export default function AboutPage() {
  const {
    data: playlists,
    loading,
    error,
  } = useFetchJSON("/data/playlists.json");

  if (loading) return <h2>Loading…</h2>;
  if (error || !Array.isArray(playlists))
    return <h2>Failed to load playlists</h2>;

  return (
    <div className="about-page">
      {/* ===== CHANNEL INTRO ===== */}
      <div className="about-header">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Lang Diaries Logo"
          className="channel-logo"
        />
        <h1 className="channel-name">Lang Diaries</h1>
        <p className="channel-description">
          Lang Diaries is a beginner-friendly YouTube channel focused on
          learning languages step-by-step with visuals, pronunciation, and calm
          practice. Our goal is to make language learning simple, enjoyable, and
          consistent.
        </p>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="about-actions">
          <a
            href="https://www.youtube.com/@langDiaries?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            ▶ Subscribe on YouTube
          </a>

          <a
            href="https://www.youtube.com/@langDiaries/community"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            💬 Join Community
          </a>
        </div>
      </div>

      {/* ===== PLAYLIST SECTION ===== */}
      <h2 className="section-title">Playlists</h2>
      <div className="playlist-grid">
        {playlists.map((pl, index) => (
          <PlaylistCard key={pl.id} playlist={pl} index={index} />
        ))}
      </div>

      {/* ===== COMMUNITY SECTION ===== */}
      <section className="community-section">
        <h2 className="section-title">Stay Connected</h2>
        <p className="community-text">
          We don’t use direct messaging on this website yet, but you can
          communicate with us through our YouTube Community or via email:
          <br />
          <br />
          ❓ Ask questions about language learning
          <br />
          💡 Suggest new video topics
          <br />
          🛠️ Give feedback on website improvements
          <br />
          📊 Participate in polls & surveys
          <br />
          ✏️ Share learning tips or experiences
        </p>

        <div className="community-buttons">
          <a
            href="https://www.youtube.com/@langDiaries/community"
            target="_blank"
            rel="noopener noreferrer"
            className="community-card youtube"
          >
            <span>💬 Visit Our YouTube Community</span>
            <span className="arrow">→</span>
          </a>

          <a
            href="mailto:yourname@example.com"
            className="community-card email"
          >
            <span>✉ Contact via Email</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
