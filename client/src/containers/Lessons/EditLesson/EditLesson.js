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

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      date: this.props.date,
      teacher: this.props.teacher,
      student: this.props.student,
      resources: this.props.resources,
      notes: this.props.notes
    })
  }

  handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('[EditLesson][handleSubmit] this.state', this.state)
    let data = this.state
    this.props.updateLesson(data)
  }

  render() {
    let lessonResources = <p>[EditLesson line 47]no resources assigned</p>
    if (this.state.resources.length > 0) {
      lessonResources = (
        this.state.resources.map((res, index) => {
          return (
            <LessonResources resource={res} key={index} />
          )
        })
      )
    }

    let lessonData = (

      <div>
        <p className={classes.FormInstructions}>Edit form and click 'Update Lesson'</p>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <p><label>Date</label>
            <input
              type="date"
              name="lesson-date"
              value={this.state.date}
              onChange={this.handleOnChange}
            /></p>
          <p><label>Teacher</label>
            <input
              type="text"
              name="teacher"
              value={this.state.teacher.lastname}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <p><label>Student</label>
            <input
              type="text"
              name="student_id"
              value={this.state.student.lastname}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <div><label>Resources</label>
            {lessonResources}
          </div>
          <p><label>Notes</label>
            <input
              type="text"
              name="notes"
              value={this.state.notes}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <button
            type="button"
            onClick={this.props.close}
            className={classes.Danger}
          >CANCEL</button>
          <button className={classes.Success}
          >SAVE</button>
        </form>
      </div>
    )

    return (
      <Aux>
        {lessonData}
      </Aux>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateLesson: (data) => dispatch(actionCreators.updateLesson, (data))
  }
}

export default connect('', mapDispatchToProps)(EditLesson)




