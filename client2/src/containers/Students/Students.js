import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import ShowStudent from './ShowStudent/ShowStudent'
import CreateStudent from './CreateStudent/CreateStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    showIndex: false
  }

  componentDidMount() {
    console.log('[Students] DidMount, this.props', this.props)
    this.props.onFetchStudents();
    this.setState({ showIndex: false })
  }

  showIndexToggler = () => {
    let toggle = this.state.showIndex
    this.setState({ showIndex: !toggle })
  }

  render() {
    const { match, students } = this.props;
    let clickableNames = students.map((student, index) => {
      return <Link to={`/students/${student.id}`}
        style={{ marginRight: '12px' }}
        key={student.id}>{student.lastname}</Link>
    })

    return (
      <div>
        <hr />
        <hr />
        <h4>Students Index</h4>
        {clickableNames}
        <button onClick={this.showIndexToggler}>show/hide all students</button>
        {this.state.showIndex ? <StudentsList students={students} /> : null}
        {/* <Link to={`${match.url}/new`}>Create New Student</Link> */}
        <hr />
        <hr />
        <Switch>
          <Route path={`${match.url}/new`} exact component={CreateStudent} />
          <Route path={`${match.url}/:id`} component={ShowStudent} />
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
