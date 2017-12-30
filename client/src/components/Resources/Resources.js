import React, { Component } from 'react';
import { Table } from 'reactstrap';
import AddResource from '../../components/Resources/AddResource/AddResource';
import Resource from './Resource/Resource';
import ResourceService from './ResourceService';
import classes from './Resources.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Resources extends Component {
  state = {
    resources: [],
    resource: null,
    addedResource: null,
    addingResource: false
  }

  componentDidMount() {
    ResourceService.fetchResources()
      .then(response => this.setState({ resources: response }))
  }

  // handleEditResource

  deleteResourceHandler = (id) => {
    ResourceService.deleteResource(id);
    let resources = [...this.state.resources];
    resources = resources.filter(resource => resource.id !== id);
    this.setState({ resources: resources });
  };

  closeResourceHandler = () => {
    this.setState({
      resource: null
    });
  }

  addResourceHandler = (resource) => {
    if (resource.title !== "") {
      this.setState({ addingResource: true })
      ResourceService.createResource(resource)
        .then(resource => this.setState({
          resources: this.state.resources.concat(resource)
        })
        )
    }
    this.setState({ addingResource: false });
  }

  addResourceCancelHandler = () => {
    this.setState({
      resource: null,
      addingResource: false
    });
  }

  showModal = () => {
    this.setState({ addingResource: true });
  }

  render() {
    const showResource = (id) => {
      ResourceService.fetchResource(id)
        .then(response => this.setState({ resource: response }));
    };

    const resourcesList = this.state.resources.map(resource => {
      return (
        <Aux key={resource.id}>
          <tr>
            <td>{resource.id}</td>
            <td>{resource.title}</td>
            <td>{resource.category}</td>
            <td>{resource.description}</td>
            <td>{resource.format}</td>
            <td>{resource.location}</td>
            <td><button onClick={() => showResource(resource.id)}>show</button></td>
            <td><button>Edit</button></td>
            <td><button onClick={() => this.deleteResourceHandler(resource.id)}>X</button></td>
          </tr>
        </Aux>
      );
    });

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <button onClick={this.showModal}>Add Resource</button>
          <Modal
            show={this.state.addingResource}
            modalClosed={this.addResourceCancelHandler}>
            <AddResource
              addResource={this.addResourceHandler}
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
        <Aux>
          {this.state.resource ? <Resource
            title={this.state.resource.title}
            category={this.state.resource.category}
            description={this.state.resource.description}
            format={this.state.resource.format}
            location={this.state.resource.location}
            close={this.closeResourceHandler} /> : null}
        </Aux>
      </Aux>
    )
  }
}

export default Resources;
