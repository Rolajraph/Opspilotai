import opsPilotIcon from "../../assets/images/logo-opspilot.svg";
import efficiencyTrend from "../../assets/images/efficiency-trend.png";
import attendance from "../../assets/images/attendance.png";
import complianceScore from "../../assets/images/compliance-score-gauge.png";
import upcomingMeetings from "../../assets/images/upcoming-meetings.png";
import "./DashboardPreview.css";

export default function DashboardPreview() {
  return (
    <section className="dashboard-preview">
      <p className="dashboard-preview__intro">
        Whether you&apos;re managing healthcare teams, SMEs, educational
        institutions, or enterprise operations, OpsPilot AI helps your
        organization stay informed, aligned, and productive.
      </p>

      <div className="dashboard-preview__canvas">
        <img
          src={efficiencyTrend}
          alt="Efficiency trends chart"
          className="dp-card dp-card--efficiency"
        />

        <div className="dp-card dp-card--attendance">
          <img src={attendance} alt="Attendance percentage" />
        </div>

        <div className="dp-card dp-card--icon">
          <img src={opsPilotIcon} alt="" className="dp-card--icon-img" />
        </div>

        <div className="dp-card dp-card--compliance">
          <img src={complianceScore} alt="Compliance score gauge" />
        </div>

        <div className="dp-card dp-card--meetings">
          <img src={upcomingMeetings} alt="Upcoming meetings list" />
        </div>
      </div>
    </section>
  );
}