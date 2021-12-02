import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/esm/Button';
import SidebarWrapper from '../../Sidebar/SidebarWrapper/index.js';
import AvailabilitySelector from '../../../AvailabilitySelector/index.js';
import coachServices from '../../../../services/coachServices.js';
import { useSelector, useDispatch } from 'react-redux';
import './index.css'

const CoachCalendar = () => {
    const coachSlug = useSelector(state => state.authReducer.slug);

    const [initialSchedule, setInitialSchedule] = useState([]);

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

    useEffect(() => {
        getCoachAvailability();
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
                <Button variant="link">Edit Availability</Button>
            </div>
            <div id="calendar-container">
                {initialSchedule.length > 0 ? <AvailabilitySelector 
                    schedule={initialSchedule} 
                    onChangeSchedule={handleSave} 
                    title={"Edit your general availability"}
                /> : <div></div> }
            </div>
        </SidebarWrapper>
    )
}

export default CoachCalendar;