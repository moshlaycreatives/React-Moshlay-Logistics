import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import LinkedInBanner from "../components/LinkedInBanner";

export default function Services() {
  usePageTitle("Trucking Services | Nationwide Transport Services", "Full-service third-party logistics broker. Freight shipping, heavy hauling, auto transport and more across the US, Canada and Mexico.");

  return (
    <>

      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>Services</b></p>
          <h1 className="h-display">Services</h1>
          <p>Logistics Moshlay Creatives is a full-service transport company offering local, national, and international transport services. We help businesses move containers, vehicles, heavy equipment and all kinds of cargo safely with efficient planning and a clear process from pick-up to delivery.
          </p>

          <Link className="btn btn--amber" to="/contact" style={{ marginTop: "36px" }}>Get Quote</Link>
        </div>
      </section>


      {/* Home Services section */}
      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "680px", marginBottom: "48px" }}>
            <p className="eyebrow">What we move</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>OUR LOGISTICS SERVICES</h2>
            <p className="lead center">We offer reliable transport and freight solutions that are specifically tailored to your requirements. From local delivery to nationwide transport of cargo, select the best option for your schedule, timeframe, and budget.</p>
          </div>
          <div className="svc-grid">
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="15" height="11" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></svg></div><h3>Freight Shipping</h3><p>We provide reliable freight transportation for companies of all sizes. From small cargos to large commercial loads, our staff helps ensure safe, timely, and cost-effective transportation on various routes.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17V7h11v10" /><path d="M14 11h4l3 3v3h-7z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Heavy Hauling</h3><p>Our heavy hauling services are designed to handle oversized and heavyweight shipping. We coordinate the right equipment, route planning and support for the carrier to move your bulky cargo with attention to detail.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-5h11l3 5" /><path d="M2 13h20v4H2z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg></div><h3>Auto Transportation</h3><p>We provide safe transportation for vehicles, vans, cars, and other auto units. Whether you need a single vehicle transportation or multi-unit transport, we make the process easy and secure.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="1" /><path d="M6 7v10M10 7v10M14 7v10M18 7v10" /></svg></div><h3>Container Shipping</h3><p>Our shipping containers service helps businesses efficiently move their goods with reliable transportation solutions. We provide container movement services for inventory, commercial cargo and bulk shipping.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14h20v3H2z" /><path d="M5 14V9h6v5" /><circle cx="7" cy="18.5" r="1.6" /><circle cx="17" cy="18.5" r="1.6" /></svg></div><h3>Flatbed Trucking</h3><p>Flatbed trucking is perfect for construction materials, machinery, large equipment and other freight that need open deck loading. We can arrange reliable carriers for safe and secure delivery.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div><h3>International Export</h3><p>We help coordinate international shipping requirements with effective planning and expert logistical support. From export cargo to cross-border movements, our team keeps the process organized.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10" /><path d="M9 19v-6h6v6" /></svg></div><h3>Agriculture Transport</h3><p>We help farms and agricultural businesses by providing transportation for equipment, supplies and bulk products. Our logistics team helps in moving agricultural goods safely and on time.</p></Link>
            <Link className="svc-card reveal" to="/services"><div className="svc-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg></div><h3>Power-Only Transport</h3><p>Already have a trailer? Our power-only transport service will connect you with the right driver and truck to transport your trailer with ease while we manage the coordination and dispatch support.</p></Link>
          </div>
        </div>
      </section>


      <section className="section--tight">
        <div className="wrap">
          <div className="svc-cta reveal">
            <span className="brand__mark"><svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" /></svg></span>
            <div>
              <h2>We're here to handle all your transport needs</h2>
              <p>Every transport — from vehicles to superloads — is handled by a highly trained shipping specialist. Contact our team today for smooth shipment and delivery.</p>
            </div>
            <div className="svc-cta__act">
              <a className="btn btn--amber" href="tel:8772783135">(704) 832-9459</a>
              <Link className="btn btn--ghost" to="/contact">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>



      {/* Auto & Specialty Vehicle */}

      <section className="section introband">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "620px", marginBottom: "10px" }}>
            <p className="eyebrow">Everything we move</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>All Our Services</h2>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-5h11l3 5" /><path d="M2 13h20v4H2z" /><circle cx="6.5" cy="18.5" r="1.8" /><circle cx="17.5" cy="18.5" r="1.8" /></svg><h3>Auto &amp; Specialty Vehicle</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>Auto Transport</h4><p>We offer safe and reliable SUV, car and other vehicle transport. Whether it is a quick move or a nationwide delivery, we make the move process simple from pickup to delivery.</p></div>
              <div className="svc-min reveal"><h4>BOAT TRANSPORT</h4><p>Our boat transport service helps move boats safely and efficiently. Our reliable transport partners ensure your boat arrives safely and on time at its destination.
              </p></div>
              <div className="svc-min reveal"><h4>ELECTRIC VEHICLE TRANSPORT</h4><p>We provide secure transportation solutions for electric vehicles. Our team understands the importance of safe management and the appropriate coordination of EVs during the entire process.</p></div>
              <div className="svc-min reveal"><h4>Food Truck Transport</h4><p>We help get food trucks moved safely so your business stays on track. Our staff ensures that each aspect of your vehicle’s pickup and delivery is taken with care.</p></div>
              <div className="svc-min reveal"><h4>GOLF CART TRANSPORT</h4><p>We offer simple and reliable golf cart transport for single carts or multiple carts. Whether for personal, business, or events, we help move the carts safely and efficiently.</p></div>
              <div className="svc-min reveal"><h4>Driveaway Services</h4><p>Our driveaway service is a convenient option for transporting vehicles from one location to another. Professional drivers help you in delivering your vehicle in a safe, smooth and on time.</p></div>
            </div>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18l2-6h14l2 6" /><path d="M12 3v9M8 7h8" /></svg><h3>Container &amp; Ocean Transport</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>Breakbulk Shipping</h4><p>When your item is too large to fit in the standard container, we arrange safe breakbulk shipping with proper planning, handling and route coordination.</p></div>
              <div className="svc-min reveal"><h4>CONTAINER TRANSPORT</h4><p>We help to safely and efficiently transport containers of all sizes for businesses, providing delivery, pickup and transport support based on your location and timeframe.</p></div>
              <div className="svc-min reveal"><h4>Mainland to Hawaii Containers</h4><p>We offer reliable container transport support from the mainland to Hawaii. We will guide you through the whole process, with clear communication and detailed coordination.</p></div>
              <div className="svc-min reveal"><h4>OCEAN TRANSPORT SUPPORT</h4><p>Our ocean transportation support helps companies to move their goods along long-distance and international lines. We help with coordination, planning and a smooth flow throughout the process of shipping.</p></div>
              <div className="svc-min reveal"><h4>POD TRANSPORT SERVICES</h4><p>We offer commercial and residential pod transportation to assist you in moving storage units and business equipment with care and on time.</p></div>
            </div>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="15" height="11" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18" r="2" /><circle cx="18.5" cy="18" r="2" /></svg><h3>Shipping &amp; TRUCKING SERVICES</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>Drayage Trucking</h4><p>We provide drayage trucking services for short-distance travels between terminals, ports, warehouses and business locations with dependable coordination and timely pickup service.</p></div>
              <div className="svc-min reveal"><h4>Dry Van Trucking</h4><p>Our dry van trucking services keep your goods safe during transportation and provide a secure alternative for palletized, boxed and other general business cargo.</p></div>
              <div className="svc-min reveal"><h4>Flatbed Trucking</h4><p>Our Flatbed transport for oversized and heavy items that require open-deck loading, safety standards and careful handling during transport.</p></div>
              <div className="svc-min reveal"><h4>GENERAL TRUCKING</h4><p>Our general trucking services help businesses safely transport their goods across long and local routes, and provide clear updates from the moment of pickup to the final delivery.</p></div>
              <div className="svc-min reveal"><h4>FTL Trucking</h4><p>For larger loads, our full truckload service offers your cargo space that is dedicated with direct movement and smooth coordination from beginning to end.</p></div>
              <div className="svc-min reveal"><h4>LCL Trucking</h4><p>Our less-than-container-load service is a great option for moving smaller loads that don’t need a full truck. We help you move smaller loads economically by sharing space and making the process easy and well-coordinated.</p></div>
              <div className="svc-min reveal"><h4>Lowboy Trucking</h4><p>If you have heavy, tall or large equipment that can’t be transported on an ordinary trailer, our lowboy trucking service is the solution. We provide the right transportation support to move your equipment in a safe and efficient manner.</p></div>
              <div className="svc-min reveal"><h4>LTL Trucking</h4><p>Our less-than-truckload service is perfect for smaller shipments that need to be transported at a reasonable cost by sharing the space of a truck with other cargo.</p></div>
              <div className="svc-min reveal"><h4>Oversized &amp; Heavy Hauling</h4><p>We help in moving large, tall, wide and heavy loads with an organized and well-planned coordination. Our team manages the details necessary to ensure the transport process is smooth from pick-up to delivery.</p></div>
              <div className="svc-min reveal"><h4>Power Only Trucking</h4><p>If you already have a trailer ready, we’ll provide the driver and truck to take it. This is a simple and flexible solution for businesses that need fast transport support.</p></div>
              <div className="svc-min reveal"><h4>TRANSPORTATION OF COMMERCIAL TRUCKS</h4><p>We safely transport work vehicles, commercial trucks and fleet vehicles. Whether you are shipping one truck or a fleet of vehicles, our team will ensure you ship on time and safely.</p></div>
            </div>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg><h3>INTERNATIONAL TRANSPORT</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>Canadian Transport</h4><p>We provide reliable transportation services to and from Canada to help businesses in moving vehicles, goods and equipment with a proper plan, good communication and smooth coordination.</p></div>
              <div className="svc-min reveal"><h4>International Import &amp; Export</h4><p>Our team helps with planning, document management, and reliable communication of international import and export transportation from pickup to final delivery.</p></div>
              <div className="svc-min reveal"><h4>MEXICO TRANSPORTATION SERVICES</h4><p>Our dependable transportation support to and from Mexico. We make crossing the border easy through great communication, trusted partners and updates.</p></div>
            </div>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V9l6 4V9l6 4V4h6v16z" /></svg><h3>INDUSTRY-SPECIFIC TRANSPORT</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>AEROSPACE TRANSPORT</h4><p>Our transportation service for aerospace equipment and sensitive cargo is carefully planned and coordinated throughout the whole process.</p></div>
              <div className="svc-min reveal"><h4>Construction Equipment</h4><p>We help you move bulldozers, excavators, lifts, and other construction equipment safely so your machines are ready for the construction site.</p></div>
              <div className="svc-min reveal"><h4>Farm Equipment Hauling</h4><p>We offer transport support for tractors, tillers and other farm machinery. We move equipment for farmers and agricultural businesses safely and on time.</p></div>
              <div className="svc-min reveal"><h4>MANUFACTURING TRANSPORTATION</h4><p>We move equipment, supplies and finished goods for manufacturing companies efficiently, with seamless planning.</p></div>
              <div className="svc-min reveal"><h4>MINING EQUIPMENT TRANSPORT</h4><p>We transport heavy mining equipment and other supplies with careful planning for large loads, remote locations and difficult routes.</p></div>
              <div className="svc-min reveal"><h4>PALLET TRANSPORTATION</h4><p>We move palletized goods fast and safely. Every pallet is handled with care and on time.</p></div>
              <div className="svc-min reveal"><h4>Furniture Transport</h4><p>We move your furniture with care, from pick-up to drop-off. We protect your furniture during transport, loading and drop-off.</p></div>
            </div>
          </div>

          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /></svg><h3>TRANSPORT &amp; SUPPORT SERVICES</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>TRANSPORT COORDINATION</h4><p>Our transport coordination is reliable with clear communications and one point of contact to help each shipment move smoothly from pickup to delivery.</p></div>
              <div className="svc-min reveal"><h4>PERMIT ACQUIRING</h4><p>Our team helps you arrange the permits necessary for oversized or special loads, so that the transportation process can go without any unwanted delays.</p></div>
              <div className="svc-min reveal"><h4>Pilot Car Services</h4><p>For larger loads that need additional road support, we help coordinate pilot car services in order to ensure that the move is safe and smooth.</p></div>
              <div className="svc-min reveal"><h4>Truck Dispatch Services</h4><p>We coordinate drivers, trucks, routes and schedules to help businesses keep their transportation operations efficient, organized, and on time.</p></div>
            </div>
          </div>
          <div className="svc-cat">
            <div className="svc-cat__head reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10" /><path d="M9 19v-6h6v6" /></svg><h3>Mobile Housing Transport</h3></div>
            <div className="svc-min-grid">
              <div className="svc-min reveal"><h4>5TH WHEEL TRANSPORT</h4><p>We help you safely transport 5th wheel trailers with proper planning, the right equipment and efficient coordination from pick-up to delivery.</p></div>
              <div className="svc-min reveal"><h4>Camper Transport</h4><p>We make Camper Transport simple. We’ll move your camper from one place to another with safe handling and clear communications.</p></div>
              <div className="svc-min reveal"><h4>Mobile Home Transport</h4><p>We are reliable and efficient in moving mobile homes. We plan routes carefully and ensure safe handling throughout the entire process.</p></div>
              <div className="svc-min reveal"><h4>Modular Home Transport</h4><p>We help you move your modular home safely and with organization through a detailed plan, the right equipment and support.</p></div>
              <div className="svc-min reveal"><h4>RV TRANSPORT SERVICES</h4><p>RV transport service safely delivers recreational vehicles and motorhomes, whether it is a short or long distance delivery.</p></div>
              <div className="svc-min reveal"><h4>Shed Transport Services</h4><p>We make shed transportation simple by helping you move your shed safely with careful loading, well-planning and reliable delivery support.</p></div>
              <div className="svc-min reveal"><h4>SMALL HOME TRANSPORT</h4><p>We offer safe and well-organized small home transport to help you move your home with the right support and up-to-date information from beginning to end.</p></div>
              <div className="svc-min reveal"><h4>Travel Trailer Transport</h4><p>We provide a fast, safe, and hassle-free way to deliver trailers from driveways, storage facilities or camping sites.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Section */}

      <section className="section">
        <div className="wrap">
          <div className="about-split reveal">
            <img src="/images/servicesyou.jpeg" alt="Hauling an oversized tractor" />
            <div className="about-split__text">
              <p className="eyebrow">Tailored to you</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)", marginBottom: "14px" }}>Individualized transport services for your needs</h2>
              <p>Our nationwide trucking and hauling services are insured and fully licensed. We also have access to helpful resources, such as escort vehicles, for large loads that need them. Let the top professionals in the industry plan your shipment, hire a driver and ensure your transport arrives on time.</p>
              <p>Partner with an industry leader for smooth nationwide shipping and delivery. We offer load tracking, expert customer support and free shipping estimates for our trucking and transport services.</p>
              <a className="btn btn--amber" href="tel:8772783135" style={{ marginTop: "6px" }}>(704) 832-9459</a>
            </div>
          </div>
        </div>
      </section>


      <LinkedInBanner />
    </>
  );
}
