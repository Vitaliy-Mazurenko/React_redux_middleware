import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import useCourses from "../../hooks/useCourses";
import { FullSpinner } from "../../styles/app";
import CoursesList from "./CoursesList";

const CoursesPage = () => {
  const { courses } = useCourses();
  const { loading } = useSelector((state) => state.apiStatus);

  if (loading > 0) {
    return <FullSpinner />;
  }

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <Link to="/course/new" className="btn btn-primary my-3">
        Add Course
      </Link>
      <CoursesList courses={courses} />
    </div>
  );
};

export default CoursesPage;
