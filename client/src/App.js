import React, { Component } from 'react';
import classes from './App.css';
 
import AddStudent from './components/Students/AddStudent/AddStudent';
import Students from './components/Students/Students';
import StudentService from './components/Students/StudentService';

import AddTeacher from './components/Teachers/AddTeacher/AddTeacher';
import Teachers from './components/Teachers/Teachers';
import TeacherService from './components/Teachers/TeacherService';

import AddResource from './components/Resources/AddResource/AddResource';
import Resources from './components/Resources/Resources';
import ResourceService from './components/Resources/ResourceService';
 
import AddLesson from './containers/Lessons/AddLesson/AddLesson';
import Lessons from './containers/Lessons/Lessons';
import LessonService from './containers/Lessons/LessonService';
 
import Logo from './assets/images/logo.png';

class App extends Component {
  constructor(){
    super()

    this.state = {
      students: [],
      student: {},
      teachers: [],
      teacher: {},
      resources: [],
      resource: {},
      lessons: [],
      lesson: {}
    }
  }

  componentDidMount(){
    StudentService.fetchStudents()
      .then(students => this.setState({ students }))

    TeacherService.fetchTeachers()
    .then(teachers => this.setState({ teachers }))

    ResourceService.fetchResources()
    .then(resources => this.setState({ resources }))
  
    LessonService.fetchLessons()
    .then(lessons => this.setState({ lessons }))
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
      resources: this.state.resources.concat(resource),
    }))
  }
  
  addLesson = lesson => {
    LessonService.createLesson(lesson).then(lesson => this.setState({
      lessons: this.state.lessons.concat(lesson),
    }))
  }
 
  render() {
    return (
      <div className={[classes.App, classes.container].join(' ')}>
        <h2 className={classes.Title}>Piano Student App</h2>
        <div className='container'>

          <img src={Logo} alt="app-logo"/>
         
          <div className={classes.Sidebar}> 
            <AddLesson addLesson={this.addLesson} />
            <Lessons lessons={this.state.lessons} />
          </div>

          <div className={classes.Sidebar}> 
            <AddStudent addStudent={this.addStudent} />
            <Students students={this.state.students} />
          </div>

          <div className={classes.Sidebar}> 
            <AddTeacher addTeacher={this.addTeacher} />
            <Teachers teachers={this.state.teachers} />
          </div>

          <div className={classes.Sidebar}> 
            <AddResource addResource={this.addResource} />
            <Resources resources={this.state.resources} />
          </div>


        </div>
      </div>
    );
  }
}

export default App;
