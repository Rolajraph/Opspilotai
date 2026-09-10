import { CheckCircle } from "@phosphor-icons/react";
import { Icon } from "@iconify/react";
import "./PricingCards.css";

const PLANS = [
  {
    title: "Starter",
    price: "$99/month",
    description:
      "Perfect for startups, small businesses, and growing teams looking to streamline daily operations with AI.",
    includesLabel: "Includes:",
    features: [
      "AI Daily Briefings",
      "AI Chat Assistant",
      "Task Management",
      "Document Upload & Search",
      "Meeting Summaries",
      "Email Support",
      "Up to 10 Users",
      "20GB Secure Storage",
    ],
    highlighted: false,
  },
  {
    title: "Professional (Most Popular)",
    price: "$399/month",
    description:
      "Designed for growing organizations that need advanced automation, collaboration, and operational intelligence.",
    includesLabel: "Everything in Starter, plus:",
    features: [
      "AI Command Centre",
      "Workflow Automation",
      "Executive Reports",
      "Company Knowledge Base",
      "AI Decision Support",
      "Email & Calendar Integration",
      "Priority Support",
      "Up to 50 Users",
      "200GB Secure Storage",
    ],
    highlighted: true,
  },
  {
    title: "Business",
    price: "$999/month",
    description:
      "Built for large organizations requiring enterprise-grade AI operations, security, and scalability.",
    includesLabel: "Everything in Professional, plus:",
    features: [
      "AI Risk Detection",
      "AI Agents",
      "Advanced Analytics & Dashboards",
      "Custom Workflows",
      "Single Sign-On (SSO)",
      "Role-Based Access Control",
      "API Access",
      "Dedicated Customer Success Manager",
      "1TB Secure Storage",
    ],
    highlighted: false,
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    description:
      "For large enterprises with complex operational needs requiring tailored AI solutions and dedicated infrastructure.",
    includesLabel: "Includes Everything in Business, plus:",
    features: [
      "Unlimited AI Usage",
      "Custom AI Models & Integrations",
      "On-Premise or Private Cloud Deployment",
      "Advanced Compliance & Governance",
      "Dedicated Infrastructure",
      "24/7 Premium Support",
      "Custom SLA",
      "And more...",
    ],
    highlighted: false,
  },
];

export default function PricingCards() {
  return (
    <section className="pricing-cards">
      <div className="pricing-cards__grid">
        {PLANS.map((plan) => (
          <div
            className={`pricing-cards__card ${plan.highlighted ? "pricing-cards__card--highlighted" : ""}`}
            key={plan.title}
          >
            <div className="pricing-cards__header">
              <span className="pricing-cards__icon">
                <Icon
                  icon="mynaui:star-solid"
                  width={14}
                  height={14}
                  color="#ffffff"
                />
              </span>
              <h3 className="pricing-cards__title">{plan.title}</h3>
            </div>

            <p className="pricing-cards__price">{plan.price}</p>
            <p className="pricing-cards__description">{plan.description}</p>

            <p className="pricing-cards__includes">{plan.includesLabel}</p>
            <ul className="pricing-cards__features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle size={16} color="#4648D4" weight="regular" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button type="button" className="pricing-cards__cta">
              Request a demo
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
