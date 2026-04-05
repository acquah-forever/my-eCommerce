import React, { useState, createContext } from 'react'
import { getProductById } from '../data/products';

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
            // increase the current quantity + 1 else leave item
            setCartItems(updatedCartItems)

        } else {

            const newItem = [...cartItems, { id: productId, quantity: 1 }]
            setCartItems(newItem);
        }
    }

    function getCartItemsWithProducts() {
        return cartItems.map(item => ({ ...item, product: getProductById(item.id) })).filter(item => item.product)
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId))

    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }

        setCartItems(cartItems.map((item) => item.id === productId ? { ...item, quantity } : item))

    }

    function getCartTotal() {
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id)
            // if product is not null, do calculation else default to zero
            return total + (product ? product.price * item.quantity : 0)
        }, 0)

        return total
    }

    function clearCart() {
        setCartItems([])
    }

    return <CartContext.Provider value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart
    }}> {children}
    </CartContext.Provider>

}
