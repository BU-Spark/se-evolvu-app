import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const CoachProfileForm = () => {

    return (
        <div>
            <h3 style={{textAlign: "left", margin: "1rem", color: "#779ECC"}}>Profile</h3>
            <Col style={{ margin: "1rem"}}>
                <Row style={{ background: "#F6F6F6", marginBottom: "1rem"}}>
                    <div style={{ width: "100%"}}>
                        <p style={{ background: "#7E9EC8", textAlign: "left", padding: "1rem", color: "white"}}>About You</p>
                        <div style={{ margin: "1rem"}}>
                            <div>
                                <p>Upload a Profile Photo</p> <br/>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>
                            </div>
                            <div>
                                <p>Upload Snapshot Photos</p> <br/>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>
                            </div>
                            
                        </div>
                    </div>
                </Row>
                <Row style={{ background: "#F6F6F6"}}>
                    <div style={{ width: "100%"}}>
                        <p style={{ background: "#7E9EC8", textAlign: "left", padding: "1rem", color: "white"}}>Contact and Bio</p>
                        <div style={{ margin: "1rem", width: "100%"}}>
                            <Form>
                                <Form.Row>
                                        <Col style={{ marginRight: "3rem"}} xs={5}>
                                            <Form.Group>
                                                <label>CPR/AER Certified?</label>
                                                <Form.Row style={{ justifyContent: "center", marginBottom: "1rem"}}>
                                                    <Form.Check inline label="Yes" type="radio" id={`inline-radio-1`} />
                                                    <Form.Check inline label="No" type="radio" id={`inline-radio-2`} />
                                                </Form.Row>
                                            </Form.Group>
                                            <Form.Row style={{ marginBottom: "1rem"}}>
                                                <label>Coaching Experience</label>
                                                <Form.Control
                                                    className="coach-profile-text-input"
                                                    id="inlineFormInput"
                                                    placeholder=""
                                                />
                                            </Form.Row>
                                        </Col>
                                        <Col xs={5}>
                                            <label htmlFor="inlineFormInput">
                                                Check any of the COVID-19 Safety Guidelines below that you follow:
                                            </label>
                                            <Form.Row style={{ marginBottom: "1rem"}}>
                                                <Form.Check
                                                    type="checkbox"
                                                    id="customControlAutosizing"
                                                    label="Wearing a mask during in-person sessions"
                                                    custom
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    id="customControlAutosizing"
                                                    label="Wear gloves during the job"
                                                    custom
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    id="customControlAutosizing"
                                                    label="Disinect all high contact areas"
                                                    custom
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    id="customControlAutosizing"
                                                    label="Social Distancing 3-6 feet when in-person"
                                                    custom
                                                />
                                            </Form.Row>
                                        </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginRight: "2rem"}} xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label>Credentials</label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="inlineFormInput"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label htmlFor="inlineFormInput" srOnly>
                                                What languages do you speak?
                                            </label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-language"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginRight: "2rem"}} xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label>Specialities/Focus</label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-specialty"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label htmlFor="inlineFormInput" srOnly>
                                                Brief Bio (1 sentence max.)
                                            </label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-bio"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginRight: "2rem"}} xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label>Instagram Username or URL</label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-specialty"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label htmlFor="inlineFormInput" srOnly>
                                                Career Highlight
                                            </label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-bio"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginRight: "2rem"}} xs={5}>
                                        <Form.Row style={{ marginBottom: "1rem"}}>
                                            <label>Facebook URL</label>
                                            <Form.Control
                                                className="coach-profile-text-input"
                                                id="coach-profile-specialty"
                                                placeholder=""
                                            />
                                        </Form.Row>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Form.Row>
                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>
                    </div>
                </Row>
            </Col>
        </div>
    )
}

export default CoachProfileForm;