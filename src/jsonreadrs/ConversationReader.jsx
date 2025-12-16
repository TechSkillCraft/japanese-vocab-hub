import useFetchJSON from "../hooks/useFetchJSON";

export default function ConversationReader({ subcategory }) {
  // Fetch the conversation JSON for this subcategory
  const { data, loading, error } = useFetchJSON(
    `/data/conversations/${subcategory}.json`
  );

  if (loading) return <div>Loading conversations…</div>;
  if (error)
    return <div style={{ color: "red" }}>Error loading conversations</div>;
  if (!data || !data.length) return <div>No conversations found</div>;

  return (
    <div style={{ padding: "16px" }}>
      {data.map((line) => (
        <div
          key={line.id}
          style={{
            marginBottom: "1.5rem",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          {/* Japanese sentence */}
          <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
            {line.jp}
          </p>

          {/* English translation */}
          <p style={{ margin: "4px 0 0", color: "#555" }}>{line.en}</p>
        </div>
      ))}
    </div>
  );
}
