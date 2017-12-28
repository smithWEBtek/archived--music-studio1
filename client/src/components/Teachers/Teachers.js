import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Teacher from './Teacher/Teacher';
import TeacherService from './TeacherService';
import AddTeacher from './AddTeacher/AddTeacher';
import classes from './Teachers.css';
import Aux from '../../hoc/Aux/Aux';

class Teachers extends Component {
  state = {
    teachers: [],
    teacher: null,
    addedTeacher: { name: "Mrs. McGillicuddy", email: "mmg@mus.com" },
    addingTeacher: false
  }
  componentDidMount() {
    console.log('props @ Teachers componentDidMount', this.props)
    TeacherService.fetchTeachers()
      .then(teachers => this.setState({ teachers: teachers }))
  }

  handleAddTeacher = teacher => {
    TeacherService.createTeacher(teacher)
      .then(teacher => this.setState({
        teachers: this.state.teachers.concat(teacher)
      }))
  }

  // handleEditTeacher

  handleDeleteTeacher = (id) => {
    TeacherService.deleteTeacher(id);
    let teachers = [...this.state.teachers];
    teachers = teachers.filter(teacher => teacher.id !== id);
    this.setState({ teachers: teachers });
  };

  closeTeacher = () => {
    this.setState({
      teacher: null
    })
  }

  render() {
    const showTeacher = (id) => {
      TeacherService.fetchTeacher(id)
        .then(response => this.setState({
          teacher: response
        })
        )
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
            <td><button onClick={() => this.handleDeleteTeacher(teacher.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <AddTeacher addTeacher={this.handleAddTeacher} />
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
            teacher={this.state.teacher}
            {...this.props}
            close={this.closeTeacher}
            students={this.state.teacher.students}
          /> : null}
        </Aux>
      </Aux>
    )
  }
}

export default Teachers;
