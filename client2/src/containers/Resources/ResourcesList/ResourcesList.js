import React from 'react'
// import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'

const ResourcesList = (props) => {

  let list = props.resources.map((resource, index) => {
    return (
      <Aux key={index} >
        <tr>
          <th scope="row">{index}</th>
          <td>{resource.id}</td>
          <td>{resource.title}</td>
          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>
        </tr>
      </Aux >
    )
  })
  return (
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
  )
}

// const mapStateToProps = state => {
//   return {
//     students: state.stu.students,
//     lessons: state.les.lessons,
//     resources: state.res.resources,
//     teacers: state.tch.teachers
//   }
// }

// export default connect(mapStateToProps)(ResourcesList)
export default ResourcesList
