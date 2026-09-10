import "./TechCTA.css";

/**
 * "Build Faster with AI" — CTA banner for Solutions → Technology page.
 */
export default function TechCTA() {
  return (
    <section className="tech-cta">
      <div className="tech-cta__card">
        <div className="tech-cta__content">
          <h2 className="tech-cta__heading">Build Faster with AI</h2>
          <p className="tech-cta__subtext">
            Spend less time searching for information and more time
            building products customers love.
          </p>
          <div className="tech-cta__actions">
            <a
              href="/request-demo"
              className="tech-cta__btn tech-cta__btn--primary"
            >
              Request a demo
            </a>
            <a
              href="http://localhost:5174"
              className="tech-cta__btn tech-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}