import { useContent } from "../context/ContentContext";
import ArticlePage from "./ArticlePage";

export default function KbArticlePage() {
  const { kbArticles } = useContent();
  return (
    <ArticlePage
      articles={kbArticles}
      basePath="/knowledge-base"
      backLabel="Knowledge Base"
      backTo="/knowledge-base"
    />
  );
}
