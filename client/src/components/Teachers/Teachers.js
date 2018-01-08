import React, { Component } from 'react';
import * as actionTypes from '../../store/actions/actionTypes';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';
import Teacher from './Teacher/Teacher';
import TeacherService from './TeacherService';
import CreateTeacher from './CreateTeacher/CreateTeacher';
import classes from './Teachers.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Teachers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teacher: null,
      showTeacher: false,
      addingTeacher: false,
    }
  }

  // createTeacherHandler = teacher => {
  //   if (teacher.lastname !== "") {
  //     this.setState({ addingTeacher: true })
  //     TeacherService.createTeacher(teacher)
  //       .then(teacher => this.setState({
  //         teachers: this.props.tch.concat(teacher)
  //       })
  //       )
  //   }
  //   this.setState({ addingTeacher: false })
  // }

  createTeacherCancelHandler = () => {
    this.setState({ addingTeacher: false });
  }

  showCreateTeacherModal = () => {
    this.setState({ addingTeacher: true });
  }

  showTeacherHandler = (id) => {
    TeacherService.fetchTeacher(id)
      .then(response => this.setState({
        teacher: response,
        showTeacher: true
      })
      );
  }

  showTeacherCancelHandler = () => {
    this.setState({ showTeacher: false });
  }

  render() {
    const teachersList = this.props.tch.map(teacher => {
      return (
        <Aux key={teacher.id}>
          <tr>
            <td>{teacher.id}</td>
            <td>{teacher.firstname}</td>
            <td>{teacher.lastname}</td>
            <td>{teacher.email}</td>
            {/* <td>{teacher.students.length}</td> */}
            <td><button onClick={() => this.showTeacherHandler(teacher.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.props.onTeacherDelete(teacher.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <button onClick={this.showCreateTeacherModal}>CreateTeacher</button>
          <Modal
            show={this.state.addingTeacher}
            modalClosed={this.createTeacherCancelHandler}>
            <CreateTeacher
              createTeacher={this.props.onTeacherCreate}
              createTeacherCancel={this.createTeacherCancelHandler} />
          </Modal>
          <Table className={classes.Teachers}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                {/* <th>#Students</th> */}
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
        <Modal
          show={this.state.showTeacher}
          modalClosed={this.showTeacherCancelHandler}>
          <Aux>
            {this.state.teacher ? <Teacher
              firstname={this.state.teacher.firstname}
              lastname={this.state.teacher.lastname}
              email={this.state.teacher.email}
              students={this.state.teacher.students}
              close={this.showTeacherCancelHandler}
            /> : null}
          </Aux>
        </Modal>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    tch: state.tch.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTeacherCreate: (data) => dispatch({ type: actionTypes.CREATE_TEACHER, teacherData: data }),
    onTeacherDelete: (id) => dispatch({ type: actionTypes.DELETE_TEACHER, teacherId: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);