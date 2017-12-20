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
    teacher: null
  }
  componentDidMount() {
    TeacherService.fetchTeachers()
    .then(teachers => this.setState({teachers: teachers}))
  }
  
  addTeacher = teacher => {
    TeacherService.createTeacher(teacher)
    .then(teacher => this.setState({
      teachers: this.state.teachers.concat(teacher)
    }))
  }

  closeTeacher = () => {
    this.setState({
      teacher: null
    })
  }

  render() {
    const showTeacher = (id) => {
      TeacherService.fetchTeacher(id)
      .then(response => this.setState({teacher: response}));
    };
      
    const TeachersList = this.state.teachers.map(teacher => 
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
        <AddTeacher addTeacher={this.addTeacher}/>
        {TeachersList}
      </div>
      <Aux>
        {this.state.teacher ? <Teacher teacher={this.state.teacher} close={this.closeTeacher}/> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Teachers;
