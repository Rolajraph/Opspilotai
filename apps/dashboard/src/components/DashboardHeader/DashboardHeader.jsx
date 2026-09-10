import { DownloadSimple } from "@phosphor-icons/react";
import "./DashboardHeader.css";

/**
 * "Admin Console" header card — title, system status indicator,
 * and Download Audit Log button.
 */
export default function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__text">
        <h1 className="dashboard-header__title">Admin Console</h1>
        <div className="dashboard-header__status">
          <span className="dashboard-header__status-dot" />
          <span>System Status: Operational</span>
        </div>
      </div>

      <button type="button" className="dashboard-header__download-btn">
        <DownloadSimple size={14} color="#475569" />
        Download Audit Log
      </button>
    </div>
  );
}