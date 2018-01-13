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
          key={student.id}>{student.lastname}</Link></td>
        <td>{student.email}</td>
        <td>{student.teacher.lastname}</td>
        <td>{student.level}</td>
        <td>{student.lessons.length > 0 ? student.lessons[student.lessons.length - 1].date : 'no lessons yet'}</td>

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

        <td><button
          type='button'
          className={styles.Edit}
          onClick={() => props.edit(student.id)}>EDIT
        </button></td>

        <td><button
          onClick={() => props.delete(student.id)}
          className={styles.Danger}>X</button></td>
      </tr>
    )
  })

  return (
    <div>
      <h4>All Students</h4>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Teacher</th>
            <th>Level</th>
            <th>Last lesson</th>
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
