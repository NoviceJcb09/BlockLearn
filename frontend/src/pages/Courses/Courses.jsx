import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../data/dashboardData";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="top-section">
        <h1>Courses</h1>
        <p>
          Access available courses, track enrolled subjects, and continue
          learning.
        </p>
      </div>

      <div className="courses-container">
        {courses.map((course, index) => (
          <CourseCard key={course.id} index={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
