import React from 'react';
import { Link } from 'react-router-dom';

import "./index.css"

const Navbar = () => {

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

export default Navbar;