import "./EducationChallenge.css";

/**
 * "The Challenge" for Use Cases → Education page — centered layout.
 */
export default function EducationChallenge() {
  return (
    <section className="education-challenge">
      <div className="education-challenge__content">
        <span className="education-challenge__badge">The Challenge</span>

        <h2 className="education-challenge__heading">
          OpsPilot AI brings everything together in one intelligent
          platform.
        </h2>

        <p className="education-challenge__text">
          Schools and universities manage academic operations, meetings,
          faculty communications, policies, compliance, and
          administrative processes across multiple departments.
        </p>
      </div>
    </section>
  );
}