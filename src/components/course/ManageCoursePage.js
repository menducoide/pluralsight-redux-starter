import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving : false
        };


        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id == nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }
    saveCourse(event) {
        event.preventDefault();
        this.setState({saving : true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving : false})
            });

    }
    redirect() {
        this.setState({saving : false})
        toastr.success('Course Saved');
        this.context.router.push('/courses');
    }

    render() {

        return (
            <div>

                <CourseForm
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                    course={this.state.course} 
                    saving = {this.state.saving}/>
            </div>
        );
    }
}

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
    const course = courses.filter(c => c.id == id);
    if (course) return course[0];
    return null;
}
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // from de path '/course/:id' 
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    const authorFormattedFormDropdown = state.authors.map(
        author => {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        }
    )
    return {
        course: course,
        authors: authorFormattedFormDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);