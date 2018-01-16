import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import styles from './Lesson.css'
// import { Container, Row, Col } from 'reactstrap'

import appstyles from '../../../App.css'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import StudentsList from '../../Students/StudentsList/StudentsList'
import TeachersList from '../../Teachers/TeachersList/TeachersList'

const Lesson = (props) => {

  const lesson = props.lessons.filter(lesson => lesson.id === +props.match.params.id)[0]
  let lessonHeader = <div><p>Lesson component is loading...</p></div>
  let lessonTeacher = <div><h5>No teacher assigned</h5></div>
  let lessonStudent = <div><h5>No student assigned</h5></div>
  let lessonResources = <div><h5>No resources assigned</h5></div>

  if (lesson) {
    lessonHeader = (
      <div>
        <h5 className={appstyles.LessonHeaderBackground}>{lesson.teacher.lastname} ~ {lesson.student.lastname}</h5>
        <p>Date: <strong>{lesson.date}</strong></p>
        <p>Teacher: <strong><Link to={`/teachers/${lesson.teacher_id}`}>{lesson.teacher.firstname} {lesson.teacher.lastname}</Link></strong></p>
        <p>Student: <strong><Link to={`/students/${lesson.student_id}`}>{lesson.student.firstname} {lesson.student.lastname}</Link></strong></p>
        <p>Notes: <strong>{lesson.notes}</strong></p>
      </div>
    )
  }

  if (lesson && lesson.resources) {
    lessonResources = (
      <div>
        <hr />
        <h5 className={appstyles.ResourceHeaderBackground}>RESOURCES assigned in this lesson:</h5>
        <div><ResourcesList resources={lesson.resources} /></div>
      </div >
    )
  }

  return (
    <div>
      <div>
        {lessonHeader}
      </div>
      <div>
        {lessonResources}
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

export default connect(mapStateToProps)(Lesson)
