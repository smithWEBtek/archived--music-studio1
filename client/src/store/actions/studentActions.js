import * as actionTypes from './actionTypes';

export const addStudent = (student) => {
  return {
    type: actionTypes.ADD_STUDENT,
    student: student
  }
}

export const removeStudent = (id) => {
  return {
    type: actionTypes.REMOVE_STUDENT,
    id: id
  }
} 