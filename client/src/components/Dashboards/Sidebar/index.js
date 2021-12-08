import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { IoNewspaperOutline } from 'react-icons/io5';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { BsTextCenter } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import './index.css'

const DashSidebar = () => {

    const sidebarRoutes = [
        {
            path: "/coach/dashboard",
            name: "Dashboard",
            component: <IoNewspaperOutline size={40}/>
        },
        {
            path: "/coach/calendar",
            name: "Calendar",
            component: <RiCalendarCheckFill size={40}/>
        },
        {
            path: "/coach/history",
            name: "Client & Session History",
            component: <FaHistory size={40}/>
        },
        {
            path: "/coach/packages",
            name: "Packages",
            component: <FiCreditCard size={40}/>
        },
        {
            path: "/coach/settings",
            name: "Settings",
            component: <IoSettingsSharp size={40}/>
        },
        {
            path: "/coach/inbox",
            name: "Inbox",
            component: <BsTextCenter size={40}/>
        },
    ]

    return(
        <div className="sidebar-container">
            <h5 style={{ paddingTop: "1rem"}}>My Evolv U</h5>
            <Nav variant="pills" className="flex-column" style={{ textAlign: "center"}}>
                {
                    sidebarRoutes.map(route => (
                        <Nav.Item id="dashboard-nav-item" key={route.path}>
                            <div id="dashboard-nav-link">
                                <Link id="dashboard-router-link" to={route.path}>
                                    <div >
                                        {route.component}
                                    </div>
                                    {route.name}
                                </Link>
                            </div>
                        </Nav.Item>
                    ))
                }
                <Button id="dashboard-coach-item">Logout</Button> 
            </Nav>
        </div>
    )
}

export default DashSidebar;