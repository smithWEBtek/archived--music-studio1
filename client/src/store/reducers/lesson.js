import * as actionTypes from '../actions';

const initialState = {
  lessons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LESSON:

      const newLesson = action.lessonData
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
