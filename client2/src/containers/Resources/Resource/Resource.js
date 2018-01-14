import React from 'react'
import { connect } from 'react-redux'

// import styles from './Resource.css'
import { Table } from 'reactstrap'
// import ResourceViewer from '../ResourceViewer/ResourceViewer'
import Pdf from '../ResourceViewer/Pdf'
import appstyles from '../../../App.css'
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import LessonsList from '../../Lessons/LessonsList/LessonsList'

const Resource = (props) => {
  const renderResource = props.resources.filter(resource => resource.id === +props.match.params.id)[0]

  let resourceHeader = <div><p>Resource component is loading...</p></div>
  let pdfResource = <div><p> this is not a PDF format </p></div>
  console.log('[Resource.js] renderResource', renderResource)

  if (renderResource) {
    resourceHeader = (
      <div>
        <hr />
        <h1 className={appstyles.ResourceHeaderBackground}>{renderResource.title}</h1>
        <p>Category: <strong>{renderResource.category}</strong></p>
        <p>Description: <strong>{renderResource.description}</strong></p>
        <p>Format: <strong>{renderResource.format}</strong></p>
        <p>Location: <strong>{renderResource.location}</strong></p>
        <p>Number of students assigned this resource: <strong>{renderResource.students.length}</strong></p>
        <p>Number of times teachers assigned this resource: <strong>{renderResource.lessons.length}</strong></p>
      </div>
    )

    if (renderResource.format === "pdf") {
      pdfResource = <Pdf resource={renderResource} />
    }
  }

  return (
    <div>
      {resourceHeader}
      {pdfResource}
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
