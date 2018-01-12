import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'
// import { Container, Row, Col } from 'reactstrap'

import Modal from '../../UI/Modal/Modal'
import ShowStudent from './ShowStudent/ShowStudent'
import CreateStudent from './CreateStudent/CreateStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    showIndex: false,
    createStudent: false,
    editStudent: false
  }

  componentDidMount() {
    // console.log('[Students] DidMount, this.props', this.props)
    this.props.onFetchStudents();
    this.setState({ showIndex: false })
  }

  showIndexToggler = () => {
    let toggle = this.state.showIndex
    this.setState({ showIndex: !toggle })
  }


  //********CREATE_STUDENT form handling **************************
  createStudentForm = () => {
    this.setState({ createStudent: true })
  }

  createStudentFormCancel = () => {
    this.setState({ createStudent: false })
  }

  createStudent = (newStudentData) => {
    this.props.onCreateStudent(newStudentData)
    this.setState({ createStudent: false })
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
        <h4>Students Index</h4>
        <button onClick={this.showIndexToggler}>Toggle All students</button>
        {/*********CREATE STUDENT MODAL********************************************/}
        <button onClick={this.createStudentForm}>Add Student</button>
        <Modal
          show={this.state.createStudent}
          modalClosed={this.createStudentFormCancel}>
          <CreateStudent
            createStudent={(newStudentData) => this.createStudent(newStudentData)}
            createStudentCancel={this.createStudentFormCancel} />
        </Modal>


        <hr />
        {clickableNames}
        {this.state.showIndex ? <StudentsList students={students} /> : null}
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
