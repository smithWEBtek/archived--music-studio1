import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

// import styles from './Lessons.css'
import Modal from '../../UI/Modal/Modal'

import Lesson from './Lesson/Lesson'
import CreateLesson from './CreateLesson/CreateLesson'
import EditLesson from './EditLesson/EditLesson'
import LessonsList from './LessonsList/LessonsList'

class Lessons extends Component {
  state = {
    lesson: {},
    showLesson: false,
    createLesson: false,
    editLesson: false
  }

  componentDidMount() {
    this.props.onFetchLessons();
  }

  //********SHOW_LESSON form handling**************************
  showLessonClose = () => {
    this.setState({ showLesson: false })
  }

  //********CREATE_LESSON form handling **************************
  showCreateLessonForm = () => {
    this.setState({ createLesson: true })
  }

  closeCreateLessonForm = () => {
    this.setState({ createLesson: false })
  }

  createLesson = (newLessonData) => {
    this.props.onCreateLesson(newLessonData)
    this.setState({ createLesson: false })
  }

  //********EDIT_LESSON form handling**************************
  showEditLessonForm = (id) => {
    let lessonData = this.props.lessons.filter(lesson => lesson.id === id)[0]
    this.setState({
      lesson: lessonData,
      editLesson: true
    })
  }

  editLessonUpdate = (data) => {
    this.props.onUpdateLesson(data)
    this.setState({
      editLesson: false,
      lesson: null
    })
  }

  closeEditLessonForm = () => {
    this.setState({
      editLesson: false,
      lesson: null
    })
  }

  render() {
    const { match, lessons } = this.props;

    return (
      <div>
        <hr />
        <h4>Lessons</h4>

        {/*********CREATE LESSON MODAL********************************************/}
        <button onClick={this.showCreateLessonForm}>Add Lesson</button>
        <Modal
          show={this.state.createLesson}
          modalClosed={this.closeCreateLessonForm}>
          <CreateLesson
            createLesson={(newLessonData) => this.createLesson(newLessonData)}
            createLessonCancel={this.closeCreateLessonForm} />
        </Modal>

        {/**********EDIT LESSON MODAL  >>>>>  LESSON BUILDER ? ********************/}
        {/* <Modal
          show={this.state.editLesson}
          modalClosed={this.closeEditLessonForm}>
          {this.state.lesson ? <EditLesson
            id={this.state.lesson.id}
            date={this.state.lesson.date}
            teacher_id={this.state.lesson.teacher_id}
            student_id={this.state.lesson.student_id}
            close={() => this.closeEditLessonForm()}
            updateLesson={(data) => this.editLessonUpdate(data)}
          /> : null}
        </Modal> */}

        {/**********LESSONS LIST**********************************************/}
        < div >
          <LessonsList
            lessons={lessons}
            show={(id) => this.state.showLesson(id)}
            edit={(id) => this.showEditLessonForm(id)}
            delete={(id) => this.props.onDeleteLesson(id)}
            close={() => this.showLessonsListToggler()}
          />
        </div >

        <Switch>
          <Route path={`${match.url}/:id/edit`} exact component={EditLesson} />
          <Route path={`${match.url}/new`} exact component={CreateLesson} />
          <Route path={`${match.url}/:id`} exact component={Lesson} />
          <Route path={match.url} exact render={() => (<p>Toggle ALL or click a Lesson from the list.</p>)} />
        </Switch>
        <hr />
      </div >
    )
  }
};

const mapStateToProps = state => {
  return {
    lessons: state.les.lessons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchLessons: () => dispatch(actionCreators.fetchLessons()),
    onCreateLesson: (data) => dispatch(actionCreators.createLesson(data)),
    onUpdateLesson: (data) => dispatch(actionCreators.updateLesson(data)),
    onDeleteLesson: (id) => dispatch(actionCreators.deleteLesson(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
