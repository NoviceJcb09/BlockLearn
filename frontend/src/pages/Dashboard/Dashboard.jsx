import Icon from "../../components/Icon";
import { widgets } from "../../data/dashboardData";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <section className="welcome-user">
        <h1>Welcome back, John!</h1>
        <p>
          Overview of your learning progress, activities, and recent updates.
        </p>
      </section>

      <section className="widgets">
        {widgets.map((widget) => (
          <div key={widget.id} className="widget">
            <div className="left-section">
              <span
                className="icon-bg"
                style={{ backgroundColor: widget.iconBg }}
              >
                <Icon name={widget.icon} size={25} />
              </span>
              <h3>
                {widget.title.split(" ")[0]}<br/>
                {widget.title.split(" ").slice(1).join(" ")}
              </h3>
            </div>
            <div className="widget-value">
              {widget.valueIcon && (
                <img src={widget.valueIcon} alt="token" width={24} />
              )}
              <h3>{widget.value}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
