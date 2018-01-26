import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'

import Lesson from './Lesson/Lesson'
import CreateLesson from './CreateLesson/CreateLesson'
import EditLesson from './EditLesson/EditLesson'
import LessonsList from './LessonsList/LessonsList'

class Lessons extends Component {
  state = {
    lesson: {},
    showLesson: false,
    showLessonsList: false,
    createLesson: false,
    editLesson: false
  }

  componentDidMount() {
    this.props.onFetchLessons();
  }

  //********SHOW_LESSONS_LIST form handling********************
  showLessonsList = () => {
    this.setState({ showLessonsList: true })
  }

  closeLessonsList = () => {
    this.setState({ showLessonsList: false })
  }

  //********SHOW_LESSON form handling**************************
  showLessonClose = () => {
    this.setState({ showLesson: false })
  }

  //********CREATE_LESSON form handling **************************
  createLessonForm = () => {
    this.setState({ createLesson: true })
  }

  createLessonFormClose = () => {
    this.setState({ createLesson: false })
  }

  createLesson = (newLessonData) => {
    const { history } = this.props
    this.props.onCreateLesson(newLessonData, history)
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
    console.log('[Lessons] editLessonUpdate data', data)
    this.props.onUpdateLesson(data)
    this.setState({
      editLesson: false,
      lesson: null
    })
  }

  editLessonFormCancel = () => {
    this.setState({
      editLesson: false,
      lesson: null
    })
  }

  render() {
    const { match, lessons } = this.props;

    return (
      <Container>
        <hr />
        <button onClick={() => this.showLessonsList()}><Link to='/lessons'>ALL lessons</Link></button>

        {/*********CREATE LESSON MODAL********************/}
        <button onClick={() => this.createLessonForm()}>Add Lesson</button>
        <Modal
          show={this.state.createLesson}
          modalClosed={this.createLessonFormClose}>
          <CreateLesson
            createLesson={(newLessonData) => this.createLesson(newLessonData)}
            closeForm={this.createLessonFormClose} />
        </Modal>

        {/**********EDIT LESSON MODAL********************/}
        <Modal
          show={this.state.editLesson}
          modalClosed={this.editLessonFormCancel}>
          {this.state.editLesson ? <EditLesson
            lesson_id={this.state.lesson.id}
            date={this.state.lesson.date}
            teacher={this.state.lesson.teacher}
            student={this.state.lesson.student}
            notes={this.state.lesson.notes}
            closeForm={() => this.editLessonFormCancel()}
            updateLesson={(data) => this.editLessonUpdate(data)}
          /> : null}
        </Modal>

        {/**********LESSONS LIST***********************/}
        < div >
          <Switch>
            <Route path={`${match.url}/:id/edit`} exact component={EditLesson} />
            <Route path={`${match.url}/new`} exact component={CreateLesson} />
            <Route path={`${match.url}/:id`} exact component={Lesson} />
            <Route path={match.url} exact />
          </Switch>
        </div>
        <div>
          {this.state.showLessonsList ?
            <div><h5 className="IndexHeaderBackground">ALL lessons</h5>
              <LessonsList
                lessons={lessons}
                edit={(id) => this.showEditLessonForm(id)}
                delete={(id) => this.props.onDeleteLesson(id)}
                close={() => this.closeLessonsList()}
              /></div> : null}
        </div >
        <hr />
      </Container >
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
    onFetchLessons: () => dispatch(actions.fetchLessons()),
    onCreateLesson: (data) => dispatch(actions.createLesson(data)),
    onUpdateLesson: (data) => dispatch(actions.updateLesson(data)),
    onDeleteLesson: (id) => dispatch(actions.deleteLesson(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
