import React, { Component } from 'react';
import classes from './CreateResource.css';

class CreateResource extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      category: '',
      description: '',
      format: '',
      location: ''
    }
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
      title: '',
      category: '',
      description: '',
      format: '',
      location: ''
    });
    this.props.addResourceCancel()
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
              placeholder="title"
              required /></p>
          <p><label htmlFor="resource_name">Category
            </label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="category"
              required /></p>
          <p><label htmlFor="resource_name">Description
            </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="description"
              required /></p>
          <p><label htmlFor="resource_name">Format
            </label>
            <input
              type="text"
              name="format"
              value={this.state.format}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="format"
              required /></p>
          <p><label htmlFor="resource_name">Location
            </label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={(event) => this.handleOnChange(event)}
              placeholder="location"
              required /></p>
          <button
            type="button"
            onClick={this.props.addResourceCancel}
            className={classes.Danger}>CANCEL</button>
          <button className={classes.Success}>ADD Resource</button>
        </form>
      </div>
    )
  }
}

export default CreateResource;
