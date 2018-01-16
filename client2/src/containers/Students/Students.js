import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import { Container, Row, Col } from 'reactstrap'
// import styles from './Students.css'
import appstyles from '../../App.css'
import Modal from '../../UI/Modal/Modal'

import Student from './Student/Student'
import CreateStudent from './CreateStudent/CreateStudent'
import EditStudent from './EditStudent/EditStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    student: null,
    showStudent: false,
    showStudentsList: true,
    createStudent: false,
    editStudent: false
  }

  componentDidMount() {
    this.props.onFetchStudents();
  }

  //********SHOW_STUDENTS_LIST form handling********************
  showStudentsList = () => {
    this.setState({
      showStudentsList: true
    })
  }

  closeStudentsList = () => {
    this.setState({
      showStudentsList: false
    })
  }

  //********SHOW_STUDENT form handling**************************
  showStudentClose = () => {
    this.setState({
      showStudent: false
    })
  }

  //********CREATE_STUDENT form handling ***********************
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
      editStudent: false,
      student: null
    })
  }

  closeEditStudentForm = () => {
    this.setState({
      editStudent: false,
      student: null
    })
  }

  render() {
    const { match, students } = this.props;
    let clickableNames = students.map((student, index) => {
      return (
        <Link to={`/students/${student.id}`}
          style={{ marginRight: '5px' }}
          key={student.id}
          onClick={() => this.setState({ showStudentsList: false })}
        >{student.lastname}
        </Link>
      )
    })

    return (
      <Container>
        <hr />
        <button onClick={this.showStudentsList}><Link to='/students'>ALL students</Link></button>

        {/*********CREATE STUDENT MODAL********************/}
        <button onClick={this.createStudentForm}>Add Student</button>
        <Modal
          show={this.state.createStudent}
          modalClosed={this.createStudentFormCancel}>
          <CreateStudent
            createStudent={(newStudentData) => this.createStudent(newStudentData)}
            createStudentCancel={this.createStudentFormCancel} />
        </Modal>

        {/**********EDIT STUDENT MODAL********************/}
        <Modal
          show={this.state.editStudent}
          modalClosed={this.closeEditStudentForm}>
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

        {/**********CLICKABLE NAMES**********************/}
        <Container>
          <Row>
            <Col>
              {clickableNames}
            </Col>
          </Row>
        </Container>

        {/**********STUDENTS LIST************************/}
        <div>
          <Switch>
            <Route path={`${match.url}/:id/edit`} exact component={EditStudent} />
            <Route path={`${match.url}/new`} exact component={CreateStudent} />
            <Route path={`${match.url}/:id`} exact component={Student} />
            <Route path={match.url} exact />
          </Switch>
        </div>
        <div>
          {this.state.showStudentsList ?
            <div><h5 className={appstyles.IndexHeaderBackground}>ALL students</h5>
              <StudentsList
                students={students}
                edit={(id) => this.showEditStudentForm(id)}
                delete={(id) => this.props.onDeleteStudent(id)}
                close={() => this.closeStudentsList()}
              /></div> : null}
        </div>
        <hr />
      </Container>
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
