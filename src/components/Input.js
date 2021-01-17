import React from 'react';
import uuid from 'react-uuid';
import { TextField, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        marginLeft: theme.spacing(2),
        cursor: 'pointer',
    }
}));

export default function Input() {

    const classes = useStyles();
    
    const handleClick = (e) => {
    }

    const handleEnter = (e) => {
    }


    return (
        <div>
            <TextField
                    id="outlined-basic"
                    label="Write something you need to remember"
                    variant="outlined"
                    style={{ width: 600 }}
                    onKeyDown={handleEnter}
                    
                />
                <AddIcon
                    className={classes.addIcon}
                    style={{ fontSize: 56 }}
                    onClick={handleClick}
                />
        </div>
    )
}
