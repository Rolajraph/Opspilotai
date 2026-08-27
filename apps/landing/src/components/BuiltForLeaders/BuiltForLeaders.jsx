import { CheckCircle } from "@phosphor-icons/react";
import bgMesh from "../../assets/images/bg-mesh-dark.png";
import "./BuiltForLeaders.css";

const BENEFITS = [
  "Enterprise-grade Security",
  "AI-Powered Insights",
  "Seamless Integrations",
];

export default function BuiltForLeaders() {
  return (
    <section className="built-for-leaders">
      <div className="built-for-leaders__card">
        <img
          src={bgMesh}
          alt=""
          aria-hidden="true"
          className="built-for-leaders__mesh"
        />

        <div className="built-for-leaders__content">
          <span className="built-for-leaders__badge">Private Impact</span>

          <h2 className="built-for-leaders__heading">Built for Leaders</h2>

          <p className="built-for-leaders__subtext">
            OpsPilot AI connects the tools your organization already uses,
            creating one intelligent operating layer across departments.
          </p>

          <ul className="built-for-leaders__list">
            {BENEFITS.map((benefit) => (
              <li className="built-for-leaders__list-item" key={benefit}>
                <CheckCircle size={20} color="#ffffff" weight="bold" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}