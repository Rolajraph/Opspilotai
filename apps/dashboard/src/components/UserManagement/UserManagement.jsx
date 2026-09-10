import { MagnifyingGlass } from "@phosphor-icons/react";
import "./UserManagement.css";

const USERS = [
  {
    name: "Eleanor Shellstrop",
    role: "System Admin",
    lastActive: "2 mins ago",
    status: "ACTIVE",
  },
  {
    name: "Chidi Anagonye",
    role: "Analyst",
    lastActive: "1 hr ago",
    status: "ACTIVE",
  },
  {
    name: "Tahani Al-Jamil",
    role: "Manager",
    lastActive: "3 days ago",
    status: "INACTIVE",
  },
];

/**
 * "User Management" card — header with search input, table of
 * name/role/last active/status/actions.
 */
export default function UserManagement() {
  return (
    <div className="user-management">
      <div className="user-management__header">
        <h2 className="user-management__title">User Management</h2>
        <div className="user-management__search">
          <MagnifyingGlass size={16} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search users..."
            className="user-management__search-input"
          />
        </div>
      </div>

      <table className="user-management__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Last Active</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((user) => (
            <tr key={user.name}>
              <td className="user-management__cell--name">{user.name}</td>
              <td className="user-management__cell--muted">{user.role}</td>
              <td className="user-management__cell--muted">
                {user.lastActive}
              </td>
              <td>
                <span
                  className={`user-management__status user-management__status--${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>
              </td>
              <td>
                <a href="#" className="user-management__manage-link">
                  Manage
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}