import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ImageUploadField from "../../components/admin/ImageUploadField";
import { endpoints, BASE_URL } from "../../endpoint";

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
  const news = data?.data ?? data?.news ?? data;

  return {
    title: news.title ?? "",
    description: news.description ?? news.excerpt ?? "",
    meta: news.meta ?? "",
    image: resolveApiImage(news.image ?? news.image_url ?? news.cover_image),
    content: news.content ?? "",
  };
}

function dataUrlToFile(dataUrl, filename = "cover") {
  const [header, base64] = dataUrl.split(",");
  const mime = header.match(/:(.*?);/)?.[1] || "image/jpeg";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const ext = mime.split("/")[1] || "jpg";
  return new File([bytes], `${filename}.${ext}`, { type: mime });
}

function buildNewsFormData(form) {
  const formData = new FormData();
  formData.append("title", form.title.trim());
  formData.append("description", form.description.trim());
  formData.append("meta", form.meta.trim());
  formData.append("content", form.content);

  if (form.image?.startsWith("data:")) {
    formData.append("image", dataUrlToFile(form.image));
  }

  return formData;
}

export default function AdminEditNews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsLoading, setNewsLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    meta: "",
    image: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await axios.get(`${endpoints.NewsApi}/${id}`, {
          headers: getAuthHeaders(),
        });
        setForm(normalizeNews(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load news."
        );
      } finally {
        setNewsLoading(false);
      }
    }

    fetchNews();
  }, [id]);

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.image) {
      setError("Please upload an image for this news post.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const payload = buildNewsFormData(form);

      await axios.put(`${endpoints.NewsApi}/${id}`, payload, {
        headers: getAuthHeaders(),
      });
      navigate("/admin/news");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to update news."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="admin-topbar">
        <h1>Edit News</h1>
        <Link to="/admin/news" className="admin-btn admin-btn--ghost">
          ← Back to List
        </Link>
      </header>

      <div className="admin-content admin-content--form">
        <div className="admin-panel admin-panel--form admin-form-page">
          {newsLoading ? (
            <div className="admin-empty">
              <p>Loading news...</p>
            </div>
          ) : (
            <form className="admin-form" onSubmit={handleSubmit}>
              {error && <div className="admin-form__error">{error}</div>}

              <div className="admin-form__group">
                <label htmlFor="title">Title *</label>
                <input id="title" value={form.title} onChange={update("title")} required />
              </div>

              <div className="admin-form__group">
                <label htmlFor="description">Short Description *</label>
                <input
                  id="description"
                  value={form.description}
                  onChange={update("description")}
                  required
                />
                <p className="admin-form__hint">Shown on the news listing page.</p>
              </div>

              <div className="admin-form__group">
                <label htmlFor="meta">Meta Label *</label>
                <input
                  id="meta"
                  value={form.meta}
                  onChange={update("meta")}
                  placeholder="Company News · Jun 2025"
                  required
                />
              </div>

              <div className="image-upload-wrapper">
                <ImageUploadField
                  id="news-image"
                  label="Cover Image"
                  value={form.image}
                  onChange={(image) => setForm((prev) => ({ ...prev, image }))}
                  fallback="news-1.svg"
                  required={false}
                />
              </div>

              <div className="admin-form__group">
                <label htmlFor="content">Full Content *</label>
                <textarea
                  id="content"
                  value={form.content}
                  onChange={update("content")}
                  placeholder="Write your news content here. Separate paragraphs with a blank line."
                  required
                />
              </div>

              <div className="admin-form-page__actions">
                <button
                  type="submit"
                  className="admin-btn admin-btn--primary admin-btn--block-sm"
                  disabled={loading || newsLoading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <Link to="/admin/news" className="admin-btn admin-btn--ghost admin-btn--block-sm">
                  Cancel
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
