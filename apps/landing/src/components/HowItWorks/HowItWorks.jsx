import connectImg from "../../assets/images/how-it-works-connect.png";
import understandImg from "../../assets/images/how-it-works-understand.png";
import actImg from "../../assets/images/how-it-works-act.png";
import "./HowItWorks.css";

const STEPS = [
  {
    title: "Connect",
    description: null,
    image: connectImg,
  },
  {
    title: "Understand",
    description:
      "OpsPilot AI analyzes information across your organization and builds a unified operational view.",
    image: understandImg,
  },
  {
    title: "Act",
    description:
      "Receive proactive recommendations, automate workflows, and make informed decisions with confidence.",
    image: actImg,
  },
];

/**
 * "How it Works" — Connect / Understand / Act, three alternating
 * text-and-image rows with a horizontal/vertical divider grid,
 * matching the exact 1443px Figma section height.
 */
export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__header">
        <span className="how-it-works__badge">How it works</span>
        <h2 className="how-it-works__heading">
          See how OpsPilot AI transforms disconnected information into
          intelligent operational decisions in three simple steps.
        </h2>
      </div>

      <div className="how-it-works__steps">
        <div className="how-it-works__vertical-line" aria-hidden="true" />
        {STEPS.map((step) => (
          <div className="how-it-works__step" key={step.title}>
            <div className="how-it-works__step-text">
              <h3 className="how-it-works__step-title">{step.title}</h3>
              {step.description && (
                <p className="how-it-works__step-description">
                  {step.description}
                </p>
              )}
            </div>
            <img
              src={step.image}
              alt={`${step.title} step preview`}
              className="how-it-works__step-image"
            />
          </div>
        ))}
      </div>

      <a href="/request-demo" className="how-it-works__cta">
        Request a demo
      </a>
    </section>
  );
}