import * as actionTypes from './actionTypes'
import ResourceService from '../services/ResourceService'

//-----CREATE RESOURCE ACTIONS-----------------------------
export const createResourceStart = () => {
  return { type: actionTypes.CREATE_RESOURCE_START }
}
export const createResourceSuccess = () => {
  return { type: actionTypes.CREATE_RESOURCE_SUCCESS }
}
export const createResourceFail = (error) => {
  return { type: actionTypes.CREATE_RESOURCE_FAIL, error: error }
}
export const createResource = (data) => {
  return dispatch => {
    dispatch(createResourceStart())
    ResourceService.createResource(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_RESOURCE, data: response })
        dispatch(createResourceSuccess())
      })
      .catch(error => {
        dispatch(createResourceFail(error))
      })
  }
}

//-----DELETE RESOURCE ACTIONS-----------------------------
export const deleteResourceStart = () => {
  return { type: actionTypes.DELETE_RESOURCE_START }
}
export const deleteResourceSuccess = () => {
  return { type: actionTypes.DELETE_RESOURCE_SUCCESS }
}
export const deleteResourceFail = (error) => {
  return { type: actionTypes.DELETE_RESOURCE_FAIL, error: error }
}
export const deleteResource = (id) => {
  return dispatch => {
    dispatch(deleteResourceStart())
    ResourceService.deleteResource(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_RESOURCE, id: id })
        dispatch({ type: actionTypes.DELETE_RESOURCE_SUCCESS, message: response })
      })
      .catch(error => {
        dispatch({ type: actionTypes.DELETE_RESOURCE_FAIL, error: error })
      })
  }
}


//-----UPDATE RESOURCE ACTIONS-----------------------------
export const updateResourceStart = () => {
  return { type: actionTypes.UPDATE_RESOURCE_START }
}
export const updateResourceSuccess = () => {
  return { type: actionTypes.UPDATE_RESOURCE_SUCCESS }
}
export const updateResourceFail = (error) => {
  return { type: actionTypes.UPDATE_RESOURCE_FAIL, error: error }
}
export const updateResource = (data) => {
  return dispatch => {
    dispatch(updateResourceStart())
    ResourceService.updateResource(data.id, data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_RESOURCE_SUCCESS })
        dispatch(updateResourceSuccess(response))
        dispatch(fetchResources())
      })
      .catch(error => {
        dispatch(updateResourceFail(error))
      })
  }
}


//-----FETCH RESOURCE ACTIONS-----------------------------
export const fetchResourceStart = () => {
  return { type: actionTypes.FETCH_RESOURCE_START }
}
export const fetchResourceSuccess = (resource) => {
  return { type: actionTypes.FETCH_RESOURCE_SUCCESS, resourceData: resource }
}
export const fetchResourceFail = (error) => {
  return { type: actionTypes.FETCH_RESOURCE_FAIL, error: error }
}
export const fetchResource = (id) => {
  return dispatch => {
    dispatch(fetchResourceStart())
    ResourceService.fetchResource(id)
      .then(response => {
        dispatch(fetchResourceSuccess(response))
      })
      .catch(error => {
        dispatch(fetchResourceFail(error))
      })
  }
}

//-----INDEX RESOURCES ACTIONS-----------------------------
export const fetchResources = () => {
  return dispatch => {
    dispatch(fetchResourcesStart())
    ResourceService.fetchResources()
      .then(response => {
        dispatch(fetchResourcesSuccess(response))
      })
      .catch(error => {
        dispatch(fetchResourcesFail(error))
      })
  }
}

export const fetchResourcesStart = () => {
  return { type: actionTypes.FETCH_RESOURCES_START }
}

export const fetchResourcesSuccess = (resources) => {
  return { type: actionTypes.FETCH_RESOURCES_SUCCESS, resourcesList: resources }
}

export const fetchResourcesFail = (error) => {
  return { type: actionTypes.FETCH_RESOURCES_FAIL, error: error }
}
