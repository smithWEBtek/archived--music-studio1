import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Resource.css'
import appstyles from '../../../App.css'
import { Container, Row, Col } from 'reactstrap'
import ResourceViewer from '../ResourceViewer/ResourceViewer'

const Resource = (props) => {
  const resource = props.resources.filter(resource => resource.id === +props.match.params.id)[0]

  let resourceData = <div><p>Resource component is loading...</p></div>
  let resourceView = <div><p>Resource view is loading...</p></div>
  let resourceTeachers = <p>None yet</p>

  if (resource && resource.teachers.length > 0) {
    resourceTeachers = resource.teachers.map((tch, index) => {
      return (
        <li key={index}><Link to={`/teachers/${tch.id}`}>{tch.lastname}</Link></li>
      )
    })
  }

  if (resource) {
    resourceData = (
      <div>
        <hr />
        <h5 className={appstyles.ResourceHeaderBackground}>{resource.title}</h5>
        <p>Category: <strong>{resource.category}</strong></p>
        <p>Description: <strong>{resource.description}</strong></p>
        <p>Format: <strong>{resource.format}</strong></p>
        <p>Location: <strong>{resource.location}</strong></p>
        <p>Number of students assigned this resource: <strong>
          {resource.students.length}</strong></p>
        <p>Number of times teachers assigned this resource: <strong>{resource.lessons.length}</strong></p>

        <div className={styles.TeacherResources}>
          <p>Teachers who assigned this resource:</p>
          <ul>{resourceTeachers}</ul>
        </div>
      </div>
    )
    resourceView = (
      <ResourceViewer resource={resource} />
    )
  }

  return (
    <Container>
      <Row>
        <Col xs="3">
          {resourceData}
        </Col>
        <Col xs="9" className={styles.ViewerTopMargin}>
          {resourceView}
        </Col>
      </Row>
    </Container>
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
