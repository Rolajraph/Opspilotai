import "./ManufacturingChallenge.css";

/**
 * "The Challenge" for Use Cases → Manufacturing & Logistics page —
 * centered layout, two body paragraphs.
 */
export default function ManufacturingChallenge() {
  return (
    <section className="manufacturing-challenge">
      <div className="manufacturing-challenge__content">
        <span className="manufacturing-challenge__badge">The Challenge</span>

        <h2 className="manufacturing-challenge__heading">
          OpsPilot AI creates one intelligent operational layer across
          your organization.
        </h2>

        <p className="manufacturing-challenge__text">
          Manufacturing and logistics organizations coordinate
          production, inventory, warehouses, deliveries, maintenance,
          quality assurance, and workforce management every day.
        </p>

        <p className="manufacturing-challenge__text">
          Disconnected systems make operational oversight difficult.
        </p>
      </div>
    </section>
  );
}