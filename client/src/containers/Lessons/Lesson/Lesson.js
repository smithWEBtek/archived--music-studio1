import React, {Component} from 'react';
import classes from './Lesson.css';
import Aux from '../../../hoc/Aux/Aux';
import LessonControls from './LessonControls/LessonControls';

class Lesson extends Component {
  state = {
    student_id: null,
    teacher: null,
    resources: [],
    notes: ''
  }

  render() {
    return (
      <Aux>
        <div className={classes.Lesson}>
          <h3>Current Lesson info</h3>
          <p>Student info: {this.props.lesson.student_id}</p>
          <p>Teacher info: {this.props.lesson.teacher_id}</p>
          <p>Notes: {this.props.lesson.notes}</p>
        <LessonControls />
        <button onClick={this.props.close}>Close</button>
        </div>
      </Aux>
    )
  }
}

export default Lesson;
