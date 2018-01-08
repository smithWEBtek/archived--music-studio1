import * as actionTypes from '../actions/actionTypes';
import ResourceService from '../../components/Resources/ResourceService';

const initialState = {
  resources: []
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //-----CREATE RESOURCE-----------------------------
    case actionTypes.CREATE_RESOURCE:
      const newResource = action.data
      return updateObject(state, { resources: state.resources.concat(newResource) })

    case actionTypes.CREATE_RESOURCE_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_RESOURCE_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })


    //-----DELETE RESOURCE-----------------------------
    case actionTypes.DELETE_RESOURCE:
      const updatedResourcesArray = state.resources.filter(resource => resource.id !== action.id);
      return updateObject(state, { resources: updatedResourcesArray, loading: false })

    case actionTypes.DELETE_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.DELETE_RESOURCE_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE RESOURCE-----------------------------
    case actionTypes.UPDATE_RESOURCE:
      const resourceData = action.updatedResourceData
      return ResourceService.updateResource(resourceData.id, resourceData)

    case actionTypes.UPDATE_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.UPDATE_RESOURCE_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----FETCH RESOURCE-----------------------------
    case actionTypes.FETCH_RESOURCE_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_RESOURCE_SUCCESS:
      return updateObject(state, { resources: action.resourceData })

    case actionTypes.FETCH_RESOURCE_FAIL:
      return updateObject(state, { error: action.error })


    //-----FETCH RESOURCES-----------------------------
    case actionTypes.FETCH_RESOURCES_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_RESOURCES_SUCCESS:
      return updateObject(state, { resources: action.resourcesList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_RESOURCES_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
