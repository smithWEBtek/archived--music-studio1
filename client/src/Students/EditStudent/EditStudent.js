import React, { Component } from 'react';
import './EditStudent.css';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

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
      active: ''
    }
  }

  componentDidMount() {
    this.props.onFetchTeachers()

    let teacher = this.props.teachers.find(t => t.id === this.props.teacher_id)

    this.setState({
      id: this.props.id,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email,
      level: this.props.level,
      teacher_id: this.props.teacher_id,
      teacher: teacher,
      active: this.props.active
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
    let data = this.state;
    this.props.updateStudent(data)
    e.preventDefault();
  }

  handleTeacherSelect = (event) => {
    this.setState({
      teacher_id: this.props.teachers.find(teacher => teacher.lastname === event.target.value).id
    })
  }

  render() {
    const teacherOptions = this.props.teachers.map(teacher => {
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
          <p><label>Select Teacher</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
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

const mapStateToProps = state => {
  return {
    teachers: state.tch.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTeachers: () => dispatch(actions.fetchTeachers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
