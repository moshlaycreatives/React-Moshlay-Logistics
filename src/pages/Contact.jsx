import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm";
import LinkedInBanner from "../components/LinkedInBanner";

export default function Contact() {
  usePageTitle("Contact Us | Nationwide Transport Services", "Contact Nationwide Transport Services for a free shipping quote. A dedicated specialist will get back to you fast.");

  return (
    <>
      
      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>Contact</b></p>
          <h1 className="h-display">Contact Us</h1>
          <p>Whatever your transportation needs are, Nationwide Transport Services can help. Reach out and a dedicated specialist will get back to you fast.</p>
        </div>
      </section>
      
      
      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            
            <DemoForm className="cform reveal">
              <h2 className="h-lg" style={{color:"var(--navy-800)",marginBottom:"6px"}}>Request a Quote</h2>
              <p style={{color:"var(--muted)",margin:"0 0 24px"}}>Fill out the form and we'll be in touch with a free, no-obligation estimate.</p>
      
              <div className="row">
                <div className="field-group"><label htmlFor="fname">First Name</label><input id="fname" type="text" placeholder="Enter first name" required /></div>
                <div className="field-group"><label htmlFor="lname">Last Name</label><input id="lname" type="text" placeholder="Enter last name" required /></div>
              </div>
              <div className="row">
                <div className="field-group"><label htmlFor="origin">Shipping Origin</label><input id="origin" type="text" placeholder="City, State" required /></div>
                <div className="field-group"><label htmlFor="dest">Shipping Destination</label><input id="dest" type="text" placeholder="City, State" required /></div>
              </div>
              <div className="row">
                <div className="field-group"><label htmlFor="date">Preferred Ship Date</label><input id="date" type="date" /></div>
                <div className="field-group"><label htmlFor="phone">Phone</label><input id="phone" type="tel" placeholder="(000) 000-0000" required /></div>
              </div>
              <div className="field-group"><label htmlFor="email">Email Address</label><input id="email" type="email" placeholder="you@example.com" required /></div>
              <div className="field-group"><label htmlFor="comments">Comments / What are you shipping?</label><textarea id="comments" placeholder="Tell us about your load — dimensions, weight, vehicle or equipment type, timeline…"></textarea></div>
      
              <label className="consent"><input type="checkbox" required />
                <span>By submitting this form, I consent to be contacted by Nationwide Transport Services regarding my request via phone, email or text. Message and data rates may apply.</span>
              </label>
      
              <button className="btn btn--amber" type="submit">Send My Request
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
            </DemoForm>
      
            
            <aside className="cinfo">
              <div className="cinfo__card reveal">
                <h3>Get in touch</h3>
                <div className="cinfo__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                  <span><a href="tel:8772783135">(704) 832-9459</a><br /><small style={{ color: "var(--on-dark-muted)" }}>Mon–Fri 8am–8pm · Sat 9am–4pm</small></span></div>
                <div className="cinfo__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                  <span><a href="mailto:info@ntslogistics.com">logistics@moshlaycreatives.com</a></span></div>
                <div className="cinfo__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Medford, Oregon USA</span></div>
              </div>
      
              <div className="cinfo__panel reveal">
                <h3>Become a customer</h3>
                <p>Ship with us often? Apply for a line of transport credit and switch to simple monthly billing instead of paying per load.</p>
                <Link className="btn btn--outline" to="/become-a-customer">Become a Customer</Link>
              </div>
      
              <div className="cinfo__panel reveal">
                <h3>Looking for a shipping estimate?</h3>
                <div className="rating"><span className="stars">★★★★★</span> &nbsp;5 / 5 rated</div>
                <p>Get a fast, free quote with no obligation. Our specialists respond quickly with a clear, all-in price.</p>
                <a className="btn btn--amber" href="tel:8772783135">Call for a Quote</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      
      <LinkedInBanner />
    </>
  );
}
