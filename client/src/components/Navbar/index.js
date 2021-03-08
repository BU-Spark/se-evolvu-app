import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import useWindowDimensions from '../../hooks/useWindowDimensions.js'

import "./index.css"

const CustomNavbar = () => {

    // eslint-disable-next-line
    const { width, height } = useWindowDimensions()
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect( () => {
        if (width < 768) {
            setToggleMenu(true)
        } 
        if (width >= 768) {
            setToggleMenu(false)
        }
    }, [width])


    if (!toggleMenu) {
        return (
            <div id="nav-wrapper">
                <div id="navbar">
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/"> Find a Coach </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/apply"> Apply as Coach </Link>
                        </li>
                    </ul>
                    <div className="nav-logo">
                        <h2 className="nav-brand"> EvolvU </h2>
                    </div>
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/sign-in"> Sign In </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/sign-up"> Sign Up </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 

    return (
        <div id="nav-wrapper">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className="navitem" to="/"> EvolvU </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
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