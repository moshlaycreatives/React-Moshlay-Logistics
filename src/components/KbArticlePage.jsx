import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import ArticlePage from "./ArticlePage";
import { endpoints } from "../endpoint";
import {
  normalizeArticleDetail,
  normalizeArticleList,
  attachArticleNeighbors,
} from "../utils/articleApi";

export default function KbArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const [listRes, detailRes] = await Promise.all([
          axios.get(endpoints.WebArticleApi),
          axios.get(`${endpoints.WebArticleApi}/${id}`),
        ]);

        const list = normalizeArticleList(listRes.data);
        const detail = normalizeArticleDetail(detailRes.data);
        setArticle(attachArticleNeighbors(detail, list));
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
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
    return <Navigate to="/knowledge-base" replace />;
  }

  return (
    <ArticlePage
      article={article}
      basePath="/knowledge-base"
      backLabel="Knowledge Base"
      backTo="/knowledge-base"
      showPlaceholder={false}
    />
  );
}
