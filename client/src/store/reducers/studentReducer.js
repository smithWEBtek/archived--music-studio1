import * as actionTypes from '../actions/actionTypes';
import StudentService from '../../components/Students/StudentService';

const initialState = {
  students: [],
  loading: false,
  error: false
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //create---------------------------------------------------------------------
    case actionTypes.CREATE_STUDENT:
      const newStudent = action.data
      StudentService.createStudent(newStudent)
      return updateObject(state, { students: state.students.concat(newStudent) })

    case actionTypes.CREATE_STUDENT_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_STUDENT_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_STUDENT_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //delete  ---------------------------------------------------------------------
    case actionTypes.DELETE_STUDENT:
      const updatedStudentsArray = state.students.filter(student => student.id !== action.id);
      StudentService.deleteStudent(action.id)
      return updateObject(state, { students: updatedStudentsArray })

    case actionTypes.DELETE_STUDENT_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //update  ---------------------------------------------------------------------
    case actionTypes.UPDATE_STUDENT:
      const studentData = action.updatedStudentData
      return StudentService.updateStudent(studentData.id, studentData)


    //fetch student----------------------------------------------------------------
    case actionTypes.FETCH_STUDENT_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_STUDENT_SUCCESS:
      return updateObject(state, { students: action.studentData })

    case actionTypes.FETCH_STUDENT_FAIL:
      return updateObject(state, { error: action.error })


    //fetch students----------------------------------------------------------------
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
