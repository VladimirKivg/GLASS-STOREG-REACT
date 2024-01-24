import React, {useContext, useState} from 'react';


import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../page/Home";
import Photos from "../page/Photos";
import Games from "../page/Games";
import Blog from "../page/Blog";
import {FaShoppingCart} from "react-icons/fa";
import CartItems from "./CartItems";
import Cart from "./Cart";
import {CartContext} from "../context/CartContext";

const Header = () => {
    console.log('rerend++++-----');

    const [searchText, setSerchText] = useState('');

    const [isCartOpen, setIsCartOpen] = useState(false);

    /*це вже будемо приймати на пряму в Cart*/
    /*const {cartItems} = useContext(CartContext)*/

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    }

    const handleText = (event) => {
        setSerchText(event.target.value)
    }

    const closeCart = () => {
        setIsCartOpen(!isCartOpen);

    }

    return (
        <>
            {/*Navbar - from react-bootstrap - це ве що в середені то з react-bootstrap*/}{/*bg - beck- ground, variant='light'-колір кнопки*/}

            <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
                <Container>


                    <NavbarBrand href='/'>

                        {/*коли щось дістаємо з папки public ми цю папку не вказуєм*/}
                        <img src="../images/rayban-logo.jpg"
                             height={'50'}
                             width={'50'}
                             alt={'Log'}
                        />
                        {/*<img src={_}

                    />*/}
                        {/* todo logo */}

                    </NavbarBrand>

                    {/*todo toggle*/}
                    {/*import for react-bootstrap , -erea-control='responsive-navbar-nav' - що це таке я не знаю*/}
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>


                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>

                            <Nav.Link to='/' as={NavLink}> Home </Nav.Link>
                            <Nav.Link to='/photos' as={NavLink}> Photos </Nav.Link>
                            <Nav.Link to='/games' as={NavLink}> Games </Nav.Link>
                            <Nav.Link to='/blog' as={NavLink}> Blog </Nav.Link>

                        </Nav>

                        <Form>

                            <div>

                                <FormControl
                                    inline='true'
                                    placeholder='Search...'
                                    type='text'
                                    className='me-sm-2'
                                    /*todo onChange={}*/
                                    onChange={handleText}

                                />

                            </div>


                            <Button
                                onClick={handleCartToggle}
                                style={{width: '3rem', height: '3rem', position: "relative"}}
                                    className={'rounded-circle'}
                                    variant="outline-secondary"

                            >

                                {/*це з реакт айтемс*/}
                                <FaShoppingCart/>


                                <div className='rounded-circle bg-danger'
                                     style={{
                                         color: 'red',
                                         width: '1.5rem',
                                         height: "1.5rem",
                                         position: 'absolute',
                                         transform: 'translate(25%, 25%)',
                                         bottom: 0,
                                         right: 0
                                     }}

                                ></div>

                            </Button>


                        </Form>

                    </NavbarCollapse>

                    <Cart
                        isCartOpen={isCartOpen}
                        closeCart={closeCart}
                        /*це вже будемо приймати на пряму в Cart*/
                       /* cartItems={cartItems}*/

                    />


                </Container>
            </Navbar>

            {/*Routes - обгорточний тег для всіх маршрутів*/}

            <Routes>
                {/*Route - це вже тег для кожного окремого маршрума */}
                <Route path='/' element={<Home/>}/>
                <Route path='/photos' element={<Photos searchText={searchText}/>}/>
                <Route path='/games' element={<Games/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>

        </>
    );
};

export default Header;




