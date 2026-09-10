import "./TheChallenge.css";

/**
 * "The Challenge" — badge + heading + paragraph, centered.
 */
export default function TheChallenge() {
  return (
    <section className="the-challenge">
      <div className="the-challenge__content">
        <span className="the-challenge__badge">The Challenge</span>

        <h2 className="the-challenge__heading">
          OpsPilot AI unifies your operational workflows
        </h2>

        <p className="the-challenge__text">
          Professional service firms rely on documents, meetings, emails,
          and client collaboration. When information is scattered across
          multiple tools, teams spend valuable time searching for files,
          tracking deadlines, and preparing reports instead of serving
          clients.
        </p>
      </div>
    </section>
  );
}