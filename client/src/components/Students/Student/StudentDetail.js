import React, { Component } from 'react';
import classes from './StudentDetail.css';

class StudentDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {
        id: null,
        firstname: 'joe'
      }
    }
  }

  // componentDidMount() {

  //   StudentService.get('/students/' + this.props.id)
  //     .then(response => {
  //       this.setState({ student: response.data })
  //     })
  // }

  // closeStudentHandler = () => {
  //   this.setState({ student: null })
  // }

  render() {
    debugger;
    let studentDetail = <p style={{ textAlign: 'center' }}>When do we eat?</p>;

    if (!this.state.student.id) {
      studentDetail = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    } else {
      studentDetail = (
        <div className={classes.StudentDetail}>
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
        <p>hello world</p>
        {studentDetail}
      </div>
    )
  }
}

export default StudentDetail;