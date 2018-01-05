import React, { Component } from 'react';
import classes from './AddTeacher.css';

class AddTeacher extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: ''
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = this.state;
    this.props.addTeacher(teacherData)
    this.setState({
      firstname: '',
      lastname: '',
      email: ''
    });
    this.props.addTeacherCancel()
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Complete form and click 'Add Teacher'</p>
        <form onSubmit={this.handleSubmit} className={classes.AddForm}>
          <p><label htmlFor="teacher_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="firstname"
              required
            /></p>
          <p><label htmlFor="teacher_name">Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="lastname"
              required
            /></p>
          <p><label htmlFor="teacher_name">Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="email"
              required
            /></p>
          <button
            type="button"
            onClick={this.props.addTeacherCancel}
            className={classes.Danger}
          >CANCEL</button>
          <button className={classes.Success}>ADD Teacher</button>
        </form>
      </div>
    )
  }
}

export default AddTeacher;
