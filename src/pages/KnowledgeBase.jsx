import { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm";
import LinkedInBanner from "../components/LinkedInBanner";
import { useContent } from "../context/ContentContext";
import { resolveImageSrc } from "../utils/imageUpload";

const CATEGORIES = ["all", "Equipment", "Guides", "Heavy Haul", "Industry", "Mobile Housing"];

export default function KnowledgeBase() {
  usePageTitle("Knowledge Base | Nationwide Transport Services", "Guides, tips and resources on freight shipping, heavy haul, trailers, insurance and more from the experts at Nationwide Transport Services.");

  const { kbList } = useContent();
  const [filter, setFilter] = useState("all");
  const featured = kbList.slice(0, 3);
  const filtered = kbList.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>Knowledge Base</b></p>
          <h1 className="h-display">Knowledge Base</h1>
          <p>Your trusted source for every transport. Find helpful guides on vehicle transport trailers, heavy hauling, permits, insurance, and other topics shared to help you understand the process and move your cargo with confidence.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "620px", marginBottom: "46px" }}>
            <p className="eyebrow">Start here</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>Featured Articles</h2>
          </div>
          <div className="post-grid">
            {featured.map((item) => (
              <Link key={item.slug} className="post reveal" to={`/knowledge-base/${item.slug}`}>
                <div className="post__media"><img src={resolveImageSrc(item.image, "kb-1.svg")} alt={item.title} /></div>
                <div className="post__body">
                  <p className="post__meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="post__more">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="svc-cta reveal">
            <span className="brand__mark"><svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 17v.01M12 13a2.5 2.5 0 1 0-2.5-3" /></svg></span>
            <div><h2>Not sure where to start?</h2><p>Tell us what you're shipping and a specialist will point you to the right resources — or just give you a straight answer.</p></div>
            <div className="svc-cta__act"><Link className="btn btn--amber" to="/contact">Ask an Expert <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link></div>
          </div>
        </div>
      </section>

      <section className="section introband">
        <div className="wrap">
          <div className="kb-toolbar reveal">
            <h2>All Articles</h2>
            <div className="kb-select">
              <label htmlFor="catfilter" style={{ fontFamily: "var(--display)", textTransform: "uppercase", letterSpacing: ".1em", fontSize: ".74rem", color: "var(--muted)" }}>Filter</label>
              <select id="catfilter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="post-grid" id="kbgrid">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                className="post reveal"
                to={`/knowledge-base/${item.slug}`}
                data-cat={item.category}
              >
                <div className="post__media"><img src={resolveImageSrc(item.image, "kb-1.svg")} alt={item.title} /></div>
                <div className="post__body">
                  <p className="post__meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="post__more">Read More <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
          {kbList.length > 12 && (
            <nav className="pager" aria-label="Pagination"><span className="is-current">1</span><a href="#">2</a><a href="#">Next »</a></nav>
          )}
        </div>
      </section>

      <section className="section ctaband">
        <div className="wrap reveal">
          <h2>Reliable transport starts here</h2>
          <Link className="btn btn--navy" to="/contact">Request a Quote <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "620px", marginBottom: "48px" }}>
            <p className="eyebrow">While you're here</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>Popular Services</h2>
          </div>
          <div className="svc-grid">
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="15" height="11" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></svg></div><h3>Freight Shipping</h3><p>We provide reliable freight transportation for companies of all sizes. From small cargos to large commercial loads, our staff helps ensure safe, timely, and cost-effective transportation on various routes.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V7h11v10" /><path d="M14 11h4l3 3v3h-7z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Heavy Hauling</h3><p>Our heavy hauling services are designed to handle oversized and heavyweight shipping. We coordinate the right equipment, route planning and support for the carrier to move your bulky cargo with attention to detail.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-5h11l3 5" /><path d="M2 13h20v4H2z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Auto Transportation</h3><p>We provide safe transportation for vehicles, vans, cars, and other auto units. Whether you need a single vehicle transportation or multi-unit transport, we make the process easy and secure.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1" /><path d="M6 7v10M10 7v10M14 7v10M18 7v10" /></svg></div><h3>Container Shipping</h3><p>Our shipping containers service helps businesses efficiently move their goods with reliable transportation solutions. We provide container movement services for inventory, commercial cargo and bulk shipping.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14h20v3H2z" /><path d="M5 14V9h6v5" /><circle cx="7" cy="18.5" r="1.6" /><circle cx="17" cy="18.5" r="1.6" /></svg></div><h3>Flatbed Trucking</h3><p>Flatbed trucking is perfect for construction materials, machinery, large equipment and other freight that need open deck loading. We can arrange reliable carriers for safe and secure delivery.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div><h3>International Export</h3><p>We help coordinate international shipping requirements with effective planning and expert logistical support. From export cargo to cross-border movements, our team keeps the process organized.</p></Link>
            <Link className="svc-card reveal" ><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10" /><path d="M9 19v-6h6v6" /></svg></div><h3>Agriculture Transport</h3><p>We help farms and agricultural businesses by providing transportation for equipment, supplies and bulk products. Our logistics team helps in moving agricultural goods safely and on time.</p></Link>
            <Link className="svc-card reveal" ><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></div><h3>Power-Only Transport</h3><p>Already have a trailer? Our power-only transport service will connect you with the right driver and truck to transport your trailer with ease while we manage the coordination and dispatch support.</p></Link>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="wrap center reveal" style={{ maxWidth: "620px" }}>
          <p className="eyebrow">Still curious?</p>
          <h2 className="h-lg" style={{ color: "var(--navy-800)", marginBottom: "18px" }}>Have more questions?</h2>
          <p className="lead center" style={{ marginBottom: "26px" }}>Our specialists are happy to walk you through any part of the shipping process — no obligation.</p>
          <Link className="btn btn--amber" to="/contact">Get Started <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
        </div>
      </section>
      <LinkedInBanner />
    </>
  );
}
