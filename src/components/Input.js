import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        marginLeft: theme.spacing(2)
    }
}));

export default function Input({handleChange, handleClick, text}) {
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