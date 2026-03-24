import "./CourseCard.css";

const COLORS = ["#811ADB", "#EF4444", "#10B981"];

const CourseCard = ({ title, description, progress, onClick, index = 0 }) => {
  const progressColor =
    progress >= 75 ? "#22c55e" : progress >= 40 ? "#f59e0b" : "#ef4444";
  const topColor = COLORS[index % COLORS.length];

  return (
    <div className="course-card" onClick={onClick} style={{ borderTop: `4px solid ${topColor}` }}>
      <div className="course-card-header">
        <span className="course-label">Course</span>
        <h3>{title}</h3>
      </div>

      <div className="course-card-body">
        <span className="about-label">About</span>
        <p>{description}</p>
      </div>

      <div className="course-card-footer">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%`, backgroundColor: progressColor }}
          />
        </div>
        <span className="progress-label">Completed Progress: {progress}%</span>
      </div>
    </div>
  );
};

export default CourseCard;
