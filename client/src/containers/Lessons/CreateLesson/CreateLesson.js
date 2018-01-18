import React, { Component } from 'react'
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import classes from './CreateLesson.css'
import PropTypes from 'prop-types'

class CreateLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      createLesson: false,
      date: '',
      teacher: '',
      student: '',
      notes: ''
    }
  }

  componentWillMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()
  }

  //********CREATE_LESSON form handling **************************
  createLessonForm = () => {
    this.setState({ createLesson: true })
  }

  createLessonFormCancel = () => {
    this.setState({ createLesson: false })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const lessonData = {
      date: this.state.date,
      teacher_id: this.state.teacher.id,
      student_id: this.state.student.id,
      notes: this.state.notes
    }

    this.props.createLesson(lessonData)

    this.setState({
      createLesson: false,
      date: '2011-06-24',
      teacher: '',
      student: '',
      notes: ''
    })
    this.props.createLessonCancel()
  }

  //********CREATE_LESSON selector functions **************************
  handleDateSelect = (event) => {
    this.setState({
      date: event.target
    })
  }

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

    // console.log('[CreateLesson] at render() this.props:', this.props)

    const teacherOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    const studentOptions = this.props.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    })

    return (
      <div className={classes.CreateLesson}>
        <p className={classes.FormInstructions}>Complete form and click 'Create Lesson'</p>
        <form onSubmit={(event) => this.handleSubmit(event)} className={classes.Form}>

          <SingleDatePicker
            date={null} // momentPropTypes.momentObj or null
            onDateChange={date => this.handleDateSelect({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          />
          <p>
            <label>TeacherSelector</label>
            <select value={this.state.teacher.lastname} onChange={(event) => this.handleTeacherSelect(event)}>
              console.log('teacherOptions', teacherOptions)
              {teacherOptions}
            </select>
          </p>
          <p>
            <label>StudentSelector</label>
            <select value={this.state.student_id} onChange={(event) => this.handleStudentSelect(event)}>
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
            onClick={this.props.createLessonCancel}
            className={classes.Danger}>CANCEL</button>
          <button className={classes.Success}>CREATE Lesson</button>
        </form>
      </div>
    )
  }
}

SingleDatePicker.propTypes = {
  // date: PropTypes.momentPropTypes.momentObj.isRequired,
  // date: PropTypes.momentObj.isRequired,
  // date: PropTypes.momentPropTypes.isRequired,
  onDateChange: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func.isRequired
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
// export default connect(mapStateToProps)(CreateLesson)
