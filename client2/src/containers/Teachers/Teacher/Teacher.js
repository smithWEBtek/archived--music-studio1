import React from 'react'
import { connect } from 'react-redux'

// import styles from './Teacher.css'
import appstyles from '../../../App.css'
// import { Container, Row, Col } from 'reactstrap'
import StudentsList from '../../Students/StudentsList/StudentsList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

const Teacher = (props) => {

  const teacher = props.teachers.filter(teacher => teacher.id === +props.match.params.id)[0]
  let teacherHeader = <div><p>Teacher component is loading...</p></div>
  let teacherLessons = <div><h5>No lessons recorded</h5></div>
  let teacherStudents = <div><h5>No students assigned</h5></div>

  if (teacher) {
    teacherHeader = (
      <div>
        <hr />
        <h1 className={appstyles.TeacherHeaderBackground}>{teacher.firstname} {teacher.lastname}</h1>
        <p>Email: {teacher.email} </p>
      </div>
    )
  }

  if (teacher && teacher.lessons) {
    teacherLessons = (
      <div>
        <hr />
        <h5 className={appstyles.LessonHeaderBackground}>LESSONS recorded for <strong>{teacher.firstname}</strong></h5>
        <div><LessonsList lessons={teacher.lessons} /></div>
      </div>
    )
  }

  if (teacher && teacher.students) {
    teacherStudents = (
      <div>
        <hr />
        <h5 className={appstyles.StudentHeaderBackground}>STUDENTS assigned to <strong>{teacher.firstname}</strong></h5>
        <div><StudentsList students={teacher.students} /></div>
      </div >
    )
  }

  return (
    <div>
      <div>
        {teacherHeader}
      </div>
      <div>
        {teacherLessons}
      </div>
      <div>
        {teacherStudents}
      </div>
    </div >
  )
}

const mapStateToProps = state => {
  return {
    students: state.stu.teachers,
    teachers: state.tch.teachers,
    resources: state.res.resources,
    lessons: state.les.lessons
  }
}

export default connect(mapStateToProps)(Teacher)
