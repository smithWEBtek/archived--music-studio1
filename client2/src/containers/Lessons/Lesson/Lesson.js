import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import styles from './Lesson.css'
// import { Container, Row, Col } from 'reactstrap'

import appstyles from '../../../App.css'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'

const Lesson = (props) => {

  const lesson = props.lessons.filter(lesson => lesson.id === +props.match.params.id)[0]
  let lessonHeader = <div><p>Lesson component is loading...</p></div>
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
    resources: state.res.resources,
    students: state.stu.students,
    teachers: state.tch.teachers,
    lessons: state.les.lessons
  }
}

export default connect(mapStateToProps)(Lesson)
