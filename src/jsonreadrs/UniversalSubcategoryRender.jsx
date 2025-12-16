import { useParams } from "react-router-dom";
import WordListPage from "./SentenceListPage";
import VerbListPage from "./SentenceListPage";
import SentenceListPage from "./SentenceListPage";
export default function UniversalSubcategoryRender() {
  const { categoryName, subCategory } = useParams();

  switch (categoryName) {
    case "vocabulary":
      return <WordListPage subCategory={subCategory} />;

    case "verbs":
      return <VerbListPage subCategory={subCategory} />;

    case "sentences":
      return <SentenceListPage subCategory={subCategory} />;

    default:
      return <div>Category not found</div>;
  }
}
