import React from 'react'
import TodoIcon from './'

const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon
    type="delete"
    color="#d408d7"
    onClick={onDelete }
    />
  )
}

export default DeleteIcon