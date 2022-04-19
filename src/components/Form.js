import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus, click, setClick}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !=="") {
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])}
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    
    const makeAllCompleted = (e) => {
      e.preventDefault();
      switch (click) {
        case 0:
          setClick(1)
          makeThemAllCompleted(e)
        break 
        case 1:
          setClick(0)
          makeThemAllUnCompleted(e)
        break 
        default:
          setClick(1)
          makeThemAllCompleted(e)
      }
    }

    const makeThemAllCompleted = (e) =>{ 
      e.preventDefault();
      setTodos(todos.map(todo =>  {
        if(todo.completed === false) {
          return {
            ...todo, completed: !todo.completed
          };
        }else{
          return todo
        };
        }))
      } 
      const makeThemAllUnCompleted = (e) =>{ 
        e.preventDefault();
         setTodos(todos.map(todo =>  {
           if(todo.completed === false) {
            return {
              ...todo, completed: !todo.completed
            };
           }else{
             return {
              ...todo, completed: !todo.completed
            };
           };
        }))
     }

    return(
        <div className = 'sortAndForm'>
        <button onClick={makeAllCompleted} className="sortButton" >Check All</button>
        <form>
        <input value={inputText} onChange={inputTextHandler} placeholder="What needs to be done?" type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      </div>
    );
}

export default Form;
