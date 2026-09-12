import "./FinalCTA.css";

/**
 * Final CTA banner — purple rounded card with heading, subtext,
 * and Request a Demo / Sign In buttons.
 */
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__card">
        <div className="final-cta__content">
          <h2 className="final-cta__heading">
            Ready to Transform Your Operations?
          </h2>
          <p className="final-cta__subtext">
            Join forward-thinking organizations using AI to simplify
            operations, improve collaboration, and make better decisions
            every day.
          </p>
          <div className="final-cta__actions">
            <a href="/request-demo" className="final-cta__btn final-cta__btn--primary">
              Request a demo
            </a>
            <a href="ttp://opspilotai-auth.onrender.com" className="final-cta__btn final-cta__btn--secondary">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}