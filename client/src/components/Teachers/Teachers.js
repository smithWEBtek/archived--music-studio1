import React from 'react';
import { Table } from 'reactstrap';
import Teacher from './Teacher/Teacher';
import TeacherService from './TeacherService';

const showTeacher = (event, teacher) => {
    TeacherService.fetchTeacher(teacher.id)
      .then(
      <teacher teacher={teacher} />
    )
  }

const Teachers = ({ teachers }) => {
  const renderTeachers = teachers.map(teacher => 
    <div key={teacher.id}>
      <Table striped>
        <thead>
          <tr>
            <td><button onClick={(event)=>showTeacher(event, teacher)}>show</button></td>
            <td className='right aligned'>{teacher.id}</td>
            <td className='right aligned'>{teacher.firstname}</td>
            <td className='right aligned'>{teacher.lastname}</td>
            <td className='right aligned'>{teacher.email}</td>
          </tr>
        </thead>
      </Table>
    </div> 
  );
  
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th scope="row">ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      </Table>
      {renderTeachers}
    </div>
  )
}

export default Teachers;
