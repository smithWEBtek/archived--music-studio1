import * as actionTypes from './actionTypes';

export const addStudent = (student) => {
  return {
    type: actionTypes.ADD_STUDENT,
    student: student
  }
}

export const removeStudent = (id) => {
  return {
    type: actionTypes.REMOVE_STUDENT,
    id: id
  }
}

// export const addStudentStart = () => {
//   return {
//     type: actionTypes.ADD_STUDENT_START,
//     loading: true
//   }
// }

// export const addStudentSuccess = (student) => {
//   return {
//     type: actionTypes.ADD_STUDENT_SUCCESS,
//     student: student
//   }
// }

// export const addStudentFail = (error) => {
//   return {
//     type: actionTypes.ADD_STUDENT_FAIL,
//     error: error
//   }
// }
