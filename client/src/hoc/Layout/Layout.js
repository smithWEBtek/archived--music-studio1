import React, {Component} from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

import Students from '../../components/Students/Students';
import Teachers from '../../components/Teachers/Teachers';
import Resources from '../../components/Resources/Resources';
import Lessons from '../../containers/Lessons/Lessons';

class Layout extends Component {
    
  render() {
    return (
      <Aux>
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <div className={[classes.App, classes.container].join(' ')}>
          <Students />
          <Teachers />
          <Resources />
          <Lessons />
        </div>
      </Aux>
    );
  }
}

export default Layout;
