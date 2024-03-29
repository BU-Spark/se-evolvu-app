import React, { useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import DashCarousel from './Carousel/index.js';
import { useSelector } from 'react-redux';

import SidebarWrapper from '../../Sidebar/SidebarWrapper/index.js';

const CoachDash = () => {

    let times = [("12:00 PM", 1), ("3:00 PM", 2), ("5:00 PM",3), ("6:00 PM",4)]
    const name = useSelector(state => state.userReducer.first_name)

    useEffect( () => {

    })

    return (
        <SidebarWrapper>
            <Alert style={{ marginTop: "30px"}} variant="danger">Note: Not much functionality has been added to the dashboards. Only the frontend has been worked on.</Alert>
            <div style={{ textAlign: "left", paddingTop: "1rem"}}>
                <h2>Your Dashboard</h2>
            </div>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item style={{ background: "#373737", color: "white", textAlign: "left"}}>Today's Timetable</ListGroup.Item>
                        {times.map( (val, idx) => (
                            <ListGroup.Item key={idx} style={{ marginTop: "1rem", border: "none", background: "#F2F2F2", color: "#779ECC"}}>Session {val}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <hr/>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <Button variant="dark"> Edit Events </Button>
                        <Button variant="dark"> Set Reminder </Button>
                    </div>
                    
                </Col>
                <Col>
                    <Row>
                        <Col sm={3} >
                            <div style={{ background: "#F2F2F2"}}>
                                <div style={{ padding: "1rem"}}>
                                    <p>Time</p>
                                    <p>Day</p>
                                    <p>Year</p>

                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: "left", background:"#E1ECF7" }}>
                                <div style={{ padding: '1rem'}}>
                                    <h5>Hello, Coach {name}!</h5>
                                    <p>Don't forget to check your inbox!</p>
                                    <p>Make sure you have reviewed the <a href="blank">CDC safety guidelines</a> for COVID-19</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "2rem"}}>
                        <Col>
                            <p style={{ background: "#E1ECF7", textAlign: "left", padding: "0.5rem", margin: "0"}}>Today's Session</p>
                            <DashCarousel/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: "4rem"}}>
                <Col sm={4}>
                    <div>
                        <div style={{ background: "#E1ECF7", height: "15vh", padding: "1rem"}}>
                        <h5>Wellness Reminder:</h5>
                            Give yourself some silence
                        </div>
                    </div>
                </Col>
                <Col>
                    <div style={{ background: "#E1ECF7"}}>
                        <h5 style={{ padding: "1rem"}}>Tips on Securing Clients</h5>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem"}}>
                            <div style={{ height: "15vh"}}>
                                Respond Quickly
                            </div>
                            <div style={{  height: "15vh"}}>
                                Respond Often
                            </div>
                            <div style={{ height: "15vh"}}>
                                Be Authentic
                            </div>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </SidebarWrapper>

    )
}

export default CoachDash;