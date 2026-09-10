import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./HealthcareHero.css";

/**
 * Hero for Use Cases → Healthcare page.
 */
export default function HealthcareHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="healthcare-hero">
      <div className="healthcare-hero__content">
        <span className="healthcare-hero__badge">Healthcare</span>

        <h1 className="healthcare-hero__heading">
          AI Operations for Smarter Healthcare Delivery
        </h1>
        <p className="healthcare-hero__subtext">
          Reduce administrative burden, improve team coordination, and
          deliver better patient outcomes with an AI-powered operations
          platform built for modern healthcare organizations.
        </p>

        <form className="healthcare-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="healthcare-hero__input"
          />
          <button type="submit" className="healthcare-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for healthcare organizations"
        className="healthcare-hero__image"
      />
    </section>
  );
}