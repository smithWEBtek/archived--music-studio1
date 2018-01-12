import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Route, Switch, Link } from 'react-router-dom'
import * as actionCreators from '../../store/actions/index'
import ShowTeacher from './ShowTeacher/ShowTeacher'
import CreateTeacher from './CreateTeacher/CreateTeacher'
import TeachersList from '../Teachers/TeachersList/TeachersList'


class Teachers extends Component {

  componentDidMount() {
    console.log('[Teachers] DidMount, this.props', this.props)
    this.props.onFetchTeachers()
  }

  render() {
    const { match, teachers } = this.props

    return (
      <div>
        <hr />

        <hr />
        <h4>Teachers Page</h4>
        <TeachersList teachers={teachers} />
        <Link to={`${match.url}/new`}>Create New Teacher</Link>
        <Switch>
          <Route path={`${match.url}/new`} component={CreateTeacher} />
          <Route path={`${match.url}/:id`} component={ShowTeacher} />
          <Route path={match.url} exact render={() => (<h5>Please select a Teacher from the list.</h5>)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teachers: state.tch.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateTeacher: (data) => dispatch(actionCreators.createTeacher(data)),
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers())
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teachers))
export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
