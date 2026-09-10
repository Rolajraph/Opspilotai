import "./BusinessClients.css";

const CLIENTS = [
  { name: "Acme Corp", plan: "Enterprise", users: 450, status: "ACTIVE" },
  { name: "Globex", plan: "Professional", users: 120, status: "ACTIVE" },
  { name: "Soylent Corp", plan: "Starter", users: 15, status: "INACTIVE" },
];

/**
 * "Business Clients" card — header with "See more", table of
 * client name/plan/active users/status.
 */
export default function BusinessClients() {
  return (
    <div className="business-clients">
      <div className="business-clients__header">
        <h2 className="business-clients__title">Business Clients</h2>
        <a href="#" className="business-clients__see-more">
          See more
        </a>
      </div>

      <table className="business-clients__table">
        <thead>
          <tr>
            <th>Business Name</th>
            <th>Plan</th>
            <th>Active Users</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {CLIENTS.map((client) => (
            <tr key={client.name}>
              <td className="business-clients__cell--name">{client.name}</td>
              <td className="business-clients__cell--muted">{client.plan}</td>
              <td className="business-clients__cell--muted">{client.users}</td>
                <td>
                <span
                  className={`business-clients__status business-clients__status--${client.status.toLowerCase()}`}
                >
                  {client.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}