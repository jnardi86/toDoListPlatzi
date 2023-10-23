import React, {useContext, useState} from 'react';
import { TodoContext } from '../../toDoContext';
import './toDoEditForm.css'

const ToDoEditForm = () => {

    const {
        todos,
        setOpenModal,
        updateTodo,
    } = useContext(TodoContext);

    const [editedTodoValue, setEditedTodoValue] = useState(todos.text);

    const onSave = (event) => {
        event.preventDefault();
        updateTodo(editedTodoValue);
        onCancel();
    };

    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    };

    const onChange = (event) => {
        setEditedTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSave}>
            <label>Editar Tarea</label>
            <textarea
                placeholder='Tarea editada'
                value={editedTodoValue}
                onChange={onChange}
                required
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Guardar Cambios
                </button>
            </div>
        </form>
    )
}

export default ToDoEditForm