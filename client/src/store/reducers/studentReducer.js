import * as actionTypes from '../actions/actionTypes';
import StudentService from '../../containers/Students/StudentService';

const initialState = {
  students: [],
  showStudentsList: false,
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_STUDENTS_LIST:
      return updateObject(state, { showStudentsList: true })

    case actionTypes.HIDE_STUDENTS_LIST:
      return updateObject(state, { showStudentsList: false })

    //-----CREATE STUDENT-----------------------------
    case actionTypes.CREATE_STUDENT:
      const newStudent = action.data
      return updateObject(state, { students: state.students.concat(newStudent) })

    case actionTypes.CREATE_STUDENT_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_STUDENT_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_STUDENT_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })


    //-----DELETE STUDENT-----------------------------
    case actionTypes.DELETE_STUDENT:
      const updatedStudentsArray = state.students.filter(student => student.id !== action.id);
      return updateObject(state, { students: updatedStudentsArray, loading: false })

    case actionTypes.DELETE_STUDENT_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.DELETE_STUDENT_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE STUDENT-----------------------------
    case actionTypes.UPDATE_STUDENT:
      const studentData = action.updatedStudentData
      return StudentService.updateStudent(studentData.id, studentData)

    case actionTypes.UPDATE_STUDENT_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.UPDATE_STUDENT_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----FETCH STUDENT-----------------------------
    case actionTypes.FETCH_STUDENT_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_STUDENT_SUCCESS:
      return updateObject(state, { students: action.studentData })

    case actionTypes.FETCH_STUDENT_FAIL:
      return updateObject(state, { error: action.error })


    //-----FETCH STUDENTS-----------------------------
    case actionTypes.FETCH_STUDENTS_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return updateObject(state, { students: action.studentsList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_STUDENTS_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
