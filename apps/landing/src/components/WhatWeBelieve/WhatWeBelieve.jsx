import { Robot } from "@phosphor-icons/react";
import "./WhatWeBelieve.css";

const BELIEFS = [
  {
    title: "AI Should Empower People",
    text: "Artificial intelligence should enhance human decision-making—not replace it. We design AI that helps teams work smarter, make informed decisions, and focus on high-value work.",
  },
  {
    title: "Simplicity Drives Productivity",
    text: "Powerful technology should be intuitive. We believe operational software should simplify work, reduce complexity, and help users accomplish more with less effort.",
  },
  {
    title: "Connected Information Creates Better Decisions",
    text: "When business knowledge lives in isolated systems, organizations lose valuable time and opportunities. We believe every team deserves instant access to the information they need to succeed.",
  },
  {
  title: "Trust Is Non-Negotiable",
  text: "Security, privacy, transparency, and responsible AI are fundamental to everything we build. Organizations trust us with their operational data, and we take that responsibility seriously.",
  },
];

/**
 * "What We Believe" — badge + heading/subtext, 4 belief cards
 * in a 2-column grid, each with a Robot icon.
 */
export default function WhatWeBelieve() {
  return (
    <section className="what-we-believe">
      <span className="what-we-believe__badge">What we Believe</span>

      <div className="what-we-believe__header">
        <h2 className="what-we-believe__heading">
          Accelerate innovation with AI-powered operations that unify teams
        </h2>
        <p className="what-we-believe__subtext">
          Artificial intelligence should enhance human decision-making—not replace it. We design AI that helps teams work smarter, make informed decisions, and focus on high-value work.
        </p>
      </div>

      <div className="what-we-believe__grid">
        {BELIEFS.map((belief) => (
          <div className="what-we-believe__card" key={belief.title}>
            <div className="what-we-believe__icon">
              <Robot size={35} color="#ffffff" weight="duotone" />
            </div>
            <h3 className="what-we-believe__card-title">{belief.title}</h3>
            <p className="what-we-believe__card-text">{belief.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}