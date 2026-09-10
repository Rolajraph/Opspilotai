import { useState } from "react";
import twoManImage from "../../assets/images/twoman-image.png";
import "./UCProfServHero.css";

/**
 * Hero for Use Cases → Professional Services page (distinct from
 * Solutions → Professional Services — different design/copy).
 */
export default function UCProfServHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="uc-prof-serv-hero">
      <div className="uc-prof-serv-hero__content">
        <span className="uc-prof-serv-hero__badge">Professional Services</span>

        <h1 className="uc-prof-serv-hero__heading">
          Focus on Clients.
          <br />
          Let AI Handle Operations.
        </h1>
        <p className="uc-prof-serv-hero__subtext">
          Centralize client knowledge, automate administrative work, and
          empower your teams with AI-powered operational intelligence.
        </p>

        <form className="uc-prof-serv-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="uc-prof-serv-hero__input"
          />
          <button type="submit" className="uc-prof-serv-hero__cta">
            Request a demo
          </button>
        </form>
      </div>

      <img
        src={twoManImage}
        alt="OpsPilot AI for professional services teams"
        className="uc-prof-serv-hero__image"
      />
    </section>
  );
}