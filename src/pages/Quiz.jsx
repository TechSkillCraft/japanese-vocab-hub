import { useEffect, useState } from "react";

export default function Quiz() {
  const [words, setWords] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch("/data/vocab/n5.json")
      .then((r) => r.json())
      .then((d) => {
        setWords(d);
        setCurrent(d[Math.floor(Math.random() * d.length)]);
      });
  }, []);

  if (!current) return "Loading...";

  return (
    <div className="page">
      <h2>Quiz</h2>

      <p>What is the meaning of:</p>
      <h3>
        {current.jp} ({current.kana})
      </h3>

      <ul>
        {["cat", "dog", current.en, "tree"]
          .sort(() => Math.random() - 0.5)
          .map((opt) => (
            <li key={opt}>
              <button>{opt}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
