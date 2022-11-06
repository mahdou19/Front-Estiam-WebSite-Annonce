import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/img.jpg"

export default function ProductItem({ product }) {
  return (
    <div className='product_card'>


        {/* On n'a pas d'image dans l'api des products */}
        {/* <img src={product.product_picture} alt='img'/> */} 
      
      <img src={logo} alt='img'/>

      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description.slice(0,50)}...</p>
      </div>
      <div className='name'>
        <h5>Publié par :<Link> {product.status.machine_name}test</Link></h5>
      </div>
    </div>
  );
}
