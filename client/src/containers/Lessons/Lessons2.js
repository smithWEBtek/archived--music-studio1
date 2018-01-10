import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'

import { Table } from 'reactstrap'
import classes from './Lessons.css'
import Aux from '../../hoc/Aux/Aux'
// import Modal from '../../components/UI/Modal/Modal'
import Lesson from './Lesson/Lesson'
import Students from '../../components/Students/Students'
// import LessonNav from './LessonNav/LessonNav'

class Lessons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
  }

  componentWillMount() {
    this.props.onFetchLessons()
  }

  render() {
    let lessonGroup = this.props.lessons.map((lesson, index) => {
      return (
        <Aux key={index}>
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
            {/* <td><button><Link to={'lessons/' + lesson.id}>LessonLink</Link></button></td> */}
            <td><button><Link to={'/lessons/2'}>LessonLink</Link></button></td>

            {/* <Route path='lessons/:id' component={Lesson} /> */}
            <Route path='lessons/3' component={Lesson} />

          </tr>
        </Aux >
      )
    })

    return (
      <div>
        <h4>All Lessons</h4>
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
              <th>LessonLink</th>
            </tr>
          </thead>
          <tbody>
            {lessonGroup}
          </tbody>
        </Table>
      </div>
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
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lessons));