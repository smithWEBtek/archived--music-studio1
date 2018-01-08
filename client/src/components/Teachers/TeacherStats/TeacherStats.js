import React from 'react';
// import classes from './TeacherStats.css';
import Aux from '../../../hoc/Aux/Aux';
import StudentStatsTable from '../../Students/StudentStats/StudentStatsTable/StudentStatsTable'

const teacherStats = (props) => {
  let teachers = props.teachers

  console.log('[TeacherStats] props', props)

  let teacherStats = ''

  if (teachers) {
    teacherStats = (
      teachers.map((teacher, index) => {
        return (
          <Aux key={index}>
            <legend>{teacher.firstname} {teacher.lastname}'s students: </legend>
            {teacher.students.length > 0 ? <StudentStatsTable students={teacher.students} />
              : <p>no students assigned</p>}
          </Aux>
        )
      })
    )
  }

  return (
    <div style={{ margin: '30px' }}>
      {teacherStats}
    </div>
  );
}

export default teacherStats;
