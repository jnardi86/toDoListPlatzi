import React from 'react'
import { BsTrash, BsFillCheckCircleFill, BsPencilFill } from "react-icons/bs";
import './TodoIcon.css'

const iconTypes = {
    "check": <BsFillCheckCircleFill size={20}/>,
    "delete": <BsTrash size={20}/>,
    "edit": <BsPencilFill size={20}/>
}

const TodoIcon = ({type, color, onClick}) => {
  return (
    <span
        className={`Icon-${type}`} 
        style={{color}}
        onClick={onClick}
    >
    {iconTypes[type]}
    </span>
  )
}

export default TodoIcon