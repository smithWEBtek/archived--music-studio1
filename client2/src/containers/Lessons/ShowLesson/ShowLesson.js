import React from 'react';
import { connect } from 'react-redux';
import ResourcesList from '../../Resources/ResourcesList/ResourcesList'
import Aux from '../../../hoc/Aux/Aux'
import styles from './ShowLesson.css'

const ShowLesson = (props) => {
  console.log('[ShowLesson] props.lessons', props)
  const lesson = props.lessons.find(lesson => lesson.id === +props.match.params.id)

  let lessonDisplayResources = <div><p>No resources assigned</p></div>
  if (lesson && lesson.resources) {
    lessonDisplayResources = (
      <div>
        <hr />
        <p>RESOURCES assigned to <strong>{lesson.firstname}</strong></p>
        <div>{lesson.resources ? <ResourcesList resources={lesson.resources} /> : 'no resources assigned'} </div>
      </div >
    )
  }

  return (
    <Aux>
      <p>is this thing on? </p>
      <div className={styles.Lesson} style={{ backgroundColor: 'Primary' }}>
        <p>Date: {props.date}</p>
        {/* <p>Student: {props.student}</p>
        <p>Teacher: {props.teacher}</p> */}
        <p>Notes: {props.notes}</p>
        {/* <h5>Resources for this lesson: </h5> */}
        <Aux className={styles.Lesson}>
          {lessonDisplayResources}
        </Aux>
      </div>
    </Aux >
  )
}

const mapStateToProps = state => {
  return {
    students: state.stu.students,
    lessons: state.les.lessons,
    resources: state.res.resources,
    teacers: state.tch.teachers
  }
}

export default connect(mapStateToProps, null)(ShowLesson);
