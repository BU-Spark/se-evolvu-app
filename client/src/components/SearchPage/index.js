import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const SearchPage = (props) => {
    return (
        <div className="search-results-body container-fluid">
            <p style={{padding: "1rem", zIndex: "-1", background:""}}>
                You are searching for {props.location.state.focus} in {props.location.state.local}
            </p>
            <Row>
                <Col sm={3}>
                    Filter
                </Col>
                <Col sm={6}>
                    <div>
                        <ButtonToolbar
                            className="justify-content-between"
                            aria-label="Toolbar with Button groups"
                        >
                            <ButtonGroup aria-label="First group">
                                <Button variant="outline-secondary" style={{margin: "0.5rem", borderRadius: "0.25rem"}}>In-Person</Button>{' '}
                                <Button variant="outline-secondary" style={{margin: "0.5rem", borderRadius: "0.25rem"}}>Remote</Button>{' '}
                            </ButtonGroup>
                            <ButtonGroup aria-label="Second group">
                                <Button variant="outline-secondary" style={{margin: "0.5rem", borderRadius: "0.25rem"}}>List</Button>{' '}
                                <Button variant="outline-secondary" style={{margin: "0.5rem", borderRadius: "0.25rem"}}>Grid</Button>{' '}
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div>
                        Coach 1
                    </div>
                    <div>
                        Coach 1
                    </div>
                </Col>
                <Col sm={3}>
                    Sort
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage;