import ourStoryImage from "../../assets/images/ourstory-image.png";
import "./WhyChooseUs.css";

const REASONS = [
  "Reduce manual administrative work",
  "Centralize business knowledge",
  "Improve cross-functional collaboration",
  "Automate repetitive operational processes",
  "Generate insights in real time",
  "Detect risks proactively",
  "Make faster, data-driven decisions",
  "Scale operations without increasing complexity",
];

/**
 * "Why Organizations Choose OpsPilot AI" — badge + heading, intro
 * line, bulleted reasons list, and the reused platform image.
 */
export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__content">
        <span className="why-choose-us__badge">Why OpsPilot AI</span>

        <h2 className="why-choose-us__heading">
          Why Organizations Choose OpsPilot AI
        </h2>

        <div className="why-choose-us__list-block">
          <p className="why-choose-us__intro">
            Organizations choose OpsPilot AI because it helps them:
          </p>
          <ul className="why-choose-us__list">
            {REASONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <img
        src={ourStoryImage}
        alt="OpsPilot AI platform preview"
        className="why-choose-us__image"
      />
    </section>
  );
}