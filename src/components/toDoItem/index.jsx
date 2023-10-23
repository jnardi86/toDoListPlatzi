import React, { useContext } from 'react';
import { TodoContext } from '../../toDoContext';
import CompleteIcon from '../toDoIcon/CompleteIcon';
import DeleteIcon from '../toDoIcon/DeleteIcon';
import ToDoEditForm from '../toDoEditForm';

import Modal from '../Modal';

// import { BsTrash, BsFillCheckCircleFill } from "react-icons/bs";

import './toDoItem.css'
import EditIcon from '../toDoIcon/EditIcon';

const TodoItem = ({ text, completed, onComplete, onDelete, toggleEditModal }) => {

    const {
        openModal,
    } = useContext(TodoContext);

    return (
        <div className='ToDoItem-container'>

            <li className='ToDoItem-container-li'>
                {/* <span onClick={onComplete} className={`Icon-check ${completed && "Icon-check--active"}`}
                >
                    <BsFillCheckCircleFill size={20} />
                </span> */}
                <CompleteIcon
                    completed={completed}
                    onComplete={onComplete}
                />
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                    {text}
                </p>
                {/* <span onClick={onDelete} className='Icon-trash Icon-delete'>
                    <BsTrash size={20} />
                </span> */}
                <EditIcon
                    toggleEditModal={toggleEditModal} />
                <DeleteIcon
                    completed={completed}
                    onDelete={onDelete}
                />
            </li>

        </div>

    )
}

export default TodoItem