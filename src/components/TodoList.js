import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

const TodoList = ({todos}) => {

  return (
    <div>
      TODO LIST
      {
        todos.map(todo => (
          <div>
            <Todo 
              text={todo.text}
              checked={todo.checked}
              editing={todo.editing}
            />
          </div>
        ))
      }
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);
