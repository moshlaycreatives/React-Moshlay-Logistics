import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import ArticlePage from "./ArticlePage";
import { endpoints } from "../endpoint";
import { normalizeNewsDetail, normalizeNewsList, attachNewsNeighbors } from "../utils/newsApi";

export default function NewsArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const [listRes, detailRes] = await Promise.all([
          axios.get(endpoints.WebNewsApi),
          axios.get(`${endpoints.WebNewsApi}/${id}`),
        ]);

        const list = normalizeNewsList(listRes.data);
        const detail = normalizeNewsDetail(detailRes.data);
        setArticle(attachNewsNeighbors(detail, list));
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [id]);

  if (loading) {
    return (
      <section className="section">
        <div className="wrap">
          <p>Loading article...</p>
        </div>
      </section>
    );
  }

  if (notFound || !article?.title) {
    return <Navigate to="/news" replace />;
  }

  return (
    <ArticlePage
      article={article}
      basePath="/news"
      backLabel="News"
      backTo="/news"
      showPlaceholder={false}
    />
  );
}
