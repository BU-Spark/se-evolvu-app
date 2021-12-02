import React, {useState} from 'react'
import ScheduleSelector from 'react-schedule-selector'
import { Button } from 'react-bootstrap'

import "./index.css"

const AvailabilitySelector = ({title, schedule, onChangeSchedule}) => {
    const [initialSchedule, setInitialSchedule] = useState(schedule.length > 0 ? schedule : []);
    const changeInitialSchedule = (newSchedule) => {
        setInitialSchedule(newSchedule);
    }

    const handleSave = () => {
        onChangeSchedule(initialSchedule);
    }

    return (
        <div>
            <div id = "title">
                    {title}
            </div>
            <ScheduleSelector
                    dateFormat={"dd"}
                    selection={initialSchedule}
                    numDays={7}
                    minTime={0}
                    maxTime={24}
                    hourlyChunks={1}
                    onChange={changeInitialSchedule}
        />
        <div id="submit-container">
            <Button onClick={handleSave}>Save</Button>
        </div>
        </div>
    )
}

export default AvailabilitySelector