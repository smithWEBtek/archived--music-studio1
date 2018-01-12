import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import styles from './CreateLesson.css'

class CreateLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teacher: {},
      student: {},
      notes: '',
      lessonResources: [],
      createLesson: false
    }
  }

  //********CREATE_LESSON form handling **************************
  createLessonForm = () => {
    this.setState({ createLesson: true })
  }

  createLessonFormCancel = () => {
    this.setState({ createLesson: false })
  }

  createLesson = (newLessonData) => {
    this.props.onLessonCreate(newLessonData)
    this.setState({ createLesson: false })
  }

  handleLessonSelect = (event) => {
    this.setState({
      teacher: this.props.teachers.find(teacher => teacher.lastname === event.target.value)
    })
  }

  handleLessonSelect = (event) => {
    this.setState({
      student: this.props.students.find(student => student.lastname === event.target.value)
    })
  }

  handleResourceSelect = (event) => {
    this.setState({
      resource: this.props.resources.find(resource => resource.title === event.target.value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const lessonData = {
      date: this.state.date,
      teacher: this.state.teacher,
      student: this.state.student,
      resources: this.state.resources,
      notes: this.state.notes
    }
    this.props.createLesson(lessonData)
    this.setState({
      formVisible: false,
      date: '',
      teacher: '',
      student: '',
      notes: '',
      resource: '',

      teachers: [],
      students: [],
      resources: [],
      lessons: []
    })
    this.props.createLessonCancel()
  }

  render() {
    const teacherOptions = this.state.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    const studentOptions = this.state.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    })

    const resourceOptions = this.state.resources.map(resource => {
      return <option value={resource.title} id={resource.id} key={resource.id}>{resource.title}</option>
    })

    return (
      <div className={styles.CreateLesson}>
        <p className={styles.FormInstructions}>Complete form and click 'Create Lesson'</p>
        <form onSubmit={(event) => this.handleSubmit(event)} className={styles.Form}>
          <p>
            <label>LessonSelector</label>
            <select value={this.state.teacher.lastname} onChange={(event) => this.handleLessonSelect(event)}>
              {teacherOptions}
            </select>
          </p>

          <p>
            <label>LessonSelector</label>
            <select value={this.state.student.lastname} onChange={(event) => this.handleLessonSelect(event)}>
              {studentOptions}
            </select>
          </p>

          <p>
            <label>ResourceSelector</label>
            <select value={this.state.resource.title} onChange={(event) => this.handleResourceSelect(event)}>
              {resourceOptions}
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
            onClick={this.props.createLessonCancel}
            className={styles.Danger}>CANCEL</button>
          <button className={styles.Success}>CREATE Lesson</button>
        </form>
      </div>
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
    onLessonCreate: (newLessonData) => dispatch(actionCreators.createLesson(newLessonData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLesson)