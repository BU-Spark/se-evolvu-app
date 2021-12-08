import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import useWindowDimensions from '../../hooks/useWindowDimensions.js'
import EvolvULogo from '../../images/EvolvULogo.png'
import { useHistory } from 'react-router';


import "./index.css"

const CustomNavbar = () => {

    // eslint-disable-next-line
    const { width, height } = useWindowDimensions()
    const [toggleMenu, setToggleMenu] = useState(false);
    const history = useHistory();

    useEffect( () => {
        if (width < 800) {
            setToggleMenu(true)
        } 
        if (width >= 800) {
            setToggleMenu(false)
        }
    }, [width])


    if (!toggleMenu) {
        return (
            <div id="nav-wrapper">
                <div id="navbar">
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/">Find a Coach </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/apply"> Become a Coach </Link>
                        </li>
                    </ul>
                    <div className="nav-logo">
                        <img id="navbar-logo" src={EvolvULogo} alt="EvolvU logo" width={"35%"} onClick={() => history.push("/")}/>
                    </div>
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/login"> Sign In </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/register"> Sign Up </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 

    return (
        <div id="nav-wrapper">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className="navitem" to="/"><img src={EvolvULogo} alt="EvolvU logo"  width={"35%"} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" animation="false">
                <Nav className="mr-auto">
                    <Nav>
                        <Link className="navitem" to="/"> Find a Coach </Link>
                    </Nav>
                    <Nav>
                        <Link className="navitem" to="/apply"> Apply as Coach </Link>
                    </Nav>
                    <Nav>
                        <Link className="navitem" to="/sign-in"> Sign In </Link>
                    </Nav>
                    <Nav>
                        <Link className="navitem" to="/sign-up"> Sign Up </Link>                
                    </Nav>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
    
}

export default CustomNavbar;