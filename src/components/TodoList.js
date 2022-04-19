import React from 'react'
import Todo from './Todo'

const ToDoList = ({todos, setTodos, filteredTodos, setInputText}) => {

    return (
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
              <Todo 
                setTodos={setTodos} 
                setInputText = {setInputText} 
                todo={todo} 
                todos={todos} 
                key={todo.id} 
                text={todo.text}
              />  
            ))}
        </ul>
    </div>
    )
}

export default ToDoList