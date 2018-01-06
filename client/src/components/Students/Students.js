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
    student: null,
    showStudent: false,
    addStudent: false,
    editStudent: false
  }

  componentDidMount() {
    this.props.onFetchStudents()
  };

  addStudentForm = () => {
    this.setState({ addStudent: true })
  };
  addStudentFormCancel = () => {
    this.setState({ addStudent: false })
  };
  addStudent = (newStudentData) => {
    this.props.onStudentAdd(newStudentData)
    this.setState({ addStudent: false })
  };


  showStudent = (id) => {
    alert('you need to add FETCH_STUDENT action in studentReducer.js')
  };
  showStudentCancelHandler = () => {
    this.setState({ showStudent: false })
  };


  showEditStudentForm = (id) => {
    let student = this.props.students.filter(student => student.id === id)[0]
    this.setState({
      student: student,
      editStudent: true
    })
  };

  editStudentFalse = () => {
    this.setState({ editStudent: false })
  };

  editStudentUpdate = (data) => {
    this.props.onStudentUpdate(data)
    this.setState({ student: null, editStudent: false })
  }


  render() {
    const studentsList = this.props.students.map(student => {
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

          <button onClick={this.addStudentForm}>Add Student</button>
          <Modal
            show={this.state.addStudent}
            modalClosed={this.addStudentFormCancel}>
            <AddStudent
              addStudent={(newStudentData) => this.addStudent(newStudentData)}
              addStudentCancel={this.addStudentFormCancel} />
          </Modal>

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
                // updateStudent={this.props.onUpdateStudent(data)}
                updateStudent={(data) => this.editStudentUpdate(data)}
              /> : <p>no student data yet...</p>}
            </Aux>
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
    students: state.stu.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStudentAdd: (newStudentData) => dispatch(actionCreators.addStudent(newStudentData)),
    onStudentUpdate: (data) => dispatch(actionCreators.updateStudent(data)),
    onStudentRemoved: (id) => dispatch(actionCreators.removeStudent(id)),
    onFetchStudent: (id) => dispatch(actionCreators.fetchStudent(id)),
    onFetchStudents: () => dispatch(actionCreators.fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
