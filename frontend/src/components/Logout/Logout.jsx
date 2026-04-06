import "./Logout.css";

const Logout = () => {
  return (
    <div className="logout-container">
      <div className="top-section">
        <h2>Confirm logout</h2>
        <hr />
        <p>Are you sure you want to logout?</p>
      </div>

      <div className="button-section">
        <button>Cancel</button>
        <button>OK</button>
      </div>
    </div>
  );
};

export default Logout;
