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
        <td><Link to={`/teachers/${lesson.teacher_id}`}>{lesson.teacher.firstname} {lesson.teacher.lastname}</Link></td>
        <td><Link to={`/students/${lesson.student_id}`}>{lesson.student.firstname} {lesson.student.lastname}</Link></td>
        <td>{lesson.resources ? lesson.resources.length : 0}</td>
        <td>{lesson.resources ? <Link to={`/resources/${lesson.resources[0].id}`}>{lesson.resources[0].title}</Link> : 'none'}</td>
        <td>{lesson.notes}</td>

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/lessons/${lesson.id}`}
            key={lesson.id}
          >show</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className={styles.Edit}
            onClick={() => props.edit(lesson.id)}>edit
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(lesson.id)}
            className={styles.Danger}>x</button></td>
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
          <th>Teacher</th>
          <th>Student</th>
          <th>#Resources</th>
          <th>Title</th>
          <th>Notes</th>
          <th>Show</th>
          {props.edit ? <th>Edit</th> : null}
          {props.delete ? <th>Delete</th> : null}
        </tr>
      </thead>
      <tbody>
        {renderLessons}
      </tbody>
    </Table>
  )
}

export default LessonsList
