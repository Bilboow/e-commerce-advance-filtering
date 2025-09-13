import React from 'react'
import "../Recommended/Recommended.css"
import Button from '../componentt/Button';

const Recommended = ({handleClick}) => {
  return (
    <>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Button onhandleClick={handleClick} value="" title="All Products"/>
        <Button onhandleClick={handleClick} value="Nike" title="Nike"/>
        <Button onhandleClick={handleClick} value="Adidas" title="Adidas"/>
        <Button onhandleClick={handleClick} value="Puma" title="Puma"/>
        <Button onhandleClick={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
    </>
  )
}

export default Recommended;