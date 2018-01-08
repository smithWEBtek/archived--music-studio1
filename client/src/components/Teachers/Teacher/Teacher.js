import React from 'react';
import classes from './Teacher.css';
import TeacherStats from '../TeacherStats/TeacherStats';

const teacher = (props) => (
  <div className={classes.Teacher} >
    <p>Teacher: {props.firstname} {props.lastname}</p>
    <p>Email: {props.email}</p>
    <div> {props.firstname}'s students: <TeacherStats teacherStudents={props.students} /></div>
    <button onClick={props.close}>Close</button>
  </div>
)

export default teacher;
