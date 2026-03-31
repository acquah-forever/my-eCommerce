import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)


    return (
        <div>
            booty
        </div>
    )
}

export default ProductDetails
