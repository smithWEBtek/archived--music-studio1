import React, { Component } from 'react'

import { Table } from 'reactstrap'
import classes from './StudentStatsTable.css'
import Aux from '../../../../hoc/Aux/Aux'

class TeacherStatsTable extends Component {
  state = {
    teachers: []
  }

  componentDidMount() {
    this.setState({ teachers: this.props.teachers })
  }



  render() {
    let teacherTable = this.props.teachers.map(teacher => {
      return (
        <Aux key={teacher.id}>
          <tr>
            <td>{teacher.firstname} {teacher.lastname}</td>
          </tr>
        </Aux>
      )
    })

    // let teacherStudentRows = teacher.students.map(student => {
    //   return (
    //     <Aux key={student.id}>
    //       <tr>
    //         <td>{student.firstname} {student.lastname}</td>
    //       </tr>
    //     </Aux>
    //   )
    // })

    return (
      <Aux>
        <div style={{ margin: '30px' }}>
          <Table className={classes.TeacherStatsTable}>
            <thead>
              <tr>

                <th>Teacher</th>
                <th>Name</th>

              </tr>
            </thead>
            <tbody>
              {teacherHeading}
            </tbody>
          </Table>
        </div>
      </Aux>
    )
  }
}

export default TeacherStatsTable
