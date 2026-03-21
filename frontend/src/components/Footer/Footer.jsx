import Icon from "../Icon";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <Icon name="logo" size={40} />
            <h2>BlockLearn</h2>
          </div>
          <p>
            A blockchain learning management system that rewards learners
            through tokenized achievement.
          </p>
        </div>

        <div className="links-and-contacts">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
          </div>

          <div className="footer-contact">
            <h3>Contacts</h3>
            <p>
              <Icon name="mail" size={17} /> blocklearn@email.com
            </p>
            <p>
              <Icon name="phone" size={17} /> +63 986 123 4567
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BlockLearn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
