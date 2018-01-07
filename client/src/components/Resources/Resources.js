import React, { Component } from 'react';
import * as actionTypes from '../../store/actions/actionTypes';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';
import AddResource from '../../components/Resources/AddResource/AddResource';
import ResourceView from './Resource/ResourceView';
import ResourceService from './ResourceService';
import classes from './Resources.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Resources extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resource: null,
      addedResource: null,
      addingResource: false,
      showResource: false
    }
  }

  // addResourceHandler = (resource) => {
  //   if (resource.title !== "") {
  //     this.setState({ addingResource: true })
  //     ResourceService.createResource(resource)
  //       .then(resource => this.setState({
  //         resources: this.state.resources.concat(resource)
  //       })
  //       )
  //   }
  //   this.setState({ addingResource: false });
  // }

  addResourceHandler = () => {
    this.setState({ addingResource: false });
  }
  addResourceCancelHandler = () => {
    this.setState({
      addingResource: false
    });
  }

  showAddResourceModal = () => {
    // this.props.onResourceAdded
    this.setState({ addingResource: true });
  }

  showResourceHandler = (id) => {
    ResourceService.fetchResource(id)
      .then(response => this.setState({
        resource: response,
        showResource: true
      })
      );
  }

  showResourceCancelHandler = () => {
    this.setState({
      showResource: false
    });
  }

  render() {
    const resourcesList = this.props.res.map(resource => {
      return (
        <Aux key={resource.id}>
          <tr>
            <td>{resource.id}</td>
            <td>{resource.title}</td>
            <td>{resource.category}</td>
            <td>{resource.description}</td>
            <td>{resource.format}</td>
            <td>{resource.location}</td>
            <td><button onClick={() => this.showResourceHandler(resource.id)}>show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.props.onResourceRemoved(resource.id)}>X</button></td>
          </tr>
        </Aux>
      );
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <button onClick={this.showAddResourceModal}>Add Resource</button>
          <Modal
            show={this.state.addingResource}
            modalClosed={this.addResourceCancelHandler}>
            <AddResource
              addResource={this.props.onResourceAdded}
              addResourceCancel={this.addResourceCancelHandler} />
          </Modal>
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
        <Modal
          show={this.state.showResource}
          modalClosed={this.showResourceCancelHandler}>
          <Aux>
            {this.state.resource ? <ResourceView
              title={this.state.resource.title}
              category={this.state.resource.category}
              description={this.state.resource.description}
              format={this.state.resource.format}
              location={this.state.resource.location}
              close={this.showResourceCancelHandler} /> : null}
          </Aux>
        </Modal>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    res: state.res.resources
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResourceAdded: (data) => dispatch({ type: actionTypes.ADD_RESOURCE, resourceData: data }),
    onResourceRemoved: (id) => dispatch({ type: actionTypes.REMOVE_RESOURCE, resourceId: id })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Resources);
