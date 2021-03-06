import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../store/courses";
import { getAuthors } from "../store/authors";

function useCourses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.entities.courses);
  const { authors } = useSelector((state) => state.entities.authors);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(getCourses());
    }
  }, [courses, dispatch]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(getAuthors());
    }
  }, [authors, dispatch]);

  const renderCourses = useMemo(
    () =>
      !authors.length
        ? []
        : courses.map((course) => ({
            ...course,
            authorName: authors.find((a) => a.id === course.authorId).name,
          })),
    [authors, courses]
  );

  return { dispatch, courses: renderCourses, authors };
}

export default useCourses;
