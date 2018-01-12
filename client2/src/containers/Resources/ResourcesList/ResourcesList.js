import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import styles from './ResourcesList.css'
import Aux from '../../../hoc/Aux/Aux'

const ResourcesList = (props) => {

  let list = props.resources.map((resource, index) => {
    return (
      <Aux key={index} >
        <tr>
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
    <Aux>
      <div style={{ margin: '30px' }}>
        <Table className={styles.ResourcesList}>
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
    </Aux>
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


export default connect(mapStateToProps)(ResourcesList)
