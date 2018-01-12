import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Table } from 'reactstrap'
import styles from './StudentsList.css'

// const StudentsList = ({ match, students }) => {

// students = { students }
// show = {(id) => this.showStudent(id)}
// edit = {(id) => this.showEditStudentForm(id)}
// delete={ (id) => this.props.onDeleteStudent(id) }


const StudentsList = (props) => {
  const renderStudents = props.students.map((student, index) => {
    let showStudent = <Redirect to={`/students/${student.id}`} />
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
          <Link to={`/students/${student.id}`}
            style={{ marginRight: '12px' }}
            key={student.id}>Show</Link>
        </button></td>
        <td><button
          onClick={() => props.edit(student.id)}
          className={styles.Edit}>Edit</button></td>
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

export default withRouter(StudentsList)