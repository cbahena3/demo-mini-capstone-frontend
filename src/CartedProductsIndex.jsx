import axios from 'axios'
import {useState, useEffect} from 'react'
import Stripe from 'stripe'

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([])
  
  const getCartedProducts = () => {
    console.log('getting products')
    axios.get('http://localhost:3000/carted_products.json').then(response => {
      console.log(response.data)
      setCartedProducts(response.data)
    })
  }

  const createOrder = () => {
    console.log('creating order....')
    axios.post('http://localhost:3000/orders.json').then(response => {
      console.log(response.data);
      let stripe = Stripe(import.meta.env.VITE_SOME_KEY)
      stripe.checkout.sessions.create({        
        mode: 'payment',
        payment_method_types: [
          'card',
        ],
        success_url: `http://localhost:5173/`,
        cancel_url: `http://localhost:5173/`,
        line_items: [ // all arguments are required
          {
            price_data: {
              unit_amount: response.data.total * 100,
              currency: 'usd',
              product_data: {
                name: 'Test Product'
              },
            },
            quantity: 1,
          },
        ],
      }).then(session => {
        console.log('printing out the session')
        console.log(session.url)
        window.location.href = session.url
      })
      // window.location.href = `/orders/${response.data.id}`
      // window.location.href = "https://buy.stripe.com/test_8wMdTCetX7FxdNe28a"
    })
  }


  useEffect(getCartedProducts, [])
  
  return (
    <div>
      <p>This is the shopping cart</p>
      
      {cartedProducts.map(cartedProduct => (
        <div key={cartedProduct.id}>
          <p>name: {cartedProduct.product.name}</p>
          <p>price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          
          <hr />
        </div>        
      ))}
      <p><button onClick={createOrder}>Buy</button></p>
    </div>
  )
}