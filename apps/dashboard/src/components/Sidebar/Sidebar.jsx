import { useState } from "react";

import logoIcon from "../../assets/images/logo-opspilot.svg";
import sarahImage from "../../assets/images/sarah-image.png";

import {
  SquaresFour,
  FileText,
  Folder,
  CheckSquare,
  UsersThree,
  ChartBar,
  Plug,
  Gear,
  Question,
  List,
  X,
} from "@phosphor-icons/react";

import "./Sidebar.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: SquaresFour, active: true },
  { label: "Briefing", icon: FileText },
  { label: "Documents", icon: Folder },
  { label: "Tasks", icon: CheckSquare },
  { label: "Meetings", icon: UsersThree },
  { label: "Reports", icon: ChartBar },
  { label: "Integrations", icon: Plug },
];

/**
 * Admin dashboard sidebar — logo, primary nav,
 * settings/help, and user profile.
 *
 * On mobile, the navigation can be opened
 * using the hamburger menu.
 */

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__top">
        {/* Logo */}
        <div className="sidebar__logo">
          <img
            src={logoIcon}
            alt="OpsPilot AI"
            className="sidebar__logo-icon"
          />

          <div className="sidebar__logo-text">
            <span className="sidebar__logo-title">
              OpsPilot AI
            </span>

            <span className="sidebar__logo-subtitle">
              Enterprise Assistant
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sidebar__menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`sidebar__nav-item ${
                active ? "sidebar__nav-item--active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="sidebar__bottom">
        <a
          href="#"
          className="sidebar__nav-item"
          onClick={() => setMenuOpen(false)}
        >
          <Gear size={20} />
          <span>Settings</span>
        </a>

        <a
          href="#"
          className="sidebar__nav-item"
          onClick={() => setMenuOpen(false)}
        >
          <Question size={20} />
          <span>Help</span>
        </a>

        <div className="sidebar__profile">
          <img
            src={sarahImage}
            alt="Sarah Connor"
            className="sidebar__profile-avatar"
          />

          <div className="sidebar__profile-info">
            <span className="sidebar__profile-name">
              Sarah Connor
            </span>

            <span className="sidebar__profile-email">
              sarah.c@enterprise.com
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}