import { CREATE_TODO, EDIT_TODO, FILTER_TODOS, DELETE_TODO } from '../actions/index';

let initialState = {
  todos: [],
  filteredTodos: []
};

export const TodoReducer = (state = initialState, action) => {
  if (action.type === CREATE_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.payload]
    }
  }

  if (action.type === EDIT_TODO) {
    return {
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload
        } else {
          return todo; 
        }
      })
    }
  }

  if (action.type === FILTER_TODOS) {

    if (action.payload === 'complete') {
      return {
        ...state,
        filteredTodos: state.todos.filter(todo => todo.checked === true)
      }
    }

    if (action.payload === 'incomplete') {
      return {
        ...state,
        filteredTodos: state.todos.filter(todo => todo.checked === false)
      }
    }

    return {
      ...state,
      filteredTodos: state.todos
    }
  }

  if (action.type === DELETE_TODO) {
    return {
      todos: state.todos.filter(todo => todo.id !== action.payload)
    }
  }

  return state;
}
