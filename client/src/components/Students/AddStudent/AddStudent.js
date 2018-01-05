import React, { Component } from 'react';
import classes from './AddStudent.css';

class AddStudent extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    level: '',
    teacher_id: ''
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const studentData = this.state;
    this.props.addStudent(studentData)
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: ''
    });
    this.props.addStudentCancel()
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Complete form and click 'Add Student'</p>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <p><label htmlFor="student_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="firstname"
              required /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="lastname"
              required /></p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="email"
              required /></p>
          <p><label>Level </label>
            <input
              type="text"
              name="level"
              value={this.state.level}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="level"
              required /></p>
          <p><label>Teacher ID </label>
            <input
              type="text"
              name="teacher_id"
              value={this.state.teacher_id}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="teacher_id"
              required /></p>
          <button
            type="button"
            onClick={this.props.addStudentCancel}
            className={classes.Danger}
          >CANCEL</button>
          <button className={classes.Success}
          >ADD Student</button>
        </form>
      </div>
    )
  }
}

export default AddStudent;
