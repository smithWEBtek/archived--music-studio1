import React, { Component } from 'react';
import classes from './EditResource.css';
import * as actionCreators from '../../../store/actions/index';
import { connect } from 'react-redux';

class EditResource extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      category: '',
      description: '',
      format: '',
      location: ''
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      format: this.props.format,
      location: this.props.location
    })
  }

  handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('[EditResource][handleSubmit] this.state', this.state)
    let data = this.state;
    this.props.updateResource(data)
  }

  render() {
    return (
      <div>
        <p className={classes.FormInstructions}>Edit form and click 'Update Resource'</p>
        <form onSubmit={this.handleSubmit} className={classes.Form}>
          <p><label htmlFor="student_name">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <p><label>Category</label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <p><label>Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <p><label>Format</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <p><label>Location</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
            /></p>
          <button
            type="button"
            onClick={this.props.close}
            className={classes.Danger}
          >CANCEL</button>
          <button className={classes.Success}
          >SAVE</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateResource: (data) => dispatch(actionCreators.updateResource, (data))
  }
}

export default connect(null, mapDispatchToProps)(EditResource);
