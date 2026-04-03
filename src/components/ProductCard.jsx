import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ product }) => {
    const {addToCart,cartItem} = useContext(CartContext)

    return (
        <div className='rounded-xl p-3 shadow-xl space-x-5 px-5 space-y-5 hover:scale-105 transition-transform duration-300'>
            <div>
                 <img className='rounded-2x' src={product.image} alt={product.name} />
            </div>
            <div className='space-y-4'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-sky-400 font-bold text-xl'>£ {product.price}</p>
            </div>
            <div className='flex space-x-3'>
                <Link to = {`/products/${product.id}`} className='bg-slate-500 text-white p-2 rounded text-sm'>View Details</Link>
                <button className='bg-sky-400 text-white p-2 rounded text-sm'onClick={() => addToCart(product.id)}>Add to Cart</button>
                

            </div>
        </div>

    )
}

export default ProductCard