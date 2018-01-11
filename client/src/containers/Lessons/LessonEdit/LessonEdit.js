import React, { Component } from 'react'
import classes from './EditLesson.css'
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'
import LessonResources from '../Lesson/LessonResources'
import Aux from '../../../hoc/Aux/Aux'

class EditLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      date: '',
      teacher: '',
      student: '',
      resources: [],
      notes: ''
    }
  }

  componentDidMount() {
    // console.log('[EditLesson] componentDidMount this.props.lesson', this.props.lesson)
    this.setState({
      lesson: this.props.lesson
    })
  }

  handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {

    return (
      <div>
        <p className={classes.FormInstructions}>Edit form and click 'Update Lesson'</p>
        <form onSubmit={this.props.updateLesson(data)} className={classes.Form}>
          <div>
            <p><label>Date</label>
              <input
                type="date"
                name="lesson-date"
                value={this.state.lesson.date}
                onChange={this.handleOnChange}
              /></p>
            <p><label>Teacher</label>
              <input
                type="text"
                name="teacher"
                // value={this.state.lesson.teacher.lastname}
                value={this.state.lesson.teacher_id}
                onChange={(event) => this.handleOnChange(event)}
              /></p>
            <p><label>Student</label>
              <input
                type="text"
                name="student_id"
                // value={this.state.lesson.student.lastname}
                value={this.state.lesson.student_id}
                onChange={(event) => this.handleOnChange(event)}
              /></p>
            {/* </div>
          <div>
            <LessonResources resources={this.state.lesson.resources} />
          </div>
          <div> */}
            <p><label>Notes</label>
              <input
                type="text"
                name="notes"
                value={this.state.lesson.notes}
                onChange={(event) => this.handleOnChange(event)}
              /></p>
            <button
              type="button"
              onClick={this.props.close}
              className={classes.Danger}
            >CANCEL</button>
            <button className={classes.Success}
            >SAVE</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateLesson: (data) => dispatch(actionCreators.updateLesson(data))
  }
}

export default connect(null, mapDispatchToProps)(EditLesson)
