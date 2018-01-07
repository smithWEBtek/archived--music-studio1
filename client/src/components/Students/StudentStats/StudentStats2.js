import React, { Component } from 'react'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import classes from './StudentStats.css'
import StudentDetail from '../Student/StudentDetail'
import Aux from '../../../hoc/Aux/Aux'

class StudentStats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      student: {},
      students: [],
      studentDetail: ''
    }
  }

  componentDidMount() {
    console.log('[StudentStats][componentWillMount] this.props', this.props)
    this.setState({ students: this.props.students })
  }

  render() {
    let level1 = this.state.students.filter(student => student.level === 1)
    level1 = level1.map(student => {
      return (
        <div className={classes.StudentStats} key={student.id}>
          <button onClick={handleClick(student.id)}><NavLink
            to={'/students/' + student.id}
          >{student.lastname}</NavLink></button>
        </div>
      )
    })

    let level2 = this.state.students.filter(student => student.level === 2)
    level2 = level2.map(student => {
      return (
        <div className={classes.StudentStats} key={student.id}>
          <button onClick={this.handleClick(student.id)}><NavLink to={'/students/' + student.id} >{student.lastname}</NavLink></button>
        </div>
      )
    })

    const handleClick = (id) => {
      let clickedStudent = this.state.students.filter(student => student.id === id)
      this.setState({ student: clickedStudent })
    }

    let level3 = this.state.students.filter(student => student.level === 3)
    level3 = level3.map(student => {
      return (
        <div className={classes.StudentStats} key={student.id}>
          <button onClick={() => this.handleClick(student.id)}><NavLink to={'/students/' + student.id}>{student.lastname}</NavLink></button>
        </div>
      )
    })

    let studentInfo = <p>hello {this.state.student.firstname}!</p>

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
        <div>
          {studentInfo}
        </div>
        <Switch>
          <Route path='/students/:id' component={StudentDetail} />
        </Switch>
      </Aux>
    )
  }
}

export default withRouter(StudentStats)
