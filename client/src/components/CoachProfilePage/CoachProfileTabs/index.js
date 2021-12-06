import React, { useState } from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import { RiComputerLine } from 'react-icons/ri';
import { IoPersonCircleOutline } from 'react-icons/io5';

const CoachProfileTabs = ({
    careerExperience,
    credentials,
    sessionDescription
}) => {

    const [key, setKey] = useState('experience');

    return (
        <Tabs
            id="coach-profile-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            fill
            >
            <Tab eventKey="experience" title="Experience">
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Career Experience</h4>
                    <p>{careerExperience}</p>
                </div>
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Credentials</h4>
                    <p>{credentials}</p>
                </div>
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Specialities/Focus</h4>
                    <p>{sessionDescription}</p>
                                
                </div>
            </Tab>
            <Tab eventKey="snapshots" title="Snapshots">
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Career Experience (Snapshot) </h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. </p>
                </div>
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Credentials (Snapshot) </h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. </p>
                </div>
                <div className="coach-profile-experience-desc">
                    <h4 style={{ color: '#FFB347'}}>Specialities/Focus (Snapshot) </h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. </p>
                                
                </div>
            </Tab>
            <Tab eventKey="bookingOptions" title="Booking Options">
                <div style={{ padding: '1rem', textAlign: 'left'}}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '1rem'}}>
                        <div style={{ width: '75%'}}>
                            <h4 style={{ color: '#FFB347'}}>Trial Session</h4>
                            <RiComputerLine size={30}/> Remote Training
                            <p style={{ paddingTop: '1rem'}}>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. 
                            </p>
                        </div>
                        <div style={{ textAlign: "center", padding: '1rem'}}>
                            <h5>$40</h5>
                            <p> /session <br/> + one-time fees</p>
                            <Button>
                                Book Now
                            </Button>    

                        </div>  
                    </div>
                    <div style={{ display: 'flex', margin: '1rem'}}>
                        <div style={{ width: '75%'}}>
                            <h4 style={{ color: '#FFB347'}}>Standard Session</h4>
                            <IoPersonCircleOutline size={30}/> In-Person Training
                            <p style={{ paddingTop: '1rem'}}>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. 
                            </p>
                        </div>
                        <div style={{ textAlign: "center", padding: '1rem'}}>
                            <h5>$55</h5>
                            <p> /session <br/> + one-time fees</p>
                            <Button>
                                Book Now
                            </Button>    

                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '1rem'}}>
                        <div style={{ width: '75%'}}>
                            <h4 style={{ color: '#FFB347'}}>Premium Session</h4>
                            <IoPersonCircleOutline size={30}/> In-Person Training
                            <p style={{ paddingTop: '1rem'}}>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. 
                            </p>
                        </div>
                        <div style={{ textAlign: "center", padding: '1rem'}}>
                            <h5>$80</h5>
                            <p> /session <br/> + one-time fees</p>
                            <Button>
                                Book Now
                            </Button>    

                        </div>   
                    </div>
                </div>
                
            </Tab>
        </Tabs>
    )
}

export default CoachProfileTabs;