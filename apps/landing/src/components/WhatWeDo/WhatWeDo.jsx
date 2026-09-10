import ourStoryImage from "../../assets/images/ourstory-image.png";
import "./WhatWeDo.css";

const CAPABILITIES = [
  "Receive AI-generated daily operational briefings",
  "Search and understand company knowledge instantly",
  "Automate repetitive workflows",
  "Manage projects and tasks more efficiently",
  "Capture and summarize meetings automatically",
  "Detect operational risks before they become problems",
  "Generate executive-ready reports in minutes",
  "Connect emails, calendars, and business systems into one workspace",
];

/**
 * "What We Do" — badge + heading, intro line, bulleted capability
 * list, and the reused platform image.
 */
export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="what-we-do__content">
        <span className="what-we-do__badge">What We Do</span>

        <h2 className="what-we-do__heading">
          OpsPilot AI helps organizations streamline operations by bringing
          together intelligent tools that support every stage of the
          operational workflow.
        </h2>

        <div className="what-we-do__list-block">
          <p className="what-we-do__intro">Our platform enables teams to:</p>
          <ul className="what-we-do__list">
            {CAPABILITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <img
        src={ourStoryImage}
        alt="OpsPilot AI platform preview"
        className="what-we-do__image"
      />
    </section>
  );
}