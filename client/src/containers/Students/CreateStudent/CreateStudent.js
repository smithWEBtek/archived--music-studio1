import React, { Component } from 'react';
import styles from './CreateStudent.css'

class CreateStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newStudentData = this.state;
    this.props.createStudent(newStudentData)
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: ''
    });
    this.props.createStudentCancel()
  }

  render() {
    return (
      <div>
        <p>Complete form and click 'Add Student'</p>
        <form onSubmit={this.handleSubmit}>
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
            onClick={this.props.createStudentCancel}
            className="Danger"
          >CANCEL</button>
          <button className="Success"
          >CREATE Student</button>
        </form>
      </div>
    )
  }
}

export default CreateStudent;
