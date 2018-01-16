import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './TeachersList.css'

const TeachersList = (props) => {

  const renderTeachers = props.teachers.map((teacher, index) => {
    return (
      <tr key={index}>
        <th scope="row">{teacher.id}</th>
        <td><Link to={`/teachers/${teacher.id}`}
          style={{ marginRight: '12px' }}
          key={teacher.id}>{teacher.firstname} {teacher.lastname}</Link></td>
        <td>{teacher.email}</td>

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/teachers/${teacher.id}`}
            params={{ id: teacher.id }}
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
            <th>Name</th>
            <th>Email</th>
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
