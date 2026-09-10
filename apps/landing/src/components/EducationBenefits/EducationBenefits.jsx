import { CheckCircle } from "@phosphor-icons/react";
import "./EducationBenefits.css";

const COLUMNS = [
  {
    title: "How OpsPilot AI Helps",
    items: [
      "Faculty meeting summaries",
      "Administrative workflows",
      "Institutional knowledge base",
      "AI-powered search",
      "Calendar integration",
    ],
  },
  {
    title: "Key Benefits",
    items: [
      "Save administrative time",
      "Save administrative time",
      "Centralize institutional knowledge",
      "Increase operational efficiency",
      "Better leadership visibility",
    ],
  },
  {
    title: "Ideal For",
    items: [
      "Universities",
      "Colleges",
      "Schools",
      "Training Institutions",
      "Education Groups",
    ],
  },
];

/**
 * 3-column checklist section for Use Cases → Education page.
 */
export default function EducationBenefits() {
  return (
    <section className="education-benefits">
      <div className="education-benefits__columns">
        {COLUMNS.map((column) => (
          <div className="education-benefits__column" key={column.title}>
            <h3 className="education-benefits__column-title">
              {column.title}
            </h3>
            <ul className="education-benefits__list">
              {column.items.map((item, index) => (
                <li
                  className="education-benefits__list-item"
                  key={`${item}-${index}`}
                >
                  <CheckCircle size={20} weight="regular" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a href="/request-demo" className="education-benefits__cta">
        Request a demo
      </a>
    </section>
  );
}