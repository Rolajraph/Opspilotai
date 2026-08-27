import { Icon } from "@iconify/react";
import logoOpsPilot from "../../assets/images/logo-opspilot.svg";
import footerLogo from "../../assets/images/footer-logo.png";
import "./Footer.css";

const USE_CASES = [
  "Enterprise Operations",
  "Small & Medium Businesses",
  "Education",
  "Health Care",
  "Legal & Professional",
];

const COMPANY = ["About", "Pricing", "Faq"];

const SOCIALS = [
  { label: "Twitter", icon: "prime:twitter", href: "#" },
  { label: "Instagram", icon: "selfhst:instagram", href: "#" },
  { label: "Linkedin", icon: "devicon:linkedin", href: "#" },
  { label: "Facebook", icon: "logos:facebook", href: "#" },
];

/**
 * Footer — logo + tagline, Use Case / Company / Socials columns,
 * copyright line, and the exported large "OpsPilot AI" wordmark banner.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src={logoOpsPilot} alt="" className="footer__logo-icon" />
            <span className="footer__logo-text">OpsPilot AI</span>
          </div>
          <p className="footer__tagline">
            Run your organization smarter with OpsPilot AI—an AI operating layer
            that streamlines workflows, centralizes knowledge, and transforms
            data into actionable insights.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__column-title">Use case</h3>
          <ul className="footer__list">
            {USE_CASES.map((item) => (
              <li key={item}>
                <a href="#" className="footer__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__column-title">Company</h3>
          <ul className="footer__list">
            {COMPANY.map((item) => (
              <li key={item}>
                <a href="#" className="footer__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__column-title">Socials</h3>
          <ul className="footer__list footer__list--socials">
            {SOCIALS.map(({ label, icon, href }) => (
              <li key={label}>
                <a href={href} className="footer__link footer__social-link">
                  <Icon icon={icon} width={18} height={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copyright">© Copyright 2026, All rights reserved</p>

      <img
        src={footerLogo}
        alt=""
        aria-hidden="true"
        className="footer__wordmark-img"
      />
    </footer>
  );
}
