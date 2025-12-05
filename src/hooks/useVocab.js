import { useState, useEffect } from "react";

/**
 * Loads ALL vocabulary JSON files inside a category folder.
 * Example folder:
 *   /public/data/nouns/
 * Loads:
 *   nouns.json, animals.json, objects.json, etc.
 */
export default function useVocab(categoryName) {
  const [vocab, setVocab] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryName) return;

    const folderPath = `/data/${categoryName}/`;

    async function loadVocab() {
      try {
        setLoading(true);

        // First fetch → list of JSON files inside the folder
        const indexFile = await fetch(`${folderPath}fileIndex.json`);
        const fileList = await indexFile.json(); // ["nouns.json", "animals.json"]

        // Fetch all JSON files in parallel
        const responses = await Promise.all(
          fileList.map((file) =>
            fetch(folderPath + file).then((res) => res.json())
          )
        );

        // Merge all vocabulary arrays
        const merged = responses.flat();

        setVocab(merged);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVocab();
  }, [categoryName]);

  return { vocab, loading, error };
}
