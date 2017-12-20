import React,  { Component } from 'react';
import classes from './AddResource.css';

class AddResource extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formVisible: false,
      title: '',
      category: '',
      description: '',
      format: '',
      location: ''
    }
  }

  handleShowForm = (event) => {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const resource = this.state;
    this.props.addResource(resource)
    this.setState({
      title : '',
      category : '',
      description : '',
      format : '',
      location : '',
      formVisible: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={(event) => this.handleShowForm(event)}>
          Add Resource</button>
        {this.state.formVisible
          ? <form onSubmit={this.handleSubmit} className={classes.AddForm}>
              <p>
                <label htmlFor="resource_name">Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="title"/></p>
              <p>
                <label htmlFor="resource_name">Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={this.state.category}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="category"/></p>
              <p>
                <label htmlFor="resource_name">Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="description"/></p>
              <p>
                <label htmlFor="resource_name">Format
                </label>
                <input
                  type="text"
                  name="format"
                  value={this.state.format}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="format"/></p>
              <p>
                <label htmlFor="resource_name">Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="location"/></p>
              <button>Add Resource</button>
            </form>
          : null }
      </div>
    )
  }
}

export default AddResource;
