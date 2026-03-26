import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./UserNavbar.css";
import Icon from "../Icon";

const UserNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="user-navbar">
      <div className="logo-section">
        <Icon name="logo" size={40} />
        <h2>BlockLearn</h2>
      </div>
      <div className="nav-actions">
        <Icon name="notif-bell" size={28} className="notif-bell" />
        <div className="avatar-wrapper" ref={dropdownRef}>
          <button className="user-avatar" onClick={() => setOpen((o) => !o)}>JC</button>

          {open && (
            <div className="profile-dropdown">
              <div className="dropdown-top">
                <span>johndoe@email.com</span>
                <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
              </div>
              <div className="dropdown-body">
                <div className="dropdown-avatar">JC</div>
                <p className="greeting">Hi, John!</p>
                <button className="manage-btn" onClick={() => { navigate("/profile"); setOpen(false); }}>
                  Manage your Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
