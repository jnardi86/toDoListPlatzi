import React from 'react'
import TodoIcon from './'

const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon
    type="delete"
    color="#000"
    onClick={onDelete }
    />
  )
}

export default DeleteIcon