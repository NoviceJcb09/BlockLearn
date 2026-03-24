import "./UserNavbar.css";
import Icon from "../Icon";

const UserNavbar = () => {
  return (
    <nav>
      <div className="logo-section">
        <Icon name="logo" size={40} />
        <h2>BlockLearn</h2>
      </div>
      <div className="nav-actions">
        <Icon name="notif-bell" size={28} className="notif-bell" />
        <button className="user-avatar">JC</button>
      </div>
    </nav>
  );
};

export default UserNavbar;
