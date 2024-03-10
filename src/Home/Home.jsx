import React from 'react'
import { useEffect, useState } from 'react'
import style from './home.module.css'; 
import axios from 'axios';
function Home() {
  const[product,setProduct]=useState([]);
  const getData = async ()=>{
    const {data}= await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9`);
    setProduct(data.categories);
  };
  useEffect( ()=>{
    getData();
  } , [])

  return (
    <>
      {product.map((ele) =>
    <div className={style.categoryCard} key={ele.id}> 
      <img src= {ele.image.secure_url} className={style.categoryImage} />
      <h2 className={style.categoryName}>{ele.name}</h2>

      </div>
      ) 
      }
    </>
  )
}

export default Home
