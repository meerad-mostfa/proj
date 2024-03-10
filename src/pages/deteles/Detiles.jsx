
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import style from './deteles.module.css'; 
function Detiles() {
    const[product1,setProduct]=useState([]);
    const[imag,setImage]=useState([]);
    const[reviews,setReviews]=useState([]);
    const getData = async ()=>{
      const urlParams= new URLSearchParams(window.location.search);
  const id=urlParams.get('id');
  const {data}= await axios.get(`https://ecommerce-node4.vercel.app/products/${id}`);
 setProduct(data.product);
 setImage(data.product.subImages);
 setReviews(data.product.reviews);
    };
    useEffect( ()=>{
        getData();
      } , [])
  return (
    <>

<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
{imag.map((e)=>
<div>
        <SwiperSlide><img src= {e.secure_url} /></SwiperSlide>
        </div>
)
}
      </Swiper>
<div className={style.detelesCard}>
<h2 className={style .detelesName}>{product1.name}</h2>
      <h2 className={style .detelesName}>discount= {product1.discount}</h2>
      <p className={style .detelesName}>description: {product1.description}</p>
      <h3 className={style .detelesName}>stock:{product1.stock}</h3>
      <h3 className={style .detelesName} >price={product1.price}</h3>
      <p className={style .detelesName}>finalPrice:{product1.finalPrice}</p>
</div>

     <h1 className={style.h1}>Here are some customer responses & reviews</h1>
{reviews.map((e1) =>
<div className={style.reviewsCard} >
    <p>_id:{e1._id}</p>
<p>rating:{e1.rating}</p>
<p>comment:{e1.comment}</p>
</div>
)}


    </>
  )
}

export default Detiles
