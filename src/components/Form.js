import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { TextField, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import uuid from 'react-uuid';

export default function Form({ text, setText, list, setList, filter, setFilter }) {
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        setList([
            ...list, {
                text: text,
                checked: false,
                id: uuid()
            }
        ])
        setText('')
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className="search-top">
            <p>TO DO LIST</p>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    label="TYPE A TO DO"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    style={{ width: 500 }}
                />
                <AddIcon
                    style={{ fontSize: 56 }}
                    onClick={handleClick}
                />
                <FormControl className={''}>
                    <InputLabel id="demo-customized-select-label">Filter</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={filter}
                        onChange={handleFilter}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'all'}>ALL</MenuItem>
                        <MenuItem value={'complete'}>COMPLETE</MenuItem>
                        <MenuItem value={'incomplete'}>INCOMPLETE</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
