import * as actionTypes from './actionTypes';
// import { ADD_RESOURCE } from './actionTypes';

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