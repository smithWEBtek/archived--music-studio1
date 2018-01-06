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

export const updateStudentStart = () => {
  return { type: actionTypes.UPDATE_STUDENT_START }
}

export const updateStudentSuccess = (data) => {
  return { type: actionTypes.UPDATE_STUDENT_SUCCESS, updataedStudentData: data }
}

export const updateStudentFail = (error) => {
  return { type: actionTypes.UPDATE_STUDENT_FAIL, error: error }
}

export const updateStudent = (data) => {
  return dispatch => {
    dispatch(updateStudentStart());
    StudentService.updateStudent(data)
      .then(response => {
        dispatch(updateStudentSuccess(response))
      })
      .catch(error => {
        dispatch(updateStudentFail(error))
      })
  }
}

// SHOW //////////////////////////////////////// 
// export const updateStudent = (id) => {
//   return { type: actionTypes.REMOVE_STUDENT, id: id }
// }
// FETCH STUDENT ///////////////////////////////////////
export const fetchStudent = (id) => {
  return dispatch => {
    dispatch(fetchStudentStart());
    StudentService.fetchStudent(id)
      .then(response => {
        setTimeout(() => {
          dispatch(fetchStudentSuccess(response))
        }, 2000);
      })
      .catch(error => {
        dispatch(fetchStudentFail(error))
      })
  }
}

export const fetchStudentStart = () => {
  return { type: actionTypes.FETCH_STUDENT_START }
}

export const fetchStudentSuccess = (student) => {
  return { type: actionTypes.FETCH_STUDENT_SUCCESS, studentData: student }
}

export const fetchStudentFail = (error) => {
  return { type: actionTypes.FETCH_STUDENT_FAIL, error: error }
}


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
