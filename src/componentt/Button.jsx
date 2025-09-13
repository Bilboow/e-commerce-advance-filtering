import React from 'react'

const Button = ({onhandleClick,value,title}) => {
  return (
    <button onClick={onhandleClick} value={value} className='btns'>{title}</button>
  )
};

export default Button