import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './CreateLesson.css'
import * as actionCreators from '../../../store/actions/index'

class CreateLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formVisible: false,
      date: '',
      teacher: '',
      student: '',
      notes: '',
      teachers: [],
      students: [],
      resources: [],
      createLesson: false,
      editLesson: false
    }
  }

  componentDidMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()
    this.setState({
      students: this.props.students,
      teachers: this.props.teachers,
      resources: this.props.resources
    })
  }


  //********CREATE_LESSON form handling **************************
  handleDateSelect = (event) => {
    this.setState({
      date: event.target.data
    })
  }

  handleTeacherSelect = (event) => {
    this.setState({
      teacher: this.props.teachers.filter(teacher => teacher.lastname === event.target.value)[0]
    })
  }

  handleStudentSelect = (event) => {
    this.setState({
      student: this.props.students.filter(student => student.lastname === event.target.value)[0]
    })
  }

  handleResourceSelect = (event) => {
    this.setState({
      resource: this.props.resources.filter(resource => resource.title === event.target.value)[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    debugger;

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
      resources: [],
      createLesson: false,
      editLesson: false
    })
    this.props.createLessonCancel()
  }

  render() {
    const teacherOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    const studentOptions = this.props.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    })

    const resourceOptions = this.props.resources.map((resource, index) => {
      return <option value={resource.title} id={resource.id} key={resource.id}>{resource.title}</option>
      // return <option component="select" multiple={true} value={[]} id={resource.id} key={resource.id}>{resource.title}</option>
    })

    return (
      <div className={styles.CreateLesson}>
        <p className={styles.FormInstructions}>Complete form and click 'Create Lesson'</p>
        <form className={styles.Form}>
          {/* <p><label>DateSelector</label>
            <select
              type='date'
              value={this.state.date}
              onChange={(event) => this.handleDateSelect(event)}>
            </select>
          </p> */}
          <p><label>TeacherSelector</label>
            <select
              type='select'
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleTeacherSelect(event)}>
              {teacherOptions}
            </select>
          </p>
          <p><label>StudentSelector</label>
            <select
              type='select'
              value={this.state.student.lastname}
              onChange={(event) => this.handleStudentSelect(event)}>
              {studentOptions}
            </select>
          </p>
          <p><label>ResourceSelector</label>
            <select
              type='select-multiple'
              value={this.state.resources}
              onChange={(event) => this.handleResourceSelect(event)}>
              {resourceOptions}
            </select>
          </p>
          <p><label>Notes</label>
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
          <button
            type='button'
            className={styles.Success}
            onSubmit={(event) => this.handleSubmit(event)}>CREATE Lesson</button>
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
    onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers()),
    onFetchResources: () => dispatch(actionCreators.fetchResources()),
    onUpdateLesson: (data) => dispatch(actionCreators.updateLesson(data)),
    onDeleteLesson: (id) => dispatch(actionCreators.deleteLesson(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLesson);
