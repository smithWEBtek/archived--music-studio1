import React, { Component } from 'react'
import MainNav from '../client/src/UI/MainNav/MainNav'
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom'
import Aux from '../client/src/hoc/Aux/Aux'
import { connect } from 'react-redux'
import * as actions from '../client/src/store/actions/index'

import Students from '../client/src/Students/Students'
import Teachers from '../client/src/Teachers/Teachers'
import Lessons from '../client/src/Lessons/Lessons'
import Resources from '../client/src/Resources/Resources'
import LessonResources from '../client/src/Lessons/LessonResources/LessonResources'

class App extends Component {

	componentDidMount() {
		this.props.onFetchStudents()
		this.props.onFetchTeachers()
		this.props.onFetchResources()
		this.props.onFetchLessons()
	}

	render() {
		return (
			<div>
				<MainNav />
				<Aux>
					<Route path="/students" component={Students} />
					<Route path="/teachers" component={Teachers} />
					<Route path="/lessons/" component={Lessons} />
					<Route path="/resources" component={Resources} />
					<Route path="/lesson_resources" component={LessonResources} />
				</Aux>
			</div>)
	}
}

const mapStateToProps = state => {
	return {
		students: state.stu.students,
		teachers: state.tch.teachers,
		resources: state.res.resources,
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

