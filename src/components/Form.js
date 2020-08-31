import React from 'react';
import Input from './Input';
import Filter from './Filter';

export default function Form({ text,
    state,
    setState,
    handleChange,
    handleClick }) {

    return (
        <div className="search-top">
            <p>TO DO LIST</p>
            <div className="add-text">
                <Input 
                    handleChange={handleChange}
                    handleClick={handleClick}
                    text={text}
                />
                <Filter 
                    state={state}
                    setState={setState}
                />
            </div>
        </div>
    )
}