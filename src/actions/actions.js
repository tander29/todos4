import { MARK_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED } from './types';

export const markTodo = id => { return { type: MARK_TODO, id } }


//change the below to follow the id naming scheme
export const addTodo = (title, keyNumber) => { return { type: ADD_TODO, title, keyNumber } }

export const deleteTodo = (id) => { return { type: DELETE_TODO, id } }

export const clearCompleted = (id) => { return { type: CLEAR_COMPLETED, id } }