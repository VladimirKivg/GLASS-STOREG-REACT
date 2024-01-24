import {createContext, useState} from "react";
import useLocalStorege from "../hooks/useLocalStorege";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cartItems,setCartItems] = useLocalStorege(
        'shopping-cart',
        [])

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}