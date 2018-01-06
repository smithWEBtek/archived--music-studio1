import * as actionTypes from '../actions/actionTypes';
import StudentService from '../../components/Students/StudentService';
import { updateObject } from '../utility';

const initialState = {
  students: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_STUDENT:
      const newStudent = action.studentData
      return updateObject(state, { students: state.students.concat(newStudent) })

    case actionTypes.ADD_STUDENT_FAIL:
      return action.error

    case actionTypes.UPDATE_STUDENT:
      const studentData = action.studentData
      const id = action.id
      StudentService.updateStudent(id, studentData)
      break;

    case actionTypes.REMOVE_STUDENT:
      const updatedStudentsArray = state.students.filter(student => student.id !== action.id);
      return updateObject(state, { students: updatedStudentsArray })

    case actionTypes.FETCH_STUDENTS_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return updateObject(state, { students: action.studentsList })

    case actionTypes.FETCH_STUDENTS_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;