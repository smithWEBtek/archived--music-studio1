import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './TeachersList.css'

const TeachersList = (props) => {

  const renderTeachers = props.teachers.map((teacher, index) => {
    return (
      <tr key={index}>
        <th scope="row">{teacher.id}</th>
        <td>{teacher.firstname}</td>
        <td>{teacher.lastname}</td>
        <td>{teacher.email}</td>
        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/teachers/${teacher.id}`}
            params={{ id: teacher.id }}
            key={teacher.id}
          >SHOW</Link>
        </button></td>

        <td><button
          type='button'
          className={styles.Edit}
          onClick={() => props.edit(teacher.id)}>EDIT
        </button></td>

        <td><button
          onClick={() => props.delete(teacher.id)}
          className={styles.Danger}>X</button></td>
      </tr>
    )
  })

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
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
