import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'

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
