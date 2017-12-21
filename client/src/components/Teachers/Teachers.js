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
  
  handleAddTeacher = teacher => {
    TeacherService.createTeacher(teacher)
    .then(teacher => this.setState({
      teachers: this.state.teachers.concat(teacher)
    }))
  }

  // handleEditTeacher

  handleDeleteTeacher = (id) => {
    TeacherService.deleteTeacher(id);
  };

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
              <td><button>Edit</button></td>
              <td><button onClick={()=>this.handleDeleteTeacher(teacher.id)}>Delete</button></td>
              
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
      <div><fieldset><legend>Teachers</legend>
        <AddTeacher addTeacher={this.handleAddTeacher}/>


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
        </fieldset>
      </div>
      <Aux>
        {this.state.teacher ? <Teacher teacher={this.state.teacher} close={this.closeTeacher}/> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Teachers;
