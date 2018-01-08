import React from 'react'
import classes from './StudentStats.css'
import StudentStatsTable from '../StudentStats/StudentStatsTable/StudentStatsTable'

import Aux from '../../../hoc/Aux/Aux'

const studentStats = (props) => {

  let students1 = props.students.filter(student => student.level === 1)
  let studentsTable1 = (
    <div className={classes.StudentStats}>
      <h4>Level One Students</h4>
      <StudentStatsTable students={students1} />
    </div >
  )

  let students2 = props.students.filter(student => student.level === 2)
  let studentsTable2 = (
    <div className={classes.StudentStats}>
      <h4>Level Two Students</h4>
      <StudentStatsTable students={students2} />
    </div >
  )

  let students3 = props.students.filter(student => student.level === 3)
  let studentsTable3 = (
    <div className={classes.StudentStats}>
      <h4>Level Three Students</h4>
      <StudentStatsTable students={students3} />
    </div >
  )

  return (
    <Aux>
      <div className='container'>
        {studentsTable1}
        {studentsTable2}
        {studentsTable3}
      </div>
    </Aux>
  )
}

export default studentStats
