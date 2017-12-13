import React from 'react';
import { Component } from 'react';

class Teacher extends Component {
  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <div>
        <p>{this.props.teacher}</p>
      </div>
    )
  } 
}

export default Teacher;