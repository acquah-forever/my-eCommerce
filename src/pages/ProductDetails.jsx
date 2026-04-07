import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { CartContext } from '../context/CartContext'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { addToCart, cartItems } = useContext(CartContext);

    useEffect(() => {
        const foundProduct = getProductById(id);

        if (!foundProduct) {
            navigate('/');
            return;
        }
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <h1>(Loading...)</h1>;
    }

    const productInCart = cartItems.find((item) => item.id === product.id);

    const amount = productInCart ? `(${productInCart.quantity})` : ''
    return (
        <div className='min-h-screen px-15 flex justify-center items-center relative bg-[url("https://cdn.pixabay.com/photo/2024/01/29/14/40/warehouse-8540045_1280.jpg")] bg-center bg-cover bg-no-repeat bg-fixed'>
            <div className='absolute inset-0 bg-black/30'></div>
            <div className="relative z-50 flex flex-col md:flex-row justify-center items-start md:items-center gap-7 max-w-6xl h-auto md:h-100 p-4 bg-slate-500/50 shadow-lg rounded-lg mx-auto">
                <div className="w-full h-100 md:w-1/2 md:h-100 overflow-hidden rounded-lg">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
                </div>
                <div className="w-full md:w-1/2 p-6 space-y-5">
                    <h1 className="text-2xl md:text-3xl text-white font-semibold">{product.name}</h1>
                    <p className="text-2xl md:text-3xl text-blue-300 font-bold mt-2">£ {product.price}</p>
                    <p className="text-white font-semibold text-lg md:text-xl mt-3">{product.description}</p>
                    <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"onClick={() => addToCart(product.id)}>Add to Cart {amount}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
