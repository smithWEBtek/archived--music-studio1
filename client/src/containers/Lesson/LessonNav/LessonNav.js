import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import Aux from '../../../hoc/Aux/Aux'

import { Route } from 'react-router-dom'
import Students from '../../Students/Students'
import Teachers from '../../Teachers/Teachers'
import Lessons from '../../../containers/Lessons/Lessons'
import Resources from '../../Resources/Resources'

const navigationItems = () => (
  <Aux>
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Home</NavigationItem>
      <NavigationItem link="/lessons" active>Lessons</NavigationItem>
      <NavigationItem link="/students" active>Students</NavigationItem>
      <NavigationItem link="/teachers" active>Teachers</NavigationItem>
      <NavigationItem link="/resources" active>Resources</NavigationItem>
    </ul>
    <div>
      <Route path="/" exact render={() => <div><h5>Welcome Dorothy, have you been practicing?</h5><p>...and where is Toto?</p></div>} />
      <Route path="/students" exact component={Students} />
      <Route path="/teachers" exact component={Teachers} />
      <Route path="/lessons" exact component={Lessons} />
      <Route path="/resources" exact component={Resources} />
    </div>
  </Aux>

)
export default navigationItems
