import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import { fetchStudents } from '../../store/actions/index'
// import StudentsNew from './StudentsNew';
import * as actionCreators from '../../store/actions/index'
import StudentsShow from './StudentsShow'
import CreateStudent from './CreateStudent'
import StudentsList from '../../containers/Students/StudentsList'

class Students extends Component {

  componentDidMount() {
    console.log('[Students] DidMount, this.props', this.props)
    this.props.onFetchStudents();
  }

  render() {
    const { match, students } = this.props;

    return (
      <div>
        <h1>Students Page</h1>
        <StudentsList students={students} />
        <div>
          <hr />
          <Link to={`${match.url}/new`}>Create New Student</Link>
          <hr />
          <h5>Clicked student should show up here...so let's put our Route under here.</h5>
          <Switch>
            <Route path={`${match.url}/new`} component={CreateStudent} />
            <Route path={`${match.url}/:id`} component={StudentsShow} />
            {/* <Route path={`${match.url}/new`} component={StudentsNew} /> */}
            {/* <Route path={`${match.url}/:id`} component={StudentsShow} /> */}
            {/* <Route path={match.url} component={StudentsShow} /> */}
            <Route path={match.url} exact render={() => (<h3>Please select a Student from the list.</h3>)} />

          </Switch>
          <hr />
        </div>

        <hr />
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

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Students));
export default connect(mapStateToProps, mapDispatchToProps)(Students);
