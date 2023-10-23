import React, { useContext } from 'react'
import { TodoContext } from '../../toDoContext';
import Modal from '../Modal';
import ToDoEditForm from '../toDoEditForm';
import TodoIcon from '.'

const EditIcon = () => {

    const {
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    const toggleEditModal = () => { 
        setOpenModal(!openModal) 
        console.log("modal abierto");
    };

    return (
        <div>
            <TodoIcon
                type="edit"
                color="#000"
                onClick={toggleEditModal}
            />
            {openModal && (
                <Modal>
                    Modal
                </Modal>
            )}
        </div>
    )
}

export default EditIcon