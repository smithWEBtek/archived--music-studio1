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

  componentDidMount() { this.props.onFetchStudents() };

  showAddStudentForm = () => { this.setState({ addStudent: true }) };
  addStudentCancelHandler = () => { this.setState({ addStudent: false }) };

  showStudentHandler = (id) => { alert('you need to add FETCH_STUDENT action in studentReducer.js') };
  showStudentCancelHandler = () => { this.setState({ showStudent: false }) };

  editStudentHandler = (id) => {
    this.setState({
      isEditable: true
    })
  };

  editStudentCancelHandler = () => { this.setState({ isEditable: false }) };

  render() {
    const studentsList = this.props.stu.map(student => {
      return (
        <Aux key={student.id}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>

            <td><button onClick={() => this.showStudentHandler(student.id)}>Show</button></td>

            <td><button onClick={() => this.editStudentHandler(student.id)}>Edit</button></td>

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
              addStudent={this.props.onStudentAdd}
              addStudentCancel={this.addStudentCancelHandler} />
          </Modal>


          <Modal
            show={this.state.isEditable}
            modalClosed={this.editStudentCancelHandler}>
            <EditStudent
              editStudent={this.props.onStudentEdit}
              editStudentCancel={this.editStudentCancelHandler} />
          </Modal>


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
          modalClosed={this.showStudentCancelHandler}>
          <Aux>
            {this.state.student ?
              <Student
                firstname={this.state.student.firstname}
                lastname={this.state.student.lastname}
                email={this.state.student.email}
                level={this.state.student.level}
                teacher_id={this.state.student.teacher_id}
                close={this.showStudentCancelHandler}
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
    onStudentAdd: (studentData) => dispatch(actionCreators.addStudent(studentData)),
    onStudentEdit: (studentData) => dispatch(actionCreators.updateStudent(studentData)),
    onStudentRemoved: (id) => dispatch(actionCreators.removeStudent(id)),
    onFetchStudents: () => dispatch(actionCreators.fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
