import React, {useState} from 'react';
import uuid from 'react-uuid';
import { TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createTodo, filterTodos } from '../redux/actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
    }
}));

const Input = ({createTodo, filterTodos}) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleCreateTodo = () => {
        createTodo({
            id: uuid(),
            text: input,
            checked: false,
            editing: false
        });
        filterTodos('')
        setInput('');
    }

    const handleClick = () => {
        handleCreateTodo();
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleCreateTodo();
    }


    const classes = useStyles();

    return (
        <div>
            <TextField
                    id="outlined-basic"
                    label="Write something you need to remember"
                    variant="outlined"
                    style={{ width: 600 }}
                    onKeyDown={handleEnter}
                    value={input}
                    onChange={handleInputChange}
                />
                <AddIcon
                    className={classes.addIcon}
                    style={{ fontSize: 56 }}
                    onClick={handleClick}
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
        createTodo: (todo) => dispatch(createTodo(todo)),
        filterTodos: (status) => dispatch(filterTodos(status))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Input);
