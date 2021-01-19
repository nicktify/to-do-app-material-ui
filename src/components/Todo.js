import React, { useState } from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneIcon from '@material-ui/icons/Done';

const Todo = ({text, checked, editing}) => {

    return (
        <div className="todo">
            <Checkbox 
                checked={checked}
            />
            <div>{text}</div>
            <DeleteForeverIcon />
            <DoneIcon 
            />
            {
                checked && <DoneIcon />
            }
        </div>
    )
}

export default Todo;
