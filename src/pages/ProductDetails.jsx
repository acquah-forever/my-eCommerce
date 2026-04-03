import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { CartContext } from '../context/CartContext'

const ProductDetails = () => {
    const{ addToCart } = useContext(CartContext)
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

    if (!product) {
        return <h1>(Loading...)</h1>
    }


    return (
        <div className="flex justify-center gap-7 max-w-3xl  h-100 p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-80 w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-5">
                <h1 className="text-xl font-semibold text-gray-800">{product.name}</h1>
                <p className="text-lg text-sky-600 font-bold mt-2">£ {product.price}</p>
                <p className="text-gray-600 mt-3">{product.description}</p>
                <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"> Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails
