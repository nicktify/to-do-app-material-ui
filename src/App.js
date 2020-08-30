import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <Form 
        text={text}
        setText={setText}
        list={list}
        setList={setList}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        text={text}
        list={list}
        setList={setList}
      />
    </div>
  )
}
