import { useState } from "react";
import logoOpsPilot from "../../assets/images/logo-opspilot.svg";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases" },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "SMEs", href: "/solutions/smes" },
      { label: "Education", href: "/solutions/education" },
      { label: "Legal & Professional Services", href: "/solutions/legal" },
      { label: "Enterprise Organizations", href: "/solutions/enterprise" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" aria-label="OpsPilot AI home">
          <img src={logoOpsPilot} alt="" className="navbar__logo-img" />
          <span className="navbar__logo-text">OpsPilot AI</span>
        </a>

        <nav
          className={`navbar__links ${isMobileMenuOpen ? "navbar__links--open" : ""}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="navbar__dropdown"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  type="button"
                  className="navbar__link navbar__dropdown-trigger"
                  aria-expanded={isSolutionsOpen}
                  onClick={() => setIsSolutionsOpen((open) => !open)}
                >
                  {link.label}
                  <ChevronIcon open={isSolutionsOpen} />
                </button>
                {isSolutionsOpen && (
                  <div className="navbar__dropdown-menu" role="menu">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="navbar__dropdown-item"
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="navbar__actions">
          <a href="/signin" className="navbar__signin">
            Sign In
          </a>
          <a href="/request-demo" className="navbar__cta">
            Request a Demo
          </a>
        </div>

        <button
          type="button"
          className="navbar__mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`navbar__chevron ${open ? "navbar__chevron--open" : ""}`}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
