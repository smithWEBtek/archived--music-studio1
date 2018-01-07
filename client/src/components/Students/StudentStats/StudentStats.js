import React from 'react'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import classes from './StudentStats.css'
import StudentDetail from '../Student/StudentDetail'
import Aux from '../../../hoc/Aux/Aux'


const studentStats = (props) => {
  let level1 = props.students.filter(student => student.level === 1)
  level1 = level1.map(student => {
    return (
      <div className={classes.StudentStats} key={student.id}>
        <NavLink
          to={'/students/' + student.id}
        >{student.lastname}</NavLink>
      </div>
    )
  })

  let level2 = props.students.filter(student => student.level === 2)
  level2 = level2.map(student => {
    return (
      <div className={classes.StudentStats} key={student.id}>
        <NavLink to={'/students/' + student.id} >{student.lastname}</NavLink>
      </div>
    )
  })

  let level3 = props.students.filter(student => student.level === 3)
  level3 = level3.map(student => {
    return (
      <div className={classes.StudentStats} key={student.id}>
        <NavLink to={'/students/' + student.id}>{student.lastname}</NavLink>
      </div>
    )
  })

  return (
    <Aux>
      <div className={classes.StudentStats}>
        <h4>Students at level 1: </h4>
        {level1}
        <h4>Students at level 2: </h4>
        {level2}
        <h4>Students at level 3: </h4>
        {level3}
      </div>
      <Switch>
        <Route path='/students/:id' component={StudentDetail} />
        {/* <Route path='/students/:id' render={() => <h3>Student details here ...</h3>} /> */}
        {/* <Route path='/students/:id' component={() => <StudentDetail {...props} />} /> */}
        {/* <Route path='/students/:id' component={() => <StudentDetail />} /> */}
      </Switch>
    </Aux>
  )
}



export default withRouter(studentStats) 