import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  // call function for getProducts to map through
  const products = getProducts()

  return (
    <div className='flex flex-col mt-20'>
      <div className='flex flex-col justify-center items-center space-y-5'>
        <h1 className='text-3xl font-semibold'>Welcome to Shophub</h1>
        <p className='text-sm'>Discover Amaxing Products at Greate Prices</p>
      </div>
      <div className='p-5 mb-5'>
        <h2 className='font-semibold text-2xl'>Our Products</h2>
      </div>
      <div className='grid space-x-7 space-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
