import React from 'react';
import { connect } from 'react-redux';
import Resources from '../../components/Resources/Resources'
const StudentsShow = (props) => {

  console.log('[StudentsShow] props', props)
  // debugger;

  const student = props.students.find(student => student.id === +props.match.params.id)
  let studentDisplay = (
    <div>
      <p>StudentsShow component is rendering...</p>
      <h1>{props.match.params.id}</h1>
    </div >
  )

  const studentResources = student


  if (student) {
    studentDisplay = (
      <div>
        <h1>{student.firstname} {student.lastname}</h1>
        <p>Teacher: {student.teacher.lastname}</p>
        <p>Level: {student.level}</p>
        <p>Last lesson date: {student.lessons[student.lessons.length - 1].date}</p>
        <p>Current resources {student.firstname} is working on: </p>

        <p>Chooose resources for {student.firstname}</p>
        <Resources resources={studentResources} />

      </div>
    )
  }

  return (
    <div>
      {studentDisplay}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    students: state.stu.students
  }
}



export default connect(mapStateToProps, null)(StudentsShow);
