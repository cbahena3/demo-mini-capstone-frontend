import { useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { useEffect } from "react"
import { ProductsNew } from "./ProductsNew"

export const Content = () => {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("Handeling Index Products");
    axios.get("http://localhost:3000/products.json").then(response =>{
      console.log(response.data)
      setProducts(response.data)
    });
  }
  
  const handleCreateProduct = (params, successCallback) => {
    console.log("Handling Create Product", params);
    axios.post("http://localhost:3000/products.json", params).then(response => {
    setProducts([...products, response.data]);
    successCallback();
    })
  }

  useEffect(handleIndexProducts, [])
  
  return (
    <div className="container">
      <ProductsNew onCreateProduct = {handleCreateProduct} />
      <ProductsIndex products = {products}/>
    </div>
  )
}