import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Resource from './Resource/Resource';
import ResourceService from './ResourceService';
import AddResource from '../../components/Resources/AddResource/AddResource';
import classes from './Resources.css';
import Aux from '../../hoc/Aux/Aux';

class Resources extends Component {
  state = {
    resources : [],
    resource : null
  }

  componentDidMount() {
    ResourceService.fetchResources()
    .then(resources => this.setState({resources: resources}))
  }

  closeResource = () => {
    this.setState({
      resource: null
    });
  }

  addResource = resource => {
    ResourceService.createResource(resource)
      .then(resource => this.setState({
        resources: this.state.resources.concat(resource)
    }))
  }

  render() {
    const showResource = (id) => {
      ResourceService.fetchResource(id)
      .then(response => this.setState({resource: response}));
    };
      
    const resourcesList = this.state.resources.map(resource => 
      <div key={resource.id}>
        <Table className={classes.Resources}>
          <thead>
            <tr>
              <td><button onClick={()=>showResource(resource.id)}>show</button></td>
              <td>{resource.id}</td>
              <td>{resource.title}</td>
              <td>{resource.category}</td>
              <td>{resource.description}</td>
              <td>{resource.format}</td>
              <td>{resource.location}</td>
            </tr>
          </thead>
        </Table>
      </div> 
    );

  return (
    <Aux>
      <div>
        <Table className={classes.Resources}>
          <thead>
            <tr>
              <th scope="row">ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Format</th>
              <th>Location</th>
            </tr>
          </thead>
        </Table>
        <AddResource addResource={this.addResource}/>
        {resourcesList}
      </div>
      <Aux>
        {this.state.resource ? <Resource resource={this.state.resource} close={this.closeResource} /> : null }
      </Aux>
    </Aux>
    )
  }
}

export default Resources;
