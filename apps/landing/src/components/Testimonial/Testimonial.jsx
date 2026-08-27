import logoGymportal from "../../assets/images/logo-gymportal.png";
import avatarTestimonial from "../../assets/images/avatar-testimonial.png";
import "./Testimonial.css";

/**
 * Testimonial / quote section — Gymportal logo, quote text,
 * and founder avatar + name/title.
 */
export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial__inner">
        <img
          src={logoGymportal}
          alt="Gymportal"
          className="testimonial__logo"
        />

        <p className="testimonial__quote">
          "Before OpsPilot AI, our operations were spread across emails,
          spreadsheets, and messaging apps. Keeping track of staff
          schedules, equipment maintenance, member feedback, and weekly
          reports was becoming overwhelming. With OpsPilot AI, everything
          is centralized, and the AI daily briefings help us prioritize
          what matters every morning. We've significantly reduced
          administrative work and can focus more on delivering an
          exceptional fitness experience for our members."
        </p>

        <div className="testimonial__author">
          <img
            src={avatarTestimonial}
            alt="Bamidele Smith"
            className="testimonial__avatar"
          />
          <div className="testimonial__author-text">
            <p className="testimonial__author-name">Bamidele Smith</p>
            <p className="testimonial__author-title">Founder And Ceo</p>
          </div>
        </div>
      </div>
    </section>
  );
}