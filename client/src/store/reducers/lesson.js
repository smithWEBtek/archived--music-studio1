import * as actionTypes from '../actions';
import moment from 'moment';

const LESSONS = [
  { id: 1, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 1 },
  { id: 2, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 2 },
  { id: 3, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 3 },
  { id: 4, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 4 },
  { id: 5, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 5 },
  { id: 6, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 6 },
  { id: 7, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 7 },
  { id: 8, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 8 },
  { id: 9, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 9 }
]

const initialState = {
  lessons: [
    { id: 1, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 1 },
    { id: 2, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 2 },
    { id: 3, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 1, student_id: 3 },
    { id: 4, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 4 },
    { id: 5, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 5 },
    { id: 6, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 2, student_id: 6 },
    { id: 7, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 7 },
    { id: 8, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 8 },
    { id: 9, date: '2017-10-01', notes: 'initial meet and greet', teacher_id: 3, student_id: 9 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LESSON:
      const newLesson = action.lessonData
      newLesson.id = state.lessons[state.lessons.length - 1].id + 1;
      // newLesson.date = moment().format('MMMM Do YYYY, h:mm:ss a');
      newLesson.date = moment().format('MMMM Do YYYY');
      return {
        ...state,
        lessons: state.lessons.concat(newLesson)
      }
    case actionTypes.REMOVE_LESSON:
      const updatedLessonsArray = state.lessons.filter(lesson => lesson.id !== action.lessonId);
      return {
        ...state,
        lessons: updatedLessonsArray
      };
    default:
      return state;
  }
}

export default reducer;
