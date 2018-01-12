import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'


const StudentsList = ({ match, students }) => {
  console.log('[StudentsList] students', students)

  const renderStudents = students.map((student, index) => {
    return (
      <tr key={index}>
        <th scope="row">{student.id}</th>
        <td><Link to={`/students/${student.id}`}
          style={{ marginRight: '12px' }}
          key={student.id}>{student.lastname}</Link></td>

        <td>{student.teacher.lastname}</td>
        <td>{student.level}</td>
        <td>{student.lessons.length > 0 ? student.lessons[student.lessons.length - 1].date : 'no lessons yet'}</td>
      </tr>
    )
  })

  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          {/* <th>Firstname</th> */}
          <th>Lastname</th>
          <th>Teacher</th>
          <th>Level</th>
          <th>Last lesson date</th>
        </tr>
      </thead>
      <tbody>
        {renderStudents}
      </tbody>
    </Table>
  )
}

export default StudentsList