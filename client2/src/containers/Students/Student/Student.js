import React from 'react'
import { connect } from 'react-redux'

// import styles from './Student.css'
// import { Container, Row, Col } from 'reactstrap'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

const Student = (props) => {

  const student = props.students.filter(student => student.id === +props.match.params.id)[0]

  // debugger;

  let studentDisplayHeader = <div><p>Student component is loading...</p></div>
  let studentDisplayLessons = <div><h3>No lessons recorded</h3></div>

  let studentDisplayResources = <div><h3>No resources assigned</h3></div>
  if (student) {
    studentDisplayHeader = (
      <div>
        <hr />
        <h1>{student.firstname} {student.lastname}</h1>
        <p>Level: <strong>{student.level}</strong></p>
        <p>Teacher: <strong>{student.teacher.lastname}</strong></p>
        <p>Last lesson date: <strong>{student.lessons.length !== 0 ? student.lessons[student.lessons.length - 1].date : 'no lessons on record for this student'}</strong></p>
      </div>
    )
  }

  if (student && student.lessons) {
    studentDisplayLessons = (
      <div>
        <hr />
        <p>LESSONS recorded for <strong>{student.firstname}</strong></p>
        <div><LessonsList lessons={student.lessons} /></div>
      </div>
    )
  }

  if (student && student.resources) {
    studentDisplayResources = (
      <div>
        <hr />
        <p>RESOURCES assigned to <strong>{student.firstname}</strong></p>
        <div><ResourcesList resources={student.resources} /></div>
      </div >
    )
  }

  return (
    <div>

      {studentDisplayHeader}

      {studentDisplayLessons}
      <hr />
      {studentDisplayResources}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    teachers: state.tch.teachers,
    resources: state.res.resources,
    lessons: state.les.lessons
  }
}
export default connect(mapStateToProps)(Student)
