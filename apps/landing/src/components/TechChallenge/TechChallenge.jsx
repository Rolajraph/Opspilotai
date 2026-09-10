import "./TechChallenge.css";

/**
 * "The Challenge" for Solutions → Technology page — centered layout
 * (unlike the left-aligned version on Professional Services).
 */
export default function TechChallenge() {
  return (
    <section className="tech-challenge">
      <div className="tech-challenge__content">
        <span className="tech-challenge__badge">The Challenge</span>

        <h2 className="tech-challenge__heading">
          OpsPilot AI eliminates silos by creating a centralized AI-powered
          operational workspace.
        </h2>

        <p className="tech-challenge__text">
          Technology companies move fast, but information often lives
          across documentation tools, chat platforms, project boards,
          meetings, and emails.
        </p>
      </div>
    </section>
  );
}