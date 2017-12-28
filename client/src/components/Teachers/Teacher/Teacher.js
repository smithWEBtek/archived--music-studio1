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
      students = this.state.students.map((stu, index) => {
        return <Student
          firstname={stu.firstname}
          lastname={stu.lastname}
          email={stu.email}
          level={stu.level}
          teacher_id={stu.teacher_id}
          id={stu.id}
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