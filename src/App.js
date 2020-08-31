import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {

  //texto del input
  const [text, setText] = useState('');

  //lista de todos
  const [list, setList] = useState([]);

  // value del filtro
  const [state, setState] = useState('');

  // lista filtrada
  const [filter, setFilter] = useState([]);

  // const [checked, setChecked] = useState(false);



  // useEffect(() => {
  //   handleFilter();
  // }, [state, list])

  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  // const handleFilter = () => {
  //   switch(state) {
  //     case 'complete':
  //       setFilter(list.filter(list => list.checked === true))
  //       break;
  //     case 'incomplete':
  //       setFilter(list.filter(list => list.checked === false))
  //       break;
  //     default:
  //       setFilter(list);
  //   }
  // }

  const handleClick = (e) => {
    if (text.length < 1) {
        e.preventDefault();
    } else {
        setList([
            ...list, {
                text: text,
                checked: false,
                id: uuid()
            }
        ])
        setText('')
    }
  }

  const handleCheckedChange = () => {
    
  }
  
  return (
    <div>
      <Form 
        state={state}
        setState={setState}
        text={text}
        setText={setText}
        list={list}
        setList={setList}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <TodoList
        list={list}
        filter={filter}
        handleCheckedChange={handleCheckedChange}
      />
    </div>
  )
}