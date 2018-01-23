import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './TeachersList.css'

const TeachersList = (props) => {
  let sortedTeachers = props.teachers.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)

  let renderTeachers = sortedTeachers.map((teacher, index) => {
    return (
      <tr key={index}>
        <th scope="row">{teacher.id}</th>
        <td><Link to={`/teachers/${teacher.id}`}
          style={{ marginRight: '12px' }}
          key={teacher.id}>{teacher.lastname}, {teacher.firstname} </Link></td>
        <td>{teacher.email}</td>

        {teacher.active ? <td className={styles.true}>{teacher.active.toString()}</td> :
          <td className={styles.false}>{teacher.active.toString()}</td>}

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/teachers/${teacher.id}`}
            // params={{ id: teacher.id }} ************ REMOVE FROM Teacher, Student, Resource, Lesson
            key={teacher.id}
          >show</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className={styles.Edit}
            onClick={() => props.edit(teacher.id)}>edit
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(teacher.id)}
            className={styles.Danger}>x</button></td>
          : null}
      </tr>
    )
  })

  return (
    <div>
      <Table striped size="sm" className={styles.TeachersList}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Last, First</th>
            <th>Email</th>
            <th>Active?</th>
            <th>Show</th>
            {props.edit ? <th>Edit</th> : null}
            {props.delete ? <th>Delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {renderTeachers}
        </tbody>
      </Table>
    </div>
  )
}

export default TeachersList
