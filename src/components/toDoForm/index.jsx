import React, {useContext, useState} from 'react'
import { TodoContext } from '../../toDoContext';
import './toDoForm.css'

const TodoForm = () => {

    const {
      setOpenModal,
      addTodo,
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (event)=>{
        event.preventDefault();
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Agregar nueva Tarea</label>
            <textarea 
            placeholder='Nueva tarea'
            value={newTodoValue}
            onChange={onChange}
            required
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button
                type='button' 
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                type='submit'
                className='TodoForm-button TodoForm-button--add'>
                    Agregar
                </button>
            </div>
        </form>
    )
}

export default TodoForm