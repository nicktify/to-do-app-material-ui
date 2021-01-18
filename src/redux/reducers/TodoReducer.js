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
      todos: state.map(e => {
        if (e.id === action.payload) {
          return action.payload
        } else {
          return e;
        }
      })
    }
  }

  if (action.type === DELETE_TODO) {
    return {
      todos: state.filter(e => e.id !== action.payload)
    }
  }

  return state;
}
