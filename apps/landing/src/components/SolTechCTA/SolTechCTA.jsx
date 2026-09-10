import "./SolTechCTA.css";

/**
 * "Build Faster. Operate Smarter." — final CTA for
 * Solutions → Technology page.
 */
export default function SolTechCTA() {
  return (
    <section className="sol-tech-cta">
      <div className="sol-tech-cta__card">
        <div className="sol-tech-cta__content">
          <h2 className="sol-tech-cta__heading">
            Build Faster. Operate Smarter.
          </h2>
          <p className="sol-tech-cta__subtext">
            Transform how your technology organization collaborates,
            shares knowledge, and makes decisions with OpsPilot AI.
          </p>
          <div className="sol-tech-cta__actions">
            <a
              href="/request-demo"
              className="sol-tech-cta__btn sol-tech-cta__btn--primary"
            >
              Request a demo
            </a>
            <a
              href="http://localhost:5174"
              className="sol-tech-cta__btn sol-tech-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}