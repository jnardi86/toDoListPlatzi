import React, { useContext } from 'react'
import { TodoContext } from '../../toDoContext';
import './createToDoButton.css'

const CreateTodoButton = () => {

  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext);

  const toggleModal = () => { setOpenModal(!openModal) };

  return (
    <div className='toDoCreate-container'>
      <button
        onClick= {toggleModal}
        className={openModal ? 'rotateButton' : 'initialPosition'}
      >+</button>
    </div>
  )
}

export default CreateTodoButton