/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onCreateProduct(params, () => event.target.reset());
    window.location.href = "/"
  }

  const suppliersIndex = () => {
    console.log("hi from supplier")
    axios.get('http://localhost:3000/suppliers.json').then(response => {
      console.log(response.data);
      setSuppliers(response.data)
    })
  }
  

  useEffect(suppliersIndex, [])



  return(
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
          <p>Name: <input type="text" name="name"/></p>
          <p>Price: <input type="text" name="price"/></p>
          <p>Description: <input type="text" name="description"/></p>
          <p>Inventory: <input type="text" name="inventory"/></p>
          <p>Image: <input type="text" name="image_id"/></p>
          <select name="supplier" id="suppliers">
            {suppliers.map(supplier => (
             <option key={supplier.name}>{supplier.name}</option>
          ))}          
        </select>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}