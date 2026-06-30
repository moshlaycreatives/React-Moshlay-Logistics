import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminContentCard from "../../components/admin/AdminContentCard";
import { endpoints, BASE_URL } from "../../endpoint";
import { slugify } from "../../utils/slugify";

function getAuthHeaders() {
  const token = localStorage.getItem("nts_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

function resolveApiImage(image) {
  if (!image) return "";
  if (typeof image === "string" && (image.startsWith("data:") || image.startsWith("http"))) {
    return image;
  }
  if (typeof image === "string" && image.startsWith("/")) {
    const origin = BASE_URL.replace(/\/api\/?$/, "");
    return `${origin}${image}`;
  }
  return image;
}

function normalizeArticles(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.articles ?? [];
  return list
    .map((article) => {
      const category =
        typeof article.category === "string"
          ? article.category
          : article.category?.name ?? article.category_name ?? "";

      return {
        id: article.id ?? article._id,
        slug:
          article.slug ||
          slugify(article.title || "") ||
          String(article.id ?? article._id ?? ""),
        title: article.title ?? "",
        meta: article.meta ?? "",
        image: resolveApiImage(article.image ?? article.image_url ?? article.cover_image),
        excerpt: article.description ?? article.excerpt ?? "",
        category,
      };
    })
    .filter((article) => article.title);
}

export default function AdminArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data } = await axios.get(endpoints.ArticleApi, {
          headers: getAuthHeaders(),
        });
        setArticles(normalizeArticles(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load articles."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <>
      <header className="admin-topbar">
        <h1>Articles</h1>
        <Link to="/admin/articles/new" className="admin-btn admin-btn--primary">
          + Add Article
        </Link>
      </header>

      <div className="admin-content">
        <div className="admin-panel">
          <div className="admin-panel__head">
            <h2>All Articles ({articles.length})</h2>
          </div>

          {error && <div className="admin-form__error">{error}</div>}

          {loading ? (
            <div className="admin-empty">
              <p>Loading articles...</p>
            </div>
          ) : articles.length === 0 && !error ? (
            <div className="admin-empty">
              <p>No articles yet. Click &quot;Add New&quot; to create your first article.</p>
            </div>
          ) : (
            <div className="admin-card-grid">
              {articles.map((item) => (
                <AdminContentCard
                  key={item.id ?? item.slug}
                  item={item}
                  imageFallback="kb-1.svg"
                  editTo={`/admin/articles/${item.id}/edit`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
