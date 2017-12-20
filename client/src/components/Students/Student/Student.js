import React from 'react';
import classes from './Student.css';
 
const student = (props) => (
  <div>
    <fieldset>
      <p className={classes.Student}>Name: {props.student.firstname} {props.student.lastname}</p>
      <p className={classes.Student}>Email: {props.student.email}</p>
      <p className={classes.Student}>Level: {props.student.level}</p>
      <p className={classes.Student}>TeacherID: {props.student.teacher_id}</p>
      <button onClick={props.close}>Close</button>
    </fieldset>
  </div>
)

export default student;
