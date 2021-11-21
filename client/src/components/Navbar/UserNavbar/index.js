import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useWindowDimensions from '../../../hooks/useWindowDimensions.js';

import { logout } from '../../../redux/actions/authAction.js';
import { removeUser } from '../../../redux/actions/userAction.js';
import EvolvULogo from '../../../images/EvolvULogo.png';


import "./index.css"

const UserNavbar = () => {

    // eslint-disable-next-line
    const { width, height } = useWindowDimensions();
    const [toggleMenu, setToggleMenu] = useState(false);

    const coach = useSelector(state => state.userReducer.coach);
    const firstName = useSelector(state => state.userReducer.first_name);

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
        dispatch(logout());
        dispatch (removeUser());
    }


    if (!toggleMenu) {
        if (coach) {
            return (
                <div id="nav-wrapper">
                    <div id="coach-navbar">
                        <div className="nav-logo">
                            <img className="navbar-brand" src={EvolvULogo} alt="EvolvU logo" width={"35%"} />
                        </div>
                        <ul className="coach-nav-linklist">
                            <li className="navbar-link" >
                                <Link className="greeting-navitem" to="/"  disable> Hi Coach {firstName} </Link>
                            </li>
                            <li className="navbar-link" >
                                <Link className="navitem" to="/">Home</Link>
                            </li>
                            <li className="navbar-link" >
                                <Link className="navitem" to="/dashboard">Dashboard </Link>
                            </li>
                        </ul>
                        <ul className="navbar-linklist">    
                            <li className="navbar-link" >
                                <Link className="navitem" to="/" onClick={ () => onLogout()}> Logout </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        return (
            <div id="nav-wrapper">
                <div id="navbar">
                        <div className="nav-logo">
                            <img className="navbar-brand" src={EvolvULogo} alt="EvolvU logo" width={"35%"} />
                        </div>
                        <ul className="coach-nav-linklist">
                            <li className="navbar-link" >
                                <Link className="greeting-navitem" to="/" disable="true"> Hi {firstName} </Link>
                            </li>
                            <li className="navbar-link" >
                                <Link className="navitem" to="/">Home</Link>
                            </li>
                            <li className="navbar-link" >
                                <Link className="navitem" to="/dashboard">Dashboard </Link>
                            </li>
                        </ul>
                        <ul className="navbar-linklist">    
                            <li className="navbar-link" >
                                <Link className="navitem" to="/" onClick={ () => onLogout()}> Logout </Link>
                            </li>
                        </ul>
                </div>
            </div>
        )
    } 

    return (
        <div id="nav-wrapper">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link className="navitem" to="/"> <img className="navbar-brand" src={EvolvULogo} alt="EvolvU logo" width={"35%"}/> </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" animation="false">
                <Nav className="mr-auto">
                    <Nav>
                        <Link className="navitem" to="/"> Find a Coach </Link>
                    </Nav>
                    <Nav>
                        <Link className="navitem" to="/apply"> Become a Coach </Link>
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