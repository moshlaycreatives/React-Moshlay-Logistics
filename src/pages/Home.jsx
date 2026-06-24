import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import LinkedInBanner from "../components/LinkedInBanner";

export default function Home() {
  usePageTitle("Nationwide Transport Services | Transportation Solutions", "Nationwide Transport Services offers trustworthy, reliable trucking. Over 150,000 trucks nationwide. Get a free quote today.");

  return (
    <>

      {/* hero section */}

      <section className="hero2">
        <video
          className="hero2__video"
          src="/images/herosection.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero2__overlay"></div>
        <div className="hero2__grain"></div>
        <div className="wrap">
          <div className="hero2__inner">
            <p className="eyebrow">We've got you covered — coast to coast</p>
            <h1><span className="l1">Nationwide</span><span className="l2">FREIGHT SOLUTIONS</span></h1>
            <p className="hero2__sub">Trucking &amp; logistics, DELIVERED WITH CARE</p>
            <p className="hero2__lead">Logistics Moshlay Creatives is a reliable transport company that provides transportation services to help businesses move their items from one location to another across the country. We handle every shipment effectively from start to finish at affordable prices.</p>
            <div className="hero2__cta">
              <Link className="btn btn--amber" to="/contact">Request a Free Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <Link className="btn btn--ghost" to="/services">Explore Services</Link>
            </div>
          </div>
        </div>
        <span className="hero2__scroll" aria-hidden="true"></span>
      </section>



      <section className="section introv2">
        <div className="wrap">
          <div className="introv2__grid">
            <div className="introv2__media reveal">
              <img src="/images/sectionimage.png" alt="Nationwide Transport Services fleet on the road" />
              {/* <div className="introv2__stat"><b>10</b><span>Offices<br />Nationwide</span></div> */}
            </div>
            <div className="reveal" style={{ "--d": ".12s" }}>
              <p className="eyebrow">Nationwide Transport Services</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)" }}>LOGISTICS SOLUTIONS DESIGNED AROUND YOUR BUSINESS</h2>
              <span className="kicker-rule"></span>
              <p style={{ marginTop: "22px" }}>At Logistics Moshlay Creatives, we offer reliable transportation and freight solutions that are designed to meet your shipping requirements. Whether you need regular cargo, heavy hauling, or a nationwide delivery service, our team manages each delivery with care and clear communication from start to finish.</p>
              <ul className="feat-list">
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="15" height="11" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></svg></span><div><h4>FREIGHT FOR EVERY ROUTE</h4><p>From small shipments up to large cargo loads, we will find the best transport solution to move your cargo in a safe and timely way.</p></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17.5" cy="9" r="2.6" /><path d="M16 20a5 5 0 0 1 5-5" /></svg></span><div><h4>DEDICATED SUPPORT TEAM</h4><p>Our logistics experts coordinate quotes, pickups, tracking and delivery updates so that you can always track where your delivery is.</p></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></svg></span><div><h4>SAFE &amp; RELIABLE HANDLING</h4><p>Each load is handled with care, reliable carriers, and expert dispatch support to ensure your cargo is safe throughout the entire journey.</p></div></li>
              </ul>
              <Link className="btn btn--amber" to="/services">See all services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Point banner */}

      <section className="section--tight badges">
        <div className="wrap">
          <div className="badges__grid reveal">
            <div className="badge">
              <div className="badge__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <p>Multiple Locations Nationwide</p>
            </div>
            <div className="badge">
              <div className="badge__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
              <p>7-Day Customer Service Extended Hours</p>
            </div>
            <div className="badge">
              <div className="badge__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17.5" cy="9" r="2.6" /><path d="M16 20a5 5 0 0 1 5-5" /></svg></div>
              <p>One-on-One Logistics Specialists</p>
            </div>
            <div className="badge">
              <div className="badge__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></div>
              <p>Flexible Payment Options</p>
            </div>
            <div className="badge">
              <div className="badge__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 22l1-6L3.3 9.4l6-.9z" /></svg></div>
              <p>5 / 5 Star Rated Business</p>
            </div>
          </div>
        </div>
      </section>


      {/* our Services Section */}

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
            <Link className="svc-card reveal" ><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10" /><path d="M9 19v-6h6v6" /></svg></div><h3>Agriculture Transport</h3><p>We help farms and agricultural businesses by providing transportation for equipment, supplies and bulk products. Our logistics team helps in moving agricultural goods safely and on time.</p></Link>
            <Link className="svc-card reveal" ><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></div><h3>Power-Only Transport</h3><p>Already have a trailer? Our power-only transport service will connect you with the right driver and truck to transport your trailer with ease while we manage the coordination and dispatch support.</p></Link>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}

      <section className="section introband introband--navy">
        <div className="wrap">
          <div className="xp__grid reveal">
            <div>
              <p className="eyebrow">Customer Experience</p>
              <h2 className="h-lg" style={{ marginBottom: "14px" }}>A RELIABLE LOGISTICS PARTNER FOR EVERY SHIPMENT</h2>
              <p>At Logistics Moshlay Creatives, every shipment is handled with careful planning, clear communication, and dedicated support. From the first quote to final delivery, our team stays with you to ensure that the process is simple and easy.</p>
              <p>We spend time understanding the cargo details, pickup details, delivery requirements, schedule, and route before making arrangements for transportation. This helps us to avoid delays, handle every aspect properly, and keep your freight moving smoothly.</p>
            </div>
            <div>
              <p className="eyebrow">What sets us apart</p>
              <h2 className="h-lg" style={{ marginBottom: "14px" }}>Why clients choose NTS</h2>
              <ul className="apart-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Effort to fulfill all your needs</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Individualized solutions</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Dedicated load specialists</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Responsive support reps</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>A skilled finance department</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>An array of payment options</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Experienced drivers</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Cost-effective shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured reviews Section */}

      <section className="section reviews2">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "680px", marginBottom: "48px" }}>
            <p className="eyebrow">Featured reviews</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>Trusted by shippers nationwide</h2>
          </div>
          <div className="rev2-grid">
            <figure className="rev2-card reveal"><div className="stars">★★★★★</div><blockquote>Nationwide exceeded expectations. My specialist was the best person for the job — clear, fast and on top of every detail from quote to delivery.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">N</span><span><span className="who">Nick</span><br /><span className="src"></span></span></figcaption></figure>
            <figure className="rev2-card reveal" style={{ "--d": ".1s" }}><div className="stars">★★★★★</div><blockquote>An issue came up and my rep responded quickly and efficiently. Positive and understandable the entire time. I happily recommend this business.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">DG</span><span><span className="who">Davidinho G.</span><br /><span className="src"></span></span></figcaption></figure>
            <figure className="rev2-card reveal" style={{ "--d": ".2s" }}><div className="stars">★★★★★</div><blockquote>Needed quick delivery and they came through. Top notch service — quick, easy and awesome to deal with. Would highly recommend to anyone.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">VA</span><span><span className="who">Vic Adams</span><br /><span className="src"></span></span></figcaption></figure>
            <figure className="rev2-card reveal"><div className="stars">★★★★★</div><blockquote>We moved machinery between warehouses and it went perfectly. Our coordinator did a phenomenal job keeping everything on schedule.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">DS</span><span><span className="who">designLEE Studio</span><br /><span className="src"></span></span></figcaption></figure>
            <figure className="rev2-card reveal" style={{ "--d": ".1s" }}><div className="stars">★★★★★</div><blockquote>They moved a 100-year-old caboose across several states for me. Beautifully coordinated with frequent, friendly communication throughout.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">MB</span><span><span className="who">Martha Burke</span><br /><span className="src"></span></span></figcaption></figure>
            <figure className="rev2-card reveal" style={{ "--d": ".2s" }}><div className="stars">★★★★★</div><blockquote>A direct quote with no hidden fees, regular updates and photos along the way. Genuinely helpful from start to finish — highly recommend.</blockquote><figcaption className="rev2-foot"><span className="rev2-av">JR</span><span><span className="who">Jared Rickerson</span><br /><span className="src"></span></span></figcaption></figure>
          </div>
        </div>
      </section>

      {/* Reach Section */}

      <section className="world">
        <div className="wrap">
          <div className="world__split">
            <div className="world__content reveal">
              <p className="eyebrow">Reach</p>
              <h2 className="h-xl" style={{ marginBottom: "18px" }}>MOVING FREIGHT ACROSS EVERY DESTINATION</h2>
              <p>Nationwide Transport Services has built a global reputation for reliable transport of heavy machinery, equipment, freight, vehicles and more. We work with clients in agriculture, oil and natural gas, excavating and construction to move entire fleets — from North America to remote and undeveloped territory anywhere on the map. Expert heavy-equipment shipment is our specialty, from oversize transport to hot shot trucking.</p>
              <div className="world__links">
                <Link className="btn btn--amber" to="/services">Our Services</Link>
              </div>
            </div>
            <div className="world__media">
              <img src="/images/reach.jpeg" alt="Nationwide freight transport across destinations" />
            </div>
          </div>
        </div>
      </section>


      <LinkedInBanner />
    </>
  );
}
