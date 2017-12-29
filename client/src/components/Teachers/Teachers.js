import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Teacher from './Teacher/Teacher';
import TeacherService from './TeacherService';
import AddTeacher from './AddTeacher/AddTeacher';
import classes from './Teachers.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Teachers extends Component {
  state = {
    teachers: [],
    teacher: null,
    addedTeacher: { name: "Mrs. McGillicuddy", email: "mmg@mus.com" },
    addingTeacher: false
  }
  componentDidMount() {
    TeacherService.fetchTeachers()
      .then(response => this.setState({ teachers: response }))
  }

  // handleEditTeacher

  deleteTeacherHandler = (id) => {
    TeacherService.deleteTeacher(id);
    let teachers = [...this.state.teachers];
    teachers = teachers.filter(teacher => teacher.id !== id);
    this.setState({ teachers: teachers });
  };

  closeTeacherHandler = () => {
    this.setState({
      teacher: null
    })
  }

  addTeacherHandler = teacher => {
    if (teacher.email !== "") {
      this.setState({ addingTeacher: true })
      TeacherService.createTeacher(teacher)
        .then(teacher => this.setState({
          teachers: this.state.teachers.concat(teacher)
        })
        )
      this.setState({ addingTeacher: false })
    }
  }

  addTeacherCancelHandler = () => {
    this.setState({
      teacher: null,
      addingTeacher: false
    })
  }

  render() {
    const showTeacher = (id) => {
      TeacherService.fetchTeacher(id)
        .then(response => this.setState({ teacher: response }));
    };

    const TeachersList = this.state.teachers.map(teacher => {
      return (
        <Aux key={teacher.id}>
          <tr>
            <td>{teacher.id}</td>
            <td>{teacher.firstname}</td>
            <td>{teacher.lastname}</td>
            <td>{teacher.email}</td>
            <td><button onClick={() => showTeacher(teacher.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.deleteTeacherHandler(teacher.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    const addTeacherData = [...this.state.addedTeacher];

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <AddTeacher
            addTeacher={this.addTeacherHandler}
            addTeacherCancel={this.addTeacherCancelHandler} />

          {/* put AddTeacher inside modal */}
          <Modal show={this.state.addingTeacher} modalClosed={this.addTeacherCancelHandler}>
            {addTeacherData}
          </Modal>

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
              {TeachersList}
            </tbody>
          </Table>
        </div>
        <Aux>
          {this.state.teacher ? <Teacher
            firstname={this.state.teacher.firstname}
            lastname={this.state.teacher.lastname}
            email={this.state.teacher.email}
            students={this.state.teacher.students}
            close={this.closeTeacherHandler}
          /> : null}
        </Aux>
      </Aux>
    )
  }
}

export default Teachers;
