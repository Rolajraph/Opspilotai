import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./ManufacturingHero.css";

/**
 * Hero for Use Cases → Manufacturing & Logistics page.
 */
export default function ManufacturingHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="manufacturing-hero">
      <div className="manufacturing-hero__content">
        <span className="manufacturing-hero__badge">
          Manufacturing &amp; Logistics
        </span>

        <h1 className="manufacturing-hero__heading">
          AI Operations for Manufacturing &amp; Logistics
        </h1>
        <p className="manufacturing-hero__subtext">
          Gain complete visibility across operations, automate routine
          processes, and make faster operational decisions with AI.
        </p>

        <form className="manufacturing-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="manufacturing-hero__input"
          />
          <button type="submit" className="manufacturing-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for manufacturing and logistics teams"
        className="manufacturing-hero__image"
      />
    </section>
  );
}