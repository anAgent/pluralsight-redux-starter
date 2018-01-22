import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

describe('Async Actions', () => {

  const middleWare = [thunk];
  const mockStore = configureMockStore(middleWare);

    afterEach(() => {
      nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses.', (done) => {
      // Arrange
      /*
      // example of how to use nock.
      nock('http://example.com')
        .get('/courses')
        .reply(300, { body: { course: [{id: 1, firstName: 'fn', lastName: 'ln}] }});
       */
      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.LOAD_COURSES_SUCCESS, body: {
            courses: [{id: '1', title: 'Clean Code'}]
          }
        }
      ];
      const store = mockStore({courses: [], expectedActions });

      // Act
      const promise = courseActions.loadCourses();

      store.dispatch(promise).then(() => {
        const actions = store.getActions();

        // Asserts
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);

        done();
      });
    });
  });
});
