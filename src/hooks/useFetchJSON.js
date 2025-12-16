import { useState, useEffect } from "react";

export default function useFetchJSON(relativePath) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!relativePath) {
      setLoading(false);
      return;
    }

    const base = import.meta.env.BASE_URL || "/";
    const normalized = relativePath.startsWith("/")
      ? relativePath.slice(1)
      : relativePath;
    const path = `${base}${normalized}`;

    console.log("📌 Fetching:", path);

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`JSON not found at ${path}`);
        return res.json();
      })
      .then((json) => {
        console.log("📦 Fetched JSON:", json);
        setData(json);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [relativePath]);

  return { data, loading, error };
}
