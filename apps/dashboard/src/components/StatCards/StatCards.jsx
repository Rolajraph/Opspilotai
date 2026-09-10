import { Users, Gauge, Wallet, Timer, TrendUp } from "@phosphor-icons/react";
import "./StatCards.css";

/**
 * 4-card KPI row: Total Active Users, AI Token Usage (MTD),
 * MTD Revenue, System Latency.
 */
export default function StatCards() {
  return (
    <div className="stat-cards">
      <div className="stat-card">
        <div className="stat-card__label-row">
          <span className="stat-card__label">Total Active Users</span>
          <Users size={16} color="#767586" />
        </div>
        <div className="stat-card__value-row">
          <span className="stat-card__value">1050</span>
          <span className="stat-card__badge">
            <TrendUp size={12} color="#10b981" />
            14%
          </span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card__label-row">
          <span className="stat-card__label">AI Token Usage (MTD)</span>
          <Gauge size={16} color="#767586" />
        </div>
        <div className="stat-card__usage-row">
          <span className="stat-card__value stat-card__value--medium">
            8.4M
          </span>
          <span className="stat-card__usage-limit">/ 10M limit</span>
        </div>
        <div className="stat-card__progress-track">
          <div className="stat-card__progress-fill" style={{ width: "84%" }} />
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card__label-row">
          <span className="stat-card__label">MTD Revenue</span>
          <Wallet size={16} color="#767586" />
        </div>
        <div className="stat-card__value-row">
          <span className="stat-card__value">₦1.2M</span>
          <span className="stat-card__badge">
            <TrendUp size={12} color="#10b981" />
            8%
          </span>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-card__label-row">
          <span className="stat-card__label">System Latency</span>
          <Timer size={16} color="#767586" />
        </div>
        <div className="stat-card__value-row stat-card__value-row--latency">
          <span className="stat-card__value">
            42<span className="stat-card__unit">ms</span>
          </span>
          <span className="stat-card__sublabel">P95 Global</span>
        </div>
      </div>
    </div>
  );
}
