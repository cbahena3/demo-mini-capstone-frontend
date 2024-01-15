import { useState } from "react"
import { ProductsIndex } from "./ProductsIndex"
import axios from "axios"
import { useEffect } from "react"
import { ProductsNew } from "./ProductsNew"
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup"
import { Login } from "./Login"
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow"
import { CartedProductsIndex } from "./CartedProductsIndex"

export const Content = () => {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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

  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };
    
  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  useEffect(handleIndexProducts, [])
  
  return (
    <div className="container">
    <Routes>
      <Route path="/signup" element={< Signup />} />
      <Route path="/login" element={< Login />} />
      <Route path="/product/new" element={<ProductsNew onCreateProduct ={handleCreateProduct} />}/>
      <Route path="/cart" element={< CartedProductsIndex />} />
    </Routes>
      <ProductsIndex products = {products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
      <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} />
      </Modal>
    </div>
  )
}