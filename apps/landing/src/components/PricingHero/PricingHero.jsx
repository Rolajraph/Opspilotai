import { useState } from "react";
import "./PricingHero.css";

/**
 * Pricing page hero — same gradient as homepage Hero, but rendered
 * in the opposite direction (light top → dark bottom, per Figma's
 * 180deg frame angle) so the dark headline text stays readable.
 */
export default function PricingHero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire up to the real demo-request flow once backend exists.
  };

  return (
    <section className="pricing-hero">
      <div className="pricing-hero__content">
        <h1 className="pricing-hero__heading">Simple, Transparent Pricing</h1>
        <p className="pricing-hero__subtext">
          Choose a plan that fits your organization today and scales with
          you as your operations grow.
        </p>

        <form className="pricing-hero__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter your work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="pricing-hero__input"
          />
          <button type="submit" className="pricing-hero__cta">
            Request a demo
          </button>
        </form>
      </div>
    </section>
  );
}