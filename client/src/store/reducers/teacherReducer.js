import * as actionTypes from '../actions/actionTypes';

const TEACHERS = [
  { id: 1, firstname: 'Not', lastname: 'Assigned', email: 'unassigned@music.com' },
  { id: 2, firstname: 'Joe', lastname: 'Pepper', email: 'jpepper@music.com' },
  { id: 3, firstname: 'Mila', lastname: 'Filatova', email: 'mfilatova@music.com' },
  { id: 4, firstname: 'Barry', lastname: 'Gendron', email: 'bgendron@music.com' },
  { id: 5, firstname: 'James', lastname: 'Brown', email: 'jb@getfunky1.com' }
]

const initialState = {
  teachers: TEACHERS
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TEACHER:

      const newTeacher = action.teacherData
      newTeacher.id = state.teachers[state.teachers.length - 1].id + 1;
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
