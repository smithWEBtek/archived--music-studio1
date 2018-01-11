import React from 'react'

const TeacherTableHeading = props => {
  return (
    <Aux key={props.teacher.id}>
      <tr>
        <td>{props.teacher.firstname} {props.teacher.lastname}</td>
      </tr>
    </Aux>
  )
}

export default TeacherTable