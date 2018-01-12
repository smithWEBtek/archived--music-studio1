import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux'

const TeachersList = ({ match, teachers }) => {

  console.log('[TeachersList] teachers', teachers)

  const renderTeachers = teachers.map((teacher, index) =>
    <Link
      to={`/teachers/${teacher.id}`}
      style={{ marginRight: '12px' }}
      key={teacher.id}> {teacher.lastname}</Link>
  );

  return (
    <Aux>
      {renderTeachers}
    </Aux>
  );
};

export default TeachersList;