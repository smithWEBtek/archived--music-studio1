import React from 'react';
import { Table } from 'reactstrap';
import classes from './TeacherStats.css';
import Aux from '../../../hoc/Aux/Aux';

const teacherStats = (props) => {
  let teacherDisplay = <p style={{ fontStyle: 'italic' }}>[TeacherStats.js] No students assigned to this teacher.</p>

  // if (props.students.length > 0) {
  //   let teachersBody = props.teachers.map((teacher, index) => {
  //     return (
  //       <Aux key={index}>
  //         <tr>
  //           <td>{teacher.id}</td>
  //           <td>{teacher.firstname}</td>
  //           <td>{teacher.lastname}</td>
  //           <td>{teacher.email}</td>
  //         </tr>
  //       </Aux>
  //     )
  //   })
  //   let teachersTable =
  //     <div style={{ margin: '30px' }}>
  //       <Table className={classes.TeacherStudents}>
  //         <thead>
  //           <tr>
  //             <th>ID</th>
  //             <th>First</th>
  //             <th>Last</th>
  //             <th>Email</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {teachersBody}
  //         </tbody>
  //       </Table>
  //     </div>
  //   teacherDisplay = teachersTable;
  // }

  return (
    <div style={{ margin: '30px' }}>
      {teacherDisplay}
    </div>
  );
}

export default teacherStats;
