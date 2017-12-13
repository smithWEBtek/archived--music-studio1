import React from 'react';
import { Component } from 'react';

class Student extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.student.email}</p>
      </div>
    )
  } 
}

export default Student;
