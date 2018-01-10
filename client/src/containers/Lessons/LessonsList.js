import React from 'react';
import { Link } from 'react-router-dom';

const LessonsList = ({ lessons }) => {
  const renderLessons = lessons.map((lesson, index) =>
    <div>
      <Link style={{ marginRight: '12px' }} key={index} to={`/lessons/${lesson.id}`}>Lesson {lesson.id}</Link>

      <div>
        <br />
      </div>
    </div>
  );

  return (
    <div key={new Date().getTime()}>
      {renderLessons}
    </div>
  );
};

export default LessonsList;