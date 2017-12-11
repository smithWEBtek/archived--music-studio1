import React, { Component } from 'react';
import AddStudent from '../components/Students/AddStudent';
import Students from '../components/Students/Students';
import StudentService from '../components/Students/StudentService';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
 
class App extends Component {
  constructor(){
    super()

    this.state = {
      students: [],
      student: {},
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
