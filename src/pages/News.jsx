import { useState, useEffect } from "react";
import axios from "axios";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import LinkedInBanner from "../components/LinkedInBanner";
import { endpoints } from "../endpoint";
import { normalizeNewsList } from "../utils/newsApi";

export default function News() {
  usePageTitle("News | Nationwide Transport Services", "Stay up to date with Nationwide Transport Services news, press releases and company milestones.");

  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await axios.get(endpoints.WebNewsApi);
        setNewsList(normalizeNewsList(data));
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.response?.data?.error ||
            "Failed to load news."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>News</b></p>
          <h1 className="h-display">Our Latest</h1>
          <p>Find all the latest news for NTS — interviews, guest articles and press releases, plus milestones, promotions and notable moments from our transport specialists. Check back often!</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {error && (
            <p style={{ color: "var(--red, #c00)", marginBottom: 24 }}>{error}</p>
          )}

          {loading ? (
            <p>Loading news...</p>
          ) : newsList.length === 0 && !error ? (
            <p>No news posts yet. Check back soon!</p>
          ) : (
            <div className="post-grid">
              {newsList.map((item, index) => (
                <Link key={item.id ?? item.slug} className="post reveal" to={`/news/${item.id}`}>
                  <div className="post__media">
                    <img src={item.image || "/images/news-1.svg"} alt={item.title} />
                  </div>
                  <div className="post__body">
                    <p className="post__meta">
                      {index === 0 ? `Featured · ${item.meta}` : item.meta}
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className="post__more">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {newsList.length > 10 && (
            <nav className="pager" aria-label="Pagination">
              <span className="is-current">1</span>
              <a href="#">2</a>
              <a href="#">Next »</a>
            </nav>
          )}
        </div>
      </section>
      <LinkedInBanner />
    </>
  );
}
