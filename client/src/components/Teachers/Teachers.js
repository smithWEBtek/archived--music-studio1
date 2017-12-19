import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Teacher from './Teacher/Teacher';
import TeacherService from './TeacherService';
import classes from './Teachers.css';
import Aux from '../../hoc/Aux/Aux';

class Teachers extends Component {
  state = {
    teachers: this.props.teachers,
    teacherInfo: null
  }

  render() {
    const showTeacher = (id) => {
      TeacherService.fetchTeacher(id)
      .then(response => this.setState({teacherInfo: response}));
    };
      
    const TeachersList = this.props.teachers.map(teacher => 
      <div key={teacher.id}>
        <Table className={classes.Teachers}>
          <thead>
            <tr>
              <td><button onClick={()=>showTeacher(teacher.id)}>show</button></td>
              <td className='right aligned'>{teacher.id}</td>
              <td className='right aligned'>{teacher.firstname}</td>
              <td className='right aligned'>{teacher.lastname}</td>
              <td className='right aligned'>{teacher.email}</td>
            </tr>
          </thead>
        </Table>
      </div> 
    );

  return (
    <Aux>
      <div>
        <Table className={classes.Teachers}>
          <thead>
            <tr>
              <th scope="row">ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
        </Table>
        {TeachersList}
      </div>
      <Aux>
        {this.state.teacherInfo ? <Teacher teacher={this.state.teacherInfo} /> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Teachers;
