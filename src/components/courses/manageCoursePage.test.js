import expect from 'expect';
import React from 'react';
import {mount, shallow}  from 'enzyme';
import { ManageCoursePage } from './manageCoursePage';

describe('ManageCoursePage', () => {
  it('should set the error message when trying to save an empty title.', () => {
    // Arrange
    const props = {
      course: { title: '' },
      authors: [],
      actions: {
        saveCourse: () => { return Promise.resolve(); }
      }
    };
    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find('input').last();

    // Act
    saveButton.simulate('click');

    // Assert
    expect(saveButton.prop('type')).toBe('submit');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
