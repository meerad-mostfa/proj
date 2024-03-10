import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './Products.module.css'; 
import { Link } from 'react-router-dom';

function Products() {
 
  const[product,setProduct]=useState([]);
  const getData = async ()=>{
    const urlParams= new URLSearchParams(window.location.search);
const id=urlParams.get('id');  
  const {data}= await axios.get(`https://ecommerce-node4.vercel.app/products/category/${id}`);
  setProduct(data.products);
  };
  useEffect( ()=>{
    getData();
  } , [])
 
  return (
    <>
      {product.map((ele) =>
    <div key={ele.id} className={style.productCard}> 
      <img src= {ele.mainImage.secure_url} className={style.productImage} />
      <h2 className={style.productName}>{ele.name}</h2>
      <h3 className={style.productName}>price={ele.price}</h3>
      <Link  to={`/Detiles?id=${ele.id}`} className={style.link}>ShowDetelis</Link>
      </div>
      
      ) 
      }
    </>
  )
}

export default Products


