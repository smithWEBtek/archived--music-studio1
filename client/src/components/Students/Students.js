import React, { Component } from 'react';
import { Table } from 'reactstrap';
import AddStudent from './AddStudent/AddStudent';
import Student from './Student/Student';
import StudentService from './StudentService';
import classes from './Students.css';
import Aux from '../../hoc/Aux/Aux';

class Students extends Component {
  state = {
    students: [],
    student: null
  }

  componentDidMount() {
  StudentService.fetchStudents()
    .then(students => this.setState({students: students}))
  }

  addStudent = student => {
    StudentService.createStudent(student)
    .then(student => this.setState({
      students: this.state.students.concat(student)
    }))
  }

  closeStudent= () => {
    this.setState({
      student: null
    });
  }

  render() {
    const showStudent = (id) => {
      StudentService.fetchStudent(id)
      .then(response => this.setState({student: response}));
    };
      
    const studentsList = this.state.students.map(student => 
      <div key={student.id}>
        <Table className={classes.Students}>
          <thead>
            <tr>
              <td><button onClick={()=>showStudent(student.id)}>show</button></td>
              <td>{student.id}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
            </tr>
          </thead>
        </Table>
      </div> 
    );

  return (
    <Aux>
      <div>
        <Table className={classes.Students}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        </Table>
        <AddStudent addStudent={this.addStudent}/>
        {studentsList}
      </div>
      <Aux>
        {this.state.student ? <Student student={this.state.student} close={this.closeStudent}
          /> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Students;
