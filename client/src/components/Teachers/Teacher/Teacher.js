import React from 'react';
import classes from './Teacher.css';
import TeacherStudents from './TeacherStudents';

const teacher = (props) => (
  <div className={classes.Teacher} >
    <p>Teacher: {props.firstname} {props.lastname}</p>
    <p>Email: {props.email}</p>
    <div> {props.firstname}'s students: <TeacherStudents teacherStudents={props.students} /></div>
    <button onClick={props.close}>Close</button>
  </div>
)

export default teacher;
