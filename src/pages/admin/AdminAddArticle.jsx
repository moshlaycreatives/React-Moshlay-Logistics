import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import ImageUploadField from "../../components/admin/ImageUploadField";

const CATEGORIES = ["Equipment", "Guides", "Heavy Haul", "Industry", "Mobile Housing"];

export default function AdminAddArticle() {
  const { addArticle } = useContent();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    meta: "",
    image: "",
    category: "Guides",
    content: "",
    hasCtaBand: true,
  });
  const [error, setError] = useState("");

  function update(field) {
    return (e) => {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.image) {
      setError("Please upload an image for this article.");
      return;
    }
    setError("");
    addArticle(form);
    navigate("/admin/articles");
  }

  return (
    <>
      <header className="admin-topbar">
        <h1>Add Article</h1>
        <Link to="/admin/articles" className="admin-btn admin-btn--ghost">
          ← Back to List
        </Link>
      </header>

      <div className="admin-content admin-content--form">
        <div className="admin-panel admin-panel--form admin-form-page">
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
                <select id="category" value={form.category} onChange={update("category")}>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
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

            <div className="admin-form-page__actions">
              <button type="submit" className="admin-btn admin-btn--primary admin-btn--block-sm">
                Publish Article
              </button>
              <Link to="/admin/articles" className="admin-btn admin-btn--ghost admin-btn--block-sm">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
