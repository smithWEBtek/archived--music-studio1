import React from 'react';
import { Route, Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux'

const StudentsList = ({ match, students }) => {
  console.log('[StudentsList] students', students)

  const renderStudents = students.map((student, index) => {
    return (
      <Link
        to={`/students/${student.id}`}
        style={{ marginRight: '12px' }}
        key={student.id}
      >{student.lastname}</Link >
    )
  }
  );

  return (
    <Aux>
      {renderStudents}
    </Aux>
  );
};

export default StudentsList