import React from 'react'
import TodoIcon from './'

const CompleteIcon = ({completed, onComplete}) => {
  return (
    <TodoIcon
    type="check"
    color= { completed ? '#032601' : '#000'}
    onClick={onComplete}
    />
  )
}

export default CompleteIcon