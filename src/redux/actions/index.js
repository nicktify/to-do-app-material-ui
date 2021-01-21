export const CREATE_TODO = 'CREATE_TODO';

export const EDIT_TODO = 'EDIT_TODO';

export const FILTER_TODOS = 'FILTER_TODOS'

export const DELETE_TODO = 'DELETE_TODO';


export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo
  }
}

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo
  }
}

export const filterTodos = (status) => {
  return {
    type: FILTER_TODOS,
    payload: status
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}
