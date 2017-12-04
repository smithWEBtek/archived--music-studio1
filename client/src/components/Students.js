import React from 'react';
import { Table } from 'reactstrap';
 
const Students = ({ students }) => {
  const renderStudents = students.map((student) => 
    <div key={student.id}>
      <Table striped>
        <thead>
          <tr>
            <td>{student.id}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.email}</td>
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
