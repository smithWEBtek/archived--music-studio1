import React, { Component } from 'react'
import MainNav from './UI/MainNav/MainNav'
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
// import Aux from '../src/hoc/Aux/Aux'

import { Switch, Route } from 'react-router-dom'
import Students from '../src/Students/Students'
import Teachers from '../src/Teachers/Teachers'
import Lessons from '../src/Lessons/Lessons'
import Resources from '../src/Resources/Resources'
import LessonResources from '../src/Lessons/LessonResources/LessonResources'

class App extends Component {

  componentWillMount() {
    this.props.onFetchStudents()
    this.props.onFetchTeachers()
    this.props.onFetchResources()
    this.props.onFetchLessons()
  }

  render() {
    return (
      <div>
        <MainNav />
        <Switch>
          <Route exact path="/students" component={Students} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/lessons/" component={Lessons} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/lesson_resources" component={LessonResources} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    teachers: state.tch.teachers,
    resources: state.tch.resources,
    lessons: state.les.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchStudents: () => dispatch(actions.fetchStudents()),
    onFetchTeachers: () => dispatch(actions.fetchTeachers()),
    onFetchResources: () => dispatch(actions.fetchResources()),
    onFetchLessons: () => dispatch(actions.fetchLessons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
