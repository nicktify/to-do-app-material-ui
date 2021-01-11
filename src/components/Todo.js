import React, { useState } from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import uuid from 'react-uuid';

const styles = makeStyles((theme) => ({
    deleteIcon: {
        marginLeft: theme.spacing(2),
        fontSize: 30,
        height: 40,
        cursor: 'pointer'
    }
}))

export default function Todo({text, checked, todo, completelist, setCompletelist, editing}) {

    const [editedText, setEditedText] = useState(text);

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
        setCompletelist(completelist.map(todo => {
            if (todo.text === text) {
                let newTodo = todo;
                newTodo.editing = true;
                return newTodo
            }
            return todo;
        }))
    }

    const handleEditing = (e) => {
        console.log(e)
        setEditedText(e.target.value)
        /*setCompletelist(completelist.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    editing: !todo.editing,
                    text: editedText
                }
            }
        }))*/
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            if (text < 1) {
                e.preventDefault();
            } else {
                 setCompletelist(completelist.map(todo => {
                    if (todo.editing === true) {
                        let newTodo = todo;
                        newTodo.text = editedText;
                        newTodo.editing = false;
                        return newTodo
                    }
                    return todo;
                }))
            }
        }
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
                style={{
                    marginRight: '30px',
                    display: 'flex'
                }}
            >
            {(!editing) 
                ? text 
                :   <input 
                        autoFocus
                        value={editedText}
                        onChange={handleEditing}
                        onKeyDown={handleEnter}
                        style={{
                            margin: 'auto',
                            fontFamily: 'inherit',
                            fontSize: '30px'
                        }}
                    />
            }
            </div>
            {(!editing)
                ?   <DeleteForeverIcon 
                        className={classes.deleteIcon}
                        onClick={handleDelete}
                    />
                :  
                    <p
                        style={{marginLeft: '10px;'}}
                    >Press Enter key to save</p>
            }
            
        </div>
    )
}
