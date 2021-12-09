// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";

const getTestItems = () => {
    return axios({
        url: "/test",
        method: 'get'
    })
};

const searchCoaches = (params) => {
    return axios({
        url: "/api/coaches/search",
        method: 'get',
        params,
    });
};

const getUser = (params) => {
    return axios({
        url: "/api/users/me",
        method: 'post',
        data: params,
    });
};

const getCoach = (params) => {
    return axios({
        url: "/api/coaches/" + params,
        method: 'get',
    });
};

const bookAppointment = (data) => {
    return axios({
        url: "/api/appointments/create_appointment/",
        method: "post",
        data: data
    })
}

const fetchAppointmentsOnDate = (date, slug) => {
    return axios({
        url: "/api/appointments/get_client_appointments_on_date",
        method: "get",
        params: {
            "date": date,
            "client_slug": slug,
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

const fetchScheduledSessions = (date, slug) => {
    return axios({
        url: "/api/appointments/get_upcoming_client_sessions/",
        method: "get",
        params: {
            "date": date,
            "client_slug": slug,
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

const fetchPreviousSessions = (date, slug) => {
    return axios({
        url: "/api/appointments/get_previous_client_sessions/",
        method: "get",
        params: {
            "date": date,
            "client_slug": slug,
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}

const createReview = (params) => {
    return axios({
        url: "/api/reviews/create/" + params.slug,
        method: "post",
        data: params
    })
}

const userServices = {
    getTestItems,
    searchCoaches,
    getUser,
    getCoach,
    createReview,
    bookAppointment,
    fetchAppointmentsOnDate, 
    fetchScheduledSessions,
    fetchPreviousSessions
};

export default userServices;