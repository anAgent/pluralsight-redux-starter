
import {CREATE_COURSE, LOAD_COURSES_SUCCESS} from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    courses
  };
}

/**
 *
 * @param course
 * @returns {{type: string, course: *}}
 */
export function loadCourses () {

  return function  (dispatch) {

    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  };
}
