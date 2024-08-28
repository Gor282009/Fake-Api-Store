import React, { useState, useEffect } from 'react'
import "../App.css"

function Products() {
    const [data,setData] = useState([])
    useEffect(() => {
      fetch("https://fakestoreapi.com/products").
      then(response => response.json()).
      then(data => setData(data))
      console.log(data);
    },[])
  return (
    <div className='homeCont'>
        {
            data.map((product, index) => (
                <div key={index} className='home'>
                    <img src={product.image}   className='my-img'/>
                    <h2 className='title'>{product.title}</h2>
                    <p className='price'>Price: ${product.price}</p>
                    <button className="my-btn">Add To Card</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products