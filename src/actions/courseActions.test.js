import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('courseActions', () => {

  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // Arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedResult = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      // Act
      const result = courseActions.createCourseSuccess(course);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('updateCourseSuccess', () => {
    it('should create a UPDATE_COURSE_SUCCESS action', () => {
      // Arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedResult = {
        type: types.UPDATE_COURSE_SUCCESS,
        course
      };

      // Act
      const result = courseActions.updateCourseSuccess(course);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('loadCoursesSuccess', () => {
    it('should create a LOAD_COURSES_SUCCESS action', () => {
      // Arrange
      const courses = [{id: 'clean-code', title: 'Clean Code'}];
      const expectedResult = {
        type: types.LOAD_COURSES_SUCCESS,
        courses
      };

      // Act
      const result = courseActions.loadCoursesSuccess(courses);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
