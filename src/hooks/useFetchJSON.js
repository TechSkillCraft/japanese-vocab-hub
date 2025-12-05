import { useState, useEffect } from "react";

export default function useFetchJSON(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path) return;

    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [path]);

  return { data, loading, error };
}
