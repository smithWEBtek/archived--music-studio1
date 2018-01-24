import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'
import './ResourcesList.css'

const ResourcesList = (props) => {

  let sortedResources = props.resources.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0)
  let renderResources = sortedResources.map((resource, index) => {
    return (
      <Aux key={index} >
        <tr>
          <th scope="row">{index + 1}</th>

          {resource.url === 'no_url_given' ? (
            <td><button
              type='button'
              className="Disabled"
            >empty</button></td>)
            : (<td><button
              className="Success"><Link
                to={`/resources/${resource.id}`}
                params={{ id: resource.id }}
                key={resource.id}
                onClick={props.close}
              >show</Link></button></td>)}

          <td><Link
            to={`/resources/${resource.id}`}
            params={{ id: resource.id }}
            key={resource.id}
            onClick={props.close}
          >{resource.title}</Link></td>

          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>

          {props.edit ?
            <td><button
              type='button'
              className="Edit"
              onClick={() => props.edit(resource.id)}>edit
        </button></td>
            : null}

          {props.delete ?
            <td><button
              onClick={() => props.delete(resource.id)}
              className="Danger">x</button></td>
            : null}
        </tr>
      </Aux >
    )
  })

  return (
    <div>
      <Table striped size="sm" className="ResourcesList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Show</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Format</th>
            <th>Location</th>
            {props.edit ? <th>Edit</th> : null}
            {props.delete ? <th>Delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {renderResources}
        </tbody>
      </Table>
    </div>
  )
}

export default ResourcesList
