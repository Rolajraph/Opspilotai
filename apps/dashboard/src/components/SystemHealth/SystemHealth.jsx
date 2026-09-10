import { Brain, Database, ArrowsClockwise, Globe } from "@phosphor-icons/react";
import "./SystemHealth.css";

const SYSTEMS = [
  {
    icon: Brain,
    name: "AI Inference Engine",
    status: "99.9%",
    color: "success",
  },
  {
    icon: Database,
    name: "Knowledge Base Indexer",
    status: "Healthy",
    color: "success",
  },
  {
    icon: ArrowsClockwise,
    name: "Workflow Automator",
    status: "Degraded",
    color: "warning",
  },
  {
    icon: Globe,
    name: "API Gateway",
    status: "42ms",
    color: "success",
  },
];

/**
 * "System Health" card — list of systems with a status dot +
 * value for each.
 */
export default function SystemHealth() {
  return (
    <div className="system-health">
      <div className="system-health__header">
        <h2 className="system-health__title">System Health</h2>
      </div>

      <div className="system-health__list">
        {SYSTEMS.map(({ icon: Icon, name, status, color }) => (
          <div className="system-health__item" key={name}>
            <div className="system-health__item-left">
              <span className="system-health__icon-bg">
                <Icon size={13.5} color="#2c2abc" />
              </span>
              <span className="system-health__item-name">{name}</span>
            </div>
            <div className="system-health__item-right">
              <span
                className={`system-health__dot system-health__dot--${color}`}
              />
              <span
                className={`system-health__status system-health__status--${color}`}
              >
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}