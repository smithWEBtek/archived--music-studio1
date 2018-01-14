import React, { Component } from 'react';
import styles from './EditLesson.css';

class EditLesson extends Component {
  state = {
    id: null,
    date: '',
    teacher_id: '',
    student_id: '',
    notes: '',
    resources: []
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      date: this.props.date,
      teacher_id: this.props.teacher_id,
      student_id: this.props.student_id,
      notes: this.props.notes,
      resources: this.props.resources
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = this.state;
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
              {teacherOptions}
            </select>
          </p>
          <p>
            <label>StudentSelector</label>
            <select value={this.state.student.lastname} onChange={(event) => this.handleStudentSelect(event)}>
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
              type="textarea"
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

export default EditLesson
