import React from 'react';
import { Checkbox } from '@material-ui/core';

export default function Todo({text, checked, todo, completelist, setCompletelist}) {
    const handleChange = (e) => {
        setCompletelist(completelist.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, checked: !item.checked
                }
            }
            return item;
        }))
    }
    return (
            <div className="todo">
                <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={handleChange}
                />
                {text}
            </div>
    )
}
