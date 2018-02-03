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
      const newLessonResource = action.data
      return Object.assign({}, state, { lessonResources: state.lessonResources.concat(newLessonResource) })


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
      return Object.assign({}, state, { lessonResources: action.lessonResourcesList.sort((a, b) => (a.id) - (b.id)) })


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
      return Object.assign({}, state, { lessonResources: state.lessonResources.concat(lessonResourceData) })


    //-----DELETE LESSON_RESOURCE-----------------------------
    case actionTypes.DELETE_LESSON_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.DELETE_LESSON_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.DELETE_LESSON_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        messaeg: action.type
      })

    case actionTypes.DELETE_LESSON_RESOURCE:
      const updatedLessonResources = state.lessonResources.filter(lessonResource => lessonResource.id !== action.id);
      return Object.assign({}, state, { lessonResources: updatedLessonResources })


    //----- DEFAULT -----------------------------
    default:
      return state;
  }
}

export default reducer;
