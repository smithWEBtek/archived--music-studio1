import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../App.css'
import LessonResourcesList from '../../LessonResources/LessonResourcesList/LessonResourcesList'

const Lesson = (props) => {

  const lesson = props.lessons.filter(les => les.id === +props.match.params.id)[0]
  let lessonHeader = <div><p>Lesson component is loading...</p></div>
  let renderLessonResources = <div><h5>No resources assigned</h5></div>

  if (lesson) {
    lessonHeader = (
      <div>
        <h5 className="LessonHeaderBackground">{lesson.teacher.lastname} ~ {lesson.student.lastname}</h5>
        <p>Date: <strong>{lesson.date}</strong></p>
        <p>Teacher: <strong><Link to={`/teachers/${lesson.teacher_id}`}>{lesson.teacher.firstname} {lesson.teacher.lastname}</Link></strong></p>
        <p>Student: <strong><Link to={`/students/${lesson.student_id}`}>{lesson.student.firstname} {lesson.student.lastname}</Link></strong></p>
        <p>Notes: <strong>{lesson.notes}</strong></p>
      </div>
    )
  }

  if (lesson && lesson.resources) {
    renderLessonResources = (
      <div>
        <hr />
        <h5 className="ResourceHeaderBackground">RESOURCES assigned to this lesson:</h5>
        <LessonResourcesList
          lesson={lesson}
          close={props.close} />
      </div >
    )
  }

  return (
    <div>
      <div>
        {lessonHeader}
      </div>
      <div>
        {renderLessonResources}
      </div>
    </div >
  )
}

const mapStateToProps = state => {
  return {
    lessons: state.les.lessons,
    resources: state.res.resources
  }
}

export default connect(mapStateToProps)(Lesson)
