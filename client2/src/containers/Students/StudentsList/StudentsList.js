import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './StudentsList.css'

const StudentsList = (props) => {

  const renderStudents = props.students.map((student, index) => {
    return (
      <tr key={index}>
        <th scope="row">{student.id}</th>
        <td><Link to={`/students/${student.id}`}
          style={{ marginRight: '12px' }}
          key={student.id}>{student.firstname} {student.lastname}</Link></td>
        <td>{student.email}</td>
        <td>{student.teacher_id}</td>
        <td>{student.level}</td>

        <td><button
          type='button'
          className={styles.Success}
          onClick={props.close}>
          <Link
            to={`/students/${student.id}`}
            params={{ id: student.id }}
            key={student.id}
          >SHOW</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className={styles.Edit}
            onClick={() => props.edit(student.id)}>EDIT
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(student.id)}
            className={styles.Danger}>X</button></td>
          : null}
      </tr>
    )
  })

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>TeacherID</th>
            <th>Level</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
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
