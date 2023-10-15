import React from 'react'
import './toDoLoading.css'

const TodoLoading = () => {
  return (
    <div className='toDoLoading-container'>
        <span>
          <div className="toDoLoading-completeIcon skeleton"></div>
        </span>
        <span>
          <div className="toDoLoading-text skeleton"></div>
        </span>
        <span>
          <div className="toDoLoading-deleteIcon skeleton"></div>
        </span>
    </div>
  )
}

export default TodoLoading