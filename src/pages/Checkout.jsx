import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Checkout = () => {
  const { getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)

  const cartItems = getCartItemsWithProducts()
  const total = getCartTotal()
  const empty = cartItems.length === 0

  function placeOrder() {
    if (empty) return
    alert('Successful Order')
    clearCart()
  }

  return (
    <div className='flex justify-center items-center min-h-screen relative bg-[url("https://cdn.pixabay.com/photo/2024/01/29/14/40/warehouse-8540045_1280.jpg")] bg-cover bg-center bg-fixed bg-no-repeat'>
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='relative z-50 p-4 sm:p-6 lg:p-7 max-w-6xl mx-auto'>
        <div className='mb-6 sm:mb-10 px-2 sm:px-3'><h1 className='text-2xl text-white sm:text-3xl font-semibold'>Checkout</h1></div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
          <div className='w-full lg:w-1/2 rounded-xl bg-slate-300/50'>
            <div className='w-full p-4 sm:p-6 lg:p-10 rounded-lg shadow-2xl'>
              <h2 className='text-lg text-white sm:text-xl font-semibold mb-4'>Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-4 sm:gap-6 p-4 sm:px-7 sm:py-5 border rounded-2xl shadow-sm bg-white">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                    <img className="w-full h-full object-cover rounded-xl" src={item.product.image} alt={item.product.name} />
                  </div>

                  <div className="flex flex-col flex-1 gap-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.product.name}</h3>
                    <p className="text-gray-500 text-sm sm:text-lg"> £ {item.product.price}</p>
                  </div>

                  <div className="flex flex-col items-start sm:items-center gap-2 w-full sm:w-auto">
                    <div className='flex space-x-3 items-center'>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border text-lg font-semibold hover:bg-gray-100 active:scale-95 transition" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className="min-w-6 text-center font-medium">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border text-lg font-semibold hover:bg-gray-100 active:scale-95 transition" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className='text-lg sm:text-xl font-semibold'> £ {(item.product.price * item.quantity).toFixed(2)}</p>
                    <button className='cursor-pointer px-3 py-1 text-sm text-white rounded bg-gray-400 w-full sm:w-auto' onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='w-full lg:w-1/2'>
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-4">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold"> Checkout Summary</h1>
              <div className='flex justify-between'>
                <span className="text-gray-500 text-base sm:text-lg font-semibold"> Subtotal</span>
                <span className="text-base sm:text-lg font-semibold text-gray-800">£{total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className="text-gray-500 text-lg font-semibold">Total</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">£{total.toFixed(2)}</span>
              </div>
              <button onClick={placeOrder} disabled={empty} className="disabled:bg-gray-400 w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"> Place Order</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Checkout