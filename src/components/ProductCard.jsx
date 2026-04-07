import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ product }) => {
    const { addToCart, cartItems } = useContext(CartContext)

    const productInCart = cartItems.find((item) => item.id === product.id)

    const amount = productInCart ? `(${productInCart.quantity})` : ''


    return (
        <div className='rounded-xl bg-slate-100/30 p-3 shadow-xl space-y-5 hover:scale-105 transition-transform duration-300'>
            <div className='flex justify-center'>
                <img className='rounded-2xl' src={product.image} alt={product.name} />
            </div>

            <div className='space-y-4'>
                <h3 className='text-xl text-white font-semibold'>{product.name}</h3>
                <p className='text-sky-400 font-bold text-xl'>£ {product.price}</p>
            </div>

            <div className='flex space-x-3'>
                <Link to={`/products/${product.id}`} className='bg-slate-500 text-white p-2 rounded text-sm'> View Details</Link>
                <button className='bg-sky-400 text-white p-2 rounded text-sm'onClick={() => addToCart(product.id)}>Add to Cart {amount}</button>
            </div>
        </div>
    )
}

export default ProductCard