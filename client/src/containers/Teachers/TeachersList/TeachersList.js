import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import './TeachersList.css'

const TeachersList = (props) => {
  let sortedTeachers = props.teachers.sort((a, b) => a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : 0)

  let renderTeachers = sortedTeachers.map((teacher, index) => {
    return (
      <tr key={index}>
        <th scope="row">{teacher.id}</th>
        <td><Link to={`/teachers/${teacher.id}`}
          style={{ marginRight: '5px' }}
          onClick={props.close}
          key={teacher.id}>{teacher.lastname}, {teacher.firstname} </Link></td>
        <td>{teacher.email}</td>
        {teacher.active ? <td className="true">{teacher.active.toString()}</td> :
          <td className="false">{teacher.active.toString()}</td>}
        <td><button
          type='button'
          className="Success"
          onClick={props.close}>
          <Link
            to={`/teachers/${teacher.id}`}
            key={teacher.id}
          >show</Link>
        </button></td>

        {props.edit ?
          <td><button
            type='button'
            className="Edit"
            onClick={() => props.edit(teacher.id)}>edit
        </button></td>
          : null}

        {props.delete ?
          <td><button
            onClick={() => props.delete(teacher.id)}
            className="Danger">x</button></td>
          : null}
      </tr>
    )
  })

  return (
    <div>
      <Table striped size="sm" className="TeachersList">
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
