import "./ManufacturingCTA.css";

/**
 * "Optimize Every Operation." — final CTA for Use Cases →
 * Manufacturing & Logistics page.
 */
export default function ManufacturingCTA() {
  return (
    <section className="manufacturing-cta">
      <div className="manufacturing-cta__card">
        <div className="manufacturing-cta__content">
          <h2 className="manufacturing-cta__heading">
            Optimize Every Operation.
          </h2>
          <p className="manufacturing-cta__subtext">
            Turn operational data into actionable insights that keep
            production and logistics moving efficiently.
          </p>
          <div className="manufacturing-cta__actions">
            <a
              href="/request-demo"
              className="manufacturing-cta__btn manufacturing-cta__btn--primary"
            >
              Request a demo
            </a>
            <a
              href="http://localhost:5174"
              className="manufacturing-cta__btn manufacturing-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}