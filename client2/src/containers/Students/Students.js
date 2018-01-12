import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'
// import { Container, Row, Col } from 'reactstrap'
// import styles from './Students.css'
import Modal from '../../UI/Modal/Modal'
import Aux from '../../hoc/Aux/Aux'

import ShowStudent from './ShowStudent/ShowStudent'
import CreateStudent from './CreateStudent/CreateStudent'
import EditStudent from './EditStudent/EditStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    student: {},
    editStudent: false,
    showIndexToggler: false,
    createStudent: false
  }

  componentDidMount() {
    // console.log('[Students] DidMount, this.props', this.props)
    this.props.onFetchStudents();
    this.setState({ showIndexToggler: false })
  }

  showIndexToggler = () => {
    let toggle = this.state.showIndexToggler
    this.setState({ showIndexToggler: !toggle })
  }

  //********SHOW_STUDENT form handling**************************


  showStudentClose = () => {
    this.setState({ showStudent: false })
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

  //********EDIT_STUDENT form handling**************************
  showEditStudentForm = (id) => {
    // let student = this.props.students.filter(student => student.id === id)[0]
    let student = this.props.students.find(student => student.id === id)
    this.setState({
      student: student,
      editStudent: true
    })
  }

  editStudentFalse = () => {
    this.setState({ editStudent: false })
  }

  editStudentUpdate = (data) => {
    this.props.onStudentUpdate(data)
    this.setState({ student: null, editStudent: false })
  }

  render() {
    const { match, students } = this.props;

    let clickableNames = students.map((student, index) => {
      return (
        <Link to={`/students/${student.id}`}
          style={{ marginRight: '12px' }}
          key={student.id}
          onClick={() => this.showIndexToggler()}
        >{student.lastname}
        </Link>
      )
    })

    return (
      <div>
        <hr />
        <h4>Students</h4>
        <button onClick={this.showIndexToggler}>Toggle ALL</button>


        {/*********CREATE STUDENT MODAL********************************************/}
        <button onClick={this.createStudentForm}>Add Student</button>
        <button onClick={this.editStudentForm}>Edit Student</button>
        <Modal
          show={this.state.createStudent}
          modalClosed={this.createStudentFormCancel}>
          <CreateStudent
            createStudent={(newStudentData) => this.createStudent(newStudentData)}
            createStudentCancel={this.createStudentFormCancel} />
        </Modal>

        {/**********EDIT STUDENT MODAL**********************************************/}
        <Modal
          show={this.state.editStudent}
          modalClosed={this.editStudentCancelHandler}>
          <Aux>
            {this.state.student ? <EditStudent
              id={this.state.student.id}
              firstname={this.state.student.firstname}
              lastname={this.state.student.lastname}
              email={this.state.student.email}
              level={this.state.student.level}
              teacher_id={this.state.student.teacher_id}
              close={this.editStudentFalse}
            /> : <p>no student data yet...</p>}
          </Aux>
        </Modal>

        <hr />
        {clickableNames}

        {this.state.showIndexToggler ? <StudentsList
          students={students}
          show={(id) => this.showStudent(id)}
          edit={(id) => this.showEditStudentForm(id)}
          close={(id) => this.showIndexToggler()}

          delete={(id) => this.props.onDeleteStudent(id)}
        /> : null}

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
    onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    onCreateStudent: (data) => dispatch(actionCreators.createStudent(data)),
    onUpdateStudent: (data) => dispatch(actionCreators.updateStudent(data)),
    onDeleteStudent: (id) => dispatch(actionCreators.deleteStudent(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
