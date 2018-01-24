import * as actionTypes from '../actions/actionTypes';
import LessonService from '../services/LessonService';

const initialState = {
  lessons: [],
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //-----CREATE LESSON-----------------------------
    case actionTypes.CREATE_LESSON:
      const newLesson = action.data
      return updateObject(state, { lessons: state.lessons.concat(newLesson) })

    case actionTypes.CREATE_LESSON_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_LESSON_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_LESSON_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })


    //-----DELETE LESSON-----------------------------
    case actionTypes.DELETE_LESSON:
      const updatedLessonsArray = state.lessons.filter(lesson => lesson.id !== action.id);
      return updateObject(state, { lessons: updatedLessonsArray, loading: false })

    case actionTypes.DELETE_LESSON_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.DELETE_LESSON_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE LESSON-----------------------------
    case actionTypes.UPDATE_LESSON:
      const lessonData = action.updatedLessonData
      return LessonService.updateLesson(lessonData.id, lessonData)

    case actionTypes.UPDATE_LESSON_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.UPDATE_LESSON_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----FETCH LESSON-----------------------------
    case actionTypes.FETCH_LESSON_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_LESSON_SUCCESS:
      return updateObject(state, { lessons: action.lessonData })

    case actionTypes.FETCH_LESSON_FAIL:
      return updateObject(state, { error: action.error })


    //-----FETCH LESSONS-----------------------------
    case actionTypes.FETCH_LESSONS_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_LESSONS_SUCCESS:
      return updateObject(state, { lessons: action.lessonsList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_LESSONS_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
