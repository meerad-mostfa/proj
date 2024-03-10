import React from 'react'
import axios from 'axios';
import style from './Products1.module.css'; 
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
function Products1() {
    const[product,setProduct]=useState([]);
    const getData = async ()=>{
      const {data}= await axios.get(`https://ecommerce-node4.vercel.app/products`);
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

export default Products1
