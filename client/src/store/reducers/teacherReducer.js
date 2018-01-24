import * as actionTypes from '../actions/actionTypes';
import TeacherService from '../services/TeacherService';

const initialState = {
  teachers: [],
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //-----CREATE TEACHER-----------------------------
    case actionTypes.CREATE_TEACHER:
      const newTeacher = action.data
      return updateObject(state, { teachers: state.teachers.concat(newTeacher) })

    case actionTypes.CREATE_TEACHER_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_TEACHER_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_TEACHER_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })

    //-----DELETE TEACHER-----------------------------
    case actionTypes.DELETE_TEACHER:
      const updatedTeachersArray = state.teachers.filter(teacher => teacher.id !== action.id);
      return updateObject(state, { teachers: updatedTeachersArray, loading: false })

    case actionTypes.DELETE_TEACHER_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.DELETE_TEACHER_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE TEACHER-----------------------------
    case actionTypes.UPDATE_TEACHER:
      const teacherData = action.updatedTeacherData
      return TeacherService.updateTeacher(teacherData.id, teacherData)

    case actionTypes.UPDATE_TEACHER_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.UPDATE_TEACHER_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----FETCH TEACHER-----------------------------
    case actionTypes.FETCH_TEACHER_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_TEACHER_SUCCESS:
      return updateObject(state, { teachers: action.studentData })

    case actionTypes.FETCH_TEACHER_FAIL:
      return updateObject(state, { error: action.error })


    //-----FETCH TEACHERS-----------------------------
    case actionTypes.FETCH_TEACHERS_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_TEACHERS_SUCCESS:
      return updateObject(state, { teachers: action.teachersList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_TEACHERS_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
