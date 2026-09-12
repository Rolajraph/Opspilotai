import heroPattern from "../../assets/images/bg-hero-pattern.png";
import trustBarLogos from "../../assets/images/logo-trustbar.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
    

      <img src={heroPattern} alt="" aria-hidden="true" className="hero__mesh" />
      <div className="hero__content">
        <h1 className="hero__heading">
          The AI Operating Layer for <em>Modern Organizations</em>
        </h1>
        <p className="hero__subtext">
          Stop chasing updates, searching for documents, and managing
          disconnected systems.
        </p>

        <div className="hero__actions">
          <a href="https://opspilotai-landing.onrender.com/request-demo" className="hero__btn hero__btn--primary">
            Request a demo
          </a>
          <a href="/solutions" className="hero__btn hero__btn--secondary">
            Learn more
          </a>
        </div>

        <p className="hero__trust-label">
          Trusted by modern enterprise teams automating their workflow
        </p>

        <img
          src={trustBarLogos}
          alt="Trusted by Gymportal, Corveza, and other partners"
          className="hero__trust-bar-image"
        />
      </div>
    </section>
  );
}
