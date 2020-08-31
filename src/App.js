import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [text, setText] = useState('');
  const [completelist, setCompletelist] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredlist, setFilteredlist] = useState([]);



  useEffect(() => {
    handleFilter();
  }, [filter, completelist])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  const handleFilter = () => {
    switch(filter) {
      case 'complete':
        setFilteredlist(completelist.filter(todo => todo.checked === true))
        break;
      case 'incomplete':
        setFilteredlist(completelist.filter(todo => todo.checked === false))
        break;
      default:
        setFilteredlist(completelist);
    }
  }

  return (
    <div>
      <Form 
        filter={filter}
        setFilter={setFilter}
        text={text}
        setText={setText}
        completelist={completelist}
        setCompletelist={setCompletelist}
        handleChange={handleChange}
      />
      <TodoList
        completelist={completelist}
        setCompletelist={setCompletelist}
        filteredlist={filteredlist}
      />
    </div>
  )
}