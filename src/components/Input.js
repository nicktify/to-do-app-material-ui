import React, {useState} from 'react';
import uuid from 'react-uuid';
import { TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { createTodo } from '../redux/actions/index';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
    }
}));

const Input = ({createTodo}) => {

    const [input, setInput] = useState()

    const classes = useStyles();

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleCreateTodo = () => {
        createTodo({
            text: input,
            done: false,
            id: uuid(),
            editing: false
        });
        setInput('')
    }

    const handleClick = () => {
        handleCreateTodo()
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleCreateTodo();
    }

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
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Input);
