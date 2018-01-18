import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import './CreateLesson.css'

class CreateLesson extends Component {
  state = {
    date: '',
    teacher: '',
    student: '',
    notes: ''
  }

  componentWillMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()
  }

  //********CREATE_LESSON form handling **************************
  handleSubmit = (e) => {
    const lessonData = {
      date: this.state.date,
      teacher_id: this.state.teacher.id,
      student_id: this.state.student.id,
      notes: this.state.notes
    }
    this.props.createLesson(lessonData)
    this.setState({
      createLesson: false,
      date: '',
      teacher: '',
      student: '',
      notes: ''
    })
    this.props.closeForm()
  }

  //********CREATE_LESSON selector functions **************************
  handleTeacherSelect = (event) => {
    this.setState({
      teacher: this.props.teachers.find(teacher => teacher.lastname === event.target.value)
    })
  }

  handleStudentSelect = (event) => {
    this.setState({
      student: this.props.students.find(student => student.lastname === event.target.value)
    })
  }

  render() {
    const teacherOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    const studentOptions = this.props.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    })

    return (
      <div className="CreateLesson">
        <p className="FormInstructions">Complete form and click 'Create Lesson'</p>
        <form onSubmit={(event) => this.handleSubmit(event)} className="Form">
          <p>
            <label>Date</label>
            <input
              type="date"
              value={this.state.date}
              onChange={(event) => this.setState({ date: event.target.value })}
              placeholder="date"
              required
            />
          </p>
          <p>
            <label>TeacherSelector</label>
            <select
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
            </select>
          </p>
          <p>
            <label>StudentSelector</label>
            <select
              value={this.state.student_id}
              onChange={(event) => this.handleStudentSelect(event)}>
              {studentOptions}
            </select>
          </p>
          <p>
            <label>Notes</label>
            <input
              type="text"
              value={this.state.notes}
              onChange={(event) => this.setState({ notes: event.target.value })}
              placeholder="notes"
              required />
          </p>
          <button
            type="button"
            onClick={this.props.closeForm}
            className="Danger">CANCEL</button>

          <button
            className="Success">CREATE Lesson</button>
        </form >
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    teachers: state.tch.teachers,
    resources: state.res.resources,
    lessons: state.les.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers()),
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLesson)
