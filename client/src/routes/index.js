
import UserDashboard from '../components/Dashboards/User/index.js';
import Homepage from '../components/Homepage/index.js';

// import CoachCalendar from '../components/Dashboards/Coach/Calendar/index.js'
// import CoachHistory from '../components/Dashboards/Coach/History/index.js'
// import CoachPayment from '../components/Dashboards/Coach/Payments/index.js'
// import CoachProfile from '../components/Dashboards/Coach/Calendar/index.js'
// import CoachDashboard from '../components/Dashboards/Coach/Calendar/index.js'

import CoachDash from '../components/Dashboards/Coach/Dashboard/index.js';
import CoachCalendar from '../components/Dashboards/Coach/Calendar/index.js';
import CoachProfileForm from '../components/Dashboards/Coach/Profile/index.js';
import SessionHistory from '../components/Dashboards/Coach/History/index.js';
import PaymentHistory from '../components/Dashboards/Coach/Payments/index.js';

const unprotectedRoutes = [
    {
        path: "/testing",
        component: Homepage
    }
];

const protectedRoutes = [
    {
        path: "/user/dashboard",
        component: UserDashboard
    },
    {
        path: "/coach/dashboard",
        component: CoachDash
    },
    {
        path: "/coach/calendar",
        component: CoachCalendar
    },
    {
        path: "/coach/history",
        component: SessionHistory
    },
    {
        path: "/coach/payment",
        component: PaymentHistory
    },
    {
        path: "/coach/profile",
        component: CoachProfileForm
    }

]

let routes = {
    unprotected: unprotectedRoutes,
    protected: protectedRoutes
}

export default routes;