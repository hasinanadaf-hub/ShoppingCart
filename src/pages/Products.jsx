import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../components/ProductCard';
function Products() {
  const [products,setProducts]= useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data)
      console.log(data);
    });
  },[]);

  return (
    <div>
      <h2> Product</h2>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {products.map((item)=>{
          return(
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={item.id}>
          <ProductCard
            key ={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            />
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products
