import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'
// import { Route, NavLink } from 'react-router-dom'

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
      editLesson: false,

      lessons: [],
      resources: [],
      teachers: [],
      students: []
    }
  }

  componentWillMount() {
    this.props.onFetchLessons()
    // this.props.onFetchResources()
    // this.props.onFetchTeachers()
    // this.props.onFetchStudents()
  }

  //********CREATE_LESSON form handling **************************
  // createLessonForm = () => {
  //   this.setState({ createLesson: true })
  // }

  // createLessonFormCancel = () => {
  //   this.setState({ createLesson: false })
  // }

  // createLesson = (newLessonData) => {
  //   this.props.onLessonCreate(newLessonData)
  //   this.setState({ createLesson: false })
  // }

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
  // showEditLessonForm = (id) => {
  //   let lesson = this.props.lessons.filter(lesson => lesson.id === id)[0]
  //   this.setState({
  //     lesson: lesson,
  //     editLesson: true
  //   })
  // }

  // editLessonFalse = () => {
  //   this.setState({ editLesson: false })
  // }

  // editLessonUpdate = (data) => {
  //   this.props.onLessonUpdate(data)
  //   this.setState({ lesson: null, editLesson: false })
  // }

  render() {

    let lessonsList = this.props.lessons.map(lesson => {
      console.log(lesson)

      return (
        <Aux key={lesson.id}>
          <tr>
            <td>{lesson.id}</td>
            <td>{lesson.date}</td>
            <td>{lesson.teacher_id}</td>
            <td>{lesson.student_id}</td>
            <td>{lesson.notes}</td>
            <td>{lesson.resources.length}</td>

            <td><button
              onClick={() => this.showLesson(lesson.id)}
              className={classes.Success}>Show</button></td>
            <td><button
              onClick={() => this.showEditLessonForm(lesson.id)}
              className={classes.Edit}>Edit</button></td>
            <td><button
              onClick={() => this.props.onLessonDelete(lesson.id)}
              className={classes.Danger} >X</button></td>
          </tr>
        </Aux>
      )
    })

    return (
      <Aux>
        {/* <div style={{ margin: '30px' }}> */}
        <div>

          {/*********CREATE LESSON MODAL********************************************/}
          {/* <button onClick={this.createLessonForm}>Add Lesson</button> */}


          {/* <NavLink
            to={{ pathname: '/lessons/new' }}
            exact
            activeClassName="my-active"
            activeStyle={{
              color: '#2d3d1a',
              fontStyle: 'normal'
            }}
          >CREATE lesson</NavLink>

          <Route path="/lessons" exact component={Lessons} />

          <Modal
            show={this.state.createLesson}
            modalClosed={this.createLessonFormCancel}>
            <CreateLesson
              createLesson={(newLessonData) => this.createLesson(newLessonData)}
              createLessonCancel={this.createLessonFormCancel} />
          </Modal> */}

          {/**********SHOW LESSON MODAL**********************************************/}
          <Modal
            show={this.state.showLesson}
            modalClosed={this.showLessonClose}>
            <Aux>
              {this.state.lesson ? <Lesson
                id={this.state.lesson.id}
                date={this.state.lesson.date}
                lesson={this.state.lesson.teacher.lastname}
                student={this.state.lesson.student.lastname}
                notes={this.state.lesson.notes}
                resources={this.state.lesson.resources}
                close={this.showLessonClose}
              /> : <p> No data for lesson show</p>}
            </Aux>
          </Modal>

          {/**********EDIT LESSON MODAL**********************************************/}
          {/* <Modal
            show={this.state.editLesson}
            modalClosed={this.editLessonCancelHandler}>
            <Aux>
              <EditLesson
                id={this.state.lesson.id}
                teacher={this.state.lesson.teacher}
                student={this.state.lesson.student}
                resources={this.state.lesson.resources}
                notes={this.state.lesson.notes}
                close={this.editLessonFalse}
                updateLesson={(data) => this.editLessonUpdate(data)}
              />
            </Aux>
          </Modal> */}

          {/**********LESSONS INDEX TABLE*************************************/}
          <legend>All Lessons</legend>
          <Table className={classes.Lessons}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Lesson</th>
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
    students: state.stu.students,
    teachers: state.tch.teachers,
    lessons: state.les.lessons,
    resources: state.res.resources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLessonCreate: (newLessonData) => dispatch(actionCreators.createLesson(newLessonData)),
    onLessonUpdate: (data) => dispatch(actionCreators.updateLesson(data)),
    onLessonDelete: (id) => dispatch(actionCreators.deleteLesson(id)),
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
    // onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    // onFetchTeachers: () => dispatch(actionCreators.fetchTeachers()),
    // onFetchResources: () => dispatch(actionCreators.fetchResources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)