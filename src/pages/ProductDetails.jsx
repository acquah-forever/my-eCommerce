import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const foundProduct = getProductById(id)

        if (!foundProduct) {
            navigate('/')
            return
        }
        setProduct(foundProduct)
    }, [id])


    return (
        <div>
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button className='cursor-pointer bg-sky-500 text-white p-2'>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetails
