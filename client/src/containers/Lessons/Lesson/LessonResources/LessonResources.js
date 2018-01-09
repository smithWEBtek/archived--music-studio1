import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap'
import classes from './LessonResources.css'
// import Aux from '../../../../hoc/Aux/Aux'

const LessonResources = (props) => {
  let resourcesList = (
    <div>
      <p style={{ fontStyle: 'italic' }}>No resources assigned to this lesson.</p>
    </div>
  )

  if (props.resources) {
    resourcesList = props.resources.map((resource, index) => {
      return (
        <tr key={index}>
          <td>{resource.id}</td>
          <td>{resource.title}</td>
          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>
        </tr>
      )
    })
  }

  return (
    <Table className={classes.LessonResources}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Format</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>

        {resourcesList}

      </tbody>
    </Table>
  )
}

export default LessonResources
