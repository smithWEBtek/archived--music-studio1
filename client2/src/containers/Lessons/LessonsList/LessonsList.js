import React from 'react';
import { Link } from 'react-router-dom';

const LessonsList = ({ lessons }) => {
  const renderLessons = lessons.map((lesson, index) =>
    <div key={lesson.id}>
      <Link style={{ marginRight: '12px' }} to={`/lessons/${lesson.id}`}>Lesson {lesson.id}</Link>
    </div>
  );

  return (
    <div key={new Date().getTime()}>
      {renderLessons}
    </div>
  );
};

export default LessonsList;