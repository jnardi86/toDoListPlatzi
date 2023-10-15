import React, { useContext } from 'react'
import './todoSearch.css'
import { TodoContext } from '../../toDoContext'

const TodoSearch = () => {

  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext);

  return (
    <div className='toDoSearch-container'>
      <input
        type="text"
        placeholder='Buscar tarea'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }} />
    </div>

  )
}

export default TodoSearch