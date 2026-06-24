import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Layout() {
  useScrollToTop();
  useScrollReveal();
  return (
    <div className="site-shell">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
