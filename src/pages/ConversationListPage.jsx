import { Link } from "react-router-dom";
import useFetchJSON from "../hooks/useFetchJSON";
import "../styles/conversationList.css";

export default function ConversationListPage() {
  const { data, loading, error } = useFetchJSON(
    "/data/conversations/list.json"
  );
  // list.json will contain array of conversations: [{id, title, description}, ...]

  if (loading) return <h2>Loading conversations…</h2>;
  if (error) return <h2>Error loading conversations</h2>;

  return (
    <div className="convlist-container">
      <h1>Conversations</h1>
      <div className="convlist-grid">
        {data.map((conv) => (
          <div key={conv.id} className="convlist-card">
            <h2>{conv.title}</h2>
            <p>{conv.description}</p>
            <Link to={`/conversation/${conv.id}`}>
              <button className="play-btn">▶ Play</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
