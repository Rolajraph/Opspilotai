import {
  Robot,
  OpenAiLogo,
  Book,
  CheckSquareOffset,
  HeadCircuit,
  NotePencil,
} from "@phosphor-icons/react";
import "./WhyOpsPilot.css";

const FEATURES = [
  {
    icon: Robot,
    title: "AI Daily Briefing",
    description:
      "Start every day with an AI-generated summary of your organization's priorities, risks, meetings, deadlines, and critical updates—all in one place.",
  },
  {
    icon: OpenAiLogo,
    title: "AI Command Centre",
    description:
      "Ask natural language questions about your business and receive instant insights, recommendations, and operational intelligence.",
  },
  {
    icon: Book,
    title: "Company Knowledge Hub",
    description:
      "Upload documents once and let AI instantly search, summarize, and answer questions across your organization's knowledge base.",
  },
  {
    icon: CheckSquareOffset,
    title: "Smart Task Management",
    description:
      "Assign work, track progress, identify bottlenecks, and receive AI-powered recommendations to keep projects moving.",
  },
  {
    icon: HeadCircuit,
    title: "Meeting Intelligence",
    description:
      "Automatically capture meeting notes, summarize discussions, extract action items, and assign responsibilities without manual effort.",
  },
  {
    icon: NotePencil,
    title: "Executive Reporting",
    description:
      "Generate board-ready operational reports, performance dashboards, compliance summaries, and strategic insights with a single click.",
  },
];
/**
 * "Why OpsPilot AI" — 6 feature cards in a 3x2 grid, each with a
 * Phosphor duotone icon, title, and description.
 */
export default function WhyOpsPilot() {
  return (
    <section className="why-opspilot">
      <div className="why-opspilot__header">
        <h2 className="why-opspilot__heading">
          Everything You Need to Run Operations with AI
        </h2>
        <p className="why-opspilot__subtext">
          A unified suite of AI-powered tools to automate workflows,
          centralize knowledge, and empower smarter operational decisions
          across your organization.
        </p>
      </div>

      <div className="why-opspilot__grid">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div className="why-opspilot__card" key={title}>
            <div className="why-opspilot__icon">
             <Icon size={30} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="why-opspilot__card-title">{title}</h3>
            <p className="why-opspilot__card-description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}