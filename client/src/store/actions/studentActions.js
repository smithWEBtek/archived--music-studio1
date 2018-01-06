import * as actionTypes from './actionTypes';
import StudentService from '../../components/Students/StudentService';

// CREATE //////////////////////////////////////// 
export const addStudent = (studentData) => {
  return dispatch => {
    StudentService.createStudent(studentData)
      .then(response => {
        dispatch(fetchStudents())
      })
      .catch(error => {
        dispatch(addStudentFail(error))
      })
  }
}

export const addStudentFail = (error) => {
  return { type: actionTypes.ADD_STUDENT_FAIL, error: error }
}

// DESTROY //////////////////////////////////////// 
export const removeStudent = (id) => {
  return { type: actionTypes.REMOVE_STUDENT, id: id }
}

// UPDATE //////////////////////////////////////// 
export const updateStudent = (id, data) => {
  return {
    type: actionTypes.UPDATE_STUDENT,
    id: id,
    studentData: data
  }
}

// SHOW //////////////////////////////////////// 
// export const updateStudent = (id) => {
//   return { type: actionTypes.REMOVE_STUDENT, id: id }
// }


// INDEX ///////////////////////////////////////
export const fetchStudents = () => {
  return dispatch => {
    dispatch(fetchStudentsStart());
    StudentService.fetchStudents()
      .then(response => {
        dispatch(fetchStudentsSuccess(response))
      })
      .catch(error => {
        dispatch(fetchStudentsFail(error))
      })
  }
}

export const fetchStudentsStart = () => {
  return { type: actionTypes.FETCH_STUDENTS_START }
}

export const fetchStudentsSuccess = (students) => {
  return { type: actionTypes.FETCH_STUDENTS_SUCCESS, studentsList: students }
}

export const fetchStudentsFail = (error) => {
  return { type: actionTypes.FETCH_STUDENTS_FAIL, error: error }
}
