import React, { Component } from 'react'

import { Table } from 'reactstrap'
import classes from './StudentStatsTable.css'
import Aux from '../../../../hoc/Aux/Aux'

class MyTable extends Component {
  state = {
    students: {}
  }

  componentDidMount() {
    this.setState({ students: this.props.students })
  }

  render() {
    let studentsList = this.props.students.map(student => {
      return (
        <Aux key={student.id}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
            <td>{student.level}</td>
          </tr>
        </Aux>
      )
    })

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <Table className={classes.MyTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Email</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {studentsList}
            </tbody>
          </Table>
        </div>
      </Aux>
    )
  }
}

export default MyTable
