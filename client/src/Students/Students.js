import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'

import Student from './Student/Student'
import CreateStudent from './CreateStudent/CreateStudent'
import EditStudent from './EditStudent/EditStudent'
import StudentsList from './StudentsList/StudentsList'

class Students extends Component {
  state = {
    student: null,
    showStudentsList: false,
    createStudent: false,
    editStudent: false
  }

  componentWillMount() {
    this.props.onFetchStudents()
  }



  //********SHOW_STUDENTS_LIST form handling**************
  showStudentsList = () => {
    this.setState({ showStudentsList: true })
  }

  closeStudentsList = () => {
    this.setState({ showStudentsList: false })
  }

  //********SHOW_STUDENT form handling*****************
  showStudentClose = () => {
    this.setState({ showStudent: false })
  }

  //********CREATE_STUDENT form handling ***************
  createStudentForm = () => {
    this.setState({ createStudent: true })
  }

  createStudentFormCancel = () => {
    this.setState({ createStudent: false })
  }

  createStudent = (newStudentData) => {
    const { history } = this.props
    this.props.onCreateStudent(newStudentData, history)
    this.setState({ createStudent: false })
  }

  //********EDIT_STUDENT form handling****************
  showEditStudentForm = (id) => {
    let studentData = this.props.students.find(student => student.id === id)
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

  //********LIKE_STUDENT form handling****************
  likeStudent = (id) => {
    let student = this.props.students.find(stu => stu.id === id)
    let updatedStudent = Object.assign({}, student, { likes: student.likes + 1 })
    this.props.onUpdateStudent(updatedStudent)
  }


  render() {
    const { match, students } = this.props

    return (
      <Container>
        <hr />
        <button onClick={() => this.showStudentsList()}><Link to='/students'>ALL students</Link></button>

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
            active={this.state.student.active}
            close={() => this.closeEditStudentForm()}
            updateStudent={(data) => this.editStudentUpdate(data)}
          /> : null}
        </Modal>

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
            <div><h5 className="IndexHeaderBackground">ALL students</h5>
              <StudentsList
                students={students}
                edit={(id) => this.showEditStudentForm(id)}
                delete={(id) => this.props.onDeleteStudent(id)}
                close={() => this.closeStudentsList()}
                likeStudent={(id) => this.likeStudent(id)}
              /></div> : null}
        </div>
        <hr />
      </Container>
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
    onFetchStudents: () => dispatch(actions.fetchStudents()),
    onCreateStudent: (newStudentData, history) => dispatch(actions.createStudent(newStudentData, history)),
    onUpdateStudent: (data) => dispatch(actions.updateStudent(data)),
    onDeleteStudent: (id) => dispatch(actions.deleteStudent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
