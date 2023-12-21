/* eslint-disable react/prop-types */



export const ProductsIndex = (props) => {
  return(
    <div>
      <h1>Gym Essentials</h1>
      {props.products.map(product => (
        <div key={product.id}>
          <h2>Product: {product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Inventory: {product.inventory}</p>
          <p>Supplier ID: {product.supplier_id}</p>
          <img src={product.image_id} alt="error" />
        </div>
      ))}
    </div>
  );
}