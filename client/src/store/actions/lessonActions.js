import * as actionTypes from './actionTypes'
import LessonService from '../services/LessonService'

//-----CREATE LESSON ACTIONS-----------------------------
export const createLessonStart = () => {
  return { type: actionTypes.CREATE_LESSON_START }
}
export const createLessonSuccess = () => {
  return { type: actionTypes.CREATE_LESSON_SUCCESS }
}
export const createLessonFail = (error) => {
  return { type: actionTypes.CREATE_LESSON_FAIL, error: error }
}
export const createLesson = (data, history) => {
  return dispatch => {
    dispatch(createLessonStart())
    LessonService.createLesson(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_LESSON, data: response })
        console.log('[lessonActions] history', history)
        // debugger;

        history.push(`/lessons/${response.id}`)
        dispatch(createLessonSuccess())
      })
      .catch(error => {
        dispatch(createLessonFail(error))
      })
  }
}

//-----DELETE LESSON ACTIONS-----------------------------
export const deleteLessonStart = () => {
  return { type: actionTypes.DELETE_LESSON_START }
}
export const deleteLessonSuccess = () => {
  return { type: actionTypes.DELETE_LESSON_SUCCESS }
}
export const deleteLessonFail = (error) => {
  return { type: actionTypes.DELETE_LESSON_FAIL, error: error }
}
export const deleteLesson = (id) => {
  return dispatch => {
    dispatch(deleteLessonStart())
    LessonService.deleteLesson(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_LESSON, id: id })
        dispatch({ type: actionTypes.DELETE_LESSON_SUCCESS, message: response })
      })
      .catch(error => {
        dispatch({ type: actionTypes.DELETE_LESSON_FAIL, error: error })
      })
  }
}


//-----UPDATE LESSON ACTIONS-----------------------------
export const updateLessonStart = () => {
  return { type: actionTypes.UPDATE_LESSON_START }
}
export const updateLessonSuccess = () => {
  return { type: actionTypes.UPDATE_LESSON_SUCCESS }
}
export const updateLessonFail = (error) => {
  return { type: actionTypes.UPDATE_LESSON_FAIL, error: error }
}
export const updateLesson = (lesson) => {
  return dispatch => {
    dispatch(updateLessonStart())
    LessonService.updateLesson(lesson)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_LESSON_SUCCESS })
        dispatch(updateLessonSuccess(response))
        dispatch(fetchLessons())
      })
      .catch(error => {
        dispatch(updateLessonFail(error))
      })
  }
}


//-----FETCH LESSON ACTIONS-----------------------------
export const fetchLessonStart = () => {
  return { type: actionTypes.FETCH_LESSON_START }
}
export const fetchLessonSuccess = (lesson) => {
  return { type: actionTypes.FETCH_LESSON_SUCCESS, lessonData: lesson }
}
export const fetchLessonFail = (error) => {
  return { type: actionTypes.FETCH_LESSON_FAIL, error: error }
}
export const fetchLesson = (id) => {
  return dispatch => {
    dispatch(fetchLessonStart())
    LessonService.fetchLesson(id)
      .then(response => {
        dispatch(fetchLessonSuccess(response))
      })
      .catch(error => {
        dispatch(fetchLessonFail(error))
      })
  }
}

//-----INDEX LESSONS ACTIONS-----------------------------
export const fetchLessons = () => {
  return dispatch => {
    dispatch(fetchLessonsStart())
    LessonService.fetchLessons()
      .then(response => {
        dispatch(fetchLessonsSuccess(response))
      })
      .catch(error => {
        dispatch(fetchLessonsFail(error))
      })
  }
}

export const fetchLessonsStart = () => {
  return { type: actionTypes.FETCH_LESSONS_START }
}

export const fetchLessonsSuccess = (lessons) => {
  return { type: actionTypes.FETCH_LESSONS_SUCCESS, lessonsList: lessons }
}

export const fetchLessonsFail = (error) => {
  return { type: actionTypes.FETCH_LESSONS_FAIL, error: error }
}
