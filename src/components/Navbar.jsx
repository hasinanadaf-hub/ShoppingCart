import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link><br/><br/>
      <Link to="/products">Products</Link><br/><br/>
    </div>
  )
}

export default Navbar
