import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lessonResources: [],
  loading: false,
  error: false,
  message: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    //-----CREATE LESSON_RESOURCE-----------------------------
    case actionTypes.CREATE_LESSON_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.CREATE_LESSON_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.CREATE_LESSON_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.CREATE_LESSON_RESOURCE:
      const newLessonResource = action.lessonResourceData
      return Object.assign({}, state, {
        lessonResources: state.lessonResources.concat(newLessonResource)
      })


    //-----FETCH LESSON_RESOURCES-----------------------------
    case actionTypes.FETCH_LESSON_RESOURCES_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.FETCH_LESSON_RESOURCES_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.FETCH_LESSON_RESOURCES_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.FETCH_LESSON_RESOURCES:
      const lessonResources = action.lessonResourcesList
      return Object.assign({}, state, {
        lessonResources: lessonResources.sort((a, b) => (a.lastname) - (b.lastname))
      })


    //-----UPDATE LESSON_RESOURCE-----------------------------
    case actionTypes.UPDATE_LESSON_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.UPDATE_LESSON_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.UPDATE_LESSON_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.UPDATE_LESSON_RESOURCE:
      const lessonResourceData = action.updatedLessonResourceData
      const lessonResourceIndex = state.lessonResources.findIndex(lessonResource => lessonResource.id === lessonResourceData.id);
      const stateTemp = {
        ...state,
        lessonResources: [
          ...state.lessonResources.slice(0, lessonResourceIndex),
          ...state.lessonResources.slice(lessonResourceIndex + 1, state.lessonResources.length)
        ]
      };
      return Object.assign({}, { ...stateTemp }, { lessonResources: stateTemp.lessonResources.concat(lessonResourceData) })


    //-----DELETE LESSON_RESOURCE-----------------------------
    case actionTypes.DELETE_LESSON_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.DELETE_LESSON_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.DELETE_LESSON_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.DELETE_LESSON_RESOURCE:
      const updatedLessonResources = state.lessonResources.filter(lessonResource => lessonResource.id !== action.id);
      return Object.assign({}, state, {
        lessonResources: updatedLessonResources
      })

    //----- DEFAULT --------------------------------
    default:
      return state;
  }
}

export default reducer;
