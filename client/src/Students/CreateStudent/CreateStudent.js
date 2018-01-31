import React, { Component } from 'react';
import './CreateStudent.css'
<<<<<<< HEAD
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
=======
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
>>>>>>> test2

class CreateStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      level: '',
<<<<<<< HEAD
=======
      teacher_id: '',
>>>>>>> test2
      teacher: ''
    }
  }

<<<<<<< HEAD
  componentWillMount() {
=======
  componentWillMount(){
>>>>>>> test2
    this.props.onFetchTeachers()
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

  handleTeacherSelect = (event) => {
    this.setState({
      teacher_id: this.props.teachers.find(teacher => teacher.lastname === event.target.value).id
    })
  }

  render() {
<<<<<<< HEAD
=======

>>>>>>> test2
    const teacherOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

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
              required />
          </p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="lastname"
              required />
          </p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="email"
              required />
          </p>
          <p><label>Level</label>
            <input
              type="text"
              name="level"
              value={this.state.level}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="level"
<<<<<<< HEAD
              required />
          </p>
          <p><label>Select Teacher</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
            </select>
          </p>
=======
              required /></p>
          <p><label>Select Teacher</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
            </select>
          </p>
>>>>>>> test2
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

<<<<<<< HEAD

=======
>>>>>>> test2
const mapStateToProps = state => {
  return {
    teachers: state.tch.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    onFetchTeachers: () => dispatch(actions.fetchTeachers())
  };
=======
    onFetchTeachers: ()=> dispatch(actions.fetchTeachers())
  }
>>>>>>> test2
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)
