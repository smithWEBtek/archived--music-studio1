import React from 'react';
// import Aux from '../../../hoc/Aux/Aux'

import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

const LessonsList = (props) => {

  console.log('[LessonsList] props', props)

  let studentLessons = props.lessons.map((lesson, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td><Link key={lesson.id} style={{ marginRight: '12px' }} to={`/lessons/${lesson.id}`}>Lesson {lesson.id}</Link></td>
        <td>{lesson.date}</td>
        <td>{lesson.teacher_id}</td>
        <td>{lesson.student_id}</td>
        {/* <td>{lesson.resources.length}</td> */}
      </tr>
    )
  })

  return (
    <Table striped >
      <thead>
        <tr>
          <th>ID</th>
          <th>LessonLink</th>
          <th>Date</th>
          <th>TeacherID</th>
          <th>StudentID</th>
          {/* <th>#Resources</th> */}
        </tr>
      </thead>
      <tbody>
        {studentLessons}
      </tbody>
    </Table>
  )
}

export default LessonsList
