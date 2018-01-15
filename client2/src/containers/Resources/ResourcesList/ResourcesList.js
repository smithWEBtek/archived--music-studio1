import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'
import styles from './ResourcesList.css'

const ResourcesList = (props) => {

  let list = props.resources.map((resource, index) => {

    return (
      <Aux key={index} >
        <tr>
          <th scope="row">{index + 1}</th>
          <td><button>
            <Link
              to={`/resources/${resource.id}`}
              params={{ id: resource.id }}
              key={resource.id}
            >{resource.title}</Link>
          </button></td>
          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>

          <td><button
            type='button'
            className={styles.Success}
            onClick={props.close}>
            <Link
              to={`/resources/${resource.id}`}
              params={{ id: resource.id }}
              key={resource.id}
            >SHOW</Link>
          </button></td>

          {props.edit ?
            <td><button
              type='button'
              className={styles.Edit}
              onClick={() => props.edit(resource.id)}>EDIT
        </button></td>
            : null}

          {props.delete ?
            <td><button
              onClick={() => props.delete(resource.id)}
              className={styles.Danger}>X</button></td>
            : null}
        </tr>
      </Aux >
    )
  })
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Format</th>
            <th>Location</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </Table>
    </div>
  )
}

export default ResourcesList
