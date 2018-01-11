import React from 'react';
import classes from './Student.css';

const Student = (props) => (
  <div>
    <fieldset className={classes.Student}>
      <p>Name: {props.firstname} {props.lastname}</p>
      <p>Email: {props.email}</p>
      <p>Level: {props.level}</p>
      <p>TeacherID: {props.teacher_id}</p>
      <button type="button" onClick={props.close}>Close</button>
    </fieldset>
  </div>
)

export default Student;
