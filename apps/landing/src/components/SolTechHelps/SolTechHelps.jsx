import { Robot } from "@phosphor-icons/react";
import "./SolTechHelps.css";

const FEATURES = [
  {
    title: "Unify Company Knowledge",
    description:
      "Instantly search product documentation, engineering notes, policies, sprint plans, and internal resources using natural language.",
  },
  {
    title: "Accelerate Team Productivity",
    description:
      "Generate meeting summaries, automate recurring workflows, organize tasks, and reduce manual coordination across teams.",
  },
  {
    title: "Gain Real-Time Operational Visibility",
    description:
      "Monitor project progress, team performance, operational risks, and key business metrics through AI-powered dashboards.",
  },
  {
    title: "Make Better Decisions Faster",
    description:
      "Receive proactive recommendations, executive summaries, and intelligent insights that help leaders identify bottlenecks before they become problems.",
  },
];

/**
 * "How OpsPilot AI Helps" for Solutions → Technology page.
 */
export default function SolTechHelps() {
  return (
    <section className="sol-tech-helps">
      <span className="sol-tech-helps__badge">How OpsPilot AI Helps</span>

      <div className="sol-tech-helps__header">
        <h2 className="sol-tech-helps__heading">
          Accelerate innovation with AI-powered operations that unify teams
        </h2>
        <p className="sol-tech-helps__subtext">
          Automate workflows, centralize knowledge, and provide real-time
          insights to help technology organizations build, collaborate,
          and scale more efficiently.
        </p>
      </div>

      <div className="sol-tech-helps__grid">
        {FEATURES.map(({ title, description }) => (
          <div className="sol-tech-helps__card" key={title}>
            <div className="sol-tech-helps__icon">
              <Robot size={32} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="sol-tech-helps__card-title">{title}</h3>
            <p className="sol-tech-helps__card-text">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}