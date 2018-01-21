import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this is necessary to populate form when existing courses is loaded directly.
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;

    return this.setState({course});
  }

  saveCourse(event) {
    event.preventDefault();

    this.props
      .actions
      .saveCourse(this.state.course);

    this.context
      .router
      .push('/courses');
  }

  render() {
    return (
      <div data-component="manageCoursePageComponent">
        <CourseForm
          course={this.state.course}
          onSave={this.saveCourse}
          onChange={this.updateCourseState}
          errors={this.state.errors}
          allAuthors={this.props.authors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array,
  actions: PropTypes.object.isRequired
};

// Pull in the react Router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  return course.length ? course[0] : null;
}

function mapStateToProps(state, ownProps) {

  const courseId = ownProps.params.id; // This is mapped to the routes segment in routes.js

  let course = {
    id: '',
    title: '',
    watchHref: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course,
    authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ManageCoursePage);
