import React, { Component } from 'react';
import styles from './EditResource.css';

class EditResource extends Component {
  state = {
    id: '',
    title: '',
    category: '',
    description: '',
    format: '',
    location: '',
    url: ''
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      format: this.props.format,
      location: this.props.location,
      url: this.props.url
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = this.state;
    if (data.url === "") {
      data.url = 'no_url_given'
    }
    console.log('[EditResource] this.state', this.state)
    this.props.updateResource(data)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p className={styles.FormInstructions}>Edit form and click 'Save'</p>
        <form className={styles.Form}>
          <p><label htmlFor="resource_title">Title </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            /></p>
          <p><label>Category</label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            /></p>
          <p><label>Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            /></p>
          <p><label>Format</label>
            <input
              type="text"
              name="format"
              value={this.state.format}
              onChange={this.handleChange}
            /></p>
          <p><label>Location</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            /></p>
          <p><label>URL</label>
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            /></p>
          <button
            type="button"
            name="cancel"
            onClick={this.props.close}
            className={styles.Danger}
          >CANCEL</button>
          <button
            type='button'
            className={styles.Success}
            onClick={(e) => this.handleSubmit(e)}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

export default EditResource
