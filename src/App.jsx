import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BecomeACustomer from "./pages/BecomeACustomer";
import News from "./pages/News";
import KnowledgeBase from "./pages/KnowledgeBase";
import NewsArticlePage from "./components/NewsArticlePage";
import KbArticlePage from "./components/KbArticlePage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminNewsList from "./pages/admin/AdminNewsList";
import AdminAddNews from "./pages/admin/AdminAddNews";
import AdminArticlesList from "./pages/admin/AdminArticlesList";
import AdminAddArticle from "./pages/admin/AdminAddArticle";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="become-a-customer" element={<BecomeACustomer />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsArticlePage />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
        <Route path="knowledge-base/:slug" element={<KbArticlePage />} />
      </Route>

      <Route path="admin/login" element={<AdminLogin />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="news" replace />} />
        <Route path="news" element={<AdminNewsList />} />
        <Route path="news/new" element={<AdminAddNews />} />
        <Route path="articles" element={<AdminArticlesList />} />
        <Route path="articles/new" element={<AdminAddArticle />} />
      </Route>
    </Routes>
  );
}
