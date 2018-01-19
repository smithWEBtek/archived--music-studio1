import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './StudentsList.css'

const StudentsList = (props) => {

  let sortedStudents = props.students.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)

  let renderStudents = sortedStudents.map((student, index) => {
    return (
      <tr key={index}>
        <th scope="row">{student.id}</th>
        <td><Link
          to={`/students/${student.id}`}
          style={{ marginRight: '5px' }}
          key={student.id}>{student.lastname}, {student.firstname}</Link></td>

        <td>{student.email}</td>
        <td>{student.teacher_id}</td>
        <td>{student.level}</td>

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/students/${student.id}`}
            key={student.id}
            onClick={props.show}
          >show</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className={styles.Edit}
            onClick={() => props.edit(student.id)}>edit
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(student.id)}
            className={styles.Danger}>x</button></td>
          : null}
      </tr>
    )
  })

  return (
    <div>
      <Table striped size="sm" className={styles.StudentsList}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Last, First</th>
            <th>Email</th>
            <th>TeacherID</th>
            <th>Level</th>
            <th>Show</th>
            {props.edit ? <th>Edit</th> : null}
            {props.delete ? <th>Delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {renderStudents}
        </tbody>
      </Table>
    </div>
  )
}

export default StudentsList
