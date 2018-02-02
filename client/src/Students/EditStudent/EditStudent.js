import React, { Component } from 'react';
import './EditStudent.css';

class EditStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: '',
      teacher: '',
      teachers: [],
      active: ''
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      level: this.props.level,
      teacher_id: this.props.teacher_id,
      teacher: this.props.teacher,
      teachers: this.props.teachers,
      active: this.props.active
    })
  }

  handleTeacherSelect = (event) => {
    this.setState({
      teacher: this.props.teachers.find(teacher => teacher.lastname === event.target.value)
    })
  }

  toggleActiveSelect = () => {
    let toggle = this.state.active
    this.setState({ active: !toggle })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      level: this.state.level,
      teacher_id: this.state.teacher.id,
      active: this.state.active
    }

    this.props.editStudentUpdate(data)
    e.preventDefault();
  }

  render() {
    const teacherSelectOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    return (
      <div>
        <p className="FormInstructions">Edit form and click 'Update Student'</p>
        <form className="Form">
          <p><label htmlFor="student_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            /></p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            /></p>
          <p><label>Level </label>
            <input
              type="text"
              name="level"
              value={this.state.level}
              onChange={this.handleChange}
            /></p>
          <p>
            <label>TeacherSelector</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherSelectOptions}
            </select>
          </p>
          <p><label>Active?</label>
            <button
              type="button"
              name="active"
              value={this.state.active}
              onClick={() => this.toggleActiveSelect()}
              className={this.state.active ? "true" : "false"}
            >{this.state.active.toString()}</button></p>
          <button
            type="button"
            name="cancel"
            onClick={this.props.close}
            className="Danger"
          >CANCEL</button>
          <button
            type='button'
            className="Success"
            onClick={(e) => this.handleSubmit(e)}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

export default EditStudent
