import React, { Component } from 'react';

import AddStudent from './components/Students/AddStudent/AddStudent';
import Students from './components/Students/Students';
import StudentService from './components/Students/StudentService';

import AddTeacher from './components/Teachers/AddTeacher/AddTeacher';
import Teachers from './components/Teachers/Teachers';
import TeacherService from './components/Teachers/TeacherService';

import AddResource from './components/Resources/AddResource/AddResource';
import Resources from './components/Resources/Resources';
import ResourceService from './components/Resources/ResourceService';

import './App.css';
import { Button } from 'reactstrap';
// import Navbar from './Navbar';
 
class App extends Component {
  constructor(){
    super()

    this.state = {
      students: [],
      student: {},
      teachers: [],
      teacher: {},
      resources: [],
      resource: {}
    }
  }

  componentDidMount(){
    StudentService.fetchStudents()
      .then(students => this.setState({ students }))

    TeacherService.fetchTeachers()
    .then(teachers => this.setState({ teachers }))

    ResourceService.fetchResources()
    .then(resources => this.setState({ resources }))
  }
  
  addStudent = student => {
    StudentService.createStudent(student).then(student => this.setState({
      students: this.state.students.concat(student),
    }))
  }
  
  addTeacher = teacher => {
  TeacherService.createTeacher(teacher).then(teacher => this.setState({
    teachers: this.state.teachers.concat(teacher),
    }))
  }
  
  addResource = resource => {
    ResourceService.createResource(resource).then(resource => this.setState({
      resource : this.state.resources.concat(resource),
    }))
  }
 
  render() {
    return (
      <div className="App container">
        <h2>Piano Student App</h2>
          <Button />
        <div className='container'>
          <div className='sidebar'> 
            <AddStudent addStudent={this.addStudent} />
            <Students students={this.state.students} />
          </div>
          <div className='sidebar'> 
            <AddTeacher addTeacher={this.addTeacher} />
            <Teachers teachers={this.state.teachers} />
          </div>
          <div className='sidebar'> 
            <AddResource addResource={this.addResource} />
            <Resources resources={this.state.resources} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
