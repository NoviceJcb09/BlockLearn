import "./Sidebar.css";
import Icon from "../Icon";

const links = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "courses", label: "Courses" },
  { icon: "ewallet", label: "E-Wallet" },
  { icon: "profile", label: "Profile" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href="#">
                <Icon name={link.icon} size={20} />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="logout">
        <Icon name="logout" size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
