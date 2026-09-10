import { Check } from "@phosphor-icons/react";
import "./RequestDemoLeft.css";

const BENEFITS = [
  "Fragmented legacy tools and silos resolved with unified AI orchestration",
  "Autonomous workflow automation across Jira, Slack, SAP, and documents",
  "Enterprise-grade SOC-2 security with dedicated private model instances",
  "Instant executive briefing and automated cross-department operational risk detection",
];

/**
 * Left column of the Request Demo page — heading, benefits list,
 * and a testimonial card.
 */
export default function RequestDemoLeft() {
  return (
    <div className="request-demo-left">
      <div className="request-demo-left__top">
        <h1 className="request-demo-left__heading">
          Get a personalized
          <br />
          30-minute demo of OpsPilot AI
        </h1>

        <ul className="request-demo-left__benefits">
          {BENEFITS.map((benefit) => (
            <li className="request-demo-left__benefit-item" key={benefit}>
              <span className="request-demo-left__benefit-icon">
                <Check size={12} weight="bold" />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="request-demo-left__testimonial">
        <p className="request-demo-left__quote">
          &ldquo;OpsPilot AI revolutionized our cross-system operations. We
          evaluated multiple tools, but nothing unified our workflows,
          meetings, and ERP data as seamlessly and securely.&rdquo;
        </p>
        <div className="request-demo-left__author">
          <span className="request-demo-left__avatar">SJ</span>
          <div className="request-demo-left__author-info">
            <span className="request-demo-left__author-name">
              Sarah Jenkins
            </span>
            <span className="request-demo-left__author-title">
              Chief Operating Officer, Global Logistics Ltd
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}