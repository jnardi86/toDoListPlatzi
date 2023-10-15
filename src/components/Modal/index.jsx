import React from 'react'
import reactDom from 'react-dom';
import './modal.css'


const Modal = ({children}) => {
  return reactDom.createPortal (
    <div className='modalBackground'>
        {children}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal