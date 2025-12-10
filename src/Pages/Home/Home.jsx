import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import axios from'axios'

function Home() {
  const[products,setProducts]=useState([])
  const fetchProducts = async()=>{
   const response = await axios.get("https://693961ecc8d59937aa0791d2.mockapi.io/products")
setProducts(response.data)
  }

  useEffect(()=>{
  fetchProducts()

  },[])
  console.log(products);
  return (
    <>
    <Navbar/>
 
 {
  products.map((product)=>{
    return(
         <div key={product.id} className="card">
        <img src={product.productImage} alt="Product Image" />
        
        <div className="card-content">
            <div className="product-name">{product.Productname}</div>
            <div className="product-description">
               {product.productDescription}
            </div>
            <div>{product.productMaterial}</div>
        </div>
    </div>
    )
  })
 }
    </>
  )
}

export default Home