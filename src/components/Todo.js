import React from 'react';
import { Checkbox } from '@material-ui/core';

export default function Todo({checked, setChecked, text}) {

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

    return (
            <div className="todo">
                <Checkbox 
                    color="primary"
                    checked={checked}
                    onChange={handleChange}
                />
                {text}
        </div>
    )
}
