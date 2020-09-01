import React from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = makeStyles((theme) => ({
    deleteIcon: {
        marginLeft: theme.spacing(2),
        fontSize: 30,
        height: 40,
        cursor: 'pointer'
    }
}))

export default function Todo({text, checked, todo, completelist, setCompletelist}) {
    const handleChange = () => {
        setCompletelist(completelist.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, checked: !item.checked
                }
            }
            return item;
        }))
    }

    const handleDelete = () => {
        setCompletelist(completelist.filter((item) => item.id !== todo.id))
    }

    const classes = styles();

    return (
        <div className="todo">
            <Checkbox
                checked={checked}
                color="primary"
                onChange={handleChange}
            />
            {text}
            <DeleteForeverIcon 
                className={classes.deleteIcon}
                onClick={handleDelete}
            />
        </div>
    )
}