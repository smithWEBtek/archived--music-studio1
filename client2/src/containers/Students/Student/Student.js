import React from 'react'
import { connect } from 'react-redux'

import styles from './Student.css'
// import { Container, Row, Col } from 'reactstrap'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

const Student = (props) => {

  const student = props.students.filter(student => student.id === +props.match.params.id)[0]
  let studentHeader = <div><p>Student component is loading...</p></div>
  let studentLessons = <div><h5>No lessons recorded</h5></div>
  let studentResources = <div><h5>No resources assigned</h5></div>

  if (student) {
    studentHeader = (
      <div>
        <hr />
        <h1 className={styles.StudentHeaderBackground}>{student.firstname} {student.lastname}</h1>
        <p>Level: <strong>{student.level}</strong></p>
        <p>Teacher: <strong>{student.teacher.lastname}</strong></p>
        <p>Last lesson date: <strong>{student.lessons.length !== 0 ? student.lessons[student.lessons.length - 1].date : 'no lessons on record for this student'}</strong></p>
      </div>
    )
  }

  if (student && student.lessons) {
    studentLessons = (
      <div>
        <hr />
        <h5 className={styles.LessonHeaderBackground}>LESSONS recorded for <strong>{student.firstname}</strong></h5>
        <div><LessonsList lessons={student.lessons} /></div>
      </div>
    )
  }

  if (student && student.resources) {
    studentResources = (
      <div>
        <hr />
        <h5 className={styles.ResourceHeaderBackground}>RESOURCES assigned to <strong>{student.firstname}</strong></h5>
        <div><ResourcesList resources={student.resources} /></div>
      </div >
    )
  }

  return (
    <div>
      <div>
        {studentHeader}
      </div>
      <div>
        {studentLessons}
      </div>
      <div>
        {studentResources}
      </div>
    </div >
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
