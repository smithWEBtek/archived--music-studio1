import * as actionTypes from '../actions/actionTypes';
import StudentService from '../../components/Students/StudentService';

const initialState = {
  students: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CREATE_STUDENT:
      const newStudent = action.data
      StudentService.createStudent(newStudent)
      return {
        ...state,
        students: state.students.concat(newStudent)
      }
    case actionTypes.CREATE_STUDENT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actionTypes.CREATE_STUDENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.DELETE_STUDENT:
      const updatedStudentsArray = state.students.filter(student => student.id !== action.id);
      StudentService.deleteStudent(action.id)
      return {
        ...state,
        students: updatedStudentsArray
      }
    case actionTypes.DELETE_STUDENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }









    case actionTypes.UPDATE_STUDENT:
      const studentData = action.updatedStudentData
      return StudentService.updateStudent(studentData.id, studentData)



    case actionTypes.FETCH_STUDENT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        students: action.studentData
      }
    case actionTypes.FETCH_STUDENT_FAIL:
      return {
        ...state,
        error: action.error
      }
    case actionTypes.FETCH_STUDENTS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.studentsList.sort((a, b) => (a.id) - (b.id))
      }
    case actionTypes.FETCH_STUDENTS_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}

export default reducer;