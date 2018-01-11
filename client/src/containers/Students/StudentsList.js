import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux'

const StudentsList = ({ match, students }) => {

  console.log('[StudentsList] students', students)

  const renderStudents = students.map((student, index) =>
    <Link
      to={`/students/${student.id}`}
      style={{ marginRight: '12px' }}
      key={student.id}> {student.lastname}</Link >
  );

  return (
    <Aux>
      {renderStudents}
    </Aux>
  );
};

export default StudentsList;