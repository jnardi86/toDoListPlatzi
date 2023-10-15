import React from 'react'
import TodoIcon from './'

const CompleteIcon = ({completed, onComplete}) => {
  return (
    <TodoIcon
    type="check"
    color= { completed ? '#58b026' : '#d408d7'}
    onClick={onComplete}
    />
  )
}

export default CompleteIcon