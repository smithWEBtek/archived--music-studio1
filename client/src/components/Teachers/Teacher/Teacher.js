import React, { Component } from 'react';
import classes from './Teacher.css';
import TeacherStudents from '../TeacherStudents/TeacherStudents';

class Teacher extends Component {
  state = {
    teacher: null,
    students: null
  }

  componentDidMount() {
    this.setState({
      teacher: this.props,
      students: this.props.students
    });
  }

  render() {
    let teacher = { ...this.state.teacher }
    let teacherStudents = <p>(No students assigned)</p>

    if (teacher.students) {
      teacherStudents = <TeacherStudents teacherStudents={teacher.students} />
    };

    return (
      <div className={classes.Teacher} >
        <p>Teacher: {this.props.firstname} {this.props.lastname}</p>
        <p>Email: {this.props.email}</p>
        <div> {this.props.firstname}'s students: {teacherStudents}</div>
        <button onClick={this.props.close}>Close</button>
      </div>
    )
  }
}

export default Teacher;
