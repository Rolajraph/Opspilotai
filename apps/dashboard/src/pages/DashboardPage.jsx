import Sidebar from "../components/Sidebar/Sidebar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import StatCards from "../components/StatCards/StatCards";
import BusinessClients from "../components/BusinessClients/BusinessClients";
import UserManagement from "../components/UserManagement/UserManagement";
import SystemHealth from "../components/SystemHealth/SystemHealth";
import "./DashboardPage.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-page__right">
        <TopNavbar />
        <main className="dashboard-page__main">
          <DashboardHeader />
          <StatCards />
          <div className="dashboard-page__content-grid">
            <div className="dashboard-page__left-column">
              <BusinessClients />
              <UserManagement />
            </div>
            <div className="dashboard-page__right-column">
              <SystemHealth />
            </div>
          {/* Right column (System Health) gets added here next */}
          </div>
        </main>
      </div>
    </div>
  );
}
