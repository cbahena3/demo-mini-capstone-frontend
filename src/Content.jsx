import { useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { useEffect } from "react"

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("Handeling Index Products");
    axios("http://localhost:3000/products.json").then(response =>{
      console.log(response.data)
      setProducts(response.data)
    });
  }

  useEffect(handleIndexProducts, [])


  return (
    <div>
      <ProductsIndex products = {products}/>
    </div>
  )
}