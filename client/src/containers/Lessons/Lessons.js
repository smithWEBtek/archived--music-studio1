import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'

import { Table } from 'reactstrap'
import classes from './Lessons.css'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

import Lesson from './Lesson/Lesson'
// import CreateLesson from './CreateLesson/CreateLesson'
// import EditLesson from './EditLesson/EditLesson'
// import LessonStats from './LessonStats/LessonStats'

class Lessons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lesson: null,
      showLesson: false,

      lessonDetail: null,
      showLessonDetail: false,

      createLesson: false,
      editLesson: false
    }
  }

  componentDidMount() {
    this.props.onFetchLessons()
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

  //********SHOW_LESSON form handling**************************
  showLesson = (id) => {
    let lesson = this.props.lessons.filter(lesson => lesson.id === id)[0]
    this.setState({
      lesson: lesson,
      showLesson: true
    })
  }

  showLessonClose = () => {
    this.setState({ showLesson: false })
  }

  //********EDIT_LESSON form handling**************************
  showEditLessonForm = (id) => {
    let lesson = this.props.lessons.filter(lesson => lesson.id === id)[0]
    this.setState({
      lesson: lesson,
      editLesson: true
    })
  }

  editLessonFalse = () => {
    this.setState({ editLesson: false })
  }

  editLessonUpdate = (data) => {
    this.props.onLessonUpdate(data)
    this.setState({ lesson: null, editLesson: false })
  }

  render() {
    let lessonsList = this.props.lessons.map(lesson => {
      return (
        <Aux key={lesson.id}>
          <tr>
            <td>{lesson.id}</td>
            <td>{lesson.date}</td>
            <td>{lesson.teacher.lastname}</td>
            <td>{lesson.student.lastname}</td>
            <td>{lesson.notes}</td>
            <td>{lesson.resources.length}</td>
            <td><button onClick={() => this.showLessonHandler(lesson.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.props.onLessonDelete(lesson.id)}>X</button></td>
            <td><button
              onClick={() => this.showLesson(lesson.id)}
              className={classes.Success}>Show</button></td>
            <td><button
              onClick={() => this.showEditLessonForm(lesson.id)}
              className={classes.Edit}>Edit</button></td>
            <td><button
              onClick={() => this.props.onLessonDelete(lesson.id)}
              className={classes.Danger}>X</button></td>
          </tr>
        </Aux>
      )
    })

    return (
      <Aux>
        <div style={{ margin: '30px' }}>

          {/*********CREATE LESSON MODAL********************************************/}
          {/* <button onClick={this.createLessonForm}>Add Lesson</button>
          <Modal
            show={this.state.createLesson}
            modalClosed={this.createLessonFormCancel}>
            <CreateLesson
              createLesson={(newLessonData) => this.createLesson(newLessonData)}
              createLessonCancel={this.createLessonFormCancel} />
          </Modal> */}

          {/**********SHOW LESSON MODAL**********************************************/}
          {/* <Modal
            show={this.state.showLesson}
            modalClosed={this.showLessonClose}>
            <Aux>
              {this.state.lesson ? <Lesson
                id={this.state.lesson.id}
                firstname={this.state.lesson.firstname}
                lastname={this.state.lesson.lastname}
                email={this.state.lesson.email}
                level={this.state.lesson.level}
                teacher_id={this.state.lesson.teacher_id}
                close={this.showLessonClose}
              /> : <p> No data for lesson show</p>}
            </Aux>
          </Modal> */}

          {/**********EDIT LESSON MODAL**********************************************/}
          {/* <Modal
            show={this.state.editLesson}
            modalClosed={this.editLessonCancelHandler}>
            <Aux>
              {this.state.lesson ? <EditLesson
                id={this.state.lesson.id}
                firstname={this.state.lesson.firstname}
                lastname={this.state.lesson.lastname}
                email={this.state.lesson.email}
                level={this.state.lesson.level}
                teacher_id={this.state.lesson.teacher_id}
                close={this.editLessonFalse}
                updateLesson={(data) => this.editLessonUpdate(data)}
              /> : <p>no lesson data yet...</p>}
            </Aux>
          </Modal> */}

          {/**********LESSONS INDEX TABLE*************************************/}
          <legend>All Lessons</legend>
          <Table className={classes.Lessons}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Teacher</th>
                <th>Student</th>
                <th>Notes</th>
                <th>#Resources</th>
                <th>Show</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {lessonsList}
            </tbody>
          </Table>
        </div>
        {/**********LESSONS LessonStats*************************************/}
        {/* <LessonStats lessons={this.props.lessons} /> */}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.les.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLessonCreate: (newLessonData) => dispatch(actionCreators.createLesson(newLessonData)),
    onLessonUpdate: (data) => dispatch(actionCreators.updateLesson(data)),
    onLessonDelete: (id) => dispatch(actionCreators.deleteLesson(id)),
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)