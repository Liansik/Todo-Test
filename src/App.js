import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import ToDoList from './components/TodoList'
import ToDoFooter from './components/ToDoFooter'


function App() {

  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [itemLeft, setItemLeft] = useState('0')
  const [click, setClick] = useState(0)

  //Use effect
  useEffect(() => {
    filterHandler()
  }, [todos, status])

   useEffect(() => {
     itemCounter()
   }, [todos])

  //Functions

  const itemCounter = () => {
    setItemLeft(todos.filter(todo => todo.completed === false).length)
  }
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
  
        break;
        default:
          setFilteredTodos(todos)
        break;
    }
  }
  
  return (
    <div className="App">
      <header> 
        <h1>To Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
        setStatus={setStatus}
        click={click} 
        setClick={setClick}
      />
      <ToDoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
        setInputText={setInputText}
      />
      <ToDoFooter 
        itemLeft={itemLeft}  
        todos={todos} 
        setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
