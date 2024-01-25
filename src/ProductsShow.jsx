/* eslint-disable react/prop-types */
import axios from "axios";

export function ProductsShow(props) {
  const addToCart = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post('http://localhost:3000/carted_products.json', params).then(response => {
      console.log(response.data)
      props.onClose()
    })
  }
  
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>ID: {props.product.id}</p>

      <form onSubmit={addToCart}>
        <div>
          <input name="product_id" type="hidden" defaultValue={props.product.id}   />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button type="submit" >Add To Cart</button>
      </form>

    </div>
  );
}