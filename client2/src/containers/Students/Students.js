import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import { Container, Row, Col } from 'reactstrap'
// import styles from './Students.css'
import Modal from '../../UI/Modal/Modal'
import Aux from '../../hoc/Aux/Aux'

import Student from './Student/Student'
import CreateStudent from './CreateStudent/CreateStudent'
import EditStudent from './EditStudent/EditStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    student: null,
    showStudent: false,
    showStudentsList: false,
    createStudent: false,
    editStudent: false
  }

  componentDidMount() {
    this.props.onFetchStudents();
  }

  showStudentsListToggler = () => {
    let toggle = this.state.showStudentsList
    this.setState({ showStudentsList: !toggle })
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
    let studentData = this.props.students.filter(student => student.id === id)[0]
    this.setState({
      student: studentData,
      editStudent: true
    })
  }

  editStudentUpdate = (data) => {
    this.props.onUpdateStudent(data)
    this.setState({
      editStudent: false
    })
  }

  closeEditStudentForm = () => {
    this.setState({
      editStudent: false
    })
  }

  render() {
    const { match, students } = this.props;
    let clickableNames = students.map((student, index) => {
      return (
        <Link to={`/students/${student.id}`}
          style={{ marginRight: '12px' }}
          key={student.id}
          onClick={() => this.showStudentsListToggler()}
        >{student.lastname}
        </Link>
      )
    })

    return (
      <div>
        <hr />
        <h4>Students</h4>
        <button onClick={() => this.showStudentsListToggler()}>Toggle ALL</button>

        {/*********CREATE STUDENT MODAL********************************************/}
        <button onClick={this.createStudentForm}>Add Student</button>
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
          {this.state.student ? <EditStudent
            id={this.state.student.id}
            firstname={this.state.student.firstname}
            lastname={this.state.student.lastname}
            email={this.state.student.email}
            level={this.state.student.level}
            teacher_id={this.state.student.teacher_id}
            close={() => this.closeEditStudentForm()}
            updateStudent={(data) => this.editStudentUpdate(data)}
          /> : null}
        </Modal>

        {/**********CLICKABLE NAMES**********************************************/}
        <Container>
          <Row>
            <Col>
              {clickableNames}
            </Col>
          </Row>
        </Container>

        {/**********STUDENTS LIST**********************************************/}
        <div>
          {this.state.showStudentsList ? <StudentsList
            students={students}
            show={(id) => this.state.showStudent(id)}
            edit={(id) => this.showEditStudentForm(id)}
            delete={(id) => this.props.onDeleteStudent(id)}
            close={() => this.showStudentsListToggler()}
          /> : null}
        </div>

        <Switch>
          <Route path={`${match.url}/:id/edit`} component={EditStudent} />
          <Route path={`${match.url}/new`} exact component={CreateStudent} />
          <Route path={`${match.url}/:id`} component={Student} />
          <Route path={match.url} exact render={() => (<p>Toggle ALL or click a Student from the list.</p>)} />
        </Switch>
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
    onFetchStudents: () => dispatch(actionCreators.fetchStudents()),
    onCreateStudent: (data) => dispatch(actionCreators.createStudent(data)),
    onUpdateStudent: (data) => dispatch(actionCreators.updateStudent(data)),
    onDeleteStudent: (id) => dispatch(actionCreators.deleteStudent(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
