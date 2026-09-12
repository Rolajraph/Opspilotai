import "./ProfServicesCTA.css";

/**
 * CTA banner for Solutions → Professional Services page.
 */
export default function ProfServicesCTA() {
  return (
    <section className="prof-services-cta">
      <div className="prof-services-cta__card">
        <div className="prof-services-cta__content">
          <h2 className="prof-services-cta__heading">
            Focus More on Your Clients
            <br />
            Let AI Handle the Operations
          </h2>
          <p className="prof-services-cta__subtext">
            Discover how OpsPilot AI helps professional service
            organizations work more efficiently while delivering
            exceptional client value.
          </p>
          <div className="prof-services-cta__actions">
            <a
              href="/request-demo"
              className="prof-services-cta__btn prof-services-cta__btn--primary"
            >
              Request a demo
            </a>
            <a
              href="http://opspilotai-auth.onrender.com"
              className="prof-services-cta__btn prof-services-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}