import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom'

import { Table } from 'reactstrap'
import classes from './Lessons.css'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../../components/UI/Modal/Modal'

import Lesson from './Lesson/Lesson'

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
    <Aux>
      <NavLink link="/lessons/:id" active>LessonLink</NavLink>
      <Route path="/lessons/:id" exact component={Lesson} />
    </Aux>


    let lessonsList = this.props.lessons.map(lesson => {
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
        <div>
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
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)