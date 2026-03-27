import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../data/products'

const Home = () => {
  const products = getProducts()

  return (
    <div className='flex flex-col mt-20'>
      <div className='flex flex-col justify-center items-center space-y-5'>
        <h1 className='text-3xl font-semibold'>Welcome to Shophub</h1>
        <p className='text-sm'>Discover Amaxing Products at Grat Prices</p>
      </div>
      <div className='p-5 mb-5'>
        <h2 className='font-semibold text-2xl'>Our Products</h2>
      </div>
      <div className='grid space-x-7 space-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
          <div className='rounded-xl p-3 shadow-xl  space-x-5  px-5 space-y-5' key={product.id}>
            <div>
              <img className='rounded-2x' src={product.image} />
            </div>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>{product.name}</h3>
              <p className='text-sky-400 font-bold text-xl'>£ {product.price}</p>
            </div>
            <div className='flex space-x-3'>
              <Link className='bg-slate-500 text-white p-2 rounded text-sm'>View Details</Link>
              <button className='bg-sky-400 text-white p-2 rounded text-sm'>Add to Cart</button>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Home
