import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../data/dashboardData";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-page">
      <section className="top-section">
        <h1>Courses</h1>
        <p>
          Access available courses, track enrolled subjects, and continue
          learning.
        </p>
      </section>

      <section className="courses-container">
        {courses.length === 0 ? (
          <div className="no-courses">
            <span className="no-courses-icon">📚</span>
            <p>No enrolled courses yet</p>
          </div>
        ) : (
          courses.map((course, index) => (
            <CourseCard key={course.id} index={index} {...course} />
          ))
        )}
      </section>
    </div>
  );
};

export default Courses;
