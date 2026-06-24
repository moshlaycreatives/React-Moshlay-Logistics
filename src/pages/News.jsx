import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import LinkedInBanner from "../components/LinkedInBanner";
import { useContent } from "../context/ContentContext";
import { resolveImageSrc } from "../utils/imageUpload";

export default function News() {
  usePageTitle("News | Nationwide Transport Services", "Stay up to date with Nationwide Transport Services news, press releases and company milestones.");

  const { newsList } = useContent();

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
          <div className="post-grid">
            {newsList.map((item, index) => (
              <Link key={item.slug} className="post reveal" to={`/news/${item.slug}`}>
                <div className="post__media">
                  <img src={resolveImageSrc(item.image, "news-1.svg")} alt={item.title} />
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
