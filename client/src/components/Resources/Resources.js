import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index'
import { connect } from 'react-redux'

import { Table } from 'reactstrap'
import classes from './Resources.css'
import Aux from '../../hoc/Aux/Aux'
import Modal from '../UI/Modal/Modal'

import Resource from './Resource/Resource'
import CreateResource from './CreateResource/CreateResource'
import EditResource from '../Resources/EditResource/EditResource'
// import ResourceStats from './ResourceStats/ResourceStats'

class Resources extends Component {
  state = {
    resource: null,
    showResource: false,

    resourceDetail: null,
    showResourceDetail: false,

    createResource: false,
    editResource: false
  }

  componentDidMount() {
    this.props.onFetchResources()
  }

  //********CREATE_RESOURCE form handling **************************
  createResourceForm = () => {
    this.setState({ createResource: true })
  }

  createResourceFormCancel = () => {
    this.setState({ createResource: false })
  }

  createResource = (newResourceData) => {
    this.props.onResourceCreate(newResourceData)
    this.setState({ createResource: false })
  }

  //********SHOW_RESOURCE form handling**************************
  showResource = (id) => {
    let resource = this.props.resources.filter(resource => resource.id === id)[0]
    this.setState({
      resource: resource,
      showResource: true
    })
  }

  showResourceClose = () => {
    this.setState({ showResource: false })
  }

  //********EDIT_RESOURCE form handling**************************
  showEditResourceForm = (id) => {
    let resource = this.props.resources.filter(resource => resource.id === id)[0]
    this.setState({
      resource: resource,
      editResource: true
    })
  }

  editResourceFalse = () => {
    this.setState({ editResource: false })
  }

  editResourceUpdate = (data) => {
    this.props.onResourceUpdate(data)
    this.setState({ resource: null, editResource: false })
  }

  render() {
    let resourcesList = this.props.resources.map(resource => {
      return (
        <Aux key={resource.id}>
          <tr>
            <td>{resource.id}</td>
            <td>{resource.title}</td>
            <td>{resource.category}</td>
            <td>{resource.description}</td>
            <td>{resource.format}</td>
            <td>{resource.location}</td>
            <td><button
              onClick={() => this.showResource(resource.id)}
              className={classes.Success}>Show</button></td>
            <td><button
              onClick={() => this.showEditResourceForm(resource.id)}
              className={classes.Edit}>Edit</button></td>
            <td><button
              onClick={() => this.props.onResourceDelete(resource.id)}
              className={classes.Danger}>X</button></td>
          </tr>
        </Aux>
      )
    })

    let showResourceData = <p>show resource data </p>
    if (this.state.resource) {
      showResourceData = (
        <Resource
          id={this.state.resource.id}
          title={this.state.resource.title}
          category={this.state.resource.category}
          description={this.state.resource.description}
          format={this.state.resource.format}
          location={this.state.resource.location}
          close={this.showResourceClose}
        />
      )
    }

    return (
      <Aux>
        <div style={{ margin: '30px' }}>

          {/*********CREATE RESOURCE MODAL********************************************/}
          <button onClick={this.createResourceForm}>Add Resource</button>
          <Modal
            show={this.state.createResource}
            modalClosed={this.createResourceFormCancel}>
            <CreateResource
              createResource={(newResourceData) => this.createResource(newResourceData)}
              createResourceCancel={this.createResourceFormCancel} />
          </Modal>

          {/**********SHOW RESOURCE MODAL**********************************************/}
          <Modal
            show={this.state.showResource}
            modalClosed={this.showResourceClose}>
            <Aux>
              {showResourceData}
            </Aux>
          </Modal>

          {/**********EDIT RESOURCE MODAL**********************************************/}
          <Modal
            show={this.state.editResource}
            modalClosed={this.editResourceCancelHandler}>
            <Aux>
              {this.state.resource ? <EditResource
                id={this.state.resource.id}
                title={this.state.resource.title}
                category={this.state.resource.category}
                description={this.state.resource.description}
                format={this.state.resource.format}
                location={this.state.resource.location}
                close={this.editResourceFalse}
                updateResource={(data) => this.editResourceUpdate(data)}
              /> : <p>no resource data yet...</p>}
            </Aux>
          </Modal>

          {/**********RESOURCES INDEX TABLE*************************************/}
          <legend>All Resources</legend>
          <Table className={classes.Resources}>
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
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {resourcesList}
            </tbody>
          </Table>
        </div>
        {/**********RESOURCES ResourceStats*************************************/}
        {/* <ResourceStats resources={this.props.resources} /> */}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    resources: state.res.resources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResourceCreate: (newResourceData) => dispatch(actionCreators.createResource(newResourceData)),
    onResourceUpdate: (data) => dispatch(actionCreators.updateResource(data)),
    onResourceDelete: (id) => dispatch(actionCreators.deleteResource(id)),
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources)