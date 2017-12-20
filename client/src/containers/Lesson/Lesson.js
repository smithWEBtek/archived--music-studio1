import React, {Component} from 'react';
import classes from './Lesson.css';
import Aux from '../../hoc/Aux/Aux';
import LessonControls from './LessonControls/LessonControls';

class Lesson extends Component {
  state = {
    student_id: null,
    teacher_id: null,
    resources: [],
    notes: ''
  }

  render() {


    return (
      <Aux>
        <div className={classes.Lesson}>
          <p>Current Lesson info</p>
        <LessonControls />
        </div>
      </Aux>
    )
  }
}

export default Lesson;
