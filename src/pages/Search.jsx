import { useState, useEffect } from "react";
import WordCard from "./WordCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("/data/vocab/all.json")
      .then((r) => r.json())
      .then(setWords);
  }, []);

  const results = words.filter(
    (w) =>
      w.jp.includes(query) ||
      w.kana.includes(query) ||
      w.romaji.includes(query) ||
      w.en.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Search</h2>

      <input
        type="text"
        placeholder="Search word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.map((w) => (
        <WordCard key={w.id} word={w} />
      ))}
    </div>
  );
}
