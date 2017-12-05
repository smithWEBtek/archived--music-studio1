import React, { Component } from 'react';
import AddStudent from './components/AddStudent';
import Students from './components/Students';
import StudentService from './services/StudentService';
import './App.css';
import { Button } from 'reactstrap';

// import Navbar from './components/Navbar';
// import Student from './components/Student';

class App extends Component {
  constructor(){
    super()

    this.state = {
      students: [],
    }
  }

  componentDidMount(){
    StudentService.fetchStudents()
      .then(students => this.setState({ students }))
  }
  
  addStudent = student => {
    StudentService.createStudent(student).then(student => this.setState({
      students: this.state.students.concat(student),
    }))
  }
   
  render() {
    return (
      <div className="App container">
        <h2>Piano Student App</h2>
          <Button />
        {/* <div className='navbar'>
          <Navbar />
        </div> */}
        <div className='container'>

          <div className='sidebar'>
            <AddStudent addStudent={this.addStudent} />
            <Students students={this.state.students} />
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
