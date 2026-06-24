import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import AdminContentCard from "../../components/admin/AdminContentCard";

export default function AdminArticlesList() {
  const { kbList } = useContent();

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
            <h2>All Articles ({kbList.length})</h2>
          </div>

          {kbList.length === 0 ? (
            <div className="admin-empty">
              <p>No articles yet. Click &quot;Add New&quot; to create your first article.</p>
            </div>
          ) : (
            <div className="admin-card-grid">
              {kbList.map((item) => (
                <AdminContentCard
                  key={item.slug}
                  item={item}
                  imageFallback="kb-1.svg"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
