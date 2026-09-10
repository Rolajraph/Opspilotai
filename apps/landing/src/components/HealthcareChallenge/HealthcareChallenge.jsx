import "./HealthcareChallenge.css";


export default function HealthcareChallenge() {
  return (
    <section className="healthcare-challenge">
      <div className="healthcare-challenge__content">
        <span className="healthcare-challenge__badge">The Challenge</span>

        <h2 className="healthcare-challenge__heading">
          OpsPilot AI centralizes operational intelligence so healthcare
          professionals can spend less time searching for information and
          more time delivering quality care.
        </h2>

        <p className="healthcare-challenge__text">
          Technology companies move quickly, but information often lives
          across project management tools, documentation platforms, chat
          applications, emails, and meetings. Teams waste valuable time
          searching for context instead of building products.
        </p>
      </div>
    </section>
  );
}