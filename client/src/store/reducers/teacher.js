import * as actionTypes from '../actions';

const TEACHERS = [
  { id: 1, firstname: 'Not', firstname: 'Assigned', email: 'unassigned@music.com' },
  { id: 2, firstname: 'Joe', firstname: 'Pepper', email: 'jpepper@music.com' },
  { id: 3, firstname: 'Mila', firstname: 'Filatova', email: 'mfilatova@music.com' },
  { id: 4, firstname: 'Barry', firstname: 'Gendron', email: 'bgendron@music.com' },
  { id: 5, firstname: 'James', firstname: 'Brown', email: 'jb@getfunky.com' }
]

const initialState = {
  // teachers: []
  teachers: TEACHERS
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TEACHER:

      const newTeacher = action.teacherData
      return {
        ...state,
        teachers: state.teachers.concat(newTeacher)
      }

    case actionTypes.REMOVE_TEACHER:
      const updatedTeachersArray = state.teachers.filter(teacher => teacher.id !== action.teacherId);
      return {
        ...state,
        teachers: updatedTeachersArray
      };

    default:
      return state;
  }
}

export default reducer;
