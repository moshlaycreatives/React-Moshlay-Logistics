import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./icons";

function Brand() {
  return (
    <Link className="brand footer-brand-link" to="/" aria-label="Nationwide Transport Services home">
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

function FooterCol({ title, items }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {items.map((i) => (
          <li key={i.label}><Link to={i.to}>{i.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

const FOOTER_CONTACT = [
  { icon: "phone", label: "(704) 832-9459", href: "tel:7048329459" },
  { icon: "mail", label: "logistics@moshlaycreatives.com", href: "mailto:logistics@moshlaycreatives.com" },
  { icon: "mapPin", label: "Medford, Oregon USA" },
];

function openPhoneDialer(event, href) {
  event.preventDefault();
  window.location.href = href;
}

function FooterContact() {
  return (
    <div className="footer-col footer-col--contact">
      <h4>Contact</h4>
      <ul className="footer-contact">
        {FOOTER_CONTACT.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="footer-contact__link"
                onClick={item.icon === "phone" ? (event) => openPhoneDialer(event, item.href) : undefined}
              >
                <span className={`footer-contact__icon footer-contact__icon--${item.icon}`} aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <span>{item.label}</span>
              </a>
            ) : (
              <div className="footer-contact__item">
                <span className={`footer-contact__icon footer-contact__icon--${item.icon}`} aria-hidden="true">
                  <Icon name={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>Logistics Moshlay Creatives helps businesses transport equipment, vehicles, and cargo safely and on time. We offer professional dispatch support, reliable transporters and smooth coordination from start to finish.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="https://www.instagram.com/moshlaylogistics/" target="_blank" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>
          <FooterCol title="Company" items={[
            { label: "About Us", to: "/about" },
            { label: "Service", to: "/services" },
            { label: "News", to: "/news" },
            { label: "Knowledge Base", to: "/knowledge-base" },
            { label: "Contact", to: "/contact" },

          ]} />
          <FooterContact />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Logistics Moshlay Creatives. All rights reserved.</span>
          <span><a href="#">Terms &amp; Conditions</a> &nbsp;·&nbsp; <a href="#">Privacy Policy</a></span>
        </div>
      </div>
    </footer>
  );
}
