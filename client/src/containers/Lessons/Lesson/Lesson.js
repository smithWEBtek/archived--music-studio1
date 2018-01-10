import React from 'react';
import { connect } from 'react-redux';

const LessonsShow = ({ lesson }) =>
  <div className="col-md-8">
    <h2>{lesson.name}</h2>
    <p>{lesson.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const lesson = state.lessons.find(lesson => lesson.id === ownProps.match.params.lessonId)
  // const lesson = state.lessons.find(lesson => lesson.id.toString() === ownProps.match.params.lessonId)

  console.log('state: ', { state })
  console.log('state.lessons: ', state.lessons)
  console.log('ownProps.match.url: ', ownProps.match.url)

  if (lesson) {
    console.log("lesson: ", { lesson })
    return { lesson }
  } else {
    return { lesson: {} }
  }
};

export default connect(mapStateToProps)(LessonsShow);
