import React from 'react'
import { connect } from 'react-redux'

// import styles from './Resource.css'
import { Table } from 'reactstrap'

import appstyles from '../../../App.css'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

import Pdf from '../ResourceViewer/Pdf'

const Resource = (props) => {

  const resource = props.resources.filter(resource => resource.id === +props.match.params.id)[0]
  let resourceHeader = <div><p>Resource component is loading...</p></div>
  let resourceLessons = <div><h5>No lessons recorded</h5></div>
  let resourceStudents = <div><h5>No students assigned to this resource</h5></div>
  let resourceTeachers = <div><h5>No teachers have assigned this resource</h5></div>

  if (resource) {
    resourceHeader = (
      <div>
        <hr />
        <h1 className={appstyles.ResourceHeaderBackground}>{resource.title}</h1>
        <p>Category: <strong>{resource.category}</strong></p>
        <p>Description: <strong>{resource.description}</strong></p>
        <p>Format: <strong>{resource.format}</strong></p>
        <p>Location: <strong>{resource.location}</strong></p>
        <p>Number of students assigned this resource: <strong>{resource.students.length}</strong></p>
        <p>Number of times teachers assigned this resource: <strong>{resource.lessons.length}</strong></p>
      </div>
    )
  }

  return (
    <div>
      {resourceHeader}
      <Pdf />
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

export default connect(mapStateToProps)(Resource)
