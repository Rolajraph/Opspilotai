import { CheckCircle } from "@phosphor-icons/react";
import "./UCProfServBenefits.css";

const COLUMNS = [
  {
    title: "How OpsPilot AI Helps",
    items: [
      "AI-powered document search",
      "Client meeting summaries",
      "Smart task management",
      "Executive reporting",
      "Email & Calendar integration",
    ],
  },
  {
    title: "Key Benefits",
    items: [
      "Reduce admin time",
      "Improve client responsiveness",
      "Organize firm knowledge",
      "Increase collaboration",
      "Improve operational efficiency",
    ],
  },
  {
    title: "Ideal For",
    items: [
      "Law Firms",
      "Accounting Firms",
      "Consulting Firms",
      "HR Agencies",
      "Marketing Agencies",
    ],
  },
];

/**
 * 3-column checklist section for Use Cases → Professional Services
 * page: How OpsPilot AI Helps / Key Benefits / Ideal For.
 */
export default function UCProfServBenefits() {
  return (
    <section className="uc-prof-serv-benefits">
      <div className="uc-prof-serv-benefits__columns">
        {COLUMNS.map((column) => (
          <div className="uc-prof-serv-benefits__column" key={column.title}>
            <h3 className="uc-prof-serv-benefits__column-title">
              {column.title}
            </h3>
            <ul className="uc-prof-serv-benefits__list">
              {column.items.map((item) => (
                <li className="uc-prof-serv-benefits__list-item" key={item}>
                  <CheckCircle size={20} weight="regular" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
