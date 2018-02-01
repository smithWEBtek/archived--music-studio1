import * as actionTypes from '../actions/actionTypes';
// import StudentService from '../services/StudentService';

const initialState = {
  students: [],
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {

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
      const studentData = action.payload
      const studentIndex = state.students.findIndex(student => student.id === studentData.id);
      const stateTemp = {
        ...state,
        students: [
          ...state.students.slice(0, studentIndex),
          ...state.students.slice(studentIndex + 1, state.students.length)
        ]
      };
      const updatedState = Object.assign({}, { ...stateTemp }, { students: stateTemp.students.concat(studentData) })
      return updateObject(state, { updatedState })

    case actionTypes.UPDATE_STUDENT_START:
      return updateObject(state, { loading: true })

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
