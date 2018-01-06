// // import * as actionTypes from './actionTypes';
// // import StudentService from '../../components/Students/StudentService';

// export const addStudent = (studentData) => {
//   return dispatch => {
//     // dispatch(addStudentStart());
//     StudentService.createStudent(studentData)
//       .then(response => {
//         // dispatch(addStudentSuccess(response))
//         dispatch(fetchStudents())
//       })
//       .catch(error => {
//         dispatch(addStudentFail(error))
//       })
//   }
// }

// // export const addStudentStart = () => {
// //   return {
// //     type: actionTypes.ADD_STUDENT_START
// //   }
// // }

// // export const addStudentSuccess = (students) => {
// //   return {
// //     type: actionTypes.ADD_STUDENT_SUCCESS,
// //     studentsList: students
// //   }
// // }

// export const addStudentFail = (error) => {
//   return {
//     type: actionTypes.ADD_STUDENT_FAIL,
//     error: error
//   }
// }

// export const removeStudent = (id) => {
//   return {
//     type: actionTypes.REMOVE_STUDENT,
//     id: id
//   }
// }

// export const fetchStudentsSuccess = (students) => {
//   return {
//     type: actionTypes.FETCH_STUDENTS_SUCCESS,
//     studentsList: students
//   }
// }

// export const fetchStudentsFail = (error) => {
//   return {
//     type: actionTypes.FETCH_STUDENTS_FAIL,
//     error: error
//   }
// }

// export const fetchStudentsStart = () => {
//   return {
//     type: actionTypes.FETCH_STUDENTS_START
//   }
// }

// export const fetchStudents = () => {
//   return dispatch => {
//     dispatch(fetchStudentsStart());
//     StudentService.fetchStudents()
//       .then(response => {
//         dispatch(fetchStudentsSuccess(response))
//       })
//       .catch(error => {
//         dispatch(fetchStudentsFail(error))
//       })
//   }
// }
