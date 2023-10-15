import React, { useContext } from 'react';
import './toDoCounter.css'
import { TodoContext } from '../../toDoContext';


const TodoCounter = () => {

  const { 
    toDosComplete,
    totalTodos, 
  } = useContext(TodoContext);

  return (
    <div className='toDoCounter-container'>
        <div>
          {toDosComplete === totalTodos ? (
            <h2>No hay tareas pendientes</h2>
          ) : (
            <h1>
              Completaste <span>{toDosComplete}</span> de <span>{totalTodos}</span> Tareas
            </h1>
          )}
        </div>
    </div>
  );
};

export default TodoCounter