import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';

const ProductDetails = () => {
    const {id}  = useParams();
    
    const [product,setProduct] = useState(null);
    const [error,setError] = useState('');
    
    useEffect(()=>{
    
        const fetchProduct = async()=>{
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json();
                setProduct(data);
            }
            catch(error){
                setError('Error:Failed to fetch product data.!!');
            }
        };
    
        fetchProduct();
    
     },[id])

 if(error) return <h2>Error:{error}</h2>
 if(!product) return null;
  return (
    <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <img src={product.image} alt="" />
    </div>
  )
}

export default ProductDetails