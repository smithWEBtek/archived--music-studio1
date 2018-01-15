import React, { Component } from 'react';
import * as actionCreators from '../../../store/actions/index'
import { connect } from 'react-redux'

import { Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './CreateLesson.css'
import Aux from '../../../hoc/Aux/Aux'

class CreateLesson extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formVisible: false,
      createLesson: false,
      editLesson: false,

      date: '',
      teacher: '',
      student: '',
      notes: '',

      resources: [],
      teachers: [],
      students: [],
      resources: [],
      lessons: []
    }
  }

  componentWilMount() {
    this.setState({
      teachers: this.props.teachers,
      students: this.props.students,
      resources: this.props.resources,
      lessons: this.props.lessons
    })
  }

  //********CREATE_LESSON form handling **************************
  handleDateSelect = (event) => {
    this.setState({
      date: event.target.data
    })
  }

  handleTeacherSelect = (event) => {
    this.setState({
      teacher: this.props.teachers.find(teacher => teacher.lastname === event.target.value)
    })
  }

  handleStudentSelect = (event) => {
    this.setState({
      student: this.props.students.find(student => student.lastname === event.target.value)
    })
  }

  handleResourceSelect = (event) => {
    this.setState({
      resource: this.props.resources.find(resource => resource.title === event.target.value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const lessonData = {
      date: this.state.date,
      teacher: this.state.teacher,
      student: this.state.student,
      resources: this.state.resources,
      notes: this.state.notes
    }
    this.props.createLesson(lessonData)
    this.setState({
      formVisible: false,
      createLesson: false,
      editLesson: false,

      date: '',
      teacher: '',
      student: '',
      notes: '',

      teachers: [],
      students: [],
      resources: []
    })
    this.props.createLessonCancel()
  }

  render() {
    const teacherOptions = this.props.teachers.map(teacher => {
      return (
        <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
      )
    })

    const teacherSelect = (
      <FormGroup>
        <Label for="teacherSelect">Teacher</Label>
        <Input type="select" name="select" id="teacherSelect">
          {teacherOptions}
        </Input>
      </FormGroup>
    )

    const studentOptions = this.props.students.map(student => {
      return (
        <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
      )
    })

    const studentSelect = (
      <FormGroup>
        <Label for="studentSelect">Student</Label>
        <Input type="select" name="select" id="studentSelect">
          {studentOptions}
        </Input>
      </FormGroup>
    )

    const resourceOptions = this.props.resources.map(resource => {
      return (
        <option value={resource.lastname} id={resource.id} key={resource.id}>{resource.title}</option>
      )
    })

    const resourceSelect = (
      <FormGroup>
        <Label for="resourceSelect">Resource</Label>
        <Input type="select" name="select" id="resourceSelect" multiple>
          {resourceOptions}
        </Input>
      </FormGroup>
    )

    return (
      <Container>
        <Form className={styles.FormBorder}>
          <p>Date</p>
          {teacherSelect}
          {studentSelect}
          {resourceSelect}
          <FormGroup>
            <Label for="notesText">Add Notes</Label>
            <Input type="textarea" name="notes" id="notesText" />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form >
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    teachers: state.tch.teachers,
    resources: state.res.resources,
    lessons: state.les.lessons
  }
}

export default connect(mapStateToProps)(CreateLesson)