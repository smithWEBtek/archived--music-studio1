import React, { Component } from 'react';
import classes from './Lesson.css';
import Aux from '../../../hoc/Aux/Aux';
// import { Route, NavLink, Switch } from 'react-router-dom';

class Lesson extends Component {
  state = {
    lesson: null
  }

  componentDidMount() {
    const lessonData = this.props.lesson;
    this.setState({
      lesson: lessonData
    })
  }

  render() {
    const lessonResources = (this.props.resources.map(resource => {
      return (
        <li key={resource.id}>
          {resource.title}
        </li>
      )
    }));

    return (
      <Aux>
        <div className={classes.Lesson}>
          <h4>Current Lesson info</h4>
          <p>Student: {this.props.student}</p>
          <p>Teacher: {this.props.teacher}</p>
          <p>Notes: {this.props.notes}</p>
          <p>Add Resource</p>
          <p>Add Notes</p>
          <h4>Resources for this lesson: </h4>
          <ul>
            {lessonResources}
          </ul>

          <button onClick={this.props.close}>Close</button>
        </div>
      </Aux>
    )
  }
}

export default Lesson;
