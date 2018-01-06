import React, { Component } from 'react';
import classes from './EditStudent.css';
import * as actionCreators from '../../../store/actions/index';
import { connect } from 'react-redux';

class EditStudent extends Component {
  state = {
    student: {
      firstname: 'John',
      lastname: 'Smith',
      email: 'js@abc.com',
      level: '3',
      teacher_id: '3',
    },
    id: 24,
    isEditable: false
  }

  componentDidMount() {
    this.setState({
      //   student: this.props.student,
      isEditable: true
    })
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateStudent(this.state.id, this.state.student)
    this.props.editStudentCancel()
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Edit form and click 'Update Student'</p>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <p><label htmlFor="student_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.student.firstname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder={this.state.firstname}
              required /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.student.lastname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder={this.state.lastname}
              required /></p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.student.email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder={this.state.email}
              required /></p>
          <p><label>Level </label>
            <input
              type="text"
              name="level"
              value={this.state.student.level}
              onChange={(event) => this.handleOnChange(event)}
              placeholder={this.state.level}
              required /></p>
          <p><label>Teacher ID </label>
            <input
              type="text"
              name="teacher_id"
              value={this.state.student.teacher_id}
              onChange={(event) => this.handleOnChange(event)}
              placeholder={this.state.teacher_id}
              required /></p>
          <button
            type="button"
            onClick={this.props.editStudentCancel}
            className={classes.Danger}
          >CANCEL</button>
          <button
            type="button"
            className={classes.Edit}
            onClick={() => this.setState({ isEditable: true })}
          > EDIT</button>
          <button className={classes.Success}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stu: state.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateStudent: (id, data) => dispatch(actionCreators.updateStudent, (id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
