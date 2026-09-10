import { useState } from "react";
import dashboardImage from "../../assets/images/Rectangle-image.png";
import "./AboutHero.css";

/**
 * About page hero — headline + subtext, email capture input
 * with inline "Request a demo" button, and a dashboard preview image.
 */
export default function AboutHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire this up to the actual demo-request flow once the backend exists.
  };

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <div className="about-hero__header">
          <h1 className="about-hero__heading">
            The AI Operating Layer for Modern Organizations
          </h1>
          <p className="about-hero__subtext">
            OpsPilot AI helps organizations streamline operations by
            bringing together intelligent tools that support every stage of
            the operational workflow.
          </p>
        </div>

        <form className="about-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="about-hero__input"
          />
          <button type="submit" className="about-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={dashboardImage}
        alt="OpsPilot AI dashboard preview"
        className="about-hero__image"
      />
    </section>
  );
}