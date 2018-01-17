import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import './LessonResourcesList.css'
import { Table } from 'reactstrap'
import Aux from '../../../hoc/Aux/Aux'
import * as actionCreators from '../../../store/actions/index'
import appstyles from '../../../App.css'

class LessonResourcesList extends Component {

  componentDidMount() {
    this.props.onFetchLessonResources()
    this.props.onFetchResources()
  }

  render() {
    const addLessonResource = (lesson_id, resource_id) => {
      let data = {
        lesson_id: lesson_id,
        resource_id: resource_id
      }
      this.props.onCreateLessonResource(data)
    }

    const removeLessonResource = (id) => {
      this.props.onDeleteLessonResource(id)
    }

    let renderLessonResources = <tr><td>No resources for this lesson</td></tr>
    let allResources = <tr><td>Loading full resources list ...</td></tr>

    if (this.props.lesson.resources) {
      renderLessonResources = this.props.lesson.resources.map((resource, index) => {
        let resourceLRID = this.props.lesson.lesson_resources.find(lr => lr.resource_id === resource.id).id
        return (
          <tr key={index}>
            <th scope="row">{resource.id}</th>
            <td><Link to={`/resources/${resource.id}`}>{resource.title}</Link></td>
            <td>{resource.category}</td>
            <td>{resource.description}</td>
            <td>{resource.format}</td>
            <td>{resource.location}</td>
            <td><button type='button' onClick={() => removeLessonResource(resourceLRID)} className="Danger">
              Remove</button></td>
          </tr >
        )
      })
    }

    allResources = this.props.resources.map((resource, index) => {
      return (
        <tr key={index}>
          <th scope="row">{resource.id}</th>
          <td><Link to={`/resources/${resource.id}`}>{resource.title}</Link></td>
          <td>{resource.category}</td>
          <td>{resource.description}</td>
          <td>{resource.format}</td>
          <td>{resource.location}</td>
          <td><button type='button' onClick={() => addLessonResource(this.props.lesson.id, resource.id)} className="Success">
            Add to Lesson</button></td>
        </tr >
      )
    })

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
              <th>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
            {renderLessonResources}
          </tbody>
        </Table>
        <div><h5 className={appstyles.ResourceHeaderBackground}>Add Additional Resources</h5></div>
        < Table striped size="sm" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Format</th>
              <th>Location</th>
              <th>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
            {allResources}
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
    onFetchLessonResources: () => dispatch(actionCreators.fetchLessonResources()),
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  }
}

export default connect(mapStateToProps, addDispatchToProps)(LessonResourcesList)
