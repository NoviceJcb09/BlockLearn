import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Icon from "../Icon";

const links = [
  { icon: "dashboard", label: "Dashboard", to: "/dashboard" },
  { icon: "courses", label: "Courses", to: "/courses" },
  { icon: "ewallet", label: "E-Wallet", to: "/e-wallet" },
  { icon: "profile", label: "Profile", to: "/profile" },
];

const Sidebar = ({ expanded, mobileOpen, onClose }) => {
  return (
    <aside className={`sidebar${expanded ? " sidebar--expanded" : ""}${mobileOpen ? " sidebar--open" : ""}`}>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={({ isActive }) => isActive ? "active" : ""} onClick={onClose}>
                <Icon name={link.icon} size={20} />
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className="logout">
        <Icon name="logout" size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
