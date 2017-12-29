import React, { Component } from 'react';
import classes from './Teacher.css';
import Student from '../../Students/Student/Student';

class Teacher extends Component {
  state = {
    teacher: this.props.teacher,
    students: []
  }

  componentDidMount() {
    this.setState({
      students: this.props.students
    })
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      students: nextProps.students
    })
  }

  render() {
    let students = null;
    if (this.state.students) {
      students = this.state.students.map((student, index) => {
        return <Student
          firstname={student.firstname}
          lastname={student.lastname}
          email={student.email}
          level={student.level}
          teacher_id={student.teacher_id}
          id={student.id}
          key={index}
          close={this.closeStudent}
        />
      });
    }
    console.log('this teachers students: ', students)
    return (
      <div className={classes.Teacher}>
        <fieldset>
          <p>Name: {this.props.firstname} {this.props.lastname}</p>
          <p>Email: {this.props.email}</p>
          <div>
            {students}
          </div>
          <button onClick={this.props.close}>Close</button>
        </fieldset>
      </div>
    )
  }
}

export default Teacher;