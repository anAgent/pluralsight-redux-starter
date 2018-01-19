import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './courseList';

class CoursePage extends React.Component {

  constructor (props, context) {
    super(props, context);
  }

  courseRow (course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render () {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    // This is a reference to the reducer: courseReducer.js
    courses: state.courses
  };
}

/**
 * This is known as an action creator
 * @param dispatch
 * @returns {{createCourse: function(*=): *}}
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(CoursePage);
