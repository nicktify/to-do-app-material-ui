import {
  CREATE_TODO,
  EDIT_TODO,
  FILTER_TODOS,
  DELETE_TODO,
} from "../actions/index";

let initialState = {
  todos: [],
  filter: "",
};

export const TodoReducer = (state = initialState, action) => {
  if (action.type === CREATE_TODO) {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }

  if (action.type === EDIT_TODO) {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      }),
    };
  }

  if (action.type === FILTER_TODOS) {
    return {
      ...state,
      filter: action.payload,
    };
  }

  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }

  return state;
};
