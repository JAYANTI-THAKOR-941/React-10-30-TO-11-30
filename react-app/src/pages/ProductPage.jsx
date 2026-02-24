
import React, { useEffect, useState } from 'react'
import withLoading from '../components/withLoading'
import Card from '../components/Card';
const ProductPage = () => {
    const ProductComponent = withLoading(Card);
   
     const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setProducts(["Iphone-17","MAC M4 Pro","Headphone","HP Laptop"]);
            setLoading(false);
        },3000)
    },[])
  return (
    <div>
        <h2>ProductPage</h2>
        <ProductComponent isLoading={loading} products={products} />
    </div>
  )
}

export default ProductPage