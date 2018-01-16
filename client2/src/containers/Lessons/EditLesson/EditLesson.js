import React, { Component } from 'react';
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import styles from './EditLesson.css';

class EditLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '2011-06-24',
      teacher: '',
      student: '',
      resource: '',
      resource_id: '',
      resource_ids: [],
      notes: ''

    }
  }

  componentWillMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      date: this.props.date,
      teacher_id: this.props.teacher_id,
      student_id: this.props.student_id,
      // resource_ids: [`${this.props.resource.id}`],
      notes: this.props.notes
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
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

  handleResourceSelect = (event) => {
    this.setState({
      resource: this.props.resources.find(resource => resource.title === event.target.value)
    })
  }



  handleSubmit = (e) => {
    let data = this.state;
    console.log('[EditLesson] handleSubmit: data', data)
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
            <label>ResourceSelector</label>
            <select value={this.state.resource_id} onChange={(event) => this.handleResourceSelect(event)}>
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
    onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers()),
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLesson)
