import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import classes from './StudentStats.css'
import Student from '../Student/Student'
import Aux from '../../../hoc/Aux/Aux'


const studentStats = (props) => {
  let level1 = props.students.filter(student => student.level === 1)
  level1 = level1.map(student => {
    return (
      <div className={classes.StudentStats} key={student.id}>
        <NavLink to={'/students/' + student.id} >{student.lastname}</NavLink>
      </div>
    )
  })

  // let level2 = props.students.filter(student => student.level === 2)
  // let level3 = props.students.filter(student => student.level === 3)
  // let teacher1students = props.students.filter(student => student.teacher_id === 1)
  // let teacher2students = props.students.filter(student => student.teacher_id === 2)
  // let teacher3students = props.students.filter(student => student.teacher_id === 3)
  // let teacher4students = props.students.filter(student => student.teacher_id === 4)


  return (
    <Aux>
      <div>
        <h4>Students at level 1: </h4>
        {level1}
      </div>
      <Switch>
        <Route path='/students/:id' component={Student} />
      </Switch>
    </Aux>
  )
}



export default studentStats 