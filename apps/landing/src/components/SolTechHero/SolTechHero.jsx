import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./SolTechHero.css";

/**
 * Hero for Solutions → Technology page (distinct from Use Cases
 * → Technology). Left-aligned layout, matches Professional Services
 * page structure.
 */
export default function SolTechHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="sol-tech-hero">
      <div className="sol-tech-hero__content">
        <h1 className="sol-tech-hero__heading">
          AI Operations for Fast-Moving Technology Teams
        </h1>
        <p className="sol-tech-hero__subtext">
          Empower engineering, product, operations, and customer success
          teams with an AI-powered platform that centralizes knowledge,
          automates workflows, and delivers real-time operational
          intelligence.
        </p>

        <form className="sol-tech-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="sol-tech-hero__input"
          />
          <button type="submit" className="sol-tech-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for technology teams"
        className="sol-tech-hero__image"
      />
    </section>
  );
}