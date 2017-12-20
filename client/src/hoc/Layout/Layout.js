import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

import Students from '../../components/Students/Students';

import AddTeacher from '../../components/Teachers/AddTeacher/AddTeacher';
import Teachers from '../../components/Teachers/Teachers';
import TeacherService from '../../components/Teachers/TeacherService';

import AddResource from '../../components/Resources/AddResource/AddResource';
import Resources from '../../components/Resources/Resources';
import ResourceService from '../../components/Resources/ResourceService';

import AddLesson from '../../containers/Lessons/AddLesson/AddLesson';
import Lessons from '../../containers/Lessons/Lessons';
import LessonService from '../../containers/Lessons/LessonService';

 
class Layout extends Component {
  constructor() {
    super()

    this.state = {
      teachers: [],
      teacher: {},
      resources: [],
      resource: {},
      lessons: [],
      lesson: {}
    }
  }

  componentDidMount() {
    TeacherService
      .fetchTeachers()
      .then(teachers => this.setState({teachers}))

    ResourceService
      .fetchResources()
      .then(resources => this.setState({resources}))

    LessonService
      .fetchLessons()
      .then(lessons => this.setState({lessons}))
  }

  addTeacher = teacher => {
    TeacherService
      .createTeacher(teacher)
      .then(teacher => this.setState({
        teachers: this
          .state
          .teachers
          .concat(teacher)
      }))
  }

  addResource = resource => {
    ResourceService
      .createResource(resource)
      .then(resource => this.setState({
        resources: this
          .state
          .resources
          .concat(resource)
      }))
  }

  addLesson = lesson => {
    LessonService.createLesson(lesson)
    .then(lesson => this.setState({
      lessons: this.state.lessons.concat(lesson)
    }))
  }

  render() {
    return (
      <Aux>
  
        <main className={classes.Content}>
          {this.props.children}
        </main>

        <div className={[classes.App, classes.container].join(' ')}>

          <div className={classes.Sidebar}>
            <Students />
          </div>

          <div className={classes.Sidebar}>
            <Lessons lessons={this.state.lessons}/>
            <AddLesson addLesson={this.addLesson}/>
          </div>

          <div className={classes.Sidebar}>
            <Teachers teachers={this.state.teachers}/>
            <AddTeacher addTeacher={this.addTeacher}/>
          </div>

          <div className={classes.Sidebar}>
            <Resources resources={this.state.resources}/>
            <AddResource addResource={this.addResource}/>
          </div>

        </div>
      </Aux>
    );
  }
}

export default Layout;
