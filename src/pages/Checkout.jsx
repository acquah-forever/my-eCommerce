import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const { getCartItemsWithProducts, updateQuantity, removeFromCart  } = useContext(CartContext)

  const cartItems = getCartItemsWithProducts()

  return (
    <div className='p-7'>
      <h1 className='text-3xl font-semibold mb-10'>CheckOut</h1>
      <div className='p-10 rounded-lg shadow-2xl max-w-xl'>
        <h2 className='text-xl font-semibold'>Order Summary</h2>
        <br />
        {cartItems.map((item) => (
          <div className="flex items-center mb-4 gap-6 px-7 py-5 border rounded-2xl shadow-sm bg-white">
            <div className="w-24 h-24 shrink-0">
              <img className="w-full h-full object-cover rounded-xl" src={item.product.image} alt={item.product.name} />
            </div>

            <div className="flex flex-col flex-1 gap-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
              <p className="text-gray-500 text-lg"> £ {item.product.price}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className='flex space-x-3 items-center'>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border text-lg font-semibold hover:bg-gray-100 active:scale-95 transition"onClick={() => updateQuantity(item.id, item.quantity - 1)}> -</button>
                <span className="min-w-6 text-center font-medium">{item.quantity}</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border text-lg font-semibold hover:bg-gray-100 active:scale-95 transition"onClick={() => updateQuantity(item.id, item.quantity + 1)}> +</button>
              </div>
              <div>
                <p className='text-xl font-semibold'>£ {(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className='cursor-pointer p-2 text-white rounded bg-gray-400'onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        
      </div>

    </div>
  )
}

export default Checkout
