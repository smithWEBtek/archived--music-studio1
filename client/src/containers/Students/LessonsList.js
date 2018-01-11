import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
// import classes from './LessonsList.css'
import Aux from '../../hoc/Aux/Aux'

const LessonsList = (props) => {

  let list = props.lessons.map(lesson => {
    return (
      <tr key={lesson.id}>
        <td>{lesson.id}</td>
        <td>{lesson.date}</td>
        <td>{lesson.notes}</td>
        {/* <td>{props.teachers.find(t => t.id === lesson.teacher_id).lastname}</td> */}
        {/* <td>{(props.teachers[lesson.teacher_id] - 1).lastname}</td> */}
        {/* <td>{lesson.student.lastname}</td> */}
        <td>{props.lessons.length}</td>
        {/* <td>{lesson.resources.length || 0}</td> */}
      </tr>

    )
  })

  return (
    <Aux>
      <div style={{ margin: '30px' }}>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              {/* <th>Teacher</th> */}
              {/* <th>Student</th> */}
              <th>Notes</th>
              <th>#LessonCount</th>
              {/* <th>#Resources</th> */}
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </Table>
      </div>
    </Aux>
  )

}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    // lessons: state.les.lessons,
    resources: state.res.resources,
    teacers: state.tch.teachers
  }
}


export default connect(mapStateToProps)(LessonsList)
