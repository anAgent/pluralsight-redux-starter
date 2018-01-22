import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './courseForm';
import * as toast from '../common/toast';
import {authorsFormattedForDropDown} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
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

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });

    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if(this.courseFormIsValid() === false) {
      return;
    }

    this.setState({
      saving: true
    });

    this.props
      .actions
      .saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toast.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({
      saving: true
    });

    toast
      .success('Course Saved ' + this.state.course.title);

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
          saving={this.state.saving}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array,
  actions: PropTypes.object.isRequired,
  saving: PropTypes.bool
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

  return {
    course,
    authors: authorsFormattedForDropDown(state.authors)
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
