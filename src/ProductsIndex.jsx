/* eslint-disable react/prop-types */

export const ProductsIndex = (props) => {
  return(
    <div>
      <h1>Gym Essentials</h1>
      {props.products.map(product => (
       <div key = {product.id} className="row row-cols-1 row-cols-md-1 g-4">
          <div className="col">
            <div className="card">
              <img src={product.image_id} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
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