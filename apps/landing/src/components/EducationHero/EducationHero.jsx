import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./EducationHero.css";

/**
 * Hero for Use Cases → Education page.
 */
export default function EducationHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="education-hero">
      <div className="education-hero__content">
        <span className="education-hero__badge">Education</span>

        <h1 className="education-hero__heading">
          Smarter Operations for Educational Institutions
        </h1>
        <p className="education-hero__subtext">
          Simplify administration, improve collaboration, and keep
          educators focused on student success with AI-powered
          operational intelligence.
        </p>

        <form className="education-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="education-hero__input"
          />
          <button type="submit" className="education-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for educational institutions"
        className="education-hero__image"
      />
    </section>
  );
}