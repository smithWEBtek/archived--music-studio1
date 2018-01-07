import React, { Component } from 'react';
import StudentService from '../StudentService'
import classes from './StudentDetail.css';

class StudentDetail extends Component {

  state = {
    student: {}
  }

  componentDidMount() {
    debugger;

    StudentService.get('/students/' + this.props.id)
      .then(response => {
        this.setState({ student: response.data })
      })
  }

  closeStudentHandler = () => {
    this.setState({ student: null })
  }

  render() {
    let student = <p style={{ textAlign: 'center' }}>When do we eat?</p>;
    // debugger;

    if (this.props.id) {
      student = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (this.state.student) {
      student = (
        <div className="StudentDetail">
          <h3>{this.state.student.firstname}</h3>
          <p>Content</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={this.closeStudentHandler}>Delete</button>
          </div>
        </div>
      )
    }

    return (
      <div>
        {student}
      </div>
    )
  }
}

export default StudentDetail;