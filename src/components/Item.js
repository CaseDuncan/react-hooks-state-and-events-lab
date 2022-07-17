import React,{useState}from "react";

function Item({ name, category }) {
  const[incart, setCart]=useState(false)

  function addToCart(){
    setCart((incart)=>!incart)
  }
  const cartToggle =incart ? "Remove from cart": "Add to cart"
  const listClass= incart ? "in-cart" :"remove"
  return (
    <li className={incart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
        <button className={incart ? "in-cart" : "remove"} onClick={addToCart}>   {incart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
