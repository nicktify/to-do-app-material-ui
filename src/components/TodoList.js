import React from 'react';
import Todo from './Todo';

export default function TodoList({text, list, setList}) {

    const [checked, setChecked] = React.useState(false);

    return (
        <div className="current-tasks">
            {
                list.map(todo => (
                    <Todo key={todo.id} text={todo.text}/>
                ))
            }
        </div>
    )
}
