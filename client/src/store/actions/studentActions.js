import * as actionTypes from './actionTypes';
import StudentService from '../../components/Students/StudentService';

export const addStudent = (student) => {
  return {
    type: actionTypes.ADD_STUDENT,
    studentData: student
  }
}

export const removeStudent = (id) => {
  return {
    type: actionTypes.REMOVE_STUDENT,
    id: id
  }
}




export const fetchStudentsSuccess = (students) => {
  return {
    type: actionTypes.FETCH_STUDENTS_SUCCESS,
    studentsList: students
  }
}

export const fetchStudentsFail = (error) => {
  return {
    type: actionTypes.FETCH_STUDENTS_FAIL,
    error: error
  }
}

export const fetchStudentsStart = () => {
  return {
    type: actionTypes.FETCH_STUDENTS_START
  }
}

export const fetchStudents = () => {
  return dispatch => {
    dispatch(fetchStudentsStart());
    StudentService.fetchStudents()
      .then(response => {
        const fetchedStudents = [];
        for (let key in response.data) {
          fetchedStudents.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchStudentsSuccess(fetchedStudents))
      })
      .catch(error => {
        dispatch(fetchStudentsFail(error))
      })
  }
}
