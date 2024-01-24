import React from 'react';
import storeItems from "../date/items.json";
import {Button, Offcanvas, Stack} from "react-bootstrap";
import {formatCurrency} from "../curency/FormatCurrency";

const CartItems = ({id, quantity, cartItems, setCartItems}) => {

    const item = storeItems.find(item => item.id === id);
    if (item == null) return null;

    // removeFromCart ()
    const removeFormCart = (id) => {
        /*виявляється можна зробити копі того що зберігається
        * в useState просто написавши туди що завгодно як в прикладі нижче*/
        setCartItems(currentItems  => {
            return currentItems.filter(el => el.id !== id)
        })
    }


    return (
        <div>


            <Stack direction={'horizontal'} className={'d-flex align-items-center'}>
                <img
                src={item.imgUrl}

                style={{width:'90px', height: '80px', objectFit:'cover'}}

                />

                <div className={'me-auto'}>
                    <div>
                        {item.name}{" "}
                        {quantity > 1 && (
                            <span className={'text-muted' } style={{fontSize:'.7rem'}}>
                                x{quantity}
                            </span>
                        )}
                    </div>

                    <div className={'text-muted' } style={{fontSize:'.8rem'}}>
                        {formatCurrency(item.price)}
                    </div>




                </div>

                <div>
                    {formatCurrency(item.price * quantity)}
                </div>

                <Button variant="outline-danger" size={"sm"}
                onClick={() => removeFormCart(item.id)}
                >
                    &times;
                </Button>

            </Stack>


        </div>
    );
};

export default CartItems;