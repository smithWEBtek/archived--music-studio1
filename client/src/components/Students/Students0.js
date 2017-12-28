import React, { Component } from 'react';
// import { Table } from 'reactstrap';
import AddStudent from './AddStudent/AddStudent';
import Student from './Student/Student';
import StudentService from './StudentService';
import classes from './Students.css';
import Aux from '../../hoc/Aux/Aux';
// import NavStudents from './NavStudents/NavStudents';
import Table from '../UI/Table/Table';

class Students extends Component {
  state = {
    students: [],
    headers: [],
    student: null
  }

  componentDidMount() {
    StudentService.fetchStudents()
      .then(response => this.setState({ students: response })
        .then(this.createHeaders())
      );
  }

  createHeaders() {
    let firstRow = this.state.students[0];
    let headers = Object.keys(firstRow);
    this.setState({ headers: headers });
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
      return <div key={student.id} className={[classes.StudentsTable, classes.StudentsTableRounded].join(' ')}>
        {/* <Table className={[classes.StudentsTable, classes.StudentsTableRounded].join(' ')}> */}
        <Table>
          <tbody>
            <tr>
              <td><button onClick={() => showStudent(student.id)}>Show</button></td>
              <td><button>Edit</button></td>
              <td><button onClick={() => this.handleDeleteStudent(student.id)}>Del</button></td>

              <td className='right aligned'>{student.id}</td>
              <td className='right aligned'>{student.firstname}</td>
              <td className='right aligned'>{student.lastname}</td>
              <td className='right aligned'>{student.email}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    });

    return (
      <Aux>
        <div className={classes.Students}><fieldset><legend>Students</legend>
          <AddStudent addStudent={this.handleAddStudent} />
          {/* <Table className={[classes.StudentsTable, classes.StudentsTableRounded].join(' ')}> */}
          <Table>
            <thead>
              <tr>
                <th>Show</th>
                <th>Edit</th>
                <th>Del</th>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
              </tr>
            </thead>
          </Table>
          {studentsList}
        </fieldset>
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
