import "./UCProfServChallenge.css";

/**
 * "The Challenge" for Use Cases → Professional Services page —
 * centered layout.
 */
export default function UCProfServChallenge() {
  return (
    <section className="uc-prof-serv-challenge">
      <div className="uc-prof-serv-challenge__content">
        <span className="uc-prof-serv-challenge__badge">The Challenge</span>

        <h2 className="uc-prof-serv-challenge__heading">
          OpsPilot AI helps firms streamline operations without disrupting
          existing workflows
        </h2>

        <p className="uc-prof-serv-challenge__text">
          Professional service firms often rely on multiple disconnected
          systems to manage clients, projects, meetings, and
          documentation. This creates unnecessary administrative work and
          slows decision-making.
        </p>
      </div>
    </section>
  );
}