import React from 'react';
import { Table } from 'reactstrap';
import classes from './TeacherStats.css';
import Aux from '../../../hoc/Aux/Aux';

const teacherStats = (props) => {
  let studentsDisplay = <p style={{ fontStyle: 'italic' }}>No students assigned to this teacher.</p>

  if (props.teacherStats.length > 0) {
    let studentsBody = props.teacherStats.map((student, index) => {
      return (
        <Aux key={index}>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
          </tr>
        </Aux>
      )
    })
    let studentsTable =
      <div style={{ margin: '30px' }}>
        <Table className={classes.TeacherStudents}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentsBody}
          </tbody>
        </Table>
      </div>
    studentsDisplay = studentsTable;
  }

  return (
    <div style={{ margin: '30px' }}>
      {studentsDisplay}
    </div>
  );
}

export default teacherStats;
