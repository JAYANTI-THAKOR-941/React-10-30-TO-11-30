import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {


    const navigate = useNavigate();

 const [products,setProducts] = useState([]);
 const [error,setError] = useState('');

 useEffect(()=>{

    const fetchProducts = async()=>{
        try{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            setProducts(data);
        }
        catch(error){
            setError('Error:Failed to fetch product data.!!');
        }
    };

    fetchProducts();

 },[])

 if(error) return <h2>{error}</h2>
  return (
    <div>
        {
            products.map((product)=>(
                <div className="product-card" key={product.id}>
                    <h3>{product.title}</h3>
                    <button onClick={()=>navigate(`/services/${product.id}`)}>View Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products