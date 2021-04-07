import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import './index.css';

const SessionHistory = () => {

    return (
        <div className="history-table-container">
            <h3 className="history-header">Session History</h3>
            <div >
                <Table striped bordered hover variant="dark">
                    <thead className="history-table-header">
                        <tr>
                            <th>#</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Session Location</th>
                            <th>Completed</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody className="history-table-body">
                        <tr>
                            <td>1</td>
                            <td>Mark Otto </td>
                            <td>April 6th 2021</td>
                            <td>3:00 AM</td>
                            <td>Boston, MA</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob Thorn </td>
                            <td>April 5th 2021</td>
                            <td>11:00 AM</td>
                            <td>Boston, MA</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <hr/>
            <p>You must mark sessions as complete once finished to receive payment.</p>
            <div>
                <Table striped bordered hover variant="dark" className="history-table-client-history">
                    <thead className="history-table-header">
                        <tr >
                            <th>#</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>
                    <tbody className="history-table-body">
                        <tr className="history-table-row">
                            <td>1</td>
                            <td>102 Upham St </td>
                            <td>Melrose</td>
                            <td>MA</td>
                            <td>02176</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>112 Clarington Ave </td>
                            <td>Boston</td>
                            <td>MA</td>
                            <td>02215</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button>
                Save
            </Button>
        </div>
    )
}

export default SessionHistory;