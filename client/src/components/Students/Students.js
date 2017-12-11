import React from 'react';
import { Table } from 'reactstrap';
import Student from './Student/Student';
import StudentService from './StudentService';

const showStudent = (event, student) => {
  event.preventDefault();
    StudentService.fetchStudent(student.id)
      .then(
      <Student student={student} />
    )
  }

const Students = ({ students }) => {
  const renderStudents = students.map((student) => 
    <div key={student.id}>
      <Table striped>
        <thead>
          <tr>
            <td onClick={(event)=>showStudent(event, student)}>Show</td>
            <td className='right aligned'>{student.id}</td>
            <td className='right aligned'>{student.firstname}</td>
            <td className='right aligned'>{student.lastname}</td>
            <td className='right aligned'>{student.email}</td>
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
      {renderStudents}
    </div>
  )
}

export default Students;
