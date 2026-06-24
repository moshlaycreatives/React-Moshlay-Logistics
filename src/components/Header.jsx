import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "./icons";

const NAV = [
  { label: "Services", to: "/services", key: "services" },
  { label: "About", to: "/about", key: "about" },
  { label: "News", to: "/news", key: "news" },
  { label: "Knowledge Base", to: "/knowledge-base", key: "knowledge-base" },
  { label: "Become a Customer", to: "/become-a-customer", key: "become-a-customer" },
  { label: "Contact", to: "/contact", key: "contact" },
];


function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Nationwide Transport Services home">
      <span className="brand__mark">
        <img src="/images/logo.png" alt="" decoding="async" />
      </span>
      {/* <span className="brand__text">
        <b>Nationwide</b>
        <span>Transport Services</span>
      </span> */}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      if (y <= 0) {
        setHidden(false);
      } else if (y > lastY && y > 80) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${hidden && !open ? " is-hidden" : ""}`}>
        <div className="wrap">
          <nav className="nav">
            <Brand />
            <ul className="menu">
              {NAV.map((n) => (
                <li key={n.key}>
                  <NavLink to={n.to} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="nav__actions">
              <Link className="btn btn--amber nav__cta" to="/contact">
                Free Quote <Icon name="arrow" />
              </Link>
              <button
                className="nav__toggle"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <Icon name="menu" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`drawer${open ? " is-open" : ""}`}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel">
          <div className="drawer__head">
            <Brand />
            <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="close" />
            </button>
          </div>
          {NAV.map((n) => (
            <Link key={n.key} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link className="btn btn--amber" to="/contact" onClick={() => setOpen(false)}>
            Free Quote <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
}
