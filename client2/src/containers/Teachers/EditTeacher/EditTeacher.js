import React, { Component } from 'react';
import styles from './EditTeacher.css';

class EditTeacher extends Component {
  state = {
    id: '',
    firstname: '',
    lastname: '',
    email: ''
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      email: this.props.email
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault()
  }

  handleSubmit = (e) => {
    let data = this.state;
    this.props.updateTeacher(data)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p className={styles.FormInstructions}>Edit form and click 'Update Teacher'</p>
        <form className={styles.Form}>
          <p><label htmlFor="teacher_name">First name </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            /></p>
          <p><label>Last name </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            /></p>
          <p><label>Email </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
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

export default EditTeacher
