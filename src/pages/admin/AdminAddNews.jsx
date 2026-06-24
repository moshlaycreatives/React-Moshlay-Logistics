import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import ImageUploadField from "../../components/admin/ImageUploadField";

export default function AdminAddNews() {
  const { addNews } = useContent();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    meta: "",
    image: "",
    content: "",
  });
  const [error, setError] = useState("");

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.image) {
      setError("Please upload an image for this news post.");
      return;
    }
    setError("");
    addNews(form);
    navigate("/admin/news");
  }

  return (
    <>
      <header className="admin-topbar">
        <h1>Add News</h1>
        <Link to="/admin/news" className="admin-btn admin-btn--ghost">
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
              <button type="submit" className="admin-btn admin-btn--primary admin-btn--block-sm">
                Publish News
              </button>
              <Link to="/admin/news" className="admin-btn admin-btn--ghost admin-btn--block-sm">
                Cancel
              </Link>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
