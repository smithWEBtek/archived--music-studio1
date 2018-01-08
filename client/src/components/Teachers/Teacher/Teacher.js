import React from 'react';
import classes from './Teacher.css';

const Teacher = (props) => {
  let teacherStudents = <p>no students assigned</p>
  if (props.students.length > 0) {
    teacherStudents = (
      props.students.map((student, index) => {
        return (
          <div key={index}>{student.firstname} {student.lastname}</div>
        )
      })
    )
  }

  return (
    <div className={classes.Teacher} >
      <fieldset className={classes.Student}>
        <h5>{props.firstname} {props.lastname}</h5>
        <p>Email: {props.email}</p>
      </fieldset>
      <div>
        <h5>{props.firstname}'s students: </h5>
        {teacherStudents}
      </div>
      <button type="button" onClick={props.close}>Close</button>
    </div>
  )
}

export default Teacher;
