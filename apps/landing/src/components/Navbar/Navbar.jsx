import { useState } from "react";
import logoOpsPilot from "../../assets/images/logo-opspilot.svg";
import useCaseImage from "../../assets/images/solutions-image.png";
import solutionsImage from "../../assets/images/solutions-image.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Use Cases",
    href: "/use-cases",
    richDropdown: true,
    dropdown: [
      {
        label: "Healthcare",
        description: "Empower healthcare teams with AI-driven operations",
        href: "/use-cases/healthcare",
      },
      {
        label: "Professional Services",
        description: "Streamline client-focused operations with AI",
        href: "/use-cases/professional-services",
      },
      {
        label: "Technology",
        description:
          "Accelerate innovation by connecting teams, knowledge, and workflows",
        href: "/use-cases/technology",
      },
      {
        label: "Education",
        description: "Simplify academic and administrative operations",
        href: "/use-cases/education",
      },
      {
        label: "Manufacturing & Logistics",
        description: "Optimize production and supply chain operations",
        href: "/use-cases/manufacturing-logistics",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    richDropdown: "compact",
    dropdown: [
      {
        label: "Professional Services",
        description: "AI-Powered Operations for Professional Services",
        href: "/solutions/professional-services",
      },
      {
        label: "Technology",
        description: "AI Operations for Fast-Moving Technology Teams",
        href: "/solutions/technology",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
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
              <div className="navbar__dropdown" key={link.label}>
                <button
                  type="button"
                  className="navbar__link navbar__dropdown-trigger"
                  aria-expanded={openDropdown === link.label}
                  onClick={() =>
                    setOpenDropdown((current) =>
                      current === link.label ? null : link.label,
                    )
                  }
                >
                  {link.label}
                  <ChevronIcon open={openDropdown === link.label} />
                </button>
                {openDropdown === link.label &&
                  (link.richDropdown === "compact" ? (
                    <div
                      className="navbar__rich-dropdown navbar__rich-dropdown--compact"
                      role="menu"
                    >
                      <div className="navbar__rich-dropdown-grid navbar__rich-dropdown-grid--single">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="navbar__rich-dropdown-item"
                            role="menuitem"
                          >
                            <span className="navbar__rich-dropdown-title">
                              {item.label}
                            </span>
                            <span className="navbar__rich-dropdown-desc">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                      <img
                        src={solutionsImage}
                        alt=""
                        className="navbar__rich-dropdown-image navbar__rich-dropdown-image--compact"
                      />
                    </div>
                  ) : link.richDropdown ? (
                    <div className="navbar__rich-dropdown" role="menu">
                      <div className="navbar__rich-dropdown-grid">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="navbar__rich-dropdown-item"
                            role="menuitem"
                          >
                            <span className="navbar__rich-dropdown-title">
                              {item.label}
                            </span>
                            <span className="navbar__rich-dropdown-desc">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                      <img
                        src={useCaseImage}
                        alt=""
                        className="navbar__rich-dropdown-image"
                      />
                    </div>
                  ) : (
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
                  ))}
              </div>
            ) : (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ),
          )}

          {/* Mobile Actions Container (Includes Sign In & Demo for mobile viewports) */}
          <div className="navbar__mobile-actions">
            <a href="http://localhost:5174" className="navbar__signin navbar__signin--mobile">
              Sign In
            </a>
            <a href="/request-demo" className="navbar__cta navbar__cta--mobile">
              Request a Demo
            </a>
          </div>
        </nav>

        <div className="navbar__actions">
          <a href="http://localhost:5174" className="navbar__signin">
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