import React, { Component } from 'react';

import AddStudent from './components/Students/AddStudent/AddStudent';
import Students from './components/Students/Students';
import StudentService from './components/Students/StudentService';

import AddTeacher from './components/Teachers/AddTeacher';
import Teachers from './components/Teachers/Teachers';
import TeacherService from './components/Teachers/TeacherService';

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
    }
  }

  componentDidMount(){
    StudentService.fetchStudents()
      .then(students => this.setState({ students }))

    TeacherService.fetchTeachers()
    .then(teachers => this.setState({ teachers }))
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
        </div>
      </div>
    );
  }
}

export default App;
