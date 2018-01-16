import React from 'react';
// import Aux from '../../../hoc/Aux/Aux'
import styles from './LessonsList.css'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

const LessonsList = (props) => {
  let studentLessons = props.lessons.map((lesson, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td><Link key={lesson.id} style={{ marginRight: '12px' }} to={`/lessons/${lesson.id}`}>Lesson {lesson.id}</Link></td>
        <td>{lesson.date}</td>
        <td>{lesson.teacher_id}</td>
        <td>{lesson.student_id}</td>
        <td>{lesson.resources ? lesson.resources.length : 0}</td>
        <td><button className={styles.Success}>Show</button></td>
        <td><button className={styles.Edit}>Edit</button></td>
        <td><button className={styles.Danger}>X</button></td>
      </tr>
    )
  })

  return (
    <Table striped size="sm" className={styles.LessonsList} >
      <thead>
        <tr>
          <th>ID</th>
          <th>LessonLink</th>
          <th>Date</th>
          <th>TeacherID</th>
          <th>StudentID</th>
          <th>#Resources</th>
          <th>Show</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {studentLessons}
      </tbody>
    </Table>
  )
}

export default LessonsList
