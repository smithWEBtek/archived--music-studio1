import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';
import AddStudent from './AddStudent/AddStudent';
import Student from './Student/Student';
import classes from './Students.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';
import EditStudent from './EditStudent/EditStudent';

class Students extends Component {
  state = {
    student: {},
    showStudent: false,
    addStudent: false,
    editStudent: false
  }

  componentDidMount() {
    this.props.onFetchStudents()
  };



  showAddStudentForm = () => {
    this.setState({ addStudent: true })
  };
  addStudentCancelHandler = () => {
    this.setState({ addStudent: false })
  };
  addStudentHandler = (newStudentData) => {
    this.props.onStudentAdd(newStudentData)
    this.setState({ addStudent: false })
  };

  showStudentDetailHandler = (id) => {
    alert('you need to add FETCH_STUDENT action in studentReducer.js')
  };
  showStudentDetailCancelHandler = () => {
    this.setState({ showStudent: false })
  };



  editStudentHandler = (updatedStudentData) => {
    this.setState({ student: updatedStudentData })
    this.props.onStudentUpdate(this.state.student);
    this.setState({ editStudent: false })
  };

  fetchStudent(id) {
    let student = this.props.onStudentFetch(id);
    // debugger;
    this.setState({ student: student })
  };

  showEditStudentForm = (id) => {
    this.fetchStudent(id);
    console.log('[showEditStudentForm] this.state.student: ', this.state.student)
    this.setState({
      editStudent: true
    })
  };

  editStudentCancelHandler = () => {
    this.setState({ editStudent: false })
  };



  render() {
    const studentsList = this.props.stu.map(student => {
      return (
        <Aux key={student.id}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
            <td><button onClick={() => this.Detail(student.id)}>Show</button></td>
            <td><button onClick={() => this.showEditStudentForm(student.id)}>Edit</button></td>
            <td><button onClick={() => this.props.onStudentRemoved(student.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <button onClick={this.showAddStudentForm}>Add Student</button>
          <Modal
            show={this.state.addStudent}
            modalClosed={this.addStudentCancelHandler}>
            <AddStudent
              addStudent={(newStudentData) => this.addStudentHandler(newStudentData)}
              addStudentCancel={this.addStudentCancelHandler} />
          </Modal>
          {/* 

          <Modal
            // show={this.showEditStudentForm}
            // modalClosed={this.editStudentCancelHandler}>
            show={this.state.editStudent}
            modalClosed={this.editStudentCancelHandler}>
            <EditStudent
              student={this.state.student}
              editStudent={this.props.onStudentEdit}
              editStudentCancel={this.editStudentCancelHandler} />
          </Modal> */}


          <Table className={classes.Students}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Show</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {studentsList}
            </tbody>
          </Table>
        </div>
        <Modal
          show={this.state.showStudent}
          modalClosed={this.showStudentDetailCancelHandler}>
          <Aux>
            {this.state.student ?
              <Student
                firstname={this.state.student.firstname}
                lastname={this.state.student.lastname}
                email={this.state.student.email}
                level={this.state.student.level}
                teacher_id={this.state.student.teacher_id}
                close={this.showStudentDetailCancelHandler}
              /> : null}
          </Aux>
        </Modal>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    stu: state.stu.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStudentAdd: (newStudentData) => dispatch(actionCreators.addStudent(newStudentData)),
    onStudentFetch: (id) => dispatch(actionCreators.fetchStudent(id)),
    onStudentUpdate: (updatedStudentData) => dispatch(actionCreators.updateStudent(updatedStudentData)),
    onStudentRemoved: (id) => dispatch(actionCreators.removeStudent(id)),
    onFetchStudents: () => dispatch(actionCreators.fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
