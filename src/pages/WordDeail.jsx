import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayButton from "../components/PlayButton";
import "../styles/detail.css";

export default function WordDetail() {
  const { id } = useParams();
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch(`/data/vocab/all.json`)
      .then((r) => r.json())
      .then((data) => {
        const match = data.find((w) => w.id === Number(id));
        setWord(match);
      });
  }, [id]);

  if (!word) return <p>Loading...</p>;

  return (
    <div className="page">
      <img
        className="detail-image"
        src={`/images/${word.level}/${word.img}`}
        alt={word.jp}
      />

      <p>
        <strong>English: </strong>
        {word.en}
      </p>
      <p>
        <strong>Romaji: </strong>
        {word.romaji}
      </p>

      <p>
        <strong>Example:</strong> {word.example}
      </p>

      <PlayButton text={word.kana} />
    </div>
  );
}
