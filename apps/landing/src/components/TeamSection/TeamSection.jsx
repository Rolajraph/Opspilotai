import { CheckCircle } from "@phosphor-icons/react";
import "./TeamSection.css";

const COLUMNS = [
  {
    title: "Powerful Features",
    items: [
      "Enterprise Analytics",
      "AI Chat Assistant",
      "Risk Detection",
      "Email & Calendar Integration",
      "Workflow Automation",
    ],
  },
  {
    title: "Connect Your Existing Tools",
    items: [
      "Microsoft 365",
      "Outlook",
      "Google Workspace",
      "Microsoft Teams",
      "Slack",
    ],
  },
  {
    title: "Enterprise Security by Design",
    items: [
      "Secure Authentication",
      "Role-Based Access Control",
      "Audit Logs",
      "Private AI Options",
      "Data Encryption",
    ],
  },
];

/**
 * "AI That Works Alongside Your Team" — badge + heading/subtext,
 * followed by a 3-column checklist (each column separated by a
 * vertical divider), and a Request a Demo CTA.
 */
export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-section__inner">
        <div className="team-section__header">
          <span className="team-section__badge">Workforce Augmentation</span>
          <h2 className="team-section__heading">
            AI That Works Alongside Your Team
          </h2>
          <p className="team-section__subtext">
            OpsPilot AI doesn&apos;t replace your workforce; it augments it.
            From summarizing meetings and finding information to identifying
            risks and generating executive reports, your AI assistant is always
            available to support better decisions.
          </p>
        </div>

        <div className="team-section__columns">
          {COLUMNS.map((column, index) => (
            <div className="team-section__column" key={column.title}>
              {index > 0 && (
                <div className="team-section__divider" aria-hidden="true" />
              )}
              <h3 className="team-section__column-title">{column.title}</h3>
              <ul className="team-section__list">
                {column.items.map((item) => (
                  <li className="team-section__list-item" key={item}>
                    <CheckCircle
                      size={20}
                      color="#464554"
                      weight="bold"
                      className="team-section__check-icon"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="/request-demo" className="team-section__cta">
          Request a demo
        </a>
      </div>
    </section>
  );
}
