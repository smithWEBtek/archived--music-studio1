import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.css';

class NavStudents extends Component {
  state = {
    students: [],
    level1: [],
    level2: [],
    level3: []
    // teachers: {
    //   t1students: [],
    //   t2students: [],
    //   t3students: [],
    //   t4students: []
    // }
  }

  componentDidMount(){
    console.log('[NavStudents]this.props.students', this.props.students)
    let students = this.props.students;
    let level1 = students.filter(student => student.level === 1);
    let level2 = students.filter(student => student.level === 2);
    let level3 = students.filter(student => student.level === 3);

    // let teacher1students = students.filter(student => student.teacher_id === 1)
    // let teacher2students = students.filter(student => student.teacher_id === 2)
    // let teacher3students = students.filter(student => student.teacher_id === 3)
    // let teacher4students = students.filter(student => student.teacher_id === 4)
    this.setState({
      students: students,
      level1: level1,
      level2: level2,
      level3: level3
      // teachers: {
      //   t1students: teacher1students,
      //   t2students: teacher2students,
      //   t3students: teacher3students,
      //   t4students: teacher4students
      //   }
      });
  }

  handleSelect = (event) => {
    console.log(this.state)
    
  }

  render() {


    return (
 
      <div>
        <Nav onClick={this.handleSelect}>
          <NavItem level="1" to="/">Level 1 Students</NavItem>
          <NavItem level="1" to="/">Level 2 Students</NavItem>
          <NavItem level="1" to="/">Level 3 Students</NavItem>
        </Nav>
      </div>
    )
  }
}

export default NavStudents; 