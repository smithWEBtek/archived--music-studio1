import React from 'react';
import classes from './Lesson.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aux from '../../../hoc/Aux/Aux';
import LessonResources from './LessonResources/LessonResources'

const lesson = (props) => {
  return (
    <Aux>
      <p>is this thing on? </p>
      <div className={classes.Lesson} style={{ backgroundColor: 'Primary' }}>
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
    </Aux >
  )
}

export default lesson;
