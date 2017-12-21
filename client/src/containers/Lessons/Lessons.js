import React, {Component} from 'react';
import {Table} from 'reactstrap';
import classes from './Lessons.css';
import LessonService from './LessonService';
import Lesson from './Lesson/Lesson';
import AddLesson from './AddLesson/AddLesson';
import Aux from '../../hoc/Aux/Aux';

class Lessons extends Component {
  state = {
    lessons: [],
    lesson: null
  }

  closeLesson = () => {
    this.setState({lesson: null})
  }
  
  componentDidMount() {
    LessonService.fetchLessons()
    .then(lessons => this.setState({lessons: lessons}))
  }
  
  addLesson = lesson => {
    LessonService.createLesson(lesson)
      .then(lesson => this.setState({
        lessons: this.state.lessons.concat(lesson)
    }));
  }

  render() {
    const showLesson = (id) => {
      LessonService
        .fetchLesson(id)
        .then(response => this.setState({lesson: response}, 
        console.log('this.state.lesson: ', this.state.lesson)
        )
        );
    };

    const lessonsList = this.state.lessons.map(lesson => 
      <div key={lesson.id}>
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
        <div><fieldset><legend>Lessons</legend>
          <AddLesson addLesson={this.addLesson}/>
          <Table className={classes.Lessons}>
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
          </fieldset>
        </div>
        <Aux>
          {this.state.lesson
            ? <Lesson lesson={this.state.lesson} close={this.closeLesson}/>
            : null}
        </Aux>
      </Aux>
    )
  }
}

export default Lessons;
