import * as actionTypes from './actionTypes'
import StudentService from '../../components/Students/StudentService'

//-----CREATE_STUDENT ACTIONS-----------------------------
export const createStudent = (data) => {
  return dispatch => {
    dispatch(createStudentStart())
    StudentService.createStudent(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_STUDENT, data: response })
        dispatch(createStudentSuccess())
      })
      .catch(error => {
        dispatch(createStudentFail(error))
      })
  }
}
export const createStudentStart = () => {
  return { type: actionTypes.CREATE_STUDENT_START }
}
export const createStudentSuccess = () => {
  return { type: actionTypes.CREATE_STUDENT_SUCCESS }
}
export const createStudentFail = (error) => {
  return { type: actionTypes.CREATE_STUDENT_FAIL, error: error }
}

//-----DELETE_STUDENT ACTIONS-----------------------------
export const deleteStudent = (id) => {
  return {
    type: actionTypes.DELETE_STUDENT,
    id: id
  }
}

export const deleteStudentStart = () => {
  return { type: actionTypes.DELETE_STUDENT_START }
}
export const deleteStudentSuccess = () => {
  return { type: actionTypes.DELETE_STUDENT_SUCCESS }
}
export const deleteStudentFail = (error) => {
  return { type: actionTypes.DELETE_STUDENT_FAIL, error: error }
}
// UPDATE //////////////////////////////////////// 

export const updateStudentStart = () => {
  return { type: actionTypes.UPDATE_STUDENT_START }
}

export const updateStudentSuccess = (data) => {
  return { type: actionTypes.UPDATE_STUDENT_SUCCESS, updatedStudentData: data }
}

export const updateStudentFail = (error) => {
  return { type: actionTypes.UPDATE_STUDENT_FAIL, error: error }
}

export const updateStudent = (data) => {
  return dispatch => {
    dispatch(updateStudentStart())
    StudentService.updateStudent(data.id, data)
      .then(response => {
        dispatch(updateStudentSuccess(response))
        dispatch(fetchStudents())
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
    dispatch(fetchStudentStart())
    StudentService.fetchStudent(id)
      .then(response => {
        dispatch(fetchStudentSuccess(response))
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
    dispatch(fetchStudentsStart())
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
