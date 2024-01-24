import React from 'react';
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../curency/FormatCurrency";

const StoreItem = ({
                       item, addToCard,

                       removeFromCart, decreaseQuantity, increaseQuantity, cartItems
                   }) => {

    const {id, name, price, imgUrl} = item;



    /*    const quantity = 0;*/

    const cartItem = cartItems.find(cartItem => cartItem.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;
/*cartItem ? cartItem.quantity : 0*/

    return (<Card>

        <Card.Img
            variant='top'
            src={imgUrl}
            style={{objectFit: 'contain'}}
            height='400px'
            width={'400px'}
        />


        <Card.Body className={'d-flex-column '}>
            <Card.Title className={'d-flex justify-content-between align-items-baseline '}>


                <span className={'fs-4 '}>{name}</span>
                <span className={'ms-auto text-muted'}>{formatCurrency(price)}</span>
            </Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>

            <div>

                {quantity === 0 ? (

                    <Button className='w-100' variant="light" onClick={() => {
                        addToCard(item)
                    }}> Add</Button>) : (

                    <div className={'d-flex align-content-center'} style={{gap: ".5rem"}}>

                        <div className={'d-flex align-content-center justify-content-center'}>
                            <Button variant={'light'} onClick={() => {
                                increaseQuantity(item)
                            }}>+</Button>
                        </div>

                        <span>{quantity}</span>


                        <div>
                            <Button variant={'light'} onClick={() => {
                                decreaseQuantity(item)
                            }}>-</Button>

                        </div>


                        <Button variant={'secondary'} onClick={() => {
                            removeFromCart(item)
                        }}>Remove</Button>


                    </div>

                )

                }

            </div>

        </Card.Body>


    </Card>);
};

export default StoreItem;