import * as actionTypes from './actionTypes'
import TeacherService from '../services/TeacherService'

//-----CREATE TEACHER ACTIONS-----------------------------
export const createTeacherStart = () => {
  return { type: actionTypes.CREATE_TEACHER_START }
}
export const createTeacherSuccess = () => {
  return { type: actionTypes.CREATE_TEACHER_SUCCESS }
}
export const createTeacherFail = (error) => {
  return { type: actionTypes.CREATE_TEACHER_FAIL, error: error }
}
export const createTeacher = (data) => {
  return dispatch => {
    dispatch(createTeacherStart())
    TeacherService.createTeacher(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_TEACHER, data: response })
        dispatch(createTeacherSuccess())
      })
      .catch(error => {
        dispatch(createTeacherFail(error))
      })
  }
}

//-----DELETE TEACHER ACTIONS-----------------------------
export const deleteTeacherStart = () => {
  return { type: actionTypes.DELETE_TEACHER_START }
}
export const deleteTeacherSuccess = () => {
  return { type: actionTypes.DELETE_TEACHER_SUCCESS }
}
export const deleteTeacherFail = (error) => {
  return { type: actionTypes.DELETE_TEACHER_FAIL, error: error }
}
export const deleteTeacher = (id) => {
  return dispatch => {
    dispatch(deleteTeacherStart())
    TeacherService.deleteTeacher(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_TEACHER, id: id })
        dispatch({ type: actionTypes.DELETE_TEACHER_SUCCESS, message: response })
      })
      .catch(error => {
        dispatch({ type: actionTypes.DELETE_TEACHER_FAIL, error: error })
      })
  }
}


//-----UPDATE TEACHER ACTIONS-----------------------------
export const updateTeacherStart = () => {
  return { type: actionTypes.UPDATE_TEACHER_START }
}
export const updateTeacherSuccess = () => {
  return { type: actionTypes.UPDATE_TEACHER_SUCCESS }
}
export const updateTeacherFail = (error) => {
  return { type: actionTypes.UPDATE_TEACHER_FAIL, error: error }
}
export const updateTeacher = (data) => {
  return dispatch => {
    dispatch(updateTeacherStart())
    TeacherService.updateTeacher(data.id, data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_TEACHER_SUCCESS })
        dispatch(updateTeacherSuccess(response))
        dispatch(fetchTeachers())
      })
      .catch(error => {
        dispatch(updateTeacherFail(error))
      })
  }
}

//-----FETCH TEACHER ACTIONS-----------------------------
// export const fetchTeacherStart = () => {
//   return { type: actionTypes.FETCH_TEACHER_START }
// }
// export const fetchTeacherSuccess = (teacher) => {
//   return { type: actionTypes.FETCH_TEACHER_SUCCESS, teacherData: teacher }
// }
// export const fetchTeacherFail = (error) => {
//   return { type: actionTypes.FETCH_TEACHER_FAIL, error: error }
// }
// export const fetchTeacher = (id) => {
//   return dispatch => {
//     dispatch(fetchTeacherStart())
//     TeacherService.fetchTeacher(id)
//       .then(response => {
//         dispatch(fetchTeacherSuccess(response))
//       })
//       .catch(error => {
//         dispatch(fetchTeacherFail(error))
//       })
//   }
// }

//-----INDEX TEACHERS ACTIONS-----------------------------
export const fetchTeachers = () => {
  return dispatch => {
    dispatch(fetchTeachersStart())
    TeacherService.fetchTeachers()
      .then(response => {
        dispatch(fetchTeachersSuccess(response))
      })
      .catch(error => {
        dispatch(fetchTeachersFail(error))
      })
  }
}

export const fetchTeachersStart = () => {
  return { type: actionTypes.FETCH_TEACHERS_START }
}

export const fetchTeachersSuccess = (teachers) => {
  return { type: actionTypes.FETCH_TEACHERS_SUCCESS, teachersList: teachers }
}

export const fetchTeachersFail = (error) => {
  return { type: actionTypes.FETCH_TEACHERS_FAIL, error: error }
}
