import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductGallery = () => {
    const [products, setproducts] = useState([]);
     const API_URL = import.meta.env.VITE_Products_URL;
    const [productcount, setproductscount] = useState(0);
    const incrementCount=(data)=>{
        setproductscount((prev)=>prev+data);

    };


  const getAllProducts = async () => {
    try{
      const res = await axios.get(API_URL);
      console.warn(res);
      
      const prods = res.data;
      console.warn(prods);
      setproducts(prods);
      
    } catch(err){
      console.log(err.message);
    }
   

  };

  useEffect (() => {
    getAllProducts();
  }, []);
  return (
    <>
    <h1 className='text-3xl text-center'> selected Product {productcount}</h1>
      {/* PRODUCT GRID */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
            {products.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                owner="Abhishek"
                incrementCount={incrementCount}
              />
            ))}
          </div>
        ) : (
            <p className='text-3xl text-center'>No Product To Display</p>
        
  )}
  </>
  )

}



export default ProductGallery;