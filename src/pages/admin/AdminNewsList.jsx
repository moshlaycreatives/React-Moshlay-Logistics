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

function normalizeNews(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.news ?? [];
  return list
    .map((item) => ({
      id: item.id ?? item._id,
      slug:
        item.slug ||
        slugify(item.title || "") ||
        String(item.id ?? item._id ?? ""),
      title: item.title ?? "",
      meta: item.meta ?? "",
      image: resolveApiImage(item.image ?? item.image_url ?? item.cover_image),
      excerpt: item.description ?? item.excerpt ?? "",
    }))
    .filter((item) => item.title);
}

export default function AdminNewsList() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await axios.get(endpoints.NewsApi, {
          headers: getAuthHeaders(),
        });
        setNewsList(normalizeNews(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load news."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      <header className="admin-topbar">
        <h1>News</h1>
        <Link to="/admin/news/new" className="admin-btn admin-btn--primary">
          + Add News
        </Link>
      </header>

      <div className="admin-content">
        <div className="admin-panel">
          <div className="admin-panel__head">
            <h2>All News ({newsList.length})</h2>
          </div>

          {loading ? (
            <div className="admin-empty">
              <p>Loading news...</p>
            </div>
          ) : error || newsList.length === 0 ? (
            <div className="admin-empty">
              <p>News Not Available</p>
            </div>
          ) : (
            <div className="admin-card-grid">
              {newsList.map((item, index) => (
                <AdminContentCard
                  key={item.id ?? item.slug}
                  item={item}
                  imageFallback="news-1.svg"
                  badge={index === 0 ? "Latest" : null}
                  editTo={`/admin/news/${item.id}/edit`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
