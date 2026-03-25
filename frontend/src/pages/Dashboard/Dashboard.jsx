import Icon from "../../components/Icon";
import CourseCard from "../../components/CourseCard/CourseCard";
import { widgets, courses } from "../../data/dashboardData";
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
                {widget.title.split(" ")[0]}
                <br />
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

      <section className="user-courses">
        <div className="top-section">
          <h2>Courses</h2>

          <button>
            View All <Icon name="arrow-right" size={16} />
          </button>
        </div>

        <hr />

        <div className="courses-container">
          {courses.slice(0, 3).map((course, index) => (
            <CourseCard key={course.id} index={index} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
