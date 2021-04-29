import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import adminServices from '../../../services/adminServices.js';

import "./index.css";

const AdminDashboard = () => {

    const [coachList, setCoachList] = useState([]);
    const [reviewList, setReviewList] = useState([]);

    const isAdmin = useSelector(state => state.authReducer.admin);
    const name = useSelector(state => state.userReducer.first_name);

    const getCoaches = () => {
        adminServices.getCoachList().then((res) => {
            setCoachList(res.results)
        })
    }
    const getReviews = () => {
        adminServices.getReview().then((res) => {
            setReviewList(res.results)
        })
    }

    const onClick = (e, slug, obj) => {
        e.preventDefault();
        adminServices.updateCoach(obj, slug).then(() => {
            let updatedList = coachList.filter((coach) => coach.slug !== slug);
            setCoachList(updatedList);
        });
    }

    const approveReview = (e, coach, reviewer) => {
        console.log(coach, reviewer)
        e.preventDefault();
        adminServices.approveReview({ coach: coach, reviewer: reviewer}).then(() => {
            let updatedList = reviewList.filter((review) => review.coach !== coach);
            setReviewList(updatedList);
        });
    }

    useEffect(() => {
        getCoaches();
        getReviews();
    }, [])

    if (!isAdmin) {
        <Redirect to="/error"/>
    }

    return (
        <div id="admin-panel-container" className="container">
            <h3>Welcome to the Admin Panel, {name}</h3>
            <div className="history-table-container">
                <h3 className="history-header">Pending Coaches</h3>
                <div >
                    <Table striped bordered variant="dark" id="payment-table">
                        <thead className="payment-history-table-header">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Background Check</th>
                                <th>Approval</th>
                            </tr>
                        </thead>
                        <tbody className="payment-history-table-body">
                            {coachList.map(obj => (
                                <tr key={obj.slug}>
                                    <td>{obj.first_name} </td>
                                    <td>{obj.last_name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.travel ? "Completed" : "Pending" }</td>
                                    <td>
                                        <Button onClick={e => onClick(e, obj.slug, { travel: true})}>Accept</Button> {' '}
                                        <Button variant="danger" onClick={e => onClick(e, obj.slug, { is_rejected: true})}>Reject</Button>
                                    </td>
                                </tr> 
                            ))}          
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="history-table-container">
                <h3 className="history-header">Pending Reviews</h3>
                <div >
                    <Table striped bordered variant="dark" id="payment-table">
                        <thead className="payment-history-table-header">
                            <tr>
                                <th>Coach</th>
                                <th>Client</th>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Approval</th>
                            </tr>
                        </thead>
                        <tbody className="payment-history-table-body">
                            {reviewList.map(obj => (
                                    <tr key={obj.coach}>
                                        <td>{obj.coach} </td>
                                        <td>{obj.reviewer}</td>
                                        <td>{obj.rating}/5</td>
                                        <td>{obj.body}</td>
                                        <td>
                                            <Button onClick={e => approveReview(e, obj.coach, obj.reviewer)}>Accept</Button> {' '}
                                            <Button variant="danger" onClick={e => onClick(e, obj.slug, { is_rejected: true})}>Reject</Button>
                                        </td>
                                    </tr> 
                            ))}  
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
};

export default AdminDashboard;