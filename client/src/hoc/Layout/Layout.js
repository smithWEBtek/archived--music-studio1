import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

import Students from '../../components/Students/Students';
import Teachers from '../../components/Teachers/Teachers';
import Resources from '../../components/Resources/Resources';
import Lessons from '../../containers/Lessons/Lessons';

class Layout extends Component {
  state = {
    studentsVisible: false,
    teachersVisible: false,
    resourcesVisible: false,
    lessonsVisible: false
  }

  handleShow = (event) => { 
    this.setState({
      [event.target.value]: !this.state[event.target.value]
    })
  }

  render() {
    return (
      <Aux>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <div className={[classes.App, classes.container].join(' ')}>
          <button onClick={(event)=>this.handleShow(event)} value='studentsVisible'>ShowStudents</button>
          <button onClick={(event)=>this.handleShow(event)} value='teachersVisible'>ShowTeachers</button>
          <button onClick={(event)=>this.handleShow(event)} value='resourcesVisible'>ShowResources</button>
          <button onClick={(event)=>this.handleShow(event)} value='lessonsVisible'>ShowLessons</button>

          {this.state.studentsVisible ? <Aux><Students /></Aux> : null }
          {this.state.teachersVisible ? <Teachers /> : null }
          {this.state.resourcesVisible ? <Resources /> : null }
          {this.state.lessonsVisible ? <Lessons /> : null }
        </div>
      </Aux>
    );
  }
}

export default Layout;
