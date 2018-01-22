import expect from 'expect';
import React from 'react';
import {mount, shallow}  from 'enzyme';
import CourseForm from './courseForm';

function setup (saving) {
  const props = {
    course: { title: '' }, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('courseForm', () => {
  it('should render form and h1', () => {
    // Act
    const wrapper = setup(false);

    // Assert
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('should render button as "Save" for the button when not saving', () => {
    // Act
    const wrapper = setup(false);

    // Assert
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('should render button as "Saving" for the button when not saving', () => {
    // Act
    const wrapper = setup(true);

    // Assert
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
