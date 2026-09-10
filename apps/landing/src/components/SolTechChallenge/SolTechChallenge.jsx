import "./SolTechChallenge.css";

/**
 * "The Challenge" for Solutions → Technology page — left-aligned,
 * matching the Professional Services page pattern (not centered).
 */
export default function SolTechChallenge() {
  return (
    <section className="sol-tech-challenge">
      <div className="sol-tech-challenge__content">
        <span className="sol-tech-challenge__badge">The Challenge</span>

        <h2 className="sol-tech-challenge__heading">
          OpsPilot AI connects your systems
        </h2>

        <p className="sol-tech-challenge__text">
          Technology companies move quickly, but information often lives
          across project management tools, documentation platforms, chat
          applications, emails, and meetings. Teams waste valuable time
          searching for context instead of building products.
        </p>
      </div>
    </section>
  );
}