import React from 'react'
import classes from './LessonNav.css'
import Lesson from '../Lesson/Lesson'
import Lessons from '../Lessons'

import { Route, NavLink } from 'react-router-dom'

const LessonNav = (props) => (
  <div className={classes.LessonNav}>
    <NavLink link="/lessons/:id" active>Lesson</NavLink>
    <Route path="/lessons/:id" exact component={Lesson} />

    <NavLink link="/lessons/" active>Lessons</NavLink>
    <Route path="/lessons/" exact component={Lessons} />
  </div>
)

export default LessonNav
