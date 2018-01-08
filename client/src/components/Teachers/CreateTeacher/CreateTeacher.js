import React, { Component } from 'react';
import classes from './CreateTeacher.css';

class CreateTeacher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = this.state;
    this.props.createTeacher(teacherData)
    this.setState({
      firstname: '',
      lastname: '',
      email: ''
    });
    this.props.createTeacherCancel()
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Complete form and click 'Add Teacher'</p>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
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
            onClick={this.props.createTeacherCancel}
            className={classes.Danger}
          >CANCEL</button>
          <button className={classes.Success}>CREATE Teacher</button>
        </form>
      </div>
    )
  }
}

export default CreateTeacher;
