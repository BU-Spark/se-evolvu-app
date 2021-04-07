import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const CoachDash = () => {

    let times = ["12:00 PM", "3:00 PM", "5:00 PM", "6:00 PM"]
    let name = "John"

    useEffect( () => {

    })

    return (
        <div>
            <div style={{ textAlign: "left", paddingBottom: "10%"}}>
                <h2>Your Dashboard</h2>
            </div>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item style={{ color: "#373737", text: "white"}}>Today's Timetable</ListGroup.Item>
                        {times.map( (val) => (
                            <ListGroup.Item>Session {val}</ListGroup.Item>
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
                        <Col sm={3} style={{ background: "#F2F2F2", marginRight: "2rem"}}>
                            Time
                        </Col>
                        <Col style={{ background:"#E1ECF7"}}>
                            <div style={{ textAlign: "left"}}>
                                <p>Hello, Coach {name}!</p>
                                <p>Don't forget to check your inbox!</p>
                                <p>Make sure you have reviewed the <a href="blank">CDC safety guidelines</a> for COVID-19</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                
                
            </Row>
        </div>

    )
}

export default CoachDash;