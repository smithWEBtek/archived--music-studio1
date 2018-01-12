import React from 'react';
import { connect } from 'react-redux';

import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

const ShowStudent = (props) => {
  console.log('[ShowStudent] props.students', props)
  const student = props.students.find(student => student.id === +props.match.params.id)

  let studentDisplayHeader = <div><p>ShowStudent component is rendering...</p></div>
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

  let studentDisplayLessons = <div><p>No lessons recorded</p></div>
  if (student && student.lessons) {
    studentDisplayLessons = (
      <div>
        <hr />
        <p>LESSONS recorded for <strong>{student.firstname}</strong></p>
        <div>{student.lessons ? <LessonsList lessons={student.lessons} /> : 'no lessons recorded'} </div>
      </div>
    )
  }

  let studentDisplayResources = <div><p>No resources assigned</p></div>
  if (student && student.resources) {
    studentDisplayResources = (
      <div>
        <hr />
        <p>RESOURCES assigned to <strong>{student.firstname}</strong></p>
        <div>{student.resources ? <ResourcesList resources={student.resources} /> : 'no resources assigned'} </div>
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
    lessons: state.les.lessons,
    resources: state.res.resources,
    teacers: state.tch.teachers
  }
}

export default connect(mapStateToProps, null)(ShowStudent);
