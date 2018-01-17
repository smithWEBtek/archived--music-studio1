import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import './LessonResourcesList.css'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'
import * as actionCreators from '../../../store/actions/index'

const LessonResourcesList = (props) => {


  const addLessonResource = (id) => {
    props.onCreateLessonResource(id)
  }

  const removeLessonResource = (id) => {
    props.onDeleteLessonResource(id)
  }

  let renderLessonResources = <tr><td>No resources for this lesson</td></tr>

  if (props.lesson.resources) {
    renderLessonResources = props.lesson.resources.map((resource, index) => {
      let resourceLRID = props.lesson.lesson_resources.find(lr => lr.resource_id === resource.id).id

      return (
        <tr key={index}>
          <th scope="row">{resource.id}</th>
          <td><Link to={`/resources/${resource.id}`}>{resource.title}</Link></td>
          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>
          <td><button type='button' onClick={() => removeLessonResource(resourceLRID)}>
            Remove</button></td>
        </tr >
      )
    })
  }

  return (
    <Aux>
      < Table striped size="sm" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Format</th>
            <th>Location</th>
            <th>Remove Resource</th>
          </tr>
        </thead>
        <tbody>
          {renderLessonResources}
        </tbody>
      </Table>
      <div>
        <Switch>
          <Route path='/lesson_resources/:id' exact />
          <Route path='/lesson_resources' exact />
        </Switch>
      </div>
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    lessonResources: state.lesres.lessonResources,
    resources: state.res.resources
  }
}

const addDispatchToProps = dispatch => {
  return {
    onCreateLessonResource: (id) => dispatch(actionCreators.createLessonResource(id)),
    onDeleteLessonResource: (id) => dispatch(actionCreators.deleteLessonResource(id)),
    onFetchLessonResources: () => dispatch(actionCreators.fetchLessonResources())
  }
}


export default connect(mapStateToProps, addDispatchToProps)(LessonResourcesList)
