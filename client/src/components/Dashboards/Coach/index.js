import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import CoachDash from './Dashboard/index.js';
import CoachCalendar from './Calendar/index.js';
import CoachProfileForm from './Profile/index.js';
import SessionHistory from './History/index.js';

import { IoNewspaperOutline } from 'react-icons/io5';
import { RiCalendarCheckFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { BsTextCenter } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';


import './index.css';

const CoachDashboard = () => {

    return (
        <div style={{ margin: '1rem'}}>
            <Tab.Container id="" defaultActiveKey="profile">
                <Row>
                    <Col sm={2} style={{ background: "#E1ECF7"}}>
                    <h5 style={{ paddingTop: "1rem"}}>My Evolv U</h5>
                    <Nav variant="pills" className="flex-column" style={{ textAlign: "center"}}>
                        <Nav.Item className="dashboard-nav-item">
                            <Nav.Link eventKey="dashboard" id="dashboard-nav-link">
                            {/* style={{ background: "#779ECC", color: "white", height: "10vh"}} */}
                                <div >
                                    <IoNewspaperOutline size={40}/>
                                </div>
                                Dashboard
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="calendar">
                            {/* style={{ background: "#779ECC", height: "12vh", width: "12vh"}} */}
                                <div >
                                    <RiCalendarCheckFill size={40}/><br/>
                                    Calendar
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="profile">
                                <div >
                                    <BsFillPersonFill size={40}/> <br/>
                                    Profile
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="session-history">
                                <div >
                                    <FaHistory size={40}/> <br/>
                                    Session History
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="payments">
                                <div >
                                    <FiCreditCard size={40}/> <br/>
                                    Payments & Payouts
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="forms">
                                <div >
                                    <BsTextCenter size={40}/> <br/>
                                    Forms
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="settings">
                                <div >
                                    <IoSettingsSharp size={40}/> <br/>
                                    Calendar
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ padding: "1rem"}}>
                            <Nav.Link eventKey="coach-profile">Coach James</Nav.Link>
                        </Nav.Item>
                        <Button>Logout</Button> 
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="dashboard">
                                <CoachDash/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="calendar">
                                <CoachCalendar/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile">
                                <CoachProfileForm/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="session-history">
                                <SessionHistory/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default CoachDashboard;