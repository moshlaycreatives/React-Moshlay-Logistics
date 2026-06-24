import { useContent } from "../context/ContentContext";
import ArticlePage from "./ArticlePage";

export default function NewsArticlePage() {
  const { newsArticles } = useContent();
  return (
    <ArticlePage
      articles={newsArticles}
      basePath="/news"
      backLabel="News"
      backTo="/news"
    />
  );
}
