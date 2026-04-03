import React,{useState,useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const {getCartItemsWithProducts} = useContext(CartContext)

  const cartItems = getCartItemsWithProducts()

  return (
    <div>
      <h1>CheckOut</h1>
      <div>
        <h2>Order Summary</h2>
        {cartItems.map((items) => {
          <div></div>
        })}
      </div>
    </div>
  )
}

export default Checkout
