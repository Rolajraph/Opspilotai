import { Robot } from "@phosphor-icons/react";
import "./CoreValues.css";

const VALUES = [
  {
    title: "Innovation",
    description:
      "We continuously explore new ways AI can improve how organizations operate.",
  },
  {
    title: "Customer Success",
    description:
      "Our customers' success drives every decision we make, from product development to support.",
  },
  {
    title: "Collaboration",
    description:
      "Great outcomes come from connected teams, shared knowledge, and seamless communication.",
  },
  {
    title: "Integrity",
    description:
      "We build with transparency, accountability, and a commitment to responsible AI.",
  },
  {
    title: "Excellence",
    description:
      "We strive to deliver products that are reliable, secure, and thoughtfully designed for modern organizations.",
  },
];

/**
 * "Our Core Values" — badge + heading/subtext, 2-column grid of
 * 5 value cards (last one alone on its own row).
 */
export default function CoreValues() {
  return (
    <section className="core-values">
      <span className="core-values__badge">Core Values</span>

      <div className="core-values__header">
        <h2 className="core-values__heading">Our Core Values</h2>
        <p className="core-values__subtext">
          The following are where standout from our Competitors
        </p>
      </div>

      <div className="core-values__grid">
        {VALUES.map(({ title, description }) => (
          <div className="core-values__card" key={title}>
            <div className="core-values__icon">
              <Robot size={32} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="core-values__card-title">{title}</h3>
            <p className="core-values__card-text">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}