import { useState, useEffect } from 'react'
import axios from 'axios'

export function OrdersIndex() {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    console.log('getting orders');
    axios.get("http://localhost:3000/orders.json").then(response => {
      console.log(response.data);
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])


  return (
    <div>
      <p>I am in orders index</p>
      {orders.map(order => (
        <div key={order.id}>
          <p>Order Id: {order.id}</p>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          Products in your order:
          {order.carted_products.map(cp => (
            <div key={cp.id}>
              <p>name: {cp.product.name}</p>
              <p>quantity: {cp.quantity}</p>
            </div>
          ))}
          < hr />
        </div>
      ))}
    </div>
  )
}