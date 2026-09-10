import { Robot } from "@phosphor-icons/react";
import "./WhoWeServe.css";

const AUDIENCES = [
  {
    icon: Robot,
    title: "Healthcare",
    description:
      "Improve operational efficiency, staffing coordination, compliance, and patient service delivery.",
  },
  {
    icon: Robot,
    title: "Professional Services",
    description:
      "Centralize client knowledge, automate administrative work, and improve collaboration across teams.",
  },
  {
    icon: Robot,
    title: "Technology",
    description:
      "Connect engineering, product, operations, and customer success teams with AI-powered workflows and operational intelligence.",
  },
  {
    icon: Robot,
    title: "Education",
    description:
      "Support institutions with streamlined administration, document management, and collaborative workflows.",
  },
  {
    icon: Robot,
    title: "Enterprise Organizations",
    description:
      "Provide executives with real-time operational visibility, intelligent insights, and enterprise-wide automation.",
  },
];
/**
 * "Who We Serve" — badge + heading/subtext, staggered 3-then-2
 * card layout of industries served.
 */
export default function WhoWeServe() {
  return (
    <section className="who-we-serve">
      <span className="who-we-serve__badge">Who We Serve</span>

      <div className="who-we-serve__header">
        <h2 className="who-we-serve__heading">
          OpsPilot AI is designed for organizations
        </h2>
        <p className="who-we-serve__subtext">
          From growing businesses to large enterprises.
        </p>
      </div>

      <div className="who-we-serve__grid">
        {AUDIENCES.map(({ icon: Icon, title, description }) => (
          <div className="who-we-serve__card" key={title}>
            <div className="who-we-serve__icon">
              <Icon size={35} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="who-we-serve__card-title">{title}</h3>
            <p className="who-we-serve__card-text">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
