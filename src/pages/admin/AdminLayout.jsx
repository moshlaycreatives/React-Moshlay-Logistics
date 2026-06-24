import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/admin.css";

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div className="admin admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <h2>NTS Admin</h2>
          <span>Content Manager</span>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/news" className={({ isActive }) => (isActive ? "is-active" : "")}>
            News
          </NavLink>
          <NavLink
            to="/admin/articles"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Articles
          </NavLink>
        </nav>

        <div className="admin-sidebar__foot">
          <a href="/" target="_blank" rel="noopener noreferrer">
            View Website ↗
          </a>
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            style={{ width: "100%", marginTop: 8 }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}
