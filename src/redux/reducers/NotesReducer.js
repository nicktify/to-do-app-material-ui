import { CREATE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/index';

let initialState = {
  todo: []
};

export const NotesReducer = (state = initialState, action) => {
  if (action.type === CREATE_TODO) {
    return {
      todo: [...state.todo, action.payload]
    }
  }

  if (action.type === EDIT_TODO) {
    return {
      todo: state.map(e => {
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
      todo: state.filter(e => e.id !== action.payload)
    }
  }

  return state;
}
