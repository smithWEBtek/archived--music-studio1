import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Resource from './Resource/Resource';
import ResourceService from './ResourceService';
import AddResource from '../../components/Resources/AddResource/AddResource';
import classes from './Resources.css';
import Aux from '../../hoc/Aux/Aux';

class Resources extends Component {
  state = {
    resources: [],
    resource: null
  }

  componentDidMount() {
    ResourceService.fetchResources()
      .then(resources => this.setState({ resources: resources }))
  }

  handleAddResource = resource => {
    ResourceService.createResource(resource)
      .then(resource => this.setState({
        resources: this.state.resources.concat(resource)
      }))
  }

  // handleEditResource

  handleDeleteResource = (id) => {
    ResourceService.deleteResource(id);


    let resources = [...this.state.resources];
    console.log('[Resources.handleDeleteResources] resources: ', resources)
    let updatedResources = resources.filter(res => res.id !== id);
    console.log('[Resources.handleDeleteResources] updatedResources: ', updatedResources)
    this.setState({ resources: updatedResources })
  };

  closeResource = () => {
    this.setState({
      resource: null
    });
  }

  render() {
    const showResource = (id) => {
      ResourceService.fetchResource(id)
        .then(response => this.setState({ resource: response }));
    };

    const resourcesList = this.state.resources.map(resource =>
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
          <td><button onClick={() => this.handleDeleteResource(resource.id)}>X</button></td>
        </tr>
      </Aux>
    );

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <AddResource addResource={this.handleAddResource} />
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
          {this.state.resource ? <Resource resource={this.state.resource} close={this.closeResource} /> : null}
        </Aux>
      </Aux>
    )
  }
}

export default Resources;
