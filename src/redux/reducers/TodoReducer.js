import { CREATE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/index';

let initialState = {
  todos: []
};

export const TodoReducer = (state = initialState, action) => {
  if (action.type === CREATE_TODO) {
    return {
      todos: [...state.todos, action.payload]
    }
  }

  if (action.type === EDIT_TODO) {
    return {
      todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload
        } else {
          return todo; 
        }
      })
    }
  }

  if (action.type === DELETE_TODO) {
    return {
      todos: state.todos.filter(todo => todo.id !== action.payload)
    }
  }

  return state;
}
