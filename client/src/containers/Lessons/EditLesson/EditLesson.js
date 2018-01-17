import React, { Component } from 'react';
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import styles from './EditLesson.css';

class EditLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      date: '',
      teacher: '',
      student: '',
      // resources: [],
      notes: ''
    }
  }

  componentWillMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()

    console.log('[EditLesson.js][componentWillMount] this.props', this.props)

    this.setState({
      id: this.props.lesson.id,
      date: this.props.lesson.date,
      teacher: this.props.lesson.teacher,
      student: this.props.lesson.student,
      resources: this.props.lesson.resources,
      notes: this.props.lesson.notes
    })
  }



  //********EDIT_LESSON selector functions **************************
  handleDateSelect = (event) => {
    this.setState({
      date: event.target
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = {}
    console.log('[EditLesson] handleSubmit: data', data)
    data = {
      id: this.state.id,
      date: this.state.date,
      teacher_id: this.state.teacher.id,
      student_id: this.state.student.id,
      // resource_ids: this.state.resources.map(r => r.id),
      notes: this.state.notes
    }

    // debugger

    this.props.updateLesson(data)
    e.preventDefault();
  }

  render() {
    const teacherOptions = this.props.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    })

    const studentOptions = this.props.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    })

    const resourceOptions = this.props.resources.map(resource => {
      return <option value={resource.title} id={resource.id} key={resource.id}>{resource.title}</option>
    })

    return (
      <div>
        <p className={styles.FormInstructions}>Edit form and click 'Update Lesson'</p>
        <form onSubmit={(event) => this.handleSubmit(event)} className={styles.Form}>
          <p>
            <label>DateSelector</label>
            <select value={this.state.date} onChange={(event) => this.handleDateSelect(event)}>
              {/* ...................................date select........................ */}
            </select>
          </p>
          <p>
            <label>TeacherSelector</label>
            <select value={this.state.teacher_id} onChange={(event) => this.handleTeacherSelect(event)}>
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
            <label>ResourceSelector</label>
            <select value={this.state.resource_id} onChange={(event) => this.handleResourceSelect(event)}>
              {resourceOptions}
            </select>
          </p>
          <p>
            <label>Notes</label>
            <input
              type="text"
              name="notes"
              id="notes"
              value={this.state.notes}
              onChange={this.handleChange}
              // onChange={(e) => this.setState({ notes: e.target.value })}
              required />
          </p>
          <button
            type="button"
            onClick={this.props.close}
            className={styles.Danger}
          >CANCEL</button>
          <button
            className={styles.Success}
          >Update Lesson</button>
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
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLesson)
