import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import DashCarousel from './Carousel/index.js';
import { useSelector } from 'react-redux';
import coachServices from '../../../../services/coachServices.js';
import BaseCalendar from '../../../BaseCalendar/index.js';
import SidebarWrapper from '../../Sidebar/CoachSidebar/SidebarWrapper/index';

const CoachDash = () => {

    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric"}));
    const [appointments, setAppointments] = useState([]);
    const name = useSelector(state => state.userReducer.first_name);
    const coachSlug = useSelector(state => state.authReducer.slug);

    const getCoachAppointments = async (date) => {
        try {
            const appointments = await coachServices.fetchAppointmentsOnDate(date, coachSlug);
            setAppointments(appointments);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCalendarNavigate = (date) => {
        getCoachAppointments(date.toLocaleDateString());
    }

    useEffect(() => {
        getCoachAppointments(currentDate);
    }, [])

    return (    
        <SidebarWrapper>
            <div style={{ textAlign: "left", paddingTop: "1rem"}}>
                <h2>Your Dashboard</h2>
            </div>
            <Row>
                <Col sm={6}>
                    <p style={{ textAlign: "center", padding: "0.5rem", margin: "0", fontWeight: 'bold'}}>Today's Sessions</p>  
                    <BaseCalendar 
                        appointments={appointments} 
                        handleNavigate={handleCalendarNavigate} 
                        views={["day"]} 
                        defaultView={"day"}
                        height={"50vh"}
                        showCoach={false}
                        />
                </Col>
                <Col>
                    <Row>
                        <Col sm={3} >
                            <div style={{ background: "#F2F2F2"}}>
                                <div style={{ padding: "1rem"}}>
                                    <p>{currentTime}</p>
                                    <p>{currentDate}</p>

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