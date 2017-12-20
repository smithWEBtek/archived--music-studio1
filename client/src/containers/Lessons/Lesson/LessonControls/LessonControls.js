import React from 'react';
import classes from './LessonControls.css';

// const controls = [
//   { label: 'Add Resource', type: 'resource' },
//   { label: 'Add Note', type: 'note' }
// ]

const lessonControls = (props) => (
  <div className={classes.LessonControls}>
    
    <h3>Lesson Controls</h3>
    <p>Add Resource</p>
    <p>Add Notes</p>
  </div>
)
export default lessonControls;