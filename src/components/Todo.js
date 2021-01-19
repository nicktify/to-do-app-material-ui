import React, { useState } from 'react';
import {connect} from 'react-redux';
import { Checkbox, makeStyles } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styled from 'styled-components';

import {deleteTodo, editTodo} from '../redux/actions';

const styles = makeStyles(() => ({
    root: {
        height: '30px'
    },
    DeleteForeverIcon: {
        marginLeft: '10px',
        paddingTop: '12px'
    }
}))

const Text = styled.text`
    padding-top: 10px;
    font-size: 20px;
`

const Todo = ({id, text, checked, editing, editTodo, deleteTodo}) => {

    const handleChecked = () => {
        editTodo({
            id,
            text,
            checked: !checked,
            editing
        });
    }

    const handleDelete = () => {
        deleteTodo(id);
    }

    const classes = styles();

    return (
        <div className="todo">
            <Checkbox 
                className={classes.root}
                checked={checked}
                onChange={handleChecked}
            />
            <Text>
                {text}
            </Text>
            <DeleteForeverIcon 
                className={classes.DeleteForeverIcon}
                onClick={handleDelete}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        editTodo: (todo) => dispatch(editTodo(todo)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Todo)
