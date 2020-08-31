import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: theme.spacing(10),
        marginLeft: theme.spacing(5)
    }
}));

export default function Filter({state, setState}) {
    const classes = useStyles();

    const handleFilter = (e) => {
        setState(e.target.value);
    } 
    
    return (
        <FormControl className={classes.root}>
            <InputLabel id="demo-customized-select-label">Filter</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={state}
                onChange={handleFilter}
                defaultValue={'all'}
            >
                <MenuItem value={'all'}>ALL</MenuItem>
                <MenuItem value={'complete'}>COMPLETE</MenuItem>
                <MenuItem value={'incomplete'}>INCOMPLETE</MenuItem>
            </Select>
        </FormControl>
    )
}