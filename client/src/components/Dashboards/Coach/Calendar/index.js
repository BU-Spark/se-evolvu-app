import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';
import SidebarWrapper from '../../Sidebar/CoachSidebar/SidebarWrapper/index';
import AvailabilitySelector from '../../../AvailabilitySelector/index.js';
import coachServices from '../../../../services/coachServices.js';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import BaseCalendar from '../../../BaseCalendar'
import './index.css'
                         
const CoachCalendar = () => {
    const coachSlug = useSelector(state => state.authReducer.slug);

    const [initialSchedule, setInitialSchedule] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleSave = async (newSchedule) => {
        try {
            const formattedSchedule = coachServices.formatCalendarForUpload(newSchedule);
            const response = await coachServices.updateCoachCalendar(formattedSchedule, coachSlug);   
        } catch (error) {
            console.log(error);
        }
    }

    const getCoachAvailability = async () => {
        try {
            const data = await coachServices.getCoachCalendar(coachSlug);
            const availabilities = coachServices.parseCalendarForScheduler(data);
            setInitialSchedule(availabilities); 
        } catch (error) {
            console.log(error);
        }
    }   

    const getCoachAppointments = async (date=currentDate) => {
        try {
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString();
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();
            const appointments = await coachServices.fetchAppointmentsBetweenDates(firstDay, lastDay, coachSlug);
            setAppointments(appointments)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCoachAvailability();
        getCoachAppointments();
    }, [])

    return (
        <SidebarWrapper>
            <div id="title-container">
                <h3 id="title-header">Calendar</h3>
                <div id="text-header">
                    <p>Successful health and wellness coaching starts with an accurate calendar. 
                        Clients will be able to see your general availability and choose an open slot, but will need to wait for you to accept their request. 
                    </p>
                    <br />
                    <p>Keep in mind, your chances of getting booked increase when you keep your weekly availability up-to-date.</p>
                </div>
            </div>
            <div id="options-container">
                <Tabs defaultActiveKey="availability" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="availability" title="Edit availability">
                        {initialSchedule.length > 0 ? <AvailabilitySelector 
                            schedule={initialSchedule} 
                            onChangeSchedule={handleSave} 
                            title={"Edit your general availability"}
                        /> : <div></div> }
                    </Tab>
                    <Tab eventKey="calendar" title="View your calendar">
                        <BaseCalendar 
                            appointments={appointments}
                            handleNavigate={getCoachAppointments}
                            views={["month", "week", "day"]}
                            defaultView={"month"}
                            height={"100vh"}
                        />
                    </Tab>
                </Tabs>
            </div>
        </SidebarWrapper>
    )
}

export default CoachCalendar;