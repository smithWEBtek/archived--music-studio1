import * as actionTypes from '../actions';

const STUDENTS = [
  { id: 1, level: 1, teacher_id: 1, firstname: 'James', lastname: 'Smith', email: 'jsmith@student.com' },
  { id: 2, level: 2, teacher_id: 5, firstname: 'Peter', lastname: 'Granger', email: 'pgranger@student.com' },
  { id: 3, level: 2, teacher_id: 3, firstname: 'Teddy', lastname: 'Mullet', email: 'tmullet@student.com' },
  { id: 4, level: 2, teacher_id: 2, firstname: 'Francis', lastname: 'Callucci', email: 'fcallucci@student.com' },
  { id: 5, level: 3, teacher_id: 2, firstname: 'Brian', lastname: 'Nadeau', email: 'bnadeau@student.com' },
  { id: 6, level: 1, teacher_id: 3, firstname: 'Sue', lastname: 'Morrow', email: 'smorrow@student.com' },
  { id: 7, level: 1, teacher_id: 3, firstname: 'Andrea', lastname: 'McPhail', email: 'amcphail@student.com' },
  { id: 8, level: 3, teacher_id: 4, firstname: 'Orin', lastname: 'Keepnews', email: 'okeepnews@student.com' },
  { id: 9, level: 1, teacher_id: 4, firstname: 'Will', lastname: 'Marron', email: 'wmarron@student.com' },
  { id: 10, level: 1, teacher_id: 5, firstname: 'Penny', lastname: 'Clump', email: 'pclump@student.com' },
  { id: 11, level: 1, teacher_id: 5, firstname: 'Babu', lastname: 'Aadou', email: 'baba3doo@student.com' }
]

const initialState = {
  students: STUDENTS
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      const newStudent = action.studentData
      newStudent.id = state.students[state.students.length - 1].id + 1;
      return {
        ...state,
        students: state.students.concat(newStudent)
      }
    case actionTypes.REMOVE_STUDENT:
      const updatedStudentsArray = state.students.filter(student => student.id !== action.studentId);
      return {
        ...state,
        students: updatedStudentsArray
      };
    default:
      return state;
  }
}

export default reducer;
