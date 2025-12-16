import { useParams } from "react-router-dom";
import VocabReader from "../jsonreadrs/VocabReader";
import VerbReader from "../jsonreadrs/VerbReader";
import ConversationReader from "../jsonreadrs/ConversationReader";
export default function SubCategoryPage() {
  const { category, subcategory } = useParams();

  const key = category.toLowerCase();

  switch (key) {
    case "verbs":
      return <VerbReader subcategory={subcategory} />;

    case "nouns":
      return <NounReader subcategory={subcategory} />;

    case "adjectives":
      return <AdjectiveReader subcategory={subcategory} />;

    case "sentences":
      return <SentenceReader subcategory={subcategory} />; // new reader

    case "conversations":
      return <ConversationReader subcategory={subcategory} />; // new reader

    default:
      return <VocabReader category={key} subcategory={subcategory} />;
  }
}
