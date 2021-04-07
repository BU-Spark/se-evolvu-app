import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import CoachDash from './Dashboard/index.js'

const CoachDashboard = () => {

    return (
        <div style={{ margin: '1rem'}}>
            <Tab.Container id="" defaultActiveKey="dashboard">
                <Row>
                    <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="calendar">Calendar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="session-history">Session History</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="payments">Payment & Payouts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="forms">Forms</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="settings">Settings</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
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
                                What's in the brain, that ink may character, Which hath not figur'd to thee my true spirit? What's new to speak, what now to register, That may express my love, or thy dear merit? Nothing, sweet boy; but yet, like prayers divine, I must each day say o'er the very same; Counting no old thing old, thou mine, I thine, Even as when first I hallow'd thy fair name. So that eternal love in love's fresh case, Weighs not the dust and injury of age,                        
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile">
                                What's in the brain, that ink may character, Which hath not figur'd to thee my true spirit? What's new to speak, what now to register, That may express my love, or thy dear merit? Nothing, sweet boy; but yet, like prayers divine, I must each day say o'er the very same; Counting no old thing old, thou mine, I thine, Even as when first I hallow'd thy fair name. So that eternal love in love's fresh case, Weighs not the dust and injury of age,                        
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default CoachDashboard;