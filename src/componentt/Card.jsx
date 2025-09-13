import React from 'react'
import { FaStar } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";

const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <section className="card">
        <img className='card-image' src= {img} alt= {title}/>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star}{star}{star}{star}
            <span className="total-review">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsBagHeartFill className='bag-icon'/>
            </div>
          </section>

        </div>
     </section>
  )
}

export default Card