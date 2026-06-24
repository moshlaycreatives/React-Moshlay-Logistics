import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import AdminContentCard from "../../components/admin/AdminContentCard";

export default function AdminNewsList() {
  const { newsList } = useContent();

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

          {newsList.length === 0 ? (
            <div className="admin-empty">
              <p>No news yet. Click &quot;Add New&quot; to create your first post.</p>
            </div>
          ) : (
            <div className="admin-card-grid">
              {newsList.map((item, index) => (
                <AdminContentCard
                  key={item.slug}
                  item={item}
                  imageFallback="news-1.svg"
                  badge={index === 0 ? "Latest" : null}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
