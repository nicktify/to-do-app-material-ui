import React from 'react';
import Input from './Input';
import Filter from './Filter';

export default function Form({ 
    text,
    setText,
    filter,
    setFilter,
    handleChange,
    handleClick,
    completelist,
    setCompletelist }) {

    return (
        <div className="search-top">
            <p>TO DO LIST</p>
            <div className="add-text">
                <Input 
                    handleChange={handleChange}
                    handleClick={handleClick}
                    text={text}
                    setText={setText}
                    completelist={completelist}
                    setCompletelist={setCompletelist}
                />
                <Filter 
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
        </div>
    )
}