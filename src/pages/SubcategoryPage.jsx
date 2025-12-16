import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import VocabReader from "../jsonreadrs/VocabReader";
import VerbReader from "../jsonreadrs/VerbReader";
import ConversationReader from "../jsonreadrs/ConversationReader";

export default function SubCategoryPage() {
  const { category, subcategory } = useParams();
  const key = category.toLowerCase();

  const pageTitle = `${subcategory} - ${category} | Japanese Vocab Hub`;
  const pageDesc = `Learn ${subcategory} in Japanese. Build your ${category} vocabulary step by step with simple and visual practice.`;

  const renderContent = () => {
    switch (key) {
      case "verbs":
        return <VerbReader subcategory={subcategory} />;
      case "nouns":
        return <VocabReader category="nouns" subcategory={subcategory} />;
      case "adjectives":
        return <VocabReader category="adjectives" subcategory={subcategory} />;
      case "sentences":
        return <VocabReader category="sentences" subcategory={subcategory} />;
      case "conversations":
        return <ConversationReader subcategory={subcategory} />;
      default:
        return <VocabReader category={key} subcategory={subcategory} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content={`${subcategory}, ${category}, Japanese, learn Japanese, vocabulary`}
        />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/category/${category}/${subcategory}`}
        />
        <meta
          property="og:image"
          content={`https://yourwebsite.com/images/${category}-${subcategory}-share.png`}
        />
      </Helmet>
      {renderContent()}
    </>
  );
}
