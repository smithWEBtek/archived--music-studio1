import React from 'react';
import { Route, Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux'
import StudentsShow from '../StudentsShow'

const StudentsList = ({ match, students }) => {
  console.log('[StudentsList] students', students)

  const renderStudents = students.map((student, index) => {
    return (
      <div key={student.id}>
        <Link
          to={`/students/${student.id}`}
          style={{ marginRight: '12px' }}
          key={student.id}
        >ID: {student.id} {student.lastname}</Link >
        <Route path={`/students/${student.id}`} exact component={StudentsShow} />
      </div>
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