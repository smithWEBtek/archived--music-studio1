import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'

import { Table } from 'reactstrap'
import classes from './Teachers.css'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../UI/Modal/Modal'

import Teacher from './Teacher/Teacher'
import CreateTeacher from './CreateTeacher/CreateTeacher'
// import EditTeacher from './EditTeacher/EditTeacher'
import TeacherStats from './TeacherStats/TeacherStats'

class Teachers extends Component {
  state = {
    teacher: null,
    showTeacher: false,

    teacherDetail: null,
    showTeacherDetail: false,

    createTeacher: false,
    editTeacher: false
  }

  componentDidMount() {
    this.props.onFetchTeachers()
  }

  //********CREATE_TEACHER form handling **************************
  createTeacherForm = () => {
    this.setState({ createTeacher: true })
  }

  createTeacherFormCancel = () => {
    this.setState({ createTeacher: false })
  }

  createTeacher = (newTeacherData) => {
    this.props.onTeacherCreate(newTeacherData)
    this.setState({ createTeacher: false })
  }

  //********SHOW_TEACHER form handling**************************
  showTeacher = (event, id) => {
    event.preventDefault()
    let teacher = this.props.teachers.filter(teacher => teacher.id === id)[0]
    this.setState({
      teacher: teacher,
      showTeacher: true
    })
  }

  showTeacherClose = () => {
    this.setState({ showTeacher: false })
  }

  //********SHOW_TEACHER DETAIL form handling**************************
  showTeacherDetail = (id) => {
    let teacher = this.props.teachers.filter(teacher => teacher.id === id)[0]
    this.setState({
      teacherDetail: teacher,
      showTeacherDetail: true
    })
  }

  showTeacherDetailClose = () => {
    this.setState({ showTeacherDetail: false })
  }

  //********EDIT_TEACHER form handling**************************
  showEditTeacherForm = (id) => {
    let teacher = this.props.teachers.filter(teacher => teacher.id === id)[0]
    this.setState({
      teacher: teacher,
      editTeacher: true
    })
  }

  editTeacherFalse = () => {
    this.setState({ editTeacher: false })
  }

  editTeacherUpdate = (data) => {
    this.props.onTeacherUpdate(data)
    this.setState({ teacher: null, editTeacher: false })
  }

  //********DELETE_TEACHER**************************
  deleteTeacher = () => {
    // be gone!
  }

  render() {
    let teachersList = this.props.teachers.map(teacher => {
      return (
        <Aux key={teacher.id}>
          <tr>
            <td>{teacher.id}</td>
            <td>{teacher.firstname}</td>
            <td>{teacher.lastname}</td>
            <td>{teacher.email}</td>
            <td><button
              onClick={(event) => this.showTeacher(event, teacher.id)}
              className={classes.Success}>Show</button></td>
            <td><button
              onClick={() => this.showEditTeacherForm(teacher.id)}
              className={classes.Edit}>Edit</button></td>
            <td><button
              onClick={() => this.props.onTeacherDelete(teacher.id)}
              className={classes.Danger} >X</button></td>
          </tr>
        </Aux>
      )
    })

    let showTeacherData = <p>show teacher data </p>
    if (this.state.teacher) {
      showTeacherData = (
        <Teacher
          id={this.state.teacher.id}
          firstname={this.state.teacher.firstname}
          lastname={this.state.teacher.lastname}
          email={this.state.teacher.email}
          students={this.state.teacher.students}
          close={this.showTeacherClose}
        />
      )
    }

    return (
      <Aux>
        <div style={{ margin: '30px' }}>

          {/*********CREATE TEACHER MODAL********************************************/}
          <button onClick={this.createTeacherForm}>Add Teacher</button>
          <Modal
            show={this.state.createTeacher}
            modalClosed={this.createTeacherFormCancel}>
            <CreateTeacher
              createTeacher={(newTeacherData) => this.createTeacher(newTeacherData)}
              createTeacherCancel={this.createTeacherFormCancel} />
          </Modal>

          {/**********SHOW TEACHER MODAL**********************************************/}
          <Modal
            show={this.state.showTeacher}
            modalClosed={this.showTeacherClose}>
            <Aux>
              {showTeacherData}
            </Aux>
          </Modal>

          {/**********EDIT TEACHER MODAL**********************************************/}
          {/* <Modal
            show={this.state.editTeacher}
            modalClosed={this.editTeacherCancelHandler}>
            <Aux>
              {this.state.teacher ? <EditTeacher
                id={this.state.teacher.id}
                firstname={this.state.teacher.firstname}
                lastname={this.state.teacher.lastname}
                email={this.state.teacher.email}
                close={this.editTeacherFalse}
                updateTeacher={(data) => this.editTeacherUpdate(data)}
              /> : <p>no teacher data yet...</p>}
            </Aux>
          </Modal> */}

          {/**********TEACHERS INDEX TABLE*************************************/}
          <legend>All Teachers</legend>
          <Table className={classes.Teachers}>
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
              {teachersList}
            </tbody>
          </Table>
        </div>
        {/**********TEACHERS TeacherStats*************************************/}
        <TeacherStats teachers={this.props.teachers} />
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    teachers: state.tch.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTeacherCreate: (newTeacherData) => dispatch(actionCreators.createTeacher(newTeacherData)),
    onTeacherUpdate: (data) => dispatch(actionCreators.updateTeacher(data)),
    onTeacherDelete: (id) => dispatch(actionCreators.deleteTeacher(id)),
    onFetchTeacher: (id) => dispatch(actionCreators.fetchTeacher(id)),
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers)
