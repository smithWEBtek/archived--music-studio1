import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import './StudentsList.css'

const StudentsList = (props) => {

  let sortedStudents = props.students.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)

  let renderStudents = sortedStudents.map((student, index) => {
    return (
      <tr key={index}>
        <th scope="row">{student.id}</th>
        <td><Link
          to={`/students/${student.id}`}
          style={{ marginRight: '5px' }}
          onClick={props.close}
          key={student.id}>{student.lastname}, {student.firstname}</Link></td>
        <td>{student.email}</td>
        <td>{student.teacher_id}</td>
        <td>{student.level}</td>

        {student.active ? <td className="true">{student.active.toString()}</td> :
          <td className="false">{student.active.toString()}</td>}

        <td><button
          type='button'
          className="Success"
          onClick={props.close}>
          <Link
            to={`/students/${student.id}`}
            key={student.id}
          >show</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className="Edit"
            onClick={() => props.edit(student.id)}>edit
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(student.id)}
            className="Danger">x</button></td>
          : null}

        <td><button
          type='button'
          className="Like"
          onClick={() => props.likeStudent(student.id)}>
          Like</button></td>

        <td className="LikeCount">{student.likes}</td>
      </tr >
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
            <th>TeacherID</th>
            <th>Level</th>
            <th>Active?</th>
            <th>Show</th>
            {props.edit ? <th>Edit</th> : null}
            {props.delete ? <th>Delete</th> : null}
            <th>Like</th>
            <th>Count</th>
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
