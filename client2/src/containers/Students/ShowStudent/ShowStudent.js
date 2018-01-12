import React from 'react'
import { connect } from 'react-redux'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'
import { Container, Row, Col } from 'reactstrap'
import styles from './ShowStudent.css'

const ShowStudent = (props) => {

  const student = props.students.find(student => student.id === +props.match.params.id)
  let studentDisplayHeader = <div><p>ShowStudent component is loading...</p></div>
  if (student) {
    studentDisplayHeader = (
      <Container>
        <Row className={styles.RowHeaderBackground}>
          <hr />
          <Col xs="3"><h4>{student.firstname} {student.lastname}</h4></Col>
          <Col xs="3">Level: <strong>{student.level}</strong></Col>
          <Col xs="3">Teacher: <strong>{student.teacher.lastname}</strong></Col>
          <Col xs="3">Last lesson date: <strong>{student.lessons.length !== 0 ? student.lessons[student.lessons.length - 1].date : 'no lessons on record for this student'}</strong></Col>
        </Row>
      </Container>
    )
  }

  let studentDisplayLessons = <div><p>No lessons recorded</p></div>
  if (student && student.lessons) {
    studentDisplayLessons = (
      <div>
        <hr />
        <p><strong>LESSONS</strong> recorded for <strong>{student.firstname}</strong></p>
        <div>{student.lessons ? <LessonsList student_id={student.id} /> : 'no lessons recorded'} </div>
      </div>
    )
  }

  let studentDisplayResources = <div><p>No resources assigned</p></div>

  if (student && student.resources) {
    studentDisplayResources = (
      <div>
        <p><strong>RESOURCES</strong> assigned to <strong>{student.firstname}</strong></p>
        <div>{student.resources ? <ResourcesList resources={student.resources} /> : 'no resources assigned'} </div>
      </div >
    )
  }

  return (
    <div>
      <hr />
      {studentDisplayHeader}
      {studentDisplayLessons}
      {studentDisplayResources}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    lessons: state.les.lessons,
    resources: state.res.resources,
    teacers: state.tch.teachers
  }
}

export default connect(mapStateToProps, null)(ShowStudent)
