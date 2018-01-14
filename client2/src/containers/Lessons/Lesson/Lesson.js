import React from 'react'
import { connect } from 'react-redux'

// import styles from './Lesson.css'
// import { Container, Row, Col } from 'reactstrap'

import appstyles from '../../../App.css'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
// import LessonsList from '../../Lessons/LessonsList/LessonsList'
// import StudentsList from '../../Students/StudentsList/StudentsList'

const Lesson = (props) => {

  const lesson = props.lessons.filter(lesson => lesson.id === +props.match.params.id)[0]
  let lessonHeader = <div><p>Lesson component is loading...</p></div>
  // let lessonTeacher = <div><h5>No teacher assigned</h5></div>
  // let lessonStudent = <div><h5>No student assigned</h5></div>
  let lessonResources = <div><h5>No resources assigned</h5></div>

  if (lesson) {
    lessonHeader = (
      <div>
        <hr />
        <h1 className={appstyles.LessonHeaderBackground}>Date: {lesson.date}</h1>
        <p>Teacher: <strong>{lesson.teacher.lastname}</strong></p>
        <p>Student: <strong>{lesson.student.lastname}</strong></p>
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
