import React, { useState, createContext } from 'react'

export const CartContext = createContext(null)

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    // cartItems will consist of item and quantity
    // thus{id:1, quantity:2}

    function addToCart(productId) {
        
        const existing = cartItems.find((item) => item.id === productId);
        // check to see any existing cart items

        if (existing) {
            const currentQuantity = existing.quantity
            // if already existing,check for quantity of existing item

            const updatedCartItems = cartItems.map((item) =>
            item.id === productId ? { id: productId, quantity: currentQuantity + 1 } : item)
            // then look through the list of cart items and if the id = product.id
            // increase the current quantity + 1
            setCartItems(updatedCartItems)

        } else {

            const newItem = [...cartItems, { id: productId, quantity: 1 }]
            setCartItems(newItem);
        }

    }

    return <CartContext.Provider value={{cartItems,addToCart}}>{children}</CartContext.Provider>

}
