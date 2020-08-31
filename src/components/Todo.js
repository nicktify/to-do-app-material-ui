import React from 'react';
import { Checkbox } from '@material-ui/core';

export default function Todo({text, checked, handleCheckedChange}) {
    
    return (
            <div className="todo">
                <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={handleCheckedChange}
                />
                {text}
        </div>
    )
}
