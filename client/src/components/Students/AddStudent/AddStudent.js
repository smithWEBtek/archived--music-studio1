import React, { Component } from 'react';
import classes from './AddStudent.css';


class AddStudent extends Component {
  constructor(props){
    super(props)

    this.state = {   
      formVisible: false,   
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: '',
    }
  }

  handleShowForm = (event) => {
    this.setState({formVisible: !this.state.formVisible})
  }
 
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    const student = this.state;
    this.props.addStudent(student)
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: '',
      formVisible: false,
    })
  }

  render() {
    return (
      <div>
        <button onClick={(event)=>this.handleShowForm(event)}>
          Add Student</button>
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

          <p><label htmlFor="student_name">Last name </label>
          <input 
            type="text"
            name="lastname"
            value={this.state.lastname} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="lastname"
          /></p>

          <p><label htmlFor="student_name">Email </label>
          <input 
            type="text"
            name="email"
            value={this.state.email} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="email"
          /></p>

          <p><label htmlFor="student_level">Level </label>
          <input 
            type="text"
            name="level"
            value={this.state.level} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="level"
          /></p>

          <p><label htmlFor="student_level">Teacher ID </label>
          <input 
            type="text"
            name="teacher_id"
            value={this.state.teacher_id} 
            onChange={(event)=>this.handleOnChange(event)} 
            placeholder="teacher_id"
          /></p>
          <button>Add Student</button>
        </form>
        : null
        }
      </div>   
    )
  }
}

export default AddStudent;
