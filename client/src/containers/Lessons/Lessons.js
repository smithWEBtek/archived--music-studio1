import React, { Component } from 'react';
import { Table } from 'reactstrap';
import classes from './Lessons.css';
import LessonService from './LessonService';
import Lesson from './Lesson/Lesson';
import AddLesson from './AddLesson/AddLesson';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

class Lessons extends Component {
  state = {
    lessons: [],
    lesson: null,
    addedLesson: {
      teacher_id: 2,
      student_id: 1,
      notes: '',
      resources: []
    },
    addingLesson: false
  }
  componentDidMount() {
    LessonService.fetchLessons()
      .then(response => this.setState({ lessons: response }))
  }

  // handleEditLesson

  deleteLessonHandler = (id) => {
    LessonService.deleteLesson(id);
    let lessons = [...this.state.lessons];
    lessons = lessons.filter(lesson => lesson.id !== id);
    this.setState({ lessons: lessons });
  };

  closeLessonHandler = () => {
    this.setState({
      lesson: null
    });
  }

  addLessonHandler = (lesson) => {
    if (lesson.teacher_id !== "") {
      this.setState({ addingLesson: true })
      LessonService.createLesson(lesson)
        .then(lesson => this.setState({
          lessons: this.state.lessons.concat(lesson)
        })
        )
      this.setState({ addingLesson: false });
    }
  }

  addLessonCancelHandler = () => {
    this.setState({
      student: null,
      addingLesson: false
    })
  }

  showModal = () => {
    this.setState({ addingLesson: true })
  }

  render() {
    const showLesson = (id) => {
      LessonService.fetchLesson(id)
        .then(response => this.setState({ lesson: response }));
    };

    const lessonsList = this.state.lessons.map((lesson, index) => {
      return (
        <Aux key={index}>
          <tr>
            <td>{lesson.id}</td>
            <td>{lesson.teacher.lastname}</td>
            <td>{lesson.student.lastname}</td>
            <td>{lesson.notes}</td>
            <td><button onClick={() => showLesson(lesson.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.deleteLessonHandler(lesson.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <AddLesson addLesson={this.addLessonHandler} />
          <Table className={classes.Lessons}>
            <thead>
              <tr>
                <th scope="row">ID</th>
                <th>Teacher</th>
                <th>Student</th>
                <th>Notes</th>
                <th>Resources</th>
                <th>Show</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {lessonsList}
            </tbody>
          </Table>
        </div>
        <Aux>
          {this.state.lesson
            ? <Lesson
              teacher={this.state.lesson.teacher.lastname}
              student={this.state.lesson.student.lastname}
              notes={this.state.lesson.notes}
              resources={this.state.lesson.resources}
              close={this.closeLessonHandler} />
            : null}

        </Aux>
      </Aux>
    )
  }
}

export default Lessons;
