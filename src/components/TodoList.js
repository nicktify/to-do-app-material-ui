import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos, filter }) => {
  return (
    <div>
      {todos && (filter === "all" || filter === "")
        ? todos.map((todo, index) => (
            <div key={index}>
              <Todo
                id={todo.id}
                text={todo.text}
                checked={todo.checked}
                editing={todo.editing}
                status={todo.status}
              />
            </div>
          ))
        : todos.map((todo, index) => {
            if (todo.status === filter) {
              return (
                <div key={index}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    checked={todo.checked}
                    editing={todo.editing}
                    status={todo.status}
                  />
                </div>
              );
            } else {
              return <div></div>;
            }
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(TodoList);
