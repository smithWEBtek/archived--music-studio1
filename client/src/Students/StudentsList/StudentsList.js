import React from 'react'
import StudentRow from '../StudentRow/StudentRow'
import { Table } from 'reactstrap'
import './StudentsList.css'

const StudentsList = (props) => {

  let sortedStudents = props.students.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)

  let renderStudents = sortedStudents.map((student, index) => {
    return (
      <StudentRow
        key={index}
        student={student}
        close={props.close}
        edit={props.edit}
        delete={props.delete}
        likeStudent={props.likeStudent}
      // location={props.location}
      />
    )
  })

  return (
    <div>
      <Table striped size="sm" className="StudentsList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Last, First</th>
            <th>Email</th>
            <th>Teacher</th>
            <th>Level</th>
            <th>Active?</th>
            <th>Show</th>

            {props.edit ? <th>Edit</th> : null}
            {props.delete ? <th>Delete</th> : null}
            {props.likeStudent ? <th>Like</th> : null}
            {props.likeStudent ? <th>Count</th> : null}

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
