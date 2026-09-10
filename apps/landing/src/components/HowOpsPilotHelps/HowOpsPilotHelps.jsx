import { Robot } from "@phosphor-icons/react";
import "./HowOpsPilotHelps.css";

const FEATURES = [
  {
    title: "Centralize Firm Knowledge",
    description:
      "Store contracts, proposals, policies, client documentation, and internal resources in one searchable knowledge hub powered by AI.",
  },
  {
    title: "Automate Administrative Work",
    description:
      "Reduce repetitive tasks such as meeting documentation, status reporting, task assignments, and follow-up emails with intelligent automation.",
  },
  {
    title: "Stay Ahead of Deadlines",
    description:
      "Monitor project milestones, compliance requirements, and client deliverables with AI-powered reminders and risk detection.",
  },
  {
    title: "Improve Team Collaboration",
    description:
      "Keep consultants, legal professionals, accountants, and support teams aligned with shared tasks, meeting summaries, and operational insights.",
  },
];
/**
 * "How OpsPilot AI Helps" — badge + heading/subtext, 2x2 grid of
 * 4 feature cards.
 */
export default function HowOpsPilotHelps() {
  return (
    <section className="how-opspilot-helps">
      <span className="how-opspilot-helps__badge">How OpsPilot AI Helps</span>

      <div className="how-opspilot-helps__header">
        <h2 className="how-opspilot-helps__heading">
          Empower your teams with AI-powered tools that centralize client
          knowledge,
        </h2>
        <p className="how-opspilot-helps__subtext">
          automate administrative tasks, streamline collaboration, and
          deliver actionable insights, so you can focus on providing
          exceptional professional services.
        </p>
      </div>

      <div className="how-opspilot-helps__grid">
        {FEATURES.map(({ title, description }) => (
          <div className="how-opspilot-helps__card" key={title}>
            <div className="how-opspilot-helps__icon">
              <Robot size={35} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="how-opspilot-helps__card-title">{title}</h3>
            <p className="how-opspilot-helps__card-text">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}