import "./HealthcareCTA.css";

/**
 * "Deliver Better Care Through Smarter Operations" — final CTA
 * for Use Cases → Healthcare page.
 */
export default function HealthcareCTA() {
  return (
    <section className="healthcare-cta">
      <div className="healthcare-cta__card">
        <div className="healthcare-cta__content">
          <h2 className="healthcare-cta__heading">
            Deliver Better Care Through
            <br />
            Smarter Operations
          </h2>
          <p className="healthcare-cta__subtext">
            Book your personalized demo today.
          </p>
          <div className="healthcare-cta__actions">
            <a
              href="/request-demo"
              className="healthcare-cta__btn healthcare-cta__btn--primary"
            >
              Request a demo
            </a>
            <a
              href="http://opspilotai-auth.onrender.com"
              className="healthcare-cta__btn healthcare-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}