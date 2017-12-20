import React, {Component} from 'react';
import classes from './AddLesson.css';

class AddLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formVisible: false,
      teacher: null,
      student: null,
      resources: [],
      notes: ''
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
    const lesson = this.state;
    this
      .props
      .addLesson(lesson)
    this.setState({firstname: '', lastname: '', email: '', formVisible: false})
  }

  render() {
    return (
      <div className={classes.AddLesson}>
        <button onClick={(event) => this.handleShowForm(event)}>
          Toggle AddLesson Form</button>
        {this.state.formVisible
          ? <form onSubmit={this.handleSubmit} className={classes.AddForm}>

              <p>
                <label>Teacher
                </label>
                <input
                  type="text"
                  name="teacher"
                  value={this.state.teacher}
                  onChange={(event) => this.handleOnChange(event)}
                  placeholder="teacher"/></p>
 
              <button>Add lesson</button>
            </form>
          : null
}
      </div>
    )
  }
}

export default AddLesson;
