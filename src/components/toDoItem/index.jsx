import React from 'react';
import CompleteIcon from '../toDoIcon/CompleteIcon';
import DeleteIcon from '../toDoIcon/DeleteIcon';

// import { BsTrash, BsFillCheckCircleFill } from "react-icons/bs";

import './toDoItem.css'

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
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
                <DeleteIcon
                    completed={completed}
                    onDelete={onDelete}
                />
            </li>

        </div>

    )
}

export default TodoItem