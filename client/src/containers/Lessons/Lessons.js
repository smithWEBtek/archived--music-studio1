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
    addedLesson: null,
    addingLesson: false,
    showLesson: false
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

  addLessonHandler = (lesson) => {
    if (lesson.teacher_id !== "") {
      this.setState({ addingLesson: true })
      LessonService.createLesson(lesson)
        .then(lesson => this.setState({
          lessons: this.state.lessons.concat(lesson)
        })
        )
    }
    this.setState({ addingLesson: false });
  }

  addLessonCancelHandler = () => {
    this.setState({
      addingLesson: false
    });
  }

  showAddLessonModal = () => {
    this.setState({ addingLesson: true })
  }

  showLessonHandler = (id) => {
    LessonService.fetchLesson(id)
      .then(response => this.setState({
        lesson: response,
        showLesson: true
      })
      );
  }

  showLessonCancelHandler = () => {
    this.setState({
      showLesson: false
    });
  }

  render() {
    const lessonsList = this.state.lessons.map((lesson, index) => {
      return (
        <Aux key={index}>
          <tr>
            <td>{lesson.id}</td>
            <td>{lesson.date}</td>
            <td>{lesson.teacher.lastname}</td>
            <td>{lesson.student.lastname}</td>
            <td>{lesson.notes}</td>
            <td>{lesson.resources.length}</td>
            <td><button onClick={() => this.showLessonHandler(lesson.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.deleteLessonHandler(lesson.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <button onClick={this.showAddLessonModal}>AddLesson</button>
          <Modal
            show={this.state.addingLesson}
            modalClosed={this.addLessonCancelHandler}>
            <AddLesson
              addLesson={this.addLessonHandler}
              addLessonCancel={this.addLessonCancelHandler} />
          </Modal>
          <Table className={classes.Lessons}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Teacher</th>
                <th>Student</th>
                <th>Notes</th>
                <th>#Resources</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {lessonsList}
            </tbody>
          </Table>
        </div>
        <Modal
          show={this.state.showLesson}
          modalClosed={this.showLessonCancelHandler}>
          <Aux>
            {this.state.lesson ? <Lesson
              date={this.state.lesson.date}
              teacher={this.state.lesson.teacher.lastname}
              student={this.state.lesson.student.lastname}
              notes={this.state.lesson.notes}
              resources={this.state.lesson.resources}
              close={this.showLessonCancelHandler} /> : null}
          </Aux>
        </Modal>
      </Aux>
    )
  }
}

export default Lessons;
