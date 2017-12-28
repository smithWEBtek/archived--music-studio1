import React, { Component } from 'react';
import { Table } from 'reactstrap';
import AddStudent from './AddStudent/AddStudent';
import Student from './Student/Student';
import StudentService from './StudentService';
import classes from './Students.css';
import Aux from '../../hoc/Aux/Aux';
// import NavStudents from './NavStudents/NavStudents';

class Students extends Component {
  state = {
    students: [],
    student: null
  }

  componentDidMount() {
    StudentService.fetchStudents()
      .then(response => this.setState({ students: response }))
  }

  handleAddStudent = (student) => {
    StudentService.createStudent(student)
      .then(student => this.setState({
        students: this.state.students.concat(student)
      })
      )
  }

  // handleEditStudent

  handleDeleteStudent = (id) => {
    StudentService.deleteStudent(id);
    let students = [...this.state.students];
    students = students.filter(student => student.id !== id);
    this.setState({ students: students });
  };

  closeStudent = () => {
    this.setState({
      student: null
    });
  }

  render() {
    const showStudent = (id) => {
      StudentService.fetchStudent(id)
        .then(response => this.setState({ student: response }));
    };

    const studentsList = this.state.students.map(student => {
      return (
        <Aux key={student.id}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
            <td><button onClick={() => showStudent(student.id)}>Show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.handleDeleteStudent(student.id)}>X</button></td>
          </tr>
        </Aux>
      )
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <AddStudent addStudent={this.handleAddStudent} />
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
        <Aux>
          {this.state.student ? <Student
            firstname={this.state.student.firstname}
            lastname={this.state.student.lastname}
            email={this.state.student.email}
            level={this.state.student.level}
            teacher_id={this.state.student.teacher_id}
            close={this.closeStudent}
          /> : null}
        </Aux>
      </Aux>
    )
  }
}

export default Students;
