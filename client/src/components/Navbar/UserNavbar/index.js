import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useWindowDimensions from '../../../hooks/useWindowDimensions.js';

import { logout } from '../../../redux/actions/authAction.js';


import "./index.css"

const UserNavbar = () => {

    // eslint-disable-next-line
    const { width, height } = useWindowDimensions();
    const [toggleMenu, setToggleMenu] = useState(false);

    const isCoach = useSelector(state => state.userReducer.user)

    const dispatch = useDispatch();

    useEffect( () => {
        if (width < 800) {
            setToggleMenu(true);
        } 
        if (width >= 800) {
            setToggleMenu(false);
        }
    }, [width]);

    const onLogout = () => {

        dispatch( logout() )
    }


    if (!toggleMenu) {
        // console.log(isCoach)
        return (
            <div id="nav-wrapper">
                <div id="navbar">
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/profile"> Profile </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/" onClick={ () => onLogout()}> Logout </Link>
                        </li>
                    </ul>
                    <div className="nav-logo">
                        <h2 className="nav-brand"> EvolvU </h2>
                    </div>
                    <ul className="navbar-linklist">
                        <li className="navbar-link" >
                            <Link className="navitem" to="/"> </Link>
                        </li>
                        <li className="navbar-link" >
                            <Link className="navitem" to="/"> </Link>
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

export default UserNavbar;