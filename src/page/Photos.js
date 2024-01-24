import React, {useContext} from 'react';
import storeItem from "../date/items.json";
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {CartContext} from "../context/CartContext";
/**/
const Photos = ({searchText}) => {
    console.log('rerend+++')

    const {cartItems,setCartItems} = useContext(CartContext)


    // футкція добавлення в корзину

    const addToCard = (item) => {
// перевірити чи цей товар вже є в корзині
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem){
            const updatedCartItems = cartItems
                .map((cartIt)=> (cartIt.id === item.id ?
                    {...cartIt,quantity:cartIt.quantity+1}:cartIt));
            setCartItems(updatedCartItems)
        }else {
            setCartItems([...cartItems, {...item,quantity:1}])
        }
        console.log(cartItems);
    }

    // видалення

    const removeFromCart = (item) => {
        const updatedCartItems = cartItems
            .filter((cartItem) => cartItem.id !== item.id );
        setCartItems(updatedCartItems);
    }

    // мінус

    const decreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartIte=> (
            cartIte.id === item.id ? {...cartIte,quantity:cartIte.quantity-1}: cartIte));
        setCartItems(updatedCartItems);
        console.log(updatedCartItems);

    }

    // плюс

    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartIte=> (
            cartIte.id === item.id ? {...cartIte,quantity:cartIte.quantity+1}: cartIte));
        setCartItems(updatedCartItems);
        console.log(updatedCartItems);
    }


    // фільтер \\ розібратись з методом filter
    const filtereItems = storeItem.filter(item =>{
        return item.name.toLowerCase().includes(searchText.toUpperCase())
    })

    return (
        <div>
          <h1>Photos</h1>
            {console.log('rerend---')}
            <Row>
                {console.log('rerend')}
                {/* фільтер*/}
                {filtereItems.map(item=>(

                    <Col key={item.id}>
                        <StoreItem
                        item={item}
                        addToCard={addToCard}

                        removeFromCart={removeFromCart}
                        decreaseQuantity={decreaseQuantity}
                        increaseQuantity={increaseQuantity}
                        cartItems={cartItems}
                        // todo передати весь функціонал

                        />
                    </Col>
                ))}

            </Row>


        </div>
    );
};

export default Photos;