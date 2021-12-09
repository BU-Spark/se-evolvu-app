import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import SidebarWrapper from '../../Sidebar/SidebarWrapper/index.js';
import coachServices from '../../../../services/coachServices.js';
import TableComponent from '../../../TableComponent/index.js';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

const SessionHistory = () => {
    const dispatch = useDispatch();
    const coachSlug = useSelector(state => state.authReducer.slug);
    const message = useSelector(state => state.messageReducer.message);
    const [past, setPast] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSessions = async () => {
        try {
            const upcoming = await coachServices.fetchUpcomingSessions(coachSlug);
            const past = await coachServices.fetchPastSessions(coachSlug);
            setPast(past);
            setUpcoming(upcoming);

        } catch (error) {
            console.log(error);

        }
        setLoading(false);
        
    }

    const handleSessionCompletedToggle = async (rowData) => {
        try {
            const appointment_id = rowData["appointment_id"];
            const status = !rowData['session_completed'];
            const response = await coachServices.editSessionCompletion(appointment_id, status);
            fetchSessions();
        } catch (error) {
            console.log(error);
        }

    }

    const handleSessionCancel = async (rowData) => {
        try {
            const appointment_id = rowData["appointment_id"];
            const response = await coachServices.cancelSession(appointment_id);
            fetchSessions();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSessions();
    }, []);



    return (
        <SidebarWrapper>
            <div className="history-table-container">
                { message && (
                    <Alert variant="danger">
                        {message}
                    </Alert>
                )}
                <h3 className="history-header">Upcoming Sessions</h3>
                <TableComponent 
                    data={upcoming}
                    loading={loading}
                    attributes={['appointment_id', 'client', 'client_email', 'date', 'start_time', 'session_completed', 'cancel']}    
                    handleSessionCompletedToggle={handleSessionCompletedToggle}
                    handleSessionCancel={handleSessionCancel}
                    cellWidth={200}
                />                    
                <hr/>
                <h3 className="history-header">Past Sessions</h3>
                <TableComponent 
                    data={past}
                    loading={loading}
                    attributes={['appointment_id', 'client', 'client_email', 'date', 'start_time']}    
                    handleSessionCompletedToggle={handleSessionCompletedToggle}
                    cellWidth={300}
                /> 
            </div>

        </SidebarWrapper>
    )
}

export default SessionHistory;