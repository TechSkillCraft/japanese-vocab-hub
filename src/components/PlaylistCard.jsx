import "../styles/playlistcard.css";

export default function PlaylistCard({ playlist, index }) {
  if (!playlist?.youtubeUrl) return null; // safety guard

  return (
    <a
      href={playlist.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="playlist-card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="playlist-card-content">
        <h3 className="playlist-title">{playlist.title}</h3>

        {playlist.description && (
          <p className="playlist-description">{playlist.description}</p>
        )}
      </div>

      <span className="playlist-cta">Open on YouTube →</span>
    </a>
  );
}
