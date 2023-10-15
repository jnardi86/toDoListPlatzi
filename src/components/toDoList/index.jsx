import React from 'react'
import './toDoList.css'


const TodoList = ({children}) => {
  return (
  
    <div className='toDoList-container'>
        <ul>
            {children}
        </ul>
    </div>

  )
}

export default TodoList