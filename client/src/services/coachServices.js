// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';

// Returns a list of availabilties in date format given the calendar object that is stored in DB
const parseCalendarForScheduler = (data) => {
    // convert each array into a json string that will be stored in our database: might need a better approach tb
    for (const [key, value] of Object.entries(data)) {
        data[key] = JSON.parse(value);
    }
    const mapping = {
        "sunday": 0,
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
    }
    // Need to get the next seven days
    let dates = [];
    let today = new Date();
    for (let i = 0; i < 7; i++) {
        let current = new Date(today);
        current.setDate(current.getDate() + i);
        let index = current.getDay();
        dates[index] = current;
    }   

    const availabilities = [];

    // iterate through data and append availabilities
    for (const [key, value] of Object.entries(data)) {
        const currentIndex = mapping[key];
        const availabilitiesForDay = value;
        availabilitiesForDay.forEach(time => {
            // Time in form of start - end. e.g (12 - 1)
            const split = time.split(" - ");
            const startTime = split[0];
            const currentDate = new Date(dates[currentIndex]);
            currentDate.setHours(startTime, 0, 0, 0);
            availabilities.push(currentDate);
        })
    } 
    return availabilities;
}


const formatCalendarForUpload = (availabilities) => {
    const scheduleObj = {
        "monday": [], 
        "tuesday": [], 
        "wednesday": [], 
        "thursday": [], 
        "friday": [], 
        "saturday": [], 
        "sunday": []
    };

    const mapping = {
        0: "sunday",
        1: "monday", 
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday"
    }

    availabilities.forEach(timeslot => {
        // returns int (0-6) indicating day of the week: Sunday = 0; Saturday = 6
        const dayInt = timeslot.getDay();
        // returns hour in day in miliatry time (0-23)
        const hours = timeslot.getHours();
        // returns string equivalent of day (0-6) e.g 0 ----> sunday
        const dayString = mapping[dayInt];

        // if user selects 12pm, then their availability is from 12pm-1pm ----> 12 - 13
        const formattedString = hours + " - " + (hours + 1)
        scheduleObj[dayString] = [...scheduleObj[dayString], formattedString]

    });

    // convert each array into a json string that will be stored in our database: might need a better approach tb
    for (const [key, value] of Object.entries(scheduleObj)) {
        scheduleObj[key] = JSON.stringify(value);
      }
    return scheduleObj;
}


const fetchAppointmentsOnDate = (date, slug) => {
    return new Promise((resolve, reject) => {
        axios({
            url: "/api/appointments/get_appointments_on_date/",
            method: "get",
            params: {
                "date": date,
                "coach_slug": slug,
                "session_completed": "False"
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.message)
        })
    })
}

const fetchAppointmentsBetweenDates = (start_date, end_date, slug) => {
    return new Promise((resolve, reject) => {
        axios({
            url: "/api/appointments/get_appointments_between_two_dates/",
            method: "get",
            params: {
                "start_date": start_date,
                "end_date": end_date,
                "coach_slug": slug,
                "session_completed": "False"
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.message)
        })
    })
}

const fetchUpcomingSessions = (slug) => {
    return axios({
        url: "/api/appointments/get_upcoming_sessions/",
        method: "get",
        params: {
            "coach_slug": slug,
        }
    }).then((res) => {
        return res.data;
    }).catch(err => {
        throw new Error(err.message);
    })
}

const fetchPastSessions = (slug) => {
    return axios({
        url: "/api/appointments/get_past_sessions/",
        method: "get",
        params: {
            "coach_slug": slug,
        }
    }).then((res) => {
        return res.data;
    }).catch(err => {
        throw new Error(err.message);
    })
}

const getCoachCalendar = (slug) => {
    return axios({
        url: "/api/calendars/get_calendar/" + slug + "/",
        method: "get",
    }).then((res) => {
        return res.data;
    }).catch(err => {
        throw new Error(err.message);
    })
}

const updateCoachCalendar = (newSchedule, slug) => {
    return axios({
        url: "/api/calendars/update_calendar/" + slug + "/", 
        method: "post",
        data: {schedule: newSchedule}
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        throw new Error(err.message);
    })
}

const editSessionCompletion = (appointment_id, status) => {
    return axios({
        url: "/api/appointments/edit_session_completion/",
        method: "post",
        data: {
            appointment_id: appointment_id, 
            session_completion_status: status
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        throw new Error(err.message);
    })
}

const cancelSession = (appointment_id) => {
    return axios({
        url: "/api/appointments/cancel_session/",
        method: "post",
        data: {
            appointment_id: appointment_id, 
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
        throw new Error(err.message);
    })
}

const coachServices = {
    getCoachCalendar,
    updateCoachCalendar,
    cancelSession,
    parseCalendarForScheduler,
    formatCalendarForUpload,
    fetchAppointmentsOnDate,
    fetchAppointmentsBetweenDates,
    fetchUpcomingSessions,
    fetchPastSessions,
    editSessionCompletion
};

export default coachServices;