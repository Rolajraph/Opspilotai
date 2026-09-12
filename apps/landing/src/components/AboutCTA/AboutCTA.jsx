import "./AboutCTA.css";

/**
 * "Join Us on the Journey" — About page's final CTA banner.
 * Same visual pattern as the homepage's FinalCTA, but its own
 * component with different copy.
 */
export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta__card">
        <div className="about-cta__content">
          <h2 className="about-cta__heading">Join Us on the Journey</h2>
          <p className="about-cta__subtext">
            Whether you&apos;re a growing business, a healthcare provider, a
            technology company, or a global enterprise, OpsPilot AI is here
            to help you transform the way your organization works.
          </p>
          <p className="about-cta__subtext">
            Together, let&apos;s build smarter operations powered by AI.
          </p>
          <div className="about-cta__actions">
            <a
              href="/request-demo"
              className="about-cta__btn about-cta__btn--primary"
            >
              Request a demo
            </a>
            <a href="http://opspilotai-auth.onrender.com" className="about-cta__btn about-cta__btn--secondary">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}