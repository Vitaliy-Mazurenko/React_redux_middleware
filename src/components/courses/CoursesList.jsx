import PropTypes from "prop-types";
import { Link } from "@reach/router";

const CoursesList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/course/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button className="btn btn-outline-danger">Delete course</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CoursesList.defaultProps = {
  courses: [],
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesList;
