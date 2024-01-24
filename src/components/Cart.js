import React, {useContext} from 'react';
import CartItems from "./CartItems";
import {CartContext} from "../context/CartContext";
import {Offcanvas, Stack} from "react-bootstrap";
import storeItem from "../date/items.json";
import {formatCurrency} from "../curency/FormatCurrency";

const Cart = ({isCartOpen,closeCart}) => {

    const {cartItems, setCartItems} = useContext(CartContext);

    return (

            <Offcanvas show={isCartOpen} onHide={closeCart} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>


                    <Stack gap={3}>


            {cartItems.map(item=>(
                <CartItems
                key={item.id}
                {...item}
                cartItems={cartItems}
                setCartItems={setCartItems}
                />
            ))}

                        {/*<div>total</div>*/}

<div className={'ms-auto fw-bold fs-5'}>
    Total{' '}
    { formatCurrency(
        cartItems.reduce((total, cartItem)=>{
         const item = storeItem.find(item => item.id === cartItem.id)
         return total + (item?.price || 0 ) * cartItem.quantity;
     },0)
    ) }
</div>


                    </Stack>


                </Offcanvas.Body>
            </Offcanvas>

    );
};

export default Cart;