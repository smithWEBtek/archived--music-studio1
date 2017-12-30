import React, { Component } from 'react';
import { Table } from 'reactstrap';
import classes from './TeacherStudents.css';
import Aux from '../../../hoc/Aux/Aux';

const teacherStudents = (props) => {
  const studentsList = props.teacherStudents.map((student, index) => {
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
  });

  return (
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
          {studentsList}
        </tbody>
      </Table>
    </div>
  );
}

export default teacherStudents;
