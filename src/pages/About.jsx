import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import LinkedInBanner from "../components/LinkedInBanner";

export default function About() {
  usePageTitle("About | Nationwide Transport Services", "Learn about Nationwide Transport Services — a family-owned logistics company with over 15 years of experience and 10 offices across the US.");

  return (
    <>

      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>About</b></p>
          <h1 className="h-display">About Us</h1>
          <p>Meet the people who have the values and beliefs that form the basis of Logistics Moshlay Creatives, a modern logistics firm built on trust, speed and precision.</p>
        </div>
      </section>


      <section className="section">
        <div className="wrap">
          <div className="about-split reveal">
            <div className="about-split__text">
              <p className="eyebrow">Experience the difference in your next move</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)", marginBottom: "16px" }}>Get to know us</h2>
              <p>At Logistics Moshlay Creatives, we think that freight transportation should be straightforward, transparent and hassle-free. Our organization was founded by Momin Nasir in June of 2024 with one goal in mind: to offer better, faster, and more reliable logistics services to companies and individuals across the United States.</p>
              <p>What began as an ambitious idea has transformed into a focused team comprising 15-25 dedicated logistics experts who are all determined to go an extra mile both physically as well as metaphorically to serve every client we serve.</p>
              <Link className="btn btn--amber" to="/contact" style={{ marginTop: "8px" }}>Request a Shipping Quote</Link>
            </div>
            <img src="/images/aboutsection.png" alt="Nationwide Transport Services 15-year celebration" />
          </div>
        </div>
      </section>

      {/* Celebrating Section */}

      <section className="section introband">
        <div className="wrap">
          <div className="about-split about-split--rev reveal">
            <img src="/images/aboutwe.png" alt="Nationwide Transport Services truck on the road" />
            <div className="about-split__text">
              <p className="eyebrow">Celebrating 15 years of excellence</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)", marginBottom: "16px" }}>What we do</h2>
              <p>Logistics Moshlay Creatives offers a focused range of transport and logistics services designed to meet the real-world needs of today’s businesses, contractors, and homeowners.</p>
              <p>Freight and Shipping Domestic freight services for all types of loads, from standard goods to oversize equipment, through trusted trucking networks across the USA. Huge Transport Specialized transport of huge loads, heavy machinery, construction equipment, and industrial cargo requiring expert planning, routing, and permitting.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Services section*/}

      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "680px", marginBottom: "48px" }}>
            <p className="eyebrow">What we move</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>OUR LOGISTICS SERVICES</h2>
            <p className="lead center">We offer reliable transport and freight solutions that are specifically tailored to your requirements. From local delivery to nationwide transport of cargo, select the best option for your schedule, timeframe, and budget.</p>
          </div>
          <div className="svc-grid">
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="15" height="11" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></svg></div><h3>Freight Shipping</h3><p>We provide reliable freight transportation for companies of all sizes. From small cargos to large commercial loads, our staff helps ensure safe, timely, and cost-effective transportation on various routes.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V7h11v10" /><path d="M14 11h4l3 3v3h-7z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Heavy Hauling</h3><p>Our heavy hauling services are designed to handle oversized and heavyweight shipping. We coordinate the right equipment, route planning and support for the carrier to move your bulky cargo with attention to detail.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-5h11l3 5" /><path d="M2 13h20v4H2z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Auto Transportation</h3><p>We provide safe transportation for vehicles, vans, cars, and other auto units. Whether you need a single vehicle transportation or multi-unit transport, we make the process easy and secure.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1" /><path d="M6 7v10M10 7v10M14 7v10M18 7v10" /></svg></div><h3>Container Shipping</h3><p>Our shipping containers service helps businesses efficiently move their goods with reliable transportation solutions. We provide container movement services for inventory, commercial cargo and bulk shipping.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14h20v3H2z" /><path d="M5 14V9h6v5" /><circle cx="7" cy="18.5" r="1.6" /><circle cx="17" cy="18.5" r="1.6" /></svg></div><h3>Flatbed Trucking</h3><p>Flatbed trucking is perfect for construction materials, machinery, large equipment and other freight that need open deck loading. We can arrange reliable carriers for safe and secure delivery.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div><h3>International Export</h3><p>We help coordinate international shipping requirements with effective planning and expert logistical support. From export cargo to cross-border movements, our team keeps the process organized.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10" /><path d="M9 19v-6h6v6" /></svg></div><h3>Agriculture Transport</h3><p>We help farms and agricultural businesses by providing transportation for equipment, supplies and bulk products. Our logistics team helps in moving agricultural goods safely and on time.</p></Link>
            <Link className="svc-card reveal"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></div><h3>Power-Only Transport</h3><p>Already have a trailer? Our power-only transport service will connect you with the right driver and truck to transport your trailer with ease while we manage the coordination and dispatch support.</p></Link>
          </div>
        </div>
      </section>


      {/* achievements Section */}

      <section className="section achieve">
        <div className="wrap">
          <div className="achieve__grid reveal">
            <img src="/images/aboutstory.png" alt="Inc. 5000 honoree" />
            <div>
              <p className="eyebrow">Recognition</p>
              <h2 className="h-lg" style={{ marginBottom: "16px" }}>OUR STORY</h2>
              <p>Entrepreneur Momin Nasir started Logistics Moshlay Creatives in June 2024 after spotting a gap in the market for a logistics organization that truly places the customer experience first. Momin’s vision was simple: to create an enterprise that provides high-quality transport services, with the personal focus and transparency that bigger companies often do not have. </p>
              <p>Our vision has been in place since the beginning and has influenced every decision we take, from the people we work with to how we communicate with our customers. In a short amount of time, we have built an experienced team of 15-25 logistics experts who are committed to excellence.</p>
            </div>
          </div>
        </div>
      </section>


      <LinkedInBanner />
    </>
  );
}
