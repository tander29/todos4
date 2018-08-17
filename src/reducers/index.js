import { combineReducers } from 'redux';
import { MARK_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED } from '../actions/types';
import todos from '../todos.json'



const initialState = {
    todos: todos,
}

//what a todo looks like
// { title: event.target.value, completed: false, id: keyNumber++, userID: 1 }
export default function (state = initialState, action) {
    switch (action.type) {

        case MARK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    todo.id === action.id ? todo.completed = !todo.completed : null
                    return todo;

                })
            }

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        userId: action.user.userID,
                        completed: false,
                        title: action.title,
                        key: action.id
                    }
                ]
            })
        case DELETE_TODO:


            break;

        case CLEAR_COMPLETED:

            break;
        default:
            return state;
    }
}