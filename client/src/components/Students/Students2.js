import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'

import { Table } from 'reactstrap'
import classes from './Students.css'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../UI/Modal/Modal'

import Student from './Student/Student'
import StudentDetail from './Student/StudentDetail'
import CreateStudent from './CreateStudent/CreateStudent'
import EditStudent from './EditStudent/EditStudent'
import StudentStats from './StudentStats/StudentStats'

class Students extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      student: null,
      showStudent: false,

      studentDetail: null,
      showStudentDetail: false,

      createStudent: false,
      editStudent: false
    }
  }

  componentDidMount() {
    this.props.onFetchStudents()
    // this.setState({ students: this.props.students })
    // console.log('this.state.students', this.state.students);

  }

  //********CREATE_STUDENT form handling **************************
  createStudentForm = () => {
    this.setState({ createStudent: true })
  }

  createStudentFormCancel = () => {
    this.setState({ createStudent: false })
  }

  createStudent = (newStudentData) => {
    this.props.onStudentCreate(newStudentData)
    this.setState({ createStudent: false })
  }


  //********SHOW_STUDENT form handling**************************
  showStudent = (id) => {
    let student = this.props.students.filter(student => student.id === id)[0]
    this.setState({
      student: student,
      showStudent: true
    })
  }

  showStudentClose = () => {
    this.setState({ showStudent: false })
  }


  //********SHOW_STUDENT DETAIL form handling**************************
  // showStudentDetail = (id) => {
  //   let student = this.props.students.filter(student => student.id === id)[0]
  //   this.setState({
  //     studentDetail: student,
  //     showStudentDetail: true
  //   })
  // }

  // showStudentDetailClose = () => {
  //   this.setState({ showStudentDetail: false })
  // }


  //********EDIT_STUDENT form handling**************************
  showEditStudentForm = (id) => {
    let student = this.props.students.filter(student => student.id === id)[0]
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

  //********DELETE_STUDENT**************************
  deleteStudent = () => {
    // be gone!
  }

  render() {
    let studentsList = this.props.students.map(student => {
      return (
        <Aux key={student.id}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
            <td><button
              onClick={() => this.showStudent(student.id)}
              className={classes.Success}>Show</button></td>
            <td><button
              onClick={() => this.showEditStudentForm(student.id)}
              className={classes.Edit}>Edit</button></td>
            <td><button
              onClick={() => this.props.onStudentDelete(student.id)}
              className={classes.Danger}>X</button></td>
          </tr>
        </Aux>
      )
    })

    return (
      <Aux>
        <div style={{ margin: '30px' }}>

          {/*********CREATE STUDENT MODAL********************************************/}
          <button onClick={this.createStudentForm}>Add Student</button>
          <Modal
            show={this.state.createStudent}
            modalClosed={this.createStudentFormCancel}>
            <CreateStudent
              createStudent={(newStudentData) => this.createStudent(newStudentData)}
              createStudentCancel={this.createStudentFormCancel} />
          </Modal>

          {/**********SHOW STUDENT MODAL**********************************************/}
          <Modal
            show={this.state.showStudent}
            modalClosed={this.showStudentClose}>
            <Aux>
              {this.state.student ? <Student
                id={this.state.student.id}
                firstname={this.state.student.firstname}
                lastname={this.state.student.lastname}
                email={this.state.student.email}
                level={this.state.student.level}
                teacher_id={this.state.student.teacher_id}
                close={this.showStudentClose}
              /> : <p> No data for student show</p>}
            </Aux>
          </Modal>

          {/**********SHOW STUDENT DETAIL MODAL**********************************************/}
          {/* <Modal
            show={this.state.showStudentDetail}
            modalClosed={this.showStudentDetailClose}>
            <Aux>
              {this.state.studentDetail ? <StudentDetail
                id={this.state.student.id}
                firstname={this.state.studentDetail.firstname}
                lastname={this.state.studentDetail.lastname}
                email={this.state.studentDetail.email}
                level={this.state.studentDetail.level}
                teacher_id={this.state.studentDetail.teacher_id}
                close={this.showStudentDetailClose}
              /> : <p> No data for student detail</p>}
            </Aux>
          </Modal> */}

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
                updateStudent={(data) => this.editStudentUpdate(data)}
              /> : <p>no student data yet...</p>}
            </Aux>
          </Modal>

          {/**********STUDENTS INDEX TABLE*************************************/}
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
        {/**********STUDENTS StudentStats*************************************/}
        <StudentStats students={this.state.students} />
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    loading: state.stu.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStudentCreate: (newStudentData) => dispatch(actionCreators.createStudent(newStudentData)),
    onStudentUpdate: (data) => dispatch(actionCreators.updateStudent(data)),
    onStudentDelete: (id) => dispatch(actionCreators.deleteStudent(id)),
    onFetchStudent: (id) => dispatch(actionCreators.fetchStudent(id)),
    onFetchStudents: () => dispatch(actionCreators.fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
