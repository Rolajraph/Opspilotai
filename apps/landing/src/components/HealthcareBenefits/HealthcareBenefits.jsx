import { CheckCircle } from "@phosphor-icons/react";
import "./HealthcareBenefits.css";

const COLUMNS = [
  {
    title: "How OpsPilot AI Helps",
    items: [
      "AI Daily Operational Briefings",
      "Clinical & Administrative Task Management",
      "Meeting Summaries",
      "Knowledge Base for SOPs and Policies",
      "Executive Reporting",
    ],
  },
  {
    title: "Key Benefits",
    items: [
      "Reduce administrative workload",
      "Improve staff collaboration",
      "Enhance compliance visibility",
      "Centralize operational knowledge",
      "Make faster operational decisions",
    ],
  },
  {
    title: "Ideal For",
    items: [
      "Hospitals",
      "Care Homes",
      "Home Care Providers",
      "Supported Living",
      "Healthcare Networks",
    ],
  },
];

/**
 * 3-column checklist section for Use Cases → Healthcare page.
 */
export default function HealthcareBenefits() {
  return (
    <section className="healthcare-benefits">
      <div className="healthcare-benefits__columns">
        {COLUMNS.map((column) => (
          <div className="healthcare-benefits__column" key={column.title}>
            <h3 className="healthcare-benefits__column-title">
              {column.title}
            </h3>
            <ul className="healthcare-benefits__list">
              {column.items.map((item) => (
                <li className="healthcare-benefits__list-item" key={item}>
                  <CheckCircle size={20} weight="regular" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="/request-demo" className="healthcare-benefits__cta">
        Request a demo
      </a>
    </section>
  );
}