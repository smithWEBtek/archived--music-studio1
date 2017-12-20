import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Student from './Student/Student';
import StudentService from './StudentService';
import classes from './Students.css';
import Aux from '../../hoc/Aux/Aux';

class Students extends Component {
  state = {
    students: this.props.students,
    studentInfo: null
  }

  render() {
    const showStudent = (id) => {
      StudentService.fetchStudent(id)
      .then(response => this.setState({studentInfo: response}));
    };
      
    const studentsList = this.props.students.map(student => 
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
              <th scope="row">ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        </Table>
        {studentsList}
      </div>
      <Aux>
        {this.state.studentInfo ? <Student student={this.state.studentInfo} /> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Students;
