import * as actionTypes from '../actions/actionTypes';

const RESOURCES = [
  { id: 1, title: 'cycle of fifths 1', category: 'harmony', description: '12 keys in 12 bars', format: 'doc', location: 'cloud' },
  { id: 2, title: 'blues in F', category: 'blues', description: '12 bar blues', format: 'pdf', location: 'cloud' },
  { id: 3, title: 'II-V-I 4bar', category: 'improv', description: '4 bar phrases', format: 'aud', location: 'cloud' },
  { id: 4, title: 'maj triad', category: 'chords', description: 'major triad inversions', format: 'pdf', location: 'cloud' },
  { id: 5, title: 'min triad', category: 'chords', description: 'minor triad inversions', format: 'vid', location: 'cloud' },
  { id: 6, title: 'dom7', category: 'chords', description: 'dom7 inversions', format: 'pdf', location: 'cloud' },
  { id: 7, title: 'min7', category: 'chords', description: 'min7 inversions', format: 'doc', location: 'cloud' },
  { id: 8, title: 'min7b5', category: 'chords', description: 'min7b5 inversions', format: 'pdf', location: 'cloud' },
  { id: 9, title: 'maj7', category: 'chords', description: 'maj7 inversions', format: 'pdf', location: 'cloud' },
  { id: 10, title: 'major scales', category: 'scales', description: 'major scales', format: 'aud', location: 'cloud' }
]

const initialState = {
  resources: RESOURCES
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESOURCE:
      const newResource = action.resourceData
      newResource.id = state.resources[state.resources.length - 1].id + 1;
      return {
        ...state,
        resources: state.resources.concat(newResource)
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
