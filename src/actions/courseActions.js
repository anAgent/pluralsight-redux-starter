/**
 *
 * @param course
 * @returns {{type: string, course: *}}
 */
export function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    course
  };
}
