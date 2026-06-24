import { useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/admin.css";
import { endpoints } from "../../endpoint";




export default function AdminLogin() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/admin/news" replace />;
  }

  const from = location.state?.from?.pathname || "/admin/news";

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const result = login(username, password);
    if (result.ok) {
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="admin admin-login">
      <div className="admin-login__card">
        <div className="admin-login__brand">
          <h1>NTS Admin</h1>
          <p>Sign in to manage news &amp; articles</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="admin-form__error">{error}</div>}

          <div className="admin-form__group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-form__group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="admin-btn admin-btn--primary admin-btn--block">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
