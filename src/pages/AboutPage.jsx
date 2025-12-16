import { Helmet } from "react-helmet-async";
import PlaylistCard from "../components/PlaylistCard";
import useFetchJSON from "../hooks/useFetchJSON";
import "../styles/about.css";

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
      {/* ===== SEO + OG Tags ===== */}
      <Helmet>
        <title>About Japanese Vocab Hub | Learn Japanese Step by Step</title>
        <meta
          name="description"
          content="Learn about Japanese Vocab Hub, my YouTube channel, and how you can learn Japanese step by step through practical videos and visual exercises."
        />
        <meta
          name="keywords"
          content="Japanese Vocab Hub, learn Japanese, Japanese language, YouTube language learning, vocabulary, language journey"
        />
        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="About Japanese Vocab Hub | Learn Japanese Step by Step"
        />
        <meta
          property="og:description"
          content="Explore Japanese Vocab Hub and follow my YouTube channel for step-by-step practical Japanese lessons."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/about-share.png"
        />
      </Helmet>

      {/* ===== CHANNEL INTRO ===== */}
      <div className="about-header">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Lang Diaries Logo"
          className="channel-logo"
        />
        <h1 className="channel-name">Lang Diaries</h1>
        <p className="channel-description">
          Japanese Vocab Hub is a learning space where I share my own
          language-learning journey through simple explanations and visual
          practice. This website goes hand in hand with my YouTube channel,
          where I post short, practical videos to help build vocabulary,
          confidence, and consistency.
        </p>
      </div>

      {/* ===== PLAYLISTS ===== */}
      <h2 className="section-title">Playlists</h2>
      <div className="playlist-grid">
        {playlists.map((pl, index) => (
          <PlaylistCard key={pl.id} playlist={pl} index={index} />
        ))}
      </div>
    </div>
  );
}
