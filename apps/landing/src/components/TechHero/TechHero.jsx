import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./TechHero.css";

/**
 * Hero for Solutions → Technology page.
 */
export default function TechHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="tech-hero">
      <div className="tech-hero__content">
        <span className="tech-hero__badge">Technology</span>

        <h1 className="tech-hero__heading">
          AI Operations for High-Performing Technology Teams
        </h1>
        <p className="tech-hero__subtext">
          Connect engineering, product, operations, and business teams
          through one intelligent operating platform.
        </p>

        <form className="tech-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="tech-hero__input"
          />
          <button type="submit" className="tech-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for technology teams"
        className="tech-hero__image"
      />
    </section>
  );
}