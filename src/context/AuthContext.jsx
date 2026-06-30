import { createContext, useContext, useState, useCallback } from "react";

const AUTH_KEY = "nts_admin_auth";
const TOKEN_KEY = "nts_admin_token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () =>
      localStorage.getItem(AUTH_KEY) === "true" ||
      !!localStorage.getItem(TOKEN_KEY)
  );

  const login = useCallback((token) => {
    localStorage.setItem(AUTH_KEY, "true");
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
