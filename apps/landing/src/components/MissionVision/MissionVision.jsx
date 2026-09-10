import { Robot } from "@phosphor-icons/react";
import "./MissionVision.css";

const CARDS = [
  {
    title: "Our Mission",
    text: "To empower organizations with AI that transforms operational complexity into intelligent, efficient, and data-driven decision-making.",
  },
  {
    title: "Our Vision",
    text: "To become the world's most trusted AI operating platform, enabling every organization to connect its people, processes, systems, and knowledge through one intelligent operational layer.",
  },
];

/**
 * Mission / Vision — two cards side by side, each with a Robot icon.
 */
export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision__grid">
        {CARDS.map((card) => (
          <div className="mission-vision__card" key={card.title}>
            <div className="mission-vision__icon">
              <Robot size={35} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="mission-vision__title">{card.title}</h3>
            <p className="mission-vision__text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}