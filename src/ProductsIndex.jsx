/* eslint-disable react/prop-types */
import { useState } from "react";


export const ProductsIndex = (props) => {
  const [searchFilter, setSearchFilter] = useState("");


  return(
    <div>
      <h1>Gym Essentials</h1>
      Search filter: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      
      {props.products.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())).map(product => (
       <div key = {product.id} className="row row-cols-1 row-cols-md-1 g-4">
          <div className="col">
            <div className="card">
              <img src={product.image_id} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <img width="300px" src={product.images[0] && product.images[0].url} />
                <p className="card-text">Inventory: {product.inventory}</p>
                <p className="card-text">Supplier ID: {product.supplier_id}</p>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">{product.description}.</p>
                <button onClick={() => props.onShowProduct(product)}>More info</button>
              </div>
            </div>
          </div>
        </div>

        
      ))}
    </div>
  );
}