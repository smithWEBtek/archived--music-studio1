import React from 'react';
import classes from './Lesson.css';
import Aux from '../../../hoc/Aux/Aux';
import LessonResources from '../Lesson/LessonResources';
// import { Route, NavLink, Switch } from 'react-router-dom';


const lesson = (props) => {
  return (
    <div className={classes.Lesson}>
      <p>Date: {props.date}</p>
      <p>Student: {props.student}</p>
      <p>Teacher: {props.teacher}</p>
      <p>Notes: {props.notes}</p>
      <h5>Resources for this lesson: </h5>
      <Aux className={classes.Lesson}>
        <ul>
          <LessonResources resources={props.resources} />
        </ul>
      </Aux>
      <button onClick={props.close}>Close</button>
    </div>
  )
}

export default lesson;
