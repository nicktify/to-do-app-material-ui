import React, { useState } from 'react';
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

export default function Todo({text, checked, todo, completelist, setCompletelist, editing}) {

    const [editedText, setEditedText] = useState('');

    const handleChange = () => {
        setCompletelist(completelist.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item;
        }))
    }

    const handleDelete = () => {
        setCompletelist(completelist.filter((item) => item.id !== todo.id))
    }

    const handleEdit = (e) => {
        handleEditing(e);
    }

    const handleEditing = (e) => {
        console.log(e)
        setCompletelist(completelist.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    editing: !todo.editing,
                    text: editedText
                }
            }
        }))
    }

    const classes = styles();

    return (
        <div className="todo">
            <Checkbox
                checked={checked}
                color="primary"
                onChange={handleChange}
            />
            <div
                onClick={handleEdit}
            >
            {(!todo.editing) 
                ? text 
                : <input 
                        
                    value={todo.text}
                    onChange={handleEditing}
                />
            }
            </div>
            <DeleteForeverIcon 
                className={classes.deleteIcon}
                onClick={handleDelete}
            />
        </div>
    )
}