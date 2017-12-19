import React from 'react';
import classes from './Teacher.css';

const teacher = (props) => (
  <div>
    <fieldset>
      <p className={classes.Teacher}>Name: {props.teacher.firstname} {props.teacher.lastname}</p>
      <p className={classes.Teacher}>Email: {props.teacher.email}</p>
    </fieldset>
  </div>
)

export default teacher;