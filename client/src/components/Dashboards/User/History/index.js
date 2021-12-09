import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import userServices from '../../../../services/userServices';
import coachServices from '../../../../services/coachServices'
import TableComponent from '../../../TableComponent/index.js';
import { useDispatch, useSelector } from 'react-redux';
import SidebarWrapper from '../../Sidebar/UserSidebar/SidebarWrapper';

import './index.css';

const SessionHistory = () => {
    const dispatch = useDispatch();
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    const slug = useSelector(state => state.authReducer.slug);
    const message = useSelector(state => state.messageReducer.message);
    const [upcoming, setUpcoming] = useState([]);
    const [past, setPast] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSessions = async () => {
        try {
            const upcoming = await userServices.fetchScheduledSessions(currentDate, slug);
            const past = await userServices.fetchPreviousSessions(currentDate, slug);
            console.log(upcoming, past)
            setUpcoming(upcoming);
            setPast(past);
        } catch (error) {
            console.log(error);

        }
        setLoading(false);
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
                    attributes={['appointment_id', 'coach', 'date', 'start_time', 'cancel']}    
                    cellWidth={200}
                    handleSessionCancel={handleSessionCancel}
                />                    
                <hr/>
                <h3 className="history-header">Past Sessions</h3>
                <TableComponent 
                    data={past}
                    loading={loading}
                    attributes={['appointment_id', 'coach', 'date', 'start_time']}    
                    cellWidth={300}
                    handleSessionCancel={handleSessionCancel}
                /> 
            </div>

        </SidebarWrapper>
    )
}

export default SessionHistory;