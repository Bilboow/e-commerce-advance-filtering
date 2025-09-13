import React from 'react'
import '../Product/Product.css'
import Card from '../componentt/Card';

const Product = ({result}) => {
  return (
    <>
    <section className="card-container">
      {result}
    </section>
    </>
  )
}

export default Product