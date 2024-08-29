import React, { useState, useEffect } from "react";
import "../App.css";
function Products() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  return (
    <div className="homeCont">
      <button className="basket" onClick={() => {
       window.location.href = "http://localhost:3000/mybasket"
      }}>BAsket {count}</button>
      {data.map((product, index) => (
        <div className="box">
          <div key={index} className="home">
            <img src={product.image} className="my-img" />
            <h2 className="title">{product.title}</h2>
            <p className="price">Price: ${product.price}</p>
            <button
              className="my-btn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Add To Card
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
