import React from 'react'
import './toDoList.css'


const TodoList = ({children}) => {
  return (
  
    <div className='toDoList-container'>
        <ul className='toDoList-container--items'>
            {children}
        </ul>
    </div>

  )
}

export default TodoList