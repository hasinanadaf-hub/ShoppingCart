import React from 'react'

function ProductCard({ title, price, image }) {
  return (
   <div class="container mt-5">
    <div class="card" style="width: 18rem;">
        <img src={image} class="card-img-top" alt="Product Image"/>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
    </div>
</div>
   
//    <div>
//         <img src={image} width="100" />
//      <h3>{title}</h3>
//      <p>₹{price}</p>  
//     </div>
  )
}

export default ProductCard
