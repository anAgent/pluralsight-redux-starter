/**
 *
 * @param course
 * @returns {{type: string, course: *}}
 */
import {CREATE_COURSE} from './actionTypes';


export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    course
  };
}
