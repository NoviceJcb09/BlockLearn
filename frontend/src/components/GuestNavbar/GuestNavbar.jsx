import React from "react";
import "./GuestNavbar.css";
import Icon from "../Icon";
import Button from "../Button";

const GuestNavbar = () => {
  return (
    <nav>
      <div className="logo-section">
        <Icon name="logo" size={40} />
        <h2>BlockLearn</h2>
      </div>

      <div className="button-section">
        <Button className="btn-login">Login</Button>
        <Button className="btn-signup">Sign Up</Button>
      </div>
    </nav>
  );
};

export default GuestNavbar;
