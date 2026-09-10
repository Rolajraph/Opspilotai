import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./ProfServicesHero.css";

/**
 * Hero for the Solutions → Professional Services page.
 * Left: headline + subtext + email capture form.
 * Right: photo image.
 */
export default function ProfServicesHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="prof-services-hero">
      <div className="prof-services-hero__content">
        <h1 className="prof-services-hero__heading">
          AI-Powered Operations for Professional Services
        </h1>
        <p className="prof-services-hero__subtext">
          Deliver exceptional client experiences while reducing
          administrative overhead. OpsPilot AI helps law firms, consulting
          agencies, accounting firms, and other professional service
          organizations streamline operations, centralize knowledge, and
          make faster, data-driven decisions.
        </p>

        <form className="prof-services-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="prof-services-hero__input"
          />
          <button type="submit" className="prof-services-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for professional services teams"
        className="prof-services-hero__image"
      />
    </section>
  );
}