import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {

  constructor (props, context) {
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave () {
    this.props.actions.createCourse(this.state.course);
  }

  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;

    this.setState({
      course: course
    });
  }

  courseRow (course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}
        />
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
