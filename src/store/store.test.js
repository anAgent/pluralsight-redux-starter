import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    // Arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'title'
    };
    const expected = course;

    // Act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    // Assert
    const result = store.getState().courses[0];
    expect(result).toEqual(expected);
  });
});
