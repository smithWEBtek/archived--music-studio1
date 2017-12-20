import React, {Component} from 'react';
import {Table} from 'reactstrap';
import classes from './Lessons.css';
import Aux from '../../hoc/Aux/Aux';
import LessonService from './LessonService';
import Lesson from './Lesson/Lesson';

class Lessons extends Component {
  state = {
    lessons: this.props.lessons,
    lessonInfo: null
  }

  closeLesson = () => {
    this.setState({lessonInfo: null})
  }

  render() {
    const showLesson = (id) => {
      LessonService
        .fetchLesson(id)
        .then(response => this.setState({lessonInfo: response}, 
        console.log('this.state.lessonInfo: ', this.state.lessonInfo)
        )
        );
    };

    const lessonsList = this
      .props
      .lessons
      .map(lesson => <div key={lesson.id}>
        <Table className={classes.Lessons}>
          <thead>
            <tr>
              <td>
                <button onClick={() => showLesson(lesson.id)}>show</button>
              </td>
              <td className='right aligned'>{lesson.id}</td>
              <td className='right aligned'>{lesson.teacher_id}</td>
              <td className='right aligned'>{lesson.student_id}</td>
              {/* <td className='right aligned'>{lesson.resources[0]}</td> */}
              <td className='right aligned'>{lesson.notes}</td>
            </tr>
          </thead>
        </Table>
      </div>);

    return (
      <Aux>
        <div>
          <Table className={classes.lessons}>
            <thead>
              <tr>
                <th scope="row">ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
              </tr>
            </thead>
          </Table>
          {lessonsList}
        </div>
        <Aux>
          {this.state.lessonInfo
            ? <Lesson lesson={this.state.lessonInfo} close={this.closeLesson}/>
            : null}
        </Aux>
      </Aux>
    )
  }
}

export default Lessons;
