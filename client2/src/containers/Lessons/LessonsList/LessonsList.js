import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/index'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'

class LessonsList extends Component {

  componentDidMount() {
    this.props.onFetchLessons();
  }

  render() {

    console.log('[Lessons] DidMount, this.props', this.props)


    let renderLessons = <td>no lessons on record</td>

    let studentLessons = this.props.lessons.filter(les => les.student_id === this.props.student_id)

    renderLessons = studentLessons.map((lesson, index) => {
      return (
        <Aux key={index} >
          <tr>
            <th scope="row">{index}</th>
            <td><Link key={lesson.id} style={{ marginRight: '12px' }} to={`/lessons/${lesson.id}`}>Lesson {lesson.id}</Link></td>
            <td>{lesson.date}</td>
            <td>{lesson.teacher.lastname}</td>
            <td>{lesson.student.lastname}</td>
            <td>{lesson.resources.length}</td>
          </tr>
        </Aux >
      )
    })

    return (
      <Table striped >
        <thead>
          <tr>
            <th>ID</th>
            <th>LessonLink</th>
            <th>Date</th>
            <th>Teacher</th>
            <th>Student</th>
            <th>#Resources</th>
          </tr>
        </thead>
        <tbody>
          {renderLessons}
        </tbody>
      </Table>
    )
  }
}


const mapStateToProps = state => {
  return {
    lessons: state.les.lessons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList)
