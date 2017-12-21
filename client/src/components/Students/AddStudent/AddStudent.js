import React, { Component } from 'react';
import classes from './AddStudent.css';

class AddStudent extends Component {
  state = {   
    formVisible: false,
    firstname: '',
    lastname: '',
    email: '',
    level: '',
    teacher_id: ''
  }
 
  handleShowForm = (event) => {
    this.setState({formVisible: !this.state.formVisible})
  }
 
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }
 
  handleSubmit = () => { 
    const studentData = this.state;
    this.props.addStudent(studentData)
    this.setState({
      formVisible: false,
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: ''
    });
  }

  // handleDeleteStudent = (id) => {
  //   StudentService.deleteStudent(id)
  //   .then(response => {
  //     console.log('deleteStudent response: ', response)
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={(event)=>this.handleShowForm(event)}>
          AddStudentForm</button>
        { this.state.formVisible
          ? 
        <form onSubmit={this.handleSubmit} className={classes.AddForm}>

          <p><label htmlFor="student_name">First name </label>
          <input 
            type="text"
            name="firstname"
            value={this.state.firstname} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="firstname"
          /></p>

          <p><label>Last name </label>
          <input 
            type="text"
            name="lastname"
            value={this.state.lastname} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="lastname"
          /></p>

          <p><label>Email </label>
          <input 
            type="text"
            name="email"
            value={this.state.email} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="email"
          /></p>

          <p><label>Level </label>
          <input 
            type="text"
            name="level"
            value={this.state.level} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="level"
          /></p>

          <p><label>Teacher ID </label>
          <input 
            type="text"
            name="teacher_id"
            value={this.state.teacher_id} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="teacher_id"
          /></p>
          <button>Add Student</button>
          <button>Edit Student</button>
          <button onClick={()=>this.handleDeleteStudent()}>Delete Student</button>
        </form>
        : null
        }
      </div>   
    )
  }
}

export default AddStudent;
