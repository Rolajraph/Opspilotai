import ourStoryImage from "../../assets/images/ourstory-image.png";
import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story__content">
        <span className="our-story__badge">Our Story</span>

        <h2 className="our-story__heading">
          OpsPilot AI connects your systems
        </h2>

        <p className="our-story__paragraph">
          Modern organizations generate an enormous amount of operational data
          every day, yet much of it remains trapped in disconnected systems.
          Leaders often spend more time gathering information than acting on it.
        </p>
        <p className="our-story__paragraph">
          We created OpsPilot AI to solve this challenge.
        </p>
        <p className="our-story__paragraph">
          Rather than replacing the tools organizations already use, OpsPilot AI
          integrates with them, transforming scattered information into
          real-time insights, intelligent recommendations, and automated
          workflows that empower every team to perform at its best.
        </p>
        <p className="our-story__paragraph">
          Whether it's generating executive reports, summarizing meetings,
          identifying operational risks, or helping employees instantly find
          information, OpsPilot AI serves as the intelligent operating layer
          that keeps organizations connected and informed.
        </p>
      </div>

      <img
        src={ourStoryImage}
        alt="OpsPilot AI platform preview"
        className="our-story__image"
      />
    </section>
  );
}
