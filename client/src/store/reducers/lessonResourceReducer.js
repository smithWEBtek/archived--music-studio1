import * as actionTypes from '../actions/actionTypes';
import LessonResourceService from '../../containers/LessonResources/LessonResourceService';

const initialState = {
  lessonResources: [],
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //-----CREATE LESSON_RESOURCE-----------------------------
    case actionTypes.CREATE_LESSON_RESOURCE:
      const newLessonResource = action.data
      return updateObject(state, { lessonResources: state.lessonResources.concat(newLessonResource) })

    case actionTypes.CREATE_LESSON_RESOURCE_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_LESSON_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_LESSON_RESOURCE_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })


    //-----DELETE LESSON_RESOURCE-----------------------------
    case actionTypes.DELETE_LESSON_RESOURCE:
      const updatedLessonResourcesArray = state.lessonResources.filter(lessonResource => lessonResource.id !== action.id);
      return updateObject(state, { lessonResources: updatedLessonResourcesArray, loading: false })

    case actionTypes.DELETE_LESSON_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.DELETE_LESSON_RESOURCE_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE LESSON_RESOURCE-----------------------------
    case actionTypes.UPDATE_LESSON_RESOURCE:
      const lessonResourceData = action.updatedLessonResourceData
      return LessonResourceService.updateLessonResource(lessonResourceData.id, lessonResourceData)

    case actionTypes.UPDATE_LESSON_RESOURCE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.UPDATE_LESSON_RESOURCE_FAIL:
      return updateObject(state, { error: action.error, loading: false })


    //-----FETCH LESSON_RESOURCE-----------------------------
    case actionTypes.FETCH_LESSON_RESOURCE_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_LESSON_RESOURCE_SUCCESS:
      return updateObject(state, { lessonResources: action.lessonResourceData })

    case actionTypes.FETCH_LESSON_RESOURCE_FAIL:
      return updateObject(state, { error: action.error })


    //-----FETCH LESSON_RESOURCES-----------------------------
    case actionTypes.FETCH_LESSON_RESOURCES_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_LESSON_RESOURCES_SUCCESS:
      return updateObject(state, { lessonResources: action.lessonResourcesList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_LESSON_RESOURCES_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
