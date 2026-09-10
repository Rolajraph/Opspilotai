import { CheckCircle } from "@phosphor-icons/react";
import "./TechBenefits.css";

const COLUMNS = [
  {
    title: "How OpsPilot AI Helps",
    items: [
      "Company Knowledge Search",
      "AI Meeting Intelligence",
      "Daily Team Briefings",
      "Workflow Automation",
      "Executive Dashboards",
    ],
  },
  {
    title: "Key Benefits",
    items: [
      "Reduce context switching",
      "Improve collaboration",
      "Speed up decision-making",
      "Centralize company knowledge",
      "Increase productivity",
    ],
  },
  {
    title: "Ideal For",
    items: [
      "SaaS Companies",
      "Product Teams",
      "Engineering Teams",
      "DevOps",
      "Customer Success",
    ],
  },
];

/**
 * 3-column checklist section for Solutions → Technology page:
 * How OpsPilot AI Helps / Key Benefits / Ideal For + CTA button.
 */
export default function TechBenefits() {
  return (
    <section className="tech-benefits">
      <div className="tech-benefits__columns">
        {COLUMNS.map((column) => (
          <div className="tech-benefits__column" key={column.title}>
            <h3 className="tech-benefits__column-title">{column.title}</h3>
            <ul className="tech-benefits__list">
              {column.items.map((item) => (
                <li className="tech-benefits__list-item" key={item}>
                  <CheckCircle size={20} weight="regular" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="/request-demo" className="tech-benefits__cta">
        Request a demo
      </a>
    </section>
  );
}