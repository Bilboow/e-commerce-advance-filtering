import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Product from './Product/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import "./index.css"

//Database
import products from './db/data'
import Card from './componentt/Card'

const App = () => {

  const [selectCategory,setSelectCategory] = useState(null);

  //--------------input filter-------------------------------------
  const[query,setQuery] = useState("");

  const handleInputChange =(event)=>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1)

  //--------------radio filter-------------------------------------
  const handleChange = (event)=>{
    setSelectCategory(event.target.value)
  }

  //--------------button filter-------------------------------------
  const handleClick = (event)=>{
    setSelectCategory(event.target.value)
  }

  function FilterData(products,selected,query) {
    let filterProducts = products
    // filtering input items
    if(query){
      filterProducts = filteredItems
    }

    //selected filter
    if(selected){
      filterProducts = filterProducts.filter(({category,title,color,
      newPrice,company})=> 
        category === selected || 
        color === selected||
        title=== selected || 
        company === selected|| 
        newPrice === selected);
    }

    return filterProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card key = {Math.random()}
        img ={img}
        title ={title}
        star = {star}
        reviews ={reviews}
        newPrice = {newPrice}
        prevPrice ={prevPrice}
       />
    ))
  }

  const result = FilterData(products,selectCategory,query)

  return (
    <>
      <Sidebar handleChange={handleChange} />   
      <Nav query ={query} handleInputChange ={handleInputChange} />
      <Recommended handleClick ={handleClick} />
      <Product result ={result} />
    </>
  )
}

export default App