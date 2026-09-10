import "./EducationCTA.css";

/**
 * "Less administration. More education." — final CTA for
 * Use Cases → Education page.
 */
export default function EducationCTA() {
  return (
    <section className="education-cta">
      <div className="education-cta__card">
        <div className="education-cta__content">
          <h2 className="education-cta__heading">
            Less administration.
            <br />
            More education.
          </h2>
          <p className="education-cta__subtext">
            Transform educational operations with AI.
          </p>
          <div className="education-cta__actions">
            <a
              href="/request-demo"
              className="education-cta__btn education-cta__btn--primary"
            >
              Request a demo
            </a>

            <a
              href="http://localhost:5174"
              className="education-cta__btn education-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}