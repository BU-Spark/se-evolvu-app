import { Calendar, dateFnsLocalizer, Views} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US';

import "react-big-calendar/lib/css/react-big-calendar.css";

// const events = [{
//   id: 0,
//   title: 'Session with Gagandeep',
//   start: new Date(2021, 11, 2, 10),
//   end: new Date(2021, 11, 2, 11),
// },
// ]

const locales = {
    'en-US': enUS,
}
  
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const CalendarComponent = ({appointments, handleNavigate}) => {
  const formatStringIntoDate = (date, time) => {
    const [year, month, day] = date.split("-");
    const [hours, minutes] = time.split(":");
    const formatted_date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes));
    return formatted_date
  
  }

  const formatAppointmentsIntoEvents = (appointments) => {
    const events = [];
    // Events object looks like {"id", "title", "start", "end"}
    appointments.forEach(obj => {
      const eventObject = {};
      const start = formatStringIntoDate(obj['date'], obj['start_time']);
      const end = formatStringIntoDate(obj['date'], obj['end_time']);
      const first_name = obj['client_first_name'];
      const last_name = obj['client_last_name'];
      eventObject["start"] = start;
      eventObject["end"] = end;
      eventObject["title"] = `Session with ${first_name} ${last_name}`;
      events.push(eventObject);
    });
    return events;
  }
    return (
        <Calendar
          localizer={localizer}
          views={["day"]}
          defaultView={Views.DAY}
          events={formatAppointmentsIntoEvents(appointments)}
          onNavigate={(date) => handleNavigate(date)}
          style={{ height: "50vh" }}
        />
    )
}

export default CalendarComponent;
