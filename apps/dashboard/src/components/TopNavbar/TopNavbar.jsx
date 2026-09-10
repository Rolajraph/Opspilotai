import userAvatar from "../../assets/images/sarah-image.png";
import { MagnifyingGlass, Bell, Briefcase } from "@phosphor-icons/react";
import "./TopNavbar.css";

/**
 * Top navbar sitting above the dashboard's main content —
 * search bar, notification bell, user avatar.
 */
export default function TopNavbar() {
  return (
    <header className="top-navbar">
      <div className="top-navbar__search">
        <MagnifyingGlass size={18} color="#464554" />
        <input
          type="text"
          placeholder="Search resources..."
          className="top-navbar__search-input"
        />
      </div>

      <div className="top-navbar__actions">
        <button
          type="button"
          className="top-navbar__icon-btn"
          aria-label="Notifications"
        >
          <Bell size={19} color="#464554" />
        </button>
        <button
          type="button"
          className="top-navbar__icon-btn"
          aria-label="Workspace"
        >
          <Briefcase size={19} color="#464554" />
        </button>
        <img
          src={userAvatar}
          alt="Sarah Connor"
          className="top-navbar__avatar"
        />
      </div>
    </header>
  );
}
