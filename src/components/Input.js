import React from 'react';
import uuid from 'react-uuid';
import { TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        marginLeft: theme.spacing(2)
    }
}));

export default function Input({completelist, setCompletelist, handleChange, text, setText}) {

    const handleClick = (e) => {
        if (text < 1) {
           e.preventDefault();
        } else {
            setCompletelist([
                ...completelist, {
                    text: text,
                    checked: false,
                    id: uuid()
                }
            ])
            setText('')
        }
      }

    const classes = useStyles();

    return (
        <div>
            <TextField
                    id="outlined-basic"
                    label="TYPE A TO DO"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    style={{ width: 500 }}
                />
                <AddIcon
                    className={classes.addIcon}
                    style={{ fontSize: 56 }}
                    onClick={handleClick}
                />
        </div>
    )
}