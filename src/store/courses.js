import { createSlice } from "@reduxjs/toolkit";
import * as coursesApi from "../api/courseApi";
import { beginApiCall, apiCallSuccess } from "./apiStatus";

const slice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    error: null,
  },
  reducers: {
    courseAdded: (state, action) => {
      state.courses.push(action.payload);
    },
    courseUpdated: (state, action) => {
      const index = state.courses.findIndex((c) => c.id === action.payload.id);
      state.courses[index] = action.payload;
    },
    coursesReceived: (state, action) => {
      state.courses = action.payload.data;
    },
    onError: (state, action) => {
      state.error = action.paylod;
    },
  },
});

export default slice.reducer;
export const { courseAdded, coursesReceived, onError, courseUpdated } =
  slice.actions;

export const getCourses = () => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const courses = await coursesApi.getCourses();
    dispatch(coursesReceived(courses));
  } catch (err) {
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};

export const saveCourse = (course) => async (dispatch) => {
  dispatch(beginApiCall());
  try {
    const savedCourse = await coursesApi.saveCourse(course);
    course.id
      ? dispatch(courseUpdated(savedCourse.data))
      : dispatch(courseAdded(savedCourse.data));
  } catch (err) {
    dispatch(onError);
    throw err;
  } finally {
    dispatch(apiCallSuccess());
  }
};
