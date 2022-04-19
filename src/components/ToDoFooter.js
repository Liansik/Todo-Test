import React from 'react';

const ToDoFooter = ({itemLeft,todos,setTodos}) => {
    const deleteAllCompleted = () =>{
        setTodos(todos.filter(todo => todo.completed === false))
    }
    return(
        <div className='itemLeftCounter'>
            <span className='itemLeftCounter'>
                {itemLeft} items left
            </span>
            <button onClick={deleteAllCompleted} className="clearCompleted">Clear completed</button>
        </div>
    );
}

export default ToDoFooter;
