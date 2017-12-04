import React, { Component } from 'react';

class AddStudent extends Component {
  constructor(props){
    super(props)

    this.state = {     
      firstname: '',
      lastname: '',
      email: '',
      level: '',
      teacher_id: '',
    }
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
    })

  }

  render() {
    return (          
      <form onSubmit={this.handleSubmit} className='add-form'>

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
    )
  }
}

export default AddStudent;
