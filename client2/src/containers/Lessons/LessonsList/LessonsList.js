import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'
import styles from './LessonsList.css'

const LessonsList = (props) => {

  const renderLessons = props.lessons.map((lesson, index) => {
    return (
      <tr key={index}>
        <th scope="row">{lesson.id}</th>
        <td><Link
          to={`/lessons/${lesson.id}`}
          style={{ marginRight: '5px' }}
          key={lesson.id}>{lesson.teacher.lastname} ~ {lesson.student.lastname}
        </Link></td>

        <td>{lesson.date}</td>
        <td>{lesson.teacher_id}</td>
        <td>{lesson.student_id}</td>
        <td>{lesson.resources ? lesson.resources.length : 0}</td>

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/lessons/${lesson.id}`}
            // params={{ id: lesson.id }}
            key={lesson.id}
          >SHOW</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className={styles.Edit}
            onClick={() => props.edit(lesson.id)}>EDIT
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(lesson.id)}
            className={styles.Danger}>X</button></td>
          : null}
      </tr>
    )
  })

  return (
    <Table striped size="sm" className={styles.LessonsList} >
      <thead>
        <tr>
          <th>ID</th>
          <th>Teacher - Student</th>
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
        {renderLessons}
      </tbody>
    </Table>
  )
}

export default LessonsList
