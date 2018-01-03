import * as actionTypes from '../actions';

const initialState = {
  resources: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESOURCE:

      const newresource = action.resourceData
      return {
        ...state,
        resources: state.resources.concat(newresource)
      }

    case actionTypes.REMOVE_RESOURCE:
      const updatedResourcesArray = state.resources.filter(resource => resource.id !== action.resourceId);
      return {
        ...state,
        resources: updatedResourcesArray
      };

    default:
      return state;
  }
}

export default reducer;
