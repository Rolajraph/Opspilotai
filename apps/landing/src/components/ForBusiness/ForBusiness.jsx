import {
  Heartbeat,
  Buildings,
  Book,
  Gavel,
  Building,
} from "@phosphor-icons/react";
import "./ForBusiness.css";

const INDUSTRIES = [
  {
    icon: Heartbeat,
    title: "Healthcare",
    description:
      "Receive proactive recommendations, automate workflows, and make informed decisions with confidence.",
  },
  {
    icon: Buildings,
    title: "Small & Medium Businesses",
    description:
      "Reduce administrative work while gaining real-time visibility into business performance.",
  },
  {
    icon: Book,
    title: "Education",
    description:
      "Coordinate academic operations, meetings, documentation, and institutional workflows.",
  },
  {
    icon: Gavel,
    title: "Legal & Professional Services",
    description:
      "Organize documents, meetings, client communications, and compliance with AI assistance.",
  },
  {
    icon: Building,
    title: "Enterprise Organizations",
    description:
      "Unify operations across departments while empowering leaders with clear, timely decisions.",
  },
];

/**
 * "For Business" — a staggered 3-then-2 card grid of industries
 * OpsPilot AI serves. Built with flex-wrap so the 3-2 stagger
 * happens naturally without manual row splitting.
 */
export default function ForBusiness() {
  return (
    <section className="for-business">
      <span className="for-business__badge">For Business</span>

      <div className="for-business__header">
        <h2 className="for-business__heading">One Platform. Every Team</h2>
        <p className="for-business__subtext">
          OpsPilot AI connects the tools your organization already uses,
          creating one intelligent operating layer across departments.
        </p>
      </div>

      <div className="for-business__grid">
        <div className="for-business__row for-business__row--top">
          {INDUSTRIES.slice(0, 3).map(({ icon: Icon, title, description }) => (
            <div className="for-business__card" key={title}>
              <div className="for-business__icon">
                <Icon size={30} color="#ffffff" weight="duotone" />
              </div>
              <h3 className="for-business__card-title">{title}</h3>
              <p className="for-business__card-description">{description}</p>
            </div>
          ))}
        </div>

        <div className="for-business__row for-business__row--bottom">
          {INDUSTRIES.slice(3).map(({ icon: Icon, title, description }) => (
            <div className="for-business__card" key={title}>
              <div className="for-business__icon">
                <Icon size={30} color="#ffffff" weight="duotone" />
              </div>
              <h3 className="for-business__card-title">{title}</h3>
              <p className="for-business__card-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
