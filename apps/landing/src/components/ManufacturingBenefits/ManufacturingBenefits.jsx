import { CheckCircle } from "@phosphor-icons/react";
import "./ManufacturingBenefits.css";

const COLUMNS = [
  {
    title: "How OpsPilot AI Helps",
    items: [
      "Daily Operational Briefings",
      "Risk Detection",
      "Task Management",
      "AI Reporting",
      "Operational Dashboards",
    ],
  },
  {
    title: "Key Benefits",
    items: [
      "Improve operational visibility",
      "Detect bottlenecks earlier",
      "Increase workforce productivity",
      "Improve cross-team collaboration",
      "Reduce reporting time",
    ],
  },
  {
    title: "Ideal For",
    items: [
      "Manufacturers",
      "Logistics Companies",
      "Warehousing",
      "Distribution Centers",
      "Supply Chain Operations",
    ],
  },
];

/**
 * 3-column checklist section for Use Cases → Manufacturing &
 * Logistics page.
 */
export default function ManufacturingBenefits() {
  return (
    <section className="manufacturing-benefits">
      <div className="manufacturing-benefits__columns">
        {COLUMNS.map((column) => (
          <div className="manufacturing-benefits__column" key={column.title}>
            <h3 className="manufacturing-benefits__column-title">
              {column.title}
            </h3>
            <ul className="manufacturing-benefits__list">
              {column.items.map((item) => (
                <li className="manufacturing-benefits__list-item" key={item}>
                  <CheckCircle size={20} weight="regular" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="/request-demo" className="manufacturing-benefits__cta">
        Request a demo
      </a>
    </section>
  );
}