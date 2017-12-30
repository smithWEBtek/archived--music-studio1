import React from 'react';
import { Table } from 'reactstrap';
import classes from './LessonResources.css';
import Aux from '../../../hoc/Aux/Aux';

const lessonResources = (props) => {

  let resourcesDisplay = <p style={{ fontStyle: 'italic' }}>No resources assigned to this lesson.</p>

  if (props.resources.length > 0) {
    let resourcesBody = props.resources.map((resource, index) => {
      return (
        <Aux key={index}>
          <tr>
            <td>{resource.id}</td>
            <td>{resource.title}</td>
            <td>{resource.category}</td>
            <td>{resource.description}</td>
            <td>{resource.format}</td>
            <td>{resource.location}</td>
          </tr>
        </Aux>
      )
    })

    let resourcesTable =
      <div>
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
            {resourcesBody}
          </tbody>
        </Table>
      </div>
    resourcesDisplay = resourcesTable;
  }

  return (
    <div style={{ margin: '30px' }}>
      {resourcesDisplay}
    </div>
  );
}

export default lessonResources;
