import { useState } from "react";
import axios from "axios";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import DemoForm from "../components/DemoForm";
import LinkedInBanner from "../components/LinkedInBanner";
import { endpoints } from "../endpoint";

const initialFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  business_name: "",
  shipping_frequency: "",
  message: "",
  consent: false,
};

export default function BecomeACustomer() {
  usePageTitle("Become a Customer | Nationwide Transport Services", "Ship often or move large quantities? Apply for a Nationwide Transport Services line of transport credit and switch to simple monthly billing.");

  const [formData, setformData] = useState(initialFormData);

  function update(field) {
    return (e) => {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setformData((prev) => ({ ...prev, [field]: value }));
    };
  }

  async function handleSubmit() {
    await axios.post(endpoints.CustomerApi, formData);
    setformData(initialFormData);
  }
  return (
    <>

      <section className="phero">
        <div className="wrap">
          <p className="crumbs"><Link to="/">Home</Link> / <b>Become a Customer</b></p>
          <h1 className="h-display">Become a Customer</h1>
          <p>Ship with us or transport large quantities, our transport credit option makes the process easy. Instead of paying for each load separately, you can handle your shipments with simple monthly billing. This keeps your business moving without payment delays.</p>
        </div>
      </section>


      <section className="section">
        <div className="wrap">
          <div className="introv2__grid">
            <div className="introv2__media reveal">
              <img src="/images/customerSection.jpeg" alt="Apply for a transport line of credit" />
              {/* <div className="introv2__stat"><b>0</b><span>Payments<br />Per Load</span></div> */}
            </div>
            <div className="reveal" style={{ "--d": ".12s" }}>
              <p className="eyebrow">For shippers &amp; repeat customers</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)" }}>A transport line of credit</h2>
              <span className="kicker-rule"></span>
              <p style={{ marginTop: "22px" }}>When you move loads regularly, you need a transport company that makes the process easy, safe, and reliable. Logistics Moshlay Creatives helps businesses move cargo with proper planning, reliable support and a careful approach from pickup to delivery.</p>
              <p>Paying for each load will take time and slow down your process. With a transportation credit line, regular shippers can move loads now and receive a simple monthly bill for all completed services. It helps you keep your payments in order, reduces payment hassle and you focus on managing your company while we manage the transport process.</p>
              <div className="credit-note reveal"><b>Good to know:</b> a line of credit is <b>not required</b> to ship with NTS or any of our brands. It's simply a benefit we offer to make life easier for clients who transport frequently.</div>
            </div>
          </div>
        </div>
      </section>


      <section className="section introv2">
        <div className="wrap">
          <div className="introv2__grid">
            <div className="reveal">
              <p className="eyebrow">Why apply</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)" }}>Benefits of a credit application</h2>
              <ul className="credit-benefits">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Saves you valuable time</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Pick up freight on demand</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>No tedious payments per load</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Billing statements are monthly</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Lets you focus on what matters</li>
              </ul>
            </div>
            <div className="reveal" style={{ "--d": ".12s" }}>
              <p className="eyebrow">How it works</p>
              <h2 className="h-lg" style={{ color: "var(--navy-800)" }}>Three simple steps</h2>
              <div className="steps" style={{ gridTemplateColumns: "1fr", marginTop: "26px" }}>
                <div className="step"><div className="step__n">01</div><h4>Apply</h4><p>Fill out the credit application form below with your business details and shipping frequency.</p></div>
                <div className="step"><div className="step__n">02</div><h4>We review</h4><p>A specialist reviews your application and follows up to go over the details with you directly.</p></div>
                <div className="step"><div className="step__n">03</div><h4>Ship on credit</h4><p>Once approved, ship on demand and receive one simple monthly statement instead of per-load payments.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ maxWidth: "640px", marginBottom: "40px" }}>
            <p className="eyebrow">Get started</p>
            <h2 className="h-xl" style={{ color: "var(--navy-800)" }}>Transport credit application</h2>
            <p className="lead center">Complete the form and a specialist will be in touch. Prefer email? Send your application to <a href="mailto:creditapplications@ntslogistics.com" style={{ color: "var(--amber-700)", fontWeight: "600" }}>logistics@moshlaycreatives.com</a>.</p>
          </div>
          <DemoForm
            className="cform reveal"
            style={{ maxWidth: "760px", marginInline: "auto" }}
            noteText="Thanks! Your application has been received — a specialist will reach out shortly."
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="field-group"><label htmlFor="fname">First Name</label><input id="fname" type="text" placeholder="Enter first name" value={formData.first_name} onChange={update("first_name")} required /></div>
              <div className="field-group"><label htmlFor="lname">Last Name</label><input id="lname" placeholder="Enter last name" type="text" value={formData.last_name} onChange={update("last_name")} required /></div>
            </div>
            <div className="row">
              <div className="field-group"><label htmlFor="phone">Phone</label><input id="phone" type="tel" placeholder="(000) 000-0000" value={formData.phone} onChange={update("phone")} required /></div>
              <div className="field-group"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@company.com" value={formData.email} onChange={update("email")} required /></div>
            </div>
            <div className="row">
              <div className="field-group"><label htmlFor="biz">Business Name</label><input id="biz" type="text" placeholder="Enter business name" value={formData.business_name} onChange={update("business_name")} /></div>
              <div className="field-group"><label htmlFor="freq">Shipping Frequency</label>
                <input list="freqs" id="freq" placeholder="Select or type" value={formData.shipping_frequency} onChange={update("shipping_frequency")} />
                <datalist id="freqs"><option>Single Shipment</option><option>Once a Month</option><option>Once a Week</option><option>Multiple Times a Week</option></datalist>
              </div>
            </div>
            <div className="field-group"><label htmlFor="msg">Message</label><textarea id="msg" placeholder="Tell us about your typical shipments…" value={formData.message} onChange={update("message")}></textarea></div>
            <label className="consent"><input type="checkbox" checked={formData.consent} onChange={update("consent")} required /><span>By submitting this form, I consent to be contacted by Nationwide Transport Services regarding my application. Message and data rates may apply.</span></label>
            <button className="btn btn--amber" type="submit">Submit Application
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </DemoForm>
        </div>
      </section>


      <LinkedInBanner />
    </>
  );
}
