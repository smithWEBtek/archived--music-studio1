import React, { Component } from 'react';
import classes from './AddResource.css';

class AddResource extends Component {
  state = {
    formVisible: false,
    title: '',
    category: '',
    description: '',
    format: '',
    location: ''
  }

  handleShowForm = (event) => {
    this.setState({ formVisible: !this.state.formVisible })
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const resourceData = this.state;
    this.props.addResource(resourceData)
    this.setState({
      formVisible: false,
      title: '',
      category: '',
      description: '',
      format: '',
      location: ''
    });
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Complete form and click 'Add Resource'</p>
        <form onSubmit={this.handleSubmit} className={classes.AddForm}>
          <p><label htmlFor="resource_name">Title
            </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="title" /></p>
          <p><label htmlFor="resource_name">Category
            </label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="category" /></p>
          <p><label htmlFor="resource_name">Description
            </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="description" /></p>
          <p><label htmlFor="resource_name">Format
            </label>
            <input
              type="text"
              name="format"
              value={this.state.format}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="format" /></p>
          <p><label htmlFor="resource_name">Location
            </label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="location" /></p>
          <button onClick={this.props.addResourceCancel} className={classes.Danger}>CANCEL</button>
          <button className={classes.Success}>ADD Resource</button>
        </form>
      </div>
    )
  }
}

export default AddResource;
