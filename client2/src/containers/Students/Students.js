import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import StudentsShow from './StudentsShow'
import CreateStudent from './CreateStudent/CreateStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  componentDidMount() {
    console.log('[Students] DidMount, this.props', this.props)
    this.props.onFetchStudents();
  }

  render() {
    const { match, students } = this.props;

    return (
      <div>
        <hr />
        <hr />
        <h4>Students Page</h4>
        <StudentsList students={students} />
        {/* <Link to={`${match.url}/new`}>Create New Student</Link> */}
        <hr />
        <Switch>
          <Route path={`${match.url}/new`} exact component={CreateStudent} />
          <Route path={`${match.url}/:id`} component={StudentsShow} />
          <Route path={match.url} exact render={() => (<h5>Please select a Student from the list.</h5>)} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    students: state.stu.students
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateStudent: (data) => dispatch(actionCreators.createStudent(data)),
    onFetchStudents: () => dispatch(actionCreators.fetchStudents())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
