import { useState, useEffect } from "react";
import { Redirect, useParams } from "@reach/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import useCourses from "../../hooks/useCourses";
import CourseForm from "./CourseForm";
import { saveCourse } from "../../store/courses";
import { FullSpinner } from "../../styles/app";

const newCourse = { title: "", id: null, authorId: "", category: "" };

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const { dispatch, courses, authors } = useCourses();
  const [redirect, setRedirect] = useState(false);
  const [saving, setSaving] = useState(false);
  const { loading } = useSelector((state) => state.apiStatus);

  const { slug } = useParams();

  useEffect(() => {
    const course =
      slug !== "new" && courses.length
        ? courses.find((c) => c.slug === slug)
        : newCourse;
    setCourse(course);
  }, [courses, slug]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCourse((prev) => ({
      ...prev,
      [name]: name === "authorId" ? parseInt(value) : value,
    }));
  };

  function formIsValid() {}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("Course saved");
        setRedirect(true);
      })
      .catch((err) => {
        setErrors({ onSave: err.message });
        setSaving(false);
      });
  };

  return (
    <div className="container mt-5">
      {redirect && <Redirect to="/courses" noThrow />}
      {loading > 0 && <FullSpinner />}
      <h1>Manage Courses Page</h1>
      <div className="row">
        <CourseForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          course={course}
          authors={authors}
          errors={errors}
          saving={saving}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
