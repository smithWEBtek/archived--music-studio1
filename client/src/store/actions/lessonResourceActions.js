import * as actionTypes from './actionTypes'
import LessonResourceService from '../../containers/LessonResources/LessonResourceService'

//-----CREATE LESSON_RESOURCE ACTIONS-----------------------------
export const createLessonResourceStart = () => {
  return { type: actionTypes.CREATE_LESSON_RESOURCE_START }
}
export const createLessonResourceSuccess = () => {
  return { type: actionTypes.CREATE_LESSON_RESOURCE_SUCCESS }
}
export const createLessonResourceFail = (error) => {
  return { type: actionTypes.CREATE_LESSON_RESOURCE_FAIL, error: error }
}
export const createLessonResource = (data) => {
  return dispatch => {
    dispatch(createLessonResourceStart())
    LessonResourceService.createLessonResource(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_LESSON_RESOURCE, data: response })
        dispatch(createLessonResourceSuccess())
      })
      .catch(error => {
        dispatch(createLessonResourceFail(error))
      })
  }
}

//-----DELETE LESSON_RESOURCE ACTIONS-----------------------------
export const deleteLessonResourceStart = () => {
  return { type: actionTypes.DELETE_LESSON_RESOURCE_START }
}
export const deleteLessonResourceSuccess = () => {
  return { type: actionTypes.DELETE_LESSON_RESOURCE_SUCCESS }
}
export const deleteLessonResourceFail = (error) => {
  return { type: actionTypes.DELETE_LESSON_RESOURCE_FAIL, error: error }
}
export const deleteLessonResource = (id) => {
  return dispatch => {
    dispatch(deleteLessonResourceStart())
    LessonResourceService.deleteLessonResource(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_LESSON_RESOURCE, id: id })
        dispatch({ type: actionTypes.DELETE_LESSON_RESOURCE_SUCCESS, message: response })
      })
      .catch(error => {
        dispatch({ type: actionTypes.DELETE_LESSON_RESOURCE_FAIL, error: error })
      })
  }
}


//-----UPDATE LESSON_RESOURCE ACTIONS-----------------------------
export const updateLessonResourceStart = () => {
  return { type: actionTypes.UPDATE_LESSON_RESOURCE_START }
}
export const updateLessonResourceSuccess = () => {
  return { type: actionTypes.UPDATE_LESSON_RESOURCE_SUCCESS }
}
export const updateLessonResourceFail = (error) => {
  return { type: actionTypes.UPDATE_LESSON_RESOURCE_FAIL, error: error }
}
export const updateLessonResource = (data) => {
  return dispatch => {
    dispatch(updateLessonResourceStart())
    LessonResourceService.updateLessonResource(data.id, data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_LESSON_RESOURCE_SUCCESS })
        dispatch(updateLessonResourceSuccess(response))
        dispatch(fetchLessonResources())
      })
      .catch(error => {
        dispatch(updateLessonResourceFail(error))
      })
  }
}


//-----FETCH LESSON_RESOURCE ACTIONS-----------------------------
export const fetchLessonResourceStart = () => {
  return { type: actionTypes.FETCH_LESSON_RESOURCE_START }
}
export const fetchLessonResourceSuccess = (lessonResource) => {
  return { type: actionTypes.FETCH_LESSON_RESOURCE_SUCCESS, lessonResourceData: lessonResource }
}
export const fetchLessonResourceFail = (error) => {
  return { type: actionTypes.FETCH_LESSON_RESOURCE_FAIL, error: error }
}
export const fetchLessonResource = (id) => {
  return dispatch => {
    dispatch(fetchLessonResourceStart())
    LessonResourceService.fetchLessonResource(id)
      .then(response => {
        dispatch(fetchLessonResourceSuccess(response))
      })
      .catch(error => {
        dispatch(fetchLessonResourceFail(error))
      })
  }
}

//-----INDEX LESSON_RESOURCES ACTIONS-----------------------------
export const fetchLessonResources = () => {
  return dispatch => {
    dispatch(fetchLessonResourcesStart())
    LessonResourceService.fetchLessonResources()
      .then(response => {
        dispatch(fetchLessonResourcesSuccess(response))
      })
      .catch(error => {
        dispatch(fetchLessonResourcesFail(error))
      })
  }
}

export const fetchLessonResourcesStart = () => {
  return { type: actionTypes.FETCH_LESSON_RESOURCES_START }
}

export const fetchLessonResourcesSuccess = (lessonResources) => {
  return { type: actionTypes.FETCH_LESSON_RESOURCES_SUCCESS, lessonResourcesList: lessonResources }
}

export const fetchLessonResourcesFail = (error) => {
  return { type: actionTypes.FETCH_LESSON_RESOURCES_FAIL, error: error }
}
