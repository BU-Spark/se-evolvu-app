import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import './index.css';

const PaymentHistory = () => {

    return (
        <div className="history-table-container">
            <h3 className="history-header">Payment History</h3>
            <div >
                <Table striped bordered hover variant="dark" id="payment-table">
                    <thead className="payment-history-table-header">
                        <tr>
                            <th>Package #</th>
                            <th>Client</th>
                            <th>Purchase Date</th>
                            <th>Package</th>
                            <th># of Sessions</th>
                            <th>Total Package Rate</th>
                            <th>Date Completed</th>
                            <th>Earnings</th>

                        </tr>
                    </thead>
                    <tbody className="payment-history-table-body">
                        <tr>
                            <td>1</td>
                            <td>Mark Otto </td>
                            <td>April 6th 2021</td>
                            <td>3:00 AM</td>
                            <td>Boston, MA</td>
                            <td>$100.00</td>
                            <td>Incomplete</td>
                            <td>$80.00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob Thorn </td>
                            <td>April 5th 2021</td>
                            <td>11:00 AM</td>
                            <td>Boston, MA</td>
                            <td>$100.00</td>
                            <td>Incomplete</td>
                            <td>$80.00</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default PaymentHistory;