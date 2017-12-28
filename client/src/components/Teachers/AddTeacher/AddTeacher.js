import React, { Component } from 'react';
import classes from './AddTeacher.css';

class AddTeacher extends Component {
  state = {
    formVisible: false,
    firstname: '',
    lastname: '',
    email: ''
  }

  handleShowForm = (event) => {
    this.setState({ formVisible: !this.state.formVisible })
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const teacher = this.state;
    this.props.addTeacher(teacher)
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      formVisible: false,
    });
  }

  render() {
    return (
      <div className={classes.AddTeacher}>
        <button onClick={(event) => this.handleShowForm(event)}>
          AddTeacherForm</button>
        {this.state.formVisible
          ?
          <form onSubmit={this.handleSubmit} className={classes.AddForm}>

            <p><label htmlFor="teacher_name">First name </label>
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={(event) => this.handleOnChange(event)}
                placeholder="firstname"
              /></p>

            <p><label htmlFor="teacher_name">Last name </label>
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={(event) => this.handleOnChange(event)}
                placeholder="lastname"
              /></p>

            <p><label htmlFor="teacher_name">Email </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={(event) => this.handleOnChange(event)}
                placeholder="email"
              /></p>
            <button onClick={this.props.addTeacherCancel}>CANCEL</button>
            <button>ADD Teacher</button>
          </form>
          : null
        }
      </div>
    )
  }
}

export default AddTeacher;
