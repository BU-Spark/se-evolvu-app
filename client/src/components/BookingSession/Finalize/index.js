import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const Finalize = (
    {
        handlePrev,
        handleSubmit
}) => {
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">

        <div style={{"textAlign": "left", "fontWeight": "bold"}}>
                <h2>Order Summary</h2>
        </div>
        <br/>
        <div id = "page3Descriptor">
            <div id="questionCol" className = "col-sm-12 mx-1"> 
            <Table>
                <tbody>
                    <tr>
                    <td>1 Remote Session for up to 1 client</td>
                    <td>$75.00</td>
                    </tr>
                    <tr>
                    <td>Service Fee</td>
                    <td>$11.25</td>
                    </tr>
                    <tr>
                    <td>Enroll me in automatic, reoccurring sessions</td>
                    <td>No</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td>$86.25</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>        
        <br/>
        <br/>

        <div style={{ borderTop: "2px solid #cacaca"}}></div>
        <br/>

        <div id = "questionsRow" className = "d-flex row">
            <div style={{"textAlign": "left;", "fontWeight": "bold"}}>
                <h2>Payment (Stripe UI)</h2>
            </div>

        </div>

        <br/>
        <br/>

        <div style={{marginTop: "5%"}}>
            <Button variant = "dark"  onClick={handlePrev} style = {{float: "left"}}>
                Back
            </Button>
            <Button variant = "dark"  onClick={handleSubmit}

                style = {{float: "right"}}>
                Submit
            </Button>
            <p style={{marginLeft: "10%", marginRight: "10%"}}>
            Please note upon checkout we will place an authorization hold on your account. This charge typically appears as “pending”. 
            </p>    
        </div>          
    </div>
    )
}


export default Finalize;