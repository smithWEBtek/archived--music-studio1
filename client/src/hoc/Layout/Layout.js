import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

import Students from '../../components/Students/Students';
import Teachers from '../../components/Teachers/Teachers';
import Resources from '../../components/Resources/Resources';

import AddLesson from '../../containers/Lessons/AddLesson/AddLesson';
import Lessons from '../../containers/Lessons/Lessons';
import LessonService from '../../containers/Lessons/LessonService';

 
class Layout extends Component {
  constructor() {
    super()

    this.state = {
      lessons: [],
      lesson: {}
    }
  }

  componentDidMount() {
    LessonService
      .fetchLessons()
      .then(lessons => this.setState({lessons}))
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
            <Teachers />
          </div>

          <div className={classes.Sidebar}>
            <Resources />
          </div>

          <div className={classes.Sidebar}>
            <Lessons lessons={this.state.lessons}/>
            <AddLesson addLesson={this.addLesson}/>
          </div>

        </div>
      </Aux>
    );
  }
}

export default Layout;
