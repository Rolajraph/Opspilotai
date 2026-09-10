import "./UCProfServCTA.css";

/**
 * "Success Starts with Better Operations" — final CTA for
 * Use Cases → Professional Services page.
 */
export default function UCProfServCTA() {
  return (
    <section className="uc-prof-serv-cta">
      <div className="uc-prof-serv-cta__card">
        <div className="uc-prof-serv-cta__content">
          <h2 className="uc-prof-serv-cta__heading">
            Success Starts with Better Operations
          </h2>
          <p className="uc-prof-serv-cta__subtext">
            When your teams spend less time managing operations, they
            spend more time serving clients.
          </p>
          <div className="uc-prof-serv-cta__actions">

            <a
              href="/request-demo"
              className="uc-prof-serv-cta__btn uc-prof-serv-cta__btn--primary"
            >
              Request a demo
            </a>

            <a
              href="http://localhost:5174"
              className="uc-prof-serv-cta__btn uc-prof-serv-cta__btn--secondary"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}