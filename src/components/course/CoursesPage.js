import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseAction";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { browserHistory } from "react-router";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: '' }
        };
     this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }
    // onTitleChange(event) {
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({ course: course });

    // }
    // onClickSave() {
    //  //   this.props.dispatch(courseActions.createCourse(this.state.course)); O -->
    //  this.props.actions.createCourse(this.state.course);
    // }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    render() {
       const {courses}= this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type = 'submit'
                    value= 'Add course'
                    className='btn btn-primary'
                    onClick={this.redirectToAddCoursePage}/>

                <CourseList courses = {courses}></CourseList>              
            </div>
        );
    }
}

CoursesPage.propTypes = {
  //  dispatch: PropTypes.func.isRequired, //esto se deja sino se usa maptodispatch
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {    
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);