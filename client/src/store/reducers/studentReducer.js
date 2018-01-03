import * as actionTypes from '../actions';

const STUDENTS = [
  { level: 1, teacher_id: 1, firstname: 'James', lastname: 'Smith', email: 'jsmith@student.com' },
  { level: 2, teacher_id: 5, firstname: 'Peter', lastname: 'Granger', email: 'pgranger@student.com' },
  { level: 2, teacher_id: 3, firstname: 'Teddy', lastname: 'Mullet', email: 'tmullet@student.com' },
  { level: 2, teacher_id: 2, firstname: 'Francis', lastname: 'Callucci', email: 'fcallucci@student.com' },
  { level: 3, teacher_id: 2, firstname: 'Brian', lastname: 'Nadeau', email: 'bnadeau@student.com' },
  { level: 1, teacher_id: 3, firstname: 'Sue', lastname: 'Morrow', email: 'smorrow@student.com' },
  { level: 1, teacher_id: 3, firstname: 'Andrea', lastname: 'McPhail', email: 'amcphail@student.com' },
  { level: 3, teacher_id: 4, firstname: 'Orin', lastname: 'Keepnews', email: 'okeepnews@student.com' },
  { level: 1, teacher_id: 4, firstname: 'Will', lastname: 'Marron', email: 'wmarron@student.com' },
  { level: 1, teacher_id: 5, firstname: 'Penny', lastname: 'Clump', email: 'pclump@student.com' },
  { level: 1, teacher_id: 5, firstname: 'Babu', lastname: 'Aadou', email: 'babadoo@student.com' }
]


const initialState = {
  teachers: {},
  students: STUDENTS,
  resources: {},
  lessons: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      return {
        ...state,
        students: {
          ...state.students.concat(action.studentData)
        }
      };

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
