import React from 'react';
import { connect } from 'react-redux';

const StudentsShow = ({ student }) =>
  <div className="col-md-8">
    <h2>{student.name}</h2>
    <p>{student.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const student = state.students.find(student => student.id == ownProps.match.params.studentId)
  // const student = state.students.find(student => student.id.toString() === ownProps.match.params.studentId)

  console.log('state: ', { state })
  console.log('state.students: ', state.students)
  console.log('ownProps.match.url: ', ownProps.match.url)

  if (student) {
    console.log("student: ", { student })
    return { student }
  } else {
    return { student: {} }
  }
};

export default connect(mapStateToProps)(StudentsShow);
