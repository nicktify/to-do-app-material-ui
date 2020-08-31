import React from 'react';
import Todo from './Todo';

export default function TodoList({filter, handleCheckedChange, list}) {
    return (
        <div className="current-tasks">
            {
                list.map(todo => (
                    <Todo 
                        key={todo.id}
                        text={todo.text}
                        checked={todo.checked}
                        handleCheckedChange={handleCheckedChange}
                    />
                ))
            }
        </div>
    )
}
