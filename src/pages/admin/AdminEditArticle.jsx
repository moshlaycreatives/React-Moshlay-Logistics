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

function normalizeCategories(data) {
  const list = Array.isArray(data) ? data : data?.data ?? data?.categories ?? [];
  return list
    .map((cat) => ({
      id: cat.id ?? cat._id ?? cat.category_id,
      name: cat.name ?? cat.title ?? cat.category_name ?? "",
    }))
    .filter((cat) => cat.id != null && cat.name);
}

function normalizeArticle(data) {
  const article = data?.data ?? data?.article ?? data;
  const categoryId =
    article.category_id ??
    article.category?.id ??
    article.category?._id ??
    article.category?.category_id ??
    "";

  return {
    title: article.title ?? "",
    description: article.description ?? article.excerpt ?? "",
    meta: article.meta ?? "",
    image: resolveApiImage(article.image ?? article.image_url ?? article.cover_image),
    categoryId: categoryId !== "" ? String(categoryId) : "",
    content: article.content ?? "",
    hasCtaBand:
      article.has_cta_band === 1 ||
      article.has_cta_band === true ||
      article.has_cta_band === "1",
    isFeatured:
      article.is_featured === 1 ||
      article.is_featured === true ||
      article.is_featured === "1" ||
      article.is_featured === "true",
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

function buildArticleFormData(form) {
  const formData = new FormData();
  formData.append("title", form.title.trim());
  formData.append("description", form.description.trim());
  formData.append("meta", form.meta.trim());
  formData.append("content", form.content);
  formData.append("category_id", Number(form.categoryId) || form.categoryId);
  formData.append("has_cta_band", form.hasCtaBand ? "1" : "0");
  formData.append("is_featured", form.isFeatured ? "true" : "false");

  if (form.image?.startsWith("data:")) {
    formData.append("image", dataUrlToFile(form.image));
  }

  return formData;
}

export default function AdminEditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [articleLoading, setArticleLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    meta: "",
    image: "",
    categoryId: "",
    content: "",
    hasCtaBand: true,
    isFeatured: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesRes, articleRes] = await Promise.all([
          axios.get(endpoints.CategoryApi, { headers: getAuthHeaders() }),
          axios.get(`${endpoints.ArticleApi}/${id}`, { headers: getAuthHeaders() }),
        ]);

        setCategories(normalizeCategories(categoriesRes.data));
        setForm(normalizeArticle(articleRes.data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load article."
        );
      } finally {
        setCategoriesLoading(false);
        setArticleLoading(false);
      }
    }

    fetchData();
  }, [id]);

  function update(field) {
    return (e) => {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.image) {
      setError("Please upload an image for this article.");
      return;
    }
    if (!form.categoryId) {
      setError("Please select a category.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const payload = buildArticleFormData(form);

      await axios.put(`${endpoints.ArticleApi}/${id}`, payload, {
        headers: getAuthHeaders(),
      });
      navigate("/admin/articles");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Failed to update article."
      );
    } finally {
      setLoading(false);
    }
  }

  const pageLoading = categoriesLoading || articleLoading;

  return (
    <>
      <header className="admin-topbar">
        <h1>Edit Article</h1>
        <Link to="/admin/articles" className="admin-btn admin-btn--ghost">
          ← Back to List
        </Link>
      </header>

      <div className="admin-content admin-content--form">
        <div className="admin-panel admin-panel--form admin-form-page">
          {pageLoading ? (
            <div className="admin-empty">
              <p>Loading article...</p>
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
              </div>

              <div className="admin-form__row">
                <div className="admin-form__group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    value={form.categoryId}
                    onChange={update("categoryId")}
                    disabled={categoriesLoading || categories.length === 0}
                    required
                  >
                    {categoriesLoading ? (
                      <option value="">Loading categories...</option>
                    ) : categories.length === 0 ? (
                      <option value="">No categories available</option>
                    ) : (
                      categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="admin-form__group">
                  <label htmlFor="meta">Meta Label *</label>
                  <input
                    id="meta"
                    value={form.meta}
                    onChange={update("meta")}
                    placeholder="Guides · 5 min read"
                    required
                  />
                </div>
              </div>

              <ImageUploadField
                id="article-image"
                label="Cover Image"
                value={form.image}
                onChange={(image) => setForm((prev) => ({ ...prev, image }))}
                fallback="kb-1.svg"
                required={false}
              />

              <div className="admin-form__group">
                <label htmlFor="content">Full Content *</label>
                <textarea
                  id="content"
                  value={form.content}
                  onChange={update("content")}
                  placeholder="Write your article content here. Separate paragraphs with a blank line."
                  required
                />
              </div>

              <div className="admin-form__group">
                <label className="admin-form__check">
                  <input
                    type="checkbox"
                    checked={form.hasCtaBand}
                    onChange={update("hasCtaBand")}
                  />
                  Show &quot;Request a Quote&quot; banner on article page
                </label>
              </div>

              <div className="admin-form__group">
                <label className="admin-form__check">
                  <input
                    type="checkbox"
                    checked={form.isFeatured}
                    onChange={update("isFeatured")}
                  />
                  Add Featured
                </label>
              </div>

              <div className="admin-form-page__actions">
                <button
                  type="submit"
                  className="admin-btn admin-btn--primary admin-btn--block-sm"
                  disabled={loading || pageLoading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <Link to="/admin/articles" className="admin-btn admin-btn--ghost admin-btn--block-sm">
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
